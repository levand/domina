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
var _invoke__7474 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7272 = this$;

if(cljs.core.truth_(and__3546__auto____7272))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7272;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{var or__3548__auto____7276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7276))
{return or__3548__auto____7276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7475 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{var or__3548__auto____7279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7279))
{return or__3548__auto____7279;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7476 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7280 = this$;

if(cljs.core.truth_(and__3546__auto____7280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7478 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7284 = this$;

if(cljs.core.truth_(and__3546__auto____7284))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7284;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{var or__3548__auto____7290 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7479 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = this$;

if(cljs.core.truth_(and__3546__auto____7293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7297 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{var or__3548__auto____7299 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7480 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = this$;

if(cljs.core.truth_(and__3546__auto____7302))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7302;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7306 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{var or__3548__auto____7309 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7481 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7312 = this$;

if(cljs.core.truth_(and__3546__auto____7312))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7312;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7483 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{var or__3548__auto____7332 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7484 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7336 = this$;

if(cljs.core.truth_(and__3546__auto____7336))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7336;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7341 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7485 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7349 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7486 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{var or__3548__auto____7358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7487 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7362 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
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
var _invoke__7488 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7367 = this$;

if(cljs.core.truth_(and__3546__auto____7367))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7367;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7371 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7372 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7489 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = this$;

if(cljs.core.truth_(and__3546__auto____7377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7380 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7380))
{return or__3548__auto____7380;
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
var _invoke__7490 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7386 = this$;

if(cljs.core.truth_(and__3546__auto____7386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7491 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7396 = this$;

if(cljs.core.truth_(and__3546__auto____7396))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7396;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7401 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7492 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7408 = this$;

if(cljs.core.truth_(and__3546__auto____7408))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7408;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7412 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{var or__3548__auto____7414 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7493 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7418 = this$;

if(cljs.core.truth_(and__3546__auto____7418))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7418;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7422 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{var or__3548__auto____7423 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7494 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7437 = this$;

if(cljs.core.truth_(and__3546__auto____7437))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7437;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7441 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7496 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7446 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{var or__3548__auto____7448 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7497 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7450 = this$;

if(cljs.core.truth_(and__3546__auto____7450))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7450;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{var or__3548__auto____7454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
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
return _invoke__7474.call(this,this$);
case  2 :
return _invoke__7475.call(this,this$,a);
case  3 :
return _invoke__7476.call(this,this$,a,b);
case  4 :
return _invoke__7478.call(this,this$,a,b,c);
case  5 :
return _invoke__7479.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7480.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7481.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7483.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7484.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7485.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7486.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7487.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7488.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7489.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7490.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7491.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7492.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7493.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7494.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7496.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7497.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7687 = coll;

if(cljs.core.truth_(and__3546__auto____7687))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7687;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7690 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
} else
{var or__3548__auto____7691 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7696 = coll;

if(cljs.core.truth_(and__3546__auto____7696))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7696;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7697 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{var or__3548__auto____7698 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = coll;

if(cljs.core.truth_(and__3546__auto____7699))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7699;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7701 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
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
var _nth__7712 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7705 = coll;

if(cljs.core.truth_(and__3546__auto____7705))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7705;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7706 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{var or__3548__auto____7707 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7713 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = coll;

if(cljs.core.truth_(and__3546__auto____7708))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7708;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7709 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{var or__3548__auto____7710 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
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
return _nth__7712.call(this,coll,n);
case  3 :
return _nth__7713.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7726 = coll;

if(cljs.core.truth_(and__3546__auto____7726))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7726;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7727 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7729 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7732 = coll;

if(cljs.core.truth_(and__3546__auto____7732))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7732;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7733 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{var or__3548__auto____7734 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
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
if(cljs.core.truth_((function (){var and__3546__auto____7742 = o;

if(cljs.core.truth_(and__3546__auto____7742))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7742;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7760 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
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
if(cljs.core.truth_((function (){var and__3546__auto____7779 = coll;

if(cljs.core.truth_(and__3546__auto____7779))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7779;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7785 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7793 = coll;

if(cljs.core.truth_(and__3546__auto____7793))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7793;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7795 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{var or__3548__auto____7796 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7796))
{return or__3548__auto____7796;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7805 = coll;

if(cljs.core.truth_(and__3546__auto____7805))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7805;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7837 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7871 = coll;

if(cljs.core.truth_(and__3546__auto____7871))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7871;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7875 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
} else
{var or__3548__auto____7878 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7881 = coll;

if(cljs.core.truth_(and__3546__auto____7881))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7881;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7886 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7916 = coll;

if(cljs.core.truth_(and__3546__auto____7916))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7916;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7919 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7919))
{return or__3548__auto____7919;
} else
{var or__3548__auto____7921 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7924 = o;

if(cljs.core.truth_(and__3546__auto____7924))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7924;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7926 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{var or__3548__auto____7927 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7936 = o;

if(cljs.core.truth_(and__3546__auto____7936))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7936;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7939 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = o;

if(cljs.core.truth_(and__3546__auto____7949))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7949;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7953 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7968 = o;

if(cljs.core.truth_(and__3546__auto____7968))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7968;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7971 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{var or__3548__auto____7973 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
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
var _reduce__7996 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7981 = coll;

if(cljs.core.truth_(and__3546__auto____7981))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7981;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
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
})().call(null,coll,f);
}
});
var _reduce__7997 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = coll;

if(cljs.core.truth_(and__3546__auto____7988))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7988;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7990 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{var or__3548__auto____7994 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
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
return _reduce__7996.call(this,coll,f);
case  3 :
return _reduce__7997.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = o;

if(cljs.core.truth_(and__3546__auto____8008))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8008;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8009 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8010 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = o;

if(cljs.core.truth_(and__3546__auto____8017))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8017;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8018 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8024 = o;

if(cljs.core.truth_(and__3546__auto____8024))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8024;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8027 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{var or__3548__auto____8029 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
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
if(cljs.core.truth_((function (){var and__3546__auto____8039 = o;

if(cljs.core.truth_(and__3546__auto____8039))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8039;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8042 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8042))
{return or__3548__auto____8042;
} else
{var or__3548__auto____8043 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8050 = d;

if(cljs.core.truth_(and__3546__auto____8050))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8050;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8052 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{var or__3548__auto____8053 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8062 = this$;

if(cljs.core.truth_(and__3546__auto____8062))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8062;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8066 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8071 = this$;

if(cljs.core.truth_(and__3546__auto____8071))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8071;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8074 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{var or__3548__auto____8075 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8077 = this$;

if(cljs.core.truth_(and__3546__auto____8077))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8077;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8081 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{var or__3548__auto____8082 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
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
var G__8118 = null;
var G__8118__8119 = (function (o,k){
return null;
});
var G__8118__8120 = (function (o,k,not_found){
return not_found;
});
G__8118 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8118__8119.call(this,o,k);
case  3 :
return G__8118__8120.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8118;
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
var G__8128 = null;
var G__8128__8129 = (function (_,f){
return f.call(null);
});
var G__8128__8130 = (function (_,f,start){
return start;
});
G__8128 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8128__8129.call(this,_,f);
case  3 :
return G__8128__8130.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8128;
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
var G__8141 = null;
var G__8141__8142 = (function (_,n){
return null;
});
var G__8141__8143 = (function (_,n,not_found){
return not_found;
});
G__8141 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8141__8142.call(this,_,n);
case  3 :
return G__8141__8143.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8141;
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
var ci_reduce__8180 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8167 = cljs.core._nth.call(null,cicoll,0);
var n__8169 = 1;

while(true){
if(cljs.core.truth_((n__8169 < cljs.core._count.call(null,cicoll))))
{{
var G__8186 = f.call(null,val__8167,cljs.core._nth.call(null,cicoll,n__8169));
var G__8187 = (n__8169 + 1);
val__8167 = G__8186;
n__8169 = G__8187;
continue;
}
} else
{return val__8167;
}
break;
}
}
});
var ci_reduce__8181 = (function (cicoll,f,val){
var val__8175 = val;
var n__8176 = 0;

while(true){
if(cljs.core.truth_((n__8176 < cljs.core._count.call(null,cicoll))))
{{
var G__8188 = f.call(null,val__8175,cljs.core._nth.call(null,cicoll,n__8176));
var G__8189 = (n__8176 + 1);
val__8175 = G__8188;
n__8176 = G__8189;
continue;
}
} else
{return val__8175;
}
break;
}
});
var ci_reduce__8182 = (function (cicoll,f,val,idx){
var val__8177 = val;
var n__8178 = idx;

while(true){
if(cljs.core.truth_((n__8178 < cljs.core._count.call(null,cicoll))))
{{
var G__8190 = f.call(null,val__8177,cljs.core._nth.call(null,cicoll,n__8178));
var G__8191 = (n__8178 + 1);
val__8177 = G__8190;
n__8178 = G__8191;
continue;
}
} else
{return val__8177;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8180.call(this,cicoll,f);
case  3 :
return ci_reduce__8181.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8182.call(this,cicoll,f,val,idx);
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
var this__8267 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8302 = null;
var G__8302__8303 = (function (_,f){
var this__8268 = this;
return cljs.core.ci_reduce.call(null,this__8268.a,f,(this__8268.a[this__8268.i]),(this__8268.i + 1));
});
var G__8302__8304 = (function (_,f,start){
var this__8271 = this;
return cljs.core.ci_reduce.call(null,this__8271.a,f,start,this__8271.i);
});
G__8302 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8302__8303.call(this,_,f);
case  3 :
return G__8302__8304.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8302;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8272 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8274 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8306 = null;
var G__8306__8307 = (function (coll,n){
var this__8275 = this;
var i__8277 = (n + this__8275.i);

if(cljs.core.truth_((i__8277 < this__8275.a.length)))
{return (this__8275.a[i__8277]);
} else
{return null;
}
});
var G__8306__8308 = (function (coll,n,not_found){
var this__8280 = this;
var i__8282 = (n + this__8280.i);

if(cljs.core.truth_((i__8282 < this__8280.a.length)))
{return (this__8280.a[i__8282]);
} else
{return not_found;
}
});
G__8306 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8306__8307.call(this,coll,n);
case  3 :
return G__8306__8308.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8306;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8284 = this;
return (this__8284.a.length - this__8284.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8286 = this;
return (this__8286.a[this__8286.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8288 = this;
if(cljs.core.truth_(((this__8288.i + 1) < this__8288.a.length)))
{return (new cljs.core.IndexedSeq(this__8288.a,(this__8288.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8291 = this;
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
var G__8310 = null;
var G__8310__8311 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8310__8312 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8310 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8310__8311.call(this,array,f);
case  3 :
return G__8310__8312.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8310;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8314 = null;
var G__8314__8315 = (function (array,k){
return (array[k]);
});
var G__8314__8316 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8314 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8314__8315.call(this,array,k);
case  3 :
return G__8314__8316.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8314;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8342 = null;
var G__8342__8343 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8342__8344 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8342 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8342__8343.call(this,array,n);
case  3 :
return G__8342__8344.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8342;
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
var temp__3698__auto____8346 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8346))
{var s__8347 = temp__3698__auto____8346;

return cljs.core._first.call(null,s__8347);
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
var G__8352 = cljs.core.next.call(null,s);
s = G__8352;
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
var s__8353 = cljs.core.seq.call(null,x);
var n__8354 = 0;

while(true){
if(cljs.core.truth_(s__8353))
{{
var G__8359 = cljs.core.next.call(null,s__8353);
var G__8360 = (n__8354 + 1);
s__8353 = G__8359;
n__8354 = G__8360;
continue;
}
} else
{return n__8354;
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
var conj__8371 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8372 = (function() { 
var G__8535__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8536 = conj.call(null,coll,x);
var G__8537 = cljs.core.first.call(null,xs);
var G__8538 = cljs.core.next.call(null,xs);
coll = G__8536;
x = G__8537;
xs = G__8538;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8535 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8535__delegate.call(this, coll, x, xs);
};
G__8535.cljs$lang$maxFixedArity = 2;
G__8535.cljs$lang$applyTo = (function (arglist__8544){
var coll = cljs.core.first(arglist__8544);
var x = cljs.core.first(cljs.core.next(arglist__8544));
var xs = cljs.core.rest(cljs.core.next(arglist__8544));
return G__8535__delegate.call(this, coll, x, xs);
});
return G__8535;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8371.call(this,coll,x);
default:
return conj__8372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8372.cljs$lang$applyTo;
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
var nth__8554 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8555 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8554.call(this,coll,n);
case  3 :
return nth__8555.call(this,coll,n,not_found);
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
var get__8557 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8558 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8557.call(this,o,k);
case  3 :
return get__8558.call(this,o,k,not_found);
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
var assoc__8561 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8562 = (function() { 
var G__8564__delegate = function (coll,k,v,kvs){
while(true){
var ret__8560 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8565 = ret__8560;
var G__8566 = cljs.core.first.call(null,kvs);
var G__8567 = cljs.core.second.call(null,kvs);
var G__8568 = cljs.core.nnext.call(null,kvs);
coll = G__8565;
k = G__8566;
v = G__8567;
kvs = G__8568;
continue;
}
} else
{return ret__8560;
}
break;
}
};
var G__8564 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8564__delegate.call(this, coll, k, v, kvs);
};
G__8564.cljs$lang$maxFixedArity = 3;
G__8564.cljs$lang$applyTo = (function (arglist__8572){
var coll = cljs.core.first(arglist__8572);
var k = cljs.core.first(cljs.core.next(arglist__8572));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8572)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8572)));
return G__8564__delegate.call(this, coll, k, v, kvs);
});
return G__8564;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8561.call(this,coll,k,v);
default:
return assoc__8562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8562.cljs$lang$applyTo;
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
var dissoc__8646 = (function (coll){
return coll;
});
var dissoc__8647 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8648 = (function() { 
var G__8650__delegate = function (coll,k,ks){
while(true){
var ret__8645 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8651 = ret__8645;
var G__8652 = cljs.core.first.call(null,ks);
var G__8653 = cljs.core.next.call(null,ks);
coll = G__8651;
k = G__8652;
ks = G__8653;
continue;
}
} else
{return ret__8645;
}
break;
}
};
var G__8650 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8650__delegate.call(this, coll, k, ks);
};
G__8650.cljs$lang$maxFixedArity = 2;
G__8650.cljs$lang$applyTo = (function (arglist__8657){
var coll = cljs.core.first(arglist__8657);
var k = cljs.core.first(cljs.core.next(arglist__8657));
var ks = cljs.core.rest(cljs.core.next(arglist__8657));
return G__8650__delegate.call(this, coll, k, ks);
});
return G__8650;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8646.call(this,coll);
case  2 :
return dissoc__8647.call(this,coll,k);
default:
return dissoc__8648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8648.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8671 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8672 = x__445__auto____8671;

if(cljs.core.truth_(and__3546__auto____8672))
{var and__3546__auto____8673 = x__445__auto____8671.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8673))
{return cljs.core.not.call(null,x__445__auto____8671.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8673;
}
} else
{return and__3546__auto____8672;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8671);
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
var disj__8705 = (function (coll){
return coll;
});
var disj__8706 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8707 = (function() { 
var G__8709__delegate = function (coll,k,ks){
while(true){
var ret__8703 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8710 = ret__8703;
var G__8711 = cljs.core.first.call(null,ks);
var G__8712 = cljs.core.next.call(null,ks);
coll = G__8710;
k = G__8711;
ks = G__8712;
continue;
}
} else
{return ret__8703;
}
break;
}
};
var G__8709 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8709__delegate.call(this, coll, k, ks);
};
G__8709.cljs$lang$maxFixedArity = 2;
G__8709.cljs$lang$applyTo = (function (arglist__8718){
var coll = cljs.core.first(arglist__8718);
var k = cljs.core.first(cljs.core.next(arglist__8718));
var ks = cljs.core.rest(cljs.core.next(arglist__8718));
return G__8709__delegate.call(this, coll, k, ks);
});
return G__8709;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8705.call(this,coll);
case  2 :
return disj__8706.call(this,coll,k);
default:
return disj__8707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8707.cljs$lang$applyTo;
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
{var x__445__auto____8782 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8784 = x__445__auto____8782;

if(cljs.core.truth_(and__3546__auto____8784))
{var and__3546__auto____8789 = x__445__auto____8782.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8789))
{return cljs.core.not.call(null,x__445__auto____8782.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8789;
}
} else
{return and__3546__auto____8784;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8782);
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
{var x__445__auto____8794 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8796 = x__445__auto____8794;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8798 = x__445__auto____8794.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8798))
{return cljs.core.not.call(null,x__445__auto____8794.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8798;
}
} else
{return and__3546__auto____8796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8794);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8805 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8807 = x__445__auto____8805;

if(cljs.core.truth_(and__3546__auto____8807))
{var and__3546__auto____8859 = x__445__auto____8805.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8859))
{return cljs.core.not.call(null,x__445__auto____8805.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8859;
}
} else
{return and__3546__auto____8807;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8805);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8868 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8869 = x__445__auto____8868;

if(cljs.core.truth_(and__3546__auto____8869))
{var and__3546__auto____8870 = x__445__auto____8868.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8870))
{return cljs.core.not.call(null,x__445__auto____8868.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8870;
}
} else
{return and__3546__auto____8869;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8868);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8878 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8879 = x__445__auto____8878;

if(cljs.core.truth_(and__3546__auto____8879))
{var and__3546__auto____8880 = x__445__auto____8878.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8880))
{return cljs.core.not.call(null,x__445__auto____8878.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8880;
}
} else
{return and__3546__auto____8879;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8878);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8889 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8890 = x__445__auto____8889;

if(cljs.core.truth_(and__3546__auto____8890))
{var and__3546__auto____8891 = x__445__auto____8889.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8891))
{return cljs.core.not.call(null,x__445__auto____8889.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8891;
}
} else
{return and__3546__auto____8890;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8889);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8898 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8899 = x__445__auto____8898;

if(cljs.core.truth_(and__3546__auto____8899))
{var and__3546__auto____8900 = x__445__auto____8898.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8900))
{return cljs.core.not.call(null,x__445__auto____8898.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8900;
}
} else
{return and__3546__auto____8899;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8898);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8908 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8908.push(key);
}));
return keys__8908;
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
{var x__445__auto____8923 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8924 = x__445__auto____8923;

if(cljs.core.truth_(and__3546__auto____8924))
{var and__3546__auto____8925 = x__445__auto____8923.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8925))
{return cljs.core.not.call(null,x__445__auto____8923.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8925;
}
} else
{return and__3546__auto____8924;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8923);
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
var and__3546__auto____8940 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8940))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8943 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8943))
{return or__3548__auto____8943;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8940;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8947 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8947))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8947;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8951 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8951))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8951;
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
var and__3546__auto____8963 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8963))
{return (n == n.toFixed());
} else
{return and__3546__auto____8963;
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
if(cljs.core.truth_((function (){var and__3546__auto____8979 = coll;

if(cljs.core.truth_(and__3546__auto____8979))
{var and__3546__auto____8980 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8980))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8980;
}
} else
{return and__3546__auto____8979;
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
var distinct_QMARK___9003 = (function (x){
return true;
});
var distinct_QMARK___9004 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9005 = (function() { 
var G__9008__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8992 = cljs.core.set([y,x]);
var xs__8993 = more;

while(true){
var x__8994 = cljs.core.first.call(null,xs__8993);
var etc__8995 = cljs.core.next.call(null,xs__8993);

if(cljs.core.truth_(xs__8993))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8992,x__8994)))
{return false;
} else
{{
var G__9066 = cljs.core.conj.call(null,s__8992,x__8994);
var G__9067 = etc__8995;
s__8992 = G__9066;
xs__8993 = G__9067;
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
var G__9008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9008__delegate.call(this, x, y, more);
};
G__9008.cljs$lang$maxFixedArity = 2;
G__9008.cljs$lang$applyTo = (function (arglist__9069){
var x = cljs.core.first(arglist__9069);
var y = cljs.core.first(cljs.core.next(arglist__9069));
var more = cljs.core.rest(cljs.core.next(arglist__9069));
return G__9008__delegate.call(this, x, y, more);
});
return G__9008;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9003.call(this,x);
case  2 :
return distinct_QMARK___9004.call(this,x,y);
default:
return distinct_QMARK___9005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9005.cljs$lang$applyTo;
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
var r__9077 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9077)))
{return r__9077;
} else
{if(cljs.core.truth_(r__9077))
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
var sort__9090 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9091 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9086 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9086,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9086);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9090.call(this,comp);
case  2 :
return sort__9091.call(this,comp,coll);
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
var sort_by__9102 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9103 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9102.call(this,keyfn,comp);
case  3 :
return sort_by__9103.call(this,keyfn,comp,coll);
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
var reduce__9112 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9114 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9112.call(this,f,val);
case  3 :
return reduce__9114.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9121 = (function (f,coll){
var temp__3695__auto____9117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9117))
{var s__9118 = temp__3695__auto____9117;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9118),cljs.core.next.call(null,s__9118));
} else
{return f.call(null);
}
});
var seq_reduce__9122 = (function (f,val,coll){
var val__9119 = val;
var coll__9120 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9120))
{{
var G__9124 = f.call(null,val__9119,cljs.core.first.call(null,coll__9120));
var G__9125 = cljs.core.next.call(null,coll__9120);
val__9119 = G__9124;
coll__9120 = G__9125;
continue;
}
} else
{return val__9119;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9121.call(this,f,val);
case  3 :
return seq_reduce__9122.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9129 = null;
var G__9129__9130 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9129__9131 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9129 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9129__9130.call(this,coll,f);
case  3 :
return G__9129__9131.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9129;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9141 = (function (){
return 0;
});
var _PLUS___9142 = (function (x){
return x;
});
var _PLUS___9143 = (function (x,y){
return (x + y);
});
var _PLUS___9144 = (function() { 
var G__9190__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
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
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9141.call(this);
case  1 :
return _PLUS___9142.call(this,x);
case  2 :
return _PLUS___9143.call(this,x,y);
default:
return _PLUS___9144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9144.cljs$lang$applyTo;
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
var ___9225 = (function (x){
return (- x);
});
var ___9226 = (function (x,y){
return (x - y);
});
var ___9227 = (function() { 
var G__9229__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9229 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9229__delegate.call(this, x, y, more);
};
G__9229.cljs$lang$maxFixedArity = 2;
G__9229.cljs$lang$applyTo = (function (arglist__9234){
var x = cljs.core.first(arglist__9234);
var y = cljs.core.first(cljs.core.next(arglist__9234));
var more = cljs.core.rest(cljs.core.next(arglist__9234));
return G__9229__delegate.call(this, x, y, more);
});
return G__9229;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9225.call(this,x);
case  2 :
return ___9226.call(this,x,y);
default:
return ___9227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9227.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9240 = (function (){
return 1;
});
var _STAR___9241 = (function (x){
return x;
});
var _STAR___9243 = (function (x,y){
return (x * y);
});
var _STAR___9245 = (function() { 
var G__9249__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9249 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9249__delegate.call(this, x, y, more);
};
G__9249.cljs$lang$maxFixedArity = 2;
G__9249.cljs$lang$applyTo = (function (arglist__9252){
var x = cljs.core.first(arglist__9252);
var y = cljs.core.first(cljs.core.next(arglist__9252));
var more = cljs.core.rest(cljs.core.next(arglist__9252));
return G__9249__delegate.call(this, x, y, more);
});
return G__9249;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9240.call(this);
case  1 :
return _STAR___9241.call(this,x);
case  2 :
return _STAR___9243.call(this,x,y);
default:
return _STAR___9245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9245.cljs$lang$applyTo;
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
var _SLASH___9253 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9254 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9255 = (function() { 
var G__9262__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9262 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9262__delegate.call(this, x, y, more);
};
G__9262.cljs$lang$maxFixedArity = 2;
G__9262.cljs$lang$applyTo = (function (arglist__9264){
var x = cljs.core.first(arglist__9264);
var y = cljs.core.first(cljs.core.next(arglist__9264));
var more = cljs.core.rest(cljs.core.next(arglist__9264));
return G__9262__delegate.call(this, x, y, more);
});
return G__9262;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9253.call(this,x);
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
var _LT___9276 = (function (x){
return true;
});
var _LT___9277 = (function (x,y){
return (x < y);
});
var _LT___9278 = (function() { 
var G__9281__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9282 = y;
var G__9283 = cljs.core.first.call(null,more);
var G__9284 = cljs.core.next.call(null,more);
x = G__9282;
y = G__9283;
more = G__9284;
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
var G__9281 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9281__delegate.call(this, x, y, more);
};
G__9281.cljs$lang$maxFixedArity = 2;
G__9281.cljs$lang$applyTo = (function (arglist__9290){
var x = cljs.core.first(arglist__9290);
var y = cljs.core.first(cljs.core.next(arglist__9290));
var more = cljs.core.rest(cljs.core.next(arglist__9290));
return G__9281__delegate.call(this, x, y, more);
});
return G__9281;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9276.call(this,x);
case  2 :
return _LT___9277.call(this,x,y);
default:
return _LT___9278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9278.cljs$lang$applyTo;
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
var _LT__EQ___9298 = (function (x){
return true;
});
var _LT__EQ___9299 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9300 = (function() { 
var G__9303__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9304 = y;
var G__9305 = cljs.core.first.call(null,more);
var G__9306 = cljs.core.next.call(null,more);
x = G__9304;
y = G__9305;
more = G__9306;
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
var G__9303 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9303__delegate.call(this, x, y, more);
};
G__9303.cljs$lang$maxFixedArity = 2;
G__9303.cljs$lang$applyTo = (function (arglist__9307){
var x = cljs.core.first(arglist__9307);
var y = cljs.core.first(cljs.core.next(arglist__9307));
var more = cljs.core.rest(cljs.core.next(arglist__9307));
return G__9303__delegate.call(this, x, y, more);
});
return G__9303;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9298.call(this,x);
case  2 :
return _LT__EQ___9299.call(this,x,y);
default:
return _LT__EQ___9300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9300.cljs$lang$applyTo;
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
var _GT___9316 = (function (x){
return true;
});
var _GT___9317 = (function (x,y){
return (x > y);
});
var _GT___9318 = (function() { 
var G__9321__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9322 = y;
var G__9323 = cljs.core.first.call(null,more);
var G__9324 = cljs.core.next.call(null,more);
x = G__9322;
y = G__9323;
more = G__9324;
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
var G__9321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9321__delegate.call(this, x, y, more);
};
G__9321.cljs$lang$maxFixedArity = 2;
G__9321.cljs$lang$applyTo = (function (arglist__9326){
var x = cljs.core.first(arglist__9326);
var y = cljs.core.first(cljs.core.next(arglist__9326));
var more = cljs.core.rest(cljs.core.next(arglist__9326));
return G__9321__delegate.call(this, x, y, more);
});
return G__9321;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9316.call(this,x);
case  2 :
return _GT___9317.call(this,x,y);
default:
return _GT___9318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9318.cljs$lang$applyTo;
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
var _GT__EQ___9328 = (function (x){
return true;
});
var _GT__EQ___9353 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9354 = (function() { 
var G__9356__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9360 = y;
var G__9361 = cljs.core.first.call(null,more);
var G__9362 = cljs.core.next.call(null,more);
x = G__9360;
y = G__9361;
more = G__9362;
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
var G__9356 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9356__delegate.call(this, x, y, more);
};
G__9356.cljs$lang$maxFixedArity = 2;
G__9356.cljs$lang$applyTo = (function (arglist__9363){
var x = cljs.core.first(arglist__9363);
var y = cljs.core.first(cljs.core.next(arglist__9363));
var more = cljs.core.rest(cljs.core.next(arglist__9363));
return G__9356__delegate.call(this, x, y, more);
});
return G__9356;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9328.call(this,x);
case  2 :
return _GT__EQ___9353.call(this,x,y);
default:
return _GT__EQ___9354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9354.cljs$lang$applyTo;
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
var max__9382 = (function (x){
return x;
});
var max__9383 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9384 = (function() { 
var G__9386__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9386 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9386__delegate.call(this, x, y, more);
};
G__9386.cljs$lang$maxFixedArity = 2;
G__9386.cljs$lang$applyTo = (function (arglist__9391){
var x = cljs.core.first(arglist__9391);
var y = cljs.core.first(cljs.core.next(arglist__9391));
var more = cljs.core.rest(cljs.core.next(arglist__9391));
return G__9386__delegate.call(this, x, y, more);
});
return G__9386;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9382.call(this,x);
case  2 :
return max__9383.call(this,x,y);
default:
return max__9384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9384.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9403 = (function (x){
return x;
});
var min__9404 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9405 = (function() { 
var G__9407__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9407 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9407__delegate.call(this, x, y, more);
};
G__9407.cljs$lang$maxFixedArity = 2;
G__9407.cljs$lang$applyTo = (function (arglist__9408){
var x = cljs.core.first(arglist__9408);
var y = cljs.core.first(cljs.core.next(arglist__9408));
var more = cljs.core.rest(cljs.core.next(arglist__9408));
return G__9407__delegate.call(this, x, y, more);
});
return G__9407;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9403.call(this,x);
case  2 :
return min__9404.call(this,x,y);
default:
return min__9405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9405.cljs$lang$applyTo;
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
var rem__9424 = (n % d);

return cljs.core.fix.call(null,((n - rem__9424) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9425 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9425));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9436 = (function (){
return Math.random.call(null);
});
var rand__9437 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9436.call(this);
case  1 :
return rand__9437.call(this,n);
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
var _EQ__EQ___9521 = (function (x){
return true;
});
var _EQ__EQ___9522 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9523 = (function() { 
var G__9525__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9526 = y;
var G__9527 = cljs.core.first.call(null,more);
var G__9528 = cljs.core.next.call(null,more);
x = G__9526;
y = G__9527;
more = G__9528;
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
var G__9525 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9525__delegate.call(this, x, y, more);
};
G__9525.cljs$lang$maxFixedArity = 2;
G__9525.cljs$lang$applyTo = (function (arglist__9529){
var x = cljs.core.first(arglist__9529);
var y = cljs.core.first(cljs.core.next(arglist__9529));
var more = cljs.core.rest(cljs.core.next(arglist__9529));
return G__9525__delegate.call(this, x, y, more);
});
return G__9525;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9521.call(this,x);
case  2 :
return _EQ__EQ___9522.call(this,x,y);
default:
return _EQ__EQ___9523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9523.cljs$lang$applyTo;
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
var n__9542 = n;
var xs__9544 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9545 = xs__9544;

if(cljs.core.truth_(and__3546__auto____9545))
{return (n__9542 > 0);
} else
{return and__3546__auto____9545;
}
})()))
{{
var G__9555 = (n__9542 - 1);
var G__9556 = cljs.core.next.call(null,xs__9544);
n__9542 = G__9555;
xs__9544 = G__9556;
continue;
}
} else
{return xs__9544;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9663 = null;
var G__9663__9664 = (function (coll,n){
var temp__3695__auto____9659 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9659))
{var xs__9660 = temp__3695__auto____9659;

return cljs.core.first.call(null,xs__9660);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9663__9665 = (function (coll,n,not_found){
var temp__3695__auto____9661 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9661))
{var xs__9662 = temp__3695__auto____9661;

return cljs.core.first.call(null,xs__9662);
} else
{return not_found;
}
});
G__9663 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9663__9664.call(this,coll,n);
case  3 :
return G__9663__9665.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9663;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9675 = (function (){
return "";
});
var str_STAR___9676 = (function (x){
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
var str_STAR___9677 = (function() { 
var G__9679__delegate = function (x,ys){
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
var G__9679 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9679__delegate.call(this, x, ys);
};
G__9679.cljs$lang$maxFixedArity = 1;
G__9679.cljs$lang$applyTo = (function (arglist__9682){
var x = cljs.core.first(arglist__9682);
var ys = cljs.core.rest(arglist__9682);
return G__9679__delegate.call(this, x, ys);
});
return G__9679;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9675.call(this);
case  1 :
return str_STAR___9676.call(this,x);
default:
return str_STAR___9677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9677.cljs$lang$applyTo;
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
var str__9689 = (function (){
return "";
});
var str__9690 = (function (x){
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
var str__9691 = (function() { 
var G__9693__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9693 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9693__delegate.call(this, x, ys);
};
G__9693.cljs$lang$maxFixedArity = 1;
G__9693.cljs$lang$applyTo = (function (arglist__9694){
var x = cljs.core.first(arglist__9694);
var ys = cljs.core.rest(arglist__9694);
return G__9693__delegate.call(this, x, ys);
});
return G__9693;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9689.call(this);
case  1 :
return str__9690.call(this,x);
default:
return str__9691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9691.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9698 = (function (s,start){
return s.substring(start);
});
var subs__9699 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9698.call(this,s,start);
case  3 :
return subs__9699.call(this,s,start,end);
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
var symbol__9704 = (function (name){
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
var symbol__9705 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9704.call(this,ns);
case  2 :
return symbol__9705.call(this,ns,name);
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
var keyword__9710 = (function (name){
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
var keyword__9711 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9710.call(this,ns);
case  2 :
return keyword__9711.call(this,ns,name);
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
var G__9730 = cljs.core.next.call(null,xs__9719);
var G__9731 = cljs.core.next.call(null,ys__9720);
xs__9719 = G__9730;
ys__9720 = G__9731;
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
return cljs.core.reduce.call(null,(function (p1__9732_SHARP_,p2__9733_SHARP_){
return cljs.core.hash_combine.call(null,p1__9732_SHARP_,cljs.core.hash.call(null,p2__9733_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9737__9738 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9737__9738))
{var G__9740__9742 = cljs.core.first.call(null,G__9737__9738);
var vec__9741__9743 = G__9740__9742;
var key_name__9744 = cljs.core.nth.call(null,vec__9741__9743,0,null);
var f__9745 = cljs.core.nth.call(null,vec__9741__9743,1,null);
var G__9737__9746 = G__9737__9738;

var G__9740__9749 = G__9740__9742;
var G__9737__9750 = G__9737__9746;

while(true){
var vec__9751__9752 = G__9740__9749;
var key_name__9753 = cljs.core.nth.call(null,vec__9751__9752,0,null);
var f__9754 = cljs.core.nth.call(null,vec__9751__9752,1,null);
var G__9737__9755 = G__9737__9750;

var str_name__9756 = cljs.core.name.call(null,key_name__9753);

obj[str_name__9756] = f__9754;
var temp__3698__auto____9757 = cljs.core.next.call(null,G__9737__9755);

if(cljs.core.truth_(temp__3698__auto____9757))
{var G__9737__9760 = temp__3698__auto____9757;

{
var G__9767 = cljs.core.first.call(null,G__9737__9760);
var G__9768 = G__9737__9760;
G__9740__9749 = G__9767;
G__9737__9750 = G__9768;
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
var this__9774 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9777 = this;
return (new cljs.core.List(this__9777.meta,o,coll,(this__9777.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9779 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9781 = this;
return this__9781.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9782 = this;
return this__9782.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9784 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9786 = this;
return this__9786.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9787 = this;
return this__9787.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9789 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9791 = this;
return (new cljs.core.List(meta,this__9791.first,this__9791.rest,this__9791.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9795 = this;
return this__9795.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9798 = this;
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
var this__9815 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9816 = this;
return (new cljs.core.List(this__9816.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9817 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9818 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9820 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9821 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9886 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9889 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9891 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9893 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9895 = this;
return this__9895.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9897 = this;
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
list.cljs$lang$applyTo = (function (arglist__9911){
var items = cljs.core.seq( arglist__9911 );;
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
var this__9912 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9913 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9916 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9918 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9918.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9921 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9923 = this;
return this__9923.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9924 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9924.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9924.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9927 = this;
return this__9927.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9929 = this;
return (new cljs.core.Cons(meta,this__9929.first,this__9929.rest));
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
var G__10033 = null;
var G__10033__10034 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10033__10035 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10033 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10033__10034.call(this,string,f);
case  3 :
return G__10033__10035.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10033;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10037 = null;
var G__10037__10040 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10037__10042 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10037 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10037__10040.call(this,string,k);
case  3 :
return G__10037__10042.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10037;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10047 = null;
var G__10047__10050 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10047__10052 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10047 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10047__10050.call(this,string,n);
case  3 :
return G__10047__10052.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10047;
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
var G__10055 = null;
var G__10055__10056 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10055__10057 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10055 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10055__10056.call(this,this$,coll);
case  3 :
return G__10055__10057.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10055;
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
var x__10062 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10062;
} else
{lazy_seq.x = x__10062.call(null);
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
var this__10070 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10071 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10072 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10073 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10073.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10075 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10081 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10083 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10086 = this;
return this__10086.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10088 = this;
return (new cljs.core.LazySeq(meta,this__10088.realized,this__10088.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10103 = cljs.core.array.call(null);

var s__10104 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10104)))
{ary__10103.push(cljs.core.first.call(null,s__10104));
{
var G__10110 = cljs.core.next.call(null,s__10104);
s__10104 = G__10110;
continue;
}
} else
{return ary__10103;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10112 = s;
var i__10113 = n;
var sum__10114 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10119 = (i__10113 > 0);

if(cljs.core.truth_(and__3546__auto____10119))
{return cljs.core.seq.call(null,s__10112);
} else
{return and__3546__auto____10119;
}
})()))
{{
var G__10122 = cljs.core.next.call(null,s__10112);
var G__10123 = (i__10113 - 1);
var G__10124 = (sum__10114 + 1);
s__10112 = G__10122;
i__10113 = G__10123;
sum__10114 = G__10124;
continue;
}
} else
{return sum__10114;
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
var concat__10139 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10140 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10141 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10133 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10133))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10133),concat.call(null,cljs.core.rest.call(null,s__10133),y));
} else
{return y;
}
})));
});
var concat__10142 = (function() { 
var G__10148__delegate = function (x,y,zs){
var cat__10136 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10134 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10134))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10134),cat.call(null,cljs.core.rest.call(null,xys__10134),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10136.call(null,concat.call(null,x,y),zs);
};
var G__10148 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10148__delegate.call(this, x, y, zs);
};
G__10148.cljs$lang$maxFixedArity = 2;
G__10148.cljs$lang$applyTo = (function (arglist__10151){
var x = cljs.core.first(arglist__10151);
var y = cljs.core.first(cljs.core.next(arglist__10151));
var zs = cljs.core.rest(cljs.core.next(arglist__10151));
return G__10148__delegate.call(this, x, y, zs);
});
return G__10148;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10139.call(this);
case  1 :
return concat__10140.call(this,x);
case  2 :
return concat__10141.call(this,x,y);
default:
return concat__10142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10142.cljs$lang$applyTo;
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
var list_STAR___10162 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10163 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10164 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10165 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10166 = (function() { 
var G__10173__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10173 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10173__delegate.call(this, a, b, c, d, more);
};
G__10173.cljs$lang$maxFixedArity = 4;
G__10173.cljs$lang$applyTo = (function (arglist__10175){
var a = cljs.core.first(arglist__10175);
var b = cljs.core.first(cljs.core.next(arglist__10175));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10175)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10175))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10175))));
return G__10173__delegate.call(this, a, b, c, d, more);
});
return G__10173;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10162.call(this,a);
case  2 :
return list_STAR___10163.call(this,a,b);
case  3 :
return list_STAR___10164.call(this,a,b,c);
case  4 :
return list_STAR___10165.call(this,a,b,c,d);
default:
return list_STAR___10166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10166.cljs$lang$applyTo;
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
var apply__10195 = (function (f,args){
var fixed_arity__10179 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10179 + 1)) <= fixed_arity__10179)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10196 = (function (f,x,args){
var arglist__10184 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10188 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10184,fixed_arity__10188) <= fixed_arity__10188)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10184));
} else
{return f.cljs$lang$applyTo(arglist__10184);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10184));
}
});
var apply__10197 = (function (f,x,y,args){
var arglist__10189 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10190 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10189,fixed_arity__10190) <= fixed_arity__10190)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10189));
} else
{return f.cljs$lang$applyTo(arglist__10189);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10189));
}
});
var apply__10198 = (function (f,x,y,z,args){
var arglist__10191 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10192 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10191,fixed_arity__10192) <= fixed_arity__10192)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10191));
} else
{return f.cljs$lang$applyTo(arglist__10191);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10191));
}
});
var apply__10199 = (function() { 
var G__10217__delegate = function (f,a,b,c,d,args){
var arglist__10193 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10194 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10193,fixed_arity__10194) <= fixed_arity__10194)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10193));
} else
{return f.cljs$lang$applyTo(arglist__10193);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10193));
}
};
var G__10217 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10217__delegate.call(this, f, a, b, c, d, args);
};
G__10217.cljs$lang$maxFixedArity = 5;
G__10217.cljs$lang$applyTo = (function (arglist__10219){
var f = cljs.core.first(arglist__10219);
var a = cljs.core.first(cljs.core.next(arglist__10219));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10219)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10219))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10219)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10219)))));
return G__10217__delegate.call(this, f, a, b, c, d, args);
});
return G__10217;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10195.call(this,f,a);
case  3 :
return apply__10196.call(this,f,a,b);
case  4 :
return apply__10197.call(this,f,a,b,c);
case  5 :
return apply__10198.call(this,f,a,b,c,d);
default:
return apply__10199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10199.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10228){
var obj = cljs.core.first(arglist__10228);
var f = cljs.core.first(cljs.core.next(arglist__10228));
var args = cljs.core.rest(cljs.core.next(arglist__10228));
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
var not_EQ___10235 = (function (x){
return false;
});
var not_EQ___10236 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10237 = (function() { 
var G__10239__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10239 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10239__delegate.call(this, x, y, more);
};
G__10239.cljs$lang$maxFixedArity = 2;
G__10239.cljs$lang$applyTo = (function (arglist__10242){
var x = cljs.core.first(arglist__10242);
var y = cljs.core.first(cljs.core.next(arglist__10242));
var more = cljs.core.rest(cljs.core.next(arglist__10242));
return G__10239__delegate.call(this, x, y, more);
});
return G__10239;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10235.call(this,x);
case  2 :
return not_EQ___10236.call(this,x,y);
default:
return not_EQ___10237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10237.cljs$lang$applyTo;
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
var G__10244 = pred;
var G__10245 = cljs.core.next.call(null,coll);
pred = G__10244;
coll = G__10245;
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
{var or__3548__auto____10308 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10308))
{return or__3548__auto____10308;
} else
{{
var G__10315 = pred;
var G__10317 = cljs.core.next.call(null,coll);
pred = G__10315;
coll = G__10317;
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
var G__10327 = null;
var G__10327__10329 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10327__10330 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10327__10331 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10327__10332 = (function() { 
var G__10336__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10336 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10336__delegate.call(this, x, y, zs);
};
G__10336.cljs$lang$maxFixedArity = 2;
G__10336.cljs$lang$applyTo = (function (arglist__10342){
var x = cljs.core.first(arglist__10342);
var y = cljs.core.first(cljs.core.next(arglist__10342));
var zs = cljs.core.rest(cljs.core.next(arglist__10342));
return G__10336__delegate.call(this, x, y, zs);
});
return G__10336;
})()
;
G__10327 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10327__10329.call(this);
case  1 :
return G__10327__10330.call(this,x);
case  2 :
return G__10327__10331.call(this,x,y);
default:
return G__10327__10332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10327.cljs$lang$maxFixedArity = 2;
G__10327.cljs$lang$applyTo = G__10327__10332.cljs$lang$applyTo;
return G__10327;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10348__delegate = function (args){
return x;
};
var G__10348 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10348__delegate.call(this, args);
};
G__10348.cljs$lang$maxFixedArity = 0;
G__10348.cljs$lang$applyTo = (function (arglist__10349){
var args = cljs.core.seq( arglist__10349 );;
return G__10348__delegate.call(this, args);
});
return G__10348;
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
var comp__10363 = (function (){
return cljs.core.identity;
});
var comp__10364 = (function (f){
return f;
});
var comp__10365 = (function (f,g){
return (function() {
var G__10369 = null;
var G__10369__10370 = (function (){
return f.call(null,g.call(null));
});
var G__10369__10371 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10369__10372 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10369__10373 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10369__10374 = (function() { 
var G__10376__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10376 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10376__delegate.call(this, x, y, z, args);
};
G__10376.cljs$lang$maxFixedArity = 3;
G__10376.cljs$lang$applyTo = (function (arglist__10384){
var x = cljs.core.first(arglist__10384);
var y = cljs.core.first(cljs.core.next(arglist__10384));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10384)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10384)));
return G__10376__delegate.call(this, x, y, z, args);
});
return G__10376;
})()
;
G__10369 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10369__10370.call(this);
case  1 :
return G__10369__10371.call(this,x);
case  2 :
return G__10369__10372.call(this,x,y);
case  3 :
return G__10369__10373.call(this,x,y,z);
default:
return G__10369__10374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10369.cljs$lang$maxFixedArity = 3;
G__10369.cljs$lang$applyTo = G__10369__10374.cljs$lang$applyTo;
return G__10369;
})()
});
var comp__10366 = (function (f,g,h){
return (function() {
var G__10390 = null;
var G__10390__10391 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10390__10392 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10390__10393 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10390__10394 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10390__10395 = (function() { 
var G__10412__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10412 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10412__delegate.call(this, x, y, z, args);
};
G__10412.cljs$lang$maxFixedArity = 3;
G__10412.cljs$lang$applyTo = (function (arglist__10415){
var x = cljs.core.first(arglist__10415);
var y = cljs.core.first(cljs.core.next(arglist__10415));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10415)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10415)));
return G__10412__delegate.call(this, x, y, z, args);
});
return G__10412;
})()
;
G__10390 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10390__10391.call(this);
case  1 :
return G__10390__10392.call(this,x);
case  2 :
return G__10390__10393.call(this,x,y);
case  3 :
return G__10390__10394.call(this,x,y,z);
default:
return G__10390__10395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10390.cljs$lang$maxFixedArity = 3;
G__10390.cljs$lang$applyTo = G__10390__10395.cljs$lang$applyTo;
return G__10390;
})()
});
var comp__10367 = (function() { 
var G__10418__delegate = function (f1,f2,f3,fs){
var fs__10360 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10419__delegate = function (args){
var ret__10361 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10360),args);
var fs__10362 = cljs.core.next.call(null,fs__10360);

while(true){
if(cljs.core.truth_(fs__10362))
{{
var G__10420 = cljs.core.first.call(null,fs__10362).call(null,ret__10361);
var G__10421 = cljs.core.next.call(null,fs__10362);
ret__10361 = G__10420;
fs__10362 = G__10421;
continue;
}
} else
{return ret__10361;
}
break;
}
};
var G__10419 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10419__delegate.call(this, args);
};
G__10419.cljs$lang$maxFixedArity = 0;
G__10419.cljs$lang$applyTo = (function (arglist__10423){
var args = cljs.core.seq( arglist__10423 );;
return G__10419__delegate.call(this, args);
});
return G__10419;
})()
;
};
var G__10418 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10418__delegate.call(this, f1, f2, f3, fs);
};
G__10418.cljs$lang$maxFixedArity = 3;
G__10418.cljs$lang$applyTo = (function (arglist__10426){
var f1 = cljs.core.first(arglist__10426);
var f2 = cljs.core.first(cljs.core.next(arglist__10426));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10426)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10426)));
return G__10418__delegate.call(this, f1, f2, f3, fs);
});
return G__10418;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10363.call(this);
case  1 :
return comp__10364.call(this,f1);
case  2 :
return comp__10365.call(this,f1,f2);
case  3 :
return comp__10366.call(this,f1,f2,f3);
default:
return comp__10367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10367.cljs$lang$applyTo;
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
var partial__10436 = (function (f,arg1){
return (function() { 
var G__10446__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10446 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10446__delegate.call(this, args);
};
G__10446.cljs$lang$maxFixedArity = 0;
G__10446.cljs$lang$applyTo = (function (arglist__10449){
var args = cljs.core.seq( arglist__10449 );;
return G__10446__delegate.call(this, args);
});
return G__10446;
})()
;
});
var partial__10437 = (function (f,arg1,arg2){
return (function() { 
var G__10456__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10456 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10456__delegate.call(this, args);
};
G__10456.cljs$lang$maxFixedArity = 0;
G__10456.cljs$lang$applyTo = (function (arglist__10459){
var args = cljs.core.seq( arglist__10459 );;
return G__10456__delegate.call(this, args);
});
return G__10456;
})()
;
});
var partial__10440 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10466__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10466 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10466__delegate.call(this, args);
};
G__10466.cljs$lang$maxFixedArity = 0;
G__10466.cljs$lang$applyTo = (function (arglist__10468){
var args = cljs.core.seq( arglist__10468 );;
return G__10466__delegate.call(this, args);
});
return G__10466;
})()
;
});
var partial__10441 = (function() { 
var G__10471__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10472__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10472 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10472__delegate.call(this, args);
};
G__10472.cljs$lang$maxFixedArity = 0;
G__10472.cljs$lang$applyTo = (function (arglist__10474){
var args = cljs.core.seq( arglist__10474 );;
return G__10472__delegate.call(this, args);
});
return G__10472;
})()
;
};
var G__10471 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10471__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10471.cljs$lang$maxFixedArity = 4;
G__10471.cljs$lang$applyTo = (function (arglist__10476){
var f = cljs.core.first(arglist__10476);
var arg1 = cljs.core.first(cljs.core.next(arglist__10476));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10476)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10476))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10476))));
return G__10471__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10471;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10436.call(this,f,arg1);
case  3 :
return partial__10437.call(this,f,arg1,arg2);
case  4 :
return partial__10440.call(this,f,arg1,arg2,arg3);
default:
return partial__10441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10441.cljs$lang$applyTo;
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
var fnil__10508 = (function (f,x){
return (function() {
var G__10512 = null;
var G__10512__10513 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10512__10514 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10512__10515 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10512__10516 = (function() { 
var G__10524__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10524 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10524__delegate.call(this, a, b, c, ds);
};
G__10524.cljs$lang$maxFixedArity = 3;
G__10524.cljs$lang$applyTo = (function (arglist__10525){
var a = cljs.core.first(arglist__10525);
var b = cljs.core.first(cljs.core.next(arglist__10525));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10525)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10525)));
return G__10524__delegate.call(this, a, b, c, ds);
});
return G__10524;
})()
;
G__10512 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10512__10513.call(this,a);
case  2 :
return G__10512__10514.call(this,a,b);
case  3 :
return G__10512__10515.call(this,a,b,c);
default:
return G__10512__10516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10512.cljs$lang$maxFixedArity = 3;
G__10512.cljs$lang$applyTo = G__10512__10516.cljs$lang$applyTo;
return G__10512;
})()
});
var fnil__10509 = (function (f,x,y){
return (function() {
var G__10526 = null;
var G__10526__10527 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10526__10528 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10526__10529 = (function() { 
var G__10537__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10537 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10537__delegate.call(this, a, b, c, ds);
};
G__10537.cljs$lang$maxFixedArity = 3;
G__10537.cljs$lang$applyTo = (function (arglist__10540){
var a = cljs.core.first(arglist__10540);
var b = cljs.core.first(cljs.core.next(arglist__10540));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10540)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10540)));
return G__10537__delegate.call(this, a, b, c, ds);
});
return G__10537;
})()
;
G__10526 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10526__10527.call(this,a,b);
case  3 :
return G__10526__10528.call(this,a,b,c);
default:
return G__10526__10529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10526.cljs$lang$maxFixedArity = 3;
G__10526.cljs$lang$applyTo = G__10526__10529.cljs$lang$applyTo;
return G__10526;
})()
});
var fnil__10510 = (function (f,x,y,z){
return (function() {
var G__10577 = null;
var G__10577__10578 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10577__10579 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10577__10580 = (function() { 
var G__10586__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10586 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10586__delegate.call(this, a, b, c, ds);
};
G__10586.cljs$lang$maxFixedArity = 3;
G__10586.cljs$lang$applyTo = (function (arglist__10594){
var a = cljs.core.first(arglist__10594);
var b = cljs.core.first(cljs.core.next(arglist__10594));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10594)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10594)));
return G__10586__delegate.call(this, a, b, c, ds);
});
return G__10586;
})()
;
G__10577 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10577__10578.call(this,a,b);
case  3 :
return G__10577__10579.call(this,a,b,c);
default:
return G__10577__10580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10577.cljs$lang$maxFixedArity = 3;
G__10577.cljs$lang$applyTo = G__10577__10580.cljs$lang$applyTo;
return G__10577;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10508.call(this,f,x);
case  3 :
return fnil__10509.call(this,f,x,y);
case  4 :
return fnil__10510.call(this,f,x,y,z);
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
var mapi__10606 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10603 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10603))
{var s__10605 = temp__3698__auto____10603;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10605)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10605)));
} else
{return null;
}
})));
});

