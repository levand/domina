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
var or__3548__auto____7244 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{var or__3548__auto____7245 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7245))
{return or__3548__auto____7245;
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
var _invoke__7501 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7270 = this$;

if(cljs.core.truth_(and__3546__auto____7270))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7270;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7271 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
} else
{var or__3548__auto____7273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7502 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7275 = this$;

if(cljs.core.truth_(and__3546__auto____7275))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7275;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7277 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{var or__3548__auto____7278 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7503 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7280 = this$;

if(cljs.core.truth_(and__3546__auto____7280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7504 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7294 = this$;

if(cljs.core.truth_(and__3546__auto____7294))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7294;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{var or__3548__auto____7300 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7505 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = this$;

if(cljs.core.truth_(and__3546__auto____7302))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7302;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7304 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
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
var _invoke__7506 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7310 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{var or__3548__auto____7313 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7507 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7315 = this$;

if(cljs.core.truth_(and__3546__auto____7315))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7315;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7317 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{var or__3548__auto____7319 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7508 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7327 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7509 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7330 = this$;

if(cljs.core.truth_(and__3546__auto____7330))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7330;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7334 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{var or__3548__auto____7336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7510 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7339 = this$;

if(cljs.core.truth_(and__3546__auto____7339))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7339;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7343 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{var or__3548__auto____7344 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7511 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7348 = this$;

if(cljs.core.truth_(and__3546__auto____7348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7353 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{var or__3548__auto____7354 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7512 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7358 = this$;

if(cljs.core.truth_(and__3546__auto____7358))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7358;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7513 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7370 = this$;

if(cljs.core.truth_(and__3546__auto____7370))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7370;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7374 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{var or__3548__auto____7376 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7514 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var or__3548__auto____7392 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7515 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = this$;

if(cljs.core.truth_(and__3546__auto____7399))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7399;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7516 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7426 = this$;

if(cljs.core.truth_(and__3546__auto____7426))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7426;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7430 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{var or__3548__auto____7431 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7517 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7448 = this$;

if(cljs.core.truth_(and__3546__auto____7448))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7448;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7461 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7461))
{return or__3548__auto____7461;
} else
{var or__3548__auto____7463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7518 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7466 = this$;

if(cljs.core.truth_(and__3546__auto____7466))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7466;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7470 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{var or__3548__auto____7472 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7520 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7476 = this$;

if(cljs.core.truth_(and__3546__auto____7476))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7476;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7480 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7480))
{return or__3548__auto____7480;
} else
{var or__3548__auto____7482 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7521 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{var or__3548__auto____7492 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7522 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7496 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{var or__3548__auto____7498 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
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
return _invoke__7501.call(this,this$);
case  2 :
return _invoke__7502.call(this,this$,a);
case  3 :
return _invoke__7503.call(this,this$,a,b);
case  4 :
return _invoke__7504.call(this,this$,a,b,c);
case  5 :
return _invoke__7505.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7506.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7507.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7508.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7509.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7510.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7511.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7512.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7513.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7514.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7515.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7516.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7517.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7518.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7520.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7521.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7522.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7632 = coll;

if(cljs.core.truth_(and__3546__auto____7632))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7632;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7635 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7635))
{return or__3548__auto____7635;
} else
{var or__3548__auto____7636 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7636))
{return or__3548__auto____7636;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7641 = coll;

if(cljs.core.truth_(and__3546__auto____7641))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7641;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7644 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{var or__3548__auto____7645 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7645))
{return or__3548__auto____7645;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7697 = coll;

if(cljs.core.truth_(and__3546__auto____7697))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7697;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7704 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
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
var _nth__7721 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7713 = coll;

if(cljs.core.truth_(and__3546__auto____7713))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7713;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7717 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7722 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7718 = coll;

if(cljs.core.truth_(and__3546__auto____7718))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7718;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7720 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
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
return _nth__7721.call(this,coll,n);
case  3 :
return _nth__7722.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7738 = coll;

if(cljs.core.truth_(and__3546__auto____7738))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7738;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7742 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{var or__3548__auto____7744 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
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
{return (function (){var or__3548__auto____7755 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{var or__3548__auto____7756 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
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
var _lookup__7793 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7765 = o;

if(cljs.core.truth_(and__3546__auto____7765))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7765;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7775 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
} else
{var or__3548__auto____7777 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7794 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7782 = o;

if(cljs.core.truth_(and__3546__auto____7782))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7782;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7787 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{var or__3548__auto____7791 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
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
return _lookup__7793.call(this,o,k);
case  3 :
return _lookup__7794.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = coll;

if(cljs.core.truth_(and__3546__auto____7804))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7804;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7807 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{var or__3548__auto____7808 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7812 = coll;

if(cljs.core.truth_(and__3546__auto____7812))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7812;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7816 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7851 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{var or__3548__auto____7852 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7858 = coll;

if(cljs.core.truth_(and__3546__auto____7858))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7858;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7861 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7866 = coll;

if(cljs.core.truth_(and__3546__auto____7866))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7866;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7867 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{var or__3548__auto____7868 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7869 = coll;

if(cljs.core.truth_(and__3546__auto____7869))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7869;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7871 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
} else
{var or__3548__auto____7873 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7873))
{return or__3548__auto____7873;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7881 = coll;

if(cljs.core.truth_(and__3546__auto____7881))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7881;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{var or__3548__auto____7884 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = o;

if(cljs.core.truth_(and__3546__auto____7918))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7918;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7920 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{var or__3548__auto____7921 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7947 = o;

if(cljs.core.truth_(and__3546__auto____7947))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7947;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7991 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8003 = o;

if(cljs.core.truth_(and__3546__auto____8003))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8003;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8004 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8005 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = o;

if(cljs.core.truth_(and__3546__auto____8016))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8016;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8021 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
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
var _reduce__8033 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8024 = coll;

if(cljs.core.truth_(and__3546__auto____8024))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8024;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8026 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{var or__3548__auto____8027 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8034 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8030 = coll;

if(cljs.core.truth_(and__3546__auto____8030))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8030;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8031 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8032 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
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
return _reduce__8033.call(this,coll,f);
case  3 :
return _reduce__8034.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8052 = o;

if(cljs.core.truth_(and__3546__auto____8052))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8052;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8054 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{var or__3548__auto____8056 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
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
{return (function (){var or__3548__auto____8060 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{var or__3548__auto____8061 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = o;

if(cljs.core.truth_(and__3546__auto____8076))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8076;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8080 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
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
if(cljs.core.truth_((function (){var and__3546__auto____8085 = o;

if(cljs.core.truth_(and__3546__auto____8085))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8085;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8088 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8088))
{return or__3548__auto____8088;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = d;

if(cljs.core.truth_(and__3546__auto____8094))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8094;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8098 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{var or__3548__auto____8099 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = this$;

if(cljs.core.truth_(and__3546__auto____8100))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8100;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
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
if(cljs.core.truth_((function (){var and__3546__auto____8110 = this$;

if(cljs.core.truth_(and__3546__auto____8110))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8110;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8118 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8119 = this$;

if(cljs.core.truth_(and__3546__auto____8119))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8119;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8127 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
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
var G__8269 = null;
var G__8269__8270 = (function (o,k){
return null;
});
var G__8269__8271 = (function (o,k,not_found){
return not_found;
});
G__8269 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8269__8270.call(this,o,k);
case  3 :
return G__8269__8271.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8269;
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
var G__8273 = null;
var G__8273__8274 = (function (_,f){
return f.call(null);
});
var G__8273__8275 = (function (_,f,start){
return start;
});
G__8273 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8273__8274.call(this,_,f);
case  3 :
return G__8273__8275.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8273;
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
var G__8294 = null;
var G__8294__8295 = (function (_,n){
return null;
});
var G__8294__8296 = (function (_,n,not_found){
return not_found;
});
G__8294 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8294__8295.call(this,_,n);
case  3 :
return G__8294__8296.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8294;
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
var ci_reduce__8327 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8321 = cljs.core._nth.call(null,cicoll,0);
var n__8322 = 1;

while(true){
if(cljs.core.truth_((n__8322 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8321,cljs.core._nth.call(null,cicoll,n__8322));
var G__8332 = (n__8322 + 1);
val__8321 = G__8331;
n__8322 = G__8332;
continue;
}
} else
{return val__8321;
}
break;
}
}
});
var ci_reduce__8328 = (function (cicoll,f,val){
var val__8323 = val;
var n__8324 = 0;

while(true){
if(cljs.core.truth_((n__8324 < cljs.core._count.call(null,cicoll))))
{{
var G__8333 = f.call(null,val__8323,cljs.core._nth.call(null,cicoll,n__8324));
var G__8334 = (n__8324 + 1);
val__8323 = G__8333;
n__8324 = G__8334;
continue;
}
} else
{return val__8323;
}
break;
}
});
var ci_reduce__8329 = (function (cicoll,f,val,idx){
var val__8325 = val;
var n__8326 = idx;

while(true){
if(cljs.core.truth_((n__8326 < cljs.core._count.call(null,cicoll))))
{{
var G__8335 = f.call(null,val__8325,cljs.core._nth.call(null,cicoll,n__8326));
var G__8336 = (n__8326 + 1);
val__8325 = G__8335;
n__8326 = G__8336;
continue;
}
} else
{return val__8325;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8327.call(this,cicoll,f);
case  3 :
return ci_reduce__8328.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8329.call(this,cicoll,f,val,idx);
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
var this__8338 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8355 = null;
var G__8355__8356 = (function (_,f){
var this__8339 = this;
return cljs.core.ci_reduce.call(null,this__8339.a,f,(this__8339.a[this__8339.i]),(this__8339.i + 1));
});
var G__8355__8357 = (function (_,f,start){
var this__8340 = this;
return cljs.core.ci_reduce.call(null,this__8340.a,f,start,this__8340.i);
});
G__8355 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8355__8356.call(this,_,f);
case  3 :
return G__8355__8357.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8355;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8343 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8367 = null;
var G__8367__8368 = (function (coll,n){
var this__8347 = this;
var i__8348 = (n + this__8347.i);

if(cljs.core.truth_((i__8348 < this__8347.a.length)))
{return (this__8347.a[i__8348]);
} else
{return null;
}
});
var G__8367__8369 = (function (coll,n,not_found){
var this__8349 = this;
var i__8350 = (n + this__8349.i);

if(cljs.core.truth_((i__8350 < this__8349.a.length)))
{return (this__8349.a[i__8350]);
} else
{return not_found;
}
});
G__8367 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8367__8368.call(this,coll,n);
case  3 :
return G__8367__8369.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8367;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8351 = this;
return (this__8351.a.length - this__8351.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8352 = this;
return (this__8352.a[this__8352.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8353 = this;
if(cljs.core.truth_(((this__8353.i + 1) < this__8353.a.length)))
{return (new cljs.core.IndexedSeq(this__8353.a,(this__8353.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8354 = this;
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
var G__8399 = null;
var G__8399__8400 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8399__8401 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8399 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8399__8400.call(this,array,f);
case  3 :
return G__8399__8401.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8399;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8407 = null;
var G__8407__8408 = (function (array,k){
return (array[k]);
});
var G__8407__8409 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8407 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8407__8408.call(this,array,k);
case  3 :
return G__8407__8409.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8407;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8412 = null;
var G__8412__8414 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8412__8416 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8412 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8412__8414.call(this,array,n);
case  3 :
return G__8412__8416.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8412;
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
var temp__3698__auto____8420 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8420))
{var s__8421 = temp__3698__auto____8420;

return cljs.core._first.call(null,s__8421);
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
var G__8442 = cljs.core.next.call(null,s);
s = G__8442;
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
var s__8501 = cljs.core.seq.call(null,x);
var n__8503 = 0;

while(true){
if(cljs.core.truth_(s__8501))
{{
var G__8515 = cljs.core.next.call(null,s__8501);
var G__8517 = (n__8503 + 1);
s__8501 = G__8515;
n__8503 = G__8517;
continue;
}
} else
{return n__8503;
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
var conj__8544 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8545 = (function() { 
var G__8547__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8548 = conj.call(null,coll,x);
var G__8549 = cljs.core.first.call(null,xs);
var G__8550 = cljs.core.next.call(null,xs);
coll = G__8548;
x = G__8549;
xs = G__8550;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8547 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8547__delegate.call(this, coll, x, xs);
};
G__8547.cljs$lang$maxFixedArity = 2;
G__8547.cljs$lang$applyTo = (function (arglist__8553){
var coll = cljs.core.first(arglist__8553);
var x = cljs.core.first(cljs.core.next(arglist__8553));
var xs = cljs.core.rest(cljs.core.next(arglist__8553));
return G__8547__delegate.call(this, coll, x, xs);
});
return G__8547;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8544.call(this,coll,x);
default:
return conj__8545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8545.cljs$lang$applyTo;
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
var nth__8619 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8620 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8619.call(this,coll,n);
case  3 :
return nth__8620.call(this,coll,n,not_found);
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
var get__8629 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8631 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8629.call(this,o,k);
case  3 :
return get__8631.call(this,o,k,not_found);
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
var assoc__8642 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8643 = (function() { 
var G__8645__delegate = function (coll,k,v,kvs){
while(true){
var ret__8638 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8646 = ret__8638;
var G__8647 = cljs.core.first.call(null,kvs);
var G__8648 = cljs.core.second.call(null,kvs);
var G__8649 = cljs.core.nnext.call(null,kvs);
coll = G__8646;
k = G__8647;
v = G__8648;
kvs = G__8649;
continue;
}
} else
{return ret__8638;
}
break;
}
};
var G__8645 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8645__delegate.call(this, coll, k, v, kvs);
};
G__8645.cljs$lang$maxFixedArity = 3;
G__8645.cljs$lang$applyTo = (function (arglist__8650){
var coll = cljs.core.first(arglist__8650);
var k = cljs.core.first(cljs.core.next(arglist__8650));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8650)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8650)));
return G__8645__delegate.call(this, coll, k, v, kvs);
});
return G__8645;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8642.call(this,coll,k,v);
default:
return assoc__8643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8643.cljs$lang$applyTo;
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
var dissoc__8656 = (function (coll){
return coll;
});
var dissoc__8657 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8658 = (function() { 
var G__8664__delegate = function (coll,k,ks){
while(true){
var ret__8655 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8666 = ret__8655;
var G__8667 = cljs.core.first.call(null,ks);
var G__8668 = cljs.core.next.call(null,ks);
coll = G__8666;
k = G__8667;
ks = G__8668;
continue;
}
} else
{return ret__8655;
}
break;
}
};
var G__8664 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8664__delegate.call(this, coll, k, ks);
};
G__8664.cljs$lang$maxFixedArity = 2;
G__8664.cljs$lang$applyTo = (function (arglist__8673){
var coll = cljs.core.first(arglist__8673);
var k = cljs.core.first(cljs.core.next(arglist__8673));
var ks = cljs.core.rest(cljs.core.next(arglist__8673));
return G__8664__delegate.call(this, coll, k, ks);
});
return G__8664;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8656.call(this,coll);
case  2 :
return dissoc__8657.call(this,coll,k);
default:
return dissoc__8658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8658.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8678 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8699 = x__445__auto____8678;

if(cljs.core.truth_(and__3546__auto____8699))
{var and__3546__auto____8701 = x__445__auto____8678.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8701))
{return cljs.core.not.call(null,x__445__auto____8678.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8701;
}
} else
{return and__3546__auto____8699;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8678);
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
var disj__8718 = (function (coll){
return coll;
});
var disj__8719 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8720 = (function() { 
var G__8722__delegate = function (coll,k,ks){
while(true){
var ret__8715 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8723 = ret__8715;
var G__8724 = cljs.core.first.call(null,ks);
var G__8725 = cljs.core.next.call(null,ks);
coll = G__8723;
k = G__8724;
ks = G__8725;
continue;
}
} else
{return ret__8715;
}
break;
}
};
var G__8722 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8722__delegate.call(this, coll, k, ks);
};
G__8722.cljs$lang$maxFixedArity = 2;
G__8722.cljs$lang$applyTo = (function (arglist__8730){
var coll = cljs.core.first(arglist__8730);
var k = cljs.core.first(cljs.core.next(arglist__8730));
var ks = cljs.core.rest(cljs.core.next(arglist__8730));
return G__8722__delegate.call(this, coll, k, ks);
});
return G__8722;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8718.call(this,coll);
case  2 :
return disj__8719.call(this,coll,k);
default:
return disj__8720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8720.cljs$lang$applyTo;
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
{var x__445__auto____8744 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8746 = x__445__auto____8744;

if(cljs.core.truth_(and__3546__auto____8746))
{var and__3546__auto____8748 = x__445__auto____8744.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8748))
{return cljs.core.not.call(null,x__445__auto____8744.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8748;
}
} else
{return and__3546__auto____8746;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8744);
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
{var x__445__auto____8777 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8778 = x__445__auto____8777;

if(cljs.core.truth_(and__3546__auto____8778))
{var and__3546__auto____8779 = x__445__auto____8777.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8779))
{return cljs.core.not.call(null,x__445__auto____8777.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8779;
}
} else
{return and__3546__auto____8778;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8777);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8787 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8788 = x__445__auto____8787;

if(cljs.core.truth_(and__3546__auto____8788))
{var and__3546__auto____8791 = x__445__auto____8787.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8791))
{return cljs.core.not.call(null,x__445__auto____8787.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8791;
}
} else
{return and__3546__auto____8788;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8787);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8792 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8796 = x__445__auto____8792;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8800 = x__445__auto____8792.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8800))
{return cljs.core.not.call(null,x__445__auto____8792.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8800;
}
} else
{return and__3546__auto____8796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8792);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8809 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8811 = x__445__auto____8809;

if(cljs.core.truth_(and__3546__auto____8811))
{var and__3546__auto____8814 = x__445__auto____8809.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8814))
{return cljs.core.not.call(null,x__445__auto____8809.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8814;
}
} else
{return and__3546__auto____8811;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8809);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8815 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8816 = x__445__auto____8815;

if(cljs.core.truth_(and__3546__auto____8816))
{var and__3546__auto____8818 = x__445__auto____8815.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8818))
{return cljs.core.not.call(null,x__445__auto____8815.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8818;
}
} else
{return and__3546__auto____8816;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8815);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8823 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8825 = x__445__auto____8823;

if(cljs.core.truth_(and__3546__auto____8825))
{var and__3546__auto____8838 = x__445__auto____8823.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8838))
{return cljs.core.not.call(null,x__445__auto____8823.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8838;
}
} else
{return and__3546__auto____8825;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8823);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8845 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8845.push(key);
}));
return keys__8845;
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
{var x__445__auto____8864 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8865 = x__445__auto____8864;

if(cljs.core.truth_(and__3546__auto____8865))
{var and__3546__auto____8866 = x__445__auto____8864.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8866))
{return cljs.core.not.call(null,x__445__auto____8864.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8866;
}
} else
{return and__3546__auto____8865;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8864);
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
var and__3546__auto____8958 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8958))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8961 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8961))
{return or__3548__auto____8961;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8958;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8968 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8968))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8968;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8972 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8972))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8972;
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
var and__3546__auto____8988 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8988))
{return (n == n.toFixed());
} else
{return and__3546__auto____8988;
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
if(cljs.core.truth_((function (){var and__3546__auto____8997 = coll;

if(cljs.core.truth_(and__3546__auto____8997))
{var and__3546__auto____9040 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9040))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9040;
}
} else
{return and__3546__auto____8997;
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
var distinct_QMARK___9065 = (function (x){
return true;
});
var distinct_QMARK___9066 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9067 = (function() { 
var G__9070__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9054 = cljs.core.set([y,x]);
var xs__9055 = more;

while(true){
var x__9056 = cljs.core.first.call(null,xs__9055);
var etc__9057 = cljs.core.next.call(null,xs__9055);

if(cljs.core.truth_(xs__9055))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9054,x__9056)))
{return false;
} else
{{
var G__9072 = cljs.core.conj.call(null,s__9054,x__9056);
var G__9074 = etc__9057;
s__9054 = G__9072;
xs__9055 = G__9074;
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
var G__9070 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9070__delegate.call(this, x, y, more);
};
G__9070.cljs$lang$maxFixedArity = 2;
G__9070.cljs$lang$applyTo = (function (arglist__9079){
var x = cljs.core.first(arglist__9079);
var y = cljs.core.first(cljs.core.next(arglist__9079));
var more = cljs.core.rest(cljs.core.next(arglist__9079));
return G__9070__delegate.call(this, x, y, more);
});
return G__9070;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9065.call(this,x);
case  2 :
return distinct_QMARK___9066.call(this,x,y);
default:
return distinct_QMARK___9067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9067.cljs$lang$applyTo;
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
var r__9095 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9095)))
{return r__9095;
} else
{if(cljs.core.truth_(r__9095))
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
var sort__9133 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9135 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9120 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9120,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9120);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9133.call(this,comp);
case  2 :
return sort__9135.call(this,comp,coll);
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
var sort_by__9143 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9145 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9143.call(this,keyfn,comp);
case  3 :
return sort_by__9145.call(this,keyfn,comp,coll);
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
var reduce__9162 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9163 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9162.call(this,f,val);
case  3 :
return reduce__9163.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9189 = (function (f,coll){
var temp__3695__auto____9173 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9173))
{var s__9177 = temp__3695__auto____9173;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9177),cljs.core.next.call(null,s__9177));
} else
{return f.call(null);
}
});
var seq_reduce__9190 = (function (f,val,coll){
var val__9182 = val;
var coll__9183 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9183))
{{
var G__9194 = f.call(null,val__9182,cljs.core.first.call(null,coll__9183));
var G__9195 = cljs.core.next.call(null,coll__9183);
val__9182 = G__9194;
coll__9183 = G__9195;
continue;
}
} else
{return val__9182;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9189.call(this,f,val);
case  3 :
return seq_reduce__9190.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9200 = null;
var G__9200__9201 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9200__9202 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9200 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9200__9201.call(this,coll,f);
case  3 :
return G__9200__9202.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9200;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9209 = (function (){
return 0;
});
var _PLUS___9211 = (function (x){
return x;
});
var _PLUS___9212 = (function (x,y){
return (x + y);
});
var _PLUS___9213 = (function() { 
var G__9215__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9215 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9215__delegate.call(this, x, y, more);
};
G__9215.cljs$lang$maxFixedArity = 2;
G__9215.cljs$lang$applyTo = (function (arglist__9218){
var x = cljs.core.first(arglist__9218);
var y = cljs.core.first(cljs.core.next(arglist__9218));
var more = cljs.core.rest(cljs.core.next(arglist__9218));
return G__9215__delegate.call(this, x, y, more);
});
return G__9215;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9209.call(this);
case  1 :
return _PLUS___9211.call(this,x);
case  2 :
return _PLUS___9212.call(this,x,y);
default:
return _PLUS___9213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9213.cljs$lang$applyTo;
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
var ___9228 = (function (x){
return (- x);
});
var ___9229 = (function (x,y){
return (x - y);
});
var ___9230 = (function() { 
var G__9232__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9232 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9232__delegate.call(this, x, y, more);
};
G__9232.cljs$lang$maxFixedArity = 2;
G__9232.cljs$lang$applyTo = (function (arglist__9233){
var x = cljs.core.first(arglist__9233);
var y = cljs.core.first(cljs.core.next(arglist__9233));
var more = cljs.core.rest(cljs.core.next(arglist__9233));
return G__9232__delegate.call(this, x, y, more);
});
return G__9232;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9228.call(this,x);
case  2 :
return ___9229.call(this,x,y);
default:
return ___9230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9230.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9238 = (function (){
return 1;
});
var _STAR___9239 = (function (x){
return x;
});
var _STAR___9241 = (function (x,y){
return (x * y);
});
var _STAR___9242 = (function() { 
var G__9245__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9245__delegate.call(this, x, y, more);
};
G__9245.cljs$lang$maxFixedArity = 2;
G__9245.cljs$lang$applyTo = (function (arglist__9246){
var x = cljs.core.first(arglist__9246);
var y = cljs.core.first(cljs.core.next(arglist__9246));
var more = cljs.core.rest(cljs.core.next(arglist__9246));
return G__9245__delegate.call(this, x, y, more);
});
return G__9245;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9238.call(this);
case  1 :
return _STAR___9239.call(this,x);
case  2 :
return _STAR___9241.call(this,x,y);
default:
return _STAR___9242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9242.cljs$lang$applyTo;
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
var _SLASH___9252 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9254 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9255 = (function() { 
var G__9258__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9258 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9258__delegate.call(this, x, y, more);
};
G__9258.cljs$lang$maxFixedArity = 2;
G__9258.cljs$lang$applyTo = (function (arglist__9259){
var x = cljs.core.first(arglist__9259);
var y = cljs.core.first(cljs.core.next(arglist__9259));
var more = cljs.core.rest(cljs.core.next(arglist__9259));
return G__9258__delegate.call(this, x, y, more);
});
return G__9258;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9252.call(this,x);
case  2 :
return _SLASH___9254.call(this,x,y);
default:
return _SLASH___9255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9255.cljs$lang$applyTo;
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
var _LT___9267 = (function (x){
return true;
});
var _LT___9268 = (function (x,y){
return (x < y);
});
var _LT___9269 = (function() { 
var G__9271__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9272 = y;
var G__9273 = cljs.core.first.call(null,more);
var G__9274 = cljs.core.next.call(null,more);
x = G__9272;
y = G__9273;
more = G__9274;
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
var G__9271 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9271__delegate.call(this, x, y, more);
};
G__9271.cljs$lang$maxFixedArity = 2;
G__9271.cljs$lang$applyTo = (function (arglist__9275){
var x = cljs.core.first(arglist__9275);
var y = cljs.core.first(cljs.core.next(arglist__9275));
var more = cljs.core.rest(cljs.core.next(arglist__9275));
return G__9271__delegate.call(this, x, y, more);
});
return G__9271;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9267.call(this,x);
case  2 :
return _LT___9268.call(this,x,y);
default:
return _LT___9269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9269.cljs$lang$applyTo;
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
var _LT__EQ___9280 = (function (x){
return true;
});
var _LT__EQ___9281 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9282 = (function() { 
var G__9284__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9285 = y;
var G__9286 = cljs.core.first.call(null,more);
var G__9287 = cljs.core.next.call(null,more);
x = G__9285;
y = G__9286;
more = G__9287;
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
var G__9284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9284__delegate.call(this, x, y, more);
};
G__9284.cljs$lang$maxFixedArity = 2;
G__9284.cljs$lang$applyTo = (function (arglist__9291){
var x = cljs.core.first(arglist__9291);
var y = cljs.core.first(cljs.core.next(arglist__9291));
var more = cljs.core.rest(cljs.core.next(arglist__9291));
return G__9284__delegate.call(this, x, y, more);
});
return G__9284;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9280.call(this,x);
case  2 :
return _LT__EQ___9281.call(this,x,y);
default:
return _LT__EQ___9282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9282.cljs$lang$applyTo;
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
var _GT___9298 = (function (x){
return true;
});
var _GT___9299 = (function (x,y){
return (x > y);
});
var _GT___9300 = (function() { 
var G__9305__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9306 = y;
var G__9307 = cljs.core.first.call(null,more);
var G__9308 = cljs.core.next.call(null,more);
x = G__9306;
y = G__9307;
more = G__9308;
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
var G__9305 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9305__delegate.call(this, x, y, more);
};
G__9305.cljs$lang$maxFixedArity = 2;
G__9305.cljs$lang$applyTo = (function (arglist__9313){
var x = cljs.core.first(arglist__9313);
var y = cljs.core.first(cljs.core.next(arglist__9313));
var more = cljs.core.rest(cljs.core.next(arglist__9313));
return G__9305__delegate.call(this, x, y, more);
});
return G__9305;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9298.call(this,x);
case  2 :
return _GT___9299.call(this,x,y);
default:
return _GT___9300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9300.cljs$lang$applyTo;
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
var _GT__EQ___9319 = (function (x){
return true;
});
var _GT__EQ___9320 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9321 = (function() { 
var G__9323__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9324 = y;
var G__9325 = cljs.core.first.call(null,more);
var G__9326 = cljs.core.next.call(null,more);
x = G__9324;
y = G__9325;
more = G__9326;
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
var G__9323 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9323__delegate.call(this, x, y, more);
};
G__9323.cljs$lang$maxFixedArity = 2;
G__9323.cljs$lang$applyTo = (function (arglist__9327){
var x = cljs.core.first(arglist__9327);
var y = cljs.core.first(cljs.core.next(arglist__9327));
var more = cljs.core.rest(cljs.core.next(arglist__9327));
return G__9323__delegate.call(this, x, y, more);
});
return G__9323;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9319.call(this,x);
case  2 :
return _GT__EQ___9320.call(this,x,y);
default:
return _GT__EQ___9321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9321.cljs$lang$applyTo;
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
var max__9338 = (function (x){
return x;
});
var max__9339 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9340 = (function() { 
var G__9346__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9346 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9346__delegate.call(this, x, y, more);
};
G__9346.cljs$lang$maxFixedArity = 2;
G__9346.cljs$lang$applyTo = (function (arglist__9348){
var x = cljs.core.first(arglist__9348);
var y = cljs.core.first(cljs.core.next(arglist__9348));
var more = cljs.core.rest(cljs.core.next(arglist__9348));
return G__9346__delegate.call(this, x, y, more);
});
return G__9346;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9338.call(this,x);
case  2 :
return max__9339.call(this,x,y);
default:
return max__9340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9340.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9350 = (function (x){
return x;
});
var min__9351 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9352 = (function() { 
var G__9359__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9359 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9359__delegate.call(this, x, y, more);
};
G__9359.cljs$lang$maxFixedArity = 2;
G__9359.cljs$lang$applyTo = (function (arglist__9360){
var x = cljs.core.first(arglist__9360);
var y = cljs.core.first(cljs.core.next(arglist__9360));
var more = cljs.core.rest(cljs.core.next(arglist__9360));
return G__9359__delegate.call(this, x, y, more);
});
return G__9359;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9350.call(this,x);
case  2 :
return min__9351.call(this,x,y);
default:
return min__9352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9352.cljs$lang$applyTo;
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
var rem__9369 = (n % d);

return cljs.core.fix.call(null,((n - rem__9369) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9391 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9391));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9402 = (function (){
return Math.random.call(null);
});
var rand__9403 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9402.call(this);
case  1 :
return rand__9403.call(this,n);
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
var _EQ__EQ___9501 = (function (x){
return true;
});
var _EQ__EQ___9502 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9503 = (function() { 
var G__9505__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9507 = y;
var G__9508 = cljs.core.first.call(null,more);
var G__9509 = cljs.core.next.call(null,more);
x = G__9507;
y = G__9508;
more = G__9509;
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
var G__9505 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9505__delegate.call(this, x, y, more);
};
G__9505.cljs$lang$maxFixedArity = 2;
G__9505.cljs$lang$applyTo = (function (arglist__9511){
var x = cljs.core.first(arglist__9511);
var y = cljs.core.first(cljs.core.next(arglist__9511));
var more = cljs.core.rest(cljs.core.next(arglist__9511));
return G__9505__delegate.call(this, x, y, more);
});
return G__9505;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9501.call(this,x);
case  2 :
return _EQ__EQ___9502.call(this,x,y);
default:
return _EQ__EQ___9503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9503.cljs$lang$applyTo;
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
var n__9528 = n;
var xs__9529 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9530 = xs__9529;

if(cljs.core.truth_(and__3546__auto____9530))
{return (n__9528 > 0);
} else
{return and__3546__auto____9530;
}
})()))
{{
var G__9547 = (n__9528 - 1);
var G__9548 = cljs.core.next.call(null,xs__9529);
n__9528 = G__9547;
xs__9529 = G__9548;
continue;
}
} else
{return xs__9529;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9565 = null;
var G__9565__9567 = (function (coll,n){
var temp__3695__auto____9550 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9550))
{var xs__9551 = temp__3695__auto____9550;

return cljs.core.first.call(null,xs__9551);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9565__9568 = (function (coll,n,not_found){
var temp__3695__auto____9558 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9558))
{var xs__9559 = temp__3695__auto____9558;

return cljs.core.first.call(null,xs__9559);
} else
{return not_found;
}
});
G__9565 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9565__9567.call(this,coll,n);
case  3 :
return G__9565__9568.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9565;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9591 = (function (){
return "";
});
var str_STAR___9592 = (function (x){
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
var str_STAR___9593 = (function() { 
var G__9601__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9604 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9605 = cljs.core.next.call(null,more);
sb = G__9604;
more = G__9605;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9601 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9601__delegate.call(this, x, ys);
};
G__9601.cljs$lang$maxFixedArity = 1;
G__9601.cljs$lang$applyTo = (function (arglist__9613){
var x = cljs.core.first(arglist__9613);
var ys = cljs.core.rest(arglist__9613);
return G__9601__delegate.call(this, x, ys);
});
return G__9601;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9591.call(this);
case  1 :
return str_STAR___9592.call(this,x);
default:
return str_STAR___9593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9593.cljs$lang$applyTo;
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
var str__9628 = (function (){
return "";
});
var str__9629 = (function (x){
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
var str__9631 = (function() { 
var G__9637__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9637 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9637__delegate.call(this, x, ys);
};
G__9637.cljs$lang$maxFixedArity = 1;
G__9637.cljs$lang$applyTo = (function (arglist__9639){
var x = cljs.core.first(arglist__9639);
var ys = cljs.core.rest(arglist__9639);
return G__9637__delegate.call(this, x, ys);
});
return G__9637;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9628.call(this);
case  1 :
return str__9629.call(this,x);
default:
return str__9631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9631.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9645 = (function (s,start){
return s.substring(start);
});
var subs__9646 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9645.call(this,s,start);
case  3 :
return subs__9646.call(this,s,start,end);
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
var symbol__9655 = (function (name){
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
var symbol__9656 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9655.call(this,ns);
case  2 :
return symbol__9656.call(this,ns,name);
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
var keyword__9667 = (function (name){
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
var keyword__9668 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9667.call(this,ns);
case  2 :
return keyword__9668.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9680 = cljs.core.seq.call(null,x);
var ys__9682 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9680)))
{return cljs.core.nil_QMARK_.call(null,ys__9682);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9682)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9680),cljs.core.first.call(null,ys__9682))))
{{
var G__9739 = cljs.core.next.call(null,xs__9680);
var G__9740 = cljs.core.next.call(null,ys__9682);
xs__9680 = G__9739;
ys__9682 = G__9740;
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
return cljs.core.reduce.call(null,(function (p1__9743_SHARP_,p2__9745_SHARP_){
return cljs.core.hash_combine.call(null,p1__9743_SHARP_,cljs.core.hash.call(null,p2__9745_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9811__9812 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9811__9812))
{var G__9814__9816 = cljs.core.first.call(null,G__9811__9812);
var vec__9815__9817 = G__9814__9816;
var key_name__9818 = cljs.core.nth.call(null,vec__9815__9817,0,null);
var f__9819 = cljs.core.nth.call(null,vec__9815__9817,1,null);
var G__9811__9820 = G__9811__9812;

var G__9814__9821 = G__9814__9816;
var G__9811__9822 = G__9811__9820;

while(true){
var vec__9823__9824 = G__9814__9821;
var key_name__9826 = cljs.core.nth.call(null,vec__9823__9824,0,null);
var f__9830 = cljs.core.nth.call(null,vec__9823__9824,1,null);
var G__9811__9831 = G__9811__9822;

var str_name__9832 = cljs.core.name.call(null,key_name__9826);

obj[str_name__9832] = f__9830;
var temp__3698__auto____9833 = cljs.core.next.call(null,G__9811__9831);

if(cljs.core.truth_(temp__3698__auto____9833))
{var G__9811__9834 = temp__3698__auto____9833;

{
var G__9837 = cljs.core.first.call(null,G__9811__9834);
var G__9838 = G__9811__9834;
G__9814__9821 = G__9837;
G__9811__9822 = G__9838;
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
var this__9857 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9858 = this;
return (new cljs.core.List(this__9858.meta,o,coll,(this__9858.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9859 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9860 = this;
return this__9860.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9861 = this;
return this__9861.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9862 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9863 = this;
return this__9863.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9864 = this;
return this__9864.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9865 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9866 = this;
return (new cljs.core.List(meta,this__9866.first,this__9866.rest,this__9866.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9867 = this;
return this__9867.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9868 = this;
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
var this__9967 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9973 = this;
return (new cljs.core.List(this__9973.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9974 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9975 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9980 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9981 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9982 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9985 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9988 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9989 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9990 = this;
return this__9990.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9991 = this;
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
list.cljs$lang$applyTo = (function (arglist__10005){
var items = cljs.core.seq( arglist__10005 );;
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
var this__10007 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10008 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10009 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10010 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10010.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10012 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10014 = this;
return this__10014.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10016 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10016.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10016.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10019 = this;
return this__10019.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10020 = this;
return (new cljs.core.Cons(meta,this__10020.first,this__10020.rest));
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
var G__10056 = null;
var G__10056__10057 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10056__10058 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10056 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10056__10057.call(this,string,f);
case  3 :
return G__10056__10058.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10056;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10060 = null;
var G__10060__10061 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10060__10062 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10060 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10060__10061.call(this,string,k);
case  3 :
return G__10060__10062.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10060;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10066 = null;
var G__10066__10067 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10066__10068 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10066 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10066__10067.call(this,string,n);
case  3 :
return G__10066__10068.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10066;
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
var G__10078 = null;
var G__10078__10079 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10078__10080 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10078 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10078__10079.call(this,this$,coll);
case  3 :
return G__10078__10080.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10078;
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
var x__10094 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10094;
} else
{lazy_seq.x = x__10094.call(null);
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
var this__10177 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10179 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10181 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10188 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10188.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10190 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10191 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10193 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10194 = this;
return this__10194.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10195 = this;
return (new cljs.core.LazySeq(meta,this__10195.realized,this__10195.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10207 = cljs.core.array.call(null);

var s__10249 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10249)))
{ary__10207.push(cljs.core.first.call(null,s__10249));
{
var G__10254 = cljs.core.next.call(null,s__10249);
s__10249 = G__10254;
continue;
}
} else
{return ary__10207;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10255 = s;
var i__10256 = n;
var sum__10257 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10258 = (i__10256 > 0);

if(cljs.core.truth_(and__3546__auto____10258))
{return cljs.core.seq.call(null,s__10255);
} else
{return and__3546__auto____10258;
}
})()))
{{
var G__10260 = cljs.core.next.call(null,s__10255);
var G__10261 = (i__10256 - 1);
var G__10262 = (sum__10257 + 1);
s__10255 = G__10260;
i__10256 = G__10261;
sum__10257 = G__10262;
continue;
}
} else
{return sum__10257;
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
var concat__10282 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10283 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10284 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10277 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10277))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10277),concat.call(null,cljs.core.rest.call(null,s__10277),y));
} else
{return y;
}
})));
});
var concat__10285 = (function() { 
var G__10289__delegate = function (x,y,zs){
var cat__10281 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10280 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10280))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10280),cat.call(null,cljs.core.rest.call(null,xys__10280),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10281.call(null,concat.call(null,x,y),zs);
};
var G__10289 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10289__delegate.call(this, x, y, zs);
};
G__10289.cljs$lang$maxFixedArity = 2;
G__10289.cljs$lang$applyTo = (function (arglist__10290){
var x = cljs.core.first(arglist__10290);
var y = cljs.core.first(cljs.core.next(arglist__10290));
var zs = cljs.core.rest(cljs.core.next(arglist__10290));
return G__10289__delegate.call(this, x, y, zs);
});
return G__10289;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10282.call(this);
case  1 :
return concat__10283.call(this,x);
case  2 :
return concat__10284.call(this,x,y);
default:
return concat__10285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10285.cljs$lang$applyTo;
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
var G__10313__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10313 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10313__delegate.call(this, a, b, c, d, more);
};
G__10313.cljs$lang$maxFixedArity = 4;
G__10313.cljs$lang$applyTo = (function (arglist__10314){
var a = cljs.core.first(arglist__10314);
var b = cljs.core.first(cljs.core.next(arglist__10314));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10314)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10314))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10314))));
return G__10313__delegate.call(this, a, b, c, d, more);
});
return G__10313;
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
var apply__10354 = (function (f,args){
var fixed_arity__10317 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10317 + 1)) <= fixed_arity__10317)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10355 = (function (f,x,args){
var arglist__10323 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10328 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10323,fixed_arity__10328) <= fixed_arity__10328)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10323));
} else
{return f.cljs$lang$applyTo(arglist__10323);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10323));
}
});
var apply__10356 = (function (f,x,y,args){
var arglist__10339 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10342 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10339,fixed_arity__10342) <= fixed_arity__10342)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10339));
} else
{return f.cljs$lang$applyTo(arglist__10339);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10339));
}
});
var apply__10357 = (function (f,x,y,z,args){
var arglist__10345 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10346 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10345,fixed_arity__10346) <= fixed_arity__10346)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10345));
} else
{return f.cljs$lang$applyTo(arglist__10345);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10345));
}
});
var apply__10358 = (function() { 
var G__10375__delegate = function (f,a,b,c,d,args){
var arglist__10351 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10352 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10351,fixed_arity__10352) <= fixed_arity__10352)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10351));
} else
{return f.cljs$lang$applyTo(arglist__10351);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10351));
}
};
var G__10375 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10375__delegate.call(this, f, a, b, c, d, args);
};
G__10375.cljs$lang$maxFixedArity = 5;
G__10375.cljs$lang$applyTo = (function (arglist__10380){
var f = cljs.core.first(arglist__10380);
var a = cljs.core.first(cljs.core.next(arglist__10380));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10380)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10380))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10380)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10380)))));
return G__10375__delegate.call(this, f, a, b, c, d, args);
});
return G__10375;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10354.call(this,f,a);
case  3 :
return apply__10355.call(this,f,a,b);
case  4 :
return apply__10356.call(this,f,a,b,c);
case  5 :
return apply__10357.call(this,f,a,b,c,d);
default:
return apply__10358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10358.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10389){
var obj = cljs.core.first(arglist__10389);
var f = cljs.core.first(cljs.core.next(arglist__10389));
var args = cljs.core.rest(cljs.core.next(arglist__10389));
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
var not_EQ___10399 = (function (x){
return false;
});
var not_EQ___10400 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10401 = (function() { 
var G__10409__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10409 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10409__delegate.call(this, x, y, more);
};
G__10409.cljs$lang$maxFixedArity = 2;
G__10409.cljs$lang$applyTo = (function (arglist__10414){
var x = cljs.core.first(arglist__10414);
var y = cljs.core.first(cljs.core.next(arglist__10414));
var more = cljs.core.rest(cljs.core.next(arglist__10414));
return G__10409__delegate.call(this, x, y, more);
});
return G__10409;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10399.call(this,x);
case  2 :
return not_EQ___10400.call(this,x,y);
default:
return not_EQ___10401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10401.cljs$lang$applyTo;
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
var G__10429 = pred;
var G__10430 = cljs.core.next.call(null,coll);
pred = G__10429;
coll = G__10430;
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
{var or__3548__auto____10463 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10463))
{return or__3548__auto____10463;
} else
{{
var G__10472 = pred;
var G__10502 = cljs.core.next.call(null,coll);
pred = G__10472;
coll = G__10502;
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
var G__10531 = null;
var G__10531__10536 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10531__10537 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10531__10538 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10531__10539 = (function() { 
var G__10547__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10547 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10547__delegate.call(this, x, y, zs);
};
G__10547.cljs$lang$maxFixedArity = 2;
G__10547.cljs$lang$applyTo = (function (arglist__10548){
var x = cljs.core.first(arglist__10548);
var y = cljs.core.first(cljs.core.next(arglist__10548));
var zs = cljs.core.rest(cljs.core.next(arglist__10548));
return G__10547__delegate.call(this, x, y, zs);
});
return G__10547;
})()
;
G__10531 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10531__10536.call(this);
case  1 :
return G__10531__10537.call(this,x);
case  2 :
return G__10531__10538.call(this,x,y);
default:
return G__10531__10539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10531.cljs$lang$maxFixedArity = 2;
G__10531.cljs$lang$applyTo = G__10531__10539.cljs$lang$applyTo;
return G__10531;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10562__delegate = function (args){
return x;
};
var G__10562 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10562__delegate.call(this, args);
};
G__10562.cljs$lang$maxFixedArity = 0;
G__10562.cljs$lang$applyTo = (function (arglist__10563){
var args = cljs.core.seq( arglist__10563 );;
return G__10562__delegate.call(this, args);
});
return G__10562;
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
var comp__10662 = (function (){
return cljs.core.identity;
});
var comp__10663 = (function (f){
return f;
});
var comp__10664 = (function (f,g){
return (function() {
var G__10668 = null;
var G__10668__10669 = (function (){
return f.call(null,g.call(null));
});
var G__10668__10670 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10668__10671 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10668__10672 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10668__10673 = (function() { 
var G__10675__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10675__delegate.call(this, x, y, z, args);
};
G__10675.cljs$lang$maxFixedArity = 3;
G__10675.cljs$lang$applyTo = (function (arglist__10676){
var x = cljs.core.first(arglist__10676);
var y = cljs.core.first(cljs.core.next(arglist__10676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10676)));
return G__10675__delegate.call(this, x, y, z, args);
});
return G__10675;
})()
;
G__10668 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10668__10669.call(this);
case  1 :
return G__10668__10670.call(this,x);
case  2 :
return G__10668__10671.call(this,x,y);
case  3 :
return G__10668__10672.call(this,x,y,z);
default:
return G__10668__10673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10668.cljs$lang$maxFixedArity = 3;
G__10668.cljs$lang$applyTo = G__10668__10673.cljs$lang$applyTo;
return G__10668;
})()
});
var comp__10665 = (function (f,g,h){
return (function() {
var G__10677 = null;
var G__10677__10678 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10677__10679 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10677__10680 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10677__10681 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10677__10682 = (function() { 
var G__10684__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10684 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10684__delegate.call(this, x, y, z, args);
};
G__10684.cljs$lang$maxFixedArity = 3;
G__10684.cljs$lang$applyTo = (function (arglist__10685){
var x = cljs.core.first(arglist__10685);
var y = cljs.core.first(cljs.core.next(arglist__10685));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10685)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10685)));
return G__10684__delegate.call(this, x, y, z, args);
});
return G__10684;
})()
;
G__10677 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10677__10678.call(this);
case  1 :
return G__10677__10679.call(this,x);
case  2 :
return G__10677__10680.call(this,x,y);
case  3 :
return G__10677__10681.call(this,x,y,z);
default:
return G__10677__10682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10677.cljs$lang$maxFixedArity = 3;
G__10677.cljs$lang$applyTo = G__10677__10682.cljs$lang$applyTo;
return G__10677;
})()
});
var comp__10666 = (function() { 
var G__10686__delegate = function (f1,f2,f3,fs){
var fs__10582 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10687__delegate = function (args){
var ret__10584 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10582),args);
var fs__10585 = cljs.core.next.call(null,fs__10582);

while(true){
if(cljs.core.truth_(fs__10585))
{{
var G__10872 = cljs.core.first.call(null,fs__10585).call(null,ret__10584);
var G__10873 = cljs.core.next.call(null,fs__10585);
ret__10584 = G__10872;
fs__10585 = G__10873;
continue;
}
} else
{return ret__10584;
}
break;
}
};
var G__10687 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10687__delegate.call(this, args);
};
G__10687.cljs$lang$maxFixedArity = 0;
G__10687.cljs$lang$applyTo = (function (arglist__10878){
var args = cljs.core.seq( arglist__10878 );;
return G__10687__delegate.call(this, args);
});
return G__10687;
})()
;
};
var G__10686 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10686__delegate.call(this, f1, f2, f3, fs);
};
G__10686.cljs$lang$maxFixedArity = 3;
G__10686.cljs$lang$applyTo = (function (arglist__10880){
var f1 = cljs.core.first(arglist__10880);
var f2 = cljs.core.first(cljs.core.next(arglist__10880));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10880)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10880)));
return G__10686__delegate.call(this, f1, f2, f3, fs);
});
return G__10686;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10662.call(this);
case  1 :
return comp__10663.call(this,f1);
case  2 :
return comp__10664.call(this,f1,f2);
case  3 :
return comp__10665.call(this,f1,f2,f3);
default:
return comp__10666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10666.cljs$lang$applyTo;
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
var partial__10900 = (function (f,arg1){
return (function() { 
var G__10906__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10906__delegate.call(this, args);
};
G__10906.cljs$lang$maxFixedArity = 0;
G__10906.cljs$lang$applyTo = (function (arglist__10907){
var args = cljs.core.seq( arglist__10907 );;
return G__10906__delegate.call(this, args);
});
return G__10906;
})()
;
});
var partial__10901 = (function (f,arg1,arg2){
return (function() { 
var G__10914__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10914 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10914__delegate.call(this, args);
};
G__10914.cljs$lang$maxFixedArity = 0;
G__10914.cljs$lang$applyTo = (function (arglist__10916){
var args = cljs.core.seq( arglist__10916 );;
return G__10914__delegate.call(this, args);
});
return G__10914;
})()
;
});
var partial__10902 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10918__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10918 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10918__delegate.call(this, args);
};
G__10918.cljs$lang$maxFixedArity = 0;
G__10918.cljs$lang$applyTo = (function (arglist__10919){
var args = cljs.core.seq( arglist__10919 );;
return G__10918__delegate.call(this, args);
});
return G__10918;
})()
;
});
var partial__10903 = (function() { 
var G__10921__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10922__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10922 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10922__delegate.call(this, args);
};
G__10922.cljs$lang$maxFixedArity = 0;
G__10922.cljs$lang$applyTo = (function (arglist__10923){
var args = cljs.core.seq( arglist__10923 );;
return G__10922__delegate.call(this, args);
});
return G__10922;
})()
;
};
var G__10921 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10921__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10921.cljs$lang$maxFixedArity = 4;
G__10921.cljs$lang$applyTo = (function (arglist__10924){
var f = cljs.core.first(arglist__10924);
var arg1 = cljs.core.first(cljs.core.next(arglist__10924));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10924)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10924))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10924))));
return G__10921__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10921;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10900.call(this,f,arg1);
case  3 :
return partial__10901.call(this,f,arg1,arg2);
case  4 :
return partial__10902.call(this,f,arg1,arg2,arg3);
default:
return partial__10903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10903.cljs$lang$applyTo;
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
var fnil__10952 = (function (f,x){
return (function() {
var G__10956 = null;
var G__10956__10957 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10956__10958 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10956__10959 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10956__10960 = (function() { 
var G__10963__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10963 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10963__delegate.call(this, a, b, c, ds);
};
G__10963.cljs$lang$maxFixedArity = 3;
G__10963.cljs$lang$applyTo = (function (arglist__10965){
var a = cljs.core.first(arglist__10965);
var b = cljs.core.first(cljs.core.next(arglist__10965));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10965)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10965)));
return G__10963__delegate.call(this, a, b, c, ds);
});
return G__10963;
})()
;
G__10956 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10956__10957.call(this,a);
case  2 :
return G__10956__10958.call(this,a,b);
case  3 :
return G__10956__10959.call(this,a,b,c);
default:
return G__10956__10960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10956.cljs$lang$maxFixedArity = 3;
G__10956.cljs$lang$applyTo = G__10956__10960.cljs$lang$applyTo;
return G__10956;
})()
});
var fnil__10953 = (function (f,x,y){
return (function() {
var G__10967 = null;
var G__10967__10968 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10967__10970 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10967__10973 = (function() { 
var G__10979__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10979 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10979__delegate.call(this, a, b, c, ds);
};
G__10979.cljs$lang$maxFixedArity = 3;
G__10979.cljs$lang$applyTo = (function (arglist__10981){
var a = cljs.core.first(arglist__10981);
var b = cljs.core.first(cljs.core.next(arglist__10981));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10981)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10981)));
return G__10979__delegate.call(this, a, b, c, ds);
});
return G__10979;
})()
;
G__10967 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10967__10968.call(this,a,b);
case  3 :
return G__10967__10970.call(this,a,b,c);
default:
return G__10967__10973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10967.cljs$lang$maxFixedArity = 3;
G__10967.cljs$lang$applyTo = G__10967__10973.cljs$lang$applyTo;
return G__10967;
})()
});
var fnil__10954 = (function (f,x,y,z){
return (function() {
var G__10982 = null;
var G__10982__10983 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10982__10984 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10982__10985 = (function() { 
var G__10987__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10987 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10987__delegate.call(this, a, b, c, ds);
};
G__10987.cljs$lang$maxFixedArity = 3;
G__10987.cljs$lang$applyTo = (function (arglist__10988){
var a = cljs.core.first(arglist__10988);
var b = cljs.core.first(cljs.core.next(arglist__10988));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10988)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10988)));
return G__10987__delegate.call(this, a, b, c, ds);
});
return G__10987;
})()
;
G__10982 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10982__10983.call(this,a,b);
case  3 :
return G__10982__10984.call(this,a,b,c);
default:
return G__10982__10985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10982.cljs$lang$maxFixedArity = 3;
G__10982.cljs$lang$applyTo = G__10982__10985.cljs$lang$applyTo;
return G__10982;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10952.call(this,f,x);
case  3 :
return fnil__10953.call(this,f,x,y);
case  4 :
return fnil__10954.call(this,f,x,y,z);
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
var mapi__11000 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10992))
{var s__10996 = temp__3698__auto____10992;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10996)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10996)));
} else
{return null;
}
})));
});

