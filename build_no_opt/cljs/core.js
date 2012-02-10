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
var or__3548__auto____7194 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7194))
{return or__3548__auto____7194;
} else
{var or__3548__auto____7196 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7196))
{return or__3548__auto____7196;
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
if(cljs.core.truth_((function (){var and__3546__auto____7251 = this$;

if(cljs.core.truth_(and__3546__auto____7251))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7251;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7542 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7318 = this$;

if(cljs.core.truth_(and__3546__auto____7318))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7318;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7337 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{var or__3548__auto____7338 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7543 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7544 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7346 = this$;

if(cljs.core.truth_(and__3546__auto____7346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7347 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7347))
{return or__3548__auto____7347;
} else
{var or__3548__auto____7348 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7545 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7349 = this$;

if(cljs.core.truth_(and__3546__auto____7349))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7349;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7546 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7547 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7355 = this$;

if(cljs.core.truth_(and__3546__auto____7355))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7355;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7548 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7358 = this$;

if(cljs.core.truth_(and__3546__auto____7358))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7358;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7549 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7363 = this$;

if(cljs.core.truth_(and__3546__auto____7363))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7363;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7550 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{var or__3548__auto____7368 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7369 = this$;

if(cljs.core.truth_(and__3546__auto____7369))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7369;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{var or__3548__auto____7373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{var or__3548__auto____7377 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7554 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7398 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{var or__3548__auto____7441 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7448 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{var or__3548__auto____7451 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7556 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7454 = this$;

if(cljs.core.truth_(and__3546__auto____7454))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7454;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{var or__3548__auto____7466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7470 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{var or__3548__auto____7471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7474 = this$;

if(cljs.core.truth_(and__3546__auto____7474))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7474;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7476 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{var or__3548__auto____7481 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7502 = this$;

if(cljs.core.truth_(and__3546__auto____7502))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7502;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7503 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
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
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7512 = this$;

if(cljs.core.truth_(and__3546__auto____7512))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7512;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7528 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{var or__3548__auto____7531 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7562 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7533 = this$;

if(cljs.core.truth_(and__3546__auto____7533))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7533;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7537 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
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
return _invoke__7542.call(this,this$,a);
case  3 :
return _invoke__7543.call(this,this$,a,b);
case  4 :
return _invoke__7544.call(this,this$,a,b,c);
case  5 :
return _invoke__7545.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7546.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7547.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7548.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7549.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7550.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7551.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7552.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7554.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7556.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7562.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7637 = coll;

if(cljs.core.truth_(and__3546__auto____7637))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7637;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7638 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7638))
{return or__3548__auto____7638;
} else
{var or__3548__auto____7639 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7639))
{return or__3548__auto____7639;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7644 = coll;

if(cljs.core.truth_(and__3546__auto____7644))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7644;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7645 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7645))
{return or__3548__auto____7645;
} else
{var or__3548__auto____7647 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7647))
{return or__3548__auto____7647;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7650 = coll;

if(cljs.core.truth_(and__3546__auto____7650))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7650;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7652 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{var or__3548__auto____7653 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
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
var _nth__7667 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7656 = coll;

if(cljs.core.truth_(and__3546__auto____7656))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7656;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7658 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{var or__3548__auto____7661 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7668 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7662 = coll;

if(cljs.core.truth_(and__3546__auto____7662))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7662;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7665 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{var or__3548__auto____7666 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7666))
{return or__3548__auto____7666;
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
return _nth__7667.call(this,coll,n);
case  3 :
return _nth__7668.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7697 = coll;

if(cljs.core.truth_(and__3546__auto____7697))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7697;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7699 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{var or__3548__auto____7701 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7706 = coll;

if(cljs.core.truth_(and__3546__auto____7706))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7706;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7710 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{var or__3548__auto____7712 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
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
if(cljs.core.truth_((function (){var and__3546__auto____7724 = o;

if(cljs.core.truth_(and__3546__auto____7724))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7724;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7727 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{var or__3548__auto____7729 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7736 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7731 = o;

if(cljs.core.truth_(and__3546__auto____7731))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7731;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
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
if(cljs.core.truth_((function (){var and__3546__auto____7756 = coll;

if(cljs.core.truth_(and__3546__auto____7756))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7756;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7761 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{var or__3548__auto____7763 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7767 = coll;

if(cljs.core.truth_(and__3546__auto____7767))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7767;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7770 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
} else
{var or__3548__auto____7772 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = coll;

if(cljs.core.truth_(and__3546__auto____7804))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7804;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7813 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
} else
{var or__3548__auto____7815 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7826 = coll;

if(cljs.core.truth_(and__3546__auto____7826))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7826;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7828 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7836 = coll;

if(cljs.core.truth_(and__3546__auto____7836))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7836;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{var or__3548__auto____7843 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = coll;

if(cljs.core.truth_(and__3546__auto____7844))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7844;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7847 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7859 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
} else
{var or__3548__auto____7860 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7868 = o;

if(cljs.core.truth_(and__3546__auto____7868))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7868;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7871 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
} else
{var or__3548__auto____7872 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7872))
{return or__3548__auto____7872;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7878 = o;

if(cljs.core.truth_(and__3546__auto____7878))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7878;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7881 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{var or__3548__auto____7882 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7906 = o;

if(cljs.core.truth_(and__3546__auto____7906))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7906;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7908 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7976 = o;

if(cljs.core.truth_(and__3546__auto____7976))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7976;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7978 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
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
var _reduce__8006 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7987 = coll;

if(cljs.core.truth_(and__3546__auto____7987))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7987;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7992 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7994 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8007 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8000 = coll;

if(cljs.core.truth_(and__3546__auto____8000))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8000;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8004 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8005 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
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
return _reduce__8006.call(this,coll,f);
case  3 :
return _reduce__8007.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = o;

if(cljs.core.truth_(and__3546__auto____8016))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8016;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8020 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8024 = o;

if(cljs.core.truth_(and__3546__auto____8024))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8024;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8029 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{var or__3548__auto____8030 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8040 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
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
if(cljs.core.truth_((function (){var and__3546__auto____8050 = o;

if(cljs.core.truth_(and__3546__auto____8050))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8050;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8052 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
} else
{var or__3548__auto____8054 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8064 = d;

if(cljs.core.truth_(and__3546__auto____8064))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8064;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8069 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = this$;

if(cljs.core.truth_(and__3546__auto____8076))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8076;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8079 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = this$;

if(cljs.core.truth_(and__3546__auto____8100))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8100;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8102 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{var or__3548__auto____8104 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8105 = this$;

if(cljs.core.truth_(and__3546__auto____8105))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8105;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8106 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{var or__3548__auto____8107 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
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
var G__8129 = null;
var G__8129__8130 = (function (o,k){
return null;
});
var G__8129__8131 = (function (o,k,not_found){
return not_found;
});
G__8129 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8129__8130.call(this,o,k);
case  3 :
return G__8129__8131.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8129;
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
var G__8133 = null;
var G__8133__8134 = (function (_,f){
return f.call(null);
});
var G__8133__8135 = (function (_,f,start){
return start;
});
G__8133 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8133__8134.call(this,_,f);
case  3 :
return G__8133__8135.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8133;
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
var G__8137 = null;
var G__8137__8138 = (function (_,n){
return null;
});
var G__8137__8139 = (function (_,n,not_found){
return not_found;
});
G__8137 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8137__8138.call(this,_,n);
case  3 :
return G__8137__8139.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8137;
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
var ci_reduce__8216 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8206 = cljs.core._nth.call(null,cicoll,0);
var n__8207 = 1;

while(true){
if(cljs.core.truth_((n__8207 < cljs.core._count.call(null,cicoll))))
{{
var G__8220 = f.call(null,val__8206,cljs.core._nth.call(null,cicoll,n__8207));
var G__8221 = (n__8207 + 1);
val__8206 = G__8220;
n__8207 = G__8221;
continue;
}
} else
{return val__8206;
}
break;
}
}
});
var ci_reduce__8217 = (function (cicoll,f,val){
var val__8208 = val;
var n__8209 = 0;

while(true){
if(cljs.core.truth_((n__8209 < cljs.core._count.call(null,cicoll))))
{{
var G__8224 = f.call(null,val__8208,cljs.core._nth.call(null,cicoll,n__8209));
var G__8225 = (n__8209 + 1);
val__8208 = G__8224;
n__8209 = G__8225;
continue;
}
} else
{return val__8208;
}
break;
}
});
var ci_reduce__8218 = (function (cicoll,f,val,idx){
var val__8214 = val;
var n__8215 = idx;

while(true){
if(cljs.core.truth_((n__8215 < cljs.core._count.call(null,cicoll))))
{{
var G__8228 = f.call(null,val__8214,cljs.core._nth.call(null,cicoll,n__8215));
var G__8229 = (n__8215 + 1);
val__8214 = G__8228;
n__8215 = G__8229;
continue;
}
} else
{return val__8214;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8216.call(this,cicoll,f);
case  3 :
return ci_reduce__8217.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8218.call(this,cicoll,f,val,idx);
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
var this__8246 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8288 = null;
var G__8288__8289 = (function (_,f){
var this__8247 = this;
return cljs.core.ci_reduce.call(null,this__8247.a,f,(this__8247.a[this__8247.i]),(this__8247.i + 1));
});
var G__8288__8290 = (function (_,f,start){
var this__8254 = this;
return cljs.core.ci_reduce.call(null,this__8254.a,f,start,this__8254.i);
});
G__8288 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8288__8289.call(this,_,f);
case  3 :
return G__8288__8290.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8288;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8257 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8296 = null;
var G__8296__8297 = (function (coll,n){
var this__8266 = this;
var i__8269 = (n + this__8266.i);

if(cljs.core.truth_((i__8269 < this__8266.a.length)))
{return (this__8266.a[i__8269]);
} else
{return null;
}
});
var G__8296__8298 = (function (coll,n,not_found){
var this__8271 = this;
var i__8273 = (n + this__8271.i);

if(cljs.core.truth_((i__8273 < this__8271.a.length)))
{return (this__8271.a[i__8273]);
} else
{return not_found;
}
});
G__8296 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8296__8297.call(this,coll,n);
case  3 :
return G__8296__8298.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8296;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8275 = this;
return (this__8275.a.length - this__8275.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8277 = this;
return (this__8277.a[this__8277.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8279 = this;
if(cljs.core.truth_(((this__8279.i + 1) < this__8279.a.length)))
{return (new cljs.core.IndexedSeq(this__8279.a,(this__8279.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8284 = this;
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
var G__8332 = null;
var G__8332__8333 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8332__8334 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8332 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8332__8333.call(this,array,f);
case  3 :
return G__8332__8334.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8332;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8338 = null;
var G__8338__8340 = (function (array,k){
return (array[k]);
});
var G__8338__8341 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8338 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8338__8340.call(this,array,k);
case  3 :
return G__8338__8341.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8338;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8345 = null;
var G__8345__8346 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8345__8347 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8345 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8345__8346.call(this,array,n);
case  3 :
return G__8345__8347.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8345;
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
var temp__3698__auto____8417 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8417))
{var s__8418 = temp__3698__auto____8417;

return cljs.core._first.call(null,s__8418);
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
var G__8478 = cljs.core.next.call(null,s);
s = G__8478;
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
var s__8480 = cljs.core.seq.call(null,x);
var n__8481 = 0;

while(true){
if(cljs.core.truth_(s__8480))
{{
var G__8484 = cljs.core.next.call(null,s__8480);
var G__8485 = (n__8481 + 1);
s__8480 = G__8484;
n__8481 = G__8485;
continue;
}
} else
{return n__8481;
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
var conj__8496 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8497 = (function() { 
var G__8499__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8500 = conj.call(null,coll,x);
var G__8501 = cljs.core.first.call(null,xs);
var G__8502 = cljs.core.next.call(null,xs);
coll = G__8500;
x = G__8501;
xs = G__8502;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8499 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8499__delegate.call(this, coll, x, xs);
};
G__8499.cljs$lang$maxFixedArity = 2;
G__8499.cljs$lang$applyTo = (function (arglist__8504){
var coll = cljs.core.first(arglist__8504);
var x = cljs.core.first(cljs.core.next(arglist__8504));
var xs = cljs.core.rest(cljs.core.next(arglist__8504));
return G__8499__delegate.call(this, coll, x, xs);
});
return G__8499;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8496.call(this,coll,x);
default:
return conj__8497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8497.cljs$lang$applyTo;
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
var nth__8529 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8530 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8529.call(this,coll,n);
case  3 :
return nth__8530.call(this,coll,n,not_found);
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
var get__8567 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8569 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8567.call(this,o,k);
case  3 :
return get__8569.call(this,o,k,not_found);
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
var assoc__8578 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8579 = (function() { 
var G__8581__delegate = function (coll,k,v,kvs){
while(true){
var ret__8573 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8582 = ret__8573;
var G__8584 = cljs.core.first.call(null,kvs);
var G__8585 = cljs.core.second.call(null,kvs);
var G__8586 = cljs.core.nnext.call(null,kvs);
coll = G__8582;
k = G__8584;
v = G__8585;
kvs = G__8586;
continue;
}
} else
{return ret__8573;
}
break;
}
};
var G__8581 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8581__delegate.call(this, coll, k, v, kvs);
};
G__8581.cljs$lang$maxFixedArity = 3;
G__8581.cljs$lang$applyTo = (function (arglist__8588){
var coll = cljs.core.first(arglist__8588);
var k = cljs.core.first(cljs.core.next(arglist__8588));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8588)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8588)));
return G__8581__delegate.call(this, coll, k, v, kvs);
});
return G__8581;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8578.call(this,coll,k,v);
default:
return assoc__8579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8579.cljs$lang$applyTo;
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
var dissoc__8604 = (function (coll){
return coll;
});
var dissoc__8605 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8606 = (function() { 
var G__8609__delegate = function (coll,k,ks){
while(true){
var ret__8599 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8610 = ret__8599;
var G__8611 = cljs.core.first.call(null,ks);
var G__8612 = cljs.core.next.call(null,ks);
coll = G__8610;
k = G__8611;
ks = G__8612;
continue;
}
} else
{return ret__8599;
}
break;
}
};
var G__8609 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8609__delegate.call(this, coll, k, ks);
};
G__8609.cljs$lang$maxFixedArity = 2;
G__8609.cljs$lang$applyTo = (function (arglist__8615){
var coll = cljs.core.first(arglist__8615);
var k = cljs.core.first(cljs.core.next(arglist__8615));
var ks = cljs.core.rest(cljs.core.next(arglist__8615));
return G__8609__delegate.call(this, coll, k, ks);
});
return G__8609;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8604.call(this,coll);
case  2 :
return dissoc__8605.call(this,coll,k);
default:
return dissoc__8606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8606.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8626 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8628 = x__445__auto____8626;

if(cljs.core.truth_(and__3546__auto____8628))
{var and__3546__auto____8630 = x__445__auto____8626.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8630))
{return cljs.core.not.call(null,x__445__auto____8626.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8630;
}
} else
{return and__3546__auto____8628;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8626);
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
var disj__8639 = (function (coll){
return coll;
});
var disj__8640 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8641 = (function() { 
var G__8645__delegate = function (coll,k,ks){
while(true){
var ret__8637 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8647 = ret__8637;
var G__8648 = cljs.core.first.call(null,ks);
var G__8649 = cljs.core.next.call(null,ks);
coll = G__8647;
k = G__8648;
ks = G__8649;
continue;
}
} else
{return ret__8637;
}
break;
}
};
var G__8645 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8645__delegate.call(this, coll, k, ks);
};
G__8645.cljs$lang$maxFixedArity = 2;
G__8645.cljs$lang$applyTo = (function (arglist__8650){
var coll = cljs.core.first(arglist__8650);
var k = cljs.core.first(cljs.core.next(arglist__8650));
var ks = cljs.core.rest(cljs.core.next(arglist__8650));
return G__8645__delegate.call(this, coll, k, ks);
});
return G__8645;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8639.call(this,coll);
case  2 :
return disj__8640.call(this,coll,k);
default:
return disj__8641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8641.cljs$lang$applyTo;
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
{var x__445__auto____8663 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8665 = x__445__auto____8663;

if(cljs.core.truth_(and__3546__auto____8665))
{var and__3546__auto____8667 = x__445__auto____8663.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8667))
{return cljs.core.not.call(null,x__445__auto____8663.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8667;
}
} else
{return and__3546__auto____8665;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8663);
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
{var x__445__auto____8712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8714 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8714))
{var and__3546__auto____8715 = x__445__auto____8712.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8715))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8715;
}
} else
{return and__3546__auto____8714;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8712);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8721 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8723 = x__445__auto____8721;

if(cljs.core.truth_(and__3546__auto____8723))
{var and__3546__auto____8726 = x__445__auto____8721.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8726))
{return cljs.core.not.call(null,x__445__auto____8721.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8726;
}
} else
{return and__3546__auto____8723;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8721);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8734 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8735 = x__445__auto____8734;

if(cljs.core.truth_(and__3546__auto____8735))
{var and__3546__auto____8737 = x__445__auto____8734.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8737))
{return cljs.core.not.call(null,x__445__auto____8734.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8737;
}
} else
{return and__3546__auto____8735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8734);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8747 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8748 = x__445__auto____8747;

if(cljs.core.truth_(and__3546__auto____8748))
{var and__3546__auto____8749 = x__445__auto____8747.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8749))
{return cljs.core.not.call(null,x__445__auto____8747.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8749;
}
} else
{return and__3546__auto____8748;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8747);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8754 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8756 = x__445__auto____8754;

if(cljs.core.truth_(and__3546__auto____8756))
{var and__3546__auto____8757 = x__445__auto____8754.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core.not.call(null,x__445__auto____8754.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8757;
}
} else
{return and__3546__auto____8756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8754);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8764 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8765 = x__445__auto____8764;

if(cljs.core.truth_(and__3546__auto____8765))
{var and__3546__auto____8766 = x__445__auto____8764.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8766))
{return cljs.core.not.call(null,x__445__auto____8764.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8766;
}
} else
{return and__3546__auto____8765;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8764);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8779 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8779.push(key);
}));
return keys__8779;
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
{var x__445__auto____8886 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8887 = x__445__auto____8886;

if(cljs.core.truth_(and__3546__auto____8887))
{var and__3546__auto____8888 = x__445__auto____8886.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8888))
{return cljs.core.not.call(null,x__445__auto____8886.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8888;
}
} else
{return and__3546__auto____8887;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8886);
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
var and__3546__auto____8895 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8895))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8899 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8899))
{return or__3548__auto____8899;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8895;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8906 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8906))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8906;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8907 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8907))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8907;
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
var and__3546__auto____9044 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9044))
{return (n == n.toFixed());
} else
{return and__3546__auto____9044;
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
if(cljs.core.truth_((function (){var and__3546__auto____9047 = coll;

if(cljs.core.truth_(and__3546__auto____9047))
{var and__3546__auto____9049 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9049))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9049;
}
} else
{return and__3546__auto____9047;
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
var distinct_QMARK___9058 = (function (x){
return true;
});
var distinct_QMARK___9059 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9060 = (function() { 
var G__9062__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9050 = cljs.core.set([y,x]);
var xs__9051 = more;

while(true){
var x__9053 = cljs.core.first.call(null,xs__9051);
var etc__9054 = cljs.core.next.call(null,xs__9051);

if(cljs.core.truth_(xs__9051))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9050,x__9053)))
{return false;
} else
{{
var G__9063 = cljs.core.conj.call(null,s__9050,x__9053);
var G__9064 = etc__9054;
s__9050 = G__9063;
xs__9051 = G__9064;
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
var G__9062 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9062__delegate.call(this, x, y, more);
};
G__9062.cljs$lang$maxFixedArity = 2;
G__9062.cljs$lang$applyTo = (function (arglist__9065){
var x = cljs.core.first(arglist__9065);
var y = cljs.core.first(cljs.core.next(arglist__9065));
var more = cljs.core.rest(cljs.core.next(arglist__9065));
return G__9062__delegate.call(this, x, y, more);
});
return G__9062;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9058.call(this,x);
case  2 :
return distinct_QMARK___9059.call(this,x,y);
default:
return distinct_QMARK___9060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9060.cljs$lang$applyTo;
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
var r__9069 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9069)))
{return r__9069;
} else
{if(cljs.core.truth_(r__9069))
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
var sort__9087 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9088 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9083 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9083,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9083);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9087.call(this,comp);
case  2 :
return sort__9088.call(this,comp,coll);
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
var sort_by__9101 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9102 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9101.call(this,keyfn,comp);
case  3 :
return sort_by__9102.call(this,keyfn,comp,coll);
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
var reduce__9142 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9143 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9142.call(this,f,val);
case  3 :
return reduce__9143.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9159 = (function (f,coll){
var temp__3695__auto____9147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9147))
{var s__9148 = temp__3695__auto____9147;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9148),cljs.core.next.call(null,s__9148));
} else
{return f.call(null);
}
});
var seq_reduce__9160 = (function (f,val,coll){
var val__9154 = val;
var coll__9155 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9155))
{{
var G__9164 = f.call(null,val__9154,cljs.core.first.call(null,coll__9155));
var G__9165 = cljs.core.next.call(null,coll__9155);
val__9154 = G__9164;
coll__9155 = G__9165;
continue;
}
} else
{return val__9154;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9159.call(this,f,val);
case  3 :
return seq_reduce__9160.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9167 = null;
var G__9167__9169 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9167__9170 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9167 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9167__9169.call(this,coll,f);
case  3 :
return G__9167__9170.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9167;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9201 = (function (){
return 0;
});
var _PLUS___9202 = (function (x){
return x;
});
var _PLUS___9204 = (function (x,y){
return (x + y);
});
var _PLUS___9205 = (function() { 
var G__9207__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9207 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9207__delegate.call(this, x, y, more);
};
G__9207.cljs$lang$maxFixedArity = 2;
G__9207.cljs$lang$applyTo = (function (arglist__9208){
var x = cljs.core.first(arglist__9208);
var y = cljs.core.first(cljs.core.next(arglist__9208));
var more = cljs.core.rest(cljs.core.next(arglist__9208));
return G__9207__delegate.call(this, x, y, more);
});
return G__9207;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9201.call(this);
case  1 :
return _PLUS___9202.call(this,x);
case  2 :
return _PLUS___9204.call(this,x,y);
default:
return _PLUS___9205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9205.cljs$lang$applyTo;
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
var ___9216 = (function (x){
return (- x);
});
var ___9217 = (function (x,y){
return (x - y);
});
var ___9218 = (function() { 
var G__9221__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9221__delegate.call(this, x, y, more);
};
G__9221.cljs$lang$maxFixedArity = 2;
G__9221.cljs$lang$applyTo = (function (arglist__9223){
var x = cljs.core.first(arglist__9223);
var y = cljs.core.first(cljs.core.next(arglist__9223));
var more = cljs.core.rest(cljs.core.next(arglist__9223));
return G__9221__delegate.call(this, x, y, more);
});
return G__9221;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9216.call(this,x);
case  2 :
return ___9217.call(this,x,y);
default:
return ___9218.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9218.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9233 = (function (){
return 1;
});
var _STAR___9234 = (function (x){
return x;
});
var _STAR___9235 = (function (x,y){
return (x * y);
});
var _STAR___9236 = (function() { 
var G__9243__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9243 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9243__delegate.call(this, x, y, more);
};
G__9243.cljs$lang$maxFixedArity = 2;
G__9243.cljs$lang$applyTo = (function (arglist__9245){
var x = cljs.core.first(arglist__9245);
var y = cljs.core.first(cljs.core.next(arglist__9245));
var more = cljs.core.rest(cljs.core.next(arglist__9245));
return G__9243__delegate.call(this, x, y, more);
});
return G__9243;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9233.call(this);
case  1 :
return _STAR___9234.call(this,x);
case  2 :
return _STAR___9235.call(this,x,y);
default:
return _STAR___9236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9236.cljs$lang$applyTo;
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
var G__9264__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9264__delegate.call(this, x, y, more);
};
G__9264.cljs$lang$maxFixedArity = 2;
G__9264.cljs$lang$applyTo = (function (arglist__9266){
var x = cljs.core.first(arglist__9266);
var y = cljs.core.first(cljs.core.next(arglist__9266));
var more = cljs.core.rest(cljs.core.next(arglist__9266));
return G__9264__delegate.call(this, x, y, more);
});
return G__9264;
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
var _LT___9282 = (function (x){
return true;
});
var _LT___9283 = (function (x,y){
return (x < y);
});
var _LT___9284 = (function() { 
var G__9287__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9289 = y;
var G__9290 = cljs.core.first.call(null,more);
var G__9291 = cljs.core.next.call(null,more);
x = G__9289;
y = G__9290;
more = G__9291;
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
var G__9287 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9287__delegate.call(this, x, y, more);
};
G__9287.cljs$lang$maxFixedArity = 2;
G__9287.cljs$lang$applyTo = (function (arglist__9292){
var x = cljs.core.first(arglist__9292);
var y = cljs.core.first(cljs.core.next(arglist__9292));
var more = cljs.core.rest(cljs.core.next(arglist__9292));
return G__9287__delegate.call(this, x, y, more);
});
return G__9287;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9282.call(this,x);
case  2 :
return _LT___9283.call(this,x,y);
default:
return _LT___9284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9284.cljs$lang$applyTo;
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
var _LT__EQ___9310 = (function (x){
return true;
});
var _LT__EQ___9311 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9312 = (function() { 
var G__9315__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9316 = y;
var G__9317 = cljs.core.first.call(null,more);
var G__9318 = cljs.core.next.call(null,more);
x = G__9316;
y = G__9317;
more = G__9318;
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
var G__9315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9315__delegate.call(this, x, y, more);
};
G__9315.cljs$lang$maxFixedArity = 2;
G__9315.cljs$lang$applyTo = (function (arglist__9319){
var x = cljs.core.first(arglist__9319);
var y = cljs.core.first(cljs.core.next(arglist__9319));
var more = cljs.core.rest(cljs.core.next(arglist__9319));
return G__9315__delegate.call(this, x, y, more);
});
return G__9315;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9310.call(this,x);
case  2 :
return _LT__EQ___9311.call(this,x,y);
default:
return _LT__EQ___9312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9312.cljs$lang$applyTo;
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
var _GT___9329 = (function (x){
return true;
});
var _GT___9330 = (function (x,y){
return (x > y);
});
var _GT___9331 = (function() { 
var G__9333__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9334 = y;
var G__9335 = cljs.core.first.call(null,more);
var G__9336 = cljs.core.next.call(null,more);
x = G__9334;
y = G__9335;
more = G__9336;
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
var G__9333 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9333__delegate.call(this, x, y, more);
};
G__9333.cljs$lang$maxFixedArity = 2;
G__9333.cljs$lang$applyTo = (function (arglist__9337){
var x = cljs.core.first(arglist__9337);
var y = cljs.core.first(cljs.core.next(arglist__9337));
var more = cljs.core.rest(cljs.core.next(arglist__9337));
return G__9333__delegate.call(this, x, y, more);
});
return G__9333;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9329.call(this,x);
case  2 :
return _GT___9330.call(this,x,y);
default:
return _GT___9331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9331.cljs$lang$applyTo;
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
var _GT__EQ___9353 = (function (x){
return true;
});
var _GT__EQ___9354 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9355 = (function() { 
var G__9357__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9358 = y;
var G__9359 = cljs.core.first.call(null,more);
var G__9360 = cljs.core.next.call(null,more);
x = G__9358;
y = G__9359;
more = G__9360;
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
var G__9357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9357__delegate.call(this, x, y, more);
};
G__9357.cljs$lang$maxFixedArity = 2;
G__9357.cljs$lang$applyTo = (function (arglist__9361){
var x = cljs.core.first(arglist__9361);
var y = cljs.core.first(cljs.core.next(arglist__9361));
var more = cljs.core.rest(cljs.core.next(arglist__9361));
return G__9357__delegate.call(this, x, y, more);
});
return G__9357;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9353.call(this,x);
case  2 :
return _GT__EQ___9354.call(this,x,y);
default:
return _GT__EQ___9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9355.cljs$lang$applyTo;
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
var max__9370 = (function (x){
return x;
});
var max__9371 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9372 = (function() { 
var G__9374__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9374 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9374__delegate.call(this, x, y, more);
};
G__9374.cljs$lang$maxFixedArity = 2;
G__9374.cljs$lang$applyTo = (function (arglist__9375){
var x = cljs.core.first(arglist__9375);
var y = cljs.core.first(cljs.core.next(arglist__9375));
var more = cljs.core.rest(cljs.core.next(arglist__9375));
return G__9374__delegate.call(this, x, y, more);
});
return G__9374;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9370.call(this,x);
case  2 :
return max__9371.call(this,x,y);
default:
return max__9372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9372.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9380 = (function (x){
return x;
});
var min__9381 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9382 = (function() { 
var G__9385__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9385__delegate.call(this, x, y, more);
};
G__9385.cljs$lang$maxFixedArity = 2;
G__9385.cljs$lang$applyTo = (function (arglist__9387){
var x = cljs.core.first(arglist__9387);
var y = cljs.core.first(cljs.core.next(arglist__9387));
var more = cljs.core.rest(cljs.core.next(arglist__9387));
return G__9385__delegate.call(this, x, y, more);
});
return G__9385;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9380.call(this,x);
case  2 :
return min__9381.call(this,x,y);
default:
return min__9382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9382.cljs$lang$applyTo;
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
var rem__9391 = (n % d);

return cljs.core.fix.call(null,((n - rem__9391) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9395 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9395));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9396 = (function (){
return Math.random.call(null);
});
var rand__9397 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9396.call(this);
case  1 :
return rand__9397.call(this,n);
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
var _EQ__EQ___9437 = (function (x){
return true;
});
var _EQ__EQ___9438 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9439 = (function() { 
var G__9443__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9444 = y;
var G__9445 = cljs.core.first.call(null,more);
var G__9446 = cljs.core.next.call(null,more);
x = G__9444;
y = G__9445;
more = G__9446;
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
var G__9443 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9443__delegate.call(this, x, y, more);
};
G__9443.cljs$lang$maxFixedArity = 2;
G__9443.cljs$lang$applyTo = (function (arglist__9450){
var x = cljs.core.first(arglist__9450);
var y = cljs.core.first(cljs.core.next(arglist__9450));
var more = cljs.core.rest(cljs.core.next(arglist__9450));
return G__9443__delegate.call(this, x, y, more);
});
return G__9443;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9437.call(this,x);
case  2 :
return _EQ__EQ___9438.call(this,x,y);
default:
return _EQ__EQ___9439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9439.cljs$lang$applyTo;
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
var n__9459 = n;
var xs__9460 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9461 = xs__9460;

if(cljs.core.truth_(and__3546__auto____9461))
{return (n__9459 > 0);
} else
{return and__3546__auto____9461;
}
})()))
{{
var G__9466 = (n__9459 - 1);
var G__9467 = cljs.core.next.call(null,xs__9460);
n__9459 = G__9466;
xs__9460 = G__9467;
continue;
}
} else
{return xs__9460;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9577 = null;
var G__9577__9578 = (function (coll,n){
var temp__3695__auto____9471 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9471))
{var xs__9472 = temp__3695__auto____9471;

return cljs.core.first.call(null,xs__9472);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9577__9579 = (function (coll,n,not_found){
var temp__3695__auto____9473 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9473))
{var xs__9474 = temp__3695__auto____9473;

return cljs.core.first.call(null,xs__9474);
} else
{return not_found;
}
});
G__9577 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9577__9578.call(this,coll,n);
case  3 :
return G__9577__9579.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9577;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9587 = (function (){
return "";
});
var str_STAR___9588 = (function (x){
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
var str_STAR___9589 = (function() { 
var G__9593__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9594 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9595 = cljs.core.next.call(null,more);
sb = G__9594;
more = G__9595;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9593 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9593__delegate.call(this, x, ys);
};
G__9593.cljs$lang$maxFixedArity = 1;
G__9593.cljs$lang$applyTo = (function (arglist__9602){
var x = cljs.core.first(arglist__9602);
var ys = cljs.core.rest(arglist__9602);
return G__9593__delegate.call(this, x, ys);
});
return G__9593;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9587.call(this);
case  1 :
return str_STAR___9588.call(this,x);
default:
return str_STAR___9589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9589.cljs$lang$applyTo;
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
var str__9621 = (function (){
return "";
});
var str__9622 = (function (x){
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
var str__9623 = (function() { 
var G__9630__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9630 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9630__delegate.call(this, x, ys);
};
G__9630.cljs$lang$maxFixedArity = 1;
G__9630.cljs$lang$applyTo = (function (arglist__9631){
var x = cljs.core.first(arglist__9631);
var ys = cljs.core.rest(arglist__9631);
return G__9630__delegate.call(this, x, ys);
});
return G__9630;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9621.call(this);
case  1 :
return str__9622.call(this,x);
default:
return str__9623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9623.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9635 = (function (s,start){
return s.substring(start);
});
var subs__9636 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9635.call(this,s,start);
case  3 :
return subs__9636.call(this,s,start,end);
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
var symbol__9640 = (function (name){
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
var symbol__9641 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9640.call(this,ns);
case  2 :
return symbol__9641.call(this,ns,name);
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
var keyword__9653 = (function (name){
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
var keyword__9654 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9653.call(this,ns);
case  2 :
return keyword__9654.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9661 = cljs.core.seq.call(null,x);
var ys__9662 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9661)))
{return cljs.core.nil_QMARK_.call(null,ys__9662);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9662)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9661),cljs.core.first.call(null,ys__9662))))
{{
var G__9703 = cljs.core.next.call(null,xs__9661);
var G__9704 = cljs.core.next.call(null,ys__9662);
xs__9661 = G__9703;
ys__9662 = G__9704;
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
return cljs.core.reduce.call(null,(function (p1__9705_SHARP_,p2__9706_SHARP_){
return cljs.core.hash_combine.call(null,p1__9705_SHARP_,cljs.core.hash.call(null,p2__9706_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9713__9714 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9713__9714))
{var G__9717__9719 = cljs.core.first.call(null,G__9713__9714);
var vec__9718__9720 = G__9717__9719;
var key_name__9721 = cljs.core.nth.call(null,vec__9718__9720,0,null);
var f__9722 = cljs.core.nth.call(null,vec__9718__9720,1,null);
var G__9713__9723 = G__9713__9714;

var G__9717__9724 = G__9717__9719;
var G__9713__9725 = G__9713__9723;

while(true){
var vec__9726__9727 = G__9717__9724;
var key_name__9728 = cljs.core.nth.call(null,vec__9726__9727,0,null);
var f__9730 = cljs.core.nth.call(null,vec__9726__9727,1,null);
var G__9713__9731 = G__9713__9725;

var str_name__9732 = cljs.core.name.call(null,key_name__9728);

obj[str_name__9732] = f__9730;
var temp__3698__auto____9735 = cljs.core.next.call(null,G__9713__9731);

if(cljs.core.truth_(temp__3698__auto____9735))
{var G__9713__9737 = temp__3698__auto____9735;

{
var G__9808 = cljs.core.first.call(null,G__9713__9737);
var G__9809 = G__9713__9737;
G__9717__9724 = G__9808;
G__9713__9725 = G__9809;
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
var this__9828 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9831 = this;
return (new cljs.core.List(this__9831.meta,o,coll,(this__9831.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9832 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9833 = this;
return this__9833.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9836 = this;
return this__9836.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9837 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9838 = this;
return this__9838.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9839 = this;
return this__9839.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9842 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9843 = this;
return (new cljs.core.List(meta,this__9843.first,this__9843.rest,this__9843.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9844 = this;
return this__9844.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9845 = this;
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
var this__9857 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9859 = this;
return (new cljs.core.List(this__9859.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9860 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9861 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9862 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9863 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9864 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9867 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9868 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9870 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9872 = this;
return this__9872.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9873 = this;
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
list.cljs$lang$applyTo = (function (arglist__9932){
var items = cljs.core.seq( arglist__9932 );;
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
var this__9941 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9942 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9943 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9944 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9944.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9945 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9946 = this;
return this__9946.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9947 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9947.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9947.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9948 = this;
return this__9948.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9949 = this;
return (new cljs.core.Cons(meta,this__9949.first,this__9949.rest));
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
var G__9962 = null;
var G__9962__9963 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9962__9964 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9962 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9962__9963.call(this,string,f);
case  3 :
return G__9962__9964.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9962;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9971 = null;
var G__9971__9972 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9971__9973 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9971 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9971__9972.call(this,string,k);
case  3 :
return G__9971__9973.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9971;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9975 = null;
var G__9975__9976 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9975__10025 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9975 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9975__9976.call(this,string,n);
case  3 :
return G__9975__10025.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9975;
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
var G__10037 = null;
var G__10037__10038 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10037__10040 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10037 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10037__10038.call(this,this$,coll);
case  3 :
return G__10037__10040.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10037;
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
var x__10107 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10107;
} else
{lazy_seq.x = x__10107.call(null);
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
var this__10122 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10124 = this;
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
var this__10131 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10131.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10132 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10133 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10135 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10136 = this;
return this__10136.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10137 = this;
return (new cljs.core.LazySeq(meta,this__10137.realized,this__10137.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10148 = cljs.core.array.call(null);

var s__10149 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10149)))
{ary__10148.push(cljs.core.first.call(null,s__10149));
{
var G__10155 = cljs.core.next.call(null,s__10149);
s__10149 = G__10155;
continue;
}
} else
{return ary__10148;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10206 = s;
var i__10207 = n;
var sum__10208 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10209 = (i__10207 > 0);

if(cljs.core.truth_(and__3546__auto____10209))
{return cljs.core.seq.call(null,s__10206);
} else
{return and__3546__auto____10209;
}
})()))
{{
var G__10210 = cljs.core.next.call(null,s__10206);
var G__10211 = (i__10207 - 1);
var G__10212 = (sum__10208 + 1);
s__10206 = G__10210;
i__10207 = G__10211;
sum__10208 = G__10212;
continue;
}
} else
{return sum__10208;
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
var concat__10327 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10328 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10329 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10317 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10317))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10317),concat.call(null,cljs.core.rest.call(null,s__10317),y));
} else
{return y;
}
})));
});
var concat__10330 = (function() { 
var G__10339__delegate = function (x,y,zs){
var cat__10325 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10324 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10324))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10324),cat.call(null,cljs.core.rest.call(null,xys__10324),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10325.call(null,concat.call(null,x,y),zs);
};
var G__10339 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10339__delegate.call(this, x, y, zs);
};
G__10339.cljs$lang$maxFixedArity = 2;
G__10339.cljs$lang$applyTo = (function (arglist__10346){
var x = cljs.core.first(arglist__10346);
var y = cljs.core.first(cljs.core.next(arglist__10346));
var zs = cljs.core.rest(cljs.core.next(arglist__10346));
return G__10339__delegate.call(this, x, y, zs);
});
return G__10339;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10327.call(this);
case  1 :
return concat__10328.call(this,x);
case  2 :
return concat__10329.call(this,x,y);
default:
return concat__10330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10330.cljs$lang$applyTo;
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
var list_STAR___10354 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10355 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10356 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10357 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10358 = (function() { 
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
G__10362.cljs$lang$applyTo = (function (arglist__10371){
var a = cljs.core.first(arglist__10371);
var b = cljs.core.first(cljs.core.next(arglist__10371));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10371)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10371))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10371))));
return G__10362__delegate.call(this, a, b, c, d, more);
});
return G__10362;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10354.call(this,a);
case  2 :
return list_STAR___10355.call(this,a,b);
case  3 :
return list_STAR___10356.call(this,a,b,c);
case  4 :
return list_STAR___10357.call(this,a,b,c,d);
default:
return list_STAR___10358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10358.cljs$lang$applyTo;
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
var apply__10537 = (function (f,args){
var fixed_arity__10373 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10373 + 1)) <= fixed_arity__10373)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10538 = (function (f,x,args){
var arglist__10374 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10518 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10374,fixed_arity__10518) <= fixed_arity__10518)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10374));
} else
{return f.cljs$lang$applyTo(arglist__10374);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10374));
}
});
var apply__10539 = (function (f,x,y,args){
var arglist__10519 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10521 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10519,fixed_arity__10521) <= fixed_arity__10521)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10519));
} else
{return f.cljs$lang$applyTo(arglist__10519);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10519));
}
});
var apply__10540 = (function (f,x,y,z,args){
var arglist__10529 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10530 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10529,fixed_arity__10530) <= fixed_arity__10530)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10529));
} else
{return f.cljs$lang$applyTo(arglist__10529);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10529));
}
});
var apply__10541 = (function() { 
var G__10549__delegate = function (f,a,b,c,d,args){
var arglist__10534 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10535 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10534,fixed_arity__10535) <= fixed_arity__10535)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10534));
} else
{return f.cljs$lang$applyTo(arglist__10534);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10534));
}
};
var G__10549 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10549__delegate.call(this, f, a, b, c, d, args);
};
G__10549.cljs$lang$maxFixedArity = 5;
G__10549.cljs$lang$applyTo = (function (arglist__10552){
var f = cljs.core.first(arglist__10552);
var a = cljs.core.first(cljs.core.next(arglist__10552));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10552)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10552))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10552)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10552)))));
return G__10549__delegate.call(this, f, a, b, c, d, args);
});
return G__10549;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10537.call(this,f,a);
case  3 :
return apply__10538.call(this,f,a,b);
case  4 :
return apply__10539.call(this,f,a,b,c);
case  5 :
return apply__10540.call(this,f,a,b,c,d);
default:
return apply__10541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10541.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10553){
var obj = cljs.core.first(arglist__10553);
var f = cljs.core.first(cljs.core.next(arglist__10553));
var args = cljs.core.rest(cljs.core.next(arglist__10553));
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
var not_EQ___10561 = (function (x){
return false;
});
var not_EQ___10562 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10563 = (function() { 
var G__10565__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10565 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10565__delegate.call(this, x, y, more);
};
G__10565.cljs$lang$maxFixedArity = 2;
G__10565.cljs$lang$applyTo = (function (arglist__10567){
var x = cljs.core.first(arglist__10567);
var y = cljs.core.first(cljs.core.next(arglist__10567));
var more = cljs.core.rest(cljs.core.next(arglist__10567));
return G__10565__delegate.call(this, x, y, more);
});
return G__10565;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10561.call(this,x);
case  2 :
return not_EQ___10562.call(this,x,y);
default:
return not_EQ___10563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10563.cljs$lang$applyTo;
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
var G__10572 = pred;
var G__10573 = cljs.core.next.call(null,coll);
pred = G__10572;
coll = G__10573;
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
{var or__3548__auto____10591 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10591))
{return or__3548__auto____10591;
} else
{{
var G__10605 = pred;
var G__10606 = cljs.core.next.call(null,coll);
pred = G__10605;
coll = G__10606;
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
var G__10670 = null;
var G__10670__10673 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10670__10674 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10670__10675 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10670__10676 = (function() { 
var G__10680__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10680 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10680__delegate.call(this, x, y, zs);
};
G__10680.cljs$lang$maxFixedArity = 2;
G__10680.cljs$lang$applyTo = (function (arglist__10682){
var x = cljs.core.first(arglist__10682);
var y = cljs.core.first(cljs.core.next(arglist__10682));
var zs = cljs.core.rest(cljs.core.next(arglist__10682));
return G__10680__delegate.call(this, x, y, zs);
});
return G__10680;
})()
;
G__10670 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10670__10673.call(this);
case  1 :
return G__10670__10674.call(this,x);
case  2 :
return G__10670__10675.call(this,x,y);
default:
return G__10670__10676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10670.cljs$lang$maxFixedArity = 2;
G__10670.cljs$lang$applyTo = G__10670__10676.cljs$lang$applyTo;
return G__10670;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10686__delegate = function (args){
return x;
};
var G__10686 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10686__delegate.call(this, args);
};
G__10686.cljs$lang$maxFixedArity = 0;
G__10686.cljs$lang$applyTo = (function (arglist__10688){
var args = cljs.core.seq( arglist__10688 );;
return G__10686__delegate.call(this, args);
});
return G__10686;
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
var comp__10710 = (function (){
return cljs.core.identity;
});
var comp__10711 = (function (f){
return f;
});
var comp__10712 = (function (f,g){
return (function() {
var G__10717 = null;
var G__10717__10719 = (function (){
return f.call(null,g.call(null));
});
var G__10717__10720 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10717__10721 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10717__10723 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10717__10724 = (function() { 
var G__10730__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10730 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10730__delegate.call(this, x, y, z, args);
};
G__10730.cljs$lang$maxFixedArity = 3;
G__10730.cljs$lang$applyTo = (function (arglist__10731){
var x = cljs.core.first(arglist__10731);
var y = cljs.core.first(cljs.core.next(arglist__10731));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10731)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10731)));
return G__10730__delegate.call(this, x, y, z, args);
});
return G__10730;
})()
;
G__10717 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10717__10719.call(this);
case  1 :
return G__10717__10720.call(this,x);
case  2 :
return G__10717__10721.call(this,x,y);
case  3 :
return G__10717__10723.call(this,x,y,z);
default:
return G__10717__10724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10717.cljs$lang$maxFixedArity = 3;
G__10717.cljs$lang$applyTo = G__10717__10724.cljs$lang$applyTo;
return G__10717;
})()
});
var comp__10713 = (function (f,g,h){
return (function() {
var G__10732 = null;
var G__10732__10733 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10732__10734 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10732__10735 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10732__10736 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10732__10737 = (function() { 
var G__10748__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10748 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10748__delegate.call(this, x, y, z, args);
};
G__10748.cljs$lang$maxFixedArity = 3;
G__10748.cljs$lang$applyTo = (function (arglist__10753){
var x = cljs.core.first(arglist__10753);
var y = cljs.core.first(cljs.core.next(arglist__10753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10753)));
return G__10748__delegate.call(this, x, y, z, args);
});
return G__10748;
})()
;
G__10732 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10732__10733.call(this);
case  1 :
return G__10732__10734.call(this,x);
case  2 :
return G__10732__10735.call(this,x,y);
case  3 :
return G__10732__10736.call(this,x,y,z);
default:
return G__10732__10737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10732.cljs$lang$maxFixedArity = 3;
G__10732.cljs$lang$applyTo = G__10732__10737.cljs$lang$applyTo;
return G__10732;
})()
});
var comp__10714 = (function() { 
var G__10759__delegate = function (f1,f2,f3,fs){
var fs__10702 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10761__delegate = function (args){
var ret__10703 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10702),args);
var fs__10704 = cljs.core.next.call(null,fs__10702);

while(true){
if(cljs.core.truth_(fs__10704))
{{
var G__10764 = cljs.core.first.call(null,fs__10704).call(null,ret__10703);
var G__10765 = cljs.core.next.call(null,fs__10704);
ret__10703 = G__10764;
fs__10704 = G__10765;
continue;
}
} else
{return ret__10703;
}
break;
}
};
var G__10761 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10761__delegate.call(this, args);
};
G__10761.cljs$lang$maxFixedArity = 0;
G__10761.cljs$lang$applyTo = (function (arglist__10771){
var args = cljs.core.seq( arglist__10771 );;
return G__10761__delegate.call(this, args);
});
return G__10761;
})()
;
};
var G__10759 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10759__delegate.call(this, f1, f2, f3, fs);
};
G__10759.cljs$lang$maxFixedArity = 3;
G__10759.cljs$lang$applyTo = (function (arglist__10774){
var f1 = cljs.core.first(arglist__10774);
var f2 = cljs.core.first(cljs.core.next(arglist__10774));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10774)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10774)));
return G__10759__delegate.call(this, f1, f2, f3, fs);
});
return G__10759;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10710.call(this);
case  1 :
return comp__10711.call(this,f1);
case  2 :
return comp__10712.call(this,f1,f2);
case  3 :
return comp__10713.call(this,f1,f2,f3);
default:
return comp__10714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10714.cljs$lang$applyTo;
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
var partial__10793 = (function (f,arg1){
return (function() { 
var G__10800__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10800 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10800__delegate.call(this, args);
};
G__10800.cljs$lang$maxFixedArity = 0;
G__10800.cljs$lang$applyTo = (function (arglist__10801){
var args = cljs.core.seq( arglist__10801 );;
return G__10800__delegate.call(this, args);
});
return G__10800;
})()
;
});
var partial__10795 = (function (f,arg1,arg2){
return (function() { 
var G__10803__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10803 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10803__delegate.call(this, args);
};
G__10803.cljs$lang$maxFixedArity = 0;
G__10803.cljs$lang$applyTo = (function (arglist__10805){
var args = cljs.core.seq( arglist__10805 );;
return G__10803__delegate.call(this, args);
});
return G__10803;
})()
;
});
var partial__10796 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10806__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
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
});
var partial__10797 = (function() { 
var G__10809__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10811__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10811 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10811__delegate.call(this, args);
};
G__10811.cljs$lang$maxFixedArity = 0;
G__10811.cljs$lang$applyTo = (function (arglist__10813){
var args = cljs.core.seq( arglist__10813 );;
return G__10811__delegate.call(this, args);
});
return G__10811;
})()
;
};
var G__10809 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10809__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10809.cljs$lang$maxFixedArity = 4;
G__10809.cljs$lang$applyTo = (function (arglist__10814){
var f = cljs.core.first(arglist__10814);
var arg1 = cljs.core.first(cljs.core.next(arglist__10814));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10814)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10814))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10814))));
return G__10809__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10809;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10793.call(this,f,arg1);
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
var G__10834 = null;
var G__10834__10835 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10834__10836 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10834__10837 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10834__10838 = (function() { 
var G__10848__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10848 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10848__delegate.call(this, a, b, c, ds);
};
G__10848.cljs$lang$maxFixedArity = 3;
G__10848.cljs$lang$applyTo = (function (arglist__10852){
var a = cljs.core.first(arglist__10852);
var b = cljs.core.first(cljs.core.next(arglist__10852));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10852)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10852)));
return G__10848__delegate.call(this, a, b, c, ds);
});
return G__10848;
})()
;
G__10834 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10834__10835.call(this,a);
case  2 :
return G__10834__10836.call(this,a,b);
case  3 :
return G__10834__10837.call(this,a,b,c);
default:
return G__10834__10838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10834.cljs$lang$maxFixedArity = 3;
G__10834.cljs$lang$applyTo = G__10834__10838.cljs$lang$applyTo;
return G__10834;
})()
});
var fnil__10831 = (function (f,x,y){
return (function() {
var G__10854 = null;
var G__10854__10856 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10854__10857 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10854__10858 = (function() { 
var G__10864__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10864 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10864__delegate.call(this, a, b, c, ds);
};
G__10864.cljs$lang$maxFixedArity = 3;
G__10864.cljs$lang$applyTo = (function (arglist__10906){
var a = cljs.core.first(arglist__10906);
var b = cljs.core.first(cljs.core.next(arglist__10906));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10906)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10906)));
return G__10864__delegate.call(this, a, b, c, ds);
});
return G__10864;
})()
;
G__10854 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10854__10856.call(this,a,b);
case  3 :
return G__10854__10857.call(this,a,b,c);
default:
return G__10854__10858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10854.cljs$lang$maxFixedArity = 3;
G__10854.cljs$lang$applyTo = G__10854__10858.cljs$lang$applyTo;
return G__10854;
})()
});
var fnil__10832 = (function (f,x,y,z){
return (function() {
var G__10908 = null;
var G__10908__10909 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10908__10910 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10908__10911 = (function() { 
var G__11019__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11019 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11019__delegate.call(this, a, b, c, ds);
};
G__11019.cljs$lang$maxFixedArity = 3;
G__11019.cljs$lang$applyTo = (function (arglist__11022){
var a = cljs.core.first(arglist__11022);
var b = cljs.core.first(cljs.core.next(arglist__11022));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11022)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11022)));
return G__11019__delegate.call(this, a, b, c, ds);
});
return G__11019;
})()
;
G__10908 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10908__10909.call(this,a,b);
case  3 :
return G__10908__10910.call(this,a,b,c);
default:
return G__10908__10911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10908.cljs$lang$maxFixedArity = 3;
G__10908.cljs$lang$applyTo = G__10908__10911.cljs$lang$applyTo;
return G__10908;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10830.call(this,f,x);
case  3 :
return fnil__10831.call(this,f,x,y);
case  4 :
return fnil__10832.call(this,f,x,y,z);
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
var mapi__11075 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11071))
{var s__11072 = temp__3698__auto____11071;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11072)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11072)));
} else
{return null;
}
})));
});

