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
var or__3548__auto____7199 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7199))
{return or__3548__auto____7199;
} else
{var or__3548__auto____7204 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7204))
{return or__3548__auto____7204;
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
var _invoke__7512 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7225 = this$;

if(cljs.core.truth_(and__3546__auto____7225))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7225;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7227 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7227))
{return or__3548__auto____7227;
} else
{var or__3548__auto____7228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7228))
{return or__3548__auto____7228;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7514 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7231 = this$;

if(cljs.core.truth_(and__3546__auto____7231))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7231;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7233 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7233))
{return or__3548__auto____7233;
} else
{var or__3548__auto____7234 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7234))
{return or__3548__auto____7234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7516 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7237 = this$;

if(cljs.core.truth_(and__3546__auto____7237))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7237;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7239 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{var or__3548__auto____7240 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7240))
{return or__3548__auto____7240;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7518 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7243 = this$;

if(cljs.core.truth_(and__3546__auto____7243))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7243;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7244 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{var or__3548__auto____7246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7246))
{return or__3548__auto____7246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7520 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7248 = this$;

if(cljs.core.truth_(and__3546__auto____7248))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7248;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7250 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7250))
{return or__3548__auto____7250;
} else
{var or__3548__auto____7252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7522 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7254 = this$;

if(cljs.core.truth_(and__3546__auto____7254))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7254;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7285 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{var or__3548__auto____7288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7524 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = this$;

if(cljs.core.truth_(and__3546__auto____7293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7526 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7340 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7528 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7345 = this$;

if(cljs.core.truth_(and__3546__auto____7345))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7345;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{var or__3548__auto____7362 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7530 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7367 = this$;

if(cljs.core.truth_(and__3546__auto____7367))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7367;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7371 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7374 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7533 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7379 = this$;

if(cljs.core.truth_(and__3546__auto____7379))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7379;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7383 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7383))
{return or__3548__auto____7383;
} else
{var or__3548__auto____7385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7535 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7389 = this$;

if(cljs.core.truth_(and__3546__auto____7389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{var or__3548__auto____7396 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7537 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7548 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7412 = this$;

if(cljs.core.truth_(and__3546__auto____7412))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7412;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7428 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7549 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7435 = this$;

if(cljs.core.truth_(and__3546__auto____7435))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7435;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7443 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7443))
{return or__3548__auto____7443;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7550 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7447 = this$;

if(cljs.core.truth_(and__3546__auto____7447))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7447;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7452 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7455 = this$;

if(cljs.core.truth_(and__3546__auto____7455))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7455;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7458 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{var or__3548__auto____7460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7484 = this$;

if(cljs.core.truth_(and__3546__auto____7484))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7484;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{var or__3548__auto____7490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7492 = this$;

if(cljs.core.truth_(and__3546__auto____7492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7495 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{var or__3548__auto____7496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7554 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7498 = this$;

if(cljs.core.truth_(and__3546__auto____7498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
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
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7504 = this$;

if(cljs.core.truth_(and__3546__auto____7504))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7504;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7512.call(this,this$);
case  2 :
return _invoke__7514.call(this,this$,a);
case  3 :
return _invoke__7516.call(this,this$,a,b);
case  4 :
return _invoke__7518.call(this,this$,a,b,c);
case  5 :
return _invoke__7520.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7522.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7524.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7526.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7528.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7530.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7533.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7535.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7537.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7548.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7549.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7550.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7551.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7552.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7554.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if(cljs.core.truth_((function (){var and__3546__auto____7636 = coll;

if(cljs.core.truth_(and__3546__auto____7636))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7636;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7637 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7637))
{return or__3548__auto____7637;
} else
{var or__3548__auto____7638 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7638))
{return or__3548__auto____7638;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7639 = coll;

if(cljs.core.truth_(and__3546__auto____7639))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7639;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7640 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7640))
{return or__3548__auto____7640;
} else
{var or__3548__auto____7641 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7641))
{return or__3548__auto____7641;
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
var _nth__7651 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7645 = coll;

if(cljs.core.truth_(and__3546__auto____7645))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7645;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7646 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7646))
{return or__3548__auto____7646;
} else
{var or__3548__auto____7647 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7647))
{return or__3548__auto____7647;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7652 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7648 = coll;

if(cljs.core.truth_(and__3546__auto____7648))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7648;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7649 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7649))
{return or__3548__auto____7649;
} else
{var or__3548__auto____7650 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7650))
{return or__3548__auto____7650;
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
return _nth__7651.call(this,coll,n);
case  3 :
return _nth__7652.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7662 = coll;

if(cljs.core.truth_(and__3546__auto____7662))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7662;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7663 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7663))
{return or__3548__auto____7663;
} else
{var or__3548__auto____7664 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7664))
{return or__3548__auto____7664;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7665 = coll;

if(cljs.core.truth_(and__3546__auto____7665))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7665;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7666 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7666))
{return or__3548__auto____7666;
} else
{var or__3548__auto____7667 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
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
var _lookup__7685 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7673 = o;

if(cljs.core.truth_(and__3546__auto____7673))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7673;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7674 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{var or__3548__auto____7675 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7686 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7678 = o;

if(cljs.core.truth_(and__3546__auto____7678))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7678;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7680 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
} else
{var or__3548__auto____7683 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
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
return _lookup__7685.call(this,o,k);
case  3 :
return _lookup__7686.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7697 = coll;

if(cljs.core.truth_(and__3546__auto____7697))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7697;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7698 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{var or__3548__auto____7699 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7704 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7706 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7717 = coll;

if(cljs.core.truth_(and__3546__auto____7717))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7717;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7719 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7759 = coll;

if(cljs.core.truth_(and__3546__auto____7759))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7759;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7811 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{var or__3548__auto____7812 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7817 = coll;

if(cljs.core.truth_(and__3546__auto____7817))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7817;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7822 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{var or__3548__auto____7825 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7830 = coll;

if(cljs.core.truth_(and__3546__auto____7830))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7830;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7836 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{var or__3548__auto____7839 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7842 = coll;

if(cljs.core.truth_(and__3546__auto____7842))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7842;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7845 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7855 = o;

if(cljs.core.truth_(and__3546__auto____7855))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7855;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7860 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7867 = o;

if(cljs.core.truth_(and__3546__auto____7867))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7867;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7868 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{var or__3548__auto____7869 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7874 = o;

if(cljs.core.truth_(and__3546__auto____7874))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7874;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7877 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{var or__3548__auto____7878 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7938 = o;

if(cljs.core.truth_(and__3546__auto____7938))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7938;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7941 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{var or__3548__auto____7942 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
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
var _reduce__7967 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7951 = coll;

if(cljs.core.truth_(and__3546__auto____7951))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7951;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7954 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7968 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7957 = coll;

if(cljs.core.truth_(and__3546__auto____7957))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7957;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7960 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{var or__3548__auto____7963 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
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
return _reduce__7967.call(this,coll,f);
case  3 :
return _reduce__7968.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7973 = o;

if(cljs.core.truth_(and__3546__auto____7973))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7973;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7975 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{var or__3548__auto____7977 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7981 = o;

if(cljs.core.truth_(and__3546__auto____7981))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7981;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7984 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{var or__3548__auto____7986 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7996 = o;

if(cljs.core.truth_(and__3546__auto____7996))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7996;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8001 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{var or__3548__auto____8004 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
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
if(cljs.core.truth_((function (){var and__3546__auto____8013 = o;

if(cljs.core.truth_(and__3546__auto____8013))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8013;
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
if(cljs.core.truth_((function (){var and__3546__auto____8052 = d;

if(cljs.core.truth_(and__3546__auto____8052))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8052;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8054 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{var or__3548__auto____8055 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8060 = this$;

if(cljs.core.truth_(and__3546__auto____8060))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8060;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8114 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{var or__3548__auto____8116 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8119 = this$;

if(cljs.core.truth_(and__3546__auto____8119))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8119;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8120 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{var or__3548__auto____8125 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8126 = this$;

if(cljs.core.truth_(and__3546__auto____8126))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8126;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8128 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{var or__3548__auto____8133 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
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
var G__8257 = null;
var G__8257__8258 = (function (o,k){
return null;
});
var G__8257__8259 = (function (o,k,not_found){
return not_found;
});
G__8257 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8257__8258.call(this,o,k);
case  3 :
return G__8257__8259.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8257;
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
var G__8263 = null;
var G__8263__8264 = (function (_,f){
return f.call(null);
});
var G__8263__8265 = (function (_,f,start){
return start;
});
G__8263 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8263__8264.call(this,_,f);
case  3 :
return G__8263__8265.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8263;
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
var G__8279 = null;
var G__8279__8280 = (function (_,n){
return null;
});
var G__8279__8281 = (function (_,n,not_found){
return not_found;
});
G__8279 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8279__8280.call(this,_,n);
case  3 :
return G__8279__8281.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8279;
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
var ci_reduce__8345 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8334 = cljs.core._nth.call(null,cicoll,0);
var n__8335 = 1;

while(true){
if(cljs.core.truth_((n__8335 < cljs.core._count.call(null,cicoll))))
{{
var G__8349 = f.call(null,val__8334,cljs.core._nth.call(null,cicoll,n__8335));
var G__8350 = (n__8335 + 1);
val__8334 = G__8349;
n__8335 = G__8350;
continue;
}
} else
{return val__8334;
}
break;
}
}
});
var ci_reduce__8346 = (function (cicoll,f,val){
var val__8337 = val;
var n__8338 = 0;

while(true){
if(cljs.core.truth_((n__8338 < cljs.core._count.call(null,cicoll))))
{{
var G__8351 = f.call(null,val__8337,cljs.core._nth.call(null,cicoll,n__8338));
var G__8352 = (n__8338 + 1);
val__8337 = G__8351;
n__8338 = G__8352;
continue;
}
} else
{return val__8337;
}
break;
}
});
var ci_reduce__8347 = (function (cicoll,f,val,idx){
var val__8343 = val;
var n__8344 = idx;

while(true){
if(cljs.core.truth_((n__8344 < cljs.core._count.call(null,cicoll))))
{{
var G__8353 = f.call(null,val__8343,cljs.core._nth.call(null,cicoll,n__8344));
var G__8354 = (n__8344 + 1);
val__8343 = G__8353;
n__8344 = G__8354;
continue;
}
} else
{return val__8343;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8345.call(this,cicoll,f);
case  3 :
return ci_reduce__8346.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8347.call(this,cicoll,f,val,idx);
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
var this__8364 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8436 = null;
var G__8436__8437 = (function (_,f){
var this__8413 = this;
return cljs.core.ci_reduce.call(null,this__8413.a,f,(this__8413.a[this__8413.i]),(this__8413.i + 1));
});
var G__8436__8438 = (function (_,f,start){
var this__8414 = this;
return cljs.core.ci_reduce.call(null,this__8414.a,f,start,this__8414.i);
});
G__8436 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8436__8437.call(this,_,f);
case  3 :
return G__8436__8438.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8436;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8415 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8416 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8442 = null;
var G__8442__8443 = (function (coll,n){
var this__8417 = this;
var i__8418 = (n + this__8417.i);

if(cljs.core.truth_((i__8418 < this__8417.a.length)))
{return (this__8417.a[i__8418]);
} else
{return null;
}
});
var G__8442__8447 = (function (coll,n,not_found){
var this__8419 = this;
var i__8420 = (n + this__8419.i);

if(cljs.core.truth_((i__8420 < this__8419.a.length)))
{return (this__8419.a[i__8420]);
} else
{return not_found;
}
});
G__8442 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8442__8443.call(this,coll,n);
case  3 :
return G__8442__8447.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8442;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8425 = this;
return (this__8425.a.length - this__8425.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8429 = this;
return (this__8429.a[this__8429.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8431 = this;
if(cljs.core.truth_(((this__8431.i + 1) < this__8431.a.length)))
{return (new cljs.core.IndexedSeq(this__8431.a,(this__8431.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8433 = this;
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
var G__8479 = null;
var G__8479__8480 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8479__8481 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8479 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8479__8480.call(this,array,f);
case  3 :
return G__8479__8481.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8479;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8486 = null;
var G__8486__8487 = (function (array,k){
return (array[k]);
});
var G__8486__8488 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8486 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8486__8487.call(this,array,k);
case  3 :
return G__8486__8488.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8486;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8490 = null;
var G__8490__8491 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8490__8492 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8490 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8490__8491.call(this,array,n);
case  3 :
return G__8490__8492.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8490;
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
var temp__3698__auto____8501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8501))
{var s__8502 = temp__3698__auto____8501;

return cljs.core._first.call(null,s__8502);
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
var G__8572 = cljs.core.next.call(null,s);
s = G__8572;
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
var s__8581 = cljs.core.seq.call(null,x);
var n__8582 = 0;

while(true){
if(cljs.core.truth_(s__8581))
{{
var G__8584 = cljs.core.next.call(null,s__8581);
var G__8585 = (n__8582 + 1);
s__8581 = G__8584;
n__8582 = G__8585;
continue;
}
} else
{return n__8582;
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
var conj__8597 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8598 = (function() { 
var G__8600__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8601 = conj.call(null,coll,x);
var G__8603 = cljs.core.first.call(null,xs);
var G__8605 = cljs.core.next.call(null,xs);
coll = G__8601;
x = G__8603;
xs = G__8605;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8600 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8600__delegate.call(this, coll, x, xs);
};
G__8600.cljs$lang$maxFixedArity = 2;
G__8600.cljs$lang$applyTo = (function (arglist__8611){
var coll = cljs.core.first(arglist__8611);
var x = cljs.core.first(cljs.core.next(arglist__8611));
var xs = cljs.core.rest(cljs.core.next(arglist__8611));
return G__8600__delegate.call(this, coll, x, xs);
});
return G__8600;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8597.call(this,coll,x);
default:
return conj__8598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8598.cljs$lang$applyTo;
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
var nth__8624 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8625 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8624.call(this,coll,n);
case  3 :
return nth__8625.call(this,coll,n,not_found);
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
var get__8642 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8643 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8642.call(this,o,k);
case  3 :
return get__8643.call(this,o,k,not_found);
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
var assoc__8653 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8655 = (function() { 
var G__8660__delegate = function (coll,k,v,kvs){
while(true){
var ret__8648 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8662 = ret__8648;
var G__8663 = cljs.core.first.call(null,kvs);
var G__8664 = cljs.core.second.call(null,kvs);
var G__8665 = cljs.core.nnext.call(null,kvs);
coll = G__8662;
k = G__8663;
v = G__8664;
kvs = G__8665;
continue;
}
} else
{return ret__8648;
}
break;
}
};
var G__8660 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8660__delegate.call(this, coll, k, v, kvs);
};
G__8660.cljs$lang$maxFixedArity = 3;
G__8660.cljs$lang$applyTo = (function (arglist__8669){
var coll = cljs.core.first(arglist__8669);
var k = cljs.core.first(cljs.core.next(arglist__8669));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8669)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8669)));
return G__8660__delegate.call(this, coll, k, v, kvs);
});
return G__8660;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8653.call(this,coll,k,v);
default:
return assoc__8655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8655.cljs$lang$applyTo;
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
var dissoc__8678 = (function (coll){
return coll;
});
var dissoc__8679 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8680 = (function() { 
var G__8683__delegate = function (coll,k,ks){
while(true){
var ret__8677 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8689 = ret__8677;
var G__8690 = cljs.core.first.call(null,ks);
var G__8691 = cljs.core.next.call(null,ks);
coll = G__8689;
k = G__8690;
ks = G__8691;
continue;
}
} else
{return ret__8677;
}
break;
}
};
var G__8683 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8683__delegate.call(this, coll, k, ks);
};
G__8683.cljs$lang$maxFixedArity = 2;
G__8683.cljs$lang$applyTo = (function (arglist__8722){
var coll = cljs.core.first(arglist__8722);
var k = cljs.core.first(cljs.core.next(arglist__8722));
var ks = cljs.core.rest(cljs.core.next(arglist__8722));
return G__8683__delegate.call(this, coll, k, ks);
});
return G__8683;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8678.call(this,coll);
case  2 :
return dissoc__8679.call(this,coll,k);
default:
return dissoc__8680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8680.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8732 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8733 = x__445__auto____8732;

if(cljs.core.truth_(and__3546__auto____8733))
{var and__3546__auto____8735 = x__445__auto____8732.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8735))
{return cljs.core.not.call(null,x__445__auto____8732.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8735;
}
} else
{return and__3546__auto____8733;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8732);
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
var disj__8812 = (function (coll){
return coll;
});
var disj__8813 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8814 = (function() { 
var G__8818__delegate = function (coll,k,ks){
while(true){
var ret__8808 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8819 = ret__8808;
var G__8820 = cljs.core.first.call(null,ks);
var G__8822 = cljs.core.next.call(null,ks);
coll = G__8819;
k = G__8820;
ks = G__8822;
continue;
}
} else
{return ret__8808;
}
break;
}
};
var G__8818 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8818__delegate.call(this, coll, k, ks);
};
G__8818.cljs$lang$maxFixedArity = 2;
G__8818.cljs$lang$applyTo = (function (arglist__8823){
var coll = cljs.core.first(arglist__8823);
var k = cljs.core.first(cljs.core.next(arglist__8823));
var ks = cljs.core.rest(cljs.core.next(arglist__8823));
return G__8818__delegate.call(this, coll, k, ks);
});
return G__8818;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8812.call(this,coll);
case  2 :
return disj__8813.call(this,coll,k);
default:
return disj__8814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8814.cljs$lang$applyTo;
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
{var x__445__auto____8834 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8842 = x__445__auto____8834;

if(cljs.core.truth_(and__3546__auto____8842))
{var and__3546__auto____8844 = x__445__auto____8834.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8844))
{return cljs.core.not.call(null,x__445__auto____8834.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8844;
}
} else
{return and__3546__auto____8842;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8834);
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
{var x__445__auto____8854 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8855 = x__445__auto____8854;

if(cljs.core.truth_(and__3546__auto____8855))
{var and__3546__auto____8856 = x__445__auto____8854.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8856))
{return cljs.core.not.call(null,x__445__auto____8854.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8856;
}
} else
{return and__3546__auto____8855;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8854);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8861 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8865 = x__445__auto____8861;

if(cljs.core.truth_(and__3546__auto____8865))
{var and__3546__auto____8866 = x__445__auto____8861.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8866))
{return cljs.core.not.call(null,x__445__auto____8861.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8866;
}
} else
{return and__3546__auto____8865;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8861);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8873 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8874 = x__445__auto____8873;

if(cljs.core.truth_(and__3546__auto____8874))
{var and__3546__auto____8876 = x__445__auto____8873.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8876))
{return cljs.core.not.call(null,x__445__auto____8873.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8876;
}
} else
{return and__3546__auto____8874;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8873);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8886 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8887 = x__445__auto____8886;

if(cljs.core.truth_(and__3546__auto____8887))
{var and__3546__auto____8888 = x__445__auto____8886.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8888))
{return cljs.core.not.call(null,x__445__auto____8886.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8888;
}
} else
{return and__3546__auto____8887;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8886);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8896 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8897 = x__445__auto____8896;

if(cljs.core.truth_(and__3546__auto____8897))
{var and__3546__auto____8898 = x__445__auto____8896.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8898))
{return cljs.core.not.call(null,x__445__auto____8896.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8898;
}
} else
{return and__3546__auto____8897;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8896);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8907 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8909 = x__445__auto____8907;

if(cljs.core.truth_(and__3546__auto____8909))
{var and__3546__auto____9002 = x__445__auto____8907.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____9002))
{return cljs.core.not.call(null,x__445__auto____8907.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____9002;
}
} else
{return and__3546__auto____8909;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8907);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__9008 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__9008.push(key);
}));
return keys__9008;
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
{var x__445__auto____9024 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9027 = x__445__auto____9024;

if(cljs.core.truth_(and__3546__auto____9027))
{var and__3546__auto____9028 = x__445__auto____9024.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9028))
{return cljs.core.not.call(null,x__445__auto____9024.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9028;
}
} else
{return and__3546__auto____9027;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9024);
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
var and__3546__auto____9119 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9119))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9120 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9120))
{return or__3548__auto____9120;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9119;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9142 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9142))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9142;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9175 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9175))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9175;
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
var and__3546__auto____9178 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9178))
{return (n == n.toFixed());
} else
{return and__3546__auto____9178;
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
if(cljs.core.truth_((function (){var and__3546__auto____9196 = coll;

if(cljs.core.truth_(and__3546__auto____9196))
{var and__3546__auto____9197 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9197))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9197;
}
} else
{return and__3546__auto____9196;
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
var distinct_QMARK___9221 = (function (x){
return true;
});
var distinct_QMARK___9222 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9223 = (function() { 
var G__9225__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9212 = cljs.core.set([y,x]);
var xs__9213 = more;

while(true){
var x__9217 = cljs.core.first.call(null,xs__9213);
var etc__9218 = cljs.core.next.call(null,xs__9213);

if(cljs.core.truth_(xs__9213))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9212,x__9217)))
{return false;
} else
{{
var G__9226 = cljs.core.conj.call(null,s__9212,x__9217);
var G__9227 = etc__9218;
s__9212 = G__9226;
xs__9213 = G__9227;
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
var G__9225 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9225__delegate.call(this, x, y, more);
};
G__9225.cljs$lang$maxFixedArity = 2;
G__9225.cljs$lang$applyTo = (function (arglist__9228){
var x = cljs.core.first(arglist__9228);
var y = cljs.core.first(cljs.core.next(arglist__9228));
var more = cljs.core.rest(cljs.core.next(arglist__9228));
return G__9225__delegate.call(this, x, y, more);
});
return G__9225;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9221.call(this,x);
case  2 :
return distinct_QMARK___9222.call(this,x,y);
default:
return distinct_QMARK___9223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9223.cljs$lang$applyTo;
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
var r__9239 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9239)))
{return r__9239;
} else
{if(cljs.core.truth_(r__9239))
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
var sort__9255 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9256 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9252 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9252,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9252);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9255.call(this,comp);
case  2 :
return sort__9256.call(this,comp,coll);
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
var sort_by__9274 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9275 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9274.call(this,keyfn,comp);
case  3 :
return sort_by__9275.call(this,keyfn,comp,coll);
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
var reduce__9280 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9281 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9280.call(this,f,val);
case  3 :
return reduce__9281.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9288 = (function (f,coll){
var temp__3695__auto____9283 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9283))
{var s__9285 = temp__3695__auto____9283;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9285),cljs.core.next.call(null,s__9285));
} else
{return f.call(null);
}
});
var seq_reduce__9289 = (function (f,val,coll){
var val__9286 = val;
var coll__9287 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9287))
{{
var G__9294 = f.call(null,val__9286,cljs.core.first.call(null,coll__9287));
var G__9295 = cljs.core.next.call(null,coll__9287);
val__9286 = G__9294;
coll__9287 = G__9295;
continue;
}
} else
{return val__9286;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9288.call(this,f,val);
case  3 :
return seq_reduce__9289.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9300 = null;
var G__9300__9301 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9300__9302 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9300 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9300__9301.call(this,coll,f);
case  3 :
return G__9300__9302.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9300;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9309 = (function (){
return 0;
});
var _PLUS___9310 = (function (x){
return x;
});
var _PLUS___9311 = (function (x,y){
return (x + y);
});
var _PLUS___9312 = (function() { 
var G__9314__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9314 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9314__delegate.call(this, x, y, more);
};
G__9314.cljs$lang$maxFixedArity = 2;
G__9314.cljs$lang$applyTo = (function (arglist__9315){
var x = cljs.core.first(arglist__9315);
var y = cljs.core.first(cljs.core.next(arglist__9315));
var more = cljs.core.rest(cljs.core.next(arglist__9315));
return G__9314__delegate.call(this, x, y, more);
});
return G__9314;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9309.call(this);
case  1 :
return _PLUS___9310.call(this,x);
case  2 :
return _PLUS___9311.call(this,x,y);
default:
return _PLUS___9312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9312.cljs$lang$applyTo;
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
var ___9325 = (function (x){
return (- x);
});
var ___9326 = (function (x,y){
return (x - y);
});
var ___9327 = (function() { 
var G__9329__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9329 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9329__delegate.call(this, x, y, more);
};
G__9329.cljs$lang$maxFixedArity = 2;
G__9329.cljs$lang$applyTo = (function (arglist__9332){
var x = cljs.core.first(arglist__9332);
var y = cljs.core.first(cljs.core.next(arglist__9332));
var more = cljs.core.rest(cljs.core.next(arglist__9332));
return G__9329__delegate.call(this, x, y, more);
});
return G__9329;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9325.call(this,x);
case  2 :
return ___9326.call(this,x,y);
default:
return ___9327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9327.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9339 = (function (){
return 1;
});
var _STAR___9340 = (function (x){
return x;
});
var _STAR___9341 = (function (x,y){
return (x * y);
});
var _STAR___9342 = (function() { 
var G__9347__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9347__delegate.call(this, x, y, more);
};
G__9347.cljs$lang$maxFixedArity = 2;
G__9347.cljs$lang$applyTo = (function (arglist__9349){
var x = cljs.core.first(arglist__9349);
var y = cljs.core.first(cljs.core.next(arglist__9349));
var more = cljs.core.rest(cljs.core.next(arglist__9349));
return G__9347__delegate.call(this, x, y, more);
});
return G__9347;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9339.call(this);
case  1 :
return _STAR___9340.call(this,x);
case  2 :
return _STAR___9341.call(this,x,y);
default:
return _STAR___9342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9342.cljs$lang$applyTo;
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
var _SLASH___9350 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9351 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9352 = (function() { 
var G__9354__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9354 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9354__delegate.call(this, x, y, more);
};
G__9354.cljs$lang$maxFixedArity = 2;
G__9354.cljs$lang$applyTo = (function (arglist__9359){
var x = cljs.core.first(arglist__9359);
var y = cljs.core.first(cljs.core.next(arglist__9359));
var more = cljs.core.rest(cljs.core.next(arglist__9359));
return G__9354__delegate.call(this, x, y, more);
});
return G__9354;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9350.call(this,x);
case  2 :
return _SLASH___9351.call(this,x,y);
default:
return _SLASH___9352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9352.cljs$lang$applyTo;
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
var _LT___9392 = (function (x){
return true;
});
var _LT___9393 = (function (x,y){
return (x < y);
});
var _LT___9394 = (function() { 
var G__9396__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9397 = y;
var G__9398 = cljs.core.first.call(null,more);
var G__9399 = cljs.core.next.call(null,more);
x = G__9397;
y = G__9398;
more = G__9399;
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
var G__9396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9396__delegate.call(this, x, y, more);
};
G__9396.cljs$lang$maxFixedArity = 2;
G__9396.cljs$lang$applyTo = (function (arglist__9400){
var x = cljs.core.first(arglist__9400);
var y = cljs.core.first(cljs.core.next(arglist__9400));
var more = cljs.core.rest(cljs.core.next(arglist__9400));
return G__9396__delegate.call(this, x, y, more);
});
return G__9396;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9392.call(this,x);
case  2 :
return _LT___9393.call(this,x,y);
default:
return _LT___9394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9394.cljs$lang$applyTo;
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
var _LT__EQ___9411 = (function (x){
return true;
});
var _LT__EQ___9412 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9413 = (function() { 
var G__9415__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9416 = y;
var G__9417 = cljs.core.first.call(null,more);
var G__9419 = cljs.core.next.call(null,more);
x = G__9416;
y = G__9417;
more = G__9419;
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
var G__9415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9415__delegate.call(this, x, y, more);
};
G__9415.cljs$lang$maxFixedArity = 2;
G__9415.cljs$lang$applyTo = (function (arglist__9421){
var x = cljs.core.first(arglist__9421);
var y = cljs.core.first(cljs.core.next(arglist__9421));
var more = cljs.core.rest(cljs.core.next(arglist__9421));
return G__9415__delegate.call(this, x, y, more);
});
return G__9415;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9411.call(this,x);
case  2 :
return _LT__EQ___9412.call(this,x,y);
default:
return _LT__EQ___9413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9413.cljs$lang$applyTo;
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
var _GT___9431 = (function (x){
return true;
});
var _GT___9432 = (function (x,y){
return (x > y);
});
var _GT___9433 = (function() { 
var G__9437__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9440 = y;
var G__9441 = cljs.core.first.call(null,more);
var G__9442 = cljs.core.next.call(null,more);
x = G__9440;
y = G__9441;
more = G__9442;
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
var G__9437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9437__delegate.call(this, x, y, more);
};
G__9437.cljs$lang$maxFixedArity = 2;
G__9437.cljs$lang$applyTo = (function (arglist__9443){
var x = cljs.core.first(arglist__9443);
var y = cljs.core.first(cljs.core.next(arglist__9443));
var more = cljs.core.rest(cljs.core.next(arglist__9443));
return G__9437__delegate.call(this, x, y, more);
});
return G__9437;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9431.call(this,x);
case  2 :
return _GT___9432.call(this,x,y);
default:
return _GT___9433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9433.cljs$lang$applyTo;
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
var _GT__EQ___9451 = (function (x){
return true;
});
var _GT__EQ___9453 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9455 = (function() { 
var G__9461__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9462 = y;
var G__9463 = cljs.core.first.call(null,more);
var G__9464 = cljs.core.next.call(null,more);
x = G__9462;
y = G__9463;
more = G__9464;
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
var G__9461 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9461__delegate.call(this, x, y, more);
};
G__9461.cljs$lang$maxFixedArity = 2;
G__9461.cljs$lang$applyTo = (function (arglist__9465){
var x = cljs.core.first(arglist__9465);
var y = cljs.core.first(cljs.core.next(arglist__9465));
var more = cljs.core.rest(cljs.core.next(arglist__9465));
return G__9461__delegate.call(this, x, y, more);
});
return G__9461;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9451.call(this,x);
case  2 :
return _GT__EQ___9453.call(this,x,y);
default:
return _GT__EQ___9455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9455.cljs$lang$applyTo;
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
var max__9469 = (function (x){
return x;
});
var max__9470 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9471 = (function() { 
var G__9473__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9473 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9473__delegate.call(this, x, y, more);
};
G__9473.cljs$lang$maxFixedArity = 2;
G__9473.cljs$lang$applyTo = (function (arglist__9477){
var x = cljs.core.first(arglist__9477);
var y = cljs.core.first(cljs.core.next(arglist__9477));
var more = cljs.core.rest(cljs.core.next(arglist__9477));
return G__9473__delegate.call(this, x, y, more);
});
return G__9473;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9469.call(this,x);
case  2 :
return max__9470.call(this,x,y);
default:
return max__9471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9471.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9487 = (function (x){
return x;
});
var min__9489 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9490 = (function() { 
var G__9548__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9548 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9548__delegate.call(this, x, y, more);
};
G__9548.cljs$lang$maxFixedArity = 2;
G__9548.cljs$lang$applyTo = (function (arglist__9551){
var x = cljs.core.first(arglist__9551);
var y = cljs.core.first(cljs.core.next(arglist__9551));
var more = cljs.core.rest(cljs.core.next(arglist__9551));
return G__9548__delegate.call(this, x, y, more);
});
return G__9548;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9487.call(this,x);
case  2 :
return min__9489.call(this,x,y);
default:
return min__9490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9490.cljs$lang$applyTo;
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
var rem__9560 = (n % d);

return cljs.core.fix.call(null,((n - rem__9560) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9561 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9561));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9562 = (function (){
return Math.random.call(null);
});
var rand__9563 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9562.call(this);
case  1 :
return rand__9563.call(this,n);
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
var _EQ__EQ___9782 = (function (x){
return true;
});
var _EQ__EQ___9783 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9784 = (function() { 
var G__9787__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9790 = y;
var G__9791 = cljs.core.first.call(null,more);
var G__9793 = cljs.core.next.call(null,more);
x = G__9790;
y = G__9791;
more = G__9793;
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
var G__9787 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9787__delegate.call(this, x, y, more);
};
G__9787.cljs$lang$maxFixedArity = 2;
G__9787.cljs$lang$applyTo = (function (arglist__9797){
var x = cljs.core.first(arglist__9797);
var y = cljs.core.first(cljs.core.next(arglist__9797));
var more = cljs.core.rest(cljs.core.next(arglist__9797));
return G__9787__delegate.call(this, x, y, more);
});
return G__9787;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9782.call(this,x);
case  2 :
return _EQ__EQ___9783.call(this,x,y);
default:
return _EQ__EQ___9784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9784.cljs$lang$applyTo;
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
var n__9812 = n;
var xs__9814 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9816 = xs__9814;

if(cljs.core.truth_(and__3546__auto____9816))
{return (n__9812 > 0);
} else
{return and__3546__auto____9816;
}
})()))
{{
var G__9820 = (n__9812 - 1);
var G__9822 = cljs.core.next.call(null,xs__9814);
n__9812 = G__9820;
xs__9814 = G__9822;
continue;
}
} else
{return xs__9814;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9834 = null;
var G__9834__9836 = (function (coll,n){
var temp__3695__auto____9827 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9827))
{var xs__9829 = temp__3695__auto____9827;

return cljs.core.first.call(null,xs__9829);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9834__9837 = (function (coll,n,not_found){
var temp__3695__auto____9831 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9831))
{var xs__9832 = temp__3695__auto____9831;

return cljs.core.first.call(null,xs__9832);
} else
{return not_found;
}
});
G__9834 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9834__9836.call(this,coll,n);
case  3 :
return G__9834__9837.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9834;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9842 = (function (){
return "";
});
var str_STAR___9843 = (function (x){
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
var str_STAR___9844 = (function() { 
var G__9846__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9847 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9848 = cljs.core.next.call(null,more);
sb = G__9847;
more = G__9848;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9846 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9846__delegate.call(this, x, ys);
};
G__9846.cljs$lang$maxFixedArity = 1;
G__9846.cljs$lang$applyTo = (function (arglist__9849){
var x = cljs.core.first(arglist__9849);
var ys = cljs.core.rest(arglist__9849);
return G__9846__delegate.call(this, x, ys);
});
return G__9846;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9842.call(this);
case  1 :
return str_STAR___9843.call(this,x);
default:
return str_STAR___9844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9844.cljs$lang$applyTo;
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
var str__9858 = (function (){
return "";
});
var str__9859 = (function (x){
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
var str__9860 = (function() { 
var G__9865__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9865 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9865__delegate.call(this, x, ys);
};
G__9865.cljs$lang$maxFixedArity = 1;
G__9865.cljs$lang$applyTo = (function (arglist__9866){
var x = cljs.core.first(arglist__9866);
var ys = cljs.core.rest(arglist__9866);
return G__9865__delegate.call(this, x, ys);
});
return G__9865;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9858.call(this);
case  1 :
return str__9859.call(this,x);
default:
return str__9860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9860.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9872 = (function (s,start){
return s.substring(start);
});
var subs__9873 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9872.call(this,s,start);
case  3 :
return subs__9873.call(this,s,start,end);
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
var symbol__9886 = (function (name){
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
var symbol__9887 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9886.call(this,ns);
case  2 :
return symbol__9887.call(this,ns,name);
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
var keyword__9894 = (function (name){
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
var keyword__9895 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9894.call(this,ns);
case  2 :
return keyword__9895.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9901 = cljs.core.seq.call(null,x);
var ys__9902 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9901)))
{return cljs.core.nil_QMARK_.call(null,ys__9902);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9902)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9901),cljs.core.first.call(null,ys__9902))))
{{
var G__9904 = cljs.core.next.call(null,xs__9901);
var G__9905 = cljs.core.next.call(null,ys__9902);
xs__9901 = G__9904;
ys__9902 = G__9905;
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
return cljs.core.reduce.call(null,(function (p1__9906_SHARP_,p2__9907_SHARP_){
return cljs.core.hash_combine.call(null,p1__9906_SHARP_,cljs.core.hash.call(null,p2__9907_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9942__9946 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9942__9946))
{var G__9950__9953 = cljs.core.first.call(null,G__9942__9946);
var vec__9951__9954 = G__9950__9953;
var key_name__9956 = cljs.core.nth.call(null,vec__9951__9954,0,null);
var f__9958 = cljs.core.nth.call(null,vec__9951__9954,1,null);
var G__9942__9959 = G__9942__9946;

var G__9950__9961 = G__9950__9953;
var G__9942__9962 = G__9942__9959;

while(true){
var vec__9963__9964 = G__9950__9961;
var key_name__9965 = cljs.core.nth.call(null,vec__9963__9964,0,null);
var f__9967 = cljs.core.nth.call(null,vec__9963__9964,1,null);
var G__9942__9968 = G__9942__9962;

var str_name__9970 = cljs.core.name.call(null,key_name__9965);

obj[str_name__9970] = f__9967;
var temp__3698__auto____9971 = cljs.core.next.call(null,G__9942__9968);

if(cljs.core.truth_(temp__3698__auto____9971))
{var G__9942__9972 = temp__3698__auto____9971;

{
var G__9977 = cljs.core.first.call(null,G__9942__9972);
var G__9978 = G__9942__9972;
G__9950__9961 = G__9977;
G__9942__9962 = G__9978;
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
var this__10015 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10016 = this;
return (new cljs.core.List(this__10016.meta,o,coll,(this__10016.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10017 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10018 = this;
return this__10018.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10019 = this;
return this__10019.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10020 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10021 = this;
return this__10021.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10046 = this;
return this__10046.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10047 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10048 = this;
return (new cljs.core.List(meta,this__10048.first,this__10048.rest,this__10048.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10049 = this;
return this__10049.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10050 = this;
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
var this__10127 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10128 = this;
return (new cljs.core.List(this__10128.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10129 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10130 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10131 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10132 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10133 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10135 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10136 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10137 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10138 = this;
return this__10138.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10139 = this;
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
list.cljs$lang$applyTo = (function (arglist__10153){
var items = cljs.core.seq( arglist__10153 );;
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
var this__10164 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10165 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10166 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10167 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10167.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10168 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10169 = this;
return this__10169.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10170 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10170.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10170.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10171 = this;
return this__10171.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10173 = this;
return (new cljs.core.Cons(meta,this__10173.first,this__10173.rest));
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
var G__10198 = null;
var G__10198__10199 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10198__10200 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10198 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10198__10199.call(this,string,f);
case  3 :
return G__10198__10200.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10198;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10203 = null;
var G__10203__10204 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10203__10205 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10203 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10203__10204.call(this,string,k);
case  3 :
return G__10203__10205.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10203;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10208 = null;
var G__10208__10209 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10208__10210 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10208 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10208__10209.call(this,string,n);
case  3 :
return G__10208__10210.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10208;
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
var G__10224 = null;
var G__10224__10225 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10224__10226 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10224 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10224__10225.call(this,this$,coll);
case  3 :
return G__10224__10226.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10224;
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
var x__10238 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10238;
} else
{lazy_seq.x = x__10238.call(null);
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
var this__10260 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10263 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10264 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10265 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10265.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10267 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10268 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10272 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10274 = this;
return this__10274.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10275 = this;
return (new cljs.core.LazySeq(meta,this__10275.realized,this__10275.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10280 = cljs.core.array.call(null);

var s__10281 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10281)))
{ary__10280.push(cljs.core.first.call(null,s__10281));
{
var G__10346 = cljs.core.next.call(null,s__10281);
s__10281 = G__10346;
continue;
}
} else
{return ary__10280;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10353 = s;
var i__10354 = n;
var sum__10355 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10356 = (i__10354 > 0);

if(cljs.core.truth_(and__3546__auto____10356))
{return cljs.core.seq.call(null,s__10353);
} else
{return and__3546__auto____10356;
}
})()))
{{
var G__10360 = cljs.core.next.call(null,s__10353);
var G__10361 = (i__10354 - 1);
var G__10362 = (sum__10355 + 1);
s__10353 = G__10360;
i__10354 = G__10361;
sum__10355 = G__10362;
continue;
}
} else
{return sum__10355;
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
var concat__10523 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10524 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10525 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10514 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10514))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10514),concat.call(null,cljs.core.rest.call(null,s__10514),y));
} else
{return y;
}
})));
});
var concat__10526 = (function() { 
var G__10542__delegate = function (x,y,zs){
var cat__10522 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10520 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10520))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10520),cat.call(null,cljs.core.rest.call(null,xys__10520),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10522.call(null,concat.call(null,x,y),zs);
};
var G__10542 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10542__delegate.call(this, x, y, zs);
};
G__10542.cljs$lang$maxFixedArity = 2;
G__10542.cljs$lang$applyTo = (function (arglist__10612){
var x = cljs.core.first(arglist__10612);
var y = cljs.core.first(cljs.core.next(arglist__10612));
var zs = cljs.core.rest(cljs.core.next(arglist__10612));
return G__10542__delegate.call(this, x, y, zs);
});
return G__10542;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10523.call(this);
case  1 :
return concat__10524.call(this,x);
case  2 :
return concat__10525.call(this,x,y);
default:
return concat__10526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10526.cljs$lang$applyTo;
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
var list_STAR___10631 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10633 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10634 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10635 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10636 = (function() { 
var G__10639__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10639 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10639__delegate.call(this, a, b, c, d, more);
};
G__10639.cljs$lang$maxFixedArity = 4;
G__10639.cljs$lang$applyTo = (function (arglist__10640){
var a = cljs.core.first(arglist__10640);
var b = cljs.core.first(cljs.core.next(arglist__10640));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10640)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10640))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10640))));
return G__10639__delegate.call(this, a, b, c, d, more);
});
return G__10639;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10631.call(this,a);
case  2 :
return list_STAR___10633.call(this,a,b);
case  3 :
return list_STAR___10634.call(this,a,b,c);
case  4 :
return list_STAR___10635.call(this,a,b,c,d);
default:
return list_STAR___10636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10636.cljs$lang$applyTo;
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
var apply__10786 = (function (f,args){
var fixed_arity__10761 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10761 + 1)) <= fixed_arity__10761)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10787 = (function (f,x,args){
var arglist__10762 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10763 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10762,fixed_arity__10763) <= fixed_arity__10763)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10762));
} else
{return f.cljs$lang$applyTo(arglist__10762);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10762));
}
});
var apply__10788 = (function (f,x,y,args){
var arglist__10764 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10765 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10764,fixed_arity__10765) <= fixed_arity__10765)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10764));
} else
{return f.cljs$lang$applyTo(arglist__10764);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10764));
}
});
var apply__10789 = (function (f,x,y,z,args){
var arglist__10766 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10767 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10766,fixed_arity__10767) <= fixed_arity__10767)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10766));
} else
{return f.cljs$lang$applyTo(arglist__10766);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10766));
}
});
var apply__10790 = (function() { 
var G__10803__delegate = function (f,a,b,c,d,args){
var arglist__10776 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10778 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10776,fixed_arity__10778) <= fixed_arity__10778)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10776));
} else
{return f.cljs$lang$applyTo(arglist__10776);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10776));
}
};
var G__10803 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10803__delegate.call(this, f, a, b, c, d, args);
};
G__10803.cljs$lang$maxFixedArity = 5;
G__10803.cljs$lang$applyTo = (function (arglist__10822){
var f = cljs.core.first(arglist__10822);
var a = cljs.core.first(cljs.core.next(arglist__10822));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10822)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10822))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10822)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10822)))));
return G__10803__delegate.call(this, f, a, b, c, d, args);
});
return G__10803;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10786.call(this,f,a);
case  3 :
return apply__10787.call(this,f,a,b);
case  4 :
return apply__10788.call(this,f,a,b,c);
case  5 :
return apply__10789.call(this,f,a,b,c,d);
default:
return apply__10790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10790.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10832){
var obj = cljs.core.first(arglist__10832);
var f = cljs.core.first(cljs.core.next(arglist__10832));
var args = cljs.core.rest(cljs.core.next(arglist__10832));
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
var not_EQ___10840 = (function (x){
return false;
});
var not_EQ___10841 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10842 = (function() { 
var G__10844__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10844 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10844__delegate.call(this, x, y, more);
};
G__10844.cljs$lang$maxFixedArity = 2;
G__10844.cljs$lang$applyTo = (function (arglist__10845){
var x = cljs.core.first(arglist__10845);
var y = cljs.core.first(cljs.core.next(arglist__10845));
var more = cljs.core.rest(cljs.core.next(arglist__10845));
return G__10844__delegate.call(this, x, y, more);
});
return G__10844;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10840.call(this,x);
case  2 :
return not_EQ___10841.call(this,x,y);
default:
return not_EQ___10842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10842.cljs$lang$applyTo;
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
var G__10865 = pred;
var G__10866 = cljs.core.next.call(null,coll);
pred = G__10865;
coll = G__10866;
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
{var or__3548__auto____10877 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10877))
{return or__3548__auto____10877;
} else
{{
var G__10882 = pred;
var G__10883 = cljs.core.next.call(null,coll);
pred = G__10882;
coll = G__10883;
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
var G__10922 = null;
var G__10922__10923 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10922__10925 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10922__10926 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10922__10928 = (function() { 
var G__10933__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10933 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10933__delegate.call(this, x, y, zs);
};
G__10933.cljs$lang$maxFixedArity = 2;
G__10933.cljs$lang$applyTo = (function (arglist__10935){
var x = cljs.core.first(arglist__10935);
var y = cljs.core.first(cljs.core.next(arglist__10935));
var zs = cljs.core.rest(cljs.core.next(arglist__10935));
return G__10933__delegate.call(this, x, y, zs);
});
return G__10933;
})()
;
G__10922 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10922__10923.call(this);
case  1 :
return G__10922__10925.call(this,x);
case  2 :
return G__10922__10926.call(this,x,y);
default:
return G__10922__10928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10922.cljs$lang$maxFixedArity = 2;
G__10922.cljs$lang$applyTo = G__10922__10928.cljs$lang$applyTo;
return G__10922;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10948__delegate = function (args){
return x;
};
var G__10948 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10948__delegate.call(this, args);
};
G__10948.cljs$lang$maxFixedArity = 0;
G__10948.cljs$lang$applyTo = (function (arglist__10949){
var args = cljs.core.seq( arglist__10949 );;
return G__10948__delegate.call(this, args);
});
return G__10948;
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
var comp__10984 = (function (){
return cljs.core.identity;
});
var comp__10985 = (function (f){
return f;
});
var comp__10986 = (function (f,g){
return (function() {
var G__10996 = null;
var G__10996__10997 = (function (){
return f.call(null,g.call(null));
});
var G__10996__10998 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10996__10999 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10996__11000 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10996__11001 = (function() { 
var G__11004__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11004 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11004__delegate.call(this, x, y, z, args);
};
G__11004.cljs$lang$maxFixedArity = 3;
G__11004.cljs$lang$applyTo = (function (arglist__11006){
var x = cljs.core.first(arglist__11006);
var y = cljs.core.first(cljs.core.next(arglist__11006));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11006)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11006)));
return G__11004__delegate.call(this, x, y, z, args);
});
return G__11004;
})()
;
G__10996 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10996__10997.call(this);
case  1 :
return G__10996__10998.call(this,x);
case  2 :
return G__10996__10999.call(this,x,y);
case  3 :
return G__10996__11000.call(this,x,y,z);
default:
return G__10996__11001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10996.cljs$lang$maxFixedArity = 3;
G__10996.cljs$lang$applyTo = G__10996__11001.cljs$lang$applyTo;
return G__10996;
})()
});
var comp__10987 = (function (f,g,h){
return (function() {
var G__11008 = null;
var G__11008__11015 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11008__11016 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11008__11017 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11008__11018 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11008__11019 = (function() { 
var G__11022__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11022__delegate.call(this, x, y, z, args);
};
G__11022.cljs$lang$maxFixedArity = 3;
G__11022.cljs$lang$applyTo = (function (arglist__11029){
var x = cljs.core.first(arglist__11029);
var y = cljs.core.first(cljs.core.next(arglist__11029));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11029)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11029)));
return G__11022__delegate.call(this, x, y, z, args);
});
return G__11022;
})()
;
G__11008 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11008__11015.call(this);
case  1 :
return G__11008__11016.call(this,x);
case  2 :
return G__11008__11017.call(this,x,y);
case  3 :
return G__11008__11018.call(this,x,y,z);
default:
return G__11008__11019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11008.cljs$lang$maxFixedArity = 3;
G__11008.cljs$lang$applyTo = G__11008__11019.cljs$lang$applyTo;
return G__11008;
})()
});
var comp__10988 = (function() { 
var G__11031__delegate = function (f1,f2,f3,fs){
var fs__10969 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11032__delegate = function (args){
var ret__10971 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10969),args);
var fs__10972 = cljs.core.next.call(null,fs__10969);

while(true){
if(cljs.core.truth_(fs__10972))
{{
var G__11034 = cljs.core.first.call(null,fs__10972).call(null,ret__10971);
var G__11035 = cljs.core.next.call(null,fs__10972);
ret__10971 = G__11034;
fs__10972 = G__11035;
continue;
}
} else
{return ret__10971;
}
break;
}
};
var G__11032 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11032__delegate.call(this, args);
};
G__11032.cljs$lang$maxFixedArity = 0;
G__11032.cljs$lang$applyTo = (function (arglist__11036){
var args = cljs.core.seq( arglist__11036 );;
return G__11032__delegate.call(this, args);
});
return G__11032;
})()
;
};
var G__11031 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11031__delegate.call(this, f1, f2, f3, fs);
};
G__11031.cljs$lang$maxFixedArity = 3;
G__11031.cljs$lang$applyTo = (function (arglist__11040){
var f1 = cljs.core.first(arglist__11040);
var f2 = cljs.core.first(cljs.core.next(arglist__11040));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11040)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11040)));
return G__11031__delegate.call(this, f1, f2, f3, fs);
});
return G__11031;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10984.call(this);
case  1 :
return comp__10985.call(this,f1);
case  2 :
return comp__10986.call(this,f1,f2);
case  3 :
return comp__10987.call(this,f1,f2,f3);
default:
return comp__10988.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10988.cljs$lang$applyTo;
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
var partial__11053 = (function (f,arg1){
return (function() { 
var G__11059__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11059 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11059__delegate.call(this, args);
};
G__11059.cljs$lang$maxFixedArity = 0;
G__11059.cljs$lang$applyTo = (function (arglist__11060){
var args = cljs.core.seq( arglist__11060 );;
return G__11059__delegate.call(this, args);
});
return G__11059;
})()
;
});
var partial__11054 = (function (f,arg1,arg2){
return (function() { 
var G__11062__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11062 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11062__delegate.call(this, args);
};
G__11062.cljs$lang$maxFixedArity = 0;
G__11062.cljs$lang$applyTo = (function (arglist__11073){
var args = cljs.core.seq( arglist__11073 );;
return G__11062__delegate.call(this, args);
});
return G__11062;
})()
;
});
var partial__11055 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11074__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11074 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11074__delegate.call(this, args);
};
G__11074.cljs$lang$maxFixedArity = 0;
G__11074.cljs$lang$applyTo = (function (arglist__11076){
var args = cljs.core.seq( arglist__11076 );;
return G__11074__delegate.call(this, args);
});
return G__11074;
})()
;
});
var partial__11056 = (function() { 
var G__11077__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11078__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11078 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11078__delegate.call(this, args);
};
G__11078.cljs$lang$maxFixedArity = 0;
G__11078.cljs$lang$applyTo = (function (arglist__11080){
var args = cljs.core.seq( arglist__11080 );;
return G__11078__delegate.call(this, args);
});
return G__11078;
})()
;
};
var G__11077 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11077__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11077.cljs$lang$maxFixedArity = 4;
G__11077.cljs$lang$applyTo = (function (arglist__11081){
var f = cljs.core.first(arglist__11081);
var arg1 = cljs.core.first(cljs.core.next(arglist__11081));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11081)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11081))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11081))));
return G__11077__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11077;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11053.call(this,f,arg1);
case  3 :
return partial__11054.call(this,f,arg1,arg2);
case  4 :
return partial__11055.call(this,f,arg1,arg2,arg3);
default:
return partial__11056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11056.cljs$lang$applyTo;
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
var fnil__11096 = (function (f,x){
return (function() {
var G__11100 = null;
var G__11100__11101 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11100__11102 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11100__11103 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11100__11104 = (function() { 
var G__11106__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11106 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11106__delegate.call(this, a, b, c, ds);
};
G__11106.cljs$lang$maxFixedArity = 3;
G__11106.cljs$lang$applyTo = (function (arglist__11107){
var a = cljs.core.first(arglist__11107);
var b = cljs.core.first(cljs.core.next(arglist__11107));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11107)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11107)));
return G__11106__delegate.call(this, a, b, c, ds);
});
return G__11106;
})()
;
G__11100 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11100__11101.call(this,a);
case  2 :
return G__11100__11102.call(this,a,b);
case  3 :
return G__11100__11103.call(this,a,b,c);
default:
return G__11100__11104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11100.cljs$lang$maxFixedArity = 3;
G__11100.cljs$lang$applyTo = G__11100__11104.cljs$lang$applyTo;
return G__11100;
})()
});
var fnil__11097 = (function (f,x,y){
return (function() {
var G__11109 = null;
var G__11109__11110 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11109__11111 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11109__11112 = (function() { 
var G__11115__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11115 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11115__delegate.call(this, a, b, c, ds);
};
G__11115.cljs$lang$maxFixedArity = 3;
G__11115.cljs$lang$applyTo = (function (arglist__11116){
var a = cljs.core.first(arglist__11116);
var b = cljs.core.first(cljs.core.next(arglist__11116));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11116)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11116)));
return G__11115__delegate.call(this, a, b, c, ds);
});
return G__11115;
})()
;
G__11109 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11109__11110.call(this,a,b);
case  3 :
return G__11109__11111.call(this,a,b,c);
default:
return G__11109__11112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11109.cljs$lang$maxFixedArity = 3;
G__11109.cljs$lang$applyTo = G__11109__11112.cljs$lang$applyTo;
return G__11109;
})()
});
var fnil__11098 = (function (f,x,y,z){
return (function() {
var G__11121 = null;
var G__11121__11125 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11121__11126 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11121__11127 = (function() { 
var G__11129__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11129 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11129__delegate.call(this, a, b, c, ds);
};
G__11129.cljs$lang$maxFixedArity = 3;
G__11129.cljs$lang$applyTo = (function (arglist__11131){
var a = cljs.core.first(arglist__11131);
var b = cljs.core.first(cljs.core.next(arglist__11131));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11131)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11131)));
return G__11129__delegate.call(this, a, b, c, ds);
});
return G__11129;
})()
;
G__11121 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11121__11125.call(this,a,b);
case  3 :
return G__11121__11126.call(this,a,b,c);
default:
return G__11121__11127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11121.cljs$lang$maxFixedArity = 3;
G__11121.cljs$lang$applyTo = G__11121__11127.cljs$lang$applyTo;
return G__11121;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11096.call(this,f,x);
case  3 :
return fnil__11097.call(this,f,x,y);
case  4 :
return fnil__11098.call(this,f,x,y,z);
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
var mapi__11148 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11145 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11145))
{var s__11146 = temp__3698__auto____11145;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11146)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11146)));
} else
{return null;
}
})));
});

