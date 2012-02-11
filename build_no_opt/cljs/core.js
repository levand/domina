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
var or__3548__auto____7208 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7208))
{return or__3548__auto____7208;
} else
{var or__3548__auto____7212 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7212))
{return or__3548__auto____7212;
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
var _invoke__7620 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7218 = this$;

if(cljs.core.truth_(and__3546__auto____7218))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7218;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7220 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7220))
{return or__3548__auto____7220;
} else
{var or__3548__auto____7221 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7221))
{return or__3548__auto____7221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7621 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7223 = this$;

if(cljs.core.truth_(and__3546__auto____7223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__7622 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7227 = this$;

if(cljs.core.truth_(and__3546__auto____7227))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7227;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7228 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7228))
{return or__3548__auto____7228;
} else
{var or__3548__auto____7230 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7230))
{return or__3548__auto____7230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7623 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7233 = this$;

if(cljs.core.truth_(and__3546__auto____7233))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7233;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7237 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7237))
{return or__3548__auto____7237;
} else
{var or__3548__auto____7239 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7624 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7243 = this$;

if(cljs.core.truth_(and__3546__auto____7243))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7243;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7294 = this$;

if(cljs.core.truth_(and__3546__auto____7294))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7294;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{var or__3548__auto____7303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7311 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{var or__3548__auto____7314 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7318 = this$;

if(cljs.core.truth_(and__3546__auto____7318))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7318;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7341 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{var or__3548__auto____7342 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i){
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
{var or__3548__auto____7354 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7356 = this$;

if(cljs.core.truth_(and__3546__auto____7356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7365 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{var or__3548__auto____7366 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7366))
{return or__3548__auto____7366;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7389 = this$;

if(cljs.core.truth_(and__3546__auto____7389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7415 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7420 = this$;

if(cljs.core.truth_(and__3546__auto____7420))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7420;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{var or__3548__auto____7425 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7428 = this$;

if(cljs.core.truth_(and__3546__auto____7428))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7428;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7431 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{var or__3548__auto____7433 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7433))
{return or__3548__auto____7433;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7437 = this$;

if(cljs.core.truth_(and__3546__auto____7437))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7437;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7575 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7575))
{return or__3548__auto____7575;
} else
{var or__3548__auto____7576 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7577 = this$;

if(cljs.core.truth_(and__3546__auto____7577))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7577;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7578 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7578))
{return or__3548__auto____7578;
} else
{var or__3548__auto____7579 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7579))
{return or__3548__auto____7579;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7580 = this$;

if(cljs.core.truth_(and__3546__auto____7580))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7580;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7581 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
} else
{var or__3548__auto____7582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7584 = this$;

if(cljs.core.truth_(and__3546__auto____7584))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7584;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7585 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7585))
{return or__3548__auto____7585;
} else
{var or__3548__auto____7586 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7586))
{return or__3548__auto____7586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7617 = this$;

if(cljs.core.truth_(and__3546__auto____7617))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7617;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7618 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{var or__3548__auto____7619 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7619))
{return or__3548__auto____7619;
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
return _invoke__7620.call(this,this$);
case  2 :
return _invoke__7621.call(this,this$,a);
case  3 :
return _invoke__7622.call(this,this$,a,b);
case  4 :
return _invoke__7623.call(this,this$,a,b,c);
case  5 :
return _invoke__7624.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7625.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7709 = coll;

if(cljs.core.truth_(and__3546__auto____7709))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7709;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7713 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7714 = coll;

if(cljs.core.truth_(and__3546__auto____7714))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7714;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{var or__3548__auto____7717 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7723 = coll;

if(cljs.core.truth_(and__3546__auto____7723))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7723;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7725 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{var or__3548__auto____7726 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
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
var _nth__7746 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7732 = coll;

if(cljs.core.truth_(and__3546__auto____7732))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7732;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7734 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7735 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7747 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7739 = coll;

if(cljs.core.truth_(and__3546__auto____7739))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7739;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7740 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
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
return _nth__7746.call(this,coll,n);
case  3 :
return _nth__7747.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7755 = coll;

if(cljs.core.truth_(and__3546__auto____7755))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7755;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7758 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7758))
{return or__3548__auto____7758;
} else
{var or__3548__auto____7761 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7765 = coll;

if(cljs.core.truth_(and__3546__auto____7765))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7765;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7769 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7769))
{return or__3548__auto____7769;
} else
{var or__3548__auto____7770 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
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
var _lookup__7790 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7775 = o;

if(cljs.core.truth_(and__3546__auto____7775))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7775;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7778 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{var or__3548__auto____7780 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7791 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = o;

if(cljs.core.truth_(and__3546__auto____7784))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7784;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7786 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{var or__3548__auto____7787 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
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
return _lookup__7790.call(this,o,k);
case  3 :
return _lookup__7791.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7800 = coll;

if(cljs.core.truth_(and__3546__auto____7800))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7800;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7811 = coll;

if(cljs.core.truth_(and__3546__auto____7811))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7811;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7819 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = coll;

if(cljs.core.truth_(and__3546__auto____7829))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7829;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7837 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{var or__3548__auto____7839 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7847 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{var or__3548__auto____7849 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7855 = coll;

if(cljs.core.truth_(and__3546__auto____7855))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7855;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7860 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7863 = coll;

if(cljs.core.truth_(and__3546__auto____7863))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7863;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7864 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{var or__3548__auto____7866 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7876 = coll;

if(cljs.core.truth_(and__3546__auto____7876))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7876;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7880 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7893 = o;

if(cljs.core.truth_(and__3546__auto____7893))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7893;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7897 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{var or__3548__auto____7898 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7903 = o;

if(cljs.core.truth_(and__3546__auto____7903))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7903;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7908 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7916 = o;

if(cljs.core.truth_(and__3546__auto____7916))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7916;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7922 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{var or__3548__auto____7923 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7981 = o;

if(cljs.core.truth_(and__3546__auto____7981))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7981;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7983 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7984 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
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
var _reduce__8051 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = coll;

if(cljs.core.truth_(and__3546__auto____8017))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8017;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8040 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
} else
{var or__3548__auto____8041 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8052 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = coll;

if(cljs.core.truth_(and__3546__auto____8044))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8044;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8047 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8049 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
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
return _reduce__8051.call(this,coll,f);
case  3 :
return _reduce__8052.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8062 = o;

if(cljs.core.truth_(and__3546__auto____8062))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8062;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8067 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
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
{return (function (){var or__3548__auto____8073 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8075 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = o;

if(cljs.core.truth_(and__3546__auto____8082))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8082;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
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
if(cljs.core.truth_((function (){var and__3546__auto____8088 = o;

if(cljs.core.truth_(and__3546__auto____8088))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8088;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8090 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{var or__3548__auto____8091 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
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
{return (function (){var or__3548__auto____8096 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{var or__3548__auto____8097 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8097))
{return or__3548__auto____8097;
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
{return (function (){var or__3548__auto____8106 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{var or__3548__auto____8107 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
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
{return (function (){var or__3548__auto____8111 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{var or__3548__auto____8112 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = this$;

if(cljs.core.truth_(and__3546__auto____8113))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8113;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8132 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
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
var G__8164 = null;
var G__8164__8165 = (function (o,k){
return null;
});
var G__8164__8166 = (function (o,k,not_found){
return not_found;
});
G__8164 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8164__8165.call(this,o,k);
case  3 :
return G__8164__8166.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8164;
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
var G__8168 = null;
var G__8168__8169 = (function (_,f){
return f.call(null);
});
var G__8168__8170 = (function (_,f,start){
return start;
});
G__8168 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8168__8169.call(this,_,f);
case  3 :
return G__8168__8170.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8168;
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
var ci_reduce__8359 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8353 = cljs.core._nth.call(null,cicoll,0);
var n__8354 = 1;

while(true){
if(cljs.core.truth_((n__8354 < cljs.core._count.call(null,cicoll))))
{{
var G__8366 = f.call(null,val__8353,cljs.core._nth.call(null,cicoll,n__8354));
var G__8367 = (n__8354 + 1);
val__8353 = G__8366;
n__8354 = G__8367;
continue;
}
} else
{return val__8353;
}
break;
}
}
});
var ci_reduce__8360 = (function (cicoll,f,val){
var val__8355 = val;
var n__8356 = 0;

while(true){
if(cljs.core.truth_((n__8356 < cljs.core._count.call(null,cicoll))))
{{
var G__8368 = f.call(null,val__8355,cljs.core._nth.call(null,cicoll,n__8356));
var G__8369 = (n__8356 + 1);
val__8355 = G__8368;
n__8356 = G__8369;
continue;
}
} else
{return val__8355;
}
break;
}
});
var ci_reduce__8361 = (function (cicoll,f,val,idx){
var val__8357 = val;
var n__8358 = idx;

while(true){
if(cljs.core.truth_((n__8358 < cljs.core._count.call(null,cicoll))))
{{
var G__8373 = f.call(null,val__8357,cljs.core._nth.call(null,cicoll,n__8358));
var G__8374 = (n__8358 + 1);
val__8357 = G__8373;
n__8358 = G__8374;
continue;
}
} else
{return val__8357;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8359.call(this,cicoll,f);
case  3 :
return ci_reduce__8360.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8361.call(this,cicoll,f,val,idx);
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
var this__8443 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8472 = null;
var G__8472__8473 = (function (_,f){
var this__8444 = this;
return cljs.core.ci_reduce.call(null,this__8444.a,f,(this__8444.a[this__8444.i]),(this__8444.i + 1));
});
var G__8472__8474 = (function (_,f,start){
var this__8445 = this;
return cljs.core.ci_reduce.call(null,this__8445.a,f,start,this__8445.i);
});
G__8472 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8472__8473.call(this,_,f);
case  3 :
return G__8472__8474.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8472;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8446 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8448 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8481 = null;
var G__8481__8482 = (function (coll,n){
var this__8449 = this;
var i__8454 = (n + this__8449.i);

if(cljs.core.truth_((i__8454 < this__8449.a.length)))
{return (this__8449.a[i__8454]);
} else
{return null;
}
});
var G__8481__8483 = (function (coll,n,not_found){
var this__8456 = this;
var i__8460 = (n + this__8456.i);

if(cljs.core.truth_((i__8460 < this__8456.a.length)))
{return (this__8456.a[i__8460]);
} else
{return not_found;
}
});
G__8481 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8481__8482.call(this,coll,n);
case  3 :
return G__8481__8483.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8481;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8461 = this;
return (this__8461.a.length - this__8461.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8463 = this;
return (this__8463.a[this__8463.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8465 = this;
if(cljs.core.truth_(((this__8465.i + 1) < this__8465.a.length)))
{return (new cljs.core.IndexedSeq(this__8465.a,(this__8465.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8468 = this;
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
var G__8494 = null;
var G__8494__8495 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8494__8496 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8494 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8494__8495.call(this,array,f);
case  3 :
return G__8494__8496.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8494;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8516 = null;
var G__8516__8517 = (function (array,k){
return (array[k]);
});
var G__8516__8518 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8516 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8516__8517.call(this,array,k);
case  3 :
return G__8516__8518.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8516;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8522 = null;
var G__8522__8523 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8522__8524 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8522 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8522__8523.call(this,array,n);
case  3 :
return G__8522__8524.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8522;
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
var temp__3698__auto____8533 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8533))
{var s__8534 = temp__3698__auto____8533;

return cljs.core._first.call(null,s__8534);
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
var G__8641 = cljs.core.next.call(null,s);
s = G__8641;
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
var s__8644 = cljs.core.seq.call(null,x);
var n__8645 = 0;

while(true){
if(cljs.core.truth_(s__8644))
{{
var G__8651 = cljs.core.next.call(null,s__8644);
var G__8652 = (n__8645 + 1);
s__8644 = G__8651;
n__8645 = G__8652;
continue;
}
} else
{return n__8645;
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
var conj__8667 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8668 = (function() { 
var G__8670__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8671 = conj.call(null,coll,x);
var G__8672 = cljs.core.first.call(null,xs);
var G__8673 = cljs.core.next.call(null,xs);
coll = G__8671;
x = G__8672;
xs = G__8673;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8670 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8670__delegate.call(this, coll, x, xs);
};
G__8670.cljs$lang$maxFixedArity = 2;
G__8670.cljs$lang$applyTo = (function (arglist__8674){
var coll = cljs.core.first(arglist__8674);
var x = cljs.core.first(cljs.core.next(arglist__8674));
var xs = cljs.core.rest(cljs.core.next(arglist__8674));
return G__8670__delegate.call(this, coll, x, xs);
});
return G__8670;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8667.call(this,coll,x);
default:
return conj__8668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8668.cljs$lang$applyTo;
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
var nth__8683 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8684 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8683.call(this,coll,n);
case  3 :
return nth__8684.call(this,coll,n,not_found);
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
var get__8688 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8689 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8688.call(this,o,k);
case  3 :
return get__8689.call(this,o,k,not_found);
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
var assoc__8695 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8696 = (function() { 
var G__8698__delegate = function (coll,k,v,kvs){
while(true){
var ret__8694 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8699 = ret__8694;
var G__8700 = cljs.core.first.call(null,kvs);
var G__8701 = cljs.core.second.call(null,kvs);
var G__8702 = cljs.core.nnext.call(null,kvs);
coll = G__8699;
k = G__8700;
v = G__8701;
kvs = G__8702;
continue;
}
} else
{return ret__8694;
}
break;
}
};
var G__8698 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8698__delegate.call(this, coll, k, v, kvs);
};
G__8698.cljs$lang$maxFixedArity = 3;
G__8698.cljs$lang$applyTo = (function (arglist__8707){
var coll = cljs.core.first(arglist__8707);
var k = cljs.core.first(cljs.core.next(arglist__8707));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8707)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8707)));
return G__8698__delegate.call(this, coll, k, v, kvs);
});
return G__8698;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8695.call(this,coll,k,v);
default:
return assoc__8696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8696.cljs$lang$applyTo;
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
var dissoc__8736 = (function (coll){
return coll;
});
var dissoc__8738 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8741 = (function() { 
var G__8743__delegate = function (coll,k,ks){
while(true){
var ret__8730 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8744 = ret__8730;
var G__8745 = cljs.core.first.call(null,ks);
var G__8747 = cljs.core.next.call(null,ks);
coll = G__8744;
k = G__8745;
ks = G__8747;
continue;
}
} else
{return ret__8730;
}
break;
}
};
var G__8743 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8743__delegate.call(this, coll, k, ks);
};
G__8743.cljs$lang$maxFixedArity = 2;
G__8743.cljs$lang$applyTo = (function (arglist__8748){
var coll = cljs.core.first(arglist__8748);
var k = cljs.core.first(cljs.core.next(arglist__8748));
var ks = cljs.core.rest(cljs.core.next(arglist__8748));
return G__8743__delegate.call(this, coll, k, ks);
});
return G__8743;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8736.call(this,coll);
case  2 :
return dissoc__8738.call(this,coll,k);
default:
return dissoc__8741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8741.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8751 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8753 = x__445__auto____8751;

if(cljs.core.truth_(and__3546__auto____8753))
{var and__3546__auto____8754 = x__445__auto____8751.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8754))
{return cljs.core.not.call(null,x__445__auto____8751.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8754;
}
} else
{return and__3546__auto____8753;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8751);
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
var disj__8760 = (function (coll){
return coll;
});
var disj__8761 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8762 = (function() { 
var G__8766__delegate = function (coll,k,ks){
while(true){
var ret__8757 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8767 = ret__8757;
var G__8768 = cljs.core.first.call(null,ks);
var G__8769 = cljs.core.next.call(null,ks);
coll = G__8767;
k = G__8768;
ks = G__8769;
continue;
}
} else
{return ret__8757;
}
break;
}
};
var G__8766 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8766__delegate.call(this, coll, k, ks);
};
G__8766.cljs$lang$maxFixedArity = 2;
G__8766.cljs$lang$applyTo = (function (arglist__8770){
var coll = cljs.core.first(arglist__8770);
var k = cljs.core.first(cljs.core.next(arglist__8770));
var ks = cljs.core.rest(cljs.core.next(arglist__8770));
return G__8766__delegate.call(this, coll, k, ks);
});
return G__8766;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8760.call(this,coll);
case  2 :
return disj__8761.call(this,coll,k);
default:
return disj__8762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8762.cljs$lang$applyTo;
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
{var x__445__auto____8775 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8776 = x__445__auto____8775;

if(cljs.core.truth_(and__3546__auto____8776))
{var and__3546__auto____8777 = x__445__auto____8775.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8777))
{return cljs.core.not.call(null,x__445__auto____8775.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8777;
}
} else
{return and__3546__auto____8776;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8775);
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
{var x__445__auto____8780 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8781 = x__445__auto____8780;

if(cljs.core.truth_(and__3546__auto____8781))
{var and__3546__auto____8782 = x__445__auto____8780.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8782))
{return cljs.core.not.call(null,x__445__auto____8780.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8782;
}
} else
{return and__3546__auto____8781;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8780);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8785 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8785))
{var and__3546__auto____8787 = x__445__auto____8784.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8784);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8805 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8806 = x__445__auto____8805;

if(cljs.core.truth_(and__3546__auto____8806))
{var and__3546__auto____8809 = x__445__auto____8805.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8809))
{return cljs.core.not.call(null,x__445__auto____8805.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8809;
}
} else
{return and__3546__auto____8806;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8805);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8815 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8817 = x__445__auto____8815;

if(cljs.core.truth_(and__3546__auto____8817))
{var and__3546__auto____8818 = x__445__auto____8815.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8818))
{return cljs.core.not.call(null,x__445__auto____8815.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8818;
}
} else
{return and__3546__auto____8817;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8815);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8822 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8823 = x__445__auto____8822;

if(cljs.core.truth_(and__3546__auto____8823))
{var and__3546__auto____8824 = x__445__auto____8822.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8824))
{return cljs.core.not.call(null,x__445__auto____8822.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8824;
}
} else
{return and__3546__auto____8823;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8822);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8830 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8833 = x__445__auto____8830;

if(cljs.core.truth_(and__3546__auto____8833))
{var and__3546__auto____8834 = x__445__auto____8830.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8834))
{return cljs.core.not.call(null,x__445__auto____8830.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8834;
}
} else
{return and__3546__auto____8833;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8830);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8851 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8851.push(key);
}));
return keys__8851;
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

if(cljs.core.truth_((function (){var and__3546__auto____8866 = x__445__auto____8864;

if(cljs.core.truth_(and__3546__auto____8866))
{var and__3546__auto____8867 = x__445__auto____8864.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core.not.call(null,x__445__auto____8864.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8867;
}
} else
{return and__3546__auto____8866;
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
var and__3546__auto____9036 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9036))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9038 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9038))
{return or__3548__auto____9038;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9036;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9040 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9040))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9040;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9046 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9046))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9046;
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
var and__3546__auto____9048 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9048))
{return (n == n.toFixed());
} else
{return and__3546__auto____9048;
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
if(cljs.core.truth_((function (){var and__3546__auto____9051 = coll;

if(cljs.core.truth_(and__3546__auto____9051))
{var and__3546__auto____9055 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9055))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9055;
}
} else
{return and__3546__auto____9051;
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
var distinct_QMARK___9060 = (function (x){
return true;
});
var distinct_QMARK___9061 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9062 = (function() { 
var G__9089__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9056 = cljs.core.set([y,x]);
var xs__9057 = more;

while(true){
var x__9058 = cljs.core.first.call(null,xs__9057);
var etc__9059 = cljs.core.next.call(null,xs__9057);

if(cljs.core.truth_(xs__9057))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9056,x__9058)))
{return false;
} else
{{
var G__9090 = cljs.core.conj.call(null,s__9056,x__9058);
var G__9091 = etc__9059;
s__9056 = G__9090;
xs__9057 = G__9091;
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
var G__9089 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9089__delegate.call(this, x, y, more);
};
G__9089.cljs$lang$maxFixedArity = 2;
G__9089.cljs$lang$applyTo = (function (arglist__9092){
var x = cljs.core.first(arglist__9092);
var y = cljs.core.first(cljs.core.next(arglist__9092));
var more = cljs.core.rest(cljs.core.next(arglist__9092));
return G__9089__delegate.call(this, x, y, more);
});
return G__9089;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9060.call(this,x);
case  2 :
return distinct_QMARK___9061.call(this,x,y);
default:
return distinct_QMARK___9062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9062.cljs$lang$applyTo;
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
var r__9132 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9132)))
{return r__9132;
} else
{if(cljs.core.truth_(r__9132))
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
var sort__9140 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9141 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9135 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9135,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9135);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9140.call(this,comp);
case  2 :
return sort__9141.call(this,comp,coll);
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
var sort_by__9151 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9152 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9151.call(this,keyfn,comp);
case  3 :
return sort_by__9152.call(this,keyfn,comp,coll);
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
var reduce__9232 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9233 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9232.call(this,f,val);
case  3 :
return reduce__9233.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9246 = (function (f,coll){
var temp__3695__auto____9238 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9238))
{var s__9239 = temp__3695__auto____9238;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9239),cljs.core.next.call(null,s__9239));
} else
{return f.call(null);
}
});
var seq_reduce__9247 = (function (f,val,coll){
var val__9243 = val;
var coll__9245 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9245))
{{
var G__9258 = f.call(null,val__9243,cljs.core.first.call(null,coll__9245));
var G__9259 = cljs.core.next.call(null,coll__9245);
val__9243 = G__9258;
coll__9245 = G__9259;
continue;
}
} else
{return val__9243;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9246.call(this,f,val);
case  3 :
return seq_reduce__9247.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9271 = null;
var G__9271__9272 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9271__9273 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9271 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9271__9272.call(this,coll,f);
case  3 :
return G__9271__9273.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9271;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9277 = (function (){
return 0;
});
var _PLUS___9334 = (function (x){
return x;
});
var _PLUS___9335 = (function (x,y){
return (x + y);
});
var _PLUS___9336 = (function() { 
var G__9338__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9338 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9338__delegate.call(this, x, y, more);
};
G__9338.cljs$lang$maxFixedArity = 2;
G__9338.cljs$lang$applyTo = (function (arglist__9341){
var x = cljs.core.first(arglist__9341);
var y = cljs.core.first(cljs.core.next(arglist__9341));
var more = cljs.core.rest(cljs.core.next(arglist__9341));
return G__9338__delegate.call(this, x, y, more);
});
return G__9338;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9277.call(this);
case  1 :
return _PLUS___9334.call(this,x);
case  2 :
return _PLUS___9335.call(this,x,y);
default:
return _PLUS___9336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9336.cljs$lang$applyTo;
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
var ___9382 = (function (x){
return (- x);
});
var ___9383 = (function (x,y){
return (x - y);
});
var ___9384 = (function() { 
var G__9386__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9386 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9386__delegate.call(this, x, y, more);
};
G__9386.cljs$lang$maxFixedArity = 2;
G__9386.cljs$lang$applyTo = (function (arglist__9388){
var x = cljs.core.first(arglist__9388);
var y = cljs.core.first(cljs.core.next(arglist__9388));
var more = cljs.core.rest(cljs.core.next(arglist__9388));
return G__9386__delegate.call(this, x, y, more);
});
return G__9386;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9382.call(this,x);
case  2 :
return ___9383.call(this,x,y);
default:
return ___9384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9384.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9392 = (function (){
return 1;
});
var _STAR___9393 = (function (x){
return x;
});
var _STAR___9394 = (function (x,y){
return (x * y);
});
var _STAR___9395 = (function() { 
var G__9397__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9397__delegate.call(this, x, y, more);
};
G__9397.cljs$lang$maxFixedArity = 2;
G__9397.cljs$lang$applyTo = (function (arglist__9398){
var x = cljs.core.first(arglist__9398);
var y = cljs.core.first(cljs.core.next(arglist__9398));
var more = cljs.core.rest(cljs.core.next(arglist__9398));
return G__9397__delegate.call(this, x, y, more);
});
return G__9397;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9392.call(this);
case  1 :
return _STAR___9393.call(this,x);
case  2 :
return _STAR___9394.call(this,x,y);
default:
return _STAR___9395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9395.cljs$lang$applyTo;
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
var _SLASH___9400 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9401 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9402 = (function() { 
var G__9404__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9404__delegate.call(this, x, y, more);
};
G__9404.cljs$lang$maxFixedArity = 2;
G__9404.cljs$lang$applyTo = (function (arglist__9406){
var x = cljs.core.first(arglist__9406);
var y = cljs.core.first(cljs.core.next(arglist__9406));
var more = cljs.core.rest(cljs.core.next(arglist__9406));
return G__9404__delegate.call(this, x, y, more);
});
return G__9404;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9400.call(this,x);
case  2 :
return _SLASH___9401.call(this,x,y);
default:
return _SLASH___9402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9402.cljs$lang$applyTo;
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
var _LT___9412 = (function (x){
return true;
});
var _LT___9413 = (function (x,y){
return (x < y);
});
var _LT___9414 = (function() { 
var G__9416__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9417 = y;
var G__9418 = cljs.core.first.call(null,more);
var G__9419 = cljs.core.next.call(null,more);
x = G__9417;
y = G__9418;
more = G__9419;
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
var G__9416 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9416__delegate.call(this, x, y, more);
};
G__9416.cljs$lang$maxFixedArity = 2;
G__9416.cljs$lang$applyTo = (function (arglist__9428){
var x = cljs.core.first(arglist__9428);
var y = cljs.core.first(cljs.core.next(arglist__9428));
var more = cljs.core.rest(cljs.core.next(arglist__9428));
return G__9416__delegate.call(this, x, y, more);
});
return G__9416;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9412.call(this,x);
case  2 :
return _LT___9413.call(this,x,y);
default:
return _LT___9414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9414.cljs$lang$applyTo;
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
var _LT__EQ___9465 = (function (x){
return true;
});
var _LT__EQ___9466 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9467 = (function() { 
var G__9470__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9473 = y;
var G__9474 = cljs.core.first.call(null,more);
var G__9475 = cljs.core.next.call(null,more);
x = G__9473;
y = G__9474;
more = G__9475;
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
var G__9470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9470__delegate.call(this, x, y, more);
};
G__9470.cljs$lang$maxFixedArity = 2;
G__9470.cljs$lang$applyTo = (function (arglist__9479){
var x = cljs.core.first(arglist__9479);
var y = cljs.core.first(cljs.core.next(arglist__9479));
var more = cljs.core.rest(cljs.core.next(arglist__9479));
return G__9470__delegate.call(this, x, y, more);
});
return G__9470;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9465.call(this,x);
case  2 :
return _LT__EQ___9466.call(this,x,y);
default:
return _LT__EQ___9467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9467.cljs$lang$applyTo;
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
var _GT___9486 = (function (x){
return true;
});
var _GT___9487 = (function (x,y){
return (x > y);
});
var _GT___9488 = (function() { 
var G__9493__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9494 = y;
var G__9495 = cljs.core.first.call(null,more);
var G__9496 = cljs.core.next.call(null,more);
x = G__9494;
y = G__9495;
more = G__9496;
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
var G__9493 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9493__delegate.call(this, x, y, more);
};
G__9493.cljs$lang$maxFixedArity = 2;
G__9493.cljs$lang$applyTo = (function (arglist__9497){
var x = cljs.core.first(arglist__9497);
var y = cljs.core.first(cljs.core.next(arglist__9497));
var more = cljs.core.rest(cljs.core.next(arglist__9497));
return G__9493__delegate.call(this, x, y, more);
});
return G__9493;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9486.call(this,x);
case  2 :
return _GT___9487.call(this,x,y);
default:
return _GT___9488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9488.cljs$lang$applyTo;
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
var _GT__EQ___9501 = (function (x){
return true;
});
var _GT__EQ___9502 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9503 = (function() { 
var G__9505__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9506 = y;
var G__9508 = cljs.core.first.call(null,more);
var G__9509 = cljs.core.next.call(null,more);
x = G__9506;
y = G__9508;
more = G__9509;
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
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9501.call(this,x);
case  2 :
return _GT__EQ___9502.call(this,x,y);
default:
return _GT__EQ___9503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9503.cljs$lang$applyTo;
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
var max__9519 = (function (x){
return x;
});
var max__9520 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9521 = (function() { 
var G__9527__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9527 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9527__delegate.call(this, x, y, more);
};
G__9527.cljs$lang$maxFixedArity = 2;
G__9527.cljs$lang$applyTo = (function (arglist__9528){
var x = cljs.core.first(arglist__9528);
var y = cljs.core.first(cljs.core.next(arglist__9528));
var more = cljs.core.rest(cljs.core.next(arglist__9528));
return G__9527__delegate.call(this, x, y, more);
});
return G__9527;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9519.call(this,x);
case  2 :
return max__9520.call(this,x,y);
default:
return max__9521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9521.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9542 = (function (x){
return x;
});
var min__9543 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9544 = (function() { 
var G__9551__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9551__delegate.call(this, x, y, more);
};
G__9551.cljs$lang$maxFixedArity = 2;
G__9551.cljs$lang$applyTo = (function (arglist__9553){
var x = cljs.core.first(arglist__9553);
var y = cljs.core.first(cljs.core.next(arglist__9553));
var more = cljs.core.rest(cljs.core.next(arglist__9553));
return G__9551__delegate.call(this, x, y, more);
});
return G__9551;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9542.call(this,x);
case  2 :
return min__9543.call(this,x,y);
default:
return min__9544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9544.cljs$lang$applyTo;
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
var rem__9564 = (n % d);

return cljs.core.fix.call(null,((n - rem__9564) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9579 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9579));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9590 = (function (){
return Math.random.call(null);
});
var rand__9591 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9590.call(this);
case  1 :
return rand__9591.call(this,n);
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
var _EQ__EQ___9644 = (function (x){
return true;
});
var _EQ__EQ___9645 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9646 = (function() { 
var G__9648__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9650 = y;
var G__9651 = cljs.core.first.call(null,more);
var G__9653 = cljs.core.next.call(null,more);
x = G__9650;
y = G__9651;
more = G__9653;
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
var G__9648 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9648__delegate.call(this, x, y, more);
};
G__9648.cljs$lang$maxFixedArity = 2;
G__9648.cljs$lang$applyTo = (function (arglist__9660){
var x = cljs.core.first(arglist__9660);
var y = cljs.core.first(cljs.core.next(arglist__9660));
var more = cljs.core.rest(cljs.core.next(arglist__9660));
return G__9648__delegate.call(this, x, y, more);
});
return G__9648;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9644.call(this,x);
case  2 :
return _EQ__EQ___9645.call(this,x,y);
default:
return _EQ__EQ___9646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9646.cljs$lang$applyTo;
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
var n__9676 = n;
var xs__9677 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9678 = xs__9677;

if(cljs.core.truth_(and__3546__auto____9678))
{return (n__9676 > 0);
} else
{return and__3546__auto____9678;
}
})()))
{{
var G__9682 = (n__9676 - 1);
var G__9683 = cljs.core.next.call(null,xs__9677);
n__9676 = G__9682;
xs__9677 = G__9683;
continue;
}
} else
{return xs__9677;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9688 = null;
var G__9688__9689 = (function (coll,n){
var temp__3695__auto____9684 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9684))
{var xs__9685 = temp__3695__auto____9684;

return cljs.core.first.call(null,xs__9685);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9688__9690 = (function (coll,n,not_found){
var temp__3695__auto____9686 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9686))
{var xs__9687 = temp__3695__auto____9686;

return cljs.core.first.call(null,xs__9687);
} else
{return not_found;
}
});
G__9688 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9688__9689.call(this,coll,n);
case  3 :
return G__9688__9690.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9688;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9701 = (function (){
return "";
});
var str_STAR___9702 = (function (x){
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
var str_STAR___9703 = (function() { 
var G__9705__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9706 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9707 = cljs.core.next.call(null,more);
sb = G__9706;
more = G__9707;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9705 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9705__delegate.call(this, x, ys);
};
G__9705.cljs$lang$maxFixedArity = 1;
G__9705.cljs$lang$applyTo = (function (arglist__9714){
var x = cljs.core.first(arglist__9714);
var ys = cljs.core.rest(arglist__9714);
return G__9705__delegate.call(this, x, ys);
});
return G__9705;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9701.call(this);
case  1 :
return str_STAR___9702.call(this,x);
default:
return str_STAR___9703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9703.cljs$lang$applyTo;
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
var str__9777 = (function (){
return "";
});
var str__9778 = (function (x){
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
var str__9779 = (function() { 
var G__9781__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9781 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9781__delegate.call(this, x, ys);
};
G__9781.cljs$lang$maxFixedArity = 1;
G__9781.cljs$lang$applyTo = (function (arglist__9782){
var x = cljs.core.first(arglist__9782);
var ys = cljs.core.rest(arglist__9782);
return G__9781__delegate.call(this, x, ys);
});
return G__9781;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9777.call(this);
case  1 :
return str__9778.call(this,x);
default:
return str__9779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9779.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9783 = (function (s,start){
return s.substring(start);
});
var subs__9784 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9783.call(this,s,start);
case  3 :
return subs__9784.call(this,s,start,end);
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
var symbol__9786 = (function (name){
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
var symbol__9787 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9786.call(this,ns);
case  2 :
return symbol__9787.call(this,ns,name);
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
var keyword__9789 = (function (name){
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
var keyword__9790 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9789.call(this,ns);
case  2 :
return keyword__9790.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9800 = cljs.core.seq.call(null,x);
var ys__9801 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9800)))
{return cljs.core.nil_QMARK_.call(null,ys__9801);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9801)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9800),cljs.core.first.call(null,ys__9801))))
{{
var G__9803 = cljs.core.next.call(null,xs__9800);
var G__9804 = cljs.core.next.call(null,ys__9801);
xs__9800 = G__9803;
ys__9801 = G__9804;
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
return cljs.core.reduce.call(null,(function (p1__9805_SHARP_,p2__9806_SHARP_){
return cljs.core.hash_combine.call(null,p1__9805_SHARP_,cljs.core.hash.call(null,p2__9806_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9901__9902 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9901__9902))
{var G__9904__9907 = cljs.core.first.call(null,G__9901__9902);
var vec__9905__9908 = G__9904__9907;
var key_name__9909 = cljs.core.nth.call(null,vec__9905__9908,0,null);
var f__9910 = cljs.core.nth.call(null,vec__9905__9908,1,null);
var G__9901__9911 = G__9901__9902;

var G__9904__9912 = G__9904__9907;
var G__9901__9913 = G__9901__9911;

while(true){
var vec__9914__9916 = G__9904__9912;
var key_name__9919 = cljs.core.nth.call(null,vec__9914__9916,0,null);
var f__9921 = cljs.core.nth.call(null,vec__9914__9916,1,null);
var G__9901__9922 = G__9901__9913;

var str_name__9927 = cljs.core.name.call(null,key_name__9919);

obj[str_name__9927] = f__9921;
var temp__3698__auto____9928 = cljs.core.next.call(null,G__9901__9922);

if(cljs.core.truth_(temp__3698__auto____9928))
{var G__9901__9929 = temp__3698__auto____9928;

{
var G__9933 = cljs.core.first.call(null,G__9901__9929);
var G__9934 = G__9901__9929;
G__9904__9912 = G__9933;
G__9901__9913 = G__9934;
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
var this__9937 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9938 = this;
return (new cljs.core.List(this__9938.meta,o,coll,(this__9938.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9943 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9946 = this;
return this__9946.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9947 = this;
return this__9947.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9950 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9953 = this;
return this__9953.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9956 = this;
return this__9956.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9959 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9962 = this;
return (new cljs.core.List(meta,this__9962.first,this__9962.rest,this__9962.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9965 = this;
return this__9965.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9966 = this;
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
var this__10052 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10096 = this;
return (new cljs.core.List(this__10096.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10098 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10100 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10101 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10103 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10106 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10108 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10110 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10113 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10116 = this;
return this__10116.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10120 = this;
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
list.cljs$lang$applyTo = (function (arglist__10157){
var items = cljs.core.seq( arglist__10157 );;
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
var this__10158 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10161 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10162 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10163 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10163.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10164 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10171 = this;
return this__10171.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10172 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10172.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10172.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10174 = this;
return this__10174.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10176 = this;
return (new cljs.core.Cons(meta,this__10176.first,this__10176.rest));
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
var G__10223 = null;
var G__10223__10224 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10223__10225 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10223 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10223__10224.call(this,string,f);
case  3 :
return G__10223__10225.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10223;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10227 = null;
var G__10227__10228 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10227__10229 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10227 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10227__10228.call(this,string,k);
case  3 :
return G__10227__10229.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10227;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10248 = null;
var G__10248__10249 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10248__10250 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10248 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10248__10249.call(this,string,n);
case  3 :
return G__10248__10250.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10248;
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
var G__10255 = null;
var G__10255__10256 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10255__10257 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10255 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10255__10256.call(this,this$,coll);
case  3 :
return G__10255__10257.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10255;
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
var x__10269 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10269;
} else
{lazy_seq.x = x__10269.call(null);
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
var this__10273 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10278 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10285 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10297 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10297.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10298 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10299 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10304 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10343 = this;
return this__10343.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10345 = this;
return (new cljs.core.LazySeq(meta,this__10345.realized,this__10345.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10357 = cljs.core.array.call(null);

var s__10358 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10358)))
{ary__10357.push(cljs.core.first.call(null,s__10358));
{
var G__10365 = cljs.core.next.call(null,s__10358);
s__10358 = G__10365;
continue;
}
} else
{return ary__10357;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10366 = s;
var i__10367 = n;
var sum__10368 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10369 = (i__10367 > 0);

if(cljs.core.truth_(and__3546__auto____10369))
{return cljs.core.seq.call(null,s__10366);
} else
{return and__3546__auto____10369;
}
})()))
{{
var G__10370 = cljs.core.next.call(null,s__10366);
var G__10371 = (i__10367 - 1);
var G__10372 = (sum__10368 + 1);
s__10366 = G__10370;
i__10367 = G__10371;
sum__10368 = G__10372;
continue;
}
} else
{return sum__10368;
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
var concat__10424 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10425 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10426 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10376 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10376))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10376),concat.call(null,cljs.core.rest.call(null,s__10376),y));
} else
{return y;
}
})));
});
var concat__10427 = (function() { 
var G__10431__delegate = function (x,y,zs){
var cat__10422 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10420 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10420))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10420),cat.call(null,cljs.core.rest.call(null,xys__10420),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10422.call(null,concat.call(null,x,y),zs);
};
var G__10431 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10431__delegate.call(this, x, y, zs);
};
G__10431.cljs$lang$maxFixedArity = 2;
G__10431.cljs$lang$applyTo = (function (arglist__10481){
var x = cljs.core.first(arglist__10481);
var y = cljs.core.first(cljs.core.next(arglist__10481));
var zs = cljs.core.rest(cljs.core.next(arglist__10481));
return G__10431__delegate.call(this, x, y, zs);
});
return G__10431;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10424.call(this);
case  1 :
return concat__10425.call(this,x);
case  2 :
return concat__10426.call(this,x,y);
default:
return concat__10427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10427.cljs$lang$applyTo;
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
var list_STAR___10486 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10487 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10488 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10489 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10490 = (function() { 
var G__10493__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10493 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10493__delegate.call(this, a, b, c, d, more);
};
G__10493.cljs$lang$maxFixedArity = 4;
G__10493.cljs$lang$applyTo = (function (arglist__10495){
var a = cljs.core.first(arglist__10495);
var b = cljs.core.first(cljs.core.next(arglist__10495));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10495)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10495))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10495))));
return G__10493__delegate.call(this, a, b, c, d, more);
});
return G__10493;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10486.call(this,a);
case  2 :
return list_STAR___10487.call(this,a,b);
case  3 :
return list_STAR___10488.call(this,a,b,c);
case  4 :
return list_STAR___10489.call(this,a,b,c,d);
default:
return list_STAR___10490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10490.cljs$lang$applyTo;
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
var apply__10598 = (function (f,args){
var fixed_arity__10503 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10503 + 1)) <= fixed_arity__10503)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10599 = (function (f,x,args){
var arglist__10533 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10535 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10533,fixed_arity__10535) <= fixed_arity__10535)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10533));
} else
{return f.cljs$lang$applyTo(arglist__10533);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10533));
}
});
var apply__10600 = (function (f,x,y,args){
var arglist__10552 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10553 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10552,fixed_arity__10553) <= fixed_arity__10553)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10552));
} else
{return f.cljs$lang$applyTo(arglist__10552);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10552));
}
});
var apply__10601 = (function (f,x,y,z,args){
var arglist__10560 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10561 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10560,fixed_arity__10561) <= fixed_arity__10561)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10560));
} else
{return f.cljs$lang$applyTo(arglist__10560);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10560));
}
});
var apply__10602 = (function() { 
var G__10613__delegate = function (f,a,b,c,d,args){
var arglist__10588 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10591 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10588,fixed_arity__10591) <= fixed_arity__10591)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10588));
} else
{return f.cljs$lang$applyTo(arglist__10588);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10588));
}
};
var G__10613 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10613__delegate.call(this, f, a, b, c, d, args);
};
G__10613.cljs$lang$maxFixedArity = 5;
G__10613.cljs$lang$applyTo = (function (arglist__10617){
var f = cljs.core.first(arglist__10617);
var a = cljs.core.first(cljs.core.next(arglist__10617));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10617)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10617))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10617)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10617)))));
return G__10613__delegate.call(this, f, a, b, c, d, args);
});
return G__10613;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10598.call(this,f,a);
case  3 :
return apply__10599.call(this,f,a,b);
case  4 :
return apply__10600.call(this,f,a,b,c);
case  5 :
return apply__10601.call(this,f,a,b,c,d);
default:
return apply__10602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10602.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10626){
var obj = cljs.core.first(arglist__10626);
var f = cljs.core.first(cljs.core.next(arglist__10626));
var args = cljs.core.rest(cljs.core.next(arglist__10626));
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
var not_EQ___10631 = (function (x){
return false;
});
var not_EQ___10632 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10633 = (function() { 
var G__10636__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10636 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10636__delegate.call(this, x, y, more);
};
G__10636.cljs$lang$maxFixedArity = 2;
G__10636.cljs$lang$applyTo = (function (arglist__10638){
var x = cljs.core.first(arglist__10638);
var y = cljs.core.first(cljs.core.next(arglist__10638));
var more = cljs.core.rest(cljs.core.next(arglist__10638));
return G__10636__delegate.call(this, x, y, more);
});
return G__10636;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10631.call(this,x);
case  2 :
return not_EQ___10632.call(this,x,y);
default:
return not_EQ___10633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10633.cljs$lang$applyTo;
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
var G__10687 = pred;
var G__10688 = cljs.core.next.call(null,coll);
pred = G__10687;
coll = G__10688;
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
{var or__3548__auto____10697 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10697))
{return or__3548__auto____10697;
} else
{{
var G__10703 = pred;
var G__10704 = cljs.core.next.call(null,coll);
pred = G__10703;
coll = G__10704;
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
var G__10776 = null;
var G__10776__10777 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10776__10778 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10776__10779 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10776__10780 = (function() { 
var G__10785__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10785 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10785__delegate.call(this, x, y, zs);
};
G__10785.cljs$lang$maxFixedArity = 2;
G__10785.cljs$lang$applyTo = (function (arglist__10788){
var x = cljs.core.first(arglist__10788);
var y = cljs.core.first(cljs.core.next(arglist__10788));
var zs = cljs.core.rest(cljs.core.next(arglist__10788));
return G__10785__delegate.call(this, x, y, zs);
});
return G__10785;
})()
;
G__10776 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10776__10777.call(this);
case  1 :
return G__10776__10778.call(this,x);
case  2 :
return G__10776__10779.call(this,x,y);
default:
return G__10776__10780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10776.cljs$lang$maxFixedArity = 2;
G__10776.cljs$lang$applyTo = G__10776__10780.cljs$lang$applyTo;
return G__10776;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10793__delegate = function (args){
return x;
};
var G__10793 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10793__delegate.call(this, args);
};
G__10793.cljs$lang$maxFixedArity = 0;
G__10793.cljs$lang$applyTo = (function (arglist__10794){
var args = cljs.core.seq( arglist__10794 );;
return G__10793__delegate.call(this, args);
});
return G__10793;
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
var comp__10818 = (function (){
return cljs.core.identity;
});
var comp__10819 = (function (f){
return f;
});
var comp__10820 = (function (f,g){
return (function() {
var G__10829 = null;
var G__10829__10831 = (function (){
return f.call(null,g.call(null));
});
var G__10829__10833 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10829__10834 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10829__10835 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10829__10836 = (function() { 
var G__10848__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10848 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10848__delegate.call(this, x, y, z, args);
};
G__10848.cljs$lang$maxFixedArity = 3;
G__10848.cljs$lang$applyTo = (function (arglist__10853){
var x = cljs.core.first(arglist__10853);
var y = cljs.core.first(cljs.core.next(arglist__10853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10853)));
return G__10848__delegate.call(this, x, y, z, args);
});
return G__10848;
})()
;
G__10829 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10829__10831.call(this);
case  1 :
return G__10829__10833.call(this,x);
case  2 :
return G__10829__10834.call(this,x,y);
case  3 :
return G__10829__10835.call(this,x,y,z);
default:
return G__10829__10836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10829.cljs$lang$maxFixedArity = 3;
G__10829.cljs$lang$applyTo = G__10829__10836.cljs$lang$applyTo;
return G__10829;
})()
});
var comp__10821 = (function (f,g,h){
return (function() {
var G__10858 = null;
var G__10858__10859 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10858__10861 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10858__10862 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10858__10863 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10858__10864 = (function() { 
var G__10871__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10871 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10871__delegate.call(this, x, y, z, args);
};
G__10871.cljs$lang$maxFixedArity = 3;
G__10871.cljs$lang$applyTo = (function (arglist__10874){
var x = cljs.core.first(arglist__10874);
var y = cljs.core.first(cljs.core.next(arglist__10874));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10874)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10874)));
return G__10871__delegate.call(this, x, y, z, args);
});
return G__10871;
})()
;
G__10858 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10858__10859.call(this);
case  1 :
return G__10858__10861.call(this,x);
case  2 :
return G__10858__10862.call(this,x,y);
case  3 :
return G__10858__10863.call(this,x,y,z);
default:
return G__10858__10864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10858.cljs$lang$maxFixedArity = 3;
G__10858.cljs$lang$applyTo = G__10858__10864.cljs$lang$applyTo;
return G__10858;
})()
});
var comp__10822 = (function() { 
var G__10877__delegate = function (f1,f2,f3,fs){
var fs__10806 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10880__delegate = function (args){
var ret__10807 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10806),args);
var fs__10808 = cljs.core.next.call(null,fs__10806);

while(true){
if(cljs.core.truth_(fs__10808))
{{
var G__10884 = cljs.core.first.call(null,fs__10808).call(null,ret__10807);
var G__10885 = cljs.core.next.call(null,fs__10808);
ret__10807 = G__10884;
fs__10808 = G__10885;
continue;
}
} else
{return ret__10807;
}
break;
}
};
var G__10880 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10880__delegate.call(this, args);
};
G__10880.cljs$lang$maxFixedArity = 0;
G__10880.cljs$lang$applyTo = (function (arglist__10890){
var args = cljs.core.seq( arglist__10890 );;
return G__10880__delegate.call(this, args);
});
return G__10880;
})()
;
};
var G__10877 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10877__delegate.call(this, f1, f2, f3, fs);
};
G__10877.cljs$lang$maxFixedArity = 3;
G__10877.cljs$lang$applyTo = (function (arglist__10891){
var f1 = cljs.core.first(arglist__10891);
var f2 = cljs.core.first(cljs.core.next(arglist__10891));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10891)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10891)));
return G__10877__delegate.call(this, f1, f2, f3, fs);
});
return G__10877;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10818.call(this);
case  1 :
return comp__10819.call(this,f1);
case  2 :
return comp__10820.call(this,f1,f2);
case  3 :
return comp__10821.call(this,f1,f2,f3);
default:
return comp__10822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10822.cljs$lang$applyTo;
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
var partial__10906 = (function (f,arg1){
return (function() { 
var G__10912__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10912 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10912__delegate.call(this, args);
};
G__10912.cljs$lang$maxFixedArity = 0;
G__10912.cljs$lang$applyTo = (function (arglist__10920){
var args = cljs.core.seq( arglist__10920 );;
return G__10912__delegate.call(this, args);
});
return G__10912;
})()
;
});
var partial__10907 = (function (f,arg1,arg2){
return (function() { 
var G__10921__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10921 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10921__delegate.call(this, args);
};
G__10921.cljs$lang$maxFixedArity = 0;
G__10921.cljs$lang$applyTo = (function (arglist__10928){
var args = cljs.core.seq( arglist__10928 );;
return G__10921__delegate.call(this, args);
});
return G__10921;
})()
;
});
var partial__10908 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10930__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10930 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10930__delegate.call(this, args);
};
G__10930.cljs$lang$maxFixedArity = 0;
G__10930.cljs$lang$applyTo = (function (arglist__10931){
var args = cljs.core.seq( arglist__10931 );;
return G__10930__delegate.call(this, args);
});
return G__10930;
})()
;
});
var partial__10909 = (function() { 
var G__10932__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10933__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10933 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10933__delegate.call(this, args);
};
G__10933.cljs$lang$maxFixedArity = 0;
G__10933.cljs$lang$applyTo = (function (arglist__10935){
var args = cljs.core.seq( arglist__10935 );;
return G__10933__delegate.call(this, args);
});
return G__10933;
})()
;
};
var G__10932 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10932__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10932.cljs$lang$maxFixedArity = 4;
G__10932.cljs$lang$applyTo = (function (arglist__10936){
var f = cljs.core.first(arglist__10936);
var arg1 = cljs.core.first(cljs.core.next(arglist__10936));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10936)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10936))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10936))));
return G__10932__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10932;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10906.call(this,f,arg1);
case  3 :
return partial__10907.call(this,f,arg1,arg2);
case  4 :
return partial__10908.call(this,f,arg1,arg2,arg3);
default:
return partial__10909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10909.cljs$lang$applyTo;
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
var fnil__10971 = (function (f,x){
return (function() {
var G__10976 = null;
var G__10976__10978 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10976__10980 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10976__10981 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10976__10982 = (function() { 
var G__11244__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11244 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11244__delegate.call(this, a, b, c, ds);
};
G__11244.cljs$lang$maxFixedArity = 3;
G__11244.cljs$lang$applyTo = (function (arglist__11245){
var a = cljs.core.first(arglist__11245);
var b = cljs.core.first(cljs.core.next(arglist__11245));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11245)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11245)));
return G__11244__delegate.call(this, a, b, c, ds);
});
return G__11244;
})()
;
G__10976 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10976__10978.call(this,a);
case  2 :
return G__10976__10980.call(this,a,b);
case  3 :
return G__10976__10981.call(this,a,b,c);
default:
return G__10976__10982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10976.cljs$lang$maxFixedArity = 3;
G__10976.cljs$lang$applyTo = G__10976__10982.cljs$lang$applyTo;
return G__10976;
})()
});
var fnil__10972 = (function (f,x,y){
return (function() {
var G__11249 = null;
var G__11249__11251 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11249__11252 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11249__11253 = (function() { 
var G__11261__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11261 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11261__delegate.call(this, a, b, c, ds);
};
G__11261.cljs$lang$maxFixedArity = 3;
G__11261.cljs$lang$applyTo = (function (arglist__11262){
var a = cljs.core.first(arglist__11262);
var b = cljs.core.first(cljs.core.next(arglist__11262));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11262)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11262)));
return G__11261__delegate.call(this, a, b, c, ds);
});
return G__11261;
})()
;
G__11249 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11249__11251.call(this,a,b);
case  3 :
return G__11249__11252.call(this,a,b,c);
default:
return G__11249__11253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11249.cljs$lang$maxFixedArity = 3;
G__11249.cljs$lang$applyTo = G__11249__11253.cljs$lang$applyTo;
return G__11249;
})()
});
var fnil__10973 = (function (f,x,y,z){
return (function() {
var G__11271 = null;
var G__11271__11273 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11271__11274 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11271__11275 = (function() { 
var G__11281__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11281 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11281__delegate.call(this, a, b, c, ds);
};
G__11281.cljs$lang$maxFixedArity = 3;
G__11281.cljs$lang$applyTo = (function (arglist__11286){
var a = cljs.core.first(arglist__11286);
var b = cljs.core.first(cljs.core.next(arglist__11286));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11286)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11286)));
return G__11281__delegate.call(this, a, b, c, ds);
});
return G__11281;
})()
;
G__11271 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11271__11273.call(this,a,b);
case  3 :
return G__11271__11274.call(this,a,b,c);
default:
return G__11271__11275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11271.cljs$lang$maxFixedArity = 3;
G__11271.cljs$lang$applyTo = G__11271__11275.cljs$lang$applyTo;
return G__11271;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10971.call(this,f,x);
case  3 :
return fnil__10972.call(this,f,x,y);
case  4 :
return fnil__10973.call(this,f,x,y,z);
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
var mapi__11304 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11302 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11302))
{var s__11303 = temp__3698__auto____11302;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11303)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11303)));
} else
{return null;
}
})));
});

