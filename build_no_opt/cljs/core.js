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
var or__3548__auto____7339 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7340 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
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
var _invoke__7602 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7345 = this$;

if(cljs.core.truth_(and__3546__auto____7345))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7345;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7347 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7347))
{return or__3548__auto____7347;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7603 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7348 = this$;

if(cljs.core.truth_(and__3546__auto____7348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7604 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = this$;

if(cljs.core.truth_(and__3546__auto____7353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7605 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = this$;

if(cljs.core.truth_(and__3546__auto____7359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7606 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7368 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{var or__3548__auto____7369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7371 = this$;

if(cljs.core.truth_(and__3546__auto____7371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{var or__3548__auto____7375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7377 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7379 = this$;

if(cljs.core.truth_(and__3546__auto____7379))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7379;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7380 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7380))
{return or__3548__auto____7380;
} else
{var or__3548__auto____7381 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7444 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{var or__3548__auto____7447 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7449 = this$;

if(cljs.core.truth_(and__3546__auto____7449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7458 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7460 = this$;

if(cljs.core.truth_(and__3546__auto____7460))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7460;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7464 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7466 = this$;

if(cljs.core.truth_(and__3546__auto____7466))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7466;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7469 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7469))
{return or__3548__auto____7469;
} else
{var or__3548__auto____7471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7473 = this$;

if(cljs.core.truth_(and__3546__auto____7473))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7473;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7475 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{var or__3548__auto____7477 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7477))
{return or__3548__auto____7477;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7482 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{var or__3548__auto____7483 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7496 = this$;

if(cljs.core.truth_(and__3546__auto____7496))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7496;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{var or__3548__auto____7501 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7505 = this$;

if(cljs.core.truth_(and__3546__auto____7505))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7505;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7508 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{var or__3548__auto____7511 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7516 = this$;

if(cljs.core.truth_(and__3546__auto____7516))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7516;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7519 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
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
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7523 = this$;

if(cljs.core.truth_(and__3546__auto____7523))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7523;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7526 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{var or__3548__auto____7527 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7532 = this$;

if(cljs.core.truth_(and__3546__auto____7532))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7532;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7539 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{var or__3548__auto____7542 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7542))
{return or__3548__auto____7542;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7623 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7545 = this$;

if(cljs.core.truth_(and__3546__auto____7545))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7545;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7549 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{var or__3548__auto____7550 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7550))
{return or__3548__auto____7550;
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
return _invoke__7602.call(this,this$);
case  2 :
return _invoke__7603.call(this,this$,a);
case  3 :
return _invoke__7604.call(this,this$,a,b);
case  4 :
return _invoke__7605.call(this,this$,a,b,c);
case  5 :
return _invoke__7606.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7607.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7610.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7612.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7623.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = coll;

if(cljs.core.truth_(and__3546__auto____7807))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7807;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7809 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7835 = coll;

if(cljs.core.truth_(and__3546__auto____7835))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7835;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7843 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7859 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
} else
{var or__3548__auto____7860 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
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
var _nth__7876 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7865 = coll;

if(cljs.core.truth_(and__3546__auto____7865))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7865;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7868 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{var or__3548__auto____7869 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7877 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7870 = coll;

if(cljs.core.truth_(and__3546__auto____7870))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7870;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7871 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
} else
{var or__3548__auto____7873 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7873))
{return or__3548__auto____7873;
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
return _nth__7876.call(this,coll,n);
case  3 :
return _nth__7877.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7894 = coll;

if(cljs.core.truth_(and__3546__auto____7894))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7894;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7895 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{var or__3548__auto____7896 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7896))
{return or__3548__auto____7896;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7898 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7899 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
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
var _lookup__7926 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7913 = o;

if(cljs.core.truth_(and__3546__auto____7913))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7913;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7914 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7915 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7927 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7917 = o;

if(cljs.core.truth_(and__3546__auto____7917))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7917;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7920 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{var or__3548__auto____7921 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
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
return _lookup__7926.call(this,o,k);
case  3 :
return _lookup__7927.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7940 = coll;

if(cljs.core.truth_(and__3546__auto____7940))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7940;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7944 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{var or__3548__auto____7946 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
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
{return (function (){var or__3548__auto____7961 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7962 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7966 = coll;

if(cljs.core.truth_(and__3546__auto____7966))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7966;
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
{return (function (){var or__3548__auto____7983 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7985 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = coll;

if(cljs.core.truth_(and__3546__auto____7995))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7995;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
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
{return (function (){var or__3548__auto____8001 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{var or__3548__auto____8002 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
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
{return (function (){var or__3548__auto____8020 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
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
{return (function (){var or__3548__auto____8035 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{var or__3548__auto____8037 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8037))
{return or__3548__auto____8037;
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
{return (function (){var or__3548__auto____8047 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8049 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8056 = o;

if(cljs.core.truth_(and__3546__auto____8056))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8056;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8059 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{var or__3548__auto____8061 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8069 = o;

if(cljs.core.truth_(and__3546__auto____8069))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8069;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8074 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
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
var _reduce__8098 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8084 = coll;

if(cljs.core.truth_(and__3546__auto____8084))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8084;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8086 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8099 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8087 = coll;

if(cljs.core.truth_(and__3546__auto____8087))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8087;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8090 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
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
return _reduce__8098.call(this,coll,f);
case  3 :
return _reduce__8099.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8114 = o;

if(cljs.core.truth_(and__3546__auto____8114))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8114;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8117 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{var or__3548__auto____8119 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8132 = o;

if(cljs.core.truth_(and__3546__auto____8132))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8132;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8133 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{var or__3548__auto____8134 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8151 = o;

if(cljs.core.truth_(and__3546__auto____8151))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8151;
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
if(cljs.core.truth_((function (){var and__3546__auto____8164 = o;

if(cljs.core.truth_(and__3546__auto____8164))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8164;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8165 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8165))
{return or__3548__auto____8165;
} else
{var or__3548__auto____8166 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8166))
{return or__3548__auto____8166;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8171 = d;

if(cljs.core.truth_(and__3546__auto____8171))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8171;
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
if(cljs.core.truth_((function (){var and__3546__auto____8177 = this$;

if(cljs.core.truth_(and__3546__auto____8177))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8177;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8250 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8250))
{return or__3548__auto____8250;
} else
{var or__3548__auto____8251 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8251))
{return or__3548__auto____8251;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8252 = this$;

if(cljs.core.truth_(and__3546__auto____8252))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8252;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8253 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8253))
{return or__3548__auto____8253;
} else
{var or__3548__auto____8254 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8254))
{return or__3548__auto____8254;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8255 = this$;

if(cljs.core.truth_(and__3546__auto____8255))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8255;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8283 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8283))
{return or__3548__auto____8283;
} else
{var or__3548__auto____8284 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8284))
{return or__3548__auto____8284;
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
var G__8321 = null;
var G__8321__8323 = (function (o,k){
return null;
});
var G__8321__8324 = (function (o,k,not_found){
return not_found;
});
G__8321 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8321__8323.call(this,o,k);
case  3 :
return G__8321__8324.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8321;
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
var G__8332 = null;
var G__8332__8333 = (function (_,f){
return f.call(null);
});
var G__8332__8334 = (function (_,f,start){
return start;
});
G__8332 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8332__8333.call(this,_,f);
case  3 :
return G__8332__8334.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8332;
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
var G__8378 = null;
var G__8378__8379 = (function (_,n){
return null;
});
var G__8378__8380 = (function (_,n,not_found){
return not_found;
});
G__8378 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8378__8379.call(this,_,n);
case  3 :
return G__8378__8380.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8378;
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
var ci_reduce__8448 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8433 = cljs.core._nth.call(null,cicoll,0);
var n__8434 = 1;

while(true){
if(cljs.core.truth_((n__8434 < cljs.core._count.call(null,cicoll))))
{{
var G__8455 = f.call(null,val__8433,cljs.core._nth.call(null,cicoll,n__8434));
var G__8456 = (n__8434 + 1);
val__8433 = G__8455;
n__8434 = G__8456;
continue;
}
} else
{return val__8433;
}
break;
}
}
});
var ci_reduce__8449 = (function (cicoll,f,val){
var val__8437 = val;
var n__8438 = 0;

while(true){
if(cljs.core.truth_((n__8438 < cljs.core._count.call(null,cicoll))))
{{
var G__8458 = f.call(null,val__8437,cljs.core._nth.call(null,cicoll,n__8438));
var G__8459 = (n__8438 + 1);
val__8437 = G__8458;
n__8438 = G__8459;
continue;
}
} else
{return val__8437;
}
break;
}
});
var ci_reduce__8450 = (function (cicoll,f,val,idx){
var val__8441 = val;
var n__8442 = idx;

while(true){
if(cljs.core.truth_((n__8442 < cljs.core._count.call(null,cicoll))))
{{
var G__8465 = f.call(null,val__8441,cljs.core._nth.call(null,cicoll,n__8442));
var G__8466 = (n__8442 + 1);
val__8441 = G__8465;
n__8442 = G__8466;
continue;
}
} else
{return val__8441;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8448.call(this,cicoll,f);
case  3 :
return ci_reduce__8449.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8450.call(this,cicoll,f,val,idx);
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
var this__8475 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8506 = null;
var G__8506__8507 = (function (_,f){
var this__8476 = this;
return cljs.core.ci_reduce.call(null,this__8476.a,f,(this__8476.a[this__8476.i]),(this__8476.i + 1));
});
var G__8506__8508 = (function (_,f,start){
var this__8477 = this;
return cljs.core.ci_reduce.call(null,this__8477.a,f,start,this__8477.i);
});
G__8506 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8506__8507.call(this,_,f);
case  3 :
return G__8506__8508.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8506;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8478 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8479 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8518 = null;
var G__8518__8519 = (function (coll,n){
var this__8480 = this;
var i__8481 = (n + this__8480.i);

if(cljs.core.truth_((i__8481 < this__8480.a.length)))
{return (this__8480.a[i__8481]);
} else
{return null;
}
});
var G__8518__8520 = (function (coll,n,not_found){
var this__8484 = this;
var i__8485 = (n + this__8484.i);

if(cljs.core.truth_((i__8485 < this__8484.a.length)))
{return (this__8484.a[i__8485]);
} else
{return not_found;
}
});
G__8518 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8518__8519.call(this,coll,n);
case  3 :
return G__8518__8520.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8518;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8488 = this;
return (this__8488.a.length - this__8488.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8493 = this;
return (this__8493.a[this__8493.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8496 = this;
if(cljs.core.truth_(((this__8496.i + 1) < this__8496.a.length)))
{return (new cljs.core.IndexedSeq(this__8496.a,(this__8496.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8501 = this;
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
var G__8540 = null;
var G__8540__8541 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8540__8542 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8540 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8540__8541.call(this,array,f);
case  3 :
return G__8540__8542.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8540;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8553 = null;
var G__8553__8554 = (function (array,k){
return (array[k]);
});
var G__8553__8555 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8553 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8553__8554.call(this,array,k);
case  3 :
return G__8553__8555.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8553;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8558 = null;
var G__8558__8559 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8558__8560 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8558 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8558__8559.call(this,array,n);
case  3 :
return G__8558__8560.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8558;
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
var temp__3698__auto____8577 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8577))
{var s__8579 = temp__3698__auto____8577;

return cljs.core._first.call(null,s__8579);
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
var G__8619 = cljs.core.next.call(null,s);
s = G__8619;
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
var s__8620 = cljs.core.seq.call(null,x);
var n__8621 = 0;

while(true){
if(cljs.core.truth_(s__8620))
{{
var G__8622 = cljs.core.next.call(null,s__8620);
var G__8623 = (n__8621 + 1);
s__8620 = G__8622;
n__8621 = G__8623;
continue;
}
} else
{return n__8621;
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
var conj__8643 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8644 = (function() { 
var G__8648__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8649 = conj.call(null,coll,x);
var G__8650 = cljs.core.first.call(null,xs);
var G__8651 = cljs.core.next.call(null,xs);
coll = G__8649;
x = G__8650;
xs = G__8651;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8648 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8648__delegate.call(this, coll, x, xs);
};
G__8648.cljs$lang$maxFixedArity = 2;
G__8648.cljs$lang$applyTo = (function (arglist__8652){
var coll = cljs.core.first(arglist__8652);
var x = cljs.core.first(cljs.core.next(arglist__8652));
var xs = cljs.core.rest(cljs.core.next(arglist__8652));
return G__8648__delegate.call(this, coll, x, xs);
});
return G__8648;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8643.call(this,coll,x);
default:
return conj__8644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8644.cljs$lang$applyTo;
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
var nth__8662 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8663 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8662.call(this,coll,n);
case  3 :
return nth__8663.call(this,coll,n,not_found);
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
var get__8668 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8669 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8668.call(this,o,k);
case  3 :
return get__8669.call(this,o,k,not_found);
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
var assoc__8675 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8676 = (function() { 
var G__8678__delegate = function (coll,k,v,kvs){
while(true){
var ret__8674 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8679 = ret__8674;
var G__8680 = cljs.core.first.call(null,kvs);
var G__8681 = cljs.core.second.call(null,kvs);
var G__8682 = cljs.core.nnext.call(null,kvs);
coll = G__8679;
k = G__8680;
v = G__8681;
kvs = G__8682;
continue;
}
} else
{return ret__8674;
}
break;
}
};
var G__8678 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8678__delegate.call(this, coll, k, v, kvs);
};
G__8678.cljs$lang$maxFixedArity = 3;
G__8678.cljs$lang$applyTo = (function (arglist__8685){
var coll = cljs.core.first(arglist__8685);
var k = cljs.core.first(cljs.core.next(arglist__8685));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8685)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8685)));
return G__8678__delegate.call(this, coll, k, v, kvs);
});
return G__8678;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8675.call(this,coll,k,v);
default:
return assoc__8676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8676.cljs$lang$applyTo;
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
var dissoc__8689 = (function (coll){
return coll;
});
var dissoc__8690 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8691 = (function() { 
var G__8695__delegate = function (coll,k,ks){
while(true){
var ret__8687 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8696 = ret__8687;
var G__8697 = cljs.core.first.call(null,ks);
var G__8698 = cljs.core.next.call(null,ks);
coll = G__8696;
k = G__8697;
ks = G__8698;
continue;
}
} else
{return ret__8687;
}
break;
}
};
var G__8695 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8695__delegate.call(this, coll, k, ks);
};
G__8695.cljs$lang$maxFixedArity = 2;
G__8695.cljs$lang$applyTo = (function (arglist__8699){
var coll = cljs.core.first(arglist__8699);
var k = cljs.core.first(cljs.core.next(arglist__8699));
var ks = cljs.core.rest(cljs.core.next(arglist__8699));
return G__8695__delegate.call(this, coll, k, ks);
});
return G__8695;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8689.call(this,coll);
case  2 :
return dissoc__8690.call(this,coll,k);
default:
return dissoc__8691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8691.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8704 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8705 = x__445__auto____8704;

if(cljs.core.truth_(and__3546__auto____8705))
{var and__3546__auto____8706 = x__445__auto____8704.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8706))
{return cljs.core.not.call(null,x__445__auto____8704.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8706;
}
} else
{return and__3546__auto____8705;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8704);
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
var disj__8732 = (function (coll){
return coll;
});
var disj__8733 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8734 = (function() { 
var G__8736__delegate = function (coll,k,ks){
while(true){
var ret__8725 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8737 = ret__8725;
var G__8738 = cljs.core.first.call(null,ks);
var G__8739 = cljs.core.next.call(null,ks);
coll = G__8737;
k = G__8738;
ks = G__8739;
continue;
}
} else
{return ret__8725;
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
G__8736.cljs$lang$applyTo = (function (arglist__8741){
var coll = cljs.core.first(arglist__8741);
var k = cljs.core.first(cljs.core.next(arglist__8741));
var ks = cljs.core.rest(cljs.core.next(arglist__8741));
return G__8736__delegate.call(this, coll, k, ks);
});
return G__8736;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8732.call(this,coll);
case  2 :
return disj__8733.call(this,coll,k);
default:
return disj__8734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8734.cljs$lang$applyTo;
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
{var x__445__auto____8751 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8752 = x__445__auto____8751;

if(cljs.core.truth_(and__3546__auto____8752))
{var and__3546__auto____8753 = x__445__auto____8751.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8753))
{return cljs.core.not.call(null,x__445__auto____8751.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8753;
}
} else
{return and__3546__auto____8752;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8751);
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
{var x__445__auto____8758 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8761 = x__445__auto____8758;

if(cljs.core.truth_(and__3546__auto____8761))
{var and__3546__auto____8763 = x__445__auto____8758.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8763))
{return cljs.core.not.call(null,x__445__auto____8758.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8763;
}
} else
{return and__3546__auto____8761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8758);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8767 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8769 = x__445__auto____8767;

if(cljs.core.truth_(and__3546__auto____8769))
{var and__3546__auto____8771 = x__445__auto____8767.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8771))
{return cljs.core.not.call(null,x__445__auto____8767.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8771;
}
} else
{return and__3546__auto____8769;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8767);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8785 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8785))
{var and__3546__auto____8786 = x__445__auto____8784.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8786))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8786;
}
} else
{return and__3546__auto____8785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8784);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8787 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8789 = x__445__auto____8787;

if(cljs.core.truth_(and__3546__auto____8789))
{var and__3546__auto____8791 = x__445__auto____8787.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8791))
{return cljs.core.not.call(null,x__445__auto____8787.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8791;
}
} else
{return and__3546__auto____8789;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8787);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8793 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8794 = x__445__auto____8793;

if(cljs.core.truth_(and__3546__auto____8794))
{var and__3546__auto____8795 = x__445__auto____8793.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core.not.call(null,x__445__auto____8793.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8795;
}
} else
{return and__3546__auto____8794;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8793);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8797 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8798 = x__445__auto____8797;

if(cljs.core.truth_(and__3546__auto____8798))
{var and__3546__auto____8803 = x__445__auto____8797.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8797.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8798;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8797);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8809 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8809.push(key);
}));
return keys__8809;
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
{var x__445__auto____8842 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8844 = x__445__auto____8842;

if(cljs.core.truth_(and__3546__auto____8844))
{var and__3546__auto____8846 = x__445__auto____8842.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8846))
{return cljs.core.not.call(null,x__445__auto____8842.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8846;
}
} else
{return and__3546__auto____8844;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8842);
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
var and__3546__auto____8867 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8869 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8869))
{return or__3548__auto____8869;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8867;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8879 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8879))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8879;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8880 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8880))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8880;
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
var and__3546__auto____8890 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8890))
{return (n == n.toFixed());
} else
{return and__3546__auto____8890;
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
if(cljs.core.truth_((function (){var and__3546__auto____8894 = coll;

if(cljs.core.truth_(and__3546__auto____8894))
{var and__3546__auto____8896 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8896))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8896;
}
} else
{return and__3546__auto____8894;
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
var distinct_QMARK___8923 = (function (x){
return true;
});
var distinct_QMARK___8924 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8925 = (function() { 
var G__8931__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8919 = cljs.core.set([y,x]);
var xs__8920 = more;

while(true){
var x__8921 = cljs.core.first.call(null,xs__8920);
var etc__8922 = cljs.core.next.call(null,xs__8920);

if(cljs.core.truth_(xs__8920))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8919,x__8921)))
{return false;
} else
{{
var G__8934 = cljs.core.conj.call(null,s__8919,x__8921);
var G__8935 = etc__8922;
s__8919 = G__8934;
xs__8920 = G__8935;
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
var G__8931 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8931__delegate.call(this, x, y, more);
};
G__8931.cljs$lang$maxFixedArity = 2;
G__8931.cljs$lang$applyTo = (function (arglist__8937){
var x = cljs.core.first(arglist__8937);
var y = cljs.core.first(cljs.core.next(arglist__8937));
var more = cljs.core.rest(cljs.core.next(arglist__8937));
return G__8931__delegate.call(this, x, y, more);
});
return G__8931;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8923.call(this,x);
case  2 :
return distinct_QMARK___8924.call(this,x,y);
default:
return distinct_QMARK___8925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8925.cljs$lang$applyTo;
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
var r__8940 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8940)))
{return r__8940;
} else
{if(cljs.core.truth_(r__8940))
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
var sort__8960 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8961 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8955 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8955,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8955);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8960.call(this,comp);
case  2 :
return sort__8961.call(this,comp,coll);
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
var sort_by__8971 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8972 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8971.call(this,keyfn,comp);
case  3 :
return sort_by__8972.call(this,keyfn,comp,coll);
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
var reduce__8987 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8988 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8987.call(this,f,val);
case  3 :
return reduce__8988.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9002 = (function (f,coll){
var temp__3695__auto____8993 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8993))
{var s__8995 = temp__3695__auto____8993;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8995),cljs.core.next.call(null,s__8995));
} else
{return f.call(null);
}
});
var seq_reduce__9003 = (function (f,val,coll){
var val__8999 = val;
var coll__9001 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9001))
{{
var G__9094 = f.call(null,val__8999,cljs.core.first.call(null,coll__9001));
var G__9095 = cljs.core.next.call(null,coll__9001);
val__8999 = G__9094;
coll__9001 = G__9095;
continue;
}
} else
{return val__8999;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9002.call(this,f,val);
case  3 :
return seq_reduce__9003.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9099 = null;
var G__9099__9100 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9099__9101 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9099 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9099__9100.call(this,coll,f);
case  3 :
return G__9099__9101.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9099;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9104 = (function (){
return 0;
});
var _PLUS___9105 = (function (x){
return x;
});
var _PLUS___9106 = (function (x,y){
return (x + y);
});
var _PLUS___9107 = (function() { 
var G__9110__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9110__delegate.call(this, x, y, more);
};
G__9110.cljs$lang$maxFixedArity = 2;
G__9110.cljs$lang$applyTo = (function (arglist__9112){
var x = cljs.core.first(arglist__9112);
var y = cljs.core.first(cljs.core.next(arglist__9112));
var more = cljs.core.rest(cljs.core.next(arglist__9112));
return G__9110__delegate.call(this, x, y, more);
});
return G__9110;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9104.call(this);
case  1 :
return _PLUS___9105.call(this,x);
case  2 :
return _PLUS___9106.call(this,x,y);
default:
return _PLUS___9107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9107.cljs$lang$applyTo;
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
var ___9116 = (function (x){
return (- x);
});
var ___9117 = (function (x,y){
return (x - y);
});
var ___9118 = (function() { 
var G__9120__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9120__delegate.call(this, x, y, more);
};
G__9120.cljs$lang$maxFixedArity = 2;
G__9120.cljs$lang$applyTo = (function (arglist__9122){
var x = cljs.core.first(arglist__9122);
var y = cljs.core.first(cljs.core.next(arglist__9122));
var more = cljs.core.rest(cljs.core.next(arglist__9122));
return G__9120__delegate.call(this, x, y, more);
});
return G__9120;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9116.call(this,x);
case  2 :
return ___9117.call(this,x,y);
default:
return ___9118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9118.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9132 = (function (){
return 1;
});
var _STAR___9133 = (function (x){
return x;
});
var _STAR___9134 = (function (x,y){
return (x * y);
});
var _STAR___9135 = (function() { 
var G__9140__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9140 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9140__delegate.call(this, x, y, more);
};
G__9140.cljs$lang$maxFixedArity = 2;
G__9140.cljs$lang$applyTo = (function (arglist__9141){
var x = cljs.core.first(arglist__9141);
var y = cljs.core.first(cljs.core.next(arglist__9141));
var more = cljs.core.rest(cljs.core.next(arglist__9141));
return G__9140__delegate.call(this, x, y, more);
});
return G__9140;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9132.call(this);
case  1 :
return _STAR___9133.call(this,x);
case  2 :
return _STAR___9134.call(this,x,y);
default:
return _STAR___9135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9135.cljs$lang$applyTo;
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
var _SLASH___9147 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9148 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9149 = (function() { 
var G__9152__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9152__delegate.call(this, x, y, more);
};
G__9152.cljs$lang$maxFixedArity = 2;
G__9152.cljs$lang$applyTo = (function (arglist__9155){
var x = cljs.core.first(arglist__9155);
var y = cljs.core.first(cljs.core.next(arglist__9155));
var more = cljs.core.rest(cljs.core.next(arglist__9155));
return G__9152__delegate.call(this, x, y, more);
});
return G__9152;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9147.call(this,x);
case  2 :
return _SLASH___9148.call(this,x,y);
default:
return _SLASH___9149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9149.cljs$lang$applyTo;
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
var _LT___9168 = (function (x){
return true;
});
var _LT___9169 = (function (x,y){
return (x < y);
});
var _LT___9170 = (function() { 
var G__9175__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9179 = y;
var G__9180 = cljs.core.first.call(null,more);
var G__9181 = cljs.core.next.call(null,more);
x = G__9179;
y = G__9180;
more = G__9181;
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
var G__9175 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9175__delegate.call(this, x, y, more);
};
G__9175.cljs$lang$maxFixedArity = 2;
G__9175.cljs$lang$applyTo = (function (arglist__9182){
var x = cljs.core.first(arglist__9182);
var y = cljs.core.first(cljs.core.next(arglist__9182));
var more = cljs.core.rest(cljs.core.next(arglist__9182));
return G__9175__delegate.call(this, x, y, more);
});
return G__9175;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9168.call(this,x);
case  2 :
return _LT___9169.call(this,x,y);
default:
return _LT___9170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9170.cljs$lang$applyTo;
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
var _LT__EQ___9198 = (function (x){
return true;
});
var _LT__EQ___9199 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9200 = (function() { 
var G__9203__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9204 = y;
var G__9205 = cljs.core.first.call(null,more);
var G__9206 = cljs.core.next.call(null,more);
x = G__9204;
y = G__9205;
more = G__9206;
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
var G__9203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9203__delegate.call(this, x, y, more);
};
G__9203.cljs$lang$maxFixedArity = 2;
G__9203.cljs$lang$applyTo = (function (arglist__9211){
var x = cljs.core.first(arglist__9211);
var y = cljs.core.first(cljs.core.next(arglist__9211));
var more = cljs.core.rest(cljs.core.next(arglist__9211));
return G__9203__delegate.call(this, x, y, more);
});
return G__9203;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9198.call(this,x);
case  2 :
return _LT__EQ___9199.call(this,x,y);
default:
return _LT__EQ___9200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9200.cljs$lang$applyTo;
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
var _GT___9215 = (function (x){
return true;
});
var _GT___9216 = (function (x,y){
return (x > y);
});
var _GT___9217 = (function() { 
var G__9222__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9225 = y;
var G__9227 = cljs.core.first.call(null,more);
var G__9228 = cljs.core.next.call(null,more);
x = G__9225;
y = G__9227;
more = G__9228;
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
var G__9222 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9222__delegate.call(this, x, y, more);
};
G__9222.cljs$lang$maxFixedArity = 2;
G__9222.cljs$lang$applyTo = (function (arglist__9234){
var x = cljs.core.first(arglist__9234);
var y = cljs.core.first(cljs.core.next(arglist__9234));
var more = cljs.core.rest(cljs.core.next(arglist__9234));
return G__9222__delegate.call(this, x, y, more);
});
return G__9222;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9215.call(this,x);
case  2 :
return _GT___9216.call(this,x,y);
default:
return _GT___9217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9217.cljs$lang$applyTo;
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
var _GT__EQ___9239 = (function (x){
return true;
});
var _GT__EQ___9240 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9241 = (function() { 
var G__9243__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9248 = y;
var G__9249 = cljs.core.first.call(null,more);
var G__9250 = cljs.core.next.call(null,more);
x = G__9248;
y = G__9249;
more = G__9250;
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
var G__9243 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9243__delegate.call(this, x, y, more);
};
G__9243.cljs$lang$maxFixedArity = 2;
G__9243.cljs$lang$applyTo = (function (arglist__9255){
var x = cljs.core.first(arglist__9255);
var y = cljs.core.first(cljs.core.next(arglist__9255));
var more = cljs.core.rest(cljs.core.next(arglist__9255));
return G__9243__delegate.call(this, x, y, more);
});
return G__9243;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9239.call(this,x);
case  2 :
return _GT__EQ___9240.call(this,x,y);
default:
return _GT__EQ___9241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9241.cljs$lang$applyTo;
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
var max__9257 = (function (x){
return x;
});
var max__9259 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9262 = (function() { 
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
G__9266.cljs$lang$applyTo = (function (arglist__9270){
var x = cljs.core.first(arglist__9270);
var y = cljs.core.first(cljs.core.next(arglist__9270));
var more = cljs.core.rest(cljs.core.next(arglist__9270));
return G__9266__delegate.call(this, x, y, more);
});
return G__9266;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9257.call(this,x);
case  2 :
return max__9259.call(this,x,y);
default:
return max__9262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9262.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9271 = (function (x){
return x;
});
var min__9272 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9273 = (function() { 
var G__9275__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9275 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9275__delegate.call(this, x, y, more);
};
G__9275.cljs$lang$maxFixedArity = 2;
G__9275.cljs$lang$applyTo = (function (arglist__9276){
var x = cljs.core.first(arglist__9276);
var y = cljs.core.first(cljs.core.next(arglist__9276));
var more = cljs.core.rest(cljs.core.next(arglist__9276));
return G__9275__delegate.call(this, x, y, more);
});
return G__9275;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9271.call(this,x);
case  2 :
return min__9272.call(this,x,y);
default:
return min__9273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9273.cljs$lang$applyTo;
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
var rem__9311 = (n % d);

return cljs.core.fix.call(null,((n - rem__9311) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9320 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9320));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9321 = (function (){
return Math.random.call(null);
});
var rand__9322 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9321.call(this);
case  1 :
return rand__9322.call(this,n);
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
var _EQ__EQ___9353 = (function (x){
return true;
});
var _EQ__EQ___9354 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9355 = (function() { 
var G__9357__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
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
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
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
G__9357.cljs$lang$applyTo = (function (arglist__9364){
var x = cljs.core.first(arglist__9364);
var y = cljs.core.first(cljs.core.next(arglist__9364));
var more = cljs.core.rest(cljs.core.next(arglist__9364));
return G__9357__delegate.call(this, x, y, more);
});
return G__9357;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9353.call(this,x);
case  2 :
return _EQ__EQ___9354.call(this,x,y);
default:
return _EQ__EQ___9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9355.cljs$lang$applyTo;
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
var n__9369 = n;
var xs__9371 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9372 = xs__9371;

if(cljs.core.truth_(and__3546__auto____9372))
{return (n__9369 > 0);
} else
{return and__3546__auto____9372;
}
})()))
{{
var G__9378 = (n__9369 - 1);
var G__9379 = cljs.core.next.call(null,xs__9371);
n__9369 = G__9378;
xs__9371 = G__9379;
continue;
}
} else
{return xs__9371;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9580 = null;
var G__9580__9582 = (function (coll,n){
var temp__3695__auto____9382 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9382))
{var xs__9567 = temp__3695__auto____9382;

return cljs.core.first.call(null,xs__9567);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9580__9585 = (function (coll,n,not_found){
var temp__3695__auto____9571 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9571))
{var xs__9574 = temp__3695__auto____9571;

return cljs.core.first.call(null,xs__9574);
} else
{return not_found;
}
});
G__9580 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9580__9582.call(this,coll,n);
case  3 :
return G__9580__9585.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9580;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9599 = (function (){
return "";
});
var str_STAR___9601 = (function (x){
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
var str_STAR___9602 = (function() { 
var G__9607__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9608 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9609 = cljs.core.next.call(null,more);
sb = G__9608;
more = G__9609;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9607 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9607__delegate.call(this, x, ys);
};
G__9607.cljs$lang$maxFixedArity = 1;
G__9607.cljs$lang$applyTo = (function (arglist__9611){
var x = cljs.core.first(arglist__9611);
var ys = cljs.core.rest(arglist__9611);
return G__9607__delegate.call(this, x, ys);
});
return G__9607;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9599.call(this);
case  1 :
return str_STAR___9601.call(this,x);
default:
return str_STAR___9602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9602.cljs$lang$applyTo;
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
var str__9619 = (function (){
return "";
});
var str__9620 = (function (x){
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
var str__9621 = (function() { 
var G__9624__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9624 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9624__delegate.call(this, x, ys);
};
G__9624.cljs$lang$maxFixedArity = 1;
G__9624.cljs$lang$applyTo = (function (arglist__9628){
var x = cljs.core.first(arglist__9628);
var ys = cljs.core.rest(arglist__9628);
return G__9624__delegate.call(this, x, ys);
});
return G__9624;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9619.call(this);
case  1 :
return str__9620.call(this,x);
default:
return str__9621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9621.cljs$lang$applyTo;
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
var symbol__9638 = (function (name){
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
var symbol__9639 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9638.call(this,ns);
case  2 :
return symbol__9639.call(this,ns,name);
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
var keyword__9643 = (function (name){
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
var keyword__9644 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9643.call(this,ns);
case  2 :
return keyword__9644.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9658 = cljs.core.seq.call(null,x);
var ys__9659 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9658)))
{return cljs.core.nil_QMARK_.call(null,ys__9659);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9659)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9658),cljs.core.first.call(null,ys__9659))))
{{
var G__9662 = cljs.core.next.call(null,xs__9658);
var G__9663 = cljs.core.next.call(null,ys__9659);
xs__9658 = G__9662;
ys__9659 = G__9663;
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
return cljs.core.reduce.call(null,(function (p1__9667_SHARP_,p2__9668_SHARP_){
return cljs.core.hash_combine.call(null,p1__9667_SHARP_,cljs.core.hash.call(null,p2__9668_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9672__9673 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9672__9673))
{var G__9675__9677 = cljs.core.first.call(null,G__9672__9673);
var vec__9676__9680 = G__9675__9677;
var key_name__9682 = cljs.core.nth.call(null,vec__9676__9680,0,null);
var f__9683 = cljs.core.nth.call(null,vec__9676__9680,1,null);
var G__9672__9684 = G__9672__9673;

var G__9675__9685 = G__9675__9677;
var G__9672__9686 = G__9672__9684;

while(true){
var vec__9687__9688 = G__9675__9685;
var key_name__9689 = cljs.core.nth.call(null,vec__9687__9688,0,null);
var f__9690 = cljs.core.nth.call(null,vec__9687__9688,1,null);
var G__9672__9691 = G__9672__9686;

var str_name__9692 = cljs.core.name.call(null,key_name__9689);

obj[str_name__9692] = f__9690;
var temp__3698__auto____9693 = cljs.core.next.call(null,G__9672__9691);

if(cljs.core.truth_(temp__3698__auto____9693))
{var G__9672__9694 = temp__3698__auto____9693;

{
var G__9697 = cljs.core.first.call(null,G__9672__9694);
var G__9698 = G__9672__9694;
G__9675__9685 = G__9697;
G__9672__9686 = G__9698;
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
var this__9703 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9704 = this;
return (new cljs.core.List(this__9704.meta,o,coll,(this__9704.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9710 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9715 = this;
return this__9715.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9720 = this;
return this__9720.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9724 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9731 = this;
return this__9731.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9734 = this;
return this__9734.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9738 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9740 = this;
return (new cljs.core.List(meta,this__9740.first,this__9740.rest,this__9740.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9742 = this;
return this__9742.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9743 = this;
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
var this__9755 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9756 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9757 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9758 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9759 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9760 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9761 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9762 = this;
return this__9762.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9764 = this;
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
list.cljs$lang$applyTo = (function (arglist__9788){
var items = cljs.core.seq( arglist__9788 );;
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
var this__9790 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9791 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9797 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9800 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9800.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9802 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9804 = this;
return this__9804.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9807 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9807.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9807.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9808 = this;
return this__9808.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9809 = this;
return (new cljs.core.Cons(meta,this__9809.first,this__9809.rest));
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
var G__9992 = null;
var G__9992__9993 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9992__9994 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9992 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9992__9993.call(this,string,f);
case  3 :
return G__9992__9994.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9992;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9997 = null;
var G__9997__9998 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9997__9999 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9997 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9997__9998.call(this,string,k);
case  3 :
return G__9997__9999.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9997;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10001 = null;
var G__10001__10002 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10001__10003 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10001 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10001__10002.call(this,string,n);
case  3 :
return G__10001__10003.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10001;
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
var G__10007 = null;
var G__10007__10008 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10007__10009 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10007 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10007__10008.call(this,this$,coll);
case  3 :
return G__10007__10009.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10007;
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
var x__10021 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10021;
} else
{lazy_seq.x = x__10021.call(null);
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
var this__10024 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10025 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10026 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10027 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10027.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10028 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10029 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10030 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10031 = this;
return this__10031.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10032 = this;
return (new cljs.core.LazySeq(meta,this__10032.realized,this__10032.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10045 = cljs.core.array.call(null);

var s__10046 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10046)))
{ary__10045.push(cljs.core.first.call(null,s__10046));
{
var G__10047 = cljs.core.next.call(null,s__10046);
s__10046 = G__10047;
continue;
}
} else
{return ary__10045;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10048 = s;
var i__10049 = n;
var sum__10050 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10051 = (i__10049 > 0);

if(cljs.core.truth_(and__3546__auto____10051))
{return cljs.core.seq.call(null,s__10048);
} else
{return and__3546__auto____10051;
}
})()))
{{
var G__10052 = cljs.core.next.call(null,s__10048);
var G__10053 = (i__10049 - 1);
var G__10054 = (sum__10050 + 1);
s__10048 = G__10052;
i__10049 = G__10053;
sum__10050 = G__10054;
continue;
}
} else
{return sum__10050;
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
var concat__10062 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10063 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10064 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10056 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10056))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10056),concat.call(null,cljs.core.rest.call(null,s__10056),y));
} else
{return y;
}
})));
});
var concat__10065 = (function() { 
var G__10232__delegate = function (x,y,zs){
var cat__10059 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10057 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10057))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10057),cat.call(null,cljs.core.rest.call(null,xys__10057),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10059.call(null,concat.call(null,x,y),zs);
};
var G__10232 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10232__delegate.call(this, x, y, zs);
};
G__10232.cljs$lang$maxFixedArity = 2;
G__10232.cljs$lang$applyTo = (function (arglist__10309){
var x = cljs.core.first(arglist__10309);
var y = cljs.core.first(cljs.core.next(arglist__10309));
var zs = cljs.core.rest(cljs.core.next(arglist__10309));
return G__10232__delegate.call(this, x, y, zs);
});
return G__10232;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10062.call(this);
case  1 :
return concat__10063.call(this,x);
case  2 :
return concat__10064.call(this,x,y);
default:
return concat__10065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10065.cljs$lang$applyTo;
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
var list_STAR___10315 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10316 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10317 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10318 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10319 = (function() { 
var G__10322__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10322 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10322__delegate.call(this, a, b, c, d, more);
};
G__10322.cljs$lang$maxFixedArity = 4;
G__10322.cljs$lang$applyTo = (function (arglist__10323){
var a = cljs.core.first(arglist__10323);
var b = cljs.core.first(cljs.core.next(arglist__10323));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10323)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10323))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10323))));
return G__10322__delegate.call(this, a, b, c, d, more);
});
return G__10322;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10315.call(this,a);
case  2 :
return list_STAR___10316.call(this,a,b);
case  3 :
return list_STAR___10317.call(this,a,b,c);
case  4 :
return list_STAR___10318.call(this,a,b,c,d);
default:
return list_STAR___10319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10319.cljs$lang$applyTo;
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
var fixed_arity__10326 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10326 + 1)) <= fixed_arity__10326)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10355 = (function (f,x,args){
var arglist__10331 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10333 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10331,fixed_arity__10333) <= fixed_arity__10333)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10331));
} else
{return f.cljs$lang$applyTo(arglist__10331);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10331));
}
});
var apply__10356 = (function (f,x,y,args){
var arglist__10337 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10338 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10337,fixed_arity__10338) <= fixed_arity__10338)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10337));
} else
{return f.cljs$lang$applyTo(arglist__10337);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10337));
}
});
var apply__10357 = (function (f,x,y,z,args){
var arglist__10342 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10343 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10342,fixed_arity__10343) <= fixed_arity__10343)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10342));
} else
{return f.cljs$lang$applyTo(arglist__10342);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10342));
}
});
var apply__10358 = (function() { 
var G__10366__delegate = function (f,a,b,c,d,args){
var arglist__10348 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10349 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10348,fixed_arity__10349) <= fixed_arity__10349)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10348));
} else
{return f.cljs$lang$applyTo(arglist__10348);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10348));
}
};
var G__10366 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10366__delegate.call(this, f, a, b, c, d, args);
};
G__10366.cljs$lang$maxFixedArity = 5;
G__10366.cljs$lang$applyTo = (function (arglist__10368){
var f = cljs.core.first(arglist__10368);
var a = cljs.core.first(cljs.core.next(arglist__10368));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10368)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10368))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10368)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10368)))));
return G__10366__delegate.call(this, f, a, b, c, d, args);
});
return G__10366;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10405){
var obj = cljs.core.first(arglist__10405);
var f = cljs.core.first(cljs.core.next(arglist__10405));
var args = cljs.core.rest(cljs.core.next(arglist__10405));
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
var not_EQ___10408 = (function (x){
return false;
});
var not_EQ___10409 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10410 = (function() { 
var G__10412__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10412 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10412__delegate.call(this, x, y, more);
};
G__10412.cljs$lang$maxFixedArity = 2;
G__10412.cljs$lang$applyTo = (function (arglist__10413){
var x = cljs.core.first(arglist__10413);
var y = cljs.core.first(cljs.core.next(arglist__10413));
var more = cljs.core.rest(cljs.core.next(arglist__10413));
return G__10412__delegate.call(this, x, y, more);
});
return G__10412;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10408.call(this,x);
case  2 :
return not_EQ___10409.call(this,x,y);
default:
return not_EQ___10410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10410.cljs$lang$applyTo;
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
var G__10422 = pred;
var G__10423 = cljs.core.next.call(null,coll);
pred = G__10422;
coll = G__10423;
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
{var or__3548__auto____10429 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10429))
{return or__3548__auto____10429;
} else
{{
var G__10432 = pred;
var G__10433 = cljs.core.next.call(null,coll);
pred = G__10432;
coll = G__10433;
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
var G__10457 = null;
var G__10457__10458 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10457__10459 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10457__10460 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10457__10461 = (function() { 
var G__10463__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10463 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10463__delegate.call(this, x, y, zs);
};
G__10463.cljs$lang$maxFixedArity = 2;
G__10463.cljs$lang$applyTo = (function (arglist__10464){
var x = cljs.core.first(arglist__10464);
var y = cljs.core.first(cljs.core.next(arglist__10464));
var zs = cljs.core.rest(cljs.core.next(arglist__10464));
return G__10463__delegate.call(this, x, y, zs);
});
return G__10463;
})()
;
G__10457 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10457__10458.call(this);
case  1 :
return G__10457__10459.call(this,x);
case  2 :
return G__10457__10460.call(this,x,y);
default:
return G__10457__10461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10457.cljs$lang$maxFixedArity = 2;
G__10457.cljs$lang$applyTo = G__10457__10461.cljs$lang$applyTo;
return G__10457;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10471__delegate = function (args){
return x;
};
var G__10471 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10471__delegate.call(this, args);
};
G__10471.cljs$lang$maxFixedArity = 0;
G__10471.cljs$lang$applyTo = (function (arglist__10473){
var args = cljs.core.seq( arglist__10473 );;
return G__10471__delegate.call(this, args);
});
return G__10471;
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
var comp__10562 = (function (){
return cljs.core.identity;
});
var comp__10563 = (function (f){
return f;
});
var comp__10564 = (function (f,g){
return (function() {
var G__10568 = null;
var G__10568__10569 = (function (){
return f.call(null,g.call(null));
});
var G__10568__10570 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10568__10571 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10568__10572 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10568__10573 = (function() { 
var G__10576__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10576 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10576__delegate.call(this, x, y, z, args);
};
G__10576.cljs$lang$maxFixedArity = 3;
G__10576.cljs$lang$applyTo = (function (arglist__10577){
var x = cljs.core.first(arglist__10577);
var y = cljs.core.first(cljs.core.next(arglist__10577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10577)));
return G__10576__delegate.call(this, x, y, z, args);
});
return G__10576;
})()
;
G__10568 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10568__10569.call(this);
case  1 :
return G__10568__10570.call(this,x);
case  2 :
return G__10568__10571.call(this,x,y);
case  3 :
return G__10568__10572.call(this,x,y,z);
default:
return G__10568__10573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10568.cljs$lang$maxFixedArity = 3;
G__10568.cljs$lang$applyTo = G__10568__10573.cljs$lang$applyTo;
return G__10568;
})()
});
var comp__10565 = (function (f,g,h){
return (function() {
var G__10580 = null;
var G__10580__10581 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10580__10582 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10580__10583 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10580__10584 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10580__10585 = (function() { 
var G__10593__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10593 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10593__delegate.call(this, x, y, z, args);
};
G__10593.cljs$lang$maxFixedArity = 3;
G__10593.cljs$lang$applyTo = (function (arglist__10595){
var x = cljs.core.first(arglist__10595);
var y = cljs.core.first(cljs.core.next(arglist__10595));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10595)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10595)));
return G__10593__delegate.call(this, x, y, z, args);
});
return G__10593;
})()
;
G__10580 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10580__10581.call(this);
case  1 :
return G__10580__10582.call(this,x);
case  2 :
return G__10580__10583.call(this,x,y);
case  3 :
return G__10580__10584.call(this,x,y,z);
default:
return G__10580__10585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10580.cljs$lang$maxFixedArity = 3;
G__10580.cljs$lang$applyTo = G__10580__10585.cljs$lang$applyTo;
return G__10580;
})()
});
var comp__10566 = (function() { 
var G__10596__delegate = function (f1,f2,f3,fs){
var fs__10503 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10597__delegate = function (args){
var ret__10511 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10503),args);
var fs__10514 = cljs.core.next.call(null,fs__10503);

while(true){
if(cljs.core.truth_(fs__10514))
{{
var G__10598 = cljs.core.first.call(null,fs__10514).call(null,ret__10511);
var G__10599 = cljs.core.next.call(null,fs__10514);
ret__10511 = G__10598;
fs__10514 = G__10599;
continue;
}
} else
{return ret__10511;
}
break;
}
};
var G__10597 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10597__delegate.call(this, args);
};
G__10597.cljs$lang$maxFixedArity = 0;
G__10597.cljs$lang$applyTo = (function (arglist__10600){
var args = cljs.core.seq( arglist__10600 );;
return G__10597__delegate.call(this, args);
});
return G__10597;
})()
;
};
var G__10596 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10596__delegate.call(this, f1, f2, f3, fs);
};
G__10596.cljs$lang$maxFixedArity = 3;
G__10596.cljs$lang$applyTo = (function (arglist__10602){
var f1 = cljs.core.first(arglist__10602);
var f2 = cljs.core.first(cljs.core.next(arglist__10602));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10602)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10602)));
return G__10596__delegate.call(this, f1, f2, f3, fs);
});
return G__10596;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10562.call(this);
case  1 :
return comp__10563.call(this,f1);
case  2 :
return comp__10564.call(this,f1,f2);
case  3 :
return comp__10565.call(this,f1,f2,f3);
default:
return comp__10566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10566.cljs$lang$applyTo;
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
var partial__10604 = (function (f,arg1){
return (function() { 
var G__10609__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10609 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10609__delegate.call(this, args);
};
G__10609.cljs$lang$maxFixedArity = 0;
G__10609.cljs$lang$applyTo = (function (arglist__10684){
var args = cljs.core.seq( arglist__10684 );;
return G__10609__delegate.call(this, args);
});
return G__10609;
})()
;
});
var partial__10605 = (function (f,arg1,arg2){
return (function() { 
var G__10685__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10685 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10685__delegate.call(this, args);
};
G__10685.cljs$lang$maxFixedArity = 0;
G__10685.cljs$lang$applyTo = (function (arglist__10686){
var args = cljs.core.seq( arglist__10686 );;
return G__10685__delegate.call(this, args);
});
return G__10685;
})()
;
});
var partial__10606 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10687__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10687 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10687__delegate.call(this, args);
};
G__10687.cljs$lang$maxFixedArity = 0;
G__10687.cljs$lang$applyTo = (function (arglist__10689){
var args = cljs.core.seq( arglist__10689 );;
return G__10687__delegate.call(this, args);
});
return G__10687;
})()
;
});
var partial__10607 = (function() { 
var G__10690__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10691__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10691 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10691__delegate.call(this, args);
};
G__10691.cljs$lang$maxFixedArity = 0;
G__10691.cljs$lang$applyTo = (function (arglist__10693){
var args = cljs.core.seq( arglist__10693 );;
return G__10691__delegate.call(this, args);
});
return G__10691;
})()
;
};
var G__10690 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10690__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10690.cljs$lang$maxFixedArity = 4;
G__10690.cljs$lang$applyTo = (function (arglist__10694){
var f = cljs.core.first(arglist__10694);
var arg1 = cljs.core.first(cljs.core.next(arglist__10694));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10694)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10694))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10694))));
return G__10690__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10690;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10604.call(this,f,arg1);
case  3 :
return partial__10605.call(this,f,arg1,arg2);
case  4 :
return partial__10606.call(this,f,arg1,arg2,arg3);
default:
return partial__10607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10607.cljs$lang$applyTo;
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
var fnil__10708 = (function (f,x){
return (function() {
var G__10713 = null;
var G__10713__10714 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10713__10715 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10713__10716 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10713__10717 = (function() { 
var G__10719__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10719 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10719__delegate.call(this, a, b, c, ds);
};
G__10719.cljs$lang$maxFixedArity = 3;
G__10719.cljs$lang$applyTo = (function (arglist__10720){
var a = cljs.core.first(arglist__10720);
var b = cljs.core.first(cljs.core.next(arglist__10720));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10720)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10720)));
return G__10719__delegate.call(this, a, b, c, ds);
});
return G__10719;
})()
;
G__10713 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10713__10714.call(this,a);
case  2 :
return G__10713__10715.call(this,a,b);
case  3 :
return G__10713__10716.call(this,a,b,c);
default:
return G__10713__10717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10713.cljs$lang$maxFixedArity = 3;
G__10713.cljs$lang$applyTo = G__10713__10717.cljs$lang$applyTo;
return G__10713;
})()
});
var fnil__10709 = (function (f,x,y){
return (function() {
var G__10721 = null;
var G__10721__10722 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10721__10723 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10721__10724 = (function() { 
var G__10726__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10726 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10726__delegate.call(this, a, b, c, ds);
};
G__10726.cljs$lang$maxFixedArity = 3;
G__10726.cljs$lang$applyTo = (function (arglist__10738){
var a = cljs.core.first(arglist__10738);
var b = cljs.core.first(cljs.core.next(arglist__10738));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10738)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10738)));
return G__10726__delegate.call(this, a, b, c, ds);
});
return G__10726;
})()
;
G__10721 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10721__10722.call(this,a,b);
case  3 :
return G__10721__10723.call(this,a,b,c);
default:
return G__10721__10724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10721.cljs$lang$maxFixedArity = 3;
G__10721.cljs$lang$applyTo = G__10721__10724.cljs$lang$applyTo;
return G__10721;
})()
});
var fnil__10710 = (function (f,x,y,z){
return (function() {
var G__10742 = null;
var G__10742__10743 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10742__10744 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10742__10745 = (function() { 
var G__10754__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10754 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10754__delegate.call(this, a, b, c, ds);
};
G__10754.cljs$lang$maxFixedArity = 3;
G__10754.cljs$lang$applyTo = (function (arglist__10757){
var a = cljs.core.first(arglist__10757);
var b = cljs.core.first(cljs.core.next(arglist__10757));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10757)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10757)));
return G__10754__delegate.call(this, a, b, c, ds);
});
return G__10754;
})()
;
G__10742 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10742__10743.call(this,a,b);
case  3 :
return G__10742__10744.call(this,a,b,c);
default:
return G__10742__10745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10742.cljs$lang$maxFixedArity = 3;
G__10742.cljs$lang$applyTo = G__10742__10745.cljs$lang$applyTo;
return G__10742;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10708.call(this,f,x);
case  3 :
return fnil__10709.call(this,f,x,y);
case  4 :
return fnil__10710.call(this,f,x,y,z);
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
var mapi__10764 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10761 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10761))
{var s__10762 = temp__3698__auto____10761;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10762)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10762)));
} else
{return null;
}
})));
});