return mapi__11075.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11084 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11084))
{var s__11086 = temp__3698__auto____11084;

var x__11088 = f.call(null,cljs.core.first.call(null,s__11086));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11088)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11086));
} else
{return cljs.core.cons.call(null,x__11088,keep.call(null,f,cljs.core.rest.call(null,s__11086)));
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
var keepi__11111 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11104))
{var s__11106 = temp__3698__auto____11104;

var x__11108 = f.call(null,idx,cljs.core.first.call(null,s__11106));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11108)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11106));
} else
{return cljs.core.cons.call(null,x__11108,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11106)));
}
} else
{return null;
}
})));
});

return keepi__11111.call(null,0,coll);
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
var every_pred__11365 = (function (p){
return (function() {
var ep1 = null;
var ep1__11371 = (function (){
return true;
});
var ep1__11373 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11376 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11150 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11150))
{return p.call(null,y);
} else
{return and__3546__auto____11150;
}
})());
});
var ep1__11378 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11152 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11152))
{var and__3546__auto____11153 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11153))
{return p.call(null,z);
} else
{return and__3546__auto____11153;
}
} else
{return and__3546__auto____11152;
}
})());
});
var ep1__11379 = (function() { 
var G__11381__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11154 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11154))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11154;
}
})());
};
var G__11381 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11381__delegate.call(this, x, y, z, args);
};
G__11381.cljs$lang$maxFixedArity = 3;
G__11381.cljs$lang$applyTo = (function (arglist__11382){
var x = cljs.core.first(arglist__11382);
var y = cljs.core.first(cljs.core.next(arglist__11382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11382)));
return G__11381__delegate.call(this, x, y, z, args);
});
return G__11381;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11371.call(this);
case  1 :
return ep1__11373.call(this,x);
case  2 :
return ep1__11376.call(this,x,y);
case  3 :
return ep1__11378.call(this,x,y,z);
default:
return ep1__11379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11379.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11366 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11383 = (function (){
return true;
});
var ep2__11384 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11156 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11156))
{return p2.call(null,x);
} else
{return and__3546__auto____11156;
}
})());
});
var ep2__11385 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11279 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11282 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11282))
{var and__3546__auto____11284 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11284))
{return p2.call(null,y);
} else
{return and__3546__auto____11284;
}
} else
{return and__3546__auto____11282;
}
} else
{return and__3546__auto____11279;
}
})());
});
var ep2__11386 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11287 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11287))
{var and__3546__auto____11289 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11289))
{var and__3546__auto____11291 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11291))
{var and__3546__auto____11294 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11294))
{var and__3546__auto____11295 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11295))
{return p2.call(null,z);
} else
{return and__3546__auto____11295;
}
} else
{return and__3546__auto____11294;
}
} else
{return and__3546__auto____11291;
}
} else
{return and__3546__auto____11289;
}
} else
{return and__3546__auto____11287;
}
})());
});
var ep2__11387 = (function() { 
var G__11389__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11298 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11298))
{return cljs.core.every_QMARK_.call(null,(function (p1__11095_SHARP_){
var and__3546__auto____11306 = p1.call(null,p1__11095_SHARP_);

if(cljs.core.truth_(and__3546__auto____11306))
{return p2.call(null,p1__11095_SHARP_);
} else
{return and__3546__auto____11306;
}
}),args);
} else
{return and__3546__auto____11298;
}
})());
};
var G__11389 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11389__delegate.call(this, x, y, z, args);
};
G__11389.cljs$lang$maxFixedArity = 3;
G__11389.cljs$lang$applyTo = (function (arglist__11395){
var x = cljs.core.first(arglist__11395);
var y = cljs.core.first(cljs.core.next(arglist__11395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11395)));
return G__11389__delegate.call(this, x, y, z, args);
});
return G__11389;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11383.call(this);
case  1 :
return ep2__11384.call(this,x);
case  2 :
return ep2__11385.call(this,x,y);
case  3 :
return ep2__11386.call(this,x,y,z);
default:
return ep2__11387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11387.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11367 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11396 = (function (){
return true;
});
var ep3__11397 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11309 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11309))
{var and__3546__auto____11310 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11310))
{return p3.call(null,x);
} else
{return and__3546__auto____11310;
}
} else
{return and__3546__auto____11309;
}
})());
});
var ep3__11398 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11313 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11313))
{var and__3546__auto____11314 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11314))
{var and__3546__auto____11315 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11315))
{var and__3546__auto____11317 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11317))
{var and__3546__auto____11320 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11320))
{return p3.call(null,y);
} else
{return and__3546__auto____11320;
}
} else
{return and__3546__auto____11317;
}
} else
{return and__3546__auto____11315;
}
} else
{return and__3546__auto____11314;
}
} else
{return and__3546__auto____11313;
}
})());
});
var ep3__11399 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11323 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11323))
{var and__3546__auto____11324 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11324))
{var and__3546__auto____11325 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11325))
{var and__3546__auto____11326 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11326))
{var and__3546__auto____11327 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11327))
{var and__3546__auto____11328 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11328))
{var and__3546__auto____11333 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11333))
{var and__3546__auto____11336 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11336))
{return p3.call(null,z);
} else
{return and__3546__auto____11336;
}
} else
{return and__3546__auto____11333;
}
} else
{return and__3546__auto____11328;
}
} else
{return and__3546__auto____11327;
}
} else
{return and__3546__auto____11326;
}
} else
{return and__3546__auto____11325;
}
} else
{return and__3546__auto____11324;
}
} else
{return and__3546__auto____11323;
}
})());
});
var ep3__11400 = (function() { 
var G__11404__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11343 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11343))
{return cljs.core.every_QMARK_.call(null,(function (p1__11097_SHARP_){
var and__3546__auto____11345 = p1.call(null,p1__11097_SHARP_);

if(cljs.core.truth_(and__3546__auto____11345))
{var and__3546__auto____11347 = p2.call(null,p1__11097_SHARP_);

if(cljs.core.truth_(and__3546__auto____11347))
{return p3.call(null,p1__11097_SHARP_);
} else
{return and__3546__auto____11347;
}
} else
{return and__3546__auto____11345;
}
}),args);
} else
{return and__3546__auto____11343;
}
})());
};
var G__11404 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11404__delegate.call(this, x, y, z, args);
};
G__11404.cljs$lang$maxFixedArity = 3;
G__11404.cljs$lang$applyTo = (function (arglist__11408){
var x = cljs.core.first(arglist__11408);
var y = cljs.core.first(cljs.core.next(arglist__11408));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11408)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11408)));
return G__11404__delegate.call(this, x, y, z, args);
});
return G__11404;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11396.call(this);
case  1 :
return ep3__11397.call(this,x);
case  2 :
return ep3__11398.call(this,x,y);
case  3 :
return ep3__11399.call(this,x,y,z);
default:
return ep3__11400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11400.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11368 = (function() { 
var G__11415__delegate = function (p1,p2,p3,ps){
var ps__11351 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11418 = (function (){
return true;
});
var epn__11419 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11098_SHARP_){
return p1__11098_SHARP_.call(null,x);
}),ps__11351);
});
var epn__11420 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11099_SHARP_){
var and__3546__auto____11359 = p1__11099_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11359))
{return p1__11099_SHARP_.call(null,y);
} else
{return and__3546__auto____11359;
}
}),ps__11351);
});
var epn__11421 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11100_SHARP_){
var and__3546__auto____11360 = p1__11100_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11360))
{var and__3546__auto____11361 = p1__11100_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11361))
{return p1__11100_SHARP_.call(null,z);
} else
{return and__3546__auto____11361;
}
} else
{return and__3546__auto____11360;
}
}),ps__11351);
});
var epn__11422 = (function() { 
var G__11430__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11362 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11362))
{return cljs.core.every_QMARK_.call(null,(function (p1__11101_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11101_SHARP_,args);
}),ps__11351);
} else
{return and__3546__auto____11362;
}
})());
};
var G__11430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11430__delegate.call(this, x, y, z, args);
};
G__11430.cljs$lang$maxFixedArity = 3;
G__11430.cljs$lang$applyTo = (function (arglist__11440){
var x = cljs.core.first(arglist__11440);
var y = cljs.core.first(cljs.core.next(arglist__11440));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11440)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11440)));
return G__11430__delegate.call(this, x, y, z, args);
});
return G__11430;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11418.call(this);
case  1 :
return epn__11419.call(this,x);
case  2 :
return epn__11420.call(this,x,y);
case  3 :
return epn__11421.call(this,x,y,z);
default:
return epn__11422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11422.cljs$lang$applyTo;
return epn;
})()
};
var G__11415 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11415__delegate.call(this, p1, p2, p3, ps);
};
G__11415.cljs$lang$maxFixedArity = 3;
G__11415.cljs$lang$applyTo = (function (arglist__11442){
var p1 = cljs.core.first(arglist__11442);
var p2 = cljs.core.first(cljs.core.next(arglist__11442));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11442)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11442)));
return G__11415__delegate.call(this, p1, p2, p3, ps);
});
return G__11415;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11365.call(this,p1);
case  2 :
return every_pred__11366.call(this,p1,p2);
case  3 :
return every_pred__11367.call(this,p1,p2,p3);
default:
return every_pred__11368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11368.cljs$lang$applyTo;
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
var some_fn__11554 = (function (p){
return (function() {
var sp1 = null;
var sp1__11560 = (function (){
return null;
});
var sp1__11561 = (function (x){
return p.call(null,x);
});
var sp1__11563 = (function (x,y){
var or__3548__auto____11464 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{return p.call(null,y);
}
});
var sp1__11564 = (function (x,y,z){
var or__3548__auto____11466 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11468 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11468))
{return or__3548__auto____11468;
} else
{return p.call(null,z);
}
}
});
var sp1__11565 = (function() { 
var G__11571__delegate = function (x,y,z,args){
var or__3548__auto____11471 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11471))
{return or__3548__auto____11471;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11571 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11571__delegate.call(this, x, y, z, args);
};
G__11571.cljs$lang$maxFixedArity = 3;
G__11571.cljs$lang$applyTo = (function (arglist__11575){
var x = cljs.core.first(arglist__11575);
var y = cljs.core.first(cljs.core.next(arglist__11575));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11575)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11575)));
return G__11571__delegate.call(this, x, y, z, args);
});
return G__11571;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11560.call(this);
case  1 :
return sp1__11561.call(this,x);
case  2 :
return sp1__11563.call(this,x,y);
case  3 :
return sp1__11564.call(this,x,y,z);
default:
return sp1__11565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11565.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11555 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11585 = (function (){
return null;
});
var sp2__11586 = (function (x){
var or__3548__auto____11474 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{return p2.call(null,x);
}
});
var sp2__11588 = (function (x,y){
var or__3548__auto____11476 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{var or__3548__auto____11479 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{var or__3548__auto____11480 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11480))
{return or__3548__auto____11480;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11590 = (function (x,y,z){
var or__3548__auto____11482 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{var or__3548__auto____11489 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11489))
{return or__3548__auto____11489;
} else
{var or__3548__auto____11491 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{var or__3548__auto____11493 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11493))
{return or__3548__auto____11493;
} else
{var or__3548__auto____11494 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11592 = (function() { 
var G__11605__delegate = function (x,y,z,args){
var or__3548__auto____11496 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{return cljs.core.some.call(null,(function (p1__11131_SHARP_){
var or__3548__auto____11497 = p1.call(null,p1__11131_SHARP_);

if(cljs.core.truth_(or__3548__auto____11497))
{return or__3548__auto____11497;
} else
{return p2.call(null,p1__11131_SHARP_);
}
}),args);
}
};
var G__11605 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11605__delegate.call(this, x, y, z, args);
};
G__11605.cljs$lang$maxFixedArity = 3;
G__11605.cljs$lang$applyTo = (function (arglist__11610){
var x = cljs.core.first(arglist__11610);
var y = cljs.core.first(cljs.core.next(arglist__11610));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11610)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11610)));
return G__11605__delegate.call(this, x, y, z, args);
});
return G__11605;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11585.call(this);
case  1 :
return sp2__11586.call(this,x);
case  2 :
return sp2__11588.call(this,x,y);
case  3 :
return sp2__11590.call(this,x,y,z);
default:
return sp2__11592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11592.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11557 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11764 = (function (){
return null;
});
var sp3__11765 = (function (x){
var or__3548__auto____11498 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11498))
{return or__3548__auto____11498;
} else
{var or__3548__auto____11499 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11499))
{return or__3548__auto____11499;
} else
{return p3.call(null,x);
}
}
});
var sp3__11766 = (function (x,y){
var or__3548__auto____11501 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11501))
{return or__3548__auto____11501;
} else
{var or__3548__auto____11502 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{var or__3548__auto____11503 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11503))
{return or__3548__auto____11503;
} else
{var or__3548__auto____11504 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11504))
{return or__3548__auto____11504;
} else
{var or__3548__auto____11507 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11507))
{return or__3548__auto____11507;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11767 = (function (x,y,z){
var or__3548__auto____11515 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11515))
{return or__3548__auto____11515;
} else
{var or__3548__auto____11517 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11517))
{return or__3548__auto____11517;
} else
{var or__3548__auto____11518 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11518))
{return or__3548__auto____11518;
} else
{var or__3548__auto____11519 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11519))
{return or__3548__auto____11519;
} else
{var or__3548__auto____11521 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11521))
{return or__3548__auto____11521;
} else
{var or__3548__auto____11526 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11526))
{return or__3548__auto____11526;
} else
{var or__3548__auto____11529 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11529))
{return or__3548__auto____11529;
} else
{var or__3548__auto____11531 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
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
var sp3__11768 = (function() { 
var G__11775__delegate = function (x,y,z,args){
var or__3548__auto____11533 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{return cljs.core.some.call(null,(function (p1__11134_SHARP_){
var or__3548__auto____11534 = p1.call(null,p1__11134_SHARP_);

if(cljs.core.truth_(or__3548__auto____11534))
{return or__3548__auto____11534;
} else
{var or__3548__auto____11536 = p2.call(null,p1__11134_SHARP_);

if(cljs.core.truth_(or__3548__auto____11536))
{return or__3548__auto____11536;
} else
{return p3.call(null,p1__11134_SHARP_);
}
}
}),args);
}
};
var G__11775 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11775__delegate.call(this, x, y, z, args);
};
G__11775.cljs$lang$maxFixedArity = 3;
G__11775.cljs$lang$applyTo = (function (arglist__11776){
var x = cljs.core.first(arglist__11776);
var y = cljs.core.first(cljs.core.next(arglist__11776));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11776)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11776)));
return G__11775__delegate.call(this, x, y, z, args);
});
return G__11775;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11764.call(this);
case  1 :
return sp3__11765.call(this,x);
case  2 :
return sp3__11766.call(this,x,y);
case  3 :
return sp3__11767.call(this,x,y,z);
default:
return sp3__11768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11768.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11558 = (function() { 
var G__11778__delegate = function (p1,p2,p3,ps){
var ps__11538 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11780 = (function (){
return null;
});
var spn__11781 = (function (x){
return cljs.core.some.call(null,(function (p1__11135_SHARP_){
return p1__11135_SHARP_.call(null,x);
}),ps__11538);
});
var spn__11782 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11136_SHARP_){
var or__3548__auto____11540 = p1__11136_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11540))
{return or__3548__auto____11540;
} else
{return p1__11136_SHARP_.call(null,y);
}
}),ps__11538);
});
var spn__11783 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11137_SHARP_){
var or__3548__auto____11544 = p1__11137_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{var or__3548__auto____11545 = p1__11137_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11545))
{return or__3548__auto____11545;
} else
{return p1__11137_SHARP_.call(null,z);
}
}
}),ps__11538);
});
var spn__11784 = (function() { 
var G__11791__delegate = function (x,y,z,args){
var or__3548__auto____11547 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11547))
{return or__3548__auto____11547;
} else
{return cljs.core.some.call(null,(function (p1__11141_SHARP_){
return cljs.core.some.call(null,p1__11141_SHARP_,args);
}),ps__11538);
}
};
var G__11791 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11791__delegate.call(this, x, y, z, args);
};
G__11791.cljs$lang$maxFixedArity = 3;
G__11791.cljs$lang$applyTo = (function (arglist__11792){
var x = cljs.core.first(arglist__11792);
var y = cljs.core.first(cljs.core.next(arglist__11792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11792)));
return G__11791__delegate.call(this, x, y, z, args);
});
return G__11791;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11780.call(this);
case  1 :
return spn__11781.call(this,x);
case  2 :
return spn__11782.call(this,x,y);
case  3 :
return spn__11783.call(this,x,y,z);
default:
return spn__11784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11784.cljs$lang$applyTo;
return spn;
})()
};
var G__11778 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11778__delegate.call(this, p1, p2, p3, ps);
};
G__11778.cljs$lang$maxFixedArity = 3;
G__11778.cljs$lang$applyTo = (function (arglist__11794){
var p1 = cljs.core.first(arglist__11794);
var p2 = cljs.core.first(cljs.core.next(arglist__11794));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11794)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11794)));
return G__11778__delegate.call(this, p1, p2, p3, ps);
});
return G__11778;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11554.call(this,p1);
case  2 :
return some_fn__11555.call(this,p1,p2);
case  3 :
return some_fn__11557.call(this,p1,p2,p3);
default:
return some_fn__11558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11558.cljs$lang$applyTo;
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
var map__11829 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11802))
{var s__11803 = temp__3698__auto____11802;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11803)),map.call(null,f,cljs.core.rest.call(null,s__11803)));
} else
{return null;
}
})));
});
var map__11830 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11806 = cljs.core.seq.call(null,c1);
var s2__11809 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11811 = s1__11806;

