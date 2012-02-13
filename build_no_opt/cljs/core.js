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
var or__3548__auto____7258 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
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
var _invoke__7669 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = this$;

if(cljs.core.truth_(and__3546__auto____7325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7327 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{var or__3548__auto____7329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7670 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7331 = this$;

if(cljs.core.truth_(and__3546__auto____7331))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7331;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7332 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{var or__3548__auto____7334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7671 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7336 = this$;

if(cljs.core.truth_(and__3546__auto____7336))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7336;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7672 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7342 = this$;

if(cljs.core.truth_(and__3546__auto____7342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7344 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
} else
{var or__3548__auto____7346 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7673 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7348 = this$;

if(cljs.core.truth_(and__3546__auto____7348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7350 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{var or__3548__auto____7352 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7352))
{return or__3548__auto____7352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7674 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7676 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7444 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{var or__3548__auto____7445 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7677 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7448 = this$;

if(cljs.core.truth_(and__3546__auto____7448))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7448;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7462 = this$;

if(cljs.core.truth_(and__3546__auto____7462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7464 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7543 = this$;

if(cljs.core.truth_(and__3546__auto____7543))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7543;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7547 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7547))
{return or__3548__auto____7547;
} else
{var or__3548__auto____7548 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7548))
{return or__3548__auto____7548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7681 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7551 = this$;

if(cljs.core.truth_(and__3546__auto____7551))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7551;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7554 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7554))
{return or__3548__auto____7554;
} else
{var or__3548__auto____7556 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7682 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7561 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7561))
{return or__3548__auto____7561;
} else
{var or__3548__auto____7562 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7683 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7575 = this$;

if(cljs.core.truth_(and__3546__auto____7575))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7575;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7587 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{var or__3548__auto____7588 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7588))
{return or__3548__auto____7588;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7684 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7589 = this$;

if(cljs.core.truth_(and__3546__auto____7589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7591 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{var or__3548__auto____7594 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7594))
{return or__3548__auto____7594;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7685 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7595 = this$;

if(cljs.core.truth_(and__3546__auto____7595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7616 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7686 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7623 = this$;

if(cljs.core.truth_(and__3546__auto____7623))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7623;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7625 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7625))
{return or__3548__auto____7625;
} else
{var or__3548__auto____7627 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7627))
{return or__3548__auto____7627;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7687 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7629 = this$;

if(cljs.core.truth_(and__3546__auto____7629))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7629;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7632 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{var or__3548__auto____7634 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7634))
{return or__3548__auto____7634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7688 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7636 = this$;

if(cljs.core.truth_(and__3546__auto____7636))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7636;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7664 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7664))
{return or__3548__auto____7664;
} else
{var or__3548__auto____7665 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7665))
{return or__3548__auto____7665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7689 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7666 = this$;

if(cljs.core.truth_(and__3546__auto____7666))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7666;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7667 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
} else
{var or__3548__auto____7668 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
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
return _invoke__7669.call(this,this$);
case  2 :
return _invoke__7670.call(this,this$,a);
case  3 :
return _invoke__7671.call(this,this$,a,b);
case  4 :
return _invoke__7672.call(this,this$,a,b,c);
case  5 :
return _invoke__7673.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7674.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7675.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7676.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7677.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7678.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7679.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7680.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7681.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7682.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7683.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7684.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7685.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7686.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7687.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7688.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7689.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7776 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7776))
{return or__3548__auto____7776;
} else
{var or__3548__auto____7780 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7785 = coll;

if(cljs.core.truth_(and__3546__auto____7785))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7785;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7788 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{var or__3548__auto____7792 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
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
var _nth__7838 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7828 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7839 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7833 = coll;

if(cljs.core.truth_(and__3546__auto____7833))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7833;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7834 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7834))
{return or__3548__auto____7834;
} else
{var or__3548__auto____7836 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
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
return _nth__7838.call(this,coll,n);
case  3 :
return _nth__7839.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7848 = coll;

if(cljs.core.truth_(and__3546__auto____7848))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7848;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7851 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{var or__3548__auto____7854 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7860 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
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
var _lookup__7889 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7870 = o;

if(cljs.core.truth_(and__3546__auto____7870))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7870;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7875 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
} else
{var or__3548__auto____7877 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7890 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = o;

if(cljs.core.truth_(and__3546__auto____7883))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7883;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7886 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{var or__3548__auto____7888 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
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
return _lookup__7889.call(this,o,k);
case  3 :
return _lookup__7890.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7895 = coll;

if(cljs.core.truth_(and__3546__auto____7895))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7895;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7897 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
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
{return (function (){var or__3548__auto____7903 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{var or__3548__auto____7904 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7977 = coll;

if(cljs.core.truth_(and__3546__auto____7977))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7977;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7981 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{var or__3548__auto____7983 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = coll;

if(cljs.core.truth_(and__3546__auto____7988))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7988;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7990 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{var or__3548__auto____7992 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7998 = coll;

if(cljs.core.truth_(and__3546__auto____7998))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7998;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7999 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{var or__3548__auto____8000 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8002 = coll;

if(cljs.core.truth_(and__3546__auto____8002))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8002;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8004 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8006 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = coll;

if(cljs.core.truth_(and__3546__auto____8015))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8015;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8019 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{var or__3548__auto____8021 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
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
{return (function (){var or__3548__auto____8030 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{var or__3548__auto____8032 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8087 = o;

if(cljs.core.truth_(and__3546__auto____8087))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8087;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8091 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8091))
{return or__3548__auto____8091;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8105 = o;

if(cljs.core.truth_(and__3546__auto____8105))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8105;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8109 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{var or__3548__auto____8111 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
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
var _reduce__8123 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8115 = coll;

if(cljs.core.truth_(and__3546__auto____8115))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8115;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8117 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{var or__3548__auto____8119 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8124 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8120 = coll;

if(cljs.core.truth_(and__3546__auto____8120))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8120;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8121 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{var or__3548__auto____8122 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
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
return _reduce__8123.call(this,coll,f);
case  3 :
return _reduce__8124.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8132 = o;

if(cljs.core.truth_(and__3546__auto____8132))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8132;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8134 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8136 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8153 = o;

if(cljs.core.truth_(and__3546__auto____8153))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8153;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8166 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8166))
{return or__3548__auto____8166;
} else
{var or__3548__auto____8167 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8168 = o;

if(cljs.core.truth_(and__3546__auto____8168))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8168;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8169 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{var or__3548__auto____8170 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8170))
{return or__3548__auto____8170;
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
if(cljs.core.truth_((function (){var and__3546__auto____8171 = o;

if(cljs.core.truth_(and__3546__auto____8171))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8171;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8172 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{var or__3548__auto____8173 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8173))
{return or__3548__auto____8173;
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
if(cljs.core.truth_((function (){var and__3546__auto____8177 = this$;

if(cljs.core.truth_(and__3546__auto____8177))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8177;
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
if(cljs.core.truth_((function (){var and__3546__auto____8183 = this$;

if(cljs.core.truth_(and__3546__auto____8183))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8183;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8184 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8184))
{return or__3548__auto____8184;
} else
{var or__3548__auto____8185 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8185))
{return or__3548__auto____8185;
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
var G__8194 = null;
var G__8194__8195 = (function (o,k){
return null;
});
var G__8194__8196 = (function (o,k,not_found){
return not_found;
});
G__8194 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8194__8195.call(this,o,k);
case  3 :
return G__8194__8196.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8194;
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
var G__8210 = null;
var G__8210__8211 = (function (_,f){
return f.call(null);
});
var G__8210__8212 = (function (_,f,start){
return start;
});
G__8210 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8210__8211.call(this,_,f);
case  3 :
return G__8210__8212.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8210;
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
var G__8226 = null;
var G__8226__8227 = (function (_,n){
return null;
});
var G__8226__8228 = (function (_,n,not_found){
return not_found;
});
G__8226 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8226__8227.call(this,_,n);
case  3 :
return G__8226__8228.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8226;
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
var ci_reduce__8289 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8274 = cljs.core._nth.call(null,cicoll,0);
var n__8275 = 1;

while(true){
if(cljs.core.truth_((n__8275 < cljs.core._count.call(null,cicoll))))
{{
var G__8297 = f.call(null,val__8274,cljs.core._nth.call(null,cicoll,n__8275));
var G__8298 = (n__8275 + 1);
val__8274 = G__8297;
n__8275 = G__8298;
continue;
}
} else
{return val__8274;
}
break;
}
}
});
var ci_reduce__8290 = (function (cicoll,f,val){
var val__8278 = val;
var n__8279 = 0;

while(true){
if(cljs.core.truth_((n__8279 < cljs.core._count.call(null,cicoll))))
{{
var G__8302 = f.call(null,val__8278,cljs.core._nth.call(null,cicoll,n__8279));
var G__8303 = (n__8279 + 1);
val__8278 = G__8302;
n__8279 = G__8303;
continue;
}
} else
{return val__8278;
}
break;
}
});
var ci_reduce__8291 = (function (cicoll,f,val,idx){
var val__8282 = val;
var n__8283 = idx;

while(true){
if(cljs.core.truth_((n__8283 < cljs.core._count.call(null,cicoll))))
{{
var G__8308 = f.call(null,val__8282,cljs.core._nth.call(null,cicoll,n__8283));
var G__8309 = (n__8283 + 1);
val__8282 = G__8308;
n__8283 = G__8309;
continue;
}
} else
{return val__8282;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8289.call(this,cicoll,f);
case  3 :
return ci_reduce__8290.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8291.call(this,cicoll,f,val,idx);
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
var this__8324 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8371 = null;
var G__8371__8372 = (function (_,f){
var this__8326 = this;
return cljs.core.ci_reduce.call(null,this__8326.a,f,(this__8326.a[this__8326.i]),(this__8326.i + 1));
});
var G__8371__8373 = (function (_,f,start){
var this__8328 = this;
return cljs.core.ci_reduce.call(null,this__8328.a,f,start,this__8328.i);
});
G__8371 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8371__8372.call(this,_,f);
case  3 :
return G__8371__8373.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8371;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8334 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8336 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8381 = null;
var G__8381__8382 = (function (coll,n){
var this__8338 = this;
var i__8340 = (n + this__8338.i);

if(cljs.core.truth_((i__8340 < this__8338.a.length)))
{return (this__8338.a[i__8340]);
} else
{return null;
}
});
var G__8381__8383 = (function (coll,n,not_found){
var this__8343 = this;
var i__8350 = (n + this__8343.i);

if(cljs.core.truth_((i__8350 < this__8343.a.length)))
{return (this__8343.a[i__8350]);
} else
{return not_found;
}
});
G__8381 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8381__8382.call(this,coll,n);
case  3 :
return G__8381__8383.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8381;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8353 = this;
return (this__8353.a.length - this__8353.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8357 = this;
return (this__8357.a[this__8357.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8359 = this;
if(cljs.core.truth_(((this__8359.i + 1) < this__8359.a.length)))
{return (new cljs.core.IndexedSeq(this__8359.a,(this__8359.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8364 = this;
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
var G__8402 = null;
var G__8402__8403 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8402__8404 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8402 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8402__8403.call(this,array,f);
case  3 :
return G__8402__8404.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8402;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8410 = null;
var G__8410__8411 = (function (array,k){
return (array[k]);
});
var G__8410__8412 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8410 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8410__8411.call(this,array,k);
case  3 :
return G__8410__8412.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8410;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8416 = null;
var G__8416__8417 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8416__8418 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8416 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8416__8417.call(this,array,n);
case  3 :
return G__8416__8418.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8416;
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
var temp__3698__auto____8424 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8424))
{var s__8425 = temp__3698__auto____8424;

return cljs.core._first.call(null,s__8425);
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
var G__8504 = cljs.core.next.call(null,s);
s = G__8504;
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
var s__8508 = cljs.core.seq.call(null,x);
var n__8509 = 0;

while(true){
if(cljs.core.truth_(s__8508))
{{
var G__8513 = cljs.core.next.call(null,s__8508);
var G__8514 = (n__8509 + 1);
s__8508 = G__8513;
n__8509 = G__8514;
continue;
}
} else
{return n__8509;
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
var conj__8535 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8537 = (function() { 
var G__8539__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8540 = conj.call(null,coll,x);
var G__8541 = cljs.core.first.call(null,xs);
var G__8542 = cljs.core.next.call(null,xs);
coll = G__8540;
x = G__8541;
xs = G__8542;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8539 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8539__delegate.call(this, coll, x, xs);
};
G__8539.cljs$lang$maxFixedArity = 2;
G__8539.cljs$lang$applyTo = (function (arglist__8543){
var coll = cljs.core.first(arglist__8543);
var x = cljs.core.first(cljs.core.next(arglist__8543));
var xs = cljs.core.rest(cljs.core.next(arglist__8543));
return G__8539__delegate.call(this, coll, x, xs);
});
return G__8539;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8535.call(this,coll,x);
default:
return conj__8537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8537.cljs$lang$applyTo;
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
var nth__8561 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8562 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8561.call(this,coll,n);
case  3 :
return nth__8562.call(this,coll,n,not_found);
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
var get__8571 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8572 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8571.call(this,o,k);
case  3 :
return get__8572.call(this,o,k,not_found);
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
var assoc__8579 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8580 = (function() { 
var G__8584__delegate = function (coll,k,v,kvs){
while(true){
var ret__8576 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8585 = ret__8576;
var G__8586 = cljs.core.first.call(null,kvs);
var G__8587 = cljs.core.second.call(null,kvs);
var G__8588 = cljs.core.nnext.call(null,kvs);
coll = G__8585;
k = G__8586;
v = G__8587;
kvs = G__8588;
continue;
}
} else
{return ret__8576;
}
break;
}
};
var G__8584 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8584__delegate.call(this, coll, k, v, kvs);
};
G__8584.cljs$lang$maxFixedArity = 3;
G__8584.cljs$lang$applyTo = (function (arglist__8589){
var coll = cljs.core.first(arglist__8589);
var k = cljs.core.first(cljs.core.next(arglist__8589));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8589)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8589)));
return G__8584__delegate.call(this, coll, k, v, kvs);
});
return G__8584;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8579.call(this,coll,k,v);
default:
return assoc__8580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8580.cljs$lang$applyTo;
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
var dissoc__8591 = (function (coll){
return coll;
});
var dissoc__8592 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8593 = (function() { 
var G__8595__delegate = function (coll,k,ks){
while(true){
var ret__8590 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8596 = ret__8590;
var G__8597 = cljs.core.first.call(null,ks);
var G__8598 = cljs.core.next.call(null,ks);
coll = G__8596;
k = G__8597;
ks = G__8598;
continue;
}
} else
{return ret__8590;
}
break;
}
};
var G__8595 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8595__delegate.call(this, coll, k, ks);
};
G__8595.cljs$lang$maxFixedArity = 2;
G__8595.cljs$lang$applyTo = (function (arglist__8599){
var coll = cljs.core.first(arglist__8599);
var k = cljs.core.first(cljs.core.next(arglist__8599));
var ks = cljs.core.rest(cljs.core.next(arglist__8599));
return G__8595__delegate.call(this, coll, k, ks);
});
return G__8595;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8591.call(this,coll);
case  2 :
return dissoc__8592.call(this,coll,k);
default:
return dissoc__8593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8593.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8600 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8601 = x__445__auto____8600;

if(cljs.core.truth_(and__3546__auto____8601))
{var and__3546__auto____8602 = x__445__auto____8600.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8602))
{return cljs.core.not.call(null,x__445__auto____8600.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8602;
}
} else
{return and__3546__auto____8601;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8600);
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
var disj__8612 = (function (coll){
return coll;
});
var disj__8613 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8614 = (function() { 
var G__8616__delegate = function (coll,k,ks){
while(true){
var ret__8609 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8617 = ret__8609;
var G__8618 = cljs.core.first.call(null,ks);
var G__8619 = cljs.core.next.call(null,ks);
coll = G__8617;
k = G__8618;
ks = G__8619;
continue;
}
} else
{return ret__8609;
}
break;
}
};
var G__8616 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8616__delegate.call(this, coll, k, ks);
};
G__8616.cljs$lang$maxFixedArity = 2;
G__8616.cljs$lang$applyTo = (function (arglist__8620){
var coll = cljs.core.first(arglist__8620);
var k = cljs.core.first(cljs.core.next(arglist__8620));
var ks = cljs.core.rest(cljs.core.next(arglist__8620));
return G__8616__delegate.call(this, coll, k, ks);
});
return G__8616;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8612.call(this,coll);
case  2 :
return disj__8613.call(this,coll,k);
default:
return disj__8614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8614.cljs$lang$applyTo;
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
{var x__445__auto____8629 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8630 = x__445__auto____8629;

if(cljs.core.truth_(and__3546__auto____8630))
{var and__3546__auto____8631 = x__445__auto____8629.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8631))
{return cljs.core.not.call(null,x__445__auto____8629.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8631;
}
} else
{return and__3546__auto____8630;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8629);
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
{var x__445__auto____8632 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8633 = x__445__auto____8632;

if(cljs.core.truth_(and__3546__auto____8633))
{var and__3546__auto____8634 = x__445__auto____8632.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8634))
{return cljs.core.not.call(null,x__445__auto____8632.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8634;
}
} else
{return and__3546__auto____8633;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8632);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8683 = x__445__auto____8682;

if(cljs.core.truth_(and__3546__auto____8683))
{var and__3546__auto____8684 = x__445__auto____8682.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8684))
{return cljs.core.not.call(null,x__445__auto____8682.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8684;
}
} else
{return and__3546__auto____8683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8682);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__445__auto____8685;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8687 = x__445__auto____8685.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8687))
{return cljs.core.not.call(null,x__445__auto____8685.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8687;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8685);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8697 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8698 = x__445__auto____8697;

if(cljs.core.truth_(and__3546__auto____8698))
{var and__3546__auto____8700 = x__445__auto____8697.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8700))
{return cljs.core.not.call(null,x__445__auto____8697.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8700;
}
} else
{return and__3546__auto____8698;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8697);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8701 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8703 = x__445__auto____8701;

if(cljs.core.truth_(and__3546__auto____8703))
{var and__3546__auto____8708 = x__445__auto____8701.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8708))
{return cljs.core.not.call(null,x__445__auto____8701.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8708;
}
} else
{return and__3546__auto____8703;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8701);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8711 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8713 = x__445__auto____8711;

if(cljs.core.truth_(and__3546__auto____8713))
{var and__3546__auto____8714 = x__445__auto____8711.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8714))
{return cljs.core.not.call(null,x__445__auto____8711.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8714;
}
} else
{return and__3546__auto____8713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8711);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8736 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8736.push(key);
}));
return keys__8736;
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
{var x__445__auto____8848 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8849 = x__445__auto____8848;

if(cljs.core.truth_(and__3546__auto____8849))
{var and__3546__auto____8851 = x__445__auto____8848.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8851))
{return cljs.core.not.call(null,x__445__auto____8848.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8851;
}
} else
{return and__3546__auto____8849;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8848);
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
var and__3546__auto____8863 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8863))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8864 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8864))
{return or__3548__auto____8864;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8863;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8865 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8865))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8865;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8867 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8867;
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
var and__3546__auto____8874 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8874))
{return (n == n.toFixed());
} else
{return and__3546__auto____8874;
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
if(cljs.core.truth_((function (){var and__3546__auto____8884 = coll;

if(cljs.core.truth_(and__3546__auto____8884))
{var and__3546__auto____8886 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8886))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8886;
}
} else
{return and__3546__auto____8884;
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
var distinct_QMARK___8945 = (function (x){
return true;
});
var distinct_QMARK___8946 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8947 = (function() { 
var G__8953__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8894 = cljs.core.set([y,x]);
var xs__8895 = more;

while(true){
var x__8897 = cljs.core.first.call(null,xs__8895);
var etc__8898 = cljs.core.next.call(null,xs__8895);

if(cljs.core.truth_(xs__8895))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8894,x__8897)))
{return false;
} else
{{
var G__8957 = cljs.core.conj.call(null,s__8894,x__8897);
var G__8958 = etc__8898;
s__8894 = G__8957;
xs__8895 = G__8958;
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
var G__8953 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8953__delegate.call(this, x, y, more);
};
G__8953.cljs$lang$maxFixedArity = 2;
G__8953.cljs$lang$applyTo = (function (arglist__8962){
var x = cljs.core.first(arglist__8962);
var y = cljs.core.first(cljs.core.next(arglist__8962));
var more = cljs.core.rest(cljs.core.next(arglist__8962));
return G__8953__delegate.call(this, x, y, more);
});
return G__8953;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8945.call(this,x);
case  2 :
return distinct_QMARK___8946.call(this,x,y);
default:
return distinct_QMARK___8947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8947.cljs$lang$applyTo;
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
var r__8971 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8971)))
{return r__8971;
} else
{if(cljs.core.truth_(r__8971))
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
var sort__8987 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8988 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8981 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8981,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8981);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8987.call(this,comp);
case  2 :
return sort__8988.call(this,comp,coll);
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
var sort_by__8997 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8998 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8997.call(this,keyfn,comp);
case  3 :
return sort_by__8998.call(this,keyfn,comp,coll);
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
var reduce__9000 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9001 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9000.call(this,f,val);
case  3 :
return reduce__9001.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9017 = (function (f,coll){
var temp__3695__auto____9009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9009))
{var s__9011 = temp__3695__auto____9009;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9011),cljs.core.next.call(null,s__9011));
} else
{return f.call(null);
}
});
var seq_reduce__9018 = (function (f,val,coll){
var val__9013 = val;
var coll__9014 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9014))
{{
var G__9048 = f.call(null,val__9013,cljs.core.first.call(null,coll__9014));
var G__9049 = cljs.core.next.call(null,coll__9014);
val__9013 = G__9048;
coll__9014 = G__9049;
continue;
}
} else
{return val__9013;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9017.call(this,f,val);
case  3 :
return seq_reduce__9018.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9062 = null;
var G__9062__9063 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9062__9064 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9062 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9062__9063.call(this,coll,f);
case  3 :
return G__9062__9064.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9062;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9088 = (function (){
return 0;
});
var _PLUS___9089 = (function (x){
return x;
});
var _PLUS___9090 = (function (x,y){
return (x + y);
});
var _PLUS___9091 = (function() { 
var G__9093__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9093 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9093__delegate.call(this, x, y, more);
};
G__9093.cljs$lang$maxFixedArity = 2;
G__9093.cljs$lang$applyTo = (function (arglist__9094){
var x = cljs.core.first(arglist__9094);
var y = cljs.core.first(cljs.core.next(arglist__9094));
var more = cljs.core.rest(cljs.core.next(arglist__9094));
return G__9093__delegate.call(this, x, y, more);
});
return G__9093;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9088.call(this);
case  1 :
return _PLUS___9089.call(this,x);
case  2 :
return _PLUS___9090.call(this,x,y);
default:
return _PLUS___9091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9091.cljs$lang$applyTo;
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
var ___9106 = (function (x){
return (- x);
});
var ___9107 = (function (x,y){
return (x - y);
});
var ___9108 = (function() { 
var G__9111__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9111 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9111__delegate.call(this, x, y, more);
};
G__9111.cljs$lang$maxFixedArity = 2;
G__9111.cljs$lang$applyTo = (function (arglist__9119){
var x = cljs.core.first(arglist__9119);
var y = cljs.core.first(cljs.core.next(arglist__9119));
var more = cljs.core.rest(cljs.core.next(arglist__9119));
return G__9111__delegate.call(this, x, y, more);
});
return G__9111;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9106.call(this,x);
case  2 :
return ___9107.call(this,x,y);
default:
return ___9108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9108.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9129 = (function (){
return 1;
});
var _STAR___9130 = (function (x){
return x;
});
var _STAR___9131 = (function (x,y){
return (x * y);
});
var _STAR___9132 = (function() { 
var G__9134__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9134 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9134__delegate.call(this, x, y, more);
};
G__9134.cljs$lang$maxFixedArity = 2;
G__9134.cljs$lang$applyTo = (function (arglist__9139){
var x = cljs.core.first(arglist__9139);
var y = cljs.core.first(cljs.core.next(arglist__9139));
var more = cljs.core.rest(cljs.core.next(arglist__9139));
return G__9134__delegate.call(this, x, y, more);
});
return G__9134;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9129.call(this);
case  1 :
return _STAR___9130.call(this,x);
case  2 :
return _STAR___9131.call(this,x,y);
default:
return _STAR___9132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9132.cljs$lang$applyTo;
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
var _SLASH___9145 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9146 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9147 = (function() { 
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
return _SLASH___9145.call(this,x);
case  2 :
return _SLASH___9146.call(this,x,y);
default:
return _SLASH___9147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9147.cljs$lang$applyTo;
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
var _LT___9222 = (function (x){
return true;
});
var _LT___9223 = (function (x,y){
return (x < y);
});
var _LT___9224 = (function() { 
var G__9234__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9236 = y;
var G__9237 = cljs.core.first.call(null,more);
var G__9238 = cljs.core.next.call(null,more);
x = G__9236;
y = G__9237;
more = G__9238;
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
var G__9234 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9234__delegate.call(this, x, y, more);
};
G__9234.cljs$lang$maxFixedArity = 2;
G__9234.cljs$lang$applyTo = (function (arglist__9241){
var x = cljs.core.first(arglist__9241);
var y = cljs.core.first(cljs.core.next(arglist__9241));
var more = cljs.core.rest(cljs.core.next(arglist__9241));
return G__9234__delegate.call(this, x, y, more);
});
return G__9234;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9222.call(this,x);
case  2 :
return _LT___9223.call(this,x,y);
default:
return _LT___9224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9224.cljs$lang$applyTo;
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
var _LT__EQ___9253 = (function (x){
return true;
});
var _LT__EQ___9256 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9257 = (function() { 
var G__9260__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9261 = y;
var G__9262 = cljs.core.first.call(null,more);
var G__9263 = cljs.core.next.call(null,more);
x = G__9261;
y = G__9262;
more = G__9263;
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
var G__9260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9260__delegate.call(this, x, y, more);
};
G__9260.cljs$lang$maxFixedArity = 2;
G__9260.cljs$lang$applyTo = (function (arglist__9265){
var x = cljs.core.first(arglist__9265);
var y = cljs.core.first(cljs.core.next(arglist__9265));
var more = cljs.core.rest(cljs.core.next(arglist__9265));
return G__9260__delegate.call(this, x, y, more);
});
return G__9260;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9253.call(this,x);
case  2 :
return _LT__EQ___9256.call(this,x,y);
default:
return _LT__EQ___9257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9257.cljs$lang$applyTo;
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
var _GT___9279 = (function (x,y){
return (x > y);
});
var _GT___9280 = (function() { 
var G__9284__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9285 = y;
var G__9286 = cljs.core.first.call(null,more);
var G__9287 = cljs.core.next.call(null,more);
x = G__9285;
y = G__9286;
more = G__9287;
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
var G__9284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9284__delegate.call(this, x, y, more);
};
G__9284.cljs$lang$maxFixedArity = 2;
G__9284.cljs$lang$applyTo = (function (arglist__9288){
var x = cljs.core.first(arglist__9288);
var y = cljs.core.first(cljs.core.next(arglist__9288));
var more = cljs.core.rest(cljs.core.next(arglist__9288));
return G__9284__delegate.call(this, x, y, more);
});
return G__9284;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9278.call(this,x);
case  2 :
return _GT___9279.call(this,x,y);
default:
return _GT___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9280.cljs$lang$applyTo;
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
var _GT__EQ___9297 = (function (x){
return true;
});
var _GT__EQ___9298 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9299 = (function() { 
var G__9306__delegate = function (x,y,more){
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
var G__9306 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9306__delegate.call(this, x, y, more);
};
G__9306.cljs$lang$maxFixedArity = 2;
G__9306.cljs$lang$applyTo = (function (arglist__9312){
var x = cljs.core.first(arglist__9312);
var y = cljs.core.first(cljs.core.next(arglist__9312));
var more = cljs.core.rest(cljs.core.next(arglist__9312));
return G__9306__delegate.call(this, x, y, more);
});
return G__9306;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9297.call(this,x);
case  2 :
return _GT__EQ___9298.call(this,x,y);
default:
return _GT__EQ___9299.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9299.cljs$lang$applyTo;
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
var max__9329 = (function (x){
return x;
});
var max__9330 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9331 = (function() { 
var G__9333__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9333 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9333__delegate.call(this, x, y, more);
};
G__9333.cljs$lang$maxFixedArity = 2;
G__9333.cljs$lang$applyTo = (function (arglist__9334){
var x = cljs.core.first(arglist__9334);
var y = cljs.core.first(cljs.core.next(arglist__9334));
var more = cljs.core.rest(cljs.core.next(arglist__9334));
return G__9333__delegate.call(this, x, y, more);
});
return G__9333;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9329.call(this,x);
case  2 :
return max__9330.call(this,x,y);
default:
return max__9331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9331.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9349 = (function (x){
return x;
});
var min__9350 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9351 = (function() { 
var G__9354__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9354 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9354__delegate.call(this, x, y, more);
};
G__9354.cljs$lang$maxFixedArity = 2;
G__9354.cljs$lang$applyTo = (function (arglist__9355){
var x = cljs.core.first(arglist__9355);
var y = cljs.core.first(cljs.core.next(arglist__9355));
var more = cljs.core.rest(cljs.core.next(arglist__9355));
return G__9354__delegate.call(this, x, y, more);
});
return G__9354;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9349.call(this,x);
case  2 :
return min__9350.call(this,x,y);
default:
return min__9351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9351.cljs$lang$applyTo;
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
var rem__9432 = (n % d);

return cljs.core.fix.call(null,((n - rem__9432) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9438 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9438));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9441 = (function (){
return Math.random.call(null);
});
var rand__9443 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9441.call(this);
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
var G__9542__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9545 = y;
var G__9546 = cljs.core.first.call(null,more);
var G__9547 = cljs.core.next.call(null,more);
x = G__9545;
y = G__9546;
more = G__9547;
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
var G__9542 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9542__delegate.call(this, x, y, more);
};
G__9542.cljs$lang$maxFixedArity = 2;
G__9542.cljs$lang$applyTo = (function (arglist__9551){
var x = cljs.core.first(arglist__9551);
var y = cljs.core.first(cljs.core.next(arglist__9551));
var more = cljs.core.rest(cljs.core.next(arglist__9551));
return G__9542__delegate.call(this, x, y, more);
});
return G__9542;
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
var n__9564 = n;
var xs__9565 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9567 = xs__9565;

if(cljs.core.truth_(and__3546__auto____9567))
{return (n__9564 > 0);
} else
{return and__3546__auto____9567;
}
})()))
{{
var G__9570 = (n__9564 - 1);
var G__9571 = cljs.core.next.call(null,xs__9565);
n__9564 = G__9570;
xs__9565 = G__9571;
continue;
}
} else
{return xs__9565;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9583 = null;
var G__9583__9584 = (function (coll,n){
var temp__3695__auto____9573 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9573))
{var xs__9574 = temp__3695__auto____9573;

return cljs.core.first.call(null,xs__9574);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9583__9585 = (function (coll,n,not_found){
var temp__3695__auto____9579 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9579))
{var xs__9580 = temp__3695__auto____9579;

return cljs.core.first.call(null,xs__9580);
} else
{return not_found;
}
});
G__9583 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9583__9584.call(this,coll,n);
case  3 :
return G__9583__9585.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9583;
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
var str_STAR___9600 = (function (x){
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
var str_STAR___9601 = (function() { 
var G__9605__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9609 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9610 = cljs.core.next.call(null,more);
sb = G__9609;
more = G__9610;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9605 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9605__delegate.call(this, x, ys);
};
G__9605.cljs$lang$maxFixedArity = 1;
G__9605.cljs$lang$applyTo = (function (arglist__9611){
var x = cljs.core.first(arglist__9611);
var ys = cljs.core.rest(arglist__9611);
return G__9605__delegate.call(this, x, ys);
});
return G__9605;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9599.call(this);
case  1 :
return str_STAR___9600.call(this,x);
default:
return str_STAR___9601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9601.cljs$lang$applyTo;
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
var str__9692 = (function (){
return "";
});
var str__9693 = (function (x){
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
var str__9694 = (function() { 
var G__9698__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9698 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9698__delegate.call(this, x, ys);
};
G__9698.cljs$lang$maxFixedArity = 1;
G__9698.cljs$lang$applyTo = (function (arglist__9699){
var x = cljs.core.first(arglist__9699);
var ys = cljs.core.rest(arglist__9699);
return G__9698__delegate.call(this, x, ys);
});
return G__9698;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9692.call(this);
case  1 :
return str__9693.call(this,x);
default:
return str__9694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9694.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9709 = (function (s,start){
return s.substring(start);
});
var subs__9710 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9709.call(this,s,start);
case  3 :
return subs__9710.call(this,s,start,end);
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
var symbol__9714 = (function (name){
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
var symbol__9715 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9714.call(this,ns);
case  2 :
return symbol__9715.call(this,ns,name);
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
var keyword__9729 = (function (name){
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
var keyword__9730 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9729.call(this,ns);
case  2 :
return keyword__9730.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9732 = cljs.core.seq.call(null,x);
var ys__9733 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9732)))
{return cljs.core.nil_QMARK_.call(null,ys__9733);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9733)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9732),cljs.core.first.call(null,ys__9733))))
{{
var G__9742 = cljs.core.next.call(null,xs__9732);
var G__9743 = cljs.core.next.call(null,ys__9733);
xs__9732 = G__9742;
ys__9733 = G__9743;
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
return cljs.core.reduce.call(null,(function (p1__9745_SHARP_,p2__9746_SHARP_){
return cljs.core.hash_combine.call(null,p1__9745_SHARP_,cljs.core.hash.call(null,p2__9746_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9756__9757 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9756__9757))
{var G__9761__9763 = cljs.core.first.call(null,G__9756__9757);
var vec__9762__9764 = G__9761__9763;
var key_name__9765 = cljs.core.nth.call(null,vec__9762__9764,0,null);
var f__9767 = cljs.core.nth.call(null,vec__9762__9764,1,null);
var G__9756__9769 = G__9756__9757;

var G__9761__9770 = G__9761__9763;
var G__9756__9771 = G__9756__9769;

while(true){
var vec__9772__9773 = G__9761__9770;
var key_name__9774 = cljs.core.nth.call(null,vec__9772__9773,0,null);
var f__9775 = cljs.core.nth.call(null,vec__9772__9773,1,null);
var G__9756__9776 = G__9756__9771;

var str_name__9777 = cljs.core.name.call(null,key_name__9774);

obj[str_name__9777] = f__9775;
var temp__3698__auto____9778 = cljs.core.next.call(null,G__9756__9776);

if(cljs.core.truth_(temp__3698__auto____9778))
{var G__9756__9781 = temp__3698__auto____9778;

{
var G__9838 = cljs.core.first.call(null,G__9756__9781);
var G__9839 = G__9756__9781;
G__9761__9770 = G__9838;
G__9756__9771 = G__9839;
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
var this__9865 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9867 = this;
return (new cljs.core.List(this__9867.meta,o,coll,(this__9867.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9869 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9870 = this;
return this__9870.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9872 = this;
return this__9872.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9874 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9875 = this;
return this__9875.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9877 = this;
return this__9877.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9878 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9880 = this;
return (new cljs.core.List(meta,this__9880.first,this__9880.rest,this__9880.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9882 = this;
return this__9882.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9885 = this;
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
var this__9914 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9915 = this;
return (new cljs.core.List(this__9915.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9916 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9917 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9918 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9919 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9920 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9922 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9924 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9927 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9930 = this;
return this__9930.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9933 = this;
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
list.cljs$lang$applyTo = (function (arglist__9950){
var items = cljs.core.seq( arglist__9950 );;
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
var this__9953 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9954 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9955 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9958 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9958.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9960 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9962 = this;
return this__9962.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9963 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9963.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9963.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9965 = this;
return this__9965.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9968 = this;
return (new cljs.core.Cons(meta,this__9968.first,this__9968.rest));
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
var G__9971 = null;
var G__9971__9972 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9971__9973 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9971 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9971__9972.call(this,string,f);
case  3 :
return G__9971__9973.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9971;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9976 = null;
var G__9976__9977 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9976__9978 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9976 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9976__9977.call(this,string,k);
case  3 :
return G__9976__9978.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9976;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9985 = null;
var G__9985__9986 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9985__9987 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9985 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9985__9986.call(this,string,n);
case  3 :
return G__9985__9987.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9985;
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
var x__10079 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10079;
} else
{lazy_seq.x = x__10079.call(null);
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
var this__10091 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10092 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10093 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10094 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10094.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10095 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10096 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10097 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10101 = this;
return this__10101.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10120 = this;
return (new cljs.core.LazySeq(meta,this__10120.realized,this__10120.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10138 = cljs.core.array.call(null);

var s__10139 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10139)))
{ary__10138.push(cljs.core.first.call(null,s__10139));
{
var G__10142 = cljs.core.next.call(null,s__10139);
s__10139 = G__10142;
continue;
}
} else
{return ary__10138;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10148 = s;
var i__10149 = n;
var sum__10150 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10151 = (i__10149 > 0);

if(cljs.core.truth_(and__3546__auto____10151))
{return cljs.core.seq.call(null,s__10148);
} else
{return and__3546__auto____10151;
}
})()))
{{
var G__10153 = cljs.core.next.call(null,s__10148);
var G__10154 = (i__10149 - 1);
var G__10155 = (sum__10150 + 1);
s__10148 = G__10153;
i__10149 = G__10154;
sum__10150 = G__10155;
continue;
}
} else
{return sum__10150;
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
var concat__10172 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10173 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10174 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10161 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10161))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10161),concat.call(null,cljs.core.rest.call(null,s__10161),y));
} else
{return y;
}
})));
});
var concat__10175 = (function() { 
var G__10183__delegate = function (x,y,zs){
var cat__10167 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10166 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10166))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10166),cat.call(null,cljs.core.rest.call(null,xys__10166),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10167.call(null,concat.call(null,x,y),zs);
};
var G__10183 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10183__delegate.call(this, x, y, zs);
};
G__10183.cljs$lang$maxFixedArity = 2;
G__10183.cljs$lang$applyTo = (function (arglist__10186){
var x = cljs.core.first(arglist__10186);
var y = cljs.core.first(cljs.core.next(arglist__10186));
var zs = cljs.core.rest(cljs.core.next(arglist__10186));
return G__10183__delegate.call(this, x, y, zs);
});
return G__10183;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10172.call(this);
case  1 :
return concat__10173.call(this,x);
case  2 :
return concat__10174.call(this,x,y);
default:
return concat__10175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10175.cljs$lang$applyTo;
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
var list_STAR___10196 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10197 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10198 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10199 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10200 = (function() { 
var G__10204__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10204 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10204__delegate.call(this, a, b, c, d, more);
};
G__10204.cljs$lang$maxFixedArity = 4;
G__10204.cljs$lang$applyTo = (function (arglist__10214){
var a = cljs.core.first(arglist__10214);
var b = cljs.core.first(cljs.core.next(arglist__10214));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10214)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10214))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10214))));
return G__10204__delegate.call(this, a, b, c, d, more);
});
return G__10204;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10196.call(this,a);
case  2 :
return list_STAR___10197.call(this,a,b);
case  3 :
return list_STAR___10198.call(this,a,b,c);
case  4 :
return list_STAR___10199.call(this,a,b,c,d);
default:
return list_STAR___10200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10200.cljs$lang$applyTo;
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
var apply__10246 = (function (f,args){
var fixed_arity__10219 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10219 + 1)) <= fixed_arity__10219)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10247 = (function (f,x,args){
var arglist__10220 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10221 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10220,fixed_arity__10221) <= fixed_arity__10221)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10220));
} else
{return f.cljs$lang$applyTo(arglist__10220);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10220));
}
});
var apply__10248 = (function (f,x,y,args){
var arglist__10222 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10223 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10222,fixed_arity__10223) <= fixed_arity__10223)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10222));
} else
{return f.cljs$lang$applyTo(arglist__10222);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10222));
}
});
var apply__10249 = (function (f,x,y,z,args){
var arglist__10225 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10226 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10225,fixed_arity__10226) <= fixed_arity__10226)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10225));
} else
{return f.cljs$lang$applyTo(arglist__10225);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10225));
}
});
var apply__10250 = (function() { 
var G__10256__delegate = function (f,a,b,c,d,args){
var arglist__10235 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10237 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10235,fixed_arity__10237) <= fixed_arity__10237)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10235));
} else
{return f.cljs$lang$applyTo(arglist__10235);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10235));
}
};
var G__10256 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10256__delegate.call(this, f, a, b, c, d, args);
};
G__10256.cljs$lang$maxFixedArity = 5;
G__10256.cljs$lang$applyTo = (function (arglist__10273){
var f = cljs.core.first(arglist__10273);
var a = cljs.core.first(cljs.core.next(arglist__10273));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10273)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10273))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10273)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10273)))));
return G__10256__delegate.call(this, f, a, b, c, d, args);
});
return G__10256;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10246.call(this,f,a);
case  3 :
return apply__10247.call(this,f,a,b);
case  4 :
return apply__10248.call(this,f,a,b,c);
case  5 :
return apply__10249.call(this,f,a,b,c,d);
default:
return apply__10250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10250.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10294){
var obj = cljs.core.first(arglist__10294);
var f = cljs.core.first(cljs.core.next(arglist__10294));
var args = cljs.core.rest(cljs.core.next(arglist__10294));
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
var not_EQ___10299 = (function (x){
return false;
});
var not_EQ___10300 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10302 = (function() { 
var G__10304__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10304 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10304__delegate.call(this, x, y, more);
};
G__10304.cljs$lang$maxFixedArity = 2;
G__10304.cljs$lang$applyTo = (function (arglist__10306){
var x = cljs.core.first(arglist__10306);
var y = cljs.core.first(cljs.core.next(arglist__10306));
var more = cljs.core.rest(cljs.core.next(arglist__10306));
return G__10304__delegate.call(this, x, y, more);
});
return G__10304;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10299.call(this,x);
case  2 :
return not_EQ___10300.call(this,x,y);
default:
return not_EQ___10302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10302.cljs$lang$applyTo;
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
var G__10323 = pred;
var G__10324 = cljs.core.next.call(null,coll);
pred = G__10323;
coll = G__10324;
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
{var or__3548__auto____10333 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10333))
{return or__3548__auto____10333;
} else
{{
var G__10336 = pred;
var G__10337 = cljs.core.next.call(null,coll);
pred = G__10336;
coll = G__10337;
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
var G__10353 = null;
var G__10353__10354 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10353__10355 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10353__10356 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10353__10357 = (function() { 
var G__10360__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10360 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10360__delegate.call(this, x, y, zs);
};
G__10360.cljs$lang$maxFixedArity = 2;
G__10360.cljs$lang$applyTo = (function (arglist__10363){
var x = cljs.core.first(arglist__10363);
var y = cljs.core.first(cljs.core.next(arglist__10363));
var zs = cljs.core.rest(cljs.core.next(arglist__10363));
return G__10360__delegate.call(this, x, y, zs);
});
return G__10360;
})()
;
G__10353 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10353__10354.call(this);
case  1 :
return G__10353__10355.call(this,x);
case  2 :
return G__10353__10356.call(this,x,y);
default:
return G__10353__10357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10353.cljs$lang$maxFixedArity = 2;
G__10353.cljs$lang$applyTo = G__10353__10357.cljs$lang$applyTo;
return G__10353;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10366__delegate = function (args){
return x;
};
var G__10366 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10366__delegate.call(this, args);
};
G__10366.cljs$lang$maxFixedArity = 0;
G__10366.cljs$lang$applyTo = (function (arglist__10367){
var args = cljs.core.seq( arglist__10367 );;
return G__10366__delegate.call(this, args);
});
return G__10366;
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
var comp__10380 = (function (){
return cljs.core.identity;
});
var comp__10381 = (function (f){
return f;
});
var comp__10382 = (function (f,g){
return (function() {
var G__10386 = null;
var G__10386__10387 = (function (){
return f.call(null,g.call(null));
});
var G__10386__10408 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10386__10409 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10386__10410 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10386__10411 = (function() { 
var G__10413__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10413__delegate.call(this, x, y, z, args);
};
G__10413.cljs$lang$maxFixedArity = 3;
G__10413.cljs$lang$applyTo = (function (arglist__10414){
var x = cljs.core.first(arglist__10414);
var y = cljs.core.first(cljs.core.next(arglist__10414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10414)));
return G__10413__delegate.call(this, x, y, z, args);
});
return G__10413;
})()
;
G__10386 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10386__10387.call(this);
case  1 :
return G__10386__10408.call(this,x);
case  2 :
return G__10386__10409.call(this,x,y);
case  3 :
return G__10386__10410.call(this,x,y,z);
default:
return G__10386__10411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10386.cljs$lang$maxFixedArity = 3;
G__10386.cljs$lang$applyTo = G__10386__10411.cljs$lang$applyTo;
return G__10386;
})()
});
var comp__10383 = (function (f,g,h){
return (function() {
var G__10415 = null;
var G__10415__10416 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10415__10417 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10415__10418 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10415__10419 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10415__10420 = (function() { 
var G__10422__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10422__delegate.call(this, x, y, z, args);
};
G__10422.cljs$lang$maxFixedArity = 3;
G__10422.cljs$lang$applyTo = (function (arglist__10423){
var x = cljs.core.first(arglist__10423);
var y = cljs.core.first(cljs.core.next(arglist__10423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10423)));
return G__10422__delegate.call(this, x, y, z, args);
});
return G__10422;
})()
;
G__10415 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10415__10416.call(this);
case  1 :
return G__10415__10417.call(this,x);
case  2 :
return G__10415__10418.call(this,x,y);
case  3 :
return G__10415__10419.call(this,x,y,z);
default:
return G__10415__10420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10415.cljs$lang$maxFixedArity = 3;
G__10415.cljs$lang$applyTo = G__10415__10420.cljs$lang$applyTo;
return G__10415;
})()
});
var comp__10384 = (function() { 
var G__10430__delegate = function (f1,f2,f3,fs){
var fs__10370 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10431__delegate = function (args){
var ret__10371 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10370),args);
var fs__10372 = cljs.core.next.call(null,fs__10370);

while(true){
if(cljs.core.truth_(fs__10372))
{{
var G__10433 = cljs.core.first.call(null,fs__10372).call(null,ret__10371);
var G__10434 = cljs.core.next.call(null,fs__10372);
ret__10371 = G__10433;
fs__10372 = G__10434;
continue;
}
} else
{return ret__10371;
}
break;
}
};
var G__10431 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10431__delegate.call(this, args);
};
G__10431.cljs$lang$maxFixedArity = 0;
G__10431.cljs$lang$applyTo = (function (arglist__10437){
var args = cljs.core.seq( arglist__10437 );;
return G__10431__delegate.call(this, args);
});
return G__10431;
})()
;
};
var G__10430 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10430__delegate.call(this, f1, f2, f3, fs);
};
G__10430.cljs$lang$maxFixedArity = 3;
G__10430.cljs$lang$applyTo = (function (arglist__10438){
var f1 = cljs.core.first(arglist__10438);
var f2 = cljs.core.first(cljs.core.next(arglist__10438));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10438)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10438)));
return G__10430__delegate.call(this, f1, f2, f3, fs);
});
return G__10430;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10380.call(this);
case  1 :
return comp__10381.call(this,f1);
case  2 :
return comp__10382.call(this,f1,f2);
case  3 :
return comp__10383.call(this,f1,f2,f3);
default:
return comp__10384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10384.cljs$lang$applyTo;
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
var partial__10524 = (function (f,arg1){
return (function() { 
var G__10530__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10530 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10530__delegate.call(this, args);
};
G__10530.cljs$lang$maxFixedArity = 0;
G__10530.cljs$lang$applyTo = (function (arglist__10675){
var args = cljs.core.seq( arglist__10675 );;
return G__10530__delegate.call(this, args);
});
return G__10530;
})()
;
});
var partial__10526 = (function (f,arg1,arg2){
return (function() { 
var G__10676__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10676 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10676__delegate.call(this, args);
};
G__10676.cljs$lang$maxFixedArity = 0;
G__10676.cljs$lang$applyTo = (function (arglist__10706){
var args = cljs.core.seq( arglist__10706 );;
return G__10676__delegate.call(this, args);
});
return G__10676;
})()
;
});
var partial__10527 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10708__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10708 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10708__delegate.call(this, args);
};
G__10708.cljs$lang$maxFixedArity = 0;
G__10708.cljs$lang$applyTo = (function (arglist__10712){
var args = cljs.core.seq( arglist__10712 );;
return G__10708__delegate.call(this, args);
});
return G__10708;
})()
;
});
var partial__10528 = (function() { 
var G__10717__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10719__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10719 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10719__delegate.call(this, args);
};
G__10719.cljs$lang$maxFixedArity = 0;
G__10719.cljs$lang$applyTo = (function (arglist__10722){
var args = cljs.core.seq( arglist__10722 );;
return G__10719__delegate.call(this, args);
});
return G__10719;
})()
;
};
var G__10717 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10717__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10717.cljs$lang$maxFixedArity = 4;
G__10717.cljs$lang$applyTo = (function (arglist__10725){
var f = cljs.core.first(arglist__10725);
var arg1 = cljs.core.first(cljs.core.next(arglist__10725));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10725)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10725))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10725))));
return G__10717__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10717;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10524.call(this,f,arg1);
case  3 :
return partial__10526.call(this,f,arg1,arg2);
case  4 :
return partial__10527.call(this,f,arg1,arg2,arg3);
default:
return partial__10528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10528.cljs$lang$applyTo;
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
var fnil__10750 = (function (f,x){
return (function() {
var G__10757 = null;
var G__10757__10758 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10757__10759 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10757__10760 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10757__10761 = (function() { 
var G__10779__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10779 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10779__delegate.call(this, a, b, c, ds);
};
G__10779.cljs$lang$maxFixedArity = 3;
G__10779.cljs$lang$applyTo = (function (arglist__10789){
var a = cljs.core.first(arglist__10789);
var b = cljs.core.first(cljs.core.next(arglist__10789));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10789)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10789)));
return G__10779__delegate.call(this, a, b, c, ds);
});
return G__10779;
})()
;
G__10757 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10757__10758.call(this,a);
case  2 :
return G__10757__10759.call(this,a,b);
case  3 :
return G__10757__10760.call(this,a,b,c);
default:
return G__10757__10761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10757.cljs$lang$maxFixedArity = 3;
G__10757.cljs$lang$applyTo = G__10757__10761.cljs$lang$applyTo;
return G__10757;
})()
});
var fnil__10752 = (function (f,x,y){
return (function() {
var G__10797 = null;
var G__10797__10799 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10797__10800 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10797__10801 = (function() { 
var G__10807__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10807 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10807__delegate.call(this, a, b, c, ds);
};
G__10807.cljs$lang$maxFixedArity = 3;
G__10807.cljs$lang$applyTo = (function (arglist__10815){
var a = cljs.core.first(arglist__10815);
var b = cljs.core.first(cljs.core.next(arglist__10815));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10815)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10815)));
return G__10807__delegate.call(this, a, b, c, ds);
});
return G__10807;
})()
;
G__10797 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10797__10799.call(this,a,b);
case  3 :
return G__10797__10800.call(this,a,b,c);
default:
return G__10797__10801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10797.cljs$lang$maxFixedArity = 3;
G__10797.cljs$lang$applyTo = G__10797__10801.cljs$lang$applyTo;
return G__10797;
})()
});
var fnil__10753 = (function (f,x,y,z){
return (function() {
var G__10823 = null;
var G__10823__10825 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10823__10826 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10823__10827 = (function() { 
var G__10835__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10835 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10835__delegate.call(this, a, b, c, ds);
};
G__10835.cljs$lang$maxFixedArity = 3;
G__10835.cljs$lang$applyTo = (function (arglist__10839){
var a = cljs.core.first(arglist__10839);
var b = cljs.core.first(cljs.core.next(arglist__10839));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10839)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10839)));
return G__10835__delegate.call(this, a, b, c, ds);
});
return G__10835;
})()
;
G__10823 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10823__10825.call(this,a,b);
case  3 :
return G__10823__10826.call(this,a,b,c);
default:
return G__10823__10827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10823.cljs$lang$maxFixedArity = 3;
G__10823.cljs$lang$applyTo = G__10823__10827.cljs$lang$applyTo;
return G__10823;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10750.call(this,f,x);
case  3 :
return fnil__10752.call(this,f,x,y);
case  4 :
return fnil__10753.call(this,f,x,y,z);
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
var mapi__10859 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10852 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10852))
{var s__10853 = temp__3698__auto____10852;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10853)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10853)));
} else
{return null;
}
})));
});

