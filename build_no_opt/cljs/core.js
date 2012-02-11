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
var or__3548__auto____7217 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7217))
{return or__3548__auto____7217;
} else
{var or__3548__auto____7218 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7218))
{return or__3548__auto____7218;
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
var _invoke__7628 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7223 = this$;

if(cljs.core.truth_(and__3546__auto____7223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7225 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
} else
{var or__3548__auto____7226 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7226))
{return or__3548__auto____7226;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7629 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7229 = this$;

if(cljs.core.truth_(and__3546__auto____7229))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7229;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7233 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7233))
{return or__3548__auto____7233;
} else
{var or__3548__auto____7235 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7235))
{return or__3548__auto____7235;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7630 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7240 = this$;

if(cljs.core.truth_(and__3546__auto____7240))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7240;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7245))
{return or__3548__auto____7245;
} else
{var or__3548__auto____7247 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7247))
{return or__3548__auto____7247;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7631 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7312 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
} else
{var or__3548__auto____7313 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7632 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = this$;

if(cljs.core.truth_(and__3546__auto____7319))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7319;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7336 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{var or__3548__auto____7339 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7352 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7352))
{return or__3548__auto____7352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7356 = this$;

if(cljs.core.truth_(and__3546__auto____7356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7370 = this$;

if(cljs.core.truth_(and__3546__auto____7370))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7370;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{var or__3548__auto____7387 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7441 = this$;

if(cljs.core.truth_(and__3546__auto____7441))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7441;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7453 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7484 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7484))
{return or__3548__auto____7484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7488 = this$;

if(cljs.core.truth_(and__3546__auto____7488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7506 = this$;

if(cljs.core.truth_(and__3546__auto____7506))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7506;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7592 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{var or__3548__auto____7597 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7616 = this$;

if(cljs.core.truth_(and__3546__auto____7616))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7616;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7617 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7617))
{return or__3548__auto____7617;
} else
{var or__3548__auto____7618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7619 = this$;

if(cljs.core.truth_(and__3546__auto____7619))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7619;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7620 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
} else
{var or__3548__auto____7621 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7621))
{return or__3548__auto____7621;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7622 = this$;

if(cljs.core.truth_(and__3546__auto____7622))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7622;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7623 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7623))
{return or__3548__auto____7623;
} else
{var or__3548__auto____7624 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7625 = this$;

if(cljs.core.truth_(and__3546__auto____7625))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7625;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7626 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7626))
{return or__3548__auto____7626;
} else
{var or__3548__auto____7627 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7627))
{return or__3548__auto____7627;
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
return _invoke__7628.call(this,this$);
case  2 :
return _invoke__7629.call(this,this$,a);
case  3 :
return _invoke__7630.call(this,this$,a,b);
case  4 :
return _invoke__7631.call(this,this$,a,b,c);
case  5 :
return _invoke__7632.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7633.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7650 = coll;

if(cljs.core.truth_(and__3546__auto____7650))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7650;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7651 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7651))
{return or__3548__auto____7651;
} else
{var or__3548__auto____7652 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7658 = coll;

if(cljs.core.truth_(and__3546__auto____7658))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7658;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7660 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7660))
{return or__3548__auto____7660;
} else
{var or__3548__auto____7661 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7667 = coll;

if(cljs.core.truth_(and__3546__auto____7667))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7667;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7669 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{var or__3548__auto____7670 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
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
var _nth__7686 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7676 = coll;

if(cljs.core.truth_(and__3546__auto____7676))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7676;
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
var _nth__7687 = (function (coll,n,not_found){
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
{var or__3548__auto____7683 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7683))
{return or__3548__auto____7683;
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
return _nth__7686.call(this,coll,n);
case  3 :
return _nth__7687.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7795 = coll;

if(cljs.core.truth_(and__3546__auto____7795))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7795;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7799 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7803 = coll;

if(cljs.core.truth_(and__3546__auto____7803))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7803;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
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
var _lookup__7832 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = o;

if(cljs.core.truth_(and__3546__auto____7818))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7818;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7820 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{var or__3548__auto____7821 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7833 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7824 = o;

if(cljs.core.truth_(and__3546__auto____7824))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7824;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7826 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{var or__3548__auto____7828 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
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
return _lookup__7832.call(this,o,k);
case  3 :
return _lookup__7833.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7866 = coll;

if(cljs.core.truth_(and__3546__auto____7866))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7866;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7870 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7870))
{return or__3548__auto____7870;
} else
{var or__3548__auto____7873 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7873))
{return or__3548__auto____7873;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7881 = coll;

if(cljs.core.truth_(and__3546__auto____7881))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7881;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
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
if(cljs.core.truth_((function (){var and__3546__auto____7893 = coll;

if(cljs.core.truth_(and__3546__auto____7893))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7893;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7895 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{var or__3548__auto____7897 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7905 = coll;

if(cljs.core.truth_(and__3546__auto____7905))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7905;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7906 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7906))
{return or__3548__auto____7906;
} else
{var or__3548__auto____7908 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7919 = coll;

if(cljs.core.truth_(and__3546__auto____7919))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7919;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7925 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7926 = coll;

if(cljs.core.truth_(and__3546__auto____7926))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7926;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7927 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{var or__3548__auto____7929 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7939 = coll;

if(cljs.core.truth_(and__3546__auto____7939))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7939;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7942 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{var or__3548__auto____7946 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7952 = o;

if(cljs.core.truth_(and__3546__auto____7952))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7952;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7959 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7966 = o;

if(cljs.core.truth_(and__3546__auto____7966))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7966;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7969 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = o;

if(cljs.core.truth_(and__3546__auto____7982))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7982;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7985 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{var or__3548__auto____7986 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7994 = o;

if(cljs.core.truth_(and__3546__auto____7994))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7994;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
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
var _reduce__8024 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = coll;

if(cljs.core.truth_(and__3546__auto____8008))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8008;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8012 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{var or__3548__auto____8013 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8025 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = coll;

if(cljs.core.truth_(and__3546__auto____8016))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8016;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8022 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
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
return _reduce__8024.call(this,coll,f);
case  3 :
return _reduce__8025.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8101 = o;

if(cljs.core.truth_(and__3546__auto____8101))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8101;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8105 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = o;

if(cljs.core.truth_(and__3546__auto____8108))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8108;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = o;

if(cljs.core.truth_(and__3546__auto____8113))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8113;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8117 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
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
if(cljs.core.truth_((function (){var and__3546__auto____8120 = o;

if(cljs.core.truth_(and__3546__auto____8120))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8120;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8122 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
} else
{var or__3548__auto____8123 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8124 = d;

if(cljs.core.truth_(and__3546__auto____8124))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8124;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8126 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8127 = this$;

if(cljs.core.truth_(and__3546__auto____8127))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8127;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8129 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{var or__3548__auto____8130 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8133 = this$;

if(cljs.core.truth_(and__3546__auto____8133))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8133;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8134 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8135 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = this$;

if(cljs.core.truth_(and__3546__auto____8136))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8136;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8138 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{var or__3548__auto____8141 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
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
var G__8211 = null;
var G__8211__8213 = (function (o,k){
return null;
});
var G__8211__8215 = (function (o,k,not_found){
return not_found;
});
G__8211 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8211__8213.call(this,o,k);
case  3 :
return G__8211__8215.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8211;
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
var G__8223 = null;
var G__8223__8224 = (function (_,f){
return f.call(null);
});
var G__8223__8225 = (function (_,f,start){
return start;
});
G__8223 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8223__8224.call(this,_,f);
case  3 :
return G__8223__8225.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8223;
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
var G__8229 = null;
var G__8229__8230 = (function (_,n){
return null;
});
var G__8229__8231 = (function (_,n,not_found){
return not_found;
});
G__8229 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8229__8230.call(this,_,n);
case  3 :
return G__8229__8231.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8229;
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
var ci_reduce__8280 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8269 = cljs.core._nth.call(null,cicoll,0);
var n__8270 = 1;

while(true){
if(cljs.core.truth_((n__8270 < cljs.core._count.call(null,cicoll))))
{{
var G__8289 = f.call(null,val__8269,cljs.core._nth.call(null,cicoll,n__8270));
var G__8291 = (n__8270 + 1);
val__8269 = G__8289;
n__8270 = G__8291;
continue;
}
} else
{return val__8269;
}
break;
}
}
});
var ci_reduce__8281 = (function (cicoll,f,val){
var val__8271 = val;
var n__8272 = 0;

while(true){
if(cljs.core.truth_((n__8272 < cljs.core._count.call(null,cicoll))))
{{
var G__8297 = f.call(null,val__8271,cljs.core._nth.call(null,cicoll,n__8272));
var G__8298 = (n__8272 + 1);
val__8271 = G__8297;
n__8272 = G__8298;
continue;
}
} else
{return val__8271;
}
break;
}
});
var ci_reduce__8282 = (function (cicoll,f,val,idx){
var val__8273 = val;
var n__8274 = idx;

while(true){
if(cljs.core.truth_((n__8274 < cljs.core._count.call(null,cicoll))))
{{
var G__8303 = f.call(null,val__8273,cljs.core._nth.call(null,cicoll,n__8274));
var G__8304 = (n__8274 + 1);
val__8273 = G__8303;
n__8274 = G__8304;
continue;
}
} else
{return val__8273;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8280.call(this,cicoll,f);
case  3 :
return ci_reduce__8281.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8282.call(this,cicoll,f,val,idx);
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
var this__8317 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8346 = null;
var G__8346__8347 = (function (_,f){
var this__8323 = this;
return cljs.core.ci_reduce.call(null,this__8323.a,f,(this__8323.a[this__8323.i]),(this__8323.i + 1));
});
var G__8346__8348 = (function (_,f,start){
var this__8327 = this;
return cljs.core.ci_reduce.call(null,this__8327.a,f,start,this__8327.i);
});
G__8346 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8346__8347.call(this,_,f);
case  3 :
return G__8346__8348.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8346;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8328 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8329 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8350 = null;
var G__8350__8351 = (function (coll,n){
var this__8335 = this;
var i__8339 = (n + this__8335.i);

if(cljs.core.truth_((i__8339 < this__8335.a.length)))
{return (this__8335.a[i__8339]);
} else
{return null;
}
});
var G__8350__8352 = (function (coll,n,not_found){
var this__8340 = this;
var i__8341 = (n + this__8340.i);

if(cljs.core.truth_((i__8341 < this__8340.a.length)))
{return (this__8340.a[i__8341]);
} else
{return not_found;
}
});
G__8350 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8350__8351.call(this,coll,n);
case  3 :
return G__8350__8352.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8350;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8342 = this;
return (this__8342.a.length - this__8342.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8343 = this;
return (this__8343.a[this__8343.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8344 = this;
if(cljs.core.truth_(((this__8344.i + 1) < this__8344.a.length)))
{return (new cljs.core.IndexedSeq(this__8344.a,(this__8344.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8345 = this;
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
var G__8428 = null;
var G__8428__8429 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8428__8430 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8428 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8428__8429.call(this,array,f);
case  3 :
return G__8428__8430.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8428;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8432 = null;
var G__8432__8433 = (function (array,k){
return (array[k]);
});
var G__8432__8434 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8432 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8432__8433.call(this,array,k);
case  3 :
return G__8432__8434.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8432;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8437 = null;
var G__8437__8438 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8437__8439 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8437 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8437__8438.call(this,array,n);
case  3 :
return G__8437__8439.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8437;
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
var temp__3698__auto____8448 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8448))
{var s__8449 = temp__3698__auto____8448;

return cljs.core._first.call(null,s__8449);
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
var G__8578 = cljs.core.next.call(null,s);
s = G__8578;
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
var s__8583 = cljs.core.seq.call(null,x);
var n__8584 = 0;

while(true){
if(cljs.core.truth_(s__8583))
{{
var G__8587 = cljs.core.next.call(null,s__8583);
var G__8588 = (n__8584 + 1);
s__8583 = G__8587;
n__8584 = G__8588;
continue;
}
} else
{return n__8584;
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
var G__8604__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8605 = conj.call(null,coll,x);
var G__8607 = cljs.core.first.call(null,xs);
var G__8608 = cljs.core.next.call(null,xs);
coll = G__8605;
x = G__8607;
xs = G__8608;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8604 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8604__delegate.call(this, coll, x, xs);
};
G__8604.cljs$lang$maxFixedArity = 2;
G__8604.cljs$lang$applyTo = (function (arglist__8609){
var coll = cljs.core.first(arglist__8609);
var x = cljs.core.first(cljs.core.next(arglist__8609));
var xs = cljs.core.rest(cljs.core.next(arglist__8609));
return G__8604__delegate.call(this, coll, x, xs);
});
return G__8604;
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
var nth__8704 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8705 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8704.call(this,coll,n);
case  3 :
return nth__8705.call(this,coll,n,not_found);
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
var get__8712 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8713 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8712.call(this,o,k);
case  3 :
return get__8713.call(this,o,k,not_found);
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
var assoc__8720 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8721 = (function() { 
var G__8723__delegate = function (coll,k,v,kvs){
while(true){
var ret__8715 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8724 = ret__8715;
var G__8725 = cljs.core.first.call(null,kvs);
var G__8726 = cljs.core.second.call(null,kvs);
var G__8727 = cljs.core.nnext.call(null,kvs);
coll = G__8724;
k = G__8725;
v = G__8726;
kvs = G__8727;
continue;
}
} else
{return ret__8715;
}
break;
}
};
var G__8723 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8723__delegate.call(this, coll, k, v, kvs);
};
G__8723.cljs$lang$maxFixedArity = 3;
G__8723.cljs$lang$applyTo = (function (arglist__8728){
var coll = cljs.core.first(arglist__8728);
var k = cljs.core.first(cljs.core.next(arglist__8728));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8728)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8728)));
return G__8723__delegate.call(this, coll, k, v, kvs);
});
return G__8723;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8720.call(this,coll,k,v);
default:
return assoc__8721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8721.cljs$lang$applyTo;
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
var dissoc__8735 = (function (coll){
return coll;
});
var dissoc__8736 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8737 = (function() { 
var G__8739__delegate = function (coll,k,ks){
while(true){
var ret__8733 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8740 = ret__8733;
var G__8741 = cljs.core.first.call(null,ks);
var G__8742 = cljs.core.next.call(null,ks);
coll = G__8740;
k = G__8741;
ks = G__8742;
continue;
}
} else
{return ret__8733;
}
break;
}
};
var G__8739 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8739__delegate.call(this, coll, k, ks);
};
G__8739.cljs$lang$maxFixedArity = 2;
G__8739.cljs$lang$applyTo = (function (arglist__8746){
var coll = cljs.core.first(arglist__8746);
var k = cljs.core.first(cljs.core.next(arglist__8746));
var ks = cljs.core.rest(cljs.core.next(arglist__8746));
return G__8739__delegate.call(this, coll, k, ks);
});
return G__8739;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8735.call(this,coll);
case  2 :
return dissoc__8736.call(this,coll,k);
default:
return dissoc__8737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8737.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8755 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8756 = x__445__auto____8755;

if(cljs.core.truth_(and__3546__auto____8756))
{var and__3546__auto____8758 = x__445__auto____8755.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8758))
{return cljs.core.not.call(null,x__445__auto____8755.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8758;
}
} else
{return and__3546__auto____8756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8755);
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
var disj__8774 = (function (coll){
return coll;
});
var disj__8775 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8776 = (function() { 
var G__8780__delegate = function (coll,k,ks){
while(true){
var ret__8773 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8782 = ret__8773;
var G__8783 = cljs.core.first.call(null,ks);
var G__8784 = cljs.core.next.call(null,ks);
coll = G__8782;
k = G__8783;
ks = G__8784;
continue;
}
} else
{return ret__8773;
}
break;
}
};
var G__8780 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8780__delegate.call(this, coll, k, ks);
};
G__8780.cljs$lang$maxFixedArity = 2;
G__8780.cljs$lang$applyTo = (function (arglist__8785){
var coll = cljs.core.first(arglist__8785);
var k = cljs.core.first(cljs.core.next(arglist__8785));
var ks = cljs.core.rest(cljs.core.next(arglist__8785));
return G__8780__delegate.call(this, coll, k, ks);
});
return G__8780;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8774.call(this,coll);
case  2 :
return disj__8775.call(this,coll,k);
default:
return disj__8776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8776.cljs$lang$applyTo;
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
{var x__445__auto____8792 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8793 = x__445__auto____8792;

if(cljs.core.truth_(and__3546__auto____8793))
{var and__3546__auto____8794 = x__445__auto____8792.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8794))
{return cljs.core.not.call(null,x__445__auto____8792.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8794;
}
} else
{return and__3546__auto____8793;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8792);
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
{var x__445__auto____8796 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8797 = x__445__auto____8796;

if(cljs.core.truth_(and__3546__auto____8797))
{var and__3546__auto____8798 = x__445__auto____8796.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8798))
{return cljs.core.not.call(null,x__445__auto____8796.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8798;
}
} else
{return and__3546__auto____8797;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8796);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8806 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8808 = x__445__auto____8806;

if(cljs.core.truth_(and__3546__auto____8808))
{var and__3546__auto____8809 = x__445__auto____8806.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8809))
{return cljs.core.not.call(null,x__445__auto____8806.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8809;
}
} else
{return and__3546__auto____8808;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8806);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8811 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8811;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8813 = x__445__auto____8811.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8813))
{return cljs.core.not.call(null,x__445__auto____8811.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8811);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8817 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8818 = x__445__auto____8817;

if(cljs.core.truth_(and__3546__auto____8818))
{var and__3546__auto____8821 = x__445__auto____8817.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8821))
{return cljs.core.not.call(null,x__445__auto____8817.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8821;
}
} else
{return and__3546__auto____8818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8817);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8833 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8834 = x__445__auto____8833;

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8837 = x__445__auto____8833.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8833.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8833);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8843 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8845 = x__445__auto____8843;

if(cljs.core.truth_(and__3546__auto____8845))
{var and__3546__auto____8846 = x__445__auto____8843.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8846))
{return cljs.core.not.call(null,x__445__auto____8843.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8846;
}
} else
{return and__3546__auto____8845;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8843);
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
{var x__445__auto____8901 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8902 = x__445__auto____8901;

if(cljs.core.truth_(and__3546__auto____8902))
{var and__3546__auto____8903 = x__445__auto____8901.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8903))
{return cljs.core.not.call(null,x__445__auto____8901.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8903;
}
} else
{return and__3546__auto____8902;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8901);
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
var and__3546__auto____8923 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8923))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8929 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8929))
{return or__3548__auto____8929;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8923;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8937 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8937))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8937;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8949 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8949))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8949;
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
var and__3546__auto____8962 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8962))
{return (n == n.toFixed());
} else
{return and__3546__auto____8962;
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
if(cljs.core.truth_((function (){var and__3546__auto____8982 = coll;

if(cljs.core.truth_(and__3546__auto____8982))
{var and__3546__auto____8984 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8984))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8984;
}
} else
{return and__3546__auto____8982;
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
var distinct_QMARK___9001 = (function (x){
return true;
});
var distinct_QMARK___9002 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9003 = (function() { 
var G__9005__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8996 = cljs.core.set([y,x]);
var xs__8997 = more;

while(true){
var x__8998 = cljs.core.first.call(null,xs__8997);
var etc__8999 = cljs.core.next.call(null,xs__8997);

if(cljs.core.truth_(xs__8997))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8996,x__8998)))
{return false;
} else
{{
var G__9013 = cljs.core.conj.call(null,s__8996,x__8998);
var G__9014 = etc__8999;
s__8996 = G__9013;
xs__8997 = G__9014;
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
var G__9005 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9005__delegate.call(this, x, y, more);
};
G__9005.cljs$lang$maxFixedArity = 2;
G__9005.cljs$lang$applyTo = (function (arglist__9019){
var x = cljs.core.first(arglist__9019);
var y = cljs.core.first(cljs.core.next(arglist__9019));
var more = cljs.core.rest(cljs.core.next(arglist__9019));
return G__9005__delegate.call(this, x, y, more);
});
return G__9005;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9001.call(this,x);
case  2 :
return distinct_QMARK___9002.call(this,x,y);
default:
return distinct_QMARK___9003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9003.cljs$lang$applyTo;
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
var r__9025 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9025)))
{return r__9025;
} else
{if(cljs.core.truth_(r__9025))
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
var sort__9044 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9045 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9040 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9040,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9040);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9044.call(this,comp);
case  2 :
return sort__9045.call(this,comp,coll);
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
var sort_by__9058 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9059 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9058.call(this,keyfn,comp);
case  3 :
return sort_by__9059.call(this,keyfn,comp,coll);
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
var reduce__9248 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9249 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9248.call(this,f,val);
case  3 :
return reduce__9249.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9261 = (function (f,coll){
var temp__3695__auto____9256 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9256))
{var s__9258 = temp__3695__auto____9256;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9258),cljs.core.next.call(null,s__9258));
} else
{return f.call(null);
}
});
var seq_reduce__9262 = (function (f,val,coll){
var val__9259 = val;
var coll__9260 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9260))
{{
var G__9269 = f.call(null,val__9259,cljs.core.first.call(null,coll__9260));
var G__9270 = cljs.core.next.call(null,coll__9260);
val__9259 = G__9269;
coll__9260 = G__9270;
continue;
}
} else
{return val__9259;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9261.call(this,f,val);
case  3 :
return seq_reduce__9262.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9273 = null;
var G__9273__9274 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9273__9275 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9273 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9273__9274.call(this,coll,f);
case  3 :
return G__9273__9275.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9273;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9283 = (function (){
return 0;
});
var _PLUS___9284 = (function (x){
return x;
});
var _PLUS___9285 = (function (x,y){
return (x + y);
});
var _PLUS___9286 = (function() { 
var G__9288__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9288 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9288__delegate.call(this, x, y, more);
};
G__9288.cljs$lang$maxFixedArity = 2;
G__9288.cljs$lang$applyTo = (function (arglist__9289){
var x = cljs.core.first(arglist__9289);
var y = cljs.core.first(cljs.core.next(arglist__9289));
var more = cljs.core.rest(cljs.core.next(arglist__9289));
return G__9288__delegate.call(this, x, y, more);
});
return G__9288;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9283.call(this);
case  1 :
return _PLUS___9284.call(this,x);
case  2 :
return _PLUS___9285.call(this,x,y);
default:
return _PLUS___9286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9286.cljs$lang$applyTo;
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
var ___9298 = (function (x){
return (- x);
});
var ___9299 = (function (x,y){
return (x - y);
});
var ___9300 = (function() { 
var G__9303__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9303 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9303__delegate.call(this, x, y, more);
};
G__9303.cljs$lang$maxFixedArity = 2;
G__9303.cljs$lang$applyTo = (function (arglist__9304){
var x = cljs.core.first(arglist__9304);
var y = cljs.core.first(cljs.core.next(arglist__9304));
var more = cljs.core.rest(cljs.core.next(arglist__9304));
return G__9303__delegate.call(this, x, y, more);
});
return G__9303;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9298.call(this,x);
case  2 :
return ___9299.call(this,x,y);
default:
return ___9300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9300.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9309 = (function (){
return 1;
});
var _STAR___9310 = (function (x){
return x;
});
var _STAR___9311 = (function (x,y){
return (x * y);
});
var _STAR___9312 = (function() { 
var G__9318__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9318 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9318__delegate.call(this, x, y, more);
};
G__9318.cljs$lang$maxFixedArity = 2;
G__9318.cljs$lang$applyTo = (function (arglist__9319){
var x = cljs.core.first(arglist__9319);
var y = cljs.core.first(cljs.core.next(arglist__9319));
var more = cljs.core.rest(cljs.core.next(arglist__9319));
return G__9318__delegate.call(this, x, y, more);
});
return G__9318;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9309.call(this);
case  1 :
return _STAR___9310.call(this,x);
case  2 :
return _STAR___9311.call(this,x,y);
default:
return _STAR___9312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9312.cljs$lang$applyTo;
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
var _SLASH___9324 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9326 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9327 = (function() { 
var G__9330__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9330 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9330__delegate.call(this, x, y, more);
};
G__9330.cljs$lang$maxFixedArity = 2;
G__9330.cljs$lang$applyTo = (function (arglist__9334){
var x = cljs.core.first(arglist__9334);
var y = cljs.core.first(cljs.core.next(arglist__9334));
var more = cljs.core.rest(cljs.core.next(arglist__9334));
return G__9330__delegate.call(this, x, y, more);
});
return G__9330;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9324.call(this,x);
case  2 :
return _SLASH___9326.call(this,x,y);
default:
return _SLASH___9327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9327.cljs$lang$applyTo;
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
var _LT___9337 = (function (x){
return true;
});
var _LT___9339 = (function (x,y){
return (x < y);
});
var _LT___9341 = (function() { 
var G__9344__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9345 = y;
var G__9346 = cljs.core.first.call(null,more);
var G__9347 = cljs.core.next.call(null,more);
x = G__9345;
y = G__9346;
more = G__9347;
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
var G__9344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9344__delegate.call(this, x, y, more);
};
G__9344.cljs$lang$maxFixedArity = 2;
G__9344.cljs$lang$applyTo = (function (arglist__9348){
var x = cljs.core.first(arglist__9348);
var y = cljs.core.first(cljs.core.next(arglist__9348));
var more = cljs.core.rest(cljs.core.next(arglist__9348));
return G__9344__delegate.call(this, x, y, more);
});
return G__9344;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9337.call(this,x);
case  2 :
return _LT___9339.call(this,x,y);
default:
return _LT___9341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9341.cljs$lang$applyTo;
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
var _LT__EQ___9349 = (function (x){
return true;
});
var _LT__EQ___9350 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9351 = (function() { 
var G__9353__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9354 = y;
var G__9355 = cljs.core.first.call(null,more);
var G__9356 = cljs.core.next.call(null,more);
x = G__9354;
y = G__9355;
more = G__9356;
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
var G__9353 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9353__delegate.call(this, x, y, more);
};
G__9353.cljs$lang$maxFixedArity = 2;
G__9353.cljs$lang$applyTo = (function (arglist__9357){
var x = cljs.core.first(arglist__9357);
var y = cljs.core.first(cljs.core.next(arglist__9357));
var more = cljs.core.rest(cljs.core.next(arglist__9357));
return G__9353__delegate.call(this, x, y, more);
});
return G__9353;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9349.call(this,x);
case  2 :
return _LT__EQ___9350.call(this,x,y);
default:
return _LT__EQ___9351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9351.cljs$lang$applyTo;
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
var _GT___9368 = (function (x){
return true;
});
var _GT___9369 = (function (x,y){
return (x > y);
});
var _GT___9370 = (function() { 
var G__9373__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9374 = y;
var G__9375 = cljs.core.first.call(null,more);
var G__9376 = cljs.core.next.call(null,more);
x = G__9374;
y = G__9375;
more = G__9376;
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
var G__9373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9373__delegate.call(this, x, y, more);
};
G__9373.cljs$lang$maxFixedArity = 2;
G__9373.cljs$lang$applyTo = (function (arglist__9377){
var x = cljs.core.first(arglist__9377);
var y = cljs.core.first(cljs.core.next(arglist__9377));
var more = cljs.core.rest(cljs.core.next(arglist__9377));
return G__9373__delegate.call(this, x, y, more);
});
return G__9373;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9368.call(this,x);
case  2 :
return _GT___9369.call(this,x,y);
default:
return _GT___9370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9370.cljs$lang$applyTo;
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
var _GT__EQ___9386 = (function (x){
return true;
});
var _GT__EQ___9387 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9388 = (function() { 
var G__9391__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9392 = y;
var G__9393 = cljs.core.first.call(null,more);
var G__9394 = cljs.core.next.call(null,more);
x = G__9392;
y = G__9393;
more = G__9394;
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
var G__9391 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9391__delegate.call(this, x, y, more);
};
G__9391.cljs$lang$maxFixedArity = 2;
G__9391.cljs$lang$applyTo = (function (arglist__9395){
var x = cljs.core.first(arglist__9395);
var y = cljs.core.first(cljs.core.next(arglist__9395));
var more = cljs.core.rest(cljs.core.next(arglist__9395));
return G__9391__delegate.call(this, x, y, more);
});
return G__9391;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9386.call(this,x);
case  2 :
return _GT__EQ___9387.call(this,x,y);
default:
return _GT__EQ___9388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9388.cljs$lang$applyTo;
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
var max__9405 = (function (x){
return x;
});
var max__9406 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9407 = (function() { 
var G__9409__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9409 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9409__delegate.call(this, x, y, more);
};
G__9409.cljs$lang$maxFixedArity = 2;
G__9409.cljs$lang$applyTo = (function (arglist__9410){
var x = cljs.core.first(arglist__9410);
var y = cljs.core.first(cljs.core.next(arglist__9410));
var more = cljs.core.rest(cljs.core.next(arglist__9410));
return G__9409__delegate.call(this, x, y, more);
});
return G__9409;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9405.call(this,x);
case  2 :
return max__9406.call(this,x,y);
default:
return max__9407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9407.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9415 = (function (x){
return x;
});
var min__9416 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9417 = (function() { 
var G__9420__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9420 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9420__delegate.call(this, x, y, more);
};
G__9420.cljs$lang$maxFixedArity = 2;
G__9420.cljs$lang$applyTo = (function (arglist__9422){
var x = cljs.core.first(arglist__9422);
var y = cljs.core.first(cljs.core.next(arglist__9422));
var more = cljs.core.rest(cljs.core.next(arglist__9422));
return G__9420__delegate.call(this, x, y, more);
});
return G__9420;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9415.call(this,x);
case  2 :
return min__9416.call(this,x,y);
default:
return min__9417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9417.cljs$lang$applyTo;
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
var rem__9429 = (n % d);

return cljs.core.fix.call(null,((n - rem__9429) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9430 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9430));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9432 = (function (){
return Math.random.call(null);
});
var rand__9433 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9432.call(this);
case  1 :
return rand__9433.call(this,n);
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
var _EQ__EQ___9512 = (function (x){
return true;
});
var _EQ__EQ___9513 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9514 = (function() { 
var G__9516__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9517 = y;
var G__9518 = cljs.core.first.call(null,more);
var G__9519 = cljs.core.next.call(null,more);
x = G__9517;
y = G__9518;
more = G__9519;
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
var G__9516 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9516__delegate.call(this, x, y, more);
};
G__9516.cljs$lang$maxFixedArity = 2;
G__9516.cljs$lang$applyTo = (function (arglist__9520){
var x = cljs.core.first(arglist__9520);
var y = cljs.core.first(cljs.core.next(arglist__9520));
var more = cljs.core.rest(cljs.core.next(arglist__9520));
return G__9516__delegate.call(this, x, y, more);
});
return G__9516;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9512.call(this,x);
case  2 :
return _EQ__EQ___9513.call(this,x,y);
default:
return _EQ__EQ___9514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9514.cljs$lang$applyTo;
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
var n__9533 = n;
var xs__9534 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9535 = xs__9534;

if(cljs.core.truth_(and__3546__auto____9535))
{return (n__9533 > 0);
} else
{return and__3546__auto____9535;
}
})()))
{{
var G__9538 = (n__9533 - 1);
var G__9540 = cljs.core.next.call(null,xs__9534);
n__9533 = G__9538;
xs__9534 = G__9540;
continue;
}
} else
{return xs__9534;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9548 = null;
var G__9548__9549 = (function (coll,n){
var temp__3695__auto____9543 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9543))
{var xs__9544 = temp__3695__auto____9543;

return cljs.core.first.call(null,xs__9544);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9548__9550 = (function (coll,n,not_found){
var temp__3695__auto____9546 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9546))
{var xs__9547 = temp__3695__auto____9546;

return cljs.core.first.call(null,xs__9547);
} else
{return not_found;
}
});
G__9548 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9548__9549.call(this,coll,n);
case  3 :
return G__9548__9550.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9548;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9619 = (function (){
return "";
});
var str_STAR___9620 = (function (x){
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
var str_STAR___9621 = (function() { 
var G__9627__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9629 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9630 = cljs.core.next.call(null,more);
sb = G__9629;
more = G__9630;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9627 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9627__delegate.call(this, x, ys);
};
G__9627.cljs$lang$maxFixedArity = 1;
G__9627.cljs$lang$applyTo = (function (arglist__9631){
var x = cljs.core.first(arglist__9631);
var ys = cljs.core.rest(arglist__9631);
return G__9627__delegate.call(this, x, ys);
});
return G__9627;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9619.call(this);
case  1 :
return str_STAR___9620.call(this,x);
default:
return str_STAR___9621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9621.cljs$lang$applyTo;
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
var str__9659 = (function (){
return "";
});
var str__9660 = (function (x){
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
var str__9661 = (function() { 
var G__9668__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9668 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9668__delegate.call(this, x, ys);
};
G__9668.cljs$lang$maxFixedArity = 1;
G__9668.cljs$lang$applyTo = (function (arglist__9673){
var x = cljs.core.first(arglist__9673);
var ys = cljs.core.rest(arglist__9673);
return G__9668__delegate.call(this, x, ys);
});
return G__9668;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9659.call(this);
case  1 :
return str__9660.call(this,x);
default:
return str__9661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9661.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9688 = (function (s,start){
return s.substring(start);
});
var subs__9689 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9688.call(this,s,start);
case  3 :
return subs__9689.call(this,s,start,end);
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
var symbol__9695 = (function (name){
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
var symbol__9696 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9695.call(this,ns);
case  2 :
return symbol__9696.call(this,ns,name);
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
var keyword__9703 = (function (name){
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
var keyword__9704 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9703.call(this,ns);
case  2 :
return keyword__9704.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9708 = cljs.core.seq.call(null,x);
var ys__9710 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9708)))
{return cljs.core.nil_QMARK_.call(null,ys__9710);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9710)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9708),cljs.core.first.call(null,ys__9710))))
{{
var G__9720 = cljs.core.next.call(null,xs__9708);
var G__9745 = cljs.core.next.call(null,ys__9710);
xs__9708 = G__9720;
ys__9710 = G__9745;
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
return cljs.core.reduce.call(null,(function (p1__9750_SHARP_,p2__9752_SHARP_){
return cljs.core.hash_combine.call(null,p1__9750_SHARP_,cljs.core.hash.call(null,p2__9752_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9762__9763 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9762__9763))
{var G__9768__9770 = cljs.core.first.call(null,G__9762__9763);
var vec__9769__9771 = G__9768__9770;
var key_name__9772 = cljs.core.nth.call(null,vec__9769__9771,0,null);
var f__9773 = cljs.core.nth.call(null,vec__9769__9771,1,null);
var G__9762__9774 = G__9762__9763;

var G__9768__9776 = G__9768__9770;
var G__9762__9778 = G__9762__9774;

while(true){
var vec__9779__9780 = G__9768__9776;
var key_name__9781 = cljs.core.nth.call(null,vec__9779__9780,0,null);
var f__9783 = cljs.core.nth.call(null,vec__9779__9780,1,null);
var G__9762__9784 = G__9762__9778;

var str_name__9786 = cljs.core.name.call(null,key_name__9781);

obj[str_name__9786] = f__9783;
var temp__3698__auto____9788 = cljs.core.next.call(null,G__9762__9784);

if(cljs.core.truth_(temp__3698__auto____9788))
{var G__9762__9790 = temp__3698__auto____9788;

{
var G__9803 = cljs.core.first.call(null,G__9762__9790);
var G__9804 = G__9762__9790;
G__9768__9776 = G__9803;
G__9762__9778 = G__9804;
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
var this__9818 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9820 = this;
return (new cljs.core.List(this__9820.meta,o,coll,(this__9820.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9821 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9822 = this;
return this__9822.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9823 = this;
return this__9823.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9825 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9829 = this;
return this__9829.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9832 = this;
return this__9832.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9836 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9842 = this;
return (new cljs.core.List(meta,this__9842.first,this__9842.rest,this__9842.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9847 = this;
return this__9847.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9849 = this;
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
var this__9867 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9869 = this;
return (new cljs.core.List(this__9869.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9872 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9877 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9879 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9880 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9882 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9884 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9886 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9887 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9889 = this;
return this__9889.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9891 = this;
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
list.cljs$lang$applyTo = (function (arglist__9902){
var items = cljs.core.seq( arglist__9902 );;
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
var this__9944 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9946 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9946.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9947 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9948 = this;
return this__9948.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9949 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9949.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9949.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9951 = this;
return this__9951.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9953 = this;
return (new cljs.core.Cons(meta,this__9953.first,this__9953.rest));
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
var G__9989 = null;
var G__9989__9990 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9989__9991 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9989 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9989__9990.call(this,string,f);
case  3 :
return G__9989__9991.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9989;
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
var G__10005 = null;
var G__10005__10006 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10005__10007 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10005 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10005__10006.call(this,string,n);
case  3 :
return G__10005__10007.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10005;
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
var G__10022 = null;
var G__10022__10023 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10022__10024 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10022 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10022__10023.call(this,this$,coll);
case  3 :
return G__10022__10024.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10022;
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
var x__10048 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10048;
} else
{lazy_seq.x = x__10048.call(null);
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
var this__10052 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10054 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10056 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10057 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10057.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10061 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10064 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10065 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10066 = this;
return this__10066.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10068 = this;
return (new cljs.core.LazySeq(meta,this__10068.realized,this__10068.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10070 = cljs.core.array.call(null);

var s__10071 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10071)))
{ary__10070.push(cljs.core.first.call(null,s__10071));
{
var G__10078 = cljs.core.next.call(null,s__10071);
s__10071 = G__10078;
continue;
}
} else
{return ary__10070;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10079 = s;
var i__10080 = n;
var sum__10081 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10083 = (i__10080 > 0);

if(cljs.core.truth_(and__3546__auto____10083))
{return cljs.core.seq.call(null,s__10079);
} else
{return and__3546__auto____10083;
}
})()))
{{
var G__10085 = cljs.core.next.call(null,s__10079);
var G__10086 = (i__10080 - 1);
var G__10087 = (sum__10081 + 1);
s__10079 = G__10085;
i__10080 = G__10086;
sum__10081 = G__10087;
continue;
}
} else
{return sum__10081;
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
var concat__10109 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10110 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10111 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10101 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10101))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10101),concat.call(null,cljs.core.rest.call(null,s__10101),y));
} else
{return y;
}
})));
});
var concat__10112 = (function() { 
var G__10120__delegate = function (x,y,zs){
var cat__10106 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10105 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10105))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10105),cat.call(null,cljs.core.rest.call(null,xys__10105),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10106.call(null,concat.call(null,x,y),zs);
};
var G__10120 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10120__delegate.call(this, x, y, zs);
};
G__10120.cljs$lang$maxFixedArity = 2;
G__10120.cljs$lang$applyTo = (function (arglist__10179){
var x = cljs.core.first(arglist__10179);
var y = cljs.core.first(cljs.core.next(arglist__10179));
var zs = cljs.core.rest(cljs.core.next(arglist__10179));
return G__10120__delegate.call(this, x, y, zs);
});
return G__10120;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10109.call(this);
case  1 :
return concat__10110.call(this,x);
case  2 :
return concat__10111.call(this,x,y);
default:
return concat__10112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10112.cljs$lang$applyTo;
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
var list_STAR___10188 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10189 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10190 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10191 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10192 = (function() { 
var G__10195__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10195 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10195__delegate.call(this, a, b, c, d, more);
};
G__10195.cljs$lang$maxFixedArity = 4;
G__10195.cljs$lang$applyTo = (function (arglist__10196){
var a = cljs.core.first(arglist__10196);
var b = cljs.core.first(cljs.core.next(arglist__10196));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10196)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10196))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10196))));
return G__10195__delegate.call(this, a, b, c, d, more);
});
return G__10195;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10188.call(this,a);
case  2 :
return list_STAR___10189.call(this,a,b);
case  3 :
return list_STAR___10190.call(this,a,b,c);
case  4 :
return list_STAR___10191.call(this,a,b,c,d);
default:
return list_STAR___10192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10192.cljs$lang$applyTo;
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
var apply__10221 = (function (f,args){
var fixed_arity__10199 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10199 + 1)) <= fixed_arity__10199)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10222 = (function (f,x,args){
var arglist__10202 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10203 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10202,fixed_arity__10203) <= fixed_arity__10203)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10202));
} else
{return f.cljs$lang$applyTo(arglist__10202);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10202));
}
});
var apply__10223 = (function (f,x,y,args){
var arglist__10204 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10206 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10204,fixed_arity__10206) <= fixed_arity__10206)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10204));
} else
{return f.cljs$lang$applyTo(arglist__10204);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10204));
}
});
var apply__10224 = (function (f,x,y,z,args){
var arglist__10209 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10211 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10209,fixed_arity__10211) <= fixed_arity__10211)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10209));
} else
{return f.cljs$lang$applyTo(arglist__10209);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10209));
}
});
var apply__10225 = (function() { 
var G__10229__delegate = function (f,a,b,c,d,args){
var arglist__10216 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10217 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10216,fixed_arity__10217) <= fixed_arity__10217)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10216));
} else
{return f.cljs$lang$applyTo(arglist__10216);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10216));
}
};
var G__10229 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10229__delegate.call(this, f, a, b, c, d, args);
};
G__10229.cljs$lang$maxFixedArity = 5;
G__10229.cljs$lang$applyTo = (function (arglist__10232){
var f = cljs.core.first(arglist__10232);
var a = cljs.core.first(cljs.core.next(arglist__10232));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10232)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10232))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10232)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10232)))));
return G__10229__delegate.call(this, f, a, b, c, d, args);
});
return G__10229;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10221.call(this,f,a);
case  3 :
return apply__10222.call(this,f,a,b);
case  4 :
return apply__10223.call(this,f,a,b,c);
case  5 :
return apply__10224.call(this,f,a,b,c,d);
default:
return apply__10225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10225.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10253){
var obj = cljs.core.first(arglist__10253);
var f = cljs.core.first(cljs.core.next(arglist__10253));
var args = cljs.core.rest(cljs.core.next(arglist__10253));
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
var not_EQ___10259 = (function (x){
return false;
});
var not_EQ___10260 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10261 = (function() { 
var G__10268__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10268 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10268__delegate.call(this, x, y, more);
};
G__10268.cljs$lang$maxFixedArity = 2;
G__10268.cljs$lang$applyTo = (function (arglist__10272){
var x = cljs.core.first(arglist__10272);
var y = cljs.core.first(cljs.core.next(arglist__10272));
var more = cljs.core.rest(cljs.core.next(arglist__10272));
return G__10268__delegate.call(this, x, y, more);
});
return G__10268;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10259.call(this,x);
case  2 :
return not_EQ___10260.call(this,x,y);
default:
return not_EQ___10261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10261.cljs$lang$applyTo;
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
var G__10275 = pred;
var G__10276 = cljs.core.next.call(null,coll);
pred = G__10275;
coll = G__10276;
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
{var or__3548__auto____10279 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10279))
{return or__3548__auto____10279;
} else
{{
var G__10290 = pred;
var G__10291 = cljs.core.next.call(null,coll);
pred = G__10290;
coll = G__10291;
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
var G__10300 = null;
var G__10300__10301 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10300__10302 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10300__10303 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10300__10304 = (function() { 
var G__10306__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10306 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10306__delegate.call(this, x, y, zs);
};
G__10306.cljs$lang$maxFixedArity = 2;
G__10306.cljs$lang$applyTo = (function (arglist__10309){
var x = cljs.core.first(arglist__10309);
var y = cljs.core.first(cljs.core.next(arglist__10309));
var zs = cljs.core.rest(cljs.core.next(arglist__10309));
return G__10306__delegate.call(this, x, y, zs);
});
return G__10306;
})()
;
G__10300 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10300__10301.call(this);
case  1 :
return G__10300__10302.call(this,x);
case  2 :
return G__10300__10303.call(this,x,y);
default:
return G__10300__10304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10300.cljs$lang$maxFixedArity = 2;
G__10300.cljs$lang$applyTo = G__10300__10304.cljs$lang$applyTo;
return G__10300;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10320__delegate = function (args){
return x;
};
var G__10320 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10320__delegate.call(this, args);
};
G__10320.cljs$lang$maxFixedArity = 0;
G__10320.cljs$lang$applyTo = (function (arglist__10322){
var args = cljs.core.seq( arglist__10322 );;
return G__10320__delegate.call(this, args);
});
return G__10320;
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
var comp__10486 = (function (){
return cljs.core.identity;
});
var comp__10487 = (function (f){
return f;
});
var comp__10488 = (function (f,g){
return (function() {
var G__10492 = null;
var G__10492__10493 = (function (){
return f.call(null,g.call(null));
});
var G__10492__10494 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10492__10495 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10492__10496 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10492__10497 = (function() { 
var G__10513__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10513 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10513__delegate.call(this, x, y, z, args);
};
G__10513.cljs$lang$maxFixedArity = 3;
G__10513.cljs$lang$applyTo = (function (arglist__10514){
var x = cljs.core.first(arglist__10514);
var y = cljs.core.first(cljs.core.next(arglist__10514));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10514)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10514)));
return G__10513__delegate.call(this, x, y, z, args);
});
return G__10513;
})()
;
G__10492 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10492__10493.call(this);
case  1 :
return G__10492__10494.call(this,x);
case  2 :
return G__10492__10495.call(this,x,y);
case  3 :
return G__10492__10496.call(this,x,y,z);
default:
return G__10492__10497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10492.cljs$lang$maxFixedArity = 3;
G__10492.cljs$lang$applyTo = G__10492__10497.cljs$lang$applyTo;
return G__10492;
})()
});
var comp__10489 = (function (f,g,h){
return (function() {
var G__10515 = null;
var G__10515__10516 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10515__10517 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10515__10518 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10515__10519 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10515__10520 = (function() { 
var G__10523__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10523 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10523__delegate.call(this, x, y, z, args);
};
G__10523.cljs$lang$maxFixedArity = 3;
G__10523.cljs$lang$applyTo = (function (arglist__10528){
var x = cljs.core.first(arglist__10528);
var y = cljs.core.first(cljs.core.next(arglist__10528));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10528)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10528)));
return G__10523__delegate.call(this, x, y, z, args);
});
return G__10523;
})()
;
G__10515 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10515__10516.call(this);
case  1 :
return G__10515__10517.call(this,x);
case  2 :
return G__10515__10518.call(this,x,y);
case  3 :
return G__10515__10519.call(this,x,y,z);
default:
return G__10515__10520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10515.cljs$lang$maxFixedArity = 3;
G__10515.cljs$lang$applyTo = G__10515__10520.cljs$lang$applyTo;
return G__10515;
})()
});
var comp__10490 = (function() { 
var G__10530__delegate = function (f1,f2,f3,fs){
var fs__10354 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10531__delegate = function (args){
var ret__10356 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10354),args);
var fs__10357 = cljs.core.next.call(null,fs__10354);

while(true){
if(cljs.core.truth_(fs__10357))
{{
var G__10533 = cljs.core.first.call(null,fs__10357).call(null,ret__10356);
var G__10534 = cljs.core.next.call(null,fs__10357);
ret__10356 = G__10533;
fs__10357 = G__10534;
continue;
}
} else
{return ret__10356;
}
break;
}
};
var G__10531 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10531__delegate.call(this, args);
};
G__10531.cljs$lang$maxFixedArity = 0;
G__10531.cljs$lang$applyTo = (function (arglist__10535){
var args = cljs.core.seq( arglist__10535 );;
return G__10531__delegate.call(this, args);
});
return G__10531;
})()
;
};
var G__10530 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10530__delegate.call(this, f1, f2, f3, fs);
};
G__10530.cljs$lang$maxFixedArity = 3;
G__10530.cljs$lang$applyTo = (function (arglist__10541){
var f1 = cljs.core.first(arglist__10541);
var f2 = cljs.core.first(cljs.core.next(arglist__10541));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10541)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10541)));
return G__10530__delegate.call(this, f1, f2, f3, fs);
});
return G__10530;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10486.call(this);
case  1 :
return comp__10487.call(this,f1);
case  2 :
return comp__10488.call(this,f1,f2);
case  3 :
return comp__10489.call(this,f1,f2,f3);
default:
return comp__10490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10490.cljs$lang$applyTo;
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
var partial__10562 = (function (f,arg1){
return (function() { 
var G__10568__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10568 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10568__delegate.call(this, args);
};
G__10568.cljs$lang$maxFixedArity = 0;
G__10568.cljs$lang$applyTo = (function (arglist__10570){
var args = cljs.core.seq( arglist__10570 );;
return G__10568__delegate.call(this, args);
});
return G__10568;
})()
;
});
var partial__10563 = (function (f,arg1,arg2){
return (function() { 
var G__10574__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10574 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10574__delegate.call(this, args);
};
G__10574.cljs$lang$maxFixedArity = 0;
G__10574.cljs$lang$applyTo = (function (arglist__10576){
var args = cljs.core.seq( arglist__10576 );;
return G__10574__delegate.call(this, args);
});
return G__10574;
})()
;
});
var partial__10564 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10577__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10577 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10577__delegate.call(this, args);
};
G__10577.cljs$lang$maxFixedArity = 0;
G__10577.cljs$lang$applyTo = (function (arglist__10578){
var args = cljs.core.seq( arglist__10578 );;
return G__10577__delegate.call(this, args);
});
return G__10577;
})()
;
});
var partial__10565 = (function() { 
var G__10579__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10581__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10581 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10581__delegate.call(this, args);
};
G__10581.cljs$lang$maxFixedArity = 0;
G__10581.cljs$lang$applyTo = (function (arglist__10584){
var args = cljs.core.seq( arglist__10584 );;
return G__10581__delegate.call(this, args);
});
return G__10581;
})()
;
};
var G__10579 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10579__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10579.cljs$lang$maxFixedArity = 4;
G__10579.cljs$lang$applyTo = (function (arglist__10585){
var f = cljs.core.first(arglist__10585);
var arg1 = cljs.core.first(cljs.core.next(arglist__10585));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10585)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10585))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10585))));
return G__10579__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10579;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10562.call(this,f,arg1);
case  3 :
return partial__10563.call(this,f,arg1,arg2);
case  4 :
return partial__10564.call(this,f,arg1,arg2,arg3);
default:
return partial__10565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10565.cljs$lang$applyTo;
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
var fnil__10594 = (function (f,x){
return (function() {
var G__10598 = null;
var G__10598__10599 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10598__10600 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10598__10601 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10598__10602 = (function() { 
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
G__10719.cljs$lang$applyTo = (function (arglist__10722){
var a = cljs.core.first(arglist__10722);
var b = cljs.core.first(cljs.core.next(arglist__10722));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10722)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10722)));
return G__10719__delegate.call(this, a, b, c, ds);
});
return G__10719;
})()
;
G__10598 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10598__10599.call(this,a);
case  2 :
return G__10598__10600.call(this,a,b);
case  3 :
return G__10598__10601.call(this,a,b,c);
default:
return G__10598__10602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10598.cljs$lang$maxFixedArity = 3;
G__10598.cljs$lang$applyTo = G__10598__10602.cljs$lang$applyTo;
return G__10598;
})()
});
var fnil__10595 = (function (f,x,y){
return (function() {
var G__10726 = null;
var G__10726__10728 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10726__10729 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10726__10730 = (function() { 
var G__10735__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10735 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10735__delegate.call(this, a, b, c, ds);
};
G__10735.cljs$lang$maxFixedArity = 3;
G__10735.cljs$lang$applyTo = (function (arglist__10737){
var a = cljs.core.first(arglist__10737);
var b = cljs.core.first(cljs.core.next(arglist__10737));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10737)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10737)));
return G__10735__delegate.call(this, a, b, c, ds);
});
return G__10735;
})()
;
G__10726 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10726__10728.call(this,a,b);
case  3 :
return G__10726__10729.call(this,a,b,c);
default:
return G__10726__10730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10726.cljs$lang$maxFixedArity = 3;
G__10726.cljs$lang$applyTo = G__10726__10730.cljs$lang$applyTo;
return G__10726;
})()
});
var fnil__10596 = (function (f,x,y,z){
return (function() {
var G__10741 = null;
var G__10741__10742 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10741__10743 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10741__10744 = (function() { 
var G__10747__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10747 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10747__delegate.call(this, a, b, c, ds);
};
G__10747.cljs$lang$maxFixedArity = 3;
G__10747.cljs$lang$applyTo = (function (arglist__10754){
var a = cljs.core.first(arglist__10754);
var b = cljs.core.first(cljs.core.next(arglist__10754));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10754)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10754)));
return G__10747__delegate.call(this, a, b, c, ds);
});
return G__10747;
})()
;
G__10741 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10741__10742.call(this,a,b);
case  3 :
return G__10741__10743.call(this,a,b,c);
default:
return G__10741__10744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10741.cljs$lang$maxFixedArity = 3;
G__10741.cljs$lang$applyTo = G__10741__10744.cljs$lang$applyTo;
return G__10741;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10594.call(this,f,x);
case  3 :
return fnil__10595.call(this,f,x,y);
case  4 :
return fnil__10596.call(this,f,x,y,z);
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
var mapi__10808 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10805 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10805))
{var s__10807 = temp__3698__auto____10805;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10807)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10807)));
} else
{return null;
}
})));
});

