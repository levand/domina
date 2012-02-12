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
var or__3548__auto____7255 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{var or__3548__auto____7256 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7256))
{return or__3548__auto____7256;
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
var _invoke__7506 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7261 = this$;

if(cljs.core.truth_(and__3546__auto____7261))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7261;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
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
var _invoke__7507 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = this$;

if(cljs.core.truth_(and__3546__auto____7265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7267 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{var or__3548__auto____7269 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7509 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7271 = this$;

if(cljs.core.truth_(and__3546__auto____7271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7273 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{var or__3548__auto____7275 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7510 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7285 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{var or__3548__auto____7287 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7511 = (function (this$,a,b,c,d){
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
{var or__3548__auto____7296 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7513 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7302 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7302))
{return or__3548__auto____7302;
} else
{var or__3548__auto____7304 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7514 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7306 = this$;

if(cljs.core.truth_(and__3546__auto____7306))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7306;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7311 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{var or__3548__auto____7313 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7515 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7316 = this$;

if(cljs.core.truth_(and__3546__auto____7316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7516 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7328 = this$;

if(cljs.core.truth_(and__3546__auto____7328))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7328;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{var or__3548__auto____7334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7517 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = this$;

if(cljs.core.truth_(and__3546__auto____7337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7340 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{var or__3548__auto____7343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7519 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7345 = this$;

if(cljs.core.truth_(and__3546__auto____7345))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7345;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7520 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{var or__3548__auto____7359 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7521 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{var or__3548__auto____7370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7522 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{var or__3548__auto____7382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7523 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7385 = this$;

if(cljs.core.truth_(and__3546__auto____7385))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7385;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7524 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7394 = this$;

if(cljs.core.truth_(and__3546__auto____7394))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7394;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{var or__3548__auto____7398 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7526 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{var or__3548__auto____7411 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7527 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7415 = this$;

if(cljs.core.truth_(and__3546__auto____7415))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7415;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7528 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7529 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{var or__3548__auto____7439 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7530 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7506.call(this,this$);
case  2 :
return _invoke__7507.call(this,this$,a);
case  3 :
return _invoke__7509.call(this,this$,a,b);
case  4 :
return _invoke__7510.call(this,this$,a,b,c);
case  5 :
return _invoke__7511.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7513.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7514.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7515.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7516.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7517.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7519.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7520.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7521.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7522.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7523.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7524.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7526.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7527.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7528.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7529.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7530.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7659 = coll;

if(cljs.core.truth_(and__3546__auto____7659))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7659;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7660 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7660))
{return or__3548__auto____7660;
} else
{var or__3548__auto____7661 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7666 = coll;

if(cljs.core.truth_(and__3546__auto____7666))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7666;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7668 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{var or__3548__auto____7670 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7674 = coll;

if(cljs.core.truth_(and__3546__auto____7674))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7674;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7675 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
} else
{var or__3548__auto____7676 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
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
var _nth__7683 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7677 = coll;

if(cljs.core.truth_(and__3546__auto____7677))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7677;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
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
})().call(null,coll,n);
}
});
var _nth__7684 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7680 = coll;

if(cljs.core.truth_(and__3546__auto____7680))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7680;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7681 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7681))
{return or__3548__auto____7681;
} else
{var or__3548__auto____7682 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
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
return _nth__7683.call(this,coll,n);
case  3 :
return _nth__7684.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7689 = coll;

if(cljs.core.truth_(and__3546__auto____7689))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7689;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7690 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
} else
{var or__3548__auto____7691 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
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
{return (function (){var or__3548__auto____7693 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
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
var _lookup__7707 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7698 = o;

if(cljs.core.truth_(and__3546__auto____7698))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7698;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7702 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7708 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7704 = o;

if(cljs.core.truth_(and__3546__auto____7704))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7704;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7705 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{var or__3548__auto____7706 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
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
return _lookup__7707.call(this,o,k);
case  3 :
return _lookup__7708.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7728 = coll;

if(cljs.core.truth_(and__3546__auto____7728))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7728;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7730 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{var or__3548__auto____7731 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7731))
{return or__3548__auto____7731;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = coll;

if(cljs.core.truth_(and__3546__auto____7733))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7733;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7736 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7738 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7744 = coll;

if(cljs.core.truth_(and__3546__auto____7744))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7744;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7745 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{var or__3548__auto____7746 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7751;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7758 = coll;

if(cljs.core.truth_(and__3546__auto____7758))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7758;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7760 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{var or__3548__auto____7761 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7765 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7765))
{return or__3548__auto____7765;
} else
{var or__3548__auto____7766 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7766))
{return or__3548__auto____7766;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7774 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{var or__3548__auto____7778 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7779 = o;

if(cljs.core.truth_(and__3546__auto____7779))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7779;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7780 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{var or__3548__auto____7782 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = o;

if(cljs.core.truth_(and__3546__auto____7787))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7787;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7790 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = o;

if(cljs.core.truth_(and__3546__auto____7818))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7818;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7820 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{var or__3548__auto____7822 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7824 = o;

if(cljs.core.truth_(and__3546__auto____7824))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7824;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7828 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
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
var _reduce__7863 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7853 = coll;

if(cljs.core.truth_(and__3546__auto____7853))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7853;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7855 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7864 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7859 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
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
return _reduce__7863.call(this,coll,f);
case  3 :
return _reduce__7864.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = o;

if(cljs.core.truth_(and__3546__auto____7872))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7872;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7874 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7874))
{return or__3548__auto____7874;
} else
{var or__3548__auto____7875 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7878 = o;

if(cljs.core.truth_(and__3546__auto____7878))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7878;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{var or__3548__auto____7884 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = o;

if(cljs.core.truth_(and__3546__auto____7889))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7889;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7891 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{var or__3548__auto____7893 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
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
if(cljs.core.truth_((function (){var and__3546__auto____7906 = o;

if(cljs.core.truth_(and__3546__auto____7906))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7906;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7909 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{var or__3548__auto____7911 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7920 = d;

if(cljs.core.truth_(and__3546__auto____7920))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7920;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7922 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{var or__3548__auto____7924 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7933 = this$;

if(cljs.core.truth_(and__3546__auto____7933))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7933;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7934 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{var or__3548__auto____7935 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7937 = this$;

if(cljs.core.truth_(and__3546__auto____7937))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7937;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7941 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = this$;

if(cljs.core.truth_(and__3546__auto____7943))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7943;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7947 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
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
var G__7982 = null;
var G__7982__7983 = (function (o,k){
return null;
});
var G__7982__7984 = (function (o,k,not_found){
return not_found;
});
G__7982 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7982__7983.call(this,o,k);
case  3 :
return G__7982__7984.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7982;
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
var G__7986 = null;
var G__7986__7987 = (function (_,f){
return f.call(null);
});
var G__7986__7988 = (function (_,f,start){
return start;
});
G__7986 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7986__7987.call(this,_,f);
case  3 :
return G__7986__7988.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7986;
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
var G__7992 = null;
var G__7992__7993 = (function (_,n){
return null;
});
var G__7992__7994 = (function (_,n,not_found){
return not_found;
});
G__7992 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7992__7993.call(this,_,n);
case  3 :
return G__7992__7994.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7992;
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
var ci_reduce__8050 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8038 = cljs.core._nth.call(null,cicoll,0);
var n__8039 = 1;

while(true){
if(cljs.core.truth_((n__8039 < cljs.core._count.call(null,cicoll))))
{{
var G__8054 = f.call(null,val__8038,cljs.core._nth.call(null,cicoll,n__8039));
var G__8055 = (n__8039 + 1);
val__8038 = G__8054;
n__8039 = G__8055;
continue;
}
} else
{return val__8038;
}
break;
}
}
});
var ci_reduce__8051 = (function (cicoll,f,val){
var val__8042 = val;
var n__8043 = 0;

while(true){
if(cljs.core.truth_((n__8043 < cljs.core._count.call(null,cicoll))))
{{
var G__8057 = f.call(null,val__8042,cljs.core._nth.call(null,cicoll,n__8043));
var G__8059 = (n__8043 + 1);
val__8042 = G__8057;
n__8043 = G__8059;
continue;
}
} else
{return val__8042;
}
break;
}
});
var ci_reduce__8052 = (function (cicoll,f,val,idx){
var val__8046 = val;
var n__8047 = idx;

while(true){
if(cljs.core.truth_((n__8047 < cljs.core._count.call(null,cicoll))))
{{
var G__8080 = f.call(null,val__8046,cljs.core._nth.call(null,cicoll,n__8047));
var G__8081 = (n__8047 + 1);
val__8046 = G__8080;
n__8047 = G__8081;
continue;
}
} else
{return val__8046;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8050.call(this,cicoll,f);
case  3 :
return ci_reduce__8051.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8052.call(this,cicoll,f,val,idx);
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
var this__8092 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8146 = null;
var G__8146__8148 = (function (_,f){
var this__8094 = this;
return cljs.core.ci_reduce.call(null,this__8094.a,f,(this__8094.a[this__8094.i]),(this__8094.i + 1));
});
var G__8146__8149 = (function (_,f,start){
var this__8099 = this;
return cljs.core.ci_reduce.call(null,this__8099.a,f,start,this__8099.i);
});
G__8146 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8146__8148.call(this,_,f);
case  3 :
return G__8146__8149.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8146;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8102 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8127 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8153 = null;
var G__8153__8154 = (function (coll,n){
var this__8130 = this;
var i__8131 = (n + this__8130.i);

if(cljs.core.truth_((i__8131 < this__8130.a.length)))
{return (this__8130.a[i__8131]);
} else
{return null;
}
});
var G__8153__8155 = (function (coll,n,not_found){
var this__8132 = this;
var i__8134 = (n + this__8132.i);

if(cljs.core.truth_((i__8134 < this__8132.a.length)))
{return (this__8132.a[i__8134]);
} else
{return not_found;
}
});
G__8153 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8153__8154.call(this,coll,n);
case  3 :
return G__8153__8155.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8153;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8135 = this;
return (this__8135.a.length - this__8135.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8137 = this;
return (this__8137.a[this__8137.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8138 = this;
if(cljs.core.truth_(((this__8138.i + 1) < this__8138.a.length)))
{return (new cljs.core.IndexedSeq(this__8138.a,(this__8138.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8145 = this;
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
var G__8188 = null;
var G__8188__8189 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8188__8190 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8188 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8188__8189.call(this,array,f);
case  3 :
return G__8188__8190.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8188;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8194 = null;
var G__8194__8195 = (function (array,k){
return (array[k]);
});
var G__8194__8196 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8194 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8194__8195.call(this,array,k);
case  3 :
return G__8194__8196.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8194;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8200 = null;
var G__8200__8201 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8200__8202 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8200 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8200__8201.call(this,array,n);
case  3 :
return G__8200__8202.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8200;
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
var temp__3698__auto____8208 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8208))
{var s__8209 = temp__3698__auto____8208;

return cljs.core._first.call(null,s__8209);
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
var G__8246 = cljs.core.next.call(null,s);
s = G__8246;
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
var s__8248 = cljs.core.seq.call(null,x);
var n__8249 = 0;

while(true){
if(cljs.core.truth_(s__8248))
{{
var G__8252 = cljs.core.next.call(null,s__8248);
var G__8253 = (n__8249 + 1);
s__8248 = G__8252;
n__8249 = G__8253;
continue;
}
} else
{return n__8249;
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
var conj__8257 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8258 = (function() { 
var G__8260__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8261 = conj.call(null,coll,x);
var G__8262 = cljs.core.first.call(null,xs);
var G__8263 = cljs.core.next.call(null,xs);
coll = G__8261;
x = G__8262;
xs = G__8263;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8260 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8260__delegate.call(this, coll, x, xs);
};
G__8260.cljs$lang$maxFixedArity = 2;
G__8260.cljs$lang$applyTo = (function (arglist__8265){
var coll = cljs.core.first(arglist__8265);
var x = cljs.core.first(cljs.core.next(arglist__8265));
var xs = cljs.core.rest(cljs.core.next(arglist__8265));
return G__8260__delegate.call(this, coll, x, xs);
});
return G__8260;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8257.call(this,coll,x);
default:
return conj__8258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8258.cljs$lang$applyTo;
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
var nth__8271 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8272 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8271.call(this,coll,n);
case  3 :
return nth__8272.call(this,coll,n,not_found);
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
var get__8275 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8276 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8275.call(this,o,k);
case  3 :
return get__8276.call(this,o,k,not_found);
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
var assoc__8285 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8286 = (function() { 
var G__8289__delegate = function (coll,k,v,kvs){
while(true){
var ret__8281 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8291 = ret__8281;
var G__8292 = cljs.core.first.call(null,kvs);
var G__8293 = cljs.core.second.call(null,kvs);
var G__8294 = cljs.core.nnext.call(null,kvs);
coll = G__8291;
k = G__8292;
v = G__8293;
kvs = G__8294;
continue;
}
} else
{return ret__8281;
}
break;
}
};
var G__8289 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8289__delegate.call(this, coll, k, v, kvs);
};
G__8289.cljs$lang$maxFixedArity = 3;
G__8289.cljs$lang$applyTo = (function (arglist__8298){
var coll = cljs.core.first(arglist__8298);
var k = cljs.core.first(cljs.core.next(arglist__8298));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8298)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8298)));
return G__8289__delegate.call(this, coll, k, v, kvs);
});
return G__8289;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8285.call(this,coll,k,v);
default:
return assoc__8286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8286.cljs$lang$applyTo;
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
var dissoc__8331 = (function (coll){
return coll;
});
var dissoc__8332 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8333 = (function() { 
var G__8335__delegate = function (coll,k,ks){
while(true){
var ret__8330 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8336 = ret__8330;
var G__8337 = cljs.core.first.call(null,ks);
var G__8338 = cljs.core.next.call(null,ks);
coll = G__8336;
k = G__8337;
ks = G__8338;
continue;
}
} else
{return ret__8330;
}
break;
}
};
var G__8335 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8335__delegate.call(this, coll, k, ks);
};
G__8335.cljs$lang$maxFixedArity = 2;
G__8335.cljs$lang$applyTo = (function (arglist__8339){
var coll = cljs.core.first(arglist__8339);
var k = cljs.core.first(cljs.core.next(arglist__8339));
var ks = cljs.core.rest(cljs.core.next(arglist__8339));
return G__8335__delegate.call(this, coll, k, ks);
});
return G__8335;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8331.call(this,coll);
case  2 :
return dissoc__8332.call(this,coll,k);
default:
return dissoc__8333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8333.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8344 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8345 = x__445__auto____8344;

if(cljs.core.truth_(and__3546__auto____8345))
{var and__3546__auto____8346 = x__445__auto____8344.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8346))
{return cljs.core.not.call(null,x__445__auto____8344.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8346;
}
} else
{return and__3546__auto____8345;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8344);
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
var disj__8348 = (function (coll){
return coll;
});
var disj__8349 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8350 = (function() { 
var G__8352__delegate = function (coll,k,ks){
while(true){
var ret__8347 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8353 = ret__8347;
var G__8354 = cljs.core.first.call(null,ks);
var G__8355 = cljs.core.next.call(null,ks);
coll = G__8353;
k = G__8354;
ks = G__8355;
continue;
}
} else
{return ret__8347;
}
break;
}
};
var G__8352 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8352__delegate.call(this, coll, k, ks);
};
G__8352.cljs$lang$maxFixedArity = 2;
G__8352.cljs$lang$applyTo = (function (arglist__8356){
var coll = cljs.core.first(arglist__8356);
var k = cljs.core.first(cljs.core.next(arglist__8356));
var ks = cljs.core.rest(cljs.core.next(arglist__8356));
return G__8352__delegate.call(this, coll, k, ks);
});
return G__8352;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8348.call(this,coll);
case  2 :
return disj__8349.call(this,coll,k);
default:
return disj__8350.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8350.cljs$lang$applyTo;
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
{var x__445__auto____8367 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8368 = x__445__auto____8367;

if(cljs.core.truth_(and__3546__auto____8368))
{var and__3546__auto____8369 = x__445__auto____8367.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8369))
{return cljs.core.not.call(null,x__445__auto____8367.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8369;
}
} else
{return and__3546__auto____8368;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8367);
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
{var x__445__auto____8374 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8375 = x__445__auto____8374;

if(cljs.core.truth_(and__3546__auto____8375))
{var and__3546__auto____8376 = x__445__auto____8374.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8376))
{return cljs.core.not.call(null,x__445__auto____8374.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8376;
}
} else
{return and__3546__auto____8375;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8374);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8377 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8378 = x__445__auto____8377;

if(cljs.core.truth_(and__3546__auto____8378))
{var and__3546__auto____8379 = x__445__auto____8377.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8379))
{return cljs.core.not.call(null,x__445__auto____8377.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8379;
}
} else
{return and__3546__auto____8378;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8377);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8384 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8385 = x__445__auto____8384;

if(cljs.core.truth_(and__3546__auto____8385))
{var and__3546__auto____8386 = x__445__auto____8384.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8386))
{return cljs.core.not.call(null,x__445__auto____8384.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8386;
}
} else
{return and__3546__auto____8385;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8384);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8514 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8515 = x__445__auto____8514;

if(cljs.core.truth_(and__3546__auto____8515))
{var and__3546__auto____8516 = x__445__auto____8514.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8516))
{return cljs.core.not.call(null,x__445__auto____8514.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8516;
}
} else
{return and__3546__auto____8515;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8514);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8520 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8521 = x__445__auto____8520;

if(cljs.core.truth_(and__3546__auto____8521))
{var and__3546__auto____8522 = x__445__auto____8520.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8522))
{return cljs.core.not.call(null,x__445__auto____8520.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8522;
}
} else
{return and__3546__auto____8521;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8520);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8526 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8527 = x__445__auto____8526;

if(cljs.core.truth_(and__3546__auto____8527))
{var and__3546__auto____8529 = x__445__auto____8526.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8529))
{return cljs.core.not.call(null,x__445__auto____8526.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8529;
}
} else
{return and__3546__auto____8527;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8526);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8539 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8539.push(key);
}));
return keys__8539;
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
{var x__445__auto____8557 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8559 = x__445__auto____8557;

if(cljs.core.truth_(and__3546__auto____8559))
{var and__3546__auto____8563 = x__445__auto____8557.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8563))
{return cljs.core.not.call(null,x__445__auto____8557.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8563;
}
} else
{return and__3546__auto____8559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8557);
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
var and__3546__auto____8569 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8569))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8638 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8638))
{return or__3548__auto____8638;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8569;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8643 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8643))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8643;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8646 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8646))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8646;
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
var and__3546__auto____8661 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8661))
{return (n == n.toFixed());
} else
{return and__3546__auto____8661;
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
if(cljs.core.truth_((function (){var and__3546__auto____8677 = coll;

if(cljs.core.truth_(and__3546__auto____8677))
{var and__3546__auto____8678 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8678))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8678;
}
} else
{return and__3546__auto____8677;
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
var distinct_QMARK___8694 = (function (x){
return true;
});
var distinct_QMARK___8695 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8696 = (function() { 
var G__8699__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8687 = cljs.core.set([y,x]);
var xs__8688 = more;

while(true){
var x__8690 = cljs.core.first.call(null,xs__8688);
var etc__8691 = cljs.core.next.call(null,xs__8688);

if(cljs.core.truth_(xs__8688))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8687,x__8690)))
{return false;
} else
{{
var G__8701 = cljs.core.conj.call(null,s__8687,x__8690);
var G__8702 = etc__8691;
s__8687 = G__8701;
xs__8688 = G__8702;
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
var G__8699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8699__delegate.call(this, x, y, more);
};
G__8699.cljs$lang$maxFixedArity = 2;
G__8699.cljs$lang$applyTo = (function (arglist__8703){
var x = cljs.core.first(arglist__8703);
var y = cljs.core.first(cljs.core.next(arglist__8703));
var more = cljs.core.rest(cljs.core.next(arglist__8703));
return G__8699__delegate.call(this, x, y, more);
});
return G__8699;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8694.call(this,x);
case  2 :
return distinct_QMARK___8695.call(this,x,y);
default:
return distinct_QMARK___8696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8696.cljs$lang$applyTo;
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
var r__8713 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8713)))
{return r__8713;
} else
{if(cljs.core.truth_(r__8713))
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
var sort__8735 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8736 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8731 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8731,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8731);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8735.call(this,comp);
case  2 :
return sort__8736.call(this,comp,coll);
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
var sort_by__8765 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8766 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8765.call(this,keyfn,comp);
case  3 :
return sort_by__8766.call(this,keyfn,comp,coll);
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
var reduce__8773 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8774 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8773.call(this,f,val);
case  3 :
return reduce__8774.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8792 = (function (f,coll){
var temp__3695__auto____8784 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8784))
{var s__8785 = temp__3695__auto____8784;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8785),cljs.core.next.call(null,s__8785));
} else
{return f.call(null);
}
});
var seq_reduce__8793 = (function (f,val,coll){
var val__8786 = val;
var coll__8787 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8787))
{{
var G__8799 = f.call(null,val__8786,cljs.core.first.call(null,coll__8787));
var G__8801 = cljs.core.next.call(null,coll__8787);
val__8786 = G__8799;
coll__8787 = G__8801;
continue;
}
} else
{return val__8786;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8792.call(this,f,val);
case  3 :
return seq_reduce__8793.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8813 = null;
var G__8813__8814 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8813__8815 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8813 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8813__8814.call(this,coll,f);
case  3 :
return G__8813__8815.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8813;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8826 = (function (){
return 0;
});
var _PLUS___8827 = (function (x){
return x;
});
var _PLUS___8828 = (function (x,y){
return (x + y);
});
var _PLUS___8829 = (function() { 
var G__8831__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8831 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8831__delegate.call(this, x, y, more);
};
G__8831.cljs$lang$maxFixedArity = 2;
G__8831.cljs$lang$applyTo = (function (arglist__8832){
var x = cljs.core.first(arglist__8832);
var y = cljs.core.first(cljs.core.next(arglist__8832));
var more = cljs.core.rest(cljs.core.next(arglist__8832));
return G__8831__delegate.call(this, x, y, more);
});
return G__8831;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8826.call(this);
case  1 :
return _PLUS___8827.call(this,x);
case  2 :
return _PLUS___8828.call(this,x,y);
default:
return _PLUS___8829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8829.cljs$lang$applyTo;
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
var ___8846 = (function (x){
return (- x);
});
var ___8847 = (function (x,y){
return (x - y);
});
var ___8848 = (function() { 
var G__8854__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8854 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8854__delegate.call(this, x, y, more);
};
G__8854.cljs$lang$maxFixedArity = 2;
G__8854.cljs$lang$applyTo = (function (arglist__8859){
var x = cljs.core.first(arglist__8859);
var y = cljs.core.first(cljs.core.next(arglist__8859));
var more = cljs.core.rest(cljs.core.next(arglist__8859));
return G__8854__delegate.call(this, x, y, more);
});
return G__8854;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8846.call(this,x);
case  2 :
return ___8847.call(this,x,y);
default:
return ___8848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8848.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8860 = (function (){
return 1;
});
var _STAR___8861 = (function (x){
return x;
});
var _STAR___8862 = (function (x,y){
return (x * y);
});
var _STAR___8863 = (function() { 
var G__8868__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8868 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8868__delegate.call(this, x, y, more);
};
G__8868.cljs$lang$maxFixedArity = 2;
G__8868.cljs$lang$applyTo = (function (arglist__8871){
var x = cljs.core.first(arglist__8871);
var y = cljs.core.first(cljs.core.next(arglist__8871));
var more = cljs.core.rest(cljs.core.next(arglist__8871));
return G__8868__delegate.call(this, x, y, more);
});
return G__8868;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8860.call(this);
case  1 :
return _STAR___8861.call(this,x);
case  2 :
return _STAR___8862.call(this,x,y);
default:
return _STAR___8863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8863.cljs$lang$applyTo;
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
var _SLASH___8879 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8880 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8881 = (function() { 
var G__8885__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8885 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8885__delegate.call(this, x, y, more);
};
G__8885.cljs$lang$maxFixedArity = 2;
G__8885.cljs$lang$applyTo = (function (arglist__8891){
var x = cljs.core.first(arglist__8891);
var y = cljs.core.first(cljs.core.next(arglist__8891));
var more = cljs.core.rest(cljs.core.next(arglist__8891));
return G__8885__delegate.call(this, x, y, more);
});
return G__8885;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8879.call(this,x);
case  2 :
return _SLASH___8880.call(this,x,y);
default:
return _SLASH___8881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8881.cljs$lang$applyTo;
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
var _LT___8896 = (function (x){
return true;
});
var _LT___8897 = (function (x,y){
return (x < y);
});
var _LT___8898 = (function() { 
var G__8900__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8902 = y;
var G__8903 = cljs.core.first.call(null,more);
var G__8904 = cljs.core.next.call(null,more);
x = G__8902;
y = G__8903;
more = G__8904;
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
var G__8900 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8900__delegate.call(this, x, y, more);
};
G__8900.cljs$lang$maxFixedArity = 2;
G__8900.cljs$lang$applyTo = (function (arglist__8906){
var x = cljs.core.first(arglist__8906);
var y = cljs.core.first(cljs.core.next(arglist__8906));
var more = cljs.core.rest(cljs.core.next(arglist__8906));
return G__8900__delegate.call(this, x, y, more);
});
return G__8900;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8896.call(this,x);
case  2 :
return _LT___8897.call(this,x,y);
default:
return _LT___8898.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8898.cljs$lang$applyTo;
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
var _LT__EQ___8916 = (function (x){
return true;
});
var _LT__EQ___8917 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8918 = (function() { 
var G__8921__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8922 = y;
var G__8923 = cljs.core.first.call(null,more);
var G__8924 = cljs.core.next.call(null,more);
x = G__8922;
y = G__8923;
more = G__8924;
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
var G__8921 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8921__delegate.call(this, x, y, more);
};
G__8921.cljs$lang$maxFixedArity = 2;
G__8921.cljs$lang$applyTo = (function (arglist__8925){
var x = cljs.core.first(arglist__8925);
var y = cljs.core.first(cljs.core.next(arglist__8925));
var more = cljs.core.rest(cljs.core.next(arglist__8925));
return G__8921__delegate.call(this, x, y, more);
});
return G__8921;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8916.call(this,x);
case  2 :
return _LT__EQ___8917.call(this,x,y);
default:
return _LT__EQ___8918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8918.cljs$lang$applyTo;
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
var _GT___9036 = (function (x){
return true;
});
var _GT___9037 = (function (x,y){
return (x > y);
});
var _GT___9038 = (function() { 
var G__9040__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9041 = y;
var G__9042 = cljs.core.first.call(null,more);
var G__9044 = cljs.core.next.call(null,more);
x = G__9041;
y = G__9042;
more = G__9044;
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
var G__9040 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9040__delegate.call(this, x, y, more);
};
G__9040.cljs$lang$maxFixedArity = 2;
G__9040.cljs$lang$applyTo = (function (arglist__9052){
var x = cljs.core.first(arglist__9052);
var y = cljs.core.first(cljs.core.next(arglist__9052));
var more = cljs.core.rest(cljs.core.next(arglist__9052));
return G__9040__delegate.call(this, x, y, more);
});
return G__9040;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9036.call(this,x);
case  2 :
return _GT___9037.call(this,x,y);
default:
return _GT___9038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9038.cljs$lang$applyTo;
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
var _GT__EQ___9058 = (function (x){
return true;
});
var _GT__EQ___9059 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9060 = (function() { 
var G__9066__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9067 = y;
var G__9068 = cljs.core.first.call(null,more);
var G__9069 = cljs.core.next.call(null,more);
x = G__9067;
y = G__9068;
more = G__9069;
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
var G__9066 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9066__delegate.call(this, x, y, more);
};
G__9066.cljs$lang$maxFixedArity = 2;
G__9066.cljs$lang$applyTo = (function (arglist__9071){
var x = cljs.core.first(arglist__9071);
var y = cljs.core.first(cljs.core.next(arglist__9071));
var more = cljs.core.rest(cljs.core.next(arglist__9071));
return G__9066__delegate.call(this, x, y, more);
});
return G__9066;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9058.call(this,x);
case  2 :
return _GT__EQ___9059.call(this,x,y);
default:
return _GT__EQ___9060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9060.cljs$lang$applyTo;
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
var max__9080 = (function (x){
return x;
});
var max__9081 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9082 = (function() { 
var G__9085__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9085__delegate.call(this, x, y, more);
};
G__9085.cljs$lang$maxFixedArity = 2;
G__9085.cljs$lang$applyTo = (function (arglist__9086){
var x = cljs.core.first(arglist__9086);
var y = cljs.core.first(cljs.core.next(arglist__9086));
var more = cljs.core.rest(cljs.core.next(arglist__9086));
return G__9085__delegate.call(this, x, y, more);
});
return G__9085;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9080.call(this,x);
case  2 :
return max__9081.call(this,x,y);
default:
return max__9082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9082.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9090 = (function (x){
return x;
});
var min__9091 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9092 = (function() { 
var G__9094__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9094 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9094__delegate.call(this, x, y, more);
};
G__9094.cljs$lang$maxFixedArity = 2;
G__9094.cljs$lang$applyTo = (function (arglist__9098){
var x = cljs.core.first(arglist__9098);
var y = cljs.core.first(cljs.core.next(arglist__9098));
var more = cljs.core.rest(cljs.core.next(arglist__9098));
return G__9094__delegate.call(this, x, y, more);
});
return G__9094;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9090.call(this,x);
case  2 :
return min__9091.call(this,x,y);
default:
return min__9092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9092.cljs$lang$applyTo;
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
var rem__9109 = (n % d);

return cljs.core.fix.call(null,((n - rem__9109) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9117 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9117));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9121 = (function (){
return Math.random.call(null);
});
var rand__9122 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9121.call(this);
case  1 :
return rand__9122.call(this,n);
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
var _EQ__EQ___9245 = (function (x){
return true;
});
var _EQ__EQ___9246 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9247 = (function() { 
var G__9250__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9251 = y;
var G__9252 = cljs.core.first.call(null,more);
var G__9253 = cljs.core.next.call(null,more);
x = G__9251;
y = G__9252;
more = G__9253;
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
G__9250.cljs$lang$applyTo = (function (arglist__9258){
var x = cljs.core.first(arglist__9258);
var y = cljs.core.first(cljs.core.next(arglist__9258));
var more = cljs.core.rest(cljs.core.next(arglist__9258));
return G__9250__delegate.call(this, x, y, more);
});
return G__9250;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9245.call(this,x);
case  2 :
return _EQ__EQ___9246.call(this,x,y);
default:
return _EQ__EQ___9247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9247.cljs$lang$applyTo;
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
var n__9264 = n;
var xs__9276 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9278 = xs__9276;

if(cljs.core.truth_(and__3546__auto____9278))
{return (n__9264 > 0);
} else
{return and__3546__auto____9278;
}
})()))
{{
var G__9280 = (n__9264 - 1);
var G__9281 = cljs.core.next.call(null,xs__9276);
n__9264 = G__9280;
xs__9276 = G__9281;
continue;
}
} else
{return xs__9276;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9292 = null;
var G__9292__9377 = (function (coll,n){
var temp__3695__auto____9284 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9284))
{var xs__9286 = temp__3695__auto____9284;

return cljs.core.first.call(null,xs__9286);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9292__9378 = (function (coll,n,not_found){
var temp__3695__auto____9289 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9289))
{var xs__9291 = temp__3695__auto____9289;

return cljs.core.first.call(null,xs__9291);
} else
{return not_found;
}
});
G__9292 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9292__9377.call(this,coll,n);
case  3 :
return G__9292__9378.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9292;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9388 = (function (){
return "";
});
var str_STAR___9389 = (function (x){
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
var str_STAR___9390 = (function() { 
var G__9397__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9402 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9403 = cljs.core.next.call(null,more);
sb = G__9402;
more = G__9403;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9397 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9397__delegate.call(this, x, ys);
};
G__9397.cljs$lang$maxFixedArity = 1;
G__9397.cljs$lang$applyTo = (function (arglist__9405){
var x = cljs.core.first(arglist__9405);
var ys = cljs.core.rest(arglist__9405);
return G__9397__delegate.call(this, x, ys);
});
return G__9397;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9388.call(this);
case  1 :
return str_STAR___9389.call(this,x);
default:
return str_STAR___9390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9390.cljs$lang$applyTo;
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
var str__9407 = (function (){
return "";
});
var str__9408 = (function (x){
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
var str__9409 = (function() { 
var G__9421__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9421 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9421__delegate.call(this, x, ys);
};
G__9421.cljs$lang$maxFixedArity = 1;
G__9421.cljs$lang$applyTo = (function (arglist__9423){
var x = cljs.core.first(arglist__9423);
var ys = cljs.core.rest(arglist__9423);
return G__9421__delegate.call(this, x, ys);
});
return G__9421;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9407.call(this);
case  1 :
return str__9408.call(this,x);
default:
return str__9409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9409.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9432 = (function (s,start){
return s.substring(start);
});
var subs__9433 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9432.call(this,s,start);
case  3 :
return subs__9433.call(this,s,start,end);
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
var symbol__9440 = (function (name){
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
var symbol__9441 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9440.call(this,ns);
case  2 :
return symbol__9441.call(this,ns,name);
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
var keyword__9464 = (function (name){
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
var keyword__9465 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9464.call(this,ns);
case  2 :
return keyword__9465.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9478 = cljs.core.seq.call(null,x);
var ys__9479 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9478)))
{return cljs.core.nil_QMARK_.call(null,ys__9479);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9479)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9478),cljs.core.first.call(null,ys__9479))))
{{
var G__9482 = cljs.core.next.call(null,xs__9478);
var G__9483 = cljs.core.next.call(null,ys__9479);
xs__9478 = G__9482;
ys__9479 = G__9483;
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
return cljs.core.reduce.call(null,(function (p1__9545_SHARP_,p2__9546_SHARP_){
return cljs.core.hash_combine.call(null,p1__9545_SHARP_,cljs.core.hash.call(null,p2__9546_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9557__9558 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9557__9558))
{var G__9561__9564 = cljs.core.first.call(null,G__9557__9558);
var vec__9563__9565 = G__9561__9564;
var key_name__9566 = cljs.core.nth.call(null,vec__9563__9565,0,null);
var f__9567 = cljs.core.nth.call(null,vec__9563__9565,1,null);
var G__9557__9569 = G__9557__9558;

var G__9561__9571 = G__9561__9564;
var G__9557__9572 = G__9557__9569;

while(true){
var vec__9573__9574 = G__9561__9571;
var key_name__9575 = cljs.core.nth.call(null,vec__9573__9574,0,null);
var f__9576 = cljs.core.nth.call(null,vec__9573__9574,1,null);
var G__9557__9577 = G__9557__9572;

var str_name__9578 = cljs.core.name.call(null,key_name__9575);

obj[str_name__9578] = f__9576;
var temp__3698__auto____9582 = cljs.core.next.call(null,G__9557__9577);

if(cljs.core.truth_(temp__3698__auto____9582))
{var G__9557__9583 = temp__3698__auto____9582;

{
var G__9586 = cljs.core.first.call(null,G__9557__9583);
var G__9587 = G__9557__9583;
G__9561__9571 = G__9586;
G__9557__9572 = G__9587;
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
var this__9599 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9600 = this;
return (new cljs.core.List(this__9600.meta,o,coll,(this__9600.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9603 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9604 = this;
return this__9604.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9605 = this;
return this__9605.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9606 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9609 = this;
return this__9609.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9703 = this;
return this__9703.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9704 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9709 = this;
return (new cljs.core.List(meta,this__9709.first,this__9709.rest,this__9709.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9711 = this;
return this__9711.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9715 = this;
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
var this__9730 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9732 = this;
return (new cljs.core.List(this__9732.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9739 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9741 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9743 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9745 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9747 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9748 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9750 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9752 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9754 = this;
return this__9754.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9756 = this;
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
list.cljs$lang$applyTo = (function (arglist__9785){
var items = cljs.core.seq( arglist__9785 );;
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
var this__9791 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9792 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9795 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9797 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9797.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9798 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9800 = this;
return this__9800.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9801 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9801.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9801.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9802 = this;
return this__9802.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9805 = this;
return (new cljs.core.Cons(meta,this__9805.first,this__9805.rest));
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
var G__9862 = null;
var G__9862__9863 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9862__9864 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9862 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9862__9863.call(this,string,f);
case  3 :
return G__9862__9864.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9862;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9866 = null;
var G__9866__9867 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9866__9868 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9866 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9866__9867.call(this,string,k);
case  3 :
return G__9866__9868.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9866;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9871 = null;
var G__9871__9872 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9871__9873 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9871 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9871__9872.call(this,string,n);
case  3 :
return G__9871__9873.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9871;
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
var G__9896 = null;
var G__9896__9897 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9896__9898 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9896 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9896__9897.call(this,this$,coll);
case  3 :
return G__9896__9898.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9896;
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
var x__9908 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9908;
} else
{lazy_seq.x = x__9908.call(null);
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
var this__9915 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9916 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9917 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9919 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9919.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9922 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9923 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9925 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9928 = this;
return this__9928.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9930 = this;
return (new cljs.core.LazySeq(meta,this__9930.realized,this__9930.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9935 = cljs.core.array.call(null);

var s__9936 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9936)))
{ary__9935.push(cljs.core.first.call(null,s__9936));
{
var G__9945 = cljs.core.next.call(null,s__9936);
s__9936 = G__9945;
continue;
}
} else
{return ary__9935;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9949 = s;
var i__9951 = n;
var sum__9952 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9957 = (i__9951 > 0);

if(cljs.core.truth_(and__3546__auto____9957))
{return cljs.core.seq.call(null,s__9949);
} else
{return and__3546__auto____9957;
}
})()))
{{
var G__9959 = cljs.core.next.call(null,s__9949);
var G__9960 = (i__9951 - 1);
var G__9961 = (sum__9952 + 1);
s__9949 = G__9959;
i__9951 = G__9960;
sum__9952 = G__9961;
continue;
}
} else
{return sum__9952;
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
var concat__9975 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9976 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9977 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9965 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9965))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9965),concat.call(null,cljs.core.rest.call(null,s__9965),y));
} else
{return y;
}
})));
});
var concat__9978 = (function() { 
var G__9986__delegate = function (x,y,zs){
var cat__9972 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9970 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9970))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9970),cat.call(null,cljs.core.rest.call(null,xys__9970),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9972.call(null,concat.call(null,x,y),zs);
};
var G__9986 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9986__delegate.call(this, x, y, zs);
};
G__9986.cljs$lang$maxFixedArity = 2;
G__9986.cljs$lang$applyTo = (function (arglist__10007){
var x = cljs.core.first(arglist__10007);
var y = cljs.core.first(cljs.core.next(arglist__10007));
var zs = cljs.core.rest(cljs.core.next(arglist__10007));
return G__9986__delegate.call(this, x, y, zs);
});
return G__9986;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9975.call(this);
case  1 :
return concat__9976.call(this,x);
case  2 :
return concat__9977.call(this,x,y);
default:
return concat__9978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9978.cljs$lang$applyTo;
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
var list_STAR___10008 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10009 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10010 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10011 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10012 = (function() { 
var G__10014__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10014 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10014__delegate.call(this, a, b, c, d, more);
};
G__10014.cljs$lang$maxFixedArity = 4;
G__10014.cljs$lang$applyTo = (function (arglist__10019){
var a = cljs.core.first(arglist__10019);
var b = cljs.core.first(cljs.core.next(arglist__10019));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10019)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10019))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10019))));
return G__10014__delegate.call(this, a, b, c, d, more);
});
return G__10014;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10008.call(this,a);
case  2 :
return list_STAR___10009.call(this,a,b);
case  3 :
return list_STAR___10010.call(this,a,b,c);
case  4 :
return list_STAR___10011.call(this,a,b,c,d);
default:
return list_STAR___10012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10012.cljs$lang$applyTo;
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
var apply__10056 = (function (f,args){
var fixed_arity__10028 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10028 + 1)) <= fixed_arity__10028)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10057 = (function (f,x,args){
var arglist__10035 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10037 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10035,fixed_arity__10037) <= fixed_arity__10037)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10035));
} else
{return f.cljs$lang$applyTo(arglist__10035);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10035));
}
});
var apply__10058 = (function (f,x,y,args){
var arglist__10041 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10042 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10041,fixed_arity__10042) <= fixed_arity__10042)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10041));
} else
{return f.cljs$lang$applyTo(arglist__10041);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10041));
}
});
var apply__10059 = (function (f,x,y,z,args){
var arglist__10043 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10044 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10043,fixed_arity__10044) <= fixed_arity__10044)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10043));
} else
{return f.cljs$lang$applyTo(arglist__10043);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10043));
}
});
var apply__10060 = (function() { 
var G__10095__delegate = function (f,a,b,c,d,args){
var arglist__10053 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10054 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10053,fixed_arity__10054) <= fixed_arity__10054)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10053));
} else
{return f.cljs$lang$applyTo(arglist__10053);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10053));
}
};
var G__10095 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10095__delegate.call(this, f, a, b, c, d, args);
};
G__10095.cljs$lang$maxFixedArity = 5;
G__10095.cljs$lang$applyTo = (function (arglist__10115){
var f = cljs.core.first(arglist__10115);
var a = cljs.core.first(cljs.core.next(arglist__10115));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10115)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10115))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10115)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10115)))));
return G__10095__delegate.call(this, f, a, b, c, d, args);
});
return G__10095;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10056.call(this,f,a);
case  3 :
return apply__10057.call(this,f,a,b);
case  4 :
return apply__10058.call(this,f,a,b,c);
case  5 :
return apply__10059.call(this,f,a,b,c,d);
default:
return apply__10060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10060.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10132){
var obj = cljs.core.first(arglist__10132);
var f = cljs.core.first(cljs.core.next(arglist__10132));
var args = cljs.core.rest(cljs.core.next(arglist__10132));
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
var not_EQ___10135 = (function (x){
return false;
});
var not_EQ___10136 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10137 = (function() { 
var G__10141__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10141 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10141__delegate.call(this, x, y, more);
};
G__10141.cljs$lang$maxFixedArity = 2;
G__10141.cljs$lang$applyTo = (function (arglist__10144){
var x = cljs.core.first(arglist__10144);
var y = cljs.core.first(cljs.core.next(arglist__10144));
var more = cljs.core.rest(cljs.core.next(arglist__10144));
return G__10141__delegate.call(this, x, y, more);
});
return G__10141;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10135.call(this,x);
case  2 :
return not_EQ___10136.call(this,x,y);
default:
return not_EQ___10137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10137.cljs$lang$applyTo;
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
var G__10151 = pred;
var G__10152 = cljs.core.next.call(null,coll);
pred = G__10151;
coll = G__10152;
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
{var or__3548__auto____10155 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10155))
{return or__3548__auto____10155;
} else
{{
var G__10158 = pred;
var G__10159 = cljs.core.next.call(null,coll);
pred = G__10158;
coll = G__10159;
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
var G__10179 = null;
var G__10179__10181 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10179__10182 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10179__10183 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10179__10184 = (function() { 
var G__10233__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10233 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10233__delegate.call(this, x, y, zs);
};
G__10233.cljs$lang$maxFixedArity = 2;
G__10233.cljs$lang$applyTo = (function (arglist__10234){
var x = cljs.core.first(arglist__10234);
var y = cljs.core.first(cljs.core.next(arglist__10234));
var zs = cljs.core.rest(cljs.core.next(arglist__10234));
return G__10233__delegate.call(this, x, y, zs);
});
return G__10233;
})()
;
G__10179 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10179__10181.call(this);
case  1 :
return G__10179__10182.call(this,x);
case  2 :
return G__10179__10183.call(this,x,y);
default:
return G__10179__10184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10179.cljs$lang$maxFixedArity = 2;
G__10179.cljs$lang$applyTo = G__10179__10184.cljs$lang$applyTo;
return G__10179;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10316__delegate = function (args){
return x;
};
var G__10316 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10316__delegate.call(this, args);
};
G__10316.cljs$lang$maxFixedArity = 0;
G__10316.cljs$lang$applyTo = (function (arglist__10317){
var args = cljs.core.seq( arglist__10317 );;
return G__10316__delegate.call(this, args);
});
return G__10316;
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
var comp__10337 = (function (){
return cljs.core.identity;
});
var comp__10338 = (function (f){
return f;
});
var comp__10339 = (function (f,g){
return (function() {
var G__10344 = null;
var G__10344__10345 = (function (){
return f.call(null,g.call(null));
});
var G__10344__10346 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10344__10347 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10344__10348 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10344__10349 = (function() { 
var G__10357__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10357 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10357__delegate.call(this, x, y, z, args);
};
G__10357.cljs$lang$maxFixedArity = 3;
G__10357.cljs$lang$applyTo = (function (arglist__10409){
var x = cljs.core.first(arglist__10409);
var y = cljs.core.first(cljs.core.next(arglist__10409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10409)));
return G__10357__delegate.call(this, x, y, z, args);
});
return G__10357;
})()
;
G__10344 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10344__10345.call(this);
case  1 :
return G__10344__10346.call(this,x);
case  2 :
return G__10344__10347.call(this,x,y);
case  3 :
return G__10344__10348.call(this,x,y,z);
default:
return G__10344__10349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10344.cljs$lang$maxFixedArity = 3;
G__10344.cljs$lang$applyTo = G__10344__10349.cljs$lang$applyTo;
return G__10344;
})()
});
var comp__10340 = (function (f,g,h){
return (function() {
var G__10415 = null;
var G__10415__10416 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10415__10417 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10415__10418 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10415__10419 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10415__10420 = (function() { 
var G__10422__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10422__delegate.call(this, x, y, z, args);
};
G__10422.cljs$lang$maxFixedArity = 3;
G__10422.cljs$lang$applyTo = (function (arglist__10423){
var x = cljs.core.first(arglist__10423);
var y = cljs.core.first(cljs.core.next(arglist__10423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10423)));
return G__10422__delegate.call(this, x, y, z, args);
});
return G__10422;
})()
;
G__10415 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10415__10416.call(this);
case  1 :
return G__10415__10417.call(this,x);
case  2 :
return G__10415__10418.call(this,x,y);
case  3 :
return G__10415__10419.call(this,x,y,z);
default:
return G__10415__10420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10415.cljs$lang$maxFixedArity = 3;
G__10415.cljs$lang$applyTo = G__10415__10420.cljs$lang$applyTo;
return G__10415;
})()
});
var comp__10341 = (function() { 
var G__10425__delegate = function (f1,f2,f3,fs){
var fs__10329 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10428__delegate = function (args){
var ret__10330 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10329),args);
var fs__10332 = cljs.core.next.call(null,fs__10329);

while(true){
if(cljs.core.truth_(fs__10332))
{{
var G__10430 = cljs.core.first.call(null,fs__10332).call(null,ret__10330);
var G__10431 = cljs.core.next.call(null,fs__10332);
ret__10330 = G__10430;
fs__10332 = G__10431;
continue;
}
} else
{return ret__10330;
}
break;
}
};
var G__10428 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10428__delegate.call(this, args);
};
G__10428.cljs$lang$maxFixedArity = 0;
G__10428.cljs$lang$applyTo = (function (arglist__10432){
var args = cljs.core.seq( arglist__10432 );;
return G__10428__delegate.call(this, args);
});
return G__10428;
})()
;
};
var G__10425 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10425__delegate.call(this, f1, f2, f3, fs);
};
G__10425.cljs$lang$maxFixedArity = 3;
G__10425.cljs$lang$applyTo = (function (arglist__10433){
var f1 = cljs.core.first(arglist__10433);
var f2 = cljs.core.first(cljs.core.next(arglist__10433));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10433)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10433)));
return G__10425__delegate.call(this, f1, f2, f3, fs);
});
return G__10425;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10337.call(this);
case  1 :
return comp__10338.call(this,f1);
case  2 :
return comp__10339.call(this,f1,f2);
case  3 :
return comp__10340.call(this,f1,f2,f3);
default:
return comp__10341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10341.cljs$lang$applyTo;
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
var partial__10461 = (function (f,arg1){
return (function() { 
var G__10467__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10467 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10467__delegate.call(this, args);
};
G__10467.cljs$lang$maxFixedArity = 0;
G__10467.cljs$lang$applyTo = (function (arglist__10469){
var args = cljs.core.seq( arglist__10469 );;
return G__10467__delegate.call(this, args);
});
return G__10467;
})()
;
});
var partial__10462 = (function (f,arg1,arg2){
return (function() { 
var G__10470__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10470 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10470__delegate.call(this, args);
};
G__10470.cljs$lang$maxFixedArity = 0;
G__10470.cljs$lang$applyTo = (function (arglist__10472){
var args = cljs.core.seq( arglist__10472 );;
return G__10470__delegate.call(this, args);
});
return G__10470;
})()
;
});
var partial__10463 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10474__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10474 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10474__delegate.call(this, args);
};
G__10474.cljs$lang$maxFixedArity = 0;
G__10474.cljs$lang$applyTo = (function (arglist__10475){
var args = cljs.core.seq( arglist__10475 );;
return G__10474__delegate.call(this, args);
});
return G__10474;
})()
;
});
var partial__10464 = (function() { 
var G__10476__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10477__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10477 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10477__delegate.call(this, args);
};
G__10477.cljs$lang$maxFixedArity = 0;
G__10477.cljs$lang$applyTo = (function (arglist__10479){
var args = cljs.core.seq( arglist__10479 );;
return G__10477__delegate.call(this, args);
});
return G__10477;
})()
;
};
var G__10476 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10476__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10476.cljs$lang$maxFixedArity = 4;
G__10476.cljs$lang$applyTo = (function (arglist__10481){
var f = cljs.core.first(arglist__10481);
var arg1 = cljs.core.first(cljs.core.next(arglist__10481));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10481)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10481))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10481))));
return G__10476__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10476;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10461.call(this,f,arg1);
case  3 :
return partial__10462.call(this,f,arg1,arg2);
case  4 :
return partial__10463.call(this,f,arg1,arg2,arg3);
default:
return partial__10464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10464.cljs$lang$applyTo;
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
var fnil__10538 = (function (f,x){
return (function() {
var G__10542 = null;
var G__10542__10543 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10542__10544 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10542__10545 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10542__10546 = (function() { 
var G__10551__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10551 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10551__delegate.call(this, a, b, c, ds);
};
G__10551.cljs$lang$maxFixedArity = 3;
G__10551.cljs$lang$applyTo = (function (arglist__10553){
var a = cljs.core.first(arglist__10553);
var b = cljs.core.first(cljs.core.next(arglist__10553));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10553)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10553)));
return G__10551__delegate.call(this, a, b, c, ds);
});
return G__10551;
})()
;
G__10542 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10542__10543.call(this,a);
case  2 :
return G__10542__10544.call(this,a,b);
case  3 :
return G__10542__10545.call(this,a,b,c);
default:
return G__10542__10546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10542.cljs$lang$maxFixedArity = 3;
G__10542.cljs$lang$applyTo = G__10542__10546.cljs$lang$applyTo;
return G__10542;
})()
});
var fnil__10539 = (function (f,x,y){
return (function() {
var G__10554 = null;
var G__10554__10555 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10554__10556 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10554__10557 = (function() { 
var G__10561__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10561 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10561__delegate.call(this, a, b, c, ds);
};
G__10561.cljs$lang$maxFixedArity = 3;
G__10561.cljs$lang$applyTo = (function (arglist__10563){
var a = cljs.core.first(arglist__10563);
var b = cljs.core.first(cljs.core.next(arglist__10563));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10563)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10563)));
return G__10561__delegate.call(this, a, b, c, ds);
});
return G__10561;
})()
;
G__10554 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10554__10555.call(this,a,b);
case  3 :
return G__10554__10556.call(this,a,b,c);
default:
return G__10554__10557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10554.cljs$lang$maxFixedArity = 3;
G__10554.cljs$lang$applyTo = G__10554__10557.cljs$lang$applyTo;
return G__10554;
})()
});
var fnil__10540 = (function (f,x,y,z){
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
G__10569.cljs$lang$applyTo = (function (arglist__10571){
var a = cljs.core.first(arglist__10571);
var b = cljs.core.first(cljs.core.next(arglist__10571));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10571)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10571)));
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
return fnil__10538.call(this,f,x);
case  3 :
return fnil__10539.call(this,f,x,y);
case  4 :
return fnil__10540.call(this,f,x,y,z);
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
var mapi__10582 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10579 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10579))
{var s__10581 = temp__3698__auto____10579;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10581)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10581)));
} else
{return null;
}
})));
});