if(cljs.core.truth_(and__3546__auto____11811))
{return s2__11809;
} else
{return and__3546__auto____11811;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11806),cljs.core.first.call(null,s2__11809)),map.call(null,f,cljs.core.rest.call(null,s1__11806),cljs.core.rest.call(null,s2__11809)));
} else
{return null;
}
})));
});
var map__11831 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11815 = cljs.core.seq.call(null,c1);
var s2__11816 = cljs.core.seq.call(null,c2);
var s3__11817 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11818 = s1__11815;

if(cljs.core.truth_(and__3546__auto____11818))
{var and__3546__auto____11819 = s2__11816;

if(cljs.core.truth_(and__3546__auto____11819))
{return s3__11817;
} else
{return and__3546__auto____11819;
}
} else
{return and__3546__auto____11818;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11815),cljs.core.first.call(null,s2__11816),cljs.core.first.call(null,s3__11817)),map.call(null,f,cljs.core.rest.call(null,s1__11815),cljs.core.rest.call(null,s2__11816),cljs.core.rest.call(null,s3__11817)));
} else
{return null;
}
})));
});
var map__11832 = (function() { 
var G__11841__delegate = function (f,c1,c2,c3,colls){
var step__11825 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11824 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11824)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11824),step.call(null,map.call(null,cljs.core.rest,ss__11824)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11452_SHARP_){
return cljs.core.apply.call(null,f,p1__11452_SHARP_);
}),step__11825.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11841 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11841__delegate.call(this, f, c1, c2, c3, colls);
};
G__11841.cljs$lang$maxFixedArity = 4;
G__11841.cljs$lang$applyTo = (function (arglist__11847){
var f = cljs.core.first(arglist__11847);
var c1 = cljs.core.first(cljs.core.next(arglist__11847));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11847)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11847))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11847))));
return G__11841__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11841;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11829.call(this,f,c1);
case  3 :
return map__11830.call(this,f,c1,c2);
case  4 :
return map__11831.call(this,f,c1,c2,c3);
default:
return map__11832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11832.cljs$lang$applyTo;
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
{var temp__3698__auto____11850 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11850))
{var s__11851 = temp__3698__auto____11850;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11851),take.call(null,(n - 1),cljs.core.rest.call(null,s__11851)));
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
var step__11866 = (function (n,coll){
while(true){
var s__11861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11862 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11862))
{return s__11861;
} else
{return and__3546__auto____11862;
}
})()))
{{
var G__11871 = (n - 1);
var G__11872 = cljs.core.rest.call(null,s__11861);
n = G__11871;
coll = G__11872;
continue;
}
} else
{return s__11861;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11866.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11878 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11880 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11878.call(this,n);
case  2 :
return drop_last__11880.call(this,n,s);
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
var s__11900 = cljs.core.seq.call(null,coll);
var lead__11901 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11901))
{{
var G__11904 = cljs.core.next.call(null,s__11900);
var G__11905 = cljs.core.next.call(null,lead__11901);
s__11900 = G__11904;
lead__11901 = G__11905;
continue;
}
} else
{return s__11900;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11911 = (function (pred,coll){
while(true){
var s__11906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11907 = s__11906;

if(cljs.core.truth_(and__3546__auto____11907))
{return pred.call(null,cljs.core.first.call(null,s__11906));
} else
{return and__3546__auto____11907;
}
})()))
{{
var G__11915 = pred;
var G__11916 = cljs.core.rest.call(null,s__11906);
pred = G__11915;
coll = G__11916;
continue;
}
} else
{return s__11906;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11911.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11946))
{var s__11947 = temp__3698__auto____11946;

return cljs.core.concat.call(null,s__11947,cycle.call(null,s__11947));
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
var repeat__11953 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11954 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11953.call(this,n);
case  2 :
return repeat__11954.call(this,n,x);
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
var repeatedly__11958 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11959 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11958.call(this,n);
case  2 :
return repeatedly__11959.call(this,n,f);
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
var interleave__11969 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11962 = cljs.core.seq.call(null,c1);
var s2__11964 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11967 = s1__11962;

if(cljs.core.truth_(and__3546__auto____11967))
{return s2__11964;
} else
{return and__3546__auto____11967;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11962),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11964),interleave.call(null,cljs.core.rest.call(null,s1__11962),cljs.core.rest.call(null,s2__11964))));
} else
{return null;
}
})));
});
var interleave__11970 = (function() { 
var G__11977__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11968 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11968)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11968),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11968)));
} else
{return null;
}
})));
};
var G__11977 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11977__delegate.call(this, c1, c2, colls);
};
G__11977.cljs$lang$maxFixedArity = 2;
G__11977.cljs$lang$applyTo = (function (arglist__11980){
var c1 = cljs.core.first(arglist__11980);
var c2 = cljs.core.first(cljs.core.next(arglist__11980));
var colls = cljs.core.rest(cljs.core.next(arglist__11980));
return G__11977__delegate.call(this, c1, c2, colls);
});
return G__11977;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11969.call(this,c1,c2);
default:
return interleave__11970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11970.cljs$lang$applyTo;
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
var cat__12119 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12117))
{var coll__12118 = temp__3695__auto____12117;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12118),cat.call(null,cljs.core.rest.call(null,coll__12118),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12119.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12120 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12121 = (function() { 
var G__12123__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12123 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12123__delegate.call(this, f, coll, colls);
};
G__12123.cljs$lang$maxFixedArity = 2;
G__12123.cljs$lang$applyTo = (function (arglist__12126){
var f = cljs.core.first(arglist__12126);
var coll = cljs.core.first(cljs.core.next(arglist__12126));
var colls = cljs.core.rest(cljs.core.next(arglist__12126));
return G__12123__delegate.call(this, f, coll, colls);
});
return G__12123;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12120.call(this,f,coll);
default:
return mapcat__12121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12121.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12129 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12129))
{var s__12131 = temp__3698__auto____12129;

var f__12133 = cljs.core.first.call(null,s__12131);
var r__12134 = cljs.core.rest.call(null,s__12131);

if(cljs.core.truth_(pred.call(null,f__12133)))
{return cljs.core.cons.call(null,f__12133,filter.call(null,pred,r__12134));
} else
{return filter.call(null,pred,r__12134);
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
var walk__12142 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12142.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12139_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12139_SHARP_));
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
var partition__12303 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12304 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12159))
{var s__12160 = temp__3698__auto____12159;

var p__12161 = cljs.core.take.call(null,n,s__12160);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12161))))
{return cljs.core.cons.call(null,p__12161,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12160)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12305 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12162 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12162))
{var s__12237 = temp__3698__auto____12162;

var p__12238 = cljs.core.take.call(null,n,s__12237);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12238))))
{return cljs.core.cons.call(null,p__12238,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12237)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12238,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12303.call(this,n,step);
case  3 :
return partition__12304.call(this,n,step,pad);
case  4 :
return partition__12305.call(this,n,step,pad,coll);
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
var get_in__12320 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12321 = (function (m,ks,not_found){
var sentinel__12315 = cljs.core.lookup_sentinel;
var m__12316 = m;
var ks__12317 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12317))
{var m__12318 = cljs.core.get.call(null,m__12316,cljs.core.first.call(null,ks__12317),sentinel__12315);

if(cljs.core.truth_((sentinel__12315 === m__12318)))
{return not_found;
} else
{{
var G__12323 = sentinel__12315;
var G__12324 = m__12318;
var G__12325 = cljs.core.next.call(null,ks__12317);
sentinel__12315 = G__12323;
m__12316 = G__12324;
ks__12317 = G__12325;
continue;
}
}
} else
{return m__12316;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12320.call(this,m,ks);
case  3 :
return get_in__12321.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12327,v){
var vec__12332__12333 = p__12327;
var k__12335 = cljs.core.nth.call(null,vec__12332__12333,0,null);
var ks__12336 = cljs.core.nthnext.call(null,vec__12332__12333,1);

if(cljs.core.truth_(ks__12336))
{return cljs.core.assoc.call(null,m,k__12335,assoc_in.call(null,cljs.core.get.call(null,m,k__12335),ks__12336,v));
} else
{return cljs.core.assoc.call(null,m,k__12335,v);
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
var update_in__delegate = function (m,p__12347,f,args){
var vec__12348__12351 = p__12347;
var k__12352 = cljs.core.nth.call(null,vec__12348__12351,0,null);
var ks__12353 = cljs.core.nthnext.call(null,vec__12348__12351,1);

if(cljs.core.truth_(ks__12353))
{return cljs.core.assoc.call(null,m,k__12352,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12352),ks__12353,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12352,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12352),args));
}
};
var update_in = function (m,p__12347,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12347, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12359){
var m = cljs.core.first(arglist__12359);
var p__12347 = cljs.core.first(cljs.core.next(arglist__12359));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12359)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12359)));
return update_in__delegate.call(this, m, p__12347, f, args);
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
var this__12373 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12458 = null;
var G__12458__12459 = (function (coll,k){
var this__12375 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12458__12460 = (function (coll,k,not_found){
var this__12376 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12458 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12458__12459.call(this,coll,k);
case  3 :
return G__12458__12460.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12458;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12378 = this;
var new_array__12380 = cljs.core.aclone.call(null,this__12378.array);

(new_array__12380[k] = v);
return (new cljs.core.Vector(this__12378.meta,new_array__12380));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12467 = null;
var G__12467__12468 = (function (coll,k){
var this__12386 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12467__12469 = (function (coll,k,not_found){
var this__12387 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12467 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12467__12468.call(this,coll,k);
case  3 :
return G__12467__12469.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12467;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12390 = this;
var new_array__12392 = cljs.core.aclone.call(null,this__12390.array);

new_array__12392.push(o);
return (new cljs.core.Vector(this__12390.meta,new_array__12392));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12472 = null;
var G__12472__12474 = (function (v,f){
var this__12395 = this;
return cljs.core.ci_reduce.call(null,this__12395.array,f);
});
var G__12472__12475 = (function (v,f,start){
var this__12400 = this;
return cljs.core.ci_reduce.call(null,this__12400.array,f,start);
});
G__12472 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12472__12474.call(this,v,f);
case  3 :
return G__12472__12475.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12472;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12402 = this;
if(cljs.core.truth_((this__12402.array.length > 0)))
{var vector_seq__12406 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12402.array.length)))
{return cljs.core.cons.call(null,(this__12402.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12406.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12411 = this;
return this__12411.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12414 = this;
var count__12416 = this__12414.array.length;

if(cljs.core.truth_((count__12416 > 0)))
{return (this__12414.array[(count__12416 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12420 = this;
if(cljs.core.truth_((this__12420.array.length > 0)))
{var new_array__12426 = cljs.core.aclone.call(null,this__12420.array);

new_array__12426.pop();
return (new cljs.core.Vector(this__12420.meta,new_array__12426));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12429 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12431 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12432 = this;
return (new cljs.core.Vector(meta,this__12432.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12435 = this;
return this__12435.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12494 = null;
var G__12494__12495 = (function (coll,n){
var this__12436 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12438 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12438))
{return (n < this__12436.array.length);
} else
{return and__3546__auto____12438;
}
})()))
{return (this__12436.array[n]);
} else
{return null;
}
});
var G__12494__12496 = (function (coll,n,not_found){
var this__12443 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12444 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12444))
{return (n < this__12443.array.length);
} else
{return and__3546__auto____12444;
}
})()))
{return (this__12443.array[n]);
} else
{return not_found;
}
});
G__12494 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12494__12495.call(this,coll,n);
case  3 :
return G__12494__12496.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12494;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12447 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12447.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12544){
var args = cljs.core.seq( arglist__12544 );;
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
var this__12558 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12717 = null;
var G__12717__12718 = (function (coll,k){
var this__12561 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12717__12719 = (function (coll,k,not_found){
var this__12562 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12717 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12717__12718.call(this,coll,k);
case  3 :
return G__12717__12719.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12717;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12565 = this;
var v_pos__12568 = (this__12565.start + key);

return (new cljs.core.Subvec(this__12565.meta,cljs.core._assoc.call(null,this__12565.v,v_pos__12568,val),this__12565.start,((this__12565.end > (v_pos__12568 + 1)) ? this__12565.end : (v_pos__12568 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12722 = null;
var G__12722__12723 = (function (coll,k){
var this__12574 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12722__12724 = (function (coll,k,not_found){
var this__12658 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12722 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12722__12723.call(this,coll,k);
case  3 :
return G__12722__12724.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12722;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12659 = this;
return (new cljs.core.Subvec(this__12659.meta,cljs.core._assoc_n.call(null,this__12659.v,this__12659.end,o),this__12659.start,(this__12659.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12727 = null;
var G__12727__12728 = (function (coll,f){
var this__12661 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12727__12729 = (function (coll,f,start){
var this__12662 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12727 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12727__12728.call(this,coll,f);
case  3 :
return G__12727__12729.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12727;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12663 = this;
var subvec_seq__12664 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12663.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12663.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12664.call(null,this__12663.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12666 = this;
return (this__12666.end - this__12666.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12667 = this;
return cljs.core._nth.call(null,this__12667.v,(this__12667.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12669 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12669.start,this__12669.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12669.meta,this__12669.v,this__12669.start,(this__12669.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12671 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12674 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12679 = this;
return (new cljs.core.Subvec(meta,this__12679.v,this__12679.start,this__12679.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12682 = this;
return this__12682.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12744 = null;
var G__12744__12745 = (function (coll,n){
var this__12709 = this;
return cljs.core._nth.call(null,this__12709.v,(this__12709.start + n));
});
var G__12744__12746 = (function (coll,n,not_found){
var this__12711 = this;
return cljs.core._nth.call(null,this__12711.v,(this__12711.start + n),not_found);
});
G__12744 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12744__12745.call(this,coll,n);
case  3 :
return G__12744__12746.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12744;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12712 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12712.meta);
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
var subvec__12762 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12764 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12762.call(this,v,start);
case  3 :
return subvec__12764.call(this,v,start,end);
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
var this__12771 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12773 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12775 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12777 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12777.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12779 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12783 = this;
return cljs.core._first.call(null,this__12783.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12786 = this;
var temp__3695__auto____12789 = cljs.core.next.call(null,this__12786.front);

if(cljs.core.truth_(temp__3695__auto____12789))
{var f1__12791 = temp__3695__auto____12789;

return (new cljs.core.PersistentQueueSeq(this__12786.meta,f1__12791,this__12786.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12786.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12786.meta,this__12786.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12794 = this;
return this__12794.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12795 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12795.front,this__12795.rear));
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
var this__12829 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12831 = this;
if(cljs.core.truth_(this__12831.front))
{return (new cljs.core.PersistentQueue(this__12831.meta,(this__12831.count + 1),this__12831.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12836 = this__12831.rear;

if(cljs.core.truth_(or__3548__auto____12836))
{return or__3548__auto____12836;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12831.meta,(this__12831.count + 1),cljs.core.conj.call(null,this__12831.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12837 = this;
var rear__12838 = cljs.core.seq.call(null,this__12837.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12841 = this__12837.front;

if(cljs.core.truth_(or__3548__auto____12841))
{return or__3548__auto____12841;
} else
{return rear__12838;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12837.front,cljs.core.seq.call(null,rear__12838)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12845 = this;
return this__12845.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12846 = this;
return cljs.core._first.call(null,this__12846.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12848 = this;
if(cljs.core.truth_(this__12848.front))
{var temp__3695__auto____12849 = cljs.core.next.call(null,this__12848.front);

if(cljs.core.truth_(temp__3695__auto____12849))
{var f1__12850 = temp__3695__auto____12849;

return (new cljs.core.PersistentQueue(this__12848.meta,(this__12848.count - 1),f1__12850,this__12848.rear));
} else
{return (new cljs.core.PersistentQueue(this__12848.meta,(this__12848.count - 1),cljs.core.seq.call(null,this__12848.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12855 = this;
return cljs.core.first.call(null,this__12855.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12856 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12858 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12862 = this;
return (new cljs.core.PersistentQueue(meta,this__12862.count,this__12862.front,this__12862.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12863 = this;
return this__12863.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12866 = this;
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
var this__12887 = this;
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
var len__12924 = array.length;

var i__12925 = 0;

while(true){
if(cljs.core.truth_((i__12925 < len__12924)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12925]))))
{return i__12925;
} else
{{
var G__12931 = (i__12925 + incr);
i__12925 = G__12931;
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
var obj_map_contains_key_QMARK___12943 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12944 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12935 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12935))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12935;
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
return obj_map_contains_key_QMARK___12943.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12944.call(this,k,strobj,true_val,false_val);
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
var this__12978 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13035 = null;
var G__13035__13037 = (function (coll,k){
var this__12980 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13035__13038 = (function (coll,k,not_found){
var this__12981 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12981.strobj,(this__12981.strobj[k]),not_found);
});
G__13035 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13035__13037.call(this,coll,k);
case  3 :
return G__13035__13038.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13035;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12982 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12985 = goog.object.clone.call(null,this__12982.strobj);
var overwrite_QMARK___12988 = new_strobj__12985.hasOwnProperty(k);

(new_strobj__12985[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12988))
{return (new cljs.core.ObjMap(this__12982.meta,this__12982.keys,new_strobj__12985));
} else
{var new_keys__12990 = cljs.core.aclone.call(null,this__12982.keys);

new_keys__12990.push(k);
return (new cljs.core.ObjMap(this__12982.meta,new_keys__12990,new_strobj__12985));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12982.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12994 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12994.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13060 = null;
var G__13060__13062 = (function (coll,k){
var this__12995 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13060__13063 = (function (coll,k,not_found){
var this__12996 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13060 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13060__13062.call(this,coll,k);
case  3 :
return G__13060__13063.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13060;
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
var this__12998 = this;
if(cljs.core.truth_((this__12998.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12954_SHARP_){
return cljs.core.vector.call(null,p1__12954_SHARP_,(this__12998.strobj[p1__12954_SHARP_]));
}),this__12998.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12999 = this;
return this__12999.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13001 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13003 = this;
return (new cljs.core.ObjMap(meta,this__13003.keys,this__13003.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13005 = this;
return this__13005.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13007 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13007.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13009 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13030 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13030))
{return this__13009.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13030;
}
})()))
{var new_keys__13032 = cljs.core.aclone.call(null,this__13009.keys);
var new_strobj__13033 = goog.object.clone.call(null,this__13009.strobj);

new_keys__13032.splice(cljs.core.scan_array.call(null,1,k,new_keys__13032),1);
cljs.core.js_delete.call(null,new_strobj__13033,k);
return (new cljs.core.ObjMap(this__13009.meta,new_keys__13032,new_strobj__13033));
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
var G__13340 = null;
var G__13340__13341 = (function (coll,k){
var this__13100 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13340__13342 = (function (coll,k,not_found){
var this__13104 = this;
var bucket__13105 = (this__13104.hashobj[cljs.core.hash.call(null,k)]);
var i__13106 = (cljs.core.truth_(bucket__13105)?cljs.core.scan_array.call(null,2,k,bucket__13105):null);

if(cljs.core.truth_(i__13106))
{return (bucket__13105[(i__13106 + 1)]);
} else
{return not_found;
}
});
G__13340 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13340__13341.call(this,coll,k);
case  3 :
return G__13340__13342.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13340;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13109 = this;
var h__13110 = cljs.core.hash.call(null,k);
var bucket__13111 = (this__13109.hashobj[h__13110]);

if(cljs.core.truth_(bucket__13111))
{var new_bucket__13112 = cljs.core.aclone.call(null,bucket__13111);
var new_hashobj__13113 = goog.object.clone.call(null,this__13109.hashobj);

(new_hashobj__13113[h__13110] = new_bucket__13112);
var temp__3695__auto____13115 = cljs.core.scan_array.call(null,2,k,new_bucket__13112);

if(cljs.core.truth_(temp__3695__auto____13115))
{var i__13116 = temp__3695__auto____13115;

(new_bucket__13112[(i__13116 + 1)] = v);
return (new cljs.core.HashMap(this__13109.meta,this__13109.count,new_hashobj__13113));
} else
{new_bucket__13112.push(k,v);
return (new cljs.core.HashMap(this__13109.meta,(this__13109.count + 1),new_hashobj__13113));
}
} else
{var new_hashobj__13118 = goog.object.clone.call(null,this__13109.hashobj);

(new_hashobj__13118[h__13110] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13109.meta,(this__13109.count + 1),new_hashobj__13118));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13119 = this;
var bucket__13125 = (this__13119.hashobj[cljs.core.hash.call(null,k)]);
var i__13126 = (cljs.core.truth_(bucket__13125)?cljs.core.scan_array.call(null,2,k,bucket__13125):null);

if(cljs.core.truth_(i__13126))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13356 = null;
var G__13356__13357 = (function (coll,k){
var this__13128 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13356__13358 = (function (coll,k,not_found){
var this__13175 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13356 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13356__13357.call(this,coll,k);
case  3 :
return G__13356__13358.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13356;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13311 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13314 = this;
if(cljs.core.truth_((this__13314.count > 0)))
{var hashes__13317 = cljs.core.js_keys.call(null,this__13314.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13086_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13314.hashobj[p1__13086_SHARP_])));
}),hashes__13317);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13322 = this;
return this__13322.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13323 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13324 = this;
return (new cljs.core.HashMap(meta,this__13324.count,this__13324.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13325 = this;
return this__13325.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13330 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13330.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13331 = this;
var h__13332 = cljs.core.hash.call(null,k);
var bucket__13333 = (this__13331.hashobj[h__13332]);
var i__13334 = (cljs.core.truth_(bucket__13333)?cljs.core.scan_array.call(null,2,k,bucket__13333):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13334)))
{return coll;
} else
{var new_hashobj__13335 = goog.object.clone.call(null,this__13331.hashobj);

if(cljs.core.truth_((3 > bucket__13333.length)))
{cljs.core.js_delete.call(null,new_hashobj__13335,h__13332);
} else
{var new_bucket__13336 = cljs.core.aclone.call(null,bucket__13333);

new_bucket__13336.splice(i__13334,2);
(new_hashobj__13335[h__13332] = new_bucket__13336);
}
return (new cljs.core.HashMap(this__13331.meta,(this__13331.count - 1),new_hashobj__13335));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13391 = ks.length;

var i__13392 = 0;
var out__13394 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13392 < len__13391)))
{{
var G__13400 = (i__13392 + 1);
var G__13401 = cljs.core.assoc.call(null,out__13394,(ks[i__13392]),(vs[i__13392]));
i__13392 = G__13400;
out__13394 = G__13401;
continue;
}
} else
{return out__13394;
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
var in$__13403 = cljs.core.seq.call(null,keyvals);
var out__13404 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13403))
{{
var G__13419 = cljs.core.nnext.call(null,in$__13403);
var G__13420 = cljs.core.assoc.call(null,out__13404,cljs.core.first.call(null,in$__13403),cljs.core.second.call(null,in$__13403));
in$__13403 = G__13419;
out__13404 = G__13420;
continue;
}
} else
{return out__13404;
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
hash_map.cljs$lang$applyTo = (function (arglist__13429){
var keyvals = cljs.core.seq( arglist__13429 );;
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
{return cljs.core.reduce.call(null,(function (p1__13437_SHARP_,p2__13440_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13450 = p1__13437_SHARP_;

if(cljs.core.truth_(or__3548__auto____13450))
{return or__3548__auto____13450;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13440_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13453){
var maps = cljs.core.seq( arglist__13453 );;
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
{var merge_entry__13460 = (function (m,e){
var k__13456 = cljs.core.first.call(null,e);
var v__13457 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13456)))
{return cljs.core.assoc.call(null,m,k__13456,f.call(null,cljs.core.get.call(null,m,k__13456),v__13457));
} else
{return cljs.core.assoc.call(null,m,k__13456,v__13457);
}
});
var merge2__13464 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13460,(function (){var or__3548__auto____13461 = m1;

if(cljs.core.truth_(or__3548__auto____13461))
{return or__3548__auto____13461;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13464,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13475){
var f = cljs.core.first(arglist__13475);
var maps = cljs.core.rest(arglist__13475);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13488 = cljs.core.ObjMap.fromObject([],{});
var keys__13490 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13490))
{var key__13491 = cljs.core.first.call(null,keys__13490);
var entry__13493 = cljs.core.get.call(null,map,key__13491,"﷐'user/not-found");

{
var G__13495 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13493,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13488,key__13491,entry__13493):ret__13488);
var G__13496 = cljs.core.next.call(null,keys__13490);
ret__13488 = G__13495;
keys__13490 = G__13496;
continue;
}
} else
{return ret__13488;
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
var this__13514 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13616 = null;
var G__13616__13617 = (function (coll,v){
var this__13516 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13616__13618 = (function (coll,v,not_found){
var this__13519 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13519.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13616 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13616__13617.call(this,coll,v);
case  3 :
return G__13616__13618.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13616;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13624 = null;
var G__13624__13625 = (function (coll,k){
var this__13521 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13624__13626 = (function (coll,k,not_found){
var this__13524 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13624 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13624__13625.call(this,coll,k);
case  3 :
return G__13624__13626.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13624;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13530 = this;
return (new cljs.core.Set(this__13530.meta,cljs.core.assoc.call(null,this__13530.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13536 = this;
return cljs.core.keys.call(null,this__13536.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13592 = this;
return (new cljs.core.Set(this__13592.meta,cljs.core.dissoc.call(null,this__13592.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13595 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13598 = this;
var and__3546__auto____13600 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13600))
{var and__3546__auto____13603 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13603))
{return cljs.core.every_QMARK_.call(null,(function (p1__13482_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13482_SHARP_);
}),other);
} else
{return and__3546__auto____13603;
}
} else
{return and__3546__auto____13600;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13606 = this;
return (new cljs.core.Set(meta,this__13606.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13609 = this;
return this__13609.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13611 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13611.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13638 = cljs.core.seq.call(null,coll);
var out__13639 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13638))))
{{
var G__13642 = cljs.core.rest.call(null,in$__13638);
var G__13643 = cljs.core.conj.call(null,out__13639,cljs.core.first.call(null,in$__13638));
in$__13638 = G__13642;
out__13639 = G__13643;
continue;
}
} else
{return out__13639;
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
{var n__13651 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13655 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13655))
{var e__13656 = temp__3695__auto____13655;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13656));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13651,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13637_SHARP_){
var temp__3695__auto____13659 = cljs.core.find.call(null,smap,p1__13637_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13659))
{var e__13660 = temp__3695__auto____13659;

return cljs.core.second.call(null,e__13660);
} else
{return p1__13637_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13696 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13674,seen){
while(true){
var vec__13675__13677 = p__13674;
var f__13679 = cljs.core.nth.call(null,vec__13675__13677,0,null);
var xs__13680 = vec__13675__13677;

var temp__3698__auto____13694 = cljs.core.seq.call(null,xs__13680);

if(cljs.core.truth_(temp__3698__auto____13694))
{var s__13695 = temp__3698__auto____13694;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13679)))
{{
var G__13697 = cljs.core.rest.call(null,s__13695);
var G__13698 = seen;
p__13674 = G__13697;
seen = G__13698;
continue;
}
} else
{return cljs.core.cons.call(null,f__13679,step.call(null,cljs.core.rest.call(null,s__13695),cljs.core.conj.call(null,seen,f__13679)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13696.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13702 = cljs.core.Vector.fromArray([]);
var s__13703 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13703)))
{{
var G__13708 = cljs.core.conj.call(null,ret__13702,cljs.core.first.call(null,s__13703));
var G__13709 = cljs.core.next.call(null,s__13703);
ret__13702 = G__13708;
s__13703 = G__13709;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13702);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13712 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13712))
{return or__3548__auto____13712;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13714 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13714 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13714 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13725 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13725))
{return or__3548__auto____13725;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13727 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13727 > -1)))
{return cljs.core.subs.call(null,x,2,i__13727);
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
var map__13734 = cljs.core.ObjMap.fromObject([],{});
var ks__13735 = cljs.core.seq.call(null,keys);
var vs__13736 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13737 = ks__13735;

if(cljs.core.truth_(and__3546__auto____13737))
{return vs__13736;
} else
{return and__3546__auto____13737;
}
})()))
{{
var G__13742 = cljs.core.assoc.call(null,map__13734,cljs.core.first.call(null,ks__13735),cljs.core.first.call(null,vs__13736));
var G__13743 = cljs.core.next.call(null,ks__13735);
var G__13744 = cljs.core.next.call(null,vs__13736);
map__13734 = G__13742;
ks__13735 = G__13743;
vs__13736 = G__13744;
continue;
}
} else
{return map__13734;
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
var max_key__13747 = (function (k,x){
return x;
});
var max_key__13748 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13749 = (function() { 
var G__13751__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13731_SHARP_,p2__13732_SHARP_){
return max_key.call(null,k,p1__13731_SHARP_,p2__13732_SHARP_);
}),max_key.call(null,k,x,y),more);
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
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13747.call(this,k,x);
case  3 :
return max_key__13748.call(this,k,x,y);
default:
return max_key__13749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13749.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13753 = (function (k,x){
return x;
});
var min_key__13754 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13755 = (function() { 
var G__13757__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13745_SHARP_,p2__13746_SHARP_){
return min_key.call(null,k,p1__13745_SHARP_,p2__13746_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13757 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13757__delegate.call(this, k, x, y, more);
};
G__13757.cljs$lang$maxFixedArity = 3;
G__13757.cljs$lang$applyTo = (function (arglist__13760){
var k = cljs.core.first(arglist__13760);
var x = cljs.core.first(cljs.core.next(arglist__13760));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13760)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13760)));
return G__13757__delegate.call(this, k, x, y, more);
});
return G__13757;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13753.call(this,k,x);
case  3 :
return min_key__13754.call(this,k,x,y);
default:
return min_key__13755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13755.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13773 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13774 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13767 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13767))
{var s__13768 = temp__3698__auto____13767;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13768),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13768)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13773.call(this,n,step);
case  3 :
return partition_all__13774.call(this,n,step,coll);
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
var temp__3698__auto____13783 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13783))
{var s__13785 = temp__3698__auto____13783;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13785))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13785),take_while.call(null,pred,cljs.core.rest.call(null,s__13785)));
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
var this__13804 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13805 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13865 = null;
var G__13865__13866 = (function (rng,f){
var this__13808 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13865__13867 = (function (rng,f,s){
var this__13812 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13865 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13865__13866.call(this,rng,f);
case  3 :
return G__13865__13867.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13865;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13815 = this;
var comp__13816 = (cljs.core.truth_((this__13815.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13816.call(null,this__13815.start,this__13815.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13817 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13817.end - this__13817.start) / this__13817.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13819 = this;
return this__13819.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13820 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13820.meta,(this__13820.start + this__13820.step),this__13820.end,this__13820.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13825 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13830 = this;
return (new cljs.core.Range(meta,this__13830.start,this__13830.end,this__13830.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13834 = this;
return this__13834.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13875 = null;
var G__13875__13876 = (function (rng,n){
var this__13836 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13836.start + (n * this__13836.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13839 = (this__13836.start > this__13836.end);

if(cljs.core.truth_(and__3546__auto____13839))
{return cljs.core._EQ_.call(null,this__13836.step,0);
} else
{return and__3546__auto____13839;
}
})()))
{return this__13836.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13875__13877 = (function (rng,n,not_found){
var this__13840 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13840.start + (n * this__13840.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13851 = (this__13840.start > this__13840.end);

if(cljs.core.truth_(and__3546__auto____13851))
{return cljs.core._EQ_.call(null,this__13840.step,0);
} else
{return and__3546__auto____13851;
}
})()))
{return this__13840.start;
} else
{return not_found;
}
}
});
G__13875 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13875__13876.call(this,rng,n);
case  3 :
return G__13875__13877.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13875;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13857 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13857.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13903 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13904 = (function (end){
return range.call(null,0,end,1);
});
var range__13905 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13906 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13903.call(this);
case  1 :
return range__13904.call(this,start);
case  2 :
return range__13905.call(this,start,end);
case  3 :
return range__13906.call(this,start,end,step);
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
var temp__3698__auto____13914 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13914))
{var s__13922 = temp__3698__auto____13914;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13922),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13922)));
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
var temp__3698__auto____13981 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13981))
{var s__13984 = temp__3698__auto____13981;

var fst__13986 = cljs.core.first.call(null,s__13984);
var fv__13988 = f.call(null,fst__13986);
var run__14005 = cljs.core.cons.call(null,fst__13986,cljs.core.take_while.call(null,(function (p1__13929_SHARP_){
return cljs.core._EQ_.call(null,fv__13988,f.call(null,p1__13929_SHARP_));
}),cljs.core.next.call(null,s__13984)));

return cljs.core.cons.call(null,run__14005,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14005),s__13984))));
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
var temp__3695__auto____14045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14045))
{var s__14046 = temp__3695__auto____14045;

return reductions.call(null,f,cljs.core.first.call(null,s__14046),cljs.core.rest.call(null,s__14046));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14144 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14141))
{var s__14142 = temp__3698__auto____14141;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14142)),cljs.core.rest.call(null,s__14142));
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
var juxt__14165 = (function (f){
return (function() {
var G__14170 = null;
var G__14170__14171 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14170__14172 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14170__14173 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14170__14174 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14170__14175 = (function() { 
var G__14177__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14177__delegate.call(this, x, y, z, args);
};
G__14177.cljs$lang$maxFixedArity = 3;
G__14177.cljs$lang$applyTo = (function (arglist__14178){
var x = cljs.core.first(arglist__14178);
var y = cljs.core.first(cljs.core.next(arglist__14178));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14178)));
return G__14177__delegate.call(this, x, y, z, args);
});
return G__14177;
})()
;
G__14170 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14170__14171.call(this);
case  1 :
return G__14170__14172.call(this,x);
case  2 :
return G__14170__14173.call(this,x,y);
case  3 :
return G__14170__14174.call(this,x,y,z);
default:
return G__14170__14175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14170.cljs$lang$maxFixedArity = 3;
G__14170.cljs$lang$applyTo = G__14170__14175.cljs$lang$applyTo;
return G__14170;
})()
});
var juxt__14166 = (function (f,g){
return (function() {
var G__14179 = null;
var G__14179__14180 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14179__14181 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14179__14182 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14179__14183 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14179__14184 = (function() { 
var G__14186__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14186__delegate.call(this, x, y, z, args);
};
G__14186.cljs$lang$maxFixedArity = 3;
G__14186.cljs$lang$applyTo = (function (arglist__14187){
var x = cljs.core.first(arglist__14187);
var y = cljs.core.first(cljs.core.next(arglist__14187));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14187)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14187)));
return G__14186__delegate.call(this, x, y, z, args);
});
return G__14186;
})()
;
G__14179 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14179__14180.call(this);
case  1 :
return G__14179__14181.call(this,x);
case  2 :
return G__14179__14182.call(this,x,y);
case  3 :
return G__14179__14183.call(this,x,y,z);
default:
return G__14179__14184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14179.cljs$lang$maxFixedArity = 3;
G__14179.cljs$lang$applyTo = G__14179__14184.cljs$lang$applyTo;
return G__14179;
})()
});
var juxt__14167 = (function (f,g,h){
return (function() {
var G__14188 = null;
var G__14188__14189 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14188__14190 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14188__14191 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14188__14192 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14188__14193 = (function() { 
var G__14198__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14198__delegate.call(this, x, y, z, args);
};
G__14198.cljs$lang$maxFixedArity = 3;
G__14198.cljs$lang$applyTo = (function (arglist__14200){
var x = cljs.core.first(arglist__14200);
var y = cljs.core.first(cljs.core.next(arglist__14200));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14200)));
return G__14198__delegate.call(this, x, y, z, args);
});
return G__14198;
})()
;
G__14188 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14188__14189.call(this);
case  1 :
return G__14188__14190.call(this,x);
case  2 :
return G__14188__14191.call(this,x,y);
case  3 :
return G__14188__14192.call(this,x,y,z);
default:
return G__14188__14193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14188.cljs$lang$maxFixedArity = 3;
G__14188.cljs$lang$applyTo = G__14188__14193.cljs$lang$applyTo;
return G__14188;
})()
});
var juxt__14168 = (function() { 
var G__14201__delegate = function (f,g,h,fs){
var fs__14163 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14202 = null;
var G__14202__14203 = (function (){
return cljs.core.reduce.call(null,(function (p1__14026_SHARP_,p2__14027_SHARP_){
return cljs.core.conj.call(null,p1__14026_SHARP_,p2__14027_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14163);
});
var G__14202__14204 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14029_SHARP_,p2__14032_SHARP_){
return cljs.core.conj.call(null,p1__14029_SHARP_,p2__14032_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14163);
});
var G__14202__14205 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14033_SHARP_,p2__14035_SHARP_){
return cljs.core.conj.call(null,p1__14033_SHARP_,p2__14035_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14163);
});
var G__14202__14206 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14037_SHARP_,p2__14038_SHARP_){
return cljs.core.conj.call(null,p1__14037_SHARP_,p2__14038_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14163);
});
var G__14202__14207 = (function() { 
var G__14215__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14039_SHARP_,p2__14040_SHARP_){
return cljs.core.conj.call(null,p1__14039_SHARP_,cljs.core.apply.call(null,p2__14040_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14163);
};
var G__14215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14215__delegate.call(this, x, y, z, args);
};
G__14215.cljs$lang$maxFixedArity = 3;
G__14215.cljs$lang$applyTo = (function (arglist__14216){
var x = cljs.core.first(arglist__14216);
var y = cljs.core.first(cljs.core.next(arglist__14216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14216)));
return G__14215__delegate.call(this, x, y, z, args);
});
return G__14215;
})()
;
G__14202 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14202__14203.call(this);
case  1 :
return G__14202__14204.call(this,x);
case  2 :
return G__14202__14205.call(this,x,y);
case  3 :
return G__14202__14206.call(this,x,y,z);
default:
return G__14202__14207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14202.cljs$lang$maxFixedArity = 3;
G__14202.cljs$lang$applyTo = G__14202__14207.cljs$lang$applyTo;
return G__14202;
})()
};
var G__14201 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14201__delegate.call(this, f, g, h, fs);
};
G__14201.cljs$lang$maxFixedArity = 3;
G__14201.cljs$lang$applyTo = (function (arglist__14218){
var f = cljs.core.first(arglist__14218);
var g = cljs.core.first(cljs.core.next(arglist__14218));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14218)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14218)));
return G__14201__delegate.call(this, f, g, h, fs);
});
return G__14201;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14165.call(this,f);
case  2 :
return juxt__14166.call(this,f,g);
case  3 :
return juxt__14167.call(this,f,g,h);
default:
return juxt__14168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14168.cljs$lang$applyTo;
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
var dorun__14234 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14300 = cljs.core.next.call(null,coll);
coll = G__14300;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14235 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14223 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14223))
{return (n > 0);
} else
{return and__3546__auto____14223;
}
})()))
{{
var G__14306 = (n - 1);
var G__14307 = cljs.core.next.call(null,coll);
n = G__14306;
coll = G__14307;
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
return dorun__14234.call(this,n);
case  2 :
return dorun__14235.call(this,n,coll);
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
var doall__14317 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14318 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14317.call(this,n);
case  2 :
return doall__14318.call(this,n,coll);
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
var matches__14325 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14325),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14325),1)))
{return cljs.core.first.call(null,matches__14325);
} else
{return cljs.core.vec.call(null,matches__14325);
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
var matches__14334 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14334)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14334),1)))
{return cljs.core.first.call(null,matches__14334);
} else
{return cljs.core.vec.call(null,matches__14334);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14345 = cljs.core.re_find.call(null,re,s);
var match_idx__14346 = s.search(re);
var match_str__14347 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14345))?cljs.core.first.call(null,match_data__14345):match_data__14345);
var post_match__14348 = cljs.core.subs.call(null,s,(match_idx__14346 + cljs.core.count.call(null,match_str__14347)));