return mapi__10606.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10617 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10617))
{var s__10618 = temp__3698__auto____10617;

var x__10619 = f.call(null,cljs.core.first.call(null,s__10618));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10619)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10618));
} else
{return cljs.core.cons.call(null,x__10619,keep.call(null,f,cljs.core.rest.call(null,s__10618)));
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
var keepi__10636 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10633 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10633))
{var s__10634 = temp__3698__auto____10633;

var x__10635 = f.call(null,idx,cljs.core.first.call(null,s__10634));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10635)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10634));
} else
{return cljs.core.cons.call(null,x__10635,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10634)));
}
} else
{return null;
}
})));
});

return keepi__10636.call(null,0,coll);
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
var every_pred__10805 = (function (p){
return (function() {
var ep1 = null;
var ep1__10811 = (function (){
return true;
});
var ep1__10812 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10813 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10649 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10649))
{return p.call(null,y);
} else
{return and__3546__auto____10649;
}
})());
});
var ep1__10814 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10652 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10652))
{var and__3546__auto____10653 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10653))
{return p.call(null,z);
} else
{return and__3546__auto____10653;
}
} else
{return and__3546__auto____10652;
}
})());
});
var ep1__10816 = (function() { 
var G__10833__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10654 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10654))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10654;
}
})());
};
var G__10833 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10833__delegate.call(this, x, y, z, args);
};
G__10833.cljs$lang$maxFixedArity = 3;
G__10833.cljs$lang$applyTo = (function (arglist__10837){
var x = cljs.core.first(arglist__10837);
var y = cljs.core.first(cljs.core.next(arglist__10837));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10837)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10837)));
return G__10833__delegate.call(this, x, y, z, args);
});
return G__10833;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10811.call(this);
case  1 :
return ep1__10812.call(this,x);
case  2 :
return ep1__10813.call(this,x,y);
case  3 :
return ep1__10814.call(this,x,y,z);
default:
return ep1__10816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10816.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10806 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10839 = (function (){
return true;
});
var ep2__10842 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10655 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10655))
{return p2.call(null,x);
} else
{return and__3546__auto____10655;
}
})());
});
var ep2__10843 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10656 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10656))
{var and__3546__auto____10657 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10657))
{var and__3546__auto____10658 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10658))
{return p2.call(null,y);
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
var ep2__10845 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10659 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10659))
{var and__3546__auto____10660 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10660))
{var and__3546__auto____10661 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10661))
{var and__3546__auto____10663 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10663))
{var and__3546__auto____10664 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10664))
{return p2.call(null,z);
} else
{return and__3546__auto____10664;
}
} else
{return and__3546__auto____10663;
}
} else
{return and__3546__auto____10661;
}
} else
{return and__3546__auto____10660;
}
} else
{return and__3546__auto____10659;
}
})());
});
var ep2__10846 = (function() { 
var G__10853__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10725 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10725))
{return cljs.core.every_QMARK_.call(null,(function (p1__10624_SHARP_){
var and__3546__auto____10742 = p1.call(null,p1__10624_SHARP_);

if(cljs.core.truth_(and__3546__auto____10742))
{return p2.call(null,p1__10624_SHARP_);
} else
{return and__3546__auto____10742;
}
}),args);
} else
{return and__3546__auto____10725;
}
})());
};
var G__10853 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10853__delegate.call(this, x, y, z, args);
};
G__10853.cljs$lang$maxFixedArity = 3;
G__10853.cljs$lang$applyTo = (function (arglist__10856){
var x = cljs.core.first(arglist__10856);
var y = cljs.core.first(cljs.core.next(arglist__10856));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10856)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10856)));
return G__10853__delegate.call(this, x, y, z, args);
});
return G__10853;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10839.call(this);
case  1 :
return ep2__10842.call(this,x);
case  2 :
return ep2__10843.call(this,x,y);
case  3 :
return ep2__10845.call(this,x,y,z);
default:
return ep2__10846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10846.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10807 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10861 = (function (){
return true;
});
var ep3__10862 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10745 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10745))
{var and__3546__auto____10746 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10746))
{return p3.call(null,x);
} else
{return and__3546__auto____10746;
}
} else
{return and__3546__auto____10745;
}
})());
});
var ep3__10863 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10747 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10747))
{var and__3546__auto____10754 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10754))
{var and__3546__auto____10760 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10760))
{var and__3546__auto____10761 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10761))
{var and__3546__auto____10763 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10763))
{return p3.call(null,y);
} else
{return and__3546__auto____10763;
}
} else
{return and__3546__auto____10761;
}
} else
{return and__3546__auto____10760;
}
} else
{return and__3546__auto____10754;
}
} else
{return and__3546__auto____10747;
}
})());
});
var ep3__10864 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10765 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10765))
{var and__3546__auto____10766 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10766))
{var and__3546__auto____10768 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10768))
{var and__3546__auto____10770 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10770))
{var and__3546__auto____10772 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10772))
{var and__3546__auto____10773 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10773))
{var and__3546__auto____10774 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10774))
{var and__3546__auto____10775 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10775))
{return p3.call(null,z);
} else
{return and__3546__auto____10775;
}
} else
{return and__3546__auto____10774;
}
} else
{return and__3546__auto____10773;
}
} else
{return and__3546__auto____10772;
}
} else
{return and__3546__auto____10770;
}
} else
{return and__3546__auto____10768;
}
} else
{return and__3546__auto____10766;
}
} else
{return and__3546__auto____10765;
}
})());
});
var ep3__10865 = (function() { 
var G__10980__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10777 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10777))
{return cljs.core.every_QMARK_.call(null,(function (p1__10625_SHARP_){
var and__3546__auto____10781 = p1.call(null,p1__10625_SHARP_);

if(cljs.core.truth_(and__3546__auto____10781))
{var and__3546__auto____10782 = p2.call(null,p1__10625_SHARP_);

if(cljs.core.truth_(and__3546__auto____10782))
{return p3.call(null,p1__10625_SHARP_);
} else
{return and__3546__auto____10782;
}
} else
{return and__3546__auto____10781;
}
}),args);
} else
{return and__3546__auto____10777;
}
})());
};
var G__10980 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10980__delegate.call(this, x, y, z, args);
};
G__10980.cljs$lang$maxFixedArity = 3;
G__10980.cljs$lang$applyTo = (function (arglist__10986){
var x = cljs.core.first(arglist__10986);
var y = cljs.core.first(cljs.core.next(arglist__10986));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10986)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10986)));
return G__10980__delegate.call(this, x, y, z, args);
});
return G__10980;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10861.call(this);
case  1 :
return ep3__10862.call(this,x);
case  2 :
return ep3__10863.call(this,x,y);
case  3 :
return ep3__10864.call(this,x,y,z);
default:
return ep3__10865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10865.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10808 = (function() { 
var G__10990__delegate = function (p1,p2,p3,ps){
var ps__10786 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10995 = (function (){
return true;
});
var epn__10996 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10629_SHARP_){
return p1__10629_SHARP_.call(null,x);
}),ps__10786);
});
var epn__10997 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10630_SHARP_){
var and__3546__auto____10791 = p1__10630_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10791))
{return p1__10630_SHARP_.call(null,y);
} else
{return and__3546__auto____10791;
}
}),ps__10786);
});
var epn__10998 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10631_SHARP_){
var and__3546__auto____10794 = p1__10631_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10794))
{var and__3546__auto____10796 = p1__10631_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10796))
{return p1__10631_SHARP_.call(null,z);
} else
{return and__3546__auto____10796;
}
} else
{return and__3546__auto____10794;
}
}),ps__10786);
});
var epn__10999 = (function() { 
var G__11060__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10798 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10798))
{return cljs.core.every_QMARK_.call(null,(function (p1__10632_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10632_SHARP_,args);
}),ps__10786);
} else
{return and__3546__auto____10798;
}
})());
};
var G__11060 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11060__delegate.call(this, x, y, z, args);
};
G__11060.cljs$lang$maxFixedArity = 3;
G__11060.cljs$lang$applyTo = (function (arglist__11070){
var x = cljs.core.first(arglist__11070);
var y = cljs.core.first(cljs.core.next(arglist__11070));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11070)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11070)));
return G__11060__delegate.call(this, x, y, z, args);
});
return G__11060;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10995.call(this);
case  1 :
return epn__10996.call(this,x);
case  2 :
return epn__10997.call(this,x,y);
case  3 :
return epn__10998.call(this,x,y,z);
default:
return epn__10999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10999.cljs$lang$applyTo;
return epn;
})()
};
var G__10990 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10990__delegate.call(this, p1, p2, p3, ps);
};
G__10990.cljs$lang$maxFixedArity = 3;
G__10990.cljs$lang$applyTo = (function (arglist__11074){
var p1 = cljs.core.first(arglist__11074);
var p2 = cljs.core.first(cljs.core.next(arglist__11074));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11074)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11074)));
return G__10990__delegate.call(this, p1, p2, p3, ps);
});
return G__10990;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10805.call(this,p1);
case  2 :
return every_pred__10806.call(this,p1,p2);
case  3 :
return every_pred__10807.call(this,p1,p2,p3);
default:
return every_pred__10808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10808.cljs$lang$applyTo;
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
var some_fn__11323 = (function (p){
return (function() {
var sp1 = null;
var sp1__11385 = (function (){
return null;
});
var sp1__11386 = (function (x){
return p.call(null,x);
});
var sp1__11387 = (function (x,y){
var or__3548__auto____11213 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11213))
{return or__3548__auto____11213;
} else
{return p.call(null,y);
}
});
var sp1__11388 = (function (x,y,z){
var or__3548__auto____11215 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11215))
{return or__3548__auto____11215;
} else
{var or__3548__auto____11217 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11217))
{return or__3548__auto____11217;
} else
{return p.call(null,z);
}
}
});
var sp1__11389 = (function() { 
var G__11399__delegate = function (x,y,z,args){
var or__3548__auto____11220 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11220))
{return or__3548__auto____11220;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11399 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11399__delegate.call(this, x, y, z, args);
};
G__11399.cljs$lang$maxFixedArity = 3;
G__11399.cljs$lang$applyTo = (function (arglist__11408){
var x = cljs.core.first(arglist__11408);
var y = cljs.core.first(cljs.core.next(arglist__11408));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11408)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11408)));
return G__11399__delegate.call(this, x, y, z, args);
});
return G__11399;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11385.call(this);
case  1 :
return sp1__11386.call(this,x);
case  2 :
return sp1__11387.call(this,x,y);
case  3 :
return sp1__11388.call(this,x,y,z);
default:
return sp1__11389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11389.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11324 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11412 = (function (){
return null;
});
var sp2__11413 = (function (x){
var or__3548__auto____11235 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11235))
{return or__3548__auto____11235;
} else
{return p2.call(null,x);
}
});
var sp2__11415 = (function (x,y){
var or__3548__auto____11238 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11238))
{return or__3548__auto____11238;
} else
{var or__3548__auto____11239 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11239))
{return or__3548__auto____11239;
} else
{var or__3548__auto____11240 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11240))
{return or__3548__auto____11240;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11417 = (function (x,y,z){
var or__3548__auto____11243 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11243))
{return or__3548__auto____11243;
} else
{var or__3548__auto____11247 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11247))
{return or__3548__auto____11247;
} else
{var or__3548__auto____11248 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11248))
{return or__3548__auto____11248;
} else
{var or__3548__auto____11249 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{var or__3548__auto____11251 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11251))
{return or__3548__auto____11251;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11418 = (function() { 
var G__11430__delegate = function (x,y,z,args){
var or__3548__auto____11254 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11254))
{return or__3548__auto____11254;
} else
{return cljs.core.some.call(null,(function (p1__10642_SHARP_){
var or__3548__auto____11255 = p1.call(null,p1__10642_SHARP_);

if(cljs.core.truth_(or__3548__auto____11255))
{return or__3548__auto____11255;
} else
{return p2.call(null,p1__10642_SHARP_);
}
}),args);
}
};
var G__11430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11430__delegate.call(this, x, y, z, args);
};
G__11430.cljs$lang$maxFixedArity = 3;
G__11430.cljs$lang$applyTo = (function (arglist__11432){
var x = cljs.core.first(arglist__11432);
var y = cljs.core.first(cljs.core.next(arglist__11432));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11432)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11432)));
return G__11430__delegate.call(this, x, y, z, args);
});
return G__11430;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11412.call(this);
case  1 :
return sp2__11413.call(this,x);
case  2 :
return sp2__11415.call(this,x,y);
case  3 :
return sp2__11417.call(this,x,y,z);
default:
return sp2__11418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11418.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11325 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11438 = (function (){
return null;
});
var sp3__11439 = (function (x){
var or__3548__auto____11257 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11257))
{return or__3548__auto____11257;
} else
{var or__3548__auto____11258 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11258))
{return or__3548__auto____11258;
} else
{return p3.call(null,x);
}
}
});
var sp3__11440 = (function (x,y){
var or__3548__auto____11260 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11260))
{return or__3548__auto____11260;
} else
{var or__3548__auto____11261 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11261))
{return or__3548__auto____11261;
} else
{var or__3548__auto____11263 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{var or__3548__auto____11265 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11265))
{return or__3548__auto____11265;
} else
{var or__3548__auto____11266 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11266))
{return or__3548__auto____11266;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11441 = (function (x,y,z){
var or__3548__auto____11269 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11269))
{return or__3548__auto____11269;
} else
{var or__3548__auto____11271 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11271))
{return or__3548__auto____11271;
} else
{var or__3548__auto____11272 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{var or__3548__auto____11273 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11273))
{return or__3548__auto____11273;
} else
{var or__3548__auto____11274 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{var or__3548__auto____11281 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{var or__3548__auto____11282 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{var or__3548__auto____11289 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11289))
{return or__3548__auto____11289;
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
var sp3__11442 = (function() { 
var G__11470__delegate = function (x,y,z,args){
var or__3548__auto____11292 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{return cljs.core.some.call(null,(function (p1__10643_SHARP_){
var or__3548__auto____11294 = p1.call(null,p1__10643_SHARP_);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{var or__3548__auto____11295 = p2.call(null,p1__10643_SHARP_);

if(cljs.core.truth_(or__3548__auto____11295))
{return or__3548__auto____11295;
} else
{return p3.call(null,p1__10643_SHARP_);
}
}
}),args);
}
};
var G__11470 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11470__delegate.call(this, x, y, z, args);
};
G__11470.cljs$lang$maxFixedArity = 3;
G__11470.cljs$lang$applyTo = (function (arglist__11477){
var x = cljs.core.first(arglist__11477);
var y = cljs.core.first(cljs.core.next(arglist__11477));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11477)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11477)));
return G__11470__delegate.call(this, x, y, z, args);
});
return G__11470;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11438.call(this);
case  1 :
return sp3__11439.call(this,x);
case  2 :
return sp3__11440.call(this,x,y);
case  3 :
return sp3__11441.call(this,x,y,z);
default:
return sp3__11442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11442.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11326 = (function() { 
var G__11483__delegate = function (p1,p2,p3,ps){
var ps__11297 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11485 = (function (){
return null;
});
var spn__11486 = (function (x){
return cljs.core.some.call(null,(function (p1__10644_SHARP_){
return p1__10644_SHARP_.call(null,x);
}),ps__11297);
});
var spn__11487 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10645_SHARP_){
var or__3548__auto____11310 = p1__10645_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{return p1__10645_SHARP_.call(null,y);
}
}),ps__11297);
});
var spn__11489 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10646_SHARP_){
var or__3548__auto____11317 = p1__10646_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{var or__3548__auto____11318 = p1__10646_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{return p1__10646_SHARP_.call(null,z);
}
}
}),ps__11297);
});
var spn__11490 = (function() { 
var G__11500__delegate = function (x,y,z,args){
var or__3548__auto____11319 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11319))
{return or__3548__auto____11319;
} else
{return cljs.core.some.call(null,(function (p1__10647_SHARP_){
return cljs.core.some.call(null,p1__10647_SHARP_,args);
}),ps__11297);
}
};
var G__11500 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11500__delegate.call(this, x, y, z, args);
};
G__11500.cljs$lang$maxFixedArity = 3;
G__11500.cljs$lang$applyTo = (function (arglist__11505){
var x = cljs.core.first(arglist__11505);
var y = cljs.core.first(cljs.core.next(arglist__11505));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11505)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11505)));
return G__11500__delegate.call(this, x, y, z, args);
});
return G__11500;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11485.call(this);
case  1 :
return spn__11486.call(this,x);
case  2 :
return spn__11487.call(this,x,y);
case  3 :
return spn__11489.call(this,x,y,z);
default:
return spn__11490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11490.cljs$lang$applyTo;
return spn;
})()
};
var G__11483 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11483__delegate.call(this, p1, p2, p3, ps);
};
G__11483.cljs$lang$maxFixedArity = 3;
G__11483.cljs$lang$applyTo = (function (arglist__11508){
var p1 = cljs.core.first(arglist__11508);
var p2 = cljs.core.first(cljs.core.next(arglist__11508));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11508)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11508)));
return G__11483__delegate.call(this, p1, p2, p3, ps);
});
return G__11483;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11323.call(this,p1);
case  2 :
return some_fn__11324.call(this,p1,p2);
case  3 :
return some_fn__11325.call(this,p1,p2,p3);
default:
return some_fn__11326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11326.cljs$lang$applyTo;
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
var map__11719 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11681))
{var s__11684 = temp__3698__auto____11681;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11684)),map.call(null,f,cljs.core.rest.call(null,s__11684)));
} else
{return null;
}
})));
});
var map__11720 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11692 = cljs.core.seq.call(null,c1);
var s2__11693 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11695 = s1__11692;