return mapi__10582.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10585 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10585))
{var s__10586 = temp__3698__auto____10585;

var x__10588 = f.call(null,cljs.core.first.call(null,s__10586));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10588)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10586));
} else
{return cljs.core.cons.call(null,x__10588,keep.call(null,f,cljs.core.rest.call(null,s__10586)));
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
var keepi__10630 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10605 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10605))
{var s__10622 = temp__3698__auto____10605;

var x__10623 = f.call(null,idx,cljs.core.first.call(null,s__10622));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10623)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10622));
} else
{return cljs.core.cons.call(null,x__10623,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10622)));
}
} else
{return null;
}
})));
});

return keepi__10630.call(null,0,coll);
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
var every_pred__10775 = (function (p){
return (function() {
var ep1 = null;
var ep1__10782 = (function (){
return true;
});
var ep1__10784 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10785 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10642 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10642))
{return p.call(null,y);
} else
{return and__3546__auto____10642;
}
})());
});
var ep1__10786 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10643 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10643))
{var and__3546__auto____10645 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10645))
{return p.call(null,z);
} else
{return and__3546__auto____10645;
}
} else
{return and__3546__auto____10643;
}
})());
});
var ep1__10787 = (function() { 
var G__10791__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10647 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10647))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10647;
}
})());
};
var G__10791 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10791__delegate.call(this, x, y, z, args);
};
G__10791.cljs$lang$maxFixedArity = 3;
G__10791.cljs$lang$applyTo = (function (arglist__10794){
var x = cljs.core.first(arglist__10794);
var y = cljs.core.first(cljs.core.next(arglist__10794));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10794)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10794)));
return G__10791__delegate.call(this, x, y, z, args);
});
return G__10791;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10782.call(this);
case  1 :
return ep1__10784.call(this,x);
case  2 :
return ep1__10785.call(this,x,y);
case  3 :
return ep1__10786.call(this,x,y,z);
default:
return ep1__10787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10787.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10776 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10795 = (function (){
return true;
});
var ep2__10796 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10650 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10650))
{return p2.call(null,x);
} else
{return and__3546__auto____10650;
}
})());
});
var ep2__10797 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10651 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10651))
{var and__3546__auto____10652 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10652))
{var and__3546__auto____10653 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10653))
{return p2.call(null,y);
} else
{return and__3546__auto____10653;
}
} else
{return and__3546__auto____10652;
}
} else
{return and__3546__auto____10651;
}
})());
});
var ep2__10798 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10656 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10656))
{var and__3546__auto____10657 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10657))
{var and__3546__auto____10658 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10658))
{var and__3546__auto____10659 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10659))
{var and__3546__auto____10660 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10660))
{return p2.call(null,z);
} else
{return and__3546__auto____10660;
}
} else
{return and__3546__auto____10659;
}
} else
{return and__3546__auto____10658;
}
} else
{return and__3546__auto____10657;
}
} else
{return and__3546__auto____10656;
}
})());
});
var ep2__10799 = (function() { 
var G__10804__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10663 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10663))
{return cljs.core.every_QMARK_.call(null,(function (p1__10596_SHARP_){
var and__3546__auto____10668 = p1.call(null,p1__10596_SHARP_);

if(cljs.core.truth_(and__3546__auto____10668))
{return p2.call(null,p1__10596_SHARP_);
} else
{return and__3546__auto____10668;
}
}),args);
} else
{return and__3546__auto____10663;
}
})());
};
var G__10804 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10804__delegate.call(this, x, y, z, args);
};
G__10804.cljs$lang$maxFixedArity = 3;
G__10804.cljs$lang$applyTo = (function (arglist__10810){
var x = cljs.core.first(arglist__10810);
var y = cljs.core.first(cljs.core.next(arglist__10810));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10810)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10810)));
return G__10804__delegate.call(this, x, y, z, args);
});
return G__10804;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10795.call(this);
case  1 :
return ep2__10796.call(this,x);
case  2 :
return ep2__10797.call(this,x,y);
case  3 :
return ep2__10798.call(this,x,y,z);
default:
return ep2__10799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10799.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10777 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10819 = (function (){
return true;
});
var ep3__10820 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10669 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10669))
{var and__3546__auto____10670 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10670))
{return p3.call(null,x);
} else
{return and__3546__auto____10670;
}
} else
{return and__3546__auto____10669;
}
})());
});
var ep3__10821 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10671 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10671))
{var and__3546__auto____10672 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10672))
{var and__3546__auto____10673 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10673))
{var and__3546__auto____10674 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10674))
{var and__3546__auto____10675 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10675))
{return p3.call(null,y);
} else
{return and__3546__auto____10675;
}
} else
{return and__3546__auto____10674;
}
} else
{return and__3546__auto____10673;
}
} else
{return and__3546__auto____10672;
}
} else
{return and__3546__auto____10671;
}
})());
});
var ep3__10822 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10676 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10676))
{var and__3546__auto____10677 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10677))
{var and__3546__auto____10678 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10678))
{var and__3546__auto____10679 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10679))
{var and__3546__auto____10680 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10680))
{var and__3546__auto____10681 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10681))
{var and__3546__auto____10682 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10682))
{var and__3546__auto____10683 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10683))
{return p3.call(null,z);
} else
{return and__3546__auto____10683;
}
} else
{return and__3546__auto____10682;
}
} else
{return and__3546__auto____10681;
}
} else
{return and__3546__auto____10680;
}
} else
{return and__3546__auto____10679;
}
} else
{return and__3546__auto____10678;
}
} else
{return and__3546__auto____10677;
}
} else
{return and__3546__auto____10676;
}
})());
});
var ep3__10823 = (function() { 
var G__10832__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10684 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10684))
{return cljs.core.every_QMARK_.call(null,(function (p1__10598_SHARP_){
var and__3546__auto____10685 = p1.call(null,p1__10598_SHARP_);

if(cljs.core.truth_(and__3546__auto____10685))
{var and__3546__auto____10686 = p2.call(null,p1__10598_SHARP_);

if(cljs.core.truth_(and__3546__auto____10686))
{return p3.call(null,p1__10598_SHARP_);
} else
{return and__3546__auto____10686;
}
} else
{return and__3546__auto____10685;
}
}),args);
} else
{return and__3546__auto____10684;
}
})());
};
var G__10832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10832__delegate.call(this, x, y, z, args);
};
G__10832.cljs$lang$maxFixedArity = 3;
G__10832.cljs$lang$applyTo = (function (arglist__10839){
var x = cljs.core.first(arglist__10839);
var y = cljs.core.first(cljs.core.next(arglist__10839));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10839)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10839)));
return G__10832__delegate.call(this, x, y, z, args);
});
return G__10832;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10819.call(this);
case  1 :
return ep3__10820.call(this,x);
case  2 :
return ep3__10821.call(this,x,y);
case  3 :
return ep3__10822.call(this,x,y,z);
default:
return ep3__10823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10823.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10778 = (function() { 
var G__10841__delegate = function (p1,p2,p3,ps){
var ps__10687 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10843 = (function (){
return true;
});
var epn__10845 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10599_SHARP_){
return p1__10599_SHARP_.call(null,x);
}),ps__10687);
});
var epn__10846 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10600_SHARP_){
var and__3546__auto____10688 = p1__10600_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10688))
{return p1__10600_SHARP_.call(null,y);
} else
{return and__3546__auto____10688;
}
}),ps__10687);
});
var epn__10848 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10601_SHARP_){
var and__3546__auto____10689 = p1__10601_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10689))
{var and__3546__auto____10690 = p1__10601_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10690))
{return p1__10601_SHARP_.call(null,z);
} else
{return and__3546__auto____10690;
}
} else
{return and__3546__auto____10689;
}
}),ps__10687);
});
var epn__10849 = (function() { 
var G__10867__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10691 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10691))
{return cljs.core.every_QMARK_.call(null,(function (p1__10602_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10602_SHARP_,args);
}),ps__10687);
} else
{return and__3546__auto____10691;
}
})());
};
var G__10867 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10867__delegate.call(this, x, y, z, args);
};
G__10867.cljs$lang$maxFixedArity = 3;
G__10867.cljs$lang$applyTo = (function (arglist__10872){
var x = cljs.core.first(arglist__10872);
var y = cljs.core.first(cljs.core.next(arglist__10872));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10872)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10872)));
return G__10867__delegate.call(this, x, y, z, args);
});
return G__10867;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10843.call(this);
case  1 :
return epn__10845.call(this,x);
case  2 :
return epn__10846.call(this,x,y);
case  3 :
return epn__10848.call(this,x,y,z);
default:
return epn__10849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10849.cljs$lang$applyTo;
return epn;
})()
};
var G__10841 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10841__delegate.call(this, p1, p2, p3, ps);
};
G__10841.cljs$lang$maxFixedArity = 3;
G__10841.cljs$lang$applyTo = (function (arglist__10876){
var p1 = cljs.core.first(arglist__10876);
var p2 = cljs.core.first(cljs.core.next(arglist__10876));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10876)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10876)));
return G__10841__delegate.call(this, p1, p2, p3, ps);
});
return G__10841;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10775.call(this,p1);
case  2 :
return every_pred__10776.call(this,p1,p2);
case  3 :
return every_pred__10777.call(this,p1,p2,p3);
default:
return every_pred__10778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10778.cljs$lang$applyTo;
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
var some_fn__11060 = (function (p){
return (function() {
var sp1 = null;
var sp1__11067 = (function (){
return null;
});
var sp1__11068 = (function (x){
return p.call(null,x);
});
var sp1__11069 = (function (x,y){
var or__3548__auto____10884 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10884))
{return or__3548__auto____10884;
} else
{return p.call(null,y);
}
});
var sp1__11070 = (function (x,y,z){
var or__3548__auto____10886 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10886))
{return or__3548__auto____10886;
} else
{var or__3548__auto____10887 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10887))
{return or__3548__auto____10887;
} else
{return p.call(null,z);
}
}
});
var sp1__11071 = (function() { 
var G__11074__delegate = function (x,y,z,args){
var or__3548__auto____10954 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10954))
{return or__3548__auto____10954;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11074 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11074__delegate.call(this, x, y, z, args);
};
G__11074.cljs$lang$maxFixedArity = 3;
G__11074.cljs$lang$applyTo = (function (arglist__11076){
var x = cljs.core.first(arglist__11076);
var y = cljs.core.first(cljs.core.next(arglist__11076));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11076)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11076)));
return G__11074__delegate.call(this, x, y, z, args);
});
return G__11074;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11067.call(this);
case  1 :
return sp1__11068.call(this,x);
case  2 :
return sp1__11069.call(this,x,y);
case  3 :
return sp1__11070.call(this,x,y,z);
default:
return sp1__11071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11071.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11061 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11083 = (function (){
return null;
});
var sp2__11084 = (function (x){
var or__3548__auto____10956 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10956))
{return or__3548__auto____10956;
} else
{return p2.call(null,x);
}
});
var sp2__11085 = (function (x,y){
var or__3548__auto____10957 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10957))
{return or__3548__auto____10957;
} else
{var or__3548__auto____10959 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10959))
{return or__3548__auto____10959;
} else
{var or__3548__auto____10961 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10961))
{return or__3548__auto____10961;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11086 = (function (x,y,z){
var or__3548__auto____10965 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10965))
{return or__3548__auto____10965;
} else
{var or__3548__auto____10967 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10967))
{return or__3548__auto____10967;
} else
{var or__3548__auto____10969 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10969))
{return or__3548__auto____10969;
} else
{var or__3548__auto____10971 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10971))
{return or__3548__auto____10971;
} else
{var or__3548__auto____10973 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10973))
{return or__3548__auto____10973;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11087 = (function() { 
var G__11090__delegate = function (x,y,z,args){
var or__3548__auto____10975 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10975))
{return or__3548__auto____10975;
} else
{return cljs.core.some.call(null,(function (p1__10633_SHARP_){
var or__3548__auto____10978 = p1.call(null,p1__10633_SHARP_);

if(cljs.core.truth_(or__3548__auto____10978))
{return or__3548__auto____10978;
} else
{return p2.call(null,p1__10633_SHARP_);
}
}),args);
}
};
var G__11090 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11090__delegate.call(this, x, y, z, args);
};
G__11090.cljs$lang$maxFixedArity = 3;
G__11090.cljs$lang$applyTo = (function (arglist__11120){
var x = cljs.core.first(arglist__11120);
var y = cljs.core.first(cljs.core.next(arglist__11120));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11120)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11120)));
return G__11090__delegate.call(this, x, y, z, args);
});
return G__11090;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11083.call(this);
case  1 :
return sp2__11084.call(this,x);
case  2 :
return sp2__11085.call(this,x,y);
case  3 :
return sp2__11086.call(this,x,y,z);
default:
return sp2__11087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11087.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11062 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11124 = (function (){
return null;
});
var sp3__11125 = (function (x){
var or__3548__auto____10982 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10982))
{return or__3548__auto____10982;
} else
{var or__3548__auto____10984 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10984))
{return or__3548__auto____10984;
} else
{return p3.call(null,x);
}
}
});
var sp3__11126 = (function (x,y){
var or__3548__auto____10988 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10988))
{return or__3548__auto____10988;
} else
{var or__3548__auto____10990 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10990))
{return or__3548__auto____10990;
} else
{var or__3548__auto____10992 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10992))
{return or__3548__auto____10992;
} else
{var or__3548__auto____10994 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10994))
{return or__3548__auto____10994;
} else
{var or__3548__auto____10996 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10996))
{return or__3548__auto____10996;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11127 = (function (x,y,z){
var or__3548__auto____10999 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10999))
{return or__3548__auto____10999;
} else
{var or__3548__auto____11002 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11002))
{return or__3548__auto____11002;
} else
{var or__3548__auto____11005 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11005))
{return or__3548__auto____11005;
} else
{var or__3548__auto____11007 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11007))
{return or__3548__auto____11007;
} else
{var or__3548__auto____11009 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11009))
{return or__3548__auto____11009;
} else
{var or__3548__auto____11011 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11011))
{return or__3548__auto____11011;
} else
{var or__3548__auto____11013 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11013))
{return or__3548__auto____11013;
} else
{var or__3548__auto____11014 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11014))
{return or__3548__auto____11014;
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
var sp3__11128 = (function() { 
var G__11145__delegate = function (x,y,z,args){
var or__3548__auto____11022 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11022))
{return or__3548__auto____11022;
} else
{return cljs.core.some.call(null,(function (p1__10635_SHARP_){
var or__3548__auto____11025 = p1.call(null,p1__10635_SHARP_);

if(cljs.core.truth_(or__3548__auto____11025))
{return or__3548__auto____11025;
} else
{var or__3548__auto____11026 = p2.call(null,p1__10635_SHARP_);

if(cljs.core.truth_(or__3548__auto____11026))
{return or__3548__auto____11026;
} else
{return p3.call(null,p1__10635_SHARP_);
}
}
}),args);
}
};
var G__11145 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11145__delegate.call(this, x, y, z, args);
};
G__11145.cljs$lang$maxFixedArity = 3;
G__11145.cljs$lang$applyTo = (function (arglist__11150){
var x = cljs.core.first(arglist__11150);
var y = cljs.core.first(cljs.core.next(arglist__11150));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11150)));
return G__11145__delegate.call(this, x, y, z, args);
});
return G__11145;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11124.call(this);
case  1 :
return sp3__11125.call(this,x);
case  2 :
return sp3__11126.call(this,x,y);
case  3 :
return sp3__11127.call(this,x,y,z);
default:
return sp3__11128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11128.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11063 = (function() { 
var G__11163__delegate = function (p1,p2,p3,ps){
var ps__11029 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11165 = (function (){
return null;
});
var spn__11166 = (function (x){
return cljs.core.some.call(null,(function (p1__10636_SHARP_){
return p1__10636_SHARP_.call(null,x);
}),ps__11029);
});
var spn__11167 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10637_SHARP_){
var or__3548__auto____11032 = p1__10637_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11032))
{return or__3548__auto____11032;
} else
{return p1__10637_SHARP_.call(null,y);
}
}),ps__11029);
});
var spn__11168 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10638_SHARP_){
var or__3548__auto____11037 = p1__10638_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11037))
{return or__3548__auto____11037;
} else
{var or__3548__auto____11039 = p1__10638_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11039))
{return or__3548__auto____11039;
} else
{return p1__10638_SHARP_.call(null,z);
}
}
}),ps__11029);
});
var spn__11169 = (function() { 
var G__11177__delegate = function (x,y,z,args){
var or__3548__auto____11043 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11043))
{return or__3548__auto____11043;
} else
{return cljs.core.some.call(null,(function (p1__10639_SHARP_){
return cljs.core.some.call(null,p1__10639_SHARP_,args);
}),ps__11029);
}
};
var G__11177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11177__delegate.call(this, x, y, z, args);
};
G__11177.cljs$lang$maxFixedArity = 3;
G__11177.cljs$lang$applyTo = (function (arglist__11182){
var x = cljs.core.first(arglist__11182);
var y = cljs.core.first(cljs.core.next(arglist__11182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11182)));
return G__11177__delegate.call(this, x, y, z, args);
});
return G__11177;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11165.call(this);
case  1 :
return spn__11166.call(this,x);
case  2 :
return spn__11167.call(this,x,y);
case  3 :
return spn__11168.call(this,x,y,z);
default:
return spn__11169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11169.cljs$lang$applyTo;
return spn;
})()
};
var G__11163 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11163__delegate.call(this, p1, p2, p3, ps);
};
G__11163.cljs$lang$maxFixedArity = 3;
G__11163.cljs$lang$applyTo = (function (arglist__11184){
var p1 = cljs.core.first(arglist__11184);
var p2 = cljs.core.first(cljs.core.next(arglist__11184));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11184)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11184)));
return G__11163__delegate.call(this, p1, p2, p3, ps);
});
return G__11163;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11060.call(this,p1);
case  2 :
return some_fn__11061.call(this,p1,p2);
case  3 :
return some_fn__11062.call(this,p1,p2,p3);
default:
return some_fn__11063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11063.cljs$lang$applyTo;
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
var map__11231 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11193 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11193))
{var s__11194 = temp__3698__auto____11193;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11194)),map.call(null,f,cljs.core.rest.call(null,s__11194)));
} else
{return null;
}
})));
});
var map__11232 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11198 = cljs.core.seq.call(null,c1);
var s2__11199 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11200 = s1__11198;