return mapi__10859.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10874))
{var s__10880 = temp__3698__auto____10874;

var x__10888 = f.call(null,cljs.core.first.call(null,s__10880));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10888)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10880));
} else
{return cljs.core.cons.call(null,x__10888,keep.call(null,f,cljs.core.rest.call(null,s__10880)));
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
var keepi__10930 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10925))
{var s__10927 = temp__3698__auto____10925;

var x__10928 = f.call(null,idx,cljs.core.first.call(null,s__10927));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10928)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10927));
} else
{return cljs.core.cons.call(null,x__10928,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10927)));
}
} else
{return null;
}
})));
});

return keepi__10930.call(null,0,coll);
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
var every_pred__11174 = (function (p){
return (function() {
var ep1 = null;
var ep1__11182 = (function (){
return true;
});
var ep1__11184 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11186 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10978 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10978))
{return p.call(null,y);
} else
{return and__3546__auto____10978;
}
})());
});
var ep1__11187 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10980 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10980))
{var and__3546__auto____10982 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10982))
{return p.call(null,z);
} else
{return and__3546__auto____10982;
}
} else
{return and__3546__auto____10980;
}
})());
});
var ep1__11188 = (function() { 
var G__11199__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10987 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10987))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10987;
}
})());
};
var G__11199 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11199__delegate.call(this, x, y, z, args);
};
G__11199.cljs$lang$maxFixedArity = 3;
G__11199.cljs$lang$applyTo = (function (arglist__11202){
var x = cljs.core.first(arglist__11202);
var y = cljs.core.first(cljs.core.next(arglist__11202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11202)));
return G__11199__delegate.call(this, x, y, z, args);
});
return G__11199;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11182.call(this);
case  1 :
return ep1__11184.call(this,x);
case  2 :
return ep1__11186.call(this,x,y);
case  3 :
return ep1__11187.call(this,x,y,z);
default:
return ep1__11188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11188.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11176 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11207 = (function (){
return true;
});
var ep2__11208 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11001 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11001))
{return p2.call(null,x);
} else
{return and__3546__auto____11001;
}
})());
});
var ep2__11209 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11004 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11004))
{var and__3546__auto____11008 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11008))
{var and__3546__auto____11011 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11011))
{return p2.call(null,y);
} else
{return and__3546__auto____11011;
}
} else
{return and__3546__auto____11008;
}
} else
{return and__3546__auto____11004;
}
})());
});
var ep2__11211 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11013 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11013))
{var and__3546__auto____11015 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11015))
{var and__3546__auto____11016 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11016))
{var and__3546__auto____11022 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11022))
{var and__3546__auto____11023 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11023))
{return p2.call(null,z);
} else
{return and__3546__auto____11023;
}
} else
{return and__3546__auto____11022;
}
} else
{return and__3546__auto____11016;
}
} else
{return and__3546__auto____11015;
}
} else
{return and__3546__auto____11013;
}
})());
});
var ep2__11227 = (function() { 
var G__11393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11032 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11032))
{return cljs.core.every_QMARK_.call(null,(function (p1__10906_SHARP_){
var and__3546__auto____11034 = p1.call(null,p1__10906_SHARP_);

if(cljs.core.truth_(and__3546__auto____11034))
{return p2.call(null,p1__10906_SHARP_);
} else
{return and__3546__auto____11034;
}
}),args);
} else
{return and__3546__auto____11032;
}
})());
};
var G__11393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11393__delegate.call(this, x, y, z, args);
};
G__11393.cljs$lang$maxFixedArity = 3;
G__11393.cljs$lang$applyTo = (function (arglist__11397){
var x = cljs.core.first(arglist__11397);
var y = cljs.core.first(cljs.core.next(arglist__11397));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11397)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11397)));
return G__11393__delegate.call(this, x, y, z, args);
});
return G__11393;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11207.call(this);
case  1 :
return ep2__11208.call(this,x);
case  2 :
return ep2__11209.call(this,x,y);
case  3 :
return ep2__11211.call(this,x,y,z);
default:
return ep2__11227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11227.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11177 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11409 = (function (){
return true;
});
var ep3__11410 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11036 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11036))
{var and__3546__auto____11037 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11037))
{return p3.call(null,x);
} else
{return and__3546__auto____11037;
}
} else
{return and__3546__auto____11036;
}
})());
});
var ep3__11411 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11051 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11051))
{var and__3546__auto____11057 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11057))
{var and__3546__auto____11060 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11060))
{var and__3546__auto____11062 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11062))
{var and__3546__auto____11065 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11065))
{return p3.call(null,y);
} else
{return and__3546__auto____11065;
}
} else
{return and__3546__auto____11062;
}
} else
{return and__3546__auto____11060;
}
} else
{return and__3546__auto____11057;
}
} else
{return and__3546__auto____11051;
}
})());
});
var ep3__11412 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11068 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11068))
{var and__3546__auto____11070 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11070))
{var and__3546__auto____11071 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11071))
{var and__3546__auto____11072 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11072))
{var and__3546__auto____11073 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11073))
{var and__3546__auto____11075 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11075))
{var and__3546__auto____11077 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11077))
{var and__3546__auto____11078 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11078))
{return p3.call(null,z);
} else
{return and__3546__auto____11078;
}
} else
{return and__3546__auto____11077;
}
} else
{return and__3546__auto____11075;
}
} else
{return and__3546__auto____11073;
}
} else
{return and__3546__auto____11072;
}
} else
{return and__3546__auto____11071;
}
} else
{return and__3546__auto____11070;
}
} else
{return and__3546__auto____11068;
}
})());
});
var ep3__11413 = (function() { 
var G__11427__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11090 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11090))
{return cljs.core.every_QMARK_.call(null,(function (p1__10908_SHARP_){
var and__3546__auto____11091 = p1.call(null,p1__10908_SHARP_);

if(cljs.core.truth_(and__3546__auto____11091))
{var and__3546__auto____11092 = p2.call(null,p1__10908_SHARP_);

if(cljs.core.truth_(and__3546__auto____11092))
{return p3.call(null,p1__10908_SHARP_);
} else
{return and__3546__auto____11092;
}
} else
{return and__3546__auto____11091;
}
}),args);
} else
{return and__3546__auto____11090;
}
})());
};
var G__11427 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11427__delegate.call(this, x, y, z, args);
};
G__11427.cljs$lang$maxFixedArity = 3;
G__11427.cljs$lang$applyTo = (function (arglist__11430){
var x = cljs.core.first(arglist__11430);
var y = cljs.core.first(cljs.core.next(arglist__11430));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11430)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11430)));
return G__11427__delegate.call(this, x, y, z, args);
});
return G__11427;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11409.call(this);
case  1 :
return ep3__11410.call(this,x);
case  2 :
return ep3__11411.call(this,x,y);
case  3 :
return ep3__11412.call(this,x,y,z);
default:
return ep3__11413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11413.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11178 = (function() { 
var G__11437__delegate = function (p1,p2,p3,ps){
var ps__11096 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11438 = (function (){
return true;
});
var epn__11439 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10910_SHARP_){
return p1__10910_SHARP_.call(null,x);
}),ps__11096);
});
var epn__11440 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10911_SHARP_){
var and__3546__auto____11097 = p1__10911_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11097))
{return p1__10911_SHARP_.call(null,y);
} else
{return and__3546__auto____11097;
}
}),ps__11096);
});
var epn__11441 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10913_SHARP_){
var and__3546__auto____11098 = p1__10913_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11098))
{var and__3546__auto____11099 = p1__10913_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11099))
{return p1__10913_SHARP_.call(null,z);
} else
{return and__3546__auto____11099;
}
} else
{return and__3546__auto____11098;
}
}),ps__11096);
});
var epn__11442 = (function() { 
var G__11450__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11126 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11126))
{return cljs.core.every_QMARK_.call(null,(function (p1__10914_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10914_SHARP_,args);
}),ps__11096);
} else
{return and__3546__auto____11126;
}
})());
};
var G__11450 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11450__delegate.call(this, x, y, z, args);
};
G__11450.cljs$lang$maxFixedArity = 3;
G__11450.cljs$lang$applyTo = (function (arglist__11452){
var x = cljs.core.first(arglist__11452);
var y = cljs.core.first(cljs.core.next(arglist__11452));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11452)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11452)));
return G__11450__delegate.call(this, x, y, z, args);
});
return G__11450;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11438.call(this);
case  1 :
return epn__11439.call(this,x);
case  2 :
return epn__11440.call(this,x,y);
case  3 :
return epn__11441.call(this,x,y,z);
default:
return epn__11442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11442.cljs$lang$applyTo;
return epn;
})()
};
var G__11437 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11437__delegate.call(this, p1, p2, p3, ps);
};
G__11437.cljs$lang$maxFixedArity = 3;
G__11437.cljs$lang$applyTo = (function (arglist__11454){
var p1 = cljs.core.first(arglist__11454);
var p2 = cljs.core.first(cljs.core.next(arglist__11454));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11454)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11454)));
return G__11437__delegate.call(this, p1, p2, p3, ps);
});
return G__11437;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11174.call(this,p1);
case  2 :
return every_pred__11176.call(this,p1,p2);
case  3 :
return every_pred__11177.call(this,p1,p2,p3);
default:
return every_pred__11178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11178.cljs$lang$applyTo;
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
var some_fn__11814 = (function (p){
return (function() {
var sp1 = null;
var sp1__11819 = (function (){
return null;
});
var sp1__11820 = (function (x){
return p.call(null,x);
});
var sp1__11821 = (function (x,y){
var or__3548__auto____11464 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{return p.call(null,y);
}
});
var sp1__11822 = (function (x,y,z){
var or__3548__auto____11465 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11465))
{return or__3548__auto____11465;
} else
{var or__3548__auto____11467 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{return p.call(null,z);
}
}
});
var sp1__11823 = (function() { 
var G__11828__delegate = function (x,y,z,args){
var or__3548__auto____11474 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11828 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11828__delegate.call(this, x, y, z, args);
};
G__11828.cljs$lang$maxFixedArity = 3;
G__11828.cljs$lang$applyTo = (function (arglist__11831){
var x = cljs.core.first(arglist__11831);
var y = cljs.core.first(cljs.core.next(arglist__11831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11831)));
return G__11828__delegate.call(this, x, y, z, args);
});
return G__11828;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11819.call(this);
case  1 :
return sp1__11820.call(this,x);
case  2 :
return sp1__11821.call(this,x,y);
case  3 :
return sp1__11822.call(this,x,y,z);
default:
return sp1__11823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11823.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11815 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11833 = (function (){
return null;
});
var sp2__11834 = (function (x){
var or__3548__auto____11476 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{return p2.call(null,x);
}
});
var sp2__11835 = (function (x,y){
var or__3548__auto____11478 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
} else
{var or__3548__auto____11479 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11479))
{return or__3548__auto____11479;
} else
{var or__3548__auto____11481 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11481))
{return or__3548__auto____11481;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11836 = (function (x,y,z){
var or__3548__auto____11624 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11624))
{return or__3548__auto____11624;
} else
{var or__3548__auto____11625 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11625))
{return or__3548__auto____11625;
} else
{var or__3548__auto____11626 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{var or__3548__auto____11627 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11627))
{return or__3548__auto____11627;
} else
{var or__3548__auto____11628 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11628))
{return or__3548__auto____11628;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11837 = (function() { 
var G__11849__delegate = function (x,y,z,args){
var or__3548__auto____11631 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11631))
{return or__3548__auto____11631;
} else
{return cljs.core.some.call(null,(function (p1__10950_SHARP_){
var or__3548__auto____11632 = p1.call(null,p1__10950_SHARP_);

if(cljs.core.truth_(or__3548__auto____11632))
{return or__3548__auto____11632;
} else
{return p2.call(null,p1__10950_SHARP_);
}
}),args);
}
};
var G__11849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11849__delegate.call(this, x, y, z, args);
};
G__11849.cljs$lang$maxFixedArity = 3;
G__11849.cljs$lang$applyTo = (function (arglist__11854){
var x = cljs.core.first(arglist__11854);
var y = cljs.core.first(cljs.core.next(arglist__11854));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11854)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11854)));
return G__11849__delegate.call(this, x, y, z, args);
});
return G__11849;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11833.call(this);
case  1 :
return sp2__11834.call(this,x);
case  2 :
return sp2__11835.call(this,x,y);
case  3 :
return sp2__11836.call(this,x,y,z);
default:
return sp2__11837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11837.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11816 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11856 = (function (){
return null;
});
var sp3__11857 = (function (x){
var or__3548__auto____11754 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11754))
{return or__3548__auto____11754;
} else
{var or__3548__auto____11756 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11756))
{return or__3548__auto____11756;
} else
{return p3.call(null,x);
}
}
});
var sp3__11858 = (function (x,y){
var or__3548__auto____11758 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11758))
{return or__3548__auto____11758;
} else
{var or__3548__auto____11759 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11759))
{return or__3548__auto____11759;
} else
{var or__3548__auto____11760 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11760))
{return or__3548__auto____11760;
} else
{var or__3548__auto____11762 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11762))
{return or__3548__auto____11762;
} else
{var or__3548__auto____11764 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11764))
{return or__3548__auto____11764;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11859 = (function (x,y,z){
var or__3548__auto____11767 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11767))
{return or__3548__auto____11767;
} else
{var or__3548__auto____11769 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11769))
{return or__3548__auto____11769;
} else
{var or__3548__auto____11771 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11771))
{return or__3548__auto____11771;
} else
{var or__3548__auto____11772 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11772))
{return or__3548__auto____11772;
} else
{var or__3548__auto____11774 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11774))
{return or__3548__auto____11774;
} else
{var or__3548__auto____11777 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11777))
{return or__3548__auto____11777;
} else
{var or__3548__auto____11779 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11779))
{return or__3548__auto____11779;
} else
{var or__3548__auto____11781 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11781))
{return or__3548__auto____11781;
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
var sp3__11860 = (function() { 
var G__11874__delegate = function (x,y,z,args){
var or__3548__auto____11783 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11783))
{return or__3548__auto____11783;
} else
{return cljs.core.some.call(null,(function (p1__10955_SHARP_){
var or__3548__auto____11785 = p1.call(null,p1__10955_SHARP_);

if(cljs.core.truth_(or__3548__auto____11785))
{return or__3548__auto____11785;
} else
{var or__3548__auto____11786 = p2.call(null,p1__10955_SHARP_);

if(cljs.core.truth_(or__3548__auto____11786))
{return or__3548__auto____11786;
} else
{return p3.call(null,p1__10955_SHARP_);
}
}
}),args);
}
};
var G__11874 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11874__delegate.call(this, x, y, z, args);
};
G__11874.cljs$lang$maxFixedArity = 3;
G__11874.cljs$lang$applyTo = (function (arglist__11876){
var x = cljs.core.first(arglist__11876);
var y = cljs.core.first(cljs.core.next(arglist__11876));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11876)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11876)));
return G__11874__delegate.call(this, x, y, z, args);
});
return G__11874;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11856.call(this);
case  1 :
return sp3__11857.call(this,x);
case  2 :
return sp3__11858.call(this,x,y);
case  3 :
return sp3__11859.call(this,x,y,z);
default:
return sp3__11860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11860.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11817 = (function() { 
var G__11878__delegate = function (p1,p2,p3,ps){
var ps__11791 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11882 = (function (){
return null;
});
var spn__11897 = (function (x){
return cljs.core.some.call(null,(function (p1__10956_SHARP_){
return p1__10956_SHARP_.call(null,x);
}),ps__11791);
});
var spn__11898 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10958_SHARP_){
var or__3548__auto____11793 = p1__10958_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11793))
{return or__3548__auto____11793;
} else
{return p1__10958_SHARP_.call(null,y);
}
}),ps__11791);
});
var spn__11899 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10959_SHARP_){
var or__3548__auto____11794 = p1__10959_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11794))
{return or__3548__auto____11794;
} else
{var or__3548__auto____11798 = p1__10959_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11798))
{return or__3548__auto____11798;
} else
{return p1__10959_SHARP_.call(null,z);
}
}
}),ps__11791);
});
var spn__11900 = (function() { 
var G__11904__delegate = function (x,y,z,args){
var or__3548__auto____11806 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11806))
{return or__3548__auto____11806;
} else
{return cljs.core.some.call(null,(function (p1__10963_SHARP_){
return cljs.core.some.call(null,p1__10963_SHARP_,args);
}),ps__11791);
}
};
var G__11904 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11904__delegate.call(this, x, y, z, args);
};
G__11904.cljs$lang$maxFixedArity = 3;
G__11904.cljs$lang$applyTo = (function (arglist__11905){
var x = cljs.core.first(arglist__11905);
var y = cljs.core.first(cljs.core.next(arglist__11905));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11905)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11905)));
return G__11904__delegate.call(this, x, y, z, args);
});
return G__11904;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11882.call(this);
case  1 :
return spn__11897.call(this,x);
case  2 :
return spn__11898.call(this,x,y);
case  3 :
return spn__11899.call(this,x,y,z);
default:
return spn__11900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11900.cljs$lang$applyTo;
return spn;
})()
};
var G__11878 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11878__delegate.call(this, p1, p2, p3, ps);
};
G__11878.cljs$lang$maxFixedArity = 3;
G__11878.cljs$lang$applyTo = (function (arglist__11910){
var p1 = cljs.core.first(arglist__11910);
var p2 = cljs.core.first(cljs.core.next(arglist__11910));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11910)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11910)));
return G__11878__delegate.call(this, p1, p2, p3, ps);
});
return G__11878;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11814.call(this,p1);
case  2 :
return some_fn__11815.call(this,p1,p2);
case  3 :
return some_fn__11816.call(this,p1,p2,p3);
default:
return some_fn__11817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11817.cljs$lang$applyTo;
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
var map__11948 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11915))
{var s__11916 = temp__3698__auto____11915;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11916)),map.call(null,f,cljs.core.rest.call(null,s__11916)));
} else
{return null;
}
})));
});
var map__11949 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11918 = cljs.core.seq.call(null,c1);
var s2__11920 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11922 = s1__11918;