return mapi__11000.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11004 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11004))
{var s__11005 = temp__3698__auto____11004;

var x__11006 = f.call(null,cljs.core.first.call(null,s__11005));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11006)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11005));
} else
{return cljs.core.cons.call(null,x__11006,keep.call(null,f,cljs.core.rest.call(null,s__11005)));
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
var keepi__11124 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11121 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11121))
{var s__11122 = temp__3698__auto____11121;

var x__11123 = f.call(null,idx,cljs.core.first.call(null,s__11122));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11123)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11122));
} else
{return cljs.core.cons.call(null,x__11123,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11122)));
}
} else
{return null;
}
})));
});

return keepi__11124.call(null,0,coll);
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
var every_pred__11302 = (function (p){
return (function() {
var ep1 = null;
var ep1__11359 = (function (){
return true;
});
var ep1__11379 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11382 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11190 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11190))
{return p.call(null,y);
} else
{return and__3546__auto____11190;
}
})());
});
var ep1__11390 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11194 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11194))
{var and__3546__auto____11196 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11196))
{return p.call(null,z);
} else
{return and__3546__auto____11196;
}
} else
{return and__3546__auto____11194;
}
})());
});
var ep1__11391 = (function() { 
var G__11574__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11201 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11201))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11201;
}
})());
};
var G__11574 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11574__delegate.call(this, x, y, z, args);
};
G__11574.cljs$lang$maxFixedArity = 3;
G__11574.cljs$lang$applyTo = (function (arglist__11575){
var x = cljs.core.first(arglist__11575);
var y = cljs.core.first(cljs.core.next(arglist__11575));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11575)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11575)));
return G__11574__delegate.call(this, x, y, z, args);
});
return G__11574;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11359.call(this);
case  1 :
return ep1__11379.call(this,x);
case  2 :
return ep1__11382.call(this,x,y);
case  3 :
return ep1__11390.call(this,x,y,z);
default:
return ep1__11391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11391.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11303 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11578 = (function (){
return true;
});
var ep2__11579 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11203 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11203))
{return p2.call(null,x);
} else
{return and__3546__auto____11203;
}
})());
});
var ep2__11580 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11208 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11208))
{var and__3546__auto____11210 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11210))
{var and__3546__auto____11213 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11213))
{return p2.call(null,y);
} else
{return and__3546__auto____11213;
}
} else
{return and__3546__auto____11210;
}
} else
{return and__3546__auto____11208;
}
})());
});
var ep2__11581 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11215 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11215))
{var and__3546__auto____11217 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11217))
{var and__3546__auto____11218 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11218))
{var and__3546__auto____11220 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11220))
{var and__3546__auto____11221 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11221))
{return p2.call(null,z);
} else
{return and__3546__auto____11221;
}
} else
{return and__3546__auto____11220;
}
} else
{return and__3546__auto____11218;
}
} else
{return and__3546__auto____11217;
}
} else
{return and__3546__auto____11215;
}
})());
});
var ep2__11582 = (function() { 
var G__11588__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11222 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11222))
{return cljs.core.every_QMARK_.call(null,(function (p1__11115_SHARP_){
var and__3546__auto____11230 = p1.call(null,p1__11115_SHARP_);

if(cljs.core.truth_(and__3546__auto____11230))
{return p2.call(null,p1__11115_SHARP_);
} else
{return and__3546__auto____11230;
}
}),args);
} else
{return and__3546__auto____11222;
}
})());
};
var G__11588 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11588__delegate.call(this, x, y, z, args);
};
G__11588.cljs$lang$maxFixedArity = 3;
G__11588.cljs$lang$applyTo = (function (arglist__11591){
var x = cljs.core.first(arglist__11591);
var y = cljs.core.first(cljs.core.next(arglist__11591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11591)));
return G__11588__delegate.call(this, x, y, z, args);
});
return G__11588;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11578.call(this);
case  1 :
return ep2__11579.call(this,x);
case  2 :
return ep2__11580.call(this,x,y);
case  3 :
return ep2__11581.call(this,x,y,z);
default:
return ep2__11582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11582.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11304 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11594 = (function (){
return true;
});
var ep3__11595 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11241 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11241))
{var and__3546__auto____11242 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11242))
{return p3.call(null,x);
} else
{return and__3546__auto____11242;
}
} else
{return and__3546__auto____11241;
}
})());
});
var ep3__11596 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11245 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11245))
{var and__3546__auto____11247 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11247))
{var and__3546__auto____11250 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11250))
{var and__3546__auto____11265 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11265))
{var and__3546__auto____11266 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11266))
{return p3.call(null,y);
} else
{return and__3546__auto____11266;
}
} else
{return and__3546__auto____11265;
}
} else
{return and__3546__auto____11250;
}
} else
{return and__3546__auto____11247;
}
} else
{return and__3546__auto____11245;
}
})());
});
var ep3__11597 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11267 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11267))
{var and__3546__auto____11268 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11268))
{var and__3546__auto____11269 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11269))
{var and__3546__auto____11271 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11271))
{var and__3546__auto____11272 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11272))
{var and__3546__auto____11274 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11274))
{var and__3546__auto____11275 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11275))
{var and__3546__auto____11278 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11278))
{return p3.call(null,z);
} else
{return and__3546__auto____11278;
}
} else
{return and__3546__auto____11275;
}
} else
{return and__3546__auto____11274;
}
} else
{return and__3546__auto____11272;
}
} else
{return and__3546__auto____11271;
}
} else
{return and__3546__auto____11269;
}
} else
{return and__3546__auto____11268;
}
} else
{return and__3546__auto____11267;
}
})());
});
var ep3__11598 = (function() { 
var G__11697__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11279 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11279))
{return cljs.core.every_QMARK_.call(null,(function (p1__11116_SHARP_){
var and__3546__auto____11281 = p1.call(null,p1__11116_SHARP_);

if(cljs.core.truth_(and__3546__auto____11281))
{var and__3546__auto____11282 = p2.call(null,p1__11116_SHARP_);

if(cljs.core.truth_(and__3546__auto____11282))
{return p3.call(null,p1__11116_SHARP_);
} else
{return and__3546__auto____11282;
}
} else
{return and__3546__auto____11281;
}
}),args);
} else
{return and__3546__auto____11279;
}
})());
};
var G__11697 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11697__delegate.call(this, x, y, z, args);
};
G__11697.cljs$lang$maxFixedArity = 3;
G__11697.cljs$lang$applyTo = (function (arglist__11698){
var x = cljs.core.first(arglist__11698);
var y = cljs.core.first(cljs.core.next(arglist__11698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11698)));
return G__11697__delegate.call(this, x, y, z, args);
});
return G__11697;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11594.call(this);
case  1 :
return ep3__11595.call(this,x);
case  2 :
return ep3__11596.call(this,x,y);
case  3 :
return ep3__11597.call(this,x,y,z);
default:
return ep3__11598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11598.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11305 = (function() { 
var G__11702__delegate = function (p1,p2,p3,ps){
var ps__11286 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11703 = (function (){
return true;
});
var epn__11704 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11117_SHARP_){
return p1__11117_SHARP_.call(null,x);
}),ps__11286);
});
var epn__11705 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11118_SHARP_){
var and__3546__auto____11291 = p1__11118_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11291))
{return p1__11118_SHARP_.call(null,y);
} else
{return and__3546__auto____11291;
}
}),ps__11286);
});
var epn__11706 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11119_SHARP_){
var and__3546__auto____11295 = p1__11119_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11295))
{var and__3546__auto____11296 = p1__11119_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11296))
{return p1__11119_SHARP_.call(null,z);
} else
{return and__3546__auto____11296;
}
} else
{return and__3546__auto____11295;
}
}),ps__11286);
});
var epn__11707 = (function() { 
var G__11723__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11298 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11298))
{return cljs.core.every_QMARK_.call(null,(function (p1__11120_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11120_SHARP_,args);
}),ps__11286);
} else
{return and__3546__auto____11298;
}
})());
};
var G__11723 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11723__delegate.call(this, x, y, z, args);
};
G__11723.cljs$lang$maxFixedArity = 3;
G__11723.cljs$lang$applyTo = (function (arglist__11725){
var x = cljs.core.first(arglist__11725);
var y = cljs.core.first(cljs.core.next(arglist__11725));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11725)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11725)));
return G__11723__delegate.call(this, x, y, z, args);
});
return G__11723;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11703.call(this);
case  1 :
return epn__11704.call(this,x);
case  2 :
return epn__11705.call(this,x,y);
case  3 :
return epn__11706.call(this,x,y,z);
default:
return epn__11707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11707.cljs$lang$applyTo;
return epn;
})()
};
var G__11702 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11702__delegate.call(this, p1, p2, p3, ps);
};
G__11702.cljs$lang$maxFixedArity = 3;
G__11702.cljs$lang$applyTo = (function (arglist__11733){
var p1 = cljs.core.first(arglist__11733);
var p2 = cljs.core.first(cljs.core.next(arglist__11733));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11733)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11733)));
return G__11702__delegate.call(this, p1, p2, p3, ps);
});
return G__11702;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11302.call(this,p1);
case  2 :
return every_pred__11303.call(this,p1,p2);
case  3 :
return every_pred__11304.call(this,p1,p2,p3);
default:
return every_pred__11305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11305.cljs$lang$applyTo;
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
var some_fn__11798 = (function (p){
return (function() {
var sp1 = null;
var sp1__11803 = (function (){
return null;
});
var sp1__11818 = (function (x){
return p.call(null,x);
});
var sp1__11819 = (function (x,y){
var or__3548__auto____11737 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11737))
{return or__3548__auto____11737;
} else
{return p.call(null,y);
}
});
var sp1__11820 = (function (x,y,z){
var or__3548__auto____11739 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11739))
{return or__3548__auto____11739;
} else
{var or__3548__auto____11740 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11740))
{return or__3548__auto____11740;
} else
{return p.call(null,z);
}
}
});
var sp1__11821 = (function() { 
var G__11832__delegate = function (x,y,z,args){
var or__3548__auto____11741 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11741))
{return or__3548__auto____11741;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11832__delegate.call(this, x, y, z, args);
};
G__11832.cljs$lang$maxFixedArity = 3;
G__11832.cljs$lang$applyTo = (function (arglist__11833){
var x = cljs.core.first(arglist__11833);
var y = cljs.core.first(cljs.core.next(arglist__11833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11833)));
return G__11832__delegate.call(this, x, y, z, args);
});
return G__11832;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11803.call(this);
case  1 :
return sp1__11818.call(this,x);
case  2 :
return sp1__11819.call(this,x,y);
case  3 :
return sp1__11820.call(this,x,y,z);
default:
return sp1__11821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11821.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11799 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11838 = (function (){
return null;
});
var sp2__11839 = (function (x){
var or__3548__auto____11743 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11743))
{return or__3548__auto____11743;
} else
{return p2.call(null,x);
}
});
var sp2__11840 = (function (x,y){
var or__3548__auto____11745 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11745))
{return or__3548__auto____11745;
} else
{var or__3548__auto____11746 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11746))
{return or__3548__auto____11746;
} else
{var or__3548__auto____11747 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11747))
{return or__3548__auto____11747;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11841 = (function (x,y,z){
var or__3548__auto____11750 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11750))
{return or__3548__auto____11750;
} else
{var or__3548__auto____11752 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11752))
{return or__3548__auto____11752;
} else
{var or__3548__auto____11753 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11753))
{return or__3548__auto____11753;
} else
{var or__3548__auto____11754 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11754))
{return or__3548__auto____11754;
} else
{var or__3548__auto____11755 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11755))
{return or__3548__auto____11755;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11842 = (function() { 
var G__11884__delegate = function (x,y,z,args){
var or__3548__auto____11759 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11759))
{return or__3548__auto____11759;
} else
{return cljs.core.some.call(null,(function (p1__11159_SHARP_){
var or__3548__auto____11762 = p1.call(null,p1__11159_SHARP_);

if(cljs.core.truth_(or__3548__auto____11762))
{return or__3548__auto____11762;
} else
{return p2.call(null,p1__11159_SHARP_);
}
}),args);
}
};
var G__11884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11884__delegate.call(this, x, y, z, args);
};
G__11884.cljs$lang$maxFixedArity = 3;
G__11884.cljs$lang$applyTo = (function (arglist__11887){
var x = cljs.core.first(arglist__11887);
var y = cljs.core.first(cljs.core.next(arglist__11887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11887)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11887)));
return G__11884__delegate.call(this, x, y, z, args);
});
return G__11884;
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
var some_fn__11800 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11888 = (function (){
return null;
});
var sp3__11889 = (function (x){
var or__3548__auto____11763 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11763))
{return or__3548__auto____11763;
} else
{var or__3548__auto____11764 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11764))
{return or__3548__auto____11764;
} else
{return p3.call(null,x);
}
}
});
var sp3__11890 = (function (x,y){
var or__3548__auto____11766 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11766))
{return or__3548__auto____11766;
} else
{var or__3548__auto____11768 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11768))
{return or__3548__auto____11768;
} else
{var or__3548__auto____11769 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11769))
{return or__3548__auto____11769;
} else
{var or__3548__auto____11770 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11770))
{return or__3548__auto____11770;
} else
{var or__3548__auto____11771 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11771))
{return or__3548__auto____11771;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11891 = (function (x,y,z){
var or__3548__auto____11772 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11772))
{return or__3548__auto____11772;
} else
{var or__3548__auto____11775 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11775))
{return or__3548__auto____11775;
} else
{var or__3548__auto____11779 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11779))
{return or__3548__auto____11779;
} else
{var or__3548__auto____11780 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11780))
{return or__3548__auto____11780;
} else
{var or__3548__auto____11781 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11781))
{return or__3548__auto____11781;
} else
{var or__3548__auto____11782 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11782))
{return or__3548__auto____11782;
} else
{var or__3548__auto____11783 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11783))
{return or__3548__auto____11783;
} else
{var or__3548__auto____11784 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11784))
{return or__3548__auto____11784;
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
var sp3__11892 = (function() { 
var G__11900__delegate = function (x,y,z,args){
var or__3548__auto____11785 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11785))
{return or__3548__auto____11785;
} else
{return cljs.core.some.call(null,(function (p1__11163_SHARP_){
var or__3548__auto____11786 = p1.call(null,p1__11163_SHARP_);

if(cljs.core.truth_(or__3548__auto____11786))
{return or__3548__auto____11786;
} else
{var or__3548__auto____11787 = p2.call(null,p1__11163_SHARP_);

if(cljs.core.truth_(or__3548__auto____11787))
{return or__3548__auto____11787;
} else
{return p3.call(null,p1__11163_SHARP_);
}
}
}),args);
}
};
var G__11900 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11900__delegate.call(this, x, y, z, args);
};
G__11900.cljs$lang$maxFixedArity = 3;
G__11900.cljs$lang$applyTo = (function (arglist__11901){
var x = cljs.core.first(arglist__11901);
var y = cljs.core.first(cljs.core.next(arglist__11901));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11901)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11901)));
return G__11900__delegate.call(this, x, y, z, args);
});
return G__11900;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11888.call(this);
case  1 :
return sp3__11889.call(this,x);
case  2 :
return sp3__11890.call(this,x,y);
case  3 :
return sp3__11891.call(this,x,y,z);
default:
return sp3__11892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11892.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11801 = (function() { 
var G__11902__delegate = function (p1,p2,p3,ps){
var ps__11789 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11903 = (function (){
return null;
});
var spn__11904 = (function (x){
return cljs.core.some.call(null,(function (p1__11165_SHARP_){
return p1__11165_SHARP_.call(null,x);
}),ps__11789);
});
var spn__11905 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11166_SHARP_){
var or__3548__auto____11790 = p1__11166_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11790))
{return or__3548__auto____11790;
} else
{return p1__11166_SHARP_.call(null,y);
}
}),ps__11789);
});
var spn__11906 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11183_SHARP_){
var or__3548__auto____11792 = p1__11183_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11792))
{return or__3548__auto____11792;
} else
{var or__3548__auto____11793 = p1__11183_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11793))
{return or__3548__auto____11793;
} else
{return p1__11183_SHARP_.call(null,z);
}
}
}),ps__11789);
});
var spn__11907 = (function() { 
var G__11910__delegate = function (x,y,z,args){
var or__3548__auto____11794 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11794))
{return or__3548__auto____11794;
} else
{return cljs.core.some.call(null,(function (p1__11185_SHARP_){
return cljs.core.some.call(null,p1__11185_SHARP_,args);
}),ps__11789);
}
};
var G__11910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11910__delegate.call(this, x, y, z, args);
};
G__11910.cljs$lang$maxFixedArity = 3;
G__11910.cljs$lang$applyTo = (function (arglist__11913){
var x = cljs.core.first(arglist__11913);
var y = cljs.core.first(cljs.core.next(arglist__11913));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11913)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11913)));
return G__11910__delegate.call(this, x, y, z, args);
});
return G__11910;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11903.call(this);
case  1 :
return spn__11904.call(this,x);
case  2 :
return spn__11905.call(this,x,y);
case  3 :
return spn__11906.call(this,x,y,z);
default:
return spn__11907.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11907.cljs$lang$applyTo;
return spn;
})()
};
var G__11902 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11902__delegate.call(this, p1, p2, p3, ps);
};
G__11902.cljs$lang$maxFixedArity = 3;
G__11902.cljs$lang$applyTo = (function (arglist__11916){
var p1 = cljs.core.first(arglist__11916);
var p2 = cljs.core.first(cljs.core.next(arglist__11916));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11916)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11916)));
return G__11902__delegate.call(this, p1, p2, p3, ps);
});
return G__11902;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11798.call(this,p1);
case  2 :
return some_fn__11799.call(this,p1,p2);
case  3 :
return some_fn__11800.call(this,p1,p2,p3);
default:
return some_fn__11801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11801.cljs$lang$applyTo;
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
var map__11979 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11921 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11921))
{var s__11922 = temp__3698__auto____11921;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11922)),map.call(null,f,cljs.core.rest.call(null,s__11922)));
} else
{return null;
}
})));
});
var map__11980 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11926 = cljs.core.seq.call(null,c1);
var s2__11927 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11928 = s1__11926;

