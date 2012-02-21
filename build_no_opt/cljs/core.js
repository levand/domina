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
var or__3548__auto____7235 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7235))
{return or__3548__auto____7235;
} else
{var or__3548__auto____7238 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7238))
{return or__3548__auto____7238;
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
var _invoke__7586 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7290 = this$;

if(cljs.core.truth_(and__3546__auto____7290))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7290;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7301 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{var or__3548__auto____7304 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7587 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7334 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
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
var _invoke__7588 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{var or__3548__auto____7377 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7589 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7590 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7392 = this$;

if(cljs.core.truth_(and__3546__auto____7392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7398 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{var or__3548__auto____7400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7591 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = this$;

if(cljs.core.truth_(and__3546__auto____7402))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7402;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7407 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{var or__3548__auto____7408 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7592 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7411 = this$;

if(cljs.core.truth_(and__3546__auto____7411))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7411;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7416 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7593 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7420 = this$;

if(cljs.core.truth_(and__3546__auto____7420))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7420;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7422 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{var or__3548__auto____7426 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7594 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7430 = this$;

if(cljs.core.truth_(and__3546__auto____7430))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7430;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7437 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{var or__3548__auto____7439 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7595 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7442 = this$;

if(cljs.core.truth_(and__3546__auto____7442))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7442;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7445 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{var or__3548__auto____7448 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7596 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7452 = this$;

if(cljs.core.truth_(and__3546__auto____7452))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7452;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7465 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{var or__3548__auto____7466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7473 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{var or__3548__auto____7476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7598 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{var or__3548__auto____7482 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7599 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7485 = this$;

if(cljs.core.truth_(and__3546__auto____7485))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7485;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7486 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{var or__3548__auto____7488 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7600 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7491 = this$;

if(cljs.core.truth_(and__3546__auto____7491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{var or__3548__auto____7494 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7601 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7496 = this$;

if(cljs.core.truth_(and__3546__auto____7496))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7496;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7500 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7500))
{return or__3548__auto____7500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7602 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7502 = this$;

if(cljs.core.truth_(and__3546__auto____7502))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7502;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7504 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{var or__3548__auto____7505 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7530 = this$;

if(cljs.core.truth_(and__3546__auto____7530))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7530;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7532 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{var or__3548__auto____7533 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7604 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7566 = this$;

if(cljs.core.truth_(and__3546__auto____7566))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7566;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7580 = this$;

if(cljs.core.truth_(and__3546__auto____7580))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7580;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7606 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7583 = this$;

if(cljs.core.truth_(and__3546__auto____7583))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7583;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7584 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{var or__3548__auto____7585 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7585))
{return or__3548__auto____7585;
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
return _invoke__7586.call(this,this$);
case  2 :
return _invoke__7587.call(this,this$,a);
case  3 :
return _invoke__7588.call(this,this$,a,b);
case  4 :
return _invoke__7589.call(this,this$,a,b,c);
case  5 :
return _invoke__7590.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7591.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7592.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7593.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7594.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7595.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7596.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7597.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7598.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7599.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7600.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7601.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7602.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7603.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7604.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7605.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7606.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
{return (function (){var or__3548__auto____7770 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
} else
{var or__3548__auto____7772 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7780 = coll;

if(cljs.core.truth_(and__3546__auto____7780))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7780;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7784 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{var or__3548__auto____7785 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7798 = coll;

if(cljs.core.truth_(and__3546__auto____7798))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7798;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7800 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
} else
{var or__3548__auto____7801 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
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
var _nth__7825 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = coll;

if(cljs.core.truth_(and__3546__auto____7810))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7810;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7812 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
} else
{var or__3548__auto____7814 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7826 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = coll;

if(cljs.core.truth_(and__3546__auto____7816))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7816;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7819 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{var or__3548__auto____7822 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
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
return _nth__7825.call(this,coll,n);
case  3 :
return _nth__7826.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7835 = coll;

if(cljs.core.truth_(and__3546__auto____7835))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7835;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7837 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{var or__3548__auto____7839 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = coll;

if(cljs.core.truth_(and__3546__auto____7844))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7844;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7846 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
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
var _lookup__7866 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7852 = o;

if(cljs.core.truth_(and__3546__auto____7852))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7852;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7856 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7873 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7858 = o;

if(cljs.core.truth_(and__3546__auto____7858))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7858;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7861 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{var or__3548__auto____7863 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
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
return _lookup__7866.call(this,o,k);
case  3 :
return _lookup__7873.call(this,o,k,not_found);
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
{return (function (){var or__3548__auto____7898 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7899 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7901 = coll;

if(cljs.core.truth_(and__3546__auto____7901))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7901;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7905 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7905))
{return or__3548__auto____7905;
} else
{var or__3548__auto____7907 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = coll;

if(cljs.core.truth_(and__3546__auto____7918))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7918;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7922 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{var or__3548__auto____7923 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = coll;

if(cljs.core.truth_(and__3546__auto____7934))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7934;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7937 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{var or__3548__auto____7939 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = coll;

if(cljs.core.truth_(and__3546__auto____7949))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7949;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7950 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{var or__3548__auto____7952 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7956 = coll;

if(cljs.core.truth_(and__3546__auto____7956))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7956;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7959 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{var or__3548__auto____7962 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7971 = coll;

if(cljs.core.truth_(and__3546__auto____7971))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7971;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7973 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7976 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = o;

if(cljs.core.truth_(and__3546__auto____7982))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7982;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7984 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{var or__3548__auto____7986 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7994 = o;

if(cljs.core.truth_(and__3546__auto____7994))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7994;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7995 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{var or__3548__auto____7996 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8001 = o;

if(cljs.core.truth_(and__3546__auto____8001))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8001;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8004 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8005 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8009 = o;

if(cljs.core.truth_(and__3546__auto____8009))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8009;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8010 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{var or__3548__auto____8012 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
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
var _reduce__8027 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = coll;

if(cljs.core.truth_(and__3546__auto____8016))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8016;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8017 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{var or__3548__auto____8018 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8028 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8019 = coll;

if(cljs.core.truth_(and__3546__auto____8019))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8019;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8024 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
} else
{var or__3548__auto____8026 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
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
return _reduce__8027.call(this,coll,f);
case  3 :
return _reduce__8028.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8040 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8040))
{return or__3548__auto____8040;
} else
{var or__3548__auto____8041 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8049 = o;

if(cljs.core.truth_(and__3546__auto____8049))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8049;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8055 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8055))
{return or__3548__auto____8055;
} else
{var or__3548__auto____8056 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8070 = o;

if(cljs.core.truth_(and__3546__auto____8070))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8070;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8075 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
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
if(cljs.core.truth_((function (){var and__3546__auto____8140 = o;

if(cljs.core.truth_(and__3546__auto____8140))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8140;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8168 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{var or__3548__auto____8169 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8174 = d;

if(cljs.core.truth_(and__3546__auto____8174))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8174;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8175 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8175))
{return or__3548__auto____8175;
} else
{var or__3548__auto____8176 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8176))
{return or__3548__auto____8176;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8226 = this$;

if(cljs.core.truth_(and__3546__auto____8226))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8226;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8231 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8231))
{return or__3548__auto____8231;
} else
{var or__3548__auto____8235 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8238 = this$;

if(cljs.core.truth_(and__3546__auto____8238))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8238;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8261 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8261))
{return or__3548__auto____8261;
} else
{var or__3548__auto____8262 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8262))
{return or__3548__auto____8262;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8263 = this$;

if(cljs.core.truth_(and__3546__auto____8263))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8263;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8264 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8264))
{return or__3548__auto____8264;
} else
{var or__3548__auto____8265 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8265))
{return or__3548__auto____8265;
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
var G__8294 = null;
var G__8294__8295 = (function (o,k){
return null;
});
var G__8294__8296 = (function (o,k,not_found){
return not_found;
});
G__8294 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8294__8295.call(this,o,k);
case  3 :
return G__8294__8296.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8294;
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
var G__8301 = null;
var G__8301__8302 = (function (_,f){
return f.call(null);
});
var G__8301__8303 = (function (_,f,start){
return start;
});
G__8301 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8301__8302.call(this,_,f);
case  3 :
return G__8301__8303.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8301;
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
var G__8315 = null;
var G__8315__8316 = (function (_,n){
return null;
});
var G__8315__8318 = (function (_,n,not_found){
return not_found;
});
G__8315 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8315__8316.call(this,_,n);
case  3 :
return G__8315__8318.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8315;
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
var ci_reduce__8355 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8339 = cljs.core._nth.call(null,cicoll,0);
var n__8340 = 1;

while(true){
if(cljs.core.truth_((n__8340 < cljs.core._count.call(null,cicoll))))
{{
var G__8363 = f.call(null,val__8339,cljs.core._nth.call(null,cicoll,n__8340));
var G__8364 = (n__8340 + 1);
val__8339 = G__8363;
n__8340 = G__8364;
continue;
}
} else
{return val__8339;
}
break;
}
}
});
var ci_reduce__8356 = (function (cicoll,f,val){
var val__8344 = val;
var n__8345 = 0;

while(true){
if(cljs.core.truth_((n__8345 < cljs.core._count.call(null,cicoll))))
{{
var G__8366 = f.call(null,val__8344,cljs.core._nth.call(null,cicoll,n__8345));
var G__8371 = (n__8345 + 1);
val__8344 = G__8366;
n__8345 = G__8371;
continue;
}
} else
{return val__8344;
}
break;
}
});
var ci_reduce__8357 = (function (cicoll,f,val,idx){
var val__8352 = val;
var n__8353 = idx;

while(true){
if(cljs.core.truth_((n__8353 < cljs.core._count.call(null,cicoll))))
{{
var G__8372 = f.call(null,val__8352,cljs.core._nth.call(null,cicoll,n__8353));
var G__8373 = (n__8353 + 1);
val__8352 = G__8372;
n__8353 = G__8373;
continue;
}
} else
{return val__8352;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8355.call(this,cicoll,f);
case  3 :
return ci_reduce__8356.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8357.call(this,cicoll,f,val,idx);
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
var this__8385 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8466 = null;
var G__8466__8467 = (function (_,f){
var this__8387 = this;
return cljs.core.ci_reduce.call(null,this__8387.a,f,(this__8387.a[this__8387.i]),(this__8387.i + 1));
});
var G__8466__8468 = (function (_,f,start){
var this__8388 = this;
return cljs.core.ci_reduce.call(null,this__8388.a,f,start,this__8388.i);
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
var this__8444 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8446 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8471 = null;
var G__8471__8473 = (function (coll,n){
var this__8453 = this;
var i__8456 = (n + this__8453.i);

if(cljs.core.truth_((i__8456 < this__8453.a.length)))
{return (this__8453.a[i__8456]);
} else
{return null;
}
});
var G__8471__8474 = (function (coll,n,not_found){
var this__8457 = this;
var i__8458 = (n + this__8457.i);

if(cljs.core.truth_((i__8458 < this__8457.a.length)))
{return (this__8457.a[i__8458]);
} else
{return not_found;
}
});
G__8471 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8471__8473.call(this,coll,n);
case  3 :
return G__8471__8474.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8471;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8459 = this;
return (this__8459.a.length - this__8459.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8460 = this;
return (this__8460.a[this__8460.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8461 = this;
if(cljs.core.truth_(((this__8461.i + 1) < this__8461.a.length)))
{return (new cljs.core.IndexedSeq(this__8461.a,(this__8461.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8465 = this;
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
var G__8491 = null;
var G__8491__8492 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8491__8493 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8491 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8491__8492.call(this,array,f);
case  3 :
return G__8491__8493.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8491;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8495 = null;
var G__8495__8496 = (function (array,k){
return (array[k]);
});
var G__8495__8497 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8495 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8495__8496.call(this,array,k);
case  3 :
return G__8495__8497.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8495;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8499 = null;
var G__8499__8538 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8499__8539 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8499 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8499__8538.call(this,array,n);
case  3 :
return G__8499__8539.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8499;
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
var G__8612 = cljs.core.next.call(null,s);
s = G__8612;
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
var s__8658 = cljs.core.seq.call(null,x);
var n__8659 = 0;

while(true){
if(cljs.core.truth_(s__8658))
{{
var G__8663 = cljs.core.next.call(null,s__8658);
var G__8664 = (n__8659 + 1);
s__8658 = G__8663;
n__8659 = G__8664;
continue;
}
} else
{return n__8659;
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
var conj__8678 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8679 = (function() { 
var G__8681__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8682 = conj.call(null,coll,x);
var G__8683 = cljs.core.first.call(null,xs);
var G__8684 = cljs.core.next.call(null,xs);
coll = G__8682;
x = G__8683;
xs = G__8684;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8681 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8681__delegate.call(this, coll, x, xs);
};
G__8681.cljs$lang$maxFixedArity = 2;
G__8681.cljs$lang$applyTo = (function (arglist__8686){
var coll = cljs.core.first(arglist__8686);
var x = cljs.core.first(cljs.core.next(arglist__8686));
var xs = cljs.core.rest(cljs.core.next(arglist__8686));
return G__8681__delegate.call(this, coll, x, xs);
});
return G__8681;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8678.call(this,coll,x);
default:
return conj__8679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8679.cljs$lang$applyTo;
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
var nth__8714 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8716 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8714.call(this,coll,n);
case  3 :
return nth__8716.call(this,coll,n,not_found);
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
var get__8733 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8734 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8733.call(this,o,k);
case  3 :
return get__8734.call(this,o,k,not_found);
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
var assoc__8737 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8738 = (function() { 
var G__8740__delegate = function (coll,k,v,kvs){
while(true){
var ret__8736 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8741 = ret__8736;
var G__8742 = cljs.core.first.call(null,kvs);
var G__8743 = cljs.core.second.call(null,kvs);
var G__8744 = cljs.core.nnext.call(null,kvs);
coll = G__8741;
k = G__8742;
v = G__8743;
kvs = G__8744;
continue;
}
} else
{return ret__8736;
}
break;
}
};
var G__8740 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8740__delegate.call(this, coll, k, v, kvs);
};
G__8740.cljs$lang$maxFixedArity = 3;
G__8740.cljs$lang$applyTo = (function (arglist__8747){
var coll = cljs.core.first(arglist__8747);
var k = cljs.core.first(cljs.core.next(arglist__8747));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8747)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8747)));
return G__8740__delegate.call(this, coll, k, v, kvs);
});
return G__8740;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8737.call(this,coll,k,v);
default:
return assoc__8738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8738.cljs$lang$applyTo;
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
var dissoc__8749 = (function (coll){
return coll;
});
var dissoc__8751 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8753 = (function() { 
var G__8757__delegate = function (coll,k,ks){
while(true){
var ret__8748 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8759 = ret__8748;
var G__8760 = cljs.core.first.call(null,ks);
var G__8761 = cljs.core.next.call(null,ks);
coll = G__8759;
k = G__8760;
ks = G__8761;
continue;
}
} else
{return ret__8748;
}
break;
}
};
var G__8757 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8757__delegate.call(this, coll, k, ks);
};
G__8757.cljs$lang$maxFixedArity = 2;
G__8757.cljs$lang$applyTo = (function (arglist__8767){
var coll = cljs.core.first(arglist__8767);
var k = cljs.core.first(cljs.core.next(arglist__8767));
var ks = cljs.core.rest(cljs.core.next(arglist__8767));
return G__8757__delegate.call(this, coll, k, ks);
});
return G__8757;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8749.call(this,coll);
case  2 :
return dissoc__8751.call(this,coll,k);
default:
return dissoc__8753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8753.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8780 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8781 = x__445__auto____8780;

if(cljs.core.truth_(and__3546__auto____8781))
{var and__3546__auto____8783 = x__445__auto____8780.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8783))
{return cljs.core.not.call(null,x__445__auto____8780.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8783;
}
} else
{return and__3546__auto____8781;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8780);
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
var disj__8802 = (function (coll){
return coll;
});
var disj__8803 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8804 = (function() { 
var G__8806__delegate = function (coll,k,ks){
while(true){
var ret__8797 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8807 = ret__8797;
var G__8808 = cljs.core.first.call(null,ks);
var G__8809 = cljs.core.next.call(null,ks);
coll = G__8807;
k = G__8808;
ks = G__8809;
continue;
}
} else
{return ret__8797;
}
break;
}
};
var G__8806 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8806__delegate.call(this, coll, k, ks);
};
G__8806.cljs$lang$maxFixedArity = 2;
G__8806.cljs$lang$applyTo = (function (arglist__8810){
var coll = cljs.core.first(arglist__8810);
var k = cljs.core.first(cljs.core.next(arglist__8810));
var ks = cljs.core.rest(cljs.core.next(arglist__8810));
return G__8806__delegate.call(this, coll, k, ks);
});
return G__8806;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8802.call(this,coll);
case  2 :
return disj__8803.call(this,coll,k);
default:
return disj__8804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8804.cljs$lang$applyTo;
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
{var x__445__auto____8887 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8889 = x__445__auto____8887;

if(cljs.core.truth_(and__3546__auto____8889))
{var and__3546__auto____8890 = x__445__auto____8887.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8890))
{return cljs.core.not.call(null,x__445__auto____8887.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8890;
}
} else
{return and__3546__auto____8889;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8887);
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
{var x__445__auto____8896 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8897 = x__445__auto____8896;

if(cljs.core.truth_(and__3546__auto____8897))
{var and__3546__auto____8899 = x__445__auto____8896.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8899))
{return cljs.core.not.call(null,x__445__auto____8896.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8899;
}
} else
{return and__3546__auto____8897;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8896);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8908 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8909 = x__445__auto____8908;

if(cljs.core.truth_(and__3546__auto____8909))
{var and__3546__auto____8911 = x__445__auto____8908.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8911))
{return cljs.core.not.call(null,x__445__auto____8908.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8911;
}
} else
{return and__3546__auto____8909;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8908);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8916 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8918 = x__445__auto____8916;

if(cljs.core.truth_(and__3546__auto____8918))
{var and__3546__auto____8919 = x__445__auto____8916.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8919))
{return cljs.core.not.call(null,x__445__auto____8916.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8919;
}
} else
{return and__3546__auto____8918;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8916);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8935 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8936 = x__445__auto____8935;

if(cljs.core.truth_(and__3546__auto____8936))
{var and__3546__auto____8937 = x__445__auto____8935.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8937))
{return cljs.core.not.call(null,x__445__auto____8935.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8937;
}
} else
{return and__3546__auto____8936;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8935);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8952 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8956 = x__445__auto____8952;

if(cljs.core.truth_(and__3546__auto____8956))
{var and__3546__auto____8957 = x__445__auto____8952.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8957))
{return cljs.core.not.call(null,x__445__auto____8952.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8957;
}
} else
{return and__3546__auto____8956;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8952);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8960 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8962 = x__445__auto____8960;

if(cljs.core.truth_(and__3546__auto____8962))
{var and__3546__auto____8964 = x__445__auto____8960.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8964))
{return cljs.core.not.call(null,x__445__auto____8960.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8964;
}
} else
{return and__3546__auto____8962;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8960);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8975 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8975.push(key);
}));
return keys__8975;
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
{var x__445__auto____9002 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9003 = x__445__auto____9002;

if(cljs.core.truth_(and__3546__auto____9003))
{var and__3546__auto____9010 = x__445__auto____9002.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9010))
{return cljs.core.not.call(null,x__445__auto____9002.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9010;
}
} else
{return and__3546__auto____9003;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9002);
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
var and__3546__auto____9017 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9017))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9018 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9018))
{return or__3548__auto____9018;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9017;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9019 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9019))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9019;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9022 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9022))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9022;
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
var and__3546__auto____9027 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9027))
{return (n == n.toFixed());
} else
{return and__3546__auto____9027;
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
if(cljs.core.truth_((function (){var and__3546__auto____9036 = coll;

if(cljs.core.truth_(and__3546__auto____9036))
{var and__3546__auto____9037 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9037))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9037;
}
} else
{return and__3546__auto____9036;
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
var distinct_QMARK___9074 = (function (x){
return true;
});
var distinct_QMARK___9075 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9076 = (function() { 
var G__9087__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9039 = cljs.core.set([y,x]);
var xs__9071 = more;

while(true){
var x__9072 = cljs.core.first.call(null,xs__9071);
var etc__9073 = cljs.core.next.call(null,xs__9071);

if(cljs.core.truth_(xs__9071))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9039,x__9072)))
{return false;
} else
{{
var G__9088 = cljs.core.conj.call(null,s__9039,x__9072);
var G__9089 = etc__9073;
s__9039 = G__9088;
xs__9071 = G__9089;
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
var G__9087 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9087__delegate.call(this, x, y, more);
};
G__9087.cljs$lang$maxFixedArity = 2;
G__9087.cljs$lang$applyTo = (function (arglist__9090){
var x = cljs.core.first(arglist__9090);
var y = cljs.core.first(cljs.core.next(arglist__9090));
var more = cljs.core.rest(cljs.core.next(arglist__9090));
return G__9087__delegate.call(this, x, y, more);
});
return G__9087;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9074.call(this,x);
case  2 :
return distinct_QMARK___9075.call(this,x,y);
default:
return distinct_QMARK___9076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9076.cljs$lang$applyTo;
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
var r__9127 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9127)))
{return r__9127;
} else
{if(cljs.core.truth_(r__9127))
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
var sort__9153 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9154 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9145 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9145,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9145);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9153.call(this,comp);
case  2 :
return sort__9154.call(this,comp,coll);
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
var sort_by__9156 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9158 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9156.call(this,keyfn,comp);
case  3 :
return sort_by__9158.call(this,keyfn,comp,coll);
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
var reduce__9162 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9163 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9162.call(this,f,val);
case  3 :
return reduce__9163.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9176 = (function (f,coll){
var temp__3695__auto____9170 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9170))
{var s__9172 = temp__3695__auto____9170;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9172),cljs.core.next.call(null,s__9172));
} else
{return f.call(null);
}
});
var seq_reduce__9177 = (function (f,val,coll){
var val__9173 = val;
var coll__9174 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9174))
{{
var G__9185 = f.call(null,val__9173,cljs.core.first.call(null,coll__9174));
var G__9187 = cljs.core.next.call(null,coll__9174);
val__9173 = G__9185;
coll__9174 = G__9187;
continue;
}
} else
{return val__9173;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9176.call(this,f,val);
case  3 :
return seq_reduce__9177.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9191 = null;
var G__9191__9192 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9191__9193 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9191 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9191__9192.call(this,coll,f);
case  3 :
return G__9191__9193.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9191;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9203 = (function (){
return 0;
});
var _PLUS___9204 = (function (x){
return x;
});
var _PLUS___9205 = (function (x,y){
return (x + y);
});
var _PLUS___9206 = (function() { 
var G__9210__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9210__delegate.call(this, x, y, more);
};
G__9210.cljs$lang$maxFixedArity = 2;
G__9210.cljs$lang$applyTo = (function (arglist__9212){
var x = cljs.core.first(arglist__9212);
var y = cljs.core.first(cljs.core.next(arglist__9212));
var more = cljs.core.rest(cljs.core.next(arglist__9212));
return G__9210__delegate.call(this, x, y, more);
});
return G__9210;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9203.call(this);
case  1 :
return _PLUS___9204.call(this,x);
case  2 :
return _PLUS___9205.call(this,x,y);
default:
return _PLUS___9206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9206.cljs$lang$applyTo;
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
var ___9223 = (function (x){
return (- x);
});
var ___9224 = (function (x,y){
return (x - y);
});
var ___9225 = (function() { 
var G__9390__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9390 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9390__delegate.call(this, x, y, more);
};
G__9390.cljs$lang$maxFixedArity = 2;
G__9390.cljs$lang$applyTo = (function (arglist__9391){
var x = cljs.core.first(arglist__9391);
var y = cljs.core.first(cljs.core.next(arglist__9391));
var more = cljs.core.rest(cljs.core.next(arglist__9391));
return G__9390__delegate.call(this, x, y, more);
});
return G__9390;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9223.call(this,x);
case  2 :
return ___9224.call(this,x,y);
default:
return ___9225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9225.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9398 = (function (){
return 1;
});
var _STAR___9399 = (function (x){
return x;
});
var _STAR___9400 = (function (x,y){
return (x * y);
});
var _STAR___9401 = (function() { 
var G__9404__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9404__delegate.call(this, x, y, more);
};
G__9404.cljs$lang$maxFixedArity = 2;
G__9404.cljs$lang$applyTo = (function (arglist__9409){
var x = cljs.core.first(arglist__9409);
var y = cljs.core.first(cljs.core.next(arglist__9409));
var more = cljs.core.rest(cljs.core.next(arglist__9409));
return G__9404__delegate.call(this, x, y, more);
});
return G__9404;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9398.call(this);
case  1 :
return _STAR___9399.call(this,x);
case  2 :
return _STAR___9400.call(this,x,y);
default:
return _STAR___9401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9401.cljs$lang$applyTo;
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
var _SLASH___9412 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9413 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9414 = (function() { 
var G__9419__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9419__delegate.call(this, x, y, more);
};
G__9419.cljs$lang$maxFixedArity = 2;
G__9419.cljs$lang$applyTo = (function (arglist__9422){
var x = cljs.core.first(arglist__9422);
var y = cljs.core.first(cljs.core.next(arglist__9422));
var more = cljs.core.rest(cljs.core.next(arglist__9422));
return G__9419__delegate.call(this, x, y, more);
});
return G__9419;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9412.call(this,x);
case  2 :
return _SLASH___9413.call(this,x,y);
default:
return _SLASH___9414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9414.cljs$lang$applyTo;
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
var _LT___9430 = (function (x){
return true;
});
var _LT___9431 = (function (x,y){
return (x < y);
});
var _LT___9432 = (function() { 
var G__9434__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9437 = y;
var G__9438 = cljs.core.first.call(null,more);
var G__9439 = cljs.core.next.call(null,more);
x = G__9437;
y = G__9438;
more = G__9439;
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
var G__9434 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9434__delegate.call(this, x, y, more);
};
G__9434.cljs$lang$maxFixedArity = 2;
G__9434.cljs$lang$applyTo = (function (arglist__9440){
var x = cljs.core.first(arglist__9440);
var y = cljs.core.first(cljs.core.next(arglist__9440));
var more = cljs.core.rest(cljs.core.next(arglist__9440));
return G__9434__delegate.call(this, x, y, more);
});
return G__9434;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9430.call(this,x);
case  2 :
return _LT___9431.call(this,x,y);
default:
return _LT___9432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9432.cljs$lang$applyTo;
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
var _LT__EQ___9459 = (function (x){
return true;
});
var _LT__EQ___9460 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9461 = (function() { 
var G__9466__delegate = function (x,y,more){
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
var G__9466 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9466__delegate.call(this, x, y, more);
};
G__9466.cljs$lang$maxFixedArity = 2;
G__9466.cljs$lang$applyTo = (function (arglist__9479){
var x = cljs.core.first(arglist__9479);
var y = cljs.core.first(cljs.core.next(arglist__9479));
var more = cljs.core.rest(cljs.core.next(arglist__9479));
return G__9466__delegate.call(this, x, y, more);
});
return G__9466;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9459.call(this,x);
case  2 :
return _LT__EQ___9460.call(this,x,y);
default:
return _LT__EQ___9461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9461.cljs$lang$applyTo;
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
var _GT___9487 = (function (x){
return true;
});
var _GT___9488 = (function (x,y){
return (x > y);
});
var _GT___9489 = (function() { 
var G__9492__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9495 = y;
var G__9496 = cljs.core.first.call(null,more);
var G__9497 = cljs.core.next.call(null,more);
x = G__9495;
y = G__9496;
more = G__9497;
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
var G__9492 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9492__delegate.call(this, x, y, more);
};
G__9492.cljs$lang$maxFixedArity = 2;
G__9492.cljs$lang$applyTo = (function (arglist__9499){
var x = cljs.core.first(arglist__9499);
var y = cljs.core.first(cljs.core.next(arglist__9499));
var more = cljs.core.rest(cljs.core.next(arglist__9499));
return G__9492__delegate.call(this, x, y, more);
});
return G__9492;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9487.call(this,x);
case  2 :
return _GT___9488.call(this,x,y);
default:
return _GT___9489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9489.cljs$lang$applyTo;
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
var G__9507__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9635 = y;
var G__9636 = cljs.core.first.call(null,more);
var G__9637 = cljs.core.next.call(null,more);
x = G__9635;
y = G__9636;
more = G__9637;
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
var G__9507 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9507__delegate.call(this, x, y, more);
};
G__9507.cljs$lang$maxFixedArity = 2;
G__9507.cljs$lang$applyTo = (function (arglist__9638){
var x = cljs.core.first(arglist__9638);
var y = cljs.core.first(cljs.core.next(arglist__9638));
var more = cljs.core.rest(cljs.core.next(arglist__9638));
return G__9507__delegate.call(this, x, y, more);
});
return G__9507;
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
var max__9643 = (function (x){
return x;
});
var max__9644 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9645 = (function() { 
var G__9647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9647__delegate.call(this, x, y, more);
};
G__9647.cljs$lang$maxFixedArity = 2;
G__9647.cljs$lang$applyTo = (function (arglist__9648){
var x = cljs.core.first(arglist__9648);
var y = cljs.core.first(cljs.core.next(arglist__9648));
var more = cljs.core.rest(cljs.core.next(arglist__9648));
return G__9647__delegate.call(this, x, y, more);
});
return G__9647;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9643.call(this,x);
case  2 :
return max__9644.call(this,x,y);
default:
return max__9645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9645.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9650 = (function (x){
return x;
});
var min__9651 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9652 = (function() { 
var G__9654__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9654 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9654__delegate.call(this, x, y, more);
};
G__9654.cljs$lang$maxFixedArity = 2;
G__9654.cljs$lang$applyTo = (function (arglist__9655){
var x = cljs.core.first(arglist__9655);
var y = cljs.core.first(cljs.core.next(arglist__9655));
var more = cljs.core.rest(cljs.core.next(arglist__9655));
return G__9654__delegate.call(this, x, y, more);
});
return G__9654;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9650.call(this,x);
case  2 :
return min__9651.call(this,x,y);
default:
return min__9652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9652.cljs$lang$applyTo;
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
var rem__9677 = (n % d);

return cljs.core.fix.call(null,((n - rem__9677) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9680 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9680));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9717 = (function (){
return Math.random.call(null);
});
var rand__9718 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9717.call(this);
case  1 :
return rand__9718.call(this,n);
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
var _EQ__EQ___9763 = (function (x){
return true;
});
var _EQ__EQ___9764 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9765 = (function() { 
var G__9781__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9782 = y;
var G__9783 = cljs.core.first.call(null,more);
var G__9784 = cljs.core.next.call(null,more);
x = G__9782;
y = G__9783;
more = G__9784;
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
var G__9781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9781__delegate.call(this, x, y, more);
};
G__9781.cljs$lang$maxFixedArity = 2;
G__9781.cljs$lang$applyTo = (function (arglist__9785){
var x = cljs.core.first(arglist__9785);
var y = cljs.core.first(cljs.core.next(arglist__9785));
var more = cljs.core.rest(cljs.core.next(arglist__9785));
return G__9781__delegate.call(this, x, y, more);
});
return G__9781;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9763.call(this,x);
case  2 :
return _EQ__EQ___9764.call(this,x,y);
default:
return _EQ__EQ___9765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9765.cljs$lang$applyTo;
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
var n__9802 = n;
var xs__9804 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9805 = xs__9804;

if(cljs.core.truth_(and__3546__auto____9805))
{return (n__9802 > 0);
} else
{return and__3546__auto____9805;
}
})()))
{{
var G__9811 = (n__9802 - 1);
var G__9812 = cljs.core.next.call(null,xs__9804);
n__9802 = G__9811;
xs__9804 = G__9812;
continue;
}
} else
{return xs__9804;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9817 = null;
var G__9817__9818 = (function (coll,n){
var temp__3695__auto____9813 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9813))
{var xs__9814 = temp__3695__auto____9813;

return cljs.core.first.call(null,xs__9814);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9817__9819 = (function (coll,n,not_found){
var temp__3695__auto____9815 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9815))
{var xs__9816 = temp__3695__auto____9815;

return cljs.core.first.call(null,xs__9816);
} else
{return not_found;
}
});
G__9817 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9817__9818.call(this,coll,n);
case  3 :
return G__9817__9819.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9817;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9833 = (function (){
return "";
});
var str_STAR___9834 = (function (x){
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
var str_STAR___9835 = (function() { 
var G__9837__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9838 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9839 = cljs.core.next.call(null,more);
sb = G__9838;
more = G__9839;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9837 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9837__delegate.call(this, x, ys);
};
G__9837.cljs$lang$maxFixedArity = 1;
G__9837.cljs$lang$applyTo = (function (arglist__9840){
var x = cljs.core.first(arglist__9840);
var ys = cljs.core.rest(arglist__9840);
return G__9837__delegate.call(this, x, ys);
});
return G__9837;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9833.call(this);
case  1 :
return str_STAR___9834.call(this,x);
default:
return str_STAR___9835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9835.cljs$lang$applyTo;
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
var str__9864 = (function (){
return "";
});
var str__9865 = (function (x){
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
var str__9866 = (function() { 
var G__9868__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9868 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9868__delegate.call(this, x, ys);
};
G__9868.cljs$lang$maxFixedArity = 1;
G__9868.cljs$lang$applyTo = (function (arglist__9869){
var x = cljs.core.first(arglist__9869);
var ys = cljs.core.rest(arglist__9869);
return G__9868__delegate.call(this, x, ys);
});
return G__9868;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9864.call(this);
case  1 :
return str__9865.call(this,x);
default:
return str__9866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9866.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9875 = (function (s,start){
return s.substring(start);
});
var subs__9876 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9875.call(this,s,start);
case  3 :
return subs__9876.call(this,s,start,end);
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
var symbol__9883 = (function (name){
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
var symbol__9884 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9883.call(this,ns);
case  2 :
return symbol__9884.call(this,ns,name);
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
var keyword__9888 = (function (name){
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
var keyword__9889 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9888.call(this,ns);
case  2 :
return keyword__9889.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9891 = cljs.core.seq.call(null,x);
var ys__9892 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9891)))
{return cljs.core.nil_QMARK_.call(null,ys__9892);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9892)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9891),cljs.core.first.call(null,ys__9892))))
{{
var G__9895 = cljs.core.next.call(null,xs__9891);
var G__9896 = cljs.core.next.call(null,ys__9892);
xs__9891 = G__9895;
ys__9892 = G__9896;
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
return cljs.core.reduce.call(null,(function (p1__9897_SHARP_,p2__9898_SHARP_){
return cljs.core.hash_combine.call(null,p1__9897_SHARP_,cljs.core.hash.call(null,p2__9898_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9907__9908 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9907__9908))
{var G__9910__9912 = cljs.core.first.call(null,G__9907__9908);
var vec__9911__9913 = G__9910__9912;
var key_name__9914 = cljs.core.nth.call(null,vec__9911__9913,0,null);
var f__9915 = cljs.core.nth.call(null,vec__9911__9913,1,null);
var G__9907__9916 = G__9907__9908;

var G__9910__9917 = G__9910__9912;
var G__9907__9918 = G__9907__9916;

while(true){
var vec__9919__9920 = G__9910__9917;
var key_name__9921 = cljs.core.nth.call(null,vec__9919__9920,0,null);
var f__9922 = cljs.core.nth.call(null,vec__9919__9920,1,null);
var G__9907__9923 = G__9907__9918;

var str_name__9924 = cljs.core.name.call(null,key_name__9921);

obj[str_name__9924] = f__9922;
var temp__3698__auto____9926 = cljs.core.next.call(null,G__9907__9923);

if(cljs.core.truth_(temp__3698__auto____9926))
{var G__9907__9927 = temp__3698__auto____9926;

{
var G__9935 = cljs.core.first.call(null,G__9907__9927);
var G__9936 = G__9907__9927;
G__9910__9917 = G__9935;
G__9907__9918 = G__9936;
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
var this__9943 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9944 = this;
return (new cljs.core.List(this__9944.meta,o,coll,(this__9944.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9945 = this;
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
var this__9948 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9949 = this;
return this__9949.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9950 = this;
return this__9950.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9955 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9965 = this;
return (new cljs.core.List(meta,this__9965.first,this__9965.rest,this__9965.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10013 = this;
return this__10013.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10014 = this;
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
var this__10063 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10064 = this;
return (new cljs.core.List(this__10064.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10066 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10067 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10068 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10074 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10077 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10079 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10081 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10083 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10084 = this;
return this__10084.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10088 = this;
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
list.cljs$lang$applyTo = (function (arglist__10098){
var items = cljs.core.seq( arglist__10098 );;
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
var this__10152 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10154 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10157 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10271 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10271.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10274 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10277 = this;
return this__10277.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10279 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10279.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10279.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10281 = this;
return this__10281.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10283 = this;
return (new cljs.core.Cons(meta,this__10283.first,this__10283.rest));
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
var G__10382 = null;
var G__10382__10383 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10382__10384 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10382 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10382__10383.call(this,string,f);
case  3 :
return G__10382__10384.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10382;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10388 = null;
var G__10388__10389 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10388__10393 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10388 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10388__10389.call(this,string,k);
case  3 :
return G__10388__10393.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10388;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10400 = null;
var G__10400__10401 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10400__10402 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10400 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10400__10401.call(this,string,n);
case  3 :
return G__10400__10402.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10400;
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
var G__10408 = null;
var G__10408__10409 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10408__10410 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10408 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10408__10409.call(this,this$,coll);
case  3 :
return G__10408__10410.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10408;
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
var x__10428 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10428;
} else
{lazy_seq.x = x__10428.call(null);
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
var this__10445 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10448 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10451 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10451.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10452 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10454 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10455 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10506 = this;
return this__10506.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10507 = this;
return (new cljs.core.LazySeq(meta,this__10507.realized,this__10507.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10548 = cljs.core.array.call(null);

var s__10551 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10551)))
{ary__10548.push(cljs.core.first.call(null,s__10551));
{
var G__10558 = cljs.core.next.call(null,s__10551);
s__10551 = G__10558;
continue;
}
} else
{return ary__10548;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10563 = s;
var i__10564 = n;
var sum__10565 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10566 = (i__10564 > 0);

if(cljs.core.truth_(and__3546__auto____10566))
{return cljs.core.seq.call(null,s__10563);
} else
{return and__3546__auto____10566;
}
})()))
{{
var G__10598 = cljs.core.next.call(null,s__10563);
var G__10599 = (i__10564 - 1);
var G__10600 = (sum__10565 + 1);
s__10563 = G__10598;
i__10564 = G__10599;
sum__10565 = G__10600;
continue;
}
} else
{return sum__10565;
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
var concat__10620 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10621 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10622 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10610 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10610))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10610),concat.call(null,cljs.core.rest.call(null,s__10610),y));
} else
{return y;
}
})));
});
var concat__10623 = (function() { 
var G__10636__delegate = function (x,y,zs){
var cat__10618 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10611 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10611))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10611),cat.call(null,cljs.core.rest.call(null,xys__10611),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10618.call(null,concat.call(null,x,y),zs);
};
var G__10636 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10636__delegate.call(this, x, y, zs);
};
G__10636.cljs$lang$maxFixedArity = 2;
G__10636.cljs$lang$applyTo = (function (arglist__10640){
var x = cljs.core.first(arglist__10640);
var y = cljs.core.first(cljs.core.next(arglist__10640));
var zs = cljs.core.rest(cljs.core.next(arglist__10640));
return G__10636__delegate.call(this, x, y, zs);
});
return G__10636;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10620.call(this);
case  1 :
return concat__10621.call(this,x);
case  2 :
return concat__10622.call(this,x,y);
default:
return concat__10623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10623.cljs$lang$applyTo;
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
var list_STAR___10670 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10671 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10672 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10673 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10674 = (function() { 
var G__10684__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10684 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10684__delegate.call(this, a, b, c, d, more);
};
G__10684.cljs$lang$maxFixedArity = 4;
G__10684.cljs$lang$applyTo = (function (arglist__10690){
var a = cljs.core.first(arglist__10690);
var b = cljs.core.first(cljs.core.next(arglist__10690));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10690)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10690))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10690))));
return G__10684__delegate.call(this, a, b, c, d, more);
});
return G__10684;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10670.call(this,a);
case  2 :
return list_STAR___10671.call(this,a,b);
case  3 :
return list_STAR___10672.call(this,a,b,c);
case  4 :
return list_STAR___10673.call(this,a,b,c,d);
default:
return list_STAR___10674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10674.cljs$lang$applyTo;
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
var apply__10748 = (function (f,args){
var fixed_arity__10702 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10702 + 1)) <= fixed_arity__10702)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10749 = (function (f,x,args){
var arglist__10708 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10710 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10708,fixed_arity__10710) <= fixed_arity__10710)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10708));
} else
{return f.cljs$lang$applyTo(arglist__10708);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10708));
}
});
var apply__10750 = (function (f,x,y,args){
var arglist__10712 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10713 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10712,fixed_arity__10713) <= fixed_arity__10713)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10712));
} else
{return f.cljs$lang$applyTo(arglist__10712);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10712));
}
});
var apply__10751 = (function (f,x,y,z,args){
var arglist__10718 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10719 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10718,fixed_arity__10719) <= fixed_arity__10719)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10718));
} else
{return f.cljs$lang$applyTo(arglist__10718);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10718));
}
});
var apply__10752 = (function() { 
var G__10762__delegate = function (f,a,b,c,d,args){
var arglist__10724 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10725 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10724,fixed_arity__10725) <= fixed_arity__10725)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10724));
} else
{return f.cljs$lang$applyTo(arglist__10724);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10724));
}
};
var G__10762 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10762__delegate.call(this, f, a, b, c, d, args);
};
G__10762.cljs$lang$maxFixedArity = 5;
G__10762.cljs$lang$applyTo = (function (arglist__10769){
var f = cljs.core.first(arglist__10769);
var a = cljs.core.first(cljs.core.next(arglist__10769));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10769)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10769))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10769)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10769)))));
return G__10762__delegate.call(this, f, a, b, c, d, args);
});
return G__10762;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10748.call(this,f,a);
case  3 :
return apply__10749.call(this,f,a,b);
case  4 :
return apply__10750.call(this,f,a,b,c);
case  5 :
return apply__10751.call(this,f,a,b,c,d);
default:
return apply__10752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10752.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10777){
var obj = cljs.core.first(arglist__10777);
var f = cljs.core.first(cljs.core.next(arglist__10777));
var args = cljs.core.rest(cljs.core.next(arglist__10777));
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
var not_EQ___10805 = (function (x){
return false;
});
var not_EQ___10806 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10807 = (function() { 
var G__10809__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10809 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10809__delegate.call(this, x, y, more);
};
G__10809.cljs$lang$maxFixedArity = 2;
G__10809.cljs$lang$applyTo = (function (arglist__10810){
var x = cljs.core.first(arglist__10810);
var y = cljs.core.first(cljs.core.next(arglist__10810));
var more = cljs.core.rest(cljs.core.next(arglist__10810));
return G__10809__delegate.call(this, x, y, more);
});
return G__10809;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10805.call(this,x);
case  2 :
return not_EQ___10806.call(this,x,y);
default:
return not_EQ___10807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10807.cljs$lang$applyTo;
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
var G__10816 = pred;
var G__10817 = cljs.core.next.call(null,coll);
pred = G__10816;
coll = G__10817;
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
{var or__3548__auto____10826 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10826))
{return or__3548__auto____10826;
} else
{{
var G__10829 = pred;
var G__10830 = cljs.core.next.call(null,coll);
pred = G__10829;
coll = G__10830;
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
var G__10849 = null;
var G__10849__10851 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10849__10852 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10849__10853 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10849__10854 = (function() { 
var G__10859__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10859 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10859__delegate.call(this, x, y, zs);
};
G__10859.cljs$lang$maxFixedArity = 2;
G__10859.cljs$lang$applyTo = (function (arglist__10862){
var x = cljs.core.first(arglist__10862);
var y = cljs.core.first(cljs.core.next(arglist__10862));
var zs = cljs.core.rest(cljs.core.next(arglist__10862));
return G__10859__delegate.call(this, x, y, zs);
});
return G__10859;
})()
;
G__10849 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10849__10851.call(this);
case  1 :
return G__10849__10852.call(this,x);
case  2 :
return G__10849__10853.call(this,x,y);
default:
return G__10849__10854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10849.cljs$lang$maxFixedArity = 2;
G__10849.cljs$lang$applyTo = G__10849__10854.cljs$lang$applyTo;
return G__10849;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10872__delegate = function (args){
return x;
};
var G__10872 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10872__delegate.call(this, args);
};
G__10872.cljs$lang$maxFixedArity = 0;
G__10872.cljs$lang$applyTo = (function (arglist__10874){
var args = cljs.core.seq( arglist__10874 );;
return G__10872__delegate.call(this, args);
});
return G__10872;
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
var comp__10909 = (function (){
return cljs.core.identity;
});
var comp__10910 = (function (f){
return f;
});
var comp__10911 = (function (f,g){
return (function() {
var G__10916 = null;
var G__10916__10917 = (function (){
return f.call(null,g.call(null));
});
var G__10916__10918 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10916__10919 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10916__10920 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10916__10921 = (function() { 
var G__10923__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10923 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10923__delegate.call(this, x, y, z, args);
};
G__10923.cljs$lang$maxFixedArity = 3;
G__10923.cljs$lang$applyTo = (function (arglist__10924){
var x = cljs.core.first(arglist__10924);
var y = cljs.core.first(cljs.core.next(arglist__10924));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10924)));
return G__10923__delegate.call(this, x, y, z, args);
});
return G__10923;
})()
;
G__10916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10916__10917.call(this);
case  1 :
return G__10916__10918.call(this,x);
case  2 :
return G__10916__10919.call(this,x,y);
case  3 :
return G__10916__10920.call(this,x,y,z);
default:
return G__10916__10921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10916.cljs$lang$maxFixedArity = 3;
G__10916.cljs$lang$applyTo = G__10916__10921.cljs$lang$applyTo;
return G__10916;
})()
});
var comp__10912 = (function (f,g,h){
return (function() {
var G__10931 = null;
var G__10931__10932 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10931__10933 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10931__10934 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10931__10935 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10931__10936 = (function() { 
var G__10944__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10944 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10944__delegate.call(this, x, y, z, args);
};
G__10944.cljs$lang$maxFixedArity = 3;
G__10944.cljs$lang$applyTo = (function (arglist__10947){
var x = cljs.core.first(arglist__10947);
var y = cljs.core.first(cljs.core.next(arglist__10947));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10947)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10947)));
return G__10944__delegate.call(this, x, y, z, args);
});
return G__10944;
})()
;
G__10931 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10931__10932.call(this);
case  1 :
return G__10931__10933.call(this,x);
case  2 :
return G__10931__10934.call(this,x,y);
case  3 :
return G__10931__10935.call(this,x,y,z);
default:
return G__10931__10936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10931.cljs$lang$maxFixedArity = 3;
G__10931.cljs$lang$applyTo = G__10931__10936.cljs$lang$applyTo;
return G__10931;
})()
});
var comp__10913 = (function() { 
var G__10950__delegate = function (f1,f2,f3,fs){
var fs__10906 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10951__delegate = function (args){
var ret__10907 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10906),args);
var fs__10908 = cljs.core.next.call(null,fs__10906);

while(true){
if(cljs.core.truth_(fs__10908))
{{
var G__10953 = cljs.core.first.call(null,fs__10908).call(null,ret__10907);
var G__10954 = cljs.core.next.call(null,fs__10908);
ret__10907 = G__10953;
fs__10908 = G__10954;
continue;
}
} else
{return ret__10907;
}
break;
}
};
var G__10951 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10951__delegate.call(this, args);
};
G__10951.cljs$lang$maxFixedArity = 0;
G__10951.cljs$lang$applyTo = (function (arglist__10957){
var args = cljs.core.seq( arglist__10957 );;
return G__10951__delegate.call(this, args);
});
return G__10951;
})()
;
};
var G__10950 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10950__delegate.call(this, f1, f2, f3, fs);
};
G__10950.cljs$lang$maxFixedArity = 3;
G__10950.cljs$lang$applyTo = (function (arglist__10960){
var f1 = cljs.core.first(arglist__10960);
var f2 = cljs.core.first(cljs.core.next(arglist__10960));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10960)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10960)));
return G__10950__delegate.call(this, f1, f2, f3, fs);
});
return G__10950;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10909.call(this);
case  1 :
return comp__10910.call(this,f1);
case  2 :
return comp__10911.call(this,f1,f2);
case  3 :
return comp__10912.call(this,f1,f2,f3);
default:
return comp__10913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10913.cljs$lang$applyTo;
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
var partial__10973 = (function (f,arg1){
return (function() { 
var G__10983__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10983 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10983__delegate.call(this, args);
};
G__10983.cljs$lang$maxFixedArity = 0;
G__10983.cljs$lang$applyTo = (function (arglist__10989){
var args = cljs.core.seq( arglist__10989 );;
return G__10983__delegate.call(this, args);
});
return G__10983;
})()
;
});
var partial__10974 = (function (f,arg1,arg2){
return (function() { 
var G__10991__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10991 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10991__delegate.call(this, args);
};
G__10991.cljs$lang$maxFixedArity = 0;
G__10991.cljs$lang$applyTo = (function (arglist__10994){
var args = cljs.core.seq( arglist__10994 );;
return G__10991__delegate.call(this, args);
});
return G__10991;
})()
;
});
var partial__10975 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10996__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10996 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10996__delegate.call(this, args);
};
G__10996.cljs$lang$maxFixedArity = 0;
G__10996.cljs$lang$applyTo = (function (arglist__10997){
var args = cljs.core.seq( arglist__10997 );;
return G__10996__delegate.call(this, args);
});
return G__10996;
})()
;
});
var partial__10976 = (function() { 
var G__10999__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11000__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11000 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11000__delegate.call(this, args);
};
G__11000.cljs$lang$maxFixedArity = 0;
G__11000.cljs$lang$applyTo = (function (arglist__11003){
var args = cljs.core.seq( arglist__11003 );;
return G__11000__delegate.call(this, args);
});
return G__11000;
})()
;
};
var G__10999 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10999__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10999.cljs$lang$maxFixedArity = 4;
G__10999.cljs$lang$applyTo = (function (arglist__11004){
var f = cljs.core.first(arglist__11004);
var arg1 = cljs.core.first(cljs.core.next(arglist__11004));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11004)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11004))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11004))));
return G__10999__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10999;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10973.call(this,f,arg1);
case  3 :
return partial__10974.call(this,f,arg1,arg2);
case  4 :
return partial__10975.call(this,f,arg1,arg2,arg3);
default:
return partial__10976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10976.cljs$lang$applyTo;
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
var fnil__11059 = (function (f,x){
return (function() {
var G__11064 = null;
var G__11064__11066 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11064__11196 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11064__11197 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11064__11198 = (function() { 
var G__11201__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11201 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11201__delegate.call(this, a, b, c, ds);
};
G__11201.cljs$lang$maxFixedArity = 3;
G__11201.cljs$lang$applyTo = (function (arglist__11204){
var a = cljs.core.first(arglist__11204);
var b = cljs.core.first(cljs.core.next(arglist__11204));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11204)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11204)));
return G__11201__delegate.call(this, a, b, c, ds);
});
return G__11201;
})()
;
G__11064 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11064__11066.call(this,a);
case  2 :
return G__11064__11196.call(this,a,b);
case  3 :
return G__11064__11197.call(this,a,b,c);
default:
return G__11064__11198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11064.cljs$lang$maxFixedArity = 3;
G__11064.cljs$lang$applyTo = G__11064__11198.cljs$lang$applyTo;
return G__11064;
})()
});
var fnil__11060 = (function (f,x,y){
return (function() {
var G__11206 = null;
var G__11206__11208 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11206__11209 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11206__11210 = (function() { 
var G__11216__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11216 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11216__delegate.call(this, a, b, c, ds);
};
G__11216.cljs$lang$maxFixedArity = 3;
G__11216.cljs$lang$applyTo = (function (arglist__11219){
var a = cljs.core.first(arglist__11219);
var b = cljs.core.first(cljs.core.next(arglist__11219));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11219)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11219)));
return G__11216__delegate.call(this, a, b, c, ds);
});
return G__11216;
})()
;
G__11206 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11206__11208.call(this,a,b);
case  3 :
return G__11206__11209.call(this,a,b,c);
default:
return G__11206__11210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11206.cljs$lang$maxFixedArity = 3;
G__11206.cljs$lang$applyTo = G__11206__11210.cljs$lang$applyTo;
return G__11206;
})()
});
var fnil__11061 = (function (f,x,y,z){
return (function() {
var G__11222 = null;
var G__11222__11224 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11222__11225 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11222__11226 = (function() { 
var G__11232__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11232 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11232__delegate.call(this, a, b, c, ds);
};
G__11232.cljs$lang$maxFixedArity = 3;
G__11232.cljs$lang$applyTo = (function (arglist__11239){
var a = cljs.core.first(arglist__11239);
var b = cljs.core.first(cljs.core.next(arglist__11239));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11239)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11239)));
return G__11232__delegate.call(this, a, b, c, ds);
});
return G__11232;
})()
;
G__11222 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11222__11224.call(this,a,b);
case  3 :
return G__11222__11225.call(this,a,b,c);
default:
return G__11222__11226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11222.cljs$lang$maxFixedArity = 3;
G__11222.cljs$lang$applyTo = G__11222__11226.cljs$lang$applyTo;
return G__11222;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11059.call(this,f,x);
case  3 :
return fnil__11060.call(this,f,x,y);
case  4 :
return fnil__11061.call(this,f,x,y,z);
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
var mapi__11249 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11245 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11245))
{var s__11247 = temp__3698__auto____11245;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11247)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11247)));
} else
{return null;
}
})));
});