if(cljs.core.truth_(match_data__14345))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14345,re_seq.call(null,re,post_match__14348));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14361_SHARP_){
return print_one.call(null,p1__14361_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14373 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14373))
{var and__3546__auto____14381 = (function (){var x__445__auto____14374 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14375 = x__445__auto____14374;

if(cljs.core.truth_(and__3546__auto____14375))
{var and__3546__auto____14378 = x__445__auto____14374.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14378))
{return cljs.core.not.call(null,x__445__auto____14374.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14378;
}
} else
{return and__3546__auto____14375;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14374);
}
})();

if(cljs.core.truth_(and__3546__auto____14381))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14381;
}
} else
{return and__3546__auto____14373;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14384 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14387 = x__445__auto____14384;

if(cljs.core.truth_(and__3546__auto____14387))
{var and__3546__auto____14388 = x__445__auto____14384.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14388))
{return cljs.core.not.call(null,x__445__auto____14384.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14388;
}
} else
{return and__3546__auto____14387;
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
var first_obj__14399 = cljs.core.first.call(null,objs);
var sb__14400 = (new goog.string.StringBuffer());

var G__14401__14404 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14401__14404))
{var obj__14406 = cljs.core.first.call(null,G__14401__14404);
var G__14401__14407 = G__14401__14404;

while(true){
if(cljs.core.truth_((obj__14406 === first_obj__14399)))
{} else
{sb__14400.append(" ");
}
var G__14411__14414 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14406,opts));

