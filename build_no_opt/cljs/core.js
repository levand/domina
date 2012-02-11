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
var or__3548__auto____7248 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7248))
{return or__3548__auto____7248;
} else
{var or__3548__auto____7251 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
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
var _invoke__7623 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7272 = this$;

if(cljs.core.truth_(and__3546__auto____7272))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7272;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7276 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7276))
{return or__3548__auto____7276;
} else
{var or__3548__auto____7278 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7624 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7281 = this$;

if(cljs.core.truth_(and__3546__auto____7281))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7281;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7625 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7291 = this$;

if(cljs.core.truth_(and__3546__auto____7291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7294 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{var or__3548__auto____7296 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7626 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7299 = this$;

if(cljs.core.truth_(and__3546__auto____7299))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7299;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7627 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7316 = this$;

if(cljs.core.truth_(and__3546__auto____7316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{var or__3548__auto____7322 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = this$;

if(cljs.core.truth_(and__3546__auto____7325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7328 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{var or__3548__auto____7331 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7337 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{var or__3548__auto____7339 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{var or__3548__auto____7346 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7350 = this$;

if(cljs.core.truth_(and__3546__auto____7350))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7350;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7353 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{var or__3548__auto____7355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = this$;

if(cljs.core.truth_(and__3546__auto____7359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{var or__3548__auto____7369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var or__3548__auto____7394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7400 = this$;

if(cljs.core.truth_(and__3546__auto____7400))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7400;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7404 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{var or__3548__auto____7407 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7412 = this$;

if(cljs.core.truth_(and__3546__auto____7412))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7412;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7416 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{var or__3548__auto____7420 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7438 = this$;

if(cljs.core.truth_(and__3546__auto____7438))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7438;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{var or__3548__auto____7443 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7443))
{return or__3548__auto____7443;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7448 = this$;

if(cljs.core.truth_(and__3546__auto____7448))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7448;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7460 = this$;

if(cljs.core.truth_(and__3546__auto____7460))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7460;
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
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{var or__3548__auto____7504 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7509 = this$;

if(cljs.core.truth_(and__3546__auto____7509))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7509;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7513 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{var or__3548__auto____7515 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7515))
{return or__3548__auto____7515;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7519 = this$;

if(cljs.core.truth_(and__3546__auto____7519))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7519;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7521 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7521))
{return or__3548__auto____7521;
} else
{var or__3548__auto____7523 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7523))
{return or__3548__auto____7523;
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
return _invoke__7623.call(this,this$);
case  2 :
return _invoke__7624.call(this,this$,a);
case  3 :
return _invoke__7625.call(this,this$,a,b);
case  4 :
return _invoke__7626.call(this,this$,a,b,c);
case  5 :
return _invoke__7627.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7628.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
{return (function (){var or__3548__auto____7688 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
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
if(cljs.core.truth_((function (){var and__3546__auto____7705 = coll;

if(cljs.core.truth_(and__3546__auto____7705))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7705;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7707 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{var or__3548__auto____7709 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7716 = coll;

if(cljs.core.truth_(and__3546__auto____7716))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7716;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7719 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
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
var _nth__7744 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7726 = coll;

if(cljs.core.truth_(and__3546__auto____7726))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7726;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7730 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{var or__3548__auto____7732 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7745 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7737 = coll;

if(cljs.core.truth_(and__3546__auto____7737))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7737;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7741 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{var or__3548__auto____7743 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
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
return _nth__7744.call(this,coll,n);
case  3 :
return _nth__7745.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7752 = coll;

if(cljs.core.truth_(and__3546__auto____7752))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7752;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7757 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7760 = coll;

if(cljs.core.truth_(and__3546__auto____7760))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7760;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7763 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{var or__3548__auto____7764 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
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
var _lookup__7830 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = o;

if(cljs.core.truth_(and__3546__auto____7781))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7781;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7784 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{var or__3548__auto____7785 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7831 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7788 = o;

if(cljs.core.truth_(and__3546__auto____7788))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7788;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7790 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
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
return _lookup__7830.call(this,o,k);
case  3 :
return _lookup__7831.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7850 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7854 = coll;

if(cljs.core.truth_(and__3546__auto____7854))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7854;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7857 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{var or__3548__auto____7858 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = coll;

if(cljs.core.truth_(and__3546__auto____7872))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7872;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7874 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7874))
{return or__3548__auto____7874;
} else
{var or__3548__auto____7876 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7882 = coll;

if(cljs.core.truth_(and__3546__auto____7882))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7882;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7886 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7903 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7906 = coll;

if(cljs.core.truth_(and__3546__auto____7906))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7906;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7909 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{var or__3548__auto____7910 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = coll;

if(cljs.core.truth_(and__3546__auto____7918))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7918;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7934 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = o;

if(cljs.core.truth_(and__3546__auto____7943))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7943;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7948 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{var or__3548__auto____7949 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7955 = o;

if(cljs.core.truth_(and__3546__auto____7955))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7955;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7958 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7958))
{return or__3548__auto____7958;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7967 = o;

if(cljs.core.truth_(and__3546__auto____7967))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7967;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7969 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{var or__3548__auto____7971 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7979 = o;

if(cljs.core.truth_(and__3546__auto____7979))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7979;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7981 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{var or__3548__auto____7983 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
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
var _reduce__8010 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7992 = coll;

if(cljs.core.truth_(and__3546__auto____7992))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7992;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7999 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8011 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8002 = coll;

if(cljs.core.truth_(and__3546__auto____8002))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8002;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8007 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
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
return _reduce__8010.call(this,coll,f);
case  3 :
return _reduce__8011.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8019 = o;

if(cljs.core.truth_(and__3546__auto____8019))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8019;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8071 = o;

if(cljs.core.truth_(and__3546__auto____8071))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8071;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8072 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8074 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8080 = o;

if(cljs.core.truth_(and__3546__auto____8080))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8080;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8081 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{var or__3548__auto____8083 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
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
if(cljs.core.truth_((function (){var and__3546__auto____8090 = o;

if(cljs.core.truth_(and__3546__auto____8090))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8090;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8091 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{var or__3548__auto____8092 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8093 = d;

if(cljs.core.truth_(and__3546__auto____8093))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8093;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8095 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{var or__3548__auto____8096 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8102 = this$;

if(cljs.core.truth_(and__3546__auto____8102))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8102;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8106 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
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
if(cljs.core.truth_((function (){var and__3546__auto____8111 = this$;

if(cljs.core.truth_(and__3546__auto____8111))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8111;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8112 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{var or__3548__auto____8113 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8115 = this$;

if(cljs.core.truth_(and__3546__auto____8115))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8115;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8118 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{var or__3548__auto____8119 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
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
var G__8168 = null;
var G__8168__8169 = (function (o,k){
return null;
});
var G__8168__8170 = (function (o,k,not_found){
return not_found;
});
G__8168 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8168__8169.call(this,o,k);
case  3 :
return G__8168__8170.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8168;
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
var G__8173 = null;
var G__8173__8174 = (function (_,f){
return f.call(null);
});
var G__8173__8175 = (function (_,f,start){
return start;
});
G__8173 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8173__8174.call(this,_,f);
case  3 :
return G__8173__8175.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8173;
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
var G__8186 = null;
var G__8186__8187 = (function (_,n){
return null;
});
var G__8186__8189 = (function (_,n,not_found){
return not_found;
});
G__8186 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8186__8187.call(this,_,n);
case  3 :
return G__8186__8189.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8186;
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
var ci_reduce__8256 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8250 = cljs.core._nth.call(null,cicoll,0);
var n__8251 = 1;

while(true){
if(cljs.core.truth_((n__8251 < cljs.core._count.call(null,cicoll))))
{{
var G__8260 = f.call(null,val__8250,cljs.core._nth.call(null,cicoll,n__8251));
var G__8261 = (n__8251 + 1);
val__8250 = G__8260;
n__8251 = G__8261;
continue;
}
} else
{return val__8250;
}
break;
}
}
});
var ci_reduce__8257 = (function (cicoll,f,val){
var val__8252 = val;
var n__8253 = 0;

while(true){
if(cljs.core.truth_((n__8253 < cljs.core._count.call(null,cicoll))))
{{
var G__8270 = f.call(null,val__8252,cljs.core._nth.call(null,cicoll,n__8253));
var G__8271 = (n__8253 + 1);
val__8252 = G__8270;
n__8253 = G__8271;
continue;
}
} else
{return val__8252;
}
break;
}
});
var ci_reduce__8258 = (function (cicoll,f,val,idx){
var val__8254 = val;
var n__8255 = idx;

while(true){
if(cljs.core.truth_((n__8255 < cljs.core._count.call(null,cicoll))))
{{
var G__8276 = f.call(null,val__8254,cljs.core._nth.call(null,cicoll,n__8255));
var G__8277 = (n__8255 + 1);
val__8254 = G__8276;
n__8255 = G__8277;
continue;
}
} else
{return val__8254;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8256.call(this,cicoll,f);
case  3 :
return ci_reduce__8257.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8258.call(this,cicoll,f,val,idx);
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
var this__8288 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8308 = null;
var G__8308__8309 = (function (_,f){
var this__8289 = this;
return cljs.core.ci_reduce.call(null,this__8289.a,f,(this__8289.a[this__8289.i]),(this__8289.i + 1));
});
var G__8308__8310 = (function (_,f,start){
var this__8292 = this;
return cljs.core.ci_reduce.call(null,this__8292.a,f,start,this__8292.i);
});
G__8308 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8308__8309.call(this,_,f);
case  3 :
return G__8308__8310.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8308;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8298 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8299 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8312 = null;
var G__8312__8313 = (function (coll,n){
var this__8300 = this;
var i__8301 = (n + this__8300.i);

if(cljs.core.truth_((i__8301 < this__8300.a.length)))
{return (this__8300.a[i__8301]);
} else
{return null;
}
});
var G__8312__8314 = (function (coll,n,not_found){
var this__8302 = this;
var i__8303 = (n + this__8302.i);

if(cljs.core.truth_((i__8303 < this__8302.a.length)))
{return (this__8302.a[i__8303]);
} else
{return not_found;
}
});
G__8312 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8312__8313.call(this,coll,n);
case  3 :
return G__8312__8314.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8312;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8304 = this;
return (this__8304.a.length - this__8304.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8305 = this;
return (this__8305.a[this__8305.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8306 = this;
if(cljs.core.truth_(((this__8306.i + 1) < this__8306.a.length)))
{return (new cljs.core.IndexedSeq(this__8306.a,(this__8306.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8307 = this;
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
var G__8440 = null;
var G__8440__8442 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8440__8443 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8440 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8440__8442.call(this,array,f);
case  3 :
return G__8440__8443.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8440;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8447 = null;
var G__8447__8448 = (function (array,k){
return (array[k]);
});
var G__8447__8450 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8447 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8447__8448.call(this,array,k);
case  3 :
return G__8447__8450.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8447;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8453 = null;
var G__8453__8454 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8453__8455 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8453 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8453__8454.call(this,array,n);
case  3 :
return G__8453__8455.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8453;
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
var temp__3698__auto____8464 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8464))
{var s__8465 = temp__3698__auto____8464;

return cljs.core._first.call(null,s__8465);
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
var G__8474 = cljs.core.next.call(null,s);
s = G__8474;
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
var s__8479 = cljs.core.seq.call(null,x);
var n__8480 = 0;

while(true){
if(cljs.core.truth_(s__8479))
{{
var G__8500 = cljs.core.next.call(null,s__8479);
var G__8501 = (n__8480 + 1);
s__8479 = G__8500;
n__8480 = G__8501;
continue;
}
} else
{return n__8480;
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
var conj__8523 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8524 = (function() { 
var G__8526__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8527 = conj.call(null,coll,x);
var G__8528 = cljs.core.first.call(null,xs);
var G__8529 = cljs.core.next.call(null,xs);
coll = G__8527;
x = G__8528;
xs = G__8529;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8526 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8526__delegate.call(this, coll, x, xs);
};
G__8526.cljs$lang$maxFixedArity = 2;
G__8526.cljs$lang$applyTo = (function (arglist__8530){
var coll = cljs.core.first(arglist__8530);
var x = cljs.core.first(cljs.core.next(arglist__8530));
var xs = cljs.core.rest(cljs.core.next(arglist__8530));
return G__8526__delegate.call(this, coll, x, xs);
});
return G__8526;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8523.call(this,coll,x);
default:
return conj__8524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8524.cljs$lang$applyTo;
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
var nth__8531 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8532 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8531.call(this,coll,n);
case  3 :
return nth__8532.call(this,coll,n,not_found);
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
var get__8536 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8537 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8536.call(this,o,k);
case  3 :
return get__8537.call(this,o,k,not_found);
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
var assoc__8543 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8544 = (function() { 
var G__8546__delegate = function (coll,k,v,kvs){
while(true){
var ret__8540 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8549 = ret__8540;
var G__8550 = cljs.core.first.call(null,kvs);
var G__8551 = cljs.core.second.call(null,kvs);
var G__8552 = cljs.core.nnext.call(null,kvs);
coll = G__8549;
k = G__8550;
v = G__8551;
kvs = G__8552;
continue;
}
} else
{return ret__8540;
}
break;
}
};
var G__8546 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8546__delegate.call(this, coll, k, v, kvs);
};
G__8546.cljs$lang$maxFixedArity = 3;
G__8546.cljs$lang$applyTo = (function (arglist__8553){
var coll = cljs.core.first(arglist__8553);
var k = cljs.core.first(cljs.core.next(arglist__8553));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8553)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8553)));
return G__8546__delegate.call(this, coll, k, v, kvs);
});
return G__8546;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8543.call(this,coll,k,v);
default:
return assoc__8544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8544.cljs$lang$applyTo;
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
var dissoc__8561 = (function (coll){
return coll;
});
var dissoc__8563 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8564 = (function() { 
var G__8566__delegate = function (coll,k,ks){
while(true){
var ret__8554 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8567 = ret__8554;
var G__8568 = cljs.core.first.call(null,ks);
var G__8569 = cljs.core.next.call(null,ks);
coll = G__8567;
k = G__8568;
ks = G__8569;
continue;
}
} else
{return ret__8554;
}
break;
}
};
var G__8566 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8566__delegate.call(this, coll, k, ks);
};
G__8566.cljs$lang$maxFixedArity = 2;
G__8566.cljs$lang$applyTo = (function (arglist__8574){
var coll = cljs.core.first(arglist__8574);
var k = cljs.core.first(cljs.core.next(arglist__8574));
var ks = cljs.core.rest(cljs.core.next(arglist__8574));
return G__8566__delegate.call(this, coll, k, ks);
});
return G__8566;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8561.call(this,coll);
case  2 :
return dissoc__8563.call(this,coll,k);
default:
return dissoc__8564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8564.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8583 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8584 = x__445__auto____8583;

if(cljs.core.truth_(and__3546__auto____8584))
{var and__3546__auto____8585 = x__445__auto____8583.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8585))
{return cljs.core.not.call(null,x__445__auto____8583.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8585;
}
} else
{return and__3546__auto____8584;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8583);
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
var disj__8601 = (function (coll){
return coll;
});
var disj__8602 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8603 = (function() { 
var G__8606__delegate = function (coll,k,ks){
while(true){
var ret__8598 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8607 = ret__8598;
var G__8608 = cljs.core.first.call(null,ks);
var G__8609 = cljs.core.next.call(null,ks);
coll = G__8607;
k = G__8608;
ks = G__8609;
continue;
}
} else
{return ret__8598;
}
break;
}
};
var G__8606 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8606__delegate.call(this, coll, k, ks);
};
G__8606.cljs$lang$maxFixedArity = 2;
G__8606.cljs$lang$applyTo = (function (arglist__8610){
var coll = cljs.core.first(arglist__8610);
var k = cljs.core.first(cljs.core.next(arglist__8610));
var ks = cljs.core.rest(cljs.core.next(arglist__8610));
return G__8606__delegate.call(this, coll, k, ks);
});
return G__8606;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8601.call(this,coll);
case  2 :
return disj__8602.call(this,coll,k);
default:
return disj__8603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8603.cljs$lang$applyTo;
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
{var x__445__auto____8614 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8615 = x__445__auto____8614;

if(cljs.core.truth_(and__3546__auto____8615))
{var and__3546__auto____8616 = x__445__auto____8614.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8616))
{return cljs.core.not.call(null,x__445__auto____8614.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8616;
}
} else
{return and__3546__auto____8615;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8614);
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
{var x__445__auto____8622 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8623 = x__445__auto____8622;

if(cljs.core.truth_(and__3546__auto____8623))
{var and__3546__auto____8624 = x__445__auto____8622.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8624))
{return cljs.core.not.call(null,x__445__auto____8622.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8624;
}
} else
{return and__3546__auto____8623;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8622);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8628 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8629 = x__445__auto____8628;

if(cljs.core.truth_(and__3546__auto____8629))
{var and__3546__auto____8630 = x__445__auto____8628.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8630))
{return cljs.core.not.call(null,x__445__auto____8628.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8630;
}
} else
{return and__3546__auto____8629;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8628);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8636 = x__445__auto____8635;

if(cljs.core.truth_(and__3546__auto____8636))
{var and__3546__auto____8639 = x__445__auto____8635.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8639))
{return cljs.core.not.call(null,x__445__auto____8635.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8639;
}
} else
{return and__3546__auto____8636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8635);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8646 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8647 = x__445__auto____8646;

if(cljs.core.truth_(and__3546__auto____8647))
{var and__3546__auto____8648 = x__445__auto____8646.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8648))
{return cljs.core.not.call(null,x__445__auto____8646.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8648;
}
} else
{return and__3546__auto____8647;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8646);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8660 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8664 = x__445__auto____8660;

if(cljs.core.truth_(and__3546__auto____8664))
{var and__3546__auto____8665 = x__445__auto____8660.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8665))
{return cljs.core.not.call(null,x__445__auto____8660.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8665;
}
} else
{return and__3546__auto____8664;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8660);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8670 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8671 = x__445__auto____8670;

if(cljs.core.truth_(and__3546__auto____8671))
{var and__3546__auto____8672 = x__445__auto____8670.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8672))
{return cljs.core.not.call(null,x__445__auto____8670.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8672;
}
} else
{return and__3546__auto____8671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8670);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8677 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8677.push(key);
}));
return keys__8677;
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
{var x__445__auto____8688 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8690 = x__445__auto____8688;

if(cljs.core.truth_(and__3546__auto____8690))
{var and__3546__auto____8694 = x__445__auto____8688.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8694))
{return cljs.core.not.call(null,x__445__auto____8688.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8694;
}
} else
{return and__3546__auto____8690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8688);
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
var and__3546__auto____8714 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8714))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8718 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8718))
{return or__3548__auto____8718;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8714;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8753 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8753))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8753;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8757 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8757;
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
var and__3546__auto____8813 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8813))
{return (n == n.toFixed());
} else
{return and__3546__auto____8813;
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
if(cljs.core.truth_((function (){var and__3546__auto____8817 = coll;

if(cljs.core.truth_(and__3546__auto____8817))
{var and__3546__auto____8818 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8818))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8818;
}
} else
{return and__3546__auto____8817;
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
var distinct_QMARK___8834 = (function (x){
return true;
});
var distinct_QMARK___8835 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8836 = (function() { 
var G__8838__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8826 = cljs.core.set([y,x]);
var xs__8827 = more;

while(true){
var x__8829 = cljs.core.first.call(null,xs__8827);
var etc__8831 = cljs.core.next.call(null,xs__8827);

if(cljs.core.truth_(xs__8827))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8826,x__8829)))
{return false;
} else
{{
var G__8843 = cljs.core.conj.call(null,s__8826,x__8829);
var G__8844 = etc__8831;
s__8826 = G__8843;
xs__8827 = G__8844;
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
var G__8838 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8838__delegate.call(this, x, y, more);
};
G__8838.cljs$lang$maxFixedArity = 2;
G__8838.cljs$lang$applyTo = (function (arglist__8847){
var x = cljs.core.first(arglist__8847);
var y = cljs.core.first(cljs.core.next(arglist__8847));
var more = cljs.core.rest(cljs.core.next(arglist__8847));
return G__8838__delegate.call(this, x, y, more);
});
return G__8838;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8834.call(this,x);
case  2 :
return distinct_QMARK___8835.call(this,x,y);
default:
return distinct_QMARK___8836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8836.cljs$lang$applyTo;
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
var r__8857 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8857)))
{return r__8857;
} else
{if(cljs.core.truth_(r__8857))
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
var sort__8869 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8870 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8868 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8868,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8868);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8869.call(this,comp);
case  2 :
return sort__8870.call(this,comp,coll);
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
var sort_by__8903 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8904 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8903.call(this,keyfn,comp);
case  3 :
return sort_by__8904.call(this,keyfn,comp,coll);
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
var reduce__8919 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8920 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8919.call(this,f,val);
case  3 :
return reduce__8920.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8936 = (function (f,coll){
var temp__3695__auto____8930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8930))
{var s__8932 = temp__3695__auto____8930;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8932),cljs.core.next.call(null,s__8932));
} else
{return f.call(null);
}
});
var seq_reduce__8937 = (function (f,val,coll){
var val__8934 = val;
var coll__8935 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8935))
{{
var G__8941 = f.call(null,val__8934,cljs.core.first.call(null,coll__8935));
var G__8942 = cljs.core.next.call(null,coll__8935);
val__8934 = G__8941;
coll__8935 = G__8942;
continue;
}
} else
{return val__8934;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8936.call(this,f,val);
case  3 :
return seq_reduce__8937.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8950 = null;
var G__8950__8951 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8950__8952 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8950 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8950__8951.call(this,coll,f);
case  3 :
return G__8950__8952.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8950;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8961 = (function (){
return 0;
});
var _PLUS___8962 = (function (x){
return x;
});
var _PLUS___8963 = (function (x,y){
return (x + y);
});
var _PLUS___8964 = (function() { 
var G__8968__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8968__delegate.call(this, x, y, more);
};
G__8968.cljs$lang$maxFixedArity = 2;
G__8968.cljs$lang$applyTo = (function (arglist__8970){
var x = cljs.core.first(arglist__8970);
var y = cljs.core.first(cljs.core.next(arglist__8970));
var more = cljs.core.rest(cljs.core.next(arglist__8970));
return G__8968__delegate.call(this, x, y, more);
});
return G__8968;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8961.call(this);
case  1 :
return _PLUS___8962.call(this,x);
case  2 :
return _PLUS___8963.call(this,x,y);
default:
return _PLUS___8964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8964.cljs$lang$applyTo;
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
var ___8978 = (function (x){
return (- x);
});
var ___8979 = (function (x,y){
return (x - y);
});
var ___8980 = (function() { 
var G__8983__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8983 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8983__delegate.call(this, x, y, more);
};
G__8983.cljs$lang$maxFixedArity = 2;
G__8983.cljs$lang$applyTo = (function (arglist__8985){
var x = cljs.core.first(arglist__8985);
var y = cljs.core.first(cljs.core.next(arglist__8985));
var more = cljs.core.rest(cljs.core.next(arglist__8985));
return G__8983__delegate.call(this, x, y, more);
});
return G__8983;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8978.call(this,x);
case  2 :
return ___8979.call(this,x,y);
default:
return ___8980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8980.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8987 = (function (){
return 1;
});
var _STAR___8988 = (function (x){
return x;
});
var _STAR___8989 = (function (x,y){
return (x * y);
});
var _STAR___8990 = (function() { 
var G__8996__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8996 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8996__delegate.call(this, x, y, more);
};
G__8996.cljs$lang$maxFixedArity = 2;
G__8996.cljs$lang$applyTo = (function (arglist__8999){
var x = cljs.core.first(arglist__8999);
var y = cljs.core.first(cljs.core.next(arglist__8999));
var more = cljs.core.rest(cljs.core.next(arglist__8999));
return G__8996__delegate.call(this, x, y, more);
});
return G__8996;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8987.call(this);
case  1 :
return _STAR___8988.call(this,x);
case  2 :
return _STAR___8989.call(this,x,y);
default:
return _STAR___8990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8990.cljs$lang$applyTo;
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
var _SLASH___9008 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9009 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9010 = (function() { 
var G__9012__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9012 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9012__delegate.call(this, x, y, more);
};
G__9012.cljs$lang$maxFixedArity = 2;
G__9012.cljs$lang$applyTo = (function (arglist__9013){
var x = cljs.core.first(arglist__9013);
var y = cljs.core.first(cljs.core.next(arglist__9013));
var more = cljs.core.rest(cljs.core.next(arglist__9013));
return G__9012__delegate.call(this, x, y, more);
});
return G__9012;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9008.call(this,x);
case  2 :
return _SLASH___9009.call(this,x,y);
default:
return _SLASH___9010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9010.cljs$lang$applyTo;
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
var _LT___9015 = (function (x){
return true;
});
var _LT___9016 = (function (x,y){
return (x < y);
});
var _LT___9017 = (function() { 
var G__9019__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9020 = y;
var G__9021 = cljs.core.first.call(null,more);
var G__9022 = cljs.core.next.call(null,more);
x = G__9020;
y = G__9021;
more = G__9022;
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
var G__9019 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9019__delegate.call(this, x, y, more);
};
G__9019.cljs$lang$maxFixedArity = 2;
G__9019.cljs$lang$applyTo = (function (arglist__9023){
var x = cljs.core.first(arglist__9023);
var y = cljs.core.first(cljs.core.next(arglist__9023));
var more = cljs.core.rest(cljs.core.next(arglist__9023));
return G__9019__delegate.call(this, x, y, more);
});
return G__9019;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9015.call(this,x);
case  2 :
return _LT___9016.call(this,x,y);
default:
return _LT___9017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9017.cljs$lang$applyTo;
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
var _LT__EQ___9029 = (function (x){
return true;
});
var _LT__EQ___9030 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9031 = (function() { 
var G__9034__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9035 = y;
var G__9036 = cljs.core.first.call(null,more);
var G__9037 = cljs.core.next.call(null,more);
x = G__9035;
y = G__9036;
more = G__9037;
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
var G__9034 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9034__delegate.call(this, x, y, more);
};
G__9034.cljs$lang$maxFixedArity = 2;
G__9034.cljs$lang$applyTo = (function (arglist__9040){
var x = cljs.core.first(arglist__9040);
var y = cljs.core.first(cljs.core.next(arglist__9040));
var more = cljs.core.rest(cljs.core.next(arglist__9040));
return G__9034__delegate.call(this, x, y, more);
});
return G__9034;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9029.call(this,x);
case  2 :
return _LT__EQ___9030.call(this,x,y);
default:
return _LT__EQ___9031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9031.cljs$lang$applyTo;
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
var _GT___9046 = (function (x){
return true;
});
var _GT___9047 = (function (x,y){
return (x > y);
});
var _GT___9048 = (function() { 
var G__9052__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9056 = y;
var G__9057 = cljs.core.first.call(null,more);
var G__9058 = cljs.core.next.call(null,more);
x = G__9056;
y = G__9057;
more = G__9058;
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
var G__9052 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9052__delegate.call(this, x, y, more);
};
G__9052.cljs$lang$maxFixedArity = 2;
G__9052.cljs$lang$applyTo = (function (arglist__9064){
var x = cljs.core.first(arglist__9064);
var y = cljs.core.first(cljs.core.next(arglist__9064));
var more = cljs.core.rest(cljs.core.next(arglist__9064));
return G__9052__delegate.call(this, x, y, more);
});
return G__9052;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9046.call(this,x);
case  2 :
return _GT___9047.call(this,x,y);
default:
return _GT___9048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9048.cljs$lang$applyTo;
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
var _GT__EQ___9069 = (function (x){
return true;
});
var _GT__EQ___9070 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9071 = (function() { 
var G__9078__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9080 = y;
var G__9081 = cljs.core.first.call(null,more);
var G__9082 = cljs.core.next.call(null,more);
x = G__9080;
y = G__9081;
more = G__9082;
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
var G__9078 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9078__delegate.call(this, x, y, more);
};
G__9078.cljs$lang$maxFixedArity = 2;
G__9078.cljs$lang$applyTo = (function (arglist__9086){
var x = cljs.core.first(arglist__9086);
var y = cljs.core.first(cljs.core.next(arglist__9086));
var more = cljs.core.rest(cljs.core.next(arglist__9086));
return G__9078__delegate.call(this, x, y, more);
});
return G__9078;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9069.call(this,x);
case  2 :
return _GT__EQ___9070.call(this,x,y);
default:
return _GT__EQ___9071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9071.cljs$lang$applyTo;
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
var max__9094 = (function (x){
return x;
});
var max__9096 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9097 = (function() { 
var G__9102__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9102 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9102__delegate.call(this, x, y, more);
};
G__9102.cljs$lang$maxFixedArity = 2;
G__9102.cljs$lang$applyTo = (function (arglist__9105){
var x = cljs.core.first(arglist__9105);
var y = cljs.core.first(cljs.core.next(arglist__9105));
var more = cljs.core.rest(cljs.core.next(arglist__9105));
return G__9102__delegate.call(this, x, y, more);
});
return G__9102;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9094.call(this,x);
case  2 :
return max__9096.call(this,x,y);
default:
return max__9097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9097.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9128 = (function (x){
return x;
});
var min__9129 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9130 = (function() { 
var G__9134__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9134 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9134__delegate.call(this, x, y, more);
};
G__9134.cljs$lang$maxFixedArity = 2;
G__9134.cljs$lang$applyTo = (function (arglist__9135){
var x = cljs.core.first(arglist__9135);
var y = cljs.core.first(cljs.core.next(arglist__9135));
var more = cljs.core.rest(cljs.core.next(arglist__9135));
return G__9134__delegate.call(this, x, y, more);
});
return G__9134;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9128.call(this,x);
case  2 :
return min__9129.call(this,x,y);
default:
return min__9130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9130.cljs$lang$applyTo;
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
var rem__9159 = (n % d);

return cljs.core.fix.call(null,((n - rem__9159) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9164 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9164));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9165 = (function (){
return Math.random.call(null);
});
var rand__9166 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9165.call(this);
case  1 :
return rand__9166.call(this,n);
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
var _EQ__EQ___9205 = (function (x){
return true;
});
var _EQ__EQ___9206 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9207 = (function() { 
var G__9260__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9264 = y;
var G__9265 = cljs.core.first.call(null,more);
var G__9266 = cljs.core.next.call(null,more);
x = G__9264;
y = G__9265;
more = G__9266;
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
var G__9260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9260__delegate.call(this, x, y, more);
};
G__9260.cljs$lang$maxFixedArity = 2;
G__9260.cljs$lang$applyTo = (function (arglist__9269){
var x = cljs.core.first(arglist__9269);
var y = cljs.core.first(cljs.core.next(arglist__9269));
var more = cljs.core.rest(cljs.core.next(arglist__9269));
return G__9260__delegate.call(this, x, y, more);
});
return G__9260;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9205.call(this,x);
case  2 :
return _EQ__EQ___9206.call(this,x,y);
default:
return _EQ__EQ___9207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9207.cljs$lang$applyTo;
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
var n__9286 = n;
var xs__9287 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9380 = xs__9287;

if(cljs.core.truth_(and__3546__auto____9380))
{return (n__9286 > 0);
} else
{return and__3546__auto____9380;
}
})()))
{{
var G__9384 = (n__9286 - 1);
var G__9385 = cljs.core.next.call(null,xs__9287);
n__9286 = G__9384;
xs__9287 = G__9385;
continue;
}
} else
{return xs__9287;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9400 = null;
var G__9400__9401 = (function (coll,n){
var temp__3695__auto____9396 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9396))
{var xs__9397 = temp__3695__auto____9396;

return cljs.core.first.call(null,xs__9397);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9400__9402 = (function (coll,n,not_found){
var temp__3695__auto____9398 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9398))
{var xs__9399 = temp__3695__auto____9398;

return cljs.core.first.call(null,xs__9399);
} else
{return not_found;
}
});
G__9400 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9400__9401.call(this,coll,n);
case  3 :
return G__9400__9402.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9400;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9508 = (function (){
return "";
});
var str_STAR___9509 = (function (x){
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
var str_STAR___9510 = (function() { 
var G__9513__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9514 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9515 = cljs.core.next.call(null,more);
sb = G__9514;
more = G__9515;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9513 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9513__delegate.call(this, x, ys);
};
G__9513.cljs$lang$maxFixedArity = 1;
G__9513.cljs$lang$applyTo = (function (arglist__9517){
var x = cljs.core.first(arglist__9517);
var ys = cljs.core.rest(arglist__9517);
return G__9513__delegate.call(this, x, ys);
});
return G__9513;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9508.call(this);
case  1 :
return str_STAR___9509.call(this,x);
default:
return str_STAR___9510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9510.cljs$lang$applyTo;
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
var str__9522 = (function (){
return "";
});
var str__9523 = (function (x){
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
var str__9525 = (function() { 
var G__9531__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9531 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9531__delegate.call(this, x, ys);
};
G__9531.cljs$lang$maxFixedArity = 1;
G__9531.cljs$lang$applyTo = (function (arglist__9534){
var x = cljs.core.first(arglist__9534);
var ys = cljs.core.rest(arglist__9534);
return G__9531__delegate.call(this, x, ys);
});
return G__9531;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9522.call(this);
case  1 :
return str__9523.call(this,x);
default:
return str__9525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9525.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9618 = (function (s,start){
return s.substring(start);
});
var subs__9619 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9618.call(this,s,start);
case  3 :
return subs__9619.call(this,s,start,end);
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
var symbol__9625 = (function (name){
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
var symbol__9626 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9625.call(this,ns);
case  2 :
return symbol__9626.call(this,ns,name);
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
var keyword__9628 = (function (name){
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
var keyword__9629 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9628.call(this,ns);
case  2 :
return keyword__9629.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9632 = cljs.core.seq.call(null,x);
var ys__9633 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9632)))
{return cljs.core.nil_QMARK_.call(null,ys__9633);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9633)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9632),cljs.core.first.call(null,ys__9633))))
{{
var G__9637 = cljs.core.next.call(null,xs__9632);
var G__9638 = cljs.core.next.call(null,ys__9633);
xs__9632 = G__9637;
ys__9633 = G__9638;
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
return cljs.core.reduce.call(null,(function (p1__9641_SHARP_,p2__9642_SHARP_){
return cljs.core.hash_combine.call(null,p1__9641_SHARP_,cljs.core.hash.call(null,p2__9642_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9661__9670 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9661__9670))
{var G__9672__9674 = cljs.core.first.call(null,G__9661__9670);
var vec__9673__9675 = G__9672__9674;
var key_name__9677 = cljs.core.nth.call(null,vec__9673__9675,0,null);
var f__9679 = cljs.core.nth.call(null,vec__9673__9675,1,null);
var G__9661__9680 = G__9661__9670;

var G__9672__9681 = G__9672__9674;
var G__9661__9682 = G__9661__9680;

while(true){
var vec__9683__9684 = G__9672__9681;
var key_name__9685 = cljs.core.nth.call(null,vec__9683__9684,0,null);
var f__9686 = cljs.core.nth.call(null,vec__9683__9684,1,null);
var G__9661__9687 = G__9661__9682;

var str_name__9688 = cljs.core.name.call(null,key_name__9685);

obj[str_name__9688] = f__9686;
var temp__3698__auto____9693 = cljs.core.next.call(null,G__9661__9687);

if(cljs.core.truth_(temp__3698__auto____9693))
{var G__9661__9697 = temp__3698__auto____9693;

{
var G__9708 = cljs.core.first.call(null,G__9661__9697);
var G__9709 = G__9661__9697;
G__9672__9681 = G__9708;
G__9661__9682 = G__9709;
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
var this__9730 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9734 = this;
return (new cljs.core.List(this__9734.meta,o,coll,(this__9734.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9735 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9736 = this;
return this__9736.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9902 = this;
return this__9902.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9903 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9908 = this;
return this__9908.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9909 = this;
return this__9909.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9910 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9911 = this;
return (new cljs.core.List(meta,this__9911.first,this__9911.rest,this__9911.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9912 = this;
return this__9912.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9915 = this;
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
var this__9929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9930 = this;
return (new cljs.core.List(this__9930.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9931 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9933 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9946 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9947 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9949 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9951 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9953 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9959 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9964 = this;
return this__9964.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9970 = this;
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
list.cljs$lang$applyTo = (function (arglist__9992){
var items = cljs.core.seq( arglist__9992 );;
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
var this__10000 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10002 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10004 = this;
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
var this__10011 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10012 = this;
return this__10012.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10014 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10014.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10014.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10015 = this;
return this__10015.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10016 = this;
return (new cljs.core.Cons(meta,this__10016.first,this__10016.rest));
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
var G__10032 = null;
var G__10032__10033 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10032__10034 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10032 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10032__10033.call(this,string,f);
case  3 :
return G__10032__10034.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10032;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10041 = null;
var G__10041__10042 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10041__10043 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10041 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10041__10042.call(this,string,k);
case  3 :
return G__10041__10043.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10041;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10049 = null;
var G__10049__10050 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10049__10051 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10049 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10049__10050.call(this,string,n);
case  3 :
return G__10049__10051.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10049;
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
var G__10065 = null;
var G__10065__10066 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10065__10067 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10065 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10065__10066.call(this,this$,coll);
case  3 :
return G__10065__10067.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10065;
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
var x__10070 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10070;
} else
{lazy_seq.x = x__10070.call(null);
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
var this__10079 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10126 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10127 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10128 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10128.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10129 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10133 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10137 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10189 = this;
return this__10189.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10190 = this;
return (new cljs.core.LazySeq(meta,this__10190.realized,this__10190.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10206 = cljs.core.array.call(null);

var s__10207 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10207)))
{ary__10206.push(cljs.core.first.call(null,s__10207));
{
var G__10212 = cljs.core.next.call(null,s__10207);
s__10207 = G__10212;
continue;
}
} else
{return ary__10206;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10216 = s;
var i__10217 = n;
var sum__10218 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10219 = (i__10217 > 0);

if(cljs.core.truth_(and__3546__auto____10219))
{return cljs.core.seq.call(null,s__10216);
} else
{return and__3546__auto____10219;
}
})()))
{{
var G__10224 = cljs.core.next.call(null,s__10216);
var G__10225 = (i__10217 - 1);
var G__10226 = (sum__10218 + 1);
s__10216 = G__10224;
i__10217 = G__10225;
sum__10218 = G__10226;
continue;
}
} else
{return sum__10218;
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
var concat__10256 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10258 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10260 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10229 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10229))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10229),concat.call(null,cljs.core.rest.call(null,s__10229),y));
} else
{return y;
}
})));
});
var concat__10261 = (function() { 
var G__10267__delegate = function (x,y,zs){
var cat__10252 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10250 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10250))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10250),cat.call(null,cljs.core.rest.call(null,xys__10250),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10252.call(null,concat.call(null,x,y),zs);
};
var G__10267 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10267__delegate.call(this, x, y, zs);
};
G__10267.cljs$lang$maxFixedArity = 2;
G__10267.cljs$lang$applyTo = (function (arglist__10275){
var x = cljs.core.first(arglist__10275);
var y = cljs.core.first(cljs.core.next(arglist__10275));
var zs = cljs.core.rest(cljs.core.next(arglist__10275));
return G__10267__delegate.call(this, x, y, zs);
});
return G__10267;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10256.call(this);
case  1 :
return concat__10258.call(this,x);
case  2 :
return concat__10260.call(this,x,y);
default:
return concat__10261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10261.cljs$lang$applyTo;
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
var list_STAR___10356 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10357 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10358 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10359 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10360 = (function() { 
var G__10362__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10362 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10362__delegate.call(this, a, b, c, d, more);
};
G__10362.cljs$lang$maxFixedArity = 4;
G__10362.cljs$lang$applyTo = (function (arglist__10365){
var a = cljs.core.first(arglist__10365);
var b = cljs.core.first(cljs.core.next(arglist__10365));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10365)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10365))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10365))));
return G__10362__delegate.call(this, a, b, c, d, more);
});
return G__10362;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10356.call(this,a);
case  2 :
return list_STAR___10357.call(this,a,b);
case  3 :
return list_STAR___10358.call(this,a,b,c);
case  4 :
return list_STAR___10359.call(this,a,b,c,d);
default:
return list_STAR___10360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10360.cljs$lang$applyTo;
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
var apply__10404 = (function (f,args){
var fixed_arity__10366 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10366 + 1)) <= fixed_arity__10366)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10405 = (function (f,x,args){
var arglist__10367 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10368 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10367,fixed_arity__10368) <= fixed_arity__10368)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10367));
} else
{return f.cljs$lang$applyTo(arglist__10367);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10367));
}
});
var apply__10406 = (function (f,x,y,args){
var arglist__10374 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10375 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10374,fixed_arity__10375) <= fixed_arity__10375)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10374));
} else
{return f.cljs$lang$applyTo(arglist__10374);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10374));
}
});
var apply__10407 = (function (f,x,y,z,args){
var arglist__10376 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10378 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10376,fixed_arity__10378) <= fixed_arity__10378)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10376));
} else
{return f.cljs$lang$applyTo(arglist__10376);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10376));
}
});
var apply__10408 = (function() { 
var G__10420__delegate = function (f,a,b,c,d,args){
var arglist__10386 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10387 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10386,fixed_arity__10387) <= fixed_arity__10387)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10386));
} else
{return f.cljs$lang$applyTo(arglist__10386);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10386));
}
};
var G__10420 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10420__delegate.call(this, f, a, b, c, d, args);
};
G__10420.cljs$lang$maxFixedArity = 5;
G__10420.cljs$lang$applyTo = (function (arglist__10424){
var f = cljs.core.first(arglist__10424);
var a = cljs.core.first(cljs.core.next(arglist__10424));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10424)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10424))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10424)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10424)))));
return G__10420__delegate.call(this, f, a, b, c, d, args);
});
return G__10420;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10404.call(this,f,a);
case  3 :
return apply__10405.call(this,f,a,b);
case  4 :
return apply__10406.call(this,f,a,b,c);
case  5 :
return apply__10407.call(this,f,a,b,c,d);
default:
return apply__10408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10408.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10437){
var obj = cljs.core.first(arglist__10437);
var f = cljs.core.first(cljs.core.next(arglist__10437));
var args = cljs.core.rest(cljs.core.next(arglist__10437));
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
var not_EQ___10451 = (function (x){
return false;
});
var not_EQ___10454 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10456 = (function() { 
var G__10460__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10460__delegate.call(this, x, y, more);
};
G__10460.cljs$lang$maxFixedArity = 2;
G__10460.cljs$lang$applyTo = (function (arglist__10468){
var x = cljs.core.first(arglist__10468);
var y = cljs.core.first(cljs.core.next(arglist__10468));
var more = cljs.core.rest(cljs.core.next(arglist__10468));
return G__10460__delegate.call(this, x, y, more);
});
return G__10460;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10451.call(this,x);
case  2 :
return not_EQ___10454.call(this,x,y);
default:
return not_EQ___10456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10456.cljs$lang$applyTo;
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
{var or__3548__auto____10494 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10494))
{return or__3548__auto____10494;
} else
{{
var G__10497 = pred;
var G__10498 = cljs.core.next.call(null,coll);
pred = G__10497;
coll = G__10498;
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
var G__10517 = null;
var G__10517__10519 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10517__10520 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10517__10521 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10517__10522 = (function() { 
var G__10524__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10524 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10524__delegate.call(this, x, y, zs);
};
G__10524.cljs$lang$maxFixedArity = 2;
G__10524.cljs$lang$applyTo = (function (arglist__10525){
var x = cljs.core.first(arglist__10525);
var y = cljs.core.first(cljs.core.next(arglist__10525));
var zs = cljs.core.rest(cljs.core.next(arglist__10525));
return G__10524__delegate.call(this, x, y, zs);
});
return G__10524;
})()
;
G__10517 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10517__10519.call(this);
case  1 :
return G__10517__10520.call(this,x);
case  2 :
return G__10517__10521.call(this,x,y);
default:
return G__10517__10522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10517.cljs$lang$maxFixedArity = 2;
G__10517.cljs$lang$applyTo = G__10517__10522.cljs$lang$applyTo;
return G__10517;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10526__delegate = function (args){
return x;
};
var G__10526 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10526__delegate.call(this, args);
};
G__10526.cljs$lang$maxFixedArity = 0;
G__10526.cljs$lang$applyTo = (function (arglist__10527){
var args = cljs.core.seq( arglist__10527 );;
return G__10526__delegate.call(this, args);
});
return G__10526;
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
var comp__10578 = (function (){
return cljs.core.identity;
});
var comp__10579 = (function (f){
return f;
});
var comp__10581 = (function (f,g){
return (function() {
var G__10586 = null;
var G__10586__10587 = (function (){
return f.call(null,g.call(null));
});
var G__10586__10589 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10586__10590 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10586__10591 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10586__10593 = (function() { 
var G__10595__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10595 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10595__delegate.call(this, x, y, z, args);
};
G__10595.cljs$lang$maxFixedArity = 3;
G__10595.cljs$lang$applyTo = (function (arglist__10596){
var x = cljs.core.first(arglist__10596);
var y = cljs.core.first(cljs.core.next(arglist__10596));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10596)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10596)));
return G__10595__delegate.call(this, x, y, z, args);
});
return G__10595;
})()
;
G__10586 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10586__10587.call(this);
case  1 :
return G__10586__10589.call(this,x);
case  2 :
return G__10586__10590.call(this,x,y);
case  3 :
return G__10586__10591.call(this,x,y,z);
default:
return G__10586__10593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10586.cljs$lang$maxFixedArity = 3;
G__10586.cljs$lang$applyTo = G__10586__10593.cljs$lang$applyTo;
return G__10586;
})()
});
var comp__10582 = (function (f,g,h){
return (function() {
var G__10599 = null;
var G__10599__10600 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10599__10661 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10599__10662 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10599__10663 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10599__10664 = (function() { 
var G__10666__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10666__delegate.call(this, x, y, z, args);
};
G__10666.cljs$lang$maxFixedArity = 3;
G__10666.cljs$lang$applyTo = (function (arglist__10667){
var x = cljs.core.first(arglist__10667);
var y = cljs.core.first(cljs.core.next(arglist__10667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10667)));
return G__10666__delegate.call(this, x, y, z, args);
});
return G__10666;
})()
;
G__10599 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10599__10600.call(this);
case  1 :
return G__10599__10661.call(this,x);
case  2 :
return G__10599__10662.call(this,x,y);
case  3 :
return G__10599__10663.call(this,x,y,z);
default:
return G__10599__10664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10599.cljs$lang$maxFixedArity = 3;
G__10599.cljs$lang$applyTo = G__10599__10664.cljs$lang$applyTo;
return G__10599;
})()
});
var comp__10583 = (function() { 
var G__10668__delegate = function (f1,f2,f3,fs){
var fs__10564 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10669__delegate = function (args){
var ret__10566 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10564),args);
var fs__10570 = cljs.core.next.call(null,fs__10564);

while(true){
if(cljs.core.truth_(fs__10570))
{{
var G__10670 = cljs.core.first.call(null,fs__10570).call(null,ret__10566);
var G__10671 = cljs.core.next.call(null,fs__10570);
ret__10566 = G__10670;
fs__10570 = G__10671;
continue;
}
} else
{return ret__10566;
}
break;
}
};
var G__10669 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10669__delegate.call(this, args);
};
G__10669.cljs$lang$maxFixedArity = 0;
G__10669.cljs$lang$applyTo = (function (arglist__10673){
var args = cljs.core.seq( arglist__10673 );;
return G__10669__delegate.call(this, args);
});
return G__10669;
})()
;
};
var G__10668 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10668__delegate.call(this, f1, f2, f3, fs);
};
G__10668.cljs$lang$maxFixedArity = 3;
G__10668.cljs$lang$applyTo = (function (arglist__10675){
var f1 = cljs.core.first(arglist__10675);
var f2 = cljs.core.first(cljs.core.next(arglist__10675));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10675)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10675)));
return G__10668__delegate.call(this, f1, f2, f3, fs);
});
return G__10668;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10578.call(this);
case  1 :
return comp__10579.call(this,f1);
case  2 :
return comp__10581.call(this,f1,f2);
case  3 :
return comp__10582.call(this,f1,f2,f3);
default:
return comp__10583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10583.cljs$lang$applyTo;
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
var partial__10794 = (function (f,arg1){
return (function() { 
var G__10799__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10799 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10799__delegate.call(this, args);
};
G__10799.cljs$lang$maxFixedArity = 0;
G__10799.cljs$lang$applyTo = (function (arglist__10800){
var args = cljs.core.seq( arglist__10800 );;
return G__10799__delegate.call(this, args);
});
return G__10799;
})()
;
});
var partial__10795 = (function (f,arg1,arg2){
return (function() { 
var G__10801__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10801 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10801__delegate.call(this, args);
};
G__10801.cljs$lang$maxFixedArity = 0;
G__10801.cljs$lang$applyTo = (function (arglist__10802){
var args = cljs.core.seq( arglist__10802 );;
return G__10801__delegate.call(this, args);
});
return G__10801;
})()
;
});
var partial__10796 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10803__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10803 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10803__delegate.call(this, args);
};
G__10803.cljs$lang$maxFixedArity = 0;
G__10803.cljs$lang$applyTo = (function (arglist__10804){
var args = cljs.core.seq( arglist__10804 );;
return G__10803__delegate.call(this, args);
});
return G__10803;
})()
;
});
var partial__10797 = (function() { 
var G__10805__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10806__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10806 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10806__delegate.call(this, args);
};
G__10806.cljs$lang$maxFixedArity = 0;
G__10806.cljs$lang$applyTo = (function (arglist__10807){
var args = cljs.core.seq( arglist__10807 );;
return G__10806__delegate.call(this, args);
});
return G__10806;
})()
;
};
var G__10805 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10805__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10805.cljs$lang$maxFixedArity = 4;
G__10805.cljs$lang$applyTo = (function (arglist__10808){
var f = cljs.core.first(arglist__10808);
var arg1 = cljs.core.first(cljs.core.next(arglist__10808));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10808)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10808))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10808))));
return G__10805__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10805;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10794.call(this,f,arg1);
case  3 :
return partial__10795.call(this,f,arg1,arg2);
case  4 :
return partial__10796.call(this,f,arg1,arg2,arg3);
default:
return partial__10797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10797.cljs$lang$applyTo;
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
var fnil__10830 = (function (f,x){
return (function() {
var G__10835 = null;
var G__10835__10837 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10835__10838 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10835__10839 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10835__10840 = (function() { 
var G__10847__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10847 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10847__delegate.call(this, a, b, c, ds);
};
G__10847.cljs$lang$maxFixedArity = 3;
G__10847.cljs$lang$applyTo = (function (arglist__10849){
var a = cljs.core.first(arglist__10849);
var b = cljs.core.first(cljs.core.next(arglist__10849));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10849)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10849)));
return G__10847__delegate.call(this, a, b, c, ds);
});
return G__10847;
})()
;
G__10835 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10835__10837.call(this,a);
case  2 :
return G__10835__10838.call(this,a,b);
case  3 :
return G__10835__10839.call(this,a,b,c);
default:
return G__10835__10840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10835.cljs$lang$maxFixedArity = 3;
G__10835.cljs$lang$applyTo = G__10835__10840.cljs$lang$applyTo;
return G__10835;
})()
});
var fnil__10832 = (function (f,x,y){
return (function() {
var G__10852 = null;
var G__10852__10853 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10852__10854 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10852__10855 = (function() { 
var G__10857__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10857 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10857__delegate.call(this, a, b, c, ds);
};
G__10857.cljs$lang$maxFixedArity = 3;
G__10857.cljs$lang$applyTo = (function (arglist__10859){
var a = cljs.core.first(arglist__10859);
var b = cljs.core.first(cljs.core.next(arglist__10859));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10859)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10859)));
return G__10857__delegate.call(this, a, b, c, ds);
});
return G__10857;
})()
;
G__10852 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10852__10853.call(this,a,b);
case  3 :
return G__10852__10854.call(this,a,b,c);
default:
return G__10852__10855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10852.cljs$lang$maxFixedArity = 3;
G__10852.cljs$lang$applyTo = G__10852__10855.cljs$lang$applyTo;
return G__10852;
})()
});
var fnil__10833 = (function (f,x,y,z){
return (function() {
var G__10863 = null;
var G__10863__10865 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10863__10866 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10863__10868 = (function() { 
var G__10870__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10870 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10870__delegate.call(this, a, b, c, ds);
};
G__10870.cljs$lang$maxFixedArity = 3;
G__10870.cljs$lang$applyTo = (function (arglist__10874){
var a = cljs.core.first(arglist__10874);
var b = cljs.core.first(cljs.core.next(arglist__10874));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10874)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10874)));
return G__10870__delegate.call(this, a, b, c, ds);
});
return G__10870;
})()
;
G__10863 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10863__10865.call(this,a,b);
case  3 :
return G__10863__10866.call(this,a,b,c);
default:
return G__10863__10868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10863.cljs$lang$maxFixedArity = 3;
G__10863.cljs$lang$applyTo = G__10863__10868.cljs$lang$applyTo;
return G__10863;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10830.call(this,f,x);
case  3 :
return fnil__10832.call(this,f,x,y);
case  4 :
return fnil__10833.call(this,f,x,y,z);
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
var mapi__10923 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10915))
{var s__10918 = temp__3698__auto____10915;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10918)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10918)));
} else
{return null;
}
})));
});

