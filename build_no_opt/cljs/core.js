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
var or__3548__auto____7263 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{var or__3548__auto____7264 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
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
var _invoke__7561 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7269 = this$;

if(cljs.core.truth_(and__3546__auto____7269))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7269;
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
var _invoke__7562 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7274 = this$;

if(cljs.core.truth_(and__3546__auto____7274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7563 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7289 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{var or__3548__auto____7290 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7564 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7291 = this$;

if(cljs.core.truth_(and__3546__auto____7291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7292 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7292))
{return or__3548__auto____7292;
} else
{var or__3548__auto____7294 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7565 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7295 = this$;

if(cljs.core.truth_(and__3546__auto____7295))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7295;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
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
var _invoke__7566 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
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
var _invoke__7568 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = this$;

if(cljs.core.truth_(and__3546__auto____7317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7320 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{var or__3548__auto____7323 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7323))
{return or__3548__auto____7323;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7569 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7327 = this$;

if(cljs.core.truth_(and__3546__auto____7327))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7327;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
} else
{var or__3548__auto____7333 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7570 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = this$;

if(cljs.core.truth_(and__3546__auto____7337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7340 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7571 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7343 = this$;

if(cljs.core.truth_(and__3546__auto____7343))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7343;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7572 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7349 = this$;

if(cljs.core.truth_(and__3546__auto____7349))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7349;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7573 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7574 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7355 = this$;

if(cljs.core.truth_(and__3546__auto____7355))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7355;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7356 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{var or__3548__auto____7357 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7575 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7358 = this$;

if(cljs.core.truth_(and__3546__auto____7358))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7358;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7576 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7446 = this$;

if(cljs.core.truth_(and__3546__auto____7446))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7446;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7577 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7459 = this$;

if(cljs.core.truth_(and__3546__auto____7459))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7459;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
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
var _invoke__7578 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7471 = this$;

if(cljs.core.truth_(and__3546__auto____7471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{var or__3548__auto____7506 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7579 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7510 = this$;

if(cljs.core.truth_(and__3546__auto____7510))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7510;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7513 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{var or__3548__auto____7516 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7580 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7519 = this$;

if(cljs.core.truth_(and__3546__auto____7519))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7519;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7540 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{var or__3548__auto____7541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7581 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7549 = this$;

if(cljs.core.truth_(and__3546__auto____7549))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7549;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7553 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7553))
{return or__3548__auto____7553;
} else
{var or__3548__auto____7555 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
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
return _invoke__7561.call(this,this$);
case  2 :
return _invoke__7562.call(this,this$,a);
case  3 :
return _invoke__7563.call(this,this$,a,b);
case  4 :
return _invoke__7564.call(this,this$,a,b,c);
case  5 :
return _invoke__7565.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7566.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7568.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7569.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7570.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7571.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7572.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7573.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7574.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7575.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7576.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7577.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7578.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7579.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7580.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7581.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7726 = coll;

if(cljs.core.truth_(and__3546__auto____7726))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7726;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7727 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7728 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7730 = coll;

if(cljs.core.truth_(and__3546__auto____7730))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7730;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7734 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7736 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7740 = coll;

if(cljs.core.truth_(and__3546__auto____7740))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7740;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7743 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{var or__3548__auto____7744 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
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
var _nth__7762 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7751;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7763 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7759 = coll;

if(cljs.core.truth_(and__3546__auto____7759))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7759;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7760 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{var or__3548__auto____7761 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
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
return _nth__7762.call(this,coll,n);
case  3 :
return _nth__7763.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7771 = coll;

if(cljs.core.truth_(and__3546__auto____7771))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7771;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7773 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
} else
{var or__3548__auto____7775 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7780 = coll;

if(cljs.core.truth_(and__3546__auto____7780))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7780;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7784 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{var or__3548__auto____7785 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
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
var _lookup__7821 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7798 = o;

if(cljs.core.truth_(and__3546__auto____7798))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7798;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7806 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7822 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7809 = o;

if(cljs.core.truth_(and__3546__auto____7809))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7809;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7816 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{var or__3548__auto____7817 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
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
return _lookup__7821.call(this,o,k);
case  3 :
return _lookup__7822.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7831 = coll;

if(cljs.core.truth_(and__3546__auto____7831))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7831;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7838 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7838))
{return or__3548__auto____7838;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7847 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{var or__3548__auto____7849 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7861 = coll;

if(cljs.core.truth_(and__3546__auto____7861))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7861;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7864 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{var or__3548__auto____7868 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7877 = coll;

if(cljs.core.truth_(and__3546__auto____7877))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7877;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7879 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{var or__3548__auto____7880 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7888 = coll;

if(cljs.core.truth_(and__3546__auto____7888))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7888;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7889 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{var or__3548__auto____7891 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7901 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{var or__3548__auto____7902 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7916 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7922 = o;

if(cljs.core.truth_(and__3546__auto____7922))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7922;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7926 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7931 = o;

if(cljs.core.truth_(and__3546__auto____7931))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7931;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7943 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7943))
{return or__3548__auto____7943;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7954 = o;

if(cljs.core.truth_(and__3546__auto____7954))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7954;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7959 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7999 = o;

if(cljs.core.truth_(and__3546__auto____7999))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7999;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8004 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
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
var _reduce__8018 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = coll;

if(cljs.core.truth_(and__3546__auto____8008))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8008;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8010 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{var or__3548__auto____8012 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8019 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8014 = coll;

if(cljs.core.truth_(and__3546__auto____8014))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8014;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{var or__3548__auto____8017 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
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
return _reduce__8018.call(this,coll,f);
case  3 :
return _reduce__8019.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8029 = o;

if(cljs.core.truth_(and__3546__auto____8029))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8029;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8033 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8034 = o;

if(cljs.core.truth_(and__3546__auto____8034))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8034;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8035 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{var or__3548__auto____8037 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8037))
{return or__3548__auto____8037;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8040 = o;

if(cljs.core.truth_(and__3546__auto____8040))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8040;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8041 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{var or__3548__auto____8045 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
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
if(cljs.core.truth_((function (){var and__3546__auto____8060 = o;

if(cljs.core.truth_(and__3546__auto____8060))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8060;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8063 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8064 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8072 = d;

if(cljs.core.truth_(and__3546__auto____8072))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8072;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8075 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{var or__3548__auto____8076 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = this$;

if(cljs.core.truth_(and__3546__auto____8085))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8085;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8088 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8088))
{return or__3548__auto____8088;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8089 = this$;

if(cljs.core.truth_(and__3546__auto____8089))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8089;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8091 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{var or__3548__auto____8093 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8098 = this$;

if(cljs.core.truth_(and__3546__auto____8098))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8098;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8101 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{var or__3548__auto____8104 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
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
var G__8167 = null;
var G__8167__8168 = (function (o,k){
return null;
});
var G__8167__8169 = (function (o,k,not_found){
return not_found;
});
G__8167 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8167__8168.call(this,o,k);
case  3 :
return G__8167__8169.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8167;
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
var G__8171 = null;
var G__8171__8172 = (function (_,f){
return f.call(null);
});
var G__8171__8173 = (function (_,f,start){
return start;
});
G__8171 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8171__8172.call(this,_,f);
case  3 :
return G__8171__8173.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8171;
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
var G__8200 = null;
var G__8200__8201 = (function (_,n){
return null;
});
var G__8200__8202 = (function (_,n,not_found){
return not_found;
});
G__8200 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8200__8201.call(this,_,n);
case  3 :
return G__8200__8202.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8200;
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
var ci_reduce__8228 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8218 = cljs.core._nth.call(null,cicoll,0);
var n__8219 = 1;

while(true){
if(cljs.core.truth_((n__8219 < cljs.core._count.call(null,cicoll))))
{{
var G__8234 = f.call(null,val__8218,cljs.core._nth.call(null,cicoll,n__8219));
var G__8235 = (n__8219 + 1);
val__8218 = G__8234;
n__8219 = G__8235;
continue;
}
} else
{return val__8218;
}
break;
}
}
});
var ci_reduce__8229 = (function (cicoll,f,val){
var val__8220 = val;
var n__8221 = 0;

while(true){
if(cljs.core.truth_((n__8221 < cljs.core._count.call(null,cicoll))))
{{
var G__8240 = f.call(null,val__8220,cljs.core._nth.call(null,cicoll,n__8221));
var G__8241 = (n__8221 + 1);
val__8220 = G__8240;
n__8221 = G__8241;
continue;
}
} else
{return val__8220;
}
break;
}
});
var ci_reduce__8230 = (function (cicoll,f,val,idx){
var val__8224 = val;
var n__8225 = idx;

while(true){
if(cljs.core.truth_((n__8225 < cljs.core._count.call(null,cicoll))))
{{
var G__8244 = f.call(null,val__8224,cljs.core._nth.call(null,cicoll,n__8225));
var G__8245 = (n__8225 + 1);
val__8224 = G__8244;
n__8225 = G__8245;
continue;
}
} else
{return val__8224;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8228.call(this,cicoll,f);
case  3 :
return ci_reduce__8229.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8230.call(this,cicoll,f,val,idx);
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
var this__8255 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8368 = null;
var G__8368__8369 = (function (_,f){
var this__8257 = this;
return cljs.core.ci_reduce.call(null,this__8257.a,f,(this__8257.a[this__8257.i]),(this__8257.i + 1));
});
var G__8368__8370 = (function (_,f,start){
var this__8258 = this;
return cljs.core.ci_reduce.call(null,this__8258.a,f,start,this__8258.i);
});
G__8368 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8368__8369.call(this,_,f);
case  3 :
return G__8368__8370.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8368;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8260 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8262 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8372 = null;
var G__8372__8373 = (function (coll,n){
var this__8266 = this;
var i__8268 = (n + this__8266.i);

if(cljs.core.truth_((i__8268 < this__8266.a.length)))
{return (this__8266.a[i__8268]);
} else
{return null;
}
});
var G__8372__8374 = (function (coll,n,not_found){
var this__8288 = this;
var i__8291 = (n + this__8288.i);

if(cljs.core.truth_((i__8291 < this__8288.a.length)))
{return (this__8288.a[i__8291]);
} else
{return not_found;
}
});
G__8372 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8372__8373.call(this,coll,n);
case  3 :
return G__8372__8374.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8372;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8364 = this;
return (this__8364.a.length - this__8364.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8365 = this;
return (this__8365.a[this__8365.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8366 = this;
if(cljs.core.truth_(((this__8366.i + 1) < this__8366.a.length)))
{return (new cljs.core.IndexedSeq(this__8366.a,(this__8366.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8367 = this;
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
var G__8464 = null;
var G__8464__8465 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8464__8466 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8464 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8464__8465.call(this,array,f);
case  3 :
return G__8464__8466.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8464;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8468 = null;
var G__8468__8469 = (function (array,k){
return (array[k]);
});
var G__8468__8470 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8468 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8468__8469.call(this,array,k);
case  3 :
return G__8468__8470.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8468;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8476 = null;
var G__8476__8477 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8476__8478 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8476 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8476__8477.call(this,array,n);
case  3 :
return G__8476__8478.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8476;
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
var temp__3698__auto____8500 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8500))
{var s__8574 = temp__3698__auto____8500;

return cljs.core._first.call(null,s__8574);
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
var G__8704 = cljs.core.next.call(null,s);
s = G__8704;
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
var s__8707 = cljs.core.seq.call(null,x);
var n__8709 = 0;

while(true){
if(cljs.core.truth_(s__8707))
{{
var G__8712 = cljs.core.next.call(null,s__8707);
var G__8713 = (n__8709 + 1);
s__8707 = G__8712;
n__8709 = G__8713;
continue;
}
} else
{return n__8709;
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
var conj__8718 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8719 = (function() { 
var G__8723__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8724 = conj.call(null,coll,x);
var G__8725 = cljs.core.first.call(null,xs);
var G__8726 = cljs.core.next.call(null,xs);
coll = G__8724;
x = G__8725;
xs = G__8726;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8723 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8723__delegate.call(this, coll, x, xs);
};
G__8723.cljs$lang$maxFixedArity = 2;
G__8723.cljs$lang$applyTo = (function (arglist__8727){
var coll = cljs.core.first(arglist__8727);
var x = cljs.core.first(cljs.core.next(arglist__8727));
var xs = cljs.core.rest(cljs.core.next(arglist__8727));
return G__8723__delegate.call(this, coll, x, xs);
});
return G__8723;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8718.call(this,coll,x);
default:
return conj__8719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8719.cljs$lang$applyTo;
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
var nth__8742 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8743 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8742.call(this,coll,n);
case  3 :
return nth__8743.call(this,coll,n,not_found);
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
var get__8748 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8749 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8748.call(this,o,k);
case  3 :
return get__8749.call(this,o,k,not_found);
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
var assoc__8778 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8779 = (function() { 
var G__8782__delegate = function (coll,k,v,kvs){
while(true){
var ret__8756 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8783 = ret__8756;
var G__8784 = cljs.core.first.call(null,kvs);
var G__8785 = cljs.core.second.call(null,kvs);
var G__8786 = cljs.core.nnext.call(null,kvs);
coll = G__8783;
k = G__8784;
v = G__8785;
kvs = G__8786;
continue;
}
} else
{return ret__8756;
}
break;
}
};
var G__8782 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8782__delegate.call(this, coll, k, v, kvs);
};
G__8782.cljs$lang$maxFixedArity = 3;
G__8782.cljs$lang$applyTo = (function (arglist__8789){
var coll = cljs.core.first(arglist__8789);
var k = cljs.core.first(cljs.core.next(arglist__8789));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8789)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8789)));
return G__8782__delegate.call(this, coll, k, v, kvs);
});
return G__8782;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8778.call(this,coll,k,v);
default:
return assoc__8779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8779.cljs$lang$applyTo;
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
var dissoc__8796 = (function (coll){
return coll;
});
var dissoc__8797 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8799 = (function() { 
var G__8802__delegate = function (coll,k,ks){
while(true){
var ret__8794 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8803 = ret__8794;
var G__8805 = cljs.core.first.call(null,ks);
var G__8806 = cljs.core.next.call(null,ks);
coll = G__8803;
k = G__8805;
ks = G__8806;
continue;
}
} else
{return ret__8794;
}
break;
}
};
var G__8802 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8802__delegate.call(this, coll, k, ks);
};
G__8802.cljs$lang$maxFixedArity = 2;
G__8802.cljs$lang$applyTo = (function (arglist__8809){
var coll = cljs.core.first(arglist__8809);
var k = cljs.core.first(cljs.core.next(arglist__8809));
var ks = cljs.core.rest(cljs.core.next(arglist__8809));
return G__8802__delegate.call(this, coll, k, ks);
});
return G__8802;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8796.call(this,coll);
case  2 :
return dissoc__8797.call(this,coll,k);
default:
return dissoc__8799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8799.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8816 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8818 = x__445__auto____8816;

if(cljs.core.truth_(and__3546__auto____8818))
{var and__3546__auto____8821 = x__445__auto____8816.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8821))
{return cljs.core.not.call(null,x__445__auto____8816.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8821;
}
} else
{return and__3546__auto____8818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8816);
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
var disj__8838 = (function (coll){
return coll;
});
var disj__8839 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8840 = (function() { 
var G__8843__delegate = function (coll,k,ks){
while(true){
var ret__8836 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8845 = ret__8836;
var G__8846 = cljs.core.first.call(null,ks);
var G__8847 = cljs.core.next.call(null,ks);
coll = G__8845;
k = G__8846;
ks = G__8847;
continue;
}
} else
{return ret__8836;
}
break;
}
};
var G__8843 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8843__delegate.call(this, coll, k, ks);
};
G__8843.cljs$lang$maxFixedArity = 2;
G__8843.cljs$lang$applyTo = (function (arglist__8850){
var coll = cljs.core.first(arglist__8850);
var k = cljs.core.first(cljs.core.next(arglist__8850));
var ks = cljs.core.rest(cljs.core.next(arglist__8850));
return G__8843__delegate.call(this, coll, k, ks);
});
return G__8843;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8838.call(this,coll);
case  2 :
return disj__8839.call(this,coll,k);
default:
return disj__8840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8840.cljs$lang$applyTo;
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
{var x__445__auto____8855 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8856 = x__445__auto____8855;

if(cljs.core.truth_(and__3546__auto____8856))
{var and__3546__auto____8858 = x__445__auto____8855.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8858))
{return cljs.core.not.call(null,x__445__auto____8855.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8858;
}
} else
{return and__3546__auto____8856;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8855);
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
{var x__445__auto____8863 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8864 = x__445__auto____8863;

if(cljs.core.truth_(and__3546__auto____8864))
{var and__3546__auto____8865 = x__445__auto____8863.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8865))
{return cljs.core.not.call(null,x__445__auto____8863.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8865;
}
} else
{return and__3546__auto____8864;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8863);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8871 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8872 = x__445__auto____8871;

if(cljs.core.truth_(and__3546__auto____8872))
{var and__3546__auto____8873 = x__445__auto____8871.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8873))
{return cljs.core.not.call(null,x__445__auto____8871.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8873;
}
} else
{return and__3546__auto____8872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8871);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8878 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8879 = x__445__auto____8878;

if(cljs.core.truth_(and__3546__auto____8879))
{var and__3546__auto____8880 = x__445__auto____8878.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8880))
{return cljs.core.not.call(null,x__445__auto____8878.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8880;
}
} else
{return and__3546__auto____8879;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8878);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8890 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8891 = x__445__auto____8890;

if(cljs.core.truth_(and__3546__auto____8891))
{var and__3546__auto____8896 = x__445__auto____8890.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8896))
{return cljs.core.not.call(null,x__445__auto____8890.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8896;
}
} else
{return and__3546__auto____8891;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8890);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8902 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8903 = x__445__auto____8902;

if(cljs.core.truth_(and__3546__auto____8903))
{var and__3546__auto____8909 = x__445__auto____8902.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8909))
{return cljs.core.not.call(null,x__445__auto____8902.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8909;
}
} else
{return and__3546__auto____8903;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8902);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8915 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8916 = x__445__auto____8915;

if(cljs.core.truth_(and__3546__auto____8916))
{var and__3546__auto____8917 = x__445__auto____8915.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core.not.call(null,x__445__auto____8915.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8917;
}
} else
{return and__3546__auto____8916;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8915);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8922 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8922.push(key);
}));
return keys__8922;
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
{var x__445__auto____8926 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8927 = x__445__auto____8926;

if(cljs.core.truth_(and__3546__auto____8927))
{var and__3546__auto____8959 = x__445__auto____8926.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8959))
{return cljs.core.not.call(null,x__445__auto____8926.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8959;
}
} else
{return and__3546__auto____8927;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8926);
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
var and__3546__auto____8968 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8968))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8971 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8971))
{return or__3548__auto____8971;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8968;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8977 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8977))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8977;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8981 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8981))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8981;
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
var and__3546__auto____8992 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8992))
{return (n == n.toFixed());
} else
{return and__3546__auto____8992;
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
if(cljs.core.truth_((function (){var and__3546__auto____9004 = coll;

if(cljs.core.truth_(and__3546__auto____9004))
{var and__3546__auto____9007 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9007))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9007;
}
} else
{return and__3546__auto____9004;
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
var distinct_QMARK___9032 = (function (x){
return true;
});
var distinct_QMARK___9033 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9035 = (function() { 
var G__9038__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9020 = cljs.core.set([y,x]);
var xs__9021 = more;

while(true){
var x__9022 = cljs.core.first.call(null,xs__9021);
var etc__9023 = cljs.core.next.call(null,xs__9021);

if(cljs.core.truth_(xs__9021))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9020,x__9022)))
{return false;
} else
{{
var G__9039 = cljs.core.conj.call(null,s__9020,x__9022);
var G__9040 = etc__9023;
s__9020 = G__9039;
xs__9021 = G__9040;
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
var G__9038 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9038__delegate.call(this, x, y, more);
};
G__9038.cljs$lang$maxFixedArity = 2;
G__9038.cljs$lang$applyTo = (function (arglist__9046){
var x = cljs.core.first(arglist__9046);
var y = cljs.core.first(cljs.core.next(arglist__9046));
var more = cljs.core.rest(cljs.core.next(arglist__9046));
return G__9038__delegate.call(this, x, y, more);
});
return G__9038;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9032.call(this,x);
case  2 :
return distinct_QMARK___9033.call(this,x,y);
default:
return distinct_QMARK___9035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9035.cljs$lang$applyTo;
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
var r__9058 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9058)))
{return r__9058;
} else
{if(cljs.core.truth_(r__9058))
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
var sort__9080 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9081 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9069 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9069,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9069);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9080.call(this,comp);
case  2 :
return sort__9081.call(this,comp,coll);
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
var sort_by__9091 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9092 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9091.call(this,keyfn,comp);
case  3 :
return sort_by__9092.call(this,keyfn,comp,coll);
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
var reduce__9108 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9109 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9108.call(this,f,val);
case  3 :
return reduce__9109.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9174 = (function (f,coll){
var temp__3695__auto____9170 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9170))
{var s__9171 = temp__3695__auto____9170;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9171),cljs.core.next.call(null,s__9171));
} else
{return f.call(null);
}
});
var seq_reduce__9175 = (function (f,val,coll){
var val__9172 = val;
var coll__9173 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9173))
{{
var G__9180 = f.call(null,val__9172,cljs.core.first.call(null,coll__9173));
var G__9181 = cljs.core.next.call(null,coll__9173);
val__9172 = G__9180;
coll__9173 = G__9181;
continue;
}
} else
{return val__9172;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9174.call(this,f,val);
case  3 :
return seq_reduce__9175.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9184 = null;
var G__9184__9185 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9184__9186 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9184 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9184__9185.call(this,coll,f);
case  3 :
return G__9184__9186.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9184;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9195 = (function (){
return 0;
});
var _PLUS___9196 = (function (x){
return x;
});
var _PLUS___9197 = (function (x,y){
return (x + y);
});
var _PLUS___9198 = (function() { 
var G__9200__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9200 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9200__delegate.call(this, x, y, more);
};
G__9200.cljs$lang$maxFixedArity = 2;
G__9200.cljs$lang$applyTo = (function (arglist__9201){
var x = cljs.core.first(arglist__9201);
var y = cljs.core.first(cljs.core.next(arglist__9201));
var more = cljs.core.rest(cljs.core.next(arglist__9201));
return G__9200__delegate.call(this, x, y, more);
});
return G__9200;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9195.call(this);
case  1 :
return _PLUS___9196.call(this,x);
case  2 :
return _PLUS___9197.call(this,x,y);
default:
return _PLUS___9198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9198.cljs$lang$applyTo;
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
var ___9204 = (function (x){
return (- x);
});
var ___9205 = (function (x,y){
return (x - y);
});
var ___9206 = (function() { 
var G__9208__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9208__delegate.call(this, x, y, more);
};
G__9208.cljs$lang$maxFixedArity = 2;
G__9208.cljs$lang$applyTo = (function (arglist__9209){
var x = cljs.core.first(arglist__9209);
var y = cljs.core.first(cljs.core.next(arglist__9209));
var more = cljs.core.rest(cljs.core.next(arglist__9209));
return G__9208__delegate.call(this, x, y, more);
});
return G__9208;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9204.call(this,x);
case  2 :
return ___9205.call(this,x,y);
default:
return ___9206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9206.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9212 = (function (){
return 1;
});
var _STAR___9213 = (function (x){
return x;
});
var _STAR___9214 = (function (x,y){
return (x * y);
});
var _STAR___9215 = (function() { 
var G__9217__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9217 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9217__delegate.call(this, x, y, more);
};
G__9217.cljs$lang$maxFixedArity = 2;
G__9217.cljs$lang$applyTo = (function (arglist__9218){
var x = cljs.core.first(arglist__9218);
var y = cljs.core.first(cljs.core.next(arglist__9218));
var more = cljs.core.rest(cljs.core.next(arglist__9218));
return G__9217__delegate.call(this, x, y, more);
});
return G__9217;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9212.call(this);
case  1 :
return _STAR___9213.call(this,x);
case  2 :
return _STAR___9214.call(this,x,y);
default:
return _STAR___9215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9215.cljs$lang$applyTo;
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
var _SLASH___9248 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9249 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9250 = (function() { 
var G__9252__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9252 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9252__delegate.call(this, x, y, more);
};
G__9252.cljs$lang$maxFixedArity = 2;
G__9252.cljs$lang$applyTo = (function (arglist__9253){
var x = cljs.core.first(arglist__9253);
var y = cljs.core.first(cljs.core.next(arglist__9253));
var more = cljs.core.rest(cljs.core.next(arglist__9253));
return G__9252__delegate.call(this, x, y, more);
});
return G__9252;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9248.call(this,x);
case  2 :
return _SLASH___9249.call(this,x,y);
default:
return _SLASH___9250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9250.cljs$lang$applyTo;
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
var G__9289__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9291 = y;
var G__9292 = cljs.core.first.call(null,more);
var G__9293 = cljs.core.next.call(null,more);
x = G__9291;
y = G__9292;
more = G__9293;
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
var G__9289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9289__delegate.call(this, x, y, more);
};
G__9289.cljs$lang$maxFixedArity = 2;
G__9289.cljs$lang$applyTo = (function (arglist__9295){
var x = cljs.core.first(arglist__9295);
var y = cljs.core.first(cljs.core.next(arglist__9295));
var more = cljs.core.rest(cljs.core.next(arglist__9295));
return G__9289__delegate.call(this, x, y, more);
});
return G__9289;
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
var _GT___9300 = (function (x){
return true;
});
var _GT___9301 = (function (x,y){
return (x > y);
});
var _GT___9302 = (function() { 
var G__9305__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9307 = y;
var G__9308 = cljs.core.first.call(null,more);
var G__9309 = cljs.core.next.call(null,more);
x = G__9307;
y = G__9308;
more = G__9309;
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
G__9305.cljs$lang$applyTo = (function (arglist__9310){
var x = cljs.core.first(arglist__9310);
var y = cljs.core.first(cljs.core.next(arglist__9310));
var more = cljs.core.rest(cljs.core.next(arglist__9310));
return G__9305__delegate.call(this, x, y, more);
});
return G__9305;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9300.call(this,x);
case  2 :
return _GT___9301.call(this,x,y);
default:
return _GT___9302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9302.cljs$lang$applyTo;
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
var _GT__EQ___9314 = (function (x){
return true;
});
var _GT__EQ___9315 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9316 = (function() { 
var G__9322__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9323 = y;
var G__9324 = cljs.core.first.call(null,more);
var G__9326 = cljs.core.next.call(null,more);
x = G__9323;
y = G__9324;
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
var G__9322 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9322__delegate.call(this, x, y, more);
};
G__9322.cljs$lang$maxFixedArity = 2;
G__9322.cljs$lang$applyTo = (function (arglist__9330){
var x = cljs.core.first(arglist__9330);
var y = cljs.core.first(cljs.core.next(arglist__9330));
var more = cljs.core.rest(cljs.core.next(arglist__9330));
return G__9322__delegate.call(this, x, y, more);
});
return G__9322;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9314.call(this,x);
case  2 :
return _GT__EQ___9315.call(this,x,y);
default:
return _GT__EQ___9316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9316.cljs$lang$applyTo;
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
var max__9344 = (function (x){
return x;
});
var max__9345 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9346 = (function() { 
var G__9348__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9348 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9348__delegate.call(this, x, y, more);
};
G__9348.cljs$lang$maxFixedArity = 2;
G__9348.cljs$lang$applyTo = (function (arglist__9349){
var x = cljs.core.first(arglist__9349);
var y = cljs.core.first(cljs.core.next(arglist__9349));
var more = cljs.core.rest(cljs.core.next(arglist__9349));
return G__9348__delegate.call(this, x, y, more);
});
return G__9348;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9344.call(this,x);
case  2 :
return max__9345.call(this,x,y);
default:
return max__9346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9346.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9359 = (function (x){
return x;
});
var min__9360 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9361 = (function() { 
var G__9363__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9363__delegate.call(this, x, y, more);
};
G__9363.cljs$lang$maxFixedArity = 2;
G__9363.cljs$lang$applyTo = (function (arglist__9370){
var x = cljs.core.first(arglist__9370);
var y = cljs.core.first(cljs.core.next(arglist__9370));
var more = cljs.core.rest(cljs.core.next(arglist__9370));
return G__9363__delegate.call(this, x, y, more);
});
return G__9363;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9359.call(this,x);
case  2 :
return min__9360.call(this,x,y);
default:
return min__9361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9361.cljs$lang$applyTo;
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
var rem__9385 = (n % d);

return cljs.core.fix.call(null,((n - rem__9385) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9387 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9387));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9401 = (function (){
return Math.random.call(null);
});
var rand__9402 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9401.call(this);
case  1 :
return rand__9402.call(this,n);
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
var _EQ__EQ___9465 = (function (x){
return true;
});
var _EQ__EQ___9466 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9467 = (function() { 
var G__9473__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9474 = y;
var G__9476 = cljs.core.first.call(null,more);
var G__9477 = cljs.core.next.call(null,more);
x = G__9474;
y = G__9476;
more = G__9477;
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
var G__9473 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9473__delegate.call(this, x, y, more);
};
G__9473.cljs$lang$maxFixedArity = 2;
G__9473.cljs$lang$applyTo = (function (arglist__9485){
var x = cljs.core.first(arglist__9485);
var y = cljs.core.first(cljs.core.next(arglist__9485));
var more = cljs.core.rest(cljs.core.next(arglist__9485));
return G__9473__delegate.call(this, x, y, more);
});
return G__9473;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9465.call(this,x);
case  2 :
return _EQ__EQ___9466.call(this,x,y);
default:
return _EQ__EQ___9467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9467.cljs$lang$applyTo;
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
var n__9501 = n;
var xs__9505 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9507 = xs__9505;

if(cljs.core.truth_(and__3546__auto____9507))
{return (n__9501 > 0);
} else
{return and__3546__auto____9507;
}
})()))
{{
var G__9510 = (n__9501 - 1);
var G__9511 = cljs.core.next.call(null,xs__9505);
n__9501 = G__9510;
xs__9505 = G__9511;
continue;
}
} else
{return xs__9505;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9531 = null;
var G__9531__9532 = (function (coll,n){
var temp__3695__auto____9519 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9519))
{var xs__9521 = temp__3695__auto____9519;

return cljs.core.first.call(null,xs__9521);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9531__9533 = (function (coll,n,not_found){
var temp__3695__auto____9527 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9527))
{var xs__9529 = temp__3695__auto____9527;

return cljs.core.first.call(null,xs__9529);
} else
{return not_found;
}
});
G__9531 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9531__9532.call(this,coll,n);
case  3 :
return G__9531__9533.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9531;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9602 = (function (){
return "";
});
var str_STAR___9603 = (function (x){
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
var str_STAR___9604 = (function() { 
var G__9606__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9607 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9608 = cljs.core.next.call(null,more);
sb = G__9607;
more = G__9608;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9606 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9606__delegate.call(this, x, ys);
};
G__9606.cljs$lang$maxFixedArity = 1;
G__9606.cljs$lang$applyTo = (function (arglist__9613){
var x = cljs.core.first(arglist__9613);
var ys = cljs.core.rest(arglist__9613);
return G__9606__delegate.call(this, x, ys);
});
return G__9606;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9602.call(this);
case  1 :
return str_STAR___9603.call(this,x);
default:
return str_STAR___9604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9604.cljs$lang$applyTo;
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
var str__9626 = (function (){
return "";
});
var str__9627 = (function (x){
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
var str__9628 = (function() { 
var G__9632__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9632 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9632__delegate.call(this, x, ys);
};
G__9632.cljs$lang$maxFixedArity = 1;
G__9632.cljs$lang$applyTo = (function (arglist__9633){
var x = cljs.core.first(arglist__9633);
var ys = cljs.core.rest(arglist__9633);
return G__9632__delegate.call(this, x, ys);
});
return G__9632;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9626.call(this);
case  1 :
return str__9627.call(this,x);
default:
return str__9628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9628.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9638 = (function (s,start){
return s.substring(start);
});
var subs__9639 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9638.call(this,s,start);
case  3 :
return subs__9639.call(this,s,start,end);
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
var symbol__9646 = (function (name){
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
var symbol__9647 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9646.call(this,ns);
case  2 :
return symbol__9647.call(this,ns,name);
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
var keyword__9657 = (function (name){
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
var keyword__9658 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9657.call(this,ns);
case  2 :
return keyword__9658.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9662 = cljs.core.seq.call(null,x);
var ys__9663 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9662)))
{return cljs.core.nil_QMARK_.call(null,ys__9663);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9663)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9662),cljs.core.first.call(null,ys__9663))))
{{
var G__9667 = cljs.core.next.call(null,xs__9662);
var G__9668 = cljs.core.next.call(null,ys__9663);
xs__9662 = G__9667;
ys__9663 = G__9668;
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
return cljs.core.reduce.call(null,(function (p1__9701_SHARP_,p2__9704_SHARP_){
return cljs.core.hash_combine.call(null,p1__9701_SHARP_,cljs.core.hash.call(null,p2__9704_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9822__9825 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9822__9825))
{var G__9828__9830 = cljs.core.first.call(null,G__9822__9825);
var vec__9829__9831 = G__9828__9830;
var key_name__9832 = cljs.core.nth.call(null,vec__9829__9831,0,null);
var f__9833 = cljs.core.nth.call(null,vec__9829__9831,1,null);
var G__9822__9834 = G__9822__9825;

var G__9828__9835 = G__9828__9830;
var G__9822__9836 = G__9822__9834;

while(true){
var vec__9837__9838 = G__9828__9835;
var key_name__9839 = cljs.core.nth.call(null,vec__9837__9838,0,null);
var f__9840 = cljs.core.nth.call(null,vec__9837__9838,1,null);
var G__9822__9841 = G__9822__9836;

var str_name__9842 = cljs.core.name.call(null,key_name__9839);

obj[str_name__9842] = f__9840;
var temp__3698__auto____9843 = cljs.core.next.call(null,G__9822__9841);

if(cljs.core.truth_(temp__3698__auto____9843))
{var G__9822__9844 = temp__3698__auto____9843;

{
var G__9846 = cljs.core.first.call(null,G__9822__9844);
var G__9847 = G__9822__9844;
G__9828__9835 = G__9846;
G__9822__9836 = G__9847;
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
var this__9861 = this;
return (new cljs.core.List(this__9861.meta,o,coll,(this__9861.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9865 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9866 = this;
return this__9866.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9944 = this;
return this__9944.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9945 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9946 = this;
return this__9946.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9947 = this;
return this__9947.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9948 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9949 = this;
return (new cljs.core.List(meta,this__9949.first,this__9949.rest,this__9949.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9950 = this;
return this__9950.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9951 = this;
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
var this__10010 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10012 = this;
return (new cljs.core.List(this__10012.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10040 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10042 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10045 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10049 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10051 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10053 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10055 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10058 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10061 = this;
return this__10061.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10063 = this;
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
list.cljs$lang$applyTo = (function (arglist__10096){
var items = cljs.core.seq( arglist__10096 );;
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
var this__10101 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10102 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10105 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10106 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10106.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10107 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10108 = this;
return this__10108.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10110 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10110.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10110.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10115 = this;
return this__10115.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10119 = this;
return (new cljs.core.Cons(meta,this__10119.first,this__10119.rest));
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
var G__10138 = null;
var G__10138__10139 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10138__10140 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10138 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10138__10139.call(this,string,f);
case  3 :
return G__10138__10140.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10138;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10143 = null;
var G__10143__10144 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10143__10145 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10143 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10143__10144.call(this,string,k);
case  3 :
return G__10143__10145.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10143;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10183 = null;
var G__10183__10184 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10183__10185 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10183 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10183__10184.call(this,string,n);
case  3 :
return G__10183__10185.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10183;
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
var G__10191 = null;
var G__10191__10192 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10191__10193 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10191 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10191__10192.call(this,this$,coll);
case  3 :
return G__10191__10193.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10191;
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
var x__10245 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10245;
} else
{lazy_seq.x = x__10245.call(null);
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
var this__10249 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10250 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10252 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10254 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10254.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10255 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10256 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10257 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10258 = this;
return this__10258.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10259 = this;
return (new cljs.core.LazySeq(meta,this__10259.realized,this__10259.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10266 = cljs.core.array.call(null);

var s__10267 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10267)))
{ary__10266.push(cljs.core.first.call(null,s__10267));
{
var G__10272 = cljs.core.next.call(null,s__10267);
s__10267 = G__10272;
continue;
}
} else
{return ary__10266;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10314 = s;
var i__10315 = n;
var sum__10316 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10317 = (i__10315 > 0);

if(cljs.core.truth_(and__3546__auto____10317))
{return cljs.core.seq.call(null,s__10314);
} else
{return and__3546__auto____10317;
}
})()))
{{
var G__10323 = cljs.core.next.call(null,s__10314);
var G__10325 = (i__10315 - 1);
var G__10326 = (sum__10316 + 1);
s__10314 = G__10323;
i__10315 = G__10325;
sum__10316 = G__10326;
continue;
}
} else
{return sum__10316;
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
var concat__10353 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10354 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10355 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10347 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10347))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10347),concat.call(null,cljs.core.rest.call(null,s__10347),y));
} else
{return y;
}
})));
});
var concat__10356 = (function() { 
var G__10360__delegate = function (x,y,zs){
var cat__10352 = (function cat(xys,zs){
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

return cat__10352.call(null,concat.call(null,x,y),zs);
};
var G__10360 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10360__delegate.call(this, x, y, zs);
};
G__10360.cljs$lang$maxFixedArity = 2;
G__10360.cljs$lang$applyTo = (function (arglist__10362){
var x = cljs.core.first(arglist__10362);
var y = cljs.core.first(cljs.core.next(arglist__10362));
var zs = cljs.core.rest(cljs.core.next(arglist__10362));
return G__10360__delegate.call(this, x, y, zs);
});
return G__10360;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10353.call(this);
case  1 :
return concat__10354.call(this,x);
case  2 :
return concat__10355.call(this,x,y);
default:
return concat__10356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10356.cljs$lang$applyTo;
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
var list_STAR___10373 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10374 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10375 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10376 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10377 = (function() { 
var G__10379__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10379 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10379__delegate.call(this, a, b, c, d, more);
};
G__10379.cljs$lang$maxFixedArity = 4;
G__10379.cljs$lang$applyTo = (function (arglist__10380){
var a = cljs.core.first(arglist__10380);
var b = cljs.core.first(cljs.core.next(arglist__10380));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10380)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10380))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10380))));
return G__10379__delegate.call(this, a, b, c, d, more);
});
return G__10379;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10373.call(this,a);
case  2 :
return list_STAR___10374.call(this,a,b);
case  3 :
return list_STAR___10375.call(this,a,b,c);
case  4 :
return list_STAR___10376.call(this,a,b,c,d);
default:
return list_STAR___10377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10377.cljs$lang$applyTo;
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
var apply__10490 = (function (f,args){
var fixed_arity__10384 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10384 + 1)) <= fixed_arity__10384)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10491 = (function (f,x,args){
var arglist__10391 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10392 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10391,fixed_arity__10392) <= fixed_arity__10392)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10391));
} else
{return f.cljs$lang$applyTo(arglist__10391);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10391));
}
});
var apply__10492 = (function (f,x,y,args){
var arglist__10393 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10394 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10393,fixed_arity__10394) <= fixed_arity__10394)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10393));
} else
{return f.cljs$lang$applyTo(arglist__10393);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10393));
}
});
var apply__10493 = (function (f,x,y,z,args){
var arglist__10465 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10469 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10465,fixed_arity__10469) <= fixed_arity__10469)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10465));
} else
{return f.cljs$lang$applyTo(arglist__10465);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10465));
}
});
var apply__10494 = (function() { 
var G__10510__delegate = function (f,a,b,c,d,args){
var arglist__10485 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10486 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10485,fixed_arity__10486) <= fixed_arity__10486)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10485));
} else
{return f.cljs$lang$applyTo(arglist__10485);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10485));
}
};
var G__10510 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10510__delegate.call(this, f, a, b, c, d, args);
};
G__10510.cljs$lang$maxFixedArity = 5;
G__10510.cljs$lang$applyTo = (function (arglist__10516){
var f = cljs.core.first(arglist__10516);
var a = cljs.core.first(cljs.core.next(arglist__10516));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10516)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10516))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10516)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10516)))));
return G__10510__delegate.call(this, f, a, b, c, d, args);
});
return G__10510;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10490.call(this,f,a);
case  3 :
return apply__10491.call(this,f,a,b);
case  4 :
return apply__10492.call(this,f,a,b,c);
case  5 :
return apply__10493.call(this,f,a,b,c,d);
default:
return apply__10494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10494.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10521){
var obj = cljs.core.first(arglist__10521);
var f = cljs.core.first(cljs.core.next(arglist__10521));
var args = cljs.core.rest(cljs.core.next(arglist__10521));
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
var not_EQ___10522 = (function (x){
return false;
});
var not_EQ___10526 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10527 = (function() { 
var G__10572__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10572 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10572__delegate.call(this, x, y, more);
};
G__10572.cljs$lang$maxFixedArity = 2;
G__10572.cljs$lang$applyTo = (function (arglist__10573){
var x = cljs.core.first(arglist__10573);
var y = cljs.core.first(cljs.core.next(arglist__10573));
var more = cljs.core.rest(cljs.core.next(arglist__10573));
return G__10572__delegate.call(this, x, y, more);
});
return G__10572;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10522.call(this,x);
case  2 :
return not_EQ___10526.call(this,x,y);
default:
return not_EQ___10527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10527.cljs$lang$applyTo;
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
var G__10666 = pred;
var G__10667 = cljs.core.next.call(null,coll);
pred = G__10666;
coll = G__10667;
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
{var or__3548__auto____10679 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10679))
{return or__3548__auto____10679;
} else
{{
var G__10682 = pred;
var G__10683 = cljs.core.next.call(null,coll);
pred = G__10682;
coll = G__10683;
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
var G__10713 = null;
var G__10713__10714 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10713__10715 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10713__10716 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10713__10717 = (function() { 
var G__10720__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10720 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10720__delegate.call(this, x, y, zs);
};
G__10720.cljs$lang$maxFixedArity = 2;
G__10720.cljs$lang$applyTo = (function (arglist__10721){
var x = cljs.core.first(arglist__10721);
var y = cljs.core.first(cljs.core.next(arglist__10721));
var zs = cljs.core.rest(cljs.core.next(arglist__10721));
return G__10720__delegate.call(this, x, y, zs);
});
return G__10720;
})()
;
G__10713 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10713__10714.call(this);
case  1 :
return G__10713__10715.call(this,x);
case  2 :
return G__10713__10716.call(this,x,y);
default:
return G__10713__10717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10713.cljs$lang$maxFixedArity = 2;
G__10713.cljs$lang$applyTo = G__10713__10717.cljs$lang$applyTo;
return G__10713;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10736__delegate = function (args){
return x;
};
var G__10736 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10736__delegate.call(this, args);
};
G__10736.cljs$lang$maxFixedArity = 0;
G__10736.cljs$lang$applyTo = (function (arglist__10737){
var args = cljs.core.seq( arglist__10737 );;
return G__10736__delegate.call(this, args);
});
return G__10736;
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
var comp__10756 = (function (){
return cljs.core.identity;
});
var comp__10757 = (function (f){
return f;
});
var comp__10758 = (function (f,g){
return (function() {
var G__10764 = null;
var G__10764__10765 = (function (){
return f.call(null,g.call(null));
});
var G__10764__10767 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10764__10768 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10764__10769 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10764__10770 = (function() { 
var G__10775__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10775 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10775__delegate.call(this, x, y, z, args);
};
G__10775.cljs$lang$maxFixedArity = 3;
G__10775.cljs$lang$applyTo = (function (arglist__10778){
var x = cljs.core.first(arglist__10778);
var y = cljs.core.first(cljs.core.next(arglist__10778));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10778)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10778)));
return G__10775__delegate.call(this, x, y, z, args);
});
return G__10775;
})()
;
G__10764 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10764__10765.call(this);
case  1 :
return G__10764__10767.call(this,x);
case  2 :
return G__10764__10768.call(this,x,y);
case  3 :
return G__10764__10769.call(this,x,y,z);
default:
return G__10764__10770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10764.cljs$lang$maxFixedArity = 3;
G__10764.cljs$lang$applyTo = G__10764__10770.cljs$lang$applyTo;
return G__10764;
})()
});
var comp__10759 = (function (f,g,h){
return (function() {
var G__10781 = null;
var G__10781__10783 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10781__10784 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10781__10785 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10781__10786 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10781__10787 = (function() { 
var G__10794__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10794 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10794__delegate.call(this, x, y, z, args);
};
G__10794.cljs$lang$maxFixedArity = 3;
G__10794.cljs$lang$applyTo = (function (arglist__10797){
var x = cljs.core.first(arglist__10797);
var y = cljs.core.first(cljs.core.next(arglist__10797));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10797)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10797)));
return G__10794__delegate.call(this, x, y, z, args);
});
return G__10794;
})()
;
G__10781 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10781__10783.call(this);
case  1 :
return G__10781__10784.call(this,x);
case  2 :
return G__10781__10785.call(this,x,y);
case  3 :
return G__10781__10786.call(this,x,y,z);
default:
return G__10781__10787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10781.cljs$lang$maxFixedArity = 3;
G__10781.cljs$lang$applyTo = G__10781__10787.cljs$lang$applyTo;
return G__10781;
})()
});
var comp__10760 = (function() { 
var G__10871__delegate = function (f1,f2,f3,fs){
var fs__10747 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10911__delegate = function (args){
var ret__10750 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10747),args);
var fs__10751 = cljs.core.next.call(null,fs__10747);

while(true){
if(cljs.core.truth_(fs__10751))
{{
var G__10913 = cljs.core.first.call(null,fs__10751).call(null,ret__10750);
var G__10914 = cljs.core.next.call(null,fs__10751);
ret__10750 = G__10913;
fs__10751 = G__10914;
continue;
}
} else
{return ret__10750;
}
break;
}
};
var G__10911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10911__delegate.call(this, args);
};
G__10911.cljs$lang$maxFixedArity = 0;
G__10911.cljs$lang$applyTo = (function (arglist__10923){
var args = cljs.core.seq( arglist__10923 );;
return G__10911__delegate.call(this, args);
});
return G__10911;
})()
;
};
var G__10871 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10871__delegate.call(this, f1, f2, f3, fs);
};
G__10871.cljs$lang$maxFixedArity = 3;
G__10871.cljs$lang$applyTo = (function (arglist__10926){
var f1 = cljs.core.first(arglist__10926);
var f2 = cljs.core.first(cljs.core.next(arglist__10926));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10926)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10926)));
return G__10871__delegate.call(this, f1, f2, f3, fs);
});
return G__10871;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10756.call(this);
case  1 :
return comp__10757.call(this,f1);
case  2 :
return comp__10758.call(this,f1,f2);
case  3 :
return comp__10759.call(this,f1,f2,f3);
default:
return comp__10760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10760.cljs$lang$applyTo;
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
var partial__10956 = (function (f,arg1){
return (function() { 
var G__10962__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10962 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10962__delegate.call(this, args);
};
G__10962.cljs$lang$maxFixedArity = 0;
G__10962.cljs$lang$applyTo = (function (arglist__10963){
var args = cljs.core.seq( arglist__10963 );;
return G__10962__delegate.call(this, args);
});
return G__10962;
})()
;
});
var partial__10957 = (function (f,arg1,arg2){
return (function() { 
var G__10964__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10964 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10964__delegate.call(this, args);
};
G__10964.cljs$lang$maxFixedArity = 0;
G__10964.cljs$lang$applyTo = (function (arglist__10967){
var args = cljs.core.seq( arglist__10967 );;
return G__10964__delegate.call(this, args);
});
return G__10964;
})()
;
});
var partial__10958 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10969__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10969 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10969__delegate.call(this, args);
};
G__10969.cljs$lang$maxFixedArity = 0;
G__10969.cljs$lang$applyTo = (function (arglist__10973){
var args = cljs.core.seq( arglist__10973 );;
return G__10969__delegate.call(this, args);
});
return G__10969;
})()
;
});
var partial__10959 = (function() { 
var G__10974__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10976__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10976 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10976__delegate.call(this, args);
};
G__10976.cljs$lang$maxFixedArity = 0;
G__10976.cljs$lang$applyTo = (function (arglist__10977){
var args = cljs.core.seq( arglist__10977 );;
return G__10976__delegate.call(this, args);
});
return G__10976;
})()
;
};
var G__10974 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10974__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10974.cljs$lang$maxFixedArity = 4;
G__10974.cljs$lang$applyTo = (function (arglist__10980){
var f = cljs.core.first(arglist__10980);
var arg1 = cljs.core.first(cljs.core.next(arglist__10980));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10980)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10980))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10980))));
return G__10974__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10974;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10956.call(this,f,arg1);
case  3 :
return partial__10957.call(this,f,arg1,arg2);
case  4 :
return partial__10958.call(this,f,arg1,arg2,arg3);
default:
return partial__10959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10959.cljs$lang$applyTo;
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
var fnil__11113 = (function (f,x){
return (function() {
var G__11118 = null;
var G__11118__11119 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11118__11120 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11118__11121 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11118__11122 = (function() { 
var G__11127__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11127 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11127__delegate.call(this, a, b, c, ds);
};
G__11127.cljs$lang$maxFixedArity = 3;
G__11127.cljs$lang$applyTo = (function (arglist__11128){
var a = cljs.core.first(arglist__11128);
var b = cljs.core.first(cljs.core.next(arglist__11128));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11128)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11128)));
return G__11127__delegate.call(this, a, b, c, ds);
});
return G__11127;
})()
;
G__11118 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11118__11119.call(this,a);
case  2 :
return G__11118__11120.call(this,a,b);
case  3 :
return G__11118__11121.call(this,a,b,c);
default:
return G__11118__11122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11118.cljs$lang$maxFixedArity = 3;
G__11118.cljs$lang$applyTo = G__11118__11122.cljs$lang$applyTo;
return G__11118;
})()
});
var fnil__11114 = (function (f,x,y){
return (function() {
var G__11130 = null;
var G__11130__11227 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11130__11229 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11130__11230 = (function() { 
var G__11315__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11315 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11315__delegate.call(this, a, b, c, ds);
};
G__11315.cljs$lang$maxFixedArity = 3;
G__11315.cljs$lang$applyTo = (function (arglist__11333){
var a = cljs.core.first(arglist__11333);
var b = cljs.core.first(cljs.core.next(arglist__11333));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11333)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11333)));
return G__11315__delegate.call(this, a, b, c, ds);
});
return G__11315;
})()
;
G__11130 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11130__11227.call(this,a,b);
case  3 :
return G__11130__11229.call(this,a,b,c);
default:
return G__11130__11230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11130.cljs$lang$maxFixedArity = 3;
G__11130.cljs$lang$applyTo = G__11130__11230.cljs$lang$applyTo;
return G__11130;
})()
});
var fnil__11115 = (function (f,x,y,z){
return (function() {
var G__11345 = null;
var G__11345__11346 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11345__11347 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11345__11348 = (function() { 
var G__11350__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11350 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11350__delegate.call(this, a, b, c, ds);
};
G__11350.cljs$lang$maxFixedArity = 3;
G__11350.cljs$lang$applyTo = (function (arglist__11352){
var a = cljs.core.first(arglist__11352);
var b = cljs.core.first(cljs.core.next(arglist__11352));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11352)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11352)));
return G__11350__delegate.call(this, a, b, c, ds);
});
return G__11350;
})()
;
G__11345 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11345__11346.call(this,a,b);
case  3 :
return G__11345__11347.call(this,a,b,c);
default:
return G__11345__11348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11345.cljs$lang$maxFixedArity = 3;
G__11345.cljs$lang$applyTo = G__11345__11348.cljs$lang$applyTo;
return G__11345;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11113.call(this,f,x);
case  3 :
return fnil__11114.call(this,f,x,y);
case  4 :
return fnil__11115.call(this,f,x,y,z);
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
var mapi__11370 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11368))
{var s__11369 = temp__3698__auto____11368;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11369)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11369)));
} else
{return null;
}
})));
});