return mapi__11148.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11217))
{var s__11219 = temp__3698__auto____11217;

var x__11225 = f.call(null,cljs.core.first.call(null,s__11219));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11225)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11219));
} else
{return cljs.core.cons.call(null,x__11225,keep.call(null,f,cljs.core.rest.call(null,s__11219)));
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
var keepi__11330 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11318))
{var s__11323 = temp__3698__auto____11318;

var x__11328 = f.call(null,idx,cljs.core.first.call(null,s__11323));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11328)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11323));
} else
{return cljs.core.cons.call(null,x__11328,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11323)));
}
} else
{return null;
}
})));
});

return keepi__11330.call(null,0,coll);
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
var every_pred__11555 = (function (p){
return (function() {
var ep1 = null;
var ep1__11561 = (function (){
return true;
});
var ep1__11562 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11563 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11470 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11470))
{return p.call(null,y);
} else
{return and__3546__auto____11470;
}
})());
});
var ep1__11564 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11473 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11473))
{var and__3546__auto____11478 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11478))
{return p.call(null,z);
} else
{return and__3546__auto____11478;
}
} else
{return and__3546__auto____11473;
}
})());
});
var ep1__11565 = (function() { 
var G__11585__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11479 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11479))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11479;
}
})());
};
var G__11585 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11585__delegate.call(this, x, y, z, args);
};
G__11585.cljs$lang$maxFixedArity = 3;
G__11585.cljs$lang$applyTo = (function (arglist__11586){
var x = cljs.core.first(arglist__11586);
var y = cljs.core.first(cljs.core.next(arglist__11586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11586)));
return G__11585__delegate.call(this, x, y, z, args);
});
return G__11585;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11561.call(this);
case  1 :
return ep1__11562.call(this,x);
case  2 :
return ep1__11563.call(this,x,y);
case  3 :
return ep1__11564.call(this,x,y,z);
default:
return ep1__11565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11565.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11556 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11587 = (function (){
return true;
});
var ep2__11588 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11480 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11480))
{return p2.call(null,x);
} else
{return and__3546__auto____11480;
}
})());
});
var ep2__11589 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11481 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11481))
{var and__3546__auto____11482 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11482))
{var and__3546__auto____11483 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11483))
{return p2.call(null,y);
} else
{return and__3546__auto____11483;
}
} else
{return and__3546__auto____11482;
}
} else
{return and__3546__auto____11481;
}
})());
});
var ep2__11590 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11485 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11485))
{var and__3546__auto____11487 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11487))
{var and__3546__auto____11489 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11489))
{var and__3546__auto____11490 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11490))
{var and__3546__auto____11491 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11491))
{return p2.call(null,z);
} else
{return and__3546__auto____11491;
}
} else
{return and__3546__auto____11490;
}
} else
{return and__3546__auto____11489;
}
} else
{return and__3546__auto____11487;
}
} else
{return and__3546__auto____11485;
}
})());
});
var ep2__11591 = (function() { 
var G__11593__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11493 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11493))
{return cljs.core.every_QMARK_.call(null,(function (p1__11246_SHARP_){
var and__3546__auto____11500 = p1.call(null,p1__11246_SHARP_);

if(cljs.core.truth_(and__3546__auto____11500))
{return p2.call(null,p1__11246_SHARP_);
} else
{return and__3546__auto____11500;
}
}),args);
} else
{return and__3546__auto____11493;
}
})());
};
var G__11593 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11593__delegate.call(this, x, y, z, args);
};
G__11593.cljs$lang$maxFixedArity = 3;
G__11593.cljs$lang$applyTo = (function (arglist__11594){
var x = cljs.core.first(arglist__11594);
var y = cljs.core.first(cljs.core.next(arglist__11594));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11594)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11594)));
return G__11593__delegate.call(this, x, y, z, args);
});
return G__11593;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11587.call(this);
case  1 :
return ep2__11588.call(this,x);
case  2 :
return ep2__11589.call(this,x,y);
case  3 :
return ep2__11590.call(this,x,y,z);
default:
return ep2__11591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11591.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11557 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11595 = (function (){
return true;
});
var ep3__11596 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11506 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11506))
{var and__3546__auto____11507 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11507))
{return p3.call(null,x);
} else
{return and__3546__auto____11507;
}
} else
{return and__3546__auto____11506;
}
})());
});
var ep3__11597 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11508 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11508))
{var and__3546__auto____11509 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11509))
{var and__3546__auto____11510 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11510))
{var and__3546__auto____11511 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11511))
{var and__3546__auto____11512 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11512))
{return p3.call(null,y);
} else
{return and__3546__auto____11512;
}
} else
{return and__3546__auto____11511;
}
} else
{return and__3546__auto____11510;
}
} else
{return and__3546__auto____11509;
}
} else
{return and__3546__auto____11508;
}
})());
});
var ep3__11598 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11514 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11514))
{var and__3546__auto____11515 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11515))
{var and__3546__auto____11517 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11517))
{var and__3546__auto____11519 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11519))
{var and__3546__auto____11520 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11520))
{var and__3546__auto____11522 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11522))
{var and__3546__auto____11523 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11523))
{var and__3546__auto____11525 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11525))
{return p3.call(null,z);
} else
{return and__3546__auto____11525;
}
} else
{return and__3546__auto____11523;
}
} else
{return and__3546__auto____11522;
}
} else
{return and__3546__auto____11520;
}
} else
{return and__3546__auto____11519;
}
} else
{return and__3546__auto____11517;
}
} else
{return and__3546__auto____11515;
}
} else
{return and__3546__auto____11514;
}
})());
});
var ep3__11599 = (function() { 
var G__11601__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11534 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11534))
{return cljs.core.every_QMARK_.call(null,(function (p1__11248_SHARP_){
var and__3546__auto____11541 = p1.call(null,p1__11248_SHARP_);

if(cljs.core.truth_(and__3546__auto____11541))
{var and__3546__auto____11542 = p2.call(null,p1__11248_SHARP_);

if(cljs.core.truth_(and__3546__auto____11542))
{return p3.call(null,p1__11248_SHARP_);
} else
{return and__3546__auto____11542;
}
} else
{return and__3546__auto____11541;
}
}),args);
} else
{return and__3546__auto____11534;
}
})());
};
var G__11601 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11601__delegate.call(this, x, y, z, args);
};
G__11601.cljs$lang$maxFixedArity = 3;
G__11601.cljs$lang$applyTo = (function (arglist__11602){
var x = cljs.core.first(arglist__11602);
var y = cljs.core.first(cljs.core.next(arglist__11602));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11602)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11602)));
return G__11601__delegate.call(this, x, y, z, args);
});
return G__11601;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11595.call(this);
case  1 :
return ep3__11596.call(this,x);
case  2 :
return ep3__11597.call(this,x,y);
case  3 :
return ep3__11598.call(this,x,y,z);
default:
return ep3__11599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11599.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11558 = (function() { 
var G__11603__delegate = function (p1,p2,p3,ps){
var ps__11543 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11604 = (function (){
return true;
});
var epn__11605 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11251_SHARP_){
return p1__11251_SHARP_.call(null,x);
}),ps__11543);
});
var epn__11606 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11253_SHARP_){
var and__3546__auto____11545 = p1__11253_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11545))
{return p1__11253_SHARP_.call(null,y);
} else
{return and__3546__auto____11545;
}
}),ps__11543);
});
var epn__11607 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11255_SHARP_){
var and__3546__auto____11548 = p1__11255_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11548))
{var and__3546__auto____11550 = p1__11255_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11550))
{return p1__11255_SHARP_.call(null,z);
} else
{return and__3546__auto____11550;
}
} else
{return and__3546__auto____11548;
}
}),ps__11543);
});
var epn__11608 = (function() { 
var G__11610__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11552 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11552))
{return cljs.core.every_QMARK_.call(null,(function (p1__11257_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11257_SHARP_,args);
}),ps__11543);
} else
{return and__3546__auto____11552;
}
})());
};
var G__11610 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11610__delegate.call(this, x, y, z, args);
};
G__11610.cljs$lang$maxFixedArity = 3;
G__11610.cljs$lang$applyTo = (function (arglist__11611){
var x = cljs.core.first(arglist__11611);
var y = cljs.core.first(cljs.core.next(arglist__11611));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11611)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11611)));
return G__11610__delegate.call(this, x, y, z, args);
});
return G__11610;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11604.call(this);
case  1 :
return epn__11605.call(this,x);
case  2 :
return epn__11606.call(this,x,y);
case  3 :
return epn__11607.call(this,x,y,z);
default:
return epn__11608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11608.cljs$lang$applyTo;
return epn;
})()
};
var G__11603 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11603__delegate.call(this, p1, p2, p3, ps);
};
G__11603.cljs$lang$maxFixedArity = 3;
G__11603.cljs$lang$applyTo = (function (arglist__11612){
var p1 = cljs.core.first(arglist__11612);
var p2 = cljs.core.first(cljs.core.next(arglist__11612));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11612)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11612)));
return G__11603__delegate.call(this, p1, p2, p3, ps);
});
return G__11603;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11555.call(this,p1);
case  2 :
return every_pred__11556.call(this,p1,p2);
case  3 :
return every_pred__11557.call(this,p1,p2,p3);
default:
return every_pred__11558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11558.cljs$lang$applyTo;
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
var some_fn__11779 = (function (p){
return (function() {
var sp1 = null;
var sp1__11785 = (function (){
return null;
});
var sp1__11786 = (function (x){
return p.call(null,x);
});
var sp1__11787 = (function (x,y){
var or__3548__auto____11666 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11666))
{return or__3548__auto____11666;
} else
{return p.call(null,y);
}
});
var sp1__11788 = (function (x,y,z){
var or__3548__auto____11667 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11667))
{return or__3548__auto____11667;
} else
{var or__3548__auto____11668 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11668))
{return or__3548__auto____11668;
} else
{return p.call(null,z);
}
}
});
var sp1__11789 = (function() { 
var G__11794__delegate = function (x,y,z,args){
var or__3548__auto____11669 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11669))
{return or__3548__auto____11669;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11794 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11794__delegate.call(this, x, y, z, args);
};
G__11794.cljs$lang$maxFixedArity = 3;
G__11794.cljs$lang$applyTo = (function (arglist__11796){
var x = cljs.core.first(arglist__11796);
var y = cljs.core.first(cljs.core.next(arglist__11796));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11796)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11796)));
return G__11794__delegate.call(this, x, y, z, args);
});
return G__11794;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11785.call(this);
case  1 :
return sp1__11786.call(this,x);
case  2 :
return sp1__11787.call(this,x,y);
case  3 :
return sp1__11788.call(this,x,y,z);
default:
return sp1__11789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11789.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11780 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11799 = (function (){
return null;
});
var sp2__11800 = (function (x){
var or__3548__auto____11670 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11670))
{return or__3548__auto____11670;
} else
{return p2.call(null,x);
}
});
var sp2__11801 = (function (x,y){
var or__3548__auto____11672 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11672))
{return or__3548__auto____11672;
} else
{var or__3548__auto____11673 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11673))
{return or__3548__auto____11673;
} else
{var or__3548__auto____11675 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11675))
{return or__3548__auto____11675;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11802 = (function (x,y,z){
var or__3548__auto____11695 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11695))
{return or__3548__auto____11695;
} else
{var or__3548__auto____11696 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11696))
{return or__3548__auto____11696;
} else
{var or__3548__auto____11698 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11698))
{return or__3548__auto____11698;
} else
{var or__3548__auto____11699 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11699))
{return or__3548__auto____11699;
} else
{var or__3548__auto____11700 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11700))
{return or__3548__auto____11700;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11803 = (function() { 
var G__11811__delegate = function (x,y,z,args){
var or__3548__auto____11706 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11706))
{return or__3548__auto____11706;
} else
{return cljs.core.some.call(null,(function (p1__11462_SHARP_){
var or__3548__auto____11709 = p1.call(null,p1__11462_SHARP_);

if(cljs.core.truth_(or__3548__auto____11709))
{return or__3548__auto____11709;
} else
{return p2.call(null,p1__11462_SHARP_);
}
}),args);
}
};
var G__11811 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11811__delegate.call(this, x, y, z, args);
};
G__11811.cljs$lang$maxFixedArity = 3;
G__11811.cljs$lang$applyTo = (function (arglist__11814){
var x = cljs.core.first(arglist__11814);
var y = cljs.core.first(cljs.core.next(arglist__11814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11814)));
return G__11811__delegate.call(this, x, y, z, args);
});
return G__11811;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11799.call(this);
case  1 :
return sp2__11800.call(this,x);
case  2 :
return sp2__11801.call(this,x,y);
case  3 :
return sp2__11802.call(this,x,y,z);
default:
return sp2__11803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11803.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11781 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11817 = (function (){
return null;
});
var sp3__11818 = (function (x){
var or__3548__auto____11710 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11710))
{return or__3548__auto____11710;
} else
{var or__3548__auto____11711 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11711))
{return or__3548__auto____11711;
} else
{return p3.call(null,x);
}
}
});
var sp3__11819 = (function (x,y){
var or__3548__auto____11713 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11713))
{return or__3548__auto____11713;
} else
{var or__3548__auto____11714 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11714))
{return or__3548__auto____11714;
} else
{var or__3548__auto____11715 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11715))
{return or__3548__auto____11715;
} else
{var or__3548__auto____11716 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11716))
{return or__3548__auto____11716;
} else
{var or__3548__auto____11718 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11718))
{return or__3548__auto____11718;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11820 = (function (x,y,z){
var or__3548__auto____11719 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11719))
{return or__3548__auto____11719;
} else
{var or__3548__auto____11720 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11720))
{return or__3548__auto____11720;
} else
{var or__3548__auto____11722 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11722))
{return or__3548__auto____11722;
} else
{var or__3548__auto____11723 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
} else
{var or__3548__auto____11724 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{var or__3548__auto____11725 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11725))
{return or__3548__auto____11725;
} else
{var or__3548__auto____11726 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11726))
{return or__3548__auto____11726;
} else
{var or__3548__auto____11727 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11727))
{return or__3548__auto____11727;
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
var sp3__11821 = (function() { 
var G__11951__delegate = function (x,y,z,args){
var or__3548__auto____11729 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11729))
{return or__3548__auto____11729;
} else
{return cljs.core.some.call(null,(function (p1__11463_SHARP_){
var or__3548__auto____11731 = p1.call(null,p1__11463_SHARP_);

if(cljs.core.truth_(or__3548__auto____11731))
{return or__3548__auto____11731;
} else
{var or__3548__auto____11732 = p2.call(null,p1__11463_SHARP_);

if(cljs.core.truth_(or__3548__auto____11732))
{return or__3548__auto____11732;
} else
{return p3.call(null,p1__11463_SHARP_);
}
}
}),args);
}
};
var G__11951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11951__delegate.call(this, x, y, z, args);
};
G__11951.cljs$lang$maxFixedArity = 3;
G__11951.cljs$lang$applyTo = (function (arglist__11954){
var x = cljs.core.first(arglist__11954);
var y = cljs.core.first(cljs.core.next(arglist__11954));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11954)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11954)));
return G__11951__delegate.call(this, x, y, z, args);
});
return G__11951;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11817.call(this);
case  1 :
return sp3__11818.call(this,x);
case  2 :
return sp3__11819.call(this,x,y);
case  3 :
return sp3__11820.call(this,x,y,z);
default:
return sp3__11821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11821.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11782 = (function() { 
var G__11958__delegate = function (p1,p2,p3,ps){
var ps__11736 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11959 = (function (){
return null;
});
var spn__11960 = (function (x){
return cljs.core.some.call(null,(function (p1__11464_SHARP_){
return p1__11464_SHARP_.call(null,x);
}),ps__11736);
});
var spn__11961 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11465_SHARP_){
var or__3548__auto____11742 = p1__11465_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11742))
{return or__3548__auto____11742;
} else
{return p1__11465_SHARP_.call(null,y);
}
}),ps__11736);
});
var spn__11962 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11466_SHARP_){
var or__3548__auto____11743 = p1__11466_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11743))
{return or__3548__auto____11743;
} else
{var or__3548__auto____11744 = p1__11466_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11744))
{return or__3548__auto____11744;
} else
{return p1__11466_SHARP_.call(null,z);
}
}
}),ps__11736);
});
var spn__11963 = (function() { 
var G__11966__delegate = function (x,y,z,args){
var or__3548__auto____11746 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11746))
{return or__3548__auto____11746;
} else
{return cljs.core.some.call(null,(function (p1__11468_SHARP_){
return cljs.core.some.call(null,p1__11468_SHARP_,args);
}),ps__11736);
}
};
var G__11966 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11966__delegate.call(this, x, y, z, args);
};
G__11966.cljs$lang$maxFixedArity = 3;
G__11966.cljs$lang$applyTo = (function (arglist__11967){
var x = cljs.core.first(arglist__11967);
var y = cljs.core.first(cljs.core.next(arglist__11967));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11967)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11967)));
return G__11966__delegate.call(this, x, y, z, args);
});
return G__11966;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11959.call(this);
case  1 :
return spn__11960.call(this,x);
case  2 :
return spn__11961.call(this,x,y);
case  3 :
return spn__11962.call(this,x,y,z);
default:
return spn__11963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11963.cljs$lang$applyTo;
return spn;
})()
};
var G__11958 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11958__delegate.call(this, p1, p2, p3, ps);
};
G__11958.cljs$lang$maxFixedArity = 3;
G__11958.cljs$lang$applyTo = (function (arglist__11972){
var p1 = cljs.core.first(arglist__11972);
var p2 = cljs.core.first(cljs.core.next(arglist__11972));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11972)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11972)));
return G__11958__delegate.call(this, p1, p2, p3, ps);
});
return G__11958;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11779.call(this,p1);
case  2 :
return some_fn__11780.call(this,p1,p2);
case  3 :
return some_fn__11781.call(this,p1,p2,p3);
default:
return some_fn__11782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11782.cljs$lang$applyTo;
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
var map__12000 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11974 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11974))
{var s__11975 = temp__3698__auto____11974;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11975)),map.call(null,f,cljs.core.rest.call(null,s__11975)));
} else
{return null;
}
})));
});
var map__12001 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11979 = cljs.core.seq.call(null,c1);
var s2__11980 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11984 = s1__11979;

