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
var or__3548__auto____7259 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
} else
{var or__3548__auto____7260 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
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
var _invoke__7614 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7318 = this$;

if(cljs.core.truth_(and__3546__auto____7318))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7318;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7615 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7327 = this$;

if(cljs.core.truth_(and__3546__auto____7327))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7327;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7616 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7335 = this$;

if(cljs.core.truth_(and__3546__auto____7335))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7335;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7617 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7350 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7618 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = this$;

if(cljs.core.truth_(and__3546__auto____7353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{var or__3548__auto____7358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{var or__3548__auto____7369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7374 = this$;

if(cljs.core.truth_(and__3546__auto____7374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{var or__3548__auto____7380 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7380))
{return or__3548__auto____7380;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7390 = this$;

if(cljs.core.truth_(and__3546__auto____7390))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7390;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{var or__3548__auto____7394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7623 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7396 = this$;

if(cljs.core.truth_(and__3546__auto____7396))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7396;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7411 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7624 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7416 = this$;

if(cljs.core.truth_(and__3546__auto____7416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7419 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{var or__3548__auto____7422 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7424 = this$;

if(cljs.core.truth_(and__3546__auto____7424))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7424;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7428 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{var or__3548__auto____7431 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7436 = this$;

if(cljs.core.truth_(and__3546__auto____7436))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7436;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7440 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{var or__3548__auto____7444 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7449 = this$;

if(cljs.core.truth_(and__3546__auto____7449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{var or__3548__auto____7456 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7461 = this$;

if(cljs.core.truth_(and__3546__auto____7461))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7461;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7464 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{var or__3548__auto____7466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{var or__3548__auto____7496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7501 = this$;

if(cljs.core.truth_(and__3546__auto____7501))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7501;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7505 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
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
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7514 = this$;

if(cljs.core.truth_(and__3546__auto____7514))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7514;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7517 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{var or__3548__auto____7520 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7524 = this$;

if(cljs.core.truth_(and__3546__auto____7524))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7524;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7529 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7529))
{return or__3548__auto____7529;
} else
{var or__3548__auto____7531 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7540 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{var or__3548__auto____7543 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7547 = this$;

if(cljs.core.truth_(and__3546__auto____7547))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7547;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7549 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{var or__3548__auto____7552 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7552))
{return or__3548__auto____7552;
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
return _invoke__7614.call(this,this$);
case  2 :
return _invoke__7615.call(this,this$,a);
case  3 :
return _invoke__7616.call(this,this$,a,b);
case  4 :
return _invoke__7617.call(this,this$,a,b,c);
case  5 :
return _invoke__7618.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7619.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7623.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7624.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7625.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7689 = coll;

if(cljs.core.truth_(and__3546__auto____7689))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7689;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7695 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{var or__3548__auto____7696 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7700 = coll;

if(cljs.core.truth_(and__3546__auto____7700))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7700;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7701 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{var or__3548__auto____7702 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = coll;

if(cljs.core.truth_(and__3546__auto____7703))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7703;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7704 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7705 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
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
var _nth__7773 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7712 = coll;

if(cljs.core.truth_(and__3546__auto____7712))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7712;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7764 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{var or__3548__auto____7765 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7765))
{return or__3548__auto____7765;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7774 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7766 = coll;

if(cljs.core.truth_(and__3546__auto____7766))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7766;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7768 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{var or__3548__auto____7770 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
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
return _nth__7773.call(this,coll,n);
case  3 :
return _nth__7774.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7790 = coll;

if(cljs.core.truth_(and__3546__auto____7790))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7790;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7792 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7794 = coll;

if(cljs.core.truth_(and__3546__auto____7794))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7794;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7817 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
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
var _lookup__7847 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7832 = o;

if(cljs.core.truth_(and__3546__auto____7832))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7832;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7834 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7834))
{return or__3548__auto____7834;
} else
{var or__3548__auto____7836 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7849 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = o;

if(cljs.core.truth_(and__3546__auto____7841))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7841;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7846 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
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
return _lookup__7847.call(this,o,k);
case  3 :
return _lookup__7849.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7864 = coll;

if(cljs.core.truth_(and__3546__auto____7864))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7864;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7869 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
} else
{var or__3548__auto____7871 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7875 = coll;

if(cljs.core.truth_(and__3546__auto____7875))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7875;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7880 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{var or__3548__auto____7883 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7892 = coll;

if(cljs.core.truth_(and__3546__auto____7892))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7892;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7893 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{var or__3548__auto____7895 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7903 = coll;

if(cljs.core.truth_(and__3546__auto____7903))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7903;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7909 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7917 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
} else
{var or__3548__auto____7920 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7925 = coll;

if(cljs.core.truth_(and__3546__auto____7925))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7925;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7932 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7942 = coll;

if(cljs.core.truth_(and__3546__auto____7942))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7942;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8018 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8028 = o;

if(cljs.core.truth_(and__3546__auto____8028))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8028;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8031 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8035 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = o;

if(cljs.core.truth_(and__3546__auto____8044))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8044;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8066 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{var or__3548__auto____8068 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8068))
{return or__3548__auto____8068;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8073 = o;

if(cljs.core.truth_(and__3546__auto____8073))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8073;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8075 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{var or__3548__auto____8078 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = o;

if(cljs.core.truth_(and__3546__auto____8082))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8082;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8084 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{var or__3548__auto____8085 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
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
var _reduce__8099 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = coll;

if(cljs.core.truth_(and__3546__auto____8088))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8088;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8090 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8100 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = coll;

if(cljs.core.truth_(and__3546__auto____8091))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8091;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8093 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{var or__3548__auto____8094 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
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
return _reduce__8099.call(this,coll,f);
case  3 :
return _reduce__8100.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8105 = o;

if(cljs.core.truth_(and__3546__auto____8105))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8105;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8109 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{var or__3548__auto____8110 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = o;

if(cljs.core.truth_(and__3546__auto____8141))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8141;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8146 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{var or__3548__auto____8147 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8155 = o;

if(cljs.core.truth_(and__3546__auto____8155))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8155;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8156 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
} else
{var or__3548__auto____8157 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
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
if(cljs.core.truth_((function (){var and__3546__auto____8165 = o;

if(cljs.core.truth_(and__3546__auto____8165))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8165;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8166 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8166))
{return or__3548__auto____8166;
} else
{var or__3548__auto____8167 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8170 = d;

if(cljs.core.truth_(and__3546__auto____8170))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8170;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8172 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{var or__3548__auto____8173 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8173))
{return or__3548__auto____8173;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8175 = this$;

if(cljs.core.truth_(and__3546__auto____8175))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8175;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8178 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8178))
{return or__3548__auto____8178;
} else
{var or__3548__auto____8179 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8179))
{return or__3548__auto____8179;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8180 = this$;

if(cljs.core.truth_(and__3546__auto____8180))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8180;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8181 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{var or__3548__auto____8182 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8182))
{return or__3548__auto____8182;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8184 = this$;

if(cljs.core.truth_(and__3546__auto____8184))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8184;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8187 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8187))
{return or__3548__auto____8187;
} else
{var or__3548__auto____8188 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8188))
{return or__3548__auto____8188;
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
var G__8267 = null;
var G__8267__8268 = (function (o,k){
return null;
});
var G__8267__8269 = (function (o,k,not_found){
return not_found;
});
G__8267 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8267__8268.call(this,o,k);
case  3 :
return G__8267__8269.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8267;
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
var G__8276 = null;
var G__8276__8277 = (function (_,f){
return f.call(null);
});
var G__8276__8278 = (function (_,f,start){
return start;
});
G__8276 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8276__8277.call(this,_,f);
case  3 :
return G__8276__8278.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8276;
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
var G__8292 = null;
var G__8292__8293 = (function (_,n){
return null;
});
var G__8292__8294 = (function (_,n,not_found){
return not_found;
});
G__8292 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8292__8293.call(this,_,n);
case  3 :
return G__8292__8294.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8292;
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
{var val__8304 = cljs.core._nth.call(null,cicoll,0);
var n__8305 = 1;

while(true){
if(cljs.core.truth_((n__8305 < cljs.core._count.call(null,cicoll))))
{{
var G__8352 = f.call(null,val__8304,cljs.core._nth.call(null,cicoll,n__8305));
var G__8353 = (n__8305 + 1);
val__8304 = G__8352;
n__8305 = G__8353;
continue;
}
} else
{return val__8304;
}
break;
}
}
});
var ci_reduce__8346 = (function (cicoll,f,val){
var val__8308 = val;
var n__8309 = 0;

while(true){
if(cljs.core.truth_((n__8309 < cljs.core._count.call(null,cicoll))))
{{
var G__8357 = f.call(null,val__8308,cljs.core._nth.call(null,cicoll,n__8309));
var G__8430 = (n__8309 + 1);
val__8308 = G__8357;
n__8309 = G__8430;
continue;
}
} else
{return val__8308;
}
break;
}
});
var ci_reduce__8347 = (function (cicoll,f,val,idx){
var val__8312 = val;
var n__8314 = idx;

while(true){
if(cljs.core.truth_((n__8314 < cljs.core._count.call(null,cicoll))))
{{
var G__8431 = f.call(null,val__8312,cljs.core._nth.call(null,cicoll,n__8314));
var G__8432 = (n__8314 + 1);
val__8312 = G__8431;
n__8314 = G__8432;
continue;
}
} else
{return val__8312;
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
var this__8433 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8466 = null;
var G__8466__8467 = (function (_,f){
var this__8434 = this;
return cljs.core.ci_reduce.call(null,this__8434.a,f,(this__8434.a[this__8434.i]),(this__8434.i + 1));
});
var G__8466__8468 = (function (_,f,start){
var this__8435 = this;
return cljs.core.ci_reduce.call(null,this__8435.a,f,start,this__8435.i);
});
G__8466 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8466__8467.call(this,_,f);
case  3 :
return G__8466__8468.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8466;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8436 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8437 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8474 = null;
var G__8474__8475 = (function (coll,n){
var this__8438 = this;
var i__8439 = (n + this__8438.i);

if(cljs.core.truth_((i__8439 < this__8438.a.length)))
{return (this__8438.a[i__8439]);
} else
{return null;
}
});
var G__8474__8476 = (function (coll,n,not_found){
var this__8440 = this;
var i__8445 = (n + this__8440.i);

if(cljs.core.truth_((i__8445 < this__8440.a.length)))
{return (this__8440.a[i__8445]);
} else
{return not_found;
}
});
G__8474 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8474__8475.call(this,coll,n);
case  3 :
return G__8474__8476.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8474;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8446 = this;
return (this__8446.a.length - this__8446.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8451 = this;
return (this__8451.a[this__8451.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8452 = this;
if(cljs.core.truth_(((this__8452.i + 1) < this__8452.a.length)))
{return (new cljs.core.IndexedSeq(this__8452.a,(this__8452.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8461 = this;
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
var G__8485 = null;
var G__8485__8486 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8485__8487 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8485 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8485__8486.call(this,array,f);
case  3 :
return G__8485__8487.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8485;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8489 = null;
var G__8489__8491 = (function (array,k){
return (array[k]);
});
var G__8489__8492 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8489 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8489__8491.call(this,array,k);
case  3 :
return G__8489__8492.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8489;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8495 = null;
var G__8495__8496 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8495__8497 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8495 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8495__8496.call(this,array,n);
case  3 :
return G__8495__8497.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8495;
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
var temp__3698__auto____8512 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8512))
{var s__8514 = temp__3698__auto____8512;

return cljs.core._first.call(null,s__8514);
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
var G__8527 = cljs.core.next.call(null,s);
s = G__8527;
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
var s__8535 = cljs.core.seq.call(null,x);
var n__8536 = 0;

while(true){
if(cljs.core.truth_(s__8535))
{{
var G__8540 = cljs.core.next.call(null,s__8535);
var G__8541 = (n__8536 + 1);
s__8535 = G__8540;
n__8536 = G__8541;
continue;
}
} else
{return n__8536;
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
var G__8569__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8570 = conj.call(null,coll,x);
var G__8571 = cljs.core.first.call(null,xs);
var G__8573 = cljs.core.next.call(null,xs);
coll = G__8570;
x = G__8571;
xs = G__8573;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8569 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8569__delegate.call(this, coll, x, xs);
};
G__8569.cljs$lang$maxFixedArity = 2;
G__8569.cljs$lang$applyTo = (function (arglist__8575){
var coll = cljs.core.first(arglist__8575);
var x = cljs.core.first(cljs.core.next(arglist__8575));
var xs = cljs.core.rest(cljs.core.next(arglist__8575));
return G__8569__delegate.call(this, coll, x, xs);
});
return G__8569;
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
var nth__8600 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8601 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8600.call(this,coll,n);
case  3 :
return nth__8601.call(this,coll,n,not_found);
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
var get__8616 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8617 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8616.call(this,o,k);
case  3 :
return get__8617.call(this,o,k,not_found);
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
var assoc__8628 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8629 = (function() { 
var G__8642__delegate = function (coll,k,v,kvs){
while(true){
var ret__8624 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8643 = ret__8624;
var G__8644 = cljs.core.first.call(null,kvs);
var G__8645 = cljs.core.second.call(null,kvs);
var G__8647 = cljs.core.nnext.call(null,kvs);
coll = G__8643;
k = G__8644;
v = G__8645;
kvs = G__8647;
continue;
}
} else
{return ret__8624;
}
break;
}
};
var G__8642 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8642__delegate.call(this, coll, k, v, kvs);
};
G__8642.cljs$lang$maxFixedArity = 3;
G__8642.cljs$lang$applyTo = (function (arglist__8653){
var coll = cljs.core.first(arglist__8653);
var k = cljs.core.first(cljs.core.next(arglist__8653));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8653)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8653)));
return G__8642__delegate.call(this, coll, k, v, kvs);
});
return G__8642;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8628.call(this,coll,k,v);
default:
return assoc__8629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8629.cljs$lang$applyTo;
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
var dissoc__8665 = (function (coll){
return coll;
});
var dissoc__8666 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8667 = (function() { 
var G__8673__delegate = function (coll,k,ks){
while(true){
var ret__8659 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8675 = ret__8659;
var G__8676 = cljs.core.first.call(null,ks);
var G__8677 = cljs.core.next.call(null,ks);
coll = G__8675;
k = G__8676;
ks = G__8677;
continue;
}
} else
{return ret__8659;
}
break;
}
};
var G__8673 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8673__delegate.call(this, coll, k, ks);
};
G__8673.cljs$lang$maxFixedArity = 2;
G__8673.cljs$lang$applyTo = (function (arglist__8683){
var coll = cljs.core.first(arglist__8683);
var k = cljs.core.first(cljs.core.next(arglist__8683));
var ks = cljs.core.rest(cljs.core.next(arglist__8683));
return G__8673__delegate.call(this, coll, k, ks);
});
return G__8673;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8665.call(this,coll);
case  2 :
return dissoc__8666.call(this,coll,k);
default:
return dissoc__8667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8667.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8690 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8694 = x__445__auto____8690;

if(cljs.core.truth_(and__3546__auto____8694))
{var and__3546__auto____8700 = x__445__auto____8690.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8700))
{return cljs.core.not.call(null,x__445__auto____8690.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8700;
}
} else
{return and__3546__auto____8694;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8690);
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
var disj__8727 = (function (coll){
return coll;
});
var disj__8728 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8729 = (function() { 
var G__8736__delegate = function (coll,k,ks){
while(true){
var ret__8724 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8739 = ret__8724;
var G__8740 = cljs.core.first.call(null,ks);
var G__8741 = cljs.core.next.call(null,ks);
coll = G__8739;
k = G__8740;
ks = G__8741;
continue;
}
} else
{return ret__8724;
}
break;
}
};
var G__8736 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8736__delegate.call(this, coll, k, ks);
};
G__8736.cljs$lang$maxFixedArity = 2;
G__8736.cljs$lang$applyTo = (function (arglist__8745){
var coll = cljs.core.first(arglist__8745);
var k = cljs.core.first(cljs.core.next(arglist__8745));
var ks = cljs.core.rest(cljs.core.next(arglist__8745));
return G__8736__delegate.call(this, coll, k, ks);
});
return G__8736;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8727.call(this,coll);
case  2 :
return disj__8728.call(this,coll,k);
default:
return disj__8729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8729.cljs$lang$applyTo;
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
{var x__445__auto____8755 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8757 = x__445__auto____8755;

if(cljs.core.truth_(and__3546__auto____8757))
{var and__3546__auto____8758 = x__445__auto____8755.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8758))
{return cljs.core.not.call(null,x__445__auto____8755.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8758;
}
} else
{return and__3546__auto____8757;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8755);
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
{var x__445__auto____8765 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8766 = x__445__auto____8765;

if(cljs.core.truth_(and__3546__auto____8766))
{var and__3546__auto____8767 = x__445__auto____8765.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8767))
{return cljs.core.not.call(null,x__445__auto____8765.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8767;
}
} else
{return and__3546__auto____8766;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8765);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8774 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8775 = x__445__auto____8774;

if(cljs.core.truth_(and__3546__auto____8775))
{var and__3546__auto____8776 = x__445__auto____8774.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8776))
{return cljs.core.not.call(null,x__445__auto____8774.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8776;
}
} else
{return and__3546__auto____8775;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8774);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8778 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8779 = x__445__auto____8778;

if(cljs.core.truth_(and__3546__auto____8779))
{var and__3546__auto____8780 = x__445__auto____8778.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8780))
{return cljs.core.not.call(null,x__445__auto____8778.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8780;
}
} else
{return and__3546__auto____8779;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8778);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8790 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8791 = x__445__auto____8790;

if(cljs.core.truth_(and__3546__auto____8791))
{var and__3546__auto____8792 = x__445__auto____8790.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8792))
{return cljs.core.not.call(null,x__445__auto____8790.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8792;
}
} else
{return and__3546__auto____8791;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8790);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8796 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8797 = x__445__auto____8796;

if(cljs.core.truth_(and__3546__auto____8797))
{var and__3546__auto____8798 = x__445__auto____8796.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8798))
{return cljs.core.not.call(null,x__445__auto____8796.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8798;
}
} else
{return and__3546__auto____8797;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8796);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8800 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8802 = x__445__auto____8800;

if(cljs.core.truth_(and__3546__auto____8802))
{var and__3546__auto____8803 = x__445__auto____8800.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8800.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8802;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8800);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8823 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8823.push(key);
}));
return keys__8823;
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
{var x__445__auto____8833 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8835 = x__445__auto____8833;

if(cljs.core.truth_(and__3546__auto____8835))
{var and__3546__auto____8837 = x__445__auto____8833.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8833.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8835;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8833);
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
var and__3546__auto____8850 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8850))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8851 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8851))
{return or__3548__auto____8851;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8850;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8854 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8854))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8854;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8858 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8858))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8858;
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
var and__3546__auto____8872 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8872))
{return (n == n.toFixed());
} else
{return and__3546__auto____8872;
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
if(cljs.core.truth_((function (){var and__3546__auto____8887 = coll;

if(cljs.core.truth_(and__3546__auto____8887))
{var and__3546__auto____8888 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8888))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8888;
}
} else
{return and__3546__auto____8887;
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
var distinct_QMARK___8900 = (function (x){
return true;
});
var distinct_QMARK___8901 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8902 = (function() { 
var G__8904__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8893 = cljs.core.set([y,x]);
var xs__8894 = more;

while(true){
var x__8896 = cljs.core.first.call(null,xs__8894);
var etc__8897 = cljs.core.next.call(null,xs__8894);

if(cljs.core.truth_(xs__8894))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8893,x__8896)))
{return false;
} else
{{
var G__8907 = cljs.core.conj.call(null,s__8893,x__8896);
var G__8908 = etc__8897;
s__8893 = G__8907;
xs__8894 = G__8908;
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
var G__8904 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8904__delegate.call(this, x, y, more);
};
G__8904.cljs$lang$maxFixedArity = 2;
G__8904.cljs$lang$applyTo = (function (arglist__8910){
var x = cljs.core.first(arglist__8910);
var y = cljs.core.first(cljs.core.next(arglist__8910));
var more = cljs.core.rest(cljs.core.next(arglist__8910));
return G__8904__delegate.call(this, x, y, more);
});
return G__8904;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8900.call(this,x);
case  2 :
return distinct_QMARK___8901.call(this,x,y);
default:
return distinct_QMARK___8902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8902.cljs$lang$applyTo;
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
var r__8914 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8914)))
{return r__8914;
} else
{if(cljs.core.truth_(r__8914))
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
var sort__8920 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8921 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8919 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8919,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8919);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8920.call(this,comp);
case  2 :
return sort__8921.call(this,comp,coll);
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
var sort_by__8926 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8927 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8926.call(this,keyfn,comp);
case  3 :
return sort_by__8927.call(this,keyfn,comp,coll);
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
var reduce__8940 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8941 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8940.call(this,f,val);
case  3 :
return reduce__8941.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8964 = (function (f,coll){
var temp__3695__auto____8953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8953))
{var s__8955 = temp__3695__auto____8953;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8955),cljs.core.next.call(null,s__8955));
} else
{return f.call(null);
}
});
var seq_reduce__8966 = (function (f,val,coll){
var val__8956 = val;
var coll__8960 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8960))
{{
var G__8984 = f.call(null,val__8956,cljs.core.first.call(null,coll__8960));
var G__8985 = cljs.core.next.call(null,coll__8960);
val__8956 = G__8984;
coll__8960 = G__8985;
continue;
}
} else
{return val__8956;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8964.call(this,f,val);
case  3 :
return seq_reduce__8966.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8993 = null;
var G__8993__8994 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8993__8995 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8993 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8993__8994.call(this,coll,f);
case  3 :
return G__8993__8995.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8993;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9066 = (function (){
return 0;
});
var _PLUS___9067 = (function (x){
return x;
});
var _PLUS___9068 = (function (x,y){
return (x + y);
});
var _PLUS___9069 = (function() { 
var G__9072__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9072 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9072__delegate.call(this, x, y, more);
};
G__9072.cljs$lang$maxFixedArity = 2;
G__9072.cljs$lang$applyTo = (function (arglist__9075){
var x = cljs.core.first(arglist__9075);
var y = cljs.core.first(cljs.core.next(arglist__9075));
var more = cljs.core.rest(cljs.core.next(arglist__9075));
return G__9072__delegate.call(this, x, y, more);
});
return G__9072;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9066.call(this);
case  1 :
return _PLUS___9067.call(this,x);
case  2 :
return _PLUS___9068.call(this,x,y);
default:
return _PLUS___9069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9069.cljs$lang$applyTo;
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
var ___9080 = (function (x){
return (- x);
});
var ___9081 = (function (x,y){
return (x - y);
});
var ___9082 = (function() { 
var G__9090__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9080.call(this,x);
case  2 :
return ___9081.call(this,x,y);
default:
return ___9082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9082.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9093 = (function (){
return 1;
});
var _STAR___9094 = (function (x){
return x;
});
var _STAR___9095 = (function (x,y){
return (x * y);
});
var _STAR___9096 = (function() { 
var G__9099__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9099 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9099__delegate.call(this, x, y, more);
};
G__9099.cljs$lang$maxFixedArity = 2;
G__9099.cljs$lang$applyTo = (function (arglist__9101){
var x = cljs.core.first(arglist__9101);
var y = cljs.core.first(cljs.core.next(arglist__9101));
var more = cljs.core.rest(cljs.core.next(arglist__9101));
return G__9099__delegate.call(this, x, y, more);
});
return G__9099;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9093.call(this);
case  1 :
return _STAR___9094.call(this,x);
case  2 :
return _STAR___9095.call(this,x,y);
default:
return _STAR___9096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9096.cljs$lang$applyTo;
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
var _SLASH___9104 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9105 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9106 = (function() { 
var G__9110__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9110__delegate.call(this, x, y, more);
};
G__9110.cljs$lang$maxFixedArity = 2;
G__9110.cljs$lang$applyTo = (function (arglist__9113){
var x = cljs.core.first(arglist__9113);
var y = cljs.core.first(cljs.core.next(arglist__9113));
var more = cljs.core.rest(cljs.core.next(arglist__9113));
return G__9110__delegate.call(this, x, y, more);
});
return G__9110;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9104.call(this,x);
case  2 :
return _SLASH___9105.call(this,x,y);
default:
return _SLASH___9106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9106.cljs$lang$applyTo;
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
var _LT___9129 = (function (x){
return true;
});
var _LT___9130 = (function (x,y){
return (x < y);
});
var _LT___9132 = (function() { 
var G__9135__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9136 = y;
var G__9137 = cljs.core.first.call(null,more);
var G__9139 = cljs.core.next.call(null,more);
x = G__9136;
y = G__9137;
more = G__9139;
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
var G__9135 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9135__delegate.call(this, x, y, more);
};
G__9135.cljs$lang$maxFixedArity = 2;
G__9135.cljs$lang$applyTo = (function (arglist__9142){
var x = cljs.core.first(arglist__9142);
var y = cljs.core.first(cljs.core.next(arglist__9142));
var more = cljs.core.rest(cljs.core.next(arglist__9142));
return G__9135__delegate.call(this, x, y, more);
});
return G__9135;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9129.call(this,x);
case  2 :
return _LT___9130.call(this,x,y);
default:
return _LT___9132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9132.cljs$lang$applyTo;
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
var _LT__EQ___9144 = (function (x){
return true;
});
var _LT__EQ___9145 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9146 = (function() { 
var G__9149__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9150 = y;
var G__9151 = cljs.core.first.call(null,more);
var G__9152 = cljs.core.next.call(null,more);
x = G__9150;
y = G__9151;
more = G__9152;
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
var G__9149 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9149__delegate.call(this, x, y, more);
};
G__9149.cljs$lang$maxFixedArity = 2;
G__9149.cljs$lang$applyTo = (function (arglist__9153){
var x = cljs.core.first(arglist__9153);
var y = cljs.core.first(cljs.core.next(arglist__9153));
var more = cljs.core.rest(cljs.core.next(arglist__9153));
return G__9149__delegate.call(this, x, y, more);
});
return G__9149;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9144.call(this,x);
case  2 :
return _LT__EQ___9145.call(this,x,y);
default:
return _LT__EQ___9146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9146.cljs$lang$applyTo;
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
var _GT___9195 = (function (x){
return true;
});
var _GT___9196 = (function (x,y){
return (x > y);
});
var _GT___9197 = (function() { 
var G__9204__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9214 = y;
var G__9215 = cljs.core.first.call(null,more);
var G__9216 = cljs.core.next.call(null,more);
x = G__9214;
y = G__9215;
more = G__9216;
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
var G__9204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9204__delegate.call(this, x, y, more);
};
G__9204.cljs$lang$maxFixedArity = 2;
G__9204.cljs$lang$applyTo = (function (arglist__9220){
var x = cljs.core.first(arglist__9220);
var y = cljs.core.first(cljs.core.next(arglist__9220));
var more = cljs.core.rest(cljs.core.next(arglist__9220));
return G__9204__delegate.call(this, x, y, more);
});
return G__9204;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9195.call(this,x);
case  2 :
return _GT___9196.call(this,x,y);
default:
return _GT___9197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9197.cljs$lang$applyTo;
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
var _GT__EQ___9236 = (function (x){
return true;
});
var _GT__EQ___9237 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9238 = (function() { 
var G__9240__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9242 = y;
var G__9243 = cljs.core.first.call(null,more);
var G__9244 = cljs.core.next.call(null,more);
x = G__9242;
y = G__9243;
more = G__9244;
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
var G__9240 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9240__delegate.call(this, x, y, more);
};
G__9240.cljs$lang$maxFixedArity = 2;
G__9240.cljs$lang$applyTo = (function (arglist__9246){
var x = cljs.core.first(arglist__9246);
var y = cljs.core.first(cljs.core.next(arglist__9246));
var more = cljs.core.rest(cljs.core.next(arglist__9246));
return G__9240__delegate.call(this, x, y, more);
});
return G__9240;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9236.call(this,x);
case  2 :
return _GT__EQ___9237.call(this,x,y);
default:
return _GT__EQ___9238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9238.cljs$lang$applyTo;
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
var max__9258 = (function (x){
return x;
});
var max__9259 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9260 = (function() { 
var G__9266__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9266 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9266__delegate.call(this, x, y, more);
};
G__9266.cljs$lang$maxFixedArity = 2;
G__9266.cljs$lang$applyTo = (function (arglist__9268){
var x = cljs.core.first(arglist__9268);
var y = cljs.core.first(cljs.core.next(arglist__9268));
var more = cljs.core.rest(cljs.core.next(arglist__9268));
return G__9266__delegate.call(this, x, y, more);
});
return G__9266;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9258.call(this,x);
case  2 :
return max__9259.call(this,x,y);
default:
return max__9260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9260.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9276 = (function (x){
return x;
});
var min__9277 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9278 = (function() { 
var G__9285__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9285 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9285__delegate.call(this, x, y, more);
};
G__9285.cljs$lang$maxFixedArity = 2;
G__9285.cljs$lang$applyTo = (function (arglist__9287){
var x = cljs.core.first(arglist__9287);
var y = cljs.core.first(cljs.core.next(arglist__9287));
var more = cljs.core.rest(cljs.core.next(arglist__9287));
return G__9285__delegate.call(this, x, y, more);
});
return G__9285;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9276.call(this,x);
case  2 :
return min__9277.call(this,x,y);
default:
return min__9278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9278.cljs$lang$applyTo;
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
var rem__9295 = (n % d);

return cljs.core.fix.call(null,((n - rem__9295) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9298 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9298));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9307 = (function (){
return Math.random.call(null);
});
var rand__9308 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9307.call(this);
case  1 :
return rand__9308.call(this,n);
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
var _EQ__EQ___9362 = (function (x){
return true;
});
var _EQ__EQ___9363 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9364 = (function() { 
var G__9369__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9370 = y;
var G__9371 = cljs.core.first.call(null,more);
var G__9372 = cljs.core.next.call(null,more);
x = G__9370;
y = G__9371;
more = G__9372;
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
var G__9369 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9369__delegate.call(this, x, y, more);
};
G__9369.cljs$lang$maxFixedArity = 2;
G__9369.cljs$lang$applyTo = (function (arglist__9380){
var x = cljs.core.first(arglist__9380);
var y = cljs.core.first(cljs.core.next(arglist__9380));
var more = cljs.core.rest(cljs.core.next(arglist__9380));
return G__9369__delegate.call(this, x, y, more);
});
return G__9369;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9362.call(this,x);
case  2 :
return _EQ__EQ___9363.call(this,x,y);
default:
return _EQ__EQ___9364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9364.cljs$lang$applyTo;
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
var n__9423 = n;
var xs__9426 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9427 = xs__9426;

if(cljs.core.truth_(and__3546__auto____9427))
{return (n__9423 > 0);
} else
{return and__3546__auto____9427;
}
})()))
{{
var G__9430 = (n__9423 - 1);
var G__9432 = cljs.core.next.call(null,xs__9426);
n__9423 = G__9430;
xs__9426 = G__9432;
continue;
}
} else
{return xs__9426;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9459 = null;
var G__9459__9461 = (function (coll,n){
var temp__3695__auto____9441 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9441))
{var xs__9451 = temp__3695__auto____9441;

return cljs.core.first.call(null,xs__9451);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9459__9463 = (function (coll,n,not_found){
var temp__3695__auto____9453 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9453))
{var xs__9457 = temp__3695__auto____9453;

return cljs.core.first.call(null,xs__9457);
} else
{return not_found;
}
});
G__9459 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9459__9461.call(this,coll,n);
case  3 :
return G__9459__9463.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9459;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9475 = (function (){
return "";
});
var str_STAR___9477 = (function (x){
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
var str_STAR___9479 = (function() { 
var G__9481__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9482 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9484 = cljs.core.next.call(null,more);
sb = G__9482;
more = G__9484;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9481 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9481__delegate.call(this, x, ys);
};
G__9481.cljs$lang$maxFixedArity = 1;
G__9481.cljs$lang$applyTo = (function (arglist__9485){
var x = cljs.core.first(arglist__9485);
var ys = cljs.core.rest(arglist__9485);
return G__9481__delegate.call(this, x, ys);
});
return G__9481;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9475.call(this);
case  1 :
return str_STAR___9477.call(this,x);
default:
return str_STAR___9479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9479.cljs$lang$applyTo;
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
var str__9499 = (function (){
return "";
});
var str__9500 = (function (x){
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
var str__9501 = (function() { 
var G__9507__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9507 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9507__delegate.call(this, x, ys);
};
G__9507.cljs$lang$maxFixedArity = 1;
G__9507.cljs$lang$applyTo = (function (arglist__9570){
var x = cljs.core.first(arglist__9570);
var ys = cljs.core.rest(arglist__9570);
return G__9507__delegate.call(this, x, ys);
});
return G__9507;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9499.call(this);
case  1 :
return str__9500.call(this,x);
default:
return str__9501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9501.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9572 = (function (s,start){
return s.substring(start);
});
var subs__9575 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9572.call(this,s,start);
case  3 :
return subs__9575.call(this,s,start,end);
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
var symbol__9586 = (function (name){
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
var symbol__9587 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9586.call(this,ns);
case  2 :
return symbol__9587.call(this,ns,name);
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
var keyword__9591 = (function (name){
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
var keyword__9592 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9591.call(this,ns);
case  2 :
return keyword__9592.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9602 = cljs.core.seq.call(null,x);
var ys__9604 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9602)))
{return cljs.core.nil_QMARK_.call(null,ys__9604);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9604)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9602),cljs.core.first.call(null,ys__9604))))
{{
var G__9609 = cljs.core.next.call(null,xs__9602);
var G__9610 = cljs.core.next.call(null,ys__9604);
xs__9602 = G__9609;
ys__9604 = G__9610;
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
return cljs.core.reduce.call(null,(function (p1__9616_SHARP_,p2__9617_SHARP_){
return cljs.core.hash_combine.call(null,p1__9616_SHARP_,cljs.core.hash.call(null,p2__9617_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9642__9645 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9642__9645))
{var G__9647__9649 = cljs.core.first.call(null,G__9642__9645);
var vec__9648__9650 = G__9647__9649;
var key_name__9651 = cljs.core.nth.call(null,vec__9648__9650,0,null);
var f__9652 = cljs.core.nth.call(null,vec__9648__9650,1,null);
var G__9642__9653 = G__9642__9645;

var G__9647__9654 = G__9647__9649;
var G__9642__9655 = G__9642__9653;

while(true){
var vec__9656__9657 = G__9647__9654;
var key_name__9659 = cljs.core.nth.call(null,vec__9656__9657,0,null);
var f__9660 = cljs.core.nth.call(null,vec__9656__9657,1,null);
var G__9642__9661 = G__9642__9655;

var str_name__9662 = cljs.core.name.call(null,key_name__9659);

obj[str_name__9662] = f__9660;
var temp__3698__auto____9663 = cljs.core.next.call(null,G__9642__9661);

if(cljs.core.truth_(temp__3698__auto____9663))
{var G__9642__9664 = temp__3698__auto____9663;

{
var G__9665 = cljs.core.first.call(null,G__9642__9664);
var G__9666 = G__9642__9664;
G__9647__9654 = G__9665;
G__9642__9655 = G__9666;
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
var this__9671 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9673 = this;
return (new cljs.core.List(this__9673.meta,o,coll,(this__9673.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9675 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9676 = this;
return this__9676.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9763 = this;
return this__9763.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9764 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9766 = this;
return this__9766.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9768 = this;
return this__9768.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9772 = this;
return (new cljs.core.List(meta,this__9772.first,this__9772.rest,this__9772.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9773 = this;
return this__9773.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9774 = this;
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
var this__9781 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9783 = this;
return (new cljs.core.List(this__9783.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9785 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9786 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9788 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9790 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9791 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9792 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9793 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9794 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9799 = this;
return this__9799.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9800 = this;
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
list.cljs$lang$applyTo = (function (arglist__9869){
var items = cljs.core.seq( arglist__9869 );;
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
var this__9876 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9877 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9878 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9879 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9879.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9880 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9913 = this;
return this__9913.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9914 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9914.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9914.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9917 = this;
return this__9917.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9920 = this;
return (new cljs.core.Cons(meta,this__9920.first,this__9920.rest));
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
var G__9965 = null;
var G__9965__9966 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9965__9967 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9965 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9965__9966.call(this,string,f);
case  3 :
return G__9965__9967.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9965;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9972 = null;
var G__9972__9973 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9972__9974 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9972 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9972__9973.call(this,string,k);
case  3 :
return G__9972__9974.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9972;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9977 = null;
var G__9977__9978 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9977__9979 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9977 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9977__9978.call(this,string,n);
case  3 :
return G__9977__9979.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9977;
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
var G__10009 = null;
var G__10009__10010 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10009__10011 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10009 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10009__10010.call(this,this$,coll);
case  3 :
return G__10009__10011.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10009;
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
var this__10078 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10079 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10080 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10081 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10081.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10082 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10083 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10085 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10086 = this;
return this__10086.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10087 = this;
return (new cljs.core.LazySeq(meta,this__10087.realized,this__10087.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10089 = cljs.core.array.call(null);

var s__10090 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10090)))
{ary__10089.push(cljs.core.first.call(null,s__10090));
{
var G__10093 = cljs.core.next.call(null,s__10090);
s__10090 = G__10093;
continue;
}
} else
{return ary__10089;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10094 = s;
var i__10095 = n;
var sum__10096 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10097 = (i__10095 > 0);

if(cljs.core.truth_(and__3546__auto____10097))
{return cljs.core.seq.call(null,s__10094);
} else
{return and__3546__auto____10097;
}
})()))
{{
var G__10098 = cljs.core.next.call(null,s__10094);
var G__10099 = (i__10095 - 1);
var G__10100 = (sum__10096 + 1);
s__10094 = G__10098;
i__10095 = G__10099;
sum__10096 = G__10100;
continue;
}
} else
{return sum__10096;
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
var concat__10163 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10164 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10165 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10106 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10106))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10106),concat.call(null,cljs.core.rest.call(null,s__10106),y));
} else
{return y;
}
})));
});
var concat__10166 = (function() { 
var G__10168__delegate = function (x,y,zs){
var cat__10162 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10161 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10161))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10161),cat.call(null,cljs.core.rest.call(null,xys__10161),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10162.call(null,concat.call(null,x,y),zs);
};
var G__10168 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10168__delegate.call(this, x, y, zs);
};
G__10168.cljs$lang$maxFixedArity = 2;
G__10168.cljs$lang$applyTo = (function (arglist__10171){
var x = cljs.core.first(arglist__10171);
var y = cljs.core.first(cljs.core.next(arglist__10171));
var zs = cljs.core.rest(cljs.core.next(arglist__10171));
return G__10168__delegate.call(this, x, y, zs);
});
return G__10168;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10163.call(this);
case  1 :
return concat__10164.call(this,x);
case  2 :
return concat__10165.call(this,x,y);
default:
return concat__10166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10166.cljs$lang$applyTo;
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
var list_STAR___10211 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10212 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10213 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10214 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10215 = (function() { 
var G__10218__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10218 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10218__delegate.call(this, a, b, c, d, more);
};
G__10218.cljs$lang$maxFixedArity = 4;
G__10218.cljs$lang$applyTo = (function (arglist__10219){
var a = cljs.core.first(arglist__10219);
var b = cljs.core.first(cljs.core.next(arglist__10219));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10219)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10219))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10219))));
return G__10218__delegate.call(this, a, b, c, d, more);
});
return G__10218;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10211.call(this,a);
case  2 :
return list_STAR___10212.call(this,a,b);
case  3 :
return list_STAR___10213.call(this,a,b,c);
case  4 :
return list_STAR___10214.call(this,a,b,c,d);
default:
return list_STAR___10215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10215.cljs$lang$applyTo;
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
var apply__10254 = (function (f,args){
var fixed_arity__10226 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10226 + 1)) <= fixed_arity__10226)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10255 = (function (f,x,args){
var arglist__10230 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10231 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10230,fixed_arity__10231) <= fixed_arity__10231)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10230));
} else
{return f.cljs$lang$applyTo(arglist__10230);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10230));
}
});
var apply__10256 = (function (f,x,y,args){
var arglist__10235 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10236 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10235,fixed_arity__10236) <= fixed_arity__10236)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10235));
} else
{return f.cljs$lang$applyTo(arglist__10235);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10235));
}
});
var apply__10257 = (function (f,x,y,z,args){
var arglist__10244 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10245 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10244,fixed_arity__10245) <= fixed_arity__10245)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10244));
} else
{return f.cljs$lang$applyTo(arglist__10244);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10244));
}
});
var apply__10258 = (function() { 
var G__10282__delegate = function (f,a,b,c,d,args){
var arglist__10249 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10250 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10249,fixed_arity__10250) <= fixed_arity__10250)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10249));
} else
{return f.cljs$lang$applyTo(arglist__10249);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10249));
}
};
var G__10282 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10282__delegate.call(this, f, a, b, c, d, args);
};
G__10282.cljs$lang$maxFixedArity = 5;
G__10282.cljs$lang$applyTo = (function (arglist__10286){
var f = cljs.core.first(arglist__10286);
var a = cljs.core.first(cljs.core.next(arglist__10286));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10286)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10286))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10286)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10286)))));
return G__10282__delegate.call(this, f, a, b, c, d, args);
});
return G__10282;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10254.call(this,f,a);
case  3 :
return apply__10255.call(this,f,a,b);
case  4 :
return apply__10256.call(this,f,a,b,c);
case  5 :
return apply__10257.call(this,f,a,b,c,d);
default:
return apply__10258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10258.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10297){
var obj = cljs.core.first(arglist__10297);
var f = cljs.core.first(cljs.core.next(arglist__10297));
var args = cljs.core.rest(cljs.core.next(arglist__10297));
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
var not_EQ___10308 = (function (x){
return false;
});
var not_EQ___10309 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10310 = (function() { 
var G__10313__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10313 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10313__delegate.call(this, x, y, more);
};
G__10313.cljs$lang$maxFixedArity = 2;
G__10313.cljs$lang$applyTo = (function (arglist__10316){
var x = cljs.core.first(arglist__10316);
var y = cljs.core.first(cljs.core.next(arglist__10316));
var more = cljs.core.rest(cljs.core.next(arglist__10316));
return G__10313__delegate.call(this, x, y, more);
});
return G__10313;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10308.call(this,x);
case  2 :
return not_EQ___10309.call(this,x,y);
default:
return not_EQ___10310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10310.cljs$lang$applyTo;
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
var G__10327 = pred;
var G__10328 = cljs.core.next.call(null,coll);
pred = G__10327;
coll = G__10328;
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
{var or__3548__auto____10335 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10335))
{return or__3548__auto____10335;
} else
{{
var G__10340 = pred;
var G__10341 = cljs.core.next.call(null,coll);
pred = G__10340;
coll = G__10341;
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
var G__10359 = null;
var G__10359__10360 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10359__10362 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10359__10363 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10359__10364 = (function() { 
var G__10367__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10367 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10367__delegate.call(this, x, y, zs);
};
G__10367.cljs$lang$maxFixedArity = 2;
G__10367.cljs$lang$applyTo = (function (arglist__10369){
var x = cljs.core.first(arglist__10369);
var y = cljs.core.first(cljs.core.next(arglist__10369));
var zs = cljs.core.rest(cljs.core.next(arglist__10369));
return G__10367__delegate.call(this, x, y, zs);
});
return G__10367;
})()
;
G__10359 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10359__10360.call(this);
case  1 :
return G__10359__10362.call(this,x);
case  2 :
return G__10359__10363.call(this,x,y);
default:
return G__10359__10364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10359.cljs$lang$maxFixedArity = 2;
G__10359.cljs$lang$applyTo = G__10359__10364.cljs$lang$applyTo;
return G__10359;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10401__delegate = function (args){
return x;
};
var G__10401 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10401__delegate.call(this, args);
};
G__10401.cljs$lang$maxFixedArity = 0;
G__10401.cljs$lang$applyTo = (function (arglist__10402){
var args = cljs.core.seq( arglist__10402 );;
return G__10401__delegate.call(this, args);
});
return G__10401;
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
var comp__10413 = (function (){
return cljs.core.identity;
});
var comp__10414 = (function (f){
return f;
});
var comp__10415 = (function (f,g){
return (function() {
var G__10421 = null;
var G__10421__10423 = (function (){
return f.call(null,g.call(null));
});
var G__10421__10424 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10421__10425 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10421__10426 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10421__10427 = (function() { 
var G__10429__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10429 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10429__delegate.call(this, x, y, z, args);
};
G__10429.cljs$lang$maxFixedArity = 3;
G__10429.cljs$lang$applyTo = (function (arglist__10431){
var x = cljs.core.first(arglist__10431);
var y = cljs.core.first(cljs.core.next(arglist__10431));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10431)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10431)));
return G__10429__delegate.call(this, x, y, z, args);
});
return G__10429;
})()
;
G__10421 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10421__10423.call(this);
case  1 :
return G__10421__10424.call(this,x);
case  2 :
return G__10421__10425.call(this,x,y);
case  3 :
return G__10421__10426.call(this,x,y,z);
default:
return G__10421__10427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10421.cljs$lang$maxFixedArity = 3;
G__10421.cljs$lang$applyTo = G__10421__10427.cljs$lang$applyTo;
return G__10421;
})()
});
var comp__10416 = (function (f,g,h){
return (function() {
var G__10440 = null;
var G__10440__10442 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10440__10443 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10440__10444 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10440__10445 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10440__10446 = (function() { 
var G__10450__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10450 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10450__delegate.call(this, x, y, z, args);
};
G__10450.cljs$lang$maxFixedArity = 3;
G__10450.cljs$lang$applyTo = (function (arglist__10452){
var x = cljs.core.first(arglist__10452);
var y = cljs.core.first(cljs.core.next(arglist__10452));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10452)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10452)));
return G__10450__delegate.call(this, x, y, z, args);
});
return G__10450;
})()
;
G__10440 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10440__10442.call(this);
case  1 :
return G__10440__10443.call(this,x);
case  2 :
return G__10440__10444.call(this,x,y);
case  3 :
return G__10440__10445.call(this,x,y,z);
default:
return G__10440__10446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10440.cljs$lang$maxFixedArity = 3;
G__10440.cljs$lang$applyTo = G__10440__10446.cljs$lang$applyTo;
return G__10440;
})()
});
var comp__10417 = (function() { 
var G__10459__delegate = function (f1,f2,f3,fs){
var fs__10408 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10462__delegate = function (args){
var ret__10409 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10408),args);
var fs__10410 = cljs.core.next.call(null,fs__10408);

while(true){
if(cljs.core.truth_(fs__10410))
{{
var G__10465 = cljs.core.first.call(null,fs__10410).call(null,ret__10409);
var G__10466 = cljs.core.next.call(null,fs__10410);
ret__10409 = G__10465;
fs__10410 = G__10466;
continue;
}
} else
{return ret__10409;
}
break;
}
};
var G__10462 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10462__delegate.call(this, args);
};
G__10462.cljs$lang$maxFixedArity = 0;
G__10462.cljs$lang$applyTo = (function (arglist__10467){
var args = cljs.core.seq( arglist__10467 );;
return G__10462__delegate.call(this, args);
});
return G__10462;
})()
;
};
var G__10459 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10459__delegate.call(this, f1, f2, f3, fs);
};
G__10459.cljs$lang$maxFixedArity = 3;
G__10459.cljs$lang$applyTo = (function (arglist__10468){
var f1 = cljs.core.first(arglist__10468);
var f2 = cljs.core.first(cljs.core.next(arglist__10468));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10468)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10468)));
return G__10459__delegate.call(this, f1, f2, f3, fs);
});
return G__10459;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10413.call(this);
case  1 :
return comp__10414.call(this,f1);
case  2 :
return comp__10415.call(this,f1,f2);
case  3 :
return comp__10416.call(this,f1,f2,f3);
default:
return comp__10417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10417.cljs$lang$applyTo;
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
var partial__10472 = (function (f,arg1){
return (function() { 
var G__10477__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10477 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10477__delegate.call(this, args);
};
G__10477.cljs$lang$maxFixedArity = 0;
G__10477.cljs$lang$applyTo = (function (arglist__10478){
var args = cljs.core.seq( arglist__10478 );;
return G__10477__delegate.call(this, args);
});
return G__10477;
})()
;
});
var partial__10473 = (function (f,arg1,arg2){
return (function() { 
var G__10479__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10479 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10479__delegate.call(this, args);
};
G__10479.cljs$lang$maxFixedArity = 0;
G__10479.cljs$lang$applyTo = (function (arglist__10480){
var args = cljs.core.seq( arglist__10480 );;
return G__10479__delegate.call(this, args);
});
return G__10479;
})()
;
});
var partial__10474 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10481__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10481 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10481__delegate.call(this, args);
};
G__10481.cljs$lang$maxFixedArity = 0;
G__10481.cljs$lang$applyTo = (function (arglist__10482){
var args = cljs.core.seq( arglist__10482 );;
return G__10481__delegate.call(this, args);
});
return G__10481;
})()
;
});
var partial__10475 = (function() { 
var G__10483__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10484__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10484 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10484__delegate.call(this, args);
};
G__10484.cljs$lang$maxFixedArity = 0;
G__10484.cljs$lang$applyTo = (function (arglist__10485){
var args = cljs.core.seq( arglist__10485 );;
return G__10484__delegate.call(this, args);
});
return G__10484;
})()
;
};
var G__10483 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10483__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10483.cljs$lang$maxFixedArity = 4;
G__10483.cljs$lang$applyTo = (function (arglist__10486){
var f = cljs.core.first(arglist__10486);
var arg1 = cljs.core.first(cljs.core.next(arglist__10486));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10486)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10486))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10486))));
return G__10483__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10483;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10472.call(this,f,arg1);
case  3 :
return partial__10473.call(this,f,arg1,arg2);
case  4 :
return partial__10474.call(this,f,arg1,arg2,arg3);
default:
return partial__10475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10475.cljs$lang$applyTo;
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
var fnil__10491 = (function (f,x){
return (function() {
var G__10495 = null;
var G__10495__10496 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10495__10497 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10495__10498 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10495__10499 = (function() { 
var G__10501__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10501 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10501__delegate.call(this, a, b, c, ds);
};
G__10501.cljs$lang$maxFixedArity = 3;
G__10501.cljs$lang$applyTo = (function (arglist__10502){
var a = cljs.core.first(arglist__10502);
var b = cljs.core.first(cljs.core.next(arglist__10502));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10502)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10502)));
return G__10501__delegate.call(this, a, b, c, ds);
});
return G__10501;
})()
;
G__10495 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10495__10496.call(this,a);
case  2 :
return G__10495__10497.call(this,a,b);
case  3 :
return G__10495__10498.call(this,a,b,c);
default:
return G__10495__10499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10495.cljs$lang$maxFixedArity = 3;
G__10495.cljs$lang$applyTo = G__10495__10499.cljs$lang$applyTo;
return G__10495;
})()
});
var fnil__10492 = (function (f,x,y){
return (function() {
var G__10509 = null;
var G__10509__10510 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10509__10511 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10509__10512 = (function() { 
var G__10516__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10516 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10516__delegate.call(this, a, b, c, ds);
};
G__10516.cljs$lang$maxFixedArity = 3;
G__10516.cljs$lang$applyTo = (function (arglist__10517){
var a = cljs.core.first(arglist__10517);
var b = cljs.core.first(cljs.core.next(arglist__10517));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10517)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10517)));
return G__10516__delegate.call(this, a, b, c, ds);
});
return G__10516;
})()
;
G__10509 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10509__10510.call(this,a,b);
case  3 :
return G__10509__10511.call(this,a,b,c);
default:
return G__10509__10512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10509.cljs$lang$maxFixedArity = 3;
G__10509.cljs$lang$applyTo = G__10509__10512.cljs$lang$applyTo;
return G__10509;
})()
});
var fnil__10493 = (function (f,x,y,z){
return (function() {
var G__10518 = null;
var G__10518__10519 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10518__10520 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10518__10521 = (function() { 
var G__10540__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10540 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10540__delegate.call(this, a, b, c, ds);
};
G__10540.cljs$lang$maxFixedArity = 3;
G__10540.cljs$lang$applyTo = (function (arglist__10542){
var a = cljs.core.first(arglist__10542);
var b = cljs.core.first(cljs.core.next(arglist__10542));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10542)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10542)));
return G__10540__delegate.call(this, a, b, c, ds);
});
return G__10540;
})()
;
G__10518 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10518__10519.call(this,a,b);
case  3 :
return G__10518__10520.call(this,a,b,c);
default:
return G__10518__10521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10518.cljs$lang$maxFixedArity = 3;
G__10518.cljs$lang$applyTo = G__10518__10521.cljs$lang$applyTo;
return G__10518;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10491.call(this,f,x);
case  3 :
return fnil__10492.call(this,f,x,y);
case  4 :
return fnil__10493.call(this,f,x,y,z);
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
var mapi__10703 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10696 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10696))
{var s__10699 = temp__3698__auto____10696;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10699)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10699)));
} else
{return null;
}
})));
});