if(cljs.core.truth_(and__3546__auto____11928))
{return s2__11927;
} else
{return and__3546__auto____11928;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11926),cljs.core.first.call(null,s2__11927)),map.call(null,f,cljs.core.rest.call(null,s1__11926),cljs.core.rest.call(null,s2__11927)));
} else
{return null;
}
})));
});
var map__11981 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11942 = cljs.core.seq.call(null,c1);
var s2__11943 = cljs.core.seq.call(null,c2);
var s3__11945 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11973 = s1__11942;

if(cljs.core.truth_(and__3546__auto____11973))
{var and__3546__auto____11974 = s2__11943;

if(cljs.core.truth_(and__3546__auto____11974))
{return s3__11945;
} else
{return and__3546__auto____11974;
}
} else
{return and__3546__auto____11973;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11942),cljs.core.first.call(null,s2__11943),cljs.core.first.call(null,s3__11945)),map.call(null,f,cljs.core.rest.call(null,s1__11942),cljs.core.rest.call(null,s2__11943),cljs.core.rest.call(null,s3__11945)));
} else
{return null;
}
})));
});
var map__11982 = (function() { 
var G__11989__delegate = function (f,c1,c2,c3,colls){
var step__11976 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11975 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11975)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11975),step.call(null,map.call(null,cljs.core.rest,ss__11975)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11734_SHARP_){
return cljs.core.apply.call(null,f,p1__11734_SHARP_);
}),step__11976.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11989 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11989__delegate.call(this, f, c1, c2, c3, colls);
};
G__11989.cljs$lang$maxFixedArity = 4;
G__11989.cljs$lang$applyTo = (function (arglist__11990){
var f = cljs.core.first(arglist__11990);
var c1 = cljs.core.first(cljs.core.next(arglist__11990));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11990)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11990))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11990))));
return G__11989__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11989;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11979.call(this,f,c1);
case  3 :
return map__11980.call(this,f,c1,c2);
case  4 :
return map__11981.call(this,f,c1,c2,c3);
default:
return map__11982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11982.cljs$lang$applyTo;
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
{var temp__3698__auto____11991 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11991))
{var s__11992 = temp__3698__auto____11991;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11992),take.call(null,(n - 1),cljs.core.rest.call(null,s__11992)));
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
var step__12002 = (function (n,coll){
while(true){
var s__11998 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12000 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12000))
{return s__11998;
} else
{return and__3546__auto____12000;
}
})()))
{{
var G__12003 = (n - 1);
var G__12004 = cljs.core.rest.call(null,s__11998);
n = G__12003;
coll = G__12004;
continue;
}
} else
{return s__11998;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12002.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12007 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12008 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12007.call(this,n);
case  2 :
return drop_last__12008.call(this,n,s);
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
var s__12010 = cljs.core.seq.call(null,coll);
var lead__12011 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12011))
{{
var G__12014 = cljs.core.next.call(null,s__12010);
var G__12015 = cljs.core.next.call(null,lead__12011);
s__12010 = G__12014;
lead__12011 = G__12015;
continue;
}
} else
{return s__12010;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12048 = (function (pred,coll){
while(true){
var s__12019 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12044 = s__12019;

if(cljs.core.truth_(and__3546__auto____12044))
{return pred.call(null,cljs.core.first.call(null,s__12019));
} else
{return and__3546__auto____12044;
}
})()))
{{
var G__12050 = pred;
var G__12051 = cljs.core.rest.call(null,s__12019);
pred = G__12050;
coll = G__12051;
continue;
}
} else
{return s__12019;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12048.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12064))
{var s__12067 = temp__3698__auto____12064;

return cljs.core.concat.call(null,s__12067,cycle.call(null,s__12067));
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
var repeat__12086 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12087 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12086.call(this,n);
case  2 :
return repeat__12087.call(this,n,x);
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
var repeatedly__12101 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12102 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12101.call(this,n);
case  2 :
return repeatedly__12102.call(this,n,f);
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
var interleave__12131 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12116 = cljs.core.seq.call(null,c1);
var s2__12120 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12121 = s1__12116;

if(cljs.core.truth_(and__3546__auto____12121))
{return s2__12120;
} else
{return and__3546__auto____12121;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12116),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12120),interleave.call(null,cljs.core.rest.call(null,s1__12116),cljs.core.rest.call(null,s2__12120))));
} else
{return null;
}
})));
});
var interleave__12132 = (function() { 
var G__12134__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12122 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12122)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12122),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12122)));
} else
{return null;
}
})));
};
var G__12134 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12134__delegate.call(this, c1, c2, colls);
};
G__12134.cljs$lang$maxFixedArity = 2;
G__12134.cljs$lang$applyTo = (function (arglist__12138){
var c1 = cljs.core.first(arglist__12138);
var c2 = cljs.core.first(cljs.core.next(arglist__12138));
var colls = cljs.core.rest(cljs.core.next(arglist__12138));
return G__12134__delegate.call(this, c1, c2, colls);
});
return G__12134;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12131.call(this,c1,c2);
default:
return interleave__12132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12132.cljs$lang$applyTo;
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
var cat__12146 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12143 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12143))
{var coll__12144 = temp__3695__auto____12143;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12144),cat.call(null,cljs.core.rest.call(null,coll__12144),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12146.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12148 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12149 = (function() { 
var G__12151__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12151 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12151__delegate.call(this, f, coll, colls);
};
G__12151.cljs$lang$maxFixedArity = 2;
G__12151.cljs$lang$applyTo = (function (arglist__12153){
var f = cljs.core.first(arglist__12153);
var coll = cljs.core.first(cljs.core.next(arglist__12153));
var colls = cljs.core.rest(cljs.core.next(arglist__12153));
return G__12151__delegate.call(this, f, coll, colls);
});
return G__12151;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12148.call(this,f,coll);
default:
return mapcat__12149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12149.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12156))
{var s__12157 = temp__3698__auto____12156;

var f__12158 = cljs.core.first.call(null,s__12157);
var r__12159 = cljs.core.rest.call(null,s__12157);

if(cljs.core.truth_(pred.call(null,f__12158)))
{return cljs.core.cons.call(null,f__12158,filter.call(null,pred,r__12159));
} else
{return filter.call(null,pred,r__12159);
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
var walk__12170 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12170.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12167_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12167_SHARP_));
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
var partition__12327 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12328 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12275 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12275))
{var s__12277 = temp__3698__auto____12275;

var p__12278 = cljs.core.take.call(null,n,s__12277);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12278))))
{return cljs.core.cons.call(null,p__12278,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12277)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12329 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12283 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12283))
{var s__12322 = temp__3698__auto____12283;

var p__12323 = cljs.core.take.call(null,n,s__12322);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12323))))
{return cljs.core.cons.call(null,p__12323,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12322)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12323,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12327.call(this,n,step);
case  3 :
return partition__12328.call(this,n,step,pad);
case  4 :
return partition__12329.call(this,n,step,pad,coll);
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
var get_in__12346 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12347 = (function (m,ks,not_found){
var sentinel__12338 = cljs.core.lookup_sentinel;
var m__12339 = m;
var ks__12340 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12340))
{var m__12341 = cljs.core.get.call(null,m__12339,cljs.core.first.call(null,ks__12340),sentinel__12338);

if(cljs.core.truth_((sentinel__12338 === m__12341)))
{return not_found;
} else
{{
var G__12349 = sentinel__12338;
var G__12350 = m__12341;
var G__12351 = cljs.core.next.call(null,ks__12340);
sentinel__12338 = G__12349;
m__12339 = G__12350;
ks__12340 = G__12351;
continue;
}
}
} else
{return m__12339;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12346.call(this,m,ks);
case  3 :
return get_in__12347.call(this,m,ks,not_found);
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
var vec__12353__12354 = p__12352;
var k__12355 = cljs.core.nth.call(null,vec__12353__12354,0,null);
var ks__12356 = cljs.core.nthnext.call(null,vec__12353__12354,1);

if(cljs.core.truth_(ks__12356))
{return cljs.core.assoc.call(null,m,k__12355,assoc_in.call(null,cljs.core.get.call(null,m,k__12355),ks__12356,v));
} else
{return cljs.core.assoc.call(null,m,k__12355,v);
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
var update_in__delegate = function (m,p__12359,f,args){
var vec__12361__12362 = p__12359;
var k__12363 = cljs.core.nth.call(null,vec__12361__12362,0,null);
var ks__12364 = cljs.core.nthnext.call(null,vec__12361__12362,1);

if(cljs.core.truth_(ks__12364))
{return cljs.core.assoc.call(null,m,k__12363,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12363),ks__12364,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12363,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12363),args));
}
};
var update_in = function (m,p__12359,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12359, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12373){
var m = cljs.core.first(arglist__12373);
var p__12359 = cljs.core.first(cljs.core.next(arglist__12373));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12373)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12373)));
return update_in__delegate.call(this, m, p__12359, f, args);
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
var G__12444 = null;
var G__12444__12445 = (function (coll,k){
var this__12386 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12444__12446 = (function (coll,k,not_found){
var this__12388 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12444 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12444__12445.call(this,coll,k);
case  3 :
return G__12444__12446.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12444;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12390 = this;
var new_array__12391 = cljs.core.aclone.call(null,this__12390.array);

(new_array__12391[k] = v);
return (new cljs.core.Vector(this__12390.meta,new_array__12391));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12452 = null;
var G__12452__12454 = (function (coll,k){
var this__12393 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12452__12455 = (function (coll,k,not_found){
var this__12395 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12452 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12452__12454.call(this,coll,k);
case  3 :
return G__12452__12455.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12452;
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
var G__12464 = null;
var G__12464__12466 = (function (v,f){
var this__12400 = this;
return cljs.core.ci_reduce.call(null,this__12400.array,f);
});
var G__12464__12467 = (function (v,f,start){
var this__12402 = this;
return cljs.core.ci_reduce.call(null,this__12402.array,f,start);
});
G__12464 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12464__12466.call(this,v,f);
case  3 :
return G__12464__12467.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12464;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12404 = this;
if(cljs.core.truth_((this__12404.array.length > 0)))
{var vector_seq__12407 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12404.array.length)))
{return cljs.core.cons.call(null,(this__12404.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12407.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12409 = this;
return this__12409.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12411 = this;
var count__12412 = this__12411.array.length;

if(cljs.core.truth_((count__12412 > 0)))
{return (this__12411.array[(count__12412 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12415 = this;
if(cljs.core.truth_((this__12415.array.length > 0)))
{var new_array__12417 = cljs.core.aclone.call(null,this__12415.array);

new_array__12417.pop();
return (new cljs.core.Vector(this__12415.meta,new_array__12417));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12426 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12427 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12433 = this;
return (new cljs.core.Vector(meta,this__12433.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12434 = this;
return this__12434.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12470 = null;
var G__12470__12471 = (function (coll,n){
var this__12435 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12436 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12436))
{return (n < this__12435.array.length);
} else
{return and__3546__auto____12436;
}
})()))
{return (this__12435.array[n]);
} else
{return null;
}
});
var G__12470__12472 = (function (coll,n,not_found){
var this__12441 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12442 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12442))
{return (n < this__12441.array.length);
} else
{return and__3546__auto____12442;
}
})()))
{return (this__12441.array[n]);
} else
{return not_found;
}
});
G__12470 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12470__12471.call(this,coll,n);
case  3 :
return G__12470__12472.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12470;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12443 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12443.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12482){
var args = cljs.core.seq( arglist__12482 );;
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
var this__12531 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12573 = null;
var G__12573__12574 = (function (coll,k){
var this__12532 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12573__12575 = (function (coll,k,not_found){
var this__12533 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12573 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12573__12574.call(this,coll,k);
case  3 :
return G__12573__12575.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12573;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12538 = this;
var v_pos__12539 = (this__12538.start + key);

return (new cljs.core.Subvec(this__12538.meta,cljs.core._assoc.call(null,this__12538.v,v_pos__12539,val),this__12538.start,((this__12538.end > (v_pos__12539 + 1)) ? this__12538.end : (v_pos__12539 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12581 = null;
var G__12581__12583 = (function (coll,k){
var this__12544 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12581__12584 = (function (coll,k,not_found){
var this__12545 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12581 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12581__12583.call(this,coll,k);
case  3 :
return G__12581__12584.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12581;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12546 = this;
return (new cljs.core.Subvec(this__12546.meta,cljs.core._assoc_n.call(null,this__12546.v,this__12546.end,o),this__12546.start,(this__12546.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12587 = null;
var G__12587__12588 = (function (coll,f){
var this__12547 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12587__12589 = (function (coll,f,start){
var this__12548 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12587 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12587__12588.call(this,coll,f);
case  3 :
return G__12587__12589.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12587;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12549 = this;
var subvec_seq__12550 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12549.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12549.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12550.call(null,this__12549.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12551 = this;
return (this__12551.end - this__12551.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12552 = this;
return cljs.core._nth.call(null,this__12552.v,(this__12552.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12557 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12557.start,this__12557.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12557.meta,this__12557.v,this__12557.start,(this__12557.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12558 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12559 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12562 = this;
return (new cljs.core.Subvec(meta,this__12562.v,this__12562.start,this__12562.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12564 = this;
return this__12564.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12612 = null;
var G__12612__12613 = (function (coll,n){
var this__12566 = this;
return cljs.core._nth.call(null,this__12566.v,(this__12566.start + n));
});
var G__12612__12614 = (function (coll,n,not_found){
var this__12568 = this;
return cljs.core._nth.call(null,this__12568.v,(this__12568.start + n),not_found);
});
G__12612 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12612__12613.call(this,coll,n);
case  3 :
return G__12612__12614.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12612;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12569 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12569.meta);
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
var subvec__12630 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12631 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12630.call(this,v,start);
case  3 :
return subvec__12631.call(this,v,start,end);
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
var this__12638 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12641 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12643 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12645 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12645.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12647 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12648 = this;
return cljs.core._first.call(null,this__12648.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12649 = this;
var temp__3695__auto____12654 = cljs.core.next.call(null,this__12649.front);

if(cljs.core.truth_(temp__3695__auto____12654))
{var f1__12655 = temp__3695__auto____12654;

return (new cljs.core.PersistentQueueSeq(this__12649.meta,f1__12655,this__12649.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12649.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12649.meta,this__12649.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12656 = this;
return this__12656.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12657 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12657.front,this__12657.rear));
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
var this__12684 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12685 = this;
if(cljs.core.truth_(this__12685.front))
{return (new cljs.core.PersistentQueue(this__12685.meta,(this__12685.count + 1),this__12685.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12687 = this__12685.rear;

if(cljs.core.truth_(or__3548__auto____12687))
{return or__3548__auto____12687;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12685.meta,(this__12685.count + 1),cljs.core.conj.call(null,this__12685.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12690 = this;
var rear__12691 = cljs.core.seq.call(null,this__12690.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12693 = this__12690.front;

if(cljs.core.truth_(or__3548__auto____12693))
{return or__3548__auto____12693;
} else
{return rear__12691;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12690.front,cljs.core.seq.call(null,rear__12691)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12694 = this;
return this__12694.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12697 = this;
return cljs.core._first.call(null,this__12697.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12700 = this;
if(cljs.core.truth_(this__12700.front))
{var temp__3695__auto____12704 = cljs.core.next.call(null,this__12700.front);

if(cljs.core.truth_(temp__3695__auto____12704))
{var f1__12705 = temp__3695__auto____12704;

return (new cljs.core.PersistentQueue(this__12700.meta,(this__12700.count - 1),f1__12705,this__12700.rear));
} else
{return (new cljs.core.PersistentQueue(this__12700.meta,(this__12700.count - 1),cljs.core.seq.call(null,this__12700.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12708 = this;
return cljs.core.first.call(null,this__12708.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12710 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12715 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12716 = this;
return (new cljs.core.PersistentQueue(meta,this__12716.count,this__12716.front,this__12716.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12721 = this;
return this__12721.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12722 = this;
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
var this__12751 = this;
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
var len__12837 = array.length;

var i__12838 = 0;

while(true){
if(cljs.core.truth_((i__12838 < len__12837)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12838]))))
{return i__12838;
} else
{{
var G__12845 = (i__12838 + incr);
i__12838 = G__12845;
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
var obj_map_contains_key_QMARK___12847 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12849 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12846 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12846))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12846;
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
return obj_map_contains_key_QMARK___12847.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12849.call(this,k,strobj,true_val,false_val);
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
var this__12857 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12903 = null;
var G__12903__12904 = (function (coll,k){
var this__12858 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12903__12905 = (function (coll,k,not_found){
var this__12859 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12859.strobj,(this__12859.strobj[k]),not_found);
});
G__12903 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12903__12904.call(this,coll,k);
case  3 :
return G__12903__12905.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12903;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12860 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12861 = goog.object.clone.call(null,this__12860.strobj);
var overwrite_QMARK___12862 = new_strobj__12861.hasOwnProperty(k);

(new_strobj__12861[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12862))
{return (new cljs.core.ObjMap(this__12860.meta,this__12860.keys,new_strobj__12861));
} else
{var new_keys__12863 = cljs.core.aclone.call(null,this__12860.keys);

new_keys__12863.push(k);
return (new cljs.core.ObjMap(this__12860.meta,new_keys__12863,new_strobj__12861));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12860.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12865 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12865.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12958 = null;
var G__12958__12960 = (function (coll,k){
var this__12867 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12958__12962 = (function (coll,k,not_found){
var this__12869 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12958 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12958__12960.call(this,coll,k);
case  3 :
return G__12958__12962.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12958;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12870 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12875 = this;
if(cljs.core.truth_((this__12875.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12852_SHARP_){
return cljs.core.vector.call(null,p1__12852_SHARP_,(this__12875.strobj[p1__12852_SHARP_]));
}),this__12875.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12879 = this;
return this__12879.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12883 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12886 = this;
return (new cljs.core.ObjMap(meta,this__12886.keys,this__12886.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12887 = this;
return this__12887.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12889 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12889.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12890 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12894 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12894))
{return this__12890.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12894;
}
})()))
{var new_keys__12897 = cljs.core.aclone.call(null,this__12890.keys);
var new_strobj__12899 = goog.object.clone.call(null,this__12890.strobj);

new_keys__12897.splice(cljs.core.scan_array.call(null,1,k,new_keys__12897),1);
cljs.core.js_delete.call(null,new_strobj__12899,k);
return (new cljs.core.ObjMap(this__12890.meta,new_keys__12897,new_strobj__12899));
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
var this__12995 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13079 = null;
var G__13079__13080 = (function (coll,k){
var this__12996 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13079__13081 = (function (coll,k,not_found){
var this__12997 = this;
var bucket__12998 = (this__12997.hashobj[cljs.core.hash.call(null,k)]);
var i__12999 = (cljs.core.truth_(bucket__12998)?cljs.core.scan_array.call(null,2,k,bucket__12998):null);

if(cljs.core.truth_(i__12999))
{return (bucket__12998[(i__12999 + 1)]);
} else
{return not_found;
}
});
G__13079 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13079__13080.call(this,coll,k);
case  3 :
return G__13079__13081.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13079;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13000 = this;
var h__13001 = cljs.core.hash.call(null,k);
var bucket__13002 = (this__13000.hashobj[h__13001]);

if(cljs.core.truth_(bucket__13002))
{var new_bucket__13003 = cljs.core.aclone.call(null,bucket__13002);
var new_hashobj__13004 = goog.object.clone.call(null,this__13000.hashobj);

(new_hashobj__13004[h__13001] = new_bucket__13003);
var temp__3695__auto____13005 = cljs.core.scan_array.call(null,2,k,new_bucket__13003);

if(cljs.core.truth_(temp__3695__auto____13005))
{var i__13006 = temp__3695__auto____13005;

(new_bucket__13003[(i__13006 + 1)] = v);
return (new cljs.core.HashMap(this__13000.meta,this__13000.count,new_hashobj__13004));
} else
{new_bucket__13003.push(k,v);
return (new cljs.core.HashMap(this__13000.meta,(this__13000.count + 1),new_hashobj__13004));
}
} else
{var new_hashobj__13008 = goog.object.clone.call(null,this__13000.hashobj);

(new_hashobj__13008[h__13001] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13000.meta,(this__13000.count + 1),new_hashobj__13008));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13011 = this;
var bucket__13012 = (this__13011.hashobj[cljs.core.hash.call(null,k)]);
var i__13013 = (cljs.core.truth_(bucket__13012)?cljs.core.scan_array.call(null,2,k,bucket__13012):null);

if(cljs.core.truth_(i__13013))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13088 = null;
var G__13088__13089 = (function (coll,k){
var this__13014 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13088__13090 = (function (coll,k,not_found){
var this__13017 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13088 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13088__13089.call(this,coll,k);
case  3 :
return G__13088__13090.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13088;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13018 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13020 = this;
if(cljs.core.truth_((this__13020.count > 0)))
{var hashes__13031 = cljs.core.js_keys.call(null,this__13020.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12983_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13020.hashobj[p1__12983_SHARP_])));
}),hashes__13031);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13034 = this;
return this__13034.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13037 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13041 = this;
return (new cljs.core.HashMap(meta,this__13041.count,this__13041.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13046 = this;
return this__13046.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13049 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13049.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13051 = this;
var h__13070 = cljs.core.hash.call(null,k);
var bucket__13071 = (this__13051.hashobj[h__13070]);
var i__13072 = (cljs.core.truth_(bucket__13071)?cljs.core.scan_array.call(null,2,k,bucket__13071):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13072)))
{return coll;
} else
{var new_hashobj__13073 = goog.object.clone.call(null,this__13051.hashobj);

if(cljs.core.truth_((3 > bucket__13071.length)))
{cljs.core.js_delete.call(null,new_hashobj__13073,h__13070);
} else
{var new_bucket__13074 = cljs.core.aclone.call(null,bucket__13071);

new_bucket__13074.splice(i__13072,2);
(new_hashobj__13073[h__13070] = new_bucket__13074);
}
return (new cljs.core.HashMap(this__13051.meta,(this__13051.count - 1),new_hashobj__13073));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13177 = ks.length;

var i__13179 = 0;
var out__13181 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13179 < len__13177)))
{{
var G__13192 = (i__13179 + 1);
var G__13193 = cljs.core.assoc.call(null,out__13181,(ks[i__13179]),(vs[i__13179]));
i__13179 = G__13192;
out__13181 = G__13193;
continue;
}
} else
{return out__13181;
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
var in$__13195 = cljs.core.seq.call(null,keyvals);
var out__13196 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13195))
{{
var G__13198 = cljs.core.nnext.call(null,in$__13195);
var G__13199 = cljs.core.assoc.call(null,out__13196,cljs.core.first.call(null,in$__13195),cljs.core.second.call(null,in$__13195));
in$__13195 = G__13198;
out__13196 = G__13199;
continue;
}
} else
{return out__13196;
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
hash_map.cljs$lang$applyTo = (function (arglist__13200){
var keyvals = cljs.core.seq( arglist__13200 );;
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
{return cljs.core.reduce.call(null,(function (p1__13205_SHARP_,p2__13206_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13209 = p1__13205_SHARP_;

if(cljs.core.truth_(or__3548__auto____13209))
{return or__3548__auto____13209;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13206_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13210){
var maps = cljs.core.seq( arglist__13210 );;
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
{var merge_entry__13218 = (function (m,e){
var k__13214 = cljs.core.first.call(null,e);
var v__13215 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13214)))
{return cljs.core.assoc.call(null,m,k__13214,f.call(null,cljs.core.get.call(null,m,k__13214),v__13215));
} else
{return cljs.core.assoc.call(null,m,k__13214,v__13215);
}
});
var merge2__13221 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13218,(function (){var or__3548__auto____13219 = m1;

if(cljs.core.truth_(or__3548__auto____13219))
{return or__3548__auto____13219;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13221,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13226){
var f = cljs.core.first(arglist__13226);
var maps = cljs.core.rest(arglist__13226);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13230 = cljs.core.ObjMap.fromObject([],{});
var keys__13231 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13231))
{var key__13232 = cljs.core.first.call(null,keys__13231);
var entry__13233 = cljs.core.get.call(null,map,key__13232,"﷐'user/not-found");

{
var G__13239 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13233,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13230,key__13232,entry__13233):ret__13230);
var G__13240 = cljs.core.next.call(null,keys__13231);
ret__13230 = G__13239;
keys__13231 = G__13240;
continue;
}
} else
{return ret__13230;
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
var this__13243 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13309 = null;
var G__13309__13310 = (function (coll,v){
var this__13244 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13309__13311 = (function (coll,v,not_found){
var this__13245 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13245.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13309 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13309__13310.call(this,coll,v);
case  3 :
return G__13309__13311.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13309;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13317 = null;
var G__13317__13318 = (function (coll,k){
var this__13281 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13317__13319 = (function (coll,k,not_found){
var this__13283 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13317 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13317__13318.call(this,coll,k);
case  3 :
return G__13317__13319.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13317;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13286 = this;
return (new cljs.core.Set(this__13286.meta,cljs.core.assoc.call(null,this__13286.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13288 = this;
return cljs.core.keys.call(null,this__13288.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13290 = this;
return (new cljs.core.Set(this__13290.meta,cljs.core.dissoc.call(null,this__13290.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13294 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13295 = this;
var and__3546__auto____13304 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13304))
{var and__3546__auto____13305 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13305))
{return cljs.core.every_QMARK_.call(null,(function (p1__13228_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13228_SHARP_);
}),other);
} else
{return and__3546__auto____13305;
}
} else
{return and__3546__auto____13304;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13306 = this;
return (new cljs.core.Set(meta,this__13306.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13307 = this;
return this__13307.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13308 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13308.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13337 = cljs.core.seq.call(null,coll);
var out__13338 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13337))))
{{
var G__13348 = cljs.core.rest.call(null,in$__13337);
var G__13349 = cljs.core.conj.call(null,out__13338,cljs.core.first.call(null,in$__13337));
in$__13337 = G__13348;
out__13338 = G__13349;
continue;
}
} else
{return out__13338;
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
{var n__13352 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13353 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13353))
{var e__13356 = temp__3695__auto____13353;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13356));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13352,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13336_SHARP_){
var temp__3695__auto____13359 = cljs.core.find.call(null,smap,p1__13336_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13359))
{var e__13361 = temp__3695__auto____13359;

return cljs.core.second.call(null,e__13361);
} else
{return p1__13336_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13378 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13369,seen){
while(true){
var vec__13371__13372 = p__13369;
var f__13373 = cljs.core.nth.call(null,vec__13371__13372,0,null);
var xs__13374 = vec__13371__13372;

var temp__3698__auto____13375 = cljs.core.seq.call(null,xs__13374);

if(cljs.core.truth_(temp__3698__auto____13375))
{var s__13377 = temp__3698__auto____13375;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13373)))
{{
var G__13404 = cljs.core.rest.call(null,s__13377);
var G__13405 = seen;
p__13369 = G__13404;
seen = G__13405;
continue;
}
} else
{return cljs.core.cons.call(null,f__13373,step.call(null,cljs.core.rest.call(null,s__13377),cljs.core.conj.call(null,seen,f__13373)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13378.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13412 = cljs.core.Vector.fromArray([]);
var s__13413 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13413)))
{{
var G__13414 = cljs.core.conj.call(null,ret__13412,cljs.core.first.call(null,s__13413));
var G__13415 = cljs.core.next.call(null,s__13413);
ret__13412 = G__13414;
s__13413 = G__13415;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13412);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13416 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13416))
{return or__3548__auto____13416;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13421 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13421 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13421 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13435 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13435))
{return or__3548__auto____13435;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13436 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13436 > -1)))
{return cljs.core.subs.call(null,x,2,i__13436);
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
var map__13447 = cljs.core.ObjMap.fromObject([],{});
var ks__13448 = cljs.core.seq.call(null,keys);
var vs__13449 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13451 = ks__13448;

if(cljs.core.truth_(and__3546__auto____13451))
{return vs__13449;
} else
{return and__3546__auto____13451;
}
})()))
{{
var G__13452 = cljs.core.assoc.call(null,map__13447,cljs.core.first.call(null,ks__13448),cljs.core.first.call(null,vs__13449));
var G__13453 = cljs.core.next.call(null,ks__13448);
var G__13454 = cljs.core.next.call(null,vs__13449);
map__13447 = G__13452;
ks__13448 = G__13453;
vs__13449 = G__13454;
continue;
}
} else
{return map__13447;
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
var max_key__13459 = (function (k,x){
return x;
});
var max_key__13460 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13461 = (function() { 
var G__13463__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13444_SHARP_,p2__13445_SHARP_){
return max_key.call(null,k,p1__13444_SHARP_,p2__13445_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13463 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13463__delegate.call(this, k, x, y, more);
};
G__13463.cljs$lang$maxFixedArity = 3;
G__13463.cljs$lang$applyTo = (function (arglist__13465){
var k = cljs.core.first(arglist__13465);
var x = cljs.core.first(cljs.core.next(arglist__13465));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13465)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13465)));
return G__13463__delegate.call(this, k, x, y, more);
});
return G__13463;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13459.call(this,k,x);
case  3 :
return max_key__13460.call(this,k,x,y);
default:
return max_key__13461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13461.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13472 = (function (k,x){
return x;
});
var min_key__13473 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13474 = (function() { 
var G__13481__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13455_SHARP_,p2__13456_SHARP_){
return min_key.call(null,k,p1__13455_SHARP_,p2__13456_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13481 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13481__delegate.call(this, k, x, y, more);
};
G__13481.cljs$lang$maxFixedArity = 3;
G__13481.cljs$lang$applyTo = (function (arglist__13489){
var k = cljs.core.first(arglist__13489);
var x = cljs.core.first(cljs.core.next(arglist__13489));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13489)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13489)));
return G__13481__delegate.call(this, k, x, y, more);
});
return G__13481;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13472.call(this,k,x);
case  3 :
return min_key__13473.call(this,k,x,y);
default:
return min_key__13474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13474.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13597 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13598 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13569 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13569))
{var s__13571 = temp__3698__auto____13569;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13571),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13571)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13597.call(this,n,step);
case  3 :
return partition_all__13598.call(this,n,step,coll);
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
var temp__3698__auto____13604 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13604))
{var s__13605 = temp__3698__auto____13604;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13605))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13605),take_while.call(null,pred,cljs.core.rest.call(null,s__13605)));
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
var this__13612 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13614 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13640 = null;
var G__13640__13642 = (function (rng,f){
var this__13616 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13640__13643 = (function (rng,f,s){
var this__13617 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13640 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13640__13642.call(this,rng,f);
case  3 :
return G__13640__13643.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13640;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13620 = this;
var comp__13621 = (cljs.core.truth_((this__13620.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13621.call(null,this__13620.start,this__13620.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13622 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13622.end - this__13622.start) / this__13622.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13623 = this;
return this__13623.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13624 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13624.meta,(this__13624.start + this__13624.step),this__13624.end,this__13624.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13625 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13626 = this;
return (new cljs.core.Range(meta,this__13626.start,this__13626.end,this__13626.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13628 = this;
return this__13628.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13837 = null;
var G__13837__13880 = (function (rng,n){
var this__13629 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13629.start + (n * this__13629.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13630 = (this__13629.start > this__13629.end);

if(cljs.core.truth_(and__3546__auto____13630))
{return cljs.core._EQ_.call(null,this__13629.step,0);
} else
{return and__3546__auto____13630;
}
})()))
{return this__13629.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13837__13882 = (function (rng,n,not_found){
var this__13631 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13631.start + (n * this__13631.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13632 = (this__13631.start > this__13631.end);

if(cljs.core.truth_(and__3546__auto____13632))
{return cljs.core._EQ_.call(null,this__13631.step,0);
} else
{return and__3546__auto____13632;
}
})()))
{return this__13631.start;
} else
{return not_found;
}
}
});
G__13837 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13837__13880.call(this,rng,n);
case  3 :
return G__13837__13882.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13837;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13633 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13633.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13904 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13905 = (function (end){
return range.call(null,0,end,1);
});
var range__13906 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13908 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13904.call(this);
case  1 :
return range__13905.call(this,start);
case  2 :
return range__13906.call(this,start,end);
case  3 :
return range__13908.call(this,start,end,step);
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
var temp__3698__auto____13917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13917))
{var s__13918 = temp__3698__auto____13917;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13918),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13918)));
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
var temp__3698__auto____13924 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13924))
{var s__13925 = temp__3698__auto____13924;

var fst__13926 = cljs.core.first.call(null,s__13925);
var fv__13927 = f.call(null,fst__13926);
var run__13928 = cljs.core.cons.call(null,fst__13926,cljs.core.take_while.call(null,(function (p1__13923_SHARP_){
return cljs.core._EQ_.call(null,fv__13927,f.call(null,p1__13923_SHARP_));
}),cljs.core.next.call(null,s__13925)));

return cljs.core.cons.call(null,run__13928,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13928),s__13925))));
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
var reductions__13974 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13939))
{var s__13940 = temp__3695__auto____13939;

return reductions.call(null,f,cljs.core.first.call(null,s__13940),cljs.core.rest.call(null,s__13940));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13975 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13945))
{var s__13946 = temp__3698__auto____13945;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13946)),cljs.core.rest.call(null,s__13946));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13974.call(this,f,init);
case  3 :
return reductions__13975.call(this,f,init,coll);
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
var juxt__13992 = (function (f){
return (function() {
var G__13999 = null;
var G__13999__14000 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13999__14001 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13999__14002 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13999__14003 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13999__14004 = (function() { 
var G__14010__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14010 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14010__delegate.call(this, x, y, z, args);
};
G__14010.cljs$lang$maxFixedArity = 3;
G__14010.cljs$lang$applyTo = (function (arglist__14011){
var x = cljs.core.first(arglist__14011);
var y = cljs.core.first(cljs.core.next(arglist__14011));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14011)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14011)));
return G__14010__delegate.call(this, x, y, z, args);
});
return G__14010;
})()
;
G__13999 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13999__14000.call(this);
case  1 :
return G__13999__14001.call(this,x);
case  2 :
return G__13999__14002.call(this,x,y);
case  3 :
return G__13999__14003.call(this,x,y,z);
default:
return G__13999__14004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13999.cljs$lang$maxFixedArity = 3;
G__13999.cljs$lang$applyTo = G__13999__14004.cljs$lang$applyTo;
return G__13999;
})()
});
var juxt__13994 = (function (f,g){
return (function() {
var G__14015 = null;
var G__14015__14016 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14015__14017 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14015__14018 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14015__14019 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14015__14020 = (function() { 
var G__14024__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14024 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14024__delegate.call(this, x, y, z, args);
};
G__14024.cljs$lang$maxFixedArity = 3;
G__14024.cljs$lang$applyTo = (function (arglist__14025){
var x = cljs.core.first(arglist__14025);
var y = cljs.core.first(cljs.core.next(arglist__14025));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14025)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14025)));
return G__14024__delegate.call(this, x, y, z, args);
});
return G__14024;
})()
;
G__14015 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14015__14016.call(this);
case  1 :
return G__14015__14017.call(this,x);
case  2 :
return G__14015__14018.call(this,x,y);
case  3 :
return G__14015__14019.call(this,x,y,z);
default:
return G__14015__14020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14015.cljs$lang$maxFixedArity = 3;
G__14015.cljs$lang$applyTo = G__14015__14020.cljs$lang$applyTo;
return G__14015;
})()
});
var juxt__13995 = (function (f,g,h){
return (function() {
var G__14029 = null;
var G__14029__14030 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14029__14031 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14029__14032 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14029__14033 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14029__14034 = (function() { 
var G__14038__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14038__delegate.call(this, x, y, z, args);
};
G__14038.cljs$lang$maxFixedArity = 3;
G__14038.cljs$lang$applyTo = (function (arglist__14041){
var x = cljs.core.first(arglist__14041);
var y = cljs.core.first(cljs.core.next(arglist__14041));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14041)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14041)));
return G__14038__delegate.call(this, x, y, z, args);
});
return G__14038;
})()
;
G__14029 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14029__14030.call(this);
case  1 :
return G__14029__14031.call(this,x);
case  2 :
return G__14029__14032.call(this,x,y);
case  3 :
return G__14029__14033.call(this,x,y,z);
default:
return G__14029__14034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14029.cljs$lang$maxFixedArity = 3;
G__14029.cljs$lang$applyTo = G__14029__14034.cljs$lang$applyTo;
return G__14029;
})()
});
var juxt__13996 = (function() { 
var G__14042__delegate = function (f,g,h,fs){
var fs__13986 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14043 = null;
var G__14043__14044 = (function (){
return cljs.core.reduce.call(null,(function (p1__13929_SHARP_,p2__13930_SHARP_){
return cljs.core.conj.call(null,p1__13929_SHARP_,p2__13930_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13986);
});
var G__14043__14045 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13931_SHARP_,p2__13932_SHARP_){
return cljs.core.conj.call(null,p1__13931_SHARP_,p2__13932_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13986);
});
var G__14043__14046 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13933_SHARP_,p2__13934_SHARP_){
return cljs.core.conj.call(null,p1__13933_SHARP_,p2__13934_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13986);
});
var G__14043__14047 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13935_SHARP_,p2__13936_SHARP_){
return cljs.core.conj.call(null,p1__13935_SHARP_,p2__13936_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13986);
});
var G__14043__14048 = (function() { 
var G__14050__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13937_SHARP_,p2__13938_SHARP_){
return cljs.core.conj.call(null,p1__13937_SHARP_,cljs.core.apply.call(null,p2__13938_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13986);
};
var G__14050 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14050__delegate.call(this, x, y, z, args);
};
G__14050.cljs$lang$maxFixedArity = 3;
G__14050.cljs$lang$applyTo = (function (arglist__14052){
var x = cljs.core.first(arglist__14052);
var y = cljs.core.first(cljs.core.next(arglist__14052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14052)));
return G__14050__delegate.call(this, x, y, z, args);
});
return G__14050;
})()
;
G__14043 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14043__14044.call(this);
case  1 :
return G__14043__14045.call(this,x);
case  2 :
return G__14043__14046.call(this,x,y);
case  3 :
return G__14043__14047.call(this,x,y,z);
default:
return G__14043__14048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14043.cljs$lang$maxFixedArity = 3;
G__14043.cljs$lang$applyTo = G__14043__14048.cljs$lang$applyTo;
return G__14043;
})()
};
var G__14042 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14042__delegate.call(this, f, g, h, fs);
};
G__14042.cljs$lang$maxFixedArity = 3;
G__14042.cljs$lang$applyTo = (function (arglist__14053){
var f = cljs.core.first(arglist__14053);
var g = cljs.core.first(cljs.core.next(arglist__14053));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14053)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14053)));
return G__14042__delegate.call(this, f, g, h, fs);
});
return G__14042;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13992.call(this,f);
case  2 :
return juxt__13994.call(this,f,g);
case  3 :
return juxt__13995.call(this,f,g,h);
default:
return juxt__13996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13996.cljs$lang$applyTo;
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
var dorun__14194 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14201 = cljs.core.next.call(null,coll);
coll = G__14201;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14195 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14188))
{return (n > 0);
} else
{return and__3546__auto____14188;
}
})()))
{{
var G__14203 = (n - 1);
var G__14204 = cljs.core.next.call(null,coll);
n = G__14203;
coll = G__14204;
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
return dorun__14194.call(this,n);
case  2 :
return dorun__14195.call(this,n,coll);
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
var doall__14206 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14207 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14206.call(this,n);
case  2 :
return doall__14207.call(this,n,coll);
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
var matches__14210 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14210),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14210),1)))
{return cljs.core.first.call(null,matches__14210);
} else
{return cljs.core.vec.call(null,matches__14210);
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
var matches__14221 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14221)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14221),1)))
{return cljs.core.first.call(null,matches__14221);
} else
{return cljs.core.vec.call(null,matches__14221);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14229 = cljs.core.re_find.call(null,re,s);
var match_idx__14230 = s.search(re);
var match_str__14231 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14229))?cljs.core.first.call(null,match_data__14229):match_data__14229);
var post_match__14232 = cljs.core.subs.call(null,s,(match_idx__14230 + cljs.core.count.call(null,match_str__14231)));