if(cljs.core.truth_(and__3546__auto____11922))
{return s2__11920;
} else
{return and__3546__auto____11922;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11918),cljs.core.first.call(null,s2__11920)),map.call(null,f,cljs.core.rest.call(null,s1__11918),cljs.core.rest.call(null,s2__11920)));
} else
{return null;
}
})));
});
var map__11950 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11928 = cljs.core.seq.call(null,c1);
var s2__11929 = cljs.core.seq.call(null,c2);
var s3__11930 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11932 = s1__11928;

if(cljs.core.truth_(and__3546__auto____11932))
{var and__3546__auto____11933 = s2__11929;

if(cljs.core.truth_(and__3546__auto____11933))
{return s3__11930;
} else
{return and__3546__auto____11933;
}
} else
{return and__3546__auto____11932;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11928),cljs.core.first.call(null,s2__11929),cljs.core.first.call(null,s3__11930)),map.call(null,f,cljs.core.rest.call(null,s1__11928),cljs.core.rest.call(null,s2__11929),cljs.core.rest.call(null,s3__11930)));
} else
{return null;
}
})));
});
var map__11951 = (function() { 
var G__12044__delegate = function (f,c1,c2,c3,colls){
var step__11942 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11938 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11938)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11938),step.call(null,map.call(null,cljs.core.rest,ss__11938)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11462_SHARP_){
return cljs.core.apply.call(null,f,p1__11462_SHARP_);
}),step__11942.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12044 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12044__delegate.call(this, f, c1, c2, c3, colls);
};
G__12044.cljs$lang$maxFixedArity = 4;
G__12044.cljs$lang$applyTo = (function (arglist__12050){
var f = cljs.core.first(arglist__12050);
var c1 = cljs.core.first(cljs.core.next(arglist__12050));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12050)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12050))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12050))));
return G__12044__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12044;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11948.call(this,f,c1);
case  3 :
return map__11949.call(this,f,c1,c2);
case  4 :
return map__11950.call(this,f,c1,c2,c3);
default:
return map__11951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11951.cljs$lang$applyTo;
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
{var temp__3698__auto____12055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12055))
{var s__12057 = temp__3698__auto____12055;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12057),take.call(null,(n - 1),cljs.core.rest.call(null,s__12057)));
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
var step__12066 = (function (n,coll){
while(true){
var s__12064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12065 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12065))
{return s__12064;
} else
{return and__3546__auto____12065;
}
})()))
{{
var G__12072 = (n - 1);
var G__12073 = cljs.core.rest.call(null,s__12064);
n = G__12072;
coll = G__12073;
continue;
}
} else
{return s__12064;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12066.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12079 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12080 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12079.call(this,n);
case  2 :
return drop_last__12080.call(this,n,s);
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
var s__12085 = cljs.core.seq.call(null,coll);
var lead__12086 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12086))
{{
var G__12090 = cljs.core.next.call(null,s__12085);
var G__12091 = cljs.core.next.call(null,lead__12086);
s__12085 = G__12090;
lead__12086 = G__12091;
continue;
}
} else
{return s__12085;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12098 = (function (pred,coll){
while(true){
var s__12096 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12097 = s__12096;

if(cljs.core.truth_(and__3546__auto____12097))
{return pred.call(null,cljs.core.first.call(null,s__12096));
} else
{return and__3546__auto____12097;
}
})()))
{{
var G__12099 = pred;
var G__12100 = cljs.core.rest.call(null,s__12096);
pred = G__12099;
coll = G__12100;
continue;
}
} else
{return s__12096;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12098.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12101 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12101))
{var s__12103 = temp__3698__auto____12101;

return cljs.core.concat.call(null,s__12103,cycle.call(null,s__12103));
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
var repeat__12168 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12195 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12168.call(this,n);
case  2 :
return repeat__12195.call(this,n,x);
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
var repeatedly__12202 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12203 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12202.call(this,n);
case  2 :
return repeatedly__12203.call(this,n,f);
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
var interleave__12245 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12233 = cljs.core.seq.call(null,c1);
var s2__12234 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12236 = s1__12233;

if(cljs.core.truth_(and__3546__auto____12236))
{return s2__12234;
} else
{return and__3546__auto____12236;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12233),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12234),interleave.call(null,cljs.core.rest.call(null,s1__12233),cljs.core.rest.call(null,s2__12234))));
} else
{return null;
}
})));
});
var interleave__12246 = (function() { 
var G__12252__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12240 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12240)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12240),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12240)));
} else
{return null;
}
})));
};
var G__12252 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12252__delegate.call(this, c1, c2, colls);
};
G__12252.cljs$lang$maxFixedArity = 2;
G__12252.cljs$lang$applyTo = (function (arglist__12253){
var c1 = cljs.core.first(arglist__12253);
var c2 = cljs.core.first(cljs.core.next(arglist__12253));
var colls = cljs.core.rest(cljs.core.next(arglist__12253));
return G__12252__delegate.call(this, c1, c2, colls);
});
return G__12252;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12245.call(this,c1,c2);
default:
return interleave__12246.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12246.cljs$lang$applyTo;
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
var cat__12264 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12262))
{var coll__12263 = temp__3695__auto____12262;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12263),cat.call(null,cljs.core.rest.call(null,coll__12263),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12264.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12273 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12274 = (function() { 
var G__12276__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12276 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12276__delegate.call(this, f, coll, colls);
};
G__12276.cljs$lang$maxFixedArity = 2;
G__12276.cljs$lang$applyTo = (function (arglist__12277){
var f = cljs.core.first(arglist__12277);
var coll = cljs.core.first(cljs.core.next(arglist__12277));
var colls = cljs.core.rest(cljs.core.next(arglist__12277));
return G__12276__delegate.call(this, f, coll, colls);
});
return G__12276;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12273.call(this,f,coll);
default:
return mapcat__12274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12274.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12278 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12278))
{var s__12279 = temp__3698__auto____12278;

var f__12280 = cljs.core.first.call(null,s__12279);
var r__12281 = cljs.core.rest.call(null,s__12279);

if(cljs.core.truth_(pred.call(null,f__12280)))
{return cljs.core.cons.call(null,f__12280,filter.call(null,pred,r__12281));
} else
{return filter.call(null,pred,r__12281);
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
var walk__12283 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12283.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12282_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12282_SHARP_));
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
var partition__12378 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12379 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12364 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12364))
{var s__12368 = temp__3698__auto____12364;

var p__12374 = cljs.core.take.call(null,n,s__12368);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12374))))
{return cljs.core.cons.call(null,p__12374,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12368)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12380 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12375 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12375))
{var s__12376 = temp__3698__auto____12375;

var p__12377 = cljs.core.take.call(null,n,s__12376);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12377))))
{return cljs.core.cons.call(null,p__12377,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12376)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12377,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12378.call(this,n,step);
case  3 :
return partition__12379.call(this,n,step,pad);
case  4 :
return partition__12380.call(this,n,step,pad,coll);
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
var get_in__12395 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12397 = (function (m,ks,not_found){
var sentinel__12390 = cljs.core.lookup_sentinel;
var m__12391 = m;
var ks__12392 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12392))
{var m__12393 = cljs.core.get.call(null,m__12391,cljs.core.first.call(null,ks__12392),sentinel__12390);

if(cljs.core.truth_((sentinel__12390 === m__12393)))
{return not_found;
} else
{{
var G__12400 = sentinel__12390;
var G__12401 = m__12393;
var G__12402 = cljs.core.next.call(null,ks__12392);
sentinel__12390 = G__12400;
m__12391 = G__12401;
ks__12392 = G__12402;
continue;
}
}
} else
{return m__12391;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12395.call(this,m,ks);
case  3 :
return get_in__12397.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12403,v){
var vec__12404__12405 = p__12403;
var k__12406 = cljs.core.nth.call(null,vec__12404__12405,0,null);
var ks__12407 = cljs.core.nthnext.call(null,vec__12404__12405,1);

if(cljs.core.truth_(ks__12407))
{return cljs.core.assoc.call(null,m,k__12406,assoc_in.call(null,cljs.core.get.call(null,m,k__12406),ks__12407,v));
} else
{return cljs.core.assoc.call(null,m,k__12406,v);
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
var update_in__delegate = function (m,p__12413,f,args){
var vec__12415__12416 = p__12413;
var k__12418 = cljs.core.nth.call(null,vec__12415__12416,0,null);
var ks__12419 = cljs.core.nthnext.call(null,vec__12415__12416,1);

if(cljs.core.truth_(ks__12419))
{return cljs.core.assoc.call(null,m,k__12418,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12418),ks__12419,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12418,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12418),args));
}
};
var update_in = function (m,p__12413,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12413, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12425){
var m = cljs.core.first(arglist__12425);
var p__12413 = cljs.core.first(cljs.core.next(arglist__12425));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12425)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12425)));
return update_in__delegate.call(this, m, p__12413, f, args);
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
var this__12452 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12511 = null;
var G__12511__12512 = (function (coll,k){
var this__12457 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12511__12513 = (function (coll,k,not_found){
var this__12458 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12511 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12511__12512.call(this,coll,k);
case  3 :
return G__12511__12513.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12511;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12462 = this;
var new_array__12464 = cljs.core.aclone.call(null,this__12462.array);

(new_array__12464[k] = v);
return (new cljs.core.Vector(this__12462.meta,new_array__12464));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12515 = null;
var G__12515__12516 = (function (coll,k){
var this__12465 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12515__12517 = (function (coll,k,not_found){
var this__12466 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12515 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12515__12516.call(this,coll,k);
case  3 :
return G__12515__12517.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12515;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12470 = this;
var new_array__12471 = cljs.core.aclone.call(null,this__12470.array);

new_array__12471.push(o);
return (new cljs.core.Vector(this__12470.meta,new_array__12471));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12522 = null;
var G__12522__12523 = (function (v,f){
var this__12475 = this;
return cljs.core.ci_reduce.call(null,this__12475.array,f);
});
var G__12522__12524 = (function (v,f,start){
var this__12476 = this;
return cljs.core.ci_reduce.call(null,this__12476.array,f,start);
});
G__12522 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12522__12523.call(this,v,f);
case  3 :
return G__12522__12524.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12522;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12477 = this;
if(cljs.core.truth_((this__12477.array.length > 0)))
{var vector_seq__12487 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12477.array.length)))
{return cljs.core.cons.call(null,(this__12477.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12487.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12488 = this;
return this__12488.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12489 = this;
var count__12490 = this__12489.array.length;

if(cljs.core.truth_((count__12490 > 0)))
{return (this__12489.array[(count__12490 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12491 = this;
if(cljs.core.truth_((this__12491.array.length > 0)))
{var new_array__12492 = cljs.core.aclone.call(null,this__12491.array);

new_array__12492.pop();
return (new cljs.core.Vector(this__12491.meta,new_array__12492));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12494 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12497 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12503 = this;
return (new cljs.core.Vector(meta,this__12503.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12504 = this;
return this__12504.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12542 = null;
var G__12542__12544 = (function (coll,n){
var this__12505 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12506 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12506))
{return (n < this__12505.array.length);
} else
{return and__3546__auto____12506;
}
})()))
{return (this__12505.array[n]);
} else
{return null;
}
});
var G__12542__12545 = (function (coll,n,not_found){
var this__12507 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12508 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12508))
{return (n < this__12507.array.length);
} else
{return and__3546__auto____12508;
}
})()))
{return (this__12507.array[n]);
} else
{return not_found;
}
});
G__12542 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12542__12544.call(this,coll,n);
case  3 :
return G__12542__12545.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12542;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12510 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12510.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12628){
var args = cljs.core.seq( arglist__12628 );;
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
var this__12637 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12742 = null;
var G__12742__12743 = (function (coll,k){
var this__12690 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12742__12744 = (function (coll,k,not_found){
var this__12692 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12742 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12742__12743.call(this,coll,k);
case  3 :
return G__12742__12744.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12742;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12696 = this;
var v_pos__12697 = (this__12696.start + key);

return (new cljs.core.Subvec(this__12696.meta,cljs.core._assoc.call(null,this__12696.v,v_pos__12697,val),this__12696.start,((this__12696.end > (v_pos__12697 + 1)) ? this__12696.end : (v_pos__12697 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12749 = null;
var G__12749__12750 = (function (coll,k){
var this__12700 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12749__12751 = (function (coll,k,not_found){
var this__12702 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12749 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12749__12750.call(this,coll,k);
case  3 :
return G__12749__12751.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12749;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12707 = this;
return (new cljs.core.Subvec(this__12707.meta,cljs.core._assoc_n.call(null,this__12707.v,this__12707.end,o),this__12707.start,(this__12707.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12756 = null;
var G__12756__12757 = (function (coll,f){
var this__12708 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12756__12758 = (function (coll,f,start){
var this__12710 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12756 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12756__12757.call(this,coll,f);
case  3 :
return G__12756__12758.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12756;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12712 = this;
var subvec_seq__12715 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12712.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12712.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12715.call(null,this__12712.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12717 = this;
return (this__12717.end - this__12717.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12719 = this;
return cljs.core._nth.call(null,this__12719.v,(this__12719.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12720 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12720.start,this__12720.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12720.meta,this__12720.v,this__12720.start,(this__12720.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12721 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12724 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12726 = this;
return (new cljs.core.Subvec(meta,this__12726.v,this__12726.start,this__12726.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12729 = this;
return this__12729.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12772 = null;
var G__12772__12773 = (function (coll,n){
var this__12731 = this;
return cljs.core._nth.call(null,this__12731.v,(this__12731.start + n));
});
var G__12772__12774 = (function (coll,n,not_found){
var this__12736 = this;
return cljs.core._nth.call(null,this__12736.v,(this__12736.start + n),not_found);
});
G__12772 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12772__12773.call(this,coll,n);
case  3 :
return G__12772__12774.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12772;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12737 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12737.meta);
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
var subvec__12791 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12792 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12791.call(this,v,start);
case  3 :
return subvec__12792.call(this,v,start,end);
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
var this__12860 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12862 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12864 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12865 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12865.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12866 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12867 = this;
return cljs.core._first.call(null,this__12867.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12868 = this;
var temp__3695__auto____12869 = cljs.core.next.call(null,this__12868.front);

if(cljs.core.truth_(temp__3695__auto____12869))
{var f1__12870 = temp__3695__auto____12869;

return (new cljs.core.PersistentQueueSeq(this__12868.meta,f1__12870,this__12868.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12868.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12868.meta,this__12868.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12872 = this;
return this__12872.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12874 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12874.front,this__12874.rear));
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
var this__12897 = this;
if(cljs.core.truth_(this__12897.front))
{return (new cljs.core.PersistentQueue(this__12897.meta,(this__12897.count + 1),this__12897.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12902 = this__12897.rear;

if(cljs.core.truth_(or__3548__auto____12902))
{return or__3548__auto____12902;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12897.meta,(this__12897.count + 1),cljs.core.conj.call(null,this__12897.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12906 = this;
var rear__12908 = cljs.core.seq.call(null,this__12906.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12910 = this__12906.front;

if(cljs.core.truth_(or__3548__auto____12910))
{return or__3548__auto____12910;
} else
{return rear__12908;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12906.front,cljs.core.seq.call(null,rear__12908)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12914 = this;
return this__12914.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12917 = this;
return cljs.core._first.call(null,this__12917.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12920 = this;
if(cljs.core.truth_(this__12920.front))
{var temp__3695__auto____12922 = cljs.core.next.call(null,this__12920.front);

if(cljs.core.truth_(temp__3695__auto____12922))
{var f1__12924 = temp__3695__auto____12922;

return (new cljs.core.PersistentQueue(this__12920.meta,(this__12920.count - 1),f1__12924,this__12920.rear));
} else
{return (new cljs.core.PersistentQueue(this__12920.meta,(this__12920.count - 1),cljs.core.seq.call(null,this__12920.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12927 = this;
return cljs.core.first.call(null,this__12927.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12928 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12931 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12933 = this;
return (new cljs.core.PersistentQueue(meta,this__12933.count,this__12933.front,this__12933.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12957 = this;
return this__12957.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12958 = this;
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
var this__12969 = this;
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
var len__12981 = array.length;

var i__12982 = 0;

while(true){
if(cljs.core.truth_((i__12982 < len__12981)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12982]))))
{return i__12982;
} else
{{
var G__12983 = (i__12982 + incr);
i__12982 = G__12983;
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
var obj_map_contains_key_QMARK___12987 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12988 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12986 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12986))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12986;
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
return obj_map_contains_key_QMARK___12987.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12988.call(this,k,strobj,true_val,false_val);
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
var this__13012 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13081 = null;
var G__13081__13082 = (function (coll,k){
var this__13015 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13081__13083 = (function (coll,k,not_found){
var this__13019 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13019.strobj,(this__13019.strobj[k]),not_found);
});
G__13081 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13081__13082.call(this,coll,k);
case  3 :
return G__13081__13083.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13081;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13032 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13034 = goog.object.clone.call(null,this__13032.strobj);
var overwrite_QMARK___13035 = new_strobj__13034.hasOwnProperty(k);

(new_strobj__13034[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13035))
{return (new cljs.core.ObjMap(this__13032.meta,this__13032.keys,new_strobj__13034));
} else
{var new_keys__13037 = cljs.core.aclone.call(null,this__13032.keys);

new_keys__13037.push(k);
return (new cljs.core.ObjMap(this__13032.meta,new_keys__13037,new_strobj__13034));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13032.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13042 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13042.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13097 = null;
var G__13097__13098 = (function (coll,k){
var this__13045 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13097__13099 = (function (coll,k,not_found){
var this__13047 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13097 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13097__13098.call(this,coll,k);
case  3 :
return G__13097__13099.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13097;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13050 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13055 = this;
if(cljs.core.truth_((this__13055.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12991_SHARP_){
return cljs.core.vector.call(null,p1__12991_SHARP_,(this__13055.strobj[p1__12991_SHARP_]));
}),this__13055.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13057 = this;
return this__13057.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13059 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13061 = this;
return (new cljs.core.ObjMap(meta,this__13061.keys,this__13061.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13065 = this;
return this__13065.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13067 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13067.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13069 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13072 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13072))
{return this__13069.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13072;
}
})()))
{var new_keys__13075 = cljs.core.aclone.call(null,this__13069.keys);
var new_strobj__13076 = goog.object.clone.call(null,this__13069.strobj);

new_keys__13075.splice(cljs.core.scan_array.call(null,1,k,new_keys__13075),1);
cljs.core.js_delete.call(null,new_strobj__13076,k);
return (new cljs.core.ObjMap(this__13069.meta,new_keys__13075,new_strobj__13076));
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
var this__13238 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13312 = null;
var G__13312__13313 = (function (coll,k){
var this__13240 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13312__13314 = (function (coll,k,not_found){
var this__13242 = this;
var bucket__13244 = (this__13242.hashobj[cljs.core.hash.call(null,k)]);
var i__13246 = (cljs.core.truth_(bucket__13244)?cljs.core.scan_array.call(null,2,k,bucket__13244):null);

if(cljs.core.truth_(i__13246))
{return (bucket__13244[(i__13246 + 1)]);
} else
{return not_found;
}
});
G__13312 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13312__13313.call(this,coll,k);
case  3 :
return G__13312__13314.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13312;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13248 = this;
var h__13250 = cljs.core.hash.call(null,k);
var bucket__13251 = (this__13248.hashobj[h__13250]);

if(cljs.core.truth_(bucket__13251))
{var new_bucket__13252 = cljs.core.aclone.call(null,bucket__13251);
var new_hashobj__13253 = goog.object.clone.call(null,this__13248.hashobj);

(new_hashobj__13253[h__13250] = new_bucket__13252);
var temp__3695__auto____13256 = cljs.core.scan_array.call(null,2,k,new_bucket__13252);

if(cljs.core.truth_(temp__3695__auto____13256))
{var i__13259 = temp__3695__auto____13256;

(new_bucket__13252[(i__13259 + 1)] = v);
return (new cljs.core.HashMap(this__13248.meta,this__13248.count,new_hashobj__13253));
} else
{new_bucket__13252.push(k,v);
return (new cljs.core.HashMap(this__13248.meta,(this__13248.count + 1),new_hashobj__13253));
}
} else
{var new_hashobj__13261 = goog.object.clone.call(null,this__13248.hashobj);

(new_hashobj__13261[h__13250] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13248.meta,(this__13248.count + 1),new_hashobj__13261));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13265 = this;
var bucket__13266 = (this__13265.hashobj[cljs.core.hash.call(null,k)]);
var i__13268 = (cljs.core.truth_(bucket__13266)?cljs.core.scan_array.call(null,2,k,bucket__13266):null);

if(cljs.core.truth_(i__13268))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13322 = null;
var G__13322__13323 = (function (coll,k){
var this__13272 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13322__13324 = (function (coll,k,not_found){
var this__13273 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13322 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13322__13323.call(this,coll,k);
case  3 :
return G__13322__13324.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13322;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13292 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13293 = this;
if(cljs.core.truth_((this__13293.count > 0)))
{var hashes__13294 = cljs.core.js_keys.call(null,this__13293.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13122_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13293.hashobj[p1__13122_SHARP_])));
}),hashes__13294);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13295 = this;
return this__13295.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13296 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13297 = this;
return (new cljs.core.HashMap(meta,this__13297.count,this__13297.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13298 = this;
return this__13298.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13303 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13303.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13304 = this;
var h__13305 = cljs.core.hash.call(null,k);
var bucket__13306 = (this__13304.hashobj[h__13305]);
var i__13307 = (cljs.core.truth_(bucket__13306)?cljs.core.scan_array.call(null,2,k,bucket__13306):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13307)))
{return coll;
} else
{var new_hashobj__13308 = goog.object.clone.call(null,this__13304.hashobj);

if(cljs.core.truth_((3 > bucket__13306.length)))
{cljs.core.js_delete.call(null,new_hashobj__13308,h__13305);
} else
{var new_bucket__13309 = cljs.core.aclone.call(null,bucket__13306);

new_bucket__13309.splice(i__13307,2);
(new_hashobj__13308[h__13305] = new_bucket__13309);
}
return (new cljs.core.HashMap(this__13304.meta,(this__13304.count - 1),new_hashobj__13308));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13409 = ks.length;

var i__13410 = 0;
var out__13411 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13410 < len__13409)))
{{
var G__13416 = (i__13410 + 1);
var G__13417 = cljs.core.assoc.call(null,out__13411,(ks[i__13410]),(vs[i__13410]));
i__13410 = G__13416;
out__13411 = G__13417;
continue;
}
} else
{return out__13411;
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
var in$__13425 = cljs.core.seq.call(null,keyvals);
var out__13426 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13425))
{{
var G__13431 = cljs.core.nnext.call(null,in$__13425);
var G__13432 = cljs.core.assoc.call(null,out__13426,cljs.core.first.call(null,in$__13425),cljs.core.second.call(null,in$__13425));
in$__13425 = G__13431;
out__13426 = G__13432;
continue;
}
} else
{return out__13426;
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
hash_map.cljs$lang$applyTo = (function (arglist__13436){
var keyvals = cljs.core.seq( arglist__13436 );;
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
{return cljs.core.reduce.call(null,(function (p1__13443_SHARP_,p2__13444_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13453 = p1__13443_SHARP_;

if(cljs.core.truth_(or__3548__auto____13453))
{return or__3548__auto____13453;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13444_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13460){
var maps = cljs.core.seq( arglist__13460 );;
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
{var merge_entry__13493 = (function (m,e){
var k__13488 = cljs.core.first.call(null,e);
var v__13490 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13488)))
{return cljs.core.assoc.call(null,m,k__13488,f.call(null,cljs.core.get.call(null,m,k__13488),v__13490));
} else
{return cljs.core.assoc.call(null,m,k__13488,v__13490);
}
});
var merge2__13497 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13493,(function (){var or__3548__auto____13495 = m1;

if(cljs.core.truth_(or__3548__auto____13495))
{return or__3548__auto____13495;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13497,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13509){
var f = cljs.core.first(arglist__13509);
var maps = cljs.core.rest(arglist__13509);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13517 = cljs.core.ObjMap.fromObject([],{});
var keys__13518 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13518))
{var key__13519 = cljs.core.first.call(null,keys__13518);
var entry__13521 = cljs.core.get.call(null,map,key__13519,"﷐'user/not-found");

{
var G__13525 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13521,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13517,key__13519,entry__13521):ret__13517);
var G__13526 = cljs.core.next.call(null,keys__13518);
ret__13517 = G__13525;
keys__13518 = G__13526;
continue;
}
} else
{return ret__13517;
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
var G__13596 = null;
var G__13596__13597 = (function (coll,v){
var this__13559 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13596__13598 = (function (coll,v,not_found){
var this__13560 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13560.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13596 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13596__13597.call(this,coll,v);
case  3 :
return G__13596__13598.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13596;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13600 = null;
var G__13600__13601 = (function (coll,k){
var this__13561 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13600__13602 = (function (coll,k,not_found){
var this__13562 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13600 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13600__13601.call(this,coll,k);
case  3 :
return G__13600__13602.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13600;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13565 = this;
return (new cljs.core.Set(this__13565.meta,cljs.core.assoc.call(null,this__13565.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13566 = this;
return cljs.core.keys.call(null,this__13566.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13570 = this;
return (new cljs.core.Set(this__13570.meta,cljs.core.dissoc.call(null,this__13570.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13572 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13576 = this;
var and__3546__auto____13577 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13577))
{var and__3546__auto____13584 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13584))
{return cljs.core.every_QMARK_.call(null,(function (p1__13512_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13512_SHARP_);
}),other);
} else
{return and__3546__auto____13584;
}
} else
{return and__3546__auto____13577;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13585 = this;
return (new cljs.core.Set(meta,this__13585.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13591 = this;
return this__13591.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13594 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13594.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13626 = cljs.core.seq.call(null,coll);
var out__13627 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13626))))
{{
var G__13633 = cljs.core.rest.call(null,in$__13626);
var G__13634 = cljs.core.conj.call(null,out__13627,cljs.core.first.call(null,in$__13626));
in$__13626 = G__13633;
out__13627 = G__13634;
continue;
}
} else
{return out__13627;
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
{var n__13635 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13636 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13636))
{var e__13637 = temp__3695__auto____13636;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13637));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13635,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13625_SHARP_){
var temp__3695__auto____13641 = cljs.core.find.call(null,smap,p1__13625_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13641))
{var e__13642 = temp__3695__auto____13641;

return cljs.core.second.call(null,e__13642);
} else
{return p1__13625_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13667 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13659,seen){
while(true){
var vec__13661__13662 = p__13659;
var f__13663 = cljs.core.nth.call(null,vec__13661__13662,0,null);
var xs__13664 = vec__13661__13662;

var temp__3698__auto____13665 = cljs.core.seq.call(null,xs__13664);

if(cljs.core.truth_(temp__3698__auto____13665))
{var s__13666 = temp__3698__auto____13665;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13663)))
{{
var G__13676 = cljs.core.rest.call(null,s__13666);
var G__13677 = seen;
p__13659 = G__13676;
seen = G__13677;
continue;
}
} else
{return cljs.core.cons.call(null,f__13663,step.call(null,cljs.core.rest.call(null,s__13666),cljs.core.conj.call(null,seen,f__13663)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13667.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13693 = cljs.core.Vector.fromArray([]);
var s__13694 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13694)))
{{
var G__13697 = cljs.core.conj.call(null,ret__13693,cljs.core.first.call(null,s__13694));
var G__13698 = cljs.core.next.call(null,s__13694);
ret__13693 = G__13697;
s__13694 = G__13698;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13693);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13710 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13710))
{return or__3548__auto____13710;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13711 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13711 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13711 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13718 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13718))
{return or__3548__auto____13718;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13720 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13720 > -1)))
{return cljs.core.subs.call(null,x,2,i__13720);
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
var map__13724 = cljs.core.ObjMap.fromObject([],{});
var ks__13725 = cljs.core.seq.call(null,keys);
var vs__13726 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13727 = ks__13725;

if(cljs.core.truth_(and__3546__auto____13727))
{return vs__13726;
} else
{return and__3546__auto____13727;
}
})()))
{{
var G__13730 = cljs.core.assoc.call(null,map__13724,cljs.core.first.call(null,ks__13725),cljs.core.first.call(null,vs__13726));
var G__13731 = cljs.core.next.call(null,ks__13725);
var G__13732 = cljs.core.next.call(null,vs__13726);
map__13724 = G__13730;
ks__13725 = G__13731;
vs__13726 = G__13732;
continue;
}
} else
{return map__13724;
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
var max_key__13740 = (function (k,x){
return x;
});
var max_key__13741 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13742 = (function() { 
var G__13746__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13722_SHARP_,p2__13723_SHARP_){
return max_key.call(null,k,p1__13722_SHARP_,p2__13723_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13746 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13746__delegate.call(this, k, x, y, more);
};
G__13746.cljs$lang$maxFixedArity = 3;
G__13746.cljs$lang$applyTo = (function (arglist__13747){
var k = cljs.core.first(arglist__13747);
var x = cljs.core.first(cljs.core.next(arglist__13747));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13747)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13747)));
return G__13746__delegate.call(this, k, x, y, more);
});
return G__13746;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13740.call(this,k,x);
case  3 :
return max_key__13741.call(this,k,x,y);
default:
return max_key__13742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13742.cljs$lang$applyTo;
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
var G__13764__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13734_SHARP_,p2__13736_SHARP_){
return min_key.call(null,k,p1__13734_SHARP_,p2__13736_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13764 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13764__delegate.call(this, k, x, y, more);
};
G__13764.cljs$lang$maxFixedArity = 3;
G__13764.cljs$lang$applyTo = (function (arglist__13767){
var k = cljs.core.first(arglist__13767);
var x = cljs.core.first(cljs.core.next(arglist__13767));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13767)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13767)));
return G__13764__delegate.call(this, k, x, y, more);
});
return G__13764;
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
var partition_all__13777 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13778 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13773 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13773))
{var s__13776 = temp__3698__auto____13773;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13776),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13776)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13777.call(this,n,step);
case  3 :
return partition_all__13778.call(this,n,step,coll);
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
var temp__3698__auto____13794 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13794))
{var s__13795 = temp__3698__auto____13794;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13795))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13795),take_while.call(null,pred,cljs.core.rest.call(null,s__13795)));
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
var this__13816 = this;
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
var G__13897 = null;
var G__13897__13898 = (function (rng,f){
var this__13821 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13897__13899 = (function (rng,f,s){
var this__13823 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13897 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13897__13898.call(this,rng,f);
case  3 :
return G__13897__13899.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13897;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13826 = this;
var comp__13827 = (cljs.core.truth_((this__13826.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13827.call(null,this__13826.start,this__13826.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13832 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13832.end - this__13832.start) / this__13832.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13836 = this;
return this__13836.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13838 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13838.meta,(this__13838.start + this__13838.step),this__13838.end,this__13838.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13840 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13842 = this;
return (new cljs.core.Range(meta,this__13842.start,this__13842.end,this__13842.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13843 = this;
return this__13843.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13916 = null;
var G__13916__13917 = (function (rng,n){
var this__13844 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13844.start + (n * this__13844.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13846 = (this__13844.start > this__13844.end);

if(cljs.core.truth_(and__3546__auto____13846))
{return cljs.core._EQ_.call(null,this__13844.step,0);
} else
{return and__3546__auto____13846;
}
})()))
{return this__13844.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13916__13918 = (function (rng,n,not_found){
var this__13849 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13849.start + (n * this__13849.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13851 = (this__13849.start > this__13849.end);

if(cljs.core.truth_(and__3546__auto____13851))
{return cljs.core._EQ_.call(null,this__13849.step,0);
} else
{return and__3546__auto____13851;
}
})()))
{return this__13849.start;
} else
{return not_found;
}
}
});
G__13916 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13916__13917.call(this,rng,n);
case  3 :
return G__13916__13918.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13916;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13855 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13855.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13963 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13964 = (function (end){
return range.call(null,0,end,1);
});
var range__13965 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13966 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13963.call(this);
case  1 :
return range__13964.call(this,start);
case  2 :
return range__13965.call(this,start,end);
case  3 :
return range__13966.call(this,start,end,step);
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
var temp__3698__auto____13986 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13986))
{var s__13987 = temp__3698__auto____13986;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13987),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13987)));
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
var temp__3698__auto____14030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14030))
{var s__14031 = temp__3698__auto____14030;

var fst__14032 = cljs.core.first.call(null,s__14031);
var fv__14033 = f.call(null,fst__14032);
var run__14034 = cljs.core.cons.call(null,fst__14032,cljs.core.take_while.call(null,(function (p1__14011_SHARP_){
return cljs.core._EQ_.call(null,fv__14033,f.call(null,p1__14011_SHARP_));
}),cljs.core.next.call(null,s__14031)));

return cljs.core.cons.call(null,run__14034,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14034),s__14031))));
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
var reductions__14101 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14096 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14096))
{var s__14097 = temp__3695__auto____14096;

return reductions.call(null,f,cljs.core.first.call(null,s__14097),cljs.core.rest.call(null,s__14097));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14102 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14099 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14099))
{var s__14100 = temp__3698__auto____14099;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14100)),cljs.core.rest.call(null,s__14100));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14101.call(this,f,init);
case  3 :
return reductions__14102.call(this,f,init,coll);
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
var juxt__14149 = (function (f){
return (function() {
var G__14154 = null;
var G__14154__14155 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14154__14156 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14154__14157 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14154__14158 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14154__14159 = (function() { 
var G__14161__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14161 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14161__delegate.call(this, x, y, z, args);
};
G__14161.cljs$lang$maxFixedArity = 3;
G__14161.cljs$lang$applyTo = (function (arglist__14162){
var x = cljs.core.first(arglist__14162);
var y = cljs.core.first(cljs.core.next(arglist__14162));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14162)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14162)));
return G__14161__delegate.call(this, x, y, z, args);
});
return G__14161;
})()
;
G__14154 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14154__14155.call(this);
case  1 :
return G__14154__14156.call(this,x);
case  2 :
return G__14154__14157.call(this,x,y);
case  3 :
return G__14154__14158.call(this,x,y,z);
default:
return G__14154__14159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14154.cljs$lang$maxFixedArity = 3;
G__14154.cljs$lang$applyTo = G__14154__14159.cljs$lang$applyTo;
return G__14154;
})()
});
var juxt__14150 = (function (f,g){
return (function() {
var G__14163 = null;
var G__14163__14164 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14163__14165 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14163__14166 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14163__14167 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14163__14168 = (function() { 
var G__14173__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14173 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14173__delegate.call(this, x, y, z, args);
};
G__14173.cljs$lang$maxFixedArity = 3;
G__14173.cljs$lang$applyTo = (function (arglist__14175){
var x = cljs.core.first(arglist__14175);
var y = cljs.core.first(cljs.core.next(arglist__14175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14175)));
return G__14173__delegate.call(this, x, y, z, args);
});
return G__14173;
})()
;
G__14163 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14163__14164.call(this);
case  1 :
return G__14163__14165.call(this,x);
case  2 :
return G__14163__14166.call(this,x,y);
case  3 :
return G__14163__14167.call(this,x,y,z);
default:
return G__14163__14168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14163.cljs$lang$maxFixedArity = 3;
G__14163.cljs$lang$applyTo = G__14163__14168.cljs$lang$applyTo;
return G__14163;
})()
});
var juxt__14151 = (function (f,g,h){
return (function() {
var G__14178 = null;
var G__14178__14180 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14178__14181 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14178__14182 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14178__14183 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14178__14184 = (function() { 
var G__14191__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14191 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14191__delegate.call(this, x, y, z, args);
};
G__14191.cljs$lang$maxFixedArity = 3;
G__14191.cljs$lang$applyTo = (function (arglist__14192){
var x = cljs.core.first(arglist__14192);
var y = cljs.core.first(cljs.core.next(arglist__14192));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14192)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14192)));
return G__14191__delegate.call(this, x, y, z, args);
});
return G__14191;
})()
;
G__14178 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14178__14180.call(this);
case  1 :
return G__14178__14181.call(this,x);
case  2 :
return G__14178__14182.call(this,x,y);
case  3 :
return G__14178__14183.call(this,x,y,z);
default:
return G__14178__14184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14178.cljs$lang$maxFixedArity = 3;
G__14178.cljs$lang$applyTo = G__14178__14184.cljs$lang$applyTo;
return G__14178;
})()
});
var juxt__14152 = (function() { 
var G__14193__delegate = function (f,g,h,fs){
var fs__14143 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14194 = null;
var G__14194__14195 = (function (){
return cljs.core.reduce.call(null,(function (p1__14079_SHARP_,p2__14080_SHARP_){
return cljs.core.conj.call(null,p1__14079_SHARP_,p2__14080_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14194__14196 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14081_SHARP_,p2__14082_SHARP_){
return cljs.core.conj.call(null,p1__14081_SHARP_,p2__14082_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14194__14197 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14083_SHARP_,p2__14084_SHARP_){
return cljs.core.conj.call(null,p1__14083_SHARP_,p2__14084_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14194__14198 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14085_SHARP_,p2__14086_SHARP_){
return cljs.core.conj.call(null,p1__14085_SHARP_,p2__14086_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14143);
});
var G__14194__14199 = (function() { 
var G__14222__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14088_SHARP_,p2__14091_SHARP_){
return cljs.core.conj.call(null,p1__14088_SHARP_,cljs.core.apply.call(null,p2__14091_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14143);
};
var G__14222 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14222__delegate.call(this, x, y, z, args);
};
G__14222.cljs$lang$maxFixedArity = 3;
G__14222.cljs$lang$applyTo = (function (arglist__14228){
var x = cljs.core.first(arglist__14228);
var y = cljs.core.first(cljs.core.next(arglist__14228));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14228)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14228)));
return G__14222__delegate.call(this, x, y, z, args);
});
return G__14222;
})()
;
G__14194 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14194__14195.call(this);
case  1 :
return G__14194__14196.call(this,x);
case  2 :
return G__14194__14197.call(this,x,y);
case  3 :
return G__14194__14198.call(this,x,y,z);
default:
return G__14194__14199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14194.cljs$lang$maxFixedArity = 3;
G__14194.cljs$lang$applyTo = G__14194__14199.cljs$lang$applyTo;
return G__14194;
})()
};
var G__14193 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14193__delegate.call(this, f, g, h, fs);
};
G__14193.cljs$lang$maxFixedArity = 3;
G__14193.cljs$lang$applyTo = (function (arglist__14232){
var f = cljs.core.first(arglist__14232);
var g = cljs.core.first(cljs.core.next(arglist__14232));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14232)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14232)));
return G__14193__delegate.call(this, f, g, h, fs);
});
return G__14193;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14149.call(this,f);
case  2 :
return juxt__14150.call(this,f,g);
case  3 :
return juxt__14151.call(this,f,g,h);
default:
return juxt__14152.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14152.cljs$lang$applyTo;
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
var dorun__14270 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14275 = cljs.core.next.call(null,coll);
coll = G__14275;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14271 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14243 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14243))
{return (n > 0);
} else
{return and__3546__auto____14243;
}
})()))
{{
var G__14280 = (n - 1);
var G__14281 = cljs.core.next.call(null,coll);
n = G__14280;
coll = G__14281;
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
return dorun__14270.call(this,n);
case  2 :
return dorun__14271.call(this,n,coll);
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
var doall__14298 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14299 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14298.call(this,n);
case  2 :
return doall__14299.call(this,n,coll);
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
var matches__14301 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14301),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14301),1)))
{return cljs.core.first.call(null,matches__14301);
} else
{return cljs.core.vec.call(null,matches__14301);
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
var matches__14339 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14339)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14339),1)))
{return cljs.core.first.call(null,matches__14339);
} else
{return cljs.core.vec.call(null,matches__14339);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14343 = cljs.core.re_find.call(null,re,s);
var match_idx__14344 = s.search(re);
var match_str__14348 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14343))?cljs.core.first.call(null,match_data__14343):match_data__14343);
var post_match__14351 = cljs.core.subs.call(null,s,(match_idx__14344 + cljs.core.count.call(null,match_str__14348)));