return mapi__11370.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11382 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11382))
{var s__11383 = temp__3698__auto____11382;

var x__11384 = f.call(null,cljs.core.first.call(null,s__11383));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11384)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11383));
} else
{return cljs.core.cons.call(null,x__11384,keep.call(null,f,cljs.core.rest.call(null,s__11383)));
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
var keepi__11419 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11404 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11404))
{var s__11411 = temp__3698__auto____11404;

var x__11418 = f.call(null,idx,cljs.core.first.call(null,s__11411));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11418)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11411));
} else
{return cljs.core.cons.call(null,x__11418,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11411)));
}
} else
{return null;
}
})));
});

return keepi__11419.call(null,0,coll);
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
var every_pred__11545 = (function (p){
return (function() {
var ep1 = null;
var ep1__11550 = (function (){
return true;
});
var ep1__11551 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11552 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11431 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11431))
{return p.call(null,y);
} else
{return and__3546__auto____11431;
}
})());
});
var ep1__11553 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11433 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11433))
{var and__3546__auto____11435 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11435))
{return p.call(null,z);
} else
{return and__3546__auto____11435;
}
} else
{return and__3546__auto____11433;
}
})());
});
var ep1__11554 = (function() { 
var G__11560__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11461 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11461))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11461;
}
})());
};
var G__11560 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11560__delegate.call(this, x, y, z, args);
};
G__11560.cljs$lang$maxFixedArity = 3;
G__11560.cljs$lang$applyTo = (function (arglist__11571){
var x = cljs.core.first(arglist__11571);
var y = cljs.core.first(cljs.core.next(arglist__11571));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11571)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11571)));
return G__11560__delegate.call(this, x, y, z, args);
});
return G__11560;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11550.call(this);
case  1 :
return ep1__11551.call(this,x);
case  2 :
return ep1__11552.call(this,x,y);
case  3 :
return ep1__11553.call(this,x,y,z);
default:
return ep1__11554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11554.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11546 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11573 = (function (){
return true;
});
var ep2__11574 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11464 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11464))
{return p2.call(null,x);
} else
{return and__3546__auto____11464;
}
})());
});
var ep2__11575 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11466 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11466))
{var and__3546__auto____11468 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11468))
{var and__3546__auto____11470 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11470))
{return p2.call(null,y);
} else
{return and__3546__auto____11470;
}
} else
{return and__3546__auto____11468;
}
} else
{return and__3546__auto____11466;
}
})());
});
var ep2__11576 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11472 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11472))
{var and__3546__auto____11473 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11473))
{var and__3546__auto____11474 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11474))
{var and__3546__auto____11475 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11475))
{var and__3546__auto____11477 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11477))
{return p2.call(null,z);
} else
{return and__3546__auto____11477;
}
} else
{return and__3546__auto____11475;
}
} else
{return and__3546__auto____11474;
}
} else
{return and__3546__auto____11473;
}
} else
{return and__3546__auto____11472;
}
})());
});
var ep2__11577 = (function() { 
var G__11586__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11481 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11481))
{return cljs.core.every_QMARK_.call(null,(function (p1__11393_SHARP_){
var and__3546__auto____11482 = p1.call(null,p1__11393_SHARP_);

if(cljs.core.truth_(and__3546__auto____11482))
{return p2.call(null,p1__11393_SHARP_);
} else
{return and__3546__auto____11482;
}
}),args);
} else
{return and__3546__auto____11481;
}
})());
};
var G__11586 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11586__delegate.call(this, x, y, z, args);
};
G__11586.cljs$lang$maxFixedArity = 3;
G__11586.cljs$lang$applyTo = (function (arglist__11589){
var x = cljs.core.first(arglist__11589);
var y = cljs.core.first(cljs.core.next(arglist__11589));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11589)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11589)));
return G__11586__delegate.call(this, x, y, z, args);
});
return G__11586;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11573.call(this);
case  1 :
return ep2__11574.call(this,x);
case  2 :
return ep2__11575.call(this,x,y);
case  3 :
return ep2__11576.call(this,x,y,z);
default:
return ep2__11577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11577.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11547 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11593 = (function (){
return true;
});
var ep3__11594 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11483 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11483))
{var and__3546__auto____11489 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11489))
{return p3.call(null,x);
} else
{return and__3546__auto____11489;
}
} else
{return and__3546__auto____11483;
}
})());
});
var ep3__11595 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11496 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11496))
{var and__3546__auto____11497 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11497))
{var and__3546__auto____11498 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11498))
{var and__3546__auto____11499 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11499))
{var and__3546__auto____11500 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11500))
{return p3.call(null,y);
} else
{return and__3546__auto____11500;
}
} else
{return and__3546__auto____11499;
}
} else
{return and__3546__auto____11498;
}
} else
{return and__3546__auto____11497;
}
} else
{return and__3546__auto____11496;
}
})());
});
var ep3__11596 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11505 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11505))
{var and__3546__auto____11506 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11506))
{var and__3546__auto____11507 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11507))
{var and__3546__auto____11508 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11508))
{var and__3546__auto____11513 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11513))
{var and__3546__auto____11516 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11516))
{var and__3546__auto____11518 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11518))
{var and__3546__auto____11520 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11520))
{return p3.call(null,z);
} else
{return and__3546__auto____11520;
}
} else
{return and__3546__auto____11518;
}
} else
{return and__3546__auto____11516;
}
} else
{return and__3546__auto____11513;
}
} else
{return and__3546__auto____11508;
}
} else
{return and__3546__auto____11507;
}
} else
{return and__3546__auto____11506;
}
} else
{return and__3546__auto____11505;
}
})());
});
var ep3__11597 = (function() { 
var G__11621__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11521 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11521))
{return cljs.core.every_QMARK_.call(null,(function (p1__11395_SHARP_){
var and__3546__auto____11526 = p1.call(null,p1__11395_SHARP_);

if(cljs.core.truth_(and__3546__auto____11526))
{var and__3546__auto____11529 = p2.call(null,p1__11395_SHARP_);

if(cljs.core.truth_(and__3546__auto____11529))
{return p3.call(null,p1__11395_SHARP_);
} else
{return and__3546__auto____11529;
}
} else
{return and__3546__auto____11526;
}
}),args);
} else
{return and__3546__auto____11521;
}
})());
};
var G__11621 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11621__delegate.call(this, x, y, z, args);
};
G__11621.cljs$lang$maxFixedArity = 3;
G__11621.cljs$lang$applyTo = (function (arglist__11625){
var x = cljs.core.first(arglist__11625);
var y = cljs.core.first(cljs.core.next(arglist__11625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11625)));
return G__11621__delegate.call(this, x, y, z, args);
});
return G__11621;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11593.call(this);
case  1 :
return ep3__11594.call(this,x);
case  2 :
return ep3__11595.call(this,x,y);
case  3 :
return ep3__11596.call(this,x,y,z);
default:
return ep3__11597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11597.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11548 = (function() { 
var G__11627__delegate = function (p1,p2,p3,ps){
var ps__11531 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11632 = (function (){
return true;
});
var epn__11633 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11397_SHARP_){
return p1__11397_SHARP_.call(null,x);
}),ps__11531);
});
var epn__11634 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11398_SHARP_){
var and__3546__auto____11538 = p1__11398_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11538))
{return p1__11398_SHARP_.call(null,y);
} else
{return and__3546__auto____11538;
}
}),ps__11531);
});
var epn__11635 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11399_SHARP_){
var and__3546__auto____11539 = p1__11399_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11539))
{var and__3546__auto____11540 = p1__11399_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11540))
{return p1__11399_SHARP_.call(null,z);
} else
{return and__3546__auto____11540;
}
} else
{return and__3546__auto____11539;
}
}),ps__11531);
});
var epn__11636 = (function() { 
var G__11648__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11542 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11542))
{return cljs.core.every_QMARK_.call(null,(function (p1__11400_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11400_SHARP_,args);
}),ps__11531);
} else
{return and__3546__auto____11542;
}
})());
};
var G__11648 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11648__delegate.call(this, x, y, z, args);
};
G__11648.cljs$lang$maxFixedArity = 3;
G__11648.cljs$lang$applyTo = (function (arglist__11649){
var x = cljs.core.first(arglist__11649);
var y = cljs.core.first(cljs.core.next(arglist__11649));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11649)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11649)));
return G__11648__delegate.call(this, x, y, z, args);
});
return G__11648;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11632.call(this);
case  1 :
return epn__11633.call(this,x);
case  2 :
return epn__11634.call(this,x,y);
case  3 :
return epn__11635.call(this,x,y,z);
default:
return epn__11636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11636.cljs$lang$applyTo;
return epn;
})()
};
var G__11627 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11627__delegate.call(this, p1, p2, p3, ps);
};
G__11627.cljs$lang$maxFixedArity = 3;
G__11627.cljs$lang$applyTo = (function (arglist__11650){
var p1 = cljs.core.first(arglist__11650);
var p2 = cljs.core.first(cljs.core.next(arglist__11650));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11650)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11650)));
return G__11627__delegate.call(this, p1, p2, p3, ps);
});
return G__11627;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11545.call(this,p1);
case  2 :
return every_pred__11546.call(this,p1,p2);
case  3 :
return every_pred__11547.call(this,p1,p2,p3);
default:
return every_pred__11548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11548.cljs$lang$applyTo;
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
var some_fn__11735 = (function (p){
return (function() {
var sp1 = null;
var sp1__11742 = (function (){
return null;
});
var sp1__11743 = (function (x){
return p.call(null,x);
});
var sp1__11744 = (function (x,y){
var or__3548__auto____11655 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11655))
{return or__3548__auto____11655;
} else
{return p.call(null,y);
}
});
var sp1__11745 = (function (x,y,z){
var or__3548__auto____11657 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11657))
{return or__3548__auto____11657;
} else
{var or__3548__auto____11658 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11658))
{return or__3548__auto____11658;
} else
{return p.call(null,z);
}
}
});
var sp1__11746 = (function() { 
var G__11814__delegate = function (x,y,z,args){
var or__3548__auto____11659 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11659))
{return or__3548__auto____11659;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11814 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11814__delegate.call(this, x, y, z, args);
};
G__11814.cljs$lang$maxFixedArity = 3;
G__11814.cljs$lang$applyTo = (function (arglist__11815){
var x = cljs.core.first(arglist__11815);
var y = cljs.core.first(cljs.core.next(arglist__11815));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11815)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11815)));
return G__11814__delegate.call(this, x, y, z, args);
});
return G__11814;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11742.call(this);
case  1 :
return sp1__11743.call(this,x);
case  2 :
return sp1__11744.call(this,x,y);
case  3 :
return sp1__11745.call(this,x,y,z);
default:
return sp1__11746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11746.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11736 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11816 = (function (){
return null;
});
var sp2__11817 = (function (x){
var or__3548__auto____11663 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11663))
{return or__3548__auto____11663;
} else
{return p2.call(null,x);
}
});
var sp2__11818 = (function (x,y){
var or__3548__auto____11667 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11667))
{return or__3548__auto____11667;
} else
{var or__3548__auto____11668 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11668))
{return or__3548__auto____11668;
} else
{var or__3548__auto____11669 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11669))
{return or__3548__auto____11669;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11819 = (function (x,y,z){
var or__3548__auto____11670 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11670))
{return or__3548__auto____11670;
} else
{var or__3548__auto____11673 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11673))
{return or__3548__auto____11673;
} else
{var or__3548__auto____11674 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11674))
{return or__3548__auto____11674;
} else
{var or__3548__auto____11675 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11675))
{return or__3548__auto____11675;
} else
{var or__3548__auto____11677 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11677))
{return or__3548__auto____11677;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11820 = (function() { 
var G__11827__delegate = function (x,y,z,args){
var or__3548__auto____11679 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11679))
{return or__3548__auto____11679;
} else
{return cljs.core.some.call(null,(function (p1__11423_SHARP_){
var or__3548__auto____11681 = p1.call(null,p1__11423_SHARP_);

if(cljs.core.truth_(or__3548__auto____11681))
{return or__3548__auto____11681;
} else
{return p2.call(null,p1__11423_SHARP_);
}
}),args);
}
};
var G__11827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11827__delegate.call(this, x, y, z, args);
};
G__11827.cljs$lang$maxFixedArity = 3;
G__11827.cljs$lang$applyTo = (function (arglist__11829){
var x = cljs.core.first(arglist__11829);
var y = cljs.core.first(cljs.core.next(arglist__11829));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11829)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11829)));
return G__11827__delegate.call(this, x, y, z, args);
});
return G__11827;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11816.call(this);
case  1 :
return sp2__11817.call(this,x);
case  2 :
return sp2__11818.call(this,x,y);
case  3 :
return sp2__11819.call(this,x,y,z);
default:
return sp2__11820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11820.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11737 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11835 = (function (){
return null;
});
var sp3__11836 = (function (x){
var or__3548__auto____11682 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11682))
{return or__3548__auto____11682;
} else
{var or__3548__auto____11685 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11685))
{return or__3548__auto____11685;
} else
{return p3.call(null,x);
}
}
});
var sp3__11837 = (function (x,y){
var or__3548__auto____11686 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11686))
{return or__3548__auto____11686;
} else
{var or__3548__auto____11688 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11688))
{return or__3548__auto____11688;
} else
{var or__3548__auto____11689 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11689))
{return or__3548__auto____11689;
} else
{var or__3548__auto____11690 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11690))
{return or__3548__auto____11690;
} else
{var or__3548__auto____11691 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11691))
{return or__3548__auto____11691;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11838 = (function (x,y,z){
var or__3548__auto____11696 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11696))
{return or__3548__auto____11696;
} else
{var or__3548__auto____11697 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11697))
{return or__3548__auto____11697;
} else
{var or__3548__auto____11698 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11698))
{return or__3548__auto____11698;
} else
{var or__3548__auto____11700 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11700))
{return or__3548__auto____11700;
} else
{var or__3548__auto____11701 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11701))
{return or__3548__auto____11701;
} else
{var or__3548__auto____11708 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11708))
{return or__3548__auto____11708;
} else
{var or__3548__auto____11710 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11710))
{return or__3548__auto____11710;
} else
{var or__3548__auto____11712 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11712))
{return or__3548__auto____11712;
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
var sp3__11839 = (function() { 
var G__11863__delegate = function (x,y,z,args){
var or__3548__auto____11713 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11713))
{return or__3548__auto____11713;
} else
{return cljs.core.some.call(null,(function (p1__11424_SHARP_){
var or__3548__auto____11716 = p1.call(null,p1__11424_SHARP_);

if(cljs.core.truth_(or__3548__auto____11716))
{return or__3548__auto____11716;
} else
{var or__3548__auto____11718 = p2.call(null,p1__11424_SHARP_);

if(cljs.core.truth_(or__3548__auto____11718))
{return or__3548__auto____11718;
} else
{return p3.call(null,p1__11424_SHARP_);
}
}
}),args);
}
};
var G__11863 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11863__delegate.call(this, x, y, z, args);
};
G__11863.cljs$lang$maxFixedArity = 3;
G__11863.cljs$lang$applyTo = (function (arglist__11868){
var x = cljs.core.first(arglist__11868);
var y = cljs.core.first(cljs.core.next(arglist__11868));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11868)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11868)));
return G__11863__delegate.call(this, x, y, z, args);
});
return G__11863;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11835.call(this);
case  1 :
return sp3__11836.call(this,x);
case  2 :
return sp3__11837.call(this,x,y);
case  3 :
return sp3__11838.call(this,x,y,z);
default:
return sp3__11839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11839.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11738 = (function() { 
var G__11869__delegate = function (p1,p2,p3,ps){
var ps__11719 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11871 = (function (){
return null;
});
var spn__11872 = (function (x){
return cljs.core.some.call(null,(function (p1__11425_SHARP_){
return p1__11425_SHARP_.call(null,x);
}),ps__11719);
});
var spn__11873 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11426_SHARP_){
var or__3548__auto____11724 = p1__11426_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{return p1__11426_SHARP_.call(null,y);
}
}),ps__11719);
});
var spn__11874 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11427_SHARP_){
var or__3548__auto____11726 = p1__11427_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11726))
{return or__3548__auto____11726;
} else
{var or__3548__auto____11727 = p1__11427_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11727))
{return or__3548__auto____11727;
} else
{return p1__11427_SHARP_.call(null,z);
}
}
}),ps__11719);
});
var spn__11875 = (function() { 
var G__11888__delegate = function (x,y,z,args){
var or__3548__auto____11730 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11730))
{return or__3548__auto____11730;
} else
{return cljs.core.some.call(null,(function (p1__11428_SHARP_){
return cljs.core.some.call(null,p1__11428_SHARP_,args);
}),ps__11719);
}
};
var G__11888 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11888__delegate.call(this, x, y, z, args);
};
G__11888.cljs$lang$maxFixedArity = 3;
G__11888.cljs$lang$applyTo = (function (arglist__11889){
var x = cljs.core.first(arglist__11889);
var y = cljs.core.first(cljs.core.next(arglist__11889));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11889)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11889)));
return G__11888__delegate.call(this, x, y, z, args);
});
return G__11888;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11871.call(this);
case  1 :
return spn__11872.call(this,x);
case  2 :
return spn__11873.call(this,x,y);
case  3 :
return spn__11874.call(this,x,y,z);
default:
return spn__11875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11875.cljs$lang$applyTo;
return spn;
})()
};
var G__11869 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11869__delegate.call(this, p1, p2, p3, ps);
};
G__11869.cljs$lang$maxFixedArity = 3;
G__11869.cljs$lang$applyTo = (function (arglist__11891){
var p1 = cljs.core.first(arglist__11891);
var p2 = cljs.core.first(cljs.core.next(arglist__11891));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11891)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11891)));
return G__11869__delegate.call(this, p1, p2, p3, ps);
});
return G__11869;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11735.call(this,p1);
case  2 :
return some_fn__11736.call(this,p1,p2);
case  3 :
return some_fn__11737.call(this,p1,p2,p3);
default:
return some_fn__11738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11738.cljs$lang$applyTo;
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
var map__12012 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11895 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11895))
{var s__11896 = temp__3698__auto____11895;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11896)),map.call(null,f,cljs.core.rest.call(null,s__11896)));
} else
{return null;
}
})));
});
var map__12014 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11989 = cljs.core.seq.call(null,c1);
var s2__11990 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11991 = s1__11989;