return mapi__10923.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10935 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10935))
{var s__10936 = temp__3698__auto____10935;

var x__10937 = f.call(null,cljs.core.first.call(null,s__10936));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10937)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10936));
} else
{return cljs.core.cons.call(null,x__10937,keep.call(null,f,cljs.core.rest.call(null,s__10936)));
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
var keepi__11022 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10970 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10970))
{var s__10971 = temp__3698__auto____10970;

var x__10974 = f.call(null,idx,cljs.core.first.call(null,s__10971));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10974)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10971));
} else
{return cljs.core.cons.call(null,x__10974,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10971)));
}
} else
{return null;
}
})));
});

return keepi__11022.call(null,0,coll);
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
var every_pred__11152 = (function (p){
return (function() {
var ep1 = null;
var ep1__11158 = (function (){
return true;
});
var ep1__11160 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11161 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11046 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11046))
{return p.call(null,y);
} else
{return and__3546__auto____11046;
}
})());
});
var ep1__11162 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11048 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11048))
{var and__3546__auto____11050 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11050))
{return p.call(null,z);
} else
{return and__3546__auto____11050;
}
} else
{return and__3546__auto____11048;
}
})());
});
var ep1__11163 = (function() { 
var G__11249__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11053 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11053))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11053;
}
})());
};
var G__11249 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11249__delegate.call(this, x, y, z, args);
};
G__11249.cljs$lang$maxFixedArity = 3;
G__11249.cljs$lang$applyTo = (function (arglist__11251){
var x = cljs.core.first(arglist__11251);
var y = cljs.core.first(cljs.core.next(arglist__11251));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11251)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11251)));
return G__11249__delegate.call(this, x, y, z, args);
});
return G__11249;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11158.call(this);
case  1 :
return ep1__11160.call(this,x);
case  2 :
return ep1__11161.call(this,x,y);
case  3 :
return ep1__11162.call(this,x,y,z);
default:
return ep1__11163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11163.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11153 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11260 = (function (){
return true;
});
var ep2__11261 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11061 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11061))
{return p2.call(null,x);
} else
{return and__3546__auto____11061;
}
})());
});
var ep2__11262 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11063 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11063))
{var and__3546__auto____11064 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11064))
{var and__3546__auto____11066 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11066))
{return p2.call(null,y);
} else
{return and__3546__auto____11066;
}
} else
{return and__3546__auto____11064;
}
} else
{return and__3546__auto____11063;
}
})());
});
var ep2__11263 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11069 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11069))
{var and__3546__auto____11071 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11071))
{var and__3546__auto____11073 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11073))
{var and__3546__auto____11078 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11078))
{var and__3546__auto____11080 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11080))
{return p2.call(null,z);
} else
{return and__3546__auto____11080;
}
} else
{return and__3546__auto____11078;
}
} else
{return and__3546__auto____11073;
}
} else
{return and__3546__auto____11071;
}
} else
{return and__3546__auto____11069;
}
})());
});
var ep2__11264 = (function() { 
var G__11269__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11086 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11086))
{return cljs.core.every_QMARK_.call(null,(function (p1__10957_SHARP_){
var and__3546__auto____11090 = p1.call(null,p1__10957_SHARP_);

if(cljs.core.truth_(and__3546__auto____11090))
{return p2.call(null,p1__10957_SHARP_);
} else
{return and__3546__auto____11090;
}
}),args);
} else
{return and__3546__auto____11086;
}
})());
};
var G__11269 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11269__delegate.call(this, x, y, z, args);
};
G__11269.cljs$lang$maxFixedArity = 3;
G__11269.cljs$lang$applyTo = (function (arglist__11277){
var x = cljs.core.first(arglist__11277);
var y = cljs.core.first(cljs.core.next(arglist__11277));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11277)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11277)));
return G__11269__delegate.call(this, x, y, z, args);
});
return G__11269;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11260.call(this);
case  1 :
return ep2__11261.call(this,x);
case  2 :
return ep2__11262.call(this,x,y);
case  3 :
return ep2__11263.call(this,x,y,z);
default:
return ep2__11264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11264.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11154 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11283 = (function (){
return true;
});
var ep3__11284 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11095 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11095))
{var and__3546__auto____11097 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11097))
{return p3.call(null,x);
} else
{return and__3546__auto____11097;
}
} else
{return and__3546__auto____11095;
}
})());
});
var ep3__11285 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11099 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11099))
{var and__3546__auto____11101 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11101))
{var and__3546__auto____11103 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11103))
{var and__3546__auto____11105 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11105))
{var and__3546__auto____11107 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11107))
{return p3.call(null,y);
} else
{return and__3546__auto____11107;
}
} else
{return and__3546__auto____11105;
}
} else
{return and__3546__auto____11103;
}
} else
{return and__3546__auto____11101;
}
} else
{return and__3546__auto____11099;
}
})());
});
var ep3__11286 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11110 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11110))
{var and__3546__auto____11112 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11112))
{var and__3546__auto____11116 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11116))
{var and__3546__auto____11117 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11117))
{var and__3546__auto____11119 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11119))
{var and__3546__auto____11120 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11120))
{var and__3546__auto____11121 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11121))
{var and__3546__auto____11122 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11122))
{return p3.call(null,z);
} else
{return and__3546__auto____11122;
}
} else
{return and__3546__auto____11121;
}
} else
{return and__3546__auto____11120;
}
} else
{return and__3546__auto____11119;
}
} else
{return and__3546__auto____11117;
}
} else
{return and__3546__auto____11116;
}
} else
{return and__3546__auto____11112;
}
} else
{return and__3546__auto____11110;
}
})());
});
var ep3__11287 = (function() { 
var G__11301__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11124 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11124))
{return cljs.core.every_QMARK_.call(null,(function (p1__10963_SHARP_){
var and__3546__auto____11130 = p1.call(null,p1__10963_SHARP_);

if(cljs.core.truth_(and__3546__auto____11130))
{var and__3546__auto____11136 = p2.call(null,p1__10963_SHARP_);

if(cljs.core.truth_(and__3546__auto____11136))
{return p3.call(null,p1__10963_SHARP_);
} else
{return and__3546__auto____11136;
}
} else
{return and__3546__auto____11130;
}
}),args);
} else
{return and__3546__auto____11124;
}
})());
};
var G__11301 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11301__delegate.call(this, x, y, z, args);
};
G__11301.cljs$lang$maxFixedArity = 3;
G__11301.cljs$lang$applyTo = (function (arglist__11302){
var x = cljs.core.first(arglist__11302);
var y = cljs.core.first(cljs.core.next(arglist__11302));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11302)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11302)));
return G__11301__delegate.call(this, x, y, z, args);
});
return G__11301;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11283.call(this);
case  1 :
return ep3__11284.call(this,x);
case  2 :
return ep3__11285.call(this,x,y);
case  3 :
return ep3__11286.call(this,x,y,z);
default:
return ep3__11287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11287.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11155 = (function() { 
var G__11303__delegate = function (p1,p2,p3,ps){
var ps__11137 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11305 = (function (){
return true;
});
var epn__11306 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10964_SHARP_){
return p1__10964_SHARP_.call(null,x);
}),ps__11137);
});
var epn__11307 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10965_SHARP_){
var and__3546__auto____11139 = p1__10965_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11139))
{return p1__10965_SHARP_.call(null,y);
} else
{return and__3546__auto____11139;
}
}),ps__11137);
});
var epn__11308 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10966_SHARP_){
var and__3546__auto____11141 = p1__10966_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11141))
{var and__3546__auto____11142 = p1__10966_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11142))
{return p1__10966_SHARP_.call(null,z);
} else
{return and__3546__auto____11142;
}
} else
{return and__3546__auto____11141;
}
}),ps__11137);
});
var epn__11309 = (function() { 
var G__11320__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11149 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11149))
{return cljs.core.every_QMARK_.call(null,(function (p1__10967_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10967_SHARP_,args);
}),ps__11137);
} else
{return and__3546__auto____11149;
}
})());
};
var G__11320 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11320__delegate.call(this, x, y, z, args);
};
G__11320.cljs$lang$maxFixedArity = 3;
G__11320.cljs$lang$applyTo = (function (arglist__11328){
var x = cljs.core.first(arglist__11328);
var y = cljs.core.first(cljs.core.next(arglist__11328));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11328)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11328)));
return G__11320__delegate.call(this, x, y, z, args);
});
return G__11320;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11305.call(this);
case  1 :
return epn__11306.call(this,x);
case  2 :
return epn__11307.call(this,x,y);
case  3 :
return epn__11308.call(this,x,y,z);
default:
return epn__11309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11309.cljs$lang$applyTo;
return epn;
})()
};
var G__11303 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11303__delegate.call(this, p1, p2, p3, ps);
};
G__11303.cljs$lang$maxFixedArity = 3;
G__11303.cljs$lang$applyTo = (function (arglist__11329){
var p1 = cljs.core.first(arglist__11329);
var p2 = cljs.core.first(cljs.core.next(arglist__11329));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11329)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11329)));
return G__11303__delegate.call(this, p1, p2, p3, ps);
});
return G__11303;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11152.call(this,p1);
case  2 :
return every_pred__11153.call(this,p1,p2);
case  3 :
return every_pred__11154.call(this,p1,p2,p3);
default:
return every_pred__11155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11155.cljs$lang$applyTo;
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
var some_fn__11557 = (function (p){
return (function() {
var sp1 = null;
var sp1__11571 = (function (){
return null;
});
var sp1__11572 = (function (x){
return p.call(null,x);
});
var sp1__11573 = (function (x,y){
var or__3548__auto____11338 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{return p.call(null,y);
}
});
var sp1__11574 = (function (x,y,z){
var or__3548__auto____11340 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{var or__3548__auto____11341 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11341))
{return or__3548__auto____11341;
} else
{return p.call(null,z);
}
}
});
var sp1__11576 = (function() { 
var G__11580__delegate = function (x,y,z,args){
var or__3548__auto____11344 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11344))
{return or__3548__auto____11344;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11580 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11580__delegate.call(this, x, y, z, args);
};
G__11580.cljs$lang$maxFixedArity = 3;
G__11580.cljs$lang$applyTo = (function (arglist__11583){
var x = cljs.core.first(arglist__11583);
var y = cljs.core.first(cljs.core.next(arglist__11583));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11583)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11583)));
return G__11580__delegate.call(this, x, y, z, args);
});
return G__11580;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11571.call(this);
case  1 :
return sp1__11572.call(this,x);
case  2 :
return sp1__11573.call(this,x,y);
case  3 :
return sp1__11574.call(this,x,y,z);
default:
return sp1__11576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11576.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11558 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11592 = (function (){
return null;
});
var sp2__11593 = (function (x){
var or__3548__auto____11353 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11353))
{return or__3548__auto____11353;
} else
{return p2.call(null,x);
}
});
var sp2__11594 = (function (x,y){
var or__3548__auto____11355 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11355))
{return or__3548__auto____11355;
} else
{var or__3548__auto____11356 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11356))
{return or__3548__auto____11356;
} else
{var or__3548__auto____11357 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11357))
{return or__3548__auto____11357;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11595 = (function (x,y,z){
var or__3548__auto____11359 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11359))
{return or__3548__auto____11359;
} else
{var or__3548__auto____11362 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11362))
{return or__3548__auto____11362;
} else
{var or__3548__auto____11365 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11365))
{return or__3548__auto____11365;
} else
{var or__3548__auto____11366 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11366))
{return or__3548__auto____11366;
} else
{var or__3548__auto____11368 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11368))
{return or__3548__auto____11368;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11596 = (function() { 
var G__11606__delegate = function (x,y,z,args){
var or__3548__auto____11479 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{return cljs.core.some.call(null,(function (p1__11025_SHARP_){
var or__3548__auto____11486 = p1.call(null,p1__11025_SHARP_);

if(cljs.core.truth_(or__3548__auto____11486))
{return or__3548__auto____11486;
} else
{return p2.call(null,p1__11025_SHARP_);
}
}),args);
}
};
var G__11606 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11606__delegate.call(this, x, y, z, args);
};
G__11606.cljs$lang$maxFixedArity = 3;
G__11606.cljs$lang$applyTo = (function (arglist__11615){
var x = cljs.core.first(arglist__11615);
var y = cljs.core.first(cljs.core.next(arglist__11615));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11615)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11615)));
return G__11606__delegate.call(this, x, y, z, args);
});
return G__11606;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11592.call(this);
case  1 :
return sp2__11593.call(this,x);
case  2 :
return sp2__11594.call(this,x,y);
case  3 :
return sp2__11595.call(this,x,y,z);
default:
return sp2__11596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11596.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11560 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11618 = (function (){
return null;
});
var sp3__11620 = (function (x){
var or__3548__auto____11489 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11489))
{return or__3548__auto____11489;
} else
{var or__3548__auto____11491 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{return p3.call(null,x);
}
}
});
var sp3__11622 = (function (x,y){
var or__3548__auto____11494 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{var or__3548__auto____11496 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{var or__3548__auto____11497 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11497))
{return or__3548__auto____11497;
} else
{var or__3548__auto____11500 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11500))
{return or__3548__auto____11500;
} else
{var or__3548__auto____11502 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11624 = (function (x,y,z){
var or__3548__auto____11505 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11505))
{return or__3548__auto____11505;
} else
{var or__3548__auto____11512 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{var or__3548__auto____11513 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11513))
{return or__3548__auto____11513;
} else
{var or__3548__auto____11514 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11514))
{return or__3548__auto____11514;
} else
{var or__3548__auto____11520 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11520))
{return or__3548__auto____11520;
} else
{var or__3548__auto____11523 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11523))
{return or__3548__auto____11523;
} else
{var or__3548__auto____11528 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11528))
{return or__3548__auto____11528;
} else
{var or__3548__auto____11529 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11529))
{return or__3548__auto____11529;
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
var G__11649__delegate = function (x,y,z,args){
var or__3548__auto____11530 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11530))
{return or__3548__auto____11530;
} else
{return cljs.core.some.call(null,(function (p1__11026_SHARP_){
var or__3548__auto____11533 = p1.call(null,p1__11026_SHARP_);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{var or__3548__auto____11535 = p2.call(null,p1__11026_SHARP_);

if(cljs.core.truth_(or__3548__auto____11535))
{return or__3548__auto____11535;
} else
{return p3.call(null,p1__11026_SHARP_);
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
G__11649.cljs$lang$applyTo = (function (arglist__11654){
var x = cljs.core.first(arglist__11654);
var y = cljs.core.first(cljs.core.next(arglist__11654));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11654)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11654)));
return G__11649__delegate.call(this, x, y, z, args);
});
return G__11649;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11618.call(this);
case  1 :
return sp3__11620.call(this,x);
case  2 :
return sp3__11622.call(this,x,y);
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
var some_fn__11561 = (function() { 
var G__11826__delegate = function (p1,p2,p3,ps){
var ps__11537 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11827 = (function (){
return null;
});
var spn__11828 = (function (x){
return cljs.core.some.call(null,(function (p1__11027_SHARP_){
return p1__11027_SHARP_.call(null,x);
}),ps__11537);
});
var spn__11829 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11028_SHARP_){
var or__3548__auto____11550 = p1__11028_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11550))
{return or__3548__auto____11550;
} else
{return p1__11028_SHARP_.call(null,y);
}
}),ps__11537);
});
var spn__11830 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11029_SHARP_){
var or__3548__auto____11551 = p1__11029_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11551))
{return or__3548__auto____11551;
} else
{var or__3548__auto____11552 = p1__11029_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11552))
{return or__3548__auto____11552;
} else
{return p1__11029_SHARP_.call(null,z);
}
}
}),ps__11537);
});
var spn__11831 = (function() { 
var G__11834__delegate = function (x,y,z,args){
var or__3548__auto____11553 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{return cljs.core.some.call(null,(function (p1__11030_SHARP_){
return cljs.core.some.call(null,p1__11030_SHARP_,args);
}),ps__11537);
}
};
var G__11834 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11834__delegate.call(this, x, y, z, args);
};
G__11834.cljs$lang$maxFixedArity = 3;
G__11834.cljs$lang$applyTo = (function (arglist__11835){
var x = cljs.core.first(arglist__11835);
var y = cljs.core.first(cljs.core.next(arglist__11835));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11835)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11835)));
return G__11834__delegate.call(this, x, y, z, args);
});
return G__11834;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11827.call(this);
case  1 :
return spn__11828.call(this,x);
case  2 :
return spn__11829.call(this,x,y);
case  3 :
return spn__11830.call(this,x,y,z);
default:
return spn__11831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11831.cljs$lang$applyTo;
return spn;
})()
};
var G__11826 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11826__delegate.call(this, p1, p2, p3, ps);
};
G__11826.cljs$lang$maxFixedArity = 3;
G__11826.cljs$lang$applyTo = (function (arglist__11837){
var p1 = cljs.core.first(arglist__11837);
var p2 = cljs.core.first(cljs.core.next(arglist__11837));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11837)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11837)));
return G__11826__delegate.call(this, p1, p2, p3, ps);
});
return G__11826;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11557.call(this,p1);
case  2 :
return some_fn__11558.call(this,p1,p2);
case  3 :
return some_fn__11560.call(this,p1,p2,p3);
default:
return some_fn__11561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11561.cljs$lang$applyTo;
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
var map__11854 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11838 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11838))
{var s__11840 = temp__3698__auto____11838;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11840)),map.call(null,f,cljs.core.rest.call(null,s__11840)));
} else
{return null;
}
})));
});
var map__11855 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11841 = cljs.core.seq.call(null,c1);
var s2__11842 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11843 = s1__11841;