if(cljs.core.truth_(match_data__14229))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14229,re_seq.call(null,re,post_match__14232));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14234_SHARP_){
return print_one.call(null,p1__14234_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14250 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14250))
{var and__3546__auto____14254 = (function (){var x__445__auto____14251 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14252 = x__445__auto____14251;

if(cljs.core.truth_(and__3546__auto____14252))
{var and__3546__auto____14253 = x__445__auto____14251.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14253))
{return cljs.core.not.call(null,x__445__auto____14251.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14253;
}
} else
{return and__3546__auto____14252;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14251);
}
})();

if(cljs.core.truth_(and__3546__auto____14254))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14254;
}
} else
{return and__3546__auto____14250;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14262 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14264 = x__445__auto____14262;

if(cljs.core.truth_(and__3546__auto____14264))
{var and__3546__auto____14265 = x__445__auto____14262.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14265))
{return cljs.core.not.call(null,x__445__auto____14262.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14265;
}
} else
{return and__3546__auto____14264;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14262);
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
var first_obj__14303 = cljs.core.first.call(null,objs);
var sb__14304 = (new goog.string.StringBuffer());

var G__14305__14306 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14305__14306))
{var obj__14308 = cljs.core.first.call(null,G__14305__14306);
var G__14305__14309 = G__14305__14306;

while(true){
if(cljs.core.truth_((obj__14308 === first_obj__14303)))
{} else
{sb__14304.append(" ");
}
var G__14311__14312 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14308,opts));