if(cljs.core.truth_(and__3546__auto____11695))
{return s2__11693;
} else
{return and__3546__auto____11695;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11692),cljs.core.first.call(null,s2__11693)),map.call(null,f,cljs.core.rest.call(null,s1__11692),cljs.core.rest.call(null,s2__11693)));
} else
{return null;
}
})));
});
var map__11721 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11698 = cljs.core.seq.call(null,c1);
var s2__11699 = cljs.core.seq.call(null,c2);
var s3__11700 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11701 = s1__11698;

if(cljs.core.truth_(and__3546__auto____11701))
{var and__3546__auto____11703 = s2__11699;

if(cljs.core.truth_(and__3546__auto____11703))
{return s3__11700;
} else
{return and__3546__auto____11703;
}
} else
{return and__3546__auto____11701;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11698),cljs.core.first.call(null,s2__11699),cljs.core.first.call(null,s3__11700)),map.call(null,f,cljs.core.rest.call(null,s1__11698),cljs.core.rest.call(null,s2__11699),cljs.core.rest.call(null,s3__11700)));
} else
{return null;
}
})));
});
var map__11722 = (function() { 
var G__11744__delegate = function (f,c1,c2,c3,colls){
var step__11714 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11708 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11708)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11708),step.call(null,map.call(null,cljs.core.rest,ss__11708)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11083_SHARP_){
return cljs.core.apply.call(null,f,p1__11083_SHARP_);
}),step__11714.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11744 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11744__delegate.call(this, f, c1, c2, c3, colls);
};
G__11744.cljs$lang$maxFixedArity = 4;
G__11744.cljs$lang$applyTo = (function (arglist__11747){
var f = cljs.core.first(arglist__11747);
var c1 = cljs.core.first(cljs.core.next(arglist__11747));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11747)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11747))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11747))));
return G__11744__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11744;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11719.call(this,f,c1);
case  3 :
return map__11720.call(this,f,c1,c2);
case  4 :
return map__11721.call(this,f,c1,c2,c3);
default:
return map__11722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11722.cljs$lang$applyTo;
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
{var temp__3698__auto____11754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11754))
{var s__11757 = temp__3698__auto____11754;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11757),take.call(null,(n - 1),cljs.core.rest.call(null,s__11757)));
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
var step__11769 = (function (n,coll){
while(true){
var s__11764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11766 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11766))
{return s__11764;
} else
{return and__3546__auto____11766;
}
})()))
{{
var G__11777 = (n - 1);
var G__11779 = cljs.core.rest.call(null,s__11764);
n = G__11777;
coll = G__11779;
continue;
}
} else
{return s__11764;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11769.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11781 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11782 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11781.call(this,n);
case  2 :
return drop_last__11782.call(this,n,s);
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
var s__11788 = cljs.core.seq.call(null,coll);
var lead__11789 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11789))
{{
var G__11793 = cljs.core.next.call(null,s__11788);
var G__11794 = cljs.core.next.call(null,lead__11789);
s__11788 = G__11793;
lead__11789 = G__11794;
continue;
}
} else
{return s__11788;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11804 = (function (pred,coll){
while(true){
var s__11801 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11802 = s__11801;

if(cljs.core.truth_(and__3546__auto____11802))
{return pred.call(null,cljs.core.first.call(null,s__11801));
} else
{return and__3546__auto____11802;
}
})()))
{{
var G__11812 = pred;
var G__11813 = cljs.core.rest.call(null,s__11801);
pred = G__11812;
coll = G__11813;
continue;
}
} else
{return s__11801;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11804.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11824 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11824))
{var s__11827 = temp__3698__auto____11824;

return cljs.core.concat.call(null,s__11827,cycle.call(null,s__11827));
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
var repeat__11857 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11858 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11857.call(this,n);
case  2 :
return repeat__11858.call(this,n,x);
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
var repeatedly__11880 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11881 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11880.call(this,n);
case  2 :
return repeatedly__11881.call(this,n,f);
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
var interleave__11921 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11897 = cljs.core.seq.call(null,c1);
var s2__11902 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11904 = s1__11897;

if(cljs.core.truth_(and__3546__auto____11904))
{return s2__11902;
} else
{return and__3546__auto____11904;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11897),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11902),interleave.call(null,cljs.core.rest.call(null,s1__11897),cljs.core.rest.call(null,s2__11902))));
} else
{return null;
}
})));
});
var interleave__11922 = (function() { 
var G__11937__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11914 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11914)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11914),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11914)));
} else
{return null;
}
})));
};
var G__11937 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11937__delegate.call(this, c1, c2, colls);
};
G__11937.cljs$lang$maxFixedArity = 2;
G__11937.cljs$lang$applyTo = (function (arglist__11950){
var c1 = cljs.core.first(arglist__11950);
var c2 = cljs.core.first(cljs.core.next(arglist__11950));
var colls = cljs.core.rest(cljs.core.next(arglist__11950));
return G__11937__delegate.call(this, c1, c2, colls);
});
return G__11937;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11921.call(this,c1,c2);
default:
return interleave__11922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11922.cljs$lang$applyTo;
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
var cat__11961 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11958 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11958))
{var coll__11959 = temp__3695__auto____11958;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11959),cat.call(null,cljs.core.rest.call(null,coll__11959),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11961.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11971 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11972 = (function() { 
var G__11975__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11975 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11975__delegate.call(this, f, coll, colls);
};
G__11975.cljs$lang$maxFixedArity = 2;
G__11975.cljs$lang$applyTo = (function (arglist__11978){
var f = cljs.core.first(arglist__11978);
var coll = cljs.core.first(cljs.core.next(arglist__11978));
var colls = cljs.core.rest(cljs.core.next(arglist__11978));
return G__11975__delegate.call(this, f, coll, colls);
});
return G__11975;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11971.call(this,f,coll);
default:
return mapcat__11972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11972.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11987 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11987))
{var s__11988 = temp__3698__auto____11987;

var f__11990 = cljs.core.first.call(null,s__11988);
var r__11991 = cljs.core.rest.call(null,s__11988);

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
var walk__12008 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12008.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12004_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12004_SHARP_));
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
var partition__12074 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12075 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12028 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12028))
{var s__12029 = temp__3698__auto____12028;

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
var partition__12076 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12067))
{var s__12068 = temp__3698__auto____12067;

var p__12069 = cljs.core.take.call(null,n,s__12068);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12069))))
{return cljs.core.cons.call(null,p__12069,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12068)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12069,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12074.call(this,n,step);
case  3 :
return partition__12075.call(this,n,step,pad);
case  4 :
return partition__12076.call(this,n,step,pad,coll);
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
var sentinel__12092 = cljs.core.lookup_sentinel;
var m__12093 = m;
var ks__12094 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12094))
{var m__12095 = cljs.core.get.call(null,m__12093,cljs.core.first.call(null,ks__12094),sentinel__12092);

if(cljs.core.truth_((sentinel__12092 === m__12095)))
{return not_found;
} else
{{
var G__12108 = sentinel__12092;
var G__12109 = m__12095;
var G__12110 = cljs.core.next.call(null,ks__12094);
sentinel__12092 = G__12108;
m__12093 = G__12109;
ks__12094 = G__12110;
continue;
}
}
} else
{return m__12093;
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
cljs.core.assoc_in = (function assoc_in(m,p__12115,v){
var vec__12120__12121 = p__12115;
var k__12122 = cljs.core.nth.call(null,vec__12120__12121,0,null);
var ks__12123 = cljs.core.nthnext.call(null,vec__12120__12121,1);

if(cljs.core.truth_(ks__12123))
{return cljs.core.assoc.call(null,m,k__12122,assoc_in.call(null,cljs.core.get.call(null,m,k__12122),ks__12123,v));
} else
{return cljs.core.assoc.call(null,m,k__12122,v);
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
var update_in__delegate = function (m,p__12129,f,args){
var vec__12131__12132 = p__12129;
var k__12134 = cljs.core.nth.call(null,vec__12131__12132,0,null);
var ks__12136 = cljs.core.nthnext.call(null,vec__12131__12132,1);

if(cljs.core.truth_(ks__12136))
{return cljs.core.assoc.call(null,m,k__12134,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12134),ks__12136,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12134,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12134),args));
}
};
var update_in = function (m,p__12129,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12129, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12139){
var m = cljs.core.first(arglist__12139);
var p__12129 = cljs.core.first(cljs.core.next(arglist__12139));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12139)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12139)));
return update_in__delegate.call(this, m, p__12129, f, args);
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
var this__12141 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12291 = null;
var G__12291__12292 = (function (coll,k){
var this__12144 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12291__12293 = (function (coll,k,not_found){
var this__12146 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12291 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12291__12292.call(this,coll,k);
case  3 :
return G__12291__12293.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12291;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12147 = this;
var new_array__12148 = cljs.core.aclone.call(null,this__12147.array);

(new_array__12148[k] = v);
return (new cljs.core.Vector(this__12147.meta,new_array__12148));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12299 = null;
var G__12299__12300 = (function (coll,k){
var this__12226 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12299__12302 = (function (coll,k,not_found){
var this__12229 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12299 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12299__12300.call(this,coll,k);
case  3 :
return G__12299__12302.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12299;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12232 = this;
var new_array__12234 = cljs.core.aclone.call(null,this__12232.array);

new_array__12234.push(o);
return (new cljs.core.Vector(this__12232.meta,new_array__12234));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12310 = null;
var G__12310__12311 = (function (v,f){
var this__12238 = this;
return cljs.core.ci_reduce.call(null,this__12238.array,f);
});
var G__12310__12312 = (function (v,f,start){
var this__12241 = this;
return cljs.core.ci_reduce.call(null,this__12241.array,f,start);
});
G__12310 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12310__12311.call(this,v,f);
case  3 :
return G__12310__12312.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12310;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12243 = this;
if(cljs.core.truth_((this__12243.array.length > 0)))
{var vector_seq__12250 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12243.array.length)))
{return cljs.core.cons.call(null,(this__12243.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12250.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12251 = this;
return this__12251.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12260 = this;
var count__12261 = this__12260.array.length;

if(cljs.core.truth_((count__12261 > 0)))
{return (this__12260.array[(count__12261 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12262 = this;
if(cljs.core.truth_((this__12262.array.length > 0)))
{var new_array__12263 = cljs.core.aclone.call(null,this__12262.array);

new_array__12263.pop();
return (new cljs.core.Vector(this__12262.meta,new_array__12263));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12275 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12276 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12277 = this;
return (new cljs.core.Vector(meta,this__12277.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12278 = this;
return this__12278.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12321 = null;
var G__12321__12322 = (function (coll,n){
var this__12283 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12284 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12284))
{return (n < this__12283.array.length);
} else
{return and__3546__auto____12284;
}
})()))
{return (this__12283.array[n]);
} else
{return null;
}
});
var G__12321__12323 = (function (coll,n,not_found){
var this__12285 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12286 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12286))
{return (n < this__12285.array.length);
} else
{return and__3546__auto____12286;
}
})()))
{return (this__12285.array[n]);
} else
{return not_found;
}
});
G__12321 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12321__12322.call(this,coll,n);
case  3 :
return G__12321__12323.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12321;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12288 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12288.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12443){
var args = cljs.core.seq( arglist__12443 );;
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
var G__12491 = null;
var G__12491__12493 = (function (coll,k){
var this__12457 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12491__12494 = (function (coll,k,not_found){
var this__12458 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12491__12493.call(this,coll,k);
case  3 :
return G__12491__12494.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12491;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12463 = this;
var v_pos__12464 = (this__12463.start + key);

return (new cljs.core.Subvec(this__12463.meta,cljs.core._assoc.call(null,this__12463.v,v_pos__12464,val),this__12463.start,((this__12463.end > (v_pos__12464 + 1)) ? this__12463.end : (v_pos__12464 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12498 = null;
var G__12498__12499 = (function (coll,k){
var this__12465 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12498__12500 = (function (coll,k,not_found){
var this__12466 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12498 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12498__12499.call(this,coll,k);
case  3 :
return G__12498__12500.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12498;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12467 = this;
return (new cljs.core.Subvec(this__12467.meta,cljs.core._assoc_n.call(null,this__12467.v,this__12467.end,o),this__12467.start,(this__12467.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12508 = null;
var G__12508__12509 = (function (coll,f){
var this__12472 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12508__12510 = (function (coll,f,start){
var this__12473 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12508 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12508__12509.call(this,coll,f);
case  3 :
return G__12508__12510.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12508;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12474 = this;
var subvec_seq__12475 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12474.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12474.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12475.call(null,this__12474.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12476 = this;
return (this__12476.end - this__12476.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12477 = this;
return cljs.core._nth.call(null,this__12477.v,(this__12477.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12478 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12478.start,this__12478.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12478.meta,this__12478.v,this__12478.start,(this__12478.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12479 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12480 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12481 = this;
return (new cljs.core.Subvec(meta,this__12481.v,this__12481.start,this__12481.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12486 = this;
return this__12486.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12578 = null;
var G__12578__12580 = (function (coll,n){
var this__12487 = this;
return cljs.core._nth.call(null,this__12487.v,(this__12487.start + n));
});
var G__12578__12581 = (function (coll,n,not_found){
var this__12488 = this;
return cljs.core._nth.call(null,this__12488.v,(this__12488.start + n),not_found);
});
G__12578 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12578__12580.call(this,coll,n);
case  3 :
return G__12578__12581.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12578;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12489 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12489.meta);
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
var subvec__12591 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12593 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12591.call(this,v,start);
case  3 :
return subvec__12593.call(this,v,start,end);
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
var this__12610 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12611 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12613 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12613.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12614 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12619 = this;
return cljs.core._first.call(null,this__12619.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12620 = this;
var temp__3695__auto____12621 = cljs.core.next.call(null,this__12620.front);

if(cljs.core.truth_(temp__3695__auto____12621))
{var f1__12622 = temp__3695__auto____12621;

return (new cljs.core.PersistentQueueSeq(this__12620.meta,f1__12622,this__12620.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12620.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12620.meta,this__12620.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12625 = this;
return this__12625.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12628 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12628.front,this__12628.rear));
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
var this__12656 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12658 = this;
if(cljs.core.truth_(this__12658.front))
{return (new cljs.core.PersistentQueue(this__12658.meta,(this__12658.count + 1),this__12658.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12660 = this__12658.rear;

if(cljs.core.truth_(or__3548__auto____12660))
{return or__3548__auto____12660;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12658.meta,(this__12658.count + 1),cljs.core.conj.call(null,this__12658.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12662 = this;
var rear__12665 = cljs.core.seq.call(null,this__12662.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12666 = this__12662.front;

if(cljs.core.truth_(or__3548__auto____12666))
{return or__3548__auto____12666;
} else
{return rear__12665;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12662.front,cljs.core.seq.call(null,rear__12665)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12668 = this;
return this__12668.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12670 = this;
return cljs.core._first.call(null,this__12670.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12672 = this;
if(cljs.core.truth_(this__12672.front))
{var temp__3695__auto____12674 = cljs.core.next.call(null,this__12672.front);

if(cljs.core.truth_(temp__3695__auto____12674))
{var f1__12675 = temp__3695__auto____12674;

return (new cljs.core.PersistentQueue(this__12672.meta,(this__12672.count - 1),f1__12675,this__12672.rear));
} else
{return (new cljs.core.PersistentQueue(this__12672.meta,(this__12672.count - 1),cljs.core.seq.call(null,this__12672.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12677 = this;
return cljs.core.first.call(null,this__12677.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12678 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12684 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12686 = this;
return (new cljs.core.PersistentQueue(meta,this__12686.count,this__12686.front,this__12686.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12688 = this;
return this__12688.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12690 = this;
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
var this__12717 = this;
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
var len__12749 = array.length;

var i__12750 = 0;

while(true){
if(cljs.core.truth_((i__12750 < len__12749)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12750]))))
{return i__12750;
} else
{{
var G__12759 = (i__12750 + incr);
i__12750 = G__12759;
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
var obj_map_contains_key_QMARK___12766 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12767 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12762 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12762))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12762;
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
return obj_map_contains_key_QMARK___12766.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12767.call(this,k,strobj,true_val,false_val);
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
var this__12783 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12838 = null;
var G__12838__12839 = (function (coll,k){
var this__12785 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12838__12840 = (function (coll,k,not_found){
var this__12787 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12787.strobj,(this__12787.strobj[k]),not_found);
});
G__12838 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12838__12839.call(this,coll,k);
case  3 :
return G__12838__12840.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12838;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12790 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12791 = goog.object.clone.call(null,this__12790.strobj);
var overwrite_QMARK___12792 = new_strobj__12791.hasOwnProperty(k);

(new_strobj__12791[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12792))
{return (new cljs.core.ObjMap(this__12790.meta,this__12790.keys,new_strobj__12791));
} else
{var new_keys__12794 = cljs.core.aclone.call(null,this__12790.keys);

new_keys__12794.push(k);
return (new cljs.core.ObjMap(this__12790.meta,new_keys__12794,new_strobj__12791));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12790.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12798 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12798.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12857 = null;
var G__12857__12858 = (function (coll,k){
var this__12803 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12857__12860 = (function (coll,k,not_found){
var this__12804 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12857 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12857__12858.call(this,coll,k);
case  3 :
return G__12857__12860.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12857;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12806 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12810 = this;
if(cljs.core.truth_((this__12810.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12770_SHARP_){
return cljs.core.vector.call(null,p1__12770_SHARP_,(this__12810.strobj[p1__12770_SHARP_]));
}),this__12810.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12816 = this;
return this__12816.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12818 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12819 = this;
return (new cljs.core.ObjMap(meta,this__12819.keys,this__12819.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12821 = this;
return this__12821.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12824 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12824.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12826 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12828 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12828))
{return this__12826.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12828;
}
})()))
{var new_keys__12830 = cljs.core.aclone.call(null,this__12826.keys);
var new_strobj__12831 = goog.object.clone.call(null,this__12826.strobj);

new_keys__12830.splice(cljs.core.scan_array.call(null,1,k,new_keys__12830),1);
cljs.core.js_delete.call(null,new_strobj__12831,k);
return (new cljs.core.ObjMap(this__12826.meta,new_keys__12830,new_strobj__12831));
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
var this__12916 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13034 = null;
var G__13034__13035 = (function (coll,k){
var this__12917 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13034__13036 = (function (coll,k,not_found){
var this__12918 = this;
var bucket__12919 = (this__12918.hashobj[cljs.core.hash.call(null,k)]);
var i__12920 = (cljs.core.truth_(bucket__12919)?cljs.core.scan_array.call(null,2,k,bucket__12919):null);

if(cljs.core.truth_(i__12920))
{return (bucket__12919[(i__12920 + 1)]);
} else
{return not_found;
}
});
G__13034 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13034__13035.call(this,coll,k);
case  3 :
return G__13034__13036.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13034;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12921 = this;
var h__12922 = cljs.core.hash.call(null,k);
var bucket__12923 = (this__12921.hashobj[h__12922]);

if(cljs.core.truth_(bucket__12923))
{var new_bucket__12924 = cljs.core.aclone.call(null,bucket__12923);
var new_hashobj__12925 = goog.object.clone.call(null,this__12921.hashobj);

(new_hashobj__12925[h__12922] = new_bucket__12924);
var temp__3695__auto____12926 = cljs.core.scan_array.call(null,2,k,new_bucket__12924);

if(cljs.core.truth_(temp__3695__auto____12926))
{var i__12927 = temp__3695__auto____12926;

(new_bucket__12924[(i__12927 + 1)] = v);
return (new cljs.core.HashMap(this__12921.meta,this__12921.count,new_hashobj__12925));
} else
{new_bucket__12924.push(k,v);
return (new cljs.core.HashMap(this__12921.meta,(this__12921.count + 1),new_hashobj__12925));
}
} else
{var new_hashobj__12928 = goog.object.clone.call(null,this__12921.hashobj);

(new_hashobj__12928[h__12922] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12921.meta,(this__12921.count + 1),new_hashobj__12928));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12929 = this;
var bucket__12930 = (this__12929.hashobj[cljs.core.hash.call(null,k)]);
var i__12932 = (cljs.core.truth_(bucket__12930)?cljs.core.scan_array.call(null,2,k,bucket__12930):null);

if(cljs.core.truth_(i__12932))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13038 = null;
var G__13038__13039 = (function (coll,k){
var this__12934 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13038__13040 = (function (coll,k,not_found){
var this__12936 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13038 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13038__13039.call(this,coll,k);
case  3 :
return G__13038__13040.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13038;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12938 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12942 = this;
if(cljs.core.truth_((this__12942.count > 0)))
{var hashes__12947 = cljs.core.js_keys.call(null,this__12942.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12911_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12942.hashobj[p1__12911_SHARP_])));
}),hashes__12947);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12949 = this;
return this__12949.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12950 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12952 = this;
return (new cljs.core.HashMap(meta,this__12952.count,this__12952.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12955 = this;
return this__12955.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12957 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12957.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13023 = this;
var h__13024 = cljs.core.hash.call(null,k);
var bucket__13025 = (this__13023.hashobj[h__13024]);
var i__13026 = (cljs.core.truth_(bucket__13025)?cljs.core.scan_array.call(null,2,k,bucket__13025):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13026)))
{return coll;
} else
{var new_hashobj__13027 = goog.object.clone.call(null,this__13023.hashobj);

if(cljs.core.truth_((3 > bucket__13025.length)))
{cljs.core.js_delete.call(null,new_hashobj__13027,h__13024);
} else
{var new_bucket__13028 = cljs.core.aclone.call(null,bucket__13025);

new_bucket__13028.splice(i__13026,2);
(new_hashobj__13027[h__13024] = new_bucket__13028);
}
return (new cljs.core.HashMap(this__13023.meta,(this__13023.count - 1),new_hashobj__13027));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13049 = ks.length;

var i__13052 = 0;
var out__13053 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13052 < len__13049)))
{{
var G__13055 = (i__13052 + 1);
var G__13056 = cljs.core.assoc.call(null,out__13053,(ks[i__13052]),(vs[i__13052]));
i__13052 = G__13055;
out__13053 = G__13056;
continue;
}
} else
{return out__13053;
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
var in$__13057 = cljs.core.seq.call(null,keyvals);
var out__13058 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13057))
{{
var G__13062 = cljs.core.nnext.call(null,in$__13057);
var G__13063 = cljs.core.assoc.call(null,out__13058,cljs.core.first.call(null,in$__13057),cljs.core.second.call(null,in$__13057));
in$__13057 = G__13062;
out__13058 = G__13063;
continue;
}
} else
{return out__13058;
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
hash_map.cljs$lang$applyTo = (function (arglist__13066){
var keyvals = cljs.core.seq( arglist__13066 );;
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
{return cljs.core.reduce.call(null,(function (p1__13069_SHARP_,p2__13070_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13071 = p1__13069_SHARP_;

if(cljs.core.truth_(or__3548__auto____13071))
{return or__3548__auto____13071;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13070_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13072){
var maps = cljs.core.seq( arglist__13072 );;
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
{var merge_entry__13075 = (function (m,e){
var k__13073 = cljs.core.first.call(null,e);
var v__13074 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13073)))
{return cljs.core.assoc.call(null,m,k__13073,f.call(null,cljs.core.get.call(null,m,k__13073),v__13074));
} else
{return cljs.core.assoc.call(null,m,k__13073,v__13074);
}
});
var merge2__13077 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13075,(function (){var or__3548__auto____13076 = m1;

if(cljs.core.truth_(or__3548__auto____13076))
{return or__3548__auto____13076;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13077,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13085){
var f = cljs.core.first(arglist__13085);
var maps = cljs.core.rest(arglist__13085);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13091 = cljs.core.ObjMap.fromObject([],{});
var keys__13092 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13092))
{var key__13093 = cljs.core.first.call(null,keys__13092);
var entry__13094 = cljs.core.get.call(null,map,key__13093,"﷐'user/not-found");

{
var G__13095 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13094,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13091,key__13093,entry__13094):ret__13091);
var G__13096 = cljs.core.next.call(null,keys__13092);
ret__13091 = G__13095;
keys__13092 = G__13096;
continue;
}
} else
{return ret__13091;
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
var this__13098 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13137 = null;
var G__13137__13138 = (function (coll,v){
var this__13099 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13137__13139 = (function (coll,v,not_found){
var this__13100 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13100.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13137 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13137__13138.call(this,coll,v);
case  3 :
return G__13137__13139.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13137;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13143 = null;
var G__13143__13144 = (function (coll,k){
var this__13101 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13143__13145 = (function (coll,k,not_found){
var this__13102 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13143 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13143__13144.call(this,coll,k);
case  3 :
return G__13143__13145.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13143;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13103 = this;
return (new cljs.core.Set(this__13103.meta,cljs.core.assoc.call(null,this__13103.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13105 = this;
return cljs.core.keys.call(null,this__13105.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13122 = this;
return (new cljs.core.Set(this__13122.meta,cljs.core.dissoc.call(null,this__13122.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13123 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13125 = this;
var and__3546__auto____13126 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13126))
{var and__3546__auto____13127 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13127))
{return cljs.core.every_QMARK_.call(null,(function (p1__13088_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13088_SHARP_);
}),other);
} else
{return and__3546__auto____13127;
}
} else
{return and__3546__auto____13126;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13129 = this;
return (new cljs.core.Set(meta,this__13129.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13133 = this;
return this__13133.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13134 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13134.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13152 = cljs.core.seq.call(null,coll);
var out__13153 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13152))))
{{
var G__13155 = cljs.core.rest.call(null,in$__13152);
var G__13156 = cljs.core.conj.call(null,out__13153,cljs.core.first.call(null,in$__13152));
in$__13152 = G__13155;
out__13153 = G__13156;
continue;
}
} else
{return out__13153;
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
{var n__13157 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13160 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13160))
{var e__13161 = temp__3695__auto____13160;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13161));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13157,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13151_SHARP_){
var temp__3695__auto____13164 = cljs.core.find.call(null,smap,p1__13151_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13164))
{var e__13166 = temp__3695__auto____13164;

return cljs.core.second.call(null,e__13166);
} else
{return p1__13151_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13182 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13169,seen){
while(true){
var vec__13170__13171 = p__13169;
var f__13172 = cljs.core.nth.call(null,vec__13170__13171,0,null);
var xs__13179 = vec__13170__13171;

var temp__3698__auto____13180 = cljs.core.seq.call(null,xs__13179);

if(cljs.core.truth_(temp__3698__auto____13180))
{var s__13181 = temp__3698__auto____13180;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13172)))
{{
var G__13185 = cljs.core.rest.call(null,s__13181);
var G__13186 = seen;
p__13169 = G__13185;
seen = G__13186;
continue;
}
} else
{return cljs.core.cons.call(null,f__13172,step.call(null,cljs.core.rest.call(null,s__13181),cljs.core.conj.call(null,seen,f__13172)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13182.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13193 = cljs.core.Vector.fromArray([]);
var s__13194 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13194)))
{{
var G__13195 = cljs.core.conj.call(null,ret__13193,cljs.core.first.call(null,s__13194));
var G__13196 = cljs.core.next.call(null,s__13194);
ret__13193 = G__13195;
s__13194 = G__13196;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13193);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13331 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13331))
{return or__3548__auto____13331;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13335 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13335 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13335 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13348 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13348))
{return or__3548__auto____13348;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13349 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13349 > -1)))
{return cljs.core.subs.call(null,x,2,i__13349);
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
var map__13358 = cljs.core.ObjMap.fromObject([],{});
var ks__13359 = cljs.core.seq.call(null,keys);
var vs__13361 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13363 = ks__13359;

if(cljs.core.truth_(and__3546__auto____13363))
{return vs__13361;
} else
{return and__3546__auto____13363;
}
})()))
{{
var G__13370 = cljs.core.assoc.call(null,map__13358,cljs.core.first.call(null,ks__13359),cljs.core.first.call(null,vs__13361));
var G__13371 = cljs.core.next.call(null,ks__13359);
var G__13372 = cljs.core.next.call(null,vs__13361);
map__13358 = G__13370;
ks__13359 = G__13371;
vs__13361 = G__13372;
continue;
}
} else
{return map__13358;
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
var max_key__13379 = (function (k,x){
return x;
});
var max_key__13380 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13381 = (function() { 
var G__13387__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13353_SHARP_,p2__13354_SHARP_){
return max_key.call(null,k,p1__13353_SHARP_,p2__13354_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13387 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13387__delegate.call(this, k, x, y, more);
};
G__13387.cljs$lang$maxFixedArity = 3;
G__13387.cljs$lang$applyTo = (function (arglist__13388){
var k = cljs.core.first(arglist__13388);
var x = cljs.core.first(cljs.core.next(arglist__13388));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13388)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13388)));
return G__13387__delegate.call(this, k, x, y, more);
});
return G__13387;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13379.call(this,k,x);
case  3 :
return max_key__13380.call(this,k,x,y);
default:
return max_key__13381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13381.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13389 = (function (k,x){
return x;
});
var min_key__13390 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13391 = (function() { 
var G__13394__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13376_SHARP_,p2__13377_SHARP_){
return min_key.call(null,k,p1__13376_SHARP_,p2__13377_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13394 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13394__delegate.call(this, k, x, y, more);
};
G__13394.cljs$lang$maxFixedArity = 3;
G__13394.cljs$lang$applyTo = (function (arglist__13398){
var k = cljs.core.first(arglist__13398);
var x = cljs.core.first(cljs.core.next(arglist__13398));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13398)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13398)));
return G__13394__delegate.call(this, k, x, y, more);
});
return G__13394;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13389.call(this,k,x);
case  3 :
return min_key__13390.call(this,k,x,y);
default:
return min_key__13391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13391.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13403 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13404 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13399 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13399))
{var s__13401 = temp__3698__auto____13399;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13401),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13401)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13403.call(this,n,step);
case  3 :
return partition_all__13404.call(this,n,step,coll);
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
var temp__3698__auto____13454 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13454))
{var s__13455 = temp__3698__auto____13454;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13455))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13455),take_while.call(null,pred,cljs.core.rest.call(null,s__13455)));
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
var this__13464 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13468 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13494 = null;
var G__13494__13495 = (function (rng,f){
var this__13470 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13494__13496 = (function (rng,f,s){
var this__13471 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13494 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13494__13495.call(this,rng,f);
case  3 :
return G__13494__13496.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13494;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13473 = this;
var comp__13474 = (cljs.core.truth_((this__13473.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13474.call(null,this__13473.start,this__13473.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13475 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13475.end - this__13475.start) / this__13475.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13477 = this;
return this__13477.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13481 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13481.meta,(this__13481.start + this__13481.step),this__13481.end,this__13481.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13482 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13483 = this;
return (new cljs.core.Range(meta,this__13483.start,this__13483.end,this__13483.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13484 = this;
return this__13484.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13515 = null;
var G__13515__13516 = (function (rng,n){
var this__13485 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13485.start + (n * this__13485.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13486 = (this__13485.start > this__13485.end);

if(cljs.core.truth_(and__3546__auto____13486))
{return cljs.core._EQ_.call(null,this__13485.step,0);
} else
{return and__3546__auto____13486;
}
})()))
{return this__13485.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13515__13517 = (function (rng,n,not_found){
var this__13487 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13487.start + (n * this__13487.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13488 = (this__13487.start > this__13487.end);

if(cljs.core.truth_(and__3546__auto____13488))
{return cljs.core._EQ_.call(null,this__13487.step,0);
} else
{return and__3546__auto____13488;
}
})()))
{return this__13487.start;
} else
{return not_found;
}
}
});
G__13515 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13515__13516.call(this,rng,n);
case  3 :
return G__13515__13517.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13515;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13493 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13493.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13528 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13529 = (function (end){
return range.call(null,0,end,1);
});
var range__13530 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13531 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13528.call(this);
case  1 :
return range__13529.call(this,start);
case  2 :
return range__13530.call(this,start,end);
case  3 :
return range__13531.call(this,start,end,step);
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
var temp__3698__auto____13548 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13548))
{var s__13550 = temp__3698__auto____13548;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13550),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13550)));
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
var temp__3698__auto____13683 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13683))
{var s__13684 = temp__3698__auto____13683;

var fst__13685 = cljs.core.first.call(null,s__13684);
var fv__13686 = f.call(null,fst__13685);
var run__13687 = cljs.core.cons.call(null,fst__13685,cljs.core.take_while.call(null,(function (p1__13557_SHARP_){
return cljs.core._EQ_.call(null,fv__13686,f.call(null,p1__13557_SHARP_));
}),cljs.core.next.call(null,s__13684)));

return cljs.core.cons.call(null,run__13687,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13687),s__13684))));
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
var reductions__13716 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13706))
{var s__13707 = temp__3695__auto____13706;

return reductions.call(null,f,cljs.core.first.call(null,s__13707),cljs.core.rest.call(null,s__13707));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13717 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13711 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13711))
{var s__13712 = temp__3698__auto____13711;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13712)),cljs.core.rest.call(null,s__13712));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13716.call(this,f,init);
case  3 :
return reductions__13717.call(this,f,init,coll);
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
var juxt__13916 = (function (f){
return (function() {
var G__13921 = null;
var G__13921__13922 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13921__13923 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13921__13924 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13921__13925 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13921__13926 = (function() { 
var G__13928__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13928 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13928__delegate.call(this, x, y, z, args);
};
G__13928.cljs$lang$maxFixedArity = 3;
G__13928.cljs$lang$applyTo = (function (arglist__13929){
var x = cljs.core.first(arglist__13929);
var y = cljs.core.first(cljs.core.next(arglist__13929));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13929)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13929)));
return G__13928__delegate.call(this, x, y, z, args);
});
return G__13928;
})()
;
G__13921 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13921__13922.call(this);
case  1 :
return G__13921__13923.call(this,x);
case  2 :
return G__13921__13924.call(this,x,y);
case  3 :
return G__13921__13925.call(this,x,y,z);
default:
return G__13921__13926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13921.cljs$lang$maxFixedArity = 3;
G__13921.cljs$lang$applyTo = G__13921__13926.cljs$lang$applyTo;
return G__13921;
})()
});
var juxt__13917 = (function (f,g){
return (function() {
var G__13930 = null;
var G__13930__13931 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13930__13932 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13930__13933 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13930__13934 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13930__13935 = (function() { 
var G__13937__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13937 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13937__delegate.call(this, x, y, z, args);
};
G__13937.cljs$lang$maxFixedArity = 3;
G__13937.cljs$lang$applyTo = (function (arglist__13938){
var x = cljs.core.first(arglist__13938);
var y = cljs.core.first(cljs.core.next(arglist__13938));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13938)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13938)));
return G__13937__delegate.call(this, x, y, z, args);
});
return G__13937;
})()
;
G__13930 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13930__13931.call(this);
case  1 :
return G__13930__13932.call(this,x);
case  2 :
return G__13930__13933.call(this,x,y);
case  3 :
return G__13930__13934.call(this,x,y,z);
default:
return G__13930__13935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13930.cljs$lang$maxFixedArity = 3;
G__13930.cljs$lang$applyTo = G__13930__13935.cljs$lang$applyTo;
return G__13930;
})()
});
var juxt__13918 = (function (f,g,h){
return (function() {
var G__13939 = null;
var G__13939__13940 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13939__13941 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13939__13942 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13939__13943 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13939__13944 = (function() { 
var G__13947__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13947 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13947__delegate.call(this, x, y, z, args);
};
G__13947.cljs$lang$maxFixedArity = 3;
G__13947.cljs$lang$applyTo = (function (arglist__13948){
var x = cljs.core.first(arglist__13948);
var y = cljs.core.first(cljs.core.next(arglist__13948));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13948)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13948)));
return G__13947__delegate.call(this, x, y, z, args);
});
return G__13947;
})()
;
G__13939 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13939__13940.call(this);
case  1 :
return G__13939__13941.call(this,x);
case  2 :
return G__13939__13942.call(this,x,y);
case  3 :
return G__13939__13943.call(this,x,y,z);
default:
return G__13939__13944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13939.cljs$lang$maxFixedArity = 3;
G__13939.cljs$lang$applyTo = G__13939__13944.cljs$lang$applyTo;
return G__13939;
})()
});
var juxt__13919 = (function() { 
var G__13950__delegate = function (f,g,h,fs){
var fs__13908 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13951 = null;
var G__13951__13952 = (function (){
return cljs.core.reduce.call(null,(function (p1__13691_SHARP_,p2__13692_SHARP_){
return cljs.core.conj.call(null,p1__13691_SHARP_,p2__13692_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13908);
});
var G__13951__13954 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13694_SHARP_,p2__13695_SHARP_){
return cljs.core.conj.call(null,p1__13694_SHARP_,p2__13695_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13908);
});
var G__13951__13957 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13697_SHARP_,p2__13698_SHARP_){
return cljs.core.conj.call(null,p1__13697_SHARP_,p2__13698_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13908);
});
var G__13951__13959 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13699_SHARP_,p2__13700_SHARP_){
return cljs.core.conj.call(null,p1__13699_SHARP_,p2__13700_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13908);
});
var G__13951__13961 = (function() { 
var G__13977__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13701_SHARP_,p2__13702_SHARP_){
return cljs.core.conj.call(null,p1__13701_SHARP_,cljs.core.apply.call(null,p2__13702_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13908);
};
var G__13977 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13977__delegate.call(this, x, y, z, args);
};
G__13977.cljs$lang$maxFixedArity = 3;
G__13977.cljs$lang$applyTo = (function (arglist__13979){
var x = cljs.core.first(arglist__13979);
var y = cljs.core.first(cljs.core.next(arglist__13979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13979)));
return G__13977__delegate.call(this, x, y, z, args);
});
return G__13977;
})()
;
G__13951 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13951__13952.call(this);
case  1 :
return G__13951__13954.call(this,x);
case  2 :
return G__13951__13957.call(this,x,y);
case  3 :
return G__13951__13959.call(this,x,y,z);
default:
return G__13951__13961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13951.cljs$lang$maxFixedArity = 3;
G__13951.cljs$lang$applyTo = G__13951__13961.cljs$lang$applyTo;
return G__13951;
})()
};
var G__13950 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13950__delegate.call(this, f, g, h, fs);
};
G__13950.cljs$lang$maxFixedArity = 3;
G__13950.cljs$lang$applyTo = (function (arglist__13989){
var f = cljs.core.first(arglist__13989);
var g = cljs.core.first(cljs.core.next(arglist__13989));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13989)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13989)));
return G__13950__delegate.call(this, f, g, h, fs);
});
return G__13950;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13916.call(this,f);
case  2 :
return juxt__13917.call(this,f,g);
case  3 :
return juxt__13918.call(this,f,g,h);
default:
return juxt__13919.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13919.cljs$lang$applyTo;
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
var dorun__14006 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14010 = cljs.core.next.call(null,coll);
coll = G__14010;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14008 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13998 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13998))
{return (n > 0);
} else
{return and__3546__auto____13998;
}
})()))
{{
var G__14013 = (n - 1);
var G__14014 = cljs.core.next.call(null,coll);
n = G__14013;
coll = G__14014;
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
return dorun__14006.call(this,n);
case  2 :
return dorun__14008.call(this,n,coll);
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
var doall__14045 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14046 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14045.call(this,n);
case  2 :
return doall__14046.call(this,n,coll);
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
var matches__14053 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14053),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14053),1)))
{return cljs.core.first.call(null,matches__14053);
} else
{return cljs.core.vec.call(null,matches__14053);
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
var matches__14058 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14058)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14058),1)))
{return cljs.core.first.call(null,matches__14058);
} else
{return cljs.core.vec.call(null,matches__14058);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14063 = cljs.core.re_find.call(null,re,s);
var match_idx__14064 = s.search(re);
var match_str__14065 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14063))?cljs.core.first.call(null,match_data__14063):match_data__14063);
var post_match__14066 = cljs.core.subs.call(null,s,(match_idx__14064 + cljs.core.count.call(null,match_str__14065)));