return mapi__11249.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11268))
{var s__11269 = temp__3698__auto____11268;

var x__11270 = f.call(null,cljs.core.first.call(null,s__11269));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11270)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11269));
} else
{return cljs.core.cons.call(null,x__11270,keep.call(null,f,cljs.core.rest.call(null,s__11269)));
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
var keepi__11301 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11298))
{var s__11299 = temp__3698__auto____11298;

var x__11300 = f.call(null,idx,cljs.core.first.call(null,s__11299));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11300)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11299));
} else
{return cljs.core.cons.call(null,x__11300,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11299)));
}
} else
{return null;
}
})));
});

return keepi__11301.call(null,0,coll);
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
var every_pred__11523 = (function (p){
return (function() {
var ep1 = null;
var ep1__11529 = (function (){
return true;
});
var ep1__11530 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11531 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11400 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11400))
{return p.call(null,y);
} else
{return and__3546__auto____11400;
}
})());
});
var ep1__11533 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11402 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11402))
{var and__3546__auto____11404 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11404))
{return p.call(null,z);
} else
{return and__3546__auto____11404;
}
} else
{return and__3546__auto____11402;
}
})());
});
var ep1__11534 = (function() { 
var G__11556__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11410 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11410))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11410;
}
})());
};
var G__11556 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11556__delegate.call(this, x, y, z, args);
};
G__11556.cljs$lang$maxFixedArity = 3;
G__11556.cljs$lang$applyTo = (function (arglist__11557){
var x = cljs.core.first(arglist__11557);
var y = cljs.core.first(cljs.core.next(arglist__11557));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11557)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11557)));
return G__11556__delegate.call(this, x, y, z, args);
});
return G__11556;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11529.call(this);
case  1 :
return ep1__11530.call(this,x);
case  2 :
return ep1__11531.call(this,x,y);
case  3 :
return ep1__11533.call(this,x,y,z);
default:
return ep1__11534.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11534.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11524 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11563 = (function (){
return true;
});
var ep2__11564 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11413 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11413))
{return p2.call(null,x);
} else
{return and__3546__auto____11413;
}
})());
});
var ep2__11565 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11414 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11414))
{var and__3546__auto____11416 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11416))
{var and__3546__auto____11418 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11418))
{return p2.call(null,y);
} else
{return and__3546__auto____11418;
}
} else
{return and__3546__auto____11416;
}
} else
{return and__3546__auto____11414;
}
})());
});
var ep2__11566 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11424 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11424))
{var and__3546__auto____11426 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11426))
{var and__3546__auto____11428 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11428))
{var and__3546__auto____11429 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11429))
{var and__3546__auto____11432 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11432))
{return p2.call(null,z);
} else
{return and__3546__auto____11432;
}
} else
{return and__3546__auto____11429;
}
} else
{return and__3546__auto____11428;
}
} else
{return and__3546__auto____11426;
}
} else
{return and__3546__auto____11424;
}
})());
});
var ep2__11567 = (function() { 
var G__11578__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11439 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11439))
{return cljs.core.every_QMARK_.call(null,(function (p1__11282_SHARP_){
var and__3546__auto____11442 = p1.call(null,p1__11282_SHARP_);

if(cljs.core.truth_(and__3546__auto____11442))
{return p2.call(null,p1__11282_SHARP_);
} else
{return and__3546__auto____11442;
}
}),args);
} else
{return and__3546__auto____11439;
}
})());
};
var G__11578 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11578__delegate.call(this, x, y, z, args);
};
G__11578.cljs$lang$maxFixedArity = 3;
G__11578.cljs$lang$applyTo = (function (arglist__11582){
var x = cljs.core.first(arglist__11582);
var y = cljs.core.first(cljs.core.next(arglist__11582));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11582)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11582)));
return G__11578__delegate.call(this, x, y, z, args);
});
return G__11578;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11563.call(this);
case  1 :
return ep2__11564.call(this,x);
case  2 :
return ep2__11565.call(this,x,y);
case  3 :
return ep2__11566.call(this,x,y,z);
default:
return ep2__11567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11567.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11525 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11583 = (function (){
return true;
});
var ep3__11584 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11446 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11446))
{var and__3546__auto____11448 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11448))
{return p3.call(null,x);
} else
{return and__3546__auto____11448;
}
} else
{return and__3546__auto____11446;
}
})());
});
var ep3__11585 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11453 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11453))
{var and__3546__auto____11455 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11455))
{var and__3546__auto____11456 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11456))
{var and__3546__auto____11457 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11457))
{var and__3546__auto____11458 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11458))
{return p3.call(null,y);
} else
{return and__3546__auto____11458;
}
} else
{return and__3546__auto____11457;
}
} else
{return and__3546__auto____11456;
}
} else
{return and__3546__auto____11455;
}
} else
{return and__3546__auto____11453;
}
})());
});
var ep3__11586 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11462 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11462))
{var and__3546__auto____11466 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11466))
{var and__3546__auto____11469 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11469))
{var and__3546__auto____11470 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11470))
{var and__3546__auto____11473 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11473))
{var and__3546__auto____11474 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11474))
{var and__3546__auto____11477 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11477))
{var and__3546__auto____11480 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11480))
{return p3.call(null,z);
} else
{return and__3546__auto____11480;
}
} else
{return and__3546__auto____11477;
}
} else
{return and__3546__auto____11474;
}
} else
{return and__3546__auto____11473;
}
} else
{return and__3546__auto____11470;
}
} else
{return and__3546__auto____11469;
}
} else
{return and__3546__auto____11466;
}
} else
{return and__3546__auto____11462;
}
})());
});
var ep3__11587 = (function() { 
var G__11614__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11486 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11486))
{return cljs.core.every_QMARK_.call(null,(function (p1__11284_SHARP_){
var and__3546__auto____11489 = p1.call(null,p1__11284_SHARP_);

if(cljs.core.truth_(and__3546__auto____11489))
{var and__3546__auto____11492 = p2.call(null,p1__11284_SHARP_);

if(cljs.core.truth_(and__3546__auto____11492))
{return p3.call(null,p1__11284_SHARP_);
} else
{return and__3546__auto____11492;
}
} else
{return and__3546__auto____11489;
}
}),args);
} else
{return and__3546__auto____11486;
}
})());
};
var G__11614 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11614__delegate.call(this, x, y, z, args);
};
G__11614.cljs$lang$maxFixedArity = 3;
G__11614.cljs$lang$applyTo = (function (arglist__11616){
var x = cljs.core.first(arglist__11616);
var y = cljs.core.first(cljs.core.next(arglist__11616));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11616)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11616)));
return G__11614__delegate.call(this, x, y, z, args);
});
return G__11614;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11583.call(this);
case  1 :
return ep3__11584.call(this,x);
case  2 :
return ep3__11585.call(this,x,y);
case  3 :
return ep3__11586.call(this,x,y,z);
default:
return ep3__11587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11587.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11526 = (function() { 
var G__11621__delegate = function (p1,p2,p3,ps){
var ps__11497 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11622 = (function (){
return true;
});
var epn__11623 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11286_SHARP_){
return p1__11286_SHARP_.call(null,x);
}),ps__11497);
});
var epn__11624 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11287_SHARP_){
var and__3546__auto____11504 = p1__11287_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11504))
{return p1__11287_SHARP_.call(null,y);
} else
{return and__3546__auto____11504;
}
}),ps__11497);
});
var epn__11625 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11288_SHARP_){
var and__3546__auto____11509 = p1__11288_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11509))
{var and__3546__auto____11510 = p1__11288_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11510))
{return p1__11288_SHARP_.call(null,z);
} else
{return and__3546__auto____11510;
}
} else
{return and__3546__auto____11509;
}
}),ps__11497);
});
var epn__11626 = (function() { 
var G__11638__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11513 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11513))
{return cljs.core.every_QMARK_.call(null,(function (p1__11290_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11290_SHARP_,args);
}),ps__11497);
} else
{return and__3546__auto____11513;
}
})());
};
var G__11638 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11638__delegate.call(this, x, y, z, args);
};
G__11638.cljs$lang$maxFixedArity = 3;
G__11638.cljs$lang$applyTo = (function (arglist__11646){
var x = cljs.core.first(arglist__11646);
var y = cljs.core.first(cljs.core.next(arglist__11646));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11646)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11646)));
return G__11638__delegate.call(this, x, y, z, args);
});
return G__11638;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11622.call(this);
case  1 :
return epn__11623.call(this,x);
case  2 :
return epn__11624.call(this,x,y);
case  3 :
return epn__11625.call(this,x,y,z);
default:
return epn__11626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11626.cljs$lang$applyTo;
return epn;
})()
};
var G__11621 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11621__delegate.call(this, p1, p2, p3, ps);
};
G__11621.cljs$lang$maxFixedArity = 3;
G__11621.cljs$lang$applyTo = (function (arglist__11648){
var p1 = cljs.core.first(arglist__11648);
var p2 = cljs.core.first(cljs.core.next(arglist__11648));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11648)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11648)));
return G__11621__delegate.call(this, p1, p2, p3, ps);
});
return G__11621;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11523.call(this,p1);
case  2 :
return every_pred__11524.call(this,p1,p2);
case  3 :
return every_pred__11525.call(this,p1,p2,p3);
default:
return every_pred__11526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11526.cljs$lang$applyTo;
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
var sp1__11786 = (function (){
return null;
});
var sp1__11787 = (function (x){
return p.call(null,x);
});
var sp1__11789 = (function (x,y){
var or__3548__auto____11664 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11664))
{return or__3548__auto____11664;
} else
{return p.call(null,y);
}
});
var sp1__11790 = (function (x,y,z){
var or__3548__auto____11671 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11671))
{return or__3548__auto____11671;
} else
{var or__3548__auto____11673 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11673))
{return or__3548__auto____11673;
} else
{return p.call(null,z);
}
}
});
var sp1__11791 = (function() { 
var G__11802__delegate = function (x,y,z,args){
var or__3548__auto____11677 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11677))
{return or__3548__auto____11677;
} else
{return cljs.core.some.call(null,p,args);
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
G__11802.cljs$lang$applyTo = (function (arglist__11805){
var x = cljs.core.first(arglist__11805);
var y = cljs.core.first(cljs.core.next(arglist__11805));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11805)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11805)));
return G__11802__delegate.call(this, x, y, z, args);
});
return G__11802;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11786.call(this);
case  1 :
return sp1__11787.call(this,x);
case  2 :
return sp1__11789.call(this,x,y);
case  3 :
return sp1__11790.call(this,x,y,z);
default:
return sp1__11791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11791.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11780 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11810 = (function (){
return null;
});
var sp2__11811 = (function (x){
var or__3548__auto____11678 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11678))
{return or__3548__auto____11678;
} else
{return p2.call(null,x);
}
});
var sp2__11813 = (function (x,y){
var or__3548__auto____11682 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11682))
{return or__3548__auto____11682;
} else
{var or__3548__auto____11683 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11683))
{return or__3548__auto____11683;
} else
{var or__3548__auto____11685 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11685))
{return or__3548__auto____11685;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11814 = (function (x,y,z){
var or__3548__auto____11689 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11689))
{return or__3548__auto____11689;
} else
{var or__3548__auto____11690 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11690))
{return or__3548__auto____11690;
} else
{var or__3548__auto____11692 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11692))
{return or__3548__auto____11692;
} else
{var or__3548__auto____11693 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11693))
{return or__3548__auto____11693;
} else
{var or__3548__auto____11696 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11696))
{return or__3548__auto____11696;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11815 = (function() { 
var G__11847__delegate = function (x,y,z,args){
var or__3548__auto____11705 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11705))
{return or__3548__auto____11705;
} else
{return cljs.core.some.call(null,(function (p1__11307_SHARP_){
var or__3548__auto____11710 = p1.call(null,p1__11307_SHARP_);

if(cljs.core.truth_(or__3548__auto____11710))
{return or__3548__auto____11710;
} else
{return p2.call(null,p1__11307_SHARP_);
}
}),args);
}
};
var G__11847 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11847__delegate.call(this, x, y, z, args);
};
G__11847.cljs$lang$maxFixedArity = 3;
G__11847.cljs$lang$applyTo = (function (arglist__11851){
var x = cljs.core.first(arglist__11851);
var y = cljs.core.first(cljs.core.next(arglist__11851));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11851)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11851)));
return G__11847__delegate.call(this, x, y, z, args);
});
return G__11847;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11810.call(this);
case  1 :
return sp2__11811.call(this,x);
case  2 :
return sp2__11813.call(this,x,y);
case  3 :
return sp2__11814.call(this,x,y,z);
default:
return sp2__11815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11815.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11782 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11858 = (function (){
return null;
});
var sp3__11859 = (function (x){
var or__3548__auto____11712 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11712))
{return or__3548__auto____11712;
} else
{var or__3548__auto____11713 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11713))
{return or__3548__auto____11713;
} else
{return p3.call(null,x);
}
}
});
var sp3__11860 = (function (x,y){
var or__3548__auto____11717 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11717))
{return or__3548__auto____11717;
} else
{var or__3548__auto____11718 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11718))
{return or__3548__auto____11718;
} else
{var or__3548__auto____11722 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11722))
{return or__3548__auto____11722;
} else
{var or__3548__auto____11723 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
} else
{var or__3548__auto____11725 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11725))
{return or__3548__auto____11725;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11861 = (function (x,y,z){
var or__3548__auto____11728 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11728))
{return or__3548__auto____11728;
} else
{var or__3548__auto____11731 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11731))
{return or__3548__auto____11731;
} else
{var or__3548__auto____11734 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11734))
{return or__3548__auto____11734;
} else
{var or__3548__auto____11735 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11735))
{return or__3548__auto____11735;
} else
{var or__3548__auto____11737 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11737))
{return or__3548__auto____11737;
} else
{var or__3548__auto____11738 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11738))
{return or__3548__auto____11738;
} else
{var or__3548__auto____11739 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11739))
{return or__3548__auto____11739;
} else
{var or__3548__auto____11740 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11740))
{return or__3548__auto____11740;
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
var sp3__11862 = (function() { 
var G__11887__delegate = function (x,y,z,args){
var or__3548__auto____11749 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11749))
{return or__3548__auto____11749;
} else
{return cljs.core.some.call(null,(function (p1__11308_SHARP_){
var or__3548__auto____11753 = p1.call(null,p1__11308_SHARP_);

if(cljs.core.truth_(or__3548__auto____11753))
{return or__3548__auto____11753;
} else
{var or__3548__auto____11755 = p2.call(null,p1__11308_SHARP_);

if(cljs.core.truth_(or__3548__auto____11755))
{return or__3548__auto____11755;
} else
{return p3.call(null,p1__11308_SHARP_);
}
}
}),args);
}
};
var G__11887 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11887__delegate.call(this, x, y, z, args);
};
G__11887.cljs$lang$maxFixedArity = 3;
G__11887.cljs$lang$applyTo = (function (arglist__11893){
var x = cljs.core.first(arglist__11893);
var y = cljs.core.first(cljs.core.next(arglist__11893));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11893)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11893)));
return G__11887__delegate.call(this, x, y, z, args);
});
return G__11887;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11858.call(this);
case  1 :
return sp3__11859.call(this,x);
case  2 :
return sp3__11860.call(this,x,y);
case  3 :
return sp3__11861.call(this,x,y,z);
default:
return sp3__11862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11862.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11783 = (function() { 
var G__11900__delegate = function (p1,p2,p3,ps){
var ps__11756 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11903 = (function (){
return null;
});
var spn__11904 = (function (x){
return cljs.core.some.call(null,(function (p1__11309_SHARP_){
return p1__11309_SHARP_.call(null,x);
}),ps__11756);
});
var spn__11906 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11310_SHARP_){
var or__3548__auto____11763 = p1__11310_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11763))
{return or__3548__auto____11763;
} else
{return p1__11310_SHARP_.call(null,y);
}
}),ps__11756);
});
var spn__11907 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11311_SHARP_){
var or__3548__auto____11765 = p1__11311_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11765))
{return or__3548__auto____11765;
} else
{var or__3548__auto____11771 = p1__11311_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11771))
{return or__3548__auto____11771;
} else
{return p1__11311_SHARP_.call(null,z);
}
}
}),ps__11756);
});
var spn__11908 = (function() { 
var G__11920__delegate = function (x,y,z,args){
var or__3548__auto____11778 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11778))
{return or__3548__auto____11778;
} else
{return cljs.core.some.call(null,(function (p1__11313_SHARP_){
return cljs.core.some.call(null,p1__11313_SHARP_,args);
}),ps__11756);
}
};
var G__11920 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11920__delegate.call(this, x, y, z, args);
};
G__11920.cljs$lang$maxFixedArity = 3;
G__11920.cljs$lang$applyTo = (function (arglist__11925){
var x = cljs.core.first(arglist__11925);
var y = cljs.core.first(cljs.core.next(arglist__11925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11925)));
return G__11920__delegate.call(this, x, y, z, args);
});
return G__11920;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11903.call(this);
case  1 :
return spn__11904.call(this,x);
case  2 :
return spn__11906.call(this,x,y);
case  3 :
return spn__11907.call(this,x,y,z);
default:
return spn__11908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11908.cljs$lang$applyTo;
return spn;
})()
};
var G__11900 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11900__delegate.call(this, p1, p2, p3, ps);
};
G__11900.cljs$lang$maxFixedArity = 3;
G__11900.cljs$lang$applyTo = (function (arglist__11927){
var p1 = cljs.core.first(arglist__11927);
var p2 = cljs.core.first(cljs.core.next(arglist__11927));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11927)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11927)));
return G__11900__delegate.call(this, p1, p2, p3, ps);
});
return G__11900;
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
return some_fn__11782.call(this,p1,p2,p3);
default:
return some_fn__11783.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11783.cljs$lang$applyTo;
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
var map__11973 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11931 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11931))
{var s__11933 = temp__3698__auto____11931;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11933)),map.call(null,f,cljs.core.rest.call(null,s__11933)));
} else
{return null;
}
})));
});
var map__11974 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11937 = cljs.core.seq.call(null,c1);
var s2__11938 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11943 = s1__11937;