return mapi__11304.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11313 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11313))
{var s__11315 = temp__3698__auto____11313;

var x__11318 = f.call(null,cljs.core.first.call(null,s__11315));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11318)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11315));
} else
{return cljs.core.cons.call(null,x__11318,keep.call(null,f,cljs.core.rest.call(null,s__11315)));
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
var keepi__11355 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11350 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11350))
{var s__11352 = temp__3698__auto____11350;

var x__11353 = f.call(null,idx,cljs.core.first.call(null,s__11352));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11353)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11352));
} else
{return cljs.core.cons.call(null,x__11353,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11352)));
}
} else
{return null;
}
})));
});

return keepi__11355.call(null,0,coll);
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
var every_pred__11544 = (function (p){
return (function() {
var ep1 = null;
var ep1__11550 = (function (){
return true;
});
var ep1__11551 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11552 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11409 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11409))
{return p.call(null,y);
} else
{return and__3546__auto____11409;
}
})());
});
var ep1__11553 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11413 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11413))
{var and__3546__auto____11416 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11416))
{return p.call(null,z);
} else
{return and__3546__auto____11416;
}
} else
{return and__3546__auto____11413;
}
})());
});
var ep1__11554 = (function() { 
var G__11563__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11420 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11420))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11420;
}
})());
};
var G__11563 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11563__delegate.call(this, x, y, z, args);
};
G__11563.cljs$lang$maxFixedArity = 3;
G__11563.cljs$lang$applyTo = (function (arglist__11564){
var x = cljs.core.first(arglist__11564);
var y = cljs.core.first(cljs.core.next(arglist__11564));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11564)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11564)));
return G__11563__delegate.call(this, x, y, z, args);
});
return G__11563;
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
var every_pred__11545 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11567 = (function (){
return true;
});
var ep2__11568 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11444 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11444))
{return p2.call(null,x);
} else
{return and__3546__auto____11444;
}
})());
});
var ep2__11569 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11446 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11446))
{var and__3546__auto____11450 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11450))
{var and__3546__auto____11452 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11452))
{return p2.call(null,y);
} else
{return and__3546__auto____11452;
}
} else
{return and__3546__auto____11450;
}
} else
{return and__3546__auto____11446;
}
})());
});
var ep2__11570 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11455 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11455))
{var and__3546__auto____11457 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11457))
{var and__3546__auto____11461 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11461))
{var and__3546__auto____11463 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11463))
{var and__3546__auto____11467 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11467))
{return p2.call(null,z);
} else
{return and__3546__auto____11467;
}
} else
{return and__3546__auto____11463;
}
} else
{return and__3546__auto____11461;
}
} else
{return and__3546__auto____11457;
}
} else
{return and__3546__auto____11455;
}
})());
});
var ep2__11571 = (function() { 
var G__11585__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11470 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11470))
{return cljs.core.every_QMARK_.call(null,(function (p1__11336_SHARP_){
var and__3546__auto____11473 = p1.call(null,p1__11336_SHARP_);

if(cljs.core.truth_(and__3546__auto____11473))
{return p2.call(null,p1__11336_SHARP_);
} else
{return and__3546__auto____11473;
}
}),args);
} else
{return and__3546__auto____11470;
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
G__11585.cljs$lang$applyTo = (function (arglist__11591){
var x = cljs.core.first(arglist__11591);
var y = cljs.core.first(cljs.core.next(arglist__11591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11591)));
return G__11585__delegate.call(this, x, y, z, args);
});
return G__11585;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11567.call(this);
case  1 :
return ep2__11568.call(this,x);
case  2 :
return ep2__11569.call(this,x,y);
case  3 :
return ep2__11570.call(this,x,y,z);
default:
return ep2__11571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11571.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11546 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11604 = (function (){
return true;
});
var ep3__11605 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11479 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11479))
{var and__3546__auto____11481 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11481))
{return p3.call(null,x);
} else
{return and__3546__auto____11481;
}
} else
{return and__3546__auto____11479;
}
})());
});
var ep3__11606 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11489 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11489))
{var and__3546__auto____11490 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11490))
{var and__3546__auto____11491 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11491))
{var and__3546__auto____11492 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11492))
{var and__3546__auto____11493 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11493))
{return p3.call(null,y);
} else
{return and__3546__auto____11493;
}
} else
{return and__3546__auto____11492;
}
} else
{return and__3546__auto____11491;
}
} else
{return and__3546__auto____11490;
}
} else
{return and__3546__auto____11489;
}
})());
});
var ep3__11607 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11494 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11494))
{var and__3546__auto____11496 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11496))
{var and__3546__auto____11497 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11497))
{var and__3546__auto____11498 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11498))
{var and__3546__auto____11499 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11499))
{var and__3546__auto____11501 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11501))
{var and__3546__auto____11503 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11503))
{var and__3546__auto____11509 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11509))
{return p3.call(null,z);
} else
{return and__3546__auto____11509;
}
} else
{return and__3546__auto____11503;
}
} else
{return and__3546__auto____11501;
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
} else
{return and__3546__auto____11494;
}
})());
});
var ep3__11608 = (function() { 
var G__11618__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11511 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11511))
{return cljs.core.every_QMARK_.call(null,(function (p1__11338_SHARP_){
var and__3546__auto____11513 = p1.call(null,p1__11338_SHARP_);

if(cljs.core.truth_(and__3546__auto____11513))
{var and__3546__auto____11514 = p2.call(null,p1__11338_SHARP_);

if(cljs.core.truth_(and__3546__auto____11514))
{return p3.call(null,p1__11338_SHARP_);
} else
{return and__3546__auto____11514;
}
} else
{return and__3546__auto____11513;
}
}),args);
} else
{return and__3546__auto____11511;
}
})());
};
var G__11618 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11618__delegate.call(this, x, y, z, args);
};
G__11618.cljs$lang$maxFixedArity = 3;
G__11618.cljs$lang$applyTo = (function (arglist__11620){
var x = cljs.core.first(arglist__11620);
var y = cljs.core.first(cljs.core.next(arglist__11620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11620)));
return G__11618__delegate.call(this, x, y, z, args);
});
return G__11618;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11604.call(this);
case  1 :
return ep3__11605.call(this,x);
case  2 :
return ep3__11606.call(this,x,y);
case  3 :
return ep3__11607.call(this,x,y,z);
default:
return ep3__11608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11608.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11547 = (function() { 
var G__11622__delegate = function (p1,p2,p3,ps){
var ps__11521 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11624 = (function (){
return true;
});
var epn__11625 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11339_SHARP_){
return p1__11339_SHARP_.call(null,x);
}),ps__11521);
});
var epn__11626 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11340_SHARP_){
var and__3546__auto____11533 = p1__11340_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11533))
{return p1__11340_SHARP_.call(null,y);
} else
{return and__3546__auto____11533;
}
}),ps__11521);
});
var epn__11627 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11341_SHARP_){
var and__3546__auto____11534 = p1__11341_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11534))
{var and__3546__auto____11535 = p1__11341_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11535))
{return p1__11341_SHARP_.call(null,z);
} else
{return and__3546__auto____11535;
}
} else
{return and__3546__auto____11534;
}
}),ps__11521);
});
var epn__11628 = (function() { 
var G__11631__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11539 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11539))
{return cljs.core.every_QMARK_.call(null,(function (p1__11344_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11344_SHARP_,args);
}),ps__11521);
} else
{return and__3546__auto____11539;
}
})());
};
var G__11631 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11631__delegate.call(this, x, y, z, args);
};
G__11631.cljs$lang$maxFixedArity = 3;
G__11631.cljs$lang$applyTo = (function (arglist__11632){
var x = cljs.core.first(arglist__11632);
var y = cljs.core.first(cljs.core.next(arglist__11632));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11632)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11632)));
return G__11631__delegate.call(this, x, y, z, args);
});
return G__11631;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11624.call(this);
case  1 :
return epn__11625.call(this,x);
case  2 :
return epn__11626.call(this,x,y);
case  3 :
return epn__11627.call(this,x,y,z);
default:
return epn__11628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11628.cljs$lang$applyTo;
return epn;
})()
};
var G__11622 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11622__delegate.call(this, p1, p2, p3, ps);
};
G__11622.cljs$lang$maxFixedArity = 3;
G__11622.cljs$lang$applyTo = (function (arglist__11633){
var p1 = cljs.core.first(arglist__11633);
var p2 = cljs.core.first(cljs.core.next(arglist__11633));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11633)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11633)));
return G__11622__delegate.call(this, p1, p2, p3, ps);
});
return G__11622;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11544.call(this,p1);
case  2 :
return every_pred__11545.call(this,p1,p2);
case  3 :
return every_pred__11546.call(this,p1,p2,p3);
default:
return every_pred__11547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11547.cljs$lang$applyTo;
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
var some_fn__11721 = (function (p){
return (function() {
var sp1 = null;
var sp1__11726 = (function (){
return null;
});
var sp1__11727 = (function (x){
return p.call(null,x);
});
var sp1__11728 = (function (x,y){
var or__3548__auto____11636 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11636))
{return or__3548__auto____11636;
} else
{return p.call(null,y);
}
});
var sp1__11729 = (function (x,y,z){
var or__3548__auto____11644 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11645 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11645))
{return or__3548__auto____11645;
} else
{return p.call(null,z);
}
}
});
var sp1__11730 = (function() { 
var G__11732__delegate = function (x,y,z,args){
var or__3548__auto____11647 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11647))
{return or__3548__auto____11647;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11732 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11732__delegate.call(this, x, y, z, args);
};
G__11732.cljs$lang$maxFixedArity = 3;
G__11732.cljs$lang$applyTo = (function (arglist__11736){
var x = cljs.core.first(arglist__11736);
var y = cljs.core.first(cljs.core.next(arglist__11736));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11736)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11736)));
return G__11732__delegate.call(this, x, y, z, args);
});
return G__11732;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11726.call(this);
case  1 :
return sp1__11727.call(this,x);
case  2 :
return sp1__11728.call(this,x,y);
case  3 :
return sp1__11729.call(this,x,y,z);
default:
return sp1__11730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11730.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11722 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11739 = (function (){
return null;
});
var sp2__11740 = (function (x){
var or__3548__auto____11649 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11649))
{return or__3548__auto____11649;
} else
{return p2.call(null,x);
}
});
var sp2__11741 = (function (x,y){
var or__3548__auto____11650 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11650))
{return or__3548__auto____11650;
} else
{var or__3548__auto____11652 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11652))
{return or__3548__auto____11652;
} else
{var or__3548__auto____11653 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11653))
{return or__3548__auto____11653;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11742 = (function (x,y,z){
var or__3548__auto____11656 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11656))
{return or__3548__auto____11656;
} else
{var or__3548__auto____11658 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11658))
{return or__3548__auto____11658;
} else
{var or__3548__auto____11659 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11659))
{return or__3548__auto____11659;
} else
{var or__3548__auto____11660 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11660))
{return or__3548__auto____11660;
} else
{var or__3548__auto____11661 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11661))
{return or__3548__auto____11661;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11743 = (function() { 
var G__11756__delegate = function (x,y,z,args){
var or__3548__auto____11662 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11662))
{return or__3548__auto____11662;
} else
{return cljs.core.some.call(null,(function (p1__11394_SHARP_){
var or__3548__auto____11668 = p1.call(null,p1__11394_SHARP_);

if(cljs.core.truth_(or__3548__auto____11668))
{return or__3548__auto____11668;
} else
{return p2.call(null,p1__11394_SHARP_);
}
}),args);
}
};
var G__11756 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11756__delegate.call(this, x, y, z, args);
};
G__11756.cljs$lang$maxFixedArity = 3;
G__11756.cljs$lang$applyTo = (function (arglist__11759){
var x = cljs.core.first(arglist__11759);
var y = cljs.core.first(cljs.core.next(arglist__11759));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11759)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11759)));
return G__11756__delegate.call(this, x, y, z, args);
});
return G__11756;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11739.call(this);
case  1 :
return sp2__11740.call(this,x);
case  2 :
return sp2__11741.call(this,x,y);
case  3 :
return sp2__11742.call(this,x,y,z);
default:
return sp2__11743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11743.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11723 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11893 = (function (){
return null;
});
var sp3__11894 = (function (x){
var or__3548__auto____11675 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11675))
{return or__3548__auto____11675;
} else
{var or__3548__auto____11676 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11676))
{return or__3548__auto____11676;
} else
{return p3.call(null,x);
}
}
});
var sp3__11895 = (function (x,y){
var or__3548__auto____11677 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11677))
{return or__3548__auto____11677;
} else
{var or__3548__auto____11678 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11678))
{return or__3548__auto____11678;
} else
{var or__3548__auto____11681 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11681))
{return or__3548__auto____11681;
} else
{var or__3548__auto____11682 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11682))
{return or__3548__auto____11682;
} else
{var or__3548__auto____11683 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11683))
{return or__3548__auto____11683;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11896 = (function (x,y,z){
var or__3548__auto____11685 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11685))
{return or__3548__auto____11685;
} else
{var or__3548__auto____11686 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11686))
{return or__3548__auto____11686;
} else
{var or__3548__auto____11687 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11687))
{return or__3548__auto____11687;
} else
{var or__3548__auto____11694 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11694))
{return or__3548__auto____11694;
} else
{var or__3548__auto____11695 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11695))
{return or__3548__auto____11695;
} else
{var or__3548__auto____11696 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11696))
{return or__3548__auto____11696;
} else
{var or__3548__auto____11700 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11700))
{return or__3548__auto____11700;
} else
{var or__3548__auto____11701 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11701))
{return or__3548__auto____11701;
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
var sp3__11897 = (function() { 
var G__11934__delegate = function (x,y,z,args){
var or__3548__auto____11702 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11702))
{return or__3548__auto____11702;
} else
{return cljs.core.some.call(null,(function (p1__11397_SHARP_){
var or__3548__auto____11703 = p1.call(null,p1__11397_SHARP_);

if(cljs.core.truth_(or__3548__auto____11703))
{return or__3548__auto____11703;
} else
{var or__3548__auto____11704 = p2.call(null,p1__11397_SHARP_);

if(cljs.core.truth_(or__3548__auto____11704))
{return or__3548__auto____11704;
} else
{return p3.call(null,p1__11397_SHARP_);
}
}
}),args);
}
};
var G__11934 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11934__delegate.call(this, x, y, z, args);
};
G__11934.cljs$lang$maxFixedArity = 3;
G__11934.cljs$lang$applyTo = (function (arglist__11935){
var x = cljs.core.first(arglist__11935);
var y = cljs.core.first(cljs.core.next(arglist__11935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11935)));
return G__11934__delegate.call(this, x, y, z, args);
});
return G__11934;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11893.call(this);
case  1 :
return sp3__11894.call(this,x);
case  2 :
return sp3__11895.call(this,x,y);
case  3 :
return sp3__11896.call(this,x,y,z);
default:
return sp3__11897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11897.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11724 = (function() { 
var G__11937__delegate = function (p1,p2,p3,ps){
var ps__11706 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11939 = (function (){
return null;
});
var spn__11940 = (function (x){
return cljs.core.some.call(null,(function (p1__11399_SHARP_){
return p1__11399_SHARP_.call(null,x);
}),ps__11706);
});
var spn__11941 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11400_SHARP_){
var or__3548__auto____11708 = p1__11400_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11708))
{return or__3548__auto____11708;
} else
{return p1__11400_SHARP_.call(null,y);
}
}),ps__11706);
});
var spn__11942 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11401_SHARP_){
var or__3548__auto____11709 = p1__11401_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11709))
{return or__3548__auto____11709;
} else
{var or__3548__auto____11710 = p1__11401_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11710))
{return or__3548__auto____11710;
} else
{return p1__11401_SHARP_.call(null,z);
}
}
}),ps__11706);
});
var spn__11943 = (function() { 
var G__11949__delegate = function (x,y,z,args){
var or__3548__auto____11720 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11720))
{return or__3548__auto____11720;
} else
{return cljs.core.some.call(null,(function (p1__11402_SHARP_){
return cljs.core.some.call(null,p1__11402_SHARP_,args);
}),ps__11706);
}
};
var G__11949 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11949__delegate.call(this, x, y, z, args);
};
G__11949.cljs$lang$maxFixedArity = 3;
G__11949.cljs$lang$applyTo = (function (arglist__11952){
var x = cljs.core.first(arglist__11952);
var y = cljs.core.first(cljs.core.next(arglist__11952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11952)));
return G__11949__delegate.call(this, x, y, z, args);
});
return G__11949;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11939.call(this);
case  1 :
return spn__11940.call(this,x);
case  2 :
return spn__11941.call(this,x,y);
case  3 :
return spn__11942.call(this,x,y,z);
default:
return spn__11943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11943.cljs$lang$applyTo;
return spn;
})()
};
var G__11937 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11937__delegate.call(this, p1, p2, p3, ps);
};
G__11937.cljs$lang$maxFixedArity = 3;
G__11937.cljs$lang$applyTo = (function (arglist__11955){
var p1 = cljs.core.first(arglist__11955);
var p2 = cljs.core.first(cljs.core.next(arglist__11955));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11955)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11955)));
return G__11937__delegate.call(this, p1, p2, p3, ps);
});
return G__11937;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11721.call(this,p1);
case  2 :
return some_fn__11722.call(this,p1,p2);
case  3 :
return some_fn__11723.call(this,p1,p2,p3);
default:
return some_fn__11724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11724.cljs$lang$applyTo;
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
var map__11991 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11964 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11964))
{var s__11966 = temp__3698__auto____11964;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11966)),map.call(null,f,cljs.core.rest.call(null,s__11966)));
} else
{return null;
}
})));
});
var map__11992 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11967 = cljs.core.seq.call(null,c1);
var s2__11968 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11969 = s1__11967;

