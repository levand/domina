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
var or__3548__auto____7261 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
} else
{var or__3548__auto____7262 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
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
var _invoke__7562 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7563 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7347 = this$;

if(cljs.core.truth_(and__3546__auto____7347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7564 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7355 = this$;

if(cljs.core.truth_(and__3546__auto____7355))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7355;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7358 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{var or__3548__auto____7360 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7565 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7366 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7366))
{return or__3548__auto____7366;
} else
{var or__3548__auto____7368 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7566 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7371 = this$;

if(cljs.core.truth_(and__3546__auto____7371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{var or__3548__auto____7379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7568 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = this$;

if(cljs.core.truth_(and__3546__auto____7383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7570 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7394 = this$;

if(cljs.core.truth_(and__3546__auto____7394))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7394;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7424 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7424))
{return or__3548__auto____7424;
} else
{var or__3548__auto____7425 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7572 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7429 = this$;

if(cljs.core.truth_(and__3546__auto____7429))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7429;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{var or__3548__auto____7434 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7434))
{return or__3548__auto____7434;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7575 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7437 = this$;

if(cljs.core.truth_(and__3546__auto____7437))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7437;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7576 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7467 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{var or__3548__auto____7470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7579 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7581 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = this$;

if(cljs.core.truth_(and__3546__auto____7477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7480 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7480))
{return or__3548__auto____7480;
} else
{var or__3548__auto____7481 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7583 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7486 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{var or__3548__auto____7487 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7585 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7489 = this$;

if(cljs.core.truth_(and__3546__auto____7489))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7489;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{var or__3548__auto____7493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7587 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7589 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7500 = this$;

if(cljs.core.truth_(and__3546__auto____7500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7515 = this$;

if(cljs.core.truth_(and__3546__auto____7515))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7515;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7530 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{var or__3548__auto____7532 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7534 = this$;

if(cljs.core.truth_(and__3546__auto____7534))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7534;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7537 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{var or__3548__auto____7538 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7541 = this$;

if(cljs.core.truth_(and__3546__auto____7541))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7541;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7543 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{var or__3548__auto____7545 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7554 = this$;

if(cljs.core.truth_(and__3546__auto____7554))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7554;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7557 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7557))
{return or__3548__auto____7557;
} else
{var or__3548__auto____7558 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7558))
{return or__3548__auto____7558;
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
return _invoke__7562.call(this,this$);
case  2 :
return _invoke__7563.call(this,this$,a);
case  3 :
return _invoke__7564.call(this,this$,a,b);
case  4 :
return _invoke__7565.call(this,this$,a,b,c);
case  5 :
return _invoke__7566.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7568.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7570.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7572.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7575.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7576.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7579.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7581.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7583.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7585.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7587.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7589.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
if(cljs.core.truth_((function (){var and__3546__auto____7767 = coll;

if(cljs.core.truth_(and__3546__auto____7767))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7767;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7768 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{var or__3548__auto____7771 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7771))
{return or__3548__auto____7771;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7783 = coll;

if(cljs.core.truth_(and__3546__auto____7783))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7783;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7790 = coll;

if(cljs.core.truth_(and__3546__auto____7790))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7790;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7792 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
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
var _nth__7829 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7793 = coll;

if(cljs.core.truth_(and__3546__auto____7793))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7793;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7794 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{var or__3548__auto____7795 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7830 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = coll;

if(cljs.core.truth_(and__3546__auto____7796))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7796;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7798 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
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
return _nth__7829.call(this,coll,n);
case  3 :
return _nth__7830.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7842 = coll;

if(cljs.core.truth_(and__3546__auto____7842))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7842;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7845 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7847 = coll;

if(cljs.core.truth_(and__3546__auto____7847))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7847;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7849 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{var or__3548__auto____7853 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
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
var _lookup__7873 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7857 = o;

if(cljs.core.truth_(and__3546__auto____7857))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7857;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7864 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7874 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7867 = o;

if(cljs.core.truth_(and__3546__auto____7867))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7867;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7869 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
} else
{var or__3548__auto____7871 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
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
return _lookup__7873.call(this,o,k);
case  3 :
return _lookup__7874.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7886 = coll;

if(cljs.core.truth_(and__3546__auto____7886))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7886;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7887 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{var or__3548__auto____7888 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = coll;

if(cljs.core.truth_(and__3546__auto____7889))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7889;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7891 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{var or__3548__auto____7894 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7900 = coll;

if(cljs.core.truth_(and__3546__auto____7900))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7900;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7905 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7905))
{return or__3548__auto____7905;
} else
{var or__3548__auto____7906 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7906))
{return or__3548__auto____7906;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7910 = coll;

if(cljs.core.truth_(and__3546__auto____7910))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7910;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7914 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7916 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7927 = coll;

if(cljs.core.truth_(and__3546__auto____7927))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7927;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7931 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7933 = coll;

if(cljs.core.truth_(and__3546__auto____7933))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7933;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7937 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{var or__3548__auto____7939 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = coll;

if(cljs.core.truth_(and__3546__auto____7949))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7949;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7954 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{var or__3548__auto____7955 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7958 = o;

if(cljs.core.truth_(and__3546__auto____7958))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7958;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7973 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7975 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = o;

if(cljs.core.truth_(and__3546__auto____7980))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7980;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7985 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{var or__3548__auto____7986 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7993 = o;

if(cljs.core.truth_(and__3546__auto____7993))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7993;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7995 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{var or__3548__auto____7996 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8066 = o;

if(cljs.core.truth_(and__3546__auto____8066))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8066;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8069 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{var or__3548__auto____8072 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
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
var _reduce__8081 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8075 = coll;

if(cljs.core.truth_(and__3546__auto____8075))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8075;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8076 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{var or__3548__auto____8077 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8082 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = coll;

if(cljs.core.truth_(and__3546__auto____8078))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8078;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8080 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
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
return _reduce__8081.call(this,coll,f);
case  3 :
return _reduce__8082.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = o;

if(cljs.core.truth_(and__3546__auto____8085))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8085;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8088 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8088))
{return or__3548__auto____8088;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = o;

if(cljs.core.truth_(and__3546__auto____8094))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8094;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8102 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{var or__3548__auto____8104 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8106 = o;

if(cljs.core.truth_(and__3546__auto____8106))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8106;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8124 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{var or__3548__auto____8135 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
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
if(cljs.core.truth_((function (){var and__3546__auto____8161 = o;

if(cljs.core.truth_(and__3546__auto____8161))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8161;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8163 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8163))
{return or__3548__auto____8163;
} else
{var or__3548__auto____8165 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8165))
{return or__3548__auto____8165;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8168 = d;

if(cljs.core.truth_(and__3546__auto____8168))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8168;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8169 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{var or__3548__auto____8170 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8170))
{return or__3548__auto____8170;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8179 = this$;

if(cljs.core.truth_(and__3546__auto____8179))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8179;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8181 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{var or__3548__auto____8182 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8182))
{return or__3548__auto____8182;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8187 = this$;

if(cljs.core.truth_(and__3546__auto____8187))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8187;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8189 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8189))
{return or__3548__auto____8189;
} else
{var or__3548__auto____8190 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8190))
{return or__3548__auto____8190;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8193 = this$;

if(cljs.core.truth_(and__3546__auto____8193))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8193;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8196 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8196))
{return or__3548__auto____8196;
} else
{var or__3548__auto____8197 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8197))
{return or__3548__auto____8197;
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
var G__8279 = null;
var G__8279__8280 = (function (o,k){
return null;
});
var G__8279__8281 = (function (o,k,not_found){
return not_found;
});
G__8279 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8279__8280.call(this,o,k);
case  3 :
return G__8279__8281.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8279;
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
var G__8293 = null;
var G__8293__8294 = (function (_,f){
return f.call(null);
});
var G__8293__8295 = (function (_,f,start){
return start;
});
G__8293 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8293__8294.call(this,_,f);
case  3 :
return G__8293__8295.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8293;
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
var G__8337 = null;
var G__8337__8338 = (function (_,n){
return null;
});
var G__8337__8339 = (function (_,n,not_found){
return not_found;
});
G__8337 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8337__8338.call(this,_,n);
case  3 :
return G__8337__8339.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8337;
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
var ci_reduce__8376 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8370 = cljs.core._nth.call(null,cicoll,0);
var n__8371 = 1;

while(true){
if(cljs.core.truth_((n__8371 < cljs.core._count.call(null,cicoll))))
{{
var G__8425 = f.call(null,val__8370,cljs.core._nth.call(null,cicoll,n__8371));
var G__8426 = (n__8371 + 1);
val__8370 = G__8425;
n__8371 = G__8426;
continue;
}
} else
{return val__8370;
}
break;
}
}
});
var ci_reduce__8377 = (function (cicoll,f,val){
var val__8372 = val;
var n__8373 = 0;

while(true){
if(cljs.core.truth_((n__8373 < cljs.core._count.call(null,cicoll))))
{{
var G__8427 = f.call(null,val__8372,cljs.core._nth.call(null,cicoll,n__8373));
var G__8428 = (n__8373 + 1);
val__8372 = G__8427;
n__8373 = G__8428;
continue;
}
} else
{return val__8372;
}
break;
}
});
var ci_reduce__8378 = (function (cicoll,f,val,idx){
var val__8374 = val;
var n__8375 = idx;

while(true){
if(cljs.core.truth_((n__8375 < cljs.core._count.call(null,cicoll))))
{{
var G__8429 = f.call(null,val__8374,cljs.core._nth.call(null,cicoll,n__8375));
var G__8430 = (n__8375 + 1);
val__8374 = G__8429;
n__8375 = G__8430;
continue;
}
} else
{return val__8374;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8376.call(this,cicoll,f);
case  3 :
return ci_reduce__8377.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8378.call(this,cicoll,f,val,idx);
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
var this__8434 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8468 = null;
var G__8468__8469 = (function (_,f){
var this__8439 = this;
return cljs.core.ci_reduce.call(null,this__8439.a,f,(this__8439.a[this__8439.i]),(this__8439.i + 1));
});
var G__8468__8470 = (function (_,f,start){
var this__8442 = this;
return cljs.core.ci_reduce.call(null,this__8442.a,f,start,this__8442.i);
});
G__8468 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8468__8469.call(this,_,f);
case  3 :
return G__8468__8470.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8468;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8444 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8478 = null;
var G__8478__8479 = (function (coll,n){
var this__8450 = this;
var i__8453 = (n + this__8450.i);

if(cljs.core.truth_((i__8453 < this__8450.a.length)))
{return (this__8450.a[i__8453]);
} else
{return null;
}
});
var G__8478__8480 = (function (coll,n,not_found){
var this__8454 = this;
var i__8455 = (n + this__8454.i);

if(cljs.core.truth_((i__8455 < this__8454.a.length)))
{return (this__8454.a[i__8455]);
} else
{return not_found;
}
});
G__8478 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8478__8479.call(this,coll,n);
case  3 :
return G__8478__8480.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8478;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8460 = this;
return (this__8460.a.length - this__8460.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8461 = this;
return (this__8461.a[this__8461.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8462 = this;
if(cljs.core.truth_(((this__8462.i + 1) < this__8462.a.length)))
{return (new cljs.core.IndexedSeq(this__8462.a,(this__8462.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8463 = this;
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
var G__8500 = null;
var G__8500__8501 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8500__8502 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8500 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8500__8501.call(this,array,f);
case  3 :
return G__8500__8502.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8500;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8504 = null;
var G__8504__8505 = (function (array,k){
return (array[k]);
});
var G__8504__8506 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8504 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8504__8505.call(this,array,k);
case  3 :
return G__8504__8506.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8504;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8508 = null;
var G__8508__8509 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8508__8510 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8508 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8508__8509.call(this,array,n);
case  3 :
return G__8508__8510.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8508;
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
var temp__3698__auto____8526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8526))
{var s__8530 = temp__3698__auto____8526;

return cljs.core._first.call(null,s__8530);
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
var G__8568 = cljs.core.next.call(null,s);
s = G__8568;
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
var s__8571 = cljs.core.seq.call(null,x);
var n__8572 = 0;

while(true){
if(cljs.core.truth_(s__8571))
{{
var G__8585 = cljs.core.next.call(null,s__8571);
var G__8587 = (n__8572 + 1);
s__8571 = G__8585;
n__8572 = G__8587;
continue;
}
} else
{return n__8572;
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
var conj__8600 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8601 = (function() { 
var G__8607__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8608 = conj.call(null,coll,x);
var G__8609 = cljs.core.first.call(null,xs);
var G__8610 = cljs.core.next.call(null,xs);
coll = G__8608;
x = G__8609;
xs = G__8610;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8607 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8607__delegate.call(this, coll, x, xs);
};
G__8607.cljs$lang$maxFixedArity = 2;
G__8607.cljs$lang$applyTo = (function (arglist__8612){
var coll = cljs.core.first(arglist__8612);
var x = cljs.core.first(cljs.core.next(arglist__8612));
var xs = cljs.core.rest(cljs.core.next(arglist__8612));
return G__8607__delegate.call(this, coll, x, xs);
});
return G__8607;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8600.call(this,coll,x);
default:
return conj__8601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8601.cljs$lang$applyTo;
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
var nth__8659 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8660 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8659.call(this,coll,n);
case  3 :
return nth__8660.call(this,coll,n,not_found);
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
var get__8673 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8674 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8673.call(this,o,k);
case  3 :
return get__8674.call(this,o,k,not_found);
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
var assoc__8691 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8693 = (function() { 
var G__8696__delegate = function (coll,k,v,kvs){
while(true){
var ret__8684 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8697 = ret__8684;
var G__8698 = cljs.core.first.call(null,kvs);
var G__8699 = cljs.core.second.call(null,kvs);
var G__8700 = cljs.core.nnext.call(null,kvs);
coll = G__8697;
k = G__8698;
v = G__8699;
kvs = G__8700;
continue;
}
} else
{return ret__8684;
}
break;
}
};
var G__8696 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8696__delegate.call(this, coll, k, v, kvs);
};
G__8696.cljs$lang$maxFixedArity = 3;
G__8696.cljs$lang$applyTo = (function (arglist__8701){
var coll = cljs.core.first(arglist__8701);
var k = cljs.core.first(cljs.core.next(arglist__8701));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8701)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8701)));
return G__8696__delegate.call(this, coll, k, v, kvs);
});
return G__8696;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8691.call(this,coll,k,v);
default:
return assoc__8693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8693.cljs$lang$applyTo;
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
var dissoc__8710 = (function (coll){
return coll;
});
var dissoc__8711 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8712 = (function() { 
var G__8714__delegate = function (coll,k,ks){
while(true){
var ret__8705 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8717 = ret__8705;
var G__8719 = cljs.core.first.call(null,ks);
var G__8721 = cljs.core.next.call(null,ks);
coll = G__8717;
k = G__8719;
ks = G__8721;
continue;
}
} else
{return ret__8705;
}
break;
}
};
var G__8714 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8714__delegate.call(this, coll, k, ks);
};
G__8714.cljs$lang$maxFixedArity = 2;
G__8714.cljs$lang$applyTo = (function (arglist__8723){
var coll = cljs.core.first(arglist__8723);
var k = cljs.core.first(cljs.core.next(arglist__8723));
var ks = cljs.core.rest(cljs.core.next(arglist__8723));
return G__8714__delegate.call(this, coll, k, ks);
});
return G__8714;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8710.call(this,coll);
case  2 :
return dissoc__8711.call(this,coll,k);
default:
return dissoc__8712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8712.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8731 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8732 = x__445__auto____8731;

if(cljs.core.truth_(and__3546__auto____8732))
{var and__3546__auto____8738 = x__445__auto____8731.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8738))
{return cljs.core.not.call(null,x__445__auto____8731.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8738;
}
} else
{return and__3546__auto____8732;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8731);
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
var disj__8765 = (function (coll){
return coll;
});
var disj__8766 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8767 = (function() { 
var G__8772__delegate = function (coll,k,ks){
while(true){
var ret__8764 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8774 = ret__8764;
var G__8775 = cljs.core.first.call(null,ks);
var G__8776 = cljs.core.next.call(null,ks);
coll = G__8774;
k = G__8775;
ks = G__8776;
continue;
}
} else
{return ret__8764;
}
break;
}
};
var G__8772 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8772__delegate.call(this, coll, k, ks);
};
G__8772.cljs$lang$maxFixedArity = 2;
G__8772.cljs$lang$applyTo = (function (arglist__8778){
var coll = cljs.core.first(arglist__8778);
var k = cljs.core.first(cljs.core.next(arglist__8778));
var ks = cljs.core.rest(cljs.core.next(arglist__8778));
return G__8772__delegate.call(this, coll, k, ks);
});
return G__8772;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8765.call(this,coll);
case  2 :
return disj__8766.call(this,coll,k);
default:
return disj__8767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8767.cljs$lang$applyTo;
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
{var x__445__auto____8785 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8786 = x__445__auto____8785;

if(cljs.core.truth_(and__3546__auto____8786))
{var and__3546__auto____8787 = x__445__auto____8785.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8785.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8786;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8785);
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

if(cljs.core.truth_((function (){var and__3546__auto____8795 = x__445__auto____8794;

if(cljs.core.truth_(and__3546__auto____8795))
{var and__3546__auto____8796 = x__445__auto____8794.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8796))
{return cljs.core.not.call(null,x__445__auto____8794.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8796;
}
} else
{return and__3546__auto____8795;
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
var x__445__auto____8810 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8810;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8813 = x__445__auto____8810.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8813))
{return cljs.core.not.call(null,x__445__auto____8810.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8810);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8819 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8820 = x__445__auto____8819;

if(cljs.core.truth_(and__3546__auto____8820))
{var and__3546__auto____8821 = x__445__auto____8819.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8821))
{return cljs.core.not.call(null,x__445__auto____8819.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8821;
}
} else
{return and__3546__auto____8820;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8819);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8827 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8828 = x__445__auto____8827;

if(cljs.core.truth_(and__3546__auto____8828))
{var and__3546__auto____8829 = x__445__auto____8827.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8829))
{return cljs.core.not.call(null,x__445__auto____8827.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8829;
}
} else
{return and__3546__auto____8828;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8827);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8836 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8837 = x__445__auto____8836;

if(cljs.core.truth_(and__3546__auto____8837))
{var and__3546__auto____8838 = x__445__auto____8836.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8838))
{return cljs.core.not.call(null,x__445__auto____8836.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8838;
}
} else
{return and__3546__auto____8837;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8836);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8846 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8847 = x__445__auto____8846;

if(cljs.core.truth_(and__3546__auto____8847))
{var and__3546__auto____8848 = x__445__auto____8846.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8848))
{return cljs.core.not.call(null,x__445__auto____8846.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8848;
}
} else
{return and__3546__auto____8847;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8846);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8861 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8861.push(key);
}));
return keys__8861;
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
{var x__445__auto____8876 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8877 = x__445__auto____8876;

if(cljs.core.truth_(and__3546__auto____8877))
{var and__3546__auto____8878 = x__445__auto____8876.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8878))
{return cljs.core.not.call(null,x__445__auto____8876.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8878;
}
} else
{return and__3546__auto____8877;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8876);
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
var and__3546__auto____8890 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8890))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8891 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8891))
{return or__3548__auto____8891;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8890;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8894 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8894))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8894;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8897 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8897))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8897;
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
var and__3546__auto____8903 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8903))
{return (n == n.toFixed());
} else
{return and__3546__auto____8903;
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
if(cljs.core.truth_((function (){var and__3546__auto____8911 = coll;

if(cljs.core.truth_(and__3546__auto____8911))
{var and__3546__auto____8914 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8914))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8914;
}
} else
{return and__3546__auto____8911;
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
var distinct_QMARK___8937 = (function (x){
return true;
});
var distinct_QMARK___8939 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8941 = (function() { 
var G__8944__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8922 = cljs.core.set([y,x]);
var xs__8923 = more;

while(true){
var x__8929 = cljs.core.first.call(null,xs__8923);
var etc__8931 = cljs.core.next.call(null,xs__8923);

if(cljs.core.truth_(xs__8923))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8922,x__8929)))
{return false;
} else
{{
var G__8947 = cljs.core.conj.call(null,s__8922,x__8929);
var G__8948 = etc__8931;
s__8922 = G__8947;
xs__8923 = G__8948;
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
var G__8944 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8944__delegate.call(this, x, y, more);
};
G__8944.cljs$lang$maxFixedArity = 2;
G__8944.cljs$lang$applyTo = (function (arglist__8950){
var x = cljs.core.first(arglist__8950);
var y = cljs.core.first(cljs.core.next(arglist__8950));
var more = cljs.core.rest(cljs.core.next(arglist__8950));
return G__8944__delegate.call(this, x, y, more);
});
return G__8944;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8937.call(this,x);
case  2 :
return distinct_QMARK___8939.call(this,x,y);
default:
return distinct_QMARK___8941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8941.cljs$lang$applyTo;
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
var r__8957 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8957)))
{return r__8957;
} else
{if(cljs.core.truth_(r__8957))
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
var sort__8975 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8976 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8971 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8971,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8971);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8975.call(this,comp);
case  2 :
return sort__8976.call(this,comp,coll);
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
var sort_by__8984 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8985 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8984.call(this,keyfn,comp);
case  3 :
return sort_by__8985.call(this,keyfn,comp,coll);
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
var reduce__8998 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8999 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8998.call(this,f,val);
case  3 :
return reduce__8999.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9067 = (function (f,coll){
var temp__3695__auto____9009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9009))
{var s__9010 = temp__3695__auto____9009;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9010),cljs.core.next.call(null,s__9010));
} else
{return f.call(null);
}
});
var seq_reduce__9068 = (function (f,val,coll){
var val__9062 = val;
var coll__9064 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9064))
{{
var G__9077 = f.call(null,val__9062,cljs.core.first.call(null,coll__9064));
var G__9079 = cljs.core.next.call(null,coll__9064);
val__9062 = G__9077;
coll__9064 = G__9079;
continue;
}
} else
{return val__9062;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9067.call(this,f,val);
case  3 :
return seq_reduce__9068.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9092 = null;
var G__9092__9093 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9092__9094 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9092 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9092__9093.call(this,coll,f);
case  3 :
return G__9092__9094.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9092;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9105 = (function (){
return 0;
});
var _PLUS___9107 = (function (x){
return x;
});
var _PLUS___9109 = (function (x,y){
return (x + y);
});
var _PLUS___9110 = (function() { 
var G__9115__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9115 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9115__delegate.call(this, x, y, more);
};
G__9115.cljs$lang$maxFixedArity = 2;
G__9115.cljs$lang$applyTo = (function (arglist__9120){
var x = cljs.core.first(arglist__9120);
var y = cljs.core.first(cljs.core.next(arglist__9120));
var more = cljs.core.rest(cljs.core.next(arglist__9120));
return G__9115__delegate.call(this, x, y, more);
});
return G__9115;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9105.call(this);
case  1 :
return _PLUS___9107.call(this,x);
case  2 :
return _PLUS___9109.call(this,x,y);
default:
return _PLUS___9110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9110.cljs$lang$applyTo;
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
var ___9123 = (function (x){
return (- x);
});
var ___9124 = (function (x,y){
return (x - y);
});
var ___9125 = (function() { 
var G__9127__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9127 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9127__delegate.call(this, x, y, more);
};
G__9127.cljs$lang$maxFixedArity = 2;
G__9127.cljs$lang$applyTo = (function (arglist__9132){
var x = cljs.core.first(arglist__9132);
var y = cljs.core.first(cljs.core.next(arglist__9132));
var more = cljs.core.rest(cljs.core.next(arglist__9132));
return G__9127__delegate.call(this, x, y, more);
});
return G__9127;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9123.call(this,x);
case  2 :
return ___9124.call(this,x,y);
default:
return ___9125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9125.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9138 = (function (){
return 1;
});
var _STAR___9139 = (function (x){
return x;
});
var _STAR___9140 = (function (x,y){
return (x * y);
});
var _STAR___9141 = (function() { 
var G__9143__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9143__delegate.call(this, x, y, more);
};
G__9143.cljs$lang$maxFixedArity = 2;
G__9143.cljs$lang$applyTo = (function (arglist__9148){
var x = cljs.core.first(arglist__9148);
var y = cljs.core.first(cljs.core.next(arglist__9148));
var more = cljs.core.rest(cljs.core.next(arglist__9148));
return G__9143__delegate.call(this, x, y, more);
});
return G__9143;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9138.call(this);
case  1 :
return _STAR___9139.call(this,x);
case  2 :
return _STAR___9140.call(this,x,y);
default:
return _STAR___9141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9141.cljs$lang$applyTo;
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
var _SLASH___9160 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9161 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9162 = (function() { 
var G__9164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9164__delegate.call(this, x, y, more);
};
G__9164.cljs$lang$maxFixedArity = 2;
G__9164.cljs$lang$applyTo = (function (arglist__9165){
var x = cljs.core.first(arglist__9165);
var y = cljs.core.first(cljs.core.next(arglist__9165));
var more = cljs.core.rest(cljs.core.next(arglist__9165));
return G__9164__delegate.call(this, x, y, more);
});
return G__9164;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9160.call(this,x);
case  2 :
return _SLASH___9161.call(this,x,y);
default:
return _SLASH___9162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9162.cljs$lang$applyTo;
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
var _LT___9171 = (function (x){
return true;
});
var _LT___9172 = (function (x,y){
return (x < y);
});
var _LT___9173 = (function() { 
var G__9175__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9176 = y;
var G__9177 = cljs.core.first.call(null,more);
var G__9178 = cljs.core.next.call(null,more);
x = G__9176;
y = G__9177;
more = G__9178;
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
G__9175.cljs$lang$applyTo = (function (arglist__9186){
var x = cljs.core.first(arglist__9186);
var y = cljs.core.first(cljs.core.next(arglist__9186));
var more = cljs.core.rest(cljs.core.next(arglist__9186));
return G__9175__delegate.call(this, x, y, more);
});
return G__9175;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9171.call(this,x);
case  2 :
return _LT___9172.call(this,x,y);
default:
return _LT___9173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9173.cljs$lang$applyTo;
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
var _LT__EQ___9259 = (function (x){
return true;
});
var _LT__EQ___9260 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9261 = (function() { 
var G__9263__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
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
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9263__delegate.call(this, x, y, more);
};
G__9263.cljs$lang$maxFixedArity = 2;
G__9263.cljs$lang$applyTo = (function (arglist__9272){
var x = cljs.core.first(arglist__9272);
var y = cljs.core.first(cljs.core.next(arglist__9272));
var more = cljs.core.rest(cljs.core.next(arglist__9272));
return G__9263__delegate.call(this, x, y, more);
});
return G__9263;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9259.call(this,x);
case  2 :
return _LT__EQ___9260.call(this,x,y);
default:
return _LT__EQ___9261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9261.cljs$lang$applyTo;
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
var _GT___9278 = (function (x){
return true;
});
var _GT___9280 = (function (x,y){
return (x > y);
});
var _GT___9282 = (function() { 
var G__9286__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9288 = y;
var G__9289 = cljs.core.first.call(null,more);
var G__9290 = cljs.core.next.call(null,more);
x = G__9288;
y = G__9289;
more = G__9290;
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
var G__9286 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9286__delegate.call(this, x, y, more);
};
G__9286.cljs$lang$maxFixedArity = 2;
G__9286.cljs$lang$applyTo = (function (arglist__9294){
var x = cljs.core.first(arglist__9294);
var y = cljs.core.first(cljs.core.next(arglist__9294));
var more = cljs.core.rest(cljs.core.next(arglist__9294));
return G__9286__delegate.call(this, x, y, more);
});
return G__9286;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9278.call(this,x);
case  2 :
return _GT___9280.call(this,x,y);
default:
return _GT___9282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9282.cljs$lang$applyTo;
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
var _GT__EQ___9299 = (function (x){
return true;
});
var _GT__EQ___9300 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9301 = (function() { 
var G__9304__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9308 = y;
var G__9309 = cljs.core.first.call(null,more);
var G__9310 = cljs.core.next.call(null,more);
x = G__9308;
y = G__9309;
more = G__9310;
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
var G__9304 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9304__delegate.call(this, x, y, more);
};
G__9304.cljs$lang$maxFixedArity = 2;
G__9304.cljs$lang$applyTo = (function (arglist__9312){
var x = cljs.core.first(arglist__9312);
var y = cljs.core.first(cljs.core.next(arglist__9312));
var more = cljs.core.rest(cljs.core.next(arglist__9312));
return G__9304__delegate.call(this, x, y, more);
});
return G__9304;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9299.call(this,x);
case  2 :
return _GT__EQ___9300.call(this,x,y);
default:
return _GT__EQ___9301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9301.cljs$lang$applyTo;
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
var max__9318 = (function (x){
return x;
});
var max__9319 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9320 = (function() { 
var G__9325__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9325__delegate.call(this, x, y, more);
};
G__9325.cljs$lang$maxFixedArity = 2;
G__9325.cljs$lang$applyTo = (function (arglist__9330){
var x = cljs.core.first(arglist__9330);
var y = cljs.core.first(cljs.core.next(arglist__9330));
var more = cljs.core.rest(cljs.core.next(arglist__9330));
return G__9325__delegate.call(this, x, y, more);
});
return G__9325;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9318.call(this,x);
case  2 :
return max__9319.call(this,x,y);
default:
return max__9320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9320.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9333 = (function (x){
return x;
});
var min__9334 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9335 = (function() { 
var G__9337__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9337 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9337__delegate.call(this, x, y, more);
};
G__9337.cljs$lang$maxFixedArity = 2;
G__9337.cljs$lang$applyTo = (function (arglist__9342){
var x = cljs.core.first(arglist__9342);
var y = cljs.core.first(cljs.core.next(arglist__9342));
var more = cljs.core.rest(cljs.core.next(arglist__9342));
return G__9337__delegate.call(this, x, y, more);
});
return G__9337;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9333.call(this,x);
case  2 :
return min__9334.call(this,x,y);
default:
return min__9335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9335.cljs$lang$applyTo;
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
var rem__9431 = (n % d);

return cljs.core.fix.call(null,((n - rem__9431) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9435 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9435));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9442 = (function (){
return Math.random.call(null);
});
var rand__9443 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9442.call(this);
case  1 :
return rand__9443.call(this,n);
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
var _EQ__EQ___9537 = (function (x){
return true;
});
var _EQ__EQ___9538 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9539 = (function() { 
var G__9541__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9544 = y;
var G__9545 = cljs.core.first.call(null,more);
var G__9546 = cljs.core.next.call(null,more);
x = G__9544;
y = G__9545;
more = G__9546;
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
var G__9541 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9541__delegate.call(this, x, y, more);
};
G__9541.cljs$lang$maxFixedArity = 2;
G__9541.cljs$lang$applyTo = (function (arglist__9556){
var x = cljs.core.first(arglist__9556);
var y = cljs.core.first(cljs.core.next(arglist__9556));
var more = cljs.core.rest(cljs.core.next(arglist__9556));
return G__9541__delegate.call(this, x, y, more);
});
return G__9541;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9537.call(this,x);
case  2 :
return _EQ__EQ___9538.call(this,x,y);
default:
return _EQ__EQ___9539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9539.cljs$lang$applyTo;
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
var n__9583 = n;
var xs__9586 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9588 = xs__9586;

if(cljs.core.truth_(and__3546__auto____9588))
{return (n__9583 > 0);
} else
{return and__3546__auto____9588;
}
})()))
{{
var G__9589 = (n__9583 - 1);
var G__9590 = cljs.core.next.call(null,xs__9586);
n__9583 = G__9589;
xs__9586 = G__9590;
continue;
}
} else
{return xs__9586;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9609 = null;
var G__9609__9612 = (function (coll,n){
var temp__3695__auto____9598 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9598))
{var xs__9599 = temp__3695__auto____9598;

return cljs.core.first.call(null,xs__9599);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9609__9613 = (function (coll,n,not_found){
var temp__3695__auto____9606 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9606))
{var xs__9608 = temp__3695__auto____9606;

return cljs.core.first.call(null,xs__9608);
} else
{return not_found;
}
});
G__9609 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9609__9612.call(this,coll,n);
case  3 :
return G__9609__9613.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9609;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9639 = (function (){
return "";
});
var str_STAR___9640 = (function (x){
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
var str_STAR___9641 = (function() { 
var G__9647__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9648 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9649 = cljs.core.next.call(null,more);
sb = G__9648;
more = G__9649;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9647 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9647__delegate.call(this, x, ys);
};
G__9647.cljs$lang$maxFixedArity = 1;
G__9647.cljs$lang$applyTo = (function (arglist__9651){
var x = cljs.core.first(arglist__9651);
var ys = cljs.core.rest(arglist__9651);
return G__9647__delegate.call(this, x, ys);
});
return G__9647;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9639.call(this);
case  1 :
return str_STAR___9640.call(this,x);
default:
return str_STAR___9641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9641.cljs$lang$applyTo;
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
var str__9657 = (function (){
return "";
});
var str__9658 = (function (x){
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
var str__9659 = (function() { 
var G__9661__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9661 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9661__delegate.call(this, x, ys);
};
G__9661.cljs$lang$maxFixedArity = 1;
G__9661.cljs$lang$applyTo = (function (arglist__9662){
var x = cljs.core.first(arglist__9662);
var ys = cljs.core.rest(arglist__9662);
return G__9661__delegate.call(this, x, ys);
});
return G__9661;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9657.call(this);
case  1 :
return str__9658.call(this,x);
default:
return str__9659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9659.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9665 = (function (s,start){
return s.substring(start);
});
var subs__9666 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9665.call(this,s,start);
case  3 :
return subs__9666.call(this,s,start,end);
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
var symbol__9756 = (function (name){
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
var symbol__9757 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9756.call(this,ns);
case  2 :
return symbol__9757.call(this,ns,name);
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
var keyword__9761 = (function (name){
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
var keyword__9762 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9761.call(this,ns);
case  2 :
return keyword__9762.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9764 = cljs.core.seq.call(null,x);
var ys__9765 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9764)))
{return cljs.core.nil_QMARK_.call(null,ys__9765);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9765)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9764),cljs.core.first.call(null,ys__9765))))
{{
var G__9769 = cljs.core.next.call(null,xs__9764);
var G__9770 = cljs.core.next.call(null,ys__9765);
xs__9764 = G__9769;
ys__9765 = G__9770;
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
return cljs.core.reduce.call(null,(function (p1__9779_SHARP_,p2__9781_SHARP_){
return cljs.core.hash_combine.call(null,p1__9779_SHARP_,cljs.core.hash.call(null,p2__9781_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9796__9797 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9796__9797))
{var G__9799__9801 = cljs.core.first.call(null,G__9796__9797);
var vec__9800__9802 = G__9799__9801;
var key_name__9803 = cljs.core.nth.call(null,vec__9800__9802,0,null);
var f__9804 = cljs.core.nth.call(null,vec__9800__9802,1,null);
var G__9796__9805 = G__9796__9797;

var G__9799__9806 = G__9799__9801;
var G__9796__9807 = G__9796__9805;

while(true){
var vec__9808__9809 = G__9799__9806;
var key_name__9810 = cljs.core.nth.call(null,vec__9808__9809,0,null);
var f__9811 = cljs.core.nth.call(null,vec__9808__9809,1,null);
var G__9796__9812 = G__9796__9807;

var str_name__9813 = cljs.core.name.call(null,key_name__9810);

obj[str_name__9813] = f__9811;
var temp__3698__auto____9814 = cljs.core.next.call(null,G__9796__9812);

if(cljs.core.truth_(temp__3698__auto____9814))
{var G__9796__9816 = temp__3698__auto____9814;

{
var G__9826 = cljs.core.first.call(null,G__9796__9816);
var G__9827 = G__9796__9816;
G__9799__9806 = G__9826;
G__9796__9807 = G__9827;
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
var this__9838 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9840 = this;
return (new cljs.core.List(this__9840.meta,o,coll,(this__9840.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9841 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9843 = this;
return this__9843.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9848 = this;
return this__9848.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9849 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9851 = this;
return this__9851.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9853 = this;
return this__9853.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9855 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9857 = this;
return (new cljs.core.List(meta,this__9857.first,this__9857.rest,this__9857.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9859 = this;
return this__9859.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9861 = this;
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
var this__9964 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9965 = this;
return (new cljs.core.List(this__9965.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9966 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9967 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9968 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9970 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9973 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9977 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9982 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9987 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9991 = this;
return this__9991.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9993 = this;
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
list.cljs$lang$applyTo = (function (arglist__9996){
var items = cljs.core.seq( arglist__9996 );;
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
var this__9997 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9998 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9999 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10000 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10000.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10001 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10002 = this;
return this__10002.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10003 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10003.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10003.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10007 = this;
return this__10007.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10008 = this;
return (new cljs.core.Cons(meta,this__10008.first,this__10008.rest));
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
var G__10030 = null;
var G__10030__10033 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10030__10034 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10030 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10030__10033.call(this,string,f);
case  3 :
return G__10030__10034.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10030;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10036 = null;
var G__10036__10037 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10036__10038 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10036 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10036__10037.call(this,string,k);
case  3 :
return G__10036__10038.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10036;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10040 = null;
var G__10040__10041 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10040__10042 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10040 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10040__10041.call(this,string,n);
case  3 :
return G__10040__10042.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10040;
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
var G__10051 = null;
var G__10051__10052 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10051__10054 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10051 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10051__10052.call(this,this$,coll);
case  3 :
return G__10051__10054.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10051;
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
var x__10067 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10067;
} else
{lazy_seq.x = x__10067.call(null);
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
var this__10121 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10124 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10130 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10134 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10134.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10141 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10143 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10147 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10152 = this;
return this__10152.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10154 = this;
return (new cljs.core.LazySeq(meta,this__10154.realized,this__10154.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10207 = cljs.core.array.call(null);

var s__10210 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10210)))
{ary__10207.push(cljs.core.first.call(null,s__10210));
{
var G__10216 = cljs.core.next.call(null,s__10210);
s__10210 = G__10216;
continue;
}
} else
{return ary__10207;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10219 = s;
var i__10220 = n;
var sum__10221 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10222 = (i__10220 > 0);

if(cljs.core.truth_(and__3546__auto____10222))
{return cljs.core.seq.call(null,s__10219);
} else
{return and__3546__auto____10222;
}
})()))
{{
var G__10226 = cljs.core.next.call(null,s__10219);
var G__10227 = (i__10220 - 1);
var G__10228 = (sum__10221 + 1);
s__10219 = G__10226;
i__10220 = G__10227;
sum__10221 = G__10228;
continue;
}
} else
{return sum__10221;
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
var concat__10251 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10252 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10253 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10241 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10241))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10241),concat.call(null,cljs.core.rest.call(null,s__10241),y));
} else
{return y;
}
})));
});
var concat__10254 = (function() { 
var G__10304__delegate = function (x,y,zs){
var cat__10250 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10249 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10249))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10249),cat.call(null,cljs.core.rest.call(null,xys__10249),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10250.call(null,concat.call(null,x,y),zs);
};
var G__10304 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10304__delegate.call(this, x, y, zs);
};
G__10304.cljs$lang$maxFixedArity = 2;
G__10304.cljs$lang$applyTo = (function (arglist__10313){
var x = cljs.core.first(arglist__10313);
var y = cljs.core.first(cljs.core.next(arglist__10313));
var zs = cljs.core.rest(cljs.core.next(arglist__10313));
return G__10304__delegate.call(this, x, y, zs);
});
return G__10304;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10251.call(this);
case  1 :
return concat__10252.call(this,x);
case  2 :
return concat__10253.call(this,x,y);
default:
return concat__10254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10254.cljs$lang$applyTo;
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
var list_STAR___10326 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10327 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10328 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10329 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10330 = (function() { 
var G__10332__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10332 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10332__delegate.call(this, a, b, c, d, more);
};
G__10332.cljs$lang$maxFixedArity = 4;
G__10332.cljs$lang$applyTo = (function (arglist__10333){
var a = cljs.core.first(arglist__10333);
var b = cljs.core.first(cljs.core.next(arglist__10333));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10333)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10333))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10333))));
return G__10332__delegate.call(this, a, b, c, d, more);
});
return G__10332;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10326.call(this,a);
case  2 :
return list_STAR___10327.call(this,a,b);
case  3 :
return list_STAR___10328.call(this,a,b,c);
case  4 :
return list_STAR___10329.call(this,a,b,c,d);
default:
return list_STAR___10330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10330.cljs$lang$applyTo;
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
var apply__10363 = (function (f,args){
var fixed_arity__10335 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10335 + 1)) <= fixed_arity__10335)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10364 = (function (f,x,args){
var arglist__10337 = cljs.core.list_STAR_.call(null,x,args);
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
var apply__10365 = (function (f,x,y,args){
var arglist__10342 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10348 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10342,fixed_arity__10348) <= fixed_arity__10348)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10342));
} else
{return f.cljs$lang$applyTo(arglist__10342);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10342));
}
});
var apply__10366 = (function (f,x,y,z,args){
var arglist__10356 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10358 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10356,fixed_arity__10358) <= fixed_arity__10358)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10356));
} else
{return f.cljs$lang$applyTo(arglist__10356);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10356));
}
});
var apply__10367 = (function() { 
var G__10400__delegate = function (f,a,b,c,d,args){
var arglist__10359 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10360 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10359,fixed_arity__10360) <= fixed_arity__10360)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10359));
} else
{return f.cljs$lang$applyTo(arglist__10359);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10359));
}
};
var G__10400 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10400__delegate.call(this, f, a, b, c, d, args);
};
G__10400.cljs$lang$maxFixedArity = 5;
G__10400.cljs$lang$applyTo = (function (arglist__10407){
var f = cljs.core.first(arglist__10407);
var a = cljs.core.first(cljs.core.next(arglist__10407));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10407)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10407))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10407)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10407)))));
return G__10400__delegate.call(this, f, a, b, c, d, args);
});
return G__10400;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10363.call(this,f,a);
case  3 :
return apply__10364.call(this,f,a,b);
case  4 :
return apply__10365.call(this,f,a,b,c);
case  5 :
return apply__10366.call(this,f,a,b,c,d);
default:
return apply__10367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10367.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10418){
var obj = cljs.core.first(arglist__10418);
var f = cljs.core.first(cljs.core.next(arglist__10418));
var args = cljs.core.rest(cljs.core.next(arglist__10418));
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
var not_EQ___10429 = (function (x){
return false;
});
var not_EQ___10430 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10431 = (function() { 
var G__10436__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10436 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10436__delegate.call(this, x, y, more);
};
G__10436.cljs$lang$maxFixedArity = 2;
G__10436.cljs$lang$applyTo = (function (arglist__10439){
var x = cljs.core.first(arglist__10439);
var y = cljs.core.first(cljs.core.next(arglist__10439));
var more = cljs.core.rest(cljs.core.next(arglist__10439));
return G__10436__delegate.call(this, x, y, more);
});
return G__10436;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10429.call(this,x);
case  2 :
return not_EQ___10430.call(this,x,y);
default:
return not_EQ___10431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10431.cljs$lang$applyTo;
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
var G__10462 = pred;
var G__10463 = cljs.core.next.call(null,coll);
pred = G__10462;
coll = G__10463;
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
{var or__3548__auto____10472 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10472))
{return or__3548__auto____10472;
} else
{{
var G__10475 = pred;
var G__10476 = cljs.core.next.call(null,coll);
pred = G__10475;
coll = G__10476;
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
var G__10487 = null;
var G__10487__10488 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10487__10489 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10487__10490 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10487__10491 = (function() { 
var G__10493__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10493 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10493__delegate.call(this, x, y, zs);
};
G__10493.cljs$lang$maxFixedArity = 2;
G__10493.cljs$lang$applyTo = (function (arglist__10494){
var x = cljs.core.first(arglist__10494);
var y = cljs.core.first(cljs.core.next(arglist__10494));
var zs = cljs.core.rest(cljs.core.next(arglist__10494));
return G__10493__delegate.call(this, x, y, zs);
});
return G__10493;
})()
;
G__10487 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10487__10488.call(this);
case  1 :
return G__10487__10489.call(this,x);
case  2 :
return G__10487__10490.call(this,x,y);
default:
return G__10487__10491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10487.cljs$lang$maxFixedArity = 2;
G__10487.cljs$lang$applyTo = G__10487__10491.cljs$lang$applyTo;
return G__10487;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10502__delegate = function (args){
return x;
};
var G__10502 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10502__delegate.call(this, args);
};
G__10502.cljs$lang$maxFixedArity = 0;
G__10502.cljs$lang$applyTo = (function (arglist__10504){
var args = cljs.core.seq( arglist__10504 );;
return G__10502__delegate.call(this, args);
});
return G__10502;
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
var comp__10526 = (function (){
return cljs.core.identity;
});
var comp__10527 = (function (f){
return f;
});
var comp__10529 = (function (f,g){
return (function() {
var G__10538 = null;
var G__10538__10540 = (function (){
return f.call(null,g.call(null));
});
var G__10538__10541 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10538__10542 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10538__10543 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10538__10544 = (function() { 
var G__10559__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10559 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10559__delegate.call(this, x, y, z, args);
};
G__10559.cljs$lang$maxFixedArity = 3;
G__10559.cljs$lang$applyTo = (function (arglist__10560){
var x = cljs.core.first(arglist__10560);
var y = cljs.core.first(cljs.core.next(arglist__10560));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10560)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10560)));
return G__10559__delegate.call(this, x, y, z, args);
});
return G__10559;
})()
;
G__10538 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10538__10540.call(this);
case  1 :
return G__10538__10541.call(this,x);
case  2 :
return G__10538__10542.call(this,x,y);
case  3 :
return G__10538__10543.call(this,x,y,z);
default:
return G__10538__10544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10538.cljs$lang$maxFixedArity = 3;
G__10538.cljs$lang$applyTo = G__10538__10544.cljs$lang$applyTo;
return G__10538;
})()
});
var comp__10530 = (function (f,g,h){
return (function() {
var G__10606 = null;
var G__10606__10607 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10606__10608 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10606__10609 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10606__10610 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10606__10611 = (function() { 
var G__10627__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10627__delegate.call(this, x, y, z, args);
};
G__10627.cljs$lang$maxFixedArity = 3;
G__10627.cljs$lang$applyTo = (function (arglist__10637){
var x = cljs.core.first(arglist__10637);
var y = cljs.core.first(cljs.core.next(arglist__10637));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10637)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10637)));
return G__10627__delegate.call(this, x, y, z, args);
});
return G__10627;
})()
;
G__10606 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10606__10607.call(this);
case  1 :
return G__10606__10608.call(this,x);
case  2 :
return G__10606__10609.call(this,x,y);
case  3 :
return G__10606__10610.call(this,x,y,z);
default:
return G__10606__10611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10606.cljs$lang$maxFixedArity = 3;
G__10606.cljs$lang$applyTo = G__10606__10611.cljs$lang$applyTo;
return G__10606;
})()
});
var comp__10531 = (function() { 
var G__10641__delegate = function (f1,f2,f3,fs){
var fs__10517 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10644__delegate = function (args){
var ret__10518 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10517),args);
var fs__10520 = cljs.core.next.call(null,fs__10517);

while(true){
if(cljs.core.truth_(fs__10520))
{{
var G__10647 = cljs.core.first.call(null,fs__10520).call(null,ret__10518);
var G__10648 = cljs.core.next.call(null,fs__10520);
ret__10518 = G__10647;
fs__10520 = G__10648;
continue;
}
} else
{return ret__10518;
}
break;
}
};
var G__10644 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10644__delegate.call(this, args);
};
G__10644.cljs$lang$maxFixedArity = 0;
G__10644.cljs$lang$applyTo = (function (arglist__10656){
var args = cljs.core.seq( arglist__10656 );;
return G__10644__delegate.call(this, args);
});
return G__10644;
})()
;
};
var G__10641 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10641__delegate.call(this, f1, f2, f3, fs);
};
G__10641.cljs$lang$maxFixedArity = 3;
G__10641.cljs$lang$applyTo = (function (arglist__10657){
var f1 = cljs.core.first(arglist__10657);
var f2 = cljs.core.first(cljs.core.next(arglist__10657));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10657)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10657)));
return G__10641__delegate.call(this, f1, f2, f3, fs);
});
return G__10641;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10526.call(this);
case  1 :
return comp__10527.call(this,f1);
case  2 :
return comp__10529.call(this,f1,f2);
case  3 :
return comp__10530.call(this,f1,f2,f3);
default:
return comp__10531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10531.cljs$lang$applyTo;
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
var partial__10795 = (function (f,arg1){
return (function() { 
var G__10801__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
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
var partial__10796 = (function (f,arg1,arg2){
return (function() { 
var G__10804__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10804 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10804__delegate.call(this, args);
};
G__10804.cljs$lang$maxFixedArity = 0;
G__10804.cljs$lang$applyTo = (function (arglist__10807){
var args = cljs.core.seq( arglist__10807 );;
return G__10804__delegate.call(this, args);
});
return G__10804;
})()
;
});
var partial__10797 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10809__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10809 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10809__delegate.call(this, args);
};
G__10809.cljs$lang$maxFixedArity = 0;
G__10809.cljs$lang$applyTo = (function (arglist__10810){
var args = cljs.core.seq( arglist__10810 );;
return G__10809__delegate.call(this, args);
});
return G__10809;
})()
;
});
var partial__10798 = (function() { 
var G__10811__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10812__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10812__delegate.call(this, args);
};
G__10812.cljs$lang$maxFixedArity = 0;
G__10812.cljs$lang$applyTo = (function (arglist__10817){
var args = cljs.core.seq( arglist__10817 );;
return G__10812__delegate.call(this, args);
});
return G__10812;
})()
;
};
var G__10811 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10811__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10811.cljs$lang$maxFixedArity = 4;
G__10811.cljs$lang$applyTo = (function (arglist__10818){
var f = cljs.core.first(arglist__10818);
var arg1 = cljs.core.first(cljs.core.next(arglist__10818));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10818)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10818))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10818))));
return G__10811__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10811;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10795.call(this,f,arg1);
case  3 :
return partial__10796.call(this,f,arg1,arg2);
case  4 :
return partial__10797.call(this,f,arg1,arg2,arg3);
default:
return partial__10798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10798.cljs$lang$applyTo;
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
var fnil__10837 = (function (f,x){
return (function() {
var G__10844 = null;
var G__10844__10845 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10844__10846 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10844__10847 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10844__10848 = (function() { 
var G__10854__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10854 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10854__delegate.call(this, a, b, c, ds);
};
G__10854.cljs$lang$maxFixedArity = 3;
G__10854.cljs$lang$applyTo = (function (arglist__10860){
var a = cljs.core.first(arglist__10860);
var b = cljs.core.first(cljs.core.next(arglist__10860));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10860)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10860)));
return G__10854__delegate.call(this, a, b, c, ds);
});
return G__10854;
})()
;
G__10844 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10844__10845.call(this,a);
case  2 :
return G__10844__10846.call(this,a,b);
case  3 :
return G__10844__10847.call(this,a,b,c);
default:
return G__10844__10848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10844.cljs$lang$maxFixedArity = 3;
G__10844.cljs$lang$applyTo = G__10844__10848.cljs$lang$applyTo;
return G__10844;
})()
});
var fnil__10839 = (function (f,x,y){
return (function() {
var G__10869 = null;
var G__10869__10872 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10869__10873 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10869__10874 = (function() { 
var G__10878__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10878 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10878__delegate.call(this, a, b, c, ds);
};
G__10878.cljs$lang$maxFixedArity = 3;
G__10878.cljs$lang$applyTo = (function (arglist__10881){
var a = cljs.core.first(arglist__10881);
var b = cljs.core.first(cljs.core.next(arglist__10881));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10881)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10881)));
return G__10878__delegate.call(this, a, b, c, ds);
});
return G__10878;
})()
;
G__10869 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10869__10872.call(this,a,b);
case  3 :
return G__10869__10873.call(this,a,b,c);
default:
return G__10869__10874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10869.cljs$lang$maxFixedArity = 3;
G__10869.cljs$lang$applyTo = G__10869__10874.cljs$lang$applyTo;
return G__10869;
})()
});
var fnil__10841 = (function (f,x,y,z){
return (function() {
var G__10885 = null;
var G__10885__10887 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10885__10888 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10885__10890 = (function() { 
var G__10899__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10899 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10899__delegate.call(this, a, b, c, ds);
};
G__10899.cljs$lang$maxFixedArity = 3;
G__10899.cljs$lang$applyTo = (function (arglist__10908){
var a = cljs.core.first(arglist__10908);
var b = cljs.core.first(cljs.core.next(arglist__10908));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10908)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10908)));
return G__10899__delegate.call(this, a, b, c, ds);
});
return G__10899;
})()
;
G__10885 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10885__10887.call(this,a,b);
case  3 :
return G__10885__10888.call(this,a,b,c);
default:
return G__10885__10890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10885.cljs$lang$maxFixedArity = 3;
G__10885.cljs$lang$applyTo = G__10885__10890.cljs$lang$applyTo;
return G__10885;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10837.call(this,f,x);
case  3 :
return fnil__10839.call(this,f,x,y);
case  4 :
return fnil__10841.call(this,f,x,y,z);
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
var mapi__10947 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10935 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10935))
{var s__10942 = temp__3698__auto____10935;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10942)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10942)));
} else
{return null;
}
})));
});