if(cljs.core.truth_(match_data__14343))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14343,re_seq.call(null,re,post_match__14351));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14402_SHARP_){
return print_one.call(null,p1__14402_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14437 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14437))
{var and__3546__auto____14441 = (function (){var x__445__auto____14438 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14439 = x__445__auto____14438;

if(cljs.core.truth_(and__3546__auto____14439))
{var and__3546__auto____14440 = x__445__auto____14438.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14440))
{return cljs.core.not.call(null,x__445__auto____14438.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14440;
}
} else
{return and__3546__auto____14439;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14438);
}
})();

if(cljs.core.truth_(and__3546__auto____14441))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14441;
}
} else
{return and__3546__auto____14437;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14443 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14444 = x__445__auto____14443;

if(cljs.core.truth_(and__3546__auto____14444))
{var and__3546__auto____14445 = x__445__auto____14443.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14445))
{return cljs.core.not.call(null,x__445__auto____14443.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14445;
}
} else
{return and__3546__auto____14444;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14443);
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
var first_obj__14461 = cljs.core.first.call(null,objs);
var sb__14462 = (new goog.string.StringBuffer());

var G__14463__14465 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14463__14465))
{var obj__14467 = cljs.core.first.call(null,G__14463__14465);
var G__14463__14468 = G__14463__14465;

while(true){
if(cljs.core.truth_((obj__14467 === first_obj__14461)))
{} else
{sb__14462.append(" ");
}
var G__14469__14470 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14467,opts));