if(cljs.core.truth_(and__3546__auto____11991))
{return s2__11990;
} else
{return and__3546__auto____11991;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11989),cljs.core.first.call(null,s2__11990)),map.call(null,f,cljs.core.rest.call(null,s1__11989),cljs.core.rest.call(null,s2__11990)));
} else
{return null;
}
})));
});
var map__12015 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11993 = cljs.core.seq.call(null,c1);
var s2__11994 = cljs.core.seq.call(null,c2);
var s3__11995 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11997 = s1__11993;

if(cljs.core.truth_(and__3546__auto____11997))
{var and__3546__auto____11999 = s2__11994;

if(cljs.core.truth_(and__3546__auto____11999))
{return s3__11995;
} else
{return and__3546__auto____11999;
}
} else
{return and__3546__auto____11997;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11993),cljs.core.first.call(null,s2__11994),cljs.core.first.call(null,s3__11995)),map.call(null,f,cljs.core.rest.call(null,s1__11993),cljs.core.rest.call(null,s2__11994),cljs.core.rest.call(null,s3__11995)));
} else
{return null;
}
})));
});
var map__12016 = (function() { 
var G__12029__delegate = function (f,c1,c2,c3,colls){
var step__12006 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12004 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12004)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12004),step.call(null,map.call(null,cljs.core.rest,ss__12004)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11652_SHARP_){
return cljs.core.apply.call(null,f,p1__11652_SHARP_);
}),step__12006.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12029 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12029__delegate.call(this, f, c1, c2, c3, colls);
};
G__12029.cljs$lang$maxFixedArity = 4;
G__12029.cljs$lang$applyTo = (function (arglist__12035){
var f = cljs.core.first(arglist__12035);
var c1 = cljs.core.first(cljs.core.next(arglist__12035));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12035)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12035))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12035))));
return G__12029__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12029;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12012.call(this,f,c1);
case  3 :
return map__12014.call(this,f,c1,c2);
case  4 :
return map__12015.call(this,f,c1,c2,c3);
default:
return map__12016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12016.cljs$lang$applyTo;
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
{var temp__3698__auto____12045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12045))
{var s__12047 = temp__3698__auto____12045;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12047),take.call(null,(n - 1),cljs.core.rest.call(null,s__12047)));
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
var step__12058 = (function (n,coll){
while(true){
var s__12055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12057 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12057))
{return s__12055;
} else
{return and__3546__auto____12057;
}
})()))
{{
var G__12063 = (n - 1);
var G__12064 = cljs.core.rest.call(null,s__12055);
n = G__12063;
coll = G__12064;
continue;
}
} else
{return s__12055;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12058.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12072 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12073 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12072.call(this,n);
case  2 :
return drop_last__12073.call(this,n,s);
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
var s__12077 = cljs.core.seq.call(null,coll);
var lead__12078 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12078))
{{
var G__12082 = cljs.core.next.call(null,s__12077);
var G__12083 = cljs.core.next.call(null,lead__12078);
s__12077 = G__12082;
lead__12078 = G__12083;
continue;
}
} else
{return s__12077;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12092 = (function (pred,coll){
while(true){
var s__12085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12089 = s__12085;

if(cljs.core.truth_(and__3546__auto____12089))
{return pred.call(null,cljs.core.first.call(null,s__12085));
} else
{return and__3546__auto____12089;
}
})()))
{{
var G__12095 = pred;
var G__12096 = cljs.core.rest.call(null,s__12085);
pred = G__12095;
coll = G__12096;
continue;
}
} else
{return s__12085;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12092.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12100))
{var s__12101 = temp__3698__auto____12100;

return cljs.core.concat.call(null,s__12101,cycle.call(null,s__12101));
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
var repeat__12106 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12107 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12106.call(this,n);
case  2 :
return repeat__12107.call(this,n,x);
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
var repeatedly__12112 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12113 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12112.call(this,n);
case  2 :
return repeatedly__12113.call(this,n,f);
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
var interleave__12153 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12118 = cljs.core.seq.call(null,c1);
var s2__12140 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12143 = s1__12118;

if(cljs.core.truth_(and__3546__auto____12143))
{return s2__12140;
} else
{return and__3546__auto____12143;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12118),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12140),interleave.call(null,cljs.core.rest.call(null,s1__12118),cljs.core.rest.call(null,s2__12140))));
} else
{return null;
}
})));
});
var interleave__12154 = (function() { 
var G__12159__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12146 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12146)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12146),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12146)));
} else
{return null;
}
})));
};
var G__12159 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12159__delegate.call(this, c1, c2, colls);
};
G__12159.cljs$lang$maxFixedArity = 2;
G__12159.cljs$lang$applyTo = (function (arglist__12162){
var c1 = cljs.core.first(arglist__12162);
var c2 = cljs.core.first(cljs.core.next(arglist__12162));
var colls = cljs.core.rest(cljs.core.next(arglist__12162));
return G__12159__delegate.call(this, c1, c2, colls);
});
return G__12159;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12153.call(this,c1,c2);
default:
return interleave__12154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12154.cljs$lang$applyTo;
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
var cat__12246 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12169 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12169))
{var coll__12170 = temp__3695__auto____12169;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12170),cat.call(null,cljs.core.rest.call(null,coll__12170),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12246.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12279 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12280 = (function() { 
var G__12282__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12282 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12282__delegate.call(this, f, coll, colls);
};
G__12282.cljs$lang$maxFixedArity = 2;
G__12282.cljs$lang$applyTo = (function (arglist__12283){
var f = cljs.core.first(arglist__12283);
var coll = cljs.core.first(cljs.core.next(arglist__12283));
var colls = cljs.core.rest(cljs.core.next(arglist__12283));
return G__12282__delegate.call(this, f, coll, colls);
});
return G__12282;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12279.call(this,f,coll);
default:
return mapcat__12280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12280.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12284 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12284))
{var s__12285 = temp__3698__auto____12284;

var f__12287 = cljs.core.first.call(null,s__12285);
var r__12288 = cljs.core.rest.call(null,s__12285);

if(cljs.core.truth_(pred.call(null,f__12287)))
{return cljs.core.cons.call(null,f__12287,filter.call(null,pred,r__12288));
} else
{return filter.call(null,pred,r__12288);
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
var walk__12309 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12309.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12303_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12303_SHARP_));
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
var partition__12343 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12344 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12329))
{var s__12331 = temp__3698__auto____12329;

var p__12332 = cljs.core.take.call(null,n,s__12331);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12332))))
{return cljs.core.cons.call(null,p__12332,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12331)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12345 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12337 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12337))
{var s__12338 = temp__3698__auto____12337;

var p__12340 = cljs.core.take.call(null,n,s__12338);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12340))))
{return cljs.core.cons.call(null,p__12340,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12338)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12340,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12343.call(this,n,step);
case  3 :
return partition__12344.call(this,n,step,pad);
case  4 :
return partition__12345.call(this,n,step,pad,coll);
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
var get_in__12365 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12366 = (function (m,ks,not_found){
var sentinel__12360 = cljs.core.lookup_sentinel;
var m__12361 = m;
var ks__12362 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12362))
{var m__12363 = cljs.core.get.call(null,m__12361,cljs.core.first.call(null,ks__12362),sentinel__12360);

if(cljs.core.truth_((sentinel__12360 === m__12363)))
{return not_found;
} else
{{
var G__12368 = sentinel__12360;
var G__12369 = m__12363;
var G__12370 = cljs.core.next.call(null,ks__12362);
sentinel__12360 = G__12368;
m__12361 = G__12369;
ks__12362 = G__12370;
continue;
}
}
} else
{return m__12361;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12365.call(this,m,ks);
case  3 :
return get_in__12366.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12375,v){
var vec__12376__12377 = p__12375;
var k__12378 = cljs.core.nth.call(null,vec__12376__12377,0,null);
var ks__12379 = cljs.core.nthnext.call(null,vec__12376__12377,1);

if(cljs.core.truth_(ks__12379))
{return cljs.core.assoc.call(null,m,k__12378,assoc_in.call(null,cljs.core.get.call(null,m,k__12378),ks__12379,v));
} else
{return cljs.core.assoc.call(null,m,k__12378,v);
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
var update_in__delegate = function (m,p__12380,f,args){
var vec__12381__12382 = p__12380;
var k__12383 = cljs.core.nth.call(null,vec__12381__12382,0,null);
var ks__12384 = cljs.core.nthnext.call(null,vec__12381__12382,1);

if(cljs.core.truth_(ks__12384))
{return cljs.core.assoc.call(null,m,k__12383,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12383),ks__12384,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12383,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12383),args));
}
};
var update_in = function (m,p__12380,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12380, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12389){
var m = cljs.core.first(arglist__12389);
var p__12380 = cljs.core.first(cljs.core.next(arglist__12389));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12389)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12389)));
return update_in__delegate.call(this, m, p__12380, f, args);
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
var this__12407 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12538 = null;
var G__12538__12539 = (function (coll,k){
var this__12409 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12538__12540 = (function (coll,k,not_found){
var this__12412 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12538 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12538__12539.call(this,coll,k);
case  3 :
return G__12538__12540.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12538;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12414 = this;
var new_array__12416 = cljs.core.aclone.call(null,this__12414.array);

(new_array__12416[k] = v);
return (new cljs.core.Vector(this__12414.meta,new_array__12416));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12546 = null;
var G__12546__12547 = (function (coll,k){
var this__12419 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12546__12548 = (function (coll,k,not_found){
var this__12420 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12546 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12546__12547.call(this,coll,k);
case  3 :
return G__12546__12548.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12546;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12422 = this;
var new_array__12424 = cljs.core.aclone.call(null,this__12422.array);

new_array__12424.push(o);
return (new cljs.core.Vector(this__12422.meta,new_array__12424));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12556 = null;
var G__12556__12557 = (function (v,f){
var this__12426 = this;
return cljs.core.ci_reduce.call(null,this__12426.array,f);
});
var G__12556__12558 = (function (v,f,start){
var this__12427 = this;
return cljs.core.ci_reduce.call(null,this__12427.array,f,start);
});
G__12556 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12556__12557.call(this,v,f);
case  3 :
return G__12556__12558.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12556;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12429 = this;
if(cljs.core.truth_((this__12429.array.length > 0)))
{var vector_seq__12434 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12429.array.length)))
{return cljs.core.cons.call(null,(this__12429.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12434.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12437 = this;
return this__12437.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12439 = this;
var count__12441 = this__12439.array.length;

if(cljs.core.truth_((count__12441 > 0)))
{return (this__12439.array[(count__12441 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12443 = this;
if(cljs.core.truth_((this__12443.array.length > 0)))
{var new_array__12444 = cljs.core.aclone.call(null,this__12443.array);

new_array__12444.pop();
return (new cljs.core.Vector(this__12443.meta,new_array__12444));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12512 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12514 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12519 = this;
return (new cljs.core.Vector(meta,this__12519.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12524 = this;
return this__12524.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12572 = null;
var G__12572__12573 = (function (coll,n){
var this__12525 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12526 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12526))
{return (n < this__12525.array.length);
} else
{return and__3546__auto____12526;
}
})()))
{return (this__12525.array[n]);
} else
{return null;
}
});
var G__12572__12574 = (function (coll,n,not_found){
var this__12531 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12532 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12532))
{return (n < this__12531.array.length);
} else
{return and__3546__auto____12532;
}
})()))
{return (this__12531.array[n]);
} else
{return not_found;
}
});
G__12572 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12572__12573.call(this,coll,n);
case  3 :
return G__12572__12574.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12572;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12533 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12533.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12613){
var args = cljs.core.seq( arglist__12613 );;
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
var this__12642 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12746 = null;
var G__12746__12747 = (function (coll,k){
var this__12644 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12746__12748 = (function (coll,k,not_found){
var this__12648 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12746 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12746__12747.call(this,coll,k);
case  3 :
return G__12746__12748.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12746;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12652 = this;
var v_pos__12655 = (this__12652.start + key);

return (new cljs.core.Subvec(this__12652.meta,cljs.core._assoc.call(null,this__12652.v,v_pos__12655,val),this__12652.start,((this__12652.end > (v_pos__12655 + 1)) ? this__12652.end : (v_pos__12655 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12756 = null;
var G__12756__12757 = (function (coll,k){
var this__12661 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12756__12758 = (function (coll,k,not_found){
var this__12710 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12756 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12756__12757.call(this,coll,k);
case  3 :
return G__12756__12758.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12756;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12712 = this;
return (new cljs.core.Subvec(this__12712.meta,cljs.core._assoc_n.call(null,this__12712.v,this__12712.end,o),this__12712.start,(this__12712.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12770 = null;
var G__12770__12771 = (function (coll,f){
var this__12729 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12770__12772 = (function (coll,f,start){
var this__12730 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12770 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12770__12771.call(this,coll,f);
case  3 :
return G__12770__12772.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12770;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12731 = this;
var subvec_seq__12732 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12731.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12731.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12732.call(null,this__12731.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12733 = this;
return (this__12733.end - this__12733.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12734 = this;
return cljs.core._nth.call(null,this__12734.v,(this__12734.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12735 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12735.start,this__12735.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12735.meta,this__12735.v,this__12735.start,(this__12735.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12737 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12739 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12740 = this;
return (new cljs.core.Subvec(meta,this__12740.v,this__12740.start,this__12740.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12741 = this;
return this__12741.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12792 = null;
var G__12792__12794 = (function (coll,n){
var this__12743 = this;
return cljs.core._nth.call(null,this__12743.v,(this__12743.start + n));
});
var G__12792__12795 = (function (coll,n,not_found){
var this__12744 = this;
return cljs.core._nth.call(null,this__12744.v,(this__12744.start + n),not_found);
});
G__12792 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12792__12794.call(this,coll,n);
case  3 :
return G__12792__12795.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12792;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12745 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12745.meta);
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
var subvec__12817 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12818 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12817.call(this,v,start);
case  3 :
return subvec__12818.call(this,v,start,end);
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
var this__12835 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12838 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12839 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12842 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12842.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12847 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12849 = this;
return cljs.core._first.call(null,this__12849.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12851 = this;
var temp__3695__auto____12852 = cljs.core.next.call(null,this__12851.front);

if(cljs.core.truth_(temp__3695__auto____12852))
{var f1__12854 = temp__3695__auto____12852;

return (new cljs.core.PersistentQueueSeq(this__12851.meta,f1__12854,this__12851.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12851.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12851.meta,this__12851.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12856 = this;
return this__12856.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12859 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12859.front,this__12859.rear));
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
var this__12896 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12915 = this;
if(cljs.core.truth_(this__12915.front))
{return (new cljs.core.PersistentQueue(this__12915.meta,(this__12915.count + 1),this__12915.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12919 = this__12915.rear;

if(cljs.core.truth_(or__3548__auto____12919))
{return or__3548__auto____12919;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12915.meta,(this__12915.count + 1),cljs.core.conj.call(null,this__12915.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12923 = this;
var rear__12926 = cljs.core.seq.call(null,this__12923.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12928 = this__12923.front;

if(cljs.core.truth_(or__3548__auto____12928))
{return or__3548__auto____12928;
} else
{return rear__12926;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12923.front,cljs.core.seq.call(null,rear__12926)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12932 = this;
return this__12932.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12936 = this;
return cljs.core._first.call(null,this__12936.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12938 = this;
if(cljs.core.truth_(this__12938.front))
{var temp__3695__auto____12943 = cljs.core.next.call(null,this__12938.front);

if(cljs.core.truth_(temp__3695__auto____12943))
{var f1__12944 = temp__3695__auto____12943;

return (new cljs.core.PersistentQueue(this__12938.meta,(this__12938.count - 1),f1__12944,this__12938.rear));
} else
{return (new cljs.core.PersistentQueue(this__12938.meta,(this__12938.count - 1),cljs.core.seq.call(null,this__12938.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12949 = this;
return cljs.core.first.call(null,this__12949.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12950 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12951 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12952 = this;
return (new cljs.core.PersistentQueue(meta,this__12952.count,this__12952.front,this__12952.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12953 = this;
return this__12953.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12956 = this;
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
var this__12976 = this;
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
var len__12991 = array.length;

var i__12992 = 0;

while(true){
if(cljs.core.truth_((i__12992 < len__12991)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12992]))))
{return i__12992;
} else
{{
var G__12994 = (i__12992 + incr);
i__12992 = G__12994;
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
var obj_map_contains_key_QMARK___12997 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12998 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12995 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12995))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12995;
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
return obj_map_contains_key_QMARK___12997.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12998.call(this,k,strobj,true_val,false_val);
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
var this__13031 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13183 = null;
var G__13183__13184 = (function (coll,k){
var this__13034 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13183__13185 = (function (coll,k,not_found){
var this__13038 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13038.strobj,(this__13038.strobj[k]),not_found);
});
G__13183 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13183__13184.call(this,coll,k);
case  3 :
return G__13183__13185.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13183;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13041 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13044 = goog.object.clone.call(null,this__13041.strobj);
var overwrite_QMARK___13046 = new_strobj__13044.hasOwnProperty(k);

(new_strobj__13044[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13046))
{return (new cljs.core.ObjMap(this__13041.meta,this__13041.keys,new_strobj__13044));
} else
{var new_keys__13048 = cljs.core.aclone.call(null,this__13041.keys);

new_keys__13048.push(k);
return (new cljs.core.ObjMap(this__13041.meta,new_keys__13048,new_strobj__13044));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13041.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13051 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13051.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13189 = null;
var G__13189__13190 = (function (coll,k){
var this__13056 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13189__13191 = (function (coll,k,not_found){
var this__13058 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13189 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13189__13190.call(this,coll,k);
case  3 :
return G__13189__13191.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13189;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13070 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13091 = this;
if(cljs.core.truth_((this__13091.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13012_SHARP_){
return cljs.core.vector.call(null,p1__13012_SHARP_,(this__13091.strobj[p1__13012_SHARP_]));
}),this__13091.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13094 = this;
return this__13094.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13105 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13109 = this;
return (new cljs.core.ObjMap(meta,this__13109.keys,this__13109.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13111 = this;
return this__13111.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13178 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13178.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13179 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13180 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13180))
{return this__13179.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13180;
}
})()))
{var new_keys__13181 = cljs.core.aclone.call(null,this__13179.keys);
var new_strobj__13182 = goog.object.clone.call(null,this__13179.strobj);

new_keys__13181.splice(cljs.core.scan_array.call(null,1,k,new_keys__13181),1);
cljs.core.js_delete.call(null,new_strobj__13182,k);
return (new cljs.core.ObjMap(this__13179.meta,new_keys__13181,new_strobj__13182));
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
var this__13214 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13358 = null;
var G__13358__13359 = (function (coll,k){
var this__13215 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13358__13360 = (function (coll,k,not_found){
var this__13216 = this;
var bucket__13217 = (this__13216.hashobj[cljs.core.hash.call(null,k)]);
var i__13218 = (cljs.core.truth_(bucket__13217)?cljs.core.scan_array.call(null,2,k,bucket__13217):null);

if(cljs.core.truth_(i__13218))
{return (bucket__13217[(i__13218 + 1)]);
} else
{return not_found;
}
});
G__13358 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13358__13359.call(this,coll,k);
case  3 :
return G__13358__13360.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13358;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13219 = this;
var h__13221 = cljs.core.hash.call(null,k);
var bucket__13223 = (this__13219.hashobj[h__13221]);

if(cljs.core.truth_(bucket__13223))
{var new_bucket__13224 = cljs.core.aclone.call(null,bucket__13223);
var new_hashobj__13226 = goog.object.clone.call(null,this__13219.hashobj);

(new_hashobj__13226[h__13221] = new_bucket__13224);
var temp__3695__auto____13229 = cljs.core.scan_array.call(null,2,k,new_bucket__13224);

if(cljs.core.truth_(temp__3695__auto____13229))
{var i__13230 = temp__3695__auto____13229;

(new_bucket__13224[(i__13230 + 1)] = v);
return (new cljs.core.HashMap(this__13219.meta,this__13219.count,new_hashobj__13226));
} else
{new_bucket__13224.push(k,v);
return (new cljs.core.HashMap(this__13219.meta,(this__13219.count + 1),new_hashobj__13226));
}
} else
{var new_hashobj__13234 = goog.object.clone.call(null,this__13219.hashobj);

(new_hashobj__13234[h__13221] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13219.meta,(this__13219.count + 1),new_hashobj__13234));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13238 = this;
var bucket__13322 = (this__13238.hashobj[cljs.core.hash.call(null,k)]);
var i__13323 = (cljs.core.truth_(bucket__13322)?cljs.core.scan_array.call(null,2,k,bucket__13322):null);

if(cljs.core.truth_(i__13323))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13370 = null;
var G__13370__13373 = (function (coll,k){
var this__13324 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13370__13374 = (function (coll,k,not_found){
var this__13325 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13370 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13370__13373.call(this,coll,k);
case  3 :
return G__13370__13374.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13370;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13327 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13330 = this;
if(cljs.core.truth_((this__13330.count > 0)))
{var hashes__13335 = cljs.core.js_keys.call(null,this__13330.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13200_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13330.hashobj[p1__13200_SHARP_])));
}),hashes__13335);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13340 = this;
return this__13340.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13341 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13344 = this;
return (new cljs.core.HashMap(meta,this__13344.count,this__13344.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13346 = this;
return this__13346.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13347 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13347.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13350 = this;
var h__13351 = cljs.core.hash.call(null,k);
var bucket__13352 = (this__13350.hashobj[h__13351]);
var i__13354 = (cljs.core.truth_(bucket__13352)?cljs.core.scan_array.call(null,2,k,bucket__13352):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13354)))
{return coll;
} else
{var new_hashobj__13356 = goog.object.clone.call(null,this__13350.hashobj);

if(cljs.core.truth_((3 > bucket__13352.length)))
{cljs.core.js_delete.call(null,new_hashobj__13356,h__13351);
} else
{var new_bucket__13357 = cljs.core.aclone.call(null,bucket__13352);

new_bucket__13357.splice(i__13354,2);
(new_hashobj__13356[h__13351] = new_bucket__13357);
}
return (new cljs.core.HashMap(this__13350.meta,(this__13350.count - 1),new_hashobj__13356));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13402 = ks.length;

var i__13403 = 0;
var out__13404 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13403 < len__13402)))
{{
var G__13427 = (i__13403 + 1);
var G__13428 = cljs.core.assoc.call(null,out__13404,(ks[i__13403]),(vs[i__13403]));
i__13403 = G__13427;
out__13404 = G__13428;
continue;
}
} else
{return out__13404;
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
var in$__13432 = cljs.core.seq.call(null,keyvals);
var out__13433 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13432))
{{
var G__13438 = cljs.core.nnext.call(null,in$__13432);
var G__13440 = cljs.core.assoc.call(null,out__13433,cljs.core.first.call(null,in$__13432),cljs.core.second.call(null,in$__13432));
in$__13432 = G__13438;
out__13433 = G__13440;
continue;
}
} else
{return out__13433;
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
hash_map.cljs$lang$applyTo = (function (arglist__13442){
var keyvals = cljs.core.seq( arglist__13442 );;
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
{return cljs.core.reduce.call(null,(function (p1__13450_SHARP_,p2__13452_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13459 = p1__13450_SHARP_;

if(cljs.core.truth_(or__3548__auto____13459))
{return or__3548__auto____13459;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13452_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13466){
var maps = cljs.core.seq( arglist__13466 );;
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
{var merge_entry__13476 = (function (m,e){
var k__13473 = cljs.core.first.call(null,e);
var v__13474 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13473)))
{return cljs.core.assoc.call(null,m,k__13473,f.call(null,cljs.core.get.call(null,m,k__13473),v__13474));
} else
{return cljs.core.assoc.call(null,m,k__13473,v__13474);
}
});
var merge2__13484 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13476,(function (){var or__3548__auto____13481 = m1;

if(cljs.core.truth_(or__3548__auto____13481))
{return or__3548__auto____13481;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13484,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13495){
var f = cljs.core.first(arglist__13495);
var maps = cljs.core.rest(arglist__13495);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13503 = cljs.core.ObjMap.fromObject([],{});
var keys__13505 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13505))
{var key__13507 = cljs.core.first.call(null,keys__13505);
var entry__13508 = cljs.core.get.call(null,map,key__13507,"﷐'user/not-found");

{
var G__13515 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13508,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13503,key__13507,entry__13508):ret__13503);
var G__13516 = cljs.core.next.call(null,keys__13505);
ret__13503 = G__13515;
keys__13505 = G__13516;
continue;
}
} else
{return ret__13503;
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
var this__13525 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13638 = null;
var G__13638__13639 = (function (coll,v){
var this__13530 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13638__13640 = (function (coll,v,not_found){
var this__13531 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13531.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13638 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13638__13639.call(this,coll,v);
case  3 :
return G__13638__13640.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13638;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13643 = null;
var G__13643__13644 = (function (coll,k){
var this__13535 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13643__13645 = (function (coll,k,not_found){
var this__13536 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13643 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13643__13644.call(this,coll,k);
case  3 :
return G__13643__13645.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13643;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13538 = this;
return (new cljs.core.Set(this__13538.meta,cljs.core.assoc.call(null,this__13538.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13545 = this;
return cljs.core.keys.call(null,this__13545.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13551 = this;
return (new cljs.core.Set(this__13551.meta,cljs.core.dissoc.call(null,this__13551.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13629 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13630 = this;
var and__3546__auto____13631 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13631))
{var and__3546__auto____13632 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13632))
{return cljs.core.every_QMARK_.call(null,(function (p1__13498_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13498_SHARP_);
}),other);
} else
{return and__3546__auto____13632;
}
} else
{return and__3546__auto____13631;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13634 = this;
return (new cljs.core.Set(meta,this__13634.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13636 = this;
return this__13636.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13637 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13637.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13657 = cljs.core.seq.call(null,coll);
var out__13659 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13657))))
{{
var G__13672 = cljs.core.rest.call(null,in$__13657);
var G__13673 = cljs.core.conj.call(null,out__13659,cljs.core.first.call(null,in$__13657));
in$__13657 = G__13672;
out__13659 = G__13673;
continue;
}
} else
{return out__13659;
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
{var n__13678 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13680 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13680))
{var e__13681 = temp__3695__auto____13680;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13681));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13678,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13655_SHARP_){
var temp__3695__auto____13689 = cljs.core.find.call(null,smap,p1__13655_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13689))
{var e__13690 = temp__3695__auto____13689;

return cljs.core.second.call(null,e__13690);
} else
{return p1__13655_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13712 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13698,seen){
while(true){
var vec__13700__13701 = p__13698;
var f__13704 = cljs.core.nth.call(null,vec__13700__13701,0,null);
var xs__13706 = vec__13700__13701;

var temp__3698__auto____13709 = cljs.core.seq.call(null,xs__13706);

if(cljs.core.truth_(temp__3698__auto____13709))
{var s__13710 = temp__3698__auto____13709;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13704)))
{{
var G__13718 = cljs.core.rest.call(null,s__13710);
var G__13719 = seen;
p__13698 = G__13718;
seen = G__13719;
continue;
}
} else
{return cljs.core.cons.call(null,f__13704,step.call(null,cljs.core.rest.call(null,s__13710),cljs.core.conj.call(null,seen,f__13704)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13712.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13728 = cljs.core.Vector.fromArray([]);
var s__13731 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13731)))
{{
var G__13737 = cljs.core.conj.call(null,ret__13728,cljs.core.first.call(null,s__13731));
var G__13738 = cljs.core.next.call(null,s__13731);
ret__13728 = G__13737;
s__13731 = G__13738;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13728);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13742 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13742))
{return or__3548__auto____13742;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13744 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13744 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13744 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13755 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13755))
{return or__3548__auto____13755;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13758 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13758 > -1)))
{return cljs.core.subs.call(null,x,2,i__13758);
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
var map__13777 = cljs.core.ObjMap.fromObject([],{});
var ks__13778 = cljs.core.seq.call(null,keys);
var vs__13780 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13781 = ks__13778;

if(cljs.core.truth_(and__3546__auto____13781))
{return vs__13780;
} else
{return and__3546__auto____13781;
}
})()))
{{
var G__13797 = cljs.core.assoc.call(null,map__13777,cljs.core.first.call(null,ks__13778),cljs.core.first.call(null,vs__13780));
var G__13798 = cljs.core.next.call(null,ks__13778);
var G__13799 = cljs.core.next.call(null,vs__13780);
map__13777 = G__13797;
ks__13778 = G__13798;
vs__13780 = G__13799;
continue;
}
} else
{return map__13777;
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
var max_key__13814 = (function (k,x){
return x;
});
var max_key__13815 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13816 = (function() { 
var G__13818__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13774_SHARP_,p2__13775_SHARP_){
return max_key.call(null,k,p1__13774_SHARP_,p2__13775_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13818 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13818__delegate.call(this, k, x, y, more);
};
G__13818.cljs$lang$maxFixedArity = 3;
G__13818.cljs$lang$applyTo = (function (arglist__13824){
var k = cljs.core.first(arglist__13824);
var x = cljs.core.first(cljs.core.next(arglist__13824));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13824)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13824)));
return G__13818__delegate.call(this, k, x, y, more);
});
return G__13818;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13814.call(this,k,x);
case  3 :
return max_key__13815.call(this,k,x,y);
default:
return max_key__13816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13816.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13827 = (function (k,x){
return x;
});
var min_key__13828 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13829 = (function() { 
var G__13834__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13806_SHARP_,p2__13807_SHARP_){
return min_key.call(null,k,p1__13806_SHARP_,p2__13807_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13834 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13834__delegate.call(this, k, x, y, more);
};
G__13834.cljs$lang$maxFixedArity = 3;
G__13834.cljs$lang$applyTo = (function (arglist__13841){
var k = cljs.core.first(arglist__13841);
var x = cljs.core.first(cljs.core.next(arglist__13841));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13841)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13841)));
return G__13834__delegate.call(this, k, x, y, more);
});
return G__13834;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13827.call(this,k,x);
case  3 :
return min_key__13828.call(this,k,x,y);
default:
return min_key__13829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13829.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13850 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13851 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13845 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13845))
{var s__13846 = temp__3698__auto____13845;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13846),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13846)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13850.call(this,n,step);
case  3 :
return partition_all__13851.call(this,n,step,coll);
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
var temp__3698__auto____13868 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13868))
{var s__13869 = temp__3698__auto____13868;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13869))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13869),take_while.call(null,pred,cljs.core.rest.call(null,s__13869)));
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
var this__13887 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13888 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13953 = null;
var G__13953__13954 = (function (rng,f){
var this__13889 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13953__13955 = (function (rng,f,s){
var this__13892 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13953 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13953__13954.call(this,rng,f);
case  3 :
return G__13953__13955.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13953;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13897 = this;
var comp__13900 = (cljs.core.truth_((this__13897.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13900.call(null,this__13897.start,this__13897.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13903 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13903.end - this__13903.start) / this__13903.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13910 = this;
return this__13910.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13911 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13911.meta,(this__13911.start + this__13911.step),this__13911.end,this__13911.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13913 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13915 = this;
return (new cljs.core.Range(meta,this__13915.start,this__13915.end,this__13915.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13917 = this;
return this__13917.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13973 = null;
var G__13973__13974 = (function (rng,n){
var this__13918 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13918.start + (n * this__13918.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13920 = (this__13918.start > this__13918.end);

if(cljs.core.truth_(and__3546__auto____13920))
{return cljs.core._EQ_.call(null,this__13918.step,0);
} else
{return and__3546__auto____13920;
}
})()))
{return this__13918.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13973__13975 = (function (rng,n,not_found){
var this__13924 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13924.start + (n * this__13924.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13930 = (this__13924.start > this__13924.end);

if(cljs.core.truth_(and__3546__auto____13930))
{return cljs.core._EQ_.call(null,this__13924.step,0);
} else
{return and__3546__auto____13930;
}
})()))
{return this__13924.start;
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
var this__13932 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13932.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13990 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13991 = (function (end){
return range.call(null,0,end,1);
});
var range__13992 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13993 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13990.call(this);
case  1 :
return range__13991.call(this,start);
case  2 :
return range__13992.call(this,start,end);
case  3 :
return range__13993.call(this,start,end,step);
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
var temp__3698__auto____14000 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14000))
{var s__14001 = temp__3698__auto____14000;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14001),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14001)));
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
var temp__3698__auto____14066 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14066))
{var s__14067 = temp__3698__auto____14066;

var fst__14069 = cljs.core.first.call(null,s__14067);
var fv__14070 = f.call(null,fst__14069);
var run__14073 = cljs.core.cons.call(null,fst__14069,cljs.core.take_while.call(null,(function (p1__14008_SHARP_){
return cljs.core._EQ_.call(null,fv__14070,f.call(null,p1__14008_SHARP_));
}),cljs.core.next.call(null,s__14067)));

return cljs.core.cons.call(null,run__14073,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14073),s__14067))));
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
var reductions__14139 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14123 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14123))
{var s__14124 = temp__3695__auto____14123;

return reductions.call(null,f,cljs.core.first.call(null,s__14124),cljs.core.rest.call(null,s__14124));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14141 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14127 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14127))
{var s__14131 = temp__3698__auto____14127;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14131)),cljs.core.rest.call(null,s__14131));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14139.call(this,f,init);
case  3 :
return reductions__14141.call(this,f,init,coll);
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
var juxt__14199 = (function (f){
return (function() {
var G__14204 = null;
var G__14204__14205 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14204__14206 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14204__14207 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14204__14208 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14204__14209 = (function() { 
var G__14212__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14212 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14212__delegate.call(this, x, y, z, args);
};
G__14212.cljs$lang$maxFixedArity = 3;
G__14212.cljs$lang$applyTo = (function (arglist__14213){
var x = cljs.core.first(arglist__14213);
var y = cljs.core.first(cljs.core.next(arglist__14213));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14213)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14213)));
return G__14212__delegate.call(this, x, y, z, args);
});
return G__14212;
})()
;
G__14204 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14204__14205.call(this);
case  1 :
return G__14204__14206.call(this,x);
case  2 :
return G__14204__14207.call(this,x,y);
case  3 :
return G__14204__14208.call(this,x,y,z);
default:
return G__14204__14209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14204.cljs$lang$maxFixedArity = 3;
G__14204.cljs$lang$applyTo = G__14204__14209.cljs$lang$applyTo;
return G__14204;
})()
});
var juxt__14200 = (function (f,g){
return (function() {
var G__14219 = null;
var G__14219__14220 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14219__14221 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14219__14222 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14219__14223 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14219__14224 = (function() { 
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
G__14227.cljs$lang$applyTo = (function (arglist__14229){
var x = cljs.core.first(arglist__14229);
var y = cljs.core.first(cljs.core.next(arglist__14229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14229)));
return G__14227__delegate.call(this, x, y, z, args);
});
return G__14227;
})()
;
G__14219 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14219__14220.call(this);
case  1 :
return G__14219__14221.call(this,x);
case  2 :
return G__14219__14222.call(this,x,y);
case  3 :
return G__14219__14223.call(this,x,y,z);
default:
return G__14219__14224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14219.cljs$lang$maxFixedArity = 3;
G__14219.cljs$lang$applyTo = G__14219__14224.cljs$lang$applyTo;
return G__14219;
})()
});
var juxt__14201 = (function (f,g,h){
return (function() {
var G__14233 = null;
var G__14233__14234 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14233__14235 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14233__14236 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14233__14237 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14233__14238 = (function() { 
var G__14246__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14246__delegate.call(this, x, y, z, args);
};
G__14246.cljs$lang$maxFixedArity = 3;
G__14246.cljs$lang$applyTo = (function (arglist__14247){
var x = cljs.core.first(arglist__14247);
var y = cljs.core.first(cljs.core.next(arglist__14247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14247)));
return G__14246__delegate.call(this, x, y, z, args);
});
return G__14246;
})()
;
G__14233 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14233__14234.call(this);
case  1 :
return G__14233__14235.call(this,x);
case  2 :
return G__14233__14236.call(this,x,y);
case  3 :
return G__14233__14237.call(this,x,y,z);
default:
return G__14233__14238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14233.cljs$lang$maxFixedArity = 3;
G__14233.cljs$lang$applyTo = G__14233__14238.cljs$lang$applyTo;
return G__14233;
})()
});
var juxt__14202 = (function() { 
var G__14248__delegate = function (f,g,h,fs){
var fs__14178 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14249 = null;
var G__14249__14251 = (function (){
return cljs.core.reduce.call(null,(function (p1__14101_SHARP_,p2__14102_SHARP_){
return cljs.core.conj.call(null,p1__14101_SHARP_,p2__14102_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14178);
});
var G__14249__14252 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14104_SHARP_,p2__14105_SHARP_){
return cljs.core.conj.call(null,p1__14104_SHARP_,p2__14105_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14178);
});
var G__14249__14253 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14106_SHARP_,p2__14107_SHARP_){
return cljs.core.conj.call(null,p1__14106_SHARP_,p2__14107_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14178);
});
var G__14249__14254 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14109_SHARP_,p2__14110_SHARP_){
return cljs.core.conj.call(null,p1__14109_SHARP_,p2__14110_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14178);
});
var G__14249__14255 = (function() { 
var G__14261__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14111_SHARP_,p2__14112_SHARP_){
return cljs.core.conj.call(null,p1__14111_SHARP_,cljs.core.apply.call(null,p2__14112_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14178);
};
var G__14261 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14261__delegate.call(this, x, y, z, args);
};
G__14261.cljs$lang$maxFixedArity = 3;
G__14261.cljs$lang$applyTo = (function (arglist__14264){
var x = cljs.core.first(arglist__14264);
var y = cljs.core.first(cljs.core.next(arglist__14264));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14264)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14264)));
return G__14261__delegate.call(this, x, y, z, args);
});
return G__14261;
})()
;
G__14249 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14249__14251.call(this);
case  1 :
return G__14249__14252.call(this,x);
case  2 :
return G__14249__14253.call(this,x,y);
case  3 :
return G__14249__14254.call(this,x,y,z);
default:
return G__14249__14255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14249.cljs$lang$maxFixedArity = 3;
G__14249.cljs$lang$applyTo = G__14249__14255.cljs$lang$applyTo;
return G__14249;
})()
};
var G__14248 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14248__delegate.call(this, f, g, h, fs);
};
G__14248.cljs$lang$maxFixedArity = 3;
G__14248.cljs$lang$applyTo = (function (arglist__14269){
var f = cljs.core.first(arglist__14269);
var g = cljs.core.first(cljs.core.next(arglist__14269));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14269)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14269)));
return G__14248__delegate.call(this, f, g, h, fs);
});
return G__14248;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14199.call(this,f);
case  2 :
return juxt__14200.call(this,f,g);
case  3 :
return juxt__14201.call(this,f,g,h);
default:
return juxt__14202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14202.cljs$lang$applyTo;
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
var dorun__14288 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14291 = cljs.core.next.call(null,coll);
coll = G__14291;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14289 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14282 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14282))
{return (n > 0);
} else
{return and__3546__auto____14282;
}
})()))
{{
var G__14292 = (n - 1);
var G__14293 = cljs.core.next.call(null,coll);
n = G__14292;
coll = G__14293;
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
return dorun__14288.call(this,n);
case  2 :
return dorun__14289.call(this,n,coll);
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
var doall__14307 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14308 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14307.call(this,n);
case  2 :
return doall__14308.call(this,n,coll);
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
var matches__14314 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14314),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14314),1)))
{return cljs.core.first.call(null,matches__14314);
} else
{return cljs.core.vec.call(null,matches__14314);
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
var matches__14321 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14321)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14321),1)))
{return cljs.core.first.call(null,matches__14321);
} else
{return cljs.core.vec.call(null,matches__14321);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14325 = cljs.core.re_find.call(null,re,s);
var match_idx__14329 = s.search(re);
var match_str__14330 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14325))?cljs.core.first.call(null,match_data__14325):match_data__14325);
var post_match__14332 = cljs.core.subs.call(null,s,(match_idx__14329 + cljs.core.count.call(null,match_str__14330)));

if(cljs.core.truth_(match_data__14325))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14325,re_seq.call(null,re,post_match__14332));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14348_SHARP_){
return print_one.call(null,p1__14348_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14355 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14355))
{var and__3546__auto____14360 = (function (){var x__445__auto____14356 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14357 = x__445__auto____14356;

if(cljs.core.truth_(and__3546__auto____14357))
{var and__3546__auto____14359 = x__445__auto____14356.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14359))
{return cljs.core.not.call(null,x__445__auto____14356.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14359;
}
} else
{return and__3546__auto____14357;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14356);
}
})();