if(cljs.core.truth_(and__3546__auto____11843))
{return s2__11842;
} else
{return and__3546__auto____11843;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11841),cljs.core.first.call(null,s2__11842)),map.call(null,f,cljs.core.rest.call(null,s1__11841),cljs.core.rest.call(null,s2__11842)));
} else
{return null;
}
})));
});
var map__11856 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11844 = cljs.core.seq.call(null,c1);
var s2__11845 = cljs.core.seq.call(null,c2);
var s3__11846 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11847 = s1__11844;

if(cljs.core.truth_(and__3546__auto____11847))
{var and__3546__auto____11848 = s2__11845;

if(cljs.core.truth_(and__3546__auto____11848))
{return s3__11846;
} else
{return and__3546__auto____11848;
}
} else
{return and__3546__auto____11847;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11844),cljs.core.first.call(null,s2__11845),cljs.core.first.call(null,s3__11846)),map.call(null,f,cljs.core.rest.call(null,s1__11844),cljs.core.rest.call(null,s2__11845),cljs.core.rest.call(null,s3__11846)));
} else
{return null;
}
})));
});
var map__11857 = (function() { 
var G__11862__delegate = function (f,c1,c2,c3,colls){
var step__11853 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11852 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11852)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11852),step.call(null,map.call(null,cljs.core.rest,ss__11852)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11330_SHARP_){
return cljs.core.apply.call(null,f,p1__11330_SHARP_);
}),step__11853.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11862 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11862__delegate.call(this, f, c1, c2, c3, colls);
};
G__11862.cljs$lang$maxFixedArity = 4;
G__11862.cljs$lang$applyTo = (function (arglist__11866){
var f = cljs.core.first(arglist__11866);
var c1 = cljs.core.first(cljs.core.next(arglist__11866));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11866)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11866))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11866))));
return G__11862__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11862;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11854.call(this,f,c1);
case  3 :
return map__11855.call(this,f,c1,c2);
case  4 :
return map__11856.call(this,f,c1,c2,c3);
default:
return map__11857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11857.cljs$lang$applyTo;
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
{var temp__3698__auto____11868 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11868))
{var s__11869 = temp__3698__auto____11868;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11869),take.call(null,(n - 1),cljs.core.rest.call(null,s__11869)));
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
var step__11926 = (function (n,coll){
while(true){
var s__11924 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11925 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11925))
{return s__11924;
} else
{return and__3546__auto____11925;
}
})()))
{{
var G__11928 = (n - 1);
var G__11929 = cljs.core.rest.call(null,s__11924);
n = G__11928;
coll = G__11929;
continue;
}
} else
{return s__11924;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11926.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11932 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11933 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11932.call(this,n);
case  2 :
return drop_last__11933.call(this,n,s);
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
var s__11935 = cljs.core.seq.call(null,coll);
var lead__11936 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11936))
{{
var G__11937 = cljs.core.next.call(null,s__11935);
var G__11938 = cljs.core.next.call(null,lead__11936);
s__11935 = G__11937;
lead__11936 = G__11938;
continue;
}
} else
{return s__11935;
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
var s__11939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11940 = s__11939;

if(cljs.core.truth_(and__3546__auto____11940))
{return pred.call(null,cljs.core.first.call(null,s__11939));
} else
{return and__3546__auto____11940;
}
})()))
{{
var G__11942 = pred;
var G__11943 = cljs.core.rest.call(null,s__11939);
pred = G__11942;
coll = G__11943;
continue;
}
} else
{return s__11939;
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
var temp__3698__auto____11944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11944))
{var s__11945 = temp__3698__auto____11944;

return cljs.core.concat.call(null,s__11945,cycle.call(null,s__11945));
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
var repeat__11951 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11952 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11951.call(this,n);
case  2 :
return repeat__11952.call(this,n,x);
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
var repeatedly__11955 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11956 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11955.call(this,n);
case  2 :
return repeatedly__11956.call(this,n,f);
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
var interleave__11980 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11968 = cljs.core.seq.call(null,c1);
var s2__11969 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11970 = s1__11968;

if(cljs.core.truth_(and__3546__auto____11970))
{return s2__11969;
} else
{return and__3546__auto____11970;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11968),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11969),interleave.call(null,cljs.core.rest.call(null,s1__11968),cljs.core.rest.call(null,s2__11969))));
} else
{return null;
}
})));
});
var interleave__11981 = (function() { 
var G__11987__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11975 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11975)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11975),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11975)));
} else
{return null;
}
})));
};
var G__11987 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11987__delegate.call(this, c1, c2, colls);
};
G__11987.cljs$lang$maxFixedArity = 2;
G__11987.cljs$lang$applyTo = (function (arglist__11988){
var c1 = cljs.core.first(arglist__11988);
var c2 = cljs.core.first(cljs.core.next(arglist__11988));
var colls = cljs.core.rest(cljs.core.next(arglist__11988));
return G__11987__delegate.call(this, c1, c2, colls);
});
return G__11987;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11980.call(this,c1,c2);
default:
return interleave__11981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11981.cljs$lang$applyTo;
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
var cat__12000 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11994))
{var coll__11995 = temp__3695__auto____11994;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11995),cat.call(null,cljs.core.rest.call(null,coll__11995),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12000.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12003 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12004 = (function() { 
var G__12006__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12006 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12006__delegate.call(this, f, coll, colls);
};
G__12006.cljs$lang$maxFixedArity = 2;
G__12006.cljs$lang$applyTo = (function (arglist__12007){
var f = cljs.core.first(arglist__12007);
var coll = cljs.core.first(cljs.core.next(arglist__12007));
var colls = cljs.core.rest(cljs.core.next(arglist__12007));
return G__12006__delegate.call(this, f, coll, colls);
});
return G__12006;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12003.call(this,f,coll);
default:
return mapcat__12004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12004.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12009))
{var s__12011 = temp__3698__auto____12009;

var f__12012 = cljs.core.first.call(null,s__12011);
var r__12013 = cljs.core.rest.call(null,s__12011);

if(cljs.core.truth_(pred.call(null,f__12012)))
{return cljs.core.cons.call(null,f__12012,filter.call(null,pred,r__12013));
} else
{return filter.call(null,pred,r__12013);
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
var walk__12030 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12030.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12021_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12021_SHARP_));
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
var partition__12207 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12208 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12196 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12196))
{var s__12197 = temp__3698__auto____12196;

var p__12198 = cljs.core.take.call(null,n,s__12197);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12198))))
{return cljs.core.cons.call(null,p__12198,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12197)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12209 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12204 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12204))
{var s__12205 = temp__3698__auto____12204;

var p__12206 = cljs.core.take.call(null,n,s__12205);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12206))))
{return cljs.core.cons.call(null,p__12206,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12205)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12206,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12207.call(this,n,step);
case  3 :
return partition__12208.call(this,n,step,pad);
case  4 :
return partition__12209.call(this,n,step,pad,coll);
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
var get_in__12219 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12220 = (function (m,ks,not_found){
var sentinel__12212 = cljs.core.lookup_sentinel;
var m__12213 = m;
var ks__12214 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12214))
{var m__12215 = cljs.core.get.call(null,m__12213,cljs.core.first.call(null,ks__12214),sentinel__12212);

if(cljs.core.truth_((sentinel__12212 === m__12215)))
{return not_found;
} else
{{
var G__12224 = sentinel__12212;
var G__12225 = m__12215;
var G__12226 = cljs.core.next.call(null,ks__12214);
sentinel__12212 = G__12224;
m__12213 = G__12225;
ks__12214 = G__12226;
continue;
}
}
} else
{return m__12213;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12219.call(this,m,ks);
case  3 :
return get_in__12220.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12229,v){
var vec__12240__12241 = p__12229;
var k__12242 = cljs.core.nth.call(null,vec__12240__12241,0,null);
var ks__12243 = cljs.core.nthnext.call(null,vec__12240__12241,1);

if(cljs.core.truth_(ks__12243))
{return cljs.core.assoc.call(null,m,k__12242,assoc_in.call(null,cljs.core.get.call(null,m,k__12242),ks__12243,v));
} else
{return cljs.core.assoc.call(null,m,k__12242,v);
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
var update_in__delegate = function (m,p__12247,f,args){
var vec__12248__12249 = p__12247;
var k__12250 = cljs.core.nth.call(null,vec__12248__12249,0,null);
var ks__12251 = cljs.core.nthnext.call(null,vec__12248__12249,1);

if(cljs.core.truth_(ks__12251))
{return cljs.core.assoc.call(null,m,k__12250,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12250),ks__12251,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12250,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12250),args));
}
};
var update_in = function (m,p__12247,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12247, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12259){
var m = cljs.core.first(arglist__12259);
var p__12247 = cljs.core.first(cljs.core.next(arglist__12259));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12259)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12259)));
return update_in__delegate.call(this, m, p__12247, f, args);
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
var this__12264 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12405 = null;
var G__12405__12407 = (function (coll,k){
var this__12265 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12405__12408 = (function (coll,k,not_found){
var this__12269 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12405 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12405__12407.call(this,coll,k);
case  3 :
return G__12405__12408.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12405;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12270 = this;
var new_array__12271 = cljs.core.aclone.call(null,this__12270.array);

(new_array__12271[k] = v);
return (new cljs.core.Vector(this__12270.meta,new_array__12271));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12448 = null;
var G__12448__12449 = (function (coll,k){
var this__12275 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12448__12450 = (function (coll,k,not_found){
var this__12276 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12448 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12448__12449.call(this,coll,k);
case  3 :
return G__12448__12450.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12448;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12279 = this;
var new_array__12282 = cljs.core.aclone.call(null,this__12279.array);

new_array__12282.push(o);
return (new cljs.core.Vector(this__12279.meta,new_array__12282));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12456 = null;
var G__12456__12492 = (function (v,f){
var this__12284 = this;
return cljs.core.ci_reduce.call(null,this__12284.array,f);
});
var G__12456__12493 = (function (v,f,start){
var this__12285 = this;
return cljs.core.ci_reduce.call(null,this__12285.array,f,start);
});
G__12456 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12456__12492.call(this,v,f);
case  3 :
return G__12456__12493.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12456;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12286 = this;
if(cljs.core.truth_((this__12286.array.length > 0)))
{var vector_seq__12287 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12286.array.length)))
{return cljs.core.cons.call(null,(this__12286.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12287.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12288 = this;
return this__12288.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12289 = this;
var count__12291 = this__12289.array.length;

if(cljs.core.truth_((count__12291 > 0)))
{return (this__12289.array[(count__12291 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12293 = this;
if(cljs.core.truth_((this__12293.array.length > 0)))
{var new_array__12295 = cljs.core.aclone.call(null,this__12293.array);

new_array__12295.pop();
return (new cljs.core.Vector(this__12293.meta,new_array__12295));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12298 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12300 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12301 = this;
return (new cljs.core.Vector(meta,this__12301.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12303 = this;
return this__12303.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12540 = null;
var G__12540__12542 = (function (coll,n){
var this__12305 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12307 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12307))
{return (n < this__12305.array.length);
} else
{return and__3546__auto____12307;
}
})()))
{return (this__12305.array[n]);
} else
{return null;
}
});
var G__12540__12543 = (function (coll,n,not_found){
var this__12309 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12311 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12311))
{return (n < this__12309.array.length);
} else
{return and__3546__auto____12311;
}
})()))
{return (this__12309.array[n]);
} else
{return not_found;
}
});
G__12540 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12540__12542.call(this,coll,n);
case  3 :
return G__12540__12543.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12540;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12314 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12314.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12561){
var args = cljs.core.seq( arglist__12561 );;
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
var this__12568 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12639 = null;
var G__12639__12641 = (function (coll,k){
var this__12573 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12639__12642 = (function (coll,k,not_found){
var this__12575 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12639 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12639__12641.call(this,coll,k);
case  3 :
return G__12639__12642.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12639;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12577 = this;
var v_pos__12579 = (this__12577.start + key);

return (new cljs.core.Subvec(this__12577.meta,cljs.core._assoc.call(null,this__12577.v,v_pos__12579,val),this__12577.start,((this__12577.end > (v_pos__12579 + 1)) ? this__12577.end : (v_pos__12579 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12653 = null;
var G__12653__12654 = (function (coll,k){
var this__12583 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12653__12655 = (function (coll,k,not_found){
var this__12584 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12653 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12653__12654.call(this,coll,k);
case  3 :
return G__12653__12655.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12653;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12587 = this;
return (new cljs.core.Subvec(this__12587.meta,cljs.core._assoc_n.call(null,this__12587.v,this__12587.end,o),this__12587.start,(this__12587.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12664 = null;
var G__12664__12665 = (function (coll,f){
var this__12589 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12664__12666 = (function (coll,f,start){
var this__12594 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12664 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12664__12665.call(this,coll,f);
case  3 :
return G__12664__12666.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12664;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12596 = this;
var subvec_seq__12598 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12596.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12596.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12598.call(null,this__12596.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12599 = this;
return (this__12599.end - this__12599.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12601 = this;
return cljs.core._nth.call(null,this__12601.v,(this__12601.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12603 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12603.start,this__12603.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12603.meta,this__12603.v,this__12603.start,(this__12603.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12606 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12609 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12612 = this;
return (new cljs.core.Subvec(meta,this__12612.v,this__12612.start,this__12612.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12619 = this;
return this__12619.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12716 = null;
var G__12716__12717 = (function (coll,n){
var this__12626 = this;
return cljs.core._nth.call(null,this__12626.v,(this__12626.start + n));
});
var G__12716__12718 = (function (coll,n,not_found){
var this__12632 = this;
return cljs.core._nth.call(null,this__12632.v,(this__12632.start + n),not_found);
});
G__12716 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12716__12717.call(this,coll,n);
case  3 :
return G__12716__12718.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12716;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12635 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12635.meta);
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
var subvec__12730 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12731 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12730.call(this,v,start);
case  3 :
return subvec__12731.call(this,v,start,end);
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
var this__12754 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12755 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12756 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12757 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12757.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12763 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12766 = this;
return cljs.core._first.call(null,this__12766.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12769 = this;
var temp__3695__auto____12770 = cljs.core.next.call(null,this__12769.front);

if(cljs.core.truth_(temp__3695__auto____12770))
{var f1__12772 = temp__3695__auto____12770;

return (new cljs.core.PersistentQueueSeq(this__12769.meta,f1__12772,this__12769.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12769.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12769.meta,this__12769.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12776 = this;
return this__12776.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12777 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12777.front,this__12777.rear));
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
var this__12816 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12817 = this;
if(cljs.core.truth_(this__12817.front))
{return (new cljs.core.PersistentQueue(this__12817.meta,(this__12817.count + 1),this__12817.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12819 = this__12817.rear;

if(cljs.core.truth_(or__3548__auto____12819))
{return or__3548__auto____12819;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12817.meta,(this__12817.count + 1),cljs.core.conj.call(null,this__12817.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12820 = this;
var rear__12821 = cljs.core.seq.call(null,this__12820.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12822 = this__12820.front;

if(cljs.core.truth_(or__3548__auto____12822))
{return or__3548__auto____12822;
} else
{return rear__12821;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12820.front,cljs.core.seq.call(null,rear__12821)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12823 = this;
return this__12823.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12824 = this;
return cljs.core._first.call(null,this__12824.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12825 = this;
if(cljs.core.truth_(this__12825.front))
{var temp__3695__auto____12826 = cljs.core.next.call(null,this__12825.front);

if(cljs.core.truth_(temp__3695__auto____12826))
{var f1__12827 = temp__3695__auto____12826;

return (new cljs.core.PersistentQueue(this__12825.meta,(this__12825.count - 1),f1__12827,this__12825.rear));
} else
{return (new cljs.core.PersistentQueue(this__12825.meta,(this__12825.count - 1),cljs.core.seq.call(null,this__12825.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12828 = this;
return cljs.core.first.call(null,this__12828.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12830 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12838 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12840 = this;
return (new cljs.core.PersistentQueue(meta,this__12840.count,this__12840.front,this__12840.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12842 = this;
return this__12842.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12844 = this;
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
var this__12865 = this;
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
var len__12870 = array.length;

var i__12871 = 0;

while(true){
if(cljs.core.truth_((i__12871 < len__12870)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12871]))))
{return i__12871;
} else
{{
var G__12876 = (i__12871 + incr);
i__12871 = G__12876;
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
var obj_map_contains_key_QMARK___12882 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12883 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12879 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12879))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12879;
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
return obj_map_contains_key_QMARK___12882.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12883.call(this,k,strobj,true_val,false_val);
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
var this__12917 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13023 = null;
var G__13023__13024 = (function (coll,k){
var this__12922 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13023__13025 = (function (coll,k,not_found){
var this__12923 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12923.strobj,(this__12923.strobj[k]),not_found);
});
G__13023 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13023__13024.call(this,coll,k);
case  3 :
return G__13023__13025.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13023;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12928 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12931 = goog.object.clone.call(null,this__12928.strobj);
var overwrite_QMARK___12933 = new_strobj__12931.hasOwnProperty(k);

(new_strobj__12931[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12933))
{return (new cljs.core.ObjMap(this__12928.meta,this__12928.keys,new_strobj__12931));
} else
{var new_keys__12936 = cljs.core.aclone.call(null,this__12928.keys);

new_keys__12936.push(k);
return (new cljs.core.ObjMap(this__12928.meta,new_keys__12936,new_strobj__12931));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12928.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12941 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12941.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13032 = null;
var G__13032__13034 = (function (coll,k){
var this__12945 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13032__13036 = (function (coll,k,not_found){
var this__12995 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13032 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13032__13034.call(this,coll,k);
case  3 :
return G__13032__13036.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13032;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12997 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13004 = this;
if(cljs.core.truth_((this__13004.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12892_SHARP_){
return cljs.core.vector.call(null,p1__12892_SHARP_,(this__13004.strobj[p1__12892_SHARP_]));
}),this__13004.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13008 = this;
return this__13008.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13010 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13011 = this;
return (new cljs.core.ObjMap(meta,this__13011.keys,this__13011.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13012 = this;
return this__13012.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13016 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13016.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13018 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13019 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13019))
{return this__13018.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13019;
}
})()))
{var new_keys__13021 = cljs.core.aclone.call(null,this__13018.keys);
var new_strobj__13022 = goog.object.clone.call(null,this__13018.strobj);

new_keys__13021.splice(cljs.core.scan_array.call(null,1,k,new_keys__13021),1);
cljs.core.js_delete.call(null,new_strobj__13022,k);
return (new cljs.core.ObjMap(this__13018.meta,new_keys__13021,new_strobj__13022));
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
var this__13145 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13252 = null;
var G__13252__13253 = (function (coll,k){
var this__13147 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13252__13254 = (function (coll,k,not_found){
var this__13149 = this;
var bucket__13151 = (this__13149.hashobj[cljs.core.hash.call(null,k)]);
var i__13152 = (cljs.core.truth_(bucket__13151)?cljs.core.scan_array.call(null,2,k,bucket__13151):null);

if(cljs.core.truth_(i__13152))
{return (bucket__13151[(i__13152 + 1)]);
} else
{return not_found;
}
});
G__13252 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13252__13253.call(this,coll,k);
case  3 :
return G__13252__13254.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13252;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13155 = this;
var h__13156 = cljs.core.hash.call(null,k);
var bucket__13158 = (this__13155.hashobj[h__13156]);

if(cljs.core.truth_(bucket__13158))
{var new_bucket__13159 = cljs.core.aclone.call(null,bucket__13158);
var new_hashobj__13161 = goog.object.clone.call(null,this__13155.hashobj);

(new_hashobj__13161[h__13156] = new_bucket__13159);
var temp__3695__auto____13162 = cljs.core.scan_array.call(null,2,k,new_bucket__13159);

if(cljs.core.truth_(temp__3695__auto____13162))
{var i__13164 = temp__3695__auto____13162;

(new_bucket__13159[(i__13164 + 1)] = v);
return (new cljs.core.HashMap(this__13155.meta,this__13155.count,new_hashobj__13161));
} else
{new_bucket__13159.push(k,v);
return (new cljs.core.HashMap(this__13155.meta,(this__13155.count + 1),new_hashobj__13161));
}
} else
{var new_hashobj__13167 = goog.object.clone.call(null,this__13155.hashobj);

(new_hashobj__13167[h__13156] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13155.meta,(this__13155.count + 1),new_hashobj__13167));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13170 = this;
var bucket__13173 = (this__13170.hashobj[cljs.core.hash.call(null,k)]);
var i__13174 = (cljs.core.truth_(bucket__13173)?cljs.core.scan_array.call(null,2,k,bucket__13173):null);

if(cljs.core.truth_(i__13174))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13260 = null;
var G__13260__13261 = (function (coll,k){
var this__13176 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13260__13262 = (function (coll,k,not_found){
var this__13178 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13260 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13260__13261.call(this,coll,k);
case  3 :
return G__13260__13262.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13260;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13179 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13180 = this;
if(cljs.core.truth_((this__13180.count > 0)))
{var hashes__13185 = cljs.core.js_keys.call(null,this__13180.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13123_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13180.hashobj[p1__13123_SHARP_])));
}),hashes__13185);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13186 = this;
return this__13186.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13187 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13188 = this;
return (new cljs.core.HashMap(meta,this__13188.count,this__13188.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13189 = this;
return this__13189.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13190 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13190.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13191 = this;
var h__13192 = cljs.core.hash.call(null,k);
var bucket__13193 = (this__13191.hashobj[h__13192]);
var i__13194 = (cljs.core.truth_(bucket__13193)?cljs.core.scan_array.call(null,2,k,bucket__13193):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13194)))
{return coll;
} else
{var new_hashobj__13199 = goog.object.clone.call(null,this__13191.hashobj);

if(cljs.core.truth_((3 > bucket__13193.length)))
{cljs.core.js_delete.call(null,new_hashobj__13199,h__13192);
} else
{var new_bucket__13200 = cljs.core.aclone.call(null,bucket__13193);

new_bucket__13200.splice(i__13194,2);
(new_hashobj__13199[h__13192] = new_bucket__13200);
}
return (new cljs.core.HashMap(this__13191.meta,(this__13191.count - 1),new_hashobj__13199));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13269 = ks.length;

var i__13271 = 0;
var out__13273 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13271 < len__13269)))
{{
var G__13275 = (i__13271 + 1);
var G__13277 = cljs.core.assoc.call(null,out__13273,(ks[i__13271]),(vs[i__13271]));
i__13271 = G__13275;
out__13273 = G__13277;
continue;
}
} else
{return out__13273;
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
var in$__13279 = cljs.core.seq.call(null,keyvals);
var out__13281 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13279))
{{
var G__13283 = cljs.core.nnext.call(null,in$__13279);
var G__13284 = cljs.core.assoc.call(null,out__13281,cljs.core.first.call(null,in$__13279),cljs.core.second.call(null,in$__13279));
in$__13279 = G__13283;
out__13281 = G__13284;
continue;
}
} else
{return out__13281;
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
hash_map.cljs$lang$applyTo = (function (arglist__13288){
var keyvals = cljs.core.seq( arglist__13288 );;
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
{return cljs.core.reduce.call(null,(function (p1__13291_SHARP_,p2__13292_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13299 = p1__13291_SHARP_;

if(cljs.core.truth_(or__3548__auto____13299))
{return or__3548__auto____13299;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13292_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13303){
var maps = cljs.core.seq( arglist__13303 );;
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
{var merge_entry__13312 = (function (m,e){
var k__13307 = cljs.core.first.call(null,e);
var v__13308 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13307)))
{return cljs.core.assoc.call(null,m,k__13307,f.call(null,cljs.core.get.call(null,m,k__13307),v__13308));
} else
{return cljs.core.assoc.call(null,m,k__13307,v__13308);
}
});
var merge2__13333 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13312,(function (){var or__3548__auto____13332 = m1;

if(cljs.core.truth_(or__3548__auto____13332))
{return or__3548__auto____13332;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13333,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13340){
var f = cljs.core.first(arglist__13340);
var maps = cljs.core.rest(arglist__13340);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13345 = cljs.core.ObjMap.fromObject([],{});
var keys__13346 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13346))
{var key__13348 = cljs.core.first.call(null,keys__13346);
var entry__13349 = cljs.core.get.call(null,map,key__13348,"﷐'user/not-found");

{
var G__13354 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13349,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13345,key__13348,entry__13349):ret__13345);
var G__13355 = cljs.core.next.call(null,keys__13346);
ret__13345 = G__13354;
keys__13346 = G__13355;
continue;
}
} else
{return ret__13345;
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
var this__13364 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13396 = null;
var G__13396__13397 = (function (coll,v){
var this__13368 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13396__13398 = (function (coll,v,not_found){
var this__13369 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13369.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13396 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13396__13397.call(this,coll,v);
case  3 :
return G__13396__13398.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13396;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13401 = null;
var G__13401__13402 = (function (coll,k){
var this__13370 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13401__13403 = (function (coll,k,not_found){
var this__13371 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13401 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13401__13402.call(this,coll,k);
case  3 :
return G__13401__13403.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13401;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13376 = this;
return (new cljs.core.Set(this__13376.meta,cljs.core.assoc.call(null,this__13376.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13377 = this;
return cljs.core.keys.call(null,this__13377.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13382 = this;
return (new cljs.core.Set(this__13382.meta,cljs.core.dissoc.call(null,this__13382.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13383 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13384 = this;
var and__3546__auto____13385 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13385))
{var and__3546__auto____13387 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13387))
{return cljs.core.every_QMARK_.call(null,(function (p1__13342_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13342_SHARP_);
}),other);
} else
{return and__3546__auto____13387;
}
} else
{return and__3546__auto____13385;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13388 = this;
return (new cljs.core.Set(meta,this__13388.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13389 = this;
return this__13389.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13392 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13392.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13452 = cljs.core.seq.call(null,coll);
var out__13499 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13452))))
{{
var G__13503 = cljs.core.rest.call(null,in$__13452);
var G__13504 = cljs.core.conj.call(null,out__13499,cljs.core.first.call(null,in$__13452));
in$__13452 = G__13503;
out__13499 = G__13504;
continue;
}
} else
{return out__13499;
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
{var n__13509 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13510 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13510))
{var e__13511 = temp__3695__auto____13510;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13511));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13509,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13449_SHARP_){
var temp__3695__auto____13513 = cljs.core.find.call(null,smap,p1__13449_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13513))
{var e__13514 = temp__3695__auto____13513;

return cljs.core.second.call(null,e__13514);
} else
{return p1__13449_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13536 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13521,seen){
while(true){
var vec__13525__13527 = p__13521;
var f__13528 = cljs.core.nth.call(null,vec__13525__13527,0,null);
var xs__13529 = vec__13525__13527;

var temp__3698__auto____13530 = cljs.core.seq.call(null,xs__13529);

if(cljs.core.truth_(temp__3698__auto____13530))
{var s__13531 = temp__3698__auto____13530;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13528)))
{{
var G__13538 = cljs.core.rest.call(null,s__13531);
var G__13539 = seen;
p__13521 = G__13538;
seen = G__13539;
continue;
}
} else
{return cljs.core.cons.call(null,f__13528,step.call(null,cljs.core.rest.call(null,s__13531),cljs.core.conj.call(null,seen,f__13528)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13536.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13544 = cljs.core.Vector.fromArray([]);
var s__13546 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13546)))
{{
var G__13552 = cljs.core.conj.call(null,ret__13544,cljs.core.first.call(null,s__13546));
var G__13553 = cljs.core.next.call(null,s__13546);
ret__13544 = G__13552;
s__13546 = G__13553;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13544);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13556 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13556))
{return or__3548__auto____13556;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13557 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13557 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13557 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13570 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13570))
{return or__3548__auto____13570;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13573 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13573 > -1)))
{return cljs.core.subs.call(null,x,2,i__13573);
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
var map__13582 = cljs.core.ObjMap.fromObject([],{});
var ks__13583 = cljs.core.seq.call(null,keys);
var vs__13584 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13585 = ks__13583;

if(cljs.core.truth_(and__3546__auto____13585))
{return vs__13584;
} else
{return and__3546__auto____13585;
}
})()))
{{
var G__13637 = cljs.core.assoc.call(null,map__13582,cljs.core.first.call(null,ks__13583),cljs.core.first.call(null,vs__13584));
var G__13638 = cljs.core.next.call(null,ks__13583);
var G__13639 = cljs.core.next.call(null,vs__13584);
map__13582 = G__13637;
ks__13583 = G__13638;
vs__13584 = G__13639;
continue;
}
} else
{return map__13582;
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
var max_key__13650 = (function (k,x){
return x;
});
var max_key__13652 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13653 = (function() { 
var G__13659__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13580_SHARP_,p2__13581_SHARP_){
return max_key.call(null,k,p1__13580_SHARP_,p2__13581_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13659 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13659__delegate.call(this, k, x, y, more);
};
G__13659.cljs$lang$maxFixedArity = 3;
G__13659.cljs$lang$applyTo = (function (arglist__13661){
var k = cljs.core.first(arglist__13661);
var x = cljs.core.first(cljs.core.next(arglist__13661));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13661)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13661)));
return G__13659__delegate.call(this, k, x, y, more);
});
return G__13659;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13650.call(this,k,x);
case  3 :
return max_key__13652.call(this,k,x,y);
default:
return max_key__13653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13653.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13676 = (function (k,x){
return x;
});
var min_key__13677 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13678 = (function() { 
var G__13683__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13642_SHARP_,p2__13643_SHARP_){
return min_key.call(null,k,p1__13642_SHARP_,p2__13643_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13683 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13683__delegate.call(this, k, x, y, more);
};
G__13683.cljs$lang$maxFixedArity = 3;
G__13683.cljs$lang$applyTo = (function (arglist__13686){
var k = cljs.core.first(arglist__13686);
var x = cljs.core.first(cljs.core.next(arglist__13686));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13686)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13686)));
return G__13683__delegate.call(this, k, x, y, more);
});
return G__13683;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13676.call(this,k,x);
case  3 :
return min_key__13677.call(this,k,x,y);
default:
return min_key__13678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13678.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13703 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13704 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13694))
{var s__13698 = temp__3698__auto____13694;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13698),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13698)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13703.call(this,n,step);
case  3 :
return partition_all__13704.call(this,n,step,coll);
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
var temp__3698__auto____13716 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13716))
{var s__13718 = temp__3698__auto____13716;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13718))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13718),take_while.call(null,pred,cljs.core.rest.call(null,s__13718)));
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
var this__13730 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13736 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13879 = null;
var G__13879__13881 = (function (rng,f){
var this__13740 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13879__13882 = (function (rng,f,s){
var this__13742 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13879 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13879__13881.call(this,rng,f);
case  3 :
return G__13879__13882.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13879;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13744 = this;
var comp__13746 = (cljs.core.truth_((this__13744.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13746.call(null,this__13744.start,this__13744.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13748 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13748.end - this__13748.start) / this__13748.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13783 = this;
return this__13783.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13784 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13784.meta,(this__13784.start + this__13784.step),this__13784.end,this__13784.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13788 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13789 = this;
return (new cljs.core.Range(meta,this__13789.start,this__13789.end,this__13789.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13791 = this;
return this__13791.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13906 = null;
var G__13906__13910 = (function (rng,n){
var this__13863 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13863.start + (n * this__13863.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13864 = (this__13863.start > this__13863.end);

if(cljs.core.truth_(and__3546__auto____13864))
{return cljs.core._EQ_.call(null,this__13863.step,0);
} else
{return and__3546__auto____13864;
}
})()))
{return this__13863.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13906__13911 = (function (rng,n,not_found){
var this__13870 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13870.start + (n * this__13870.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13873 = (this__13870.start > this__13870.end);

if(cljs.core.truth_(and__3546__auto____13873))
{return cljs.core._EQ_.call(null,this__13870.step,0);
} else
{return and__3546__auto____13873;
}
})()))
{return this__13870.start;
} else
{return not_found;
}
}
});
G__13906 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13906__13910.call(this,rng,n);
case  3 :
return G__13906__13911.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13906;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13874 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13874.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13919 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13920 = (function (end){
return range.call(null,0,end,1);
});
var range__13921 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13922 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13919.call(this);
case  1 :
return range__13920.call(this,start);
case  2 :
return range__13921.call(this,start,end);
case  3 :
return range__13922.call(this,start,end,step);
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
var temp__3698__auto____13937 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13937))
{var s__13941 = temp__3698__auto____13937;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13941),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13941)));
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
var temp__3698__auto____13965 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13965))
{var s__13966 = temp__3698__auto____13965;

var fst__13967 = cljs.core.first.call(null,s__13966);
var fv__13968 = f.call(null,fst__13967);
var run__13969 = cljs.core.cons.call(null,fst__13967,cljs.core.take_while.call(null,(function (p1__13956_SHARP_){
return cljs.core._EQ_.call(null,fv__13968,f.call(null,p1__13956_SHARP_));
}),cljs.core.next.call(null,s__13966)));

return cljs.core.cons.call(null,run__13969,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13969),s__13966))));
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
var reductions__14188 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14163))
{var s__14164 = temp__3695__auto____14163;

return reductions.call(null,f,cljs.core.first.call(null,s__14164),cljs.core.rest.call(null,s__14164));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14189 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14183))
{var s__14184 = temp__3698__auto____14183;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14184)),cljs.core.rest.call(null,s__14184));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14188.call(this,f,init);
case  3 :
return reductions__14189.call(this,f,init,coll);
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
var juxt__14234 = (function (f){
return (function() {
var G__14239 = null;
var G__14239__14240 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14239__14241 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14239__14242 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14239__14244 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14239__14245 = (function() { 
var G__14250__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14250 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14250__delegate.call(this, x, y, z, args);
};
G__14250.cljs$lang$maxFixedArity = 3;
G__14250.cljs$lang$applyTo = (function (arglist__14252){
var x = cljs.core.first(arglist__14252);
var y = cljs.core.first(cljs.core.next(arglist__14252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14252)));
return G__14250__delegate.call(this, x, y, z, args);
});
return G__14250;
})()
;
G__14239 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14239__14240.call(this);
case  1 :
return G__14239__14241.call(this,x);
case  2 :
return G__14239__14242.call(this,x,y);
case  3 :
return G__14239__14244.call(this,x,y,z);
default:
return G__14239__14245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14239.cljs$lang$maxFixedArity = 3;
G__14239.cljs$lang$applyTo = G__14239__14245.cljs$lang$applyTo;
return G__14239;
})()
});
var juxt__14235 = (function (f,g){
return (function() {
var G__14254 = null;
var G__14254__14255 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14254__14256 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14254__14258 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14254__14259 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14254__14260 = (function() { 
var G__14270__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14270 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14270__delegate.call(this, x, y, z, args);
};
G__14270.cljs$lang$maxFixedArity = 3;
G__14270.cljs$lang$applyTo = (function (arglist__14274){
var x = cljs.core.first(arglist__14274);
var y = cljs.core.first(cljs.core.next(arglist__14274));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14274)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14274)));
return G__14270__delegate.call(this, x, y, z, args);
});
return G__14270;
})()
;
G__14254 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14254__14255.call(this);
case  1 :
return G__14254__14256.call(this,x);
case  2 :
return G__14254__14258.call(this,x,y);
case  3 :
return G__14254__14259.call(this,x,y,z);
default:
return G__14254__14260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14254.cljs$lang$maxFixedArity = 3;
G__14254.cljs$lang$applyTo = G__14254__14260.cljs$lang$applyTo;
return G__14254;
})()
});
var juxt__14236 = (function (f,g,h){
return (function() {
var G__14278 = null;
var G__14278__14279 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14278__14280 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14278__14281 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14278__14282 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14278__14283 = (function() { 
var G__14288__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14288 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14288__delegate.call(this, x, y, z, args);
};
G__14288.cljs$lang$maxFixedArity = 3;
G__14288.cljs$lang$applyTo = (function (arglist__14290){
var x = cljs.core.first(arglist__14290);
var y = cljs.core.first(cljs.core.next(arglist__14290));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14290)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14290)));
return G__14288__delegate.call(this, x, y, z, args);
});
return G__14288;
})()
;
G__14278 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14278__14279.call(this);
case  1 :
return G__14278__14280.call(this,x);
case  2 :
return G__14278__14281.call(this,x,y);
case  3 :
return G__14278__14282.call(this,x,y,z);
default:
return G__14278__14283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14278.cljs$lang$maxFixedArity = 3;
G__14278.cljs$lang$applyTo = G__14278__14283.cljs$lang$applyTo;
return G__14278;
})()
});
var juxt__14237 = (function() { 
var G__14291__delegate = function (f,g,h,fs){
var fs__14220 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14292 = null;
var G__14292__14293 = (function (){
return cljs.core.reduce.call(null,(function (p1__14151_SHARP_,p2__14152_SHARP_){
return cljs.core.conj.call(null,p1__14151_SHARP_,p2__14152_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14220);
});
var G__14292__14294 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14155_SHARP_,p2__14156_SHARP_){
return cljs.core.conj.call(null,p1__14155_SHARP_,p2__14156_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14220);
});
var G__14292__14295 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14157_SHARP_,p2__14158_SHARP_){
return cljs.core.conj.call(null,p1__14157_SHARP_,p2__14158_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14220);
});
var G__14292__14296 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14159_SHARP_,p2__14160_SHARP_){
return cljs.core.conj.call(null,p1__14159_SHARP_,p2__14160_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14220);
});
var G__14292__14297 = (function() { 
var G__14377__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14161_SHARP_,p2__14162_SHARP_){
return cljs.core.conj.call(null,p1__14161_SHARP_,cljs.core.apply.call(null,p2__14162_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14220);
};
var G__14377 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14377__delegate.call(this, x, y, z, args);
};
G__14377.cljs$lang$maxFixedArity = 3;
G__14377.cljs$lang$applyTo = (function (arglist__14380){
var x = cljs.core.first(arglist__14380);
var y = cljs.core.first(cljs.core.next(arglist__14380));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14380)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14380)));
return G__14377__delegate.call(this, x, y, z, args);
});
return G__14377;
})()
;
G__14292 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14292__14293.call(this);
case  1 :
return G__14292__14294.call(this,x);
case  2 :
return G__14292__14295.call(this,x,y);
case  3 :
return G__14292__14296.call(this,x,y,z);
default:
return G__14292__14297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14292.cljs$lang$maxFixedArity = 3;
G__14292.cljs$lang$applyTo = G__14292__14297.cljs$lang$applyTo;
return G__14292;
})()
};
var G__14291 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14291__delegate.call(this, f, g, h, fs);
};
G__14291.cljs$lang$maxFixedArity = 3;
G__14291.cljs$lang$applyTo = (function (arglist__14386){
var f = cljs.core.first(arglist__14386);
var g = cljs.core.first(cljs.core.next(arglist__14386));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14386)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14386)));
return G__14291__delegate.call(this, f, g, h, fs);
});
return G__14291;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14234.call(this,f);
case  2 :
return juxt__14235.call(this,f,g);
case  3 :
return juxt__14236.call(this,f,g,h);
default:
return juxt__14237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14237.cljs$lang$applyTo;
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
var dorun__14398 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14402 = cljs.core.next.call(null,coll);
coll = G__14402;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14399 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14391 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14391))
{return (n > 0);
} else
{return and__3546__auto____14391;
}
})()))
{{
var G__14405 = (n - 1);
var G__14406 = cljs.core.next.call(null,coll);
n = G__14405;
coll = G__14406;
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
return dorun__14398.call(this,n);
case  2 :
return dorun__14399.call(this,n,coll);
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
var doall__14420 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14421 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14420.call(this,n);
case  2 :
return doall__14421.call(this,n,coll);
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
var matches__14428 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14428),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14428),1)))
{return cljs.core.first.call(null,matches__14428);
} else
{return cljs.core.vec.call(null,matches__14428);
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
var matches__14441 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14441)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14441),1)))
{return cljs.core.first.call(null,matches__14441);
} else
{return cljs.core.vec.call(null,matches__14441);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14449 = cljs.core.re_find.call(null,re,s);
var match_idx__14450 = s.search(re);
var match_str__14451 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14449))?cljs.core.first.call(null,match_data__14449):match_data__14449);
var post_match__14456 = cljs.core.subs.call(null,s,(match_idx__14450 + cljs.core.count.call(null,match_str__14451)));