if(cljs.core.truth_(and__3546__auto____11969))
{return s2__11968;
} else
{return and__3546__auto____11969;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11967),cljs.core.first.call(null,s2__11968)),map.call(null,f,cljs.core.rest.call(null,s1__11967),cljs.core.rest.call(null,s2__11968)));
} else
{return null;
}
})));
});
var map__11993 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11972 = cljs.core.seq.call(null,c1);
var s2__11973 = cljs.core.seq.call(null,c2);
var s3__11975 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11977 = s1__11972;

if(cljs.core.truth_(and__3546__auto____11977))
{var and__3546__auto____11979 = s2__11973;

if(cljs.core.truth_(and__3546__auto____11979))
{return s3__11975;
} else
{return and__3546__auto____11979;
}
} else
{return and__3546__auto____11977;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11972),cljs.core.first.call(null,s2__11973),cljs.core.first.call(null,s3__11975)),map.call(null,f,cljs.core.rest.call(null,s1__11972),cljs.core.rest.call(null,s2__11973),cljs.core.rest.call(null,s3__11975)));
} else
{return null;
}
})));
});
var map__11994 = (function() { 
var G__12001__delegate = function (f,c1,c2,c3,colls){
var step__11987 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11986 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11986)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11986),step.call(null,map.call(null,cljs.core.rest,ss__11986)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11634_SHARP_){
return cljs.core.apply.call(null,f,p1__11634_SHARP_);
}),step__11987.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12001 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12001__delegate.call(this, f, c1, c2, c3, colls);
};
G__12001.cljs$lang$maxFixedArity = 4;
G__12001.cljs$lang$applyTo = (function (arglist__12003){
var f = cljs.core.first(arglist__12003);
var c1 = cljs.core.first(cljs.core.next(arglist__12003));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12003)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12003))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12003))));
return G__12001__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12001;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11991.call(this,f,c1);
case  3 :
return map__11992.call(this,f,c1,c2);
case  4 :
return map__11993.call(this,f,c1,c2,c3);
default:
return map__11994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11994.cljs$lang$applyTo;
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
{var temp__3698__auto____12005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12005))
{var s__12006 = temp__3698__auto____12005;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12006),take.call(null,(n - 1),cljs.core.rest.call(null,s__12006)));
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
var step__12012 = (function (n,coll){
while(true){
var s__12008 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12010 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12010))
{return s__12008;
} else
{return and__3546__auto____12010;
}
})()))
{{
var G__12019 = (n - 1);
var G__12020 = cljs.core.rest.call(null,s__12008);
n = G__12019;
coll = G__12020;
continue;
}
} else
{return s__12008;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12012.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12028 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12029 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12028.call(this,n);
case  2 :
return drop_last__12029.call(this,n,s);
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
var s__12038 = cljs.core.seq.call(null,coll);
var lead__12039 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12039))
{{
var G__12042 = cljs.core.next.call(null,s__12038);
var G__12043 = cljs.core.next.call(null,lead__12039);
s__12038 = G__12042;
lead__12039 = G__12043;
continue;
}
} else
{return s__12038;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12053 = (function (pred,coll){
while(true){
var s__12048 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12050 = s__12048;

if(cljs.core.truth_(and__3546__auto____12050))
{return pred.call(null,cljs.core.first.call(null,s__12048));
} else
{return and__3546__auto____12050;
}
})()))
{{
var G__12058 = pred;
var G__12059 = cljs.core.rest.call(null,s__12048);
pred = G__12058;
coll = G__12059;
continue;
}
} else
{return s__12048;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12053.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12065))
{var s__12066 = temp__3698__auto____12065;

return cljs.core.concat.call(null,s__12066,cycle.call(null,s__12066));
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
var repeat__12080 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12081 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12080.call(this,n);
case  2 :
return repeat__12081.call(this,n,x);
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
var repeatedly__12095 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12096 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12095.call(this,n);
case  2 :
return repeatedly__12096.call(this,n,f);
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
var interleave__12112 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12103 = cljs.core.seq.call(null,c1);
var s2__12104 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12105 = s1__12103;

if(cljs.core.truth_(and__3546__auto____12105))
{return s2__12104;
} else
{return and__3546__auto____12105;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12103),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12104),interleave.call(null,cljs.core.rest.call(null,s1__12103),cljs.core.rest.call(null,s2__12104))));
} else
{return null;
}
})));
});
var interleave__12113 = (function() { 
var G__12116__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12110 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12110)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12110),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12110)));
} else
{return null;
}
})));
};
var G__12116 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12116__delegate.call(this, c1, c2, colls);
};
G__12116.cljs$lang$maxFixedArity = 2;
G__12116.cljs$lang$applyTo = (function (arglist__12120){
var c1 = cljs.core.first(arglist__12120);
var c2 = cljs.core.first(cljs.core.next(arglist__12120));
var colls = cljs.core.rest(cljs.core.next(arglist__12120));
return G__12116__delegate.call(this, c1, c2, colls);
});
return G__12116;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12112.call(this,c1,c2);
default:
return interleave__12113.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12113.cljs$lang$applyTo;
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
var cat__12123 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12121 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12121))
{var coll__12122 = temp__3695__auto____12121;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12122),cat.call(null,cljs.core.rest.call(null,coll__12122),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12123.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12131 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12133 = (function() { 
var G__12137__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12137 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12137__delegate.call(this, f, coll, colls);
};
G__12137.cljs$lang$maxFixedArity = 2;
G__12137.cljs$lang$applyTo = (function (arglist__12138){
var f = cljs.core.first(arglist__12138);
var coll = cljs.core.first(cljs.core.next(arglist__12138));
var colls = cljs.core.rest(cljs.core.next(arglist__12138));
return G__12137__delegate.call(this, f, coll, colls);
});
return G__12137;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12131.call(this,f,coll);
default:
return mapcat__12133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12133.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12186))
{var s__12188 = temp__3698__auto____12186;

var f__12189 = cljs.core.first.call(null,s__12188);
var r__12190 = cljs.core.rest.call(null,s__12188);

if(cljs.core.truth_(pred.call(null,f__12189)))
{return cljs.core.cons.call(null,f__12189,filter.call(null,pred,r__12190));
} else
{return filter.call(null,pred,r__12190);
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
var walk__12202 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12202.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12194_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12194_SHARP_));
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
var partition__12227 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12228 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12212 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12212))
{var s__12213 = temp__3698__auto____12212;

var p__12215 = cljs.core.take.call(null,n,s__12213);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12215))))
{return cljs.core.cons.call(null,p__12215,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12213)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12229 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12219 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12219))
{var s__12220 = temp__3698__auto____12219;

var p__12222 = cljs.core.take.call(null,n,s__12220);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12222))))
{return cljs.core.cons.call(null,p__12222,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12220)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12222,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12227.call(this,n,step);
case  3 :
return partition__12228.call(this,n,step,pad);
case  4 :
return partition__12229.call(this,n,step,pad,coll);
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
var get_in__12249 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12250 = (function (m,ks,not_found){
var sentinel__12240 = cljs.core.lookup_sentinel;
var m__12241 = m;
var ks__12243 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12243))
{var m__12244 = cljs.core.get.call(null,m__12241,cljs.core.first.call(null,ks__12243),sentinel__12240);

if(cljs.core.truth_((sentinel__12240 === m__12244)))
{return not_found;
} else
{{
var G__12337 = sentinel__12240;
var G__12352 = m__12244;
var G__12353 = cljs.core.next.call(null,ks__12243);
sentinel__12240 = G__12337;
m__12241 = G__12352;
ks__12243 = G__12353;
continue;
}
}
} else
{return m__12241;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12249.call(this,m,ks);
case  3 :
return get_in__12250.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12354,v){
var vec__12355__12364 = p__12354;
var k__12374 = cljs.core.nth.call(null,vec__12355__12364,0,null);
var ks__12375 = cljs.core.nthnext.call(null,vec__12355__12364,1);

if(cljs.core.truth_(ks__12375))
{return cljs.core.assoc.call(null,m,k__12374,assoc_in.call(null,cljs.core.get.call(null,m,k__12374),ks__12375,v));
} else
{return cljs.core.assoc.call(null,m,k__12374,v);
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
var update_in__delegate = function (m,p__12381,f,args){
var vec__12382__12383 = p__12381;
var k__12384 = cljs.core.nth.call(null,vec__12382__12383,0,null);
var ks__12385 = cljs.core.nthnext.call(null,vec__12382__12383,1);

if(cljs.core.truth_(ks__12385))
{return cljs.core.assoc.call(null,m,k__12384,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12384),ks__12385,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12384,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12384),args));
}
};
var update_in = function (m,p__12381,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12381, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12389){
var m = cljs.core.first(arglist__12389);
var p__12381 = cljs.core.first(cljs.core.next(arglist__12389));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12389)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12389)));
return update_in__delegate.call(this, m, p__12381, f, args);
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
var this__12423 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12547 = null;
var G__12547__12548 = (function (coll,k){
var this__12425 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12547__12549 = (function (coll,k,not_found){
var this__12427 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12547 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12547__12548.call(this,coll,k);
case  3 :
return G__12547__12549.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12547;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12429 = this;
var new_array__12430 = cljs.core.aclone.call(null,this__12429.array);

(new_array__12430[k] = v);
return (new cljs.core.Vector(this__12429.meta,new_array__12430));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12558 = null;
var G__12558__12561 = (function (coll,k){
var this__12431 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12558__12562 = (function (coll,k,not_found){
var this__12433 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12558 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12558__12561.call(this,coll,k);
case  3 :
return G__12558__12562.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12558;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12435 = this;
var new_array__12437 = cljs.core.aclone.call(null,this__12435.array);

new_array__12437.push(o);
return (new cljs.core.Vector(this__12435.meta,new_array__12437));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12573 = null;
var G__12573__12574 = (function (v,f){
var this__12439 = this;
return cljs.core.ci_reduce.call(null,this__12439.array,f);
});
var G__12573__12575 = (function (v,f,start){
var this__12440 = this;
return cljs.core.ci_reduce.call(null,this__12440.array,f,start);
});
G__12573 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12573__12574.call(this,v,f);
case  3 :
return G__12573__12575.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12573;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12442 = this;
if(cljs.core.truth_((this__12442.array.length > 0)))
{var vector_seq__12447 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12442.array.length)))
{return cljs.core.cons.call(null,(this__12442.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12447.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12449 = this;
return this__12449.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12451 = this;
var count__12452 = this__12451.array.length;

if(cljs.core.truth_((count__12452 > 0)))
{return (this__12451.array[(count__12452 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12454 = this;
if(cljs.core.truth_((this__12454.array.length > 0)))
{var new_array__12456 = cljs.core.aclone.call(null,this__12454.array);

new_array__12456.pop();
return (new cljs.core.Vector(this__12454.meta,new_array__12456));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12459 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12464 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12466 = this;
return (new cljs.core.Vector(meta,this__12466.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12468 = this;
return this__12468.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12588 = null;
var G__12588__12589 = (function (coll,n){
var this__12470 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12471 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12471))
{return (n < this__12470.array.length);
} else
{return and__3546__auto____12471;
}
})()))
{return (this__12470.array[n]);
} else
{return null;
}
});
var G__12588__12590 = (function (coll,n,not_found){
var this__12476 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12478 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12478))
{return (n < this__12476.array.length);
} else
{return and__3546__auto____12478;
}
})()))
{return (this__12476.array[n]);
} else
{return not_found;
}
});
G__12588 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12588__12589.call(this,coll,n);
case  3 :
return G__12588__12590.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12588;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12481 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12481.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12609){
var args = cljs.core.seq( arglist__12609 );;
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
var this__12620 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12752 = null;
var G__12752__12753 = (function (coll,k){
var this__12622 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12752__12754 = (function (coll,k,not_found){
var this__12624 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12752 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12752__12753.call(this,coll,k);
case  3 :
return G__12752__12754.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12752;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12629 = this;
var v_pos__12631 = (this__12629.start + key);

return (new cljs.core.Subvec(this__12629.meta,cljs.core._assoc.call(null,this__12629.v,v_pos__12631,val),this__12629.start,((this__12629.end > (v_pos__12631 + 1)) ? this__12629.end : (v_pos__12631 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12761 = null;
var G__12761__12762 = (function (coll,k){
var this__12634 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12761__12763 = (function (coll,k,not_found){
var this__12658 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12761 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12761__12762.call(this,coll,k);
case  3 :
return G__12761__12763.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12761;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12662 = this;
return (new cljs.core.Subvec(this__12662.meta,cljs.core._assoc_n.call(null,this__12662.v,this__12662.end,o),this__12662.start,(this__12662.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12768 = null;
var G__12768__12771 = (function (coll,f){
var this__12664 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12768__12772 = (function (coll,f,start){
var this__12666 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12768 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12768__12771.call(this,coll,f);
case  3 :
return G__12768__12772.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12768;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12668 = this;
var subvec_seq__12672 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12668.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12668.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12672.call(null,this__12668.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12673 = this;
return (this__12673.end - this__12673.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12675 = this;
return cljs.core._nth.call(null,this__12675.v,(this__12675.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12677 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12677.start,this__12677.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12677.meta,this__12677.v,this__12677.start,(this__12677.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12737 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12738 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12739 = this;
return (new cljs.core.Subvec(meta,this__12739.v,this__12739.start,this__12739.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12740 = this;
return this__12740.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12792 = null;
var G__12792__12793 = (function (coll,n){
var this__12741 = this;
return cljs.core._nth.call(null,this__12741.v,(this__12741.start + n));
});
var G__12792__12794 = (function (coll,n,not_found){
var this__12743 = this;
return cljs.core._nth.call(null,this__12743.v,(this__12743.start + n),not_found);
});
G__12792 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12792__12793.call(this,coll,n);
case  3 :
return G__12792__12794.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12792;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12746 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12746.meta);
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
var subvec__12807 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12809 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12807.call(this,v,start);
case  3 :
return subvec__12809.call(this,v,start,end);
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
var this__12844 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12847 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12849 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12849.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12850 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12855 = this;
return cljs.core._first.call(null,this__12855.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12856 = this;
var temp__3695__auto____12858 = cljs.core.next.call(null,this__12856.front);

if(cljs.core.truth_(temp__3695__auto____12858))
{var f1__12860 = temp__3695__auto____12858;

return (new cljs.core.PersistentQueueSeq(this__12856.meta,f1__12860,this__12856.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12856.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12856.meta,this__12856.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12862 = this;
return this__12862.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12867 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12867.front,this__12867.rear));
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
var this__12941 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12942 = this;
if(cljs.core.truth_(this__12942.front))
{return (new cljs.core.PersistentQueue(this__12942.meta,(this__12942.count + 1),this__12942.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12943 = this__12942.rear;

if(cljs.core.truth_(or__3548__auto____12943))
{return or__3548__auto____12943;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12942.meta,(this__12942.count + 1),cljs.core.conj.call(null,this__12942.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12944 = this;
var rear__12945 = cljs.core.seq.call(null,this__12944.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12946 = this__12944.front;

if(cljs.core.truth_(or__3548__auto____12946))
{return or__3548__auto____12946;
} else
{return rear__12945;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12944.front,cljs.core.seq.call(null,rear__12945)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12947 = this;
return this__12947.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12948 = this;
return cljs.core._first.call(null,this__12948.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12949 = this;
if(cljs.core.truth_(this__12949.front))
{var temp__3695__auto____12950 = cljs.core.next.call(null,this__12949.front);

if(cljs.core.truth_(temp__3695__auto____12950))
{var f1__12951 = temp__3695__auto____12950;

return (new cljs.core.PersistentQueue(this__12949.meta,(this__12949.count - 1),f1__12951,this__12949.rear));
} else
{return (new cljs.core.PersistentQueue(this__12949.meta,(this__12949.count - 1),cljs.core.seq.call(null,this__12949.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12952 = this;
return cljs.core.first.call(null,this__12952.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12954 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12956 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12959 = this;
return (new cljs.core.PersistentQueue(meta,this__12959.count,this__12959.front,this__12959.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12960 = this;
return this__12960.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12961 = this;
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
var this__12990 = this;
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
var len__13039 = array.length;

var i__13041 = 0;

while(true){
if(cljs.core.truth_((i__13041 < len__13039)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13041]))))
{return i__13041;
} else
{{
var G__13050 = (i__13041 + incr);
i__13041 = G__13050;
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
var obj_map_contains_key_QMARK___13055 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13056 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13053 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13053))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13053;
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
return obj_map_contains_key_QMARK___13055.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13056.call(this,k,strobj,true_val,false_val);
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
var this__13073 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13231 = null;
var G__13231__13232 = (function (coll,k){
var this__13076 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13231__13233 = (function (coll,k,not_found){
var this__13077 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13077.strobj,(this__13077.strobj[k]),not_found);
});
G__13231 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13231__13232.call(this,coll,k);
case  3 :
return G__13231__13233.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13231;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13081 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13084 = goog.object.clone.call(null,this__13081.strobj);
var overwrite_QMARK___13087 = new_strobj__13084.hasOwnProperty(k);

(new_strobj__13084[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13087))
{return (new cljs.core.ObjMap(this__13081.meta,this__13081.keys,new_strobj__13084));
} else
{var new_keys__13092 = cljs.core.aclone.call(null,this__13081.keys);

new_keys__13092.push(k);
return (new cljs.core.ObjMap(this__13081.meta,new_keys__13092,new_strobj__13084));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13081.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13094 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13094.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13237 = null;
var G__13237__13238 = (function (coll,k){
var this__13096 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13237__13239 = (function (coll,k,not_found){
var this__13097 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13237 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13237__13238.call(this,coll,k);
case  3 :
return G__13237__13239.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13237;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13100 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13101 = this;
if(cljs.core.truth_((this__13101.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13067_SHARP_){
return cljs.core.vector.call(null,p1__13067_SHARP_,(this__13101.strobj[p1__13067_SHARP_]));
}),this__13101.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13105 = this;
return this__13105.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13107 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13108 = this;
return (new cljs.core.ObjMap(meta,this__13108.keys,this__13108.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13110 = this;
return this__13110.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13111 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13111.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13113 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13115 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13115))
{return this__13113.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13115;
}
})()))
{var new_keys__13117 = cljs.core.aclone.call(null,this__13113.keys);
var new_strobj__13118 = goog.object.clone.call(null,this__13113.strobj);

new_keys__13117.splice(cljs.core.scan_array.call(null,1,k,new_keys__13117),1);
cljs.core.js_delete.call(null,new_strobj__13118,k);
return (new cljs.core.ObjMap(this__13113.meta,new_keys__13117,new_strobj__13118));
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
var this__13262 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13379 = null;
var G__13379__13380 = (function (coll,k){
var this__13265 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13379__13381 = (function (coll,k,not_found){
var this__13267 = this;
var bucket__13269 = (this__13267.hashobj[cljs.core.hash.call(null,k)]);
var i__13272 = (cljs.core.truth_(bucket__13269)?cljs.core.scan_array.call(null,2,k,bucket__13269):null);

if(cljs.core.truth_(i__13272))
{return (bucket__13269[(i__13272 + 1)]);
} else
{return not_found;
}
});
G__13379 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13379__13380.call(this,coll,k);
case  3 :
return G__13379__13381.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13379;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13273 = this;
var h__13274 = cljs.core.hash.call(null,k);
var bucket__13275 = (this__13273.hashobj[h__13274]);

if(cljs.core.truth_(bucket__13275))
{var new_bucket__13277 = cljs.core.aclone.call(null,bucket__13275);
var new_hashobj__13280 = goog.object.clone.call(null,this__13273.hashobj);

(new_hashobj__13280[h__13274] = new_bucket__13277);
var temp__3695__auto____13284 = cljs.core.scan_array.call(null,2,k,new_bucket__13277);

if(cljs.core.truth_(temp__3695__auto____13284))
{var i__13322 = temp__3695__auto____13284;

(new_bucket__13277[(i__13322 + 1)] = v);
return (new cljs.core.HashMap(this__13273.meta,this__13273.count,new_hashobj__13280));
} else
{new_bucket__13277.push(k,v);
return (new cljs.core.HashMap(this__13273.meta,(this__13273.count + 1),new_hashobj__13280));
}
} else
{var new_hashobj__13325 = goog.object.clone.call(null,this__13273.hashobj);

(new_hashobj__13325[h__13274] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13273.meta,(this__13273.count + 1),new_hashobj__13325));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13327 = this;
var bucket__13329 = (this__13327.hashobj[cljs.core.hash.call(null,k)]);
var i__13330 = (cljs.core.truth_(bucket__13329)?cljs.core.scan_array.call(null,2,k,bucket__13329):null);

if(cljs.core.truth_(i__13330))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13395 = null;
var G__13395__13396 = (function (coll,k){
var this__13331 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13395__13397 = (function (coll,k,not_found){
var this__13333 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13395 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13395__13396.call(this,coll,k);
case  3 :
return G__13395__13397.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13395;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13334 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13337 = this;
if(cljs.core.truth_((this__13337.count > 0)))
{var hashes__13340 = cljs.core.js_keys.call(null,this__13337.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13250_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13337.hashobj[p1__13250_SHARP_])));
}),hashes__13340);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13343 = this;
return this__13343.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13349 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13354 = this;
return (new cljs.core.HashMap(meta,this__13354.count,this__13354.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13356 = this;
return this__13356.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13360 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13360.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13363 = this;
var h__13364 = cljs.core.hash.call(null,k);
var bucket__13366 = (this__13363.hashobj[h__13364]);
var i__13368 = (cljs.core.truth_(bucket__13366)?cljs.core.scan_array.call(null,2,k,bucket__13366):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13368)))
{return coll;
} else
{var new_hashobj__13369 = goog.object.clone.call(null,this__13363.hashobj);

if(cljs.core.truth_((3 > bucket__13366.length)))
{cljs.core.js_delete.call(null,new_hashobj__13369,h__13364);
} else
{var new_bucket__13371 = cljs.core.aclone.call(null,bucket__13366);

new_bucket__13371.splice(i__13368,2);
(new_hashobj__13369[h__13364] = new_bucket__13371);
}
return (new cljs.core.HashMap(this__13363.meta,(this__13363.count - 1),new_hashobj__13369));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13463 = ks.length;

var i__13464 = 0;
var out__13465 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13464 < len__13463)))
{{
var G__13466 = (i__13464 + 1);
var G__13467 = cljs.core.assoc.call(null,out__13465,(ks[i__13464]),(vs[i__13464]));
i__13464 = G__13466;
out__13465 = G__13467;
continue;
}
} else
{return out__13465;
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
var in$__13471 = cljs.core.seq.call(null,keyvals);
var out__13473 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13471))
{{
var G__13477 = cljs.core.nnext.call(null,in$__13471);
var G__13479 = cljs.core.assoc.call(null,out__13473,cljs.core.first.call(null,in$__13471),cljs.core.second.call(null,in$__13471));
in$__13471 = G__13477;
out__13473 = G__13479;
continue;
}
} else
{return out__13473;
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
hash_map.cljs$lang$applyTo = (function (arglist__13480){
var keyvals = cljs.core.seq( arglist__13480 );;
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
{return cljs.core.reduce.call(null,(function (p1__13486_SHARP_,p2__13487_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13496 = p1__13486_SHARP_;

if(cljs.core.truth_(or__3548__auto____13496))
{return or__3548__auto____13496;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13487_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13503){
var maps = cljs.core.seq( arglist__13503 );;
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
{var merge_entry__13512 = (function (m,e){
var k__13508 = cljs.core.first.call(null,e);
var v__13509 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13508)))
{return cljs.core.assoc.call(null,m,k__13508,f.call(null,cljs.core.get.call(null,m,k__13508),v__13509));
} else
{return cljs.core.assoc.call(null,m,k__13508,v__13509);
}
});
var merge2__13514 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13512,(function (){var or__3548__auto____13513 = m1;

if(cljs.core.truth_(or__3548__auto____13513))
{return or__3548__auto____13513;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13514,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13529){
var f = cljs.core.first(arglist__13529);
var maps = cljs.core.rest(arglist__13529);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13540 = cljs.core.ObjMap.fromObject([],{});
var keys__13542 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13542))
{var key__13543 = cljs.core.first.call(null,keys__13542);
var entry__13544 = cljs.core.get.call(null,map,key__13543,"﷐'user/not-found");

{
var G__13555 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13544,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13540,key__13543,entry__13544):ret__13540);
var G__13557 = cljs.core.next.call(null,keys__13542);
ret__13540 = G__13555;
keys__13542 = G__13557;
continue;
}
} else
{return ret__13540;
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
var this__13574 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13609 = null;
var G__13609__13610 = (function (coll,v){
var this__13575 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13609__13611 = (function (coll,v,not_found){
var this__13577 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13577.hash_map,v)))
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
var G__13618 = null;
var G__13618__13619 = (function (coll,k){
var this__13582 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13618__13620 = (function (coll,k,not_found){
var this__13584 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13618 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13618__13619.call(this,coll,k);
case  3 :
return G__13618__13620.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13618;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13589 = this;
return (new cljs.core.Set(this__13589.meta,cljs.core.assoc.call(null,this__13589.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13590 = this;
return cljs.core.keys.call(null,this__13590.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13591 = this;
return (new cljs.core.Set(this__13591.meta,cljs.core.dissoc.call(null,this__13591.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13592 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13595 = this;
var and__3546__auto____13596 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13596))
{var and__3546__auto____13597 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13597))
{return cljs.core.every_QMARK_.call(null,(function (p1__13535_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13535_SHARP_);
}),other);
} else
{return and__3546__auto____13597;
}
} else
{return and__3546__auto____13596;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13603 = this;
return (new cljs.core.Set(meta,this__13603.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13606 = this;
return this__13606.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13607 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13607.meta);
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
var G__13650 = cljs.core.rest.call(null,in$__13638);
var G__13651 = cljs.core.conj.call(null,out__13639,cljs.core.first.call(null,in$__13638));
in$__13638 = G__13650;
out__13639 = G__13651;
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
{var n__13656 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13658 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13658))
{var e__13662 = temp__3695__auto____13658;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13662));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13656,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13635_SHARP_){
var temp__3695__auto____13664 = cljs.core.find.call(null,smap,p1__13635_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13664))
{var e__13665 = temp__3695__auto____13664;

return cljs.core.second.call(null,e__13665);
} else
{return p1__13635_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13782 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13732,seen){
while(true){
var vec__13733__13736 = p__13732;
var f__13737 = cljs.core.nth.call(null,vec__13733__13736,0,null);
var xs__13738 = vec__13733__13736;

var temp__3698__auto____13740 = cljs.core.seq.call(null,xs__13738);

if(cljs.core.truth_(temp__3698__auto____13740))
{var s__13741 = temp__3698__auto____13740;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13737)))
{{
var G__13787 = cljs.core.rest.call(null,s__13741);
var G__13788 = seen;
p__13732 = G__13787;
seen = G__13788;
continue;
}
} else
{return cljs.core.cons.call(null,f__13737,step.call(null,cljs.core.rest.call(null,s__13741),cljs.core.conj.call(null,seen,f__13737)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13782.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13793 = cljs.core.Vector.fromArray([]);
var s__13794 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13794)))
{{
var G__13796 = cljs.core.conj.call(null,ret__13793,cljs.core.first.call(null,s__13794));
var G__13797 = cljs.core.next.call(null,s__13794);
ret__13793 = G__13796;
s__13794 = G__13797;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13793);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13801 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13801))
{return or__3548__auto____13801;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13804 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13804 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13804 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13813 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13813))
{return or__3548__auto____13813;
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
var map__13850 = cljs.core.ObjMap.fromObject([],{});
var ks__13851 = cljs.core.seq.call(null,keys);
var vs__13852 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13853 = ks__13851;

if(cljs.core.truth_(and__3546__auto____13853))
{return vs__13852;
} else
{return and__3546__auto____13853;
}
})()))
{{
var G__13855 = cljs.core.assoc.call(null,map__13850,cljs.core.first.call(null,ks__13851),cljs.core.first.call(null,vs__13852));
var G__13856 = cljs.core.next.call(null,ks__13851);
var G__13857 = cljs.core.next.call(null,vs__13852);
map__13850 = G__13855;
ks__13851 = G__13856;
vs__13852 = G__13857;
continue;
}
} else
{return map__13850;
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
var max_key__13860 = (function (k,x){
return x;
});
var max_key__13861 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13862 = (function() { 
var G__13865__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13848_SHARP_,p2__13849_SHARP_){
return max_key.call(null,k,p1__13848_SHARP_,p2__13849_SHARP_);
}),max_key.call(null,k,x,y),more);
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
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13860.call(this,k,x);
case  3 :
return max_key__13861.call(this,k,x,y);
default:
return max_key__13862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13862.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13874 = (function (k,x){
return x;
});
var min_key__13875 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13877 = (function() { 
var G__13881__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13858_SHARP_,p2__13859_SHARP_){
return min_key.call(null,k,p1__13858_SHARP_,p2__13859_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13881 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13881__delegate.call(this, k, x, y, more);
};
G__13881.cljs$lang$maxFixedArity = 3;
G__13881.cljs$lang$applyTo = (function (arglist__13886){
var k = cljs.core.first(arglist__13886);
var x = cljs.core.first(cljs.core.next(arglist__13886));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13886)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13886)));
return G__13881__delegate.call(this, k, x, y, more);
});
return G__13881;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13874.call(this,k,x);
case  3 :
return min_key__13875.call(this,k,x,y);
default:
return min_key__13877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13877.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13889 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13890 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13887 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13887))
{var s__13888 = temp__3698__auto____13887;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13888),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13888)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13889.call(this,n,step);
case  3 :
return partition_all__13890.call(this,n,step,coll);
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
var temp__3698__auto____13902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13902))
{var s__13904 = temp__3698__auto____13902;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13904))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13904),take_while.call(null,pred,cljs.core.rest.call(null,s__13904)));
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
var this__13918 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13922 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13992 = null;
var G__13992__13993 = (function (rng,f){
var this__13925 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13992__13994 = (function (rng,f,s){
var this__13929 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13992 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13992__13993.call(this,rng,f);
case  3 :
return G__13992__13994.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13992;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13933 = this;
var comp__13942 = (cljs.core.truth_((this__13933.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13942.call(null,this__13933.start,this__13933.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13949 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13949.end - this__13949.start) / this__13949.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13957 = this;
return this__13957.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13959 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13959.meta,(this__13959.start + this__13959.step),this__13959.end,this__13959.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13963 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13967 = this;
return (new cljs.core.Range(meta,this__13967.start,this__13967.end,this__13967.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13970 = this;
return this__13970.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14021 = null;
var G__14021__14022 = (function (rng,n){
var this__13972 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13972.start + (n * this__13972.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13978 = (this__13972.start > this__13972.end);

if(cljs.core.truth_(and__3546__auto____13978))
{return cljs.core._EQ_.call(null,this__13972.step,0);
} else
{return and__3546__auto____13978;
}
})()))
{return this__13972.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14021__14023 = (function (rng,n,not_found){
var this__13981 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13981.start + (n * this__13981.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13982 = (this__13981.start > this__13981.end);

if(cljs.core.truth_(and__3546__auto____13982))
{return cljs.core._EQ_.call(null,this__13981.step,0);
} else
{return and__3546__auto____13982;
}
})()))
{return this__13981.start;
} else
{return not_found;
}
}
});
G__14021 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14021__14022.call(this,rng,n);
case  3 :
return G__14021__14023.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14021;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13984 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13984.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14036 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14037 = (function (end){
return range.call(null,0,end,1);
});
var range__14038 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14039 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14036.call(this);
case  1 :
return range__14037.call(this,start);
case  2 :
return range__14038.call(this,start,end);
case  3 :
return range__14039.call(this,start,end,step);
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
var temp__3698__auto____14047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14047))
{var s__14048 = temp__3698__auto____14047;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14048),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14048)));
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
var temp__3698__auto____14072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14072))
{var s__14076 = temp__3698__auto____14072;

var fst__14078 = cljs.core.first.call(null,s__14076);
var fv__14079 = f.call(null,fst__14078);
var run__14081 = cljs.core.cons.call(null,fst__14078,cljs.core.take_while.call(null,(function (p1__14053_SHARP_){
return cljs.core._EQ_.call(null,fv__14079,f.call(null,p1__14053_SHARP_));
}),cljs.core.next.call(null,s__14076)));

return cljs.core.cons.call(null,run__14081,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14081),s__14076))));
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
var reductions__14131 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14124 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14124))
{var s__14125 = temp__3695__auto____14124;

return reductions.call(null,f,cljs.core.first.call(null,s__14125),cljs.core.rest.call(null,s__14125));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14132 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14127 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14127))
{var s__14129 = temp__3698__auto____14127;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14129)),cljs.core.rest.call(null,s__14129));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14131.call(this,f,init);
case  3 :
return reductions__14132.call(this,f,init,coll);
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
var juxt__14167 = (function (f){
return (function() {
var G__14173 = null;
var G__14173__14174 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14173__14175 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14173__14176 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14173__14177 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14173__14178 = (function() { 
var G__14183__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14183 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14183__delegate.call(this, x, y, z, args);
};
G__14183.cljs$lang$maxFixedArity = 3;
G__14183.cljs$lang$applyTo = (function (arglist__14185){
var x = cljs.core.first(arglist__14185);
var y = cljs.core.first(cljs.core.next(arglist__14185));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14185)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14185)));
return G__14183__delegate.call(this, x, y, z, args);
});
return G__14183;
})()
;
G__14173 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14173__14174.call(this);
case  1 :
return G__14173__14175.call(this,x);
case  2 :
return G__14173__14176.call(this,x,y);
case  3 :
return G__14173__14177.call(this,x,y,z);
default:
return G__14173__14178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14173.cljs$lang$maxFixedArity = 3;
G__14173.cljs$lang$applyTo = G__14173__14178.cljs$lang$applyTo;
return G__14173;
})()
});
var juxt__14168 = (function (f,g){
return (function() {
var G__14189 = null;
var G__14189__14190 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14189__14191 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14189__14192 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14189__14193 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14189__14194 = (function() { 
var G__14199__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14199 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14199__delegate.call(this, x, y, z, args);
};
G__14199.cljs$lang$maxFixedArity = 3;
G__14199.cljs$lang$applyTo = (function (arglist__14203){
var x = cljs.core.first(arglist__14203);
var y = cljs.core.first(cljs.core.next(arglist__14203));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14203)));
return G__14199__delegate.call(this, x, y, z, args);
});
return G__14199;
})()
;
G__14189 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14189__14190.call(this);
case  1 :
return G__14189__14191.call(this,x);
case  2 :
return G__14189__14192.call(this,x,y);
case  3 :
return G__14189__14193.call(this,x,y,z);
default:
return G__14189__14194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14189.cljs$lang$maxFixedArity = 3;
G__14189.cljs$lang$applyTo = G__14189__14194.cljs$lang$applyTo;
return G__14189;
})()
});
var juxt__14169 = (function (f,g,h){
return (function() {
var G__14211 = null;
var G__14211__14212 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14211__14213 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14211__14214 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14211__14215 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14211__14216 = (function() { 
var G__14237__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14237__delegate.call(this, x, y, z, args);
};
G__14237.cljs$lang$maxFixedArity = 3;
G__14237.cljs$lang$applyTo = (function (arglist__14244){
var x = cljs.core.first(arglist__14244);
var y = cljs.core.first(cljs.core.next(arglist__14244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14244)));
return G__14237__delegate.call(this, x, y, z, args);
});
return G__14237;
})()
;
G__14211 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14211__14212.call(this);
case  1 :
return G__14211__14213.call(this,x);
case  2 :
return G__14211__14214.call(this,x,y);
case  3 :
return G__14211__14215.call(this,x,y,z);
default:
return G__14211__14216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14211.cljs$lang$maxFixedArity = 3;
G__14211.cljs$lang$applyTo = G__14211__14216.cljs$lang$applyTo;
return G__14211;
})()
});
var juxt__14170 = (function() { 
var G__14247__delegate = function (f,g,h,fs){
var fs__14160 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14248 = null;
var G__14248__14249 = (function (){
return cljs.core.reduce.call(null,(function (p1__14105_SHARP_,p2__14106_SHARP_){
return cljs.core.conj.call(null,p1__14105_SHARP_,p2__14106_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14160);
});
var G__14248__14250 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14108_SHARP_,p2__14109_SHARP_){
return cljs.core.conj.call(null,p1__14108_SHARP_,p2__14109_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14160);
});
var G__14248__14251 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14110_SHARP_,p2__14111_SHARP_){
return cljs.core.conj.call(null,p1__14110_SHARP_,p2__14111_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14160);
});
var G__14248__14252 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14113_SHARP_,p2__14114_SHARP_){
return cljs.core.conj.call(null,p1__14113_SHARP_,p2__14114_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14160);
});
var G__14248__14253 = (function() { 
var G__14261__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14115_SHARP_,p2__14116_SHARP_){
return cljs.core.conj.call(null,p1__14115_SHARP_,cljs.core.apply.call(null,p2__14116_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14160);
};
var G__14261 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14261__delegate.call(this, x, y, z, args);
};
G__14261.cljs$lang$maxFixedArity = 3;
G__14261.cljs$lang$applyTo = (function (arglist__14265){
var x = cljs.core.first(arglist__14265);
var y = cljs.core.first(cljs.core.next(arglist__14265));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14265)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14265)));
return G__14261__delegate.call(this, x, y, z, args);
});
return G__14261;
})()
;
G__14248 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14248__14249.call(this);
case  1 :
return G__14248__14250.call(this,x);
case  2 :
return G__14248__14251.call(this,x,y);
case  3 :
return G__14248__14252.call(this,x,y,z);
default:
return G__14248__14253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14248.cljs$lang$maxFixedArity = 3;
G__14248.cljs$lang$applyTo = G__14248__14253.cljs$lang$applyTo;
return G__14248;
})()
};
var G__14247 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14247__delegate.call(this, f, g, h, fs);
};
G__14247.cljs$lang$maxFixedArity = 3;
G__14247.cljs$lang$applyTo = (function (arglist__14269){
var f = cljs.core.first(arglist__14269);
var g = cljs.core.first(cljs.core.next(arglist__14269));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14269)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14269)));
return G__14247__delegate.call(this, f, g, h, fs);
});
return G__14247;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14167.call(this,f);
case  2 :
return juxt__14168.call(this,f,g);
case  3 :
return juxt__14169.call(this,f,g,h);
default:
return juxt__14170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14170.cljs$lang$applyTo;
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
var dorun__14289 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14292 = cljs.core.next.call(null,coll);
coll = G__14292;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14290 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14283 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14283))
{return (n > 0);
} else
{return and__3546__auto____14283;
}
})()))
{{
var G__14294 = (n - 1);
var G__14295 = cljs.core.next.call(null,coll);
n = G__14294;
coll = G__14295;
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
return dorun__14289.call(this,n);
case  2 :
return dorun__14290.call(this,n,coll);
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
var doall__14303 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14304 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14303.call(this,n);
case  2 :
return doall__14304.call(this,n,coll);
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
var matches__14317 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14317),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14317),1)))
{return cljs.core.first.call(null,matches__14317);
} else
{return cljs.core.vec.call(null,matches__14317);
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
var matches__14328 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14328)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14328),1)))
{return cljs.core.first.call(null,matches__14328);
} else
{return cljs.core.vec.call(null,matches__14328);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14343 = cljs.core.re_find.call(null,re,s);
var match_idx__14345 = s.search(re);
var match_str__14346 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14343))?cljs.core.first.call(null,match_data__14343):match_data__14343);
var post_match__14347 = cljs.core.subs.call(null,s,(match_idx__14345 + cljs.core.count.call(null,match_str__14346)));