if(cljs.core.truth_(and__3546__auto____14360))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14360;
}
} else
{return and__3546__auto____14355;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14361 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14362 = x__445__auto____14361;

if(cljs.core.truth_(and__3546__auto____14362))
{var and__3546__auto____14363 = x__445__auto____14361.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14363))
{return cljs.core.not.call(null,x__445__auto____14361.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14363;
}
} else
{return and__3546__auto____14362;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14361);
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
var first_obj__14380 = cljs.core.first.call(null,objs);
var sb__14381 = (new goog.string.StringBuffer());

var G__14382__14383 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14382__14383))
{var obj__14384 = cljs.core.first.call(null,G__14382__14383);
var G__14382__14385 = G__14382__14383;

while(true){
if(cljs.core.truth_((obj__14384 === first_obj__14380)))
{} else
{sb__14381.append(" ");
}
var G__14386__14387 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14384,opts));

if(cljs.core.truth_(G__14386__14387))
{var string__14388 = cljs.core.first.call(null,G__14386__14387);
var G__14386__14389 = G__14386__14387;

while(true){
sb__14381.append(string__14388);
var temp__3698__auto____14393 = cljs.core.next.call(null,G__14386__14389);

if(cljs.core.truth_(temp__3698__auto____14393))
{var G__14386__14394 = temp__3698__auto____14393;

{
var G__14405 = cljs.core.first.call(null,G__14386__14394);
var G__14407 = G__14386__14394;
string__14388 = G__14405;
G__14386__14389 = G__14407;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14395 = cljs.core.next.call(null,G__14382__14385);

if(cljs.core.truth_(temp__3698__auto____14395))
{var G__14382__14396 = temp__3698__auto____14395;

{
var G__14410 = cljs.core.first.call(null,G__14382__14396);
var G__14411 = G__14382__14396;
obj__14384 = G__14410;
G__14382__14385 = G__14411;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14381);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14416 = cljs.core.first.call(null,objs);

var G__14417__14418 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14417__14418))
{var obj__14419 = cljs.core.first.call(null,G__14417__14418);
var G__14417__14420 = G__14417__14418;

while(true){
if(cljs.core.truth_((obj__14419 === first_obj__14416)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14421__14422 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14419,opts));

if(cljs.core.truth_(G__14421__14422))
{var string__14423 = cljs.core.first.call(null,G__14421__14422);
var G__14421__14424 = G__14421__14422;

while(true){
cljs.core.string_print.call(null,string__14423);
var temp__3698__auto____14427 = cljs.core.next.call(null,G__14421__14424);

if(cljs.core.truth_(temp__3698__auto____14427))
{var G__14421__14429 = temp__3698__auto____14427;

{
var G__14445 = cljs.core.first.call(null,G__14421__14429);
var G__14446 = G__14421__14429;
string__14423 = G__14445;
G__14421__14424 = G__14446;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14435 = cljs.core.next.call(null,G__14417__14420);

if(cljs.core.truth_(temp__3698__auto____14435))
{var G__14417__14436 = temp__3698__auto____14435;

{
var G__14449 = cljs.core.first.call(null,G__14417__14436);
var G__14450 = G__14417__14436;
obj__14419 = G__14449;
G__14417__14420 = G__14450;
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
pr_str.cljs$lang$applyTo = (function (arglist__14479){
var objs = cljs.core.seq( arglist__14479 );;
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
pr.cljs$lang$applyTo = (function (arglist__14483){
var objs = cljs.core.seq( arglist__14483 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14485){
var objs = cljs.core.seq( arglist__14485 );;
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
println.cljs$lang$applyTo = (function (arglist__14487){
var objs = cljs.core.seq( arglist__14487 );;
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
prn.cljs$lang$applyTo = (function (arglist__14500){
var objs = cljs.core.seq( arglist__14500 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14511 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14511,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14526 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14526))
{var nspc__14528 = temp__3698__auto____14526;

return cljs.core.str.call(null,nspc__14528,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14530 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14530))
{var nspc__14532 = temp__3698__auto____14530;

return cljs.core.str.call(null,nspc__14532,"/");
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
var pr_pair__14572 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14572,"{",", ","}",opts,coll);
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
var this__14685 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14689 = this;
var G__14691__14695 = cljs.core.seq.call(null,this__14689.watches);

if(cljs.core.truth_(G__14691__14695))
{var G__14699__14705 = cljs.core.first.call(null,G__14691__14695);
var vec__14702__14706 = G__14699__14705;
var key__14709 = cljs.core.nth.call(null,vec__14702__14706,0,null);
var f__14710 = cljs.core.nth.call(null,vec__14702__14706,1,null);
var G__14691__14711 = G__14691__14695;

var G__14699__14712 = G__14699__14705;
var G__14691__14713 = G__14691__14711;

while(true){
var vec__14715__14716 = G__14699__14712;
var key__14718 = cljs.core.nth.call(null,vec__14715__14716,0,null);
var f__14720 = cljs.core.nth.call(null,vec__14715__14716,1,null);
var G__14691__14721 = G__14691__14713;

f__14720.call(null,key__14718,this$,oldval,newval);
var temp__3698__auto____14722 = cljs.core.next.call(null,G__14691__14721);

if(cljs.core.truth_(temp__3698__auto____14722))
{var G__14691__14724 = temp__3698__auto____14722;

{
var G__14785 = cljs.core.first.call(null,G__14691__14724);
var G__14786 = G__14691__14724;
G__14699__14712 = G__14785;
G__14691__14713 = G__14786;
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
var this__14730 = this;
return this$.watches = cljs.core.assoc.call(null,this__14730.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14756 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14756.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14760 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14760.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14765 = this;
return this__14765.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14767 = this;
return this__14767.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14768 = this;
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
var atom__14871 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14872 = (function() { 
var G__14874__delegate = function (x,p__14857){
var map__14859__14860 = p__14857;
var map__14859__14861 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14859__14860))?cljs.core.apply.call(null,cljs.core.hash_map,map__14859__14860):map__14859__14860);
var validator__14863 = cljs.core.get.call(null,map__14859__14861,"﷐'validator");
var meta__14864 = cljs.core.get.call(null,map__14859__14861,"﷐'meta");

return (new cljs.core.Atom(x,meta__14864,validator__14863,null));
};
var G__14874 = function (x,var_args){
var p__14857 = null;
if (goog.isDef(var_args)) {
  p__14857 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14874__delegate.call(this, x, p__14857);
};
G__14874.cljs$lang$maxFixedArity = 1;
G__14874.cljs$lang$applyTo = (function (arglist__14877){
var x = cljs.core.first(arglist__14877);
var p__14857 = cljs.core.rest(arglist__14877);
return G__14874__delegate.call(this, x, p__14857);
});
return G__14874;
})()
;
atom = function(x,var_args){
var p__14857 = var_args;
switch(arguments.length){
case  1 :
return atom__14871.call(this,x);
default:
return atom__14872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14872.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14884 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14884))
{var validate__14886 = temp__3698__auto____14884;

if(cljs.core.truth_(validate__14886.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14889 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14889,new_value);
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
var G__14916__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14916 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14916__delegate.call(this, a, f, x, y, z, more);
};
G__14916.cljs$lang$maxFixedArity = 5;
G__14916.cljs$lang$applyTo = (function (arglist__14917){
var a = cljs.core.first(arglist__14917);
var f = cljs.core.first(cljs.core.next(arglist__14917));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14917)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14917))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14917)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14917)))));
return G__14916__delegate.call(this, a, f, x, y, z, more);
});
return G__14916;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14933){
var iref = cljs.core.first(arglist__14933);
var f = cljs.core.first(cljs.core.next(arglist__14933));
var args = cljs.core.rest(cljs.core.next(arglist__14933));
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
var gensym__14941 = (function (){
return gensym.call(null,"G__");
});
var gensym__14942 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14941.call(this);
case  1 :
return gensym__14942.call(this,prefix_string);
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
var this__14958 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14958.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14962 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14962.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14962.state,this__14962.f);
}
return cljs.core.deref.call(null,this__14962.state);
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
delay.cljs$lang$applyTo = (function (arglist__14984){
var body = cljs.core.seq( arglist__14984 );;
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
var map__14991__14992 = options;
var map__14991__14996 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14991__14992))?cljs.core.apply.call(null,cljs.core.hash_map,map__14991__14992):map__14991__14992);
var keywordize_keys__14997 = cljs.core.get.call(null,map__14991__14996,"﷐'keywordize-keys");
var keyfn__14998 = (cljs.core.truth_(keywordize_keys__14997)?cljs.core.keyword:cljs.core.str);
var f__15012 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15010 = (function iter__15003(s__15004){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15004__15005 = s__15004;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15004__15005)))
{var k__15006 = cljs.core.first.call(null,s__15004__15005);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14998.call(null,k__15006),thisfn.call(null,(x[k__15006]))]),iter__15003.call(null,cljs.core.rest.call(null,s__15004__15005)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15010.call(null,cljs.core.js_keys.call(null,x));
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

return f__15012.call(null,x);
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
var mem__15038 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15049__delegate = function (args){
var temp__3695__auto____15040 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15038),args);

if(cljs.core.truth_(temp__3695__auto____15040))
{var v__15042 = temp__3695__auto____15040;

return v__15042;
} else
{var ret__15043 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15038,cljs.core.assoc,args,ret__15043);
return ret__15043;
}
};
var G__15049 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15049__delegate.call(this, args);
};
G__15049.cljs$lang$maxFixedArity = 0;
G__15049.cljs$lang$applyTo = (function (arglist__15050){
var args = cljs.core.seq( arglist__15050 );;
return G__15049__delegate.call(this, args);
});
return G__15049;
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
var trampoline__15058 = (function (f){
while(true){
var ret__15051 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15051)))
{{
var G__15062 = ret__15051;
f = G__15062;
continue;
}
} else
{return ret__15051;
}
break;
}
});
var trampoline__15059 = (function() { 
var G__15063__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15063 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15063__delegate.call(this, f, args);
};
G__15063.cljs$lang$maxFixedArity = 1;
G__15063.cljs$lang$applyTo = (function (arglist__15064){
var f = cljs.core.first(arglist__15064);
var args = cljs.core.rest(arglist__15064);
return G__15063__delegate.call(this, f, args);
});
return G__15063;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15058.call(this,f);
default:
return trampoline__15059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15059.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15084 = (function (){
return rand.call(null,1);
});
var rand__15085 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15084.call(this);
case  1 :
return rand__15085.call(this,n);
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
var k__15096 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15096,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15096,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15122 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15123 = (function (h,child,parent){
var or__3548__auto____15105 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15105))
{return or__3548__auto____15105;
} else
{var or__3548__auto____15106 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15106))
{return or__3548__auto____15106;
} else
{var and__3546__auto____15107 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15107))
{var and__3546__auto____15111 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15111))
{var and__3546__auto____15114 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15114))
{var ret__15116 = true;
var i__15117 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15118 = cljs.core.not.call(null,ret__15116);

if(cljs.core.truth_(or__3548__auto____15118))
{return or__3548__auto____15118;
} else
{return cljs.core._EQ_.call(null,i__15117,cljs.core.count.call(null,parent));
}
})()))
{return ret__15116;
} else
{{
var G__15128 = isa_QMARK_.call(null,h,child.call(null,i__15117),parent.call(null,i__15117));
var G__15129 = (i__15117 + 1);
ret__15116 = G__15128;
i__15117 = G__15129;
continue;
}
}
break;
}
} else
{return and__3546__auto____15114;
}
} else
{return and__3546__auto____15111;
}
} else
{return and__3546__auto____15107;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15122.call(this,h,child);
case  3 :
return isa_QMARK___15123.call(this,h,child,parent);
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
var parents__15135 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15137 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15135.call(this,h);
case  2 :
return parents__15137.call(this,h,tag);
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
var ancestors__15144 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15145 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15144.call(this,h);
case  2 :
return ancestors__15145.call(this,h,tag);
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
var descendants__15235 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15236 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15235.call(this,h);
case  2 :
return descendants__15236.call(this,h,tag);
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
var derive__15271 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15272 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15256 = "﷐'parents".call(null,h);
var td__15259 = "﷐'descendants".call(null,h);
var ta__15261 = "﷐'ancestors".call(null,h);
var tf__15263 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15268 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15256.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15261.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15261.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15256,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15263.call(null,"﷐'ancestors".call(null,h),tag,td__15259,parent,ta__15261),"﷐'descendants":tf__15263.call(null,"﷐'descendants".call(null,h),parent,ta__15261,tag,td__15259)});
})());