return mapi__10947.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11008 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11008))
{var s__11009 = temp__3698__auto____11008;

var x__11010 = f.call(null,cljs.core.first.call(null,s__11009));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11010)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11009));
} else
{return cljs.core.cons.call(null,x__11010,keep.call(null,f,cljs.core.rest.call(null,s__11009)));
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
var keepi__11221 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11217))
{var s__11218 = temp__3698__auto____11217;

var x__11219 = f.call(null,idx,cljs.core.first.call(null,s__11218));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11219)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11218));
} else
{return cljs.core.cons.call(null,x__11219,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11218)));
}
} else
{return null;
}
})));
});

return keepi__11221.call(null,0,coll);
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
var every_pred__11351 = (function (p){
return (function() {
var ep1 = null;
var ep1__11394 = (function (){
return true;
});
var ep1__11395 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11418 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11240 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11240))
{return p.call(null,y);
} else
{return and__3546__auto____11240;
}
})());
});
var ep1__11419 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11241 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11241))
{var and__3546__auto____11242 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11242))
{return p.call(null,z);
} else
{return and__3546__auto____11242;
}
} else
{return and__3546__auto____11241;
}
})());
});
var ep1__11420 = (function() { 
var G__11424__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11243 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11243))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11243;
}
})());
};
var G__11424 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11424__delegate.call(this, x, y, z, args);
};
G__11424.cljs$lang$maxFixedArity = 3;
G__11424.cljs$lang$applyTo = (function (arglist__11425){
var x = cljs.core.first(arglist__11425);
var y = cljs.core.first(cljs.core.next(arglist__11425));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11425)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11425)));
return G__11424__delegate.call(this, x, y, z, args);
});
return G__11424;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11394.call(this);
case  1 :
return ep1__11395.call(this,x);
case  2 :
return ep1__11418.call(this,x,y);
case  3 :
return ep1__11419.call(this,x,y,z);
default:
return ep1__11420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11420.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11372 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11426 = (function (){
return true;
});
var ep2__11427 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11246 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11246))
{return p2.call(null,x);
} else
{return and__3546__auto____11246;
}
})());
});
var ep2__11428 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11250 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11250))
{var and__3546__auto____11253 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11253))
{var and__3546__auto____11254 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11254))
{return p2.call(null,y);
} else
{return and__3546__auto____11254;
}
} else
{return and__3546__auto____11253;
}
} else
{return and__3546__auto____11250;
}
})());
});
var ep2__11429 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11255 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11255))
{var and__3546__auto____11257 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11257))
{var and__3546__auto____11259 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11259))
{var and__3546__auto____11262 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11262))
{var and__3546__auto____11263 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11263))
{return p2.call(null,z);
} else
{return and__3546__auto____11263;
}
} else
{return and__3546__auto____11262;
}
} else
{return and__3546__auto____11259;
}
} else
{return and__3546__auto____11257;
}
} else
{return and__3546__auto____11255;
}
})());
});
var ep2__11430 = (function() { 
var G__11432__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11265 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11265))
{return cljs.core.every_QMARK_.call(null,(function (p1__11164_SHARP_){
var and__3546__auto____11267 = p1.call(null,p1__11164_SHARP_);

if(cljs.core.truth_(and__3546__auto____11267))
{return p2.call(null,p1__11164_SHARP_);
} else
{return and__3546__auto____11267;
}
}),args);
} else
{return and__3546__auto____11265;
}
})());
};
var G__11432 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11432__delegate.call(this, x, y, z, args);
};
G__11432.cljs$lang$maxFixedArity = 3;
G__11432.cljs$lang$applyTo = (function (arglist__11433){
var x = cljs.core.first(arglist__11433);
var y = cljs.core.first(cljs.core.next(arglist__11433));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11433)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11433)));
return G__11432__delegate.call(this, x, y, z, args);
});
return G__11432;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11426.call(this);
case  1 :
return ep2__11427.call(this,x);
case  2 :
return ep2__11428.call(this,x,y);
case  3 :
return ep2__11429.call(this,x,y,z);
default:
return ep2__11430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11430.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11373 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11434 = (function (){
return true;
});
var ep3__11435 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11273 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11273))
{var and__3546__auto____11275 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11275))
{return p3.call(null,x);
} else
{return and__3546__auto____11275;
}
} else
{return and__3546__auto____11273;
}
})());
});
var ep3__11436 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11276 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11276))
{var and__3546__auto____11277 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11277))
{var and__3546__auto____11278 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11278))
{var and__3546__auto____11279 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11280 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11280))
{return p3.call(null,y);
} else
{return and__3546__auto____11280;
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
{return and__3546__auto____11276;
}
})());
});
var ep3__11437 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11282 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11282))
{var and__3546__auto____11283 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11283))
{var and__3546__auto____11284 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11284))
{var and__3546__auto____11285 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11285))
{var and__3546__auto____11287 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11287))
{var and__3546__auto____11288 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11288))
{var and__3546__auto____11290 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11290))
{var and__3546__auto____11291 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11291))
{return p3.call(null,z);
} else
{return and__3546__auto____11291;
}
} else
{return and__3546__auto____11290;
}
} else
{return and__3546__auto____11288;
}
} else
{return and__3546__auto____11287;
}
} else
{return and__3546__auto____11285;
}
} else
{return and__3546__auto____11284;
}
} else
{return and__3546__auto____11283;
}
} else
{return and__3546__auto____11282;
}
})());
});
var ep3__11438 = (function() { 
var G__11440__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11298 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11298))
{return cljs.core.every_QMARK_.call(null,(function (p1__11166_SHARP_){
var and__3546__auto____11300 = p1.call(null,p1__11166_SHARP_);

if(cljs.core.truth_(and__3546__auto____11300))
{var and__3546__auto____11302 = p2.call(null,p1__11166_SHARP_);

if(cljs.core.truth_(and__3546__auto____11302))
{return p3.call(null,p1__11166_SHARP_);
} else
{return and__3546__auto____11302;
}
} else
{return and__3546__auto____11300;
}
}),args);
} else
{return and__3546__auto____11298;
}
})());
};
var G__11440 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11440__delegate.call(this, x, y, z, args);
};
G__11440.cljs$lang$maxFixedArity = 3;
G__11440.cljs$lang$applyTo = (function (arglist__11441){
var x = cljs.core.first(arglist__11441);
var y = cljs.core.first(cljs.core.next(arglist__11441));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11441)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11441)));
return G__11440__delegate.call(this, x, y, z, args);
});
return G__11440;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11434.call(this);
case  1 :
return ep3__11435.call(this,x);
case  2 :
return ep3__11436.call(this,x,y);
case  3 :
return ep3__11437.call(this,x,y,z);
default:
return ep3__11438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11438.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11374 = (function() { 
var G__11442__delegate = function (p1,p2,p3,ps){
var ps__11332 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11443 = (function (){
return true;
});
var epn__11444 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11168_SHARP_){
return p1__11168_SHARP_.call(null,x);
}),ps__11332);
});
var epn__11445 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11170_SHARP_){
var and__3546__auto____11335 = p1__11170_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11335))
{return p1__11170_SHARP_.call(null,y);
} else
{return and__3546__auto____11335;
}
}),ps__11332);
});
var epn__11446 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11199_SHARP_){
var and__3546__auto____11337 = p1__11199_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11337))
{var and__3546__auto____11340 = p1__11199_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11340))
{return p1__11199_SHARP_.call(null,z);
} else
{return and__3546__auto____11340;
}
} else
{return and__3546__auto____11337;
}
}),ps__11332);
});
var epn__11447 = (function() { 
var G__11449__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11347 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11347))
{return cljs.core.every_QMARK_.call(null,(function (p1__11200_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11200_SHARP_,args);
}),ps__11332);
} else
{return and__3546__auto____11347;
}
})());
};
var G__11449 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11449__delegate.call(this, x, y, z, args);
};
G__11449.cljs$lang$maxFixedArity = 3;
G__11449.cljs$lang$applyTo = (function (arglist__11450){
var x = cljs.core.first(arglist__11450);
var y = cljs.core.first(cljs.core.next(arglist__11450));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11450)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11450)));
return G__11449__delegate.call(this, x, y, z, args);
});
return G__11449;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11443.call(this);
case  1 :
return epn__11444.call(this,x);
case  2 :
return epn__11445.call(this,x,y);
case  3 :
return epn__11446.call(this,x,y,z);
default:
return epn__11447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11447.cljs$lang$applyTo;
return epn;
})()
};
var G__11442 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11442__delegate.call(this, p1, p2, p3, ps);
};
G__11442.cljs$lang$maxFixedArity = 3;
G__11442.cljs$lang$applyTo = (function (arglist__11451){
var p1 = cljs.core.first(arglist__11451);
var p2 = cljs.core.first(cljs.core.next(arglist__11451));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11451)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11451)));
return G__11442__delegate.call(this, p1, p2, p3, ps);
});
return G__11442;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11351.call(this,p1);
case  2 :
return every_pred__11372.call(this,p1,p2);
case  3 :
return every_pred__11373.call(this,p1,p2,p3);
default:
return every_pred__11374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11374.cljs$lang$applyTo;
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
var some_fn__11555 = (function (p){
return (function() {
var sp1 = null;
var sp1__11560 = (function (){
return null;
});
var sp1__11561 = (function (x){
return p.call(null,x);
});
var sp1__11563 = (function (x,y){
var or__3548__auto____11453 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
} else
{return p.call(null,y);
}
});
var sp1__11565 = (function (x,y,z){
var or__3548__auto____11455 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11455))
{return or__3548__auto____11455;
} else
{var or__3548__auto____11458 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11458))
{return or__3548__auto____11458;
} else
{return p.call(null,z);
}
}
});
var sp1__11578 = (function() { 
var G__11584__delegate = function (x,y,z,args){
var or__3548__auto____11462 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11462))
{return or__3548__auto____11462;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11584 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11584__delegate.call(this, x, y, z, args);
};
G__11584.cljs$lang$maxFixedArity = 3;
G__11584.cljs$lang$applyTo = (function (arglist__11586){
var x = cljs.core.first(arglist__11586);
var y = cljs.core.first(cljs.core.next(arglist__11586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11586)));
return G__11584__delegate.call(this, x, y, z, args);
});
return G__11584;
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
return sp1__11565.call(this,x,y,z);
default:
return sp1__11578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11578.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11556 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11588 = (function (){
return null;
});
var sp2__11590 = (function (x){
var or__3548__auto____11466 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{return p2.call(null,x);
}
});
var sp2__11592 = (function (x,y){
var or__3548__auto____11470 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11470))
{return or__3548__auto____11470;
} else
{var or__3548__auto____11473 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{var or__3548__auto____11474 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11593 = (function (x,y,z){
var or__3548__auto____11476 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{var or__3548__auto____11479 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{var or__3548__auto____11480 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11480))
{return or__3548__auto____11480;
} else
{var or__3548__auto____11483 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11483))
{return or__3548__auto____11483;
} else
{var or__3548__auto____11486 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11486))
{return or__3548__auto____11486;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11594 = (function() { 
var G__11608__delegate = function (x,y,z,args){
var or__3548__auto____11492 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11492))
{return or__3548__auto____11492;
} else
{return cljs.core.some.call(null,(function (p1__11223_SHARP_){
var or__3548__auto____11494 = p1.call(null,p1__11223_SHARP_);

if(cljs.core.truth_(or__3548__auto____11494))
{return or__3548__auto____11494;
} else
{return p2.call(null,p1__11223_SHARP_);
}
}),args);
}
};
var G__11608 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11608__delegate.call(this, x, y, z, args);
};
G__11608.cljs$lang$maxFixedArity = 3;
G__11608.cljs$lang$applyTo = (function (arglist__11614){
var x = cljs.core.first(arglist__11614);
var y = cljs.core.first(cljs.core.next(arglist__11614));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11614)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11614)));
return G__11608__delegate.call(this, x, y, z, args);
});
return G__11608;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11588.call(this);
case  1 :
return sp2__11590.call(this,x);
case  2 :
return sp2__11592.call(this,x,y);
case  3 :
return sp2__11593.call(this,x,y,z);
default:
return sp2__11594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11594.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11557 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11615 = (function (){
return null;
});
var sp3__11616 = (function (x){
var or__3548__auto____11496 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{var or__3548__auto____11498 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11498))
{return or__3548__auto____11498;
} else
{return p3.call(null,x);
}
}
});
var sp3__11617 = (function (x,y){
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
{var or__3548__auto____11512 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11618 = (function (x,y,z){
var or__3548__auto____11519 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11519))
{return or__3548__auto____11519;
} else
{var or__3548__auto____11521 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11521))
{return or__3548__auto____11521;
} else
{var or__3548__auto____11524 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{var or__3548__auto____11526 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11526))
{return or__3548__auto____11526;
} else
{var or__3548__auto____11527 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11527))
{return or__3548__auto____11527;
} else
{var or__3548__auto____11530 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11530))
{return or__3548__auto____11530;
} else
{var or__3548__auto____11531 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
} else
{var or__3548__auto____11533 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
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
var sp3__11619 = (function() { 
var G__11628__delegate = function (x,y,z,args){
var or__3548__auto____11536 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11536))
{return or__3548__auto____11536;
} else
{return cljs.core.some.call(null,(function (p1__11226_SHARP_){
var or__3548__auto____11539 = p1.call(null,p1__11226_SHARP_);

if(cljs.core.truth_(or__3548__auto____11539))
{return or__3548__auto____11539;
} else
{var or__3548__auto____11540 = p2.call(null,p1__11226_SHARP_);

if(cljs.core.truth_(or__3548__auto____11540))
{return or__3548__auto____11540;
} else
{return p3.call(null,p1__11226_SHARP_);
}
}
}),args);
}
};
var G__11628 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11628__delegate.call(this, x, y, z, args);
};
G__11628.cljs$lang$maxFixedArity = 3;
G__11628.cljs$lang$applyTo = (function (arglist__11630){
var x = cljs.core.first(arglist__11630);
var y = cljs.core.first(cljs.core.next(arglist__11630));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11630)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11630)));
return G__11628__delegate.call(this, x, y, z, args);
});
return G__11628;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11615.call(this);
case  1 :
return sp3__11616.call(this,x);
case  2 :
return sp3__11617.call(this,x,y);
case  3 :
return sp3__11618.call(this,x,y,z);
default:
return sp3__11619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11619.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11558 = (function() { 
var G__11636__delegate = function (p1,p2,p3,ps){
var ps__11547 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11637 = (function (){
return null;
});
var spn__11640 = (function (x){
return cljs.core.some.call(null,(function (p1__11228_SHARP_){
return p1__11228_SHARP_.call(null,x);
}),ps__11547);
});
var spn__11642 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11230_SHARP_){
var or__3548__auto____11550 = p1__11230_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11550))
{return or__3548__auto____11550;
} else
{return p1__11230_SHARP_.call(null,y);
}
}),ps__11547);
});
var spn__11644 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11231_SHARP_){
var or__3548__auto____11551 = p1__11231_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11551))
{return or__3548__auto____11551;
} else
{var or__3548__auto____11552 = p1__11231_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11552))
{return or__3548__auto____11552;
} else
{return p1__11231_SHARP_.call(null,z);
}
}
}),ps__11547);
});
var spn__11646 = (function() { 
var G__11652__delegate = function (x,y,z,args){
var or__3548__auto____11553 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{return cljs.core.some.call(null,(function (p1__11232_SHARP_){
return cljs.core.some.call(null,p1__11232_SHARP_,args);
}),ps__11547);
}
};
var G__11652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11652__delegate.call(this, x, y, z, args);
};
G__11652.cljs$lang$maxFixedArity = 3;
G__11652.cljs$lang$applyTo = (function (arglist__11655){
var x = cljs.core.first(arglist__11655);
var y = cljs.core.first(cljs.core.next(arglist__11655));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11655)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11655)));
return G__11652__delegate.call(this, x, y, z, args);
});
return G__11652;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11637.call(this);
case  1 :
return spn__11640.call(this,x);
case  2 :
return spn__11642.call(this,x,y);
case  3 :
return spn__11644.call(this,x,y,z);
default:
return spn__11646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11646.cljs$lang$applyTo;
return spn;
})()
};
var G__11636 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11636__delegate.call(this, p1, p2, p3, ps);
};
G__11636.cljs$lang$maxFixedArity = 3;
G__11636.cljs$lang$applyTo = (function (arglist__11662){
var p1 = cljs.core.first(arglist__11662);
var p2 = cljs.core.first(cljs.core.next(arglist__11662));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11662)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11662)));
return G__11636__delegate.call(this, p1, p2, p3, ps);
});
return G__11636;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11555.call(this,p1);
case  2 :
return some_fn__11556.call(this,p1,p2);
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
var map__11812 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11665 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11665))
{var s__11666 = temp__3698__auto____11665;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11666)),map.call(null,f,cljs.core.rest.call(null,s__11666)));
} else
{return null;
}
})));
});
var map__11813 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11671 = cljs.core.seq.call(null,c1);
var s2__11672 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11673 = s1__11671;