return mapi__10703.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10714 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10714))
{var s__10720 = temp__3698__auto____10714;

var x__10722 = f.call(null,cljs.core.first.call(null,s__10720));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10722)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10720));
} else
{return cljs.core.cons.call(null,x__10722,keep.call(null,f,cljs.core.rest.call(null,s__10720)));
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
var keepi__10765 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10760))
{var s__10761 = temp__3698__auto____10760;

var x__10763 = f.call(null,idx,cljs.core.first.call(null,s__10761));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10763)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10761));
} else
{return cljs.core.cons.call(null,x__10763,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10761)));
}
} else
{return null;
}
})));
});

return keepi__10765.call(null,0,coll);
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
var every_pred__10896 = (function (p){
return (function() {
var ep1 = null;
var ep1__10904 = (function (){
return true;
});
var ep1__10905 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10906 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10788 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10788))
{return p.call(null,y);
} else
{return and__3546__auto____10788;
}
})());
});
var ep1__10907 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10790 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10790))
{var and__3546__auto____10791 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10791))
{return p.call(null,z);
} else
{return and__3546__auto____10791;
}
} else
{return and__3546__auto____10790;
}
})());
});
var ep1__10908 = (function() { 
var G__10916__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10794 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10794))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10794;
}
})());
};
var G__10916 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10916__delegate.call(this, x, y, z, args);
};
G__10916.cljs$lang$maxFixedArity = 3;
G__10916.cljs$lang$applyTo = (function (arglist__10919){
var x = cljs.core.first(arglist__10919);
var y = cljs.core.first(cljs.core.next(arglist__10919));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10919)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10919)));
return G__10916__delegate.call(this, x, y, z, args);
});
return G__10916;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10904.call(this);
case  1 :
return ep1__10905.call(this,x);
case  2 :
return ep1__10906.call(this,x,y);
case  3 :
return ep1__10907.call(this,x,y,z);
default:
return ep1__10908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10908.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10897 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10922 = (function (){
return true;
});
var ep2__10923 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10797 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10797))
{return p2.call(null,x);
} else
{return and__3546__auto____10797;
}
})());
});
var ep2__10924 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10798 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10798))
{var and__3546__auto____10799 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10799))
{var and__3546__auto____10800 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10800))
{return p2.call(null,y);
} else
{return and__3546__auto____10800;
}
} else
{return and__3546__auto____10799;
}
} else
{return and__3546__auto____10798;
}
})());
});
var ep2__10925 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10801 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10801))
{var and__3546__auto____10802 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10802))
{var and__3546__auto____10809 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10809))
{var and__3546__auto____10811 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10811))
{var and__3546__auto____10812 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10812))
{return p2.call(null,z);
} else
{return and__3546__auto____10812;
}
} else
{return and__3546__auto____10811;
}
} else
{return and__3546__auto____10809;
}
} else
{return and__3546__auto____10802;
}
} else
{return and__3546__auto____10801;
}
})());
});
var ep2__10926 = (function() { 
var G__10948__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10819 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10819))
{return cljs.core.every_QMARK_.call(null,(function (p1__10745_SHARP_){
var and__3546__auto____10821 = p1.call(null,p1__10745_SHARP_);

if(cljs.core.truth_(and__3546__auto____10821))
{return p2.call(null,p1__10745_SHARP_);
} else
{return and__3546__auto____10821;
}
}),args);
} else
{return and__3546__auto____10819;
}
})());
};
var G__10948 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10948__delegate.call(this, x, y, z, args);
};
G__10948.cljs$lang$maxFixedArity = 3;
G__10948.cljs$lang$applyTo = (function (arglist__10951){
var x = cljs.core.first(arglist__10951);
var y = cljs.core.first(cljs.core.next(arglist__10951));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10951)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10951)));
return G__10948__delegate.call(this, x, y, z, args);
});
return G__10948;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10922.call(this);
case  1 :
return ep2__10923.call(this,x);
case  2 :
return ep2__10924.call(this,x,y);
case  3 :
return ep2__10925.call(this,x,y,z);
default:
return ep2__10926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10926.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10898 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10957 = (function (){
return true;
});
var ep3__10958 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10844 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10844))
{var and__3546__auto____10845 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10845))
{return p3.call(null,x);
} else
{return and__3546__auto____10845;
}
} else
{return and__3546__auto____10844;
}
})());
});
var ep3__10960 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10847 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10847))
{var and__3546__auto____10848 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10848))
{var and__3546__auto____10850 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10850))
{var and__3546__auto____10852 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10852))
{var and__3546__auto____10854 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10854))
{return p3.call(null,y);
} else
{return and__3546__auto____10854;
}
} else
{return and__3546__auto____10852;
}
} else
{return and__3546__auto____10850;
}
} else
{return and__3546__auto____10848;
}
} else
{return and__3546__auto____10847;
}
})());
});
var ep3__10961 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10855 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10855))
{var and__3546__auto____10857 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10857))
{var and__3546__auto____10859 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10859))
{var and__3546__auto____10860 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10860))
{var and__3546__auto____10862 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10862))
{var and__3546__auto____10863 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10863))
{var and__3546__auto____10864 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10864))
{var and__3546__auto____10866 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10866))
{return p3.call(null,z);
} else
{return and__3546__auto____10866;
}
} else
{return and__3546__auto____10864;
}
} else
{return and__3546__auto____10863;
}
} else
{return and__3546__auto____10862;
}
} else
{return and__3546__auto____10860;
}
} else
{return and__3546__auto____10859;
}
} else
{return and__3546__auto____10857;
}
} else
{return and__3546__auto____10855;
}
})());
});
var ep3__10962 = (function() { 
var G__11026__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10870 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10870))
{return cljs.core.every_QMARK_.call(null,(function (p1__10748_SHARP_){
var and__3546__auto____10873 = p1.call(null,p1__10748_SHARP_);

if(cljs.core.truth_(and__3546__auto____10873))
{var and__3546__auto____10874 = p2.call(null,p1__10748_SHARP_);

if(cljs.core.truth_(and__3546__auto____10874))
{return p3.call(null,p1__10748_SHARP_);
} else
{return and__3546__auto____10874;
}
} else
{return and__3546__auto____10873;
}
}),args);
} else
{return and__3546__auto____10870;
}
})());
};
var G__11026 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11026__delegate.call(this, x, y, z, args);
};
G__11026.cljs$lang$maxFixedArity = 3;
G__11026.cljs$lang$applyTo = (function (arglist__11038){
var x = cljs.core.first(arglist__11038);
var y = cljs.core.first(cljs.core.next(arglist__11038));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11038)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11038)));
return G__11026__delegate.call(this, x, y, z, args);
});
return G__11026;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10957.call(this);
case  1 :
return ep3__10958.call(this,x);
case  2 :
return ep3__10960.call(this,x,y);
case  3 :
return ep3__10961.call(this,x,y,z);
default:
return ep3__10962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10962.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10899 = (function() { 
var G__11052__delegate = function (p1,p2,p3,ps){
var ps__10879 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11054 = (function (){
return true;
});
var epn__11056 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10750_SHARP_){
return p1__10750_SHARP_.call(null,x);
}),ps__10879);
});
var epn__11057 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10751_SHARP_){
var and__3546__auto____10883 = p1__10751_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10883))
{return p1__10751_SHARP_.call(null,y);
} else
{return and__3546__auto____10883;
}
}),ps__10879);
});
var epn__11058 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10752_SHARP_){
var and__3546__auto____10884 = p1__10752_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10884))
{var and__3546__auto____10885 = p1__10752_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10885))
{return p1__10752_SHARP_.call(null,z);
} else
{return and__3546__auto____10885;
}
} else
{return and__3546__auto____10884;
}
}),ps__10879);
});
var epn__11059 = (function() { 
var G__11256__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10886 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10886))
{return cljs.core.every_QMARK_.call(null,(function (p1__10753_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10753_SHARP_,args);
}),ps__10879);
} else
{return and__3546__auto____10886;
}
})());
};
var G__11256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11256__delegate.call(this, x, y, z, args);
};
G__11256.cljs$lang$maxFixedArity = 3;
G__11256.cljs$lang$applyTo = (function (arglist__11259){
var x = cljs.core.first(arglist__11259);
var y = cljs.core.first(cljs.core.next(arglist__11259));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11259)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11259)));
return G__11256__delegate.call(this, x, y, z, args);
});
return G__11256;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11054.call(this);
case  1 :
return epn__11056.call(this,x);
case  2 :
return epn__11057.call(this,x,y);
case  3 :
return epn__11058.call(this,x,y,z);
default:
return epn__11059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11059.cljs$lang$applyTo;
return epn;
})()
};
var G__11052 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11052__delegate.call(this, p1, p2, p3, ps);
};
G__11052.cljs$lang$maxFixedArity = 3;
G__11052.cljs$lang$applyTo = (function (arglist__11266){
var p1 = cljs.core.first(arglist__11266);
var p2 = cljs.core.first(cljs.core.next(arglist__11266));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11266)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11266)));
return G__11052__delegate.call(this, p1, p2, p3, ps);
});
return G__11052;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10896.call(this,p1);
case  2 :
return every_pred__10897.call(this,p1,p2);
case  3 :
return every_pred__10898.call(this,p1,p2,p3);
default:
return every_pred__10899.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10899.cljs$lang$applyTo;
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
var some_fn__11358 = (function (p){
return (function() {
var sp1 = null;
var sp1__11363 = (function (){
return null;
});
var sp1__11364 = (function (x){
return p.call(null,x);
});
var sp1__11365 = (function (x,y){
var or__3548__auto____11278 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11278))
{return or__3548__auto____11278;
} else
{return p.call(null,y);
}
});
var sp1__11366 = (function (x,y,z){
var or__3548__auto____11280 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11280))
{return or__3548__auto____11280;
} else
{var or__3548__auto____11283 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11283))
{return or__3548__auto____11283;
} else
{return p.call(null,z);
}
}
});
var sp1__11367 = (function() { 
var G__11508__delegate = function (x,y,z,args){
var or__3548__auto____11285 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11508 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11508__delegate.call(this, x, y, z, args);
};
G__11508.cljs$lang$maxFixedArity = 3;
G__11508.cljs$lang$applyTo = (function (arglist__11544){
var x = cljs.core.first(arglist__11544);
var y = cljs.core.first(cljs.core.next(arglist__11544));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11544)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11544)));
return G__11508__delegate.call(this, x, y, z, args);
});
return G__11508;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11363.call(this);
case  1 :
return sp1__11364.call(this,x);
case  2 :
return sp1__11365.call(this,x,y);
case  3 :
return sp1__11366.call(this,x,y,z);
default:
return sp1__11367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11367.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11359 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11548 = (function (){
return null;
});
var sp2__11550 = (function (x){
var or__3548__auto____11288 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{return p2.call(null,x);
}
});
var sp2__11552 = (function (x,y){
var or__3548__auto____11290 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11290))
{return or__3548__auto____11290;
} else
{var or__3548__auto____11292 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{var or__3548__auto____11294 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11554 = (function (x,y,z){
var or__3548__auto____11295 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11295))
{return or__3548__auto____11295;
} else
{var or__3548__auto____11297 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11297))
{return or__3548__auto____11297;
} else
{var or__3548__auto____11299 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11299))
{return or__3548__auto____11299;
} else
{var or__3548__auto____11301 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{var or__3548__auto____11302 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11302))
{return or__3548__auto____11302;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11556 = (function() { 
var G__11570__delegate = function (x,y,z,args){
var or__3548__auto____11305 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{return cljs.core.some.call(null,(function (p1__10771_SHARP_){
var or__3548__auto____11308 = p1.call(null,p1__10771_SHARP_);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{return p2.call(null,p1__10771_SHARP_);
}
}),args);
}
};
var G__11570 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11570__delegate.call(this, x, y, z, args);
};
G__11570.cljs$lang$maxFixedArity = 3;
G__11570.cljs$lang$applyTo = (function (arglist__11591){
var x = cljs.core.first(arglist__11591);
var y = cljs.core.first(cljs.core.next(arglist__11591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11591)));
return G__11570__delegate.call(this, x, y, z, args);
});
return G__11570;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11548.call(this);
case  1 :
return sp2__11550.call(this,x);
case  2 :
return sp2__11552.call(this,x,y);
case  3 :
return sp2__11554.call(this,x,y,z);
default:
return sp2__11556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11556.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11360 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11598 = (function (){
return null;
});
var sp3__11599 = (function (x){
var or__3548__auto____11310 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{var or__3548__auto____11311 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11311))
{return or__3548__auto____11311;
} else
{return p3.call(null,x);
}
}
});
var sp3__11600 = (function (x,y){
var or__3548__auto____11313 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11313))
{return or__3548__auto____11313;
} else
{var or__3548__auto____11314 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11314))
{return or__3548__auto____11314;
} else
{var or__3548__auto____11315 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11315))
{return or__3548__auto____11315;
} else
{var or__3548__auto____11316 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11316))
{return or__3548__auto____11316;
} else
{var or__3548__auto____11318 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11601 = (function (x,y,z){
var or__3548__auto____11320 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11320))
{return or__3548__auto____11320;
} else
{var or__3548__auto____11322 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11322))
{return or__3548__auto____11322;
} else
{var or__3548__auto____11323 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{var or__3548__auto____11325 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11326 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{var or__3548__auto____11327 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{var or__3548__auto____11329 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11329))
{return or__3548__auto____11329;
} else
{var or__3548__auto____11330 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
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
var sp3__11602 = (function() { 
var G__11677__delegate = function (x,y,z,args){
var or__3548__auto____11335 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{return cljs.core.some.call(null,(function (p1__10772_SHARP_){
var or__3548__auto____11336 = p1.call(null,p1__10772_SHARP_);

if(cljs.core.truth_(or__3548__auto____11336))
{return or__3548__auto____11336;
} else
{var or__3548__auto____11337 = p2.call(null,p1__10772_SHARP_);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{return p3.call(null,p1__10772_SHARP_);
}
}
}),args);
}
};
var G__11677 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11677__delegate.call(this, x, y, z, args);
};
G__11677.cljs$lang$maxFixedArity = 3;
G__11677.cljs$lang$applyTo = (function (arglist__11687){
var x = cljs.core.first(arglist__11687);
var y = cljs.core.first(cljs.core.next(arglist__11687));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11687)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11687)));
return G__11677__delegate.call(this, x, y, z, args);
});
return G__11677;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11598.call(this);
case  1 :
return sp3__11599.call(this,x);
case  2 :
return sp3__11600.call(this,x,y);
case  3 :
return sp3__11601.call(this,x,y,z);
default:
return sp3__11602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11602.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11361 = (function() { 
var G__11694__delegate = function (p1,p2,p3,ps){
var ps__11338 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11695 = (function (){
return null;
});
var spn__11696 = (function (x){
return cljs.core.some.call(null,(function (p1__10774_SHARP_){
return p1__10774_SHARP_.call(null,x);
}),ps__11338);
});
var spn__11697 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10775_SHARP_){
var or__3548__auto____11348 = p1__10775_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11348))
{return or__3548__auto____11348;
} else
{return p1__10775_SHARP_.call(null,y);
}
}),ps__11338);
});
var spn__11698 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10779_SHARP_){
var or__3548__auto____11354 = p1__10779_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{var or__3548__auto____11355 = p1__10779_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11355))
{return or__3548__auto____11355;
} else
{return p1__10779_SHARP_.call(null,z);
}
}
}),ps__11338);
});
var spn__11699 = (function() { 
var G__11704__delegate = function (x,y,z,args){
var or__3548__auto____11357 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11357))
{return or__3548__auto____11357;
} else
{return cljs.core.some.call(null,(function (p1__10781_SHARP_){
return cljs.core.some.call(null,p1__10781_SHARP_,args);
}),ps__11338);
}
};
var G__11704 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11704__delegate.call(this, x, y, z, args);
};
G__11704.cljs$lang$maxFixedArity = 3;
G__11704.cljs$lang$applyTo = (function (arglist__11711){
var x = cljs.core.first(arglist__11711);
var y = cljs.core.first(cljs.core.next(arglist__11711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11711)));
return G__11704__delegate.call(this, x, y, z, args);
});
return G__11704;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11695.call(this);
case  1 :
return spn__11696.call(this,x);
case  2 :
return spn__11697.call(this,x,y);
case  3 :
return spn__11698.call(this,x,y,z);
default:
return spn__11699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11699.cljs$lang$applyTo;
return spn;
})()
};
var G__11694 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11694__delegate.call(this, p1, p2, p3, ps);
};
G__11694.cljs$lang$maxFixedArity = 3;
G__11694.cljs$lang$applyTo = (function (arglist__11713){
var p1 = cljs.core.first(arglist__11713);
var p2 = cljs.core.first(cljs.core.next(arglist__11713));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11713)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11713)));
return G__11694__delegate.call(this, p1, p2, p3, ps);
});
return G__11694;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11358.call(this,p1);
case  2 :
return some_fn__11359.call(this,p1,p2);
case  3 :
return some_fn__11360.call(this,p1,p2,p3);
default:
return some_fn__11361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11361.cljs$lang$applyTo;
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
var map__11741 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11720 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11720))
{var s__11721 = temp__3698__auto____11720;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11721)),map.call(null,f,cljs.core.rest.call(null,s__11721)));
} else
{return null;
}
})));
});
var map__11742 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11724 = cljs.core.seq.call(null,c1);
var s2__11725 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11726 = s1__11724;