if(cljs.core.truth_(G__14311__14312))
{var string__14314 = cljs.core.first.call(null,G__14311__14312);
var G__14311__14315 = G__14311__14312;

while(true){
sb__14304.append(string__14314);
var temp__3698__auto____14316 = cljs.core.next.call(null,G__14311__14315);

if(cljs.core.truth_(temp__3698__auto____14316))
{var G__14311__14318 = temp__3698__auto____14316;

{
var G__14329 = cljs.core.first.call(null,G__14311__14318);
var G__14330 = G__14311__14318;
string__14314 = G__14329;
G__14311__14315 = G__14330;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14319 = cljs.core.next.call(null,G__14305__14309);

if(cljs.core.truth_(temp__3698__auto____14319))
{var G__14305__14320 = temp__3698__auto____14319;

{
var G__14331 = cljs.core.first.call(null,G__14305__14320);
var G__14332 = G__14305__14320;
obj__14308 = G__14331;
G__14305__14309 = G__14332;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14304);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14349 = cljs.core.first.call(null,objs);

var G__14350__14351 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14350__14351))
{var obj__14352 = cljs.core.first.call(null,G__14350__14351);
var G__14350__14353 = G__14350__14351;

while(true){
if(cljs.core.truth_((obj__14352 === first_obj__14349)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14355__14358 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14352,opts));

if(cljs.core.truth_(G__14355__14358))
{var string__14359 = cljs.core.first.call(null,G__14355__14358);
var G__14355__14360 = G__14355__14358;

while(true){
cljs.core.string_print.call(null,string__14359);
var temp__3698__auto____14361 = cljs.core.next.call(null,G__14355__14360);

if(cljs.core.truth_(temp__3698__auto____14361))
{var G__14355__14362 = temp__3698__auto____14361;

{
var G__14365 = cljs.core.first.call(null,G__14355__14362);
var G__14366 = G__14355__14362;
string__14359 = G__14365;
G__14355__14360 = G__14366;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14363 = cljs.core.next.call(null,G__14350__14353);

if(cljs.core.truth_(temp__3698__auto____14363))
{var G__14350__14364 = temp__3698__auto____14363;

{
var G__14367 = cljs.core.first.call(null,G__14350__14364);
var G__14368 = G__14350__14364;
obj__14352 = G__14367;
G__14350__14353 = G__14368;
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
pr_str.cljs$lang$applyTo = (function (arglist__14382){
var objs = cljs.core.seq( arglist__14382 );;
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
pr.cljs$lang$applyTo = (function (arglist__14387){
var objs = cljs.core.seq( arglist__14387 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14393){
var objs = cljs.core.seq( arglist__14393 );;
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
println.cljs$lang$applyTo = (function (arglist__14426){
var objs = cljs.core.seq( arglist__14426 );;
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
prn.cljs$lang$applyTo = (function (arglist__14427){
var objs = cljs.core.seq( arglist__14427 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14440 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14440,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14453 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14453))
{var nspc__14455 = temp__3698__auto____14453;

return cljs.core.str.call(null,nspc__14455,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14458 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14458))
{var nspc__14459 = temp__3698__auto____14458;

return cljs.core.str.call(null,nspc__14459,"/");
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
var pr_pair__14464 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14464,"{",", ","}",opts,coll);
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
var this__14486 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14488 = this;
var G__14489__14491 = cljs.core.seq.call(null,this__14488.watches);

if(cljs.core.truth_(G__14489__14491))
{var G__14493__14495 = cljs.core.first.call(null,G__14489__14491);
var vec__14494__14496 = G__14493__14495;
var key__14498 = cljs.core.nth.call(null,vec__14494__14496,0,null);
var f__14499 = cljs.core.nth.call(null,vec__14494__14496,1,null);
var G__14489__14500 = G__14489__14491;

var G__14493__14501 = G__14493__14495;
var G__14489__14502 = G__14489__14500;

while(true){
var vec__14503__14504 = G__14493__14501;
var key__14505 = cljs.core.nth.call(null,vec__14503__14504,0,null);
var f__14509 = cljs.core.nth.call(null,vec__14503__14504,1,null);
var G__14489__14512 = G__14489__14502;

f__14509.call(null,key__14505,this$,oldval,newval);
var temp__3698__auto____14516 = cljs.core.next.call(null,G__14489__14512);

if(cljs.core.truth_(temp__3698__auto____14516))
{var G__14489__14518 = temp__3698__auto____14516;

{
var G__14558 = cljs.core.first.call(null,G__14489__14518);
var G__14559 = G__14489__14518;
G__14493__14501 = G__14558;
G__14489__14502 = G__14559;
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
var this__14524 = this;
return this$.watches = cljs.core.assoc.call(null,this__14524.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14532 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14532.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14541 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14541.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14544 = this;
return this__14544.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14546 = this;
return this__14546.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14547 = this;
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
var atom__14620 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14622 = (function() { 
var G__14625__delegate = function (x,p__14576){
var map__14579__14581 = p__14576;
var map__14579__14583 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14579__14581))?cljs.core.apply.call(null,cljs.core.hash_map,map__14579__14581):map__14579__14581);
var validator__14585 = cljs.core.get.call(null,map__14579__14583,"﷐'validator");
var meta__14588 = cljs.core.get.call(null,map__14579__14583,"﷐'meta");

return (new cljs.core.Atom(x,meta__14588,validator__14585,null));
};
var G__14625 = function (x,var_args){
var p__14576 = null;
if (goog.isDef(var_args)) {
  p__14576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14625__delegate.call(this, x, p__14576);
};
G__14625.cljs$lang$maxFixedArity = 1;
G__14625.cljs$lang$applyTo = (function (arglist__14635){
var x = cljs.core.first(arglist__14635);
var p__14576 = cljs.core.rest(arglist__14635);
return G__14625__delegate.call(this, x, p__14576);
});
return G__14625;
})()
;
atom = function(x,var_args){
var p__14576 = var_args;
switch(arguments.length){
case  1 :
return atom__14620.call(this,x);
default:
return atom__14622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14622.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14636 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14636))
{var validate__14637 = temp__3698__auto____14636;

if(cljs.core.truth_(validate__14637.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14641 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14641,new_value);
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
var swap_BANG___14655 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14656 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14657 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14658 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14660 = (function() { 
var G__14754__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14754 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14754__delegate.call(this, a, f, x, y, z, more);
};
G__14754.cljs$lang$maxFixedArity = 5;
G__14754.cljs$lang$applyTo = (function (arglist__14757){
var a = cljs.core.first(arglist__14757);
var f = cljs.core.first(cljs.core.next(arglist__14757));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14757)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14757))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14757)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14757)))));
return G__14754__delegate.call(this, a, f, x, y, z, more);
});
return G__14754;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14655.call(this,a,f);
case  3 :
return swap_BANG___14656.call(this,a,f,x);
case  4 :
return swap_BANG___14657.call(this,a,f,x,y);
case  5 :
return swap_BANG___14658.call(this,a,f,x,y,z);
default:
return swap_BANG___14660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14660.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14835){
var iref = cljs.core.first(arglist__14835);
var f = cljs.core.first(cljs.core.next(arglist__14835));
var args = cljs.core.rest(cljs.core.next(arglist__14835));
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
var gensym__14902 = (function (){
return gensym.call(null,"G__");
});
var gensym__14903 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14902.call(this);
case  1 :
return gensym__14903.call(this,prefix_string);
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
var this__14915 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14915.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14919 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14919.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14919.state,this__14919.f);
}
return cljs.core.deref.call(null,this__14919.state);
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
delay.cljs$lang$applyTo = (function (arglist__14922){
var body = cljs.core.seq( arglist__14922 );;
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
var map__14945__14946 = options;
var map__14945__14948 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14945__14946))?cljs.core.apply.call(null,cljs.core.hash_map,map__14945__14946):map__14945__14946);
var keywordize_keys__14949 = cljs.core.get.call(null,map__14945__14948,"﷐'keywordize-keys");
var keyfn__14950 = (cljs.core.truth_(keywordize_keys__14949)?cljs.core.keyword:cljs.core.str);
var f__14959 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14957 = (function iter__14951(s__14952){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14952__14955 = s__14952;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14952__14955)))
{var k__14956 = cljs.core.first.call(null,s__14952__14955);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14950.call(null,k__14956),thisfn.call(null,(x[k__14956]))]),iter__14951.call(null,cljs.core.rest.call(null,s__14952__14955)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14957.call(null,cljs.core.js_keys.call(null,x));
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

return f__14959.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14961){
var x = cljs.core.first(arglist__14961);
var options = cljs.core.rest(arglist__14961);
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
var mem__14962 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14970__delegate = function (args){
var temp__3695__auto____14963 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14962),args);

if(cljs.core.truth_(temp__3695__auto____14963))
{var v__14964 = temp__3695__auto____14963;

return v__14964;
} else
{var ret__14965 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14962,cljs.core.assoc,args,ret__14965);
return ret__14965;
}
};
var G__14970 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14970__delegate.call(this, args);
};
G__14970.cljs$lang$maxFixedArity = 0;
G__14970.cljs$lang$applyTo = (function (arglist__14971){
var args = cljs.core.seq( arglist__14971 );;
return G__14970__delegate.call(this, args);
});
return G__14970;
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
var trampoline__14977 = (function (f){
while(true){
var ret__14974 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14974)))
{{
var G__14982 = ret__14974;
f = G__14982;
continue;
}
} else
{return ret__14974;
}
break;
}
});
var trampoline__14978 = (function() { 
var G__14984__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14984 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14984__delegate.call(this, f, args);
};
G__14984.cljs$lang$maxFixedArity = 1;
G__14984.cljs$lang$applyTo = (function (arglist__14986){
var f = cljs.core.first(arglist__14986);
var args = cljs.core.rest(arglist__14986);
return G__14984__delegate.call(this, f, args);
});
return G__14984;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14977.call(this,f);
default:
return trampoline__14978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14978.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14991 = (function (){
return rand.call(null,1);
});
var rand__14992 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14991.call(this);
case  1 :
return rand__14992.call(this,n);
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
var k__15000 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15000,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15000,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15021 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15022 = (function (h,child,parent){
var or__3548__auto____15007 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15007))
{return or__3548__auto____15007;
} else
{var or__3548__auto____15008 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15008))
{return or__3548__auto____15008;
} else
{var and__3546__auto____15009 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15009))
{var and__3546__auto____15010 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15010))
{var and__3546__auto____15011 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15011))
{var ret__15012 = true;
var i__15013 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15014 = cljs.core.not.call(null,ret__15012);

if(cljs.core.truth_(or__3548__auto____15014))
{return or__3548__auto____15014;
} else
{return cljs.core._EQ_.call(null,i__15013,cljs.core.count.call(null,parent));
}
})()))
{return ret__15012;
} else
{{
var G__15078 = isa_QMARK_.call(null,h,child.call(null,i__15013),parent.call(null,i__15013));
var G__15079 = (i__15013 + 1);
ret__15012 = G__15078;
i__15013 = G__15079;
continue;
}
}
break;
}
} else
{return and__3546__auto____15011;
}
} else
{return and__3546__auto____15010;
}
} else
{return and__3546__auto____15009;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15021.call(this,h,child);
case  3 :
return isa_QMARK___15022.call(this,h,child,parent);
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
var parents__15088 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15089 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15088.call(this,h);
case  2 :
return parents__15089.call(this,h,tag);
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
var ancestors__15132 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15133 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15132.call(this,h);
case  2 :
return ancestors__15133.call(this,h,tag);
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
var descendants__15169 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15170 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15169.call(this,h);
case  2 :
return descendants__15170.call(this,h,tag);
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
var derive__15180 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15181 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15175 = "﷐'parents".call(null,h);
var td__15176 = "﷐'descendants".call(null,h);
var ta__15177 = "﷐'ancestors".call(null,h);
var tf__15178 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15179 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15175.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15177.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15177.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15175,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15178.call(null,"﷐'ancestors".call(null,h),tag,td__15176,parent,ta__15177),"﷐'descendants":tf__15178.call(null,"﷐'descendants".call(null,h),parent,ta__15177,tag,td__15176)});
})());