if(cljs.core.truth_(and__3546__auto____11200))
{return s2__11199;
} else
{return and__3546__auto____11200;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11198),cljs.core.first.call(null,s2__11199)),map.call(null,f,cljs.core.rest.call(null,s1__11198),cljs.core.rest.call(null,s2__11199)));
} else
{return null;
}
})));
});
var map__11233 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11207 = cljs.core.seq.call(null,c1);
var s2__11209 = cljs.core.seq.call(null,c2);
var s3__11210 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11211 = s1__11207;

if(cljs.core.truth_(and__3546__auto____11211))
{var and__3546__auto____11212 = s2__11209;

if(cljs.core.truth_(and__3546__auto____11212))
{return s3__11210;
} else
{return and__3546__auto____11212;
}
} else
{return and__3546__auto____11211;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11207),cljs.core.first.call(null,s2__11209),cljs.core.first.call(null,s3__11210)),map.call(null,f,cljs.core.rest.call(null,s1__11207),cljs.core.rest.call(null,s2__11209),cljs.core.rest.call(null,s3__11210)));
} else
{return null;
}
})));
});
var map__11234 = (function() { 
var G__11299__delegate = function (f,c1,c2,c3,colls){
var step__11218 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11216 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11216)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11216),step.call(null,map.call(null,cljs.core.rest,ss__11216)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10880_SHARP_){
return cljs.core.apply.call(null,f,p1__10880_SHARP_);
}),step__11218.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11299 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11299__delegate.call(this, f, c1, c2, c3, colls);
};
G__11299.cljs$lang$maxFixedArity = 4;
G__11299.cljs$lang$applyTo = (function (arglist__11304){
var f = cljs.core.first(arglist__11304);
var c1 = cljs.core.first(cljs.core.next(arglist__11304));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11304)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11304))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11304))));
return G__11299__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11299;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11231.call(this,f,c1);
case  3 :
return map__11232.call(this,f,c1,c2);
case  4 :
return map__11233.call(this,f,c1,c2,c3);
default:
return map__11234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11234.cljs$lang$applyTo;
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
{var temp__3698__auto____11311 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11311))
{var s__11313 = temp__3698__auto____11311;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11313),take.call(null,(n - 1),cljs.core.rest.call(null,s__11313)));
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
var step__11326 = (function (n,coll){
while(true){
var s__11321 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11322 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11322))
{return s__11321;
} else
{return and__3546__auto____11322;
}
})()))
{{
var G__11327 = (n - 1);
var G__11328 = cljs.core.rest.call(null,s__11321);
n = G__11327;
coll = G__11328;
continue;
}
} else
{return s__11321;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11326.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11338 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11339 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11338.call(this,n);
case  2 :
return drop_last__11339.call(this,n,s);
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
var s__11345 = cljs.core.seq.call(null,coll);
var lead__11347 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11347))
{{
var G__11355 = cljs.core.next.call(null,s__11345);
var G__11357 = cljs.core.next.call(null,lead__11347);
s__11345 = G__11355;
lead__11347 = G__11357;
continue;
}
} else
{return s__11345;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11365 = (function (pred,coll){
while(true){
var s__11361 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11362 = s__11361;

if(cljs.core.truth_(and__3546__auto____11362))
{return pred.call(null,cljs.core.first.call(null,s__11361));
} else
{return and__3546__auto____11362;
}
})()))
{{
var G__11372 = pred;
var G__11373 = cljs.core.rest.call(null,s__11361);
pred = G__11372;
coll = G__11373;
continue;
}
} else
{return s__11361;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11365.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11378 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11378))
{var s__11380 = temp__3698__auto____11378;

return cljs.core.concat.call(null,s__11380,cycle.call(null,s__11380));
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
var repeat__11394 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11395 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11394.call(this,n);
case  2 :
return repeat__11395.call(this,n,x);
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
var repeatedly__11503 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11504 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11503.call(this,n);
case  2 :
return repeatedly__11504.call(this,n,f);
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
var interleave__11562 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11543 = cljs.core.seq.call(null,c1);
var s2__11544 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11545 = s1__11543;

if(cljs.core.truth_(and__3546__auto____11545))
{return s2__11544;
} else
{return and__3546__auto____11545;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11543),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11544),interleave.call(null,cljs.core.rest.call(null,s1__11543),cljs.core.rest.call(null,s2__11544))));
} else
{return null;
}
})));
});
var interleave__11563 = (function() { 
var G__11612__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11555 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11555)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11555),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11555)));
} else
{return null;
}
})));
};
var G__11612 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11612__delegate.call(this, c1, c2, colls);
};
G__11612.cljs$lang$maxFixedArity = 2;
G__11612.cljs$lang$applyTo = (function (arglist__11625){
var c1 = cljs.core.first(arglist__11625);
var c2 = cljs.core.first(cljs.core.next(arglist__11625));
var colls = cljs.core.rest(cljs.core.next(arglist__11625));
return G__11612__delegate.call(this, c1, c2, colls);
});
return G__11612;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11562.call(this,c1,c2);
default:
return interleave__11563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11563.cljs$lang$applyTo;
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
var cat__11638 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11634))
{var coll__11636 = temp__3695__auto____11634;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11636),cat.call(null,cljs.core.rest.call(null,coll__11636),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11638.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11651 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11652 = (function() { 
var G__11656__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11656 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11656__delegate.call(this, f, coll, colls);
};
G__11656.cljs$lang$maxFixedArity = 2;
G__11656.cljs$lang$applyTo = (function (arglist__11657){
var f = cljs.core.first(arglist__11657);
var coll = cljs.core.first(cljs.core.next(arglist__11657));
var colls = cljs.core.rest(cljs.core.next(arglist__11657));
return G__11656__delegate.call(this, f, coll, colls);
});
return G__11656;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11651.call(this,f,coll);
default:
return mapcat__11652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11652.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11660 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11660))
{var s__11662 = temp__3698__auto____11660;

var f__11664 = cljs.core.first.call(null,s__11662);
var r__11665 = cljs.core.rest.call(null,s__11662);

if(cljs.core.truth_(pred.call(null,f__11664)))
{return cljs.core.cons.call(null,f__11664,filter.call(null,pred,r__11665));
} else
{return filter.call(null,pred,r__11665);
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
var walk__11702 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11702.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11699_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11699_SHARP_));
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
var partition__11746 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11748 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11721 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11721))
{var s__11724 = temp__3698__auto____11721;

var p__11726 = cljs.core.take.call(null,n,s__11724);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11726))))
{return cljs.core.cons.call(null,p__11726,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11724)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11749 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11732 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11732))
{var s__11736 = temp__3698__auto____11732;

var p__11737 = cljs.core.take.call(null,n,s__11736);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11737))))
{return cljs.core.cons.call(null,p__11737,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11736)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11737,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11746.call(this,n,step);
case  3 :
return partition__11748.call(this,n,step,pad);
case  4 :
return partition__11749.call(this,n,step,pad,coll);
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
var get_in__11790 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11791 = (function (m,ks,not_found){
var sentinel__11773 = cljs.core.lookup_sentinel;
var m__11775 = m;
var ks__11777 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11777))
{var m__11780 = cljs.core.get.call(null,m__11775,cljs.core.first.call(null,ks__11777),sentinel__11773);

if(cljs.core.truth_((sentinel__11773 === m__11780)))
{return not_found;
} else
{{
var G__11803 = sentinel__11773;
var G__11804 = m__11780;
var G__11806 = cljs.core.next.call(null,ks__11777);
sentinel__11773 = G__11803;
m__11775 = G__11804;
ks__11777 = G__11806;
continue;
}
}
} else
{return m__11775;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11790.call(this,m,ks);
case  3 :
return get_in__11791.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11811,v){
var vec__11814__11816 = p__11811;
var k__11818 = cljs.core.nth.call(null,vec__11814__11816,0,null);
var ks__11821 = cljs.core.nthnext.call(null,vec__11814__11816,1);

if(cljs.core.truth_(ks__11821))
{return cljs.core.assoc.call(null,m,k__11818,assoc_in.call(null,cljs.core.get.call(null,m,k__11818),ks__11821,v));
} else
{return cljs.core.assoc.call(null,m,k__11818,v);
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
var update_in__delegate = function (m,p__11845,f,args){
var vec__11846__11848 = p__11845;
var k__11858 = cljs.core.nth.call(null,vec__11846__11848,0,null);
var ks__11859 = cljs.core.nthnext.call(null,vec__11846__11848,1);

if(cljs.core.truth_(ks__11859))
{return cljs.core.assoc.call(null,m,k__11858,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11858),ks__11859,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11858,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11858),args));
}
};
var update_in = function (m,p__11845,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11845, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11868){
var m = cljs.core.first(arglist__11868);
var p__11845 = cljs.core.first(cljs.core.next(arglist__11868));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11868)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11868)));
return update_in__delegate.call(this, m, p__11845, f, args);
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
var this__11928 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12008 = null;
var G__12008__12009 = (function (coll,k){
var this__11929 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12008__12010 = (function (coll,k,not_found){
var this__11932 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12008 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12008__12009.call(this,coll,k);
case  3 :
return G__12008__12010.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12008;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11935 = this;
var new_array__11936 = cljs.core.aclone.call(null,this__11935.array);

(new_array__11936[k] = v);
return (new cljs.core.Vector(this__11935.meta,new_array__11936));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12019 = null;
var G__12019__12021 = (function (coll,k){
var this__11944 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12019__12022 = (function (coll,k,not_found){
var this__11947 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12019 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12019__12021.call(this,coll,k);
case  3 :
return G__12019__12022.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12019;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11949 = this;
var new_array__11951 = cljs.core.aclone.call(null,this__11949.array);

new_array__11951.push(o);
return (new cljs.core.Vector(this__11949.meta,new_array__11951));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12028 = null;
var G__12028__12029 = (function (v,f){
var this__11953 = this;
return cljs.core.ci_reduce.call(null,this__11953.array,f);
});
var G__12028__12030 = (function (v,f,start){
var this__11955 = this;
return cljs.core.ci_reduce.call(null,this__11955.array,f,start);
});
G__12028 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12028__12029.call(this,v,f);
case  3 :
return G__12028__12030.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12028;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11957 = this;
if(cljs.core.truth_((this__11957.array.length > 0)))
{var vector_seq__11959 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11957.array.length)))
{return cljs.core.cons.call(null,(this__11957.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11959.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11966 = this;
return this__11966.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11967 = this;
var count__11968 = this__11967.array.length;

if(cljs.core.truth_((count__11968 > 0)))
{return (this__11967.array[(count__11968 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11969 = this;
if(cljs.core.truth_((this__11969.array.length > 0)))
{var new_array__11970 = cljs.core.aclone.call(null,this__11969.array);

new_array__11970.pop();
return (new cljs.core.Vector(this__11969.meta,new_array__11970));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11972 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11975 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11982 = this;
return (new cljs.core.Vector(meta,this__11982.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11983 = this;
return this__11983.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12060 = null;
var G__12060__12062 = (function (coll,n){
var this__11985 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11988 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11988))
{return (n < this__11985.array.length);
} else
{return and__3546__auto____11988;
}
})()))
{return (this__11985.array[n]);
} else
{return null;
}
});
var G__12060__12063 = (function (coll,n,not_found){
var this__11991 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11992 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11992))
{return (n < this__11991.array.length);
} else
{return and__3546__auto____11992;
}
})()))
{return (this__11991.array[n]);
} else
{return not_found;
}
});
G__12060 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12060__12062.call(this,coll,n);
case  3 :
return G__12060__12063.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12060;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11995 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11995.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12126){
var args = cljs.core.seq( arglist__12126 );;
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
var this__12140 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12321 = null;
var G__12321__12322 = (function (coll,k){
var this__12142 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12321__12323 = (function (coll,k,not_found){
var this__12143 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12321 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12321__12322.call(this,coll,k);
case  3 :
return G__12321__12323.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12321;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12144 = this;
var v_pos__12151 = (this__12144.start + key);

return (new cljs.core.Subvec(this__12144.meta,cljs.core._assoc.call(null,this__12144.v,v_pos__12151,val),this__12144.start,((this__12144.end > (v_pos__12151 + 1)) ? this__12144.end : (v_pos__12151 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12325 = null;
var G__12325__12326 = (function (coll,k){
var this__12152 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12325__12327 = (function (coll,k,not_found){
var this__12153 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
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
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12293 = this;
return (new cljs.core.Subvec(this__12293.meta,cljs.core._assoc_n.call(null,this__12293.v,this__12293.end,o),this__12293.start,(this__12293.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12332 = null;
var G__12332__12336 = (function (coll,f){
var this__12294 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12332__12337 = (function (coll,f,start){
var this__12296 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12332 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12332__12336.call(this,coll,f);
case  3 :
return G__12332__12337.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12332;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12297 = this;
var subvec_seq__12301 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12297.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12297.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12301.call(null,this__12297.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12302 = this;
return (this__12302.end - this__12302.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12304 = this;
return cljs.core._nth.call(null,this__12304.v,(this__12304.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12305 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12305.start,this__12305.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12305.meta,this__12305.v,this__12305.start,(this__12305.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12307 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12312 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12313 = this;
return (new cljs.core.Subvec(meta,this__12313.v,this__12313.start,this__12313.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12314 = this;
return this__12314.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12347 = null;
var G__12347__12348 = (function (coll,n){
var this__12315 = this;
return cljs.core._nth.call(null,this__12315.v,(this__12315.start + n));
});
var G__12347__12349 = (function (coll,n,not_found){
var this__12316 = this;
return cljs.core._nth.call(null,this__12316.v,(this__12316.start + n),not_found);
});
G__12347 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12347__12348.call(this,coll,n);
case  3 :
return G__12347__12349.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12347;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12317 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12317.meta);
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
var subvec__12358 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12359 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12358.call(this,v,start);
case  3 :
return subvec__12359.call(this,v,start,end);
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
var this__12448 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12450 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12453 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12454 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12454.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12455 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12456 = this;
return cljs.core._first.call(null,this__12456.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12461 = this;
var temp__3695__auto____12462 = cljs.core.next.call(null,this__12461.front);

if(cljs.core.truth_(temp__3695__auto____12462))
{var f1__12463 = temp__3695__auto____12462;

return (new cljs.core.PersistentQueueSeq(this__12461.meta,f1__12463,this__12461.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12461.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12461.meta,this__12461.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12464 = this;
return this__12464.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12465 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12465.front,this__12465.rear));
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
var this__12477 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12478 = this;
if(cljs.core.truth_(this__12478.front))
{return (new cljs.core.PersistentQueue(this__12478.meta,(this__12478.count + 1),this__12478.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12479 = this__12478.rear;

if(cljs.core.truth_(or__3548__auto____12479))
{return or__3548__auto____12479;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12478.meta,(this__12478.count + 1),cljs.core.conj.call(null,this__12478.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12480 = this;
var rear__12481 = cljs.core.seq.call(null,this__12480.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12482 = this__12480.front;

if(cljs.core.truth_(or__3548__auto____12482))
{return or__3548__auto____12482;
} else
{return rear__12481;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12480.front,cljs.core.seq.call(null,rear__12481)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12483 = this;
return this__12483.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12484 = this;
return cljs.core._first.call(null,this__12484.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12486 = this;
if(cljs.core.truth_(this__12486.front))
{var temp__3695__auto____12488 = cljs.core.next.call(null,this__12486.front);

if(cljs.core.truth_(temp__3695__auto____12488))
{var f1__12489 = temp__3695__auto____12488;

return (new cljs.core.PersistentQueue(this__12486.meta,(this__12486.count - 1),f1__12489,this__12486.rear));
} else
{return (new cljs.core.PersistentQueue(this__12486.meta,(this__12486.count - 1),cljs.core.seq.call(null,this__12486.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12492 = this;
return cljs.core.first.call(null,this__12492.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12494 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12496 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12498 = this;
return (new cljs.core.PersistentQueue(meta,this__12498.count,this__12498.front,this__12498.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12501 = this;
return this__12501.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12502 = this;
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
var this__12505 = this;
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
var len__12561 = array.length;

var i__12562 = 0;

while(true){
if(cljs.core.truth_((i__12562 < len__12561)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12562]))))
{return i__12562;
} else
{{
var G__12568 = (i__12562 + incr);
i__12562 = G__12568;
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
var obj_map_contains_key_QMARK___12574 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12575 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12572 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12572))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12572;
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
return obj_map_contains_key_QMARK___12574.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12575.call(this,k,strobj,true_val,false_val);
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
var this__12588 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12621 = null;
var G__12621__12622 = (function (coll,k){
var this__12589 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12621__12624 = (function (coll,k,not_found){
var this__12590 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12590.strobj,(this__12590.strobj[k]),not_found);
});
G__12621 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12621__12622.call(this,coll,k);
case  3 :
return G__12621__12624.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12621;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12591 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12592 = goog.object.clone.call(null,this__12591.strobj);
var overwrite_QMARK___12593 = new_strobj__12592.hasOwnProperty(k);

(new_strobj__12592[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12593))
{return (new cljs.core.ObjMap(this__12591.meta,this__12591.keys,new_strobj__12592));
} else
{var new_keys__12594 = cljs.core.aclone.call(null,this__12591.keys);

new_keys__12594.push(k);
return (new cljs.core.ObjMap(this__12591.meta,new_keys__12594,new_strobj__12592));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12591.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12596 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12596.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12681 = null;
var G__12681__12682 = (function (coll,k){
var this__12598 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12681__12683 = (function (coll,k,not_found){
var this__12599 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12681 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12681__12682.call(this,coll,k);
case  3 :
return G__12681__12683.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12681;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12600 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12604 = this;
if(cljs.core.truth_((this__12604.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12583_SHARP_){
return cljs.core.vector.call(null,p1__12583_SHARP_,(this__12604.strobj[p1__12583_SHARP_]));
}),this__12604.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12607 = this;
return this__12607.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12608 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12612 = this;
return (new cljs.core.ObjMap(meta,this__12612.keys,this__12612.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12613 = this;
return this__12613.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12614 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12614.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12615 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12616 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12616))
{return this__12615.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12616;
}
})()))
{var new_keys__12618 = cljs.core.aclone.call(null,this__12615.keys);
var new_strobj__12619 = goog.object.clone.call(null,this__12615.strobj);

new_keys__12618.splice(cljs.core.scan_array.call(null,1,k,new_keys__12618),1);
cljs.core.js_delete.call(null,new_strobj__12619,k);
return (new cljs.core.ObjMap(this__12615.meta,new_keys__12618,new_strobj__12619));
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
var this__12727 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12843 = null;
var G__12843__12844 = (function (coll,k){
var this__12728 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12843__12845 = (function (coll,k,not_found){
var this__12730 = this;
var bucket__12732 = (this__12730.hashobj[cljs.core.hash.call(null,k)]);
var i__12734 = (cljs.core.truth_(bucket__12732)?cljs.core.scan_array.call(null,2,k,bucket__12732):null);

if(cljs.core.truth_(i__12734))
{return (bucket__12732[(i__12734 + 1)]);
} else
{return not_found;
}
});
G__12843 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12843__12844.call(this,coll,k);
case  3 :
return G__12843__12845.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12843;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12735 = this;
var h__12739 = cljs.core.hash.call(null,k);
var bucket__12740 = (this__12735.hashobj[h__12739]);

if(cljs.core.truth_(bucket__12740))
{var new_bucket__12741 = cljs.core.aclone.call(null,bucket__12740);
var new_hashobj__12743 = goog.object.clone.call(null,this__12735.hashobj);

(new_hashobj__12743[h__12739] = new_bucket__12741);
var temp__3695__auto____12778 = cljs.core.scan_array.call(null,2,k,new_bucket__12741);

if(cljs.core.truth_(temp__3695__auto____12778))
{var i__12779 = temp__3695__auto____12778;

(new_bucket__12741[(i__12779 + 1)] = v);
return (new cljs.core.HashMap(this__12735.meta,this__12735.count,new_hashobj__12743));
} else
{new_bucket__12741.push(k,v);
return (new cljs.core.HashMap(this__12735.meta,(this__12735.count + 1),new_hashobj__12743));
}
} else
{var new_hashobj__12782 = goog.object.clone.call(null,this__12735.hashobj);

(new_hashobj__12782[h__12739] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12735.meta,(this__12735.count + 1),new_hashobj__12782));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12789 = this;
var bucket__12791 = (this__12789.hashobj[cljs.core.hash.call(null,k)]);
var i__12792 = (cljs.core.truth_(bucket__12791)?cljs.core.scan_array.call(null,2,k,bucket__12791):null);

if(cljs.core.truth_(i__12792))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12887 = null;
var G__12887__12888 = (function (coll,k){
var this__12795 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12887__12889 = (function (coll,k,not_found){
var this__12796 = this;
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
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12799 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12802 = this;
if(cljs.core.truth_((this__12802.count > 0)))
{var hashes__12811 = cljs.core.js_keys.call(null,this__12802.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12712_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12802.hashobj[p1__12712_SHARP_])));
}),hashes__12811);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12814 = this;
return this__12814.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12816 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12817 = this;
return (new cljs.core.HashMap(meta,this__12817.count,this__12817.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12819 = this;
return this__12819.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12822 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12822.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12827 = this;
var h__12829 = cljs.core.hash.call(null,k);
var bucket__12830 = (this__12827.hashobj[h__12829]);
var i__12831 = (cljs.core.truth_(bucket__12830)?cljs.core.scan_array.call(null,2,k,bucket__12830):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12831)))
{return coll;
} else
{var new_hashobj__12833 = goog.object.clone.call(null,this__12827.hashobj);

if(cljs.core.truth_((3 > bucket__12830.length)))
{cljs.core.js_delete.call(null,new_hashobj__12833,h__12829);
} else
{var new_bucket__12836 = cljs.core.aclone.call(null,bucket__12830);

new_bucket__12836.splice(i__12831,2);
(new_hashobj__12833[h__12829] = new_bucket__12836);
}
return (new cljs.core.HashMap(this__12827.meta,(this__12827.count - 1),new_hashobj__12833));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12959 = ks.length;

var i__12960 = 0;
var out__12961 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12960 < len__12959)))
{{
var G__12966 = (i__12960 + 1);
var G__12967 = cljs.core.assoc.call(null,out__12961,(ks[i__12960]),(vs[i__12960]));
i__12960 = G__12966;
out__12961 = G__12967;
continue;
}
} else
{return out__12961;
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
var in$__12971 = cljs.core.seq.call(null,keyvals);
var out__12972 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12971))
{{
var G__12983 = cljs.core.nnext.call(null,in$__12971);
var G__12984 = cljs.core.assoc.call(null,out__12972,cljs.core.first.call(null,in$__12971),cljs.core.second.call(null,in$__12971));
in$__12971 = G__12983;
out__12972 = G__12984;
continue;
}
} else
{return out__12972;
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
hash_map.cljs$lang$applyTo = (function (arglist__12986){
var keyvals = cljs.core.seq( arglist__12986 );;
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
{return cljs.core.reduce.call(null,(function (p1__12992_SHARP_,p2__12995_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13004 = p1__12992_SHARP_;

if(cljs.core.truth_(or__3548__auto____13004))
{return or__3548__auto____13004;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12995_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13007){
var maps = cljs.core.seq( arglist__13007 );;
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
{var merge_entry__13013 = (function (m,e){
var k__13011 = cljs.core.first.call(null,e);
var v__13012 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13011)))
{return cljs.core.assoc.call(null,m,k__13011,f.call(null,cljs.core.get.call(null,m,k__13011),v__13012));
} else
{return cljs.core.assoc.call(null,m,k__13011,v__13012);
}
});
var merge2__13016 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13013,(function (){var or__3548__auto____13015 = m1;

if(cljs.core.truth_(or__3548__auto____13015))
{return or__3548__auto____13015;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13016,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13029){
var f = cljs.core.first(arglist__13029);
var maps = cljs.core.rest(arglist__13029);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13036 = cljs.core.ObjMap.fromObject([],{});
var keys__13038 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13038))
{var key__13040 = cljs.core.first.call(null,keys__13038);
var entry__13042 = cljs.core.get.call(null,map,key__13040,"﷐'user/not-found");

{
var G__13047 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13042,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13036,key__13040,entry__13042):ret__13036);
var G__13048 = cljs.core.next.call(null,keys__13038);
ret__13036 = G__13047;
keys__13038 = G__13048;
continue;
}
} else
{return ret__13036;
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
var this__13061 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13149 = null;
var G__13149__13150 = (function (coll,v){
var this__13064 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13149__13151 = (function (coll,v,not_found){
var this__13065 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13065.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13149 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13149__13150.call(this,coll,v);
case  3 :
return G__13149__13151.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13149;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13153 = null;
var G__13153__13154 = (function (coll,k){
var this__13069 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13153__13155 = (function (coll,k,not_found){
var this__13070 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13153 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13153__13154.call(this,coll,k);
case  3 :
return G__13153__13155.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13153;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13086 = this;
return (new cljs.core.Set(this__13086.meta,cljs.core.assoc.call(null,this__13086.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13092 = this;
return cljs.core.keys.call(null,this__13092.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13094 = this;
return (new cljs.core.Set(this__13094.meta,cljs.core.dissoc.call(null,this__13094.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13096 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13098 = this;
var and__3546__auto____13101 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13101))
{var and__3546__auto____13125 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13125))
{return cljs.core.every_QMARK_.call(null,(function (p1__13031_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13031_SHARP_);
}),other);
} else
{return and__3546__auto____13125;
}
} else
{return and__3546__auto____13101;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13130 = this;
return (new cljs.core.Set(meta,this__13130.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13135 = this;
return this__13135.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13148 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13148.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13186 = cljs.core.seq.call(null,coll);
var out__13187 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13186))))
{{
var G__13189 = cljs.core.rest.call(null,in$__13186);
var G__13190 = cljs.core.conj.call(null,out__13187,cljs.core.first.call(null,in$__13186));
in$__13186 = G__13189;
out__13187 = G__13190;
continue;
}
} else
{return out__13187;
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
{var n__13195 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13197 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13197))
{var e__13198 = temp__3695__auto____13197;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13198));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13195,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13185_SHARP_){
var temp__3695__auto____13219 = cljs.core.find.call(null,smap,p1__13185_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13219))
{var e__13220 = temp__3695__auto____13219;

return cljs.core.second.call(null,e__13220);
} else
{return p1__13185_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13250 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13239,seen){
while(true){
var vec__13240__13241 = p__13239;
var f__13242 = cljs.core.nth.call(null,vec__13240__13241,0,null);
var xs__13243 = vec__13240__13241;

var temp__3698__auto____13244 = cljs.core.seq.call(null,xs__13243);

if(cljs.core.truth_(temp__3698__auto____13244))
{var s__13245 = temp__3698__auto____13244;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13242)))
{{
var G__13252 = cljs.core.rest.call(null,s__13245);
var G__13253 = seen;
p__13239 = G__13252;
seen = G__13253;
continue;
}
} else
{return cljs.core.cons.call(null,f__13242,step.call(null,cljs.core.rest.call(null,s__13245),cljs.core.conj.call(null,seen,f__13242)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13250.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13262 = cljs.core.Vector.fromArray([]);
var s__13263 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13263)))
{{
var G__13264 = cljs.core.conj.call(null,ret__13262,cljs.core.first.call(null,s__13263));
var G__13265 = cljs.core.next.call(null,s__13263);
ret__13262 = G__13264;
s__13263 = G__13265;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13262);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13272 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13272))
{return or__3548__auto____13272;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13273 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13273 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13273 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13282 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13282))
{return or__3548__auto____13282;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13283 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13283 > -1)))
{return cljs.core.subs.call(null,x,2,i__13283);
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
var map__13299 = cljs.core.ObjMap.fromObject([],{});
var ks__13300 = cljs.core.seq.call(null,keys);
var vs__13302 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13304 = ks__13300;

if(cljs.core.truth_(and__3546__auto____13304))
{return vs__13302;
} else
{return and__3546__auto____13304;
}
})()))
{{
var G__13306 = cljs.core.assoc.call(null,map__13299,cljs.core.first.call(null,ks__13300),cljs.core.first.call(null,vs__13302));
var G__13308 = cljs.core.next.call(null,ks__13300);
var G__13309 = cljs.core.next.call(null,vs__13302);
map__13299 = G__13306;
ks__13300 = G__13308;
vs__13302 = G__13309;
continue;
}
} else
{return map__13299;
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
var max_key__13315 = (function (k,x){
return x;
});
var max_key__13316 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13318 = (function() { 
var G__13321__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13294_SHARP_,p2__13295_SHARP_){
return max_key.call(null,k,p1__13294_SHARP_,p2__13295_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13321 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13321__delegate.call(this, k, x, y, more);
};
G__13321.cljs$lang$maxFixedArity = 3;
G__13321.cljs$lang$applyTo = (function (arglist__13325){
var k = cljs.core.first(arglist__13325);
var x = cljs.core.first(cljs.core.next(arglist__13325));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13325)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13325)));
return G__13321__delegate.call(this, k, x, y, more);
});
return G__13321;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13315.call(this,k,x);
case  3 :
return max_key__13316.call(this,k,x,y);
default:
return max_key__13318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13318.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13345 = (function (k,x){
return x;
});
var min_key__13347 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13348 = (function() { 
var G__13351__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13311_SHARP_,p2__13312_SHARP_){
return min_key.call(null,k,p1__13311_SHARP_,p2__13312_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13351 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13351__delegate.call(this, k, x, y, more);
};
G__13351.cljs$lang$maxFixedArity = 3;
G__13351.cljs$lang$applyTo = (function (arglist__13355){
var k = cljs.core.first(arglist__13355);
var x = cljs.core.first(cljs.core.next(arglist__13355));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13355)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13355)));
return G__13351__delegate.call(this, k, x, y, more);
});
return G__13351;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13345.call(this,k,x);
case  3 :
return min_key__13347.call(this,k,x,y);
default:
return min_key__13348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13348.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13372 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13373 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13366 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13366))
{var s__13367 = temp__3698__auto____13366;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13367),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13367)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13372.call(this,n,step);
case  3 :
return partition_all__13373.call(this,n,step,coll);
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
var temp__3698__auto____13406 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13406))
{var s__13407 = temp__3698__auto____13406;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13407))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13407),take_while.call(null,pred,cljs.core.rest.call(null,s__13407)));
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
var this__13420 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13426 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13478 = null;
var G__13478__13479 = (function (rng,f){
var this__13428 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13478__13480 = (function (rng,f,s){
var this__13430 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13478 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13478__13479.call(this,rng,f);
case  3 :
return G__13478__13480.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13478;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13432 = this;
var comp__13434 = (cljs.core.truth_((this__13432.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13434.call(null,this__13432.start,this__13432.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13436 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13436.end - this__13436.start) / this__13436.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13438 = this;
return this__13438.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13441 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13441.meta,(this__13441.start + this__13441.step),this__13441.end,this__13441.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13446 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13448 = this;
return (new cljs.core.Range(meta,this__13448.start,this__13448.end,this__13448.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13451 = this;
return this__13451.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13501 = null;
var G__13501__13502 = (function (rng,n){
var this__13453 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13453.start + (n * this__13453.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13456 = (this__13453.start > this__13453.end);

if(cljs.core.truth_(and__3546__auto____13456))
{return cljs.core._EQ_.call(null,this__13453.step,0);
} else
{return and__3546__auto____13456;
}
})()))
{return this__13453.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13501__13503 = (function (rng,n,not_found){
var this__13458 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13458.start + (n * this__13458.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13461 = (this__13458.start > this__13458.end);

if(cljs.core.truth_(and__3546__auto____13461))
{return cljs.core._EQ_.call(null,this__13458.step,0);
} else
{return and__3546__auto____13461;
}
})()))
{return this__13458.start;
} else
{return not_found;
}
}
});
G__13501 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13501__13502.call(this,rng,n);
case  3 :
return G__13501__13503.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13501;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13464 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13464.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13516 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13518 = (function (end){
return range.call(null,0,end,1);
});
var range__13519 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13520 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13516.call(this);
case  1 :
return range__13518.call(this,start);
case  2 :
return range__13519.call(this,start,end);
case  3 :
return range__13520.call(this,start,end,step);
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
var temp__3698__auto____13525 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13525))
{var s__13526 = temp__3698__auto____13525;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13526),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13526)));
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
var temp__3698__auto____13573 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13573))
{var s__13574 = temp__3698__auto____13573;

var fst__13575 = cljs.core.first.call(null,s__13574);
var fv__13576 = f.call(null,fst__13575);
var run__13577 = cljs.core.cons.call(null,fst__13575,cljs.core.take_while.call(null,(function (p1__13534_SHARP_){
return cljs.core._EQ_.call(null,fv__13576,f.call(null,p1__13534_SHARP_));
}),cljs.core.next.call(null,s__13574)));

return cljs.core.cons.call(null,run__13577,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13577),s__13574))));
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
var reductions__13612 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13605 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13605))
{var s__13606 = temp__3695__auto____13605;

return reductions.call(null,f,cljs.core.first.call(null,s__13606),cljs.core.rest.call(null,s__13606));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13614 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13608 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13608))
{var s__13610 = temp__3698__auto____13608;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13610)),cljs.core.rest.call(null,s__13610));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13612.call(this,f,init);
case  3 :
return reductions__13614.call(this,f,init,coll);
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
var juxt__13634 = (function (f){
return (function() {
var G__13643 = null;
var G__13643__13644 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13643__13645 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13643__13646 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13643__13647 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13643__13648 = (function() { 
var G__13650__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13650 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13650__delegate.call(this, x, y, z, args);
};
G__13650.cljs$lang$maxFixedArity = 3;
G__13650.cljs$lang$applyTo = (function (arglist__13651){
var x = cljs.core.first(arglist__13651);
var y = cljs.core.first(cljs.core.next(arglist__13651));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13651)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13651)));
return G__13650__delegate.call(this, x, y, z, args);
});
return G__13650;
})()
;
G__13643 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13643__13644.call(this);
case  1 :
return G__13643__13645.call(this,x);
case  2 :
return G__13643__13646.call(this,x,y);
case  3 :
return G__13643__13647.call(this,x,y,z);
default:
return G__13643__13648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13643.cljs$lang$maxFixedArity = 3;
G__13643.cljs$lang$applyTo = G__13643__13648.cljs$lang$applyTo;
return G__13643;
})()
});
var juxt__13635 = (function (f,g){
return (function() {
var G__13665 = null;
var G__13665__13666 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13665__13667 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13665__13668 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13665__13669 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13665__13670 = (function() { 
var G__13675__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13675__delegate.call(this, x, y, z, args);
};
G__13675.cljs$lang$maxFixedArity = 3;
G__13675.cljs$lang$applyTo = (function (arglist__13676){
var x = cljs.core.first(arglist__13676);
var y = cljs.core.first(cljs.core.next(arglist__13676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13676)));
return G__13675__delegate.call(this, x, y, z, args);
});
return G__13675;
})()
;
G__13665 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13665__13666.call(this);
case  1 :
return G__13665__13667.call(this,x);
case  2 :
return G__13665__13668.call(this,x,y);
case  3 :
return G__13665__13669.call(this,x,y,z);
default:
return G__13665__13670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13665.cljs$lang$maxFixedArity = 3;
G__13665.cljs$lang$applyTo = G__13665__13670.cljs$lang$applyTo;
return G__13665;
})()
});
var juxt__13636 = (function (f,g,h){
return (function() {
var G__13678 = null;
var G__13678__13679 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13678__13680 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13678__13681 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13678__13682 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13678__13683 = (function() { 
var G__13689__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13689 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13689__delegate.call(this, x, y, z, args);
};
G__13689.cljs$lang$maxFixedArity = 3;
G__13689.cljs$lang$applyTo = (function (arglist__13691){
var x = cljs.core.first(arglist__13691);
var y = cljs.core.first(cljs.core.next(arglist__13691));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13691)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13691)));
return G__13689__delegate.call(this, x, y, z, args);
});
return G__13689;
})()
;
G__13678 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13678__13679.call(this);
case  1 :
return G__13678__13680.call(this,x);
case  2 :
return G__13678__13681.call(this,x,y);
case  3 :
return G__13678__13682.call(this,x,y,z);
default:
return G__13678__13683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13678.cljs$lang$maxFixedArity = 3;
G__13678.cljs$lang$applyTo = G__13678__13683.cljs$lang$applyTo;
return G__13678;
})()
});
var juxt__13637 = (function() { 
var G__13694__delegate = function (f,g,h,fs){
var fs__13628 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13696 = null;
var G__13696__13698 = (function (){
return cljs.core.reduce.call(null,(function (p1__13584_SHARP_,p2__13586_SHARP_){
return cljs.core.conj.call(null,p1__13584_SHARP_,p2__13586_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13628);
});
var G__13696__13699 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13588_SHARP_,p2__13591_SHARP_){
return cljs.core.conj.call(null,p1__13588_SHARP_,p2__13591_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13628);
});
var G__13696__13700 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13592_SHARP_,p2__13594_SHARP_){
return cljs.core.conj.call(null,p1__13592_SHARP_,p2__13594_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13628);
});
var G__13696__13701 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13597_SHARP_,p2__13598_SHARP_){
return cljs.core.conj.call(null,p1__13597_SHARP_,p2__13598_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13628);
});
var G__13696__13702 = (function() { 
var G__13706__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13600_SHARP_,p2__13602_SHARP_){
return cljs.core.conj.call(null,p1__13600_SHARP_,cljs.core.apply.call(null,p2__13602_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13628);
};
var G__13706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13706__delegate.call(this, x, y, z, args);
};
G__13706.cljs$lang$maxFixedArity = 3;
G__13706.cljs$lang$applyTo = (function (arglist__13708){
var x = cljs.core.first(arglist__13708);
var y = cljs.core.first(cljs.core.next(arglist__13708));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13708)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13708)));
return G__13706__delegate.call(this, x, y, z, args);
});
return G__13706;
})()
;
G__13696 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13696__13698.call(this);
case  1 :
return G__13696__13699.call(this,x);
case  2 :
return G__13696__13700.call(this,x,y);
case  3 :
return G__13696__13701.call(this,x,y,z);
default:
return G__13696__13702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13696.cljs$lang$maxFixedArity = 3;
G__13696.cljs$lang$applyTo = G__13696__13702.cljs$lang$applyTo;
return G__13696;
})()
};
var G__13694 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13694__delegate.call(this, f, g, h, fs);
};
G__13694.cljs$lang$maxFixedArity = 3;
G__13694.cljs$lang$applyTo = (function (arglist__13710){
var f = cljs.core.first(arglist__13710);
var g = cljs.core.first(cljs.core.next(arglist__13710));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13710)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13710)));
return G__13694__delegate.call(this, f, g, h, fs);
});
return G__13694;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13634.call(this,f);
case  2 :
return juxt__13635.call(this,f,g);
case  3 :
return juxt__13636.call(this,f,g,h);
default:
return juxt__13637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13637.cljs$lang$applyTo;
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
var dorun__13731 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13737 = cljs.core.next.call(null,coll);
coll = G__13737;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13732 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13716 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13716))
{return (n > 0);
} else
{return and__3546__auto____13716;
}
})()))
{{
var G__13739 = (n - 1);
var G__13740 = cljs.core.next.call(null,coll);
n = G__13739;
coll = G__13740;
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
return dorun__13731.call(this,n);
case  2 :
return dorun__13732.call(this,n,coll);
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
var doall__13751 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13752 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13751.call(this,n);
case  2 :
return doall__13752.call(this,n,coll);
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
var matches__13766 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13766),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13766),1)))
{return cljs.core.first.call(null,matches__13766);
} else
{return cljs.core.vec.call(null,matches__13766);
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
var matches__13769 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13769)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13769),1)))
{return cljs.core.first.call(null,matches__13769);
} else
{return cljs.core.vec.call(null,matches__13769);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13772 = cljs.core.re_find.call(null,re,s);
var match_idx__13773 = s.search(re);
var match_str__13774 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13772))?cljs.core.first.call(null,match_data__13772):match_data__13772);
var post_match__13775 = cljs.core.subs.call(null,s,(match_idx__13773 + cljs.core.count.call(null,match_str__13774)));