return mapi__10808.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10827 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10827))
{var s__10829 = temp__3698__auto____10827;

var x__10830 = f.call(null,cljs.core.first.call(null,s__10829));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10830)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10829));
} else
{return cljs.core.cons.call(null,x__10830,keep.call(null,f,cljs.core.rest.call(null,s__10829)));
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
var keepi__10856 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10851 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10851))
{var s__10853 = temp__3698__auto____10851;

var x__10854 = f.call(null,idx,cljs.core.first.call(null,s__10853));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10854)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10853));
} else
{return cljs.core.cons.call(null,x__10854,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10853)));
}
} else
{return null;
}
})));
});

return keepi__10856.call(null,0,coll);
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
var every_pred__10925 = (function (p){
return (function() {
var ep1 = null;
var ep1__10930 = (function (){
return true;
});
var ep1__10931 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10932 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10875 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10875))
{return p.call(null,y);
} else
{return and__3546__auto____10875;
}
})());
});
var ep1__10933 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10876 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10876))
{var and__3546__auto____10877 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10877))
{return p.call(null,z);
} else
{return and__3546__auto____10877;
}
} else
{return and__3546__auto____10876;
}
})());
});
var ep1__10934 = (function() { 
var G__10941__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10878 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10878))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10878;
}
})());
};
var G__10941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10941__delegate.call(this, x, y, z, args);
};
G__10941.cljs$lang$maxFixedArity = 3;
G__10941.cljs$lang$applyTo = (function (arglist__10942){
var x = cljs.core.first(arglist__10942);
var y = cljs.core.first(cljs.core.next(arglist__10942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10942)));
return G__10941__delegate.call(this, x, y, z, args);
});
return G__10941;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10930.call(this);
case  1 :
return ep1__10931.call(this,x);
case  2 :
return ep1__10932.call(this,x,y);
case  3 :
return ep1__10933.call(this,x,y,z);
default:
return ep1__10934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10934.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10926 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10943 = (function (){
return true;
});
var ep2__10944 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10881 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10881))
{return p2.call(null,x);
} else
{return and__3546__auto____10881;
}
})());
});
var ep2__10945 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10883 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10883))
{var and__3546__auto____10884 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10884))
{var and__3546__auto____10885 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10885))
{return p2.call(null,y);
} else
{return and__3546__auto____10885;
}
} else
{return and__3546__auto____10884;
}
} else
{return and__3546__auto____10883;
}
})());
});
var ep2__10946 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10886 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10886))
{var and__3546__auto____10887 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10887))
{var and__3546__auto____10888 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10888))
{var and__3546__auto____10889 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10889))
{var and__3546__auto____10890 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10890))
{return p2.call(null,z);
} else
{return and__3546__auto____10890;
}
} else
{return and__3546__auto____10889;
}
} else
{return and__3546__auto____10888;
}
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10886;
}
})());
});
var ep2__10947 = (function() { 
var G__10952__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10892 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10892))
{return cljs.core.every_QMARK_.call(null,(function (p1__10842_SHARP_){
var and__3546__auto____10895 = p1.call(null,p1__10842_SHARP_);

if(cljs.core.truth_(and__3546__auto____10895))
{return p2.call(null,p1__10842_SHARP_);
} else
{return and__3546__auto____10895;
}
}),args);
} else
{return and__3546__auto____10892;
}
})());
};
var G__10952 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10952__delegate.call(this, x, y, z, args);
};
G__10952.cljs$lang$maxFixedArity = 3;
G__10952.cljs$lang$applyTo = (function (arglist__10953){
var x = cljs.core.first(arglist__10953);
var y = cljs.core.first(cljs.core.next(arglist__10953));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10953)));
return G__10952__delegate.call(this, x, y, z, args);
});
return G__10952;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10943.call(this);
case  1 :
return ep2__10944.call(this,x);
case  2 :
return ep2__10945.call(this,x,y);
case  3 :
return ep2__10946.call(this,x,y,z);
default:
return ep2__10947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10947.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10927 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10954 = (function (){
return true;
});
var ep3__10955 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10896 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10896))
{var and__3546__auto____10897 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10897))
{return p3.call(null,x);
} else
{return and__3546__auto____10897;
}
} else
{return and__3546__auto____10896;
}
})());
});
var ep3__10956 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10898 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10898))
{var and__3546__auto____10899 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10899))
{var and__3546__auto____10900 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10900))
{var and__3546__auto____10902 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10902))
{var and__3546__auto____10904 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10904))
{return p3.call(null,y);
} else
{return and__3546__auto____10904;
}
} else
{return and__3546__auto____10902;
}
} else
{return and__3546__auto____10900;
}
} else
{return and__3546__auto____10899;
}
} else
{return and__3546__auto____10898;
}
})());
});
var ep3__10957 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10909 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10909))
{var and__3546__auto____10910 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10910))
{var and__3546__auto____10911 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10911))
{var and__3546__auto____10912 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10912))
{var and__3546__auto____10913 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10913))
{var and__3546__auto____10914 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10914))
{var and__3546__auto____10915 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10915))
{var and__3546__auto____10916 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10916))
{return p3.call(null,z);
} else
{return and__3546__auto____10916;
}
} else
{return and__3546__auto____10915;
}
} else
{return and__3546__auto____10914;
}
} else
{return and__3546__auto____10913;
}
} else
{return and__3546__auto____10912;
}
} else
{return and__3546__auto____10911;
}
} else
{return and__3546__auto____10910;
}
} else
{return and__3546__auto____10909;
}
})());
});
var ep3__10958 = (function() { 
var G__11157__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10917 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10917))
{return cljs.core.every_QMARK_.call(null,(function (p1__10845_SHARP_){
var and__3546__auto____10918 = p1.call(null,p1__10845_SHARP_);

if(cljs.core.truth_(and__3546__auto____10918))
{var and__3546__auto____10919 = p2.call(null,p1__10845_SHARP_);

if(cljs.core.truth_(and__3546__auto____10919))
{return p3.call(null,p1__10845_SHARP_);
} else
{return and__3546__auto____10919;
}
} else
{return and__3546__auto____10918;
}
}),args);
} else
{return and__3546__auto____10917;
}
})());
};
var G__11157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11157__delegate.call(this, x, y, z, args);
};
G__11157.cljs$lang$maxFixedArity = 3;
G__11157.cljs$lang$applyTo = (function (arglist__11160){
var x = cljs.core.first(arglist__11160);
var y = cljs.core.first(cljs.core.next(arglist__11160));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11160)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11160)));
return G__11157__delegate.call(this, x, y, z, args);
});
return G__11157;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10954.call(this);
case  1 :
return ep3__10955.call(this,x);
case  2 :
return ep3__10956.call(this,x,y);
case  3 :
return ep3__10957.call(this,x,y,z);
default:
return ep3__10958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10958.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10928 = (function() { 
var G__11165__delegate = function (p1,p2,p3,ps){
var ps__10920 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11167 = (function (){
return true;
});
var epn__11168 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10846_SHARP_){
return p1__10846_SHARP_.call(null,x);
}),ps__10920);
});
var epn__11169 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10847_SHARP_){
var and__3546__auto____10921 = p1__10847_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10921))
{return p1__10847_SHARP_.call(null,y);
} else
{return and__3546__auto____10921;
}
}),ps__10920);
});
var epn__11170 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10848_SHARP_){
var and__3546__auto____10922 = p1__10848_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10922))
{var and__3546__auto____10923 = p1__10848_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10923))
{return p1__10848_SHARP_.call(null,z);
} else
{return and__3546__auto____10923;
}
} else
{return and__3546__auto____10922;
}
}),ps__10920);
});
var epn__11171 = (function() { 
var G__11179__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10924 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10924))
{return cljs.core.every_QMARK_.call(null,(function (p1__10849_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10849_SHARP_,args);
}),ps__10920);
} else
{return and__3546__auto____10924;
}
})());
};
var G__11179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11179__delegate.call(this, x, y, z, args);
};
G__11179.cljs$lang$maxFixedArity = 3;
G__11179.cljs$lang$applyTo = (function (arglist__11184){
var x = cljs.core.first(arglist__11184);
var y = cljs.core.first(cljs.core.next(arglist__11184));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11184)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11184)));
return G__11179__delegate.call(this, x, y, z, args);
});
return G__11179;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11167.call(this);
case  1 :
return epn__11168.call(this,x);
case  2 :
return epn__11169.call(this,x,y);
case  3 :
return epn__11170.call(this,x,y,z);
default:
return epn__11171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11171.cljs$lang$applyTo;
return epn;
})()
};
var G__11165 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11165__delegate.call(this, p1, p2, p3, ps);
};
G__11165.cljs$lang$maxFixedArity = 3;
G__11165.cljs$lang$applyTo = (function (arglist__11192){
var p1 = cljs.core.first(arglist__11192);
var p2 = cljs.core.first(cljs.core.next(arglist__11192));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11192)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11192)));
return G__11165__delegate.call(this, p1, p2, p3, ps);
});
return G__11165;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10925.call(this,p1);
case  2 :
return every_pred__10926.call(this,p1,p2);
case  3 :
return every_pred__10927.call(this,p1,p2,p3);
default:
return every_pred__10928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10928.cljs$lang$applyTo;
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
var some_fn__11377 = (function (p){
return (function() {
var sp1 = null;
var sp1__11383 = (function (){
return null;
});
var sp1__11384 = (function (x){
return p.call(null,x);
});
var sp1__11385 = (function (x,y){
var or__3548__auto____11215 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11215))
{return or__3548__auto____11215;
} else
{return p.call(null,y);
}
});
var sp1__11386 = (function (x,y,z){
var or__3548__auto____11217 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11217))
{return or__3548__auto____11217;
} else
{var or__3548__auto____11220 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11220))
{return or__3548__auto____11220;
} else
{return p.call(null,z);
}
}
});
var sp1__11387 = (function() { 
var G__11395__delegate = function (x,y,z,args){
var or__3548__auto____11223 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11223))
{return or__3548__auto____11223;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11395__delegate.call(this, x, y, z, args);
};
G__11395.cljs$lang$maxFixedArity = 3;
G__11395.cljs$lang$applyTo = (function (arglist__11405){
var x = cljs.core.first(arglist__11405);
var y = cljs.core.first(cljs.core.next(arglist__11405));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11405)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11405)));
return G__11395__delegate.call(this, x, y, z, args);
});
return G__11395;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11383.call(this);
case  1 :
return sp1__11384.call(this,x);
case  2 :
return sp1__11385.call(this,x,y);
case  3 :
return sp1__11386.call(this,x,y,z);
default:
return sp1__11387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11387.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11378 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11412 = (function (){
return null;
});
var sp2__11413 = (function (x){
var or__3548__auto____11237 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11237))
{return or__3548__auto____11237;
} else
{return p2.call(null,x);
}
});
var sp2__11414 = (function (x,y){
var or__3548__auto____11239 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11239))
{return or__3548__auto____11239;
} else
{var or__3548__auto____11241 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11241))
{return or__3548__auto____11241;
} else
{var or__3548__auto____11243 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11243))
{return or__3548__auto____11243;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11415 = (function (x,y,z){
var or__3548__auto____11246 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11246))
{return or__3548__auto____11246;
} else
{var or__3548__auto____11248 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11248))
{return or__3548__auto____11248;
} else
{var or__3548__auto____11249 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{var or__3548__auto____11251 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11251))
{return or__3548__auto____11251;
} else
{var or__3548__auto____11254 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11254))
{return or__3548__auto____11254;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11417 = (function() { 
var G__11434__delegate = function (x,y,z,args){
var or__3548__auto____11257 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11257))
{return or__3548__auto____11257;
} else
{return cljs.core.some.call(null,(function (p1__10863_SHARP_){
var or__3548__auto____11261 = p1.call(null,p1__10863_SHARP_);

if(cljs.core.truth_(or__3548__auto____11261))
{return or__3548__auto____11261;
} else
{return p2.call(null,p1__10863_SHARP_);
}
}),args);
}
};
var G__11434 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11434__delegate.call(this, x, y, z, args);
};
G__11434.cljs$lang$maxFixedArity = 3;
G__11434.cljs$lang$applyTo = (function (arglist__11441){
var x = cljs.core.first(arglist__11441);
var y = cljs.core.first(cljs.core.next(arglist__11441));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11441)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11441)));
return G__11434__delegate.call(this, x, y, z, args);
});
return G__11434;
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
return sp2__11414.call(this,x,y);
case  3 :
return sp2__11415.call(this,x,y,z);
default:
return sp2__11417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11417.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11379 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11450 = (function (){
return null;
});
var sp3__11451 = (function (x){
var or__3548__auto____11271 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11271))
{return or__3548__auto____11271;
} else
{var or__3548__auto____11272 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{return p3.call(null,x);
}
}
});
var sp3__11453 = (function (x,y){
var or__3548__auto____11275 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11275))
{return or__3548__auto____11275;
} else
{var or__3548__auto____11277 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11277))
{return or__3548__auto____11277;
} else
{var or__3548__auto____11280 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11280))
{return or__3548__auto____11280;
} else
{var or__3548__auto____11281 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{var or__3548__auto____11288 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11454 = (function (x,y,z){
var or__3548__auto____11290 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11290))
{return or__3548__auto____11290;
} else
{var or__3548__auto____11291 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11291))
{return or__3548__auto____11291;
} else
{var or__3548__auto____11293 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11293))
{return or__3548__auto____11293;
} else
{var or__3548__auto____11294 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{var or__3548__auto____11296 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11296))
{return or__3548__auto____11296;
} else
{var or__3548__auto____11298 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{var or__3548__auto____11301 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{var or__3548__auto____11303 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11303))
{return or__3548__auto____11303;
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
var sp3__11455 = (function() { 
var G__11474__delegate = function (x,y,z,args){
var or__3548__auto____11305 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{return cljs.core.some.call(null,(function (p1__10868_SHARP_){
var or__3548__auto____11308 = p1.call(null,p1__10868_SHARP_);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{var or__3548__auto____11309 = p2.call(null,p1__10868_SHARP_);

if(cljs.core.truth_(or__3548__auto____11309))
{return or__3548__auto____11309;
} else
{return p3.call(null,p1__10868_SHARP_);
}
}
}),args);
}
};
var G__11474 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11474__delegate.call(this, x, y, z, args);
};
G__11474.cljs$lang$maxFixedArity = 3;
G__11474.cljs$lang$applyTo = (function (arglist__11486){
var x = cljs.core.first(arglist__11486);
var y = cljs.core.first(cljs.core.next(arglist__11486));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11486)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11486)));
return G__11474__delegate.call(this, x, y, z, args);
});
return G__11474;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11450.call(this);
case  1 :
return sp3__11451.call(this,x);
case  2 :
return sp3__11453.call(this,x,y);
case  3 :
return sp3__11454.call(this,x,y,z);
default:
return sp3__11455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11455.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11380 = (function() { 
var G__11491__delegate = function (p1,p2,p3,ps){
var ps__11317 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11492 = (function (){
return null;
});
var spn__11493 = (function (x){
return cljs.core.some.call(null,(function (p1__10869_SHARP_){
return p1__10869_SHARP_.call(null,x);
}),ps__11317);
});
var spn__11494 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10870_SHARP_){
var or__3548__auto____11330 = p1__10870_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{return p1__10870_SHARP_.call(null,y);
}
}),ps__11317);
});
var spn__11495 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10871_SHARP_){
var or__3548__auto____11332 = p1__10871_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11332))
{return or__3548__auto____11332;
} else
{var or__3548__auto____11334 = p1__10871_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
} else
{return p1__10871_SHARP_.call(null,z);
}
}
}),ps__11317);
});
var spn__11496 = (function() { 
var G__11507__delegate = function (x,y,z,args){
var or__3548__auto____11339 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{return cljs.core.some.call(null,(function (p1__10872_SHARP_){
return cljs.core.some.call(null,p1__10872_SHARP_,args);
}),ps__11317);
}
};
var G__11507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11507__delegate.call(this, x, y, z, args);
};
G__11507.cljs$lang$maxFixedArity = 3;
G__11507.cljs$lang$applyTo = (function (arglist__11516){
var x = cljs.core.first(arglist__11516);
var y = cljs.core.first(cljs.core.next(arglist__11516));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11516)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11516)));
return G__11507__delegate.call(this, x, y, z, args);
});
return G__11507;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11492.call(this);
case  1 :
return spn__11493.call(this,x);
case  2 :
return spn__11494.call(this,x,y);
case  3 :
return spn__11495.call(this,x,y,z);
default:
return spn__11496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11496.cljs$lang$applyTo;
return spn;
})()
};
var G__11491 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11491__delegate.call(this, p1, p2, p3, ps);
};
G__11491.cljs$lang$maxFixedArity = 3;
G__11491.cljs$lang$applyTo = (function (arglist__11522){
var p1 = cljs.core.first(arglist__11522);
var p2 = cljs.core.first(cljs.core.next(arglist__11522));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11522)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11522)));
return G__11491__delegate.call(this, p1, p2, p3, ps);
});
return G__11491;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11377.call(this,p1);
case  2 :
return some_fn__11378.call(this,p1,p2);
case  3 :
return some_fn__11379.call(this,p1,p2,p3);
default:
return some_fn__11380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11380.cljs$lang$applyTo;
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
var map__11614 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11534))
{var s__11542 = temp__3698__auto____11534;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11542)),map.call(null,f,cljs.core.rest.call(null,s__11542)));
} else
{return null;
}
})));
});
var map__11615 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11548 = cljs.core.seq.call(null,c1);
var s2__11549 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11551 = s1__11548;