if(cljs.core.truth_(match_data__14063))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14063,re_seq.call(null,re,post_match__14066));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14072_SHARP_){
return print_one.call(null,p1__14072_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14098 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14098))
{var and__3546__auto____14104 = (function (){var x__445__auto____14100 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14101 = x__445__auto____14100;

if(cljs.core.truth_(and__3546__auto____14101))
{var and__3546__auto____14102 = x__445__auto____14100.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14102))
{return cljs.core.not.call(null,x__445__auto____14100.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14102;
}
} else
{return and__3546__auto____14101;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14100);
}
})();

if(cljs.core.truth_(and__3546__auto____14104))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14104;
}
} else
{return and__3546__auto____14098;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14114 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14115 = x__445__auto____14114;

if(cljs.core.truth_(and__3546__auto____14115))
{var and__3546__auto____14116 = x__445__auto____14114.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14116))
{return cljs.core.not.call(null,x__445__auto____14114.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14116;
}
} else
{return and__3546__auto____14115;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14114);
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
var first_obj__14128 = cljs.core.first.call(null,objs);
var sb__14130 = (new goog.string.StringBuffer());

var G__14131__14132 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14131__14132))
{var obj__14133 = cljs.core.first.call(null,G__14131__14132);
var G__14131__14134 = G__14131__14132;

while(true){
if(cljs.core.truth_((obj__14133 === first_obj__14128)))
{} else
{sb__14130.append(" ");
}
var G__14136__14143 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14133,opts));