if(cljs.core.truth_(match_data__14343))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14343,re_seq.call(null,re,post_match__14347));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14353_SHARP_){
return print_one.call(null,p1__14353_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14375 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14375))
{var and__3546__auto____14380 = (function (){var x__445__auto____14376 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14377 = x__445__auto____14376;

if(cljs.core.truth_(and__3546__auto____14377))
{var and__3546__auto____14379 = x__445__auto____14376.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14379))
{return cljs.core.not.call(null,x__445__auto____14376.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14379;
}
} else
{return and__3546__auto____14377;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14376);
}
})();

if(cljs.core.truth_(and__3546__auto____14380))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14380;
}
} else
{return and__3546__auto____14375;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14390 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14397 = x__445__auto____14390;

if(cljs.core.truth_(and__3546__auto____14397))
{var and__3546__auto____14398 = x__445__auto____14390.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14398))
{return cljs.core.not.call(null,x__445__auto____14390.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14398;
}
} else
{return and__3546__auto____14397;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14390);
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
var first_obj__14416 = cljs.core.first.call(null,objs);
var sb__14417 = (new goog.string.StringBuffer());

var G__14418__14419 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14418__14419))
{var obj__14425 = cljs.core.first.call(null,G__14418__14419);
var G__14418__14428 = G__14418__14419;

while(true){
if(cljs.core.truth_((obj__14425 === first_obj__14416)))
{} else
{sb__14417.append(" ");
}
var G__14429__14430 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14425,opts));