if(cljs.core.truth_(match_data__14449))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14449,re_seq.call(null,re,post_match__14456));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14473_SHARP_){
return print_one.call(null,p1__14473_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14500 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14500))
{var and__3546__auto____14509 = (function (){var x__445__auto____14501 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14502 = x__445__auto____14501;

if(cljs.core.truth_(and__3546__auto____14502))
{var and__3546__auto____14507 = x__445__auto____14501.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14507))
{return cljs.core.not.call(null,x__445__auto____14501.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14507;
}
} else
{return and__3546__auto____14502;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14501);
}
})();

if(cljs.core.truth_(and__3546__auto____14509))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14509;
}
} else
{return and__3546__auto____14500;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14510 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14511 = x__445__auto____14510;

if(cljs.core.truth_(and__3546__auto____14511))
{var and__3546__auto____14512 = x__445__auto____14510.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14512))
{return cljs.core.not.call(null,x__445__auto____14510.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14512;
}
} else
{return and__3546__auto____14511;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14510);
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
var first_obj__14522 = cljs.core.first.call(null,objs);
var sb__14523 = (new goog.string.StringBuffer());

var G__14524__14525 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14524__14525))
{var obj__14526 = cljs.core.first.call(null,G__14524__14525);
var G__14524__14527 = G__14524__14525;

while(true){
if(cljs.core.truth_((obj__14526 === first_obj__14522)))
{} else
{sb__14523.append(" ");
}
var G__14528__14529 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14526,opts));