return mapi__10764.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11002 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11002))
{var s__11005 = temp__3698__auto____11002;

var x__11008 = f.call(null,cljs.core.first.call(null,s__11005));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11008)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11005));
} else
{return cljs.core.cons.call(null,x__11008,keep.call(null,f,cljs.core.rest.call(null,s__11005)));
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
var keepi__11169 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11159))
{var s__11160 = temp__3698__auto____11159;

var x__11161 = f.call(null,idx,cljs.core.first.call(null,s__11160));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11161)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11160));
} else
{return cljs.core.cons.call(null,x__11161,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11160)));
}
} else
{return null;
}
})));
});

return keepi__11169.call(null,0,coll);
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
var every_pred__11320 = (function (p){
return (function() {
var ep1 = null;
var ep1__11327 = (function (){
return true;
});
var ep1__11328 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11329 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11207 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11207))
{return p.call(null,y);
} else
{return and__3546__auto____11207;
}
})());
});
var ep1__11330 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11208 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11208))
{var and__3546__auto____11209 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11209))
{return p.call(null,z);
} else
{return and__3546__auto____11209;
}
} else
{return and__3546__auto____11208;
}
})());
});
var ep1__11331 = (function() { 
var G__11343__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11211 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11211))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11211;
}
})());
};
var G__11343 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11343__delegate.call(this, x, y, z, args);
};
G__11343.cljs$lang$maxFixedArity = 3;
G__11343.cljs$lang$applyTo = (function (arglist__11349){
var x = cljs.core.first(arglist__11349);
var y = cljs.core.first(cljs.core.next(arglist__11349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11349)));
return G__11343__delegate.call(this, x, y, z, args);
});
return G__11343;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11327.call(this);
case  1 :
return ep1__11328.call(this,x);
case  2 :
return ep1__11329.call(this,x,y);
case  3 :
return ep1__11330.call(this,x,y,z);
default:
return ep1__11331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11331.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11321 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11401 = (function (){
return true;
});
var ep2__11402 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11213 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11213))
{return p2.call(null,x);
} else
{return and__3546__auto____11213;
}
})());
});
var ep2__11403 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11220 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11220))
{var and__3546__auto____11221 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11221))
{var and__3546__auto____11222 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11222))
{return p2.call(null,y);
} else
{return and__3546__auto____11222;
}
} else
{return and__3546__auto____11221;
}
} else
{return and__3546__auto____11220;
}
})());
});
var ep2__11405 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11223 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11223))
{var and__3546__auto____11225 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11225))
{var and__3546__auto____11226 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11226))
{var and__3546__auto____11228 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11228))
{var and__3546__auto____11229 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11229))
{return p2.call(null,z);
} else
{return and__3546__auto____11229;
}
} else
{return and__3546__auto____11228;
}
} else
{return and__3546__auto____11226;
}
} else
{return and__3546__auto____11225;
}
} else
{return and__3546__auto____11223;
}
})());
});
var ep2__11406 = (function() { 
var G__11420__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11242 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11242))
{return cljs.core.every_QMARK_.call(null,(function (p1__11025_SHARP_){
var and__3546__auto____11244 = p1.call(null,p1__11025_SHARP_);

if(cljs.core.truth_(and__3546__auto____11244))
{return p2.call(null,p1__11025_SHARP_);
} else
{return and__3546__auto____11244;
}
}),args);
} else
{return and__3546__auto____11242;
}
})());
};
var G__11420 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11420__delegate.call(this, x, y, z, args);
};
G__11420.cljs$lang$maxFixedArity = 3;
G__11420.cljs$lang$applyTo = (function (arglist__11430){
var x = cljs.core.first(arglist__11430);
var y = cljs.core.first(cljs.core.next(arglist__11430));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11430)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11430)));
return G__11420__delegate.call(this, x, y, z, args);
});
return G__11420;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11401.call(this);
case  1 :
return ep2__11402.call(this,x);
case  2 :
return ep2__11403.call(this,x,y);
case  3 :
return ep2__11405.call(this,x,y,z);
default:
return ep2__11406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11406.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11322 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11442 = (function (){
return true;
});
var ep3__11443 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11253 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11253))
{var and__3546__auto____11254 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11254))
{return p3.call(null,x);
} else
{return and__3546__auto____11254;
}
} else
{return and__3546__auto____11253;
}
})());
});
var ep3__11444 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11256 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11256))
{var and__3546__auto____11258 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11258))
{var and__3546__auto____11262 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11262))
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
{return and__3546__auto____11262;
}
} else
{return and__3546__auto____11258;
}
} else
{return and__3546__auto____11256;
}
})());
});
var ep3__11445 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11270 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11270))
{var and__3546__auto____11272 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11272))
{var and__3546__auto____11273 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11273))
{var and__3546__auto____11277 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11277))
{var and__3546__auto____11278 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11278))
{var and__3546__auto____11279 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11282 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11282))
{var and__3546__auto____11288 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11288))
{return p3.call(null,z);
} else
{return and__3546__auto____11288;
}
} else
{return and__3546__auto____11282;
}
} else
{return and__3546__auto____11279;
}
} else
{return and__3546__auto____11278;
}
} else
{return and__3546__auto____11277;
}
} else
{return and__3546__auto____11273;
}
} else
{return and__3546__auto____11272;
}
} else
{return and__3546__auto____11270;
}
})());
});
var ep3__11446 = (function() { 
var G__11477__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11296 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11296))
{return cljs.core.every_QMARK_.call(null,(function (p1__11028_SHARP_){
var and__3546__auto____11298 = p1.call(null,p1__11028_SHARP_);

if(cljs.core.truth_(and__3546__auto____11298))
{var and__3546__auto____11299 = p2.call(null,p1__11028_SHARP_);

if(cljs.core.truth_(and__3546__auto____11299))
{return p3.call(null,p1__11028_SHARP_);
} else
{return and__3546__auto____11299;
}
} else
{return and__3546__auto____11298;
}
}),args);
} else
{return and__3546__auto____11296;
}
})());
};
var G__11477 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11477__delegate.call(this, x, y, z, args);
};
G__11477.cljs$lang$maxFixedArity = 3;
G__11477.cljs$lang$applyTo = (function (arglist__11491){
var x = cljs.core.first(arglist__11491);
var y = cljs.core.first(cljs.core.next(arglist__11491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11491)));
return G__11477__delegate.call(this, x, y, z, args);
});
return G__11477;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11442.call(this);
case  1 :
return ep3__11443.call(this,x);
case  2 :
return ep3__11444.call(this,x,y);
case  3 :
return ep3__11445.call(this,x,y,z);
default:
return ep3__11446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11446.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11324 = (function() { 
var G__11507__delegate = function (p1,p2,p3,ps){
var ps__11301 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11510 = (function (){
return true;
});
var epn__11511 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11030_SHARP_){
return p1__11030_SHARP_.call(null,x);
}),ps__11301);
});
var epn__11512 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11033_SHARP_){
var and__3546__auto____11305 = p1__11033_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11305))
{return p1__11033_SHARP_.call(null,y);
} else
{return and__3546__auto____11305;
}
}),ps__11301);
});
var epn__11513 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11034_SHARP_){
var and__3546__auto____11308 = p1__11034_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11308))
{var and__3546__auto____11311 = p1__11034_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11311))
{return p1__11034_SHARP_.call(null,z);
} else
{return and__3546__auto____11311;
}
} else
{return and__3546__auto____11308;
}
}),ps__11301);
});
var epn__11514 = (function() { 
var G__11532__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11315 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11315))
{return cljs.core.every_QMARK_.call(null,(function (p1__11037_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11037_SHARP_,args);
}),ps__11301);
} else
{return and__3546__auto____11315;
}
})());
};
var G__11532 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11532__delegate.call(this, x, y, z, args);
};
G__11532.cljs$lang$maxFixedArity = 3;
G__11532.cljs$lang$applyTo = (function (arglist__11540){
var x = cljs.core.first(arglist__11540);
var y = cljs.core.first(cljs.core.next(arglist__11540));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11540)));
return G__11532__delegate.call(this, x, y, z, args);
});
return G__11532;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11510.call(this);
case  1 :
return epn__11511.call(this,x);
case  2 :
return epn__11512.call(this,x,y);
case  3 :
return epn__11513.call(this,x,y,z);
default:
return epn__11514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11514.cljs$lang$applyTo;
return epn;
})()
};
var G__11507 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11507__delegate.call(this, p1, p2, p3, ps);
};
G__11507.cljs$lang$maxFixedArity = 3;
G__11507.cljs$lang$applyTo = (function (arglist__11543){
var p1 = cljs.core.first(arglist__11543);
var p2 = cljs.core.first(cljs.core.next(arglist__11543));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11543)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11543)));
return G__11507__delegate.call(this, p1, p2, p3, ps);
});
return G__11507;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11320.call(this,p1);
case  2 :
return every_pred__11321.call(this,p1,p2);
case  3 :
return every_pred__11322.call(this,p1,p2,p3);
default:
return every_pred__11324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11324.cljs$lang$applyTo;
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
var some_fn__11755 = (function (p){
return (function() {
var sp1 = null;
var sp1__11760 = (function (){
return null;
});
var sp1__11761 = (function (x){
return p.call(null,x);
});
var sp1__11762 = (function (x,y){
var or__3548__auto____11560 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11560))
{return or__3548__auto____11560;
} else
{return p.call(null,y);
}
});
var sp1__11763 = (function (x,y,z){
var or__3548__auto____11564 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11564))
{return or__3548__auto____11564;
} else
{var or__3548__auto____11567 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11567))
{return or__3548__auto____11567;
} else
{return p.call(null,z);
}
}
});
var sp1__11764 = (function() { 
var G__11770__delegate = function (x,y,z,args){
var or__3548__auto____11576 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11770 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11770__delegate.call(this, x, y, z, args);
};
G__11770.cljs$lang$maxFixedArity = 3;
G__11770.cljs$lang$applyTo = (function (arglist__11774){
var x = cljs.core.first(arglist__11774);
var y = cljs.core.first(cljs.core.next(arglist__11774));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11774)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11774)));
return G__11770__delegate.call(this, x, y, z, args);
});
return G__11770;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11760.call(this);
case  1 :
return sp1__11761.call(this,x);
case  2 :
return sp1__11762.call(this,x,y);
case  3 :
return sp1__11763.call(this,x,y,z);
default:
return sp1__11764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11764.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11756 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11780 = (function (){
return null;
});
var sp2__11781 = (function (x){
var or__3548__auto____11603 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11603))
{return or__3548__auto____11603;
} else
{return p2.call(null,x);
}
});
var sp2__11782 = (function (x,y){
var or__3548__auto____11645 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11645))
{return or__3548__auto____11645;
} else
{var or__3548__auto____11646 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11646))
{return or__3548__auto____11646;
} else
{var or__3548__auto____11648 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11648))
{return or__3548__auto____11648;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11783 = (function (x,y,z){
var or__3548__auto____11655 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11655))
{return or__3548__auto____11655;
} else
{var or__3548__auto____11656 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11656))
{return or__3548__auto____11656;
} else
{var or__3548__auto____11657 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11657))
{return or__3548__auto____11657;
} else
{var or__3548__auto____11658 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11658))
{return or__3548__auto____11658;
} else
{var or__3548__auto____11660 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11660))
{return or__3548__auto____11660;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11784 = (function() { 
var G__11802__delegate = function (x,y,z,args){
var or__3548__auto____11690 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11690))
{return or__3548__auto____11690;
} else
{return cljs.core.some.call(null,(function (p1__11184_SHARP_){
var or__3548__auto____11695 = p1.call(null,p1__11184_SHARP_);

if(cljs.core.truth_(or__3548__auto____11695))
{return or__3548__auto____11695;
} else
{return p2.call(null,p1__11184_SHARP_);
}
}),args);
}
};
var G__11802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11802__delegate.call(this, x, y, z, args);
};
G__11802.cljs$lang$maxFixedArity = 3;
G__11802.cljs$lang$applyTo = (function (arglist__11804){
var x = cljs.core.first(arglist__11804);
var y = cljs.core.first(cljs.core.next(arglist__11804));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11804)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11804)));
return G__11802__delegate.call(this, x, y, z, args);
});
return G__11802;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11780.call(this);
case  1 :
return sp2__11781.call(this,x);
case  2 :
return sp2__11782.call(this,x,y);
case  3 :
return sp2__11783.call(this,x,y,z);
default:
return sp2__11784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11784.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11757 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11807 = (function (){
return null;
});
var sp3__11808 = (function (x){
var or__3548__auto____11706 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11706))
{return or__3548__auto____11706;
} else
{var or__3548__auto____11707 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11707))
{return or__3548__auto____11707;
} else
{return p3.call(null,x);
}
}
});
var sp3__11809 = (function (x,y){
var or__3548__auto____11714 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11714))
{return or__3548__auto____11714;
} else
{var or__3548__auto____11715 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11715))
{return or__3548__auto____11715;
} else
{var or__3548__auto____11716 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11716))
{return or__3548__auto____11716;
} else
{var or__3548__auto____11717 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11717))
{return or__3548__auto____11717;
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
var sp3__11810 = (function (x,y,z){
var or__3548__auto____11719 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11719))
{return or__3548__auto____11719;
} else
{var or__3548__auto____11720 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11720))
{return or__3548__auto____11720;
} else
{var or__3548__auto____11721 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11721))
{return or__3548__auto____11721;
} else
{var or__3548__auto____11722 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11722))
{return or__3548__auto____11722;
} else
{var or__3548__auto____11723 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
} else
{var or__3548__auto____11724 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{var or__3548__auto____11725 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11725))
{return or__3548__auto____11725;
} else
{var or__3548__auto____11726 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11726))
{return or__3548__auto____11726;
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
var sp3__11811 = (function() { 
var G__11817__delegate = function (x,y,z,args){
var or__3548__auto____11728 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11728))
{return or__3548__auto____11728;
} else
{return cljs.core.some.call(null,(function (p1__11187_SHARP_){
var or__3548__auto____11729 = p1.call(null,p1__11187_SHARP_);

if(cljs.core.truth_(or__3548__auto____11729))
{return or__3548__auto____11729;
} else
{var or__3548__auto____11731 = p2.call(null,p1__11187_SHARP_);

if(cljs.core.truth_(or__3548__auto____11731))
{return or__3548__auto____11731;
} else
{return p3.call(null,p1__11187_SHARP_);
}
}
}),args);
}
};
var G__11817 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11817__delegate.call(this, x, y, z, args);
};
G__11817.cljs$lang$maxFixedArity = 3;
G__11817.cljs$lang$applyTo = (function (arglist__11820){
var x = cljs.core.first(arglist__11820);
var y = cljs.core.first(cljs.core.next(arglist__11820));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11820)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11820)));
return G__11817__delegate.call(this, x, y, z, args);
});
return G__11817;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11807.call(this);
case  1 :
return sp3__11808.call(this,x);
case  2 :
return sp3__11809.call(this,x,y);
case  3 :
return sp3__11810.call(this,x,y,z);
default:
return sp3__11811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11811.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11758 = (function() { 
var G__11824__delegate = function (p1,p2,p3,ps){
var ps__11733 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11826 = (function (){
return null;
});
var spn__11827 = (function (x){
return cljs.core.some.call(null,(function (p1__11188_SHARP_){
return p1__11188_SHARP_.call(null,x);
}),ps__11733);
});
var spn__11828 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11189_SHARP_){
var or__3548__auto____11741 = p1__11189_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11741))
{return or__3548__auto____11741;
} else
{return p1__11189_SHARP_.call(null,y);
}
}),ps__11733);
});
var spn__11829 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11191_SHARP_){
var or__3548__auto____11742 = p1__11191_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11742))
{return or__3548__auto____11742;
} else
{var or__3548__auto____11744 = p1__11191_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11744))
{return or__3548__auto____11744;
} else
{return p1__11191_SHARP_.call(null,z);
}
}
}),ps__11733);
});
var spn__11830 = (function() { 
var G__11839__delegate = function (x,y,z,args){
var or__3548__auto____11746 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11746))
{return or__3548__auto____11746;
} else
{return cljs.core.some.call(null,(function (p1__11193_SHARP_){
return cljs.core.some.call(null,p1__11193_SHARP_,args);
}),ps__11733);
}
};
var G__11839 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11839__delegate.call(this, x, y, z, args);
};
G__11839.cljs$lang$maxFixedArity = 3;
G__11839.cljs$lang$applyTo = (function (arglist__11840){
var x = cljs.core.first(arglist__11840);
var y = cljs.core.first(cljs.core.next(arglist__11840));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11840)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11840)));
return G__11839__delegate.call(this, x, y, z, args);
});
return G__11839;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11826.call(this);
case  1 :
return spn__11827.call(this,x);
case  2 :
return spn__11828.call(this,x,y);
case  3 :
return spn__11829.call(this,x,y,z);
default:
return spn__11830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11830.cljs$lang$applyTo;
return spn;
})()
};
var G__11824 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11824__delegate.call(this, p1, p2, p3, ps);
};
G__11824.cljs$lang$maxFixedArity = 3;
G__11824.cljs$lang$applyTo = (function (arglist__11841){
var p1 = cljs.core.first(arglist__11841);
var p2 = cljs.core.first(cljs.core.next(arglist__11841));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11841)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11841)));
return G__11824__delegate.call(this, p1, p2, p3, ps);
});
return G__11824;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11755.call(this,p1);
case  2 :
return some_fn__11756.call(this,p1,p2);
case  3 :
return some_fn__11757.call(this,p1,p2,p3);
default:
return some_fn__11758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11758.cljs$lang$applyTo;
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
var map__11861 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11845 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11845))
{var s__11846 = temp__3698__auto____11845;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11846)),map.call(null,f,cljs.core.rest.call(null,s__11846)));
} else
{return null;
}
})));
});
var map__11862 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11848 = cljs.core.seq.call(null,c1);
var s2__11849 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11850 = s1__11848;