if(cljs.core.truth_(G__14429__14430))
{var string__14431 = cljs.core.first.call(null,G__14429__14430);
var G__14429__14432 = G__14429__14430;

while(true){
sb__14417.append(string__14431);
var temp__3698__auto____14433 = cljs.core.next.call(null,G__14429__14432);

if(cljs.core.truth_(temp__3698__auto____14433))
{var G__14429__14434 = temp__3698__auto____14433;

{
var G__14459 = cljs.core.first.call(null,G__14429__14434);
var G__14460 = G__14429__14434;
string__14431 = G__14459;
G__14429__14432 = G__14460;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14438 = cljs.core.next.call(null,G__14418__14428);

if(cljs.core.truth_(temp__3698__auto____14438))
{var G__14418__14439 = temp__3698__auto____14438;

{
var G__14465 = cljs.core.first.call(null,G__14418__14439);
var G__14466 = G__14418__14439;
obj__14425 = G__14465;
G__14418__14428 = G__14466;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14417);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14470 = cljs.core.first.call(null,objs);

var G__14472__14473 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14472__14473))
{var obj__14475 = cljs.core.first.call(null,G__14472__14473);
var G__14472__14476 = G__14472__14473;

while(true){
if(cljs.core.truth_((obj__14475 === first_obj__14470)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14479__14480 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14475,opts));

if(cljs.core.truth_(G__14479__14480))
{var string__14481 = cljs.core.first.call(null,G__14479__14480);
var G__14479__14483 = G__14479__14480;

while(true){
cljs.core.string_print.call(null,string__14481);
var temp__3698__auto____14484 = cljs.core.next.call(null,G__14479__14483);

if(cljs.core.truth_(temp__3698__auto____14484))
{var G__14479__14485 = temp__3698__auto____14484;

{
var G__14496 = cljs.core.first.call(null,G__14479__14485);
var G__14497 = G__14479__14485;
string__14481 = G__14496;
G__14479__14483 = G__14497;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14486 = cljs.core.next.call(null,G__14472__14476);

if(cljs.core.truth_(temp__3698__auto____14486))
{var G__14472__14487 = temp__3698__auto____14486;

{
var G__14505 = cljs.core.first.call(null,G__14472__14487);
var G__14506 = G__14472__14487;
obj__14475 = G__14505;
G__14472__14476 = G__14506;
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
pr_str.cljs$lang$applyTo = (function (arglist__14532){
var objs = cljs.core.seq( arglist__14532 );;
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
pr.cljs$lang$applyTo = (function (arglist__14541){
var objs = cljs.core.seq( arglist__14541 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14555){
var objs = cljs.core.seq( arglist__14555 );;
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
println.cljs$lang$applyTo = (function (arglist__14566){
var objs = cljs.core.seq( arglist__14566 );;
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
prn.cljs$lang$applyTo = (function (arglist__14572){
var objs = cljs.core.seq( arglist__14572 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14580 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14580,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14596 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14596))
{var nspc__14598 = temp__3698__auto____14596;

return cljs.core.str.call(null,nspc__14598,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14599 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14599))
{var nspc__14600 = temp__3698__auto____14599;

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
var pr_pair__14609 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14609,"{",", ","}",opts,coll);
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
var this__14672 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14675 = this;
var G__14677__14679 = cljs.core.seq.call(null,this__14675.watches);

if(cljs.core.truth_(G__14677__14679))
{var G__14681__14687 = cljs.core.first.call(null,G__14677__14679);
var vec__14684__14688 = G__14681__14687;
var key__14690 = cljs.core.nth.call(null,vec__14684__14688,0,null);
var f__14691 = cljs.core.nth.call(null,vec__14684__14688,1,null);
var G__14677__14692 = G__14677__14679;

var G__14681__14693 = G__14681__14687;
var G__14677__14694 = G__14677__14692;

while(true){
var vec__14695__14696 = G__14681__14693;
var key__14697 = cljs.core.nth.call(null,vec__14695__14696,0,null);
var f__14698 = cljs.core.nth.call(null,vec__14695__14696,1,null);
var G__14677__14699 = G__14677__14694;

f__14698.call(null,key__14697,this$,oldval,newval);
var temp__3698__auto____14701 = cljs.core.next.call(null,G__14677__14699);

if(cljs.core.truth_(temp__3698__auto____14701))
{var G__14677__14702 = temp__3698__auto____14701;

{
var G__14718 = cljs.core.first.call(null,G__14677__14702);
var G__14719 = G__14677__14702;
G__14681__14693 = G__14718;
G__14677__14694 = G__14719;
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
var this__14703 = this;
return this$.watches = cljs.core.assoc.call(null,this__14703.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14704 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14704.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14705 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14705.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14706 = this;
return this__14706.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14709 = this;
return this__14709.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14711 = this;
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
var atom__14740 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14741 = (function() { 
var G__14743__delegate = function (x,p__14722){
var map__14723__14724 = p__14722;
var map__14723__14725 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14723__14724))?cljs.core.apply.call(null,cljs.core.hash_map,map__14723__14724):map__14723__14724);
var validator__14726 = cljs.core.get.call(null,map__14723__14725,"﷐'validator");
var meta__14727 = cljs.core.get.call(null,map__14723__14725,"﷐'meta");

return (new cljs.core.Atom(x,meta__14727,validator__14726,null));
};
var G__14743 = function (x,var_args){
var p__14722 = null;
if (goog.isDef(var_args)) {
  p__14722 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14743__delegate.call(this, x, p__14722);
};
G__14743.cljs$lang$maxFixedArity = 1;
G__14743.cljs$lang$applyTo = (function (arglist__14744){
var x = cljs.core.first(arglist__14744);
var p__14722 = cljs.core.rest(arglist__14744);
return G__14743__delegate.call(this, x, p__14722);
});
return G__14743;
})()
;
atom = function(x,var_args){
var p__14722 = var_args;
switch(arguments.length){
case  1 :
return atom__14740.call(this,x);
default:
return atom__14741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14741.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14745 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14745))
{var validate__14746 = temp__3698__auto____14745;

if(cljs.core.truth_(validate__14746.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14748 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14748,new_value);
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
var swap_BANG___14788 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14789 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14790 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14791 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14792 = (function() { 
var G__14796__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14796 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14796__delegate.call(this, a, f, x, y, z, more);
};
G__14796.cljs$lang$maxFixedArity = 5;
G__14796.cljs$lang$applyTo = (function (arglist__14797){
var a = cljs.core.first(arglist__14797);
var f = cljs.core.first(cljs.core.next(arglist__14797));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14797)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14797))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14797)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14797)))));
return G__14796__delegate.call(this, a, f, x, y, z, more);
});
return G__14796;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14788.call(this,a,f);
case  3 :
return swap_BANG___14789.call(this,a,f,x);
case  4 :
return swap_BANG___14790.call(this,a,f,x,y);
case  5 :
return swap_BANG___14791.call(this,a,f,x,y,z);
default:
return swap_BANG___14792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14792.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14829){
var iref = cljs.core.first(arglist__14829);
var f = cljs.core.first(cljs.core.next(arglist__14829));
var args = cljs.core.rest(cljs.core.next(arglist__14829));
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
var gensym__14848 = (function (){
return gensym.call(null,"G__");
});
var gensym__14849 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14848.call(this);
case  1 :
return gensym__14849.call(this,prefix_string);
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
var this__14857 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14857.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14858 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14858.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14858.state,this__14858.f);
}
return cljs.core.deref.call(null,this__14858.state);
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
delay.cljs$lang$applyTo = (function (arglist__14869){
var body = cljs.core.seq( arglist__14869 );;
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
var map__14875__14876 = options;
var map__14875__14877 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14875__14876))?cljs.core.apply.call(null,cljs.core.hash_map,map__14875__14876):map__14875__14876);
var keywordize_keys__14878 = cljs.core.get.call(null,map__14875__14877,"﷐'keywordize-keys");
var keyfn__14879 = (cljs.core.truth_(keywordize_keys__14878)?cljs.core.keyword:cljs.core.str);
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14890 = (function iter__14880(s__14881){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14881__14883 = s__14881;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14881__14883)))
{var k__14886 = cljs.core.first.call(null,s__14881__14883);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14879.call(null,k__14886),thisfn.call(null,(x[k__14886]))]),iter__14880.call(null,cljs.core.rest.call(null,s__14881__14883)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14890.call(null,cljs.core.js_keys.call(null,x));
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
js__GT_clj.cljs$lang$applyTo = (function (arglist__14952){
var x = cljs.core.first(arglist__14952);
var options = cljs.core.rest(arglist__14952);
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
var mem__14953 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14961__delegate = function (args){
var temp__3695__auto____14954 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14953),args);

if(cljs.core.truth_(temp__3695__auto____14954))
{var v__14955 = temp__3695__auto____14954;

return v__14955;
} else
{var ret__14956 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14953,cljs.core.assoc,args,ret__14956);
return ret__14956;
}
};
var G__14961 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14961__delegate.call(this, args);
};
G__14961.cljs$lang$maxFixedArity = 0;
G__14961.cljs$lang$applyTo = (function (arglist__14965){
var args = cljs.core.seq( arglist__14965 );;
return G__14961__delegate.call(this, args);
});
return G__14961;
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
var trampoline__14971 = (function (f){
while(true){
var ret__14966 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14966)))
{{
var G__14974 = ret__14966;
f = G__14974;
continue;
}
} else
{return ret__14966;
}
break;
}
});
var trampoline__14972 = (function() { 
var G__14976__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14976 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14976__delegate.call(this, f, args);
};
G__14976.cljs$lang$maxFixedArity = 1;
G__14976.cljs$lang$applyTo = (function (arglist__14977){
var f = cljs.core.first(arglist__14977);
var args = cljs.core.rest(arglist__14977);
return G__14976__delegate.call(this, f, args);
});
return G__14976;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14971.call(this,f);
default:
return trampoline__14972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14972.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14985 = (function (){
return rand.call(null,1);
});
var rand__14986 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14985.call(this);
case  1 :
return rand__14986.call(this,n);
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
var k__14995 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14995,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14995,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15019 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15020 = (function (h,child,parent){
var or__3548__auto____15005 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15005))
{return or__3548__auto____15005;
} else
{var or__3548__auto____15009 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15009))
{return or__3548__auto____15009;
} else
{var and__3546__auto____15011 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15011))
{var and__3546__auto____15012 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15012))
{var and__3546__auto____15013 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15013))
{var ret__15014 = true;
var i__15015 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15016 = cljs.core.not.call(null,ret__15014);

if(cljs.core.truth_(or__3548__auto____15016))
{return or__3548__auto____15016;
} else
{return cljs.core._EQ_.call(null,i__15015,cljs.core.count.call(null,parent));
}
})()))
{return ret__15014;
} else
{{
var G__15026 = isa_QMARK_.call(null,h,child.call(null,i__15015),parent.call(null,i__15015));
var G__15027 = (i__15015 + 1);
ret__15014 = G__15026;
i__15015 = G__15027;
continue;
}
}
break;
}
} else
{return and__3546__auto____15013;
}
} else
{return and__3546__auto____15012;
}
} else
{return and__3546__auto____15011;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15019.call(this,h,child);
case  3 :
return isa_QMARK___15020.call(this,h,child,parent);
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
var parents__15031 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15032 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15031.call(this,h);
case  2 :
return parents__15032.call(this,h,tag);
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
var ancestors__15037 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15038 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15037.call(this,h);
case  2 :
return ancestors__15038.call(this,h,tag);
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
var descendants__15041 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15042 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15041.call(this,h);
case  2 :
return descendants__15042.call(this,h,tag);
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
var derive__15063 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15064 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15047 = "﷐'parents".call(null,h);
var td__15048 = "﷐'descendants".call(null,h);
var ta__15049 = "﷐'ancestors".call(null,h);
var tf__15054 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15059 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15047.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15049.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15049.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15047,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15054.call(null,"﷐'ancestors".call(null,h),tag,td__15048,parent,ta__15049),"﷐'descendants":tf__15054.call(null,"﷐'descendants".call(null,h),parent,ta__15049,tag,td__15048)});
})());