if(cljs.core.truth_(or__3548__auto____15179))
{return or__3548__auto____15179;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15180.call(this,h,tag);
case  3 :
return derive__15181.call(this,h,tag,parent);
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
var underive__15196 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15197 = (function (h,tag,parent){
var parentMap__15183 = "﷐'parents".call(null,h);
var childsParents__15184 = (cljs.core.truth_(parentMap__15183.call(null,tag))?cljs.core.disj.call(null,parentMap__15183.call(null,tag),parent):cljs.core.set([]));
var newParents__15185 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15184))?cljs.core.assoc.call(null,parentMap__15183,tag,childsParents__15184):cljs.core.dissoc.call(null,parentMap__15183,tag));
var deriv_seq__15195 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15172_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15172_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15172_SHARP_),cljs.core.second.call(null,p1__15172_SHARP_)));
}),cljs.core.seq.call(null,newParents__15185)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15183.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15173_SHARP_,p2__15174_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15173_SHARP_,p2__15174_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15195));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15196.call(this,h,tag);
case  3 :
return underive__15197.call(this,h,tag,parent);
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
var xprefs__15204 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15206 = (cljs.core.truth_((function (){var and__3546__auto____15205 = xprefs__15204;

if(cljs.core.truth_(and__3546__auto____15205))
{return xprefs__15204.call(null,y);
} else
{return and__3546__auto____15205;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15206))
{return or__3548__auto____15206;
} else
{var or__3548__auto____15208 = (function (){var ps__15207 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15207) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15207),prefer_table)))
{} else
{}
{
var G__15211 = cljs.core.rest.call(null,ps__15207);
ps__15207 = G__15211;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15208))
{return or__3548__auto____15208;
} else
{var or__3548__auto____15210 = (function (){var ps__15209 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15209) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15209),y,prefer_table)))
{} else
{}
{
var G__15212 = cljs.core.rest.call(null,ps__15209);
ps__15209 = G__15212;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15215 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15215))
{return or__3548__auto____15215;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15268 = cljs.core.reduce.call(null,(function (be,p__15218){
var vec__15219__15220 = p__15218;
var k__15222 = cljs.core.nth.call(null,vec__15219__15220,0,null);
var ___15223 = cljs.core.nth.call(null,vec__15219__15220,1,null);
var e__15224 = vec__15219__15220;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15222)))
{var be2__15227 = (cljs.core.truth_((function (){var or__3548__auto____15226 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15226))
{return or__3548__auto____15226;
} else
{return cljs.core.dominates.call(null,k__15222,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15224:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15227),k__15222,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15222," and ",cljs.core.first.call(null,be2__15227),", and neither is preferred")));
}
return be2__15227;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15268))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15268));
return cljs.core.second.call(null,best_entry__15268);
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
if(cljs.core.truth_((function (){var and__3546__auto____15286 = mf;

if(cljs.core.truth_(and__3546__auto____15286))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15286;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15287 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15287))
{return or__3548__auto____15287;
} else
{var or__3548__auto____15288 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15288))
{return or__3548__auto____15288;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15291 = mf;

if(cljs.core.truth_(and__3546__auto____15291))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15291;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15293 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15293))
{return or__3548__auto____15293;
} else
{var or__3548__auto____15294 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15294))
{return or__3548__auto____15294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15297 = mf;

if(cljs.core.truth_(and__3546__auto____15297))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15297;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15298 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15298))
{return or__3548__auto____15298;
} else
{var or__3548__auto____15299 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15299))
{return or__3548__auto____15299;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15300 = mf;

if(cljs.core.truth_(and__3546__auto____15300))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15300;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15301 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15301))
{return or__3548__auto____15301;
} else
{var or__3548__auto____15302 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15303 = mf;

if(cljs.core.truth_(and__3546__auto____15303))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15303;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15304 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15304))
{return or__3548__auto____15304;
} else
{var or__3548__auto____15305 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15305))
{return or__3548__auto____15305;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15306 = mf;

if(cljs.core.truth_(and__3546__auto____15306))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15306;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15307 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15307))
{return or__3548__auto____15307;
} else
{var or__3548__auto____15308 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15308))
{return or__3548__auto____15308;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15309 = mf;

if(cljs.core.truth_(and__3546__auto____15309))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15309;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15310 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{var or__3548__auto____15311 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15311))
{return or__3548__auto____15311;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15312 = mf;

if(cljs.core.truth_(and__3546__auto____15312))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15312;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15313 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15313))
{return or__3548__auto____15313;
} else
{var or__3548__auto____15314 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15314))
{return or__3548__auto____15314;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15366 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15367 = cljs.core._get_method.call(null,mf,dispatch_val__15366);

if(cljs.core.truth_(target_fn__15367))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15366)));
}
return cljs.core.apply.call(null,target_fn__15367,args);
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
var this__15370 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15371 = this;
cljs.core.swap_BANG_.call(null,this__15371.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15371.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15371.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15371.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15374 = this;
cljs.core.swap_BANG_.call(null,this__15374.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15374.method_cache,this__15374.method_table,this__15374.cached_hierarchy,this__15374.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15377 = this;
cljs.core.swap_BANG_.call(null,this__15377.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15377.method_cache,this__15377.method_table,this__15377.cached_hierarchy,this__15377.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15380 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15380.cached_hierarchy),cljs.core.deref.call(null,this__15380.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15380.method_cache,this__15380.method_table,this__15380.cached_hierarchy,this__15380.hierarchy);
}
var temp__3695__auto____15382 = cljs.core.deref.call(null,this__15380.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15382))
{var target_fn__15383 = temp__3695__auto____15382;

return target_fn__15383;
} else
{var temp__3695__auto____15384 = cljs.core.find_and_cache_best_method.call(null,this__15380.name,dispatch_val,this__15380.hierarchy,this__15380.method_table,this__15380.prefer_table,this__15380.method_cache,this__15380.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15384))
{var target_fn__15385 = temp__3695__auto____15384;

return target_fn__15385;
} else
{return cljs.core.deref.call(null,this__15380.method_table).call(null,this__15380.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15387 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15387.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15387.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15387.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15387.method_cache,this__15387.method_table,this__15387.cached_hierarchy,this__15387.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15390 = this;
return cljs.core.deref.call(null,this__15390.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15391 = this;
return cljs.core.deref.call(null,this__15391.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15392 = this;
return cljs.core.do_dispatch.call(null,mf,this__15392.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15403__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15403 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15403__delegate.call(this, _, args);
};
G__15403.cljs$lang$maxFixedArity = 1;
G__15403.cljs$lang$applyTo = (function (arglist__15404){
var _ = cljs.core.first(arglist__15404);
var args = cljs.core.rest(arglist__15404);
return G__15403__delegate.call(this, _, args);
});
return G__15403;
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