if(cljs.core.truth_(and__3546__auto____11850))
{return s2__11849;
} else
{return and__3546__auto____11850;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11848),cljs.core.first.call(null,s2__11849)),map.call(null,f,cljs.core.rest.call(null,s1__11848),cljs.core.rest.call(null,s2__11849)));
} else
{return null;
}
})));
});
var map__11863 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11852 = cljs.core.seq.call(null,c1);
var s2__11853 = cljs.core.seq.call(null,c2);
var s3__11854 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11855 = s1__11852;

if(cljs.core.truth_(and__3546__auto____11855))
{var and__3546__auto____11856 = s2__11853;

if(cljs.core.truth_(and__3546__auto____11856))
{return s3__11854;
} else
{return and__3546__auto____11856;
}
} else
{return and__3546__auto____11855;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11852),cljs.core.first.call(null,s2__11853),cljs.core.first.call(null,s3__11854)),map.call(null,f,cljs.core.rest.call(null,s1__11852),cljs.core.rest.call(null,s2__11853),cljs.core.rest.call(null,s3__11854)));
} else
{return null;
}
})));
});
var map__11864 = (function() { 
var G__11869__delegate = function (f,c1,c2,c3,colls){
var step__11860 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11858 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11858)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11858),step.call(null,map.call(null,cljs.core.rest,ss__11858)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11549_SHARP_){
return cljs.core.apply.call(null,f,p1__11549_SHARP_);
}),step__11860.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11869 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11869__delegate.call(this, f, c1, c2, c3, colls);
};
G__11869.cljs$lang$maxFixedArity = 4;
G__11869.cljs$lang$applyTo = (function (arglist__11872){
var f = cljs.core.first(arglist__11872);
var c1 = cljs.core.first(cljs.core.next(arglist__11872));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11872)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11872))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11872))));
return G__11869__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11869;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11861.call(this,f,c1);
case  3 :
return map__11862.call(this,f,c1,c2);
case  4 :
return map__11863.call(this,f,c1,c2,c3);
default:
return map__11864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11864.cljs$lang$applyTo;
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
{var temp__3698__auto____11873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11873))
{var s__11874 = temp__3698__auto____11873;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11874),take.call(null,(n - 1),cljs.core.rest.call(null,s__11874)));
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
var step__11882 = (function (n,coll){
while(true){
var s__11880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11881 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11881))
{return s__11880;
} else
{return and__3546__auto____11881;
}
})()))
{{
var G__11890 = (n - 1);
var G__11892 = cljs.core.rest.call(null,s__11880);
n = G__11890;
coll = G__11892;
continue;
}
} else
{return s__11880;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11882.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11895 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11896 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11895.call(this,n);
case  2 :
return drop_last__11896.call(this,n,s);
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
var s__11904 = cljs.core.seq.call(null,coll);
var lead__11905 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11905))
{{
var G__11908 = cljs.core.next.call(null,s__11904);
var G__11909 = cljs.core.next.call(null,lead__11905);
s__11904 = G__11908;
lead__11905 = G__11909;
continue;
}
} else
{return s__11904;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11912 = (function (pred,coll){
while(true){
var s__11910 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11911 = s__11910;

if(cljs.core.truth_(and__3546__auto____11911))
{return pred.call(null,cljs.core.first.call(null,s__11910));
} else
{return and__3546__auto____11911;
}
})()))
{{
var G__11916 = pred;
var G__11917 = cljs.core.rest.call(null,s__11910);
pred = G__11916;
coll = G__11917;
continue;
}
} else
{return s__11910;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11912.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11920 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11920))
{var s__11921 = temp__3698__auto____11920;

return cljs.core.concat.call(null,s__11921,cycle.call(null,s__11921));
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
var repeat__11927 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11928 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11927.call(this,n);
case  2 :
return repeat__11928.call(this,n,x);
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
var repeatedly__11937 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11938 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11937.call(this,n);
case  2 :
return repeatedly__11938.call(this,n,f);
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
var interleave__11971 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11940 = cljs.core.seq.call(null,c1);
var s2__11941 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11942 = s1__11940;

if(cljs.core.truth_(and__3546__auto____11942))
{return s2__11941;
} else
{return and__3546__auto____11942;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11940),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11941),interleave.call(null,cljs.core.rest.call(null,s1__11940),cljs.core.rest.call(null,s2__11941))));
} else
{return null;
}
})));
});
var interleave__11972 = (function() { 
var G__11977__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11943 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11943)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11943),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11943)));
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
G__11977.cljs$lang$applyTo = (function (arglist__11981){
var c1 = cljs.core.first(arglist__11981);
var c2 = cljs.core.first(cljs.core.next(arglist__11981));
var colls = cljs.core.rest(cljs.core.next(arglist__11981));
return G__11977__delegate.call(this, c1, c2, colls);
});
return G__11977;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11971.call(this,c1,c2);
default:
return interleave__11972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11972.cljs$lang$applyTo;
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
var cat__11989 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11987 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11987))
{var coll__11988 = temp__3695__auto____11987;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11988),cat.call(null,cljs.core.rest.call(null,coll__11988),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11989.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11997 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11998 = (function() { 
var G__12000__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12000 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12000__delegate.call(this, f, coll, colls);
};
G__12000.cljs$lang$maxFixedArity = 2;
G__12000.cljs$lang$applyTo = (function (arglist__12001){
var f = cljs.core.first(arglist__12001);
var coll = cljs.core.first(cljs.core.next(arglist__12001));
var colls = cljs.core.rest(cljs.core.next(arglist__12001));
return G__12000__delegate.call(this, f, coll, colls);
});
return G__12000;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11997.call(this,f,coll);
default:
return mapcat__11998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11998.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12011 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12011))
{var s__12012 = temp__3698__auto____12011;

var f__12013 = cljs.core.first.call(null,s__12012);
var r__12014 = cljs.core.rest.call(null,s__12012);

if(cljs.core.truth_(pred.call(null,f__12013)))
{return cljs.core.cons.call(null,f__12013,filter.call(null,pred,r__12014));
} else
{return filter.call(null,pred,r__12014);
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
var walk__12025 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12025.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12020_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12020_SHARP_));
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
var partition__12203 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12204 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12188))
{var s__12190 = temp__3698__auto____12188;

var p__12191 = cljs.core.take.call(null,n,s__12190);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12191))))
{return cljs.core.cons.call(null,p__12191,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12190)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12205 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12195 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12195))
{var s__12196 = temp__3698__auto____12195;

var p__12198 = cljs.core.take.call(null,n,s__12196);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12198))))
{return cljs.core.cons.call(null,p__12198,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12196)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12198,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12203.call(this,n,step);
case  3 :
return partition__12204.call(this,n,step,pad);
case  4 :
return partition__12205.call(this,n,step,pad,coll);
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
var get_in__12225 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12226 = (function (m,ks,not_found){
var sentinel__12217 = cljs.core.lookup_sentinel;
var m__12218 = m;
var ks__12219 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12219))
{var m__12220 = cljs.core.get.call(null,m__12218,cljs.core.first.call(null,ks__12219),sentinel__12217);

if(cljs.core.truth_((sentinel__12217 === m__12220)))
{return not_found;
} else
{{
var G__12234 = sentinel__12217;
var G__12235 = m__12220;
var G__12236 = cljs.core.next.call(null,ks__12219);
sentinel__12217 = G__12234;
m__12218 = G__12235;
ks__12219 = G__12236;
continue;
}
}
} else
{return m__12218;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12225.call(this,m,ks);
case  3 :
return get_in__12226.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12239,v){
var vec__12241__12243 = p__12239;
var k__12244 = cljs.core.nth.call(null,vec__12241__12243,0,null);
var ks__12245 = cljs.core.nthnext.call(null,vec__12241__12243,1);

if(cljs.core.truth_(ks__12245))
{return cljs.core.assoc.call(null,m,k__12244,assoc_in.call(null,cljs.core.get.call(null,m,k__12244),ks__12245,v));
} else
{return cljs.core.assoc.call(null,m,k__12244,v);
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
var update_in__delegate = function (m,p__12261,f,args){
var vec__12264__12265 = p__12261;
var k__12266 = cljs.core.nth.call(null,vec__12264__12265,0,null);
var ks__12267 = cljs.core.nthnext.call(null,vec__12264__12265,1);

if(cljs.core.truth_(ks__12267))
{return cljs.core.assoc.call(null,m,k__12266,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12266),ks__12267,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12266,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12266),args));
}
};
var update_in = function (m,p__12261,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12261, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12326){
var m = cljs.core.first(arglist__12326);
var p__12261 = cljs.core.first(cljs.core.next(arglist__12326));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12326)));
return update_in__delegate.call(this, m, p__12261, f, args);
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
var this__12333 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12389 = null;
var G__12389__12391 = (function (coll,k){
var this__12335 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12389__12393 = (function (coll,k,not_found){
var this__12336 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12389 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12389__12391.call(this,coll,k);
case  3 :
return G__12389__12393.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12389;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12339 = this;
var new_array__12340 = cljs.core.aclone.call(null,this__12339.array);

(new_array__12340[k] = v);
return (new cljs.core.Vector(this__12339.meta,new_array__12340));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12396 = null;
var G__12396__12397 = (function (coll,k){
var this__12342 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12396__12398 = (function (coll,k,not_found){
var this__12344 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12396 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12396__12397.call(this,coll,k);
case  3 :
return G__12396__12398.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12396;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12346 = this;
var new_array__12348 = cljs.core.aclone.call(null,this__12346.array);

new_array__12348.push(o);
return (new cljs.core.Vector(this__12346.meta,new_array__12348));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12402 = null;
var G__12402__12403 = (function (v,f){
var this__12352 = this;
return cljs.core.ci_reduce.call(null,this__12352.array,f);
});
var G__12402__12404 = (function (v,f,start){
var this__12353 = this;
return cljs.core.ci_reduce.call(null,this__12353.array,f,start);
});
G__12402 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12402__12403.call(this,v,f);
case  3 :
return G__12402__12404.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12402;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12356 = this;
if(cljs.core.truth_((this__12356.array.length > 0)))
{var vector_seq__12360 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12356.array.length)))
{return cljs.core.cons.call(null,(this__12356.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12360.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12361 = this;
return this__12361.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12363 = this;
var count__12365 = this__12363.array.length;

if(cljs.core.truth_((count__12365 > 0)))
{return (this__12363.array[(count__12365 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12367 = this;
if(cljs.core.truth_((this__12367.array.length > 0)))
{var new_array__12369 = cljs.core.aclone.call(null,this__12367.array);

new_array__12369.pop();
return (new cljs.core.Vector(this__12367.meta,new_array__12369));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12371 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12375 = this;
return (new cljs.core.Vector(meta,this__12375.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12377 = this;
return this__12377.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12573 = null;
var G__12573__12574 = (function (coll,n){
var this__12379 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12381 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12381))
{return (n < this__12379.array.length);
} else
{return and__3546__auto____12381;
}
})()))
{return (this__12379.array[n]);
} else
{return null;
}
});
var G__12573__12575 = (function (coll,n,not_found){
var this__12383 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12385 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12385))
{return (n < this__12383.array.length);
} else
{return and__3546__auto____12385;
}
})()))
{return (this__12383.array[n]);
} else
{return not_found;
}
});
G__12573 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12573__12574.call(this,coll,n);
case  3 :
return G__12573__12575.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12573;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12387 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12387.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12585){
var args = cljs.core.seq( arglist__12585 );;
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
var this__12589 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12619 = null;
var G__12619__12620 = (function (coll,k){
var this__12590 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12619__12621 = (function (coll,k,not_found){
var this__12591 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12619 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12619__12620.call(this,coll,k);
case  3 :
return G__12619__12621.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12619;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12592 = this;
var v_pos__12593 = (this__12592.start + key);

return (new cljs.core.Subvec(this__12592.meta,cljs.core._assoc.call(null,this__12592.v,v_pos__12593,val),this__12592.start,((this__12592.end > (v_pos__12593 + 1)) ? this__12592.end : (v_pos__12593 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12627 = null;
var G__12627__12629 = (function (coll,k){
var this__12594 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12627__12630 = (function (coll,k,not_found){
var this__12595 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12627 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12627__12629.call(this,coll,k);
case  3 :
return G__12627__12630.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12627;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12596 = this;
return (new cljs.core.Subvec(this__12596.meta,cljs.core._assoc_n.call(null,this__12596.v,this__12596.end,o),this__12596.start,(this__12596.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12640 = null;
var G__12640__12641 = (function (coll,f){
var this__12597 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12640__12642 = (function (coll,f,start){
var this__12598 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12640 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12640__12641.call(this,coll,f);
case  3 :
return G__12640__12642.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12640;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12599 = this;
var subvec_seq__12602 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12599.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12599.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12602.call(null,this__12599.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12603 = this;
return (this__12603.end - this__12603.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12604 = this;
return cljs.core._nth.call(null,this__12604.v,(this__12604.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12605 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12605.start,this__12605.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12605.meta,this__12605.v,this__12605.start,(this__12605.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12607 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12609 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12613 = this;
return (new cljs.core.Subvec(meta,this__12613.v,this__12613.start,this__12613.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12614 = this;
return this__12614.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12659 = null;
var G__12659__12660 = (function (coll,n){
var this__12615 = this;
return cljs.core._nth.call(null,this__12615.v,(this__12615.start + n));
});
var G__12659__12661 = (function (coll,n,not_found){
var this__12616 = this;
return cljs.core._nth.call(null,this__12616.v,(this__12616.start + n),not_found);
});
G__12659 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12659__12660.call(this,coll,n);
case  3 :
return G__12659__12661.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12659;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12618 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12618.meta);
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
var subvec__12706 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12707 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12706.call(this,v,start);
case  3 :
return subvec__12707.call(this,v,start,end);
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
var this__12723 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12724 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12727 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12727.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12729 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12731 = this;
return cljs.core._first.call(null,this__12731.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12732 = this;
var temp__3695__auto____12733 = cljs.core.next.call(null,this__12732.front);

if(cljs.core.truth_(temp__3695__auto____12733))
{var f1__12734 = temp__3695__auto____12733;

return (new cljs.core.PersistentQueueSeq(this__12732.meta,f1__12734,this__12732.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12732.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12732.meta,this__12732.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12741 = this;
return this__12741.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12745 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12745.front,this__12745.rear));
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
var this__12793 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12795 = this;
if(cljs.core.truth_(this__12795.front))
{return (new cljs.core.PersistentQueue(this__12795.meta,(this__12795.count + 1),this__12795.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12799 = this__12795.rear;

if(cljs.core.truth_(or__3548__auto____12799))
{return or__3548__auto____12799;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12795.meta,(this__12795.count + 1),cljs.core.conj.call(null,this__12795.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12803 = this;
var rear__12806 = cljs.core.seq.call(null,this__12803.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12809 = this__12803.front;

if(cljs.core.truth_(or__3548__auto____12809))
{return or__3548__auto____12809;
} else
{return rear__12806;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12803.front,cljs.core.seq.call(null,rear__12806)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12811 = this;
return this__12811.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12815 = this;
return cljs.core._first.call(null,this__12815.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12817 = this;
if(cljs.core.truth_(this__12817.front))
{var temp__3695__auto____12820 = cljs.core.next.call(null,this__12817.front);

if(cljs.core.truth_(temp__3695__auto____12820))
{var f1__12821 = temp__3695__auto____12820;

return (new cljs.core.PersistentQueue(this__12817.meta,(this__12817.count - 1),f1__12821,this__12817.rear));
} else
{return (new cljs.core.PersistentQueue(this__12817.meta,(this__12817.count - 1),cljs.core.seq.call(null,this__12817.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12823 = this;
return cljs.core.first.call(null,this__12823.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12825 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12828 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12831 = this;
return (new cljs.core.PersistentQueue(meta,this__12831.count,this__12831.front,this__12831.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12833 = this;
return this__12833.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12834 = this;
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
var this__12928 = this;
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
var len__12951 = array.length;

var i__12952 = 0;

while(true){
if(cljs.core.truth_((i__12952 < len__12951)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12952]))))
{return i__12952;
} else
{{
var G__12957 = (i__12952 + incr);
i__12952 = G__12957;
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
var obj_map_contains_key_QMARK___12959 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12960 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12958 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12958))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12958;
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
return obj_map_contains_key_QMARK___12959.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12960.call(this,k,strobj,true_val,false_val);
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
var this__12967 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13064 = null;
var G__13064__13065 = (function (coll,k){
var this__12968 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13064__13066 = (function (coll,k,not_found){
var this__12971 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12971.strobj,(this__12971.strobj[k]),not_found);
});
G__13064 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13064__13065.call(this,coll,k);
case  3 :
return G__13064__13066.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13064;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12973 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13035 = goog.object.clone.call(null,this__12973.strobj);
var overwrite_QMARK___13036 = new_strobj__13035.hasOwnProperty(k);

(new_strobj__13035[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13036))
{return (new cljs.core.ObjMap(this__12973.meta,this__12973.keys,new_strobj__13035));
} else
{var new_keys__13037 = cljs.core.aclone.call(null,this__12973.keys);

new_keys__13037.push(k);
return (new cljs.core.ObjMap(this__12973.meta,new_keys__13037,new_strobj__13035));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12973.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13042 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13042.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13075 = null;
var G__13075__13076 = (function (coll,k){
var this__13043 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13075__13077 = (function (coll,k,not_found){
var this__13044 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13075 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13075__13076.call(this,coll,k);
case  3 :
return G__13075__13077.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13075;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13045 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13048 = this;
if(cljs.core.truth_((this__13048.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12962_SHARP_){
return cljs.core.vector.call(null,p1__12962_SHARP_,(this__13048.strobj[p1__12962_SHARP_]));
}),this__13048.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13049 = this;
return this__13049.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13050 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13051 = this;
return (new cljs.core.ObjMap(meta,this__13051.keys,this__13051.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13052 = this;
return this__13052.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13053 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13053.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13054 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13056 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13056))
{return this__13054.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13056;
}
})()))
{var new_keys__13058 = cljs.core.aclone.call(null,this__13054.keys);
var new_strobj__13060 = goog.object.clone.call(null,this__13054.strobj);

new_keys__13058.splice(cljs.core.scan_array.call(null,1,k,new_keys__13058),1);
cljs.core.js_delete.call(null,new_strobj__13060,k);
return (new cljs.core.ObjMap(this__13054.meta,new_keys__13058,new_strobj__13060));
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
var this__13168 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13321 = null;
var G__13321__13322 = (function (coll,k){
var this__13170 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13321__13323 = (function (coll,k,not_found){
var this__13171 = this;
var bucket__13172 = (this__13171.hashobj[cljs.core.hash.call(null,k)]);
var i__13253 = (cljs.core.truth_(bucket__13172)?cljs.core.scan_array.call(null,2,k,bucket__13172):null);

if(cljs.core.truth_(i__13253))
{return (bucket__13172[(i__13253 + 1)]);
} else
{return not_found;
}
});
G__13321 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13321__13322.call(this,coll,k);
case  3 :
return G__13321__13323.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13321;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13256 = this;
var h__13257 = cljs.core.hash.call(null,k);
var bucket__13258 = (this__13256.hashobj[h__13257]);

if(cljs.core.truth_(bucket__13258))
{var new_bucket__13259 = cljs.core.aclone.call(null,bucket__13258);
var new_hashobj__13260 = goog.object.clone.call(null,this__13256.hashobj);

(new_hashobj__13260[h__13257] = new_bucket__13259);
var temp__3695__auto____13263 = cljs.core.scan_array.call(null,2,k,new_bucket__13259);

if(cljs.core.truth_(temp__3695__auto____13263))
{var i__13264 = temp__3695__auto____13263;

(new_bucket__13259[(i__13264 + 1)] = v);
return (new cljs.core.HashMap(this__13256.meta,this__13256.count,new_hashobj__13260));
} else
{new_bucket__13259.push(k,v);
return (new cljs.core.HashMap(this__13256.meta,(this__13256.count + 1),new_hashobj__13260));
}
} else
{var new_hashobj__13265 = goog.object.clone.call(null,this__13256.hashobj);

(new_hashobj__13265[h__13257] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13256.meta,(this__13256.count + 1),new_hashobj__13265));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13267 = this;
var bucket__13268 = (this__13267.hashobj[cljs.core.hash.call(null,k)]);
var i__13269 = (cljs.core.truth_(bucket__13268)?cljs.core.scan_array.call(null,2,k,bucket__13268):null);

if(cljs.core.truth_(i__13269))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13331 = null;
var G__13331__13332 = (function (coll,k){
var this__13271 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13331__13333 = (function (coll,k,not_found){
var this__13273 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13331 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13331__13332.call(this,coll,k);
case  3 :
return G__13331__13333.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13331;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13276 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13280 = this;
if(cljs.core.truth_((this__13280.count > 0)))
{var hashes__13285 = cljs.core.js_keys.call(null,this__13280.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13082_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13280.hashobj[p1__13082_SHARP_])));
}),hashes__13285);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13288 = this;
return this__13288.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13290 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13292 = this;
return (new cljs.core.HashMap(meta,this__13292.count,this__13292.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13294 = this;
return this__13294.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13296 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13296.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13299 = this;
var h__13303 = cljs.core.hash.call(null,k);
var bucket__13306 = (this__13299.hashobj[h__13303]);
var i__13307 = (cljs.core.truth_(bucket__13306)?cljs.core.scan_array.call(null,2,k,bucket__13306):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13307)))
{return coll;
} else
{var new_hashobj__13308 = goog.object.clone.call(null,this__13299.hashobj);

if(cljs.core.truth_((3 > bucket__13306.length)))
{cljs.core.js_delete.call(null,new_hashobj__13308,h__13303);
} else
{var new_bucket__13311 = cljs.core.aclone.call(null,bucket__13306);

new_bucket__13311.splice(i__13307,2);
(new_hashobj__13308[h__13303] = new_bucket__13311);
}
return (new cljs.core.HashMap(this__13299.meta,(this__13299.count - 1),new_hashobj__13308));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13364 = ks.length;

var i__13365 = 0;
var out__13366 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13365 < len__13364)))
{{
var G__13368 = (i__13365 + 1);
var G__13369 = cljs.core.assoc.call(null,out__13366,(ks[i__13365]),(vs[i__13365]));
i__13365 = G__13368;
out__13366 = G__13369;
continue;
}
} else
{return out__13366;
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
var out__13373 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13372))
{{
var G__13374 = cljs.core.nnext.call(null,in$__13372);
var G__13375 = cljs.core.assoc.call(null,out__13373,cljs.core.first.call(null,in$__13372),cljs.core.second.call(null,in$__13372));
in$__13372 = G__13374;
out__13373 = G__13375;
continue;
}
} else
{return out__13373;
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
hash_map.cljs$lang$applyTo = (function (arglist__13376){
var keyvals = cljs.core.seq( arglist__13376 );;
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
{return cljs.core.reduce.call(null,(function (p1__13384_SHARP_,p2__13385_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13391 = p1__13384_SHARP_;

if(cljs.core.truth_(or__3548__auto____13391))
{return or__3548__auto____13391;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13385_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13396){
var maps = cljs.core.seq( arglist__13396 );;
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
{var merge_entry__13401 = (function (m,e){
var k__13399 = cljs.core.first.call(null,e);
var v__13400 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13399)))
{return cljs.core.assoc.call(null,m,k__13399,f.call(null,cljs.core.get.call(null,m,k__13399),v__13400));
} else
{return cljs.core.assoc.call(null,m,k__13399,v__13400);
}
});
var merge2__13405 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13401,(function (){var or__3548__auto____13403 = m1;

if(cljs.core.truth_(or__3548__auto____13403))
{return or__3548__auto____13403;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13405,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13410){
var f = cljs.core.first(arglist__13410);
var maps = cljs.core.rest(arglist__13410);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13419 = cljs.core.ObjMap.fromObject([],{});
var keys__13420 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13420))
{var key__13422 = cljs.core.first.call(null,keys__13420);
var entry__13426 = cljs.core.get.call(null,map,key__13422,"﷐'user/not-found");

{
var G__13430 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13426,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13419,key__13422,entry__13426):ret__13419);
var G__13431 = cljs.core.next.call(null,keys__13420);
ret__13419 = G__13430;
keys__13420 = G__13431;
continue;
}
} else
{return ret__13419;
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
var this__13450 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13486 = null;
var G__13486__13487 = (function (coll,v){
var this__13451 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13486__13488 = (function (coll,v,not_found){
var this__13452 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13452.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13486 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13486__13487.call(this,coll,v);
case  3 :
return G__13486__13488.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13486;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13491 = null;
var G__13491__13492 = (function (coll,k){
var this__13453 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13491__13493 = (function (coll,k,not_found){
var this__13456 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13491__13492.call(this,coll,k);
case  3 :
return G__13491__13493.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13491;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13457 = this;
return (new cljs.core.Set(this__13457.meta,cljs.core.assoc.call(null,this__13457.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13459 = this;
return cljs.core.keys.call(null,this__13459.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13462 = this;
return (new cljs.core.Set(this__13462.meta,cljs.core.dissoc.call(null,this__13462.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13463 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13464 = this;
var and__3546__auto____13469 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13469))
{var and__3546__auto____13470 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13470))
{return cljs.core.every_QMARK_.call(null,(function (p1__13415_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13415_SHARP_);
}),other);
} else
{return and__3546__auto____13470;
}
} else
{return and__3546__auto____13469;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13476 = this;
return (new cljs.core.Set(meta,this__13476.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13478 = this;
return this__13478.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13479 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13479.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13517 = cljs.core.seq.call(null,coll);
var out__13519 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13517))))
{{
var G__13521 = cljs.core.rest.call(null,in$__13517);
var G__13522 = cljs.core.conj.call(null,out__13519,cljs.core.first.call(null,in$__13517));
in$__13517 = G__13521;
out__13519 = G__13522;
continue;
}
} else
{return out__13519;
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
{var n__13526 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13530 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13530))
{var e__13532 = temp__3695__auto____13530;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13532));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13526,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13512_SHARP_){
var temp__3695__auto____13535 = cljs.core.find.call(null,smap,p1__13512_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13535))
{var e__13536 = temp__3695__auto____13535;

return cljs.core.second.call(null,e__13536);
} else
{return p1__13512_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13582 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13543,seen){
while(true){
var vec__13544__13545 = p__13543;
var f__13546 = cljs.core.nth.call(null,vec__13544__13545,0,null);
var xs__13547 = vec__13544__13545;

var temp__3698__auto____13548 = cljs.core.seq.call(null,xs__13547);

if(cljs.core.truth_(temp__3698__auto____13548))
{var s__13549 = temp__3698__auto____13548;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13546)))
{{
var G__13597 = cljs.core.rest.call(null,s__13549);
var G__13599 = seen;
p__13543 = G__13597;
seen = G__13599;
continue;
}
} else
{return cljs.core.cons.call(null,f__13546,step.call(null,cljs.core.rest.call(null,s__13549),cljs.core.conj.call(null,seen,f__13546)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13582.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13605 = cljs.core.Vector.fromArray([]);
var s__13606 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13606)))
{{
var G__13610 = cljs.core.conj.call(null,ret__13605,cljs.core.first.call(null,s__13606));
var G__13611 = cljs.core.next.call(null,s__13606);
ret__13605 = G__13610;
s__13606 = G__13611;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13605);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13615 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13615))
{return or__3548__auto____13615;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13619 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13619 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13619 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13635 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13635))
{return or__3548__auto____13635;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13637 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13637 > -1)))
{return cljs.core.subs.call(null,x,2,i__13637);
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
var map__13652 = cljs.core.ObjMap.fromObject([],{});
var ks__13653 = cljs.core.seq.call(null,keys);
var vs__13654 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13657 = ks__13653;

if(cljs.core.truth_(and__3546__auto____13657))
{return vs__13654;
} else
{return and__3546__auto____13657;
}
})()))
{{
var G__13662 = cljs.core.assoc.call(null,map__13652,cljs.core.first.call(null,ks__13653),cljs.core.first.call(null,vs__13654));
var G__13663 = cljs.core.next.call(null,ks__13653);
var G__13664 = cljs.core.next.call(null,vs__13654);
map__13652 = G__13662;
ks__13653 = G__13663;
vs__13654 = G__13664;
continue;
}
} else
{return map__13652;
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
var max_key__13672 = (function (k,x){
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
var G__13677__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13650_SHARP_,p2__13651_SHARP_){
return max_key.call(null,k,p1__13650_SHARP_,p2__13651_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13677 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13677__delegate.call(this, k, x, y, more);
};
G__13677.cljs$lang$maxFixedArity = 3;
G__13677.cljs$lang$applyTo = (function (arglist__13682){
var k = cljs.core.first(arglist__13682);
var x = cljs.core.first(cljs.core.next(arglist__13682));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13682)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13682)));
return G__13677__delegate.call(this, k, x, y, more);
});
return G__13677;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13672.call(this,k,x);
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
var G__13731__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13667_SHARP_,p2__13668_SHARP_){
return min_key.call(null,k,p1__13667_SHARP_,p2__13668_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13731 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13731__delegate.call(this, k, x, y, more);
};
G__13731.cljs$lang$maxFixedArity = 3;
G__13731.cljs$lang$applyTo = (function (arglist__13736){
var k = cljs.core.first(arglist__13736);
var x = cljs.core.first(cljs.core.next(arglist__13736));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13736)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13736)));
return G__13731__delegate.call(this, k, x, y, more);
});
return G__13731;
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
var partition_all__13797 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13798 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13792 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13792))
{var s__13793 = temp__3698__auto____13792;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13793),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13793)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13797.call(this,n,step);
case  3 :
return partition_all__13798.call(this,n,step,coll);
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
var temp__3698__auto____13853 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13853))
{var s__13855 = temp__3698__auto____13853;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13855))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13855),take_while.call(null,pred,cljs.core.rest.call(null,s__13855)));
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
var this__13875 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13876 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13921 = null;
var G__13921__13922 = (function (rng,f){
var this__13877 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13921__13923 = (function (rng,f,s){
var this__13878 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13921 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13921__13922.call(this,rng,f);
case  3 :
return G__13921__13923.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13921;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13883 = this;
var comp__13888 = (cljs.core.truth_((this__13883.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13888.call(null,this__13883.start,this__13883.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13889 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13889.end - this__13889.start) / this__13889.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13890 = this;
return this__13890.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13891 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13891.meta,(this__13891.start + this__13891.step),this__13891.end,this__13891.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13892 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13893 = this;
return (new cljs.core.Range(meta,this__13893.start,this__13893.end,this__13893.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13895 = this;
return this__13895.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13974 = null;
var G__13974__13977 = (function (rng,n){
var this__13899 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13899.start + (n * this__13899.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13900 = (this__13899.start > this__13899.end);

if(cljs.core.truth_(and__3546__auto____13900))
{return cljs.core._EQ_.call(null,this__13899.step,0);
} else
{return and__3546__auto____13900;
}
})()))
{return this__13899.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13974__13978 = (function (rng,n,not_found){
var this__13906 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13906.start + (n * this__13906.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13908 = (this__13906.start > this__13906.end);

if(cljs.core.truth_(and__3546__auto____13908))
{return cljs.core._EQ_.call(null,this__13906.step,0);
} else
{return and__3546__auto____13908;
}
})()))
{return this__13906.start;
} else
{return not_found;
}
}
});
G__13974 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13974__13977.call(this,rng,n);
case  3 :
return G__13974__13978.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13974;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13910 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13910.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13996 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13997 = (function (end){
return range.call(null,0,end,1);
});
var range__13998 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13999 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13996.call(this);
case  1 :
return range__13997.call(this,start);
case  2 :
return range__13998.call(this,start,end);
case  3 :
return range__13999.call(this,start,end,step);
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
var temp__3698__auto____14006 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14006))
{var s__14007 = temp__3698__auto____14006;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14007),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14007)));
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
var temp__3698__auto____14012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14012))
{var s__14013 = temp__3698__auto____14012;

var fst__14014 = cljs.core.first.call(null,s__14013);
var fv__14015 = f.call(null,fst__14014);
var run__14016 = cljs.core.cons.call(null,fst__14014,cljs.core.take_while.call(null,(function (p1__14008_SHARP_){
return cljs.core._EQ_.call(null,fv__14015,f.call(null,p1__14008_SHARP_));
}),cljs.core.next.call(null,s__14013)));

return cljs.core.cons.call(null,run__14016,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14016),s__14013))));
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
var reductions__14073 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14060 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14060))
{var s__14061 = temp__3695__auto____14060;

return reductions.call(null,f,cljs.core.first.call(null,s__14061),cljs.core.rest.call(null,s__14061));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14074 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14064))
{var s__14065 = temp__3698__auto____14064;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14065)),cljs.core.rest.call(null,s__14065));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14073.call(this,f,init);
case  3 :
return reductions__14074.call(this,f,init,coll);
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
var juxt__14122 = (function (f){
return (function() {
var G__14127 = null;
var G__14127__14128 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14127__14129 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14127__14130 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14127__14131 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14127__14132 = (function() { 
var G__14135__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14135 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14135__delegate.call(this, x, y, z, args);
};
G__14135.cljs$lang$maxFixedArity = 3;
G__14135.cljs$lang$applyTo = (function (arglist__14138){
var x = cljs.core.first(arglist__14138);
var y = cljs.core.first(cljs.core.next(arglist__14138));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14138)));
return G__14135__delegate.call(this, x, y, z, args);
});
return G__14135;
})()
;
G__14127 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14127__14128.call(this);
case  1 :
return G__14127__14129.call(this,x);
case  2 :
return G__14127__14130.call(this,x,y);
case  3 :
return G__14127__14131.call(this,x,y,z);
default:
return G__14127__14132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14127.cljs$lang$maxFixedArity = 3;
G__14127.cljs$lang$applyTo = G__14127__14132.cljs$lang$applyTo;
return G__14127;
})()
});
var juxt__14123 = (function (f,g){
return (function() {
var G__14141 = null;
var G__14141__14142 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14141__14143 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14141__14144 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14141__14145 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14141__14146 = (function() { 
var G__14155__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14155 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14155__delegate.call(this, x, y, z, args);
};
G__14155.cljs$lang$maxFixedArity = 3;
G__14155.cljs$lang$applyTo = (function (arglist__14156){
var x = cljs.core.first(arglist__14156);
var y = cljs.core.first(cljs.core.next(arglist__14156));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14156)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14156)));
return G__14155__delegate.call(this, x, y, z, args);
});
return G__14155;
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
return G__14141__14144.call(this,x,y);
case  3 :
return G__14141__14145.call(this,x,y,z);
default:
return G__14141__14146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14141.cljs$lang$maxFixedArity = 3;
G__14141.cljs$lang$applyTo = G__14141__14146.cljs$lang$applyTo;
return G__14141;
})()
});
var juxt__14124 = (function (f,g,h){
return (function() {
var G__14157 = null;
var G__14157__14158 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14157__14159 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14157__14160 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14157__14161 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14157__14162 = (function() { 
var G__14217__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14217 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14217__delegate.call(this, x, y, z, args);
};
G__14217.cljs$lang$maxFixedArity = 3;
G__14217.cljs$lang$applyTo = (function (arglist__14220){
var x = cljs.core.first(arglist__14220);
var y = cljs.core.first(cljs.core.next(arglist__14220));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14220)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14220)));
return G__14217__delegate.call(this, x, y, z, args);
});
return G__14217;
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
var juxt__14125 = (function() { 
var G__14223__delegate = function (f,g,h,fs){
var fs__14098 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14224 = null;
var G__14224__14225 = (function (){
return cljs.core.reduce.call(null,(function (p1__14035_SHARP_,p2__14036_SHARP_){
return cljs.core.conj.call(null,p1__14035_SHARP_,p2__14036_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14098);
});
var G__14224__14226 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14037_SHARP_,p2__14038_SHARP_){
return cljs.core.conj.call(null,p1__14037_SHARP_,p2__14038_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14098);
});
var G__14224__14227 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14041_SHARP_,p2__14042_SHARP_){
return cljs.core.conj.call(null,p1__14041_SHARP_,p2__14042_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14098);
});
var G__14224__14228 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14044_SHARP_,p2__14045_SHARP_){
return cljs.core.conj.call(null,p1__14044_SHARP_,p2__14045_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14098);
});
var G__14224__14229 = (function() { 
var G__14232__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14048_SHARP_,p2__14050_SHARP_){
return cljs.core.conj.call(null,p1__14048_SHARP_,cljs.core.apply.call(null,p2__14050_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14098);
};
var G__14232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14232__delegate.call(this, x, y, z, args);
};
G__14232.cljs$lang$maxFixedArity = 3;
G__14232.cljs$lang$applyTo = (function (arglist__14233){
var x = cljs.core.first(arglist__14233);
var y = cljs.core.first(cljs.core.next(arglist__14233));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14233)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14233)));
return G__14232__delegate.call(this, x, y, z, args);
});
return G__14232;
})()
;
G__14224 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14224__14225.call(this);
case  1 :
return G__14224__14226.call(this,x);
case  2 :
return G__14224__14227.call(this,x,y);
case  3 :
return G__14224__14228.call(this,x,y,z);
default:
return G__14224__14229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14224.cljs$lang$maxFixedArity = 3;
G__14224.cljs$lang$applyTo = G__14224__14229.cljs$lang$applyTo;
return G__14224;
})()
};
var G__14223 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14223__delegate.call(this, f, g, h, fs);
};
G__14223.cljs$lang$maxFixedArity = 3;
G__14223.cljs$lang$applyTo = (function (arglist__14240){
var f = cljs.core.first(arglist__14240);
var g = cljs.core.first(cljs.core.next(arglist__14240));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14240)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14240)));
return G__14223__delegate.call(this, f, g, h, fs);
});
return G__14223;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14122.call(this,f);
case  2 :
return juxt__14123.call(this,f,g);
case  3 :
return juxt__14124.call(this,f,g,h);
default:
return juxt__14125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14125.cljs$lang$applyTo;
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
var dorun__14248 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14252 = cljs.core.next.call(null,coll);
coll = G__14252;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14249 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14245 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14245))
{return (n > 0);
} else
{return and__3546__auto____14245;
}
})()))
{{
var G__14253 = (n - 1);
var G__14254 = cljs.core.next.call(null,coll);
n = G__14253;
coll = G__14254;
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
return dorun__14248.call(this,n);
case  2 :
return dorun__14249.call(this,n,coll);
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
var doall__14260 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14261 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14260.call(this,n);
case  2 :
return doall__14261.call(this,n,coll);
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
var matches__14265 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14265),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14265),1)))
{return cljs.core.first.call(null,matches__14265);
} else
{return cljs.core.vec.call(null,matches__14265);
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
var matches__14267 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14267)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14267),1)))
{return cljs.core.first.call(null,matches__14267);
} else
{return cljs.core.vec.call(null,matches__14267);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14270 = cljs.core.re_find.call(null,re,s);
var match_idx__14272 = s.search(re);
var match_str__14275 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14270))?cljs.core.first.call(null,match_data__14270):match_data__14270);
var post_match__14277 = cljs.core.subs.call(null,s,(match_idx__14272 + cljs.core.count.call(null,match_str__14275)));