if(cljs.core.truth_(and__3546__auto____11984))
{return s2__11980;
} else
{return and__3546__auto____11984;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11979),cljs.core.first.call(null,s2__11980)),map.call(null,f,cljs.core.rest.call(null,s1__11979),cljs.core.rest.call(null,s2__11980)));
} else
{return null;
}
})));
});
var map__12002 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11987 = cljs.core.seq.call(null,c1);
var s2__11988 = cljs.core.seq.call(null,c2);
var s3__11990 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11993 = s1__11987;

if(cljs.core.truth_(and__3546__auto____11993))
{var and__3546__auto____11995 = s2__11988;

if(cljs.core.truth_(and__3546__auto____11995))
{return s3__11990;
} else
{return and__3546__auto____11995;
}
} else
{return and__3546__auto____11993;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11987),cljs.core.first.call(null,s2__11988),cljs.core.first.call(null,s3__11990)),map.call(null,f,cljs.core.rest.call(null,s1__11987),cljs.core.rest.call(null,s2__11988),cljs.core.rest.call(null,s3__11990)));
} else
{return null;
}
})));
});
var map__12004 = (function() { 
var G__12021__delegate = function (f,c1,c2,c3,colls){
var step__11997 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11996 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11996)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11996),step.call(null,map.call(null,cljs.core.rest,ss__11996)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11613_SHARP_){
return cljs.core.apply.call(null,f,p1__11613_SHARP_);
}),step__11997.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12021 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12021__delegate.call(this, f, c1, c2, c3, colls);
};
G__12021.cljs$lang$maxFixedArity = 4;
G__12021.cljs$lang$applyTo = (function (arglist__12030){
var f = cljs.core.first(arglist__12030);
var c1 = cljs.core.first(cljs.core.next(arglist__12030));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12030)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12030))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12030))));
return G__12021__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12021;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12000.call(this,f,c1);
case  3 :
return map__12001.call(this,f,c1,c2);
case  4 :
return map__12002.call(this,f,c1,c2,c3);
default:
return map__12004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12004.cljs$lang$applyTo;
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
{var temp__3698__auto____12040 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12040))
{var s__12041 = temp__3698__auto____12040;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12041),take.call(null,(n - 1),cljs.core.rest.call(null,s__12041)));
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
var step__12060 = (function (n,coll){
while(true){
var s__12057 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12058 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12058))
{return s__12057;
} else
{return and__3546__auto____12058;
}
})()))
{{
var G__12061 = (n - 1);
var G__12062 = cljs.core.rest.call(null,s__12057);
n = G__12061;
coll = G__12062;
continue;
}
} else
{return s__12057;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12060.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12069 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12071 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12069.call(this,n);
case  2 :
return drop_last__12071.call(this,n,s);
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
var s__12073 = cljs.core.seq.call(null,coll);
var lead__12074 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12074))
{{
var G__12075 = cljs.core.next.call(null,s__12073);
var G__12076 = cljs.core.next.call(null,lead__12074);
s__12073 = G__12075;
lead__12074 = G__12076;
continue;
}
} else
{return s__12073;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12125 = (function (pred,coll){
while(true){
var s__12082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12083 = s__12082;

if(cljs.core.truth_(and__3546__auto____12083))
{return pred.call(null,cljs.core.first.call(null,s__12082));
} else
{return and__3546__auto____12083;
}
})()))
{{
var G__12126 = pred;
var G__12127 = cljs.core.rest.call(null,s__12082);
pred = G__12126;
coll = G__12127;
continue;
}
} else
{return s__12082;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12125.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12130 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12130))
{var s__12132 = temp__3698__auto____12130;

return cljs.core.concat.call(null,s__12132,cycle.call(null,s__12132));
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
var repeat__12148 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12149 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12148.call(this,n);
case  2 :
return repeat__12149.call(this,n,x);
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
var repeatedly__12169 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12170 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12169.call(this,n);
case  2 :
return repeatedly__12170.call(this,n,f);
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
var interleave__12197 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12183 = cljs.core.seq.call(null,c1);
var s2__12188 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12189 = s1__12183;

if(cljs.core.truth_(and__3546__auto____12189))
{return s2__12188;
} else
{return and__3546__auto____12189;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12183),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12188),interleave.call(null,cljs.core.rest.call(null,s1__12183),cljs.core.rest.call(null,s2__12188))));
} else
{return null;
}
})));
});
var interleave__12198 = (function() { 
var G__12200__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12194 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12194)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12194),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12194)));
} else
{return null;
}
})));
};
var G__12200 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12200__delegate.call(this, c1, c2, colls);
};
G__12200.cljs$lang$maxFixedArity = 2;
G__12200.cljs$lang$applyTo = (function (arglist__12201){
var c1 = cljs.core.first(arglist__12201);
var c2 = cljs.core.first(cljs.core.next(arglist__12201));
var colls = cljs.core.rest(cljs.core.next(arglist__12201));
return G__12200__delegate.call(this, c1, c2, colls);
});
return G__12200;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12197.call(this,c1,c2);
default:
return interleave__12198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12198.cljs$lang$applyTo;
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
var cat__12356 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12354 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12354))
{var coll__12355 = temp__3695__auto____12354;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12355),cat.call(null,cljs.core.rest.call(null,coll__12355),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12356.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12357 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12358 = (function() { 
var G__12364__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12364 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12364__delegate.call(this, f, coll, colls);
};
G__12364.cljs$lang$maxFixedArity = 2;
G__12364.cljs$lang$applyTo = (function (arglist__12365){
var f = cljs.core.first(arglist__12365);
var coll = cljs.core.first(cljs.core.next(arglist__12365));
var colls = cljs.core.rest(cljs.core.next(arglist__12365));
return G__12364__delegate.call(this, f, coll, colls);
});
return G__12364;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12357.call(this,f,coll);
default:
return mapcat__12358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12358.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12366 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12366))
{var s__12367 = temp__3698__auto____12366;

var f__12368 = cljs.core.first.call(null,s__12367);
var r__12369 = cljs.core.rest.call(null,s__12367);

if(cljs.core.truth_(pred.call(null,f__12368)))
{return cljs.core.cons.call(null,f__12368,filter.call(null,pred,r__12369));
} else
{return filter.call(null,pred,r__12369);
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
var walk__12379 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12379.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12378_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12378_SHARP_));
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
var partition__12431 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12432 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12398 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12398))
{var s__12399 = temp__3698__auto____12398;

var p__12417 = cljs.core.take.call(null,n,s__12399);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12417))))
{return cljs.core.cons.call(null,p__12417,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12399)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12433 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12422 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12422))
{var s__12424 = temp__3698__auto____12422;

var p__12426 = cljs.core.take.call(null,n,s__12424);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12426))))
{return cljs.core.cons.call(null,p__12426,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12424)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12426,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12431.call(this,n,step);
case  3 :
return partition__12432.call(this,n,step,pad);
case  4 :
return partition__12433.call(this,n,step,pad,coll);
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
var get_in__12449 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12450 = (function (m,ks,not_found){
var sentinel__12441 = cljs.core.lookup_sentinel;
var m__12442 = m;
var ks__12444 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12444))
{var m__12445 = cljs.core.get.call(null,m__12442,cljs.core.first.call(null,ks__12444),sentinel__12441);

if(cljs.core.truth_((sentinel__12441 === m__12445)))
{return not_found;
} else
{{
var G__12453 = sentinel__12441;
var G__12454 = m__12445;
var G__12455 = cljs.core.next.call(null,ks__12444);
sentinel__12441 = G__12453;
m__12442 = G__12454;
ks__12444 = G__12455;
continue;
}
}
} else
{return m__12442;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12449.call(this,m,ks);
case  3 :
return get_in__12450.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12457,v){
var vec__12458__12459 = p__12457;
var k__12460 = cljs.core.nth.call(null,vec__12458__12459,0,null);
var ks__12461 = cljs.core.nthnext.call(null,vec__12458__12459,1);

if(cljs.core.truth_(ks__12461))
{return cljs.core.assoc.call(null,m,k__12460,assoc_in.call(null,cljs.core.get.call(null,m,k__12460),ks__12461,v));
} else
{return cljs.core.assoc.call(null,m,k__12460,v);
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
var update_in__delegate = function (m,p__12475,f,args){
var vec__12476__12478 = p__12475;
var k__12479 = cljs.core.nth.call(null,vec__12476__12478,0,null);
var ks__12480 = cljs.core.nthnext.call(null,vec__12476__12478,1);

if(cljs.core.truth_(ks__12480))
{return cljs.core.assoc.call(null,m,k__12479,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12479),ks__12480,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12479,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12479),args));
}
};
var update_in = function (m,p__12475,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12475, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12492){
var m = cljs.core.first(arglist__12492);
var p__12475 = cljs.core.first(cljs.core.next(arglist__12492));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12492)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12492)));
return update_in__delegate.call(this, m, p__12475, f, args);
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
var this__12505 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12659 = null;
var G__12659__12660 = (function (coll,k){
var this__12513 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12659__12661 = (function (coll,k,not_found){
var this__12514 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12659 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12659__12660.call(this,coll,k);
case  3 :
return G__12659__12661.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12659;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12515 = this;
var new_array__12516 = cljs.core.aclone.call(null,this__12515.array);

(new_array__12516[k] = v);
return (new cljs.core.Vector(this__12515.meta,new_array__12516));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12663 = null;
var G__12663__12664 = (function (coll,k){
var this__12517 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12663__12665 = (function (coll,k,not_found){
var this__12518 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12663 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12663__12664.call(this,coll,k);
case  3 :
return G__12663__12665.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12663;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12520 = this;
var new_array__12565 = cljs.core.aclone.call(null,this__12520.array);

new_array__12565.push(o);
return (new cljs.core.Vector(this__12520.meta,new_array__12565));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12678 = null;
var G__12678__12679 = (function (v,f){
var this__12567 = this;
return cljs.core.ci_reduce.call(null,this__12567.array,f);
});
var G__12678__12680 = (function (v,f,start){
var this__12568 = this;
return cljs.core.ci_reduce.call(null,this__12568.array,f,start);
});
G__12678 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12678__12679.call(this,v,f);
case  3 :
return G__12678__12680.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12678;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12570 = this;
if(cljs.core.truth_((this__12570.array.length > 0)))
{var vector_seq__12576 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12570.array.length)))
{return cljs.core.cons.call(null,(this__12570.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12576.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12577 = this;
return this__12577.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12580 = this;
var count__12582 = this__12580.array.length;

if(cljs.core.truth_((count__12582 > 0)))
{return (this__12580.array[(count__12582 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12586 = this;
if(cljs.core.truth_((this__12586.array.length > 0)))
{var new_array__12587 = cljs.core.aclone.call(null,this__12586.array);

new_array__12587.pop();
return (new cljs.core.Vector(this__12586.meta,new_array__12587));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12590 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12593 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12595 = this;
return (new cljs.core.Vector(meta,this__12595.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12598 = this;
return this__12598.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12685 = null;
var G__12685__12686 = (function (coll,n){
var this__12615 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12652 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12652))
{return (n < this__12615.array.length);
} else
{return and__3546__auto____12652;
}
})()))
{return (this__12615.array[n]);
} else
{return null;
}
});
var G__12685__12687 = (function (coll,n,not_found){
var this__12653 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12654 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12654))
{return (n < this__12653.array.length);
} else
{return and__3546__auto____12654;
}
})()))
{return (this__12653.array[n]);
} else
{return not_found;
}
});
G__12685 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12685__12686.call(this,coll,n);
case  3 :
return G__12685__12687.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12685;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12655 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12655.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12703){
var args = cljs.core.seq( arglist__12703 );;
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
var this__12717 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12782 = null;
var G__12782__12784 = (function (coll,k){
var this__12719 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12782__12785 = (function (coll,k,not_found){
var this__12720 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12782 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12782__12784.call(this,coll,k);
case  3 :
return G__12782__12785.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12782;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12721 = this;
var v_pos__12722 = (this__12721.start + key);

return (new cljs.core.Subvec(this__12721.meta,cljs.core._assoc.call(null,this__12721.v,v_pos__12722,val),this__12721.start,((this__12721.end > (v_pos__12722 + 1)) ? this__12721.end : (v_pos__12722 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12794 = null;
var G__12794__12795 = (function (coll,k){
var this__12724 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12794__12796 = (function (coll,k,not_found){
var this__12726 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12794 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12794__12795.call(this,coll,k);
case  3 :
return G__12794__12796.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12794;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12727 = this;
return (new cljs.core.Subvec(this__12727.meta,cljs.core._assoc_n.call(null,this__12727.v,this__12727.end,o),this__12727.start,(this__12727.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12806 = null;
var G__12806__12807 = (function (coll,f){
var this__12729 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12806__12808 = (function (coll,f,start){
var this__12731 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12806 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12806__12807.call(this,coll,f);
case  3 :
return G__12806__12808.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12806;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12734 = this;
var subvec_seq__12742 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12734.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12734.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12742.call(null,this__12734.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12744 = this;
return (this__12744.end - this__12744.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12748 = this;
return cljs.core._nth.call(null,this__12748.v,(this__12748.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12752 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12752.start,this__12752.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12752.meta,this__12752.v,this__12752.start,(this__12752.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12757 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12765 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12767 = this;
return (new cljs.core.Subvec(meta,this__12767.v,this__12767.start,this__12767.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12769 = this;
return this__12769.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12827 = null;
var G__12827__12828 = (function (coll,n){
var this__12772 = this;
return cljs.core._nth.call(null,this__12772.v,(this__12772.start + n));
});
var G__12827__12829 = (function (coll,n,not_found){
var this__12773 = this;
return cljs.core._nth.call(null,this__12773.v,(this__12773.start + n),not_found);
});
G__12827 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12827__12828.call(this,coll,n);
case  3 :
return G__12827__12829.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12827;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12777 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12777.meta);
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
var subvec__12837 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12838 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12837.call(this,v,start);
case  3 :
return subvec__12838.call(this,v,start,end);
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
var this__12850 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12852 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12853 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12859 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12859.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12861 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12863 = this;
return cljs.core._first.call(null,this__12863.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12865 = this;
var temp__3695__auto____12868 = cljs.core.next.call(null,this__12865.front);

if(cljs.core.truth_(temp__3695__auto____12868))
{var f1__12869 = temp__3695__auto____12868;

return (new cljs.core.PersistentQueueSeq(this__12865.meta,f1__12869,this__12865.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12865.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12865.meta,this__12865.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12874 = this;
return this__12874.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12883 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12883.front,this__12883.rear));
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
var this__12906 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12908 = this;
if(cljs.core.truth_(this__12908.front))
{return (new cljs.core.PersistentQueue(this__12908.meta,(this__12908.count + 1),this__12908.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12909 = this__12908.rear;

if(cljs.core.truth_(or__3548__auto____12909))
{return or__3548__auto____12909;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12908.meta,(this__12908.count + 1),cljs.core.conj.call(null,this__12908.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12911 = this;
var rear__12931 = cljs.core.seq.call(null,this__12911.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12934 = this__12911.front;

if(cljs.core.truth_(or__3548__auto____12934))
{return or__3548__auto____12934;
} else
{return rear__12931;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12911.front,cljs.core.seq.call(null,rear__12931)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12939 = this;
return this__12939.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12942 = this;
return cljs.core._first.call(null,this__12942.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12946 = this;
if(cljs.core.truth_(this__12946.front))
{var temp__3695__auto____12948 = cljs.core.next.call(null,this__12946.front);

if(cljs.core.truth_(temp__3695__auto____12948))
{var f1__12949 = temp__3695__auto____12948;

return (new cljs.core.PersistentQueue(this__12946.meta,(this__12946.count - 1),f1__12949,this__12946.rear));
} else
{return (new cljs.core.PersistentQueue(this__12946.meta,(this__12946.count - 1),cljs.core.seq.call(null,this__12946.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12954 = this;
return cljs.core.first.call(null,this__12954.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13003 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13008 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13010 = this;
return (new cljs.core.PersistentQueue(meta,this__13010.count,this__13010.front,this__13010.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13012 = this;
return this__13012.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13014 = this;
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
var this__13044 = this;
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
var len__13068 = array.length;

var i__13069 = 0;

while(true){
if(cljs.core.truth_((i__13069 < len__13068)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13069]))))
{return i__13069;
} else
{{
var G__13075 = (i__13069 + incr);
i__13069 = G__13075;
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
var obj_map_contains_key_QMARK___13078 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13079 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13076 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13076))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13076;
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
return obj_map_contains_key_QMARK___13078.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13079.call(this,k,strobj,true_val,false_val);
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
var this__13094 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13152 = null;
var G__13152__13153 = (function (coll,k){
var this__13095 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13152__13154 = (function (coll,k,not_found){
var this__13096 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13096.strobj,(this__13096.strobj[k]),not_found);
});
G__13152 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13152__13153.call(this,coll,k);
case  3 :
return G__13152__13154.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13152;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13097 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13098 = goog.object.clone.call(null,this__13097.strobj);
var overwrite_QMARK___13099 = new_strobj__13098.hasOwnProperty(k);

(new_strobj__13098[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13099))
{return (new cljs.core.ObjMap(this__13097.meta,this__13097.keys,new_strobj__13098));
} else
{var new_keys__13101 = cljs.core.aclone.call(null,this__13097.keys);

new_keys__13101.push(k);
return (new cljs.core.ObjMap(this__13097.meta,new_keys__13101,new_strobj__13098));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13097.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13105 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13105.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13162 = null;
var G__13162__13164 = (function (coll,k){
var this__13106 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13162__13165 = (function (coll,k,not_found){
var this__13107 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13162 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13162__13164.call(this,coll,k);
case  3 :
return G__13162__13165.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13162;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13108 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13109 = this;
if(cljs.core.truth_((this__13109.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13086_SHARP_){
return cljs.core.vector.call(null,p1__13086_SHARP_,(this__13109.strobj[p1__13086_SHARP_]));
}),this__13109.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13110 = this;
return this__13110.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13111 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13112 = this;
return (new cljs.core.ObjMap(meta,this__13112.keys,this__13112.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13113 = this;
return this__13113.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13114 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13114.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13115 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13116 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13116))
{return this__13115.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13116;
}
})()))
{var new_keys__13118 = cljs.core.aclone.call(null,this__13115.keys);
var new_strobj__13119 = goog.object.clone.call(null,this__13115.strobj);

new_keys__13118.splice(cljs.core.scan_array.call(null,1,k,new_keys__13118),1);
cljs.core.js_delete.call(null,new_strobj__13119,k);
return (new cljs.core.ObjMap(this__13115.meta,new_keys__13118,new_strobj__13119));
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
var this__13207 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13257 = null;
var G__13257__13258 = (function (coll,k){
var this__13208 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13257__13259 = (function (coll,k,not_found){
var this__13209 = this;
var bucket__13210 = (this__13209.hashobj[cljs.core.hash.call(null,k)]);
var i__13212 = (cljs.core.truth_(bucket__13210)?cljs.core.scan_array.call(null,2,k,bucket__13210):null);

if(cljs.core.truth_(i__13212))
{return (bucket__13210[(i__13212 + 1)]);
} else
{return not_found;
}
});
G__13257 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13257__13258.call(this,coll,k);
case  3 :
return G__13257__13259.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13257;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13214 = this;
var h__13216 = cljs.core.hash.call(null,k);
var bucket__13217 = (this__13214.hashobj[h__13216]);

if(cljs.core.truth_(bucket__13217))
{var new_bucket__13218 = cljs.core.aclone.call(null,bucket__13217);
var new_hashobj__13219 = goog.object.clone.call(null,this__13214.hashobj);

(new_hashobj__13219[h__13216] = new_bucket__13218);
var temp__3695__auto____13222 = cljs.core.scan_array.call(null,2,k,new_bucket__13218);

if(cljs.core.truth_(temp__3695__auto____13222))
{var i__13223 = temp__3695__auto____13222;

(new_bucket__13218[(i__13223 + 1)] = v);
return (new cljs.core.HashMap(this__13214.meta,this__13214.count,new_hashobj__13219));
} else
{new_bucket__13218.push(k,v);
return (new cljs.core.HashMap(this__13214.meta,(this__13214.count + 1),new_hashobj__13219));
}
} else
{var new_hashobj__13224 = goog.object.clone.call(null,this__13214.hashobj);

(new_hashobj__13224[h__13216] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13214.meta,(this__13214.count + 1),new_hashobj__13224));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13225 = this;
var bucket__13226 = (this__13225.hashobj[cljs.core.hash.call(null,k)]);
var i__13227 = (cljs.core.truth_(bucket__13226)?cljs.core.scan_array.call(null,2,k,bucket__13226):null);

if(cljs.core.truth_(i__13227))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13268 = null;
var G__13268__13269 = (function (coll,k){
var this__13228 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13268__13270 = (function (coll,k,not_found){
var this__13229 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13268 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13268__13269.call(this,coll,k);
case  3 :
return G__13268__13270.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13268;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13230 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13237 = this;
if(cljs.core.truth_((this__13237.count > 0)))
{var hashes__13239 = cljs.core.js_keys.call(null,this__13237.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13191_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13237.hashobj[p1__13191_SHARP_])));
}),hashes__13239);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13241 = this;
return this__13241.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13242 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13243 = this;
return (new cljs.core.HashMap(meta,this__13243.count,this__13243.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13244 = this;
return this__13244.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13246 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13246.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13247 = this;
var h__13248 = cljs.core.hash.call(null,k);
var bucket__13249 = (this__13247.hashobj[h__13248]);
var i__13250 = (cljs.core.truth_(bucket__13249)?cljs.core.scan_array.call(null,2,k,bucket__13249):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13250)))
{return coll;
} else
{var new_hashobj__13251 = goog.object.clone.call(null,this__13247.hashobj);

if(cljs.core.truth_((3 > bucket__13249.length)))
{cljs.core.js_delete.call(null,new_hashobj__13251,h__13248);
} else
{var new_bucket__13252 = cljs.core.aclone.call(null,bucket__13249);

new_bucket__13252.splice(i__13250,2);
(new_hashobj__13251[h__13248] = new_bucket__13252);
}
return (new cljs.core.HashMap(this__13247.meta,(this__13247.count - 1),new_hashobj__13251));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13385 = ks.length;

var i__13387 = 0;
var out__13388 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13387 < len__13385)))
{{
var G__13391 = (i__13387 + 1);
var G__13392 = cljs.core.assoc.call(null,out__13388,(ks[i__13387]),(vs[i__13387]));
i__13387 = G__13391;
out__13388 = G__13392;
continue;
}
} else
{return out__13388;
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
var in$__13398 = cljs.core.seq.call(null,keyvals);
var out__13399 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13398))
{{
var G__13412 = cljs.core.nnext.call(null,in$__13398);
var G__13413 = cljs.core.assoc.call(null,out__13399,cljs.core.first.call(null,in$__13398),cljs.core.second.call(null,in$__13398));
in$__13398 = G__13412;
out__13399 = G__13413;
continue;
}
} else
{return out__13399;
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
hash_map.cljs$lang$applyTo = (function (arglist__13418){
var keyvals = cljs.core.seq( arglist__13418 );;
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
{return cljs.core.reduce.call(null,(function (p1__13429_SHARP_,p2__13431_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13443 = p1__13429_SHARP_;

if(cljs.core.truth_(or__3548__auto____13443))
{return or__3548__auto____13443;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13431_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13456){
var maps = cljs.core.seq( arglist__13456 );;
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
{var merge_entry__13463 = (function (m,e){
var k__13461 = cljs.core.first.call(null,e);
var v__13462 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13461)))
{return cljs.core.assoc.call(null,m,k__13461,f.call(null,cljs.core.get.call(null,m,k__13461),v__13462));
} else
{return cljs.core.assoc.call(null,m,k__13461,v__13462);
}
});
var merge2__13469 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13463,(function (){var or__3548__auto____13468 = m1;

if(cljs.core.truth_(or__3548__auto____13468))
{return or__3548__auto____13468;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13469,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13481){
var f = cljs.core.first(arglist__13481);
var maps = cljs.core.rest(arglist__13481);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13543 = cljs.core.ObjMap.fromObject([],{});
var keys__13544 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13544))
{var key__13547 = cljs.core.first.call(null,keys__13544);
var entry__13548 = cljs.core.get.call(null,map,key__13547,"﷐'user/not-found");

{
var G__13560 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13548,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13543,key__13547,entry__13548):ret__13543);
var G__13561 = cljs.core.next.call(null,keys__13544);
ret__13543 = G__13560;
keys__13544 = G__13561;
continue;
}
} else
{return ret__13543;
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
var this__13567 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13599 = null;
var G__13599__13601 = (function (coll,v){
var this__13570 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13599__13602 = (function (coll,v,not_found){
var this__13572 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13572.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13599 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13599__13601.call(this,coll,v);
case  3 :
return G__13599__13602.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13599;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13604 = null;
var G__13604__13605 = (function (coll,k){
var this__13575 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13604__13606 = (function (coll,k,not_found){
var this__13577 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13604 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13604__13605.call(this,coll,k);
case  3 :
return G__13604__13606.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13604;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13579 = this;
return (new cljs.core.Set(this__13579.meta,cljs.core.assoc.call(null,this__13579.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13581 = this;
return cljs.core.keys.call(null,this__13581.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13583 = this;
return (new cljs.core.Set(this__13583.meta,cljs.core.dissoc.call(null,this__13583.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13584 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13585 = this;
var and__3546__auto____13586 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13586))
{var and__3546__auto____13587 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13587))
{return cljs.core.every_QMARK_.call(null,(function (p1__13487_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13487_SHARP_);
}),other);
} else
{return and__3546__auto____13587;
}
} else
{return and__3546__auto____13586;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13593 = this;
return (new cljs.core.Set(meta,this__13593.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13594 = this;
return this__13594.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13596 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13596.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13633 = cljs.core.seq.call(null,coll);
var out__13634 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13633))))
{{
var G__13636 = cljs.core.rest.call(null,in$__13633);
var G__13638 = cljs.core.conj.call(null,out__13634,cljs.core.first.call(null,in$__13633));
in$__13633 = G__13636;
out__13634 = G__13638;
continue;
}
} else
{return out__13634;
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
{var n__13640 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13677 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13677))
{var e__13678 = temp__3695__auto____13677;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13678));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13640,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13631_SHARP_){
var temp__3695__auto____13696 = cljs.core.find.call(null,smap,p1__13631_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13696))
{var e__13697 = temp__3695__auto____13696;

return cljs.core.second.call(null,e__13697);
} else
{return p1__13631_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13731 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13724,seen){
while(true){
var vec__13725__13726 = p__13724;
var f__13727 = cljs.core.nth.call(null,vec__13725__13726,0,null);
var xs__13728 = vec__13725__13726;

var temp__3698__auto____13729 = cljs.core.seq.call(null,xs__13728);

if(cljs.core.truth_(temp__3698__auto____13729))
{var s__13730 = temp__3698__auto____13729;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13727)))
{{
var G__13734 = cljs.core.rest.call(null,s__13730);
var G__13735 = seen;
p__13724 = G__13734;
seen = G__13735;
continue;
}
} else
{return cljs.core.cons.call(null,f__13727,step.call(null,cljs.core.rest.call(null,s__13730),cljs.core.conj.call(null,seen,f__13727)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13731.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13745 = cljs.core.Vector.fromArray([]);
var s__13747 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13747)))
{{
var G__13757 = cljs.core.conj.call(null,ret__13745,cljs.core.first.call(null,s__13747));
var G__13758 = cljs.core.next.call(null,s__13747);
ret__13745 = G__13757;
s__13747 = G__13758;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13745);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13763 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13763))
{return or__3548__auto____13763;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13765 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13765 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13765 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13792 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13792))
{return or__3548__auto____13792;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13794 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13794 > -1)))
{return cljs.core.subs.call(null,x,2,i__13794);
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
var map__13810 = cljs.core.ObjMap.fromObject([],{});
var ks__13811 = cljs.core.seq.call(null,keys);
var vs__13814 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13821 = ks__13811;

if(cljs.core.truth_(and__3546__auto____13821))
{return vs__13814;
} else
{return and__3546__auto____13821;
}
})()))
{{
var G__13825 = cljs.core.assoc.call(null,map__13810,cljs.core.first.call(null,ks__13811),cljs.core.first.call(null,vs__13814));
var G__13826 = cljs.core.next.call(null,ks__13811);
var G__13827 = cljs.core.next.call(null,vs__13814);
map__13810 = G__13825;
ks__13811 = G__13826;
vs__13814 = G__13827;
continue;
}
} else
{return map__13810;
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
var max_key__13836 = (function (k,x){
return x;
});
var max_key__13837 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13838 = (function() { 
var G__13845__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13806_SHARP_,p2__13807_SHARP_){
return max_key.call(null,k,p1__13806_SHARP_,p2__13807_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13845 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13845__delegate.call(this, k, x, y, more);
};
G__13845.cljs$lang$maxFixedArity = 3;
G__13845.cljs$lang$applyTo = (function (arglist__13850){
var k = cljs.core.first(arglist__13850);
var x = cljs.core.first(cljs.core.next(arglist__13850));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13850)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13850)));
return G__13845__delegate.call(this, k, x, y, more);
});
return G__13845;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13836.call(this,k,x);
case  3 :
return max_key__13837.call(this,k,x,y);
default:
return max_key__13838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13838.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13859 = (function (k,x){
return x;
});
var min_key__13860 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13861 = (function() { 
var G__13865__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13830_SHARP_,p2__13831_SHARP_){
return min_key.call(null,k,p1__13830_SHARP_,p2__13831_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13865 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13865__delegate.call(this, k, x, y, more);
};
G__13865.cljs$lang$maxFixedArity = 3;
G__13865.cljs$lang$applyTo = (function (arglist__13868){
var k = cljs.core.first(arglist__13868);
var x = cljs.core.first(cljs.core.next(arglist__13868));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13868)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13868)));
return G__13865__delegate.call(this, k, x, y, more);
});
return G__13865;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13859.call(this,k,x);
case  3 :
return min_key__13860.call(this,k,x,y);
default:
return min_key__13861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13861.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13880 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13881 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13875 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13875))
{var s__13879 = temp__3698__auto____13875;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13879),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13879)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13880.call(this,n,step);
case  3 :
return partition_all__13881.call(this,n,step,coll);
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
var temp__3698__auto____13903 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13903))
{var s__13906 = temp__3698__auto____13903;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13906))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13906),take_while.call(null,pred,cljs.core.rest.call(null,s__13906)));
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
var this__13953 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13954 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14041 = null;
var G__14041__14042 = (function (rng,f){
var this__13960 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14041__14043 = (function (rng,f,s){
var this__13962 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14041 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14041__14042.call(this,rng,f);
case  3 :
return G__14041__14043.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14041;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13970 = this;
var comp__13972 = (cljs.core.truth_((this__13970.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13972.call(null,this__13970.start,this__13970.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13974 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13974.end - this__13974.start) / this__13974.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13981 = this;
return this__13981.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13983 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13983.meta,(this__13983.start + this__13983.step),this__13983.end,this__13983.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13993 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13999 = this;
return (new cljs.core.Range(meta,this__13999.start,this__13999.end,this__13999.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14026 = this;
return this__14026.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14063 = null;
var G__14063__14065 = (function (rng,n){
var this__14027 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14027.start + (n * this__14027.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14028 = (this__14027.start > this__14027.end);

if(cljs.core.truth_(and__3546__auto____14028))
{return cljs.core._EQ_.call(null,this__14027.step,0);
} else
{return and__3546__auto____14028;
}
})()))
{return this__14027.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14063__14121 = (function (rng,n,not_found){
var this__14029 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14029.start + (n * this__14029.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14034 = (this__14029.start > this__14029.end);

if(cljs.core.truth_(and__3546__auto____14034))
{return cljs.core._EQ_.call(null,this__14029.step,0);
} else
{return and__3546__auto____14034;
}
})()))
{return this__14029.start;
} else
{return not_found;
}
}
});
G__14063 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14063__14065.call(this,rng,n);
case  3 :
return G__14063__14121.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14063;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14035 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14035.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14158 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14159 = (function (end){
return range.call(null,0,end,1);
});
var range__14183 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14184 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14158.call(this);
case  1 :
return range__14159.call(this,start);
case  2 :
return range__14183.call(this,start,end);
case  3 :
return range__14184.call(this,start,end,step);
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
var temp__3698__auto____14188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14188))
{var s__14189 = temp__3698__auto____14188;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14189),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14189)));
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
var temp__3698__auto____14207 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14207))
{var s__14208 = temp__3698__auto____14207;

var fst__14210 = cljs.core.first.call(null,s__14208);
var fv__14213 = f.call(null,fst__14210);
var run__14214 = cljs.core.cons.call(null,fst__14210,cljs.core.take_while.call(null,(function (p1__14193_SHARP_){
return cljs.core._EQ_.call(null,fv__14213,f.call(null,p1__14193_SHARP_));
}),cljs.core.next.call(null,s__14208)));

return cljs.core.cons.call(null,run__14214,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14214),s__14208))));
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
var reductions__14284 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14258 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14258))
{var s__14260 = temp__3695__auto____14258;

return reductions.call(null,f,cljs.core.first.call(null,s__14260),cljs.core.rest.call(null,s__14260));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14286 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14273 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14273))
{var s__14275 = temp__3698__auto____14273;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14275)),cljs.core.rest.call(null,s__14275));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14284.call(this,f,init);
case  3 :
return reductions__14286.call(this,f,init,coll);
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
var juxt__14333 = (function (f){
return (function() {
var G__14339 = null;
var G__14339__14341 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14339__14343 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14339__14344 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14339__14345 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14339__14346 = (function() { 
var G__14351__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14351 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14351__delegate.call(this, x, y, z, args);
};
G__14351.cljs$lang$maxFixedArity = 3;
G__14351.cljs$lang$applyTo = (function (arglist__14357){
var x = cljs.core.first(arglist__14357);
var y = cljs.core.first(cljs.core.next(arglist__14357));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14357)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14357)));
return G__14351__delegate.call(this, x, y, z, args);
});
return G__14351;
})()
;
G__14339 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14339__14341.call(this);
case  1 :
return G__14339__14343.call(this,x);
case  2 :
return G__14339__14344.call(this,x,y);
case  3 :
return G__14339__14345.call(this,x,y,z);
default:
return G__14339__14346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14339.cljs$lang$maxFixedArity = 3;
G__14339.cljs$lang$applyTo = G__14339__14346.cljs$lang$applyTo;
return G__14339;
})()
});
var juxt__14335 = (function (f,g){
return (function() {
var G__14363 = null;
var G__14363__14364 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14363__14365 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14363__14366 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14363__14367 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14363__14368 = (function() { 
var G__14375__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14375 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14375__delegate.call(this, x, y, z, args);
};
G__14375.cljs$lang$maxFixedArity = 3;
G__14375.cljs$lang$applyTo = (function (arglist__14377){
var x = cljs.core.first(arglist__14377);
var y = cljs.core.first(cljs.core.next(arglist__14377));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14377)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14377)));
return G__14375__delegate.call(this, x, y, z, args);
});
return G__14375;
})()
;
G__14363 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14363__14364.call(this);
case  1 :
return G__14363__14365.call(this,x);
case  2 :
return G__14363__14366.call(this,x,y);
case  3 :
return G__14363__14367.call(this,x,y,z);
default:
return G__14363__14368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14363.cljs$lang$maxFixedArity = 3;
G__14363.cljs$lang$applyTo = G__14363__14368.cljs$lang$applyTo;
return G__14363;
})()
});
var juxt__14336 = (function (f,g,h){
return (function() {
var G__14383 = null;
var G__14383__14386 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14383__14387 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14383__14388 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14383__14389 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14383__14390 = (function() { 
var G__14392__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14392__delegate.call(this, x, y, z, args);
};
G__14392.cljs$lang$maxFixedArity = 3;
G__14392.cljs$lang$applyTo = (function (arglist__14393){
var x = cljs.core.first(arglist__14393);
var y = cljs.core.first(cljs.core.next(arglist__14393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14393)));
return G__14392__delegate.call(this, x, y, z, args);
});
return G__14392;
})()
;
G__14383 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14383__14386.call(this);
case  1 :
return G__14383__14387.call(this,x);
case  2 :
return G__14383__14388.call(this,x,y);
case  3 :
return G__14383__14389.call(this,x,y,z);
default:
return G__14383__14390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14383.cljs$lang$maxFixedArity = 3;
G__14383.cljs$lang$applyTo = G__14383__14390.cljs$lang$applyTo;
return G__14383;
})()
});
var juxt__14337 = (function() { 
var G__14394__delegate = function (f,g,h,fs){
var fs__14322 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14395 = null;
var G__14395__14397 = (function (){
return cljs.core.reduce.call(null,(function (p1__14239_SHARP_,p2__14241_SHARP_){
return cljs.core.conj.call(null,p1__14239_SHARP_,p2__14241_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14322);
});
var G__14395__14398 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14243_SHARP_,p2__14244_SHARP_){
return cljs.core.conj.call(null,p1__14243_SHARP_,p2__14244_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14322);
});
var G__14395__14399 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14245_SHARP_,p2__14246_SHARP_){
return cljs.core.conj.call(null,p1__14245_SHARP_,p2__14246_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14322);
});
var G__14395__14400 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14248_SHARP_,p2__14249_SHARP_){
return cljs.core.conj.call(null,p1__14248_SHARP_,p2__14249_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14322);
});
var G__14395__14401 = (function() { 
var G__14414__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14251_SHARP_,p2__14252_SHARP_){
return cljs.core.conj.call(null,p1__14251_SHARP_,cljs.core.apply.call(null,p2__14252_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14322);
};
var G__14414 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14414__delegate.call(this, x, y, z, args);
};
G__14414.cljs$lang$maxFixedArity = 3;
G__14414.cljs$lang$applyTo = (function (arglist__14419){
var x = cljs.core.first(arglist__14419);
var y = cljs.core.first(cljs.core.next(arglist__14419));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14419)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14419)));
return G__14414__delegate.call(this, x, y, z, args);
});
return G__14414;
})()
;
G__14395 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14395__14397.call(this);
case  1 :
return G__14395__14398.call(this,x);
case  2 :
return G__14395__14399.call(this,x,y);
case  3 :
return G__14395__14400.call(this,x,y,z);
default:
return G__14395__14401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14395.cljs$lang$maxFixedArity = 3;
G__14395.cljs$lang$applyTo = G__14395__14401.cljs$lang$applyTo;
return G__14395;
})()
};
var G__14394 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14394__delegate.call(this, f, g, h, fs);
};
G__14394.cljs$lang$maxFixedArity = 3;
G__14394.cljs$lang$applyTo = (function (arglist__14429){
var f = cljs.core.first(arglist__14429);
var g = cljs.core.first(cljs.core.next(arglist__14429));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14429)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14429)));
return G__14394__delegate.call(this, f, g, h, fs);
});
return G__14394;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14333.call(this,f);
case  2 :
return juxt__14335.call(this,f,g);
case  3 :
return juxt__14336.call(this,f,g,h);
default:
return juxt__14337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14337.cljs$lang$applyTo;
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
var dorun__14447 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14453 = cljs.core.next.call(null,coll);
coll = G__14453;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14448 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14444 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14444))
{return (n > 0);
} else
{return and__3546__auto____14444;
}
})()))
{{
var G__14458 = (n - 1);
var G__14459 = cljs.core.next.call(null,coll);
n = G__14458;
coll = G__14459;
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
return dorun__14447.call(this,n);
case  2 :
return dorun__14448.call(this,n,coll);
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
var doall__14469 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14470 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14469.call(this,n);
case  2 :
return doall__14470.call(this,n,coll);
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
var matches__14481 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14481),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14481),1)))
{return cljs.core.first.call(null,matches__14481);
} else
{return cljs.core.vec.call(null,matches__14481);
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
var matches__14483 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14483)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14483),1)))
{return cljs.core.first.call(null,matches__14483);
} else
{return cljs.core.vec.call(null,matches__14483);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14493 = cljs.core.re_find.call(null,re,s);
var match_idx__14495 = s.search(re);
var match_str__14500 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14493))?cljs.core.first.call(null,match_data__14493):match_data__14493);
var post_match__14502 = cljs.core.subs.call(null,s,(match_idx__14495 + cljs.core.count.call(null,match_str__14500)));