if(cljs.core.truth_(and__3546__auto____11726))
{return s2__11725;
} else
{return and__3546__auto____11726;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11724),cljs.core.first.call(null,s2__11725)),map.call(null,f,cljs.core.rest.call(null,s1__11724),cljs.core.rest.call(null,s2__11725)));
} else
{return null;
}
})));
});
var map__11743 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11728 = cljs.core.seq.call(null,c1);
var s2__11730 = cljs.core.seq.call(null,c2);
var s3__11731 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11732 = s1__11728;

if(cljs.core.truth_(and__3546__auto____11732))
{var and__3546__auto____11733 = s2__11730;

if(cljs.core.truth_(and__3546__auto____11733))
{return s3__11731;
} else
{return and__3546__auto____11733;
}
} else
{return and__3546__auto____11732;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11728),cljs.core.first.call(null,s2__11730),cljs.core.first.call(null,s3__11731)),map.call(null,f,cljs.core.rest.call(null,s1__11728),cljs.core.rest.call(null,s2__11730),cljs.core.rest.call(null,s3__11731)));
} else
{return null;
}
})));
});
var map__11744 = (function() { 
var G__11753__delegate = function (f,c1,c2,c3,colls){
var step__11738 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11736 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11736)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11736),step.call(null,map.call(null,cljs.core.rest,ss__11736)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11273_SHARP_){
return cljs.core.apply.call(null,f,p1__11273_SHARP_);
}),step__11738.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11753 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11753__delegate.call(this, f, c1, c2, c3, colls);
};
G__11753.cljs$lang$maxFixedArity = 4;
G__11753.cljs$lang$applyTo = (function (arglist__11778){
var f = cljs.core.first(arglist__11778);
var c1 = cljs.core.first(cljs.core.next(arglist__11778));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11778)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11778))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11778))));
return G__11753__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11753;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11741.call(this,f,c1);
case  3 :
return map__11742.call(this,f,c1,c2);
case  4 :
return map__11743.call(this,f,c1,c2,c3);
default:
return map__11744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11744.cljs$lang$applyTo;
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
{var temp__3698__auto____11787 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11787))
{var s__11789 = temp__3698__auto____11787;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11789),take.call(null,(n - 1),cljs.core.rest.call(null,s__11789)));
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
var step__11807 = (function (n,coll){
while(true){
var s__11802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11804 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11804))
{return s__11802;
} else
{return and__3546__auto____11804;
}
})()))
{{
var G__11820 = (n - 1);
var G__11821 = cljs.core.rest.call(null,s__11802);
n = G__11820;
coll = G__11821;
continue;
}
} else
{return s__11802;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11807.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11834 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11835 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11834.call(this,n);
case  2 :
return drop_last__11835.call(this,n,s);
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
var s__11843 = cljs.core.seq.call(null,coll);
var lead__11844 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11844))
{{
var G__11849 = cljs.core.next.call(null,s__11843);
var G__11850 = cljs.core.next.call(null,lead__11844);
s__11843 = G__11849;
lead__11844 = G__11850;
continue;
}
} else
{return s__11843;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11861 = (function (pred,coll){
while(true){
var s__11853 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11856 = s__11853;

if(cljs.core.truth_(and__3546__auto____11856))
{return pred.call(null,cljs.core.first.call(null,s__11853));
} else
{return and__3546__auto____11856;
}
})()))
{{
var G__11872 = pred;
var G__11873 = cljs.core.rest.call(null,s__11853);
pred = G__11872;
coll = G__11873;
continue;
}
} else
{return s__11853;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11861.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11933 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11933))
{var s__11935 = temp__3698__auto____11933;

return cljs.core.concat.call(null,s__11935,cycle.call(null,s__11935));
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
var repeat__11950 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11951 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11950.call(this,n);
case  2 :
return repeat__11951.call(this,n,x);
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
var repeatedly__11957 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11958 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11957.call(this,n);
case  2 :
return repeatedly__11958.call(this,n,f);
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
var interleave__11977 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11965 = cljs.core.seq.call(null,c1);
var s2__11966 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11968 = s1__11965;

if(cljs.core.truth_(and__3546__auto____11968))
{return s2__11966;
} else
{return and__3546__auto____11968;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11965),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11966),interleave.call(null,cljs.core.rest.call(null,s1__11965),cljs.core.rest.call(null,s2__11966))));
} else
{return null;
}
})));
});
var interleave__11978 = (function() { 
var G__11982__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11971 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11971)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11971),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11971)));
} else
{return null;
}
})));
};
var G__11982 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11982__delegate.call(this, c1, c2, colls);
};
G__11982.cljs$lang$maxFixedArity = 2;
G__11982.cljs$lang$applyTo = (function (arglist__11989){
var c1 = cljs.core.first(arglist__11989);
var c2 = cljs.core.first(cljs.core.next(arglist__11989));
var colls = cljs.core.rest(cljs.core.next(arglist__11989));
return G__11982__delegate.call(this, c1, c2, colls);
});
return G__11982;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11977.call(this,c1,c2);
default:
return interleave__11978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11978.cljs$lang$applyTo;
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
var cat__11997 = (function cat(coll,colls){
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

return cat__11997.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12006 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12007 = (function() { 
var G__12009__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12009 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12009__delegate.call(this, f, coll, colls);
};
G__12009.cljs$lang$maxFixedArity = 2;
G__12009.cljs$lang$applyTo = (function (arglist__12010){
var f = cljs.core.first(arglist__12010);
var coll = cljs.core.first(cljs.core.next(arglist__12010));
var colls = cljs.core.rest(cljs.core.next(arglist__12010));
return G__12009__delegate.call(this, f, coll, colls);
});
return G__12009;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12006.call(this,f,coll);
default:
return mapcat__12007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12007.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12018 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12018))
{var s__12019 = temp__3698__auto____12018;

var f__12020 = cljs.core.first.call(null,s__12019);
var r__12023 = cljs.core.rest.call(null,s__12019);

if(cljs.core.truth_(pred.call(null,f__12020)))
{return cljs.core.cons.call(null,f__12020,filter.call(null,pred,r__12023));
} else
{return filter.call(null,pred,r__12023);
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
var walk__12037 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12037.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12033_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12033_SHARP_));
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
var partition__12093 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12094 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12044 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12044))
{var s__12047 = temp__3698__auto____12044;

var p__12049 = cljs.core.take.call(null,n,s__12047);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12049))))
{return cljs.core.cons.call(null,p__12049,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12047)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12095 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12051 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12051))
{var s__12052 = temp__3698__auto____12051;

var p__12053 = cljs.core.take.call(null,n,s__12052);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12053))))
{return cljs.core.cons.call(null,p__12053,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12052)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12053,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12093.call(this,n,step);
case  3 :
return partition__12094.call(this,n,step,pad);
case  4 :
return partition__12095.call(this,n,step,pad,coll);
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
var get_in__12112 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12113 = (function (m,ks,not_found){
var sentinel__12104 = cljs.core.lookup_sentinel;
var m__12105 = m;
var ks__12106 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12106))
{var m__12107 = cljs.core.get.call(null,m__12105,cljs.core.first.call(null,ks__12106),sentinel__12104);

if(cljs.core.truth_((sentinel__12104 === m__12107)))
{return not_found;
} else
{{
var G__12115 = sentinel__12104;
var G__12116 = m__12107;
var G__12117 = cljs.core.next.call(null,ks__12106);
sentinel__12104 = G__12115;
m__12105 = G__12116;
ks__12106 = G__12117;
continue;
}
}
} else
{return m__12105;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12112.call(this,m,ks);
case  3 :
return get_in__12113.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12119,v){
var vec__12121__12123 = p__12119;
var k__12124 = cljs.core.nth.call(null,vec__12121__12123,0,null);
var ks__12125 = cljs.core.nthnext.call(null,vec__12121__12123,1);

if(cljs.core.truth_(ks__12125))
{return cljs.core.assoc.call(null,m,k__12124,assoc_in.call(null,cljs.core.get.call(null,m,k__12124),ks__12125,v));
} else
{return cljs.core.assoc.call(null,m,k__12124,v);
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
var update_in__delegate = function (m,p__12133,f,args){
var vec__12134__12135 = p__12133;
var k__12136 = cljs.core.nth.call(null,vec__12134__12135,0,null);
var ks__12137 = cljs.core.nthnext.call(null,vec__12134__12135,1);

if(cljs.core.truth_(ks__12137))
{return cljs.core.assoc.call(null,m,k__12136,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12136),ks__12137,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12136,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12136),args));
}
};
var update_in = function (m,p__12133,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12133, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12138){
var m = cljs.core.first(arglist__12138);
var p__12133 = cljs.core.first(cljs.core.next(arglist__12138));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12138)));
return update_in__delegate.call(this, m, p__12133, f, args);
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
var this__12154 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12328 = null;
var G__12328__12329 = (function (coll,k){
var this__12155 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12328__12330 = (function (coll,k,not_found){
var this__12156 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12328 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12328__12329.call(this,coll,k);
case  3 :
return G__12328__12330.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12328;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12157 = this;
var new_array__12158 = cljs.core.aclone.call(null,this__12157.array);

(new_array__12158[k] = v);
return (new cljs.core.Vector(this__12157.meta,new_array__12158));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12335 = null;
var G__12335__12336 = (function (coll,k){
var this__12159 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12335__12338 = (function (coll,k,not_found){
var this__12160 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12335 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12335__12336.call(this,coll,k);
case  3 :
return G__12335__12338.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12335;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12163 = this;
var new_array__12165 = cljs.core.aclone.call(null,this__12163.array);

new_array__12165.push(o);
return (new cljs.core.Vector(this__12163.meta,new_array__12165));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12340 = null;
var G__12340__12341 = (function (v,f){
var this__12167 = this;
return cljs.core.ci_reduce.call(null,this__12167.array,f);
});
var G__12340__12342 = (function (v,f,start){
var this__12168 = this;
return cljs.core.ci_reduce.call(null,this__12168.array,f,start);
});
G__12340 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12340__12341.call(this,v,f);
case  3 :
return G__12340__12342.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12340;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12172 = this;
if(cljs.core.truth_((this__12172.array.length > 0)))
{var vector_seq__12176 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12172.array.length)))
{return cljs.core.cons.call(null,(this__12172.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12176.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12177 = this;
return this__12177.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12181 = this;
var count__12233 = this__12181.array.length;

if(cljs.core.truth_((count__12233 > 0)))
{return (this__12181.array[(count__12233 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12234 = this;
if(cljs.core.truth_((this__12234.array.length > 0)))
{var new_array__12235 = cljs.core.aclone.call(null,this__12234.array);

new_array__12235.pop();
return (new cljs.core.Vector(this__12234.meta,new_array__12235));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12237 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12239 = this;
return (new cljs.core.Vector(meta,this__12239.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12240 = this;
return this__12240.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12462 = null;
var G__12462__12463 = (function (coll,n){
var this__12242 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12245 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12245))
{return (n < this__12242.array.length);
} else
{return and__3546__auto____12245;
}
})()))
{return (this__12242.array[n]);
} else
{return null;
}
});
var G__12462__12464 = (function (coll,n,not_found){
var this__12248 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12251 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12251))
{return (n < this__12248.array.length);
} else
{return and__3546__auto____12251;
}
})()))
{return (this__12248.array[n]);
} else
{return not_found;
}
});
G__12462 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12462__12463.call(this,coll,n);
case  3 :
return G__12462__12464.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12462;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12255 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12255.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12480){
var args = cljs.core.seq( arglist__12480 );;
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
var this__12486 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12522 = null;
var G__12522__12559 = (function (coll,k){
var this__12490 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12522__12560 = (function (coll,k,not_found){
var this__12493 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12522 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12522__12559.call(this,coll,k);
case  3 :
return G__12522__12560.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12522;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12494 = this;
var v_pos__12495 = (this__12494.start + key);

return (new cljs.core.Subvec(this__12494.meta,cljs.core._assoc.call(null,this__12494.v,v_pos__12495,val),this__12494.start,((this__12494.end > (v_pos__12495 + 1)) ? this__12494.end : (v_pos__12495 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12570 = null;
var G__12570__12571 = (function (coll,k){
var this__12496 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12570__12572 = (function (coll,k,not_found){
var this__12498 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12570 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12570__12571.call(this,coll,k);
case  3 :
return G__12570__12572.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12570;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12499 = this;
return (new cljs.core.Subvec(this__12499.meta,cljs.core._assoc_n.call(null,this__12499.v,this__12499.end,o),this__12499.start,(this__12499.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12577 = null;
var G__12577__12578 = (function (coll,f){
var this__12500 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12577__12579 = (function (coll,f,start){
var this__12501 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12577 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12577__12578.call(this,coll,f);
case  3 :
return G__12577__12579.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12577;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12502 = this;
var subvec_seq__12503 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12502.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12502.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12503.call(null,this__12502.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12504 = this;
return (this__12504.end - this__12504.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12507 = this;
return cljs.core._nth.call(null,this__12507.v,(this__12507.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12509 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12509.start,this__12509.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12509.meta,this__12509.v,this__12509.start,(this__12509.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12511 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12513 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12516 = this;
return (new cljs.core.Subvec(meta,this__12516.v,this__12516.start,this__12516.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12517 = this;
return this__12517.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12595 = null;
var G__12595__12597 = (function (coll,n){
var this__12518 = this;
return cljs.core._nth.call(null,this__12518.v,(this__12518.start + n));
});
var G__12595__12598 = (function (coll,n,not_found){
var this__12519 = this;
return cljs.core._nth.call(null,this__12519.v,(this__12519.start + n),not_found);
});
G__12595 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12595__12597.call(this,coll,n);
case  3 :
return G__12595__12598.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12595;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12520 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12520.meta);
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
var subvec__12618 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12619 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12618.call(this,v,start);
case  3 :
return subvec__12619.call(this,v,start,end);
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
var this__12639 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12640 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12641 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12646 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12646.meta);
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
var temp__3695__auto____12650 = cljs.core.next.call(null,this__12649.front);

if(cljs.core.truth_(temp__3695__auto____12650))
{var f1__12651 = temp__3695__auto____12650;

return (new cljs.core.PersistentQueueSeq(this__12649.meta,f1__12651,this__12649.rear));
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
var this__12652 = this;
return this__12652.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12653 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12653.front,this__12653.rear));
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
var this__12727 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12730 = this;
if(cljs.core.truth_(this__12730.front))
{return (new cljs.core.PersistentQueue(this__12730.meta,(this__12730.count + 1),this__12730.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12731 = this__12730.rear;

if(cljs.core.truth_(or__3548__auto____12731))
{return or__3548__auto____12731;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12730.meta,(this__12730.count + 1),cljs.core.conj.call(null,this__12730.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12732 = this;
var rear__12733 = cljs.core.seq.call(null,this__12732.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12735 = this__12732.front;

if(cljs.core.truth_(or__3548__auto____12735))
{return or__3548__auto____12735;
} else
{return rear__12733;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12732.front,cljs.core.seq.call(null,rear__12733)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12736 = this;
return this__12736.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12737 = this;
return cljs.core._first.call(null,this__12737.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12738 = this;
if(cljs.core.truth_(this__12738.front))
{var temp__3695__auto____12739 = cljs.core.next.call(null,this__12738.front);

if(cljs.core.truth_(temp__3695__auto____12739))
{var f1__12740 = temp__3695__auto____12739;

return (new cljs.core.PersistentQueue(this__12738.meta,(this__12738.count - 1),f1__12740,this__12738.rear));
} else
{return (new cljs.core.PersistentQueue(this__12738.meta,(this__12738.count - 1),cljs.core.seq.call(null,this__12738.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12741 = this;
return cljs.core.first.call(null,this__12741.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12742 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12743 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12746 = this;
return (new cljs.core.PersistentQueue(meta,this__12746.count,this__12746.front,this__12746.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12748 = this;
return this__12748.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12751 = this;
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
var this__12777 = this;
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
var len__12876 = array.length;

var i__12877 = 0;

while(true){
if(cljs.core.truth_((i__12877 < len__12876)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12877]))))
{return i__12877;
} else
{{
var G__12879 = (i__12877 + incr);
i__12877 = G__12879;
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
var obj_map_contains_key_QMARK___12888 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12889 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12884 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12884))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12884;
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
return obj_map_contains_key_QMARK___12888.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12889.call(this,k,strobj,true_val,false_val);
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
var this__12910 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12997 = null;
var G__12997__12998 = (function (coll,k){
var this__12914 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12997__12999 = (function (coll,k,not_found){
var this__12915 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12915.strobj,(this__12915.strobj[k]),not_found);
});
G__12997 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12997__12998.call(this,coll,k);
case  3 :
return G__12997__12999.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12997;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12920 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12923 = goog.object.clone.call(null,this__12920.strobj);
var overwrite_QMARK___12925 = new_strobj__12923.hasOwnProperty(k);

(new_strobj__12923[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12925))
{return (new cljs.core.ObjMap(this__12920.meta,this__12920.keys,new_strobj__12923));
} else
{var new_keys__12926 = cljs.core.aclone.call(null,this__12920.keys);

new_keys__12926.push(k);
return (new cljs.core.ObjMap(this__12920.meta,new_keys__12926,new_strobj__12923));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12920.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12928 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12928.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13011 = null;
var G__13011__13012 = (function (coll,k){
var this__12931 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13011__13013 = (function (coll,k,not_found){
var this__12932 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13011 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13011__13012.call(this,coll,k);
case  3 :
return G__13011__13013.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13011;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12935 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12937 = this;
if(cljs.core.truth_((this__12937.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12898_SHARP_){
return cljs.core.vector.call(null,p1__12898_SHARP_,(this__12937.strobj[p1__12898_SHARP_]));
}),this__12937.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12972 = this;
return this__12972.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12974 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12977 = this;
return (new cljs.core.ObjMap(meta,this__12977.keys,this__12977.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12978 = this;
return this__12978.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12983 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12983.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12984 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12986 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12986))
{return this__12984.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12986;
}
})()))
{var new_keys__12988 = cljs.core.aclone.call(null,this__12984.keys);
var new_strobj__12989 = goog.object.clone.call(null,this__12984.strobj);

new_keys__12988.splice(cljs.core.scan_array.call(null,1,k,new_keys__12988),1);
cljs.core.js_delete.call(null,new_strobj__12989,k);
return (new cljs.core.ObjMap(this__12984.meta,new_keys__12988,new_strobj__12989));
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
var this__13056 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13196 = null;
var G__13196__13198 = (function (coll,k){
var this__13058 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13196__13199 = (function (coll,k,not_found){
var this__13059 = this;
var bucket__13061 = (this__13059.hashobj[cljs.core.hash.call(null,k)]);
var i__13062 = (cljs.core.truth_(bucket__13061)?cljs.core.scan_array.call(null,2,k,bucket__13061):null);

if(cljs.core.truth_(i__13062))
{return (bucket__13061[(i__13062 + 1)]);
} else
{return not_found;
}
});
G__13196 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13196__13198.call(this,coll,k);
case  3 :
return G__13196__13199.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13196;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13065 = this;
var h__13067 = cljs.core.hash.call(null,k);
var bucket__13069 = (this__13065.hashobj[h__13067]);

if(cljs.core.truth_(bucket__13069))
{var new_bucket__13070 = cljs.core.aclone.call(null,bucket__13069);
var new_hashobj__13071 = goog.object.clone.call(null,this__13065.hashobj);

(new_hashobj__13071[h__13067] = new_bucket__13070);
var temp__3695__auto____13073 = cljs.core.scan_array.call(null,2,k,new_bucket__13070);

if(cljs.core.truth_(temp__3695__auto____13073))
{var i__13074 = temp__3695__auto____13073;

(new_bucket__13070[(i__13074 + 1)] = v);
return (new cljs.core.HashMap(this__13065.meta,this__13065.count,new_hashobj__13071));
} else
{new_bucket__13070.push(k,v);
return (new cljs.core.HashMap(this__13065.meta,(this__13065.count + 1),new_hashobj__13071));
}
} else
{var new_hashobj__13076 = goog.object.clone.call(null,this__13065.hashobj);

(new_hashobj__13076[h__13067] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13065.meta,(this__13065.count + 1),new_hashobj__13076));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13078 = this;
var bucket__13079 = (this__13078.hashobj[cljs.core.hash.call(null,k)]);
var i__13081 = (cljs.core.truth_(bucket__13079)?cljs.core.scan_array.call(null,2,k,bucket__13079):null);

if(cljs.core.truth_(i__13081))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13211 = null;
var G__13211__13212 = (function (coll,k){
var this__13157 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13211__13213 = (function (coll,k,not_found){
var this__13158 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13211 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13211__13212.call(this,coll,k);
case  3 :
return G__13211__13213.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13211;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13161 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13163 = this;
if(cljs.core.truth_((this__13163.count > 0)))
{var hashes__13170 = cljs.core.js_keys.call(null,this__13163.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13034_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13163.hashobj[p1__13034_SHARP_])));
}),hashes__13170);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13174 = this;
return this__13174.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13175 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13176 = this;
return (new cljs.core.HashMap(meta,this__13176.count,this__13176.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13183 = this;
return this__13183.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13184 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13184.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13185 = this;
var h__13187 = cljs.core.hash.call(null,k);
var bucket__13188 = (this__13185.hashobj[h__13187]);
var i__13189 = (cljs.core.truth_(bucket__13188)?cljs.core.scan_array.call(null,2,k,bucket__13188):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13189)))
{return coll;
} else
{var new_hashobj__13192 = goog.object.clone.call(null,this__13185.hashobj);

if(cljs.core.truth_((3 > bucket__13188.length)))
{cljs.core.js_delete.call(null,new_hashobj__13192,h__13187);
} else
{var new_bucket__13193 = cljs.core.aclone.call(null,bucket__13188);

new_bucket__13193.splice(i__13189,2);
(new_hashobj__13192[h__13187] = new_bucket__13193);
}
return (new cljs.core.HashMap(this__13185.meta,(this__13185.count - 1),new_hashobj__13192));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13359 = ks.length;

var i__13360 = 0;
var out__13361 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13360 < len__13359)))
{{
var G__13365 = (i__13360 + 1);
var G__13366 = cljs.core.assoc.call(null,out__13361,(ks[i__13360]),(vs[i__13360]));
i__13360 = G__13365;
out__13361 = G__13366;
continue;
}
} else
{return out__13361;
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
var in$__13372 = cljs.core.seq.call(null,keyvals);
var out__13374 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13372))
{{
var G__13377 = cljs.core.nnext.call(null,in$__13372);
var G__13401 = cljs.core.assoc.call(null,out__13374,cljs.core.first.call(null,in$__13372),cljs.core.second.call(null,in$__13372));
in$__13372 = G__13377;
out__13374 = G__13401;
continue;
}
} else
{return out__13374;
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
hash_map.cljs$lang$applyTo = (function (arglist__13409){
var keyvals = cljs.core.seq( arglist__13409 );;
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
{return cljs.core.reduce.call(null,(function (p1__13417_SHARP_,p2__13418_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13424 = p1__13417_SHARP_;

if(cljs.core.truth_(or__3548__auto____13424))
{return or__3548__auto____13424;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13418_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13470){
var maps = cljs.core.seq( arglist__13470 );;
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
{var merge_entry__13474 = (function (m,e){
var k__13471 = cljs.core.first.call(null,e);
var v__13472 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13471)))
{return cljs.core.assoc.call(null,m,k__13471,f.call(null,cljs.core.get.call(null,m,k__13471),v__13472));
} else
{return cljs.core.assoc.call(null,m,k__13471,v__13472);
}
});
var merge2__13481 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13474,(function (){var or__3548__auto____13479 = m1;

if(cljs.core.truth_(or__3548__auto____13479))
{return or__3548__auto____13479;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13481,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13525){
var f = cljs.core.first(arglist__13525);
var maps = cljs.core.rest(arglist__13525);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13532 = cljs.core.ObjMap.fromObject([],{});
var keys__13533 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13533))
{var key__13536 = cljs.core.first.call(null,keys__13533);
var entry__13537 = cljs.core.get.call(null,map,key__13536,"﷐'user/not-found");

{
var G__13544 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13537,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13532,key__13536,entry__13537):ret__13532);
var G__13545 = cljs.core.next.call(null,keys__13533);
ret__13532 = G__13544;
keys__13533 = G__13545;
continue;
}
} else
{return ret__13532;
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
var this__13555 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13609 = null;
var G__13609__13610 = (function (coll,v){
var this__13559 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13609__13611 = (function (coll,v,not_found){
var this__13562 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13562.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13609 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13609__13610.call(this,coll,v);
case  3 :
return G__13609__13611.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13609;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13614 = null;
var G__13614__13615 = (function (coll,k){
var this__13569 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13614__13616 = (function (coll,k,not_found){
var this__13573 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13614 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13614__13615.call(this,coll,k);
case  3 :
return G__13614__13616.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13614;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13575 = this;
return (new cljs.core.Set(this__13575.meta,cljs.core.assoc.call(null,this__13575.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13577 = this;
return cljs.core.keys.call(null,this__13577.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13579 = this;
return (new cljs.core.Set(this__13579.meta,cljs.core.dissoc.call(null,this__13579.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13584 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13588 = this;
var and__3546__auto____13589 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13589))
{var and__3546__auto____13590 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13590))
{return cljs.core.every_QMARK_.call(null,(function (p1__13527_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13527_SHARP_);
}),other);
} else
{return and__3546__auto____13590;
}
} else
{return and__3546__auto____13589;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13604 = this;
return (new cljs.core.Set(meta,this__13604.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13607 = this;
return this__13607.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13608 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13608.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13679 = cljs.core.seq.call(null,coll);
var out__13680 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13679))))
{{
var G__13687 = cljs.core.rest.call(null,in$__13679);
var G__13688 = cljs.core.conj.call(null,out__13680,cljs.core.first.call(null,in$__13679));
in$__13679 = G__13687;
out__13680 = G__13688;
continue;
}
} else
{return out__13680;
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
{var n__13699 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13701 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13701))
{var e__13702 = temp__3695__auto____13701;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13702));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13699,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13677_SHARP_){
var temp__3695__auto____13708 = cljs.core.find.call(null,smap,p1__13677_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13708))
{var e__13709 = temp__3695__auto____13708;

return cljs.core.second.call(null,e__13709);
} else
{return p1__13677_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13732 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13721,seen){
while(true){
var vec__13722__13723 = p__13721;
var f__13724 = cljs.core.nth.call(null,vec__13722__13723,0,null);
var xs__13725 = vec__13722__13723;

var temp__3698__auto____13726 = cljs.core.seq.call(null,xs__13725);

if(cljs.core.truth_(temp__3698__auto____13726))
{var s__13727 = temp__3698__auto____13726;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13724)))
{{
var G__13739 = cljs.core.rest.call(null,s__13727);
var G__13740 = seen;
p__13721 = G__13739;
seen = G__13740;
continue;
}
} else
{return cljs.core.cons.call(null,f__13724,step.call(null,cljs.core.rest.call(null,s__13727),cljs.core.conj.call(null,seen,f__13724)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13732.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13750 = cljs.core.Vector.fromArray([]);
var s__13753 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13753)))
{{
var G__13826 = cljs.core.conj.call(null,ret__13750,cljs.core.first.call(null,s__13753));
var G__13827 = cljs.core.next.call(null,s__13753);
ret__13750 = G__13826;
s__13753 = G__13827;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13750);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13832 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13832))
{return or__3548__auto____13832;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13833 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13833 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13833 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13844 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13844))
{return or__3548__auto____13844;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13847 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13847 > -1)))
{return cljs.core.subs.call(null,x,2,i__13847);
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
var map__13857 = cljs.core.ObjMap.fromObject([],{});
var ks__13858 = cljs.core.seq.call(null,keys);
var vs__13859 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13861 = ks__13858;

if(cljs.core.truth_(and__3546__auto____13861))
{return vs__13859;
} else
{return and__3546__auto____13861;
}
})()))
{{
var G__13869 = cljs.core.assoc.call(null,map__13857,cljs.core.first.call(null,ks__13858),cljs.core.first.call(null,vs__13859));
var G__13870 = cljs.core.next.call(null,ks__13858);
var G__13871 = cljs.core.next.call(null,vs__13859);
map__13857 = G__13869;
ks__13858 = G__13870;
vs__13859 = G__13871;
continue;
}
} else
{return map__13857;
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
var max_key__13889 = (function (k,x){
return x;
});
var max_key__13890 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13891 = (function() { 
var G__13898__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13852_SHARP_,p2__13853_SHARP_){
return max_key.call(null,k,p1__13852_SHARP_,p2__13853_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13898 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13898__delegate.call(this, k, x, y, more);
};
G__13898.cljs$lang$maxFixedArity = 3;
G__13898.cljs$lang$applyTo = (function (arglist__13900){
var k = cljs.core.first(arglist__13900);
var x = cljs.core.first(cljs.core.next(arglist__13900));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13900)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13900)));
return G__13898__delegate.call(this, k, x, y, more);
});
return G__13898;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13889.call(this,k,x);
case  3 :
return max_key__13890.call(this,k,x,y);
default:
return max_key__13891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13891.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13911 = (function (k,x){
return x;
});
var min_key__13913 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13914 = (function() { 
var G__13918__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13875_SHARP_,p2__13876_SHARP_){
return min_key.call(null,k,p1__13875_SHARP_,p2__13876_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13918 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13918__delegate.call(this, k, x, y, more);
};
G__13918.cljs$lang$maxFixedArity = 3;
G__13918.cljs$lang$applyTo = (function (arglist__13920){
var k = cljs.core.first(arglist__13920);
var x = cljs.core.first(cljs.core.next(arglist__13920));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13920)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13920)));
return G__13918__delegate.call(this, k, x, y, more);
});
return G__13918;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13911.call(this,k,x);
case  3 :
return min_key__13913.call(this,k,x,y);
default:
return min_key__13914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13914.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13933 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13934 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13930))
{var s__13931 = temp__3698__auto____13930;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13931),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13931)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13933.call(this,n,step);
case  3 :
return partition_all__13934.call(this,n,step,coll);
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
var temp__3698__auto____13945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13945))
{var s__13946 = temp__3698__auto____13945;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13946))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13946),take_while.call(null,pred,cljs.core.rest.call(null,s__13946)));
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
var this__13971 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13974 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14034 = null;
var G__14034__14037 = (function (rng,f){
var this__13977 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14034__14039 = (function (rng,f,s){
var this__13979 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14034 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14034__14037.call(this,rng,f);
case  3 :
return G__14034__14039.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14034;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13984 = this;
var comp__13987 = (cljs.core.truth_((this__13984.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13987.call(null,this__13984.start,this__13984.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13994 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13994.end - this__13994.start) / this__13994.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13997 = this;
return this__13997.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13999 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13999.meta,(this__13999.start + this__13999.step),this__13999.end,this__13999.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14001 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14004 = this;
return (new cljs.core.Range(meta,this__14004.start,this__14004.end,this__14004.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14006 = this;
return this__14006.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14063 = null;
var G__14063__14064 = (function (rng,n){
var this__14009 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14009.start + (n * this__14009.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14016 = (this__14009.start > this__14009.end);

if(cljs.core.truth_(and__3546__auto____14016))
{return cljs.core._EQ_.call(null,this__14009.step,0);
} else
{return and__3546__auto____14016;
}
})()))
{return this__14009.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14063__14066 = (function (rng,n,not_found){
var this__14019 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14019.start + (n * this__14019.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14025 = (this__14019.start > this__14019.end);

if(cljs.core.truth_(and__3546__auto____14025))
{return cljs.core._EQ_.call(null,this__14019.step,0);
} else
{return and__3546__auto____14025;
}
})()))
{return this__14019.start;
} else
{return not_found;
}
}
});
G__14063 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14063__14064.call(this,rng,n);
case  3 :
return G__14063__14066.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14063;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14029 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14029.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14088 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14089 = (function (end){
return range.call(null,0,end,1);
});
var range__14090 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14092 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14088.call(this);
case  1 :
return range__14089.call(this,start);
case  2 :
return range__14090.call(this,start,end);
case  3 :
return range__14092.call(this,start,end,step);
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
var temp__3698__auto____14111 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14111))
{var s__14112 = temp__3698__auto____14111;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14112),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14112)));
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
var temp__3698__auto____14125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14125))
{var s__14128 = temp__3698__auto____14125;

var fst__14129 = cljs.core.first.call(null,s__14128);
var fv__14130 = f.call(null,fst__14129);
var run__14133 = cljs.core.cons.call(null,fst__14129,cljs.core.take_while.call(null,(function (p1__14123_SHARP_){
return cljs.core._EQ_.call(null,fv__14130,f.call(null,p1__14123_SHARP_));
}),cljs.core.next.call(null,s__14128)));

return cljs.core.cons.call(null,run__14133,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14133),s__14128))));
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
var reductions__14184 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14175 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14175))
{var s__14176 = temp__3695__auto____14175;

return reductions.call(null,f,cljs.core.first.call(null,s__14176),cljs.core.rest.call(null,s__14176));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14185 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14178 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14178))
{var s__14180 = temp__3698__auto____14178;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14180)),cljs.core.rest.call(null,s__14180));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14184.call(this,f,init);
case  3 :
return reductions__14185.call(this,f,init,coll);
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
var juxt__14235 = (function (f){
return (function() {
var G__14240 = null;
var G__14240__14241 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14240__14242 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14240__14243 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14240__14244 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14240__14245 = (function() { 
var G__14249__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14249 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14249__delegate.call(this, x, y, z, args);
};
G__14249.cljs$lang$maxFixedArity = 3;
G__14249.cljs$lang$applyTo = (function (arglist__14250){
var x = cljs.core.first(arglist__14250);
var y = cljs.core.first(cljs.core.next(arglist__14250));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14250)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14250)));
return G__14249__delegate.call(this, x, y, z, args);
});
return G__14249;
})()
;
G__14240 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14240__14241.call(this);
case  1 :
return G__14240__14242.call(this,x);
case  2 :
return G__14240__14243.call(this,x,y);
case  3 :
return G__14240__14244.call(this,x,y,z);
default:
return G__14240__14245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14240.cljs$lang$maxFixedArity = 3;
G__14240.cljs$lang$applyTo = G__14240__14245.cljs$lang$applyTo;
return G__14240;
})()
});
var juxt__14236 = (function (f,g){
return (function() {
var G__14252 = null;
var G__14252__14253 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14252__14254 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14252__14255 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14252__14256 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14252__14257 = (function() { 
var G__14265__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14265 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14265__delegate.call(this, x, y, z, args);
};
G__14265.cljs$lang$maxFixedArity = 3;
G__14265.cljs$lang$applyTo = (function (arglist__14266){
var x = cljs.core.first(arglist__14266);
var y = cljs.core.first(cljs.core.next(arglist__14266));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14266)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14266)));
return G__14265__delegate.call(this, x, y, z, args);
});
return G__14265;
})()
;
G__14252 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14252__14253.call(this);
case  1 :
return G__14252__14254.call(this,x);
case  2 :
return G__14252__14255.call(this,x,y);
case  3 :
return G__14252__14256.call(this,x,y,z);
default:
return G__14252__14257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14252.cljs$lang$maxFixedArity = 3;
G__14252.cljs$lang$applyTo = G__14252__14257.cljs$lang$applyTo;
return G__14252;
})()
});
var juxt__14237 = (function (f,g,h){
return (function() {
var G__14281 = null;
var G__14281__14282 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14281__14283 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14281__14284 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14281__14285 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14281__14286 = (function() { 
var G__14289__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14289 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14289__delegate.call(this, x, y, z, args);
};
G__14289.cljs$lang$maxFixedArity = 3;
G__14289.cljs$lang$applyTo = (function (arglist__14290){
var x = cljs.core.first(arglist__14290);
var y = cljs.core.first(cljs.core.next(arglist__14290));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14290)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14290)));
return G__14289__delegate.call(this, x, y, z, args);
});
return G__14289;
})()
;
G__14281 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14281__14282.call(this);
case  1 :
return G__14281__14283.call(this,x);
case  2 :
return G__14281__14284.call(this,x,y);
case  3 :
return G__14281__14285.call(this,x,y,z);
default:
return G__14281__14286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14281.cljs$lang$maxFixedArity = 3;
G__14281.cljs$lang$applyTo = G__14281__14286.cljs$lang$applyTo;
return G__14281;
})()
});
var juxt__14238 = (function() { 
var G__14291__delegate = function (f,g,h,fs){
var fs__14222 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14292 = null;
var G__14292__14293 = (function (){
return cljs.core.reduce.call(null,(function (p1__14155_SHARP_,p2__14156_SHARP_){
return cljs.core.conj.call(null,p1__14155_SHARP_,p2__14156_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14222);
});
var G__14292__14294 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14157_SHARP_,p2__14158_SHARP_){
return cljs.core.conj.call(null,p1__14157_SHARP_,p2__14158_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14222);
});
var G__14292__14295 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14160_SHARP_,p2__14161_SHARP_){
return cljs.core.conj.call(null,p1__14160_SHARP_,p2__14161_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14222);
});
var G__14292__14296 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14162_SHARP_,p2__14163_SHARP_){
return cljs.core.conj.call(null,p1__14162_SHARP_,p2__14163_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14222);
});
var G__14292__14297 = (function() { 
var G__14314__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14165_SHARP_,p2__14166_SHARP_){
return cljs.core.conj.call(null,p1__14165_SHARP_,cljs.core.apply.call(null,p2__14166_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14222);
};
var G__14314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14314__delegate.call(this, x, y, z, args);
};
G__14314.cljs$lang$maxFixedArity = 3;
G__14314.cljs$lang$applyTo = (function (arglist__14315){
var x = cljs.core.first(arglist__14315);
var y = cljs.core.first(cljs.core.next(arglist__14315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14315)));
return G__14314__delegate.call(this, x, y, z, args);
});
return G__14314;
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
G__14291.cljs$lang$applyTo = (function (arglist__14317){
var f = cljs.core.first(arglist__14317);
var g = cljs.core.first(cljs.core.next(arglist__14317));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14317)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14317)));
return G__14291__delegate.call(this, f, g, h, fs);
});
return G__14291;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14235.call(this,f);
case  2 :
return juxt__14236.call(this,f,g);
case  3 :
return juxt__14237.call(this,f,g,h);
default:
return juxt__14238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14238.cljs$lang$applyTo;
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
var dorun__14319 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14322 = cljs.core.next.call(null,coll);
coll = G__14322;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14320 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14318))
{return (n > 0);
} else
{return and__3546__auto____14318;
}
})()))
{{
var G__14323 = (n - 1);
var G__14324 = cljs.core.next.call(null,coll);
n = G__14323;
coll = G__14324;
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
return dorun__14319.call(this,n);
case  2 :
return dorun__14320.call(this,n,coll);
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
var doall__14329 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14330 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14329.call(this,n);
case  2 :
return doall__14330.call(this,n,coll);
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
var matches__14332 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14332),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14332),1)))
{return cljs.core.first.call(null,matches__14332);
} else
{return cljs.core.vec.call(null,matches__14332);
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
var matches__14494 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14494)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14494),1)))
{return cljs.core.first.call(null,matches__14494);
} else
{return cljs.core.vec.call(null,matches__14494);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14500 = cljs.core.re_find.call(null,re,s);
var match_idx__14501 = s.search(re);
var match_str__14502 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14500))?cljs.core.first.call(null,match_data__14500):match_data__14500);
var post_match__14503 = cljs.core.subs.call(null,s,(match_idx__14501 + cljs.core.count.call(null,match_str__14502)));