if(cljs.core.truth_(match_data__14270))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14270,re_seq.call(null,re,post_match__14277));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14511_SHARP_){
return print_one.call(null,p1__14511_SHARP_,opts);
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
{var and__3546__auto____14530 = (function (){var x__445__auto____14527 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14528 = x__445__auto____14527;

if(cljs.core.truth_(and__3546__auto____14528))
{var and__3546__auto____14529 = x__445__auto____14527.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14529))
{return cljs.core.not.call(null,x__445__auto____14527.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14529;
}
} else
{return and__3546__auto____14528;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14527);
}
})();

if(cljs.core.truth_(and__3546__auto____14530))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14530;
}
} else
{return and__3546__auto____14526;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14531 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14532 = x__445__auto____14531;

if(cljs.core.truth_(and__3546__auto____14532))
{var and__3546__auto____14533 = x__445__auto____14531.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14533))
{return cljs.core.not.call(null,x__445__auto____14531.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14533;
}
} else
{return and__3546__auto____14532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14531);
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
var first_obj__14538 = cljs.core.first.call(null,objs);
var sb__14539 = (new goog.string.StringBuffer());

var G__14540__14541 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14540__14541))
{var obj__14542 = cljs.core.first.call(null,G__14540__14541);
var G__14540__14543 = G__14540__14541;

while(true){
if(cljs.core.truth_((obj__14542 === first_obj__14538)))
{} else
{sb__14539.append(" ");
}
var G__14544__14546 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14542,opts));