if(cljs.core.truth_(and__3546__auto____11673))
{return s2__11672;
} else
{return and__3546__auto____11673;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11671),cljs.core.first.call(null,s2__11672)),map.call(null,f,cljs.core.rest.call(null,s1__11671),cljs.core.rest.call(null,s2__11672)));
} else
{return null;
}
})));
});
var map__11814 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11698 = cljs.core.seq.call(null,c1);
var s2__11702 = cljs.core.seq.call(null,c2);
var s3__11703 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11704 = s1__11698;

if(cljs.core.truth_(and__3546__auto____11704))
{var and__3546__auto____11706 = s2__11702;

if(cljs.core.truth_(and__3546__auto____11706))
{return s3__11703;
} else
{return and__3546__auto____11706;
}
} else
{return and__3546__auto____11704;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11698),cljs.core.first.call(null,s2__11702),cljs.core.first.call(null,s3__11703)),map.call(null,f,cljs.core.rest.call(null,s1__11698),cljs.core.rest.call(null,s2__11702),cljs.core.rest.call(null,s3__11703)));
} else
{return null;
}
})));
});
var map__11815 = (function() { 
var G__11839__delegate = function (f,c1,c2,c3,colls){
var step__11713 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11711 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11711)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11711),step.call(null,map.call(null,cljs.core.rest,ss__11711)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11452_SHARP_){
return cljs.core.apply.call(null,f,p1__11452_SHARP_);
}),step__11713.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11839 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11839__delegate.call(this, f, c1, c2, c3, colls);
};
G__11839.cljs$lang$maxFixedArity = 4;
G__11839.cljs$lang$applyTo = (function (arglist__11847){
var f = cljs.core.first(arglist__11847);
var c1 = cljs.core.first(cljs.core.next(arglist__11847));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11847)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11847))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11847))));
return G__11839__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11839;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11812.call(this,f,c1);
case  3 :
return map__11813.call(this,f,c1,c2);
case  4 :
return map__11814.call(this,f,c1,c2,c3);
default:
return map__11815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11815.cljs$lang$applyTo;
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
{var temp__3698__auto____11854 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11854))
{var s__11855 = temp__3698__auto____11854;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11855),take.call(null,(n - 1),cljs.core.rest.call(null,s__11855)));
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
var step__11868 = (function (n,coll){
while(true){
var s__11866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11867 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11867))
{return s__11866;
} else
{return and__3546__auto____11867;
}
})()))
{{
var G__11869 = (n - 1);
var G__11870 = cljs.core.rest.call(null,s__11866);
n = G__11869;
coll = G__11870;
continue;
}
} else
{return s__11866;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11868.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11877 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11878 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11877.call(this,n);
case  2 :
return drop_last__11878.call(this,n,s);
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
var s__11886 = cljs.core.seq.call(null,coll);
var lead__11927 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11927))
{{
var G__11935 = cljs.core.next.call(null,s__11886);
var G__11936 = cljs.core.next.call(null,lead__11927);
s__11886 = G__11935;
lead__11927 = G__11936;
continue;
}
} else
{return s__11886;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11948 = (function (pred,coll){
while(true){
var s__11941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11943 = s__11941;

if(cljs.core.truth_(and__3546__auto____11943))
{return pred.call(null,cljs.core.first.call(null,s__11941));
} else
{return and__3546__auto____11943;
}
})()))
{{
var G__12054 = pred;
var G__12055 = cljs.core.rest.call(null,s__11941);
pred = G__12054;
coll = G__12055;
continue;
}
} else
{return s__11941;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11948.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12058 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12058))
{var s__12059 = temp__3698__auto____12058;

return cljs.core.concat.call(null,s__12059,cycle.call(null,s__12059));
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
var repeat__12099 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12100 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12099.call(this,n);
case  2 :
return repeat__12100.call(this,n,x);
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
var repeatedly__12110 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12111 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12110.call(this,n);
case  2 :
return repeatedly__12111.call(this,n,f);
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
var interleave__12125 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12115 = cljs.core.seq.call(null,c1);
var s2__12117 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12118 = s1__12115;

if(cljs.core.truth_(and__3546__auto____12118))
{return s2__12117;
} else
{return and__3546__auto____12118;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12115),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12117),interleave.call(null,cljs.core.rest.call(null,s1__12115),cljs.core.rest.call(null,s2__12117))));
} else
{return null;
}
})));
});
var interleave__12126 = (function() { 
var G__12128__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12123 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12123)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12123),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12123)));
} else
{return null;
}
})));
};
var G__12128 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12128__delegate.call(this, c1, c2, colls);
};
G__12128.cljs$lang$maxFixedArity = 2;
G__12128.cljs$lang$applyTo = (function (arglist__12130){
var c1 = cljs.core.first(arglist__12130);
var c2 = cljs.core.first(cljs.core.next(arglist__12130));
var colls = cljs.core.rest(cljs.core.next(arglist__12130));
return G__12128__delegate.call(this, c1, c2, colls);
});
return G__12128;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12125.call(this,c1,c2);
default:
return interleave__12126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12126.cljs$lang$applyTo;
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
var cat__12200 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12132 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12132))
{var coll__12133 = temp__3695__auto____12132;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12133),cat.call(null,cljs.core.rest.call(null,coll__12133),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12200.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12237 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12238 = (function() { 
var G__12241__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12241 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12241__delegate.call(this, f, coll, colls);
};
G__12241.cljs$lang$maxFixedArity = 2;
G__12241.cljs$lang$applyTo = (function (arglist__12242){
var f = cljs.core.first(arglist__12242);
var coll = cljs.core.first(cljs.core.next(arglist__12242));
var colls = cljs.core.rest(cljs.core.next(arglist__12242));
return G__12241__delegate.call(this, f, coll, colls);
});
return G__12241;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12237.call(this,f,coll);
default:
return mapcat__12238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12238.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12247 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12247))
{var s__12248 = temp__3698__auto____12247;

var f__12249 = cljs.core.first.call(null,s__12248);
var r__12250 = cljs.core.rest.call(null,s__12248);

if(cljs.core.truth_(pred.call(null,f__12249)))
{return cljs.core.cons.call(null,f__12249,filter.call(null,pred,r__12250));
} else
{return filter.call(null,pred,r__12250);
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
var walk__12257 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12257.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12255_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12255_SHARP_));
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
var partition__12293 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12294 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12278 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12278))
{var s__12280 = temp__3698__auto____12278;

var p__12282 = cljs.core.take.call(null,n,s__12280);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12282))))
{return cljs.core.cons.call(null,p__12282,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12280)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12295 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12285 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12285))
{var s__12286 = temp__3698__auto____12285;

var p__12288 = cljs.core.take.call(null,n,s__12286);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12288))))
{return cljs.core.cons.call(null,p__12288,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12286)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12288,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12293.call(this,n,step);
case  3 :
return partition__12294.call(this,n,step,pad);
case  4 :
return partition__12295.call(this,n,step,pad,coll);
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
var get_in__12313 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12315 = (function (m,ks,not_found){
var sentinel__12307 = cljs.core.lookup_sentinel;
var m__12308 = m;
var ks__12310 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12310))
{var m__12311 = cljs.core.get.call(null,m__12308,cljs.core.first.call(null,ks__12310),sentinel__12307);

if(cljs.core.truth_((sentinel__12307 === m__12311)))
{return not_found;
} else
{{
var G__12321 = sentinel__12307;
var G__12322 = m__12311;
var G__12323 = cljs.core.next.call(null,ks__12310);
sentinel__12307 = G__12321;
m__12308 = G__12322;
ks__12310 = G__12323;
continue;
}
}
} else
{return m__12308;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12313.call(this,m,ks);
case  3 :
return get_in__12315.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12330,v){
var vec__12331__12332 = p__12330;
var k__12334 = cljs.core.nth.call(null,vec__12331__12332,0,null);
var ks__12335 = cljs.core.nthnext.call(null,vec__12331__12332,1);

if(cljs.core.truth_(ks__12335))
{return cljs.core.assoc.call(null,m,k__12334,assoc_in.call(null,cljs.core.get.call(null,m,k__12334),ks__12335,v));
} else
{return cljs.core.assoc.call(null,m,k__12334,v);
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
var update_in__delegate = function (m,p__12353,f,args){
var vec__12355__12356 = p__12353;
var k__12358 = cljs.core.nth.call(null,vec__12355__12356,0,null);
var ks__12360 = cljs.core.nthnext.call(null,vec__12355__12356,1);

if(cljs.core.truth_(ks__12360))
{return cljs.core.assoc.call(null,m,k__12358,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12358),ks__12360,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12358,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12358),args));
}
};
var update_in = function (m,p__12353,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12353, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12365){
var m = cljs.core.first(arglist__12365);
var p__12353 = cljs.core.first(cljs.core.next(arglist__12365));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12365)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12365)));
return update_in__delegate.call(this, m, p__12353, f, args);
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
var this__12390 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12492 = null;
var G__12492__12494 = (function (coll,k){
var this__12391 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12492__12495 = (function (coll,k,not_found){
var this__12393 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12492 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12492__12494.call(this,coll,k);
case  3 :
return G__12492__12495.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12492;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12394 = this;
var new_array__12395 = cljs.core.aclone.call(null,this__12394.array);

(new_array__12395[k] = v);
return (new cljs.core.Vector(this__12394.meta,new_array__12395));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12498 = null;
var G__12498__12499 = (function (coll,k){
var this__12400 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12498__12500 = (function (coll,k,not_found){
var this__12404 = this;
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
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12405 = this;
var new_array__12406 = cljs.core.aclone.call(null,this__12405.array);

new_array__12406.push(o);
return (new cljs.core.Vector(this__12405.meta,new_array__12406));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12506 = null;
var G__12506__12507 = (function (v,f){
var this__12447 = this;
return cljs.core.ci_reduce.call(null,this__12447.array,f);
});
var G__12506__12508 = (function (v,f,start){
var this__12452 = this;
return cljs.core.ci_reduce.call(null,this__12452.array,f,start);
});
G__12506 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12506__12507.call(this,v,f);
case  3 :
return G__12506__12508.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12506;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12453 = this;
if(cljs.core.truth_((this__12453.array.length > 0)))
{var vector_seq__12460 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12453.array.length)))
{return cljs.core.cons.call(null,(this__12453.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12460.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12466 = this;
return this__12466.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12468 = this;
var count__12469 = this__12468.array.length;

if(cljs.core.truth_((count__12469 > 0)))
{return (this__12468.array[(count__12469 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12470 = this;
if(cljs.core.truth_((this__12470.array.length > 0)))
{var new_array__12475 = cljs.core.aclone.call(null,this__12470.array);

new_array__12475.pop();
return (new cljs.core.Vector(this__12470.meta,new_array__12475));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12476 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12477 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12478 = this;
return (new cljs.core.Vector(meta,this__12478.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12479 = this;
return this__12479.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12513 = null;
var G__12513__12514 = (function (coll,n){
var this__12480 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12481 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12481))
{return (n < this__12480.array.length);
} else
{return and__3546__auto____12481;
}
})()))
{return (this__12480.array[n]);
} else
{return null;
}
});
var G__12513__12515 = (function (coll,n,not_found){
var this__12482 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12483 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12483))
{return (n < this__12482.array.length);
} else
{return and__3546__auto____12483;
}
})()))
{return (this__12482.array[n]);
} else
{return not_found;
}
});
G__12513 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12513__12514.call(this,coll,n);
case  3 :
return G__12513__12515.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12513;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12484 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12484.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12528){
var args = cljs.core.seq( arglist__12528 );;
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
var this__12537 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12593 = null;
var G__12593__12594 = (function (coll,k){
var this__12538 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12593__12595 = (function (coll,k,not_found){
var this__12540 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12593 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12593__12594.call(this,coll,k);
case  3 :
return G__12593__12595.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12593;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12542 = this;
var v_pos__12544 = (this__12542.start + key);

return (new cljs.core.Subvec(this__12542.meta,cljs.core._assoc.call(null,this__12542.v,v_pos__12544,val),this__12542.start,((this__12542.end > (v_pos__12544 + 1)) ? this__12542.end : (v_pos__12544 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12608 = null;
var G__12608__12609 = (function (coll,k){
var this__12547 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12608__12610 = (function (coll,k,not_found){
var this__12548 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12608 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12608__12609.call(this,coll,k);
case  3 :
return G__12608__12610.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12608;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12550 = this;
return (new cljs.core.Subvec(this__12550.meta,cljs.core._assoc_n.call(null,this__12550.v,this__12550.end,o),this__12550.start,(this__12550.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12612 = null;
var G__12612__12613 = (function (coll,f){
var this__12552 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12612__12614 = (function (coll,f,start){
var this__12553 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12612 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12612__12613.call(this,coll,f);
case  3 :
return G__12612__12614.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12612;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12555 = this;
var subvec_seq__12558 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12555.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12555.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12558.call(null,this__12555.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12560 = this;
return (this__12560.end - this__12560.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12561 = this;
return cljs.core._nth.call(null,this__12561.v,(this__12561.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12562 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12562.start,this__12562.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12562.meta,this__12562.v,this__12562.start,(this__12562.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12563 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12564 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12565 = this;
return (new cljs.core.Subvec(meta,this__12565.v,this__12565.start,this__12565.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12575 = this;
return this__12575.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12668 = null;
var G__12668__12669 = (function (coll,n){
var this__12577 = this;
return cljs.core._nth.call(null,this__12577.v,(this__12577.start + n));
});
var G__12668__12670 = (function (coll,n,not_found){
var this__12579 = this;
return cljs.core._nth.call(null,this__12579.v,(this__12579.start + n),not_found);
});
G__12668 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12668__12669.call(this,coll,n);
case  3 :
return G__12668__12670.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12668;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12581 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12581.meta);
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
var subvec__12683 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12684 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12683.call(this,v,start);
case  3 :
return subvec__12684.call(this,v,start,end);
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
var this__12696 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12698 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12715 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12717 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12717.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12718 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12722 = this;
return cljs.core._first.call(null,this__12722.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12724 = this;
var temp__3695__auto____12727 = cljs.core.next.call(null,this__12724.front);

if(cljs.core.truth_(temp__3695__auto____12727))
{var f1__12728 = temp__3695__auto____12727;

return (new cljs.core.PersistentQueueSeq(this__12724.meta,f1__12728,this__12724.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12724.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12724.meta,this__12724.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12761 = this;
return this__12761.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12762 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12762.front,this__12762.rear));
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
var this__12778 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12779 = this;
if(cljs.core.truth_(this__12779.front))
{return (new cljs.core.PersistentQueue(this__12779.meta,(this__12779.count + 1),this__12779.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12781 = this__12779.rear;

if(cljs.core.truth_(or__3548__auto____12781))
{return or__3548__auto____12781;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12779.meta,(this__12779.count + 1),cljs.core.conj.call(null,this__12779.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12782 = this;
var rear__12783 = cljs.core.seq.call(null,this__12782.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12784 = this__12782.front;

if(cljs.core.truth_(or__3548__auto____12784))
{return or__3548__auto____12784;
} else
{return rear__12783;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12782.front,cljs.core.seq.call(null,rear__12783)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12786 = this;
return this__12786.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12794 = this;
return cljs.core._first.call(null,this__12794.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12798 = this;
if(cljs.core.truth_(this__12798.front))
{var temp__3695__auto____12803 = cljs.core.next.call(null,this__12798.front);

if(cljs.core.truth_(temp__3695__auto____12803))
{var f1__12805 = temp__3695__auto____12803;

return (new cljs.core.PersistentQueue(this__12798.meta,(this__12798.count - 1),f1__12805,this__12798.rear));
} else
{return (new cljs.core.PersistentQueue(this__12798.meta,(this__12798.count - 1),cljs.core.seq.call(null,this__12798.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12812 = this;
return cljs.core.first.call(null,this__12812.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12814 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12933 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12935 = this;
return (new cljs.core.PersistentQueue(meta,this__12935.count,this__12935.front,this__12935.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12938 = this;
return this__12938.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12939 = this;
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
var this__12955 = this;
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
var len__12982 = array.length;

var i__12983 = 0;

while(true){
if(cljs.core.truth_((i__12983 < len__12982)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12983]))))
{return i__12983;
} else
{{
var G__12987 = (i__12983 + incr);
i__12983 = G__12987;
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
var obj_map_contains_key_QMARK___12998 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12999 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12996 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12996))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12996;
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
return obj_map_contains_key_QMARK___12998.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12999.call(this,k,strobj,true_val,false_val);
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
var this__13034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13075 = null;
var G__13075__13076 = (function (coll,k){
var this__13036 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13075__13077 = (function (coll,k,not_found){
var this__13038 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13038.strobj,(this__13038.strobj[k]),not_found);
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
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13043 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13045 = goog.object.clone.call(null,this__13043.strobj);
var overwrite_QMARK___13047 = new_strobj__13045.hasOwnProperty(k);

(new_strobj__13045[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13047))
{return (new cljs.core.ObjMap(this__13043.meta,this__13043.keys,new_strobj__13045));
} else
{var new_keys__13049 = cljs.core.aclone.call(null,this__13043.keys);

new_keys__13049.push(k);
return (new cljs.core.ObjMap(this__13043.meta,new_keys__13049,new_strobj__13045));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13043.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13051 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13051.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13079 = null;
var G__13079__13080 = (function (coll,k){
var this__13053 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13079__13081 = (function (coll,k,not_found){
var this__13055 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
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
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13059 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13061 = this;
if(cljs.core.truth_((this__13061.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13018_SHARP_){
return cljs.core.vector.call(null,p1__13018_SHARP_,(this__13061.strobj[p1__13018_SHARP_]));
}),this__13061.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13062 = this;
return this__13062.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13063 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13064 = this;
return (new cljs.core.ObjMap(meta,this__13064.keys,this__13064.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13065 = this;
return this__13065.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13066 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13066.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13071 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13072 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13072))
{return this__13071.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13072;
}
})()))
{var new_keys__13073 = cljs.core.aclone.call(null,this__13071.keys);
var new_strobj__13074 = goog.object.clone.call(null,this__13071.strobj);

new_keys__13073.splice(cljs.core.scan_array.call(null,1,k,new_keys__13073),1);
cljs.core.js_delete.call(null,new_strobj__13074,k);
return (new cljs.core.ObjMap(this__13071.meta,new_keys__13073,new_strobj__13074));
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
var this__13111 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13212 = null;
var G__13212__13213 = (function (coll,k){
var this__13114 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13212__13214 = (function (coll,k,not_found){
var this__13115 = this;
var bucket__13117 = (this__13115.hashobj[cljs.core.hash.call(null,k)]);
var i__13119 = (cljs.core.truth_(bucket__13117)?cljs.core.scan_array.call(null,2,k,bucket__13117):null);

if(cljs.core.truth_(i__13119))
{return (bucket__13117[(i__13119 + 1)]);
} else
{return not_found;
}
});
G__13212 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13212__13213.call(this,coll,k);
case  3 :
return G__13212__13214.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13212;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13121 = this;
var h__13122 = cljs.core.hash.call(null,k);
var bucket__13123 = (this__13121.hashobj[h__13122]);

if(cljs.core.truth_(bucket__13123))
{var new_bucket__13124 = cljs.core.aclone.call(null,bucket__13123);
var new_hashobj__13125 = goog.object.clone.call(null,this__13121.hashobj);

(new_hashobj__13125[h__13122] = new_bucket__13124);
var temp__3695__auto____13126 = cljs.core.scan_array.call(null,2,k,new_bucket__13124);

if(cljs.core.truth_(temp__3695__auto____13126))
{var i__13127 = temp__3695__auto____13126;

(new_bucket__13124[(i__13127 + 1)] = v);
return (new cljs.core.HashMap(this__13121.meta,this__13121.count,new_hashobj__13125));
} else
{new_bucket__13124.push(k,v);
return (new cljs.core.HashMap(this__13121.meta,(this__13121.count + 1),new_hashobj__13125));
}
} else
{var new_hashobj__13128 = goog.object.clone.call(null,this__13121.hashobj);

(new_hashobj__13128[h__13122] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13121.meta,(this__13121.count + 1),new_hashobj__13128));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13129 = this;
var bucket__13130 = (this__13129.hashobj[cljs.core.hash.call(null,k)]);
var i__13131 = (cljs.core.truth_(bucket__13130)?cljs.core.scan_array.call(null,2,k,bucket__13130):null);

if(cljs.core.truth_(i__13131))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13257 = null;
var G__13257__13258 = (function (coll,k){
var this__13132 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13257__13259 = (function (coll,k,not_found){
var this__13133 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
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
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13134 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13135 = this;
if(cljs.core.truth_((this__13135.count > 0)))
{var hashes__13139 = cljs.core.js_keys.call(null,this__13135.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13106_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13135.hashobj[p1__13106_SHARP_])));
}),hashes__13139);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13141 = this;
return this__13141.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13142 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13143 = this;
return (new cljs.core.HashMap(meta,this__13143.count,this__13143.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13199 = this;
return this__13199.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13200 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13200.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13202 = this;
var h__13204 = cljs.core.hash.call(null,k);
var bucket__13205 = (this__13202.hashobj[h__13204]);
var i__13206 = (cljs.core.truth_(bucket__13205)?cljs.core.scan_array.call(null,2,k,bucket__13205):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13206)))
{return coll;
} else
{var new_hashobj__13207 = goog.object.clone.call(null,this__13202.hashobj);

if(cljs.core.truth_((3 > bucket__13205.length)))
{cljs.core.js_delete.call(null,new_hashobj__13207,h__13204);
} else
{var new_bucket__13210 = cljs.core.aclone.call(null,bucket__13205);

new_bucket__13210.splice(i__13206,2);
(new_hashobj__13207[h__13204] = new_bucket__13210);
}
return (new cljs.core.HashMap(this__13202.meta,(this__13202.count - 1),new_hashobj__13207));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13284 = ks.length;

var i__13285 = 0;
var out__13286 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13285 < len__13284)))
{{
var G__13287 = (i__13285 + 1);
var G__13288 = cljs.core.assoc.call(null,out__13286,(ks[i__13285]),(vs[i__13285]));
i__13285 = G__13287;
out__13286 = G__13288;
continue;
}
} else
{return out__13286;
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
var in$__13289 = cljs.core.seq.call(null,keyvals);
var out__13290 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13289))
{{
var G__13295 = cljs.core.nnext.call(null,in$__13289);
var G__13296 = cljs.core.assoc.call(null,out__13290,cljs.core.first.call(null,in$__13289),cljs.core.second.call(null,in$__13289));
in$__13289 = G__13295;
out__13290 = G__13296;
continue;
}
} else
{return out__13290;
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
hash_map.cljs$lang$applyTo = (function (arglist__13297){
var keyvals = cljs.core.seq( arglist__13297 );;
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
{return cljs.core.reduce.call(null,(function (p1__13300_SHARP_,p2__13301_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13302 = p1__13300_SHARP_;

if(cljs.core.truth_(or__3548__auto____13302))
{return or__3548__auto____13302;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13301_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13307){
var maps = cljs.core.seq( arglist__13307 );;
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
{var merge_entry__13310 = (function (m,e){
var k__13308 = cljs.core.first.call(null,e);
var v__13309 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13308)))
{return cljs.core.assoc.call(null,m,k__13308,f.call(null,cljs.core.get.call(null,m,k__13308),v__13309));
} else
{return cljs.core.assoc.call(null,m,k__13308,v__13309);
}
});
var merge2__13315 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13310,(function (){var or__3548__auto____13311 = m1;

if(cljs.core.truth_(or__3548__auto____13311))
{return or__3548__auto____13311;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13315,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13399){
var f = cljs.core.first(arglist__13399);
var maps = cljs.core.rest(arglist__13399);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13403 = cljs.core.ObjMap.fromObject([],{});
var keys__13404 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13404))
{var key__13406 = cljs.core.first.call(null,keys__13404);
var entry__13408 = cljs.core.get.call(null,map,key__13406,"﷐'user/not-found");

{
var G__13414 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13408,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13403,key__13406,entry__13408):ret__13403);
var G__13415 = cljs.core.next.call(null,keys__13404);
ret__13403 = G__13414;
keys__13404 = G__13415;
continue;
}
} else
{return ret__13403;
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
var this__13426 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13490 = null;
var G__13490__13491 = (function (coll,v){
var this__13430 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13490__13492 = (function (coll,v,not_found){
var this__13435 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13435.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13490 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13490__13491.call(this,coll,v);
case  3 :
return G__13490__13492.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13490;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13496 = null;
var G__13496__13497 = (function (coll,k){
var this__13440 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13496__13498 = (function (coll,k,not_found){
var this__13441 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13496 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13496__13497.call(this,coll,k);
case  3 :
return G__13496__13498.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13496;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13443 = this;
return (new cljs.core.Set(this__13443.meta,cljs.core.assoc.call(null,this__13443.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13446 = this;
return cljs.core.keys.call(null,this__13446.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13447 = this;
return (new cljs.core.Set(this__13447.meta,cljs.core.dissoc.call(null,this__13447.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13448 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13450 = this;
var and__3546__auto____13451 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13451))
{var and__3546__auto____13454 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13454))
{return cljs.core.every_QMARK_.call(null,(function (p1__13402_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13402_SHARP_);
}),other);
} else
{return and__3546__auto____13454;
}
} else
{return and__3546__auto____13451;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13455 = this;
return (new cljs.core.Set(meta,this__13455.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13456 = this;
return this__13456.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13485 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13485.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13557 = cljs.core.seq.call(null,coll);
var out__13561 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13557))))
{{
var G__13566 = cljs.core.rest.call(null,in$__13557);
var G__13567 = cljs.core.conj.call(null,out__13561,cljs.core.first.call(null,in$__13557));
in$__13557 = G__13566;
out__13561 = G__13567;
continue;
}
} else
{return out__13561;
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
{var n__13570 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13571 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13571))
{var e__13572 = temp__3695__auto____13571;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13572));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13570,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13554_SHARP_){
var temp__3695__auto____13576 = cljs.core.find.call(null,smap,p1__13554_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13576))
{var e__13577 = temp__3695__auto____13576;

return cljs.core.second.call(null,e__13577);
} else
{return p1__13554_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13654 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13643,seen){
while(true){
var vec__13644__13647 = p__13643;
var f__13649 = cljs.core.nth.call(null,vec__13644__13647,0,null);
var xs__13650 = vec__13644__13647;

var temp__3698__auto____13651 = cljs.core.seq.call(null,xs__13650);

if(cljs.core.truth_(temp__3698__auto____13651))
{var s__13652 = temp__3698__auto____13651;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13649)))
{{
var G__13680 = cljs.core.rest.call(null,s__13652);
var G__13681 = seen;
p__13643 = G__13680;
seen = G__13681;
continue;
}
} else
{return cljs.core.cons.call(null,f__13649,step.call(null,cljs.core.rest.call(null,s__13652),cljs.core.conj.call(null,seen,f__13649)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13654.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13688 = cljs.core.Vector.fromArray([]);
var s__13689 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13689)))
{{
var G__13690 = cljs.core.conj.call(null,ret__13688,cljs.core.first.call(null,s__13689));
var G__13691 = cljs.core.next.call(null,s__13689);
ret__13688 = G__13690;
s__13689 = G__13691;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13688);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13700 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13700))
{return or__3548__auto____13700;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13702 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13702 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13702 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13713 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13713))
{return or__3548__auto____13713;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13714 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13714 > -1)))
{return cljs.core.subs.call(null,x,2,i__13714);
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
var map__13727 = cljs.core.ObjMap.fromObject([],{});
var ks__13728 = cljs.core.seq.call(null,keys);
var vs__13730 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13731 = ks__13728;

if(cljs.core.truth_(and__3546__auto____13731))
{return vs__13730;
} else
{return and__3546__auto____13731;
}
})()))
{{
var G__13735 = cljs.core.assoc.call(null,map__13727,cljs.core.first.call(null,ks__13728),cljs.core.first.call(null,vs__13730));
var G__13736 = cljs.core.next.call(null,ks__13728);
var G__13738 = cljs.core.next.call(null,vs__13730);
map__13727 = G__13735;
ks__13728 = G__13736;
vs__13730 = G__13738;
continue;
}
} else
{return map__13727;
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
var max_key__13746 = (function (k,x){
return x;
});
var max_key__13747 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13748 = (function() { 
var G__13750__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13722_SHARP_,p2__13723_SHARP_){
return max_key.call(null,k,p1__13722_SHARP_,p2__13723_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13750 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13750__delegate.call(this, k, x, y, more);
};
G__13750.cljs$lang$maxFixedArity = 3;
G__13750.cljs$lang$applyTo = (function (arglist__13752){
var k = cljs.core.first(arglist__13752);
var x = cljs.core.first(cljs.core.next(arglist__13752));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13752)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13752)));
return G__13750__delegate.call(this, k, x, y, more);
});
return G__13750;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13746.call(this,k,x);
case  3 :
return max_key__13747.call(this,k,x,y);
default:
return max_key__13748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13748.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13758 = (function (k,x){
return x;
});
var min_key__13759 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13760 = (function() { 
var G__13762__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13741_SHARP_,p2__13742_SHARP_){
return min_key.call(null,k,p1__13741_SHARP_,p2__13742_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13762 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13762__delegate.call(this, k, x, y, more);
};
G__13762.cljs$lang$maxFixedArity = 3;
G__13762.cljs$lang$applyTo = (function (arglist__13763){
var k = cljs.core.first(arglist__13763);
var x = cljs.core.first(cljs.core.next(arglist__13763));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13763)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13763)));
return G__13762__delegate.call(this, k, x, y, more);
});
return G__13762;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13758.call(this,k,x);
case  3 :
return min_key__13759.call(this,k,x,y);
default:
return min_key__13760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13760.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13771 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13772 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13766 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13766))
{var s__13767 = temp__3698__auto____13766;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13767),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13767)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13771.call(this,n,step);
case  3 :
return partition_all__13772.call(this,n,step,coll);
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
var temp__3698__auto____13782 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13782))
{var s__13783 = temp__3698__auto____13782;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13783))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13783),take_while.call(null,pred,cljs.core.rest.call(null,s__13783)));
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
var this__13792 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13793 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13815 = null;
var G__13815__13816 = (function (rng,f){
var this__13794 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13815__13817 = (function (rng,f,s){
var this__13795 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13815 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13815__13816.call(this,rng,f);
case  3 :
return G__13815__13817.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13815;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13796 = this;
var comp__13797 = (cljs.core.truth_((this__13796.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13797.call(null,this__13796.start,this__13796.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13798 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13798.end - this__13798.start) / this__13798.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13799 = this;
return this__13799.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13800 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13800.meta,(this__13800.start + this__13800.step),this__13800.end,this__13800.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13801 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13802 = this;
return (new cljs.core.Range(meta,this__13802.start,this__13802.end,this__13802.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13803 = this;
return this__13803.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13829 = null;
var G__13829__13830 = (function (rng,n){
var this__13804 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13804.start + (n * this__13804.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13805 = (this__13804.start > this__13804.end);

if(cljs.core.truth_(and__3546__auto____13805))
{return cljs.core._EQ_.call(null,this__13804.step,0);
} else
{return and__3546__auto____13805;
}
})()))
{return this__13804.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13829__13831 = (function (rng,n,not_found){
var this__13806 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13806.start + (n * this__13806.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13811 = (this__13806.start > this__13806.end);

if(cljs.core.truth_(and__3546__auto____13811))
{return cljs.core._EQ_.call(null,this__13806.step,0);
} else
{return and__3546__auto____13811;
}
})()))
{return this__13806.start;
} else
{return not_found;
}
}
});
G__13829 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13829__13830.call(this,rng,n);
case  3 :
return G__13829__13831.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13829;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13812 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13812.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13853 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13855 = (function (end){
return range.call(null,0,end,1);
});
var range__13857 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13859 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13853.call(this);
case  1 :
return range__13855.call(this,start);
case  2 :
return range__13857.call(this,start,end);
case  3 :
return range__13859.call(this,start,end,step);
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
var temp__3698__auto____13865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13865))
{var s__13866 = temp__3698__auto____13865;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13866),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13866)));
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
var temp__3698__auto____13882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13882))
{var s__13884 = temp__3698__auto____13882;

var fst__13885 = cljs.core.first.call(null,s__13884);
var fv__13886 = f.call(null,fst__13885);
var run__13889 = cljs.core.cons.call(null,fst__13885,cljs.core.take_while.call(null,(function (p1__13868_SHARP_){
return cljs.core._EQ_.call(null,fv__13886,f.call(null,p1__13868_SHARP_));
}),cljs.core.next.call(null,s__13884)));

return cljs.core.cons.call(null,run__13889,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13889),s__13884))));
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
var reductions__13927 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13918))
{var s__13919 = temp__3695__auto____13918;

return reductions.call(null,f,cljs.core.first.call(null,s__13919),cljs.core.rest.call(null,s__13919));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13928 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13921 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13921))
{var s__13925 = temp__3698__auto____13921;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13925)),cljs.core.rest.call(null,s__13925));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13927.call(this,f,init);
case  3 :
return reductions__13928.call(this,f,init,coll);
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
var juxt__13956 = (function (f){
return (function() {
var G__13961 = null;
var G__13961__13962 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13961__13963 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13961__13964 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13961__13965 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13961__13966 = (function() { 
var G__13974__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13974 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13974__delegate.call(this, x, y, z, args);
};
G__13974.cljs$lang$maxFixedArity = 3;
G__13974.cljs$lang$applyTo = (function (arglist__13975){
var x = cljs.core.first(arglist__13975);
var y = cljs.core.first(cljs.core.next(arglist__13975));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13975)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13975)));
return G__13974__delegate.call(this, x, y, z, args);
});
return G__13974;
})()
;
G__13961 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13961__13962.call(this);
case  1 :
return G__13961__13963.call(this,x);
case  2 :
return G__13961__13964.call(this,x,y);
case  3 :
return G__13961__13965.call(this,x,y,z);
default:
return G__13961__13966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13961.cljs$lang$maxFixedArity = 3;
G__13961.cljs$lang$applyTo = G__13961__13966.cljs$lang$applyTo;
return G__13961;
})()
});
var juxt__13957 = (function (f,g){
return (function() {
var G__13976 = null;
var G__13976__13977 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13976__13979 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13976__13980 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13976__13981 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13976__13982 = (function() { 
var G__13993__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13993 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13993__delegate.call(this, x, y, z, args);
};
G__13993.cljs$lang$maxFixedArity = 3;
G__13993.cljs$lang$applyTo = (function (arglist__13998){
var x = cljs.core.first(arglist__13998);
var y = cljs.core.first(cljs.core.next(arglist__13998));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13998)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13998)));
return G__13993__delegate.call(this, x, y, z, args);
});
return G__13993;
})()
;
G__13976 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13976__13977.call(this);
case  1 :
return G__13976__13979.call(this,x);
case  2 :
return G__13976__13980.call(this,x,y);
case  3 :
return G__13976__13981.call(this,x,y,z);
default:
return G__13976__13982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13976.cljs$lang$maxFixedArity = 3;
G__13976.cljs$lang$applyTo = G__13976__13982.cljs$lang$applyTo;
return G__13976;
})()
});
var juxt__13958 = (function (f,g,h){
return (function() {
var G__14001 = null;
var G__14001__14002 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14001__14003 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14001__14004 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14001__14005 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14001__14006 = (function() { 
var G__14022__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14022__delegate.call(this, x, y, z, args);
};
G__14022.cljs$lang$maxFixedArity = 3;
G__14022.cljs$lang$applyTo = (function (arglist__14024){
var x = cljs.core.first(arglist__14024);
var y = cljs.core.first(cljs.core.next(arglist__14024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14024)));
return G__14022__delegate.call(this, x, y, z, args);
});
return G__14022;
})()
;
G__14001 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14001__14002.call(this);
case  1 :
return G__14001__14003.call(this,x);
case  2 :
return G__14001__14004.call(this,x,y);
case  3 :
return G__14001__14005.call(this,x,y,z);
default:
return G__14001__14006.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14001.cljs$lang$maxFixedArity = 3;
G__14001.cljs$lang$applyTo = G__14001__14006.cljs$lang$applyTo;
return G__14001;
})()
});
var juxt__13959 = (function() { 
var G__14027__delegate = function (f,g,h,fs){
var fs__13945 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14028 = null;
var G__14028__14031 = (function (){
return cljs.core.reduce.call(null,(function (p1__13902_SHARP_,p2__13903_SHARP_){
return cljs.core.conj.call(null,p1__13902_SHARP_,p2__13903_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13945);
});
var G__14028__14032 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13904_SHARP_,p2__13905_SHARP_){
return cljs.core.conj.call(null,p1__13904_SHARP_,p2__13905_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13945);
});
var G__14028__14033 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13907_SHARP_,p2__13908_SHARP_){
return cljs.core.conj.call(null,p1__13907_SHARP_,p2__13908_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13945);
});
var G__14028__14034 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13909_SHARP_,p2__13910_SHARP_){
return cljs.core.conj.call(null,p1__13909_SHARP_,p2__13910_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13945);
});
var G__14028__14035 = (function() { 
var G__14042__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13911_SHARP_,p2__13913_SHARP_){
return cljs.core.conj.call(null,p1__13911_SHARP_,cljs.core.apply.call(null,p2__13913_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13945);
};
var G__14042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14042__delegate.call(this, x, y, z, args);
};
G__14042.cljs$lang$maxFixedArity = 3;
G__14042.cljs$lang$applyTo = (function (arglist__14043){
var x = cljs.core.first(arglist__14043);
var y = cljs.core.first(cljs.core.next(arglist__14043));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14043)));
return G__14042__delegate.call(this, x, y, z, args);
});
return G__14042;
})()
;
G__14028 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14028__14031.call(this);
case  1 :
return G__14028__14032.call(this,x);
case  2 :
return G__14028__14033.call(this,x,y);
case  3 :
return G__14028__14034.call(this,x,y,z);
default:
return G__14028__14035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14028.cljs$lang$maxFixedArity = 3;
G__14028.cljs$lang$applyTo = G__14028__14035.cljs$lang$applyTo;
return G__14028;
})()
};
var G__14027 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14027__delegate.call(this, f, g, h, fs);
};
G__14027.cljs$lang$maxFixedArity = 3;
G__14027.cljs$lang$applyTo = (function (arglist__14049){
var f = cljs.core.first(arglist__14049);
var g = cljs.core.first(cljs.core.next(arglist__14049));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14049)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14049)));
return G__14027__delegate.call(this, f, g, h, fs);
});
return G__14027;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13956.call(this,f);
case  2 :
return juxt__13957.call(this,f,g);
case  3 :
return juxt__13958.call(this,f,g,h);
default:
return juxt__13959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13959.cljs$lang$applyTo;
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
var dorun__14088 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14091 = cljs.core.next.call(null,coll);
coll = G__14091;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14089 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14076))
{return (n > 0);
} else
{return and__3546__auto____14076;
}
})()))
{{
var G__14092 = (n - 1);
var G__14093 = cljs.core.next.call(null,coll);
n = G__14092;
coll = G__14093;
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
return dorun__14088.call(this,n);
case  2 :
return dorun__14089.call(this,n,coll);
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
var doall__14108 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14109 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14108.call(this,n);
case  2 :
return doall__14109.call(this,n,coll);
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
var matches__14136 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14136),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14136),1)))
{return cljs.core.first.call(null,matches__14136);
} else
{return cljs.core.vec.call(null,matches__14136);
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
var matches__14193 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14193)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14193),1)))
{return cljs.core.first.call(null,matches__14193);
} else
{return cljs.core.vec.call(null,matches__14193);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14206 = cljs.core.re_find.call(null,re,s);
var match_idx__14209 = s.search(re);
var match_str__14214 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14206))?cljs.core.first.call(null,match_data__14206):match_data__14206);
var post_match__14222 = cljs.core.subs.call(null,s,(match_idx__14209 + cljs.core.count.call(null,match_str__14214)));