if(cljs.core.truth_(G__14136__14143))
{var string__14145 = cljs.core.first.call(null,G__14136__14143);
var G__14136__14146 = G__14136__14143;

while(true){
sb__14130.append(string__14145);
var temp__3698__auto____14148 = cljs.core.next.call(null,G__14136__14146);

if(cljs.core.truth_(temp__3698__auto____14148))
{var G__14136__14151 = temp__3698__auto____14148;

{
var G__14157 = cljs.core.first.call(null,G__14136__14151);
var G__14158 = G__14136__14151;
string__14145 = G__14157;
G__14136__14146 = G__14158;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14152 = cljs.core.next.call(null,G__14131__14134);

if(cljs.core.truth_(temp__3698__auto____14152))
{var G__14131__14153 = temp__3698__auto____14152;

{
var G__14160 = cljs.core.first.call(null,G__14131__14153);
var G__14161 = G__14131__14153;
obj__14133 = G__14160;
G__14131__14134 = G__14161;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14130);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14163 = cljs.core.first.call(null,objs);

var G__14164__14165 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14164__14165))
{var obj__14167 = cljs.core.first.call(null,G__14164__14165);
var G__14164__14168 = G__14164__14165;

while(true){
if(cljs.core.truth_((obj__14167 === first_obj__14163)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14169__14170 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14167,opts));

if(cljs.core.truth_(G__14169__14170))
{var string__14172 = cljs.core.first.call(null,G__14169__14170);
var G__14169__14173 = G__14169__14170;

while(true){
cljs.core.string_print.call(null,string__14172);
var temp__3698__auto____14176 = cljs.core.next.call(null,G__14169__14173);

if(cljs.core.truth_(temp__3698__auto____14176))
{var G__14169__14182 = temp__3698__auto____14176;

{
var G__14190 = cljs.core.first.call(null,G__14169__14182);
var G__14191 = G__14169__14182;
string__14172 = G__14190;
G__14169__14173 = G__14191;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14183 = cljs.core.next.call(null,G__14164__14168);

if(cljs.core.truth_(temp__3698__auto____14183))
{var G__14164__14184 = temp__3698__auto____14183;

{
var G__14193 = cljs.core.first.call(null,G__14164__14184);
var G__14194 = G__14164__14184;
obj__14167 = G__14193;
G__14164__14168 = G__14194;
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
pr_str.cljs$lang$applyTo = (function (arglist__14204){
var objs = cljs.core.seq( arglist__14204 );;
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
pr.cljs$lang$applyTo = (function (arglist__14205){
var objs = cljs.core.seq( arglist__14205 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14254){
var objs = cljs.core.seq( arglist__14254 );;
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
println.cljs$lang$applyTo = (function (arglist__14264){
var objs = cljs.core.seq( arglist__14264 );;
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
prn.cljs$lang$applyTo = (function (arglist__14269){
var objs = cljs.core.seq( arglist__14269 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14282 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14282,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14296 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14296))
{var nspc__14298 = temp__3698__auto____14296;

return cljs.core.str.call(null,nspc__14298,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14300 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14300))
{var nspc__14302 = temp__3698__auto____14300;

return cljs.core.str.call(null,nspc__14302,"/");
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
var pr_pair__14311 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14311,"{",", ","}",opts,coll);
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
var this__14377 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14378 = this;
var G__14379__14380 = cljs.core.seq.call(null,this__14378.watches);

if(cljs.core.truth_(G__14379__14380))
{var G__14382__14385 = cljs.core.first.call(null,G__14379__14380);
var vec__14384__14386 = G__14382__14385;
var key__14387 = cljs.core.nth.call(null,vec__14384__14386,0,null);
var f__14388 = cljs.core.nth.call(null,vec__14384__14386,1,null);
var G__14379__14389 = G__14379__14380;

var G__14382__14390 = G__14382__14385;
var G__14379__14391 = G__14379__14389;

while(true){
var vec__14392__14393 = G__14382__14390;
var key__14394 = cljs.core.nth.call(null,vec__14392__14393,0,null);
var f__14395 = cljs.core.nth.call(null,vec__14392__14393,1,null);
var G__14379__14396 = G__14379__14391;

f__14395.call(null,key__14394,this$,oldval,newval);
var temp__3698__auto____14397 = cljs.core.next.call(null,G__14379__14396);

if(cljs.core.truth_(temp__3698__auto____14397))
{var G__14379__14398 = temp__3698__auto____14397;

{
var G__14464 = cljs.core.first.call(null,G__14379__14398);
var G__14465 = G__14379__14398;
G__14382__14390 = G__14464;
G__14379__14391 = G__14465;
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
var this__14399 = this;
return this$.watches = cljs.core.assoc.call(null,this__14399.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14401 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14401.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14402 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14402.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14403 = this;
return this__14403.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14406 = this;
return this__14406.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14462 = this;
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
var atom__14480 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14481 = (function() { 
var G__14483__delegate = function (x,p__14474){
var map__14475__14476 = p__14474;
var map__14475__14477 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14475__14476))?cljs.core.apply.call(null,cljs.core.hash_map,map__14475__14476):map__14475__14476);
var validator__14478 = cljs.core.get.call(null,map__14475__14477,"﷐'validator");
var meta__14479 = cljs.core.get.call(null,map__14475__14477,"﷐'meta");

return (new cljs.core.Atom(x,meta__14479,validator__14478,null));
};
var G__14483 = function (x,var_args){
var p__14474 = null;
if (goog.isDef(var_args)) {
  p__14474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14483__delegate.call(this, x, p__14474);
};
G__14483.cljs$lang$maxFixedArity = 1;
G__14483.cljs$lang$applyTo = (function (arglist__14484){
var x = cljs.core.first(arglist__14484);
var p__14474 = cljs.core.rest(arglist__14484);
return G__14483__delegate.call(this, x, p__14474);
});
return G__14483;
})()
;
atom = function(x,var_args){
var p__14474 = var_args;
switch(arguments.length){
case  1 :
return atom__14480.call(this,x);
default:
return atom__14481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14481.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14485 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14485))
{var validate__14486 = temp__3698__auto____14485;

if(cljs.core.truth_(validate__14486.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14487 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14487,new_value);
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
var swap_BANG___14493 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14494 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14495 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14496 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14497 = (function() { 
var G__14501__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14501 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14501__delegate.call(this, a, f, x, y, z, more);
};
G__14501.cljs$lang$maxFixedArity = 5;
G__14501.cljs$lang$applyTo = (function (arglist__14504){
var a = cljs.core.first(arglist__14504);
var f = cljs.core.first(cljs.core.next(arglist__14504));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14504)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14504))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14504)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14504)))));
return G__14501__delegate.call(this, a, f, x, y, z, more);
});
return G__14501;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14493.call(this,a,f);
case  3 :
return swap_BANG___14494.call(this,a,f,x);
case  4 :
return swap_BANG___14495.call(this,a,f,x,y);
case  5 :
return swap_BANG___14496.call(this,a,f,x,y,z);
default:
return swap_BANG___14497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14497.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14646){
var iref = cljs.core.first(arglist__14646);
var f = cljs.core.first(cljs.core.next(arglist__14646));
var args = cljs.core.rest(cljs.core.next(arglist__14646));
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
var gensym__14659 = (function (){
return gensym.call(null,"G__");
});
var gensym__14660 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14659.call(this);
case  1 :
return gensym__14660.call(this,prefix_string);
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
var this__14668 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14668.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14669 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14669.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14669.state,this__14669.f);
}
return cljs.core.deref.call(null,this__14669.state);
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
delay.cljs$lang$applyTo = (function (arglist__14670){
var body = cljs.core.seq( arglist__14670 );;
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
var map__14683__14684 = options;
var map__14683__14685 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14683__14684))?cljs.core.apply.call(null,cljs.core.hash_map,map__14683__14684):map__14683__14684);
var keywordize_keys__14686 = cljs.core.get.call(null,map__14683__14685,"﷐'keywordize-keys");
var keyfn__14687 = (cljs.core.truth_(keywordize_keys__14686)?cljs.core.keyword:cljs.core.str);
var f__14693 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14692 = (function iter__14688(s__14689){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14689__14690 = s__14689;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14689__14690)))
{var k__14691 = cljs.core.first.call(null,s__14689__14690);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14687.call(null,k__14691),thisfn.call(null,(x[k__14691]))]),iter__14688.call(null,cljs.core.rest.call(null,s__14689__14690)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14692.call(null,cljs.core.js_keys.call(null,x));
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

return f__14693.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14698){
var x = cljs.core.first(arglist__14698);
var options = cljs.core.rest(arglist__14698);
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
var mem__14705 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14715__delegate = function (args){
var temp__3695__auto____14712 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14705),args);

if(cljs.core.truth_(temp__3695__auto____14712))
{var v__14713 = temp__3695__auto____14712;

return v__14713;
} else
{var ret__14714 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14705,cljs.core.assoc,args,ret__14714);
return ret__14714;
}
};
var G__14715 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14715__delegate.call(this, args);
};
G__14715.cljs$lang$maxFixedArity = 0;
G__14715.cljs$lang$applyTo = (function (arglist__14716){
var args = cljs.core.seq( arglist__14716 );;
return G__14715__delegate.call(this, args);
});
return G__14715;
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
var trampoline__14719 = (function (f){
while(true){
var ret__14717 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14717)))
{{
var G__14726 = ret__14717;
f = G__14726;
continue;
}
} else
{return ret__14717;
}
break;
}
});
var trampoline__14720 = (function() { 
var G__14727__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14727 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14727__delegate.call(this, f, args);
};
G__14727.cljs$lang$maxFixedArity = 1;
G__14727.cljs$lang$applyTo = (function (arglist__14730){
var f = cljs.core.first(arglist__14730);
var args = cljs.core.rest(arglist__14730);
return G__14727__delegate.call(this, f, args);
});
return G__14727;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14719.call(this,f);
default:
return trampoline__14720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14720.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14731 = (function (){
return rand.call(null,1);
});
var rand__14732 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14731.call(this);
case  1 :
return rand__14732.call(this,n);
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
var k__14737 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14737,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14737,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14747 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14748 = (function (h,child,parent){
var or__3548__auto____14739 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14739))
{return or__3548__auto____14739;
} else
{var or__3548__auto____14740 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14740))
{return or__3548__auto____14740;
} else
{var and__3546__auto____14741 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14741))
{var and__3546__auto____14742 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14742))
{var and__3546__auto____14743 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14743))
{var ret__14744 = true;
var i__14745 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14746 = cljs.core.not.call(null,ret__14744);

if(cljs.core.truth_(or__3548__auto____14746))
{return or__3548__auto____14746;
} else
{return cljs.core._EQ_.call(null,i__14745,cljs.core.count.call(null,parent));
}
})()))
{return ret__14744;
} else
{{
var G__14763 = isa_QMARK_.call(null,h,child.call(null,i__14745),parent.call(null,i__14745));
var G__14820 = (i__14745 + 1);
ret__14744 = G__14763;
i__14745 = G__14820;
continue;
}
}
break;
}
} else
{return and__3546__auto____14743;
}
} else
{return and__3546__auto____14742;
}
} else
{return and__3546__auto____14741;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14747.call(this,h,child);
case  3 :
return isa_QMARK___14748.call(this,h,child,parent);
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
var parents__14844 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14845 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14844.call(this,h);
case  2 :
return parents__14845.call(this,h,tag);
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
var ancestors__14855 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14856 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14855.call(this,h);
case  2 :
return ancestors__14856.call(this,h,tag);
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
var descendants__14865 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14866 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14865.call(this,h);
case  2 :
return descendants__14866.call(this,h,tag);
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
var derive__14890 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14891 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14875 = "﷐'parents".call(null,h);
var td__14876 = "﷐'descendants".call(null,h);
var ta__14877 = "﷐'ancestors".call(null,h);
var tf__14884 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14886 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14875.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14877.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14877.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14875,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14884.call(null,"﷐'ancestors".call(null,h),tag,td__14876,parent,ta__14877),"﷐'descendants":tf__14884.call(null,"﷐'descendants".call(null,h),parent,ta__14877,tag,td__14876)});
})());