if(cljs.core.truth_(and__3546__auto____11551))
{return s2__11549;
} else
{return and__3546__auto____11551;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11548),cljs.core.first.call(null,s2__11549)),map.call(null,f,cljs.core.rest.call(null,s1__11548),cljs.core.rest.call(null,s2__11549)));
} else
{return null;
}
})));
});
var map__11616 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11559 = cljs.core.seq.call(null,c1);
var s2__11561 = cljs.core.seq.call(null,c2);
var s3__11562 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11570 = s1__11559;

if(cljs.core.truth_(and__3546__auto____11570))
{var and__3546__auto____11571 = s2__11561;

if(cljs.core.truth_(and__3546__auto____11571))
{return s3__11562;
} else
{return and__3546__auto____11571;
}
} else
{return and__3546__auto____11570;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11559),cljs.core.first.call(null,s2__11561),cljs.core.first.call(null,s3__11562)),map.call(null,f,cljs.core.rest.call(null,s1__11559),cljs.core.rest.call(null,s2__11561),cljs.core.rest.call(null,s3__11562)));
} else
{return null;
}
})));
});
var map__11617 = (function() { 
var G__11628__delegate = function (f,c1,c2,c3,colls){
var step__11581 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11575 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11575)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11575),step.call(null,map.call(null,cljs.core.rest,ss__11575)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11208_SHARP_){
return cljs.core.apply.call(null,f,p1__11208_SHARP_);
}),step__11581.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11628 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11628__delegate.call(this, f, c1, c2, c3, colls);
};
G__11628.cljs$lang$maxFixedArity = 4;
G__11628.cljs$lang$applyTo = (function (arglist__11639){
var f = cljs.core.first(arglist__11639);
var c1 = cljs.core.first(cljs.core.next(arglist__11639));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11639)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11639))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11639))));
return G__11628__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11628;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11614.call(this,f,c1);
case  3 :
return map__11615.call(this,f,c1,c2);
case  4 :
return map__11616.call(this,f,c1,c2,c3);
default:
return map__11617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11617.cljs$lang$applyTo;
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
{var temp__3698__auto____11651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11651))
{var s__11652 = temp__3698__auto____11651;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11652),take.call(null,(n - 1),cljs.core.rest.call(null,s__11652)));
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
var step__11666 = (function (n,coll){
while(true){
var s__11662 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11664 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11664))
{return s__11662;
} else
{return and__3546__auto____11664;
}
})()))
{{
var G__11672 = (n - 1);
var G__11673 = cljs.core.rest.call(null,s__11662);
n = G__11672;
coll = G__11673;
continue;
}
} else
{return s__11662;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11666.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11681 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11682 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11681.call(this,n);
case  2 :
return drop_last__11682.call(this,n,s);
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
var s__11690 = cljs.core.seq.call(null,coll);
var lead__11691 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11691))
{{
var G__11695 = cljs.core.next.call(null,s__11690);
var G__11696 = cljs.core.next.call(null,lead__11691);
s__11690 = G__11695;
lead__11691 = G__11696;
continue;
}
} else
{return s__11690;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11705 = (function (pred,coll){
while(true){
var s__11700 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11702 = s__11700;

if(cljs.core.truth_(and__3546__auto____11702))
{return pred.call(null,cljs.core.first.call(null,s__11700));
} else
{return and__3546__auto____11702;
}
})()))
{{
var G__11715 = pred;
var G__11716 = cljs.core.rest.call(null,s__11700);
pred = G__11715;
coll = G__11716;
continue;
}
} else
{return s__11700;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11705.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11721 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11721))
{var s__11722 = temp__3698__auto____11721;

return cljs.core.concat.call(null,s__11722,cycle.call(null,s__11722));
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
var repeat__11758 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11759 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11758.call(this,n);
case  2 :
return repeat__11759.call(this,n,x);
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
var repeatedly__11772 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11773 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11772.call(this,n);
case  2 :
return repeatedly__11773.call(this,n,f);
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
var interleave__11805 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11792 = cljs.core.seq.call(null,c1);
var s2__11793 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11796 = s1__11792;

if(cljs.core.truth_(and__3546__auto____11796))
{return s2__11793;
} else
{return and__3546__auto____11796;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11792),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11793),interleave.call(null,cljs.core.rest.call(null,s1__11792),cljs.core.rest.call(null,s2__11793))));
} else
{return null;
}
})));
});
var interleave__11806 = (function() { 
var G__11815__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11800 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11800)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11800),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11800)));
} else
{return null;
}
})));
};
var G__11815 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11815__delegate.call(this, c1, c2, colls);
};
G__11815.cljs$lang$maxFixedArity = 2;
G__11815.cljs$lang$applyTo = (function (arglist__11821){
var c1 = cljs.core.first(arglist__11821);
var c2 = cljs.core.first(cljs.core.next(arglist__11821));
var colls = cljs.core.rest(cljs.core.next(arglist__11821));
return G__11815__delegate.call(this, c1, c2, colls);
});
return G__11815;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11805.call(this,c1,c2);
default:
return interleave__11806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11806.cljs$lang$applyTo;
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
var cat__11830 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11828 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11828))
{var coll__11829 = temp__3695__auto____11828;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11829),cat.call(null,cljs.core.rest.call(null,coll__11829),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11830.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11863 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11864 = (function() { 
var G__11866__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11866 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11866__delegate.call(this, f, coll, colls);
};
G__11866.cljs$lang$maxFixedArity = 2;
G__11866.cljs$lang$applyTo = (function (arglist__11868){
var f = cljs.core.first(arglist__11868);
var coll = cljs.core.first(cljs.core.next(arglist__11868));
var colls = cljs.core.rest(cljs.core.next(arglist__11868));
return G__11866__delegate.call(this, f, coll, colls);
});
return G__11866;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11863.call(this,f,coll);
default:
return mapcat__11864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11864.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11873))
{var s__11875 = temp__3698__auto____11873;

var f__11876 = cljs.core.first.call(null,s__11875);
var r__11877 = cljs.core.rest.call(null,s__11875);

if(cljs.core.truth_(pred.call(null,f__11876)))
{return cljs.core.cons.call(null,f__11876,filter.call(null,pred,r__11877));
} else
{return filter.call(null,pred,r__11877);
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
var walk__11894 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11894.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11885_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11885_SHARP_));
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
var partition__11951 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11952 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11942 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11942))
{var s__11943 = temp__3698__auto____11942;

var p__11944 = cljs.core.take.call(null,n,s__11943);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11944))))
{return cljs.core.cons.call(null,p__11944,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11943)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11953 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11946))
{var s__11947 = temp__3698__auto____11946;

var p__11948 = cljs.core.take.call(null,n,s__11947);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11948))))
{return cljs.core.cons.call(null,p__11948,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11947)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11948,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11951.call(this,n,step);
case  3 :
return partition__11952.call(this,n,step,pad);
case  4 :
return partition__11953.call(this,n,step,pad,coll);
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
var get_in__11969 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11970 = (function (m,ks,not_found){
var sentinel__11960 = cljs.core.lookup_sentinel;
var m__11961 = m;
var ks__11962 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11962))
{var m__11963 = cljs.core.get.call(null,m__11961,cljs.core.first.call(null,ks__11962),sentinel__11960);

if(cljs.core.truth_((sentinel__11960 === m__11963)))
{return not_found;
} else
{{
var G__11973 = sentinel__11960;
var G__11974 = m__11963;
var G__11975 = cljs.core.next.call(null,ks__11962);
sentinel__11960 = G__11973;
m__11961 = G__11974;
ks__11962 = G__11975;
continue;
}
}
} else
{return m__11961;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11969.call(this,m,ks);
case  3 :
return get_in__11970.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11977,v){
var vec__11978__11979 = p__11977;
var k__11980 = cljs.core.nth.call(null,vec__11978__11979,0,null);
var ks__11981 = cljs.core.nthnext.call(null,vec__11978__11979,1);

if(cljs.core.truth_(ks__11981))
{return cljs.core.assoc.call(null,m,k__11980,assoc_in.call(null,cljs.core.get.call(null,m,k__11980),ks__11981,v));
} else
{return cljs.core.assoc.call(null,m,k__11980,v);
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
var update_in__delegate = function (m,p__11987,f,args){
var vec__11989__11990 = p__11987;
var k__11991 = cljs.core.nth.call(null,vec__11989__11990,0,null);
var ks__11992 = cljs.core.nthnext.call(null,vec__11989__11990,1);

if(cljs.core.truth_(ks__11992))
{return cljs.core.assoc.call(null,m,k__11991,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11991),ks__11992,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11991,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11991),args));
}
};
var update_in = function (m,p__11987,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11987, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12073){
var m = cljs.core.first(arglist__12073);
var p__11987 = cljs.core.first(cljs.core.next(arglist__12073));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12073)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12073)));
return update_in__delegate.call(this, m, p__11987, f, args);
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
var this__12091 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12200 = null;
var G__12200__12201 = (function (coll,k){
var this__12096 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12200__12202 = (function (coll,k,not_found){
var this__12097 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12200 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12200__12201.call(this,coll,k);
case  3 :
return G__12200__12202.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12200;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12101 = this;
var new_array__12104 = cljs.core.aclone.call(null,this__12101.array);

(new_array__12104[k] = v);
return (new cljs.core.Vector(this__12101.meta,new_array__12104));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12213 = null;
var G__12213__12214 = (function (coll,k){
var this__12109 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12213__12215 = (function (coll,k,not_found){
var this__12110 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12213 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12213__12214.call(this,coll,k);
case  3 :
return G__12213__12215.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12213;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12111 = this;
var new_array__12112 = cljs.core.aclone.call(null,this__12111.array);

new_array__12112.push(o);
return (new cljs.core.Vector(this__12111.meta,new_array__12112));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12240 = null;
var G__12240__12241 = (function (v,f){
var this__12113 = this;
return cljs.core.ci_reduce.call(null,this__12113.array,f);
});
var G__12240__12242 = (function (v,f,start){
var this__12114 = this;
return cljs.core.ci_reduce.call(null,this__12114.array,f,start);
});
G__12240 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12240__12241.call(this,v,f);
case  3 :
return G__12240__12242.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12240;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12119 = this;
if(cljs.core.truth_((this__12119.array.length > 0)))
{var vector_seq__12126 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12119.array.length)))
{return cljs.core.cons.call(null,(this__12119.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12126.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12129 = this;
return this__12129.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12130 = this;
var count__12176 = this__12130.array.length;

if(cljs.core.truth_((count__12176 > 0)))
{return (this__12130.array[(count__12176 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12177 = this;
if(cljs.core.truth_((this__12177.array.length > 0)))
{var new_array__12178 = cljs.core.aclone.call(null,this__12177.array);

new_array__12178.pop();
return (new cljs.core.Vector(this__12177.meta,new_array__12178));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12183 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12184 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12185 = this;
return (new cljs.core.Vector(meta,this__12185.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12186 = this;
return this__12186.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12252 = null;
var G__12252__12254 = (function (coll,n){
var this__12187 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12188 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12188))
{return (n < this__12187.array.length);
} else
{return and__3546__auto____12188;
}
})()))
{return (this__12187.array[n]);
} else
{return null;
}
});
var G__12252__12257 = (function (coll,n,not_found){
var this__12193 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12194 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12194))
{return (n < this__12193.array.length);
} else
{return and__3546__auto____12194;
}
})()))
{return (this__12193.array[n]);
} else
{return not_found;
}
});
G__12252 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12252__12254.call(this,coll,n);
case  3 :
return G__12252__12257.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12252;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12195 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12195.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12373){
var args = cljs.core.seq( arglist__12373 );;
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
var this__12391 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12461 = null;
var G__12461__12462 = (function (coll,k){
var this__12423 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12461__12463 = (function (coll,k,not_found){
var this__12424 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12461 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12461__12462.call(this,coll,k);
case  3 :
return G__12461__12463.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12461;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12425 = this;
var v_pos__12426 = (this__12425.start + key);

return (new cljs.core.Subvec(this__12425.meta,cljs.core._assoc.call(null,this__12425.v,v_pos__12426,val),this__12425.start,((this__12425.end > (v_pos__12426 + 1)) ? this__12425.end : (v_pos__12426 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12565 = null;
var G__12565__12566 = (function (coll,k){
var this__12427 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12565__12567 = (function (coll,k,not_found){
var this__12428 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12565 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12565__12566.call(this,coll,k);
case  3 :
return G__12565__12567.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12565;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12429 = this;
return (new cljs.core.Subvec(this__12429.meta,cljs.core._assoc_n.call(null,this__12429.v,this__12429.end,o),this__12429.start,(this__12429.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12574 = null;
var G__12574__12575 = (function (coll,f){
var this__12430 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12574__12576 = (function (coll,f,start){
var this__12431 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12574 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12574__12575.call(this,coll,f);
case  3 :
return G__12574__12576.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12574;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12432 = this;
var subvec_seq__12434 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12432.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12432.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12434.call(null,this__12432.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12436 = this;
return (this__12436.end - this__12436.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12439 = this;
return cljs.core._nth.call(null,this__12439.v,(this__12439.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12440 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12440.start,this__12440.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12440.meta,this__12440.v,this__12440.start,(this__12440.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12443 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12445 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12446 = this;
return (new cljs.core.Subvec(meta,this__12446.v,this__12446.start,this__12446.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12448 = this;
return this__12448.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12597 = null;
var G__12597__12598 = (function (coll,n){
var this__12454 = this;
return cljs.core._nth.call(null,this__12454.v,(this__12454.start + n));
});
var G__12597__12599 = (function (coll,n,not_found){
var this__12455 = this;
return cljs.core._nth.call(null,this__12455.v,(this__12455.start + n),not_found);
});
G__12597 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12597__12598.call(this,coll,n);
case  3 :
return G__12597__12599.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12597;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12458 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12458.meta);
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
var subvec__12616 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12617 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12616.call(this,v,start);
case  3 :
return subvec__12617.call(this,v,start,end);
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
var this__12631 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12632 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12633 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12634 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12634.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12635 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12636 = this;
return cljs.core._first.call(null,this__12636.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12637 = this;
var temp__3695__auto____12638 = cljs.core.next.call(null,this__12637.front);

if(cljs.core.truth_(temp__3695__auto____12638))
{var f1__12639 = temp__3695__auto____12638;

return (new cljs.core.PersistentQueueSeq(this__12637.meta,f1__12639,this__12637.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12637.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12637.meta,this__12637.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12640 = this;
return this__12640.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12641 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12641.front,this__12641.rear));
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
var this__12654 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12655 = this;
if(cljs.core.truth_(this__12655.front))
{return (new cljs.core.PersistentQueue(this__12655.meta,(this__12655.count + 1),this__12655.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12657 = this__12655.rear;

if(cljs.core.truth_(or__3548__auto____12657))
{return or__3548__auto____12657;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12655.meta,(this__12655.count + 1),cljs.core.conj.call(null,this__12655.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12658 = this;
var rear__12663 = cljs.core.seq.call(null,this__12658.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12664 = this__12658.front;

if(cljs.core.truth_(or__3548__auto____12664))
{return or__3548__auto____12664;
} else
{return rear__12663;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12658.front,cljs.core.seq.call(null,rear__12663)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12665 = this;
return this__12665.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12666 = this;
return cljs.core._first.call(null,this__12666.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12667 = this;
if(cljs.core.truth_(this__12667.front))
{var temp__3695__auto____12669 = cljs.core.next.call(null,this__12667.front);

if(cljs.core.truth_(temp__3695__auto____12669))
{var f1__12671 = temp__3695__auto____12669;

return (new cljs.core.PersistentQueue(this__12667.meta,(this__12667.count - 1),f1__12671,this__12667.rear));
} else
{return (new cljs.core.PersistentQueue(this__12667.meta,(this__12667.count - 1),cljs.core.seq.call(null,this__12667.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12674 = this;
return cljs.core.first.call(null,this__12674.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12676 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12683 = this;
return (new cljs.core.PersistentQueue(meta,this__12683.count,this__12683.front,this__12683.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12685 = this;
return this__12685.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12687 = this;
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
var this__12744 = this;
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
var len__12767 = array.length;

var i__12769 = 0;

while(true){
if(cljs.core.truth_((i__12769 < len__12767)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12769]))))
{return i__12769;
} else
{{
var G__12825 = (i__12769 + incr);
i__12769 = G__12825;
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
var obj_map_contains_key_QMARK___12832 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12833 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12830 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12830))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12830;
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
return obj_map_contains_key_QMARK___12832.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12833.call(this,k,strobj,true_val,false_val);
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
var this__12873 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12953 = null;
var G__12953__12954 = (function (coll,k){
var this__12875 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12953__12955 = (function (coll,k,not_found){
var this__12876 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12876.strobj,(this__12876.strobj[k]),not_found);
});
G__12953 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12953__12954.call(this,coll,k);
case  3 :
return G__12953__12955.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12953;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12878 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12879 = goog.object.clone.call(null,this__12878.strobj);
var overwrite_QMARK___12880 = new_strobj__12879.hasOwnProperty(k);

(new_strobj__12879[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12880))
{return (new cljs.core.ObjMap(this__12878.meta,this__12878.keys,new_strobj__12879));
} else
{var new_keys__12883 = cljs.core.aclone.call(null,this__12878.keys);

new_keys__12883.push(k);
return (new cljs.core.ObjMap(this__12878.meta,new_keys__12883,new_strobj__12879));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12878.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12887 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12887.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12970 = null;
var G__12970__12972 = (function (coll,k){
var this__12891 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12970__12974 = (function (coll,k,not_found){
var this__12893 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12970 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12970__12972.call(this,coll,k);
case  3 :
return G__12970__12974.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12970;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12898 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12906 = this;
if(cljs.core.truth_((this__12906.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12858_SHARP_){
return cljs.core.vector.call(null,p1__12858_SHARP_,(this__12906.strobj[p1__12858_SHARP_]));
}),this__12906.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12915 = this;
return this__12915.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12919 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12921 = this;
return (new cljs.core.ObjMap(meta,this__12921.keys,this__12921.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12923 = this;
return this__12923.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12930 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12930.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12936 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12937 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12937))
{return this__12936.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12937;
}
})()))
{var new_keys__12941 = cljs.core.aclone.call(null,this__12936.keys);
var new_strobj__12942 = goog.object.clone.call(null,this__12936.strobj);

new_keys__12941.splice(cljs.core.scan_array.call(null,1,k,new_keys__12941),1);
cljs.core.js_delete.call(null,new_strobj__12942,k);
return (new cljs.core.ObjMap(this__12936.meta,new_keys__12941,new_strobj__12942));
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
var this__13008 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13095 = null;
var G__13095__13096 = (function (coll,k){
var this__13010 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13095__13097 = (function (coll,k,not_found){
var this__13013 = this;
var bucket__13014 = (this__13013.hashobj[cljs.core.hash.call(null,k)]);
var i__13016 = (cljs.core.truth_(bucket__13014)?cljs.core.scan_array.call(null,2,k,bucket__13014):null);

if(cljs.core.truth_(i__13016))
{return (bucket__13014[(i__13016 + 1)]);
} else
{return not_found;
}
});
G__13095 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13095__13096.call(this,coll,k);
case  3 :
return G__13095__13097.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13095;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13017 = this;
var h__13018 = cljs.core.hash.call(null,k);
var bucket__13019 = (this__13017.hashobj[h__13018]);

if(cljs.core.truth_(bucket__13019))
{var new_bucket__13020 = cljs.core.aclone.call(null,bucket__13019);
var new_hashobj__13021 = goog.object.clone.call(null,this__13017.hashobj);

(new_hashobj__13021[h__13018] = new_bucket__13020);
var temp__3695__auto____13024 = cljs.core.scan_array.call(null,2,k,new_bucket__13020);

if(cljs.core.truth_(temp__3695__auto____13024))
{var i__13025 = temp__3695__auto____13024;

(new_bucket__13020[(i__13025 + 1)] = v);
return (new cljs.core.HashMap(this__13017.meta,this__13017.count,new_hashobj__13021));
} else
{new_bucket__13020.push(k,v);
return (new cljs.core.HashMap(this__13017.meta,(this__13017.count + 1),new_hashobj__13021));
}
} else
{var new_hashobj__13029 = goog.object.clone.call(null,this__13017.hashobj);

(new_hashobj__13029[h__13018] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13017.meta,(this__13017.count + 1),new_hashobj__13029));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13030 = this;
var bucket__13033 = (this__13030.hashobj[cljs.core.hash.call(null,k)]);
var i__13035 = (cljs.core.truth_(bucket__13033)?cljs.core.scan_array.call(null,2,k,bucket__13033):null);

if(cljs.core.truth_(i__13035))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13115 = null;
var G__13115__13117 = (function (coll,k){
var this__13036 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13115__13118 = (function (coll,k,not_found){
var this__13039 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13115 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13115__13117.call(this,coll,k);
case  3 :
return G__13115__13118.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13115;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13040 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13047 = this;
if(cljs.core.truth_((this__13047.count > 0)))
{var hashes__13054 = cljs.core.js_keys.call(null,this__13047.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12999_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13047.hashobj[p1__12999_SHARP_])));
}),hashes__13054);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13059 = this;
return this__13059.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13062 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13068 = this;
return (new cljs.core.HashMap(meta,this__13068.count,this__13068.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13073 = this;
return this__13073.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13075 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13075.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13077 = this;
var h__13080 = cljs.core.hash.call(null,k);
var bucket__13081 = (this__13077.hashobj[h__13080]);
var i__13083 = (cljs.core.truth_(bucket__13081)?cljs.core.scan_array.call(null,2,k,bucket__13081):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13083)))
{return coll;
} else
{var new_hashobj__13085 = goog.object.clone.call(null,this__13077.hashobj);

if(cljs.core.truth_((3 > bucket__13081.length)))
{cljs.core.js_delete.call(null,new_hashobj__13085,h__13080);
} else
{var new_bucket__13089 = cljs.core.aclone.call(null,bucket__13081);

new_bucket__13089.splice(i__13083,2);
(new_hashobj__13085[h__13080] = new_bucket__13089);
}
return (new cljs.core.HashMap(this__13077.meta,(this__13077.count - 1),new_hashobj__13085));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13132 = ks.length;

var i__13133 = 0;
var out__13182 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13133 < len__13132)))
{{
var G__13187 = (i__13133 + 1);
var G__13188 = cljs.core.assoc.call(null,out__13182,(ks[i__13133]),(vs[i__13133]));
i__13133 = G__13187;
out__13182 = G__13188;
continue;
}
} else
{return out__13182;
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
var in$__13192 = cljs.core.seq.call(null,keyvals);
var out__13194 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13192))
{{
var G__13203 = cljs.core.nnext.call(null,in$__13192);
var G__13204 = cljs.core.assoc.call(null,out__13194,cljs.core.first.call(null,in$__13192),cljs.core.second.call(null,in$__13192));
in$__13192 = G__13203;
out__13194 = G__13204;
continue;
}
} else
{return out__13194;
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
hash_map.cljs$lang$applyTo = (function (arglist__13207){
var keyvals = cljs.core.seq( arglist__13207 );;
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
{return cljs.core.reduce.call(null,(function (p1__13211_SHARP_,p2__13212_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13226 = p1__13211_SHARP_;

if(cljs.core.truth_(or__3548__auto____13226))
{return or__3548__auto____13226;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13212_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13230){
var maps = cljs.core.seq( arglist__13230 );;
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
{var merge_entry__13269 = (function (m,e){
var k__13231 = cljs.core.first.call(null,e);
var v__13232 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13231)))
{return cljs.core.assoc.call(null,m,k__13231,f.call(null,cljs.core.get.call(null,m,k__13231),v__13232));
} else
{return cljs.core.assoc.call(null,m,k__13231,v__13232);
}
});
var merge2__13271 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13269,(function (){var or__3548__auto____13270 = m1;

if(cljs.core.truth_(or__3548__auto____13270))
{return or__3548__auto____13270;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13271,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13275){
var f = cljs.core.first(arglist__13275);
var maps = cljs.core.rest(arglist__13275);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13279 = cljs.core.ObjMap.fromObject([],{});
var keys__13280 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13280))
{var key__13281 = cljs.core.first.call(null,keys__13280);
var entry__13282 = cljs.core.get.call(null,map,key__13281,"﷐'user/not-found");

{
var G__13286 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13282,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13279,key__13281,entry__13282):ret__13279);
var G__13287 = cljs.core.next.call(null,keys__13280);
ret__13279 = G__13286;
keys__13280 = G__13287;
continue;
}
} else
{return ret__13279;
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
var this__13290 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13438 = null;
var G__13438__13439 = (function (coll,v){
var this__13294 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13438__13440 = (function (coll,v,not_found){
var this__13297 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13297.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13438 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13438__13439.call(this,coll,v);
case  3 :
return G__13438__13440.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13438;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13447 = null;
var G__13447__13470 = (function (coll,k){
var this__13405 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13447__13471 = (function (coll,k,not_found){
var this__13408 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13447 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13447__13470.call(this,coll,k);
case  3 :
return G__13447__13471.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13447;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13411 = this;
return (new cljs.core.Set(this__13411.meta,cljs.core.assoc.call(null,this__13411.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13412 = this;
return cljs.core.keys.call(null,this__13412.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13413 = this;
return (new cljs.core.Set(this__13413.meta,cljs.core.dissoc.call(null,this__13413.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13418 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13423 = this;
var and__3546__auto____13425 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13425))
{var and__3546__auto____13426 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13426))
{return cljs.core.every_QMARK_.call(null,(function (p1__13276_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13276_SHARP_);
}),other);
} else
{return and__3546__auto____13426;
}
} else
{return and__3546__auto____13425;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13430 = this;
return (new cljs.core.Set(meta,this__13430.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13431 = this;
return this__13431.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13434 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13434.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13503 = cljs.core.seq.call(null,coll);
var out__13504 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13503))))
{{
var G__13511 = cljs.core.rest.call(null,in$__13503);
var G__13512 = cljs.core.conj.call(null,out__13504,cljs.core.first.call(null,in$__13503));
in$__13503 = G__13511;
out__13504 = G__13512;
continue;
}
} else
{return out__13504;
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
{var n__13515 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13516 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13516))
{var e__13517 = temp__3695__auto____13516;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13517));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13515,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13491_SHARP_){
var temp__3695__auto____13524 = cljs.core.find.call(null,smap,p1__13491_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13524))
{var e__13525 = temp__3695__auto____13524;

return cljs.core.second.call(null,e__13525);
} else
{return p1__13491_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13548 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13535,seen){
while(true){
var vec__13538__13539 = p__13535;
var f__13540 = cljs.core.nth.call(null,vec__13538__13539,0,null);
var xs__13541 = vec__13538__13539;

var temp__3698__auto____13543 = cljs.core.seq.call(null,xs__13541);

if(cljs.core.truth_(temp__3698__auto____13543))
{var s__13544 = temp__3698__auto____13543;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13540)))
{{
var G__13555 = cljs.core.rest.call(null,s__13544);
var G__13556 = seen;
p__13535 = G__13555;
seen = G__13556;
continue;
}
} else
{return cljs.core.cons.call(null,f__13540,step.call(null,cljs.core.rest.call(null,s__13544),cljs.core.conj.call(null,seen,f__13540)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13548.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13565 = cljs.core.Vector.fromArray([]);
var s__13567 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13567)))
{{
var G__13568 = cljs.core.conj.call(null,ret__13565,cljs.core.first.call(null,s__13567));
var G__13569 = cljs.core.next.call(null,s__13567);
ret__13565 = G__13568;
s__13567 = G__13569;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13565);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13570 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13570))
{return or__3548__auto____13570;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13573 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13573 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13573 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13577 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13577))
{return or__3548__auto____13577;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13578 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13578 > -1)))
{return cljs.core.subs.call(null,x,2,i__13578);
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
var map__13586 = cljs.core.ObjMap.fromObject([],{});
var ks__13587 = cljs.core.seq.call(null,keys);
var vs__13589 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13591 = ks__13587;

if(cljs.core.truth_(and__3546__auto____13591))
{return vs__13589;
} else
{return and__3546__auto____13591;
}
})()))
{{
var G__13602 = cljs.core.assoc.call(null,map__13586,cljs.core.first.call(null,ks__13587),cljs.core.first.call(null,vs__13589));
var G__13603 = cljs.core.next.call(null,ks__13587);
var G__13604 = cljs.core.next.call(null,vs__13589);
map__13586 = G__13602;
ks__13587 = G__13603;
vs__13589 = G__13604;
continue;
}
} else
{return map__13586;
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
var max_key__13617 = (function (k,x){
return x;
});
var max_key__13618 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13619 = (function() { 
var G__13623__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13581_SHARP_,p2__13582_SHARP_){
return max_key.call(null,k,p1__13581_SHARP_,p2__13582_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13623 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13623__delegate.call(this, k, x, y, more);
};
G__13623.cljs$lang$maxFixedArity = 3;
G__13623.cljs$lang$applyTo = (function (arglist__13633){
var k = cljs.core.first(arglist__13633);
var x = cljs.core.first(cljs.core.next(arglist__13633));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13633)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13633)));
return G__13623__delegate.call(this, k, x, y, more);
});
return G__13623;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13617.call(this,k,x);
case  3 :
return max_key__13618.call(this,k,x,y);
default:
return max_key__13619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13619.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13638 = (function (k,x){
return x;
});
var min_key__13639 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13640 = (function() { 
var G__13644__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13609_SHARP_,p2__13610_SHARP_){
return min_key.call(null,k,p1__13609_SHARP_,p2__13610_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13644 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13644__delegate.call(this, k, x, y, more);
};
G__13644.cljs$lang$maxFixedArity = 3;
G__13644.cljs$lang$applyTo = (function (arglist__13645){
var k = cljs.core.first(arglist__13645);
var x = cljs.core.first(cljs.core.next(arglist__13645));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13645)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13645)));
return G__13644__delegate.call(this, k, x, y, more);
});
return G__13644;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13638.call(this,k,x);
case  3 :
return min_key__13639.call(this,k,x,y);
default:
return min_key__13640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13640.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13657 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13658 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13652 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13652))
{var s__13654 = temp__3698__auto____13652;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13654),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13654)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13657.call(this,n,step);
case  3 :
return partition_all__13658.call(this,n,step,coll);
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
var temp__3698__auto____13675 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13675))
{var s__13676 = temp__3698__auto____13675;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13676))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13676),take_while.call(null,pred,cljs.core.rest.call(null,s__13676)));
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
var this__13706 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13710 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13753 = null;
var G__13753__13754 = (function (rng,f){
var this__13713 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13753__13755 = (function (rng,f,s){
var this__13715 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13753 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13753__13754.call(this,rng,f);
case  3 :
return G__13753__13755.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13753;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13717 = this;
var comp__13719 = (cljs.core.truth_((this__13717.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13719.call(null,this__13717.start,this__13717.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13722 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13722.end - this__13722.start) / this__13722.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13728 = this;
return this__13728.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13729 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13729.meta,(this__13729.start + this__13729.step),this__13729.end,this__13729.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13730 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13739 = this;
return (new cljs.core.Range(meta,this__13739.start,this__13739.end,this__13739.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13741 = this;
return this__13741.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13775 = null;
var G__13775__13776 = (function (rng,n){
var this__13742 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13742.start + (n * this__13742.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13743 = (this__13742.start > this__13742.end);

if(cljs.core.truth_(and__3546__auto____13743))
{return cljs.core._EQ_.call(null,this__13742.step,0);
} else
{return and__3546__auto____13743;
}
})()))
{return this__13742.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13775__13777 = (function (rng,n,not_found){
var this__13744 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13744.start + (n * this__13744.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13745 = (this__13744.start > this__13744.end);

if(cljs.core.truth_(and__3546__auto____13745))
{return cljs.core._EQ_.call(null,this__13744.step,0);
} else
{return and__3546__auto____13745;
}
})()))
{return this__13744.start;
} else
{return not_found;
}
}
});
G__13775 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13775__13776.call(this,rng,n);
case  3 :
return G__13775__13777.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13775;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13752 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13752.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13789 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13790 = (function (end){
return range.call(null,0,end,1);
});
var range__13791 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13792 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13789.call(this);
case  1 :
return range__13790.call(this,start);
case  2 :
return range__13791.call(this,start,end);
case  3 :
return range__13792.call(this,start,end,step);
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
var temp__3698__auto____13799 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13799))
{var s__13800 = temp__3698__auto____13799;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13800),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13800)));
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
var temp__3698__auto____13804 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13804))
{var s__13808 = temp__3698__auto____13804;

var fst__13809 = cljs.core.first.call(null,s__13808);
var fv__13810 = f.call(null,fst__13809);
var run__13811 = cljs.core.cons.call(null,fst__13809,cljs.core.take_while.call(null,(function (p1__13801_SHARP_){
return cljs.core._EQ_.call(null,fv__13810,f.call(null,p1__13801_SHARP_));
}),cljs.core.next.call(null,s__13808)));

return cljs.core.cons.call(null,run__13811,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13811),s__13808))));
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
var reductions__13964 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13951 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13951))
{var s__13952 = temp__3695__auto____13951;

return reductions.call(null,f,cljs.core.first.call(null,s__13952),cljs.core.rest.call(null,s__13952));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13965 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13961 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13961))
{var s__13963 = temp__3698__auto____13961;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13963)),cljs.core.rest.call(null,s__13963));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13964.call(this,f,init);
case  3 :
return reductions__13965.call(this,f,init,coll);
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
var juxt__14004 = (function (f){
return (function() {
var G__14010 = null;
var G__14010__14011 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14010__14012 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14010__14013 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14010__14014 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14010__14015 = (function() { 
var G__14022__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14022__delegate.call(this, x, y, z, args);
};
G__14022.cljs$lang$maxFixedArity = 3;
G__14022.cljs$lang$applyTo = (function (arglist__14026){
var x = cljs.core.first(arglist__14026);
var y = cljs.core.first(cljs.core.next(arglist__14026));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14026)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14026)));
return G__14022__delegate.call(this, x, y, z, args);
});
return G__14022;
})()
;
G__14010 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14010__14011.call(this);
case  1 :
return G__14010__14012.call(this,x);
case  2 :
return G__14010__14013.call(this,x,y);
case  3 :
return G__14010__14014.call(this,x,y,z);
default:
return G__14010__14015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14010.cljs$lang$maxFixedArity = 3;
G__14010.cljs$lang$applyTo = G__14010__14015.cljs$lang$applyTo;
return G__14010;
})()
});
var juxt__14005 = (function (f,g){
return (function() {
var G__14029 = null;
var G__14029__14030 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14029__14031 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14029__14032 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14029__14033 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14029__14035 = (function() { 
var G__14039__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14039 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14039__delegate.call(this, x, y, z, args);
};
G__14039.cljs$lang$maxFixedArity = 3;
G__14039.cljs$lang$applyTo = (function (arglist__14049){
var x = cljs.core.first(arglist__14049);
var y = cljs.core.first(cljs.core.next(arglist__14049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14049)));
return G__14039__delegate.call(this, x, y, z, args);
});
return G__14039;
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
return G__14029__14035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14029.cljs$lang$maxFixedArity = 3;
G__14029.cljs$lang$applyTo = G__14029__14035.cljs$lang$applyTo;
return G__14029;
})()
});
var juxt__14006 = (function (f,g,h){
return (function() {
var G__14052 = null;
var G__14052__14053 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14052__14054 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14052__14055 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14052__14056 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14052__14057 = (function() { 
var G__14064__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14064__delegate.call(this, x, y, z, args);
};
G__14064.cljs$lang$maxFixedArity = 3;
G__14064.cljs$lang$applyTo = (function (arglist__14074){
var x = cljs.core.first(arglist__14074);
var y = cljs.core.first(cljs.core.next(arglist__14074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14074)));
return G__14064__delegate.call(this, x, y, z, args);
});
return G__14064;
})()
;
G__14052 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14052__14053.call(this);
case  1 :
return G__14052__14054.call(this,x);
case  2 :
return G__14052__14055.call(this,x,y);
case  3 :
return G__14052__14056.call(this,x,y,z);
default:
return G__14052__14057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14052.cljs$lang$maxFixedArity = 3;
G__14052.cljs$lang$applyTo = G__14052__14057.cljs$lang$applyTo;
return G__14052;
})()
});
var juxt__14007 = (function() { 
var G__14077__delegate = function (f,g,h,fs){
var fs__13985 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14079 = null;
var G__14079__14080 = (function (){
return cljs.core.reduce.call(null,(function (p1__13840_SHARP_,p2__13841_SHARP_){
return cljs.core.conj.call(null,p1__13840_SHARP_,p2__13841_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13985);
});
var G__14079__14081 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13842_SHARP_,p2__13843_SHARP_){
return cljs.core.conj.call(null,p1__13842_SHARP_,p2__13843_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13985);
});
var G__14079__14082 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13846_SHARP_,p2__13940_SHARP_){
return cljs.core.conj.call(null,p1__13846_SHARP_,p2__13940_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13985);
});
var G__14079__14083 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13942_SHARP_,p2__13943_SHARP_){
return cljs.core.conj.call(null,p1__13942_SHARP_,p2__13943_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13985);
});
var G__14079__14084 = (function() { 
var G__14092__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13944_SHARP_,p2__13945_SHARP_){
return cljs.core.conj.call(null,p1__13944_SHARP_,cljs.core.apply.call(null,p2__13945_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13985);
};
var G__14092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14092__delegate.call(this, x, y, z, args);
};
G__14092.cljs$lang$maxFixedArity = 3;
G__14092.cljs$lang$applyTo = (function (arglist__14223){
var x = cljs.core.first(arglist__14223);
var y = cljs.core.first(cljs.core.next(arglist__14223));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14223)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14223)));
return G__14092__delegate.call(this, x, y, z, args);
});
return G__14092;
})()
;
G__14079 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14079__14080.call(this);
case  1 :
return G__14079__14081.call(this,x);
case  2 :
return G__14079__14082.call(this,x,y);
case  3 :
return G__14079__14083.call(this,x,y,z);
default:
return G__14079__14084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14079.cljs$lang$maxFixedArity = 3;
G__14079.cljs$lang$applyTo = G__14079__14084.cljs$lang$applyTo;
return G__14079;
})()
};
var G__14077 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14077__delegate.call(this, f, g, h, fs);
};
G__14077.cljs$lang$maxFixedArity = 3;
G__14077.cljs$lang$applyTo = (function (arglist__14225){
var f = cljs.core.first(arglist__14225);
var g = cljs.core.first(cljs.core.next(arglist__14225));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14225)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14225)));
return G__14077__delegate.call(this, f, g, h, fs);
});
return G__14077;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14004.call(this,f);
case  2 :
return juxt__14005.call(this,f,g);
case  3 :
return juxt__14006.call(this,f,g,h);
default:
return juxt__14007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14007.cljs$lang$applyTo;
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
var dorun__14238 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14244 = cljs.core.next.call(null,coll);
coll = G__14244;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14239 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14227 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14227))
{return (n > 0);
} else
{return and__3546__auto____14227;
}
})()))
{{
var G__14247 = (n - 1);
var G__14248 = cljs.core.next.call(null,coll);
n = G__14247;
coll = G__14248;
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
return dorun__14238.call(this,n);
case  2 :
return dorun__14239.call(this,n,coll);
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
var doall__14256 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14257 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14256.call(this,n);
case  2 :
return doall__14257.call(this,n,coll);
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
var matches__14266 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14266),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14266),1)))
{return cljs.core.first.call(null,matches__14266);
} else
{return cljs.core.vec.call(null,matches__14266);
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
var matches__14271 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14271)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14271),1)))
{return cljs.core.first.call(null,matches__14271);
} else
{return cljs.core.vec.call(null,matches__14271);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14283 = cljs.core.re_find.call(null,re,s);
var match_idx__14284 = s.search(re);
var match_str__14288 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14283))?cljs.core.first.call(null,match_data__14283):match_data__14283);
var post_match__14290 = cljs.core.subs.call(null,s,(match_idx__14284 + cljs.core.count.call(null,match_str__14288)));