if(cljs.core.truth_(match_data__13772))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13772,re_seq.call(null,re,post_match__13775));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13795_SHARP_){
return print_one.call(null,p1__13795_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13832 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13832))
{var and__3546__auto____13840 = (function (){var x__445__auto____13834 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13835 = x__445__auto____13834;

if(cljs.core.truth_(and__3546__auto____13835))
{var and__3546__auto____13838 = x__445__auto____13834.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13838))
{return cljs.core.not.call(null,x__445__auto____13834.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13838;
}
} else
{return and__3546__auto____13835;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13834);
}
})();

if(cljs.core.truth_(and__3546__auto____13840))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13840;
}
} else
{return and__3546__auto____13832;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13844 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13845 = x__445__auto____13844;

if(cljs.core.truth_(and__3546__auto____13845))
{var and__3546__auto____13848 = x__445__auto____13844.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13848))
{return cljs.core.not.call(null,x__445__auto____13844.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13848;
}
} else
{return and__3546__auto____13845;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13844);
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
var first_obj__13871 = cljs.core.first.call(null,objs);
var sb__13872 = (new goog.string.StringBuffer());

var G__13873__13874 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13873__13874))
{var obj__13875 = cljs.core.first.call(null,G__13873__13874);
var G__13873__13876 = G__13873__13874;

while(true){
if(cljs.core.truth_((obj__13875 === first_obj__13871)))
{} else
{sb__13872.append(" ");
}
var G__13878__13879 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13875,opts));