if(cljs.core.truth_(G__14411__14414))
{var string__14418 = cljs.core.first.call(null,G__14411__14414);
var G__14411__14419 = G__14411__14414;

while(true){
sb__14400.append(string__14418);
var temp__3698__auto____14422 = cljs.core.next.call(null,G__14411__14419);

if(cljs.core.truth_(temp__3698__auto____14422))
{var G__14411__14425 = temp__3698__auto____14422;

{
var G__14432 = cljs.core.first.call(null,G__14411__14425);
var G__14433 = G__14411__14425;
string__14418 = G__14432;
G__14411__14419 = G__14433;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14427 = cljs.core.next.call(null,G__14401__14407);

if(cljs.core.truth_(temp__3698__auto____14427))
{var G__14401__14429 = temp__3698__auto____14427;

{
var G__14436 = cljs.core.first.call(null,G__14401__14429);
var G__14437 = G__14401__14429;
obj__14406 = G__14436;
G__14401__14407 = G__14437;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14400);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14438 = cljs.core.first.call(null,objs);

var G__14439__14440 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14439__14440))
{var obj__14441 = cljs.core.first.call(null,G__14439__14440);
var G__14439__14442 = G__14439__14440;

while(true){
if(cljs.core.truth_((obj__14441 === first_obj__14438)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14444__14445 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14441,opts));

if(cljs.core.truth_(G__14444__14445))
{var string__14447 = cljs.core.first.call(null,G__14444__14445);
var G__14444__14448 = G__14444__14445;

while(true){
cljs.core.string_print.call(null,string__14447);
var temp__3698__auto____14451 = cljs.core.next.call(null,G__14444__14448);

if(cljs.core.truth_(temp__3698__auto____14451))
{var G__14444__14454 = temp__3698__auto____14451;

{
var G__14477 = cljs.core.first.call(null,G__14444__14454);
var G__14478 = G__14444__14454;
string__14447 = G__14477;
G__14444__14448 = G__14478;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14459 = cljs.core.next.call(null,G__14439__14442);

if(cljs.core.truth_(temp__3698__auto____14459))
{var G__14439__14462 = temp__3698__auto____14459;

{
var G__14482 = cljs.core.first.call(null,G__14439__14462);
var G__14483 = G__14439__14462;
obj__14441 = G__14482;
G__14439__14442 = G__14483;
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
pr_str.cljs$lang$applyTo = (function (arglist__14496){
var objs = cljs.core.seq( arglist__14496 );;
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
pr.cljs$lang$applyTo = (function (arglist__14501){
var objs = cljs.core.seq( arglist__14501 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14506){
var objs = cljs.core.seq( arglist__14506 );;
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
println.cljs$lang$applyTo = (function (arglist__14512){
var objs = cljs.core.seq( arglist__14512 );;
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
prn.cljs$lang$applyTo = (function (arglist__14517){
var objs = cljs.core.seq( arglist__14517 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14527 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14527,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14558 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14558))
{var nspc__14559 = temp__3698__auto____14558;

return cljs.core.str.call(null,nspc__14559,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14560 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14560))
{var nspc__14561 = temp__3698__auto____14560;

return cljs.core.str.call(null,nspc__14561,"/");
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
var pr_pair__14571 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14571,"{",", ","}",opts,coll);
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
var this__14595 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14604 = this;
var G__14605__14608 = cljs.core.seq.call(null,this__14604.watches);

if(cljs.core.truth_(G__14605__14608))
{var G__14610__14613 = cljs.core.first.call(null,G__14605__14608);
var vec__14612__14614 = G__14610__14613;
var key__14616 = cljs.core.nth.call(null,vec__14612__14614,0,null);
var f__14618 = cljs.core.nth.call(null,vec__14612__14614,1,null);
var G__14605__14620 = G__14605__14608;

var G__14610__14621 = G__14610__14613;
var G__14605__14623 = G__14605__14620;

while(true){
var vec__14624__14625 = G__14610__14621;
var key__14628 = cljs.core.nth.call(null,vec__14624__14625,0,null);
var f__14629 = cljs.core.nth.call(null,vec__14624__14625,1,null);
var G__14605__14630 = G__14605__14623;

f__14629.call(null,key__14628,this$,oldval,newval);
var temp__3698__auto____14632 = cljs.core.next.call(null,G__14605__14630);

if(cljs.core.truth_(temp__3698__auto____14632))
{var G__14605__14634 = temp__3698__auto____14632;

{
var G__14651 = cljs.core.first.call(null,G__14605__14634);
var G__14652 = G__14605__14634;
G__14610__14621 = G__14651;
G__14605__14623 = G__14652;
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
var this__14637 = this;
return this$.watches = cljs.core.assoc.call(null,this__14637.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14640 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14640.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14643 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14643.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14644 = this;
return this__14644.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14645 = this;
return this__14645.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14646 = this;
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
var atom__14662 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14663 = (function() { 
var G__14665__delegate = function (x,p__14654){
var map__14655__14656 = p__14654;
var map__14655__14658 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14655__14656))?cljs.core.apply.call(null,cljs.core.hash_map,map__14655__14656):map__14655__14656);
var validator__14659 = cljs.core.get.call(null,map__14655__14658,"﷐'validator");
var meta__14660 = cljs.core.get.call(null,map__14655__14658,"﷐'meta");

return (new cljs.core.Atom(x,meta__14660,validator__14659,null));
};
var G__14665 = function (x,var_args){
var p__14654 = null;
if (goog.isDef(var_args)) {
  p__14654 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14665__delegate.call(this, x, p__14654);
};
G__14665.cljs$lang$maxFixedArity = 1;
G__14665.cljs$lang$applyTo = (function (arglist__14666){
var x = cljs.core.first(arglist__14666);
var p__14654 = cljs.core.rest(arglist__14666);
return G__14665__delegate.call(this, x, p__14654);
});
return G__14665;
})()
;
atom = function(x,var_args){
var p__14654 = var_args;
switch(arguments.length){
case  1 :
return atom__14662.call(this,x);
default:
return atom__14663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14663.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14667 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14667))
{var validate__14671 = temp__3698__auto____14667;

if(cljs.core.truth_(validate__14671.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14691 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14691,new_value);
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
var swap_BANG___14703 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14704 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14705 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14706 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14707 = (function() { 
var G__14715__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14715 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14715__delegate.call(this, a, f, x, y, z, more);
};
G__14715.cljs$lang$maxFixedArity = 5;
G__14715.cljs$lang$applyTo = (function (arglist__14719){
var a = cljs.core.first(arglist__14719);
var f = cljs.core.first(cljs.core.next(arglist__14719));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14719)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14719))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14719)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14719)))));
return G__14715__delegate.call(this, a, f, x, y, z, more);
});
return G__14715;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14703.call(this,a,f);
case  3 :
return swap_BANG___14704.call(this,a,f,x);
case  4 :
return swap_BANG___14705.call(this,a,f,x,y);
case  5 :
return swap_BANG___14706.call(this,a,f,x,y,z);
default:
return swap_BANG___14707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14707.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14738){
var iref = cljs.core.first(arglist__14738);
var f = cljs.core.first(cljs.core.next(arglist__14738));
var args = cljs.core.rest(cljs.core.next(arglist__14738));
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
var gensym__14768 = (function (){
return gensym.call(null,"G__");
});
var gensym__14769 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14768.call(this);
case  1 :
return gensym__14769.call(this,prefix_string);
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
var this__14786 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14786.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14787 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14787.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14787.state,this__14787.f);
}
return cljs.core.deref.call(null,this__14787.state);
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
delay.cljs$lang$applyTo = (function (arglist__14795){
var body = cljs.core.seq( arglist__14795 );;
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
var map__14808__14809 = options;
var map__14808__14813 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14808__14809))?cljs.core.apply.call(null,cljs.core.hash_map,map__14808__14809):map__14808__14809);
var keywordize_keys__14814 = cljs.core.get.call(null,map__14808__14813,"﷐'keywordize-keys");
var keyfn__14815 = (cljs.core.truth_(keywordize_keys__14814)?cljs.core.keyword:cljs.core.str);
var f__14832 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14828 = (function iter__14821(s__14822){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14822__14823 = s__14822;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14822__14823)))
{var k__14827 = cljs.core.first.call(null,s__14822__14823);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14815.call(null,k__14827),thisfn.call(null,(x[k__14827]))]),iter__14821.call(null,cljs.core.rest.call(null,s__14822__14823)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14828.call(null,cljs.core.js_keys.call(null,x));
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

return f__14832.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14845){
var x = cljs.core.first(arglist__14845);
var options = cljs.core.rest(arglist__14845);
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
var mem__14846 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14853__delegate = function (args){
var temp__3695__auto____14847 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14846),args);

if(cljs.core.truth_(temp__3695__auto____14847))
{var v__14848 = temp__3695__auto____14847;

return v__14848;
} else
{var ret__14852 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14846,cljs.core.assoc,args,ret__14852);
return ret__14852;
}
};
var G__14853 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14853__delegate.call(this, args);
};
G__14853.cljs$lang$maxFixedArity = 0;
G__14853.cljs$lang$applyTo = (function (arglist__14856){
var args = cljs.core.seq( arglist__14856 );;
return G__14853__delegate.call(this, args);
});
return G__14853;
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
var trampoline__14868 = (function (f){
while(true){
var ret__14860 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14860)))
{{
var G__14873 = ret__14860;
f = G__14873;
continue;
}
} else
{return ret__14860;
}
break;
}
});
var trampoline__14869 = (function() { 
var G__14874__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14874 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14874__delegate.call(this, f, args);
};
G__14874.cljs$lang$maxFixedArity = 1;
G__14874.cljs$lang$applyTo = (function (arglist__14877){
var f = cljs.core.first(arglist__14877);
var args = cljs.core.rest(arglist__14877);
return G__14874__delegate.call(this, f, args);
});
return G__14874;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14868.call(this,f);
default:
return trampoline__14869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14869.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14882 = (function (){
return rand.call(null,1);
});
var rand__14883 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14882.call(this);
case  1 :
return rand__14883.call(this,n);
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
var k__14890 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14890,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14890,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14917 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14918 = (function (h,child,parent){
var or__3548__auto____14903 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14903))
{return or__3548__auto____14903;
} else
{var or__3548__auto____14904 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14904))
{return or__3548__auto____14904;
} else
{var and__3546__auto____14906 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14906))
{var and__3546__auto____14909 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14909))
{var and__3546__auto____14913 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14913))
{var ret__14914 = true;
var i__14915 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14916 = cljs.core.not.call(null,ret__14914);

if(cljs.core.truth_(or__3548__auto____14916))
{return or__3548__auto____14916;
} else
{return cljs.core._EQ_.call(null,i__14915,cljs.core.count.call(null,parent));
}
})()))
{return ret__14914;
} else
{{
var G__14924 = isa_QMARK_.call(null,h,child.call(null,i__14915),parent.call(null,i__14915));
var G__14925 = (i__14915 + 1);
ret__14914 = G__14924;
i__14915 = G__14925;
continue;
}
}
break;
}
} else
{return and__3546__auto____14913;
}
} else
{return and__3546__auto____14909;
}
} else
{return and__3546__auto____14906;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14917.call(this,h,child);
case  3 :
return isa_QMARK___14918.call(this,h,child,parent);
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
var parents__14944 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14945 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14944.call(this,h);
case  2 :
return parents__14945.call(this,h,tag);
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
var ancestors__14961 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14963 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14961.call(this,h);
case  2 :
return ancestors__14963.call(this,h,tag);
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
var descendants__14981 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14982 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14981.call(this,h);
case  2 :
return descendants__14982.call(this,h,tag);
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
var derive__15004 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15006 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14992 = "﷐'parents".call(null,h);
var td__14993 = "﷐'descendants".call(null,h);
var ta__14995 = "﷐'ancestors".call(null,h);
var tf__15000 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15002 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14992.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14995.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14995.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14992,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15000.call(null,"﷐'ancestors".call(null,h),tag,td__14993,parent,ta__14995),"﷐'descendants":tf__15000.call(null,"﷐'descendants".call(null,h),parent,ta__14995,tag,td__14993)});
})());