if(cljs.core.truth_(or__3548__auto____14886))
{return or__3548__auto____14886;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14890.call(this,h,tag);
case  3 :
return derive__14891.call(this,h,tag,parent);
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
var underive__14913 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14914 = (function (h,tag,parent){
var parentMap__14909 = "﷐'parents".call(null,h);
var childsParents__14910 = (cljs.core.truth_(parentMap__14909.call(null,tag))?cljs.core.disj.call(null,parentMap__14909.call(null,tag),parent):cljs.core.set([]));
var newParents__14911 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14910))?cljs.core.assoc.call(null,parentMap__14909,tag,childsParents__14910):cljs.core.dissoc.call(null,parentMap__14909,tag));
var deriv_seq__14912 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14869_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14869_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14869_SHARP_),cljs.core.second.call(null,p1__14869_SHARP_)));
}),cljs.core.seq.call(null,newParents__14911)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14909.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14870_SHARP_,p2__14871_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14870_SHARP_,p2__14871_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14912));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14913.call(this,h,tag);
case  3 :
return underive__14914.call(this,h,tag,parent);
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
var xprefs__14984 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14987 = (cljs.core.truth_((function (){var and__3546__auto____14985 = xprefs__14984;

if(cljs.core.truth_(and__3546__auto____14985))
{return xprefs__14984.call(null,y);
} else
{return and__3546__auto____14985;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14987))
{return or__3548__auto____14987;
} else
{var or__3548__auto____14989 = (function (){var ps__14988 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14988) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14988),prefer_table)))
{} else
{}
{
var G__14995 = cljs.core.rest.call(null,ps__14988);
ps__14988 = G__14995;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14989))
{return or__3548__auto____14989;
} else
{var or__3548__auto____14991 = (function (){var ps__14990 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14990) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14990),y,prefer_table)))
{} else
{}
{
var G__14996 = cljs.core.rest.call(null,ps__14990);
ps__14990 = G__14996;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14991))
{return or__3548__auto____14991;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14998 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14998))
{return or__3548__auto____14998;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15010 = cljs.core.reduce.call(null,(function (be,p__14999){
var vec__15000__15001 = p__14999;
var k__15002 = cljs.core.nth.call(null,vec__15000__15001,0,null);
var ___15003 = cljs.core.nth.call(null,vec__15000__15001,1,null);
var e__15004 = vec__15000__15001;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15002)))
{var be2__15006 = (cljs.core.truth_((function (){var or__3548__auto____15005 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15005))
{return or__3548__auto____15005;
} else
{return cljs.core.dominates.call(null,k__15002,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15004:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15006),k__15002,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15002," and ",cljs.core.first.call(null,be2__15006),", and neither is preferred")));
}
return be2__15006;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15010))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15010));
return cljs.core.second.call(null,best_entry__15010);
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
if(cljs.core.truth_((function (){var and__3546__auto____15022 = mf;

if(cljs.core.truth_(and__3546__auto____15022))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15022;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15023 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15023))
{return or__3548__auto____15023;
} else
{var or__3548__auto____15024 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15024))
{return or__3548__auto____15024;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15028 = mf;

if(cljs.core.truth_(and__3546__auto____15028))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15028;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15029 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15029))
{return or__3548__auto____15029;
} else
{var or__3548__auto____15030 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15030))
{return or__3548__auto____15030;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15032 = mf;

if(cljs.core.truth_(and__3546__auto____15032))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15032;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15033 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15033))
{return or__3548__auto____15033;
} else
{var or__3548__auto____15035 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15035))
{return or__3548__auto____15035;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15082 = mf;

if(cljs.core.truth_(and__3546__auto____15082))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15082;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15084 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15084))
{return or__3548__auto____15084;
} else
{var or__3548__auto____15085 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15085))
{return or__3548__auto____15085;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15103 = mf;

if(cljs.core.truth_(and__3546__auto____15103))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15103;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15157 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15157))
{return or__3548__auto____15157;
} else
{var or__3548__auto____15161 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15161))
{return or__3548__auto____15161;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15165 = mf;

if(cljs.core.truth_(and__3546__auto____15165))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15165;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15167 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15167))
{return or__3548__auto____15167;
} else
{var or__3548__auto____15168 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15168))
{return or__3548__auto____15168;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15173 = mf;

if(cljs.core.truth_(and__3546__auto____15173))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15173;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15177 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15177))
{return or__3548__auto____15177;
} else
{var or__3548__auto____15179 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15179))
{return or__3548__auto____15179;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15186 = mf;

if(cljs.core.truth_(and__3546__auto____15186))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15186;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15189 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15189))
{return or__3548__auto____15189;
} else
{var or__3548__auto____15194 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15194))
{return or__3548__auto____15194;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15338 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15339 = cljs.core._get_method.call(null,mf,dispatch_val__15338);

if(cljs.core.truth_(target_fn__15339))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15338)));
}
return cljs.core.apply.call(null,target_fn__15339,args);
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
var this__15348 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15354 = this;
cljs.core.swap_BANG_.call(null,this__15354.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15354.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15354.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15354.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15365 = this;
cljs.core.swap_BANG_.call(null,this__15365.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15365.method_cache,this__15365.method_table,this__15365.cached_hierarchy,this__15365.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15369 = this;
cljs.core.swap_BANG_.call(null,this__15369.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15369.method_cache,this__15369.method_table,this__15369.cached_hierarchy,this__15369.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15371 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15371.cached_hierarchy),cljs.core.deref.call(null,this__15371.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15371.method_cache,this__15371.method_table,this__15371.cached_hierarchy,this__15371.hierarchy);
}
var temp__3695__auto____15372 = cljs.core.deref.call(null,this__15371.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15372))
{var target_fn__15373 = temp__3695__auto____15372;

return target_fn__15373;
} else
{var temp__3695__auto____15374 = cljs.core.find_and_cache_best_method.call(null,this__15371.name,dispatch_val,this__15371.hierarchy,this__15371.method_table,this__15371.prefer_table,this__15371.method_cache,this__15371.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15374))
{var target_fn__15375 = temp__3695__auto____15374;

return target_fn__15375;
} else
{return cljs.core.deref.call(null,this__15371.method_table).call(null,this__15371.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15376 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15376.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15376.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15376.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15376.method_cache,this__15376.method_table,this__15376.cached_hierarchy,this__15376.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15381 = this;
return cljs.core.deref.call(null,this__15381.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15385 = this;
return cljs.core.deref.call(null,this__15385.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15386 = this;
return cljs.core.do_dispatch.call(null,mf,this__15386.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15420__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15420 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15420__delegate.call(this, _, args);
};
G__15420.cljs$lang$maxFixedArity = 1;
G__15420.cljs$lang$applyTo = (function (arglist__15421){
var _ = cljs.core.first(arglist__15421);
var args = cljs.core.rest(arglist__15421);
return G__15420__delegate.call(this, _, args);
});
return G__15420;
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