if(cljs.core.truth_(match_data__14283))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14283,re_seq.call(null,re,post_match__14290));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14298_SHARP_){
return print_one.call(null,p1__14298_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14340 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14340))
{var and__3546__auto____14384 = (function (){var x__445__auto____14342 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14345 = x__445__auto____14342;

if(cljs.core.truth_(and__3546__auto____14345))
{var and__3546__auto____14349 = x__445__auto____14342.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14349))
{return cljs.core.not.call(null,x__445__auto____14342.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14349;
}
} else
{return and__3546__auto____14345;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14342);
}
})();

if(cljs.core.truth_(and__3546__auto____14384))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14384;
}
} else
{return and__3546__auto____14340;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14385 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14387 = x__445__auto____14385;

if(cljs.core.truth_(and__3546__auto____14387))
{var and__3546__auto____14388 = x__445__auto____14385.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14388))
{return cljs.core.not.call(null,x__445__auto____14385.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14388;
}
} else
{return and__3546__auto____14387;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14385);
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
var first_obj__14413 = cljs.core.first.call(null,objs);
var sb__14414 = (new goog.string.StringBuffer());

var G__14416__14417 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14416__14417))
{var obj__14419 = cljs.core.first.call(null,G__14416__14417);
var G__14416__14420 = G__14416__14417;

while(true){
if(cljs.core.truth_((obj__14419 === first_obj__14413)))
{} else
{sb__14414.append(" ");
}
var G__14422__14424 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14419,opts));