if(cljs.core.truth_(or__3548__auto____15059))
{return or__3548__auto____15059;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15063.call(this,h,tag);
case  3 :
return derive__15064.call(this,h,tag,parent);
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
var underive__15130 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15156 = (function (h,tag,parent){
var parentMap__15122 = "﷐'parents".call(null,h);
var childsParents__15124 = (cljs.core.truth_(parentMap__15122.call(null,tag))?cljs.core.disj.call(null,parentMap__15122.call(null,tag),parent):cljs.core.set([]));
var newParents__15126 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15124))?cljs.core.assoc.call(null,parentMap__15122,tag,childsParents__15124):cljs.core.dissoc.call(null,parentMap__15122,tag));
var deriv_seq__15128 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15044_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15044_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15044_SHARP_),cljs.core.second.call(null,p1__15044_SHARP_)));
}),cljs.core.seq.call(null,newParents__15126)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15122.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15045_SHARP_,p2__15046_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15045_SHARP_,p2__15046_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15128));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15130.call(this,h,tag);
case  3 :
return underive__15156.call(this,h,tag,parent);
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
var xprefs__15168 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15170 = (cljs.core.truth_((function (){var and__3546__auto____15169 = xprefs__15168;

if(cljs.core.truth_(and__3546__auto____15169))
{return xprefs__15168.call(null,y);
} else
{return and__3546__auto____15169;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15170))
{return or__3548__auto____15170;
} else
{var or__3548__auto____15174 = (function (){var ps__15173 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15173) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15173),prefer_table)))
{} else
{}
{
var G__15190 = cljs.core.rest.call(null,ps__15173);
ps__15173 = G__15190;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15174))
{return or__3548__auto____15174;
} else
{var or__3548__auto____15178 = (function (){var ps__15176 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15176) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15176),y,prefer_table)))
{} else
{}
{
var G__15194 = cljs.core.rest.call(null,ps__15176);
ps__15176 = G__15194;
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
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15198 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15277 = cljs.core.reduce.call(null,(function (be,p__15202){
var vec__15203__15204 = p__15202;
var k__15205 = cljs.core.nth.call(null,vec__15203__15204,0,null);
var ___15206 = cljs.core.nth.call(null,vec__15203__15204,1,null);
var e__15207 = vec__15203__15204;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15205)))
{var be2__15209 = (cljs.core.truth_((function (){var or__3548__auto____15208 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15208))
{return or__3548__auto____15208;
} else
{return cljs.core.dominates.call(null,k__15205,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15207:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15209),k__15205,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15205," and ",cljs.core.first.call(null,be2__15209),", and neither is preferred")));
}
return be2__15209;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15277))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15277));
return cljs.core.second.call(null,best_entry__15277);
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
{return (function (){var or__3548__auto____15290 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15290))
{return or__3548__auto____15290;
} else
{var or__3548__auto____15291 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15291))
{return or__3548__auto____15291;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15292 = mf;

if(cljs.core.truth_(and__3546__auto____15292))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15292;
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
if(cljs.core.truth_((function (){var and__3546__auto____15295 = mf;

if(cljs.core.truth_(and__3546__auto____15295))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15295;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15296 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15296))
{return or__3548__auto____15296;
} else
{var or__3548__auto____15297 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15297))
{return or__3548__auto____15297;
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
if(cljs.core.truth_((function (){var and__3546__auto____15308 = mf;

if(cljs.core.truth_(and__3546__auto____15308))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15308;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15310 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{var or__3548__auto____15312 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15312))
{return or__3548__auto____15312;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15315 = mf;

if(cljs.core.truth_(and__3546__auto____15315))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15315;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15321 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15321))
{return or__3548__auto____15321;
} else
{var or__3548__auto____15323 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15323))
{return or__3548__auto____15323;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15324 = mf;

if(cljs.core.truth_(and__3546__auto____15324))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15324;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15326 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15326))
{return or__3548__auto____15326;
} else
{var or__3548__auto____15327 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15327))
{return or__3548__auto____15327;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15330 = mf;

if(cljs.core.truth_(and__3546__auto____15330))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15330;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15331 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15331))
{return or__3548__auto____15331;
} else
{var or__3548__auto____15332 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15332))
{return or__3548__auto____15332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15350 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15351 = cljs.core._get_method.call(null,mf,dispatch_val__15350);

if(cljs.core.truth_(target_fn__15351))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15350)));
}
return cljs.core.apply.call(null,target_fn__15351,args);
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
var this__15352 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15353 = this;
cljs.core.swap_BANG_.call(null,this__15353.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15353.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15353.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15353.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15356 = this;
cljs.core.swap_BANG_.call(null,this__15356.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15356.method_cache,this__15356.method_table,this__15356.cached_hierarchy,this__15356.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15357 = this;
cljs.core.swap_BANG_.call(null,this__15357.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15357.method_cache,this__15357.method_table,this__15357.cached_hierarchy,this__15357.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15359 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15359.cached_hierarchy),cljs.core.deref.call(null,this__15359.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15359.method_cache,this__15359.method_table,this__15359.cached_hierarchy,this__15359.hierarchy);
}
var temp__3695__auto____15360 = cljs.core.deref.call(null,this__15359.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15360))
{var target_fn__15362 = temp__3695__auto____15360;

return target_fn__15362;
} else
{var temp__3695__auto____15367 = cljs.core.find_and_cache_best_method.call(null,this__15359.name,dispatch_val,this__15359.hierarchy,this__15359.method_table,this__15359.prefer_table,this__15359.method_cache,this__15359.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15367))
{var target_fn__15369 = temp__3695__auto____15367;

return target_fn__15369;
} else
{return cljs.core.deref.call(null,this__15359.method_table).call(null,this__15359.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15371 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15371.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15371.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15371.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15371.method_cache,this__15371.method_table,this__15371.cached_hierarchy,this__15371.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15374 = this;
return cljs.core.deref.call(null,this__15374.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15375 = this;
return cljs.core.deref.call(null,this__15375.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15376 = this;
return cljs.core.do_dispatch.call(null,mf,this__15376.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15396__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15396 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15396__delegate.call(this, _, args);
};
G__15396.cljs$lang$maxFixedArity = 1;
G__15396.cljs$lang$applyTo = (function (arglist__15397){
var _ = cljs.core.first(arglist__15397);
var args = cljs.core.rest(arglist__15397);
return G__15396__delegate.call(this, _, args);
});
return G__15396;
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