if(cljs.core.truth_(match_data__14493))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14493,re_seq.call(null,re,post_match__14502));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14506_SHARP_){
return print_one.call(null,p1__14506_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14516 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14516))
{var and__3546__auto____14521 = (function (){var x__445__auto____14517 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14518 = x__445__auto____14517;

if(cljs.core.truth_(and__3546__auto____14518))
{var and__3546__auto____14519 = x__445__auto____14517.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14519))
{return cljs.core.not.call(null,x__445__auto____14517.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14519;
}
} else
{return and__3546__auto____14518;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14517);
}
})();

if(cljs.core.truth_(and__3546__auto____14521))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14521;
}
} else
{return and__3546__auto____14516;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14523 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14524 = x__445__auto____14523;

if(cljs.core.truth_(and__3546__auto____14524))
{var and__3546__auto____14525 = x__445__auto____14523.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14525))
{return cljs.core.not.call(null,x__445__auto____14523.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14525;
}
} else
{return and__3546__auto____14524;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14523);
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
var first_obj__14548 = cljs.core.first.call(null,objs);
var sb__14549 = (new goog.string.StringBuffer());

var G__14550__14551 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14550__14551))
{var obj__14552 = cljs.core.first.call(null,G__14550__14551);
var G__14550__14553 = G__14550__14551;

while(true){
if(cljs.core.truth_((obj__14552 === first_obj__14548)))
{} else
{sb__14549.append(" ");
}
var G__14554__14555 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14552,opts));