if(cljs.core.truth_(and__3546__auto____11943))
{return s2__11938;
} else
{return and__3546__auto____11943;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11937),cljs.core.first.call(null,s2__11938)),map.call(null,f,cljs.core.rest.call(null,s1__11937),cljs.core.rest.call(null,s2__11938)));
} else
{return null;
}
})));
});
var map__11975 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11946 = cljs.core.seq.call(null,c1);
var s2__11947 = cljs.core.seq.call(null,c2);
var s3__11948 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11950 = s1__11946;

if(cljs.core.truth_(and__3546__auto____11950))
{var and__3546__auto____11951 = s2__11947;

if(cljs.core.truth_(and__3546__auto____11951))
{return s3__11948;
} else
{return and__3546__auto____11951;
}
} else
{return and__3546__auto____11950;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11946),cljs.core.first.call(null,s2__11947),cljs.core.first.call(null,s3__11948)),map.call(null,f,cljs.core.rest.call(null,s1__11946),cljs.core.rest.call(null,s2__11947),cljs.core.rest.call(null,s3__11948)));
} else
{return null;
}
})));
});
var map__11976 = (function() { 
var G__11991__delegate = function (f,c1,c2,c3,colls){
var step__11964 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11958 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11958)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11958),step.call(null,map.call(null,cljs.core.rest,ss__11958)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11658_SHARP_){
return cljs.core.apply.call(null,f,p1__11658_SHARP_);
}),step__11964.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11991 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11991__delegate.call(this, f, c1, c2, c3, colls);
};
G__11991.cljs$lang$maxFixedArity = 4;
G__11991.cljs$lang$applyTo = (function (arglist__11996){
var f = cljs.core.first(arglist__11996);
var c1 = cljs.core.first(cljs.core.next(arglist__11996));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11996)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11996))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11996))));
return G__11991__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11991;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11973.call(this,f,c1);
case  3 :
return map__11974.call(this,f,c1,c2);
case  4 :
return map__11975.call(this,f,c1,c2,c3);
default:
return map__11976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11976.cljs$lang$applyTo;
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
{var temp__3698__auto____12013 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12013))
{var s__12017 = temp__3698__auto____12013;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12017),take.call(null,(n - 1),cljs.core.rest.call(null,s__12017)));
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
var step__12028 = (function (n,coll){
while(true){
var s__12026 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12027 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12027))
{return s__12026;
} else
{return and__3546__auto____12027;
}
})()))
{{
var G__12029 = (n - 1);
var G__12030 = cljs.core.rest.call(null,s__12026);
n = G__12029;
coll = G__12030;
continue;
}
} else
{return s__12026;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12028.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12032 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12033 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12032.call(this,n);
case  2 :
return drop_last__12033.call(this,n,s);
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
var s__12041 = cljs.core.seq.call(null,coll);
var lead__12042 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12042))
{{
var G__12054 = cljs.core.next.call(null,s__12041);
var G__12055 = cljs.core.next.call(null,lead__12042);
s__12041 = G__12054;
lead__12042 = G__12055;
continue;
}
} else
{return s__12041;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12066 = (function (pred,coll){
while(true){
var s__12061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12063 = s__12061;

if(cljs.core.truth_(and__3546__auto____12063))
{return pred.call(null,cljs.core.first.call(null,s__12061));
} else
{return and__3546__auto____12063;
}
})()))
{{
var G__12070 = pred;
var G__12071 = cljs.core.rest.call(null,s__12061);
pred = G__12070;
coll = G__12071;
continue;
}
} else
{return s__12061;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12066.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12079))
{var s__12080 = temp__3698__auto____12079;

return cljs.core.concat.call(null,s__12080,cycle.call(null,s__12080));
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
var repeat__12100 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12101 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12100.call(this,n);
case  2 :
return repeat__12101.call(this,n,x);
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
var interleave__12131 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12120 = cljs.core.seq.call(null,c1);
var s2__12121 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12122 = s1__12120;

if(cljs.core.truth_(and__3546__auto____12122))
{return s2__12121;
} else
{return and__3546__auto____12122;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12120),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12121),interleave.call(null,cljs.core.rest.call(null,s1__12120),cljs.core.rest.call(null,s2__12121))));
} else
{return null;
}
})));
});
var interleave__12132 = (function() { 
var G__12140__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12130 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12130)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12130),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12130)));
} else
{return null;
}
})));
};
var G__12140 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12140__delegate.call(this, c1, c2, colls);
};
G__12140.cljs$lang$maxFixedArity = 2;
G__12140.cljs$lang$applyTo = (function (arglist__12142){
var c1 = cljs.core.first(arglist__12142);
var c2 = cljs.core.first(cljs.core.next(arglist__12142));
var colls = cljs.core.rest(cljs.core.next(arglist__12142));
return G__12140__delegate.call(this, c1, c2, colls);
});
return G__12140;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12131.call(this,c1,c2);
default:
return interleave__12132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12132.cljs$lang$applyTo;
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
var cat__12161 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12158 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12158))
{var coll__12159 = temp__3695__auto____12158;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12159),cat.call(null,cljs.core.rest.call(null,coll__12159),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12161.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12166 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12167 = (function() { 
var G__12169__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12169 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12169__delegate.call(this, f, coll, colls);
};
G__12169.cljs$lang$maxFixedArity = 2;
G__12169.cljs$lang$applyTo = (function (arglist__12170){
var f = cljs.core.first(arglist__12170);
var coll = cljs.core.first(cljs.core.next(arglist__12170));
var colls = cljs.core.rest(cljs.core.next(arglist__12170));
return G__12169__delegate.call(this, f, coll, colls);
});
return G__12169;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12166.call(this,f,coll);
default:
return mapcat__12167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12167.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12172 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12172))
{var s__12173 = temp__3698__auto____12172;

var f__12174 = cljs.core.first.call(null,s__12173);
var r__12175 = cljs.core.rest.call(null,s__12173);

if(cljs.core.truth_(pred.call(null,f__12174)))
{return cljs.core.cons.call(null,f__12174,filter.call(null,pred,r__12175));
} else
{return filter.call(null,pred,r__12175);
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
var walk__12186 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12186.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12179_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12179_SHARP_));
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
var partition__12215 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12216 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12207 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12207))
{var s__12209 = temp__3698__auto____12207;

var p__12210 = cljs.core.take.call(null,n,s__12209);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12210))))
{return cljs.core.cons.call(null,p__12210,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12209)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12217 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12211 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12211))
{var s__12212 = temp__3698__auto____12211;

var p__12213 = cljs.core.take.call(null,n,s__12212);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12213))))
{return cljs.core.cons.call(null,p__12213,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12212)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12213,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12215.call(this,n,step);
case  3 :
return partition__12216.call(this,n,step,pad);
case  4 :
return partition__12217.call(this,n,step,pad,coll);
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
var get_in__12241 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12242 = (function (m,ks,not_found){
var sentinel__12237 = cljs.core.lookup_sentinel;
var m__12238 = m;
var ks__12239 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12239))
{var m__12240 = cljs.core.get.call(null,m__12238,cljs.core.first.call(null,ks__12239),sentinel__12237);

if(cljs.core.truth_((sentinel__12237 === m__12240)))
{return not_found;
} else
{{
var G__12248 = sentinel__12237;
var G__12249 = m__12240;
var G__12250 = cljs.core.next.call(null,ks__12239);
sentinel__12237 = G__12248;
m__12238 = G__12249;
ks__12239 = G__12250;
continue;
}
}
} else
{return m__12238;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12241.call(this,m,ks);
case  3 :
return get_in__12242.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12254,v){
var vec__12255__12256 = p__12254;
var k__12260 = cljs.core.nth.call(null,vec__12255__12256,0,null);
var ks__12261 = cljs.core.nthnext.call(null,vec__12255__12256,1);

if(cljs.core.truth_(ks__12261))
{return cljs.core.assoc.call(null,m,k__12260,assoc_in.call(null,cljs.core.get.call(null,m,k__12260),ks__12261,v));
} else
{return cljs.core.assoc.call(null,m,k__12260,v);
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
var update_in__delegate = function (m,p__12267,f,args){
var vec__12268__12269 = p__12267;
var k__12270 = cljs.core.nth.call(null,vec__12268__12269,0,null);
var ks__12271 = cljs.core.nthnext.call(null,vec__12268__12269,1);

if(cljs.core.truth_(ks__12271))
{return cljs.core.assoc.call(null,m,k__12270,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12270),ks__12271,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12270,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12270),args));
}
};
var update_in = function (m,p__12267,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12267, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12277){
var m = cljs.core.first(arglist__12277);
var p__12267 = cljs.core.first(cljs.core.next(arglist__12277));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12277)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12277)));
return update_in__delegate.call(this, m, p__12267, f, args);
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
var this__12279 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12334 = null;
var G__12334__12338 = (function (coll,k){
var this__12280 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12334__12339 = (function (coll,k,not_found){
var this__12281 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12334 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12334__12338.call(this,coll,k);
case  3 :
return G__12334__12339.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12334;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12282 = this;
var new_array__12284 = cljs.core.aclone.call(null,this__12282.array);

(new_array__12284[k] = v);
return (new cljs.core.Vector(this__12282.meta,new_array__12284));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12343 = null;
var G__12343__12346 = (function (coll,k){
var this__12286 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12343__12347 = (function (coll,k,not_found){
var this__12288 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12343 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12343__12346.call(this,coll,k);
case  3 :
return G__12343__12347.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12343;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12290 = this;
var new_array__12292 = cljs.core.aclone.call(null,this__12290.array);

new_array__12292.push(o);
return (new cljs.core.Vector(this__12290.meta,new_array__12292));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12349 = null;
var G__12349__12351 = (function (v,f){
var this__12295 = this;
return cljs.core.ci_reduce.call(null,this__12295.array,f);
});
var G__12349__12353 = (function (v,f,start){
var this__12296 = this;
return cljs.core.ci_reduce.call(null,this__12296.array,f,start);
});
G__12349 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12349__12351.call(this,v,f);
case  3 :
return G__12349__12353.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12349;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12298 = this;
if(cljs.core.truth_((this__12298.array.length > 0)))
{var vector_seq__12303 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12298.array.length)))
{return cljs.core.cons.call(null,(this__12298.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12303.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12304 = this;
return this__12304.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12305 = this;
var count__12307 = this__12305.array.length;

if(cljs.core.truth_((count__12307 > 0)))
{return (this__12305.array[(count__12307 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12309 = this;
if(cljs.core.truth_((this__12309.array.length > 0)))
{var new_array__12312 = cljs.core.aclone.call(null,this__12309.array);

new_array__12312.pop();
return (new cljs.core.Vector(this__12309.meta,new_array__12312));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12314 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12316 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12318 = this;
return (new cljs.core.Vector(meta,this__12318.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12320 = this;
return this__12320.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12357 = null;
var G__12357__12358 = (function (coll,n){
var this__12322 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12324 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12324))
{return (n < this__12322.array.length);
} else
{return and__3546__auto____12324;
}
})()))
{return (this__12322.array[n]);
} else
{return null;
}
});
var G__12357__12359 = (function (coll,n,not_found){
var this__12327 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12328 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12328))
{return (n < this__12327.array.length);
} else
{return and__3546__auto____12328;
}
})()))
{return (this__12327.array[n]);
} else
{return not_found;
}
});
G__12357 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12357__12358.call(this,coll,n);
case  3 :
return G__12357__12359.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12357;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12331 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12331.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12433){
var args = cljs.core.seq( arglist__12433 );;
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
var this__12445 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12488 = null;
var G__12488__12489 = (function (coll,k){
var this__12446 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12488__12490 = (function (coll,k,not_found){
var this__12448 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12488 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12488__12489.call(this,coll,k);
case  3 :
return G__12488__12490.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12488;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12452 = this;
var v_pos__12455 = (this__12452.start + key);

return (new cljs.core.Subvec(this__12452.meta,cljs.core._assoc.call(null,this__12452.v,v_pos__12455,val),this__12452.start,((this__12452.end > (v_pos__12455 + 1)) ? this__12452.end : (v_pos__12455 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12495 = null;
var G__12495__12497 = (function (coll,k){
var this__12457 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12495__12498 = (function (coll,k,not_found){
var this__12459 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12495 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12495__12497.call(this,coll,k);
case  3 :
return G__12495__12498.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12495;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12461 = this;
return (new cljs.core.Subvec(this__12461.meta,cljs.core._assoc_n.call(null,this__12461.v,this__12461.end,o),this__12461.start,(this__12461.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12506 = null;
var G__12506__12508 = (function (coll,f){
var this__12464 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12506__12509 = (function (coll,f,start){
var this__12466 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12506 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12506__12508.call(this,coll,f);
case  3 :
return G__12506__12509.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12506;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12468 = this;
var subvec_seq__12474 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12468.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12468.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12474.call(null,this__12468.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12476 = this;
return (this__12476.end - this__12476.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12478 = this;
return cljs.core._nth.call(null,this__12478.v,(this__12478.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12480 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12480.start,this__12480.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12480.meta,this__12480.v,this__12480.start,(this__12480.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12481 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12482 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12483 = this;
return (new cljs.core.Subvec(meta,this__12483.v,this__12483.start,this__12483.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12484 = this;
return this__12484.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12526 = null;
var G__12526__12528 = (function (coll,n){
var this__12485 = this;
return cljs.core._nth.call(null,this__12485.v,(this__12485.start + n));
});
var G__12526__12529 = (function (coll,n,not_found){
var this__12486 = this;
return cljs.core._nth.call(null,this__12486.v,(this__12486.start + n),not_found);
});
G__12526 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12526__12528.call(this,coll,n);
case  3 :
return G__12526__12529.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12526;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12487 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12487.meta);
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
var subvec__12538 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12539 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12538.call(this,v,start);
case  3 :
return subvec__12539.call(this,v,start,end);
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
var this__12549 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12551 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12552 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12553 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12553.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12581 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12583 = this;
return cljs.core._first.call(null,this__12583.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12586 = this;
var temp__3695__auto____12588 = cljs.core.next.call(null,this__12586.front);

if(cljs.core.truth_(temp__3695__auto____12588))
{var f1__12590 = temp__3695__auto____12588;

return (new cljs.core.PersistentQueueSeq(this__12586.meta,f1__12590,this__12586.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12586.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12586.meta,this__12586.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12593 = this;
return this__12593.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12594 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12594.front,this__12594.rear));
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
var this__12610 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12615 = this;
if(cljs.core.truth_(this__12615.front))
{return (new cljs.core.PersistentQueue(this__12615.meta,(this__12615.count + 1),this__12615.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12617 = this__12615.rear;

if(cljs.core.truth_(or__3548__auto____12617))
{return or__3548__auto____12617;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12615.meta,(this__12615.count + 1),cljs.core.conj.call(null,this__12615.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12622 = this;
var rear__12623 = cljs.core.seq.call(null,this__12622.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12624 = this__12622.front;

if(cljs.core.truth_(or__3548__auto____12624))
{return or__3548__auto____12624;
} else
{return rear__12623;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12622.front,cljs.core.seq.call(null,rear__12623)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12625 = this;
return this__12625.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12627 = this;
return cljs.core._first.call(null,this__12627.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12632 = this;
if(cljs.core.truth_(this__12632.front))
{var temp__3695__auto____12633 = cljs.core.next.call(null,this__12632.front);

if(cljs.core.truth_(temp__3695__auto____12633))
{var f1__12634 = temp__3695__auto____12633;

return (new cljs.core.PersistentQueue(this__12632.meta,(this__12632.count - 1),f1__12634,this__12632.rear));
} else
{return (new cljs.core.PersistentQueue(this__12632.meta,(this__12632.count - 1),cljs.core.seq.call(null,this__12632.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12639 = this;
return cljs.core.first.call(null,this__12639.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12640 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12643 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12644 = this;
return (new cljs.core.PersistentQueue(meta,this__12644.count,this__12644.front,this__12644.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12645 = this;
return this__12645.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12647 = this;
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
var this__12754 = this;
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
var len__12758 = array.length;

var i__12760 = 0;

while(true){
if(cljs.core.truth_((i__12760 < len__12758)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12760]))))
{return i__12760;
} else
{{
var G__12763 = (i__12760 + incr);
i__12760 = G__12763;
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
var obj_map_contains_key_QMARK___12767 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12770 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12765 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12765))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12765;
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
return obj_map_contains_key_QMARK___12767.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12770.call(this,k,strobj,true_val,false_val);
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
var this__12775 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12897 = null;
var G__12897__12898 = (function (coll,k){
var this__12776 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12897__12899 = (function (coll,k,not_found){
var this__12777 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12777.strobj,(this__12777.strobj[k]),not_found);
});
G__12897 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12897__12898.call(this,coll,k);
case  3 :
return G__12897__12899.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12897;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12779 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12780 = goog.object.clone.call(null,this__12779.strobj);
var overwrite_QMARK___12782 = new_strobj__12780.hasOwnProperty(k);

(new_strobj__12780[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12782))
{return (new cljs.core.ObjMap(this__12779.meta,this__12779.keys,new_strobj__12780));
} else
{var new_keys__12783 = cljs.core.aclone.call(null,this__12779.keys);

new_keys__12783.push(k);
return (new cljs.core.ObjMap(this__12779.meta,new_keys__12783,new_strobj__12780));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12779.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12787 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12787.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12910 = null;
var G__12910__12911 = (function (coll,k){
var this__12788 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12910__12912 = (function (coll,k,not_found){
var this__12789 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12910 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12910__12911.call(this,coll,k);
case  3 :
return G__12910__12912.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12910;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12791 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12792 = this;
if(cljs.core.truth_((this__12792.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12773_SHARP_){
return cljs.core.vector.call(null,p1__12773_SHARP_,(this__12792.strobj[p1__12773_SHARP_]));
}),this__12792.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12793 = this;
return this__12793.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12794 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12795 = this;
return (new cljs.core.ObjMap(meta,this__12795.keys,this__12795.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12796 = this;
return this__12796.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12801 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12801.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12803 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12891 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12891))
{return this__12803.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12891;
}
})()))
{var new_keys__12893 = cljs.core.aclone.call(null,this__12803.keys);
var new_strobj__12894 = goog.object.clone.call(null,this__12803.strobj);

new_keys__12893.splice(cljs.core.scan_array.call(null,1,k,new_keys__12893),1);
cljs.core.js_delete.call(null,new_strobj__12894,k);
return (new cljs.core.ObjMap(this__12803.meta,new_keys__12893,new_strobj__12894));
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
var this__13137 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13225 = null;
var G__13225__13226 = (function (coll,k){
var this__13140 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13225__13227 = (function (coll,k,not_found){
var this__13142 = this;
var bucket__13143 = (this__13142.hashobj[cljs.core.hash.call(null,k)]);
var i__13144 = (cljs.core.truth_(bucket__13143)?cljs.core.scan_array.call(null,2,k,bucket__13143):null);

if(cljs.core.truth_(i__13144))
{return (bucket__13143[(i__13144 + 1)]);
} else
{return not_found;
}
});
G__13225 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13225__13226.call(this,coll,k);
case  3 :
return G__13225__13227.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13225;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13146 = this;
var h__13148 = cljs.core.hash.call(null,k);
var bucket__13149 = (this__13146.hashobj[h__13148]);

if(cljs.core.truth_(bucket__13149))
{var new_bucket__13150 = cljs.core.aclone.call(null,bucket__13149);
var new_hashobj__13151 = goog.object.clone.call(null,this__13146.hashobj);

(new_hashobj__13151[h__13148] = new_bucket__13150);
var temp__3695__auto____13152 = cljs.core.scan_array.call(null,2,k,new_bucket__13150);

if(cljs.core.truth_(temp__3695__auto____13152))
{var i__13153 = temp__3695__auto____13152;

(new_bucket__13150[(i__13153 + 1)] = v);
return (new cljs.core.HashMap(this__13146.meta,this__13146.count,new_hashobj__13151));
} else
{new_bucket__13150.push(k,v);
return (new cljs.core.HashMap(this__13146.meta,(this__13146.count + 1),new_hashobj__13151));
}
} else
{var new_hashobj__13159 = goog.object.clone.call(null,this__13146.hashobj);

(new_hashobj__13159[h__13148] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13146.meta,(this__13146.count + 1),new_hashobj__13159));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13161 = this;
var bucket__13164 = (this__13161.hashobj[cljs.core.hash.call(null,k)]);
var i__13169 = (cljs.core.truth_(bucket__13164)?cljs.core.scan_array.call(null,2,k,bucket__13164):null);

if(cljs.core.truth_(i__13169))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13275 = null;
var G__13275__13276 = (function (coll,k){
var this__13173 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13275__13278 = (function (coll,k,not_found){
var this__13175 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13275 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13275__13276.call(this,coll,k);
case  3 :
return G__13275__13278.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13275;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13182 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13190 = this;
if(cljs.core.truth_((this__13190.count > 0)))
{var hashes__13193 = cljs.core.js_keys.call(null,this__13190.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13052_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13190.hashobj[p1__13052_SHARP_])));
}),hashes__13193);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13196 = this;
return this__13196.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13200 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13202 = this;
return (new cljs.core.HashMap(meta,this__13202.count,this__13202.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13203 = this;
return this__13203.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13205 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13205.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13209 = this;
var h__13210 = cljs.core.hash.call(null,k);
var bucket__13213 = (this__13209.hashobj[h__13210]);
var i__13214 = (cljs.core.truth_(bucket__13213)?cljs.core.scan_array.call(null,2,k,bucket__13213):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13214)))
{return coll;
} else
{var new_hashobj__13215 = goog.object.clone.call(null,this__13209.hashobj);

if(cljs.core.truth_((3 > bucket__13213.length)))
{cljs.core.js_delete.call(null,new_hashobj__13215,h__13210);
} else
{var new_bucket__13216 = cljs.core.aclone.call(null,bucket__13213);

new_bucket__13216.splice(i__13214,2);
(new_hashobj__13215[h__13210] = new_bucket__13216);
}
return (new cljs.core.HashMap(this__13209.meta,(this__13209.count - 1),new_hashobj__13215));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13317 = ks.length;

var i__13318 = 0;
var out__13320 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13318 < len__13317)))
{{
var G__13325 = (i__13318 + 1);
var G__13326 = cljs.core.assoc.call(null,out__13320,(ks[i__13318]),(vs[i__13318]));
i__13318 = G__13325;
out__13320 = G__13326;
continue;
}
} else
{return out__13320;
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
var in$__13331 = cljs.core.seq.call(null,keyvals);
var out__13332 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13331))
{{
var G__13341 = cljs.core.nnext.call(null,in$__13331);
var G__13342 = cljs.core.assoc.call(null,out__13332,cljs.core.first.call(null,in$__13331),cljs.core.second.call(null,in$__13331));
in$__13331 = G__13341;
out__13332 = G__13342;
continue;
}
} else
{return out__13332;
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
hash_map.cljs$lang$applyTo = (function (arglist__13345){
var keyvals = cljs.core.seq( arglist__13345 );;
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
{return cljs.core.reduce.call(null,(function (p1__13361_SHARP_,p2__13363_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13366 = p1__13361_SHARP_;

if(cljs.core.truth_(or__3548__auto____13366))
{return or__3548__auto____13366;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13363_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13375){
var maps = cljs.core.seq( arglist__13375 );;
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
{var merge_entry__13387 = (function (m,e){
var k__13383 = cljs.core.first.call(null,e);
var v__13384 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13383)))
{return cljs.core.assoc.call(null,m,k__13383,f.call(null,cljs.core.get.call(null,m,k__13383),v__13384));
} else
{return cljs.core.assoc.call(null,m,k__13383,v__13384);
}
});
var merge2__13394 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13387,(function (){var or__3548__auto____13391 = m1;

if(cljs.core.truth_(or__3548__auto____13391))
{return or__3548__auto____13391;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13394,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13400){
var f = cljs.core.first(arglist__13400);
var maps = cljs.core.rest(arglist__13400);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13413 = cljs.core.ObjMap.fromObject([],{});
var keys__13415 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13415))
{var key__13416 = cljs.core.first.call(null,keys__13415);
var entry__13417 = cljs.core.get.call(null,map,key__13416,"﷐'user/not-found");

{
var G__13422 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13417,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13413,key__13416,entry__13417):ret__13413);
var G__13423 = cljs.core.next.call(null,keys__13415);
ret__13413 = G__13422;
keys__13415 = G__13423;
continue;
}
} else
{return ret__13413;
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
var this__13463 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13507 = null;
var G__13507__13508 = (function (coll,v){
var this__13464 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13507__13509 = (function (coll,v,not_found){
var this__13465 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13465.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13507 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13507__13508.call(this,coll,v);
case  3 :
return G__13507__13509.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13507;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13511 = null;
var G__13511__13512 = (function (coll,k){
var this__13467 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13511__13513 = (function (coll,k,not_found){
var this__13471 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13511 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13511__13512.call(this,coll,k);
case  3 :
return G__13511__13513.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13511;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13476 = this;
return (new cljs.core.Set(this__13476.meta,cljs.core.assoc.call(null,this__13476.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13480 = this;
return cljs.core.keys.call(null,this__13480.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13482 = this;
return (new cljs.core.Set(this__13482.meta,cljs.core.dissoc.call(null,this__13482.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13483 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13486 = this;
var and__3546__auto____13488 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13488))
{var and__3546__auto____13489 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13489))
{return cljs.core.every_QMARK_.call(null,(function (p1__13404_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13404_SHARP_);
}),other);
} else
{return and__3546__auto____13489;
}
} else
{return and__3546__auto____13488;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13490 = this;
return (new cljs.core.Set(meta,this__13490.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13496 = this;
return this__13496.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13497 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13497.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13522 = cljs.core.seq.call(null,coll);
var out__13523 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13522))))
{{
var G__13526 = cljs.core.rest.call(null,in$__13522);
var G__13527 = cljs.core.conj.call(null,out__13523,cljs.core.first.call(null,in$__13522));
in$__13522 = G__13526;
out__13523 = G__13527;
continue;
}
} else
{return out__13523;
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
{var n__13533 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13538 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13538))
{var e__13540 = temp__3695__auto____13538;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13540));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13533,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13521_SHARP_){
var temp__3695__auto____13544 = cljs.core.find.call(null,smap,p1__13521_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13544))
{var e__13545 = temp__3695__auto____13544;

return cljs.core.second.call(null,e__13545);
} else
{return p1__13521_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13575 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13562,seen){
while(true){
var vec__13564__13565 = p__13562;
var f__13567 = cljs.core.nth.call(null,vec__13564__13565,0,null);
var xs__13568 = vec__13564__13565;

var temp__3698__auto____13569 = cljs.core.seq.call(null,xs__13568);

if(cljs.core.truth_(temp__3698__auto____13569))
{var s__13572 = temp__3698__auto____13569;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13567)))
{{
var G__13582 = cljs.core.rest.call(null,s__13572);
var G__13583 = seen;
p__13562 = G__13582;
seen = G__13583;
continue;
}
} else
{return cljs.core.cons.call(null,f__13567,step.call(null,cljs.core.rest.call(null,s__13572),cljs.core.conj.call(null,seen,f__13567)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13575.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13595 = cljs.core.Vector.fromArray([]);
var s__13596 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13596)))
{{
var G__13600 = cljs.core.conj.call(null,ret__13595,cljs.core.first.call(null,s__13596));
var G__13601 = cljs.core.next.call(null,s__13596);
ret__13595 = G__13600;
s__13596 = G__13601;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13595);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13607 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13607))
{return or__3548__auto____13607;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13609 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13609 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13609 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13686 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13686))
{return or__3548__auto____13686;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13687 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13687 > -1)))
{return cljs.core.subs.call(null,x,2,i__13687);
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
var map__13696 = cljs.core.ObjMap.fromObject([],{});
var ks__13697 = cljs.core.seq.call(null,keys);
var vs__13698 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13699 = ks__13697;

if(cljs.core.truth_(and__3546__auto____13699))
{return vs__13698;
} else
{return and__3546__auto____13699;
}
})()))
{{
var G__13701 = cljs.core.assoc.call(null,map__13696,cljs.core.first.call(null,ks__13697),cljs.core.first.call(null,vs__13698));
var G__13702 = cljs.core.next.call(null,ks__13697);
var G__13703 = cljs.core.next.call(null,vs__13698);
map__13696 = G__13701;
ks__13697 = G__13702;
vs__13698 = G__13703;
continue;
}
} else
{return map__13696;
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
var max_key__13714 = (function (k,x){
return x;
});
var max_key__13715 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13716 = (function() { 
var G__13720__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13692_SHARP_,p2__13693_SHARP_){
return max_key.call(null,k,p1__13692_SHARP_,p2__13693_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13720 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13720__delegate.call(this, k, x, y, more);
};
G__13720.cljs$lang$maxFixedArity = 3;
G__13720.cljs$lang$applyTo = (function (arglist__13724){
var k = cljs.core.first(arglist__13724);
var x = cljs.core.first(cljs.core.next(arglist__13724));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13724)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13724)));
return G__13720__delegate.call(this, k, x, y, more);
});
return G__13720;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13714.call(this,k,x);
case  3 :
return max_key__13715.call(this,k,x,y);
default:
return max_key__13716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13716.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13734 = (function (k,x){
return x;
});
var min_key__13735 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13736 = (function() { 
var G__13740__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13706_SHARP_,p2__13707_SHARP_){
return min_key.call(null,k,p1__13706_SHARP_,p2__13707_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13740 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13740__delegate.call(this, k, x, y, more);
};
G__13740.cljs$lang$maxFixedArity = 3;
G__13740.cljs$lang$applyTo = (function (arglist__13743){
var k = cljs.core.first(arglist__13743);
var x = cljs.core.first(cljs.core.next(arglist__13743));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13743)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13743)));
return G__13740__delegate.call(this, k, x, y, more);
});
return G__13740;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13734.call(this,k,x);
case  3 :
return min_key__13735.call(this,k,x,y);
default:
return min_key__13736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13736.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13756 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13757 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13750 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13750))
{var s__13751 = temp__3698__auto____13750;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13751),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13751)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13756.call(this,n,step);
case  3 :
return partition_all__13757.call(this,n,step,coll);
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
var temp__3698__auto____13774 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13774))
{var s__13778 = temp__3698__auto____13774;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13778))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13778),take_while.call(null,pred,cljs.core.rest.call(null,s__13778)));
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
var this__13818 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13819 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13896 = null;
var G__13896__13897 = (function (rng,f){
var this__13821 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13896__13898 = (function (rng,f,s){
var this__13824 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13896 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13896__13897.call(this,rng,f);
case  3 :
return G__13896__13898.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13896;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13837 = this;
var comp__13839 = (cljs.core.truth_((this__13837.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13839.call(null,this__13837.start,this__13837.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13842 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13842.end - this__13842.start) / this__13842.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13845 = this;
return this__13845.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13846 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13846.meta,(this__13846.start + this__13846.step),this__13846.end,this__13846.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13858 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13866 = this;
return (new cljs.core.Range(meta,this__13866.start,this__13866.end,this__13866.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13869 = this;
return this__13869.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13927 = null;
var G__13927__13928 = (function (rng,n){
var this__13870 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13870.start + (n * this__13870.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13875 = (this__13870.start > this__13870.end);

if(cljs.core.truth_(and__3546__auto____13875))
{return cljs.core._EQ_.call(null,this__13870.step,0);
} else
{return and__3546__auto____13875;
}
})()))
{return this__13870.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13927__13929 = (function (rng,n,not_found){
var this__13876 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13876.start + (n * this__13876.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13884 = (this__13876.start > this__13876.end);

if(cljs.core.truth_(and__3546__auto____13884))
{return cljs.core._EQ_.call(null,this__13876.step,0);
} else
{return and__3546__auto____13884;
}
})()))
{return this__13876.start;
} else
{return not_found;
}
}
});
G__13927 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13927__13928.call(this,rng,n);
case  3 :
return G__13927__13929.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13927;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13892 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13892.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13959 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13961 = (function (end){
return range.call(null,0,end,1);
});
var range__13962 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13964 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13959.call(this);
case  1 :
return range__13961.call(this,start);
case  2 :
return range__13962.call(this,start,end);
case  3 :
return range__13964.call(this,start,end,step);
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
var temp__3698__auto____13968 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13968))
{var s__13974 = temp__3698__auto____13968;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13974),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13974)));
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
var temp__3698__auto____14002 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14002))
{var s__14003 = temp__3698__auto____14002;

var fst__14004 = cljs.core.first.call(null,s__14003);
var fv__14005 = f.call(null,fst__14004);
var run__14007 = cljs.core.cons.call(null,fst__14004,cljs.core.take_while.call(null,(function (p1__13985_SHARP_){
return cljs.core._EQ_.call(null,fv__14005,f.call(null,p1__13985_SHARP_));
}),cljs.core.next.call(null,s__14003)));

return cljs.core.cons.call(null,run__14007,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14007),s__14003))));
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
var reductions__14043 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14038 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14038))
{var s__14040 = temp__3695__auto____14038;

return reductions.call(null,f,cljs.core.first.call(null,s__14040),cljs.core.rest.call(null,s__14040));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14044 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14041))
{var s__14042 = temp__3698__auto____14041;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14042)),cljs.core.rest.call(null,s__14042));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14043.call(this,f,init);
case  3 :
return reductions__14044.call(this,f,init,coll);
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
var juxt__14164 = (function (f){
return (function() {
var G__14171 = null;
var G__14171__14172 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14171__14173 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14171__14174 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14171__14175 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14171__14176 = (function() { 
var G__14186__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14186__delegate.call(this, x, y, z, args);
};
G__14186.cljs$lang$maxFixedArity = 3;
G__14186.cljs$lang$applyTo = (function (arglist__14195){
var x = cljs.core.first(arglist__14195);
var y = cljs.core.first(cljs.core.next(arglist__14195));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14195)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14195)));
return G__14186__delegate.call(this, x, y, z, args);
});
return G__14186;
})()
;
G__14171 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14171__14172.call(this);
case  1 :
return G__14171__14173.call(this,x);
case  2 :
return G__14171__14174.call(this,x,y);
case  3 :
return G__14171__14175.call(this,x,y,z);
default:
return G__14171__14176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14171.cljs$lang$maxFixedArity = 3;
G__14171.cljs$lang$applyTo = G__14171__14176.cljs$lang$applyTo;
return G__14171;
})()
});
var juxt__14165 = (function (f,g){
return (function() {
var G__14199 = null;
var G__14199__14200 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14199__14201 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14199__14202 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14199__14203 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14199__14204 = (function() { 
var G__14212__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14212 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14212__delegate.call(this, x, y, z, args);
};
G__14212.cljs$lang$maxFixedArity = 3;
G__14212.cljs$lang$applyTo = (function (arglist__14218){
var x = cljs.core.first(arglist__14218);
var y = cljs.core.first(cljs.core.next(arglist__14218));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14218)));
return G__14212__delegate.call(this, x, y, z, args);
});
return G__14212;
})()
;
G__14199 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14199__14200.call(this);
case  1 :
return G__14199__14201.call(this,x);
case  2 :
return G__14199__14202.call(this,x,y);
case  3 :
return G__14199__14203.call(this,x,y,z);
default:
return G__14199__14204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14199.cljs$lang$maxFixedArity = 3;
G__14199.cljs$lang$applyTo = G__14199__14204.cljs$lang$applyTo;
return G__14199;
})()
});
var juxt__14166 = (function (f,g,h){
return (function() {
var G__14221 = null;
var G__14221__14222 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14221__14223 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14221__14225 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14221__14226 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14221__14228 = (function() { 
var G__14239__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14239__delegate.call(this, x, y, z, args);
};
G__14239.cljs$lang$maxFixedArity = 3;
G__14239.cljs$lang$applyTo = (function (arglist__14247){
var x = cljs.core.first(arglist__14247);
var y = cljs.core.first(cljs.core.next(arglist__14247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14247)));
return G__14239__delegate.call(this, x, y, z, args);
});
return G__14239;
})()
;
G__14221 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14221__14222.call(this);
case  1 :
return G__14221__14223.call(this,x);
case  2 :
return G__14221__14225.call(this,x,y);
case  3 :
return G__14221__14226.call(this,x,y,z);
default:
return G__14221__14228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14221.cljs$lang$maxFixedArity = 3;
G__14221.cljs$lang$applyTo = G__14221__14228.cljs$lang$applyTo;
return G__14221;
})()
});
var juxt__14168 = (function() { 
var G__14249__delegate = function (f,g,h,fs){
var fs__14143 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14251 = null;
var G__14251__14252 = (function (){
return cljs.core.reduce.call(null,(function (p1__14019_SHARP_,p2__14020_SHARP_){
return cljs.core.conj.call(null,p1__14019_SHARP_,p2__14020_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14251__14253 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14021_SHARP_,p2__14022_SHARP_){
return cljs.core.conj.call(null,p1__14021_SHARP_,p2__14022_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14251__14254 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14023_SHARP_,p2__14025_SHARP_){
return cljs.core.conj.call(null,p1__14023_SHARP_,p2__14025_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14251__14255 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14028_SHARP_,p2__14029_SHARP_){
return cljs.core.conj.call(null,p1__14028_SHARP_,p2__14029_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14251__14256 = (function() { 
var G__14273__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14030_SHARP_,p2__14031_SHARP_){
return cljs.core.conj.call(null,p1__14030_SHARP_,cljs.core.apply.call(null,p2__14031_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14143);
};
var G__14273 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14273__delegate.call(this, x, y, z, args);
};
G__14273.cljs$lang$maxFixedArity = 3;
G__14273.cljs$lang$applyTo = (function (arglist__14277){
var x = cljs.core.first(arglist__14277);
var y = cljs.core.first(cljs.core.next(arglist__14277));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14277)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14277)));
return G__14273__delegate.call(this, x, y, z, args);
});
return G__14273;
})()
;
G__14251 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14251__14252.call(this);
case  1 :
return G__14251__14253.call(this,x);
case  2 :
return G__14251__14254.call(this,x,y);
case  3 :
return G__14251__14255.call(this,x,y,z);
default:
return G__14251__14256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14251.cljs$lang$maxFixedArity = 3;
G__14251.cljs$lang$applyTo = G__14251__14256.cljs$lang$applyTo;
return G__14251;
})()
};
var G__14249 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14249__delegate.call(this, f, g, h, fs);
};
G__14249.cljs$lang$maxFixedArity = 3;
G__14249.cljs$lang$applyTo = (function (arglist__14285){
var f = cljs.core.first(arglist__14285);
var g = cljs.core.first(cljs.core.next(arglist__14285));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14285)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14285)));
return G__14249__delegate.call(this, f, g, h, fs);
});
return G__14249;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14164.call(this,f);
case  2 :
return juxt__14165.call(this,f,g);
case  3 :
return juxt__14166.call(this,f,g,h);
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
var dorun__14330 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14334 = cljs.core.next.call(null,coll);
coll = G__14334;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14331 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14328 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14328))
{return (n > 0);
} else
{return and__3546__auto____14328;
}
})()))
{{
var G__14335 = (n - 1);
var G__14336 = cljs.core.next.call(null,coll);
n = G__14335;
coll = G__14336;
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
return dorun__14330.call(this,n);
case  2 :
return dorun__14331.call(this,n,coll);
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
var doall__14345 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14346 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14345.call(this,n);
case  2 :
return doall__14346.call(this,n,coll);
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
var matches__14352 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14352),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14352),1)))
{return cljs.core.first.call(null,matches__14352);
} else
{return cljs.core.vec.call(null,matches__14352);
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
var matches__14360 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14360)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14360),1)))
{return cljs.core.first.call(null,matches__14360);
} else
{return cljs.core.vec.call(null,matches__14360);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14363 = cljs.core.re_find.call(null,re,s);
var match_idx__14364 = s.search(re);
var match_str__14366 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14363))?cljs.core.first.call(null,match_data__14363):match_data__14363);
var post_match__14367 = cljs.core.subs.call(null,s,(match_idx__14364 + cljs.core.count.call(null,match_str__14366)));

if(cljs.core.truth_(match_data__14363))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14363,re_seq.call(null,re,post_match__14367));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14370_SHARP_){
return print_one.call(null,p1__14370_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14384 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14384))
{var and__3546__auto____14394 = (function (){var x__445__auto____14385 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14388 = x__445__auto____14385;

if(cljs.core.truth_(and__3546__auto____14388))
{var and__3546__auto____14391 = x__445__auto____14385.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14391))
{return cljs.core.not.call(null,x__445__auto____14385.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14391;
}
} else
{return and__3546__auto____14388;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14385);
}
})();

if(cljs.core.truth_(and__3546__auto____14394))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14394;
}
} else
{return and__3546__auto____14384;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14397 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14398 = x__445__auto____14397;

if(cljs.core.truth_(and__3546__auto____14398))
{var and__3546__auto____14399 = x__445__auto____14397.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14399))
{return cljs.core.not.call(null,x__445__auto____14397.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14399;
}
} else
{return and__3546__auto____14398;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14397);
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
var first_obj__14402 = cljs.core.first.call(null,objs);
var sb__14403 = (new goog.string.StringBuffer());

var G__14405__14406 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14405__14406))
{var obj__14410 = cljs.core.first.call(null,G__14405__14406);
var G__14405__14411 = G__14405__14406;

while(true){
if(cljs.core.truth_((obj__14410 === first_obj__14402)))
{} else
{sb__14403.append(" ");
}
var G__14415__14416 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14410,opts));