if(cljs.core.truth_(match_data__14206))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14206,re_seq.call(null,re,post_match__14222));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14230_SHARP_){
return print_one.call(null,p1__14230_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14261 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14261))
{var and__3546__auto____14273 = (function (){var x__445__auto____14266 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14270 = x__445__auto____14266;

if(cljs.core.truth_(and__3546__auto____14270))
{var and__3546__auto____14271 = x__445__auto____14266.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14271))
{return cljs.core.not.call(null,x__445__auto____14266.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14271;
}
} else
{return and__3546__auto____14270;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14266);
}
})();

if(cljs.core.truth_(and__3546__auto____14273))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14273;
}
} else
{return and__3546__auto____14261;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14277 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14279 = x__445__auto____14277;

if(cljs.core.truth_(and__3546__auto____14279))
{var and__3546__auto____14280 = x__445__auto____14277.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14280))
{return cljs.core.not.call(null,x__445__auto____14277.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14280;
}
} else
{return and__3546__auto____14279;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14277);
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
var first_obj__14301 = cljs.core.first.call(null,objs);
var sb__14304 = (new goog.string.StringBuffer());

var G__14305__14306 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14305__14306))
{var obj__14308 = cljs.core.first.call(null,G__14305__14306);
var G__14305__14309 = G__14305__14306;

while(true){
if(cljs.core.truth_((obj__14308 === first_obj__14301)))
{} else
{sb__14304.append(" ");
}
var G__14310__14311 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14308,opts));