if(cljs.core.truth_(match_data__14500))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14500,re_seq.call(null,re,post_match__14503));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14505_SHARP_){
return print_one.call(null,p1__14505_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14526 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14526))
{var and__3546__auto____14531 = (function (){var x__445__auto____14528 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14529 = x__445__auto____14528;

if(cljs.core.truth_(and__3546__auto____14529))
{var and__3546__auto____14530 = x__445__auto____14528.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14530))
{return cljs.core.not.call(null,x__445__auto____14528.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14530;
}
} else
{return and__3546__auto____14529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14528);
}
})();

if(cljs.core.truth_(and__3546__auto____14531))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14531;
}
} else
{return and__3546__auto____14526;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14535 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14536 = x__445__auto____14535;

if(cljs.core.truth_(and__3546__auto____14536))
{var and__3546__auto____14537 = x__445__auto____14535.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14537))
{return cljs.core.not.call(null,x__445__auto____14535.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14537;
}
} else
{return and__3546__auto____14536;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14535);
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
var first_obj__14551 = cljs.core.first.call(null,objs);
var sb__14552 = (new goog.string.StringBuffer());

var G__14554__14556 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14554__14556))
{var obj__14557 = cljs.core.first.call(null,G__14554__14556);
var G__14554__14558 = G__14554__14556;

while(true){
if(cljs.core.truth_((obj__14557 === first_obj__14551)))
{} else
{sb__14552.append(" ");
}
var G__14565__14566 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14557,opts));