if(cljs.core.truth_(G__14554__14555))
{var string__14556 = cljs.core.first.call(null,G__14554__14555);
var G__14554__14557 = G__14554__14555;

while(true){
sb__14549.append(string__14556);
var temp__3698__auto____14558 = cljs.core.next.call(null,G__14554__14557);

if(cljs.core.truth_(temp__3698__auto____14558))
{var G__14554__14559 = temp__3698__auto____14558;

{
var G__14566 = cljs.core.first.call(null,G__14554__14559);
var G__14567 = G__14554__14559;
string__14556 = G__14566;
G__14554__14557 = G__14567;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14561 = cljs.core.next.call(null,G__14550__14553);

if(cljs.core.truth_(temp__3698__auto____14561))
{var G__14550__14565 = temp__3698__auto____14561;

{
var G__14568 = cljs.core.first.call(null,G__14550__14565);
var G__14569 = G__14550__14565;
obj__14552 = G__14568;
G__14550__14553 = G__14569;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14549);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14572 = cljs.core.first.call(null,objs);

var G__14573__14574 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14573__14574))
{var obj__14575 = cljs.core.first.call(null,G__14573__14574);
var G__14573__14576 = G__14573__14574;

while(true){
if(cljs.core.truth_((obj__14575 === first_obj__14572)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14577__14578 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14575,opts));

if(cljs.core.truth_(G__14577__14578))
{var string__14579 = cljs.core.first.call(null,G__14577__14578);
var G__14577__14580 = G__14577__14578;

while(true){
cljs.core.string_print.call(null,string__14579);
var temp__3698__auto____14582 = cljs.core.next.call(null,G__14577__14580);

if(cljs.core.truth_(temp__3698__auto____14582))
{var G__14577__14583 = temp__3698__auto____14582;

{
var G__14600 = cljs.core.first.call(null,G__14577__14583);
var G__14601 = G__14577__14583;
string__14579 = G__14600;
G__14577__14580 = G__14601;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14586 = cljs.core.next.call(null,G__14573__14576);

if(cljs.core.truth_(temp__3698__auto____14586))
{var G__14573__14588 = temp__3698__auto____14586;

{
var G__14602 = cljs.core.first.call(null,G__14573__14588);
var G__14603 = G__14573__14588;
obj__14575 = G__14602;
G__14573__14576 = G__14603;
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
pr.cljs$lang$applyTo = (function (arglist__14627){
var objs = cljs.core.seq( arglist__14627 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14630){
var objs = cljs.core.seq( arglist__14630 );;
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
println.cljs$lang$applyTo = (function (arglist__14655){
var objs = cljs.core.seq( arglist__14655 );;
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
prn.cljs$lang$applyTo = (function (arglist__14680){
var objs = cljs.core.seq( arglist__14680 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14687 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14687,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14708 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14708))
{var nspc__14709 = temp__3698__auto____14708;

return cljs.core.str.call(null,nspc__14709,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14710 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14710))
{var nspc__14712 = temp__3698__auto____14710;

return cljs.core.str.call(null,nspc__14712,"/");
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
var pr_pair__14721 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14721,"{",", ","}",opts,coll);
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
var this__14768 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14769 = this;
var G__14770__14771 = cljs.core.seq.call(null,this__14769.watches);

if(cljs.core.truth_(G__14770__14771))
{var G__14773__14776 = cljs.core.first.call(null,G__14770__14771);
var vec__14775__14777 = G__14773__14776;
var key__14778 = cljs.core.nth.call(null,vec__14775__14777,0,null);
var f__14779 = cljs.core.nth.call(null,vec__14775__14777,1,null);
var G__14770__14780 = G__14770__14771;

var G__14773__14781 = G__14773__14776;
var G__14770__14782 = G__14770__14780;

while(true){
var vec__14783__14784 = G__14773__14781;
var key__14785 = cljs.core.nth.call(null,vec__14783__14784,0,null);
var f__14786 = cljs.core.nth.call(null,vec__14783__14784,1,null);
var G__14770__14787 = G__14770__14782;

f__14786.call(null,key__14785,this$,oldval,newval);
var temp__3698__auto____14788 = cljs.core.next.call(null,G__14770__14787);

if(cljs.core.truth_(temp__3698__auto____14788))
{var G__14770__14789 = temp__3698__auto____14788;

{
var G__14805 = cljs.core.first.call(null,G__14770__14789);
var G__14806 = G__14770__14789;
G__14773__14781 = G__14805;
G__14770__14782 = G__14806;
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
var this__14790 = this;
return this$.watches = cljs.core.assoc.call(null,this__14790.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14791 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14791.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14792 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14792.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14793 = this;
return this__14793.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14794 = this;
return this__14794.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14798 = this;
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
var atom__14826 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14827 = (function() { 
var G__14830__delegate = function (x,p__14815){
var map__14818__14819 = p__14815;
var map__14818__14820 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14818__14819))?cljs.core.apply.call(null,cljs.core.hash_map,map__14818__14819):map__14818__14819);
var validator__14821 = cljs.core.get.call(null,map__14818__14820,"﷐'validator");
var meta__14822 = cljs.core.get.call(null,map__14818__14820,"﷐'meta");

return (new cljs.core.Atom(x,meta__14822,validator__14821,null));
};
var G__14830 = function (x,var_args){
var p__14815 = null;
if (goog.isDef(var_args)) {
  p__14815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14830__delegate.call(this, x, p__14815);
};
G__14830.cljs$lang$maxFixedArity = 1;
G__14830.cljs$lang$applyTo = (function (arglist__14832){
var x = cljs.core.first(arglist__14832);
var p__14815 = cljs.core.rest(arglist__14832);
return G__14830__delegate.call(this, x, p__14815);
});
return G__14830;
})()
;
atom = function(x,var_args){
var p__14815 = var_args;
switch(arguments.length){
case  1 :
return atom__14826.call(this,x);
default:
return atom__14827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14827.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14837 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14837))
{var validate__14839 = temp__3698__auto____14837;

if(cljs.core.truth_(validate__14839.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14841 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14841,new_value);
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
var swap_BANG___14858 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14859 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14860 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14861 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14862 = (function() { 
var G__14864__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14864 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14864__delegate.call(this, a, f, x, y, z, more);
};
G__14864.cljs$lang$maxFixedArity = 5;
G__14864.cljs$lang$applyTo = (function (arglist__14865){
var a = cljs.core.first(arglist__14865);
var f = cljs.core.first(cljs.core.next(arglist__14865));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14865)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14865))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14865)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14865)))));
return G__14864__delegate.call(this, a, f, x, y, z, more);
});
return G__14864;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14858.call(this,a,f);
case  3 :
return swap_BANG___14859.call(this,a,f,x);
case  4 :
return swap_BANG___14860.call(this,a,f,x,y);
case  5 :
return swap_BANG___14861.call(this,a,f,x,y,z);
default:
return swap_BANG___14862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14862.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14914){
var iref = cljs.core.first(arglist__14914);
var f = cljs.core.first(cljs.core.next(arglist__14914));
var args = cljs.core.rest(cljs.core.next(arglist__14914));
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
var gensym__14931 = (function (){
return gensym.call(null,"G__");
});
var gensym__14932 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14931.call(this);
case  1 :
return gensym__14932.call(this,prefix_string);
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
var this__14942 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14942.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14943 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14943.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14943.state,this__14943.f);
}
return cljs.core.deref.call(null,this__14943.state);
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
delay.cljs$lang$applyTo = (function (arglist__14952){
var body = cljs.core.seq( arglist__14952 );;
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
var map__15012__15013 = options;
var map__15012__15014 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15012__15013))?cljs.core.apply.call(null,cljs.core.hash_map,map__15012__15013):map__15012__15013);
var keywordize_keys__15015 = cljs.core.get.call(null,map__15012__15014,"﷐'keywordize-keys");
var keyfn__15016 = (cljs.core.truth_(keywordize_keys__15015)?cljs.core.keyword:cljs.core.str);
var f__15029 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15028 = (function iter__15021(s__15022){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15022__15024 = s__15022;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15022__15024)))
{var k__15026 = cljs.core.first.call(null,s__15022__15024);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15016.call(null,k__15026),thisfn.call(null,(x[k__15026]))]),iter__15021.call(null,cljs.core.rest.call(null,s__15022__15024)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15028.call(null,cljs.core.js_keys.call(null,x));
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

return f__15029.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15033){
var x = cljs.core.first(arglist__15033);
var options = cljs.core.rest(arglist__15033);
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
var mem__15034 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15047__delegate = function (args){
var temp__3695__auto____15039 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15034),args);

if(cljs.core.truth_(temp__3695__auto____15039))
{var v__15042 = temp__3695__auto____15039;

return v__15042;
} else
{var ret__15043 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15034,cljs.core.assoc,args,ret__15043);
return ret__15043;
}
};
var G__15047 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15047__delegate.call(this, args);
};
G__15047.cljs$lang$maxFixedArity = 0;
G__15047.cljs$lang$applyTo = (function (arglist__15048){
var args = cljs.core.seq( arglist__15048 );;
return G__15047__delegate.call(this, args);
});
return G__15047;
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
var trampoline__15050 = (function (f){
while(true){
var ret__15049 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15049)))
{{
var G__15053 = ret__15049;
f = G__15053;
continue;
}
} else
{return ret__15049;
}
break;
}
});
var trampoline__15051 = (function() { 
var G__15054__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15054 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15054__delegate.call(this, f, args);
};
G__15054.cljs$lang$maxFixedArity = 1;
G__15054.cljs$lang$applyTo = (function (arglist__15055){
var f = cljs.core.first(arglist__15055);
var args = cljs.core.rest(arglist__15055);
return G__15054__delegate.call(this, f, args);
});
return G__15054;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15050.call(this,f);
default:
return trampoline__15051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15051.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15056 = (function (){
return rand.call(null,1);
});
var rand__15057 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15056.call(this);
case  1 :
return rand__15057.call(this,n);
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
var k__15064 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15064,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15064,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15092 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15094 = (function (h,child,parent){
var or__3548__auto____15071 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15071))
{return or__3548__auto____15071;
} else
{var or__3548__auto____15073 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15073))
{return or__3548__auto____15073;
} else
{var and__3546__auto____15075 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15075))
{var and__3546__auto____15077 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15077))
{var and__3546__auto____15080 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15080))
{var ret__15083 = true;
var i__15085 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15087 = cljs.core.not.call(null,ret__15083);

if(cljs.core.truth_(or__3548__auto____15087))
{return or__3548__auto____15087;
} else
{return cljs.core._EQ_.call(null,i__15085,cljs.core.count.call(null,parent));
}
})()))
{return ret__15083;
} else
{{
var G__15101 = isa_QMARK_.call(null,h,child.call(null,i__15085),parent.call(null,i__15085));
var G__15102 = (i__15085 + 1);
ret__15083 = G__15101;
i__15085 = G__15102;
continue;
}
}
break;
}
} else
{return and__3546__auto____15080;
}
} else
{return and__3546__auto____15077;
}
} else
{return and__3546__auto____15075;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15092.call(this,h,child);
case  3 :
return isa_QMARK___15094.call(this,h,child,parent);
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
var parents__15109 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15110 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15109.call(this,h);
case  2 :
return parents__15110.call(this,h,tag);
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
var ancestors__15115 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15116 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15115.call(this,h);
case  2 :
return ancestors__15116.call(this,h,tag);
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
var descendants__15119 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15120 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15119.call(this,h);
case  2 :
return descendants__15120.call(this,h,tag);
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
var derive__15326 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15327 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15313 = "﷐'parents".call(null,h);
var td__15314 = "﷐'descendants".call(null,h);
var ta__15315 = "﷐'ancestors".call(null,h);
var tf__15318 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15322 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15313.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15315.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15315.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15313,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15318.call(null,"﷐'ancestors".call(null,h),tag,td__15314,parent,ta__15315),"﷐'descendants":tf__15318.call(null,"﷐'descendants".call(null,h),parent,ta__15315,tag,td__15314)});
})());