if(cljs.core.truth_(G__14422__14424))
{var string__14426 = cljs.core.first.call(null,G__14422__14424);
var G__14422__14427 = G__14422__14424;

while(true){
sb__14414.append(string__14426);
var temp__3698__auto____14428 = cljs.core.next.call(null,G__14422__14427);

if(cljs.core.truth_(temp__3698__auto____14428))
{var G__14422__14430 = temp__3698__auto____14428;

{
var G__14436 = cljs.core.first.call(null,G__14422__14430);
var G__14437 = G__14422__14430;
string__14426 = G__14436;
G__14422__14427 = G__14437;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14432 = cljs.core.next.call(null,G__14416__14420);

if(cljs.core.truth_(temp__3698__auto____14432))
{var G__14416__14433 = temp__3698__auto____14432;

{
var G__14439 = cljs.core.first.call(null,G__14416__14433);
var G__14440 = G__14416__14433;
obj__14419 = G__14439;
G__14416__14420 = G__14440;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14414);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14450 = cljs.core.first.call(null,objs);

var G__14452__14454 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14452__14454))
{var obj__14458 = cljs.core.first.call(null,G__14452__14454);
var G__14452__14459 = G__14452__14454;

while(true){
if(cljs.core.truth_((obj__14458 === first_obj__14450)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14461__14463 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14458,opts));

if(cljs.core.truth_(G__14461__14463))
{var string__14464 = cljs.core.first.call(null,G__14461__14463);
var G__14461__14465 = G__14461__14463;

while(true){
cljs.core.string_print.call(null,string__14464);
var temp__3698__auto____14467 = cljs.core.next.call(null,G__14461__14465);

if(cljs.core.truth_(temp__3698__auto____14467))
{var G__14461__14468 = temp__3698__auto____14467;

{
var G__14485 = cljs.core.first.call(null,G__14461__14468);
var G__14486 = G__14461__14468;
string__14464 = G__14485;
G__14461__14465 = G__14486;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14469 = cljs.core.next.call(null,G__14452__14459);

if(cljs.core.truth_(temp__3698__auto____14469))
{var G__14452__14470 = temp__3698__auto____14469;

{
var G__14492 = cljs.core.first.call(null,G__14452__14470);
var G__14493 = G__14452__14470;
obj__14458 = G__14492;
G__14452__14459 = G__14493;
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
pr_str.cljs$lang$applyTo = (function (arglist__14517){
var objs = cljs.core.seq( arglist__14517 );;
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
pr.cljs$lang$applyTo = (function (arglist__14543){
var objs = cljs.core.seq( arglist__14543 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14545){
var objs = cljs.core.seq( arglist__14545 );;
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
println.cljs$lang$applyTo = (function (arglist__14552){
var objs = cljs.core.seq( arglist__14552 );;
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
prn.cljs$lang$applyTo = (function (arglist__14558){
var objs = cljs.core.seq( arglist__14558 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14561 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14561,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14583 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14583))
{var nspc__14586 = temp__3698__auto____14583;

return cljs.core.str.call(null,nspc__14586,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14597 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14597))
{var nspc__14600 = temp__3698__auto____14597;

return cljs.core.str.call(null,nspc__14600,"/");
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
var pr_pair__14618 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14618,"{",", ","}",opts,coll);
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
var this__14687 = this;
var G__14689__14691 = cljs.core.seq.call(null,this__14687.watches);

if(cljs.core.truth_(G__14689__14691))
{var G__14695__14698 = cljs.core.first.call(null,G__14689__14691);
var vec__14697__14699 = G__14695__14698;
var key__14700 = cljs.core.nth.call(null,vec__14697__14699,0,null);
var f__14701 = cljs.core.nth.call(null,vec__14697__14699,1,null);
var G__14689__14702 = G__14689__14691;

var G__14695__14703 = G__14695__14698;
var G__14689__14704 = G__14689__14702;

while(true){
var vec__14705__14706 = G__14695__14703;
var key__14707 = cljs.core.nth.call(null,vec__14705__14706,0,null);
var f__14708 = cljs.core.nth.call(null,vec__14705__14706,1,null);
var G__14689__14709 = G__14689__14704;

f__14708.call(null,key__14707,this$,oldval,newval);
var temp__3698__auto____14710 = cljs.core.next.call(null,G__14689__14709);

if(cljs.core.truth_(temp__3698__auto____14710))
{var G__14689__14711 = temp__3698__auto____14710;

{
var G__14736 = cljs.core.first.call(null,G__14689__14711);
var G__14737 = G__14689__14711;
G__14695__14703 = G__14736;
G__14689__14704 = G__14737;
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
var this__14716 = this;
return this$.watches = cljs.core.assoc.call(null,this__14716.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14717 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14717.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14719 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14719.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14721 = this;
return this__14721.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14723 = this;
return this__14723.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14725 = this;
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
var atom__14769 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14770 = (function() { 
var G__14772__delegate = function (x,p__14760){
var map__14761__14762 = p__14760;
var map__14761__14763 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14761__14762))?cljs.core.apply.call(null,cljs.core.hash_map,map__14761__14762):map__14761__14762);
var validator__14765 = cljs.core.get.call(null,map__14761__14763,"﷐'validator");
var meta__14766 = cljs.core.get.call(null,map__14761__14763,"﷐'meta");

return (new cljs.core.Atom(x,meta__14766,validator__14765,null));
};
var G__14772 = function (x,var_args){
var p__14760 = null;
if (goog.isDef(var_args)) {
  p__14760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14772__delegate.call(this, x, p__14760);
};
G__14772.cljs$lang$maxFixedArity = 1;
G__14772.cljs$lang$applyTo = (function (arglist__14776){
var x = cljs.core.first(arglist__14776);
var p__14760 = cljs.core.rest(arglist__14776);
return G__14772__delegate.call(this, x, p__14760);
});
return G__14772;
})()
;
atom = function(x,var_args){
var p__14760 = var_args;
switch(arguments.length){
case  1 :
return atom__14769.call(this,x);
default:
return atom__14770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14770.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14778 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14778))
{var validate__14779 = temp__3698__auto____14778;

if(cljs.core.truth_(validate__14779.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14782 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14782,new_value);
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
var swap_BANG___14811 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14812 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14813 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14814 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14815 = (function() { 
var G__14820__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14820 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14820__delegate.call(this, a, f, x, y, z, more);
};
G__14820.cljs$lang$maxFixedArity = 5;
G__14820.cljs$lang$applyTo = (function (arglist__14822){
var a = cljs.core.first(arglist__14822);
var f = cljs.core.first(cljs.core.next(arglist__14822));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14822)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822)))));
return G__14820__delegate.call(this, a, f, x, y, z, more);
});
return G__14820;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14811.call(this,a,f);
case  3 :
return swap_BANG___14812.call(this,a,f,x);
case  4 :
return swap_BANG___14813.call(this,a,f,x,y);
case  5 :
return swap_BANG___14814.call(this,a,f,x,y,z);
default:
return swap_BANG___14815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14815.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14840){
var iref = cljs.core.first(arglist__14840);
var f = cljs.core.first(cljs.core.next(arglist__14840));
var args = cljs.core.rest(cljs.core.next(arglist__14840));
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
var gensym__14877 = (function (){
return gensym.call(null,"G__");
});
var gensym__14879 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14877.call(this);
case  1 :
return gensym__14879.call(this,prefix_string);
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
var this__14910 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14910.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14912 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14912.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14912.state,this__14912.f);
}
return cljs.core.deref.call(null,this__14912.state);
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
var map__14935__14938 = options;
var map__14935__14941 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14935__14938))?cljs.core.apply.call(null,cljs.core.hash_map,map__14935__14938):map__14935__14938);
var keywordize_keys__14943 = cljs.core.get.call(null,map__14935__14941,"﷐'keywordize-keys");
var keyfn__14945 = (cljs.core.truth_(keywordize_keys__14943)?cljs.core.keyword:cljs.core.str);
var f__14962 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14961 = (function iter__14952(s__14953){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14953__14958 = s__14953;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14953__14958)))
{var k__14959 = cljs.core.first.call(null,s__14953__14958);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14945.call(null,k__14959),thisfn.call(null,(x[k__14959]))]),iter__14952.call(null,cljs.core.rest.call(null,s__14953__14958)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14961.call(null,cljs.core.js_keys.call(null,x));
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

return f__14962.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14976){
var x = cljs.core.first(arglist__14976);
var options = cljs.core.rest(arglist__14976);
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
var mem__14980 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14990__delegate = function (args){
var temp__3695__auto____14981 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14980),args);

if(cljs.core.truth_(temp__3695__auto____14981))
{var v__14982 = temp__3695__auto____14981;

return v__14982;
} else
{var ret__14983 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14980,cljs.core.assoc,args,ret__14983);
return ret__14983;
}
};
var G__14990 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14990__delegate.call(this, args);
};
G__14990.cljs$lang$maxFixedArity = 0;
G__14990.cljs$lang$applyTo = (function (arglist__14993){
var args = cljs.core.seq( arglist__14993 );;
return G__14990__delegate.call(this, args);
});
return G__14990;
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
var trampoline__15001 = (function (f){
while(true){
var ret__14996 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14996)))
{{
var G__15004 = ret__14996;
f = G__15004;
continue;
}
} else
{return ret__14996;
}
break;
}
});
var trampoline__15002 = (function() { 
var G__15008__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15008 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15008__delegate.call(this, f, args);
};
G__15008.cljs$lang$maxFixedArity = 1;
G__15008.cljs$lang$applyTo = (function (arglist__15009){
var f = cljs.core.first(arglist__15009);
var args = cljs.core.rest(arglist__15009);
return G__15008__delegate.call(this, f, args);
});
return G__15008;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15001.call(this,f);
default:
return trampoline__15002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15002.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15014 = (function (){
return rand.call(null,1);
});
var rand__15015 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15014.call(this);
case  1 :
return rand__15015.call(this,n);
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
var k__15021 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15021,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15021,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15036 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15037 = (function (h,child,parent){
var or__3548__auto____15028 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15028))
{return or__3548__auto____15028;
} else
{var or__3548__auto____15029 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15029))
{return or__3548__auto____15029;
} else
{var and__3546__auto____15030 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15030))
{var and__3546__auto____15031 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15031))
{var and__3546__auto____15032 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15032))
{var ret__15033 = true;
var i__15034 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15035 = cljs.core.not.call(null,ret__15033);

if(cljs.core.truth_(or__3548__auto____15035))
{return or__3548__auto____15035;
} else
{return cljs.core._EQ_.call(null,i__15034,cljs.core.count.call(null,parent));
}
})()))
{return ret__15033;
} else
{{
var G__15042 = isa_QMARK_.call(null,h,child.call(null,i__15034),parent.call(null,i__15034));
var G__15043 = (i__15034 + 1);
ret__15033 = G__15042;
i__15034 = G__15043;
continue;
}
}
break;
}
} else
{return and__3546__auto____15032;
}
} else
{return and__3546__auto____15031;
}
} else
{return and__3546__auto____15030;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15036.call(this,h,child);
case  3 :
return isa_QMARK___15037.call(this,h,child,parent);
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
var parents__15051 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15052 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15051.call(this,h);
case  2 :
return parents__15052.call(this,h,tag);
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
var ancestors__15065 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15066 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15065.call(this,h);
case  2 :
return ancestors__15066.call(this,h,tag);
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
var descendants__15076 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15077 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15076.call(this,h);
case  2 :
return descendants__15077.call(this,h,tag);
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
var derive__15096 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15097 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15090 = "﷐'parents".call(null,h);
var td__15091 = "﷐'descendants".call(null,h);
var ta__15092 = "﷐'ancestors".call(null,h);
var tf__15093 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15094 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15090.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15092.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15092.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15090,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15093.call(null,"﷐'ancestors".call(null,h),tag,td__15091,parent,ta__15092),"﷐'descendants":tf__15093.call(null,"﷐'descendants".call(null,h),parent,ta__15092,tag,td__15091)});
})());

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15096.call(this,h,tag);
case  3 :
return derive__15097.call(this,h,tag,parent);
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
var underive__15121 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15122 = (function (h,tag,parent){
var parentMap__15111 = "﷐'parents".call(null,h);
var childsParents__15112 = (cljs.core.truth_(parentMap__15111.call(null,tag))?cljs.core.disj.call(null,parentMap__15111.call(null,tag),parent):cljs.core.set([]));
var newParents__15113 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15112))?cljs.core.assoc.call(null,parentMap__15111,tag,childsParents__15112):cljs.core.dissoc.call(null,parentMap__15111,tag));
var deriv_seq__15114 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15081_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15081_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15081_SHARP_),cljs.core.second.call(null,p1__15081_SHARP_)));
}),cljs.core.seq.call(null,newParents__15113)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15111.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15082_SHARP_,p2__15086_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15082_SHARP_,p2__15086_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15114));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15121.call(this,h,tag);
case  3 :
return underive__15122.call(this,h,tag,parent);
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
var xprefs__15172 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15175 = (cljs.core.truth_((function (){var and__3546__auto____15173 = xprefs__15172;

if(cljs.core.truth_(and__3546__auto____15173))
{return xprefs__15172.call(null,y);
} else
{return and__3546__auto____15173;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15175))
{return or__3548__auto____15175;
} else
{var or__3548__auto____15178 = (function (){var ps__15177 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15177) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15177),prefer_table)))
{} else
{}
{
var G__15185 = cljs.core.rest.call(null,ps__15177);
ps__15177 = G__15185;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15178))
{return or__3548__auto____15178;
} else
{var or__3548__auto____15182 = (function (){var ps__15180 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15180) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15180),y,prefer_table)))
{} else
{}
{
var G__15186 = cljs.core.rest.call(null,ps__15180);
ps__15180 = G__15186;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15182))
{return or__3548__auto____15182;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15190 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15190))
{return or__3548__auto____15190;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15204 = cljs.core.reduce.call(null,(function (be,p__15193){
var vec__15194__15195 = p__15193;
var k__15196 = cljs.core.nth.call(null,vec__15194__15195,0,null);
var ___15197 = cljs.core.nth.call(null,vec__15194__15195,1,null);
var e__15198 = vec__15194__15195;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15196)))
{var be2__15200 = (cljs.core.truth_((function (){var or__3548__auto____15199 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15199))
{return or__3548__auto____15199;
} else
{return cljs.core.dominates.call(null,k__15196,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15198:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15200),k__15196,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15196," and ",cljs.core.first.call(null,be2__15200),", and neither is preferred")));
}
return be2__15200;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15204))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15204));
return cljs.core.second.call(null,best_entry__15204);
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
if(cljs.core.truth_((function (){var and__3546__auto____15228 = mf;

if(cljs.core.truth_(and__3546__auto____15228))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15228;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15229 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{var or__3548__auto____15230 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15230))
{return or__3548__auto____15230;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15231 = mf;

if(cljs.core.truth_(and__3546__auto____15231))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15231;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15235 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15235))
{return or__3548__auto____15235;
} else
{var or__3548__auto____15237 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15237))
{return or__3548__auto____15237;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15240 = mf;

if(cljs.core.truth_(and__3546__auto____15240))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15240;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15242 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{var or__3548__auto____15243 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15243))
{return or__3548__auto____15243;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15246 = mf;

if(cljs.core.truth_(and__3546__auto____15246))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15246;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15247 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15247))
{return or__3548__auto____15247;
} else
{var or__3548__auto____15248 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15249 = mf;

if(cljs.core.truth_(and__3546__auto____15249))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15249;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15250 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{var or__3548__auto____15251 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15251))
{return or__3548__auto____15251;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15253 = mf;

if(cljs.core.truth_(and__3546__auto____15253))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15253;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15255 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15255))
{return or__3548__auto____15255;
} else
{var or__3548__auto____15256 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15256))
{return or__3548__auto____15256;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15257 = mf;

if(cljs.core.truth_(and__3546__auto____15257))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15257;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15259 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15259))
{return or__3548__auto____15259;
} else
{var or__3548__auto____15260 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15260))
{return or__3548__auto____15260;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15263 = mf;

if(cljs.core.truth_(and__3546__auto____15263))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15263;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15264 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15264))
{return or__3548__auto____15264;
} else
{var or__3548__auto____15267 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15295 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15296 = cljs.core._get_method.call(null,mf,dispatch_val__15295);

if(cljs.core.truth_(target_fn__15296))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15295)));
}
return cljs.core.apply.call(null,target_fn__15296,args);
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
var this__15303 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15304 = this;
cljs.core.swap_BANG_.call(null,this__15304.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15304.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15304.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15304.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15313 = this;
cljs.core.swap_BANG_.call(null,this__15313.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15313.method_cache,this__15313.method_table,this__15313.cached_hierarchy,this__15313.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15314 = this;
cljs.core.swap_BANG_.call(null,this__15314.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15314.method_cache,this__15314.method_table,this__15314.cached_hierarchy,this__15314.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15317 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15317.cached_hierarchy),cljs.core.deref.call(null,this__15317.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15317.method_cache,this__15317.method_table,this__15317.cached_hierarchy,this__15317.hierarchy);
}
var temp__3695__auto____15320 = cljs.core.deref.call(null,this__15317.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15320))
{var target_fn__15321 = temp__3695__auto____15320;

return target_fn__15321;
} else
{var temp__3695__auto____15323 = cljs.core.find_and_cache_best_method.call(null,this__15317.name,dispatch_val,this__15317.hierarchy,this__15317.method_table,this__15317.prefer_table,this__15317.method_cache,this__15317.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15323))
{var target_fn__15324 = temp__3695__auto____15323;

return target_fn__15324;
} else
{return cljs.core.deref.call(null,this__15317.method_table).call(null,this__15317.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15325 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15325.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15325.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15325.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15325.method_cache,this__15325.method_table,this__15325.cached_hierarchy,this__15325.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15330 = this;
return cljs.core.deref.call(null,this__15330.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15331 = this;
return cljs.core.deref.call(null,this__15331.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15333 = this;
return cljs.core.do_dispatch.call(null,mf,this__15333.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15352__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15352 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15352__delegate.call(this, _, args);
};
G__15352.cljs$lang$maxFixedArity = 1;
G__15352.cljs$lang$applyTo = (function (arglist__15356){
var _ = cljs.core.first(arglist__15356);
var args = cljs.core.rest(arglist__15356);
return G__15352__delegate.call(this, _, args);
});
return G__15352;
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