if(cljs.core.truth_(G__14469__14470))
{var string__14471 = cljs.core.first.call(null,G__14469__14470);
var G__14469__14472 = G__14469__14470;

while(true){
sb__14462.append(string__14471);
var temp__3698__auto____14473 = cljs.core.next.call(null,G__14469__14472);

if(cljs.core.truth_(temp__3698__auto____14473))
{var G__14469__14474 = temp__3698__auto____14473;

{
var G__14487 = cljs.core.first.call(null,G__14469__14474);
var G__14488 = G__14469__14474;
string__14471 = G__14487;
G__14469__14472 = G__14488;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14475 = cljs.core.next.call(null,G__14463__14468);

if(cljs.core.truth_(temp__3698__auto____14475))
{var G__14463__14476 = temp__3698__auto____14475;

{
var G__14489 = cljs.core.first.call(null,G__14463__14476);
var G__14491 = G__14463__14476;
obj__14467 = G__14489;
G__14463__14468 = G__14491;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14462);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14497 = cljs.core.first.call(null,objs);

var G__14498__14500 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14498__14500))
{var obj__14503 = cljs.core.first.call(null,G__14498__14500);
var G__14498__14504 = G__14498__14500;

while(true){
if(cljs.core.truth_((obj__14503 === first_obj__14497)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14507__14509 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14503,opts));

if(cljs.core.truth_(G__14507__14509))
{var string__14510 = cljs.core.first.call(null,G__14507__14509);
var G__14507__14512 = G__14507__14509;

while(true){
cljs.core.string_print.call(null,string__14510);
var temp__3698__auto____14515 = cljs.core.next.call(null,G__14507__14512);

if(cljs.core.truth_(temp__3698__auto____14515))
{var G__14507__14516 = temp__3698__auto____14515;

{
var G__14524 = cljs.core.first.call(null,G__14507__14516);
var G__14525 = G__14507__14516;
string__14510 = G__14524;
G__14507__14512 = G__14525;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14519 = cljs.core.next.call(null,G__14498__14504);

if(cljs.core.truth_(temp__3698__auto____14519))
{var G__14498__14520 = temp__3698__auto____14519;

{
var G__14528 = cljs.core.first.call(null,G__14498__14520);
var G__14529 = G__14498__14520;
obj__14503 = G__14528;
G__14498__14504 = G__14529;
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
pr_str.cljs$lang$applyTo = (function (arglist__14534){
var objs = cljs.core.seq( arglist__14534 );;
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
pr.cljs$lang$applyTo = (function (arglist__14549){
var objs = cljs.core.seq( arglist__14549 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14558){
var objs = cljs.core.seq( arglist__14558 );;
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
println.cljs$lang$applyTo = (function (arglist__14561){
var objs = cljs.core.seq( arglist__14561 );;
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
prn.cljs$lang$applyTo = (function (arglist__14577){
var objs = cljs.core.seq( arglist__14577 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14585 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14585,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14625 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14625))
{var nspc__14628 = temp__3698__auto____14625;

return cljs.core.str.call(null,nspc__14628,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14634 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14634))
{var nspc__14635 = temp__3698__auto____14634;

return cljs.core.str.call(null,nspc__14635,"/");
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
var pr_pair__14657 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14657,"{",", ","}",opts,coll);
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
var this__14690 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14691 = this;
var G__14692__14693 = cljs.core.seq.call(null,this__14691.watches);

if(cljs.core.truth_(G__14692__14693))
{var G__14696__14698 = cljs.core.first.call(null,G__14692__14693);
var vec__14697__14699 = G__14696__14698;
var key__14700 = cljs.core.nth.call(null,vec__14697__14699,0,null);
var f__14701 = cljs.core.nth.call(null,vec__14697__14699,1,null);
var G__14692__14702 = G__14692__14693;

var G__14696__14703 = G__14696__14698;
var G__14692__14704 = G__14692__14702;

while(true){
var vec__14705__14707 = G__14696__14703;
var key__14708 = cljs.core.nth.call(null,vec__14705__14707,0,null);
var f__14709 = cljs.core.nth.call(null,vec__14705__14707,1,null);
var G__14692__14710 = G__14692__14704;

f__14709.call(null,key__14708,this$,oldval,newval);
var temp__3698__auto____14752 = cljs.core.next.call(null,G__14692__14710);

if(cljs.core.truth_(temp__3698__auto____14752))
{var G__14692__14753 = temp__3698__auto____14752;

{
var G__14771 = cljs.core.first.call(null,G__14692__14753);
var G__14772 = G__14692__14753;
G__14696__14703 = G__14771;
G__14692__14704 = G__14772;
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
var this__14754 = this;
return this$.watches = cljs.core.assoc.call(null,this__14754.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14757 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14757.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14761 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14761.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14763 = this;
return this__14763.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14764 = this;
return this__14764.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14765 = this;
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
var atom__14805 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14807 = (function() { 
var G__14810__delegate = function (x,p__14793){
var map__14796__14798 = p__14793;
var map__14796__14800 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14796__14798))?cljs.core.apply.call(null,cljs.core.hash_map,map__14796__14798):map__14796__14798);
var validator__14801 = cljs.core.get.call(null,map__14796__14800,"﷐'validator");
var meta__14802 = cljs.core.get.call(null,map__14796__14800,"﷐'meta");

return (new cljs.core.Atom(x,meta__14802,validator__14801,null));
};
var G__14810 = function (x,var_args){
var p__14793 = null;
if (goog.isDef(var_args)) {
  p__14793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14810__delegate.call(this, x, p__14793);
};
G__14810.cljs$lang$maxFixedArity = 1;
G__14810.cljs$lang$applyTo = (function (arglist__14813){
var x = cljs.core.first(arglist__14813);
var p__14793 = cljs.core.rest(arglist__14813);
return G__14810__delegate.call(this, x, p__14793);
});
return G__14810;
})()
;
atom = function(x,var_args){
var p__14793 = var_args;
switch(arguments.length){
case  1 :
return atom__14805.call(this,x);
default:
return atom__14807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14807.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14828 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14828))
{var validate__14831 = temp__3698__auto____14828;

if(cljs.core.truth_(validate__14831.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14835 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14835,new_value);
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
var swap_BANG___14845 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14846 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14847 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14848 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14849 = (function() { 
var G__14851__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14851 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14851__delegate.call(this, a, f, x, y, z, more);
};
G__14851.cljs$lang$maxFixedArity = 5;
G__14851.cljs$lang$applyTo = (function (arglist__14853){
var a = cljs.core.first(arglist__14853);
var f = cljs.core.first(cljs.core.next(arglist__14853));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14853)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14853))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14853)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14853)))));
return G__14851__delegate.call(this, a, f, x, y, z, more);
});
return G__14851;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14845.call(this,a,f);
case  3 :
return swap_BANG___14846.call(this,a,f,x);
case  4 :
return swap_BANG___14847.call(this,a,f,x,y);
case  5 :
return swap_BANG___14848.call(this,a,f,x,y,z);
default:
return swap_BANG___14849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14849.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14870){
var iref = cljs.core.first(arglist__14870);
var f = cljs.core.first(cljs.core.next(arglist__14870));
var args = cljs.core.rest(cljs.core.next(arglist__14870));
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
var gensym__14888 = (function (){
return gensym.call(null,"G__");
});
var gensym__14889 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14888.call(this);
case  1 :
return gensym__14889.call(this,prefix_string);
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
var this__14898 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14898.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14899 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14899.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14899.state,this__14899.f);
}
return cljs.core.deref.call(null,this__14899.state);
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
delay.cljs$lang$applyTo = (function (arglist__14911){
var body = cljs.core.seq( arglist__14911 );;
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
var map__14918__14919 = options;
var map__14918__14920 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14918__14919))?cljs.core.apply.call(null,cljs.core.hash_map,map__14918__14919):map__14918__14919);
var keywordize_keys__14921 = cljs.core.get.call(null,map__14918__14920,"﷐'keywordize-keys");
var keyfn__14923 = (cljs.core.truth_(keywordize_keys__14921)?cljs.core.keyword:cljs.core.str);
var f__14941 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14940 = (function iter__14933(s__14934){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14934__14938 = s__14934;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14934__14938)))
{var k__14939 = cljs.core.first.call(null,s__14934__14938);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14923.call(null,k__14939),thisfn.call(null,(x[k__14939]))]),iter__14933.call(null,cljs.core.rest.call(null,s__14934__14938)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14940.call(null,cljs.core.js_keys.call(null,x));
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

return f__14941.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14985){
var x = cljs.core.first(arglist__14985);
var options = cljs.core.rest(arglist__14985);
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
var mem__14988 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15001__delegate = function (args){
var temp__3695__auto____14991 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14988),args);

if(cljs.core.truth_(temp__3695__auto____14991))
{var v__14993 = temp__3695__auto____14991;

return v__14993;
} else
{var ret__14995 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14988,cljs.core.assoc,args,ret__14995);
return ret__14995;
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
G__15001.cljs$lang$applyTo = (function (arglist__15006){
var args = cljs.core.seq( arglist__15006 );;
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
var trampoline__15019 = (function (f){
while(true){
var ret__15009 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15009)))
{{
var G__15022 = ret__15009;
f = G__15022;
continue;
}
} else
{return ret__15009;
}
break;
}
});
var trampoline__15020 = (function() { 
var G__15025__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15025 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15025__delegate.call(this, f, args);
};
G__15025.cljs$lang$maxFixedArity = 1;
G__15025.cljs$lang$applyTo = (function (arglist__15026){
var f = cljs.core.first(arglist__15026);
var args = cljs.core.rest(arglist__15026);
return G__15025__delegate.call(this, f, args);
});
return G__15025;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15019.call(this,f);
default:
return trampoline__15020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15020.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15036 = (function (){
return rand.call(null,1);
});
var rand__15037 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15036.call(this);
case  1 :
return rand__15037.call(this,n);
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
var isa_QMARK___15125 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15126 = (function (h,child,parent){
var or__3548__auto____15111 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{var or__3548__auto____15112 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15112))
{return or__3548__auto____15112;
} else
{var and__3546__auto____15114 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15114))
{var and__3546__auto____15117 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15117))
{var and__3546__auto____15119 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15119))
{var ret__15120 = true;
var i__15121 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15122 = cljs.core.not.call(null,ret__15120);

if(cljs.core.truth_(or__3548__auto____15122))
{return or__3548__auto____15122;
} else
{return cljs.core._EQ_.call(null,i__15121,cljs.core.count.call(null,parent));
}
})()))
{return ret__15120;
} else
{{
var G__15138 = isa_QMARK_.call(null,h,child.call(null,i__15121),parent.call(null,i__15121));
var G__15139 = (i__15121 + 1);
ret__15120 = G__15138;
i__15121 = G__15139;
continue;
}
}
break;
}
} else
{return and__3546__auto____15119;
}
} else
{return and__3546__auto____15117;
}
} else
{return and__3546__auto____15114;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15125.call(this,h,child);
case  3 :
return isa_QMARK___15126.call(this,h,child,parent);
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
var parents__15143 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15144 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15143.call(this,h);
case  2 :
return parents__15144.call(this,h,tag);
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
var ancestors__15146 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15147 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15146.call(this,h);
case  2 :
return ancestors__15147.call(this,h,tag);
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
var descendants__15193 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15194 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15193.call(this,h);
case  2 :
return descendants__15194.call(this,h,tag);
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
var derive__15223 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15225 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15213 = "﷐'parents".call(null,h);
var td__15214 = "﷐'descendants".call(null,h);
var ta__15215 = "﷐'ancestors".call(null,h);
var tf__15218 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15221 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15213.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15215.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15215.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15213,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15218.call(null,"﷐'ancestors".call(null,h),tag,td__15214,parent,ta__15215),"﷐'descendants":tf__15218.call(null,"﷐'descendants".call(null,h),parent,ta__15215,tag,td__15214)});
})());