if(cljs.core.truth_(G__14565__14566))
{var string__14567 = cljs.core.first.call(null,G__14565__14566);
var G__14565__14568 = G__14565__14566;

while(true){
sb__14552.append(string__14567);
var temp__3698__auto____14571 = cljs.core.next.call(null,G__14565__14568);

if(cljs.core.truth_(temp__3698__auto____14571))
{var G__14565__14572 = temp__3698__auto____14571;

{
var G__14583 = cljs.core.first.call(null,G__14565__14572);
var G__14584 = G__14565__14572;
string__14567 = G__14583;
G__14565__14568 = G__14584;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14573 = cljs.core.next.call(null,G__14554__14558);

if(cljs.core.truth_(temp__3698__auto____14573))
{var G__14554__14574 = temp__3698__auto____14573;

{
var G__14588 = cljs.core.first.call(null,G__14554__14574);
var G__14590 = G__14554__14574;
obj__14557 = G__14588;
G__14554__14558 = G__14590;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14552);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14596 = cljs.core.first.call(null,objs);

var G__14597__14601 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14597__14601))
{var obj__14603 = cljs.core.first.call(null,G__14597__14601);
var G__14597__14604 = G__14597__14601;

while(true){
if(cljs.core.truth_((obj__14603 === first_obj__14596)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14608__14613 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14603,opts));

if(cljs.core.truth_(G__14608__14613))
{var string__14630 = cljs.core.first.call(null,G__14608__14613);
var G__14608__14631 = G__14608__14613;

while(true){
cljs.core.string_print.call(null,string__14630);
var temp__3698__auto____14635 = cljs.core.next.call(null,G__14608__14631);

if(cljs.core.truth_(temp__3698__auto____14635))
{var G__14608__14636 = temp__3698__auto____14635;

{
var G__14646 = cljs.core.first.call(null,G__14608__14636);
var G__14647 = G__14608__14636;
string__14630 = G__14646;
G__14608__14631 = G__14647;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14643 = cljs.core.next.call(null,G__14597__14604);

if(cljs.core.truth_(temp__3698__auto____14643))
{var G__14597__14644 = temp__3698__auto____14643;

{
var G__14648 = cljs.core.first.call(null,G__14597__14644);
var G__14649 = G__14597__14644;
obj__14603 = G__14648;
G__14597__14604 = G__14649;
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
pr_str.cljs$lang$applyTo = (function (arglist__14664){
var objs = cljs.core.seq( arglist__14664 );;
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
pr.cljs$lang$applyTo = (function (arglist__14670){
var objs = cljs.core.seq( arglist__14670 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14675){
var objs = cljs.core.seq( arglist__14675 );;
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
println.cljs$lang$applyTo = (function (arglist__14678){
var objs = cljs.core.seq( arglist__14678 );;
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
prn.cljs$lang$applyTo = (function (arglist__14681){
var objs = cljs.core.seq( arglist__14681 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14685 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14685,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14694 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14694))
{var nspc__14696 = temp__3698__auto____14694;

return cljs.core.str.call(null,nspc__14696,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14697 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14697))
{var nspc__14698 = temp__3698__auto____14697;

return cljs.core.str.call(null,nspc__14698,"/");
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
var pr_pair__14719 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14719,"{",", ","}",opts,coll);
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
var this__14744 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14746 = this;
var G__14747__14749 = cljs.core.seq.call(null,this__14746.watches);

if(cljs.core.truth_(G__14747__14749))
{var G__14754__14756 = cljs.core.first.call(null,G__14747__14749);
var vec__14755__14757 = G__14754__14756;
var key__14758 = cljs.core.nth.call(null,vec__14755__14757,0,null);
var f__14759 = cljs.core.nth.call(null,vec__14755__14757,1,null);
var G__14747__14760 = G__14747__14749;

var G__14754__14761 = G__14754__14756;
var G__14747__14805 = G__14747__14760;

while(true){
var vec__14807__14808 = G__14754__14761;
var key__14809 = cljs.core.nth.call(null,vec__14807__14808,0,null);
var f__14810 = cljs.core.nth.call(null,vec__14807__14808,1,null);
var G__14747__14811 = G__14747__14805;

f__14810.call(null,key__14809,this$,oldval,newval);
var temp__3698__auto____14812 = cljs.core.next.call(null,G__14747__14811);

if(cljs.core.truth_(temp__3698__auto____14812))
{var G__14747__14813 = temp__3698__auto____14812;

{
var G__14832 = cljs.core.first.call(null,G__14747__14813);
var G__14833 = G__14747__14813;
G__14754__14761 = G__14832;
G__14747__14805 = G__14833;
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
var this__14814 = this;
return this$.watches = cljs.core.assoc.call(null,this__14814.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14817 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14817.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14821 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14821.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14822 = this;
return this__14822.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14823 = this;
return this__14823.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14826 = this;
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
var atom__14845 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14846 = (function() { 
var G__14849__delegate = function (x,p__14834){
var map__14836__14837 = p__14834;
var map__14836__14838 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14836__14837))?cljs.core.apply.call(null,cljs.core.hash_map,map__14836__14837):map__14836__14837);
var validator__14839 = cljs.core.get.call(null,map__14836__14838,"﷐'validator");
var meta__14841 = cljs.core.get.call(null,map__14836__14838,"﷐'meta");

return (new cljs.core.Atom(x,meta__14841,validator__14839,null));
};
var G__14849 = function (x,var_args){
var p__14834 = null;
if (goog.isDef(var_args)) {
  p__14834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14849__delegate.call(this, x, p__14834);
};
G__14849.cljs$lang$maxFixedArity = 1;
G__14849.cljs$lang$applyTo = (function (arglist__14851){
var x = cljs.core.first(arglist__14851);
var p__14834 = cljs.core.rest(arglist__14851);
return G__14849__delegate.call(this, x, p__14834);
});
return G__14849;
})()
;
atom = function(x,var_args){
var p__14834 = var_args;
switch(arguments.length){
case  1 :
return atom__14845.call(this,x);
default:
return atom__14846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14846.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14853 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14853))
{var validate__14854 = temp__3698__auto____14853;

if(cljs.core.truth_(validate__14854.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14863 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14863,new_value);
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
var swap_BANG___14871 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14872 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14873 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14874 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14875 = (function() { 
var G__14877__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14877 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14877__delegate.call(this, a, f, x, y, z, more);
};
G__14877.cljs$lang$maxFixedArity = 5;
G__14877.cljs$lang$applyTo = (function (arglist__14878){
var a = cljs.core.first(arglist__14878);
var f = cljs.core.first(cljs.core.next(arglist__14878));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14878)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14878))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14878)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14878)))));
return G__14877__delegate.call(this, a, f, x, y, z, more);
});
return G__14877;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14871.call(this,a,f);
case  3 :
return swap_BANG___14872.call(this,a,f,x);
case  4 :
return swap_BANG___14873.call(this,a,f,x,y);
case  5 :
return swap_BANG___14874.call(this,a,f,x,y,z);
default:
return swap_BANG___14875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14875.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14886){
var iref = cljs.core.first(arglist__14886);
var f = cljs.core.first(cljs.core.next(arglist__14886));
var args = cljs.core.rest(cljs.core.next(arglist__14886));
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
var gensym__14887 = (function (){
return gensym.call(null,"G__");
});
var gensym__14888 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14887.call(this);
case  1 :
return gensym__14888.call(this,prefix_string);
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
var this__14893 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14893.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14894 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14894.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14894.state,this__14894.f);
}
return cljs.core.deref.call(null,this__14894.state);
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
delay.cljs$lang$applyTo = (function (arglist__14897){
var body = cljs.core.seq( arglist__14897 );;
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
var map__14902__14903 = options;
var map__14902__14904 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14902__14903))?cljs.core.apply.call(null,cljs.core.hash_map,map__14902__14903):map__14902__14903);
var keywordize_keys__14905 = cljs.core.get.call(null,map__14902__14904,"﷐'keywordize-keys");
var keyfn__14906 = (cljs.core.truth_(keywordize_keys__14905)?cljs.core.keyword:cljs.core.str);
var f__14912 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14911 = (function iter__14907(s__14908){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14908__14909 = s__14908;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14908__14909)))
{var k__14910 = cljs.core.first.call(null,s__14908__14909);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14906.call(null,k__14910),thisfn.call(null,(x[k__14910]))]),iter__14907.call(null,cljs.core.rest.call(null,s__14908__14909)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14911.call(null,cljs.core.js_keys.call(null,x));
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

return f__14912.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14921){
var x = cljs.core.first(arglist__14921);
var options = cljs.core.rest(arglist__14921);
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
var mem__14922 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14926__delegate = function (args){
var temp__3695__auto____14923 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14922),args);

if(cljs.core.truth_(temp__3695__auto____14923))
{var v__14924 = temp__3695__auto____14923;

return v__14924;
} else
{var ret__14925 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14922,cljs.core.assoc,args,ret__14925);
return ret__14925;
}
};
var G__14926 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14926__delegate.call(this, args);
};
G__14926.cljs$lang$maxFixedArity = 0;
G__14926.cljs$lang$applyTo = (function (arglist__14927){
var args = cljs.core.seq( arglist__14927 );;
return G__14926__delegate.call(this, args);
});
return G__14926;
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
var trampoline__14929 = (function (f){
while(true){
var ret__14928 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14928)))
{{
var G__14932 = ret__14928;
f = G__14932;
continue;
}
} else
{return ret__14928;
}
break;
}
});
var trampoline__14930 = (function() { 
var G__14934__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14934 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14934__delegate.call(this, f, args);
};
G__14934.cljs$lang$maxFixedArity = 1;
G__14934.cljs$lang$applyTo = (function (arglist__14935){
var f = cljs.core.first(arglist__14935);
var args = cljs.core.rest(arglist__14935);
return G__14934__delegate.call(this, f, args);
});
return G__14934;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14929.call(this,f);
default:
return trampoline__14930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14930.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14936 = (function (){
return rand.call(null,1);
});
var rand__14937 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14936.call(this);
case  1 :
return rand__14937.call(this,n);
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
var k__14945 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14945,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14945,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14984 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14985 = (function (h,child,parent){
var or__3548__auto____14969 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14969))
{return or__3548__auto____14969;
} else
{var or__3548__auto____14970 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14970))
{return or__3548__auto____14970;
} else
{var and__3546__auto____14971 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14971))
{var and__3546__auto____14972 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14972))
{var and__3546__auto____14973 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14973))
{var ret__14975 = true;
var i__14976 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14977 = cljs.core.not.call(null,ret__14975);

if(cljs.core.truth_(or__3548__auto____14977))
{return or__3548__auto____14977;
} else
{return cljs.core._EQ_.call(null,i__14976,cljs.core.count.call(null,parent));
}
})()))
{return ret__14975;
} else
{{
var G__14993 = isa_QMARK_.call(null,h,child.call(null,i__14976),parent.call(null,i__14976));
var G__14994 = (i__14976 + 1);
ret__14975 = G__14993;
i__14976 = G__14994;
continue;
}
}
break;
}
} else
{return and__3546__auto____14973;
}
} else
{return and__3546__auto____14972;
}
} else
{return and__3546__auto____14971;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14984.call(this,h,child);
case  3 :
return isa_QMARK___14985.call(this,h,child,parent);
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
var parents__15035 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15036 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15035.call(this,h);
case  2 :
return parents__15036.call(this,h,tag);
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
var ancestors__15054 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15055 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15054.call(this,h);
case  2 :
return ancestors__15055.call(this,h,tag);
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
var descendants__15063 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15064 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15063.call(this,h);
case  2 :
return descendants__15064.call(this,h,tag);
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
var derive__15156 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15157 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15146 = "﷐'parents".call(null,h);
var td__15147 = "﷐'descendants".call(null,h);
var ta__15148 = "﷐'ancestors".call(null,h);
var tf__15149 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15153 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15146.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15148.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15148.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15146,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15149.call(null,"﷐'ancestors".call(null,h),tag,td__15147,parent,ta__15148),"﷐'descendants":tf__15149.call(null,"﷐'descendants".call(null,h),parent,ta__15148,tag,td__15147)});
})());