if(cljs.core.truth_(G__14528__14529))
{var string__14530 = cljs.core.first.call(null,G__14528__14529);
var G__14528__14531 = G__14528__14529;

while(true){
sb__14523.append(string__14530);
var temp__3698__auto____14533 = cljs.core.next.call(null,G__14528__14531);

if(cljs.core.truth_(temp__3698__auto____14533))
{var G__14528__14535 = temp__3698__auto____14533;

{
var G__14543 = cljs.core.first.call(null,G__14528__14535);
var G__14544 = G__14528__14535;
string__14530 = G__14543;
G__14528__14531 = G__14544;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14537 = cljs.core.next.call(null,G__14524__14527);

if(cljs.core.truth_(temp__3698__auto____14537))
{var G__14524__14538 = temp__3698__auto____14537;

{
var G__14545 = cljs.core.first.call(null,G__14524__14538);
var G__14546 = G__14524__14538;
obj__14526 = G__14545;
G__14524__14527 = G__14546;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14523);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14547 = cljs.core.first.call(null,objs);

var G__14548__14549 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14548__14549))
{var obj__14550 = cljs.core.first.call(null,G__14548__14549);
var G__14548__14551 = G__14548__14549;

while(true){
if(cljs.core.truth_((obj__14550 === first_obj__14547)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14552__14553 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14550,opts));

if(cljs.core.truth_(G__14552__14553))
{var string__14555 = cljs.core.first.call(null,G__14552__14553);
var G__14552__14556 = G__14552__14553;

while(true){
cljs.core.string_print.call(null,string__14555);
var temp__3698__auto____14559 = cljs.core.next.call(null,G__14552__14556);

if(cljs.core.truth_(temp__3698__auto____14559))
{var G__14552__14560 = temp__3698__auto____14559;

{
var G__14565 = cljs.core.first.call(null,G__14552__14560);
var G__14566 = G__14552__14560;
string__14555 = G__14565;
G__14552__14556 = G__14566;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14563 = cljs.core.next.call(null,G__14548__14551);

if(cljs.core.truth_(temp__3698__auto____14563))
{var G__14548__14564 = temp__3698__auto____14563;

{
var G__14567 = cljs.core.first.call(null,G__14548__14564);
var G__14568 = G__14548__14564;
obj__14550 = G__14567;
G__14548__14551 = G__14568;
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
pr_str.cljs$lang$applyTo = (function (arglist__14572){
var objs = cljs.core.seq( arglist__14572 );;
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
pr.cljs$lang$applyTo = (function (arglist__14574){
var objs = cljs.core.seq( arglist__14574 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14577){
var objs = cljs.core.seq( arglist__14577 );;
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
println.cljs$lang$applyTo = (function (arglist__14590){
var objs = cljs.core.seq( arglist__14590 );;
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
prn.cljs$lang$applyTo = (function (arglist__14604){
var objs = cljs.core.seq( arglist__14604 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14608 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14608,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14640 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14640))
{var nspc__14641 = temp__3698__auto____14640;

return cljs.core.str.call(null,nspc__14641,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14644 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14644))
{var nspc__14645 = temp__3698__auto____14644;

return cljs.core.str.call(null,nspc__14645,"/");
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
var pr_pair__14661 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14661,"{",", ","}",opts,coll);
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
var this__14735 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14737 = this;
var G__14762__14763 = cljs.core.seq.call(null,this__14737.watches);

if(cljs.core.truth_(G__14762__14763))
{var G__14765__14767 = cljs.core.first.call(null,G__14762__14763);
var vec__14766__14768 = G__14765__14767;
var key__14769 = cljs.core.nth.call(null,vec__14766__14768,0,null);
var f__14770 = cljs.core.nth.call(null,vec__14766__14768,1,null);
var G__14762__14771 = G__14762__14763;

var G__14765__14772 = G__14765__14767;
var G__14762__14773 = G__14762__14771;

while(true){
var vec__14774__14775 = G__14765__14772;
var key__14776 = cljs.core.nth.call(null,vec__14774__14775,0,null);
var f__14777 = cljs.core.nth.call(null,vec__14774__14775,1,null);
var G__14762__14778 = G__14762__14773;

f__14777.call(null,key__14776,this$,oldval,newval);
var temp__3698__auto____14779 = cljs.core.next.call(null,G__14762__14778);

if(cljs.core.truth_(temp__3698__auto____14779))
{var G__14762__14780 = temp__3698__auto____14779;

{
var G__14806 = cljs.core.first.call(null,G__14762__14780);
var G__14807 = G__14762__14780;
G__14765__14772 = G__14806;
G__14762__14773 = G__14807;
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
var this__14781 = this;
return this$.watches = cljs.core.assoc.call(null,this__14781.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14783 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14783.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14786 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14786.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14790 = this;
return this__14790.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14791 = this;
return this__14791.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14792 = this;
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
var atom__14825 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14826 = (function() { 
var G__14828__delegate = function (x,p__14816){
var map__14817__14818 = p__14816;
var map__14817__14819 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14817__14818))?cljs.core.apply.call(null,cljs.core.hash_map,map__14817__14818):map__14817__14818);
var validator__14820 = cljs.core.get.call(null,map__14817__14819,"﷐'validator");
var meta__14821 = cljs.core.get.call(null,map__14817__14819,"﷐'meta");

return (new cljs.core.Atom(x,meta__14821,validator__14820,null));
};
var G__14828 = function (x,var_args){
var p__14816 = null;
if (goog.isDef(var_args)) {
  p__14816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14828__delegate.call(this, x, p__14816);
};
G__14828.cljs$lang$maxFixedArity = 1;
G__14828.cljs$lang$applyTo = (function (arglist__14830){
var x = cljs.core.first(arglist__14830);
var p__14816 = cljs.core.rest(arglist__14830);
return G__14828__delegate.call(this, x, p__14816);
});
return G__14828;
})()
;
atom = function(x,var_args){
var p__14816 = var_args;
switch(arguments.length){
case  1 :
return atom__14825.call(this,x);
default:
return atom__14826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14826.cljs$lang$applyTo;
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
{var validate__14840 = temp__3698__auto____14837;

if(cljs.core.truth_(validate__14840.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14843 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14843,new_value);
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
var swap_BANG___14854 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14855 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14856 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14857 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14858 = (function() { 
var G__14868__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14868 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14868__delegate.call(this, a, f, x, y, z, more);
};
G__14868.cljs$lang$maxFixedArity = 5;
G__14868.cljs$lang$applyTo = (function (arglist__14869){
var a = cljs.core.first(arglist__14869);
var f = cljs.core.first(cljs.core.next(arglist__14869));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14869)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14869))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14869)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14869)))));
return G__14868__delegate.call(this, a, f, x, y, z, more);
});
return G__14868;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14854.call(this,a,f);
case  3 :
return swap_BANG___14855.call(this,a,f,x);
case  4 :
return swap_BANG___14856.call(this,a,f,x,y);
case  5 :
return swap_BANG___14857.call(this,a,f,x,y,z);
default:
return swap_BANG___14858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14858.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14916){
var iref = cljs.core.first(arglist__14916);
var f = cljs.core.first(cljs.core.next(arglist__14916));
var args = cljs.core.rest(cljs.core.next(arglist__14916));
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
var gensym__14932 = (function (){
return gensym.call(null,"G__");
});
var gensym__14933 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14932.call(this);
case  1 :
return gensym__14933.call(this,prefix_string);
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
var this__14940 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14940.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14944 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14944.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14944.state,this__14944.f);
}
return cljs.core.deref.call(null,this__14944.state);
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
delay.cljs$lang$applyTo = (function (arglist__14950){
var body = cljs.core.seq( arglist__14950 );;
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
var map__14958__14959 = options;
var map__14958__14961 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14958__14959))?cljs.core.apply.call(null,cljs.core.hash_map,map__14958__14959):map__14958__14959);
var keywordize_keys__14962 = cljs.core.get.call(null,map__14958__14961,"﷐'keywordize-keys");
var keyfn__14963 = (cljs.core.truth_(keywordize_keys__14962)?cljs.core.keyword:cljs.core.str);
var f__14976 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14975 = (function iter__14968(s__14969){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14969__14971 = s__14969;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14969__14971)))
{var k__14972 = cljs.core.first.call(null,s__14969__14971);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14963.call(null,k__14972),thisfn.call(null,(x[k__14972]))]),iter__14968.call(null,cljs.core.rest.call(null,s__14969__14971)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14975.call(null,cljs.core.js_keys.call(null,x));
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

return f__14976.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14992){
var x = cljs.core.first(arglist__14992);
var options = cljs.core.rest(arglist__14992);
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
var mem__14993 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15001__delegate = function (args){
var temp__3695__auto____14995 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14993),args);

if(cljs.core.truth_(temp__3695__auto____14995))
{var v__14997 = temp__3695__auto____14995;

return v__14997;
} else
{var ret__14999 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14993,cljs.core.assoc,args,ret__14999);
return ret__14999;
}
};
var G__15001 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15001__delegate.call(this, args);
};
G__15001.cljs$lang$maxFixedArity = 0;
G__15001.cljs$lang$applyTo = (function (arglist__15007){
var args = cljs.core.seq( arglist__15007 );;
return G__15001__delegate.call(this, args);
});
return G__15001;
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
var trampoline__15013 = (function (f){
while(true){
var ret__15009 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15009)))
{{
var G__15019 = ret__15009;
f = G__15019;
continue;
}
} else
{return ret__15009;
}
break;
}
});
var trampoline__15015 = (function() { 
var G__15020__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15020 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15020__delegate.call(this, f, args);
};
G__15020.cljs$lang$maxFixedArity = 1;
G__15020.cljs$lang$applyTo = (function (arglist__15023){
var f = cljs.core.first(arglist__15023);
var args = cljs.core.rest(arglist__15023);
return G__15020__delegate.call(this, f, args);
});
return G__15020;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15013.call(this,f);
default:
return trampoline__15015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15015.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15031 = (function (){
return rand.call(null,1);
});
var rand__15032 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15031.call(this);
case  1 :
return rand__15032.call(this,n);
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
var k__15043 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15043,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15043,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15132 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15133 = (function (h,child,parent){
var or__3548__auto____15108 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15108))
{return or__3548__auto____15108;
} else
{var or__3548__auto____15111 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{var and__3546__auto____15112 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15112))
{var and__3546__auto____15117 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15117))
{var and__3546__auto____15118 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15118))
{var ret__15120 = true;
var i__15121 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15123 = cljs.core.not.call(null,ret__15120);

if(cljs.core.truth_(or__3548__auto____15123))
{return or__3548__auto____15123;
} else
{return cljs.core._EQ_.call(null,i__15121,cljs.core.count.call(null,parent));
}
})()))
{return ret__15120;
} else
{{
var G__15142 = isa_QMARK_.call(null,h,child.call(null,i__15121),parent.call(null,i__15121));
var G__15143 = (i__15121 + 1);
ret__15120 = G__15142;
i__15121 = G__15143;
continue;
}
}
break;
}
} else
{return and__3546__auto____15118;
}
} else
{return and__3546__auto____15117;
}
} else
{return and__3546__auto____15112;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15132.call(this,h,child);
case  3 :
return isa_QMARK___15133.call(this,h,child,parent);
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
var parents__15148 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15149 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15148.call(this,h);
case  2 :
return parents__15149.call(this,h,tag);
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
var ancestors__15155 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15156 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15155.call(this,h);
case  2 :
return ancestors__15156.call(this,h,tag);
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
var descendants__15159 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15160 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15159.call(this,h);
case  2 :
return descendants__15160.call(this,h,tag);
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
var derive__15200 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15201 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15191 = "﷐'parents".call(null,h);
var td__15192 = "﷐'descendants".call(null,h);
var ta__15193 = "﷐'ancestors".call(null,h);
var tf__15195 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15197 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15191.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15193.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15193.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15191,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15195.call(null,"﷐'ancestors".call(null,h),tag,td__15192,parent,ta__15193),"﷐'descendants":tf__15195.call(null,"﷐'descendants".call(null,h),parent,ta__15193,tag,td__15192)});
})());