if(cljs.core.truth_(G__14415__14416))
{var string__14419 = cljs.core.first.call(null,G__14415__14416);
var G__14415__14420 = G__14415__14416;

while(true){
sb__14403.append(string__14419);
var temp__3698__auto____14424 = cljs.core.next.call(null,G__14415__14420);

if(cljs.core.truth_(temp__3698__auto____14424))
{var G__14415__14426 = temp__3698__auto____14424;

{
var G__14431 = cljs.core.first.call(null,G__14415__14426);
var G__14433 = G__14415__14426;
string__14419 = G__14431;
G__14415__14420 = G__14433;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14428 = cljs.core.next.call(null,G__14405__14411);

if(cljs.core.truth_(temp__3698__auto____14428))
{var G__14405__14430 = temp__3698__auto____14428;

{
var G__14435 = cljs.core.first.call(null,G__14405__14430);
var G__14436 = G__14405__14430;
obj__14410 = G__14435;
G__14405__14411 = G__14436;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14403);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14441 = cljs.core.first.call(null,objs);

var G__14443__14446 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14443__14446))
{var obj__14448 = cljs.core.first.call(null,G__14443__14446);
var G__14443__14449 = G__14443__14446;

while(true){
if(cljs.core.truth_((obj__14448 === first_obj__14441)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14453__14455 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14448,opts));

if(cljs.core.truth_(G__14453__14455))
{var string__14457 = cljs.core.first.call(null,G__14453__14455);
var G__14453__14458 = G__14453__14455;

while(true){
cljs.core.string_print.call(null,string__14457);
var temp__3698__auto____14460 = cljs.core.next.call(null,G__14453__14458);

if(cljs.core.truth_(temp__3698__auto____14460))
{var G__14453__14462 = temp__3698__auto____14460;

{
var G__14476 = cljs.core.first.call(null,G__14453__14462);
var G__14477 = G__14453__14462;
string__14457 = G__14476;
G__14453__14458 = G__14477;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14463 = cljs.core.next.call(null,G__14443__14449);

if(cljs.core.truth_(temp__3698__auto____14463))
{var G__14443__14464 = temp__3698__auto____14463;

{
var G__14483 = cljs.core.first.call(null,G__14443__14464);
var G__14484 = G__14443__14464;
obj__14448 = G__14483;
G__14443__14449 = G__14484;
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
pr_str.cljs$lang$applyTo = (function (arglist__14501){
var objs = cljs.core.seq( arglist__14501 );;
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
pr.cljs$lang$applyTo = (function (arglist__14532){
var objs = cljs.core.seq( arglist__14532 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14538){
var objs = cljs.core.seq( arglist__14538 );;
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
println.cljs$lang$applyTo = (function (arglist__14659){
var objs = cljs.core.seq( arglist__14659 );;
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
prn.cljs$lang$applyTo = (function (arglist__14686){
var objs = cljs.core.seq( arglist__14686 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14688 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14688,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14691 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14691))
{var nspc__14692 = temp__3698__auto____14691;

return cljs.core.str.call(null,nspc__14692,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14693 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14693))
{var nspc__14695 = temp__3698__auto____14693;

return cljs.core.str.call(null,nspc__14695,"/");
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
var pr_pair__14701 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14701,"{",", ","}",opts,coll);
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
var this__14749 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14750 = this;
var G__14751__14752 = cljs.core.seq.call(null,this__14750.watches);

if(cljs.core.truth_(G__14751__14752))
{var G__14754__14756 = cljs.core.first.call(null,G__14751__14752);
var vec__14755__14757 = G__14754__14756;
var key__14758 = cljs.core.nth.call(null,vec__14755__14757,0,null);
var f__14759 = cljs.core.nth.call(null,vec__14755__14757,1,null);
var G__14751__14760 = G__14751__14752;

var G__14754__14761 = G__14754__14756;
var G__14751__14762 = G__14751__14760;

while(true){
var vec__14763__14764 = G__14754__14761;
var key__14765 = cljs.core.nth.call(null,vec__14763__14764,0,null);
var f__14766 = cljs.core.nth.call(null,vec__14763__14764,1,null);
var G__14751__14767 = G__14751__14762;

f__14766.call(null,key__14765,this$,oldval,newval);
var temp__3698__auto____14809 = cljs.core.next.call(null,G__14751__14767);

if(cljs.core.truth_(temp__3698__auto____14809))
{var G__14751__14810 = temp__3698__auto____14809;

{
var G__14821 = cljs.core.first.call(null,G__14751__14810);
var G__14822 = G__14751__14810;
G__14754__14761 = G__14821;
G__14751__14762 = G__14822;
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
var this__14811 = this;
return this$.watches = cljs.core.assoc.call(null,this__14811.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14812 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14812.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14813 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14813.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14814 = this;
return this__14814.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14815 = this;
return this__14815.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14817 = this;
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
var atom__14841 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14842 = (function() { 
var G__14844__delegate = function (x,p__14828){
var map__14829__14833 = p__14828;
var map__14829__14835 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14829__14833))?cljs.core.apply.call(null,cljs.core.hash_map,map__14829__14833):map__14829__14833);
var validator__14836 = cljs.core.get.call(null,map__14829__14835,"﷐'validator");
var meta__14838 = cljs.core.get.call(null,map__14829__14835,"﷐'meta");

return (new cljs.core.Atom(x,meta__14838,validator__14836,null));
};
var G__14844 = function (x,var_args){
var p__14828 = null;
if (goog.isDef(var_args)) {
  p__14828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14844__delegate.call(this, x, p__14828);
};
G__14844.cljs$lang$maxFixedArity = 1;
G__14844.cljs$lang$applyTo = (function (arglist__14848){
var x = cljs.core.first(arglist__14848);
var p__14828 = cljs.core.rest(arglist__14848);
return G__14844__delegate.call(this, x, p__14828);
});
return G__14844;
})()
;
atom = function(x,var_args){
var p__14828 = var_args;
switch(arguments.length){
case  1 :
return atom__14841.call(this,x);
default:
return atom__14842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14842.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14855 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14855))
{var validate__14856 = temp__3698__auto____14855;

if(cljs.core.truth_(validate__14856.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14857 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14857,new_value);
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
var swap_BANG___14902 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14903 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14904 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14905 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14906 = (function() { 
var G__14910__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14910 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14910__delegate.call(this, a, f, x, y, z, more);
};
G__14910.cljs$lang$maxFixedArity = 5;
G__14910.cljs$lang$applyTo = (function (arglist__14914){
var a = cljs.core.first(arglist__14914);
var f = cljs.core.first(cljs.core.next(arglist__14914));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14914)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14914))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14914)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14914)))));
return G__14910__delegate.call(this, a, f, x, y, z, more);
});
return G__14910;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14902.call(this,a,f);
case  3 :
return swap_BANG___14903.call(this,a,f,x);
case  4 :
return swap_BANG___14904.call(this,a,f,x,y);
case  5 :
return swap_BANG___14905.call(this,a,f,x,y,z);
default:
return swap_BANG___14906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14906.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14924){
var iref = cljs.core.first(arglist__14924);
var f = cljs.core.first(cljs.core.next(arglist__14924));
var args = cljs.core.rest(cljs.core.next(arglist__14924));
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
var this__14982 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14982.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14983 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14983.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14983.state,this__14983.f);
}
return cljs.core.deref.call(null,this__14983.state);
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
delay.cljs$lang$applyTo = (function (arglist__14991){
var body = cljs.core.seq( arglist__14991 );;
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
var map__15010__15013 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15010__15011))?cljs.core.apply.call(null,cljs.core.hash_map,map__15010__15011):map__15010__15011);
var keywordize_keys__15014 = cljs.core.get.call(null,map__15010__15013,"﷐'keywordize-keys");
var keyfn__15015 = (cljs.core.truth_(keywordize_keys__15014)?cljs.core.keyword:cljs.core.str);
var f__15031 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15030 = (function iter__15020(s__15021){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15021__15022 = s__15021;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15021__15022)))
{var k__15026 = cljs.core.first.call(null,s__15021__15022);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15015.call(null,k__15026),thisfn.call(null,(x[k__15026]))]),iter__15020.call(null,cljs.core.rest.call(null,s__15021__15022)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15030.call(null,cljs.core.js_keys.call(null,x));
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

return f__15031.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15034){
var x = cljs.core.first(arglist__15034);
var options = cljs.core.rest(arglist__15034);
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
{var v__15041 = temp__3695__auto____15040;

return v__15041;
} else
{var ret__15042 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15038,cljs.core.assoc,args,ret__15042);
return ret__15042;
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
G__15049.cljs$lang$applyTo = (function (arglist__15051){
var args = cljs.core.seq( arglist__15051 );;
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
var trampoline__15066 = (function (f){
while(true){
var ret__15056 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15056)))
{{
var G__15069 = ret__15056;
f = G__15069;
continue;
}
} else
{return ret__15056;
}
break;
}
});
var trampoline__15067 = (function() { 
var G__15073__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15073 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15073__delegate.call(this, f, args);
};
G__15073.cljs$lang$maxFixedArity = 1;
G__15073.cljs$lang$applyTo = (function (arglist__15076){
var f = cljs.core.first(arglist__15076);
var args = cljs.core.rest(arglist__15076);
return G__15073__delegate.call(this, f, args);
});
return G__15073;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15066.call(this,f);
default:
return trampoline__15067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15067.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15083 = (function (){
return rand.call(null,1);
});
var rand__15084 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15083.call(this);
case  1 :
return rand__15084.call(this,n);
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
var k__15099 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15099,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15099,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15136 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15138 = (function (h,child,parent){
var or__3548__auto____15112 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15112))
{return or__3548__auto____15112;
} else
{var or__3548__auto____15114 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15114))
{return or__3548__auto____15114;
} else
{var and__3546__auto____15117 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15117))
{var and__3546__auto____15121 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15121))
{var and__3546__auto____15124 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15124))
{var ret__15126 = true;
var i__15127 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15130 = cljs.core.not.call(null,ret__15126);

if(cljs.core.truth_(or__3548__auto____15130))
{return or__3548__auto____15130;
} else
{return cljs.core._EQ_.call(null,i__15127,cljs.core.count.call(null,parent));
}
})()))
{return ret__15126;
} else
{{
var G__15141 = isa_QMARK_.call(null,h,child.call(null,i__15127),parent.call(null,i__15127));
var G__15142 = (i__15127 + 1);
ret__15126 = G__15141;
i__15127 = G__15142;
continue;
}
}
break;
}
} else
{return and__3546__auto____15124;
}
} else
{return and__3546__auto____15121;
}
} else
{return and__3546__auto____15117;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15136.call(this,h,child);
case  3 :
return isa_QMARK___15138.call(this,h,child,parent);
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
var parents__15150 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15148.call(this,h);
case  2 :
return parents__15150.call(this,h,tag);
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
var ancestors__15159 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15160 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15159.call(this,h);
case  2 :
return ancestors__15160.call(this,h,tag);
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
var descendants__15166 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15167 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15166.call(this,h);
case  2 :
return descendants__15167.call(this,h,tag);
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
var derive__15204 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15206 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15177 = "﷐'parents".call(null,h);
var td__15191 = "﷐'descendants".call(null,h);
var ta__15193 = "﷐'ancestors".call(null,h);
var tf__15195 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15200 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15177.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15193.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15193.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15177,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15195.call(null,"﷐'ancestors".call(null,h),tag,td__15191,parent,ta__15193),"﷐'descendants":tf__15195.call(null,"﷐'descendants".call(null,h),parent,ta__15193,tag,td__15191)});
})());