if(cljs.core.truth_(or__3548__auto____15322))
{return or__3548__auto____15322;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15326.call(this,h,tag);
case  3 :
return derive__15327.call(this,h,tag,parent);
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
var underive__15352 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15355 = (function (h,tag,parent){
var parentMap__15340 = "﷐'parents".call(null,h);
var childsParents__15343 = (cljs.core.truth_(parentMap__15340.call(null,tag))?cljs.core.disj.call(null,parentMap__15340.call(null,tag),parent):cljs.core.set([]));
var newParents__15345 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15343))?cljs.core.assoc.call(null,parentMap__15340,tag,childsParents__15343):cljs.core.dissoc.call(null,parentMap__15340,tag));
var deriv_seq__15347 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15307_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15307_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15307_SHARP_),cljs.core.second.call(null,p1__15307_SHARP_)));
}),cljs.core.seq.call(null,newParents__15345)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15340.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15309_SHARP_,p2__15310_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15309_SHARP_,p2__15310_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15347));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15352.call(this,h,tag);
case  3 :
return underive__15355.call(this,h,tag,parent);
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
var xprefs__15371 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15374 = (cljs.core.truth_((function (){var and__3546__auto____15372 = xprefs__15371;

if(cljs.core.truth_(and__3546__auto____15372))
{return xprefs__15371.call(null,y);
} else
{return and__3546__auto____15372;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{var or__3548__auto____15377 = (function (){var ps__15376 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15376) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15376),prefer_table)))
{} else
{}
{
var G__15380 = cljs.core.rest.call(null,ps__15376);
ps__15376 = G__15380;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15377))
{return or__3548__auto____15377;
} else
{var or__3548__auto____15379 = (function (){var ps__15378 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15378) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15378),y,prefer_table)))
{} else
{}
{
var G__15381 = cljs.core.rest.call(null,ps__15378);
ps__15378 = G__15381;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15379))
{return or__3548__auto____15379;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15382 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15382))
{return or__3548__auto____15382;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15394 = cljs.core.reduce.call(null,(function (be,p__15383){
var vec__15384__15385 = p__15383;
var k__15386 = cljs.core.nth.call(null,vec__15384__15385,0,null);
var ___15387 = cljs.core.nth.call(null,vec__15384__15385,1,null);
var e__15388 = vec__15384__15385;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15386)))
{var be2__15392 = (cljs.core.truth_((function (){var or__3548__auto____15389 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{return cljs.core.dominates.call(null,k__15386,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15388:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15392),k__15386,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15386," and ",cljs.core.first.call(null,be2__15392),", and neither is preferred")));
}
return be2__15392;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15394))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15394));
return cljs.core.second.call(null,best_entry__15394);
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
if(cljs.core.truth_((function (){var and__3546__auto____15407 = mf;

if(cljs.core.truth_(and__3546__auto____15407))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15407;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15408 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15408))
{return or__3548__auto____15408;
} else
{var or__3548__auto____15410 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15410))
{return or__3548__auto____15410;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15412 = mf;

if(cljs.core.truth_(and__3546__auto____15412))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15412;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15414 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15414))
{return or__3548__auto____15414;
} else
{var or__3548__auto____15417 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15417))
{return or__3548__auto____15417;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15419 = mf;

if(cljs.core.truth_(and__3546__auto____15419))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15419;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15490 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15490))
{return or__3548__auto____15490;
} else
{var or__3548__auto____15491 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15491))
{return or__3548__auto____15491;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15494 = mf;

if(cljs.core.truth_(and__3546__auto____15494))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15494;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15498 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15498))
{return or__3548__auto____15498;
} else
{var or__3548__auto____15500 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15500))
{return or__3548__auto____15500;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15503 = mf;

if(cljs.core.truth_(and__3546__auto____15503))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15503;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15504 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15504))
{return or__3548__auto____15504;
} else
{var or__3548__auto____15505 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15505))
{return or__3548__auto____15505;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15510 = mf;

if(cljs.core.truth_(and__3546__auto____15510))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15510;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15513 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15513))
{return or__3548__auto____15513;
} else
{var or__3548__auto____15515 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15515))
{return or__3548__auto____15515;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15520 = mf;

if(cljs.core.truth_(and__3546__auto____15520))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15520;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15521 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15521))
{return or__3548__auto____15521;
} else
{var or__3548__auto____15524 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15524))
{return or__3548__auto____15524;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15525 = mf;

if(cljs.core.truth_(and__3546__auto____15525))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15525;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15528 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15528))
{return or__3548__auto____15528;
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
var dispatch_val__15592 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15593 = cljs.core._get_method.call(null,mf,dispatch_val__15592);

if(cljs.core.truth_(target_fn__15593))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15592)));
}
return cljs.core.apply.call(null,target_fn__15593,args);
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
var this__15601 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15602 = this;
cljs.core.swap_BANG_.call(null,this__15602.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15602.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15602.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15602.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15610 = this;
cljs.core.swap_BANG_.call(null,this__15610.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15610.method_cache,this__15610.method_table,this__15610.cached_hierarchy,this__15610.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15614 = this;
cljs.core.swap_BANG_.call(null,this__15614.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15614.method_cache,this__15614.method_table,this__15614.cached_hierarchy,this__15614.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15616 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15616.cached_hierarchy),cljs.core.deref.call(null,this__15616.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15616.method_cache,this__15616.method_table,this__15616.cached_hierarchy,this__15616.hierarchy);
}
var temp__3695__auto____15617 = cljs.core.deref.call(null,this__15616.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15617))
{var target_fn__15618 = temp__3695__auto____15617;

return target_fn__15618;
} else
{var temp__3695__auto____15620 = cljs.core.find_and_cache_best_method.call(null,this__15616.name,dispatch_val,this__15616.hierarchy,this__15616.method_table,this__15616.prefer_table,this__15616.method_cache,this__15616.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15620))
{var target_fn__15622 = temp__3695__auto____15620;

return target_fn__15622;
} else
{return cljs.core.deref.call(null,this__15616.method_table).call(null,this__15616.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15627 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15627.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15627.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15627.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15627.method_cache,this__15627.method_table,this__15627.cached_hierarchy,this__15627.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15704 = this;
return cljs.core.deref.call(null,this__15704.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15707 = this;
return cljs.core.deref.call(null,this__15707.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15708 = this;
return cljs.core.do_dispatch.call(null,mf,this__15708.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15727__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15727 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15727__delegate.call(this, _, args);
};
G__15727.cljs$lang$maxFixedArity = 1;
G__15727.cljs$lang$applyTo = (function (arglist__15728){
var _ = cljs.core.first(arglist__15728);
var args = cljs.core.rest(arglist__15728);
return G__15727__delegate.call(this, _, args);
});
return G__15727;
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