if(cljs.core.truth_(or__3548__auto____15197))
{return or__3548__auto____15197;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15200.call(this,h,tag);
case  3 :
return derive__15201.call(this,h,tag,parent);
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
var underive__15250 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15251 = (function (h,tag,parent){
var parentMap__15230 = "﷐'parents".call(null,h);
var childsParents__15231 = (cljs.core.truth_(parentMap__15230.call(null,tag))?cljs.core.disj.call(null,parentMap__15230.call(null,tag),parent):cljs.core.set([]));
var newParents__15233 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15231))?cljs.core.assoc.call(null,parentMap__15230,tag,childsParents__15231):cljs.core.dissoc.call(null,parentMap__15230,tag));
var deriv_seq__15238 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15177_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15177_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15177_SHARP_),cljs.core.second.call(null,p1__15177_SHARP_)));
}),cljs.core.seq.call(null,newParents__15233)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15230.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15178_SHARP_,p2__15179_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15178_SHARP_,p2__15179_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15238));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15250.call(this,h,tag);
case  3 :
return underive__15251.call(this,h,tag,parent);
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
var xprefs__15272 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15275 = (cljs.core.truth_((function (){var and__3546__auto____15273 = xprefs__15272;

if(cljs.core.truth_(and__3546__auto____15273))
{return xprefs__15272.call(null,y);
} else
{return and__3546__auto____15273;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15275))
{return or__3548__auto____15275;
} else
{var or__3548__auto____15279 = (function (){var ps__15276 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15276) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15276),prefer_table)))
{} else
{}
{
var G__15356 = cljs.core.rest.call(null,ps__15276);
ps__15276 = G__15356;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15279))
{return or__3548__auto____15279;
} else
{var or__3548__auto____15286 = (function (){var ps__15282 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15282) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15282),y,prefer_table)))
{} else
{}
{
var G__15360 = cljs.core.rest.call(null,ps__15282);
ps__15282 = G__15360;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15286))
{return or__3548__auto____15286;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15362 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15362))
{return or__3548__auto____15362;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15379 = cljs.core.reduce.call(null,(function (be,p__15367){
var vec__15368__15369 = p__15367;
var k__15370 = cljs.core.nth.call(null,vec__15368__15369,0,null);
var ___15371 = cljs.core.nth.call(null,vec__15368__15369,1,null);
var e__15373 = vec__15368__15369;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15370)))
{var be2__15377 = (cljs.core.truth_((function (){var or__3548__auto____15376 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15376))
{return or__3548__auto____15376;
} else
{return cljs.core.dominates.call(null,k__15370,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15373:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15377),k__15370,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15370," and ",cljs.core.first.call(null,be2__15377),", and neither is preferred")));
}
return be2__15377;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15379))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15379));
return cljs.core.second.call(null,best_entry__15379);
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
if(cljs.core.truth_((function (){var and__3546__auto____15399 = mf;

if(cljs.core.truth_(and__3546__auto____15399))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15399;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15400 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{var or__3548__auto____15401 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15404 = mf;

if(cljs.core.truth_(and__3546__auto____15404))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15404;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15460 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15460))
{return or__3548__auto____15460;
} else
{var or__3548__auto____15463 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15467 = mf;

if(cljs.core.truth_(and__3546__auto____15467))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15467;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15469 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15469))
{return or__3548__auto____15469;
} else
{var or__3548__auto____15470 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15470))
{return or__3548__auto____15470;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15471 = mf;

if(cljs.core.truth_(and__3546__auto____15471))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15471;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15472 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15472))
{return or__3548__auto____15472;
} else
{var or__3548__auto____15473 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15474 = mf;

if(cljs.core.truth_(and__3546__auto____15474))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15474;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15475 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15475))
{return or__3548__auto____15475;
} else
{var or__3548__auto____15476 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15476))
{return or__3548__auto____15476;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15479 = mf;

if(cljs.core.truth_(and__3546__auto____15479))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15479;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15480 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15480))
{return or__3548__auto____15480;
} else
{var or__3548__auto____15483 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15483))
{return or__3548__auto____15483;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15490 = mf;

if(cljs.core.truth_(and__3546__auto____15490))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15490;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15494 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15494))
{return or__3548__auto____15494;
} else
{var or__3548__auto____15495 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15495))
{return or__3548__auto____15495;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15501 = mf;

if(cljs.core.truth_(and__3546__auto____15501))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15501;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15503 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15503))
{return or__3548__auto____15503;
} else
{var or__3548__auto____15506 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15506))
{return or__3548__auto____15506;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15550 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15551 = cljs.core._get_method.call(null,mf,dispatch_val__15550);

if(cljs.core.truth_(target_fn__15551))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15550)));
}
return cljs.core.apply.call(null,target_fn__15551,args);
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
var this__15567 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15568 = this;
cljs.core.swap_BANG_.call(null,this__15568.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15568.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15568.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15568.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15569 = this;
cljs.core.swap_BANG_.call(null,this__15569.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15569.method_cache,this__15569.method_table,this__15569.cached_hierarchy,this__15569.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15570 = this;
cljs.core.swap_BANG_.call(null,this__15570.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15570.method_cache,this__15570.method_table,this__15570.cached_hierarchy,this__15570.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15571 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15571.cached_hierarchy),cljs.core.deref.call(null,this__15571.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15571.method_cache,this__15571.method_table,this__15571.cached_hierarchy,this__15571.hierarchy);
}
var temp__3695__auto____15572 = cljs.core.deref.call(null,this__15571.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15572))
{var target_fn__15573 = temp__3695__auto____15572;

return target_fn__15573;
} else
{var temp__3695__auto____15574 = cljs.core.find_and_cache_best_method.call(null,this__15571.name,dispatch_val,this__15571.hierarchy,this__15571.method_table,this__15571.prefer_table,this__15571.method_cache,this__15571.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15574))
{var target_fn__15575 = temp__3695__auto____15574;

return target_fn__15575;
} else
{return cljs.core.deref.call(null,this__15571.method_table).call(null,this__15571.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15576 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15576.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15576.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15576.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15576.method_cache,this__15576.method_table,this__15576.cached_hierarchy,this__15576.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15588 = this;
return cljs.core.deref.call(null,this__15588.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15590 = this;
return cljs.core.deref.call(null,this__15590.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15594 = this;
return cljs.core.do_dispatch.call(null,mf,this__15594.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15621__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15621 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15621__delegate.call(this, _, args);
};
G__15621.cljs$lang$maxFixedArity = 1;
G__15621.cljs$lang$applyTo = (function (arglist__15622){
var _ = cljs.core.first(arglist__15622);
var args = cljs.core.rest(arglist__15622);
return G__15621__delegate.call(this, _, args);
});
return G__15621;
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