if(cljs.core.truth_(G__13878__13879))
{var string__13880 = cljs.core.first.call(null,G__13878__13879);
var G__13878__13882 = G__13878__13879;

while(true){
sb__13872.append(string__13880);
var temp__3698__auto____13887 = cljs.core.next.call(null,G__13878__13882);

if(cljs.core.truth_(temp__3698__auto____13887))
{var G__13878__13892 = temp__3698__auto____13887;

{
var G__13899 = cljs.core.first.call(null,G__13878__13892);
var G__13901 = G__13878__13892;
string__13880 = G__13899;
G__13878__13882 = G__13901;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13895 = cljs.core.next.call(null,G__13873__13876);

if(cljs.core.truth_(temp__3698__auto____13895))
{var G__13873__13896 = temp__3698__auto____13895;

{
var G__13904 = cljs.core.first.call(null,G__13873__13896);
var G__13905 = G__13873__13896;
obj__13875 = G__13904;
G__13873__13876 = G__13905;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13872);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13909 = cljs.core.first.call(null,objs);

var G__13910__13911 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13910__13911))
{var obj__13912 = cljs.core.first.call(null,G__13910__13911);
var G__13910__13913 = G__13910__13911;

while(true){
if(cljs.core.truth_((obj__13912 === first_obj__13909)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13914__13915 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13912,opts));

if(cljs.core.truth_(G__13914__13915))
{var string__13916 = cljs.core.first.call(null,G__13914__13915);
var G__13914__13917 = G__13914__13915;

while(true){
cljs.core.string_print.call(null,string__13916);
var temp__3698__auto____13923 = cljs.core.next.call(null,G__13914__13917);

if(cljs.core.truth_(temp__3698__auto____13923))
{var G__13914__13926 = temp__3698__auto____13923;

{
var G__13997 = cljs.core.first.call(null,G__13914__13926);
var G__13998 = G__13914__13926;
string__13916 = G__13997;
G__13914__13917 = G__13998;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13931 = cljs.core.next.call(null,G__13910__13913);

if(cljs.core.truth_(temp__3698__auto____13931))
{var G__13910__13933 = temp__3698__auto____13931;

{
var G__13999 = cljs.core.first.call(null,G__13910__13933);
var G__14000 = G__13910__13933;
obj__13912 = G__13999;
G__13910__13913 = G__14000;
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
pr_str.cljs$lang$applyTo = (function (arglist__14032){
var objs = cljs.core.seq( arglist__14032 );;
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
pr.cljs$lang$applyTo = (function (arglist__14110){
var objs = cljs.core.seq( arglist__14110 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14122){
var objs = cljs.core.seq( arglist__14122 );;
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
println.cljs$lang$applyTo = (function (arglist__14129){
var objs = cljs.core.seq( arglist__14129 );;
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
prn.cljs$lang$applyTo = (function (arglist__14153){
var objs = cljs.core.seq( arglist__14153 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14162 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14162,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14194 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14194))
{var nspc__14196 = temp__3698__auto____14194;

return cljs.core.str.call(null,nspc__14196,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14199 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14199))
{var nspc__14200 = temp__3698__auto____14199;

return cljs.core.str.call(null,nspc__14200,"/");
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
var pr_pair__14211 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14211,"{",", ","}",opts,coll);
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
var this__14289 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14290 = this;
var G__14291__14292 = cljs.core.seq.call(null,this__14290.watches);

if(cljs.core.truth_(G__14291__14292))
{var G__14295__14297 = cljs.core.first.call(null,G__14291__14292);
var vec__14296__14298 = G__14295__14297;
var key__14299 = cljs.core.nth.call(null,vec__14296__14298,0,null);
var f__14300 = cljs.core.nth.call(null,vec__14296__14298,1,null);
var G__14291__14301 = G__14291__14292;

var G__14295__14302 = G__14295__14297;
var G__14291__14303 = G__14291__14301;

while(true){
var vec__14304__14306 = G__14295__14302;
var key__14309 = cljs.core.nth.call(null,vec__14304__14306,0,null);
var f__14311 = cljs.core.nth.call(null,vec__14304__14306,1,null);
var G__14291__14312 = G__14291__14303;

f__14311.call(null,key__14309,this$,oldval,newval);
var temp__3698__auto____14313 = cljs.core.next.call(null,G__14291__14312);

if(cljs.core.truth_(temp__3698__auto____14313))
{var G__14291__14314 = temp__3698__auto____14313;

{
var G__14340 = cljs.core.first.call(null,G__14291__14314);
var G__14342 = G__14291__14314;
G__14295__14302 = G__14340;
G__14291__14303 = G__14342;
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
var this__14315 = this;
return this$.watches = cljs.core.assoc.call(null,this__14315.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14316 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14316.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14317 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14317.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14318 = this;
return this__14318.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14320 = this;
return this__14320.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14321 = this;
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
var atom__14396 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14397 = (function() { 
var G__14399__delegate = function (x,p__14372){
var map__14377__14380 = p__14372;
var map__14377__14381 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14377__14380))?cljs.core.apply.call(null,cljs.core.hash_map,map__14377__14380):map__14377__14380);
var validator__14383 = cljs.core.get.call(null,map__14377__14381,"﷐'validator");
var meta__14385 = cljs.core.get.call(null,map__14377__14381,"﷐'meta");

return (new cljs.core.Atom(x,meta__14385,validator__14383,null));
};
var G__14399 = function (x,var_args){
var p__14372 = null;
if (goog.isDef(var_args)) {
  p__14372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14399__delegate.call(this, x, p__14372);
};
G__14399.cljs$lang$maxFixedArity = 1;
G__14399.cljs$lang$applyTo = (function (arglist__14404){
var x = cljs.core.first(arglist__14404);
var p__14372 = cljs.core.rest(arglist__14404);
return G__14399__delegate.call(this, x, p__14372);
});
return G__14399;
})()
;
atom = function(x,var_args){
var p__14372 = var_args;
switch(arguments.length){
case  1 :
return atom__14396.call(this,x);
default:
return atom__14397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14397.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14409 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14409))
{var validate__14410 = temp__3698__auto____14409;

if(cljs.core.truth_(validate__14410.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14412 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14412,new_value);
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
var swap_BANG___14427 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14428 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14429 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14430 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14431 = (function() { 
var G__14439__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14439 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14439__delegate.call(this, a, f, x, y, z, more);
};
G__14439.cljs$lang$maxFixedArity = 5;
G__14439.cljs$lang$applyTo = (function (arglist__14443){
var a = cljs.core.first(arglist__14443);
var f = cljs.core.first(cljs.core.next(arglist__14443));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14443)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14443))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14443)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14443)))));
return G__14439__delegate.call(this, a, f, x, y, z, more);
});
return G__14439;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14427.call(this,a,f);
case  3 :
return swap_BANG___14428.call(this,a,f,x);
case  4 :
return swap_BANG___14429.call(this,a,f,x,y);
case  5 :
return swap_BANG___14430.call(this,a,f,x,y,z);
default:
return swap_BANG___14431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14431.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14488){
var iref = cljs.core.first(arglist__14488);
var f = cljs.core.first(cljs.core.next(arglist__14488));
var args = cljs.core.rest(cljs.core.next(arglist__14488));
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
var gensym__14497 = (function (){
return gensym.call(null,"G__");
});
var gensym__14498 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14497.call(this);
case  1 :
return gensym__14498.call(this,prefix_string);
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
var this__14578 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14578.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14580 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14580.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14580.state,this__14580.f);
}
return cljs.core.deref.call(null,this__14580.state);
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
delay.cljs$lang$applyTo = (function (arglist__14610){
var body = cljs.core.seq( arglist__14610 );;
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
var map__14632__14633 = options;
var map__14632__14636 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14632__14633))?cljs.core.apply.call(null,cljs.core.hash_map,map__14632__14633):map__14632__14633);
var keywordize_keys__14637 = cljs.core.get.call(null,map__14632__14636,"﷐'keywordize-keys");
var keyfn__14638 = (cljs.core.truth_(keywordize_keys__14637)?cljs.core.keyword:cljs.core.str);
var f__14655 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14653 = (function iter__14641(s__14642){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14642__14644 = s__14642;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14642__14644)))
{var k__14647 = cljs.core.first.call(null,s__14642__14644);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14638.call(null,k__14647),thisfn.call(null,(x[k__14647]))]),iter__14641.call(null,cljs.core.rest.call(null,s__14642__14644)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14653.call(null,cljs.core.js_keys.call(null,x));
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

return f__14655.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14686){
var x = cljs.core.first(arglist__14686);
var options = cljs.core.rest(arglist__14686);
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
var mem__14687 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14699__delegate = function (args){
var temp__3695__auto____14691 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14687),args);

if(cljs.core.truth_(temp__3695__auto____14691))
{var v__14693 = temp__3695__auto____14691;

return v__14693;
} else
{var ret__14696 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14687,cljs.core.assoc,args,ret__14696);
return ret__14696;
}
};
var G__14699 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14699__delegate.call(this, args);
};
G__14699.cljs$lang$maxFixedArity = 0;
G__14699.cljs$lang$applyTo = (function (arglist__14700){
var args = cljs.core.seq( arglist__14700 );;
return G__14699__delegate.call(this, args);
});
return G__14699;
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
var trampoline__14716 = (function (f){
while(true){
var ret__14704 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14704)))
{{
var G__14719 = ret__14704;
f = G__14719;
continue;
}
} else
{return ret__14704;
}
break;
}
});
var trampoline__14717 = (function() { 
var G__14720__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14720 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14720__delegate.call(this, f, args);
};
G__14720.cljs$lang$maxFixedArity = 1;
G__14720.cljs$lang$applyTo = (function (arglist__14722){
var f = cljs.core.first(arglist__14722);
var args = cljs.core.rest(arglist__14722);
return G__14720__delegate.call(this, f, args);
});
return G__14720;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14716.call(this,f);
default:
return trampoline__14717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14717.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14723 = (function (){
return rand.call(null,1);
});
var rand__14724 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14723.call(this);
case  1 :
return rand__14724.call(this,n);
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
var k__14736 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14736,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14736,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14763 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14764 = (function (h,child,parent){
var or__3548__auto____14741 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14741))
{return or__3548__auto____14741;
} else
{var or__3548__auto____14744 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14744))
{return or__3548__auto____14744;
} else
{var and__3546__auto____14746 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14746))
{var and__3546__auto____14748 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14748))
{var and__3546__auto____14752 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14752))
{var ret__14754 = true;
var i__14755 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14757 = cljs.core.not.call(null,ret__14754);

if(cljs.core.truth_(or__3548__auto____14757))
{return or__3548__auto____14757;
} else
{return cljs.core._EQ_.call(null,i__14755,cljs.core.count.call(null,parent));
}
})()))
{return ret__14754;
} else
{{
var G__14767 = isa_QMARK_.call(null,h,child.call(null,i__14755),parent.call(null,i__14755));
var G__14768 = (i__14755 + 1);
ret__14754 = G__14767;
i__14755 = G__14768;
continue;
}
}
break;
}
} else
{return and__3546__auto____14752;
}
} else
{return and__3546__auto____14748;
}
} else
{return and__3546__auto____14746;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14763.call(this,h,child);
case  3 :
return isa_QMARK___14764.call(this,h,child,parent);
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
var parents__14781 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14782 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14781.call(this,h);
case  2 :
return parents__14782.call(this,h,tag);
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
var ancestors__14799 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14800 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14799.call(this,h);
case  2 :
return ancestors__14800.call(this,h,tag);
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
var descendants__14805 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14806 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14805.call(this,h);
case  2 :
return descendants__14806.call(this,h,tag);
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
var derive__14829 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14830 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14821 = "﷐'parents".call(null,h);
var td__14822 = "﷐'descendants".call(null,h);
var ta__14823 = "﷐'ancestors".call(null,h);
var tf__14826 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14828 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14821.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14823.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14823.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14821,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14826.call(null,"﷐'ancestors".call(null,h),tag,td__14822,parent,ta__14823),"﷐'descendants":tf__14826.call(null,"﷐'descendants".call(null,h),parent,ta__14823,tag,td__14822)});
})());