if(cljs.core.truth_(G__14310__14311))
{var string__14313 = cljs.core.first.call(null,G__14310__14311);
var G__14310__14314 = G__14310__14311;

while(true){
sb__14304.append(string__14313);
var temp__3698__auto____14316 = cljs.core.next.call(null,G__14310__14314);

if(cljs.core.truth_(temp__3698__auto____14316))
{var G__14310__14317 = temp__3698__auto____14316;

{
var G__14372 = cljs.core.first.call(null,G__14310__14317);
var G__14373 = G__14310__14317;
string__14313 = G__14372;
G__14310__14314 = G__14373;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14348 = cljs.core.next.call(null,G__14305__14309);

if(cljs.core.truth_(temp__3698__auto____14348))
{var G__14305__14350 = temp__3698__auto____14348;

{
var G__14377 = cljs.core.first.call(null,G__14305__14350);
var G__14379 = G__14305__14350;
obj__14308 = G__14377;
G__14305__14309 = G__14379;
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
var first_obj__14386 = cljs.core.first.call(null,objs);

var G__14387__14388 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14387__14388))
{var obj__14389 = cljs.core.first.call(null,G__14387__14388);
var G__14387__14390 = G__14387__14388;

while(true){
if(cljs.core.truth_((obj__14389 === first_obj__14386)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14391__14392 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14389,opts));

if(cljs.core.truth_(G__14391__14392))
{var string__14393 = cljs.core.first.call(null,G__14391__14392);
var G__14391__14394 = G__14391__14392;

while(true){
cljs.core.string_print.call(null,string__14393);
var temp__3698__auto____14398 = cljs.core.next.call(null,G__14391__14394);

if(cljs.core.truth_(temp__3698__auto____14398))
{var G__14391__14399 = temp__3698__auto____14398;

{
var G__14409 = cljs.core.first.call(null,G__14391__14399);
var G__14410 = G__14391__14399;
string__14393 = G__14409;
G__14391__14394 = G__14410;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14402 = cljs.core.next.call(null,G__14387__14390);

if(cljs.core.truth_(temp__3698__auto____14402))
{var G__14387__14403 = temp__3698__auto____14402;

{
var G__14411 = cljs.core.first.call(null,G__14387__14403);
var G__14412 = G__14387__14403;
obj__14389 = G__14411;
G__14387__14390 = G__14412;
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
pr_str.cljs$lang$applyTo = (function (arglist__14418){
var objs = cljs.core.seq( arglist__14418 );;
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
pr.cljs$lang$applyTo = (function (arglist__14423){
var objs = cljs.core.seq( arglist__14423 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14429){
var objs = cljs.core.seq( arglist__14429 );;
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
println.cljs$lang$applyTo = (function (arglist__14434){
var objs = cljs.core.seq( arglist__14434 );;
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
prn.cljs$lang$applyTo = (function (arglist__14459){
var objs = cljs.core.seq( arglist__14459 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14484 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14484,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14506 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14506))
{var nspc__14507 = temp__3698__auto____14506;

return cljs.core.str.call(null,nspc__14507,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14512 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14512))
{var nspc__14513 = temp__3698__auto____14512;

return cljs.core.str.call(null,nspc__14513,"/");
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
var pr_pair__14552 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14552,"{",", ","}",opts,coll);
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
var this__14620 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14621 = this;
var G__14622__14624 = cljs.core.seq.call(null,this__14621.watches);

if(cljs.core.truth_(G__14622__14624))
{var G__14627__14629 = cljs.core.first.call(null,G__14622__14624);
var vec__14628__14630 = G__14627__14629;
var key__14632 = cljs.core.nth.call(null,vec__14628__14630,0,null);
var f__14635 = cljs.core.nth.call(null,vec__14628__14630,1,null);
var G__14622__14636 = G__14622__14624;

var G__14627__14637 = G__14627__14629;
var G__14622__14638 = G__14622__14636;

while(true){
var vec__14639__14640 = G__14627__14637;
var key__14641 = cljs.core.nth.call(null,vec__14639__14640,0,null);
var f__14642 = cljs.core.nth.call(null,vec__14639__14640,1,null);
var G__14622__14643 = G__14622__14638;

f__14642.call(null,key__14641,this$,oldval,newval);
var temp__3698__auto____14644 = cljs.core.next.call(null,G__14622__14643);

if(cljs.core.truth_(temp__3698__auto____14644))
{var G__14622__14645 = temp__3698__auto____14644;

{
var G__14654 = cljs.core.first.call(null,G__14622__14645);
var G__14655 = G__14622__14645;
G__14627__14637 = G__14654;
G__14622__14638 = G__14655;
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
var this__14646 = this;
return this$.watches = cljs.core.assoc.call(null,this__14646.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14647 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14647.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14648 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14648.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14649 = this;
return this__14649.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14650 = this;
return this__14650.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14652 = this;
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
var G__14665__delegate = function (x,p__14656){
var map__14657__14658 = p__14656;
var map__14657__14659 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14657__14658))?cljs.core.apply.call(null,cljs.core.hash_map,map__14657__14658):map__14657__14658);
var validator__14660 = cljs.core.get.call(null,map__14657__14659,"﷐'validator");
var meta__14661 = cljs.core.get.call(null,map__14657__14659,"﷐'meta");

return (new cljs.core.Atom(x,meta__14661,validator__14660,null));
};
var G__14665 = function (x,var_args){
var p__14656 = null;
if (goog.isDef(var_args)) {
  p__14656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14665__delegate.call(this, x, p__14656);
};
G__14665.cljs$lang$maxFixedArity = 1;
G__14665.cljs$lang$applyTo = (function (arglist__14668){
var x = cljs.core.first(arglist__14668);
var p__14656 = cljs.core.rest(arglist__14668);
return G__14665__delegate.call(this, x, p__14656);
});
return G__14665;
})()
;
atom = function(x,var_args){
var p__14656 = var_args;
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
var temp__3698__auto____14731 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14731))
{var validate__14732 = temp__3698__auto____14731;

if(cljs.core.truth_(validate__14732.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14734 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14734,new_value);
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
var swap_BANG___14785 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14786 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14787 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14788 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14789 = (function() { 
var G__14791__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14791 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14791__delegate.call(this, a, f, x, y, z, more);
};
G__14791.cljs$lang$maxFixedArity = 5;
G__14791.cljs$lang$applyTo = (function (arglist__14792){
var a = cljs.core.first(arglist__14792);
var f = cljs.core.first(cljs.core.next(arglist__14792));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14792)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14792))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14792)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14792)))));
return G__14791__delegate.call(this, a, f, x, y, z, more);
});
return G__14791;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14785.call(this,a,f);
case  3 :
return swap_BANG___14786.call(this,a,f,x);
case  4 :
return swap_BANG___14787.call(this,a,f,x,y);
case  5 :
return swap_BANG___14788.call(this,a,f,x,y,z);
default:
return swap_BANG___14789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14789.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14837){
var iref = cljs.core.first(arglist__14837);
var f = cljs.core.first(cljs.core.next(arglist__14837));
var args = cljs.core.rest(cljs.core.next(arglist__14837));
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
var gensym__14847 = (function (){
return gensym.call(null,"G__");
});
var gensym__14848 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14847.call(this);
case  1 :
return gensym__14848.call(this,prefix_string);
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
var this__14854 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14854.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14855 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14855.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14855.state,this__14855.f);
}
return cljs.core.deref.call(null,this__14855.state);
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
delay.cljs$lang$applyTo = (function (arglist__14867){
var body = cljs.core.seq( arglist__14867 );;
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
var map__14872__14873 = options;
var map__14872__14874 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14872__14873))?cljs.core.apply.call(null,cljs.core.hash_map,map__14872__14873):map__14872__14873);
var keywordize_keys__14875 = cljs.core.get.call(null,map__14872__14874,"﷐'keywordize-keys");
var keyfn__14876 = (cljs.core.truth_(keywordize_keys__14875)?cljs.core.keyword:cljs.core.str);
var f__14891 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14888 = (function iter__14877(s__14878){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14878__14881 = s__14878;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14878__14881)))
{var k__14885 = cljs.core.first.call(null,s__14878__14881);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14876.call(null,k__14885),thisfn.call(null,(x[k__14885]))]),iter__14877.call(null,cljs.core.rest.call(null,s__14878__14881)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14888.call(null,cljs.core.js_keys.call(null,x));
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

return f__14891.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14901){
var x = cljs.core.first(arglist__14901);
var options = cljs.core.rest(arglist__14901);
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
var mem__14904 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14916__delegate = function (args){
var temp__3695__auto____14905 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14904),args);

if(cljs.core.truth_(temp__3695__auto____14905))
{var v__14907 = temp__3695__auto____14905;

return v__14907;
} else
{var ret__14908 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14904,cljs.core.assoc,args,ret__14908);
return ret__14908;
}
};
var G__14916 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14916__delegate.call(this, args);
};
G__14916.cljs$lang$maxFixedArity = 0;
G__14916.cljs$lang$applyTo = (function (arglist__14919){
var args = cljs.core.seq( arglist__14919 );;
return G__14916__delegate.call(this, args);
});
return G__14916;
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
var trampoline__14921 = (function (f){
while(true){
var ret__14920 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14920)))
{{
var G__14924 = ret__14920;
f = G__14924;
continue;
}
} else
{return ret__14920;
}
break;
}
});
var trampoline__14922 = (function() { 
var G__14925__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14925 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14925__delegate.call(this, f, args);
};
G__14925.cljs$lang$maxFixedArity = 1;
G__14925.cljs$lang$applyTo = (function (arglist__14927){
var f = cljs.core.first(arglist__14927);
var args = cljs.core.rest(arglist__14927);
return G__14925__delegate.call(this, f, args);
});
return G__14925;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14921.call(this,f);
default:
return trampoline__14922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14922.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14931 = (function (){
return rand.call(null,1);
});
var rand__14933 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14931.call(this);
case  1 :
return rand__14933.call(this,n);
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
var k__14946 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14946,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14946,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14983 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14984 = (function (h,child,parent){
var or__3548__auto____14967 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14967))
{return or__3548__auto____14967;
} else
{var or__3548__auto____14968 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14968))
{return or__3548__auto____14968;
} else
{var and__3546__auto____14969 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14969))
{var and__3546__auto____14970 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14970))
{var and__3546__auto____14971 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14971))
{var ret__14973 = true;
var i__14974 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14976 = cljs.core.not.call(null,ret__14973);

if(cljs.core.truth_(or__3548__auto____14976))
{return or__3548__auto____14976;
} else
{return cljs.core._EQ_.call(null,i__14974,cljs.core.count.call(null,parent));
}
})()))
{return ret__14973;
} else
{{
var G__14992 = isa_QMARK_.call(null,h,child.call(null,i__14974),parent.call(null,i__14974));
var G__14993 = (i__14974 + 1);
ret__14973 = G__14992;
i__14974 = G__14993;
continue;
}
}
break;
}
} else
{return and__3546__auto____14971;
}
} else
{return and__3546__auto____14970;
}
} else
{return and__3546__auto____14969;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14983.call(this,h,child);
case  3 :
return isa_QMARK___14984.call(this,h,child,parent);
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
var parents__15002 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15003 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15002.call(this,h);
case  2 :
return parents__15003.call(this,h,tag);
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
var ancestors__15012 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15013 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15012.call(this,h);
case  2 :
return ancestors__15013.call(this,h,tag);
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
var descendants__15025 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15026 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15025.call(this,h);
case  2 :
return descendants__15026.call(this,h,tag);
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
var derive__15105 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15106 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15041 = "﷐'parents".call(null,h);
var td__15097 = "﷐'descendants".call(null,h);
var ta__15098 = "﷐'ancestors".call(null,h);
var tf__15102 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15104 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15041.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15098.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15098.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15041,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15102.call(null,"﷐'ancestors".call(null,h),tag,td__15097,parent,ta__15098),"﷐'descendants":tf__15102.call(null,"﷐'descendants".call(null,h),parent,ta__15098,tag,td__15097)});
})());