if(cljs.core.truth_(G__14544__14546))
{var string__14547 = cljs.core.first.call(null,G__14544__14546);
var G__14544__14548 = G__14544__14546;

while(true){
sb__14539.append(string__14547);
var temp__3698__auto____14549 = cljs.core.next.call(null,G__14544__14548);

if(cljs.core.truth_(temp__3698__auto____14549))
{var G__14544__14550 = temp__3698__auto____14549;

{
var G__14568 = cljs.core.first.call(null,G__14544__14550);
var G__14569 = G__14544__14550;
string__14547 = G__14568;
G__14544__14548 = G__14569;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14557 = cljs.core.next.call(null,G__14540__14543);

if(cljs.core.truth_(temp__3698__auto____14557))
{var G__14540__14564 = temp__3698__auto____14557;

{
var G__14574 = cljs.core.first.call(null,G__14540__14564);
var G__14576 = G__14540__14564;
obj__14542 = G__14574;
G__14540__14543 = G__14576;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14539);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14580 = cljs.core.first.call(null,objs);

var G__14581__14583 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14581__14583))
{var obj__14584 = cljs.core.first.call(null,G__14581__14583);
var G__14581__14585 = G__14581__14583;

while(true){
if(cljs.core.truth_((obj__14584 === first_obj__14580)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14587__14588 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14584,opts));

if(cljs.core.truth_(G__14587__14588))
{var string__14589 = cljs.core.first.call(null,G__14587__14588);
var G__14587__14590 = G__14587__14588;

while(true){
cljs.core.string_print.call(null,string__14589);
var temp__3698__auto____14609 = cljs.core.next.call(null,G__14587__14590);

if(cljs.core.truth_(temp__3698__auto____14609))
{var G__14587__14610 = temp__3698__auto____14609;

{
var G__14620 = cljs.core.first.call(null,G__14587__14610);
var G__14621 = G__14587__14610;
string__14589 = G__14620;
G__14587__14590 = G__14621;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14614 = cljs.core.next.call(null,G__14581__14585);

if(cljs.core.truth_(temp__3698__auto____14614))
{var G__14581__14617 = temp__3698__auto____14614;

{
var G__14623 = cljs.core.first.call(null,G__14581__14617);
var G__14624 = G__14581__14617;
obj__14584 = G__14623;
G__14581__14585 = G__14624;
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
pr_str.cljs$lang$applyTo = (function (arglist__14706){
var objs = cljs.core.seq( arglist__14706 );;
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
pr.cljs$lang$applyTo = (function (arglist__14708){
var objs = cljs.core.seq( arglist__14708 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14712){
var objs = cljs.core.seq( arglist__14712 );;
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
println.cljs$lang$applyTo = (function (arglist__14721){
var objs = cljs.core.seq( arglist__14721 );;
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
prn.cljs$lang$applyTo = (function (arglist__14732){
var objs = cljs.core.seq( arglist__14732 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14737 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14737,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14745 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14745))
{var nspc__14746 = temp__3698__auto____14745;

return cljs.core.str.call(null,nspc__14746,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14748 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14748))
{var nspc__14750 = temp__3698__auto____14748;

return cljs.core.str.call(null,nspc__14750,"/");
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
var pr_pair__14761 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14761,"{",", ","}",opts,coll);
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
var this__14764 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14768 = this;
var G__14769__14770 = cljs.core.seq.call(null,this__14768.watches);

if(cljs.core.truth_(G__14769__14770))
{var G__14772__14774 = cljs.core.first.call(null,G__14769__14770);
var vec__14773__14775 = G__14772__14774;
var key__14776 = cljs.core.nth.call(null,vec__14773__14775,0,null);
var f__14777 = cljs.core.nth.call(null,vec__14773__14775,1,null);
var G__14769__14778 = G__14769__14770;

var G__14772__14779 = G__14772__14774;
var G__14769__14780 = G__14769__14778;

while(true){
var vec__14781__14782 = G__14772__14779;
var key__14783 = cljs.core.nth.call(null,vec__14781__14782,0,null);
var f__14784 = cljs.core.nth.call(null,vec__14781__14782,1,null);
var G__14769__14785 = G__14769__14780;

f__14784.call(null,key__14783,this$,oldval,newval);
var temp__3698__auto____14786 = cljs.core.next.call(null,G__14769__14785);

if(cljs.core.truth_(temp__3698__auto____14786))
{var G__14769__14787 = temp__3698__auto____14786;

{
var G__14800 = cljs.core.first.call(null,G__14769__14787);
var G__14801 = G__14769__14787;
G__14772__14779 = G__14800;
G__14769__14780 = G__14801;
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
var this__14788 = this;
return this$.watches = cljs.core.assoc.call(null,this__14788.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14789 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14789.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14791 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14791.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14796 = this;
return this__14796.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14798 = this;
return this__14798.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14799 = this;
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
var atom__14817 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14818 = (function() { 
var G__14820__delegate = function (x,p__14807){
var map__14808__14810 = p__14807;
var map__14808__14811 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14808__14810))?cljs.core.apply.call(null,cljs.core.hash_map,map__14808__14810):map__14808__14810);
var validator__14812 = cljs.core.get.call(null,map__14808__14811,"﷐'validator");
var meta__14813 = cljs.core.get.call(null,map__14808__14811,"﷐'meta");

return (new cljs.core.Atom(x,meta__14813,validator__14812,null));
};
var G__14820 = function (x,var_args){
var p__14807 = null;
if (goog.isDef(var_args)) {
  p__14807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14820__delegate.call(this, x, p__14807);
};
G__14820.cljs$lang$maxFixedArity = 1;
G__14820.cljs$lang$applyTo = (function (arglist__14821){
var x = cljs.core.first(arglist__14821);
var p__14807 = cljs.core.rest(arglist__14821);
return G__14820__delegate.call(this, x, p__14807);
});
return G__14820;
})()
;
atom = function(x,var_args){
var p__14807 = var_args;
switch(arguments.length){
case  1 :
return atom__14817.call(this,x);
default:
return atom__14818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14818.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14825 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14825))
{var validate__14826 = temp__3698__auto____14825;

if(cljs.core.truth_(validate__14826.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14831 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14831,new_value);
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
var swap_BANG___14846 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14879 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14880 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14881 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14882 = (function() { 
var G__14885__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14885 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14885__delegate.call(this, a, f, x, y, z, more);
};
G__14885.cljs$lang$maxFixedArity = 5;
G__14885.cljs$lang$applyTo = (function (arglist__14887){
var a = cljs.core.first(arglist__14887);
var f = cljs.core.first(cljs.core.next(arglist__14887));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14887)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14887))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14887)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14887)))));
return G__14885__delegate.call(this, a, f, x, y, z, more);
});
return G__14885;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14846.call(this,a,f);
case  3 :
return swap_BANG___14879.call(this,a,f,x);
case  4 :
return swap_BANG___14880.call(this,a,f,x,y);
case  5 :
return swap_BANG___14881.call(this,a,f,x,y,z);
default:
return swap_BANG___14882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14882.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14910){
var iref = cljs.core.first(arglist__14910);
var f = cljs.core.first(cljs.core.next(arglist__14910));
var args = cljs.core.rest(cljs.core.next(arglist__14910));
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
var gensym__14928 = (function (){
return gensym.call(null,"G__");
});
var gensym__14929 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14928.call(this);
case  1 :
return gensym__14929.call(this,prefix_string);
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
var this__14935 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14935.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14936 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14936.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14936.state,this__14936.f);
}
return cljs.core.deref.call(null,this__14936.state);
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
delay.cljs$lang$applyTo = (function (arglist__14997){
var body = cljs.core.seq( arglist__14997 );;
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
var map__15010__15011 = options;
var map__15010__15012 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15010__15011))?cljs.core.apply.call(null,cljs.core.hash_map,map__15010__15011):map__15010__15011);
var keywordize_keys__15013 = cljs.core.get.call(null,map__15010__15012,"﷐'keywordize-keys");
var keyfn__15014 = (cljs.core.truth_(keywordize_keys__15013)?cljs.core.keyword:cljs.core.str);
var f__15026 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15024 = (function iter__15016(s__15017){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15017__15019 = s__15017;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15017__15019)))
{var k__15021 = cljs.core.first.call(null,s__15017__15019);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15014.call(null,k__15021),thisfn.call(null,(x[k__15021]))]),iter__15016.call(null,cljs.core.rest.call(null,s__15017__15019)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15024.call(null,cljs.core.js_keys.call(null,x));
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

return f__15026.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15031){
var x = cljs.core.first(arglist__15031);
var options = cljs.core.rest(arglist__15031);
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
var mem__15035 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15039__delegate = function (args){
var temp__3695__auto____15036 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15035),args);

if(cljs.core.truth_(temp__3695__auto____15036))
{var v__15037 = temp__3695__auto____15036;

return v__15037;
} else
{var ret__15038 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15035,cljs.core.assoc,args,ret__15038);
return ret__15038;
}
};
var G__15039 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15039__delegate.call(this, args);
};
G__15039.cljs$lang$maxFixedArity = 0;
G__15039.cljs$lang$applyTo = (function (arglist__15044){
var args = cljs.core.seq( arglist__15044 );;
return G__15039__delegate.call(this, args);
});
return G__15039;
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
var trampoline__15055 = (function (f){
while(true){
var ret__15049 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15049)))
{{
var G__15058 = ret__15049;
f = G__15058;
continue;
}
} else
{return ret__15049;
}
break;
}
});
var trampoline__15056 = (function() { 
var G__15060__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15060 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15060__delegate.call(this, f, args);
};
G__15060.cljs$lang$maxFixedArity = 1;
G__15060.cljs$lang$applyTo = (function (arglist__15063){
var f = cljs.core.first(arglist__15063);
var args = cljs.core.rest(arglist__15063);
return G__15060__delegate.call(this, f, args);
});
return G__15060;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15055.call(this,f);
default:
return trampoline__15056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15056.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15129 = (function (){
return rand.call(null,1);
});
var rand__15130 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15129.call(this);
case  1 :
return rand__15130.call(this,n);
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
var k__15132 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15132,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15132,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15152 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15153 = (function (h,child,parent){
var or__3548__auto____15142 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15142))
{return or__3548__auto____15142;
} else
{var or__3548__auto____15143 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15143))
{return or__3548__auto____15143;
} else
{var and__3546__auto____15144 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15144))
{var and__3546__auto____15145 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15145))
{var and__3546__auto____15146 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15146))
{var ret__15148 = true;
var i__15149 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15150 = cljs.core.not.call(null,ret__15148);

if(cljs.core.truth_(or__3548__auto____15150))
{return or__3548__auto____15150;
} else
{return cljs.core._EQ_.call(null,i__15149,cljs.core.count.call(null,parent));
}
})()))
{return ret__15148;
} else
{{
var G__15159 = isa_QMARK_.call(null,h,child.call(null,i__15149),parent.call(null,i__15149));
var G__15160 = (i__15149 + 1);
ret__15148 = G__15159;
i__15149 = G__15160;
continue;
}
}
break;
}
} else
{return and__3546__auto____15146;
}
} else
{return and__3546__auto____15145;
}
} else
{return and__3546__auto____15144;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15152.call(this,h,child);
case  3 :
return isa_QMARK___15153.call(this,h,child,parent);
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
var parents__15168 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15169 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15168.call(this,h);
case  2 :
return parents__15169.call(this,h,tag);
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
var ancestors__15171 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15172 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15171.call(this,h);
case  2 :
return ancestors__15172.call(this,h,tag);
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
var descendants__15175 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15176 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15175.call(this,h);
case  2 :
return descendants__15176.call(this,h,tag);
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
var derive__15282 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15283 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15266 = "﷐'parents".call(null,h);
var td__15267 = "﷐'descendants".call(null,h);
var ta__15268 = "﷐'ancestors".call(null,h);
var tf__15276 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15281 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15266.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15268.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15268.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15266,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15276.call(null,"﷐'ancestors".call(null,h),tag,td__15267,parent,ta__15268),"﷐'descendants":tf__15276.call(null,"﷐'descendants".call(null,h),parent,ta__15268,tag,td__15267)});
})());