if(cljs.core.truth_(or__3548__auto____15221))
{return or__3548__auto____15221;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15223.call(this,h,tag);
case  3 :
return derive__15225.call(this,h,tag,parent);
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
var underive__15251 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15252 = (function (h,tag,parent){
var parentMap__15247 = "﷐'parents".call(null,h);
var childsParents__15248 = (cljs.core.truth_(parentMap__15247.call(null,tag))?cljs.core.disj.call(null,parentMap__15247.call(null,tag),parent):cljs.core.set([]));
var newParents__15249 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15248))?cljs.core.assoc.call(null,parentMap__15247,tag,childsParents__15248):cljs.core.dissoc.call(null,parentMap__15247,tag));
var deriv_seq__15250 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15201_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15201_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15201_SHARP_),cljs.core.second.call(null,p1__15201_SHARP_)));
}),cljs.core.seq.call(null,newParents__15249)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15247.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15204_SHARP_,p2__15205_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15204_SHARP_,p2__15205_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15250));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15251.call(this,h,tag);
case  3 :
return underive__15252.call(this,h,tag,parent);
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
var xprefs__15280 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15283 = (cljs.core.truth_((function (){var and__3546__auto____15281 = xprefs__15280;

if(cljs.core.truth_(and__3546__auto____15281))
{return xprefs__15280.call(null,y);
} else
{return and__3546__auto____15281;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15283))
{return or__3548__auto____15283;
} else
{var or__3548__auto____15287 = (function (){var ps__15285 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15285) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15285),prefer_table)))
{} else
{}
{
var G__15301 = cljs.core.rest.call(null,ps__15285);
ps__15285 = G__15301;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15287))
{return or__3548__auto____15287;
} else
{var or__3548__auto____15291 = (function (){var ps__15289 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15289) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15289),y,prefer_table)))
{} else
{}
{
var G__15305 = cljs.core.rest.call(null,ps__15289);
ps__15289 = G__15305;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15291))
{return or__3548__auto____15291;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15333 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15333))
{return or__3548__auto____15333;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15360 = cljs.core.reduce.call(null,(function (be,p__15338){
var vec__15340__15341 = p__15338;
var k__15344 = cljs.core.nth.call(null,vec__15340__15341,0,null);
var ___15346 = cljs.core.nth.call(null,vec__15340__15341,1,null);
var e__15347 = vec__15340__15341;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15344)))
{var be2__15353 = (cljs.core.truth_((function (){var or__3548__auto____15351 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15351))
{return or__3548__auto____15351;
} else
{return cljs.core.dominates.call(null,k__15344,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15347:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15353),k__15344,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15344," and ",cljs.core.first.call(null,be2__15353),", and neither is preferred")));
}
return be2__15353;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15360))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15360));
return cljs.core.second.call(null,best_entry__15360);
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
if(cljs.core.truth_((function (){var and__3546__auto____15442 = mf;

if(cljs.core.truth_(and__3546__auto____15442))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15442;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15446 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15446))
{return or__3548__auto____15446;
} else
{var or__3548__auto____15450 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15450))
{return or__3548__auto____15450;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15452 = mf;

if(cljs.core.truth_(and__3546__auto____15452))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15452;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15453 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15453))
{return or__3548__auto____15453;
} else
{var or__3548__auto____15454 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15454))
{return or__3548__auto____15454;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15458 = mf;

if(cljs.core.truth_(and__3546__auto____15458))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15458;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15463 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{var or__3548__auto____15464 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15464))
{return or__3548__auto____15464;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15468 = mf;

if(cljs.core.truth_(and__3546__auto____15468))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15468;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15471 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15471))
{return or__3548__auto____15471;
} else
{var or__3548__auto____15472 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15472))
{return or__3548__auto____15472;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15475 = mf;

if(cljs.core.truth_(and__3546__auto____15475))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15475;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15481 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15481))
{return or__3548__auto____15481;
} else
{var or__3548__auto____15482 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15482))
{return or__3548__auto____15482;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15500 = mf;

if(cljs.core.truth_(and__3546__auto____15500))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15500;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15503 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15503))
{return or__3548__auto____15503;
} else
{var or__3548__auto____15505 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15505))
{return or__3548__auto____15505;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15508 = mf;

if(cljs.core.truth_(and__3546__auto____15508))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15508;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15510 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15510))
{return or__3548__auto____15510;
} else
{var or__3548__auto____15511 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15511))
{return or__3548__auto____15511;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15515 = mf;

if(cljs.core.truth_(and__3546__auto____15515))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15515;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15516 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15516))
{return or__3548__auto____15516;
} else
{var or__3548__auto____15518 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15518))
{return or__3548__auto____15518;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15543 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15544 = cljs.core._get_method.call(null,mf,dispatch_val__15543);

if(cljs.core.truth_(target_fn__15544))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15543)));
}
return cljs.core.apply.call(null,target_fn__15544,args);
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
var this__15558 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15559 = this;
cljs.core.swap_BANG_.call(null,this__15559.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15559.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15559.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15559.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15564 = this;
cljs.core.swap_BANG_.call(null,this__15564.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15564.method_cache,this__15564.method_table,this__15564.cached_hierarchy,this__15564.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15567 = this;
cljs.core.swap_BANG_.call(null,this__15567.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15567.method_cache,this__15567.method_table,this__15567.cached_hierarchy,this__15567.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15604 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15604.cached_hierarchy),cljs.core.deref.call(null,this__15604.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15604.method_cache,this__15604.method_table,this__15604.cached_hierarchy,this__15604.hierarchy);
}
var temp__3695__auto____15606 = cljs.core.deref.call(null,this__15604.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15606))
{var target_fn__15610 = temp__3695__auto____15606;

return target_fn__15610;
} else
{var temp__3695__auto____15611 = cljs.core.find_and_cache_best_method.call(null,this__15604.name,dispatch_val,this__15604.hierarchy,this__15604.method_table,this__15604.prefer_table,this__15604.method_cache,this__15604.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15611))
{var target_fn__15614 = temp__3695__auto____15611;

return target_fn__15614;
} else
{return cljs.core.deref.call(null,this__15604.method_table).call(null,this__15604.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15616 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15616.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15616.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15616.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15616.method_cache,this__15616.method_table,this__15616.cached_hierarchy,this__15616.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15626 = this;
return cljs.core.deref.call(null,this__15626.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15630 = this;
return cljs.core.deref.call(null,this__15630.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15636 = this;
return cljs.core.do_dispatch.call(null,mf,this__15636.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15672__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15672 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15672__delegate.call(this, _, args);
};
G__15672.cljs$lang$maxFixedArity = 1;
G__15672.cljs$lang$applyTo = (function (arglist__15673){
var _ = cljs.core.first(arglist__15673);
var args = cljs.core.rest(arglist__15673);
return G__15672__delegate.call(this, _, args);
});
return G__15672;
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