if(cljs.core.truth_(or__3548__auto____14828))
{return or__3548__auto____14828;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14829.call(this,h,tag);
case  3 :
return derive__14830.call(this,h,tag,parent);
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
var underive__14843 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14844 = (function (h,tag,parent){
var parentMap__14839 = "﷐'parents".call(null,h);
var childsParents__14840 = (cljs.core.truth_(parentMap__14839.call(null,tag))?cljs.core.disj.call(null,parentMap__14839.call(null,tag),parent):cljs.core.set([]));
var newParents__14841 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14840))?cljs.core.assoc.call(null,parentMap__14839,tag,childsParents__14840):cljs.core.dissoc.call(null,parentMap__14839,tag));
var deriv_seq__14842 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14811_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14811_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14811_SHARP_),cljs.core.second.call(null,p1__14811_SHARP_)));
}),cljs.core.seq.call(null,newParents__14841)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14839.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14812_SHARP_,p2__14815_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14812_SHARP_,p2__14815_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14842));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14843.call(this,h,tag);
case  3 :
return underive__14844.call(this,h,tag,parent);
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
var xprefs__14940 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14943 = (cljs.core.truth_((function (){var and__3546__auto____14941 = xprefs__14940;

if(cljs.core.truth_(and__3546__auto____14941))
{return xprefs__14940.call(null,y);
} else
{return and__3546__auto____14941;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14943))
{return or__3548__auto____14943;
} else
{var or__3548__auto____14951 = (function (){var ps__14944 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14944) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14944),prefer_table)))
{} else
{}
{
var G__14958 = cljs.core.rest.call(null,ps__14944);
ps__14944 = G__14958;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14951))
{return or__3548__auto____14951;
} else
{var or__3548__auto____14953 = (function (){var ps__14952 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14952) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14952),y,prefer_table)))
{} else
{}
{
var G__14960 = cljs.core.rest.call(null,ps__14952);
ps__14952 = G__14960;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14953))
{return or__3548__auto____14953;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14967 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14967))
{return or__3548__auto____14967;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14977 = cljs.core.reduce.call(null,(function (be,p__14969){
var vec__14970__14971 = p__14969;
var k__14972 = cljs.core.nth.call(null,vec__14970__14971,0,null);
var ___14973 = cljs.core.nth.call(null,vec__14970__14971,1,null);
var e__14974 = vec__14970__14971;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14972)))
{var be2__14976 = (cljs.core.truth_((function (){var or__3548__auto____14975 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14975))
{return or__3548__auto____14975;
} else
{return cljs.core.dominates.call(null,k__14972,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14974:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14976),k__14972,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14972," and ",cljs.core.first.call(null,be2__14976),", and neither is preferred")));
}
return be2__14976;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14977))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14977));
return cljs.core.second.call(null,best_entry__14977);
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
if(cljs.core.truth_((function (){var and__3546__auto____15032 = mf;

if(cljs.core.truth_(and__3546__auto____15032))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15032;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15037 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15037))
{return or__3548__auto____15037;
} else
{var or__3548__auto____15041 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15041))
{return or__3548__auto____15041;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15054 = mf;

if(cljs.core.truth_(and__3546__auto____15054))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15054;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15058 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15058))
{return or__3548__auto____15058;
} else
{var or__3548__auto____15060 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15060))
{return or__3548__auto____15060;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15064 = mf;

if(cljs.core.truth_(and__3546__auto____15064))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15064;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15066 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15066))
{return or__3548__auto____15066;
} else
{var or__3548__auto____15067 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15067))
{return or__3548__auto____15067;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15069 = mf;

if(cljs.core.truth_(and__3546__auto____15069))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15069;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15072 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15072))
{return or__3548__auto____15072;
} else
{var or__3548__auto____15073 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15073))
{return or__3548__auto____15073;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15075 = mf;

if(cljs.core.truth_(and__3546__auto____15075))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15075;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15080 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15080))
{return or__3548__auto____15080;
} else
{var or__3548__auto____15081 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15081))
{return or__3548__auto____15081;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15083 = mf;

if(cljs.core.truth_(and__3546__auto____15083))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15083;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15084 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15084))
{return or__3548__auto____15084;
} else
{var or__3548__auto____15085 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15085))
{return or__3548__auto____15085;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15089 = mf;

if(cljs.core.truth_(and__3546__auto____15089))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15089;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15093 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15093))
{return or__3548__auto____15093;
} else
{var or__3548__auto____15094 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15095 = mf;

if(cljs.core.truth_(and__3546__auto____15095))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15095;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15096 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15096))
{return or__3548__auto____15096;
} else
{var or__3548__auto____15097 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15097))
{return or__3548__auto____15097;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15121 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15122 = cljs.core._get_method.call(null,mf,dispatch_val__15121);

if(cljs.core.truth_(target_fn__15122))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15121)));
}
return cljs.core.apply.call(null,target_fn__15122,args);
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
var this__15135 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15137 = this;
cljs.core.swap_BANG_.call(null,this__15137.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15137.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15137.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15137.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15141 = this;
cljs.core.swap_BANG_.call(null,this__15141.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15141.method_cache,this__15141.method_table,this__15141.cached_hierarchy,this__15141.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15142 = this;
cljs.core.swap_BANG_.call(null,this__15142.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15142.method_cache,this__15142.method_table,this__15142.cached_hierarchy,this__15142.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15143 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15143.cached_hierarchy),cljs.core.deref.call(null,this__15143.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15143.method_cache,this__15143.method_table,this__15143.cached_hierarchy,this__15143.hierarchy);
}
var temp__3695__auto____15145 = cljs.core.deref.call(null,this__15143.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15145))
{var target_fn__15146 = temp__3695__auto____15145;

return target_fn__15146;
} else
{var temp__3695__auto____15148 = cljs.core.find_and_cache_best_method.call(null,this__15143.name,dispatch_val,this__15143.hierarchy,this__15143.method_table,this__15143.prefer_table,this__15143.method_cache,this__15143.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15148))
{var target_fn__15149 = temp__3695__auto____15148;

return target_fn__15149;
} else
{return cljs.core.deref.call(null,this__15143.method_table).call(null,this__15143.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15186 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15186.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15186.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15186.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15186.method_cache,this__15186.method_table,this__15186.cached_hierarchy,this__15186.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15187 = this;
return cljs.core.deref.call(null,this__15187.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15188 = this;
return cljs.core.deref.call(null,this__15188.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15190 = this;
return cljs.core.do_dispatch.call(null,mf,this__15190.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15226__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15226 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15226__delegate.call(this, _, args);
};
G__15226.cljs$lang$maxFixedArity = 1;
G__15226.cljs$lang$applyTo = (function (arglist__15229){
var _ = cljs.core.first(arglist__15229);
var args = cljs.core.rest(arglist__15229);
return G__15226__delegate.call(this, _, args);
});
return G__15226;
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