if(cljs.core.truth_(or__3548__auto____15281))
{return or__3548__auto____15281;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15282.call(this,h,tag);
case  3 :
return derive__15283.call(this,h,tag,parent);
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
var underive__15292 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15293 = (function (h,tag,parent){
var parentMap__15286 = "﷐'parents".call(null,h);
var childsParents__15287 = (cljs.core.truth_(parentMap__15286.call(null,tag))?cljs.core.disj.call(null,parentMap__15286.call(null,tag),parent):cljs.core.set([]));
var newParents__15290 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15287))?cljs.core.assoc.call(null,parentMap__15286,tag,childsParents__15287):cljs.core.dissoc.call(null,parentMap__15286,tag));
var deriv_seq__15291 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15180_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15180_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15180_SHARP_),cljs.core.second.call(null,p1__15180_SHARP_)));
}),cljs.core.seq.call(null,newParents__15290)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15286.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15264_SHARP_,p2__15265_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15264_SHARP_,p2__15265_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15291));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15292.call(this,h,tag);
case  3 :
return underive__15293.call(this,h,tag,parent);
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
var xprefs__15304 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15308 = (cljs.core.truth_((function (){var and__3546__auto____15307 = xprefs__15304;

if(cljs.core.truth_(and__3546__auto____15307))
{return xprefs__15304.call(null,y);
} else
{return and__3546__auto____15307;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15308))
{return or__3548__auto____15308;
} else
{var or__3548__auto____15310 = (function (){var ps__15309 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15309) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15309),prefer_table)))
{} else
{}
{
var G__15314 = cljs.core.rest.call(null,ps__15309);
ps__15309 = G__15314;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{var or__3548__auto____15312 = (function (){var ps__15311 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15311) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15311),y,prefer_table)))
{} else
{}
{
var G__15315 = cljs.core.rest.call(null,ps__15311);
ps__15311 = G__15315;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15312))
{return or__3548__auto____15312;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15324 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15324))
{return or__3548__auto____15324;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15340 = cljs.core.reduce.call(null,(function (be,p__15329){
var vec__15330__15332 = p__15329;
var k__15334 = cljs.core.nth.call(null,vec__15330__15332,0,null);
var ___15335 = cljs.core.nth.call(null,vec__15330__15332,1,null);
var e__15336 = vec__15330__15332;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15334)))
{var be2__15339 = (cljs.core.truth_((function (){var or__3548__auto____15338 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15338))
{return or__3548__auto____15338;
} else
{return cljs.core.dominates.call(null,k__15334,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15336:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15339),k__15334,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15334," and ",cljs.core.first.call(null,be2__15339),", and neither is preferred")));
}
return be2__15339;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15340))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15340));
return cljs.core.second.call(null,best_entry__15340);
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
if(cljs.core.truth_((function (){var and__3546__auto____15347 = mf;

if(cljs.core.truth_(and__3546__auto____15347))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15347;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15348 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{var or__3548__auto____15349 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15349))
{return or__3548__auto____15349;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15351 = mf;

if(cljs.core.truth_(and__3546__auto____15351))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15351;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15353 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{var or__3548__auto____15354 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15354))
{return or__3548__auto____15354;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15355 = mf;

if(cljs.core.truth_(and__3546__auto____15355))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15355;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15356 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15356))
{return or__3548__auto____15356;
} else
{var or__3548__auto____15357 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15357))
{return or__3548__auto____15357;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15358 = mf;

if(cljs.core.truth_(and__3546__auto____15358))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15358;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15359 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{var or__3548__auto____15360 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15360))
{return or__3548__auto____15360;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15361 = mf;

if(cljs.core.truth_(and__3546__auto____15361))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15361;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15362 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15362))
{return or__3548__auto____15362;
} else
{var or__3548__auto____15363 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15363))
{return or__3548__auto____15363;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15364 = mf;

if(cljs.core.truth_(and__3546__auto____15364))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15364;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15365 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{var or__3548__auto____15366 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15366))
{return or__3548__auto____15366;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15367 = mf;

if(cljs.core.truth_(and__3546__auto____15367))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15367;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15368 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15368))
{return or__3548__auto____15368;
} else
{var or__3548__auto____15369 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15369))
{return or__3548__auto____15369;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15370 = mf;

if(cljs.core.truth_(and__3546__auto____15370))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15370;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15371 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15371))
{return or__3548__auto____15371;
} else
{var or__3548__auto____15372 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15372))
{return or__3548__auto____15372;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15436 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15437 = cljs.core._get_method.call(null,mf,dispatch_val__15436);

if(cljs.core.truth_(target_fn__15437))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15436)));
}
return cljs.core.apply.call(null,target_fn__15437,args);
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
var this__15442 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15445 = this;
cljs.core.swap_BANG_.call(null,this__15445.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15445.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15445.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15445.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15450 = this;
cljs.core.swap_BANG_.call(null,this__15450.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15450.method_cache,this__15450.method_table,this__15450.cached_hierarchy,this__15450.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15453 = this;
cljs.core.swap_BANG_.call(null,this__15453.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15453.method_cache,this__15453.method_table,this__15453.cached_hierarchy,this__15453.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15458 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15458.cached_hierarchy),cljs.core.deref.call(null,this__15458.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15458.method_cache,this__15458.method_table,this__15458.cached_hierarchy,this__15458.hierarchy);
}
var temp__3695__auto____15459 = cljs.core.deref.call(null,this__15458.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15459))
{var target_fn__15460 = temp__3695__auto____15459;

return target_fn__15460;
} else
{var temp__3695__auto____15461 = cljs.core.find_and_cache_best_method.call(null,this__15458.name,dispatch_val,this__15458.hierarchy,this__15458.method_table,this__15458.prefer_table,this__15458.method_cache,this__15458.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15461))
{var target_fn__15462 = temp__3695__auto____15461;

return target_fn__15462;
} else
{return cljs.core.deref.call(null,this__15458.method_table).call(null,this__15458.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15463 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15463.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15463.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15463.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15463.method_cache,this__15463.method_table,this__15463.cached_hierarchy,this__15463.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15466 = this;
return cljs.core.deref.call(null,this__15466.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15467 = this;
return cljs.core.deref.call(null,this__15467.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15468 = this;
return cljs.core.do_dispatch.call(null,mf,this__15468.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15472__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15472 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15472__delegate.call(this, _, args);
};
G__15472.cljs$lang$maxFixedArity = 1;
G__15472.cljs$lang$applyTo = (function (arglist__15473){
var _ = cljs.core.first(arglist__15473);
var args = cljs.core.rest(arglist__15473);
return G__15472__delegate.call(this, _, args);
});
return G__15472;
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