if(cljs.core.truth_(or__3548__auto____15200))
{return or__3548__auto____15200;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15204.call(this,h,tag);
case  3 :
return derive__15206.call(this,h,tag,parent);
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
var underive__15305 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15306 = (function (h,tag,parent){
var parentMap__15297 = "﷐'parents".call(null,h);
var childsParents__15298 = (cljs.core.truth_(parentMap__15297.call(null,tag))?cljs.core.disj.call(null,parentMap__15297.call(null,tag),parent):cljs.core.set([]));
var newParents__15299 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15298))?cljs.core.assoc.call(null,parentMap__15297,tag,childsParents__15298):cljs.core.dissoc.call(null,parentMap__15297,tag));
var deriv_seq__15300 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15170_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15170_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15170_SHARP_),cljs.core.second.call(null,p1__15170_SHARP_)));
}),cljs.core.seq.call(null,newParents__15299)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15297.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15172_SHARP_,p2__15173_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15172_SHARP_,p2__15173_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15300));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15305.call(this,h,tag);
case  3 :
return underive__15306.call(this,h,tag,parent);
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
var xprefs__15321 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15324 = (cljs.core.truth_((function (){var and__3546__auto____15322 = xprefs__15321;

if(cljs.core.truth_(and__3546__auto____15322))
{return xprefs__15321.call(null,y);
} else
{return and__3546__auto____15322;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15324))
{return or__3548__auto____15324;
} else
{var or__3548__auto____15328 = (function (){var ps__15326 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15326) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15326),prefer_table)))
{} else
{}
{
var G__15339 = cljs.core.rest.call(null,ps__15326);
ps__15326 = G__15339;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15328))
{return or__3548__auto____15328;
} else
{var or__3548__auto____15335 = (function (){var ps__15330 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15330) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15330),y,prefer_table)))
{} else
{}
{
var G__15342 = cljs.core.rest.call(null,ps__15330);
ps__15330 = G__15342;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15335))
{return or__3548__auto____15335;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15348 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15366 = cljs.core.reduce.call(null,(function (be,p__15353){
var vec__15354__15356 = p__15353;
var k__15357 = cljs.core.nth.call(null,vec__15354__15356,0,null);
var ___15358 = cljs.core.nth.call(null,vec__15354__15356,1,null);
var e__15359 = vec__15354__15356;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15357)))
{var be2__15363 = (cljs.core.truth_((function (){var or__3548__auto____15362 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15362))
{return or__3548__auto____15362;
} else
{return cljs.core.dominates.call(null,k__15357,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15359:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15363),k__15357,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15357," and ",cljs.core.first.call(null,be2__15363),", and neither is preferred")));
}
return be2__15363;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15366))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15366));
return cljs.core.second.call(null,best_entry__15366);
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
if(cljs.core.truth_((function (){var and__3546__auto____15381 = mf;

if(cljs.core.truth_(and__3546__auto____15381))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15381;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15384 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15384))
{return or__3548__auto____15384;
} else
{var or__3548__auto____15385 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15387 = mf;

if(cljs.core.truth_(and__3546__auto____15387))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15387;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15390 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{var or__3548__auto____15391 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15393 = mf;

if(cljs.core.truth_(and__3546__auto____15393))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15393;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15394 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15394))
{return or__3548__auto____15394;
} else
{var or__3548__auto____15396 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15396))
{return or__3548__auto____15396;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15398 = mf;

if(cljs.core.truth_(and__3546__auto____15398))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15398;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15402 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15402))
{return or__3548__auto____15402;
} else
{var or__3548__auto____15404 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15404))
{return or__3548__auto____15404;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15407 = mf;

if(cljs.core.truth_(and__3546__auto____15407))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15407;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15409 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15409))
{return or__3548__auto____15409;
} else
{var or__3548__auto____15411 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15411))
{return or__3548__auto____15411;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15416 = mf;

if(cljs.core.truth_(and__3546__auto____15416))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15416;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15418 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15418))
{return or__3548__auto____15418;
} else
{var or__3548__auto____15420 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15420))
{return or__3548__auto____15420;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15423 = mf;

if(cljs.core.truth_(and__3546__auto____15423))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15423;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15424 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15424))
{return or__3548__auto____15424;
} else
{var or__3548__auto____15425 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15425))
{return or__3548__auto____15425;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15428 = mf;

if(cljs.core.truth_(and__3546__auto____15428))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15428;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15432 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15432))
{return or__3548__auto____15432;
} else
{var or__3548__auto____15433 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15433))
{return or__3548__auto____15433;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15451 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15452 = cljs.core._get_method.call(null,mf,dispatch_val__15451);

if(cljs.core.truth_(target_fn__15452))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15451)));
}
return cljs.core.apply.call(null,target_fn__15452,args);
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
var this__15469 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15470 = this;
cljs.core.swap_BANG_.call(null,this__15470.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15470.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15470.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15470.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15471 = this;
cljs.core.swap_BANG_.call(null,this__15471.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15471.method_cache,this__15471.method_table,this__15471.cached_hierarchy,this__15471.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15472 = this;
cljs.core.swap_BANG_.call(null,this__15472.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15472.method_cache,this__15472.method_table,this__15472.cached_hierarchy,this__15472.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15473 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15473.cached_hierarchy),cljs.core.deref.call(null,this__15473.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15473.method_cache,this__15473.method_table,this__15473.cached_hierarchy,this__15473.hierarchy);
}
var temp__3695__auto____15474 = cljs.core.deref.call(null,this__15473.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15474))
{var target_fn__15475 = temp__3695__auto____15474;

return target_fn__15475;
} else
{var temp__3695__auto____15476 = cljs.core.find_and_cache_best_method.call(null,this__15473.name,dispatch_val,this__15473.hierarchy,this__15473.method_table,this__15473.prefer_table,this__15473.method_cache,this__15473.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15476))
{var target_fn__15477 = temp__3695__auto____15476;

return target_fn__15477;
} else
{return cljs.core.deref.call(null,this__15473.method_table).call(null,this__15473.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15478 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15478.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15478.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15478.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15478.method_cache,this__15478.method_table,this__15478.cached_hierarchy,this__15478.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15479 = this;
return cljs.core.deref.call(null,this__15479.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15480 = this;
return cljs.core.deref.call(null,this__15480.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15481 = this;
return cljs.core.do_dispatch.call(null,mf,this__15481.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15488__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15488 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15488__delegate.call(this, _, args);
};
G__15488.cljs$lang$maxFixedArity = 1;
G__15488.cljs$lang$applyTo = (function (arglist__15489){
var _ = cljs.core.first(arglist__15489);
var args = cljs.core.rest(arglist__15489);
return G__15488__delegate.call(this, _, args);
});
return G__15488;
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