if(cljs.core.truth_(or__3548__auto____15268))
{return or__3548__auto____15268;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15271.call(this,h,tag);
case  3 :
return derive__15272.call(this,h,tag,parent);
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
var underive__15300 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15301 = (function (h,tag,parent){
var parentMap__15293 = "﷐'parents".call(null,h);
var childsParents__15294 = (cljs.core.truth_(parentMap__15293.call(null,tag))?cljs.core.disj.call(null,parentMap__15293.call(null,tag),parent):cljs.core.set([]));
var newParents__15297 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15294))?cljs.core.assoc.call(null,parentMap__15293,tag,childsParents__15294):cljs.core.dissoc.call(null,parentMap__15293,tag));
var deriv_seq__15299 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15249_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15249_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15249_SHARP_),cljs.core.second.call(null,p1__15249_SHARP_)));
}),cljs.core.seq.call(null,newParents__15297)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15293.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15251_SHARP_,p2__15252_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15251_SHARP_,p2__15252_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15299));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15300.call(this,h,tag);
case  3 :
return underive__15301.call(this,h,tag,parent);
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
var xprefs__15314 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15318 = (cljs.core.truth_((function (){var and__3546__auto____15317 = xprefs__15314;

if(cljs.core.truth_(and__3546__auto____15317))
{return xprefs__15314.call(null,y);
} else
{return and__3546__auto____15317;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15318))
{return or__3548__auto____15318;
} else
{var or__3548__auto____15323 = (function (){var ps__15320 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15320) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15320),prefer_table)))
{} else
{}
{
var G__15335 = cljs.core.rest.call(null,ps__15320);
ps__15320 = G__15335;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15323))
{return or__3548__auto____15323;
} else
{var or__3548__auto____15327 = (function (){var ps__15325 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15325) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15325),y,prefer_table)))
{} else
{}
{
var G__15340 = cljs.core.rest.call(null,ps__15325);
ps__15325 = G__15340;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15327))
{return or__3548__auto____15327;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15345 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15371 = cljs.core.reduce.call(null,(function (be,p__15356){
var vec__15358__15359 = p__15356;
var k__15362 = cljs.core.nth.call(null,vec__15358__15359,0,null);
var ___15363 = cljs.core.nth.call(null,vec__15358__15359,1,null);
var e__15364 = vec__15358__15359;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15362)))
{var be2__15368 = (cljs.core.truth_((function (){var or__3548__auto____15367 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{return cljs.core.dominates.call(null,k__15362,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15364:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15368),k__15362,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15362," and ",cljs.core.first.call(null,be2__15368),", and neither is preferred")));
}
return be2__15368;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15371))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15371));
return cljs.core.second.call(null,best_entry__15371);
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
if(cljs.core.truth_((function (){var and__3546__auto____15387 = mf;

if(cljs.core.truth_(and__3546__auto____15387))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15387;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15389 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{var or__3548__auto____15391 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15396 = mf;

if(cljs.core.truth_(and__3546__auto____15396))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15396;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15398 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15398))
{return or__3548__auto____15398;
} else
{var or__3548__auto____15399 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15399))
{return or__3548__auto____15399;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15402 = mf;

if(cljs.core.truth_(and__3546__auto____15402))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15402;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15404 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15404))
{return or__3548__auto____15404;
} else
{var or__3548__auto____15405 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15405))
{return or__3548__auto____15405;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15410 = mf;

if(cljs.core.truth_(and__3546__auto____15410))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15410;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15412 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15412))
{return or__3548__auto____15412;
} else
{var or__3548__auto____15413 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15413))
{return or__3548__auto____15413;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15416 = mf;

if(cljs.core.truth_(and__3546__auto____15416))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15416;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15418 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15418))
{return or__3548__auto____15418;
} else
{var or__3548__auto____15419 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15419))
{return or__3548__auto____15419;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15422 = mf;

if(cljs.core.truth_(and__3546__auto____15422))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15422;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15424 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15424))
{return or__3548__auto____15424;
} else
{var or__3548__auto____15425 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15425))
{return or__3548__auto____15425;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15428 = mf;

if(cljs.core.truth_(and__3546__auto____15428))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15428;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15430 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15430))
{return or__3548__auto____15430;
} else
{var or__3548__auto____15431 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15431))
{return or__3548__auto____15431;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15434 = mf;

if(cljs.core.truth_(and__3546__auto____15434))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15434;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15442 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15442))
{return or__3548__auto____15442;
} else
{var or__3548__auto____15446 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15446))
{return or__3548__auto____15446;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15509 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15510 = cljs.core._get_method.call(null,mf,dispatch_val__15509);

if(cljs.core.truth_(target_fn__15510))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15509)));
}
return cljs.core.apply.call(null,target_fn__15510,args);
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
var this__15538 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15541 = this;
cljs.core.swap_BANG_.call(null,this__15541.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15541.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15541.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15541.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15548 = this;
cljs.core.swap_BANG_.call(null,this__15548.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15548.method_cache,this__15548.method_table,this__15548.cached_hierarchy,this__15548.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15551 = this;
cljs.core.swap_BANG_.call(null,this__15551.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15551.method_cache,this__15551.method_table,this__15551.cached_hierarchy,this__15551.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15553 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15553.cached_hierarchy),cljs.core.deref.call(null,this__15553.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15553.method_cache,this__15553.method_table,this__15553.cached_hierarchy,this__15553.hierarchy);
}
var temp__3695__auto____15558 = cljs.core.deref.call(null,this__15553.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15558))
{var target_fn__15560 = temp__3695__auto____15558;

return target_fn__15560;
} else
{var temp__3695__auto____15563 = cljs.core.find_and_cache_best_method.call(null,this__15553.name,dispatch_val,this__15553.hierarchy,this__15553.method_table,this__15553.prefer_table,this__15553.method_cache,this__15553.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15563))
{var target_fn__15564 = temp__3695__auto____15563;

return target_fn__15564;
} else
{return cljs.core.deref.call(null,this__15553.method_table).call(null,this__15553.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15565 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15565.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15565.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15565.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15565.method_cache,this__15565.method_table,this__15565.cached_hierarchy,this__15565.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15572 = this;
return cljs.core.deref.call(null,this__15572.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15574 = this;
return cljs.core.deref.call(null,this__15574.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15577 = this;
return cljs.core.do_dispatch.call(null,mf,this__15577.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15580__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15580 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15580__delegate.call(this, _, args);
};
G__15580.cljs$lang$maxFixedArity = 1;
G__15580.cljs$lang$applyTo = (function (arglist__15581){
var _ = cljs.core.first(arglist__15581);
var args = cljs.core.rest(arglist__15581);
return G__15580__delegate.call(this, _, args);
});
return G__15580;
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