if(cljs.core.truth_(or__3548__auto____15153))
{return or__3548__auto____15153;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15156.call(this,h,tag);
case  3 :
return derive__15157.call(this,h,tag,parent);
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
var underive__15169 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15170 = (function (h,tag,parent){
var parentMap__15165 = "﷐'parents".call(null,h);
var childsParents__15166 = (cljs.core.truth_(parentMap__15165.call(null,tag))?cljs.core.disj.call(null,parentMap__15165.call(null,tag),parent):cljs.core.set([]));
var newParents__15167 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15166))?cljs.core.assoc.call(null,parentMap__15165,tag,childsParents__15166):cljs.core.dissoc.call(null,parentMap__15165,tag));
var deriv_seq__15168 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15104_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15104_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15104_SHARP_),cljs.core.second.call(null,p1__15104_SHARP_)));
}),cljs.core.seq.call(null,newParents__15167)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15165.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15137_SHARP_,p2__15139_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15137_SHARP_,p2__15139_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15168));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15169.call(this,h,tag);
case  3 :
return underive__15170.call(this,h,tag,parent);
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
var xprefs__15189 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15192 = (cljs.core.truth_((function (){var and__3546__auto____15191 = xprefs__15189;

if(cljs.core.truth_(and__3546__auto____15191))
{return xprefs__15189.call(null,y);
} else
{return and__3546__auto____15191;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15192))
{return or__3548__auto____15192;
} else
{var or__3548__auto____15194 = (function (){var ps__15193 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15193) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15193),prefer_table)))
{} else
{}
{
var G__15221 = cljs.core.rest.call(null,ps__15193);
ps__15193 = G__15221;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15194))
{return or__3548__auto____15194;
} else
{var or__3548__auto____15201 = (function (){var ps__15198 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15198) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15198),y,prefer_table)))
{} else
{}
{
var G__15222 = cljs.core.rest.call(null,ps__15198);
ps__15198 = G__15222;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15224 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15233 = cljs.core.reduce.call(null,(function (be,p__15225){
var vec__15226__15227 = p__15225;
var k__15228 = cljs.core.nth.call(null,vec__15226__15227,0,null);
var ___15229 = cljs.core.nth.call(null,vec__15226__15227,1,null);
var e__15230 = vec__15226__15227;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15228)))
{var be2__15232 = (cljs.core.truth_((function (){var or__3548__auto____15231 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15231))
{return or__3548__auto____15231;
} else
{return cljs.core.dominates.call(null,k__15228,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15230:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15232),k__15228,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15228," and ",cljs.core.first.call(null,be2__15232),", and neither is preferred")));
}
return be2__15232;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15233))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15233));
return cljs.core.second.call(null,best_entry__15233);
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
if(cljs.core.truth_((function (){var and__3546__auto____15247 = mf;

if(cljs.core.truth_(and__3546__auto____15247))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15247;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15248 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{var or__3548__auto____15250 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15253 = mf;

if(cljs.core.truth_(and__3546__auto____15253))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15253;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15254 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15254))
{return or__3548__auto____15254;
} else
{var or__3548__auto____15255 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15255))
{return or__3548__auto____15255;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15259 = mf;

if(cljs.core.truth_(and__3546__auto____15259))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15259;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15260 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15260))
{return or__3548__auto____15260;
} else
{var or__3548__auto____15261 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15261))
{return or__3548__auto____15261;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15262 = mf;

if(cljs.core.truth_(and__3546__auto____15262))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15262;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15263 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15263))
{return or__3548__auto____15263;
} else
{var or__3548__auto____15267 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15269 = mf;

if(cljs.core.truth_(and__3546__auto____15269))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15269;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15272 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15272))
{return or__3548__auto____15272;
} else
{var or__3548__auto____15273 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15273))
{return or__3548__auto____15273;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15274 = mf;

if(cljs.core.truth_(and__3546__auto____15274))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15274;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15316 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15316))
{return or__3548__auto____15316;
} else
{var or__3548__auto____15320 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15326 = mf;

if(cljs.core.truth_(and__3546__auto____15326))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15326;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15328 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15328))
{return or__3548__auto____15328;
} else
{var or__3548__auto____15329 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15329))
{return or__3548__auto____15329;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15375 = mf;

if(cljs.core.truth_(and__3546__auto____15375))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15375;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15378 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15378))
{return or__3548__auto____15378;
} else
{var or__3548__auto____15379 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15379))
{return or__3548__auto____15379;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15469 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15470 = cljs.core._get_method.call(null,mf,dispatch_val__15469);

if(cljs.core.truth_(target_fn__15470))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15469)));
}
return cljs.core.apply.call(null,target_fn__15470,args);
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
var this__15471 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15472 = this;
cljs.core.swap_BANG_.call(null,this__15472.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15472.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15472.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15472.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15475 = this;
cljs.core.swap_BANG_.call(null,this__15475.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15475.method_cache,this__15475.method_table,this__15475.cached_hierarchy,this__15475.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15476 = this;
cljs.core.swap_BANG_.call(null,this__15476.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15476.method_cache,this__15476.method_table,this__15476.cached_hierarchy,this__15476.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15477 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15477.cached_hierarchy),cljs.core.deref.call(null,this__15477.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15477.method_cache,this__15477.method_table,this__15477.cached_hierarchy,this__15477.hierarchy);
}
var temp__3695__auto____15481 = cljs.core.deref.call(null,this__15477.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15481))
{var target_fn__15482 = temp__3695__auto____15481;

return target_fn__15482;
} else
{var temp__3695__auto____15484 = cljs.core.find_and_cache_best_method.call(null,this__15477.name,dispatch_val,this__15477.hierarchy,this__15477.method_table,this__15477.prefer_table,this__15477.method_cache,this__15477.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15484))
{var target_fn__15485 = temp__3695__auto____15484;

return target_fn__15485;
} else
{return cljs.core.deref.call(null,this__15477.method_table).call(null,this__15477.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15486 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15486.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15486.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15486.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15486.method_cache,this__15486.method_table,this__15486.cached_hierarchy,this__15486.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15488 = this;
return cljs.core.deref.call(null,this__15488.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15491 = this;
return cljs.core.deref.call(null,this__15491.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15492 = this;
return cljs.core.do_dispatch.call(null,mf,this__15492.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15562__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15562 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15562__delegate.call(this, _, args);
};
G__15562.cljs$lang$maxFixedArity = 1;
G__15562.cljs$lang$applyTo = (function (arglist__15563){
var _ = cljs.core.first(arglist__15563);
var args = cljs.core.rest(arglist__15563);
return G__15562__delegate.call(this, _, args);
});
return G__15562;
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