if(cljs.core.truth_(or__3548__auto____15002))
{return or__3548__auto____15002;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15004.call(this,h,tag);
case  3 :
return derive__15006.call(this,h,tag,parent);
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
var underive__15038 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15039 = (function (h,tag,parent){
var parentMap__15034 = "﷐'parents".call(null,h);
var childsParents__15035 = (cljs.core.truth_(parentMap__15034.call(null,tag))?cljs.core.disj.call(null,parentMap__15034.call(null,tag),parent):cljs.core.set([]));
var newParents__15036 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15035))?cljs.core.assoc.call(null,parentMap__15034,tag,childsParents__15035):cljs.core.dissoc.call(null,parentMap__15034,tag));
var deriv_seq__15037 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14986_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14986_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14986_SHARP_),cljs.core.second.call(null,p1__14986_SHARP_)));
}),cljs.core.seq.call(null,newParents__15036)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15034.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14988_SHARP_,p2__14989_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14988_SHARP_,p2__14989_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15037));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15038.call(this,h,tag);
case  3 :
return underive__15039.call(this,h,tag,parent);
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
var xprefs__15077 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15079 = (cljs.core.truth_((function (){var and__3546__auto____15078 = xprefs__15077;

if(cljs.core.truth_(and__3546__auto____15078))
{return xprefs__15077.call(null,y);
} else
{return and__3546__auto____15078;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15079))
{return or__3548__auto____15079;
} else
{var or__3548__auto____15085 = (function (){var ps__15083 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15083) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15083),prefer_table)))
{} else
{}
{
var G__15090 = cljs.core.rest.call(null,ps__15083);
ps__15083 = G__15090;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15085))
{return or__3548__auto____15085;
} else
{var or__3548__auto____15087 = (function (){var ps__15086 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15086) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15086),y,prefer_table)))
{} else
{}
{
var G__15091 = cljs.core.rest.call(null,ps__15086);
ps__15086 = G__15091;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15087))
{return or__3548__auto____15087;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15094 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15116 = cljs.core.reduce.call(null,(function (be,p__15101){
var vec__15102__15104 = p__15101;
var k__15105 = cljs.core.nth.call(null,vec__15102__15104,0,null);
var ___15106 = cljs.core.nth.call(null,vec__15102__15104,1,null);
var e__15107 = vec__15102__15104;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15105)))
{var be2__15111 = (cljs.core.truth_((function (){var or__3548__auto____15108 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15108))
{return or__3548__auto____15108;
} else
{return cljs.core.dominates.call(null,k__15105,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15107:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15111),k__15105,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15105," and ",cljs.core.first.call(null,be2__15111),", and neither is preferred")));
}
return be2__15111;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15116))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15116));
return cljs.core.second.call(null,best_entry__15116);
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
if(cljs.core.truth_((function (){var and__3546__auto____15131 = mf;

if(cljs.core.truth_(and__3546__auto____15131))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15131;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15135 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15135))
{return or__3548__auto____15135;
} else
{var or__3548__auto____15138 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15138))
{return or__3548__auto____15138;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15143 = mf;

if(cljs.core.truth_(and__3546__auto____15143))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15143;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15145 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{var or__3548__auto____15146 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15146))
{return or__3548__auto____15146;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15150 = mf;

if(cljs.core.truth_(and__3546__auto____15150))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15150;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15152 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15152))
{return or__3548__auto____15152;
} else
{var or__3548__auto____15157 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15157))
{return or__3548__auto____15157;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15176 = mf;

if(cljs.core.truth_(and__3546__auto____15176))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15176;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15178 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15178))
{return or__3548__auto____15178;
} else
{var or__3548__auto____15179 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15179))
{return or__3548__auto____15179;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15185 = mf;

if(cljs.core.truth_(and__3546__auto____15185))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15185;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15187 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15187))
{return or__3548__auto____15187;
} else
{var or__3548__auto____15188 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15188))
{return or__3548__auto____15188;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15192 = mf;

if(cljs.core.truth_(and__3546__auto____15192))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15192;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15195 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15195))
{return or__3548__auto____15195;
} else
{var or__3548__auto____15198 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15209 = mf;

if(cljs.core.truth_(and__3546__auto____15209))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15209;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15214 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15214))
{return or__3548__auto____15214;
} else
{var or__3548__auto____15215 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15215))
{return or__3548__auto____15215;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15218 = mf;

if(cljs.core.truth_(and__3546__auto____15218))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15218;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15220 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15220))
{return or__3548__auto____15220;
} else
{var or__3548__auto____15221 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15221))
{return or__3548__auto____15221;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15282 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15284 = cljs.core._get_method.call(null,mf,dispatch_val__15282);

if(cljs.core.truth_(target_fn__15284))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15282)));
}
return cljs.core.apply.call(null,target_fn__15284,args);
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
var this__15286 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15350 = this;
cljs.core.swap_BANG_.call(null,this__15350.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15350.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15350.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15350.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15355 = this;
cljs.core.swap_BANG_.call(null,this__15355.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15355.method_cache,this__15355.method_table,this__15355.cached_hierarchy,this__15355.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15356 = this;
cljs.core.swap_BANG_.call(null,this__15356.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15356.method_cache,this__15356.method_table,this__15356.cached_hierarchy,this__15356.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15358 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15358.cached_hierarchy),cljs.core.deref.call(null,this__15358.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15358.method_cache,this__15358.method_table,this__15358.cached_hierarchy,this__15358.hierarchy);
}
var temp__3695__auto____15362 = cljs.core.deref.call(null,this__15358.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15362))
{var target_fn__15363 = temp__3695__auto____15362;

return target_fn__15363;
} else
{var temp__3695__auto____15364 = cljs.core.find_and_cache_best_method.call(null,this__15358.name,dispatch_val,this__15358.hierarchy,this__15358.method_table,this__15358.prefer_table,this__15358.method_cache,this__15358.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15364))
{var target_fn__15365 = temp__3695__auto____15364;

return target_fn__15365;
} else
{return cljs.core.deref.call(null,this__15358.method_table).call(null,this__15358.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15366 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15366.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15366.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15366.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15366.method_cache,this__15366.method_table,this__15366.cached_hierarchy,this__15366.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15367 = this;
return cljs.core.deref.call(null,this__15367.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15368 = this;
return cljs.core.deref.call(null,this__15368.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15369 = this;
return cljs.core.do_dispatch.call(null,mf,this__15369.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15400__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15400 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15400__delegate.call(this, _, args);
};
G__15400.cljs$lang$maxFixedArity = 1;
G__15400.cljs$lang$applyTo = (function (arglist__15402){
var _ = cljs.core.first(arglist__15402);
var args = cljs.core.rest(arglist__15402);
return G__15400__delegate.call(this, _, args);
});
return G__15400;
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