if(cljs.core.truth_(or__3548__auto____15104))
{return or__3548__auto____15104;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15105.call(this,h,tag);
case  3 :
return derive__15106.call(this,h,tag,parent);
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
var underive__15186 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15187 = (function (h,tag,parent){
var parentMap__15176 = "﷐'parents".call(null,h);
var childsParents__15177 = (cljs.core.truth_(parentMap__15176.call(null,tag))?cljs.core.disj.call(null,parentMap__15176.call(null,tag),parent):cljs.core.set([]));
var newParents__15178 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15177))?cljs.core.assoc.call(null,parentMap__15176,tag,childsParents__15177):cljs.core.dissoc.call(null,parentMap__15176,tag));
var deriv_seq__15181 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15034_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15034_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15034_SHARP_),cljs.core.second.call(null,p1__15034_SHARP_)));
}),cljs.core.seq.call(null,newParents__15178)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15176.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15036_SHARP_,p2__15037_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15036_SHARP_,p2__15037_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15181));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15186.call(this,h,tag);
case  3 :
return underive__15187.call(this,h,tag,parent);
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

var or__3548__auto____15208 = (cljs.core.truth_((function (){var and__3546__auto____15206 = xprefs__15204;

if(cljs.core.truth_(and__3546__auto____15206))
{return xprefs__15204.call(null,y);
} else
{return and__3546__auto____15206;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15208))
{return or__3548__auto____15208;
} else
{var or__3548__auto____15213 = (function (){var ps__15209 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15209) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15209),prefer_table)))
{} else
{}
{
var G__15289 = cljs.core.rest.call(null,ps__15209);
ps__15209 = G__15289;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15213))
{return or__3548__auto____15213;
} else
{var or__3548__auto____15285 = (function (){var ps__15215 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15215) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15215),y,prefer_table)))
{} else
{}
{
var G__15292 = cljs.core.rest.call(null,ps__15215);
ps__15215 = G__15292;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15285))
{return or__3548__auto____15285;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15293 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15293))
{return or__3548__auto____15293;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15305 = cljs.core.reduce.call(null,(function (be,p__15296){
var vec__15297__15298 = p__15296;
var k__15299 = cljs.core.nth.call(null,vec__15297__15298,0,null);
var ___15300 = cljs.core.nth.call(null,vec__15297__15298,1,null);
var e__15301 = vec__15297__15298;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15299)))
{var be2__15303 = (cljs.core.truth_((function (){var or__3548__auto____15302 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
} else
{return cljs.core.dominates.call(null,k__15299,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15301:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15303),k__15299,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15299," and ",cljs.core.first.call(null,be2__15303),", and neither is preferred")));
}
return be2__15303;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15305))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15305));
return cljs.core.second.call(null,best_entry__15305);
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
if(cljs.core.truth_((function (){var and__3546__auto____15317 = mf;

if(cljs.core.truth_(and__3546__auto____15317))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15317;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15319 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15319))
{return or__3548__auto____15319;
} else
{var or__3548__auto____15320 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15327 = mf;

if(cljs.core.truth_(and__3546__auto____15327))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15327;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15329 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15329))
{return or__3548__auto____15329;
} else
{var or__3548__auto____15331 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15331))
{return or__3548__auto____15331;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15333 = mf;

if(cljs.core.truth_(and__3546__auto____15333))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15333;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15334 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15334))
{return or__3548__auto____15334;
} else
{var or__3548__auto____15335 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15335))
{return or__3548__auto____15335;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15336 = mf;

if(cljs.core.truth_(and__3546__auto____15336))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15336;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15337 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15337))
{return or__3548__auto____15337;
} else
{var or__3548__auto____15338 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15338))
{return or__3548__auto____15338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15339 = mf;

if(cljs.core.truth_(and__3546__auto____15339))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15339;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15340 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15340))
{return or__3548__auto____15340;
} else
{var or__3548__auto____15342 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15342))
{return or__3548__auto____15342;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15344 = mf;

if(cljs.core.truth_(and__3546__auto____15344))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15344;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15346 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15346))
{return or__3548__auto____15346;
} else
{var or__3548__auto____15348 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15350 = mf;

if(cljs.core.truth_(and__3546__auto____15350))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15350;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15352 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15352))
{return or__3548__auto____15352;
} else
{var or__3548__auto____15353 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15356 = mf;

if(cljs.core.truth_(and__3546__auto____15356))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15356;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15358 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15358))
{return or__3548__auto____15358;
} else
{var or__3548__auto____15359 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15396 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15398 = cljs.core._get_method.call(null,mf,dispatch_val__15396);

if(cljs.core.truth_(target_fn__15398))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15396)));
}
return cljs.core.apply.call(null,target_fn__15398,args);
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
var this__15407 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15410 = this;
cljs.core.swap_BANG_.call(null,this__15410.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15410.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15410.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15410.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15441 = this;
cljs.core.swap_BANG_.call(null,this__15441.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15441.method_cache,this__15441.method_table,this__15441.cached_hierarchy,this__15441.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15444 = this;
cljs.core.swap_BANG_.call(null,this__15444.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15444.method_cache,this__15444.method_table,this__15444.cached_hierarchy,this__15444.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15447 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15447.cached_hierarchy),cljs.core.deref.call(null,this__15447.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15447.method_cache,this__15447.method_table,this__15447.cached_hierarchy,this__15447.hierarchy);
}
var temp__3695__auto____15453 = cljs.core.deref.call(null,this__15447.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15453))
{var target_fn__15455 = temp__3695__auto____15453;

return target_fn__15455;
} else
{var temp__3695__auto____15458 = cljs.core.find_and_cache_best_method.call(null,this__15447.name,dispatch_val,this__15447.hierarchy,this__15447.method_table,this__15447.prefer_table,this__15447.method_cache,this__15447.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15458))
{var target_fn__15461 = temp__3695__auto____15458;

return target_fn__15461;
} else
{return cljs.core.deref.call(null,this__15447.method_table).call(null,this__15447.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15464 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15464.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15464.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15464.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15464.method_cache,this__15464.method_table,this__15464.cached_hierarchy,this__15464.hierarchy);
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
var G__15480__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15480 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15480__delegate.call(this, _, args);
};
G__15480.cljs$lang$maxFixedArity = 1;
G__15480.cljs$lang$applyTo = (function (arglist__15481){
var _ = cljs.core.first(arglist__15481);
var args = cljs.core.rest(arglist__15481);
return G__15480__delegate.call(this, _, args);
});
return G__15480;
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
