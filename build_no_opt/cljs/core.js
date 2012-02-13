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
var or__3548__auto____7269 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
} else
{var or__3548__auto____7270 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
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
var _invoke__7643 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7644 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7392 = this$;

if(cljs.core.truth_(and__3546__auto____7392))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7392;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{var or__3548__auto____7399 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7645 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7403 = this$;

if(cljs.core.truth_(and__3546__auto____7403))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7403;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7646 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7424 = this$;

if(cljs.core.truth_(and__3546__auto____7424))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7424;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7647 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7436 = this$;

if(cljs.core.truth_(and__3546__auto____7436))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7436;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{var or__3548__auto____7444 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7447 = this$;

if(cljs.core.truth_(and__3546__auto____7447))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7447;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7452 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{var or__3548__auto____7454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7458 = this$;

if(cljs.core.truth_(and__3546__auto____7458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7650 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7651 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7479 = this$;

if(cljs.core.truth_(and__3546__auto____7479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7653 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7491 = this$;

if(cljs.core.truth_(and__3546__auto____7491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7654 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7500 = this$;

if(cljs.core.truth_(and__3546__auto____7500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7506 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7655 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7509 = this$;

if(cljs.core.truth_(and__3546__auto____7509))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7509;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7599 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7599))
{return or__3548__auto____7599;
} else
{var or__3548__auto____7601 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7656 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7603 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7603))
{return or__3548__auto____7603;
} else
{var or__3548__auto____7604 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7657 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7605 = this$;

if(cljs.core.truth_(and__3546__auto____7605))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7605;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7606 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
} else
{var or__3548__auto____7607 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7658 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7608 = this$;

if(cljs.core.truth_(and__3546__auto____7608))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7608;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7609 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7609))
{return or__3548__auto____7609;
} else
{var or__3548__auto____7610 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7610))
{return or__3548__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7659 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7612 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{var or__3548__auto____7613 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7613))
{return or__3548__auto____7613;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7660 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7614 = this$;

if(cljs.core.truth_(and__3546__auto____7614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7615 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7615))
{return or__3548__auto____7615;
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
var _invoke__7661 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7618 = this$;

if(cljs.core.truth_(and__3546__auto____7618))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7618;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7662 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7624 = this$;

if(cljs.core.truth_(and__3546__auto____7624))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7624;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7663 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7630 = this$;

if(cljs.core.truth_(and__3546__auto____7630))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7630;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7632 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{var or__3548__auto____7633 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7633))
{return or__3548__auto____7633;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7664 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7636 = this$;

if(cljs.core.truth_(and__3546__auto____7636))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7636;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7638 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7638))
{return or__3548__auto____7638;
} else
{var or__3548__auto____7640 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7640))
{return or__3548__auto____7640;
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
return _invoke__7643.call(this,this$);
case  2 :
return _invoke__7644.call(this,this$,a);
case  3 :
return _invoke__7645.call(this,this$,a,b);
case  4 :
return _invoke__7646.call(this,this$,a,b,c);
case  5 :
return _invoke__7647.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7648.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7650.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7651.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7653.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7654.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7655.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7656.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7657.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7658.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7659.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7660.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7661.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7662.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7663.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7664.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = coll;

if(cljs.core.truth_(and__3546__auto____7745))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7745;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7746 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{var or__3548__auto____7749 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7755 = coll;

if(cljs.core.truth_(and__3546__auto____7755))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7755;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7757 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{var or__3548__auto____7759 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7762 = coll;

if(cljs.core.truth_(and__3546__auto____7762))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7762;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7765 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7765))
{return or__3548__auto____7765;
} else
{var or__3548__auto____7767 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
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
var _nth__7785 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7774 = coll;

if(cljs.core.truth_(and__3546__auto____7774))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7774;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7779 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{var or__3548__auto____7780 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7786 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7782 = coll;

if(cljs.core.truth_(and__3546__auto____7782))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7782;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7784 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
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
return _nth__7785.call(this,coll,n);
case  3 :
return _nth__7786.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7803 = coll;

if(cljs.core.truth_(and__3546__auto____7803))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7803;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7808 = coll;

if(cljs.core.truth_(and__3546__auto____7808))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7808;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7811 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{var or__3548__auto____7813 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
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
var _lookup__7837 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = o;

if(cljs.core.truth_(and__3546__auto____7823))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7823;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7826 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7838 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = o;

if(cljs.core.truth_(and__3546__auto____7828))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7828;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7831 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{var or__3548__auto____7833 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
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
return _lookup__7837.call(this,o,k);
case  3 :
return _lookup__7838.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7845 = coll;

if(cljs.core.truth_(and__3546__auto____7845))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7845;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7846 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
} else
{var or__3548__auto____7847 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7848 = coll;

if(cljs.core.truth_(and__3546__auto____7848))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7848;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7850 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
} else
{var or__3548__auto____7852 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7868 = coll;

if(cljs.core.truth_(and__3546__auto____7868))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7868;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7870 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7870))
{return or__3548__auto____7870;
} else
{var or__3548__auto____7871 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
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
{return (function (){var or__3548__auto____7881 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{var or__3548__auto____7883 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7885 = coll;

if(cljs.core.truth_(and__3546__auto____7885))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7885;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7913 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{var or__3548__auto____7916 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7919 = coll;

if(cljs.core.truth_(and__3546__auto____7919))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7919;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7921 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{var or__3548__auto____7922 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;

if(cljs.core.truth_(and__3546__auto____7930))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7930;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7933 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7933))
{return or__3548__auto____7933;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7941 = o;

if(cljs.core.truth_(and__3546__auto____7941))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7941;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7947 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = o;

if(cljs.core.truth_(and__3546__auto____7985))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7985;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7989 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{var or__3548__auto____7991 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
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
{return (function (){var or__3548__auto____7996 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{var or__3548__auto____7998 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8002 = o;

if(cljs.core.truth_(and__3546__auto____8002))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8002;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8006 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{var or__3548__auto____8008 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
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
var _reduce__8025 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8012 = coll;

if(cljs.core.truth_(and__3546__auto____8012))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8012;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
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
var _reduce__8027 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8019 = coll;

if(cljs.core.truth_(and__3546__auto____8019))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8019;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8021 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{var or__3548__auto____8023 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
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
return _reduce__8025.call(this,coll,f);
case  3 :
return _reduce__8027.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8030 = o;

if(cljs.core.truth_(and__3546__auto____8030))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8030;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8033 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{var or__3548__auto____8034 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8040 = o;

if(cljs.core.truth_(and__3546__auto____8040))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8040;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8045 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
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
{return (function (){var or__3548__auto____8071 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8072 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
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
if(cljs.core.truth_((function (){var and__3546__auto____8076 = o;

if(cljs.core.truth_(and__3546__auto____8076))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8076;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8077 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{var or__3548__auto____8078 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8090 = d;

if(cljs.core.truth_(and__3546__auto____8090))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8090;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8092 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
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
if(cljs.core.truth_((function (){var and__3546__auto____8105 = this$;

if(cljs.core.truth_(and__3546__auto____8105))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8105;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8108 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{var or__3548__auto____8110 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = this$;

if(cljs.core.truth_(and__3546__auto____8113))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8113;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8114 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{var or__3548__auto____8116 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8119 = this$;

if(cljs.core.truth_(and__3546__auto____8119))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8119;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8121 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{var or__3548__auto____8122 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
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
var G__8184 = null;
var G__8184__8185 = (function (_,n){
return null;
});
var G__8184__8186 = (function (_,n,not_found){
return not_found;
});
G__8184 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8184__8185.call(this,_,n);
case  3 :
return G__8184__8186.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8184;
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
var ci_reduce__8255 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8239 = cljs.core._nth.call(null,cicoll,0);
var n__8240 = 1;

while(true){
if(cljs.core.truth_((n__8240 < cljs.core._count.call(null,cicoll))))
{{
var G__8262 = f.call(null,val__8239,cljs.core._nth.call(null,cicoll,n__8240));
var G__8264 = (n__8240 + 1);
val__8239 = G__8262;
n__8240 = G__8264;
continue;
}
} else
{return val__8239;
}
break;
}
}
});
var ci_reduce__8256 = (function (cicoll,f,val){
var val__8241 = val;
var n__8242 = 0;

while(true){
if(cljs.core.truth_((n__8242 < cljs.core._count.call(null,cicoll))))
{{
var G__8266 = f.call(null,val__8241,cljs.core._nth.call(null,cicoll,n__8242));
var G__8267 = (n__8242 + 1);
val__8241 = G__8266;
n__8242 = G__8267;
continue;
}
} else
{return val__8241;
}
break;
}
});
var ci_reduce__8257 = (function (cicoll,f,val,idx){
var val__8247 = val;
var n__8248 = idx;

while(true){
if(cljs.core.truth_((n__8248 < cljs.core._count.call(null,cicoll))))
{{
var G__8268 = f.call(null,val__8247,cljs.core._nth.call(null,cicoll,n__8248));
var G__8269 = (n__8248 + 1);
val__8247 = G__8268;
n__8248 = G__8269;
continue;
}
} else
{return val__8247;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8255.call(this,cicoll,f);
case  3 :
return ci_reduce__8256.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8257.call(this,cicoll,f,val,idx);
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
var this__8275 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8308 = null;
var G__8308__8309 = (function (_,f){
var this__8276 = this;
return cljs.core.ci_reduce.call(null,this__8276.a,f,(this__8276.a[this__8276.i]),(this__8276.i + 1));
});
var G__8308__8310 = (function (_,f,start){
var this__8277 = this;
return cljs.core.ci_reduce.call(null,this__8277.a,f,start,this__8277.i);
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
var this__8279 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8281 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8312 = null;
var G__8312__8313 = (function (coll,n){
var this__8283 = this;
var i__8284 = (n + this__8283.i);

if(cljs.core.truth_((i__8284 < this__8283.a.length)))
{return (this__8283.a[i__8284]);
} else
{return null;
}
});
var G__8312__8314 = (function (coll,n,not_found){
var this__8286 = this;
var i__8287 = (n + this__8286.i);

if(cljs.core.truth_((i__8287 < this__8286.a.length)))
{return (this__8286.a[i__8287]);
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
var this__8289 = this;
return (this__8289.a.length - this__8289.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8291 = this;
return (this__8291.a[this__8291.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8292 = this;
if(cljs.core.truth_(((this__8292.i + 1) < this__8292.a.length)))
{return (new cljs.core.IndexedSeq(this__8292.a,(this__8292.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8303 = this;
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
var G__8320 = null;
var G__8320__8321 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8320__8322 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8320 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8320__8321.call(this,array,f);
case  3 :
return G__8320__8322.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8320;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8324 = null;
var G__8324__8325 = (function (array,k){
return (array[k]);
});
var G__8324__8326 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8324 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8324__8325.call(this,array,k);
case  3 :
return G__8324__8326.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8324;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8328 = null;
var G__8328__8329 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8328__8330 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8328 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8328__8329.call(this,array,n);
case  3 :
return G__8328__8330.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8328;
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
var temp__3698__auto____8342 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8342))
{var s__8343 = temp__3698__auto____8342;

return cljs.core._first.call(null,s__8343);
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
var G__8413 = cljs.core.next.call(null,s);
s = G__8413;
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
var s__8431 = cljs.core.seq.call(null,x);
var n__8433 = 0;

while(true){
if(cljs.core.truth_(s__8431))
{{
var G__8439 = cljs.core.next.call(null,s__8431);
var G__8440 = (n__8433 + 1);
s__8431 = G__8439;
n__8433 = G__8440;
continue;
}
} else
{return n__8433;
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
var conj__8447 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8448 = (function() { 
var G__8451__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8452 = conj.call(null,coll,x);
var G__8453 = cljs.core.first.call(null,xs);
var G__8454 = cljs.core.next.call(null,xs);
coll = G__8452;
x = G__8453;
xs = G__8454;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8451 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8451__delegate.call(this, coll, x, xs);
};
G__8451.cljs$lang$maxFixedArity = 2;
G__8451.cljs$lang$applyTo = (function (arglist__8457){
var coll = cljs.core.first(arglist__8457);
var x = cljs.core.first(cljs.core.next(arglist__8457));
var xs = cljs.core.rest(cljs.core.next(arglist__8457));
return G__8451__delegate.call(this, coll, x, xs);
});
return G__8451;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8447.call(this,coll,x);
default:
return conj__8448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8448.cljs$lang$applyTo;
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
var nth__8467 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8468 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8467.call(this,coll,n);
case  3 :
return nth__8468.call(this,coll,n,not_found);
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
var get__8487 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8488 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8487.call(this,o,k);
case  3 :
return get__8488.call(this,o,k,not_found);
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
var assoc__8495 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8496 = (function() { 
var G__8498__delegate = function (coll,k,v,kvs){
while(true){
var ret__8490 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8501 = ret__8490;
var G__8502 = cljs.core.first.call(null,kvs);
var G__8503 = cljs.core.second.call(null,kvs);
var G__8504 = cljs.core.nnext.call(null,kvs);
coll = G__8501;
k = G__8502;
v = G__8503;
kvs = G__8504;
continue;
}
} else
{return ret__8490;
}
break;
}
};
var G__8498 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8498__delegate.call(this, coll, k, v, kvs);
};
G__8498.cljs$lang$maxFixedArity = 3;
G__8498.cljs$lang$applyTo = (function (arglist__8505){
var coll = cljs.core.first(arglist__8505);
var k = cljs.core.first(cljs.core.next(arglist__8505));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8505)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8505)));
return G__8498__delegate.call(this, coll, k, v, kvs);
});
return G__8498;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8495.call(this,coll,k,v);
default:
return assoc__8496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8496.cljs$lang$applyTo;
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
var dissoc__8507 = (function (coll){
return coll;
});
var dissoc__8508 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8509 = (function() { 
var G__8511__delegate = function (coll,k,ks){
while(true){
var ret__8506 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8512 = ret__8506;
var G__8513 = cljs.core.first.call(null,ks);
var G__8514 = cljs.core.next.call(null,ks);
coll = G__8512;
k = G__8513;
ks = G__8514;
continue;
}
} else
{return ret__8506;
}
break;
}
};
var G__8511 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8511__delegate.call(this, coll, k, ks);
};
G__8511.cljs$lang$maxFixedArity = 2;
G__8511.cljs$lang$applyTo = (function (arglist__8519){
var coll = cljs.core.first(arglist__8519);
var k = cljs.core.first(cljs.core.next(arglist__8519));
var ks = cljs.core.rest(cljs.core.next(arglist__8519));
return G__8511__delegate.call(this, coll, k, ks);
});
return G__8511;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8507.call(this,coll);
case  2 :
return dissoc__8508.call(this,coll,k);
default:
return dissoc__8509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8509.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8528 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8529 = x__445__auto____8528;

if(cljs.core.truth_(and__3546__auto____8529))
{var and__3546__auto____8530 = x__445__auto____8528.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8530))
{return cljs.core.not.call(null,x__445__auto____8528.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8530;
}
} else
{return and__3546__auto____8529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8528);
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
var disj__8571 = (function (coll){
return coll;
});
var disj__8573 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8575 = (function() { 
var G__8578__delegate = function (coll,k,ks){
while(true){
var ret__8533 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8581 = ret__8533;
var G__8582 = cljs.core.first.call(null,ks);
var G__8583 = cljs.core.next.call(null,ks);
coll = G__8581;
k = G__8582;
ks = G__8583;
continue;
}
} else
{return ret__8533;
}
break;
}
};
var G__8578 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8578__delegate.call(this, coll, k, ks);
};
G__8578.cljs$lang$maxFixedArity = 2;
G__8578.cljs$lang$applyTo = (function (arglist__8585){
var coll = cljs.core.first(arglist__8585);
var k = cljs.core.first(cljs.core.next(arglist__8585));
var ks = cljs.core.rest(cljs.core.next(arglist__8585));
return G__8578__delegate.call(this, coll, k, ks);
});
return G__8578;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8571.call(this,coll);
case  2 :
return disj__8573.call(this,coll,k);
default:
return disj__8575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8575.cljs$lang$applyTo;
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
{var x__445__auto____8589 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8590 = x__445__auto____8589;

if(cljs.core.truth_(and__3546__auto____8590))
{var and__3546__auto____8591 = x__445__auto____8589.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8591))
{return cljs.core.not.call(null,x__445__auto____8589.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8591;
}
} else
{return and__3546__auto____8590;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8589);
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
{var x__445__auto____8595 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8596 = x__445__auto____8595;

if(cljs.core.truth_(and__3546__auto____8596))
{var and__3546__auto____8598 = x__445__auto____8595.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8598))
{return cljs.core.not.call(null,x__445__auto____8595.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8598;
}
} else
{return and__3546__auto____8596;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8595);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8604 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8605 = x__445__auto____8604;

if(cljs.core.truth_(and__3546__auto____8605))
{var and__3546__auto____8608 = x__445__auto____8604.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8608))
{return cljs.core.not.call(null,x__445__auto____8604.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8608;
}
} else
{return and__3546__auto____8605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8604);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8612 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8613 = x__445__auto____8612;

if(cljs.core.truth_(and__3546__auto____8613))
{var and__3546__auto____8614 = x__445__auto____8612.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8614))
{return cljs.core.not.call(null,x__445__auto____8612.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8614;
}
} else
{return and__3546__auto____8613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8612);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8626 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8627 = x__445__auto____8626;

if(cljs.core.truth_(and__3546__auto____8627))
{var and__3546__auto____8628 = x__445__auto____8626.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8628))
{return cljs.core.not.call(null,x__445__auto____8626.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8628;
}
} else
{return and__3546__auto____8627;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8626);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8631 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8632 = x__445__auto____8631;

if(cljs.core.truth_(and__3546__auto____8632))
{var and__3546__auto____8633 = x__445__auto____8631.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8633))
{return cljs.core.not.call(null,x__445__auto____8631.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8633;
}
} else
{return and__3546__auto____8632;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8631);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8640 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8641 = x__445__auto____8640;

if(cljs.core.truth_(and__3546__auto____8641))
{var and__3546__auto____8643 = x__445__auto____8640.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8643))
{return cljs.core.not.call(null,x__445__auto____8640.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8643;
}
} else
{return and__3546__auto____8641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8640);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8652 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8652.push(key);
}));
return keys__8652;
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
{var x__445__auto____8657 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8658 = x__445__auto____8657;

if(cljs.core.truth_(and__3546__auto____8658))
{var and__3546__auto____8745 = x__445__auto____8657.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8745))
{return cljs.core.not.call(null,x__445__auto____8657.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8745;
}
} else
{return and__3546__auto____8658;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8657);
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
var and__3546__auto____8761 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8761))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8763 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8763))
{return or__3548__auto____8763;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8761;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8766 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8766))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8766;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8786 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8786))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8786;
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
var and__3546__auto____8797 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8797))
{return (n == n.toFixed());
} else
{return and__3546__auto____8797;
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
if(cljs.core.truth_((function (){var and__3546__auto____8807 = coll;

if(cljs.core.truth_(and__3546__auto____8807))
{var and__3546__auto____8811 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8811))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8811;
}
} else
{return and__3546__auto____8807;
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
var distinct_QMARK___8828 = (function (x){
return true;
});
var distinct_QMARK___8830 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8832 = (function() { 
var G__8846__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8817 = cljs.core.set([y,x]);
var xs__8819 = more;

while(true){
var x__8821 = cljs.core.first.call(null,xs__8819);
var etc__8825 = cljs.core.next.call(null,xs__8819);

if(cljs.core.truth_(xs__8819))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8817,x__8821)))
{return false;
} else
{{
var G__8851 = cljs.core.conj.call(null,s__8817,x__8821);
var G__8852 = etc__8825;
s__8817 = G__8851;
xs__8819 = G__8852;
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
var G__8846 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8846__delegate.call(this, x, y, more);
};
G__8846.cljs$lang$maxFixedArity = 2;
G__8846.cljs$lang$applyTo = (function (arglist__8854){
var x = cljs.core.first(arglist__8854);
var y = cljs.core.first(cljs.core.next(arglist__8854));
var more = cljs.core.rest(cljs.core.next(arglist__8854));
return G__8846__delegate.call(this, x, y, more);
});
return G__8846;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8828.call(this,x);
case  2 :
return distinct_QMARK___8830.call(this,x,y);
default:
return distinct_QMARK___8832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8832.cljs$lang$applyTo;
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
var r__8855 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8855)))
{return r__8855;
} else
{if(cljs.core.truth_(r__8855))
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
var sort__8877 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8878 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8867 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8867,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8867);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8877.call(this,comp);
case  2 :
return sort__8878.call(this,comp,coll);
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
var sort_by__8890 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8891 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8890.call(this,keyfn,comp);
case  3 :
return sort_by__8891.call(this,keyfn,comp,coll);
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
var reduce__8903 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8904 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8903.call(this,f,val);
case  3 :
return reduce__8904.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8951 = (function (f,coll){
var temp__3695__auto____8944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8944))
{var s__8945 = temp__3695__auto____8944;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8945),cljs.core.next.call(null,s__8945));
} else
{return f.call(null);
}
});
var seq_reduce__8952 = (function (f,val,coll){
var val__8947 = val;
var coll__8949 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8949))
{{
var G__8956 = f.call(null,val__8947,cljs.core.first.call(null,coll__8949));
var G__8957 = cljs.core.next.call(null,coll__8949);
val__8947 = G__8956;
coll__8949 = G__8957;
continue;
}
} else
{return val__8947;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8951.call(this,f,val);
case  3 :
return seq_reduce__8952.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8964 = null;
var G__8964__8965 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8964__8966 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8964 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8964__8965.call(this,coll,f);
case  3 :
return G__8964__8966.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8964;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8976 = (function (){
return 0;
});
var _PLUS___8977 = (function (x){
return x;
});
var _PLUS___8979 = (function (x,y){
return (x + y);
});
var _PLUS___8980 = (function() { 
var G__8983__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8983 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8983__delegate.call(this, x, y, more);
};
G__8983.cljs$lang$maxFixedArity = 2;
G__8983.cljs$lang$applyTo = (function (arglist__8984){
var x = cljs.core.first(arglist__8984);
var y = cljs.core.first(cljs.core.next(arglist__8984));
var more = cljs.core.rest(cljs.core.next(arglist__8984));
return G__8983__delegate.call(this, x, y, more);
});
return G__8983;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8976.call(this);
case  1 :
return _PLUS___8977.call(this,x);
case  2 :
return _PLUS___8979.call(this,x,y);
default:
return _PLUS___8980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8980.cljs$lang$applyTo;
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
var ___8990 = (function (x){
return (- x);
});
var ___8991 = (function (x,y){
return (x - y);
});
var ___8992 = (function() { 
var G__8997__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8997 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8997__delegate.call(this, x, y, more);
};
G__8997.cljs$lang$maxFixedArity = 2;
G__8997.cljs$lang$applyTo = (function (arglist__9001){
var x = cljs.core.first(arglist__9001);
var y = cljs.core.first(cljs.core.next(arglist__9001));
var more = cljs.core.rest(cljs.core.next(arglist__9001));
return G__8997__delegate.call(this, x, y, more);
});
return G__8997;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8990.call(this,x);
case  2 :
return ___8991.call(this,x,y);
default:
return ___8992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8992.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9009 = (function (){
return 1;
});
var _STAR___9010 = (function (x){
return x;
});
var _STAR___9011 = (function (x,y){
return (x * y);
});
var _STAR___9012 = (function() { 
var G__9014__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9014 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9014__delegate.call(this, x, y, more);
};
G__9014.cljs$lang$maxFixedArity = 2;
G__9014.cljs$lang$applyTo = (function (arglist__9019){
var x = cljs.core.first(arglist__9019);
var y = cljs.core.first(cljs.core.next(arglist__9019));
var more = cljs.core.rest(cljs.core.next(arglist__9019));
return G__9014__delegate.call(this, x, y, more);
});
return G__9014;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9009.call(this);
case  1 :
return _STAR___9010.call(this,x);
case  2 :
return _STAR___9011.call(this,x,y);
default:
return _STAR___9012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9012.cljs$lang$applyTo;
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
var _SLASH___9029 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9031 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9032 = (function() { 
var G__9034__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9034 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9034__delegate.call(this, x, y, more);
};
G__9034.cljs$lang$maxFixedArity = 2;
G__9034.cljs$lang$applyTo = (function (arglist__9081){
var x = cljs.core.first(arglist__9081);
var y = cljs.core.first(cljs.core.next(arglist__9081));
var more = cljs.core.rest(cljs.core.next(arglist__9081));
return G__9034__delegate.call(this, x, y, more);
});
return G__9034;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9029.call(this,x);
case  2 :
return _SLASH___9031.call(this,x,y);
default:
return _SLASH___9032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9032.cljs$lang$applyTo;
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
var _LT___9090 = (function (x){
return true;
});
var _LT___9091 = (function (x,y){
return (x < y);
});
var _LT___9092 = (function() { 
var G__9094__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9095 = y;
var G__9096 = cljs.core.first.call(null,more);
var G__9097 = cljs.core.next.call(null,more);
x = G__9095;
y = G__9096;
more = G__9097;
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
var G__9094 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9094__delegate.call(this, x, y, more);
};
G__9094.cljs$lang$maxFixedArity = 2;
G__9094.cljs$lang$applyTo = (function (arglist__9098){
var x = cljs.core.first(arglist__9098);
var y = cljs.core.first(cljs.core.next(arglist__9098));
var more = cljs.core.rest(cljs.core.next(arglist__9098));
return G__9094__delegate.call(this, x, y, more);
});
return G__9094;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9090.call(this,x);
case  2 :
return _LT___9091.call(this,x,y);
default:
return _LT___9092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9092.cljs$lang$applyTo;
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
var _LT__EQ___9104 = (function (x){
return true;
});
var _LT__EQ___9105 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9106 = (function() { 
var G__9108__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9109 = y;
var G__9110 = cljs.core.first.call(null,more);
var G__9111 = cljs.core.next.call(null,more);
x = G__9109;
y = G__9110;
more = G__9111;
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
var G__9108 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9108__delegate.call(this, x, y, more);
};
G__9108.cljs$lang$maxFixedArity = 2;
G__9108.cljs$lang$applyTo = (function (arglist__9116){
var x = cljs.core.first(arglist__9116);
var y = cljs.core.first(cljs.core.next(arglist__9116));
var more = cljs.core.rest(cljs.core.next(arglist__9116));
return G__9108__delegate.call(this, x, y, more);
});
return G__9108;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9104.call(this,x);
case  2 :
return _LT__EQ___9105.call(this,x,y);
default:
return _LT__EQ___9106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9106.cljs$lang$applyTo;
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
var _GT___9126 = (function (x){
return true;
});
var _GT___9127 = (function (x,y){
return (x > y);
});
var _GT___9128 = (function() { 
var G__9130__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9133 = y;
var G__9134 = cljs.core.first.call(null,more);
var G__9135 = cljs.core.next.call(null,more);
x = G__9133;
y = G__9134;
more = G__9135;
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
var G__9130 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9130__delegate.call(this, x, y, more);
};
G__9130.cljs$lang$maxFixedArity = 2;
G__9130.cljs$lang$applyTo = (function (arglist__9137){
var x = cljs.core.first(arglist__9137);
var y = cljs.core.first(cljs.core.next(arglist__9137));
var more = cljs.core.rest(cljs.core.next(arglist__9137));
return G__9130__delegate.call(this, x, y, more);
});
return G__9130;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9126.call(this,x);
case  2 :
return _GT___9127.call(this,x,y);
default:
return _GT___9128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9128.cljs$lang$applyTo;
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
var _GT__EQ___9138 = (function (x){
return true;
});
var _GT__EQ___9140 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9141 = (function() { 
var G__9143__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9144 = y;
var G__9158 = cljs.core.first.call(null,more);
var G__9159 = cljs.core.next.call(null,more);
x = G__9144;
y = G__9158;
more = G__9159;
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
var G__9143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9143__delegate.call(this, x, y, more);
};
G__9143.cljs$lang$maxFixedArity = 2;
G__9143.cljs$lang$applyTo = (function (arglist__9162){
var x = cljs.core.first(arglist__9162);
var y = cljs.core.first(cljs.core.next(arglist__9162));
var more = cljs.core.rest(cljs.core.next(arglist__9162));
return G__9143__delegate.call(this, x, y, more);
});
return G__9143;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9138.call(this,x);
case  2 :
return _GT__EQ___9140.call(this,x,y);
default:
return _GT__EQ___9141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9141.cljs$lang$applyTo;
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
var max__9172 = (function (x){
return x;
});
var max__9173 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9174 = (function() { 
var G__9180__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9180 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9180__delegate.call(this, x, y, more);
};
G__9180.cljs$lang$maxFixedArity = 2;
G__9180.cljs$lang$applyTo = (function (arglist__9184){
var x = cljs.core.first(arglist__9184);
var y = cljs.core.first(cljs.core.next(arglist__9184));
var more = cljs.core.rest(cljs.core.next(arglist__9184));
return G__9180__delegate.call(this, x, y, more);
});
return G__9180;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9172.call(this,x);
case  2 :
return max__9173.call(this,x,y);
default:
return max__9174.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9174.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9193 = (function (x){
return x;
});
var min__9194 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9195 = (function() { 
var G__9197__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9197 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9197__delegate.call(this, x, y, more);
};
G__9197.cljs$lang$maxFixedArity = 2;
G__9197.cljs$lang$applyTo = (function (arglist__9201){
var x = cljs.core.first(arglist__9201);
var y = cljs.core.first(cljs.core.next(arglist__9201));
var more = cljs.core.rest(cljs.core.next(arglist__9201));
return G__9197__delegate.call(this, x, y, more);
});
return G__9197;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9193.call(this,x);
case  2 :
return min__9194.call(this,x,y);
default:
return min__9195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9195.cljs$lang$applyTo;
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
var rem__9209 = (n % d);

return cljs.core.fix.call(null,((n - rem__9209) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9212 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9212));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9213 = (function (){
return Math.random.call(null);
});
var rand__9214 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9213.call(this);
case  1 :
return rand__9214.call(this,n);
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
var _EQ__EQ___9277 = (function (x){
return true;
});
var _EQ__EQ___9278 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9279 = (function() { 
var G__9281__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9287 = y;
var G__9288 = cljs.core.first.call(null,more);
var G__9289 = cljs.core.next.call(null,more);
x = G__9287;
y = G__9288;
more = G__9289;
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
var G__9281 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9281__delegate.call(this, x, y, more);
};
G__9281.cljs$lang$maxFixedArity = 2;
G__9281.cljs$lang$applyTo = (function (arglist__9291){
var x = cljs.core.first(arglist__9291);
var y = cljs.core.first(cljs.core.next(arglist__9291));
var more = cljs.core.rest(cljs.core.next(arglist__9291));
return G__9281__delegate.call(this, x, y, more);
});
return G__9281;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9277.call(this,x);
case  2 :
return _EQ__EQ___9278.call(this,x,y);
default:
return _EQ__EQ___9279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9279.cljs$lang$applyTo;
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
var n__9310 = n;
var xs__9311 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9313 = xs__9311;

if(cljs.core.truth_(and__3546__auto____9313))
{return (n__9310 > 0);
} else
{return and__3546__auto____9313;
}
})()))
{{
var G__9319 = (n__9310 - 1);
var G__9320 = cljs.core.next.call(null,xs__9311);
n__9310 = G__9319;
xs__9311 = G__9320;
continue;
}
} else
{return xs__9311;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9372 = null;
var G__9372__9373 = (function (coll,n){
var temp__3695__auto____9365 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9365))
{var xs__9366 = temp__3695__auto____9365;

return cljs.core.first.call(null,xs__9366);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9372__9374 = (function (coll,n,not_found){
var temp__3695__auto____9370 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9370))
{var xs__9371 = temp__3695__auto____9370;

return cljs.core.first.call(null,xs__9371);
} else
{return not_found;
}
});
G__9372 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9372__9373.call(this,coll,n);
case  3 :
return G__9372__9374.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9372;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9396 = (function (){
return "";
});
var str_STAR___9397 = (function (x){
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
var str_STAR___9398 = (function() { 
var G__9405__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9433 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9434 = cljs.core.next.call(null,more);
sb = G__9433;
more = G__9434;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9405 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9405__delegate.call(this, x, ys);
};
G__9405.cljs$lang$maxFixedArity = 1;
G__9405.cljs$lang$applyTo = (function (arglist__9444){
var x = cljs.core.first(arglist__9444);
var ys = cljs.core.rest(arglist__9444);
return G__9405__delegate.call(this, x, ys);
});
return G__9405;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9396.call(this);
case  1 :
return str_STAR___9397.call(this,x);
default:
return str_STAR___9398.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9398.cljs$lang$applyTo;
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
var str__9451 = (function (){
return "";
});
var str__9453 = (function (x){
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
var str__9455 = (function() { 
var G__9464__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9464 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9464__delegate.call(this, x, ys);
};
G__9464.cljs$lang$maxFixedArity = 1;
G__9464.cljs$lang$applyTo = (function (arglist__9466){
var x = cljs.core.first(arglist__9466);
var ys = cljs.core.rest(arglist__9466);
return G__9464__delegate.call(this, x, ys);
});
return G__9464;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9451.call(this);
case  1 :
return str__9453.call(this,x);
default:
return str__9455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9455.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9468 = (function (s,start){
return s.substring(start);
});
var subs__9469 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9468.call(this,s,start);
case  3 :
return subs__9469.call(this,s,start,end);
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
var symbol__9485 = (function (name){
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
var symbol__9486 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9485.call(this,ns);
case  2 :
return symbol__9486.call(this,ns,name);
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
var keyword__9489 = (function (name){
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
var keyword__9490 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9489.call(this,ns);
case  2 :
return keyword__9490.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9508 = cljs.core.seq.call(null,x);
var ys__9510 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9508)))
{return cljs.core.nil_QMARK_.call(null,ys__9510);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9510)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9508),cljs.core.first.call(null,ys__9510))))
{{
var G__9517 = cljs.core.next.call(null,xs__9508);
var G__9518 = cljs.core.next.call(null,ys__9510);
xs__9508 = G__9517;
ys__9510 = G__9518;
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
return cljs.core.reduce.call(null,(function (p1__9525_SHARP_,p2__9526_SHARP_){
return cljs.core.hash_combine.call(null,p1__9525_SHARP_,cljs.core.hash.call(null,p2__9526_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9601__9602 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9601__9602))
{var G__9604__9606 = cljs.core.first.call(null,G__9601__9602);
var vec__9605__9607 = G__9604__9606;
var key_name__9608 = cljs.core.nth.call(null,vec__9605__9607,0,null);
var f__9609 = cljs.core.nth.call(null,vec__9605__9607,1,null);
var G__9601__9610 = G__9601__9602;

var G__9604__9611 = G__9604__9606;
var G__9601__9612 = G__9601__9610;

while(true){
var vec__9613__9614 = G__9604__9611;
var key_name__9615 = cljs.core.nth.call(null,vec__9613__9614,0,null);
var f__9616 = cljs.core.nth.call(null,vec__9613__9614,1,null);
var G__9601__9617 = G__9601__9612;

var str_name__9618 = cljs.core.name.call(null,key_name__9615);

obj[str_name__9618] = f__9616;
var temp__3698__auto____9619 = cljs.core.next.call(null,G__9601__9617);

if(cljs.core.truth_(temp__3698__auto____9619))
{var G__9601__9620 = temp__3698__auto____9619;

{
var G__9621 = cljs.core.first.call(null,G__9601__9620);
var G__9622 = G__9601__9620;
G__9604__9611 = G__9621;
G__9601__9612 = G__9622;
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
var this__9623 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9624 = this;
return (new cljs.core.List(this__9624.meta,o,coll,(this__9624.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9625 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9626 = this;
return this__9626.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9627 = this;
return this__9627.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9628 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9629 = this;
return this__9629.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9630 = this;
return this__9630.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9631 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9632 = this;
return (new cljs.core.List(meta,this__9632.first,this__9632.rest,this__9632.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9637 = this;
return this__9637.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9643 = this;
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
var this__9662 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9668 = this;
return (new cljs.core.List(this__9668.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9670 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9672 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9675 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9676 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9678 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9679 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9683 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9685 = this;
return this__9685.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9687 = this;
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
list.cljs$lang$applyTo = (function (arglist__9694){
var items = cljs.core.seq( arglist__9694 );;
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
var this__9696 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9697 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9699 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9706 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9706.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9709 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9715 = this;
return this__9715.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9717 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9717.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9717.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9720 = this;
return this__9720.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9722 = this;
return (new cljs.core.Cons(meta,this__9722.first,this__9722.rest));
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
var G__9782 = null;
var G__9782__9783 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9782__9784 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9782 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9782__9783.call(this,string,f);
case  3 :
return G__9782__9784.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9782;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9789 = null;
var G__9789__9790 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9789__9791 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9789 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9789__9790.call(this,string,k);
case  3 :
return G__9789__9791.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9789;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9796 = null;
var G__9796__9798 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9796__9799 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9796 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9796__9798.call(this,string,n);
case  3 :
return G__9796__9799.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9796;
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
var G__9860 = null;
var G__9860__9861 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9860__9862 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9860 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9860__9861.call(this,this$,coll);
case  3 :
return G__9860__9862.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9860;
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
var x__9873 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9873;
} else
{lazy_seq.x = x__9873.call(null);
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
var this__9878 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9882 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9883 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9885 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9885.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9886 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9887 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9888 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9889 = this;
return this__9889.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9890 = this;
return (new cljs.core.LazySeq(meta,this__9890.realized,this__9890.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9897 = cljs.core.array.call(null);

var s__9898 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9898)))
{ary__9897.push(cljs.core.first.call(null,s__9898));
{
var G__9902 = cljs.core.next.call(null,s__9898);
s__9898 = G__9902;
continue;
}
} else
{return ary__9897;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9903 = s;
var i__9904 = n;
var sum__9905 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9906 = (i__9904 > 0);

if(cljs.core.truth_(and__3546__auto____9906))
{return cljs.core.seq.call(null,s__9903);
} else
{return and__3546__auto____9906;
}
})()))
{{
var G__9910 = cljs.core.next.call(null,s__9903);
var G__9911 = (i__9904 - 1);
var G__9912 = (sum__9905 + 1);
s__9903 = G__9910;
i__9904 = G__9911;
sum__9905 = G__9912;
continue;
}
} else
{return sum__9905;
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
var concat__9964 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9965 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9966 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9960 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9960))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9960),concat.call(null,cljs.core.rest.call(null,s__9960),y));
} else
{return y;
}
})));
});
var concat__9967 = (function() { 
var G__9973__delegate = function (x,y,zs){
var cat__9963 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9962 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9962))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9962),cat.call(null,cljs.core.rest.call(null,xys__9962),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9963.call(null,concat.call(null,x,y),zs);
};
var G__9973 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9973__delegate.call(this, x, y, zs);
};
G__9973.cljs$lang$maxFixedArity = 2;
G__9973.cljs$lang$applyTo = (function (arglist__9978){
var x = cljs.core.first(arglist__9978);
var y = cljs.core.first(cljs.core.next(arglist__9978));
var zs = cljs.core.rest(cljs.core.next(arglist__9978));
return G__9973__delegate.call(this, x, y, zs);
});
return G__9973;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9964.call(this);
case  1 :
return concat__9965.call(this,x);
case  2 :
return concat__9966.call(this,x,y);
default:
return concat__9967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9967.cljs$lang$applyTo;
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
var list_STAR___9983 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9984 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9985 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9986 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9987 = (function() { 
var G__9989__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9989 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9989__delegate.call(this, a, b, c, d, more);
};
G__9989.cljs$lang$maxFixedArity = 4;
G__9989.cljs$lang$applyTo = (function (arglist__9990){
var a = cljs.core.first(arglist__9990);
var b = cljs.core.first(cljs.core.next(arglist__9990));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9990)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9990))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9990))));
return G__9989__delegate.call(this, a, b, c, d, more);
});
return G__9989;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9983.call(this,a);
case  2 :
return list_STAR___9984.call(this,a,b);
case  3 :
return list_STAR___9985.call(this,a,b,c);
case  4 :
return list_STAR___9986.call(this,a,b,c,d);
default:
return list_STAR___9987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9987.cljs$lang$applyTo;
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
var apply__10215 = (function (f,args){
var fixed_arity__9995 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9995 + 1)) <= fixed_arity__9995)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10216 = (function (f,x,args){
var arglist__9996 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9997 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9996,fixed_arity__9997) <= fixed_arity__9997)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9996));
} else
{return f.cljs$lang$applyTo(arglist__9996);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9996));
}
});
var apply__10217 = (function (f,x,y,args){
var arglist__9998 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9999 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9998,fixed_arity__9999) <= fixed_arity__9999)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9998));
} else
{return f.cljs$lang$applyTo(arglist__9998);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9998));
}
});
var apply__10218 = (function (f,x,y,z,args){
var arglist__10005 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10008 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10005,fixed_arity__10008) <= fixed_arity__10008)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10005));
} else
{return f.cljs$lang$applyTo(arglist__10005);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10005));
}
});
var apply__10219 = (function() { 
var G__10230__delegate = function (f,a,b,c,d,args){
var arglist__10207 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10209 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10207,fixed_arity__10209) <= fixed_arity__10209)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10207));
} else
{return f.cljs$lang$applyTo(arglist__10207);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10207));
}
};
var G__10230 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10230__delegate.call(this, f, a, b, c, d, args);
};
G__10230.cljs$lang$maxFixedArity = 5;
G__10230.cljs$lang$applyTo = (function (arglist__10233){
var f = cljs.core.first(arglist__10233);
var a = cljs.core.first(cljs.core.next(arglist__10233));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10233)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10233))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10233)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10233)))));
return G__10230__delegate.call(this, f, a, b, c, d, args);
});
return G__10230;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10215.call(this,f,a);
case  3 :
return apply__10216.call(this,f,a,b);
case  4 :
return apply__10217.call(this,f,a,b,c);
case  5 :
return apply__10218.call(this,f,a,b,c,d);
default:
return apply__10219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10219.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10239){
var obj = cljs.core.first(arglist__10239);
var f = cljs.core.first(cljs.core.next(arglist__10239));
var args = cljs.core.rest(cljs.core.next(arglist__10239));
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
var not_EQ___10246 = (function (x){
return false;
});
var not_EQ___10247 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10248 = (function() { 
var G__10253__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10253 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10253__delegate.call(this, x, y, more);
};
G__10253.cljs$lang$maxFixedArity = 2;
G__10253.cljs$lang$applyTo = (function (arglist__10255){
var x = cljs.core.first(arglist__10255);
var y = cljs.core.first(cljs.core.next(arglist__10255));
var more = cljs.core.rest(cljs.core.next(arglist__10255));
return G__10253__delegate.call(this, x, y, more);
});
return G__10253;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10246.call(this,x);
case  2 :
return not_EQ___10247.call(this,x,y);
default:
return not_EQ___10248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10248.cljs$lang$applyTo;
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
var G__10260 = pred;
var G__10261 = cljs.core.next.call(null,coll);
pred = G__10260;
coll = G__10261;
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
{var or__3548__auto____10270 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10270))
{return or__3548__auto____10270;
} else
{{
var G__10295 = pred;
var G__10296 = cljs.core.next.call(null,coll);
pred = G__10295;
coll = G__10296;
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
var G__10319 = null;
var G__10319__10320 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10319__10321 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10319__10322 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10319__10323 = (function() { 
var G__10326__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10326 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10326__delegate.call(this, x, y, zs);
};
G__10326.cljs$lang$maxFixedArity = 2;
G__10326.cljs$lang$applyTo = (function (arglist__10327){
var x = cljs.core.first(arglist__10327);
var y = cljs.core.first(cljs.core.next(arglist__10327));
var zs = cljs.core.rest(cljs.core.next(arglist__10327));
return G__10326__delegate.call(this, x, y, zs);
});
return G__10326;
})()
;
G__10319 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10319__10320.call(this);
case  1 :
return G__10319__10321.call(this,x);
case  2 :
return G__10319__10322.call(this,x,y);
default:
return G__10319__10323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10319.cljs$lang$maxFixedArity = 2;
G__10319.cljs$lang$applyTo = G__10319__10323.cljs$lang$applyTo;
return G__10319;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10332__delegate = function (args){
return x;
};
var G__10332 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10332__delegate.call(this, args);
};
G__10332.cljs$lang$maxFixedArity = 0;
G__10332.cljs$lang$applyTo = (function (arglist__10333){
var args = cljs.core.seq( arglist__10333 );;
return G__10332__delegate.call(this, args);
});
return G__10332;
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
var comp__10355 = (function (){
return cljs.core.identity;
});
var comp__10356 = (function (f){
return f;
});
var comp__10357 = (function (f,g){
return (function() {
var G__10368 = null;
var G__10368__10370 = (function (){
return f.call(null,g.call(null));
});
var G__10368__10371 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10368__10372 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10368__10373 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10368__10374 = (function() { 
var G__10380__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10380 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10380__delegate.call(this, x, y, z, args);
};
G__10380.cljs$lang$maxFixedArity = 3;
G__10380.cljs$lang$applyTo = (function (arglist__10382){
var x = cljs.core.first(arglist__10382);
var y = cljs.core.first(cljs.core.next(arglist__10382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10382)));
return G__10380__delegate.call(this, x, y, z, args);
});
return G__10380;
})()
;
G__10368 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10368__10370.call(this);
case  1 :
return G__10368__10371.call(this,x);
case  2 :
return G__10368__10372.call(this,x,y);
case  3 :
return G__10368__10373.call(this,x,y,z);
default:
return G__10368__10374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10368.cljs$lang$maxFixedArity = 3;
G__10368.cljs$lang$applyTo = G__10368__10374.cljs$lang$applyTo;
return G__10368;
})()
});
var comp__10359 = (function (f,g,h){
return (function() {
var G__10383 = null;
var G__10383__10384 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10383__10385 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10383__10386 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10383__10387 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10383__10388 = (function() { 
var G__10391__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10391 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10391__delegate.call(this, x, y, z, args);
};
G__10391.cljs$lang$maxFixedArity = 3;
G__10391.cljs$lang$applyTo = (function (arglist__10392){
var x = cljs.core.first(arglist__10392);
var y = cljs.core.first(cljs.core.next(arglist__10392));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10392)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10392)));
return G__10391__delegate.call(this, x, y, z, args);
});
return G__10391;
})()
;
G__10383 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10383__10384.call(this);
case  1 :
return G__10383__10385.call(this,x);
case  2 :
return G__10383__10386.call(this,x,y);
case  3 :
return G__10383__10387.call(this,x,y,z);
default:
return G__10383__10388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10383.cljs$lang$maxFixedArity = 3;
G__10383.cljs$lang$applyTo = G__10383__10388.cljs$lang$applyTo;
return G__10383;
})()
});
var comp__10360 = (function() { 
var G__10401__delegate = function (f1,f2,f3,fs){
var fs__10347 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10404__delegate = function (args){
var ret__10351 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10347),args);
var fs__10352 = cljs.core.next.call(null,fs__10347);

while(true){
if(cljs.core.truth_(fs__10352))
{{
var G__10405 = cljs.core.first.call(null,fs__10352).call(null,ret__10351);
var G__10407 = cljs.core.next.call(null,fs__10352);
ret__10351 = G__10405;
fs__10352 = G__10407;
continue;
}
} else
{return ret__10351;
}
break;
}
};
var G__10404 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10404__delegate.call(this, args);
};
G__10404.cljs$lang$maxFixedArity = 0;
G__10404.cljs$lang$applyTo = (function (arglist__10408){
var args = cljs.core.seq( arglist__10408 );;
return G__10404__delegate.call(this, args);
});
return G__10404;
})()
;
};
var G__10401 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10401__delegate.call(this, f1, f2, f3, fs);
};
G__10401.cljs$lang$maxFixedArity = 3;
G__10401.cljs$lang$applyTo = (function (arglist__10416){
var f1 = cljs.core.first(arglist__10416);
var f2 = cljs.core.first(cljs.core.next(arglist__10416));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10416)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10416)));
return G__10401__delegate.call(this, f1, f2, f3, fs);
});
return G__10401;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10355.call(this);
case  1 :
return comp__10356.call(this,f1);
case  2 :
return comp__10357.call(this,f1,f2);
case  3 :
return comp__10359.call(this,f1,f2,f3);
default:
return comp__10360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10360.cljs$lang$applyTo;
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
var partial__10444 = (function (f,arg1){
return (function() { 
var G__10450__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10450 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10450__delegate.call(this, args);
};
G__10450.cljs$lang$maxFixedArity = 0;
G__10450.cljs$lang$applyTo = (function (arglist__10452){
var args = cljs.core.seq( arglist__10452 );;
return G__10450__delegate.call(this, args);
});
return G__10450;
})()
;
});
var partial__10445 = (function (f,arg1,arg2){
return (function() { 
var G__10454__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10454 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10454__delegate.call(this, args);
};
G__10454.cljs$lang$maxFixedArity = 0;
G__10454.cljs$lang$applyTo = (function (arglist__10457){
var args = cljs.core.seq( arglist__10457 );;
return G__10454__delegate.call(this, args);
});
return G__10454;
})()
;
});
var partial__10446 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10458__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10458 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10458__delegate.call(this, args);
};
G__10458.cljs$lang$maxFixedArity = 0;
G__10458.cljs$lang$applyTo = (function (arglist__10460){
var args = cljs.core.seq( arglist__10460 );;
return G__10458__delegate.call(this, args);
});
return G__10458;
})()
;
});
var partial__10448 = (function() { 
var G__10462__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10463__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10463 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10463__delegate.call(this, args);
};
G__10463.cljs$lang$maxFixedArity = 0;
G__10463.cljs$lang$applyTo = (function (arglist__10468){
var args = cljs.core.seq( arglist__10468 );;
return G__10463__delegate.call(this, args);
});
return G__10463;
})()
;
};
var G__10462 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10462__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10462.cljs$lang$maxFixedArity = 4;
G__10462.cljs$lang$applyTo = (function (arglist__10470){
var f = cljs.core.first(arglist__10470);
var arg1 = cljs.core.first(cljs.core.next(arglist__10470));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10470)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10470))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10470))));
return G__10462__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10462;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10444.call(this,f,arg1);
case  3 :
return partial__10445.call(this,f,arg1,arg2);
case  4 :
return partial__10446.call(this,f,arg1,arg2,arg3);
default:
return partial__10448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10448.cljs$lang$applyTo;
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
var fnil__10484 = (function (f,x){
return (function() {
var G__10516 = null;
var G__10516__10517 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10516__10518 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10516__10519 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10516__10520 = (function() { 
var G__10525__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10525 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10525__delegate.call(this, a, b, c, ds);
};
G__10525.cljs$lang$maxFixedArity = 3;
G__10525.cljs$lang$applyTo = (function (arglist__10526){
var a = cljs.core.first(arglist__10526);
var b = cljs.core.first(cljs.core.next(arglist__10526));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10526)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10526)));
return G__10525__delegate.call(this, a, b, c, ds);
});
return G__10525;
})()
;
G__10516 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10516__10517.call(this,a);
case  2 :
return G__10516__10518.call(this,a,b);
case  3 :
return G__10516__10519.call(this,a,b,c);
default:
return G__10516__10520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10516.cljs$lang$maxFixedArity = 3;
G__10516.cljs$lang$applyTo = G__10516__10520.cljs$lang$applyTo;
return G__10516;
})()
});
var fnil__10485 = (function (f,x,y){
return (function() {
var G__10527 = null;
var G__10527__10528 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10527__10529 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10527__10530 = (function() { 
var G__10532__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10532 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10532__delegate.call(this, a, b, c, ds);
};
G__10532.cljs$lang$maxFixedArity = 3;
G__10532.cljs$lang$applyTo = (function (arglist__10533){
var a = cljs.core.first(arglist__10533);
var b = cljs.core.first(cljs.core.next(arglist__10533));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10533)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10533)));
return G__10532__delegate.call(this, a, b, c, ds);
});
return G__10532;
})()
;
G__10527 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10527__10528.call(this,a,b);
case  3 :
return G__10527__10529.call(this,a,b,c);
default:
return G__10527__10530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10527.cljs$lang$maxFixedArity = 3;
G__10527.cljs$lang$applyTo = G__10527__10530.cljs$lang$applyTo;
return G__10527;
})()
});
var fnil__10486 = (function (f,x,y,z){
return (function() {
var G__10535 = null;
var G__10535__10536 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10535__10537 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10535__10538 = (function() { 
var G__10542__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10542 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10542__delegate.call(this, a, b, c, ds);
};
G__10542.cljs$lang$maxFixedArity = 3;
G__10542.cljs$lang$applyTo = (function (arglist__10548){
var a = cljs.core.first(arglist__10548);
var b = cljs.core.first(cljs.core.next(arglist__10548));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10548)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10548)));
return G__10542__delegate.call(this, a, b, c, ds);
});
return G__10542;
})()
;
G__10535 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10535__10536.call(this,a,b);
case  3 :
return G__10535__10537.call(this,a,b,c);
default:
return G__10535__10538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10535.cljs$lang$maxFixedArity = 3;
G__10535.cljs$lang$applyTo = G__10535__10538.cljs$lang$applyTo;
return G__10535;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10484.call(this,f,x);
case  3 :
return fnil__10485.call(this,f,x,y);
case  4 :
return fnil__10486.call(this,f,x,y,z);
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
var mapi__10553 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10550 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10550))
{var s__10551 = temp__3698__auto____10550;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10551)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10551)));
} else
{return null;
}
})));
});

return mapi__10553.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10554 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10554))
{var s__10555 = temp__3698__auto____10554;

var x__10556 = f.call(null,cljs.core.first.call(null,s__10555));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10556)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10555));
} else
{return cljs.core.cons.call(null,x__10556,keep.call(null,f,cljs.core.rest.call(null,s__10555)));
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
var keepi__10570 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10565 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10565))
{var s__10566 = temp__3698__auto____10565;

var x__10569 = f.call(null,idx,cljs.core.first.call(null,s__10566));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10569)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10566));
} else
{return cljs.core.cons.call(null,x__10569,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10566)));
}
} else
{return null;
}
})));
});

return keepi__10570.call(null,0,coll);
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
var every_pred__10915 = (function (p){
return (function() {
var ep1 = null;
var ep1__10920 = (function (){
return true;
});
var ep1__10921 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10922 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10598 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10598))
{return p.call(null,y);
} else
{return and__3546__auto____10598;
}
})());
});
var ep1__10923 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10600 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10600))
{var and__3546__auto____10601 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10601))
{return p.call(null,z);
} else
{return and__3546__auto____10601;
}
} else
{return and__3546__auto____10600;
}
})());
});
var ep1__10925 = (function() { 
var G__10933__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10607 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10607))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10607;
}
})());
};
var G__10933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10933__delegate.call(this, x, y, z, args);
};
G__10933.cljs$lang$maxFixedArity = 3;
G__10933.cljs$lang$applyTo = (function (arglist__10935){
var x = cljs.core.first(arglist__10935);
var y = cljs.core.first(cljs.core.next(arglist__10935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10935)));
return G__10933__delegate.call(this, x, y, z, args);
});
return G__10933;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10920.call(this);
case  1 :
return ep1__10921.call(this,x);
case  2 :
return ep1__10922.call(this,x,y);
case  3 :
return ep1__10923.call(this,x,y,z);
default:
return ep1__10925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10925.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10916 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10942 = (function (){
return true;
});
var ep2__10943 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10608 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10608))
{return p2.call(null,x);
} else
{return and__3546__auto____10608;
}
})());
});
var ep2__10944 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10610 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10610))
{var and__3546__auto____10611 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10611))
{var and__3546__auto____10613 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10613))
{return p2.call(null,y);
} else
{return and__3546__auto____10613;
}
} else
{return and__3546__auto____10611;
}
} else
{return and__3546__auto____10610;
}
})());
});
var ep2__10945 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10614 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10614))
{var and__3546__auto____10615 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10615))
{var and__3546__auto____10616 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10616))
{var and__3546__auto____10618 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10618))
{var and__3546__auto____10624 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10624))
{return p2.call(null,z);
} else
{return and__3546__auto____10624;
}
} else
{return and__3546__auto____10618;
}
} else
{return and__3546__auto____10616;
}
} else
{return and__3546__auto____10615;
}
} else
{return and__3546__auto____10614;
}
})());
});
var ep2__10947 = (function() { 
var G__10958__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10627 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10627))
{return cljs.core.every_QMARK_.call(null,(function (p1__10559_SHARP_){
var and__3546__auto____10630 = p1.call(null,p1__10559_SHARP_);

if(cljs.core.truth_(and__3546__auto____10630))
{return p2.call(null,p1__10559_SHARP_);
} else
{return and__3546__auto____10630;
}
}),args);
} else
{return and__3546__auto____10627;
}
})());
};
var G__10958 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10958__delegate.call(this, x, y, z, args);
};
G__10958.cljs$lang$maxFixedArity = 3;
G__10958.cljs$lang$applyTo = (function (arglist__10959){
var x = cljs.core.first(arglist__10959);
var y = cljs.core.first(cljs.core.next(arglist__10959));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10959)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10959)));
return G__10958__delegate.call(this, x, y, z, args);
});
return G__10958;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10942.call(this);
case  1 :
return ep2__10943.call(this,x);
case  2 :
return ep2__10944.call(this,x,y);
case  3 :
return ep2__10945.call(this,x,y,z);
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
var every_pred__10917 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10960 = (function (){
return true;
});
var ep3__10961 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10632 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10632))
{var and__3546__auto____10633 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10633))
{return p3.call(null,x);
} else
{return and__3546__auto____10633;
}
} else
{return and__3546__auto____10632;
}
})());
});
var ep3__10963 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10634 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10634))
{var and__3546__auto____10635 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10635))
{var and__3546__auto____10637 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10637))
{var and__3546__auto____10639 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10639))
{var and__3546__auto____10640 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10640))
{return p3.call(null,y);
} else
{return and__3546__auto____10640;
}
} else
{return and__3546__auto____10639;
}
} else
{return and__3546__auto____10637;
}
} else
{return and__3546__auto____10635;
}
} else
{return and__3546__auto____10634;
}
})());
});
var ep3__10965 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10643 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10643))
{var and__3546__auto____10645 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10645))
{var and__3546__auto____10646 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10646))
{var and__3546__auto____10647 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10647))
{var and__3546__auto____10648 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10648))
{var and__3546__auto____10649 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10649))
{var and__3546__auto____10650 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10650))
{var and__3546__auto____10651 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10651))
{return p3.call(null,z);
} else
{return and__3546__auto____10651;
}
} else
{return and__3546__auto____10650;
}
} else
{return and__3546__auto____10649;
}
} else
{return and__3546__auto____10648;
}
} else
{return and__3546__auto____10647;
}
} else
{return and__3546__auto____10646;
}
} else
{return and__3546__auto____10645;
}
} else
{return and__3546__auto____10643;
}
})());
});
var ep3__10966 = (function() { 
var G__10976__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10780 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10780))
{return cljs.core.every_QMARK_.call(null,(function (p1__10560_SHARP_){
var and__3546__auto____10781 = p1.call(null,p1__10560_SHARP_);

if(cljs.core.truth_(and__3546__auto____10781))
{var and__3546__auto____10900 = p2.call(null,p1__10560_SHARP_);

if(cljs.core.truth_(and__3546__auto____10900))
{return p3.call(null,p1__10560_SHARP_);
} else
{return and__3546__auto____10900;
}
} else
{return and__3546__auto____10781;
}
}),args);
} else
{return and__3546__auto____10780;
}
})());
};
var G__10976 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10976__delegate.call(this, x, y, z, args);
};
G__10976.cljs$lang$maxFixedArity = 3;
G__10976.cljs$lang$applyTo = (function (arglist__10981){
var x = cljs.core.first(arglist__10981);
var y = cljs.core.first(cljs.core.next(arglist__10981));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10981)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10981)));
return G__10976__delegate.call(this, x, y, z, args);
});
return G__10976;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10960.call(this);
case  1 :
return ep3__10961.call(this,x);
case  2 :
return ep3__10963.call(this,x,y);
case  3 :
return ep3__10965.call(this,x,y,z);
default:
return ep3__10966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10966.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10918 = (function() { 
var G__10984__delegate = function (p1,p2,p3,ps){
var ps__10901 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10986 = (function (){
return true;
});
var epn__10987 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10561_SHARP_){
return p1__10561_SHARP_.call(null,x);
}),ps__10901);
});
var epn__10988 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10562_SHARP_){
var and__3546__auto____10902 = p1__10562_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10902))
{return p1__10562_SHARP_.call(null,y);
} else
{return and__3546__auto____10902;
}
}),ps__10901);
});
var epn__10989 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10563_SHARP_){
var and__3546__auto____10910 = p1__10563_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10910))
{var and__3546__auto____10911 = p1__10563_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10911))
{return p1__10563_SHARP_.call(null,z);
} else
{return and__3546__auto____10911;
}
} else
{return and__3546__auto____10910;
}
}),ps__10901);
});
var epn__10990 = (function() { 
var G__11035__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10912 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10912))
{return cljs.core.every_QMARK_.call(null,(function (p1__10564_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10564_SHARP_,args);
}),ps__10901);
} else
{return and__3546__auto____10912;
}
})());
};
var G__11035 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11035__delegate.call(this, x, y, z, args);
};
G__11035.cljs$lang$maxFixedArity = 3;
G__11035.cljs$lang$applyTo = (function (arglist__11037){
var x = cljs.core.first(arglist__11037);
var y = cljs.core.first(cljs.core.next(arglist__11037));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11037)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11037)));
return G__11035__delegate.call(this, x, y, z, args);
});
return G__11035;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10986.call(this);
case  1 :
return epn__10987.call(this,x);
case  2 :
return epn__10988.call(this,x,y);
case  3 :
return epn__10989.call(this,x,y,z);
default:
return epn__10990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10990.cljs$lang$applyTo;
return epn;
})()
};
var G__10984 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10984__delegate.call(this, p1, p2, p3, ps);
};
G__10984.cljs$lang$maxFixedArity = 3;
G__10984.cljs$lang$applyTo = (function (arglist__11041){
var p1 = cljs.core.first(arglist__11041);
var p2 = cljs.core.first(cljs.core.next(arglist__11041));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11041)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11041)));
return G__10984__delegate.call(this, p1, p2, p3, ps);
});
return G__10984;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10915.call(this,p1);
case  2 :
return every_pred__10916.call(this,p1,p2);
case  3 :
return every_pred__10917.call(this,p1,p2,p3);
default:
return every_pred__10918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10918.cljs$lang$applyTo;
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
var some_fn__11238 = (function (p){
return (function() {
var sp1 = null;
var sp1__11250 = (function (){
return null;
});
var sp1__11251 = (function (x){
return p.call(null,x);
});
var sp1__11252 = (function (x,y){
var or__3548__auto____11052 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11052))
{return or__3548__auto____11052;
} else
{return p.call(null,y);
}
});
var sp1__11253 = (function (x,y,z){
var or__3548__auto____11059 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11059))
{return or__3548__auto____11059;
} else
{var or__3548__auto____11061 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11061))
{return or__3548__auto____11061;
} else
{return p.call(null,z);
}
}
});
var sp1__11254 = (function() { 
var G__11257__delegate = function (x,y,z,args){
var or__3548__auto____11069 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11069))
{return or__3548__auto____11069;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11257 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11257__delegate.call(this, x, y, z, args);
};
G__11257.cljs$lang$maxFixedArity = 3;
G__11257.cljs$lang$applyTo = (function (arglist__11267){
var x = cljs.core.first(arglist__11267);
var y = cljs.core.first(cljs.core.next(arglist__11267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11267)));
return G__11257__delegate.call(this, x, y, z, args);
});
return G__11257;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11250.call(this);
case  1 :
return sp1__11251.call(this,x);
case  2 :
return sp1__11252.call(this,x,y);
case  3 :
return sp1__11253.call(this,x,y,z);
default:
return sp1__11254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11254.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11239 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11270 = (function (){
return null;
});
var sp2__11271 = (function (x){
var or__3548__auto____11072 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11072))
{return or__3548__auto____11072;
} else
{return p2.call(null,x);
}
});
var sp2__11272 = (function (x,y){
var or__3548__auto____11076 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11076))
{return or__3548__auto____11076;
} else
{var or__3548__auto____11077 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11077))
{return or__3548__auto____11077;
} else
{var or__3548__auto____11120 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11120))
{return or__3548__auto____11120;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11273 = (function (x,y,z){
var or__3548__auto____11124 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11124))
{return or__3548__auto____11124;
} else
{var or__3548__auto____11126 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11126))
{return or__3548__auto____11126;
} else
{var or__3548__auto____11128 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11128))
{return or__3548__auto____11128;
} else
{var or__3548__auto____11130 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11130))
{return or__3548__auto____11130;
} else
{var or__3548__auto____11132 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11132))
{return or__3548__auto____11132;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11274 = (function() { 
var G__11286__delegate = function (x,y,z,args){
var or__3548__auto____11135 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11135))
{return or__3548__auto____11135;
} else
{return cljs.core.some.call(null,(function (p1__10586_SHARP_){
var or__3548__auto____11143 = p1.call(null,p1__10586_SHARP_);

if(cljs.core.truth_(or__3548__auto____11143))
{return or__3548__auto____11143;
} else
{return p2.call(null,p1__10586_SHARP_);
}
}),args);
}
};
var G__11286 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11286__delegate.call(this, x, y, z, args);
};
G__11286.cljs$lang$maxFixedArity = 3;
G__11286.cljs$lang$applyTo = (function (arglist__11296){
var x = cljs.core.first(arglist__11296);
var y = cljs.core.first(cljs.core.next(arglist__11296));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11296)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11296)));
return G__11286__delegate.call(this, x, y, z, args);
});
return G__11286;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11270.call(this);
case  1 :
return sp2__11271.call(this,x);
case  2 :
return sp2__11272.call(this,x,y);
case  3 :
return sp2__11273.call(this,x,y,z);
default:
return sp2__11274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11274.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11240 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11301 = (function (){
return null;
});
var sp3__11302 = (function (x){
var or__3548__auto____11149 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11149))
{return or__3548__auto____11149;
} else
{var or__3548__auto____11151 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11151))
{return or__3548__auto____11151;
} else
{return p3.call(null,x);
}
}
});
var sp3__11303 = (function (x,y){
var or__3548__auto____11155 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11155))
{return or__3548__auto____11155;
} else
{var or__3548__auto____11158 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11158))
{return or__3548__auto____11158;
} else
{var or__3548__auto____11159 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11159))
{return or__3548__auto____11159;
} else
{var or__3548__auto____11160 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11160))
{return or__3548__auto____11160;
} else
{var or__3548__auto____11168 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11168))
{return or__3548__auto____11168;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11304 = (function (x,y,z){
var or__3548__auto____11177 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11177))
{return or__3548__auto____11177;
} else
{var or__3548__auto____11179 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11179))
{return or__3548__auto____11179;
} else
{var or__3548__auto____11182 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11182))
{return or__3548__auto____11182;
} else
{var or__3548__auto____11184 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11184))
{return or__3548__auto____11184;
} else
{var or__3548__auto____11186 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11186))
{return or__3548__auto____11186;
} else
{var or__3548__auto____11188 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11188))
{return or__3548__auto____11188;
} else
{var or__3548__auto____11189 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11189))
{return or__3548__auto____11189;
} else
{var or__3548__auto____11191 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11191))
{return or__3548__auto____11191;
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
var sp3__11305 = (function() { 
var G__11328__delegate = function (x,y,z,args){
var or__3548__auto____11196 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11196))
{return or__3548__auto____11196;
} else
{return cljs.core.some.call(null,(function (p1__10587_SHARP_){
var or__3548__auto____11198 = p1.call(null,p1__10587_SHARP_);

if(cljs.core.truth_(or__3548__auto____11198))
{return or__3548__auto____11198;
} else
{var or__3548__auto____11202 = p2.call(null,p1__10587_SHARP_);

if(cljs.core.truth_(or__3548__auto____11202))
{return or__3548__auto____11202;
} else
{return p3.call(null,p1__10587_SHARP_);
}
}
}),args);
}
};
var G__11328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11328__delegate.call(this, x, y, z, args);
};
G__11328.cljs$lang$maxFixedArity = 3;
G__11328.cljs$lang$applyTo = (function (arglist__11332){
var x = cljs.core.first(arglist__11332);
var y = cljs.core.first(cljs.core.next(arglist__11332));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11332)));
return G__11328__delegate.call(this, x, y, z, args);
});
return G__11328;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11301.call(this);
case  1 :
return sp3__11302.call(this,x);
case  2 :
return sp3__11303.call(this,x,y);
case  3 :
return sp3__11304.call(this,x,y,z);
default:
return sp3__11305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11305.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11241 = (function() { 
var G__11336__delegate = function (p1,p2,p3,ps){
var ps__11210 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11337 = (function (){
return null;
});
var spn__11338 = (function (x){
return cljs.core.some.call(null,(function (p1__10588_SHARP_){
return p1__10588_SHARP_.call(null,x);
}),ps__11210);
});
var spn__11339 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10590_SHARP_){
var or__3548__auto____11216 = p1__10590_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11216))
{return or__3548__auto____11216;
} else
{return p1__10590_SHARP_.call(null,y);
}
}),ps__11210);
});
var spn__11340 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10594_SHARP_){
var or__3548__auto____11222 = p1__10594_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11222))
{return or__3548__auto____11222;
} else
{var or__3548__auto____11224 = p1__10594_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11224))
{return or__3548__auto____11224;
} else
{return p1__10594_SHARP_.call(null,z);
}
}
}),ps__11210);
});
var spn__11341 = (function() { 
var G__11360__delegate = function (x,y,z,args){
var or__3548__auto____11229 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11229))
{return or__3548__auto____11229;
} else
{return cljs.core.some.call(null,(function (p1__10596_SHARP_){
return cljs.core.some.call(null,p1__10596_SHARP_,args);
}),ps__11210);
}
};
var G__11360 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11360__delegate.call(this, x, y, z, args);
};
G__11360.cljs$lang$maxFixedArity = 3;
G__11360.cljs$lang$applyTo = (function (arglist__11366){
var x = cljs.core.first(arglist__11366);
var y = cljs.core.first(cljs.core.next(arglist__11366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11366)));
return G__11360__delegate.call(this, x, y, z, args);
});
return G__11360;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11337.call(this);
case  1 :
return spn__11338.call(this,x);
case  2 :
return spn__11339.call(this,x,y);
case  3 :
return spn__11340.call(this,x,y,z);
default:
return spn__11341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11341.cljs$lang$applyTo;
return spn;
})()
};
var G__11336 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11336__delegate.call(this, p1, p2, p3, ps);
};
G__11336.cljs$lang$maxFixedArity = 3;
G__11336.cljs$lang$applyTo = (function (arglist__11417){
var p1 = cljs.core.first(arglist__11417);
var p2 = cljs.core.first(cljs.core.next(arglist__11417));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11417)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11417)));
return G__11336__delegate.call(this, p1, p2, p3, ps);
});
return G__11336;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11238.call(this,p1);
case  2 :
return some_fn__11239.call(this,p1,p2);
case  3 :
return some_fn__11240.call(this,p1,p2,p3);
default:
return some_fn__11241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11241.cljs$lang$applyTo;
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
var map__11531 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11434 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11434))
{var s__11438 = temp__3698__auto____11434;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11438)),map.call(null,f,cljs.core.rest.call(null,s__11438)));
} else
{return null;
}
})));
});
var map__11532 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11443 = cljs.core.seq.call(null,c1);
var s2__11444 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11452 = s1__11443;

if(cljs.core.truth_(and__3546__auto____11452))
{return s2__11444;
} else
{return and__3546__auto____11452;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11443),cljs.core.first.call(null,s2__11444)),map.call(null,f,cljs.core.rest.call(null,s1__11443),cljs.core.rest.call(null,s2__11444)));
} else
{return null;
}
})));
});
var map__11533 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11459 = cljs.core.seq.call(null,c1);
var s2__11460 = cljs.core.seq.call(null,c2);
var s3__11461 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11462 = s1__11459;

if(cljs.core.truth_(and__3546__auto____11462))
{var and__3546__auto____11463 = s2__11460;

if(cljs.core.truth_(and__3546__auto____11463))
{return s3__11461;
} else
{return and__3546__auto____11463;
}
} else
{return and__3546__auto____11462;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11459),cljs.core.first.call(null,s2__11460),cljs.core.first.call(null,s3__11461)),map.call(null,f,cljs.core.rest.call(null,s1__11459),cljs.core.rest.call(null,s2__11460),cljs.core.rest.call(null,s3__11461)));
} else
{return null;
}
})));
});
var map__11534 = (function() { 
var G__11563__delegate = function (f,c1,c2,c3,colls){
var step__11519 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11515 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11515)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11515),step.call(null,map.call(null,cljs.core.rest,ss__11515)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11049_SHARP_){
return cljs.core.apply.call(null,f,p1__11049_SHARP_);
}),step__11519.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11563 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11563__delegate.call(this, f, c1, c2, c3, colls);
};
G__11563.cljs$lang$maxFixedArity = 4;
G__11563.cljs$lang$applyTo = (function (arglist__11580){
var f = cljs.core.first(arglist__11580);
var c1 = cljs.core.first(cljs.core.next(arglist__11580));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11580)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11580))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11580))));
return G__11563__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11563;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11531.call(this,f,c1);
case  3 :
return map__11532.call(this,f,c1,c2);
case  4 :
return map__11533.call(this,f,c1,c2,c3);
default:
return map__11534.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11534.cljs$lang$applyTo;
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
{var temp__3698__auto____11595 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11595))
{var s__11597 = temp__3698__auto____11595;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11597),take.call(null,(n - 1),cljs.core.rest.call(null,s__11597)));
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
var step__11612 = (function (n,coll){
while(true){
var s__11610 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11611 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11611))
{return s__11610;
} else
{return and__3546__auto____11611;
}
})()))
{{
var G__11628 = (n - 1);
var G__11629 = cljs.core.rest.call(null,s__11610);
n = G__11628;
coll = G__11629;
continue;
}
} else
{return s__11610;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11612.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11632 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11633 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11632.call(this,n);
case  2 :
return drop_last__11633.call(this,n,s);
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
var s__11643 = cljs.core.seq.call(null,coll);
var lead__11649 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11649))
{{
var G__11651 = cljs.core.next.call(null,s__11643);
var G__11652 = cljs.core.next.call(null,lead__11649);
s__11643 = G__11651;
lead__11649 = G__11652;
continue;
}
} else
{return s__11643;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11667 = (function (pred,coll){
while(true){
var s__11657 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11665 = s__11657;

if(cljs.core.truth_(and__3546__auto____11665))
{return pred.call(null,cljs.core.first.call(null,s__11657));
} else
{return and__3546__auto____11665;
}
})()))
{{
var G__11674 = pred;
var G__11675 = cljs.core.rest.call(null,s__11657);
pred = G__11674;
coll = G__11675;
continue;
}
} else
{return s__11657;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11667.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11681))
{var s__11683 = temp__3698__auto____11681;

return cljs.core.concat.call(null,s__11683,cycle.call(null,s__11683));
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
var repeat__11850 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11851 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11850.call(this,n);
case  2 :
return repeat__11851.call(this,n,x);
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
var repeatedly__11856 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11857 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11856.call(this,n);
case  2 :
return repeatedly__11857.call(this,n,f);
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
var interleave__11871 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11864 = cljs.core.seq.call(null,c1);
var s2__11865 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11866 = s1__11864;

if(cljs.core.truth_(and__3546__auto____11866))
{return s2__11865;
} else
{return and__3546__auto____11866;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11864),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11865),interleave.call(null,cljs.core.rest.call(null,s1__11864),cljs.core.rest.call(null,s2__11865))));
} else
{return null;
}
})));
});
var interleave__11872 = (function() { 
var G__11876__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11870 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11870)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11870),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11870)));
} else
{return null;
}
})));
};
var G__11876 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11876__delegate.call(this, c1, c2, colls);
};
G__11876.cljs$lang$maxFixedArity = 2;
G__11876.cljs$lang$applyTo = (function (arglist__11879){
var c1 = cljs.core.first(arglist__11879);
var c2 = cljs.core.first(cljs.core.next(arglist__11879));
var colls = cljs.core.rest(cljs.core.next(arglist__11879));
return G__11876__delegate.call(this, c1, c2, colls);
});
return G__11876;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11871.call(this,c1,c2);
default:
return interleave__11872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11872.cljs$lang$applyTo;
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
var cat__11889 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11883 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11883))
{var coll__11884 = temp__3695__auto____11883;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11884),cat.call(null,cljs.core.rest.call(null,coll__11884),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11889.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11893 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11894 = (function() { 
var G__11896__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11896 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11896__delegate.call(this, f, coll, colls);
};
G__11896.cljs$lang$maxFixedArity = 2;
G__11896.cljs$lang$applyTo = (function (arglist__11897){
var f = cljs.core.first(arglist__11897);
var coll = cljs.core.first(cljs.core.next(arglist__11897));
var colls = cljs.core.rest(cljs.core.next(arglist__11897));
return G__11896__delegate.call(this, f, coll, colls);
});
return G__11896;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11893.call(this,f,coll);
default:
return mapcat__11894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11894.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11901 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11901))
{var s__11902 = temp__3698__auto____11901;

var f__11904 = cljs.core.first.call(null,s__11902);
var r__11905 = cljs.core.rest.call(null,s__11902);

if(cljs.core.truth_(pred.call(null,f__11904)))
{return cljs.core.cons.call(null,f__11904,filter.call(null,pred,r__11905));
} else
{return filter.call(null,pred,r__11905);
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
var walk__11916 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11916.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11911_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11911_SHARP_));
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
var partition__11943 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11944 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11931 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11931))
{var s__11932 = temp__3698__auto____11931;

var p__11934 = cljs.core.take.call(null,n,s__11932);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11934))))
{return cljs.core.cons.call(null,p__11934,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11932)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11945 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11939))
{var s__11940 = temp__3698__auto____11939;

var p__11941 = cljs.core.take.call(null,n,s__11940);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11941))))
{return cljs.core.cons.call(null,p__11941,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11940)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11941,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11943.call(this,n,step);
case  3 :
return partition__11944.call(this,n,step,pad);
case  4 :
return partition__11945.call(this,n,step,pad,coll);
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
var get_in__11966 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11968 = (function (m,ks,not_found){
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
var G__11972 = sentinel__11960;
var G__11973 = m__11963;
var G__11974 = cljs.core.next.call(null,ks__11962);
sentinel__11960 = G__11972;
m__11961 = G__11973;
ks__11962 = G__11974;
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
return get_in__11966.call(this,m,ks);
case  3 :
return get_in__11968.call(this,m,ks,not_found);
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
var vec__11984__11985 = p__11977;
var k__11986 = cljs.core.nth.call(null,vec__11984__11985,0,null);
var ks__11987 = cljs.core.nthnext.call(null,vec__11984__11985,1);

if(cljs.core.truth_(ks__11987))
{return cljs.core.assoc.call(null,m,k__11986,assoc_in.call(null,cljs.core.get.call(null,m,k__11986),ks__11987,v));
} else
{return cljs.core.assoc.call(null,m,k__11986,v);
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
var update_in__delegate = function (m,p__11992,f,args){
var vec__11994__11995 = p__11992;
var k__11997 = cljs.core.nth.call(null,vec__11994__11995,0,null);
var ks__11998 = cljs.core.nthnext.call(null,vec__11994__11995,1);

if(cljs.core.truth_(ks__11998))
{return cljs.core.assoc.call(null,m,k__11997,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11997),ks__11998,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11997,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11997),args));
}
};
var update_in = function (m,p__11992,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11992, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12006){
var m = cljs.core.first(arglist__12006);
var p__11992 = cljs.core.first(cljs.core.next(arglist__12006));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12006)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12006)));
return update_in__delegate.call(this, m, p__11992, f, args);
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
var this__12021 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12207 = null;
var G__12207__12208 = (function (coll,k){
var this__12022 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12207__12209 = (function (coll,k,not_found){
var this__12024 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12207 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12207__12208.call(this,coll,k);
case  3 :
return G__12207__12209.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12207;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12027 = this;
var new_array__12028 = cljs.core.aclone.call(null,this__12027.array);

(new_array__12028[k] = v);
return (new cljs.core.Vector(this__12027.meta,new_array__12028));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12212 = null;
var G__12212__12213 = (function (coll,k){
var this__12029 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12212__12214 = (function (coll,k,not_found){
var this__12032 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12212 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12212__12213.call(this,coll,k);
case  3 :
return G__12212__12214.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12212;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12035 = this;
var new_array__12039 = cljs.core.aclone.call(null,this__12035.array);

new_array__12039.push(o);
return (new cljs.core.Vector(this__12035.meta,new_array__12039));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12219 = null;
var G__12219__12220 = (function (v,f){
var this__12041 = this;
return cljs.core.ci_reduce.call(null,this__12041.array,f);
});
var G__12219__12221 = (function (v,f,start){
var this__12042 = this;
return cljs.core.ci_reduce.call(null,this__12042.array,f,start);
});
G__12219 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12219__12220.call(this,v,f);
case  3 :
return G__12219__12221.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12219;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12043 = this;
if(cljs.core.truth_((this__12043.array.length > 0)))
{var vector_seq__12047 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12043.array.length)))
{return cljs.core.cons.call(null,(this__12043.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12047.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12048 = this;
return this__12048.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12049 = this;
var count__12050 = this__12049.array.length;

if(cljs.core.truth_((count__12050 > 0)))
{return (this__12049.array[(count__12050 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12179 = this;
if(cljs.core.truth_((this__12179.array.length > 0)))
{var new_array__12184 = cljs.core.aclone.call(null,this__12179.array);

new_array__12184.pop();
return (new cljs.core.Vector(this__12179.meta,new_array__12184));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12186 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12188 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12189 = this;
return (new cljs.core.Vector(meta,this__12189.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12190 = this;
return this__12190.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12262 = null;
var G__12262__12263 = (function (coll,n){
var this__12192 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12193 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12193))
{return (n < this__12192.array.length);
} else
{return and__3546__auto____12193;
}
})()))
{return (this__12192.array[n]);
} else
{return null;
}
});
var G__12262__12264 = (function (coll,n,not_found){
var this__12194 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12195 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12195))
{return (n < this__12194.array.length);
} else
{return and__3546__auto____12195;
}
})()))
{return (this__12194.array[n]);
} else
{return not_found;
}
});
G__12262 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12262__12263.call(this,coll,n);
case  3 :
return G__12262__12264.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12262;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12204 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12204.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12280){
var args = cljs.core.seq( arglist__12280 );;
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
var this__12283 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12455 = null;
var G__12455__12456 = (function (coll,k){
var this__12286 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12455__12457 = (function (coll,k,not_found){
var this__12287 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12455 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12455__12456.call(this,coll,k);
case  3 :
return G__12455__12457.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12455;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12288 = this;
var v_pos__12289 = (this__12288.start + key);

return (new cljs.core.Subvec(this__12288.meta,cljs.core._assoc.call(null,this__12288.v,v_pos__12289,val),this__12288.start,((this__12288.end > (v_pos__12289 + 1)) ? this__12288.end : (v_pos__12289 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12463 = null;
var G__12463__12464 = (function (coll,k){
var this__12293 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12463__12465 = (function (coll,k,not_found){
var this__12294 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12463 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12463__12464.call(this,coll,k);
case  3 :
return G__12463__12465.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12463;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12406 = this;
return (new cljs.core.Subvec(this__12406.meta,cljs.core._assoc_n.call(null,this__12406.v,this__12406.end,o),this__12406.start,(this__12406.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12467 = null;
var G__12467__12468 = (function (coll,f){
var this__12411 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12467__12469 = (function (coll,f,start){
var this__12414 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12467 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12467__12468.call(this,coll,f);
case  3 :
return G__12467__12469.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12467;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12416 = this;
var subvec_seq__12420 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12416.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12416.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12420.call(null,this__12416.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12421 = this;
return (this__12421.end - this__12421.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12422 = this;
return cljs.core._nth.call(null,this__12422.v,(this__12422.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12431 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12431.start,this__12431.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12431.meta,this__12431.v,this__12431.start,(this__12431.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12432 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12442 = this;
return (new cljs.core.Subvec(meta,this__12442.v,this__12442.start,this__12442.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12443 = this;
return this__12443.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12489 = null;
var G__12489__12490 = (function (coll,n){
var this__12444 = this;
return cljs.core._nth.call(null,this__12444.v,(this__12444.start + n));
});
var G__12489__12491 = (function (coll,n,not_found){
var this__12445 = this;
return cljs.core._nth.call(null,this__12445.v,(this__12445.start + n),not_found);
});
G__12489 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12489__12490.call(this,coll,n);
case  3 :
return G__12489__12491.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12489;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12454 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12454.meta);
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
var subvec__12592 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12593 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12592.call(this,v,start);
case  3 :
return subvec__12593.call(this,v,start,end);
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
var this__12623 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12624 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12626 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12631 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12631.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12632 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12639 = this;
return cljs.core._first.call(null,this__12639.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12641 = this;
var temp__3695__auto____12642 = cljs.core.next.call(null,this__12641.front);

if(cljs.core.truth_(temp__3695__auto____12642))
{var f1__12643 = temp__3695__auto____12642;

return (new cljs.core.PersistentQueueSeq(this__12641.meta,f1__12643,this__12641.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12641.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12641.meta,this__12641.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12645 = this;
return this__12645.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12647 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12647.front,this__12647.rear));
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
var this__12676 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12681 = this;
if(cljs.core.truth_(this__12681.front))
{return (new cljs.core.PersistentQueue(this__12681.meta,(this__12681.count + 1),this__12681.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12682 = this__12681.rear;

if(cljs.core.truth_(or__3548__auto____12682))
{return or__3548__auto____12682;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12681.meta,(this__12681.count + 1),cljs.core.conj.call(null,this__12681.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12684 = this;
var rear__12688 = cljs.core.seq.call(null,this__12684.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12689 = this__12684.front;

if(cljs.core.truth_(or__3548__auto____12689))
{return or__3548__auto____12689;
} else
{return rear__12688;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12684.front,cljs.core.seq.call(null,rear__12688)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12690 = this;
return this__12690.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12691 = this;
return cljs.core._first.call(null,this__12691.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12692 = this;
if(cljs.core.truth_(this__12692.front))
{var temp__3695__auto____12693 = cljs.core.next.call(null,this__12692.front);

if(cljs.core.truth_(temp__3695__auto____12693))
{var f1__12694 = temp__3695__auto____12693;

return (new cljs.core.PersistentQueue(this__12692.meta,(this__12692.count - 1),f1__12694,this__12692.rear));
} else
{return (new cljs.core.PersistentQueue(this__12692.meta,(this__12692.count - 1),cljs.core.seq.call(null,this__12692.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12697 = this;
return cljs.core.first.call(null,this__12697.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12698 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12702 = this;
return (new cljs.core.PersistentQueue(meta,this__12702.count,this__12702.front,this__12702.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12704 = this;
return this__12704.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12707 = this;
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
var this__12748 = this;
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
var len__12763 = array.length;

var i__12764 = 0;

while(true){
if(cljs.core.truth_((i__12764 < len__12763)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12764]))))
{return i__12764;
} else
{{
var G__12766 = (i__12764 + incr);
i__12764 = G__12766;
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
var obj_map_contains_key_QMARK___12773 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12774 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12771 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12771))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12771;
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
return obj_map_contains_key_QMARK___12773.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12774.call(this,k,strobj,true_val,false_val);
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
var this__12805 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12869 = null;
var G__12869__12870 = (function (coll,k){
var this__12806 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12869__12871 = (function (coll,k,not_found){
var this__12809 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12809.strobj,(this__12809.strobj[k]),not_found);
});
G__12869 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12869__12870.call(this,coll,k);
case  3 :
return G__12869__12871.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12869;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12814 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12817 = goog.object.clone.call(null,this__12814.strobj);
var overwrite_QMARK___12819 = new_strobj__12817.hasOwnProperty(k);

(new_strobj__12817[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12819))
{return (new cljs.core.ObjMap(this__12814.meta,this__12814.keys,new_strobj__12817));
} else
{var new_keys__12828 = cljs.core.aclone.call(null,this__12814.keys);

new_keys__12828.push(k);
return (new cljs.core.ObjMap(this__12814.meta,new_keys__12828,new_strobj__12817));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12814.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12831 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12831.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12878 = null;
var G__12878__12879 = (function (coll,k){
var this__12837 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12878__12880 = (function (coll,k,not_found){
var this__12838 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12878 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12878__12879.call(this,coll,k);
case  3 :
return G__12878__12880.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12878;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12841 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12844 = this;
if(cljs.core.truth_((this__12844.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12783_SHARP_){
return cljs.core.vector.call(null,p1__12783_SHARP_,(this__12844.strobj[p1__12783_SHARP_]));
}),this__12844.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12851 = this;
return this__12851.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12852 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12853 = this;
return (new cljs.core.ObjMap(meta,this__12853.keys,this__12853.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12855 = this;
return this__12855.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12859 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12859.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12861 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12862 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12862))
{return this__12861.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12862;
}
})()))
{var new_keys__12866 = cljs.core.aclone.call(null,this__12861.keys);
var new_strobj__12867 = goog.object.clone.call(null,this__12861.strobj);

new_keys__12866.splice(cljs.core.scan_array.call(null,1,k,new_keys__12866),1);
cljs.core.js_delete.call(null,new_strobj__12867,k);
return (new cljs.core.ObjMap(this__12861.meta,new_keys__12866,new_strobj__12867));
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
var this__12920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12994 = null;
var G__12994__12995 = (function (coll,k){
var this__12923 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12994__12996 = (function (coll,k,not_found){
var this__12926 = this;
var bucket__12930 = (this__12926.hashobj[cljs.core.hash.call(null,k)]);
var i__12931 = (cljs.core.truth_(bucket__12930)?cljs.core.scan_array.call(null,2,k,bucket__12930):null);

if(cljs.core.truth_(i__12931))
{return (bucket__12930[(i__12931 + 1)]);
} else
{return not_found;
}
});
G__12994 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12994__12995.call(this,coll,k);
case  3 :
return G__12994__12996.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12994;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12936 = this;
var h__12937 = cljs.core.hash.call(null,k);
var bucket__12938 = (this__12936.hashobj[h__12937]);

if(cljs.core.truth_(bucket__12938))
{var new_bucket__12940 = cljs.core.aclone.call(null,bucket__12938);
var new_hashobj__12942 = goog.object.clone.call(null,this__12936.hashobj);

(new_hashobj__12942[h__12937] = new_bucket__12940);
var temp__3695__auto____12944 = cljs.core.scan_array.call(null,2,k,new_bucket__12940);

if(cljs.core.truth_(temp__3695__auto____12944))
{var i__12945 = temp__3695__auto____12944;

(new_bucket__12940[(i__12945 + 1)] = v);
return (new cljs.core.HashMap(this__12936.meta,this__12936.count,new_hashobj__12942));
} else
{new_bucket__12940.push(k,v);
return (new cljs.core.HashMap(this__12936.meta,(this__12936.count + 1),new_hashobj__12942));
}
} else
{var new_hashobj__12949 = goog.object.clone.call(null,this__12936.hashobj);

(new_hashobj__12949[h__12937] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12936.meta,(this__12936.count + 1),new_hashobj__12949));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12953 = this;
var bucket__12956 = (this__12953.hashobj[cljs.core.hash.call(null,k)]);
var i__12957 = (cljs.core.truth_(bucket__12956)?cljs.core.scan_array.call(null,2,k,bucket__12956):null);

if(cljs.core.truth_(i__12957))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13010 = null;
var G__13010__13011 = (function (coll,k){
var this__12959 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13010__13012 = (function (coll,k,not_found){
var this__12962 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13010 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13010__13011.call(this,coll,k);
case  3 :
return G__13010__13012.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13010;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12965 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12969 = this;
if(cljs.core.truth_((this__12969.count > 0)))
{var hashes__12976 = cljs.core.js_keys.call(null,this__12969.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12895_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12969.hashobj[p1__12895_SHARP_])));
}),hashes__12976);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12979 = this;
return this__12979.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12980 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12981 = this;
return (new cljs.core.HashMap(meta,this__12981.count,this__12981.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12986 = this;
return this__12986.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12987 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12987.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12988 = this;
var h__12989 = cljs.core.hash.call(null,k);
var bucket__12990 = (this__12988.hashobj[h__12989]);
var i__12991 = (cljs.core.truth_(bucket__12990)?cljs.core.scan_array.call(null,2,k,bucket__12990):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12991)))
{return coll;
} else
{var new_hashobj__12992 = goog.object.clone.call(null,this__12988.hashobj);

if(cljs.core.truth_((3 > bucket__12990.length)))
{cljs.core.js_delete.call(null,new_hashobj__12992,h__12989);
} else
{var new_bucket__12993 = cljs.core.aclone.call(null,bucket__12990);

new_bucket__12993.splice(i__12991,2);
(new_hashobj__12992[h__12989] = new_bucket__12993);
}
return (new cljs.core.HashMap(this__12988.meta,(this__12988.count - 1),new_hashobj__12992));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13032 = ks.length;

var i__13033 = 0;
var out__13034 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13033 < len__13032)))
{{
var G__13043 = (i__13033 + 1);
var G__13044 = cljs.core.assoc.call(null,out__13034,(ks[i__13033]),(vs[i__13033]));
i__13033 = G__13043;
out__13034 = G__13044;
continue;
}
} else
{return out__13034;
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
var in$__13047 = cljs.core.seq.call(null,keyvals);
var out__13048 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13047))
{{
var G__13051 = cljs.core.nnext.call(null,in$__13047);
var G__13052 = cljs.core.assoc.call(null,out__13048,cljs.core.first.call(null,in$__13047),cljs.core.second.call(null,in$__13047));
in$__13047 = G__13051;
out__13048 = G__13052;
continue;
}
} else
{return out__13048;
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
hash_map.cljs$lang$applyTo = (function (arglist__13053){
var keyvals = cljs.core.seq( arglist__13053 );;
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
{return cljs.core.reduce.call(null,(function (p1__13057_SHARP_,p2__13058_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13066 = p1__13057_SHARP_;

if(cljs.core.truth_(or__3548__auto____13066))
{return or__3548__auto____13066;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13058_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13071){
var maps = cljs.core.seq( arglist__13071 );;
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
{var merge_entry__13077 = (function (m,e){
var k__13074 = cljs.core.first.call(null,e);
var v__13075 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13074)))
{return cljs.core.assoc.call(null,m,k__13074,f.call(null,cljs.core.get.call(null,m,k__13074),v__13075));
} else
{return cljs.core.assoc.call(null,m,k__13074,v__13075);
}
});
var merge2__13081 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13077,(function (){var or__3548__auto____13079 = m1;

if(cljs.core.truth_(or__3548__auto____13079))
{return or__3548__auto____13079;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13081,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13091){
var f = cljs.core.first(arglist__13091);
var maps = cljs.core.rest(arglist__13091);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13103 = cljs.core.ObjMap.fromObject([],{});
var keys__13104 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13104))
{var key__13106 = cljs.core.first.call(null,keys__13104);
var entry__13107 = cljs.core.get.call(null,map,key__13106,"﷐'user/not-found");

{
var G__13114 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13107,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13103,key__13106,entry__13107):ret__13103);
var G__13115 = cljs.core.next.call(null,keys__13104);
ret__13103 = G__13114;
keys__13104 = G__13115;
continue;
}
} else
{return ret__13103;
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
var this__13126 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13162 = null;
var G__13162__13163 = (function (coll,v){
var this__13128 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13162__13164 = (function (coll,v,not_found){
var this__13129 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13129.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13162 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13162__13163.call(this,coll,v);
case  3 :
return G__13162__13164.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13162;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13166 = null;
var G__13166__13167 = (function (coll,k){
var this__13131 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13166__13168 = (function (coll,k,not_found){
var this__13133 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13166 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13166__13167.call(this,coll,k);
case  3 :
return G__13166__13168.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13166;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13136 = this;
return (new cljs.core.Set(this__13136.meta,cljs.core.assoc.call(null,this__13136.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13140 = this;
return cljs.core.keys.call(null,this__13140.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13143 = this;
return (new cljs.core.Set(this__13143.meta,cljs.core.dissoc.call(null,this__13143.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13145 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13148 = this;
var and__3546__auto____13151 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13151))
{var and__3546__auto____13152 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13152))
{return cljs.core.every_QMARK_.call(null,(function (p1__13097_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13097_SHARP_);
}),other);
} else
{return and__3546__auto____13152;
}
} else
{return and__3546__auto____13151;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13155 = this;
return (new cljs.core.Set(meta,this__13155.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13159 = this;
return this__13159.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13161 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13161.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13225 = cljs.core.seq.call(null,coll);
var out__13226 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13225))))
{{
var G__13233 = cljs.core.rest.call(null,in$__13225);
var G__13234 = cljs.core.conj.call(null,out__13226,cljs.core.first.call(null,in$__13225));
in$__13225 = G__13233;
out__13226 = G__13234;
continue;
}
} else
{return out__13226;
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
{var n__13237 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13255 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13255))
{var e__13257 = temp__3695__auto____13255;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13257));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13237,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13224_SHARP_){
var temp__3695__auto____13261 = cljs.core.find.call(null,smap,p1__13224_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13261))
{var e__13263 = temp__3695__auto____13261;

return cljs.core.second.call(null,e__13263);
} else
{return p1__13224_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13332 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13302,seen){
while(true){
var vec__13304__13305 = p__13302;
var f__13306 = cljs.core.nth.call(null,vec__13304__13305,0,null);
var xs__13307 = vec__13304__13305;

var temp__3698__auto____13326 = cljs.core.seq.call(null,xs__13307);

if(cljs.core.truth_(temp__3698__auto____13326))
{var s__13328 = temp__3698__auto____13326;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13306)))
{{
var G__13336 = cljs.core.rest.call(null,s__13328);
var G__13337 = seen;
p__13302 = G__13336;
seen = G__13337;
continue;
}
} else
{return cljs.core.cons.call(null,f__13306,step.call(null,cljs.core.rest.call(null,s__13328),cljs.core.conj.call(null,seen,f__13306)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13332.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13348 = cljs.core.Vector.fromArray([]);
var s__13350 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13350)))
{{
var G__13351 = cljs.core.conj.call(null,ret__13348,cljs.core.first.call(null,s__13350));
var G__13353 = cljs.core.next.call(null,s__13350);
ret__13348 = G__13351;
s__13350 = G__13353;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13348);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13357 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13357))
{return or__3548__auto____13357;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13362 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13362 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13362 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13394 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13394))
{return or__3548__auto____13394;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13395 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13395 > -1)))
{return cljs.core.subs.call(null,x,2,i__13395);
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
var map__13415 = cljs.core.ObjMap.fromObject([],{});
var ks__13416 = cljs.core.seq.call(null,keys);
var vs__13417 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13420 = ks__13416;

if(cljs.core.truth_(and__3546__auto____13420))
{return vs__13417;
} else
{return and__3546__auto____13420;
}
})()))
{{
var G__13425 = cljs.core.assoc.call(null,map__13415,cljs.core.first.call(null,ks__13416),cljs.core.first.call(null,vs__13417));
var G__13426 = cljs.core.next.call(null,ks__13416);
var G__13427 = cljs.core.next.call(null,vs__13417);
map__13415 = G__13425;
ks__13416 = G__13426;
vs__13417 = G__13427;
continue;
}
} else
{return map__13415;
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
var max_key__13557 = (function (k,x){
return x;
});
var max_key__13558 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13559 = (function() { 
var G__13561__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13411_SHARP_,p2__13412_SHARP_){
return max_key.call(null,k,p1__13411_SHARP_,p2__13412_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13561 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13561__delegate.call(this, k, x, y, more);
};
G__13561.cljs$lang$maxFixedArity = 3;
G__13561.cljs$lang$applyTo = (function (arglist__13562){
var k = cljs.core.first(arglist__13562);
var x = cljs.core.first(cljs.core.next(arglist__13562));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13562)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13562)));
return G__13561__delegate.call(this, k, x, y, more);
});
return G__13561;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13557.call(this,k,x);
case  3 :
return max_key__13558.call(this,k,x,y);
default:
return max_key__13559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13559.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13566 = (function (k,x){
return x;
});
var min_key__13567 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13568 = (function() { 
var G__13571__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13431_SHARP_,p2__13432_SHARP_){
return min_key.call(null,k,p1__13431_SHARP_,p2__13432_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13571 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13571__delegate.call(this, k, x, y, more);
};
G__13571.cljs$lang$maxFixedArity = 3;
G__13571.cljs$lang$applyTo = (function (arglist__13574){
var k = cljs.core.first(arglist__13574);
var x = cljs.core.first(cljs.core.next(arglist__13574));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13574)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13574)));
return G__13571__delegate.call(this, k, x, y, more);
});
return G__13571;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13566.call(this,k,x);
case  3 :
return min_key__13567.call(this,k,x,y);
default:
return min_key__13568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13568.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13586 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13587 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13580 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13580))
{var s__13583 = temp__3698__auto____13580;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13583),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13583)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13586.call(this,n,step);
case  3 :
return partition_all__13587.call(this,n,step,coll);
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
var temp__3698__auto____13599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13599))
{var s__13601 = temp__3698__auto____13599;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13601))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13601),take_while.call(null,pred,cljs.core.rest.call(null,s__13601)));
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
var this__13654 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13658 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13740 = null;
var G__13740__13741 = (function (rng,f){
var this__13661 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13740__13742 = (function (rng,f,s){
var this__13663 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13740 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13740__13741.call(this,rng,f);
case  3 :
return G__13740__13742.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13740;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13664 = this;
var comp__13665 = (cljs.core.truth_((this__13664.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13665.call(null,this__13664.start,this__13664.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13666 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13666.end - this__13666.start) / this__13666.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13671 = this;
return this__13671.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13674 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13674.meta,(this__13674.start + this__13674.step),this__13674.end,this__13674.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13675 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13680 = this;
return (new cljs.core.Range(meta,this__13680.start,this__13680.end,this__13680.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13690 = this;
return this__13690.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13745 = null;
var G__13745__13746 = (function (rng,n){
var this__13691 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13691.start + (n * this__13691.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13696 = (this__13691.start > this__13691.end);

if(cljs.core.truth_(and__3546__auto____13696))
{return cljs.core._EQ_.call(null,this__13691.step,0);
} else
{return and__3546__auto____13696;
}
})()))
{return this__13691.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13745__13748 = (function (rng,n,not_found){
var this__13728 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13728.start + (n * this__13728.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13730 = (this__13728.start > this__13728.end);

if(cljs.core.truth_(and__3546__auto____13730))
{return cljs.core._EQ_.call(null,this__13728.step,0);
} else
{return and__3546__auto____13730;
}
})()))
{return this__13728.start;
} else
{return not_found;
}
}
});
G__13745 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13745__13746.call(this,rng,n);
case  3 :
return G__13745__13748.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13745;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13734 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13734.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13763 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13764 = (function (end){
return range.call(null,0,end,1);
});
var range__13765 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13766 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13763.call(this);
case  1 :
return range__13764.call(this,start);
case  2 :
return range__13765.call(this,start,end);
case  3 :
return range__13766.call(this,start,end,step);
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
var temp__3698__auto____13787 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13787))
{var s__13789 = temp__3698__auto____13787;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13789),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13789)));
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
var temp__3698__auto____13836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13836))
{var s__13838 = temp__3698__auto____13836;

var fst__13849 = cljs.core.first.call(null,s__13838);
var fv__13850 = f.call(null,fst__13849);
var run__13851 = cljs.core.cons.call(null,fst__13849,cljs.core.take_while.call(null,(function (p1__13820_SHARP_){
return cljs.core._EQ_.call(null,fv__13850,f.call(null,p1__13820_SHARP_));
}),cljs.core.next.call(null,s__13838)));

return cljs.core.cons.call(null,run__13851,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13851),s__13838))));
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
var reductions__13918 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13904 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13904))
{var s__13906 = temp__3695__auto____13904;

return reductions.call(null,f,cljs.core.first.call(null,s__13906),cljs.core.rest.call(null,s__13906));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13919 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13912 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13912))
{var s__13915 = temp__3698__auto____13912;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13915)),cljs.core.rest.call(null,s__13915));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13918.call(this,f,init);
case  3 :
return reductions__13919.call(this,f,init,coll);
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
var juxt__13960 = (function (f){
return (function() {
var G__13965 = null;
var G__13965__13966 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13965__13967 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13965__13968 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13965__13969 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13965__13970 = (function() { 
var G__13979__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13979 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13979__delegate.call(this, x, y, z, args);
};
G__13979.cljs$lang$maxFixedArity = 3;
G__13979.cljs$lang$applyTo = (function (arglist__13983){
var x = cljs.core.first(arglist__13983);
var y = cljs.core.first(cljs.core.next(arglist__13983));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13983)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13983)));
return G__13979__delegate.call(this, x, y, z, args);
});
return G__13979;
})()
;
G__13965 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13965__13966.call(this);
case  1 :
return G__13965__13967.call(this,x);
case  2 :
return G__13965__13968.call(this,x,y);
case  3 :
return G__13965__13969.call(this,x,y,z);
default:
return G__13965__13970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13965.cljs$lang$maxFixedArity = 3;
G__13965.cljs$lang$applyTo = G__13965__13970.cljs$lang$applyTo;
return G__13965;
})()
});
var juxt__13961 = (function (f,g){
return (function() {
var G__13986 = null;
var G__13986__13987 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13986__13988 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13986__13989 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13986__13990 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13986__13991 = (function() { 
var G__14097__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14097 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14097__delegate.call(this, x, y, z, args);
};
G__14097.cljs$lang$maxFixedArity = 3;
G__14097.cljs$lang$applyTo = (function (arglist__14099){
var x = cljs.core.first(arglist__14099);
var y = cljs.core.first(cljs.core.next(arglist__14099));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14099)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14099)));
return G__14097__delegate.call(this, x, y, z, args);
});
return G__14097;
})()
;
G__13986 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13986__13987.call(this);
case  1 :
return G__13986__13988.call(this,x);
case  2 :
return G__13986__13989.call(this,x,y);
case  3 :
return G__13986__13990.call(this,x,y,z);
default:
return G__13986__13991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13986.cljs$lang$maxFixedArity = 3;
G__13986.cljs$lang$applyTo = G__13986__13991.cljs$lang$applyTo;
return G__13986;
})()
});
var juxt__13962 = (function (f,g,h){
return (function() {
var G__14102 = null;
var G__14102__14103 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14102__14104 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14102__14105 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14102__14106 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14102__14108 = (function() { 
var G__14165__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14165__delegate.call(this, x, y, z, args);
};
G__14165.cljs$lang$maxFixedArity = 3;
G__14165.cljs$lang$applyTo = (function (arglist__14168){
var x = cljs.core.first(arglist__14168);
var y = cljs.core.first(cljs.core.next(arglist__14168));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14168)));
return G__14165__delegate.call(this, x, y, z, args);
});
return G__14165;
})()
;
G__14102 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14102__14103.call(this);
case  1 :
return G__14102__14104.call(this,x);
case  2 :
return G__14102__14105.call(this,x,y);
case  3 :
return G__14102__14106.call(this,x,y,z);
default:
return G__14102__14108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14102.cljs$lang$maxFixedArity = 3;
G__14102.cljs$lang$applyTo = G__14102__14108.cljs$lang$applyTo;
return G__14102;
})()
});
var juxt__13963 = (function() { 
var G__14177__delegate = function (f,g,h,fs){
var fs__13948 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14183 = null;
var G__14183__14184 = (function (){
return cljs.core.reduce.call(null,(function (p1__13884_SHARP_,p2__13887_SHARP_){
return cljs.core.conj.call(null,p1__13884_SHARP_,p2__13887_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13948);
});
var G__14183__14185 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13888_SHARP_,p2__13889_SHARP_){
return cljs.core.conj.call(null,p1__13888_SHARP_,p2__13889_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13948);
});
var G__14183__14186 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13891_SHARP_,p2__13892_SHARP_){
return cljs.core.conj.call(null,p1__13891_SHARP_,p2__13892_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13948);
});
var G__14183__14187 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13894_SHARP_,p2__13895_SHARP_){
return cljs.core.conj.call(null,p1__13894_SHARP_,p2__13895_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13948);
});
var G__14183__14188 = (function() { 
var G__14201__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13899_SHARP_,p2__13900_SHARP_){
return cljs.core.conj.call(null,p1__13899_SHARP_,cljs.core.apply.call(null,p2__13900_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13948);
};
var G__14201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14201__delegate.call(this, x, y, z, args);
};
G__14201.cljs$lang$maxFixedArity = 3;
G__14201.cljs$lang$applyTo = (function (arglist__14207){
var x = cljs.core.first(arglist__14207);
var y = cljs.core.first(cljs.core.next(arglist__14207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14207)));
return G__14201__delegate.call(this, x, y, z, args);
});
return G__14201;
})()
;
G__14183 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14183__14184.call(this);
case  1 :
return G__14183__14185.call(this,x);
case  2 :
return G__14183__14186.call(this,x,y);
case  3 :
return G__14183__14187.call(this,x,y,z);
default:
return G__14183__14188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14183.cljs$lang$maxFixedArity = 3;
G__14183.cljs$lang$applyTo = G__14183__14188.cljs$lang$applyTo;
return G__14183;
})()
};
var G__14177 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14177__delegate.call(this, f, g, h, fs);
};
G__14177.cljs$lang$maxFixedArity = 3;
G__14177.cljs$lang$applyTo = (function (arglist__14216){
var f = cljs.core.first(arglist__14216);
var g = cljs.core.first(cljs.core.next(arglist__14216));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14216)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14216)));
return G__14177__delegate.call(this, f, g, h, fs);
});
return G__14177;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13960.call(this,f);
case  2 :
return juxt__13961.call(this,f,g);
case  3 :
return juxt__13962.call(this,f,g,h);
default:
return juxt__13963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13963.cljs$lang$applyTo;
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
var G__14237 = cljs.core.next.call(null,coll);
coll = G__14237;
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
if(cljs.core.truth_((function (){var and__3546__auto____14226 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14226))
{return (n > 0);
} else
{return and__3546__auto____14226;
}
})()))
{{
var G__14239 = (n - 1);
var G__14240 = cljs.core.next.call(null,coll);
n = G__14239;
coll = G__14240;
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
var doall__14249 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14250 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14249.call(this,n);
case  2 :
return doall__14250.call(this,n,coll);
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
var matches__14258 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14258),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14258),1)))
{return cljs.core.first.call(null,matches__14258);
} else
{return cljs.core.vec.call(null,matches__14258);
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
var matches__14270 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14270)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14270),1)))
{return cljs.core.first.call(null,matches__14270);
} else
{return cljs.core.vec.call(null,matches__14270);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14274 = cljs.core.re_find.call(null,re,s);
var match_idx__14277 = s.search(re);
var match_str__14280 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14274))?cljs.core.first.call(null,match_data__14274):match_data__14274);
var post_match__14281 = cljs.core.subs.call(null,s,(match_idx__14277 + cljs.core.count.call(null,match_str__14280)));

if(cljs.core.truth_(match_data__14274))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14274,re_seq.call(null,re,post_match__14281));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14283_SHARP_){
return print_one.call(null,p1__14283_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14294 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14294))
{var and__3546__auto____14299 = (function (){var x__445__auto____14296 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14297 = x__445__auto____14296;

if(cljs.core.truth_(and__3546__auto____14297))
{var and__3546__auto____14298 = x__445__auto____14296.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14298))
{return cljs.core.not.call(null,x__445__auto____14296.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14298;
}
} else
{return and__3546__auto____14297;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14296);
}
})();

if(cljs.core.truth_(and__3546__auto____14299))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14299;
}
} else
{return and__3546__auto____14294;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14302 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14303 = x__445__auto____14302;

if(cljs.core.truth_(and__3546__auto____14303))
{var and__3546__auto____14304 = x__445__auto____14302.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14304))
{return cljs.core.not.call(null,x__445__auto____14302.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14304;
}
} else
{return and__3546__auto____14303;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14302);
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
var first_obj__14329 = cljs.core.first.call(null,objs);
var sb__14330 = (new goog.string.StringBuffer());

var G__14331__14332 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14331__14332))
{var obj__14336 = cljs.core.first.call(null,G__14331__14332);
var G__14331__14337 = G__14331__14332;

while(true){
if(cljs.core.truth_((obj__14336 === first_obj__14329)))
{} else
{sb__14330.append(" ");
}
var G__14338__14340 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14336,opts));

if(cljs.core.truth_(G__14338__14340))
{var string__14341 = cljs.core.first.call(null,G__14338__14340);
var G__14338__14342 = G__14338__14340;

while(true){
sb__14330.append(string__14341);
var temp__3698__auto____14343 = cljs.core.next.call(null,G__14338__14342);

if(cljs.core.truth_(temp__3698__auto____14343))
{var G__14338__14344 = temp__3698__auto____14343;

{
var G__14348 = cljs.core.first.call(null,G__14338__14344);
var G__14349 = G__14338__14344;
string__14341 = G__14348;
G__14338__14342 = G__14349;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14346 = cljs.core.next.call(null,G__14331__14337);

if(cljs.core.truth_(temp__3698__auto____14346))
{var G__14331__14347 = temp__3698__auto____14346;

{
var G__14350 = cljs.core.first.call(null,G__14331__14347);
var G__14351 = G__14331__14347;
obj__14336 = G__14350;
G__14331__14337 = G__14351;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14330);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14355 = cljs.core.first.call(null,objs);

var G__14358__14360 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14358__14360))
{var obj__14363 = cljs.core.first.call(null,G__14358__14360);
var G__14358__14364 = G__14358__14360;

while(true){
if(cljs.core.truth_((obj__14363 === first_obj__14355)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14367__14368 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14363,opts));

if(cljs.core.truth_(G__14367__14368))
{var string__14371 = cljs.core.first.call(null,G__14367__14368);
var G__14367__14373 = G__14367__14368;

while(true){
cljs.core.string_print.call(null,string__14371);
var temp__3698__auto____14376 = cljs.core.next.call(null,G__14367__14373);

if(cljs.core.truth_(temp__3698__auto____14376))
{var G__14367__14378 = temp__3698__auto____14376;

{
var G__14394 = cljs.core.first.call(null,G__14367__14378);
var G__14395 = G__14367__14378;
string__14371 = G__14394;
G__14367__14373 = G__14395;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14380 = cljs.core.next.call(null,G__14358__14364);

if(cljs.core.truth_(temp__3698__auto____14380))
{var G__14358__14381 = temp__3698__auto____14380;

{
var G__14397 = cljs.core.first.call(null,G__14358__14381);
var G__14398 = G__14358__14381;
obj__14363 = G__14397;
G__14358__14364 = G__14398;
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
pr_str.cljs$lang$applyTo = (function (arglist__14448){
var objs = cljs.core.seq( arglist__14448 );;
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
pr.cljs$lang$applyTo = (function (arglist__14459){
var objs = cljs.core.seq( arglist__14459 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14474){
var objs = cljs.core.seq( arglist__14474 );;
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
println.cljs$lang$applyTo = (function (arglist__14480){
var objs = cljs.core.seq( arglist__14480 );;
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
prn.cljs$lang$applyTo = (function (arglist__14488){
var objs = cljs.core.seq( arglist__14488 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14494 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14494,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14499 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14499))
{var nspc__14503 = temp__3698__auto____14499;

return cljs.core.str.call(null,nspc__14503,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14504 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14504))
{var nspc__14505 = temp__3698__auto____14504;

return cljs.core.str.call(null,nspc__14505,"/");
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
var pr_pair__14558 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14558,"{",", ","}",opts,coll);
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
var this__14597 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14601 = this;
var G__14603__14605 = cljs.core.seq.call(null,this__14601.watches);

if(cljs.core.truth_(G__14603__14605))
{var G__14607__14609 = cljs.core.first.call(null,G__14603__14605);
var vec__14608__14610 = G__14607__14609;
var key__14611 = cljs.core.nth.call(null,vec__14608__14610,0,null);
var f__14612 = cljs.core.nth.call(null,vec__14608__14610,1,null);
var G__14603__14613 = G__14603__14605;

var G__14607__14614 = G__14607__14609;
var G__14603__14615 = G__14603__14613;

while(true){
var vec__14616__14617 = G__14607__14614;
var key__14619 = cljs.core.nth.call(null,vec__14616__14617,0,null);
var f__14621 = cljs.core.nth.call(null,vec__14616__14617,1,null);
var G__14603__14623 = G__14603__14615;

f__14621.call(null,key__14619,this$,oldval,newval);
var temp__3698__auto____14624 = cljs.core.next.call(null,G__14603__14623);

if(cljs.core.truth_(temp__3698__auto____14624))
{var G__14603__14627 = temp__3698__auto____14624;

{
var G__14659 = cljs.core.first.call(null,G__14603__14627);
var G__14660 = G__14603__14627;
G__14607__14614 = G__14659;
G__14603__14615 = G__14660;
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
var this__14628 = this;
return this$.watches = cljs.core.assoc.call(null,this__14628.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14633 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14633.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14637 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14637.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14640 = this;
return this__14640.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14643 = this;
return this__14643.state;
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
var atom__14676 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14677 = (function() { 
var G__14679__delegate = function (x,p__14666){
var map__14667__14669 = p__14666;
var map__14667__14671 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14667__14669))?cljs.core.apply.call(null,cljs.core.hash_map,map__14667__14669):map__14667__14669);
var validator__14672 = cljs.core.get.call(null,map__14667__14671,"﷐'validator");
var meta__14673 = cljs.core.get.call(null,map__14667__14671,"﷐'meta");

return (new cljs.core.Atom(x,meta__14673,validator__14672,null));
};
var G__14679 = function (x,var_args){
var p__14666 = null;
if (goog.isDef(var_args)) {
  p__14666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14679__delegate.call(this, x, p__14666);
};
G__14679.cljs$lang$maxFixedArity = 1;
G__14679.cljs$lang$applyTo = (function (arglist__14682){
var x = cljs.core.first(arglist__14682);
var p__14666 = cljs.core.rest(arglist__14682);
return G__14679__delegate.call(this, x, p__14666);
});
return G__14679;
})()
;
atom = function(x,var_args){
var p__14666 = var_args;
switch(arguments.length){
case  1 :
return atom__14676.call(this,x);
default:
return atom__14677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14677.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14685 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14685))
{var validate__14686 = temp__3698__auto____14685;

if(cljs.core.truth_(validate__14686.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14687 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14687,new_value);
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
var swap_BANG___14715 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14716 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14717 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14718 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14719 = (function() { 
var G__14725__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14725 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14725__delegate.call(this, a, f, x, y, z, more);
};
G__14725.cljs$lang$maxFixedArity = 5;
G__14725.cljs$lang$applyTo = (function (arglist__14727){
var a = cljs.core.first(arglist__14727);
var f = cljs.core.first(cljs.core.next(arglist__14727));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14727)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14727))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14727)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14727)))));
return G__14725__delegate.call(this, a, f, x, y, z, more);
});
return G__14725;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14715.call(this,a,f);
case  3 :
return swap_BANG___14716.call(this,a,f,x);
case  4 :
return swap_BANG___14717.call(this,a,f,x,y);
case  5 :
return swap_BANG___14718.call(this,a,f,x,y,z);
default:
return swap_BANG___14719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14719.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14739){
var iref = cljs.core.first(arglist__14739);
var f = cljs.core.first(cljs.core.next(arglist__14739));
var args = cljs.core.rest(cljs.core.next(arglist__14739));
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
var gensym__14777 = (function (){
return gensym.call(null,"G__");
});
var gensym__14778 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14777.call(this);
case  1 :
return gensym__14778.call(this,prefix_string);
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
var this__14792 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14792.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14793 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14793.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14793.state,this__14793.f);
}
return cljs.core.deref.call(null,this__14793.state);
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
delay.cljs$lang$applyTo = (function (arglist__14810){
var body = cljs.core.seq( arglist__14810 );;
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
var map__14814__14816 = options;
var map__14814__14818 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14814__14816))?cljs.core.apply.call(null,cljs.core.hash_map,map__14814__14816):map__14814__14816);
var keywordize_keys__14825 = cljs.core.get.call(null,map__14814__14818,"﷐'keywordize-keys");
var keyfn__14827 = (cljs.core.truth_(keywordize_keys__14825)?cljs.core.keyword:cljs.core.str);
var f__14835 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14834 = (function iter__14829(s__14830){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14830__14832 = s__14830;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14830__14832)))
{var k__14833 = cljs.core.first.call(null,s__14830__14832);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14827.call(null,k__14833),thisfn.call(null,(x[k__14833]))]),iter__14829.call(null,cljs.core.rest.call(null,s__14830__14832)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14834.call(null,cljs.core.js_keys.call(null,x));
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

return f__14835.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14840){
var x = cljs.core.first(arglist__14840);
var options = cljs.core.rest(arglist__14840);
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
var mem__14847 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14858__delegate = function (args){
var temp__3695__auto____14850 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14847),args);

if(cljs.core.truth_(temp__3695__auto____14850))
{var v__14851 = temp__3695__auto____14850;

return v__14851;
} else
{var ret__14854 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14847,cljs.core.assoc,args,ret__14854);
return ret__14854;
}
};
var G__14858 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14858__delegate.call(this, args);
};
G__14858.cljs$lang$maxFixedArity = 0;
G__14858.cljs$lang$applyTo = (function (arglist__14860){
var args = cljs.core.seq( arglist__14860 );;
return G__14858__delegate.call(this, args);
});
return G__14858;
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
var ret__14861 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14861)))
{{
var G__14871 = ret__14861;
f = G__14871;
continue;
}
} else
{return ret__14861;
}
break;
}
});
var trampoline__14869 = (function() { 
var G__14873__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14873 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14873__delegate.call(this, f, args);
};
G__14873.cljs$lang$maxFixedArity = 1;
G__14873.cljs$lang$applyTo = (function (arglist__14876){
var f = cljs.core.first(arglist__14876);
var args = cljs.core.rest(arglist__14876);
return G__14873__delegate.call(this, f, args);
});
return G__14873;
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
var rand__14880 = (function (){
return rand.call(null,1);
});
var rand__14881 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14880.call(this);
case  1 :
return rand__14881.call(this,n);
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
var k__14987 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14987,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14987,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15020 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15021 = (function (h,child,parent){
var or__3548__auto____15002 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15002))
{return or__3548__auto____15002;
} else
{var or__3548__auto____15006 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15006))
{return or__3548__auto____15006;
} else
{var and__3546__auto____15008 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15008))
{var and__3546__auto____15009 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15009))
{var and__3546__auto____15013 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15013))
{var ret__15015 = true;
var i__15016 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15018 = cljs.core.not.call(null,ret__15015);

if(cljs.core.truth_(or__3548__auto____15018))
{return or__3548__auto____15018;
} else
{return cljs.core._EQ_.call(null,i__15016,cljs.core.count.call(null,parent));
}
})()))
{return ret__15015;
} else
{{
var G__15028 = isa_QMARK_.call(null,h,child.call(null,i__15016),parent.call(null,i__15016));
var G__15029 = (i__15016 + 1);
ret__15015 = G__15028;
i__15016 = G__15029;
continue;
}
}
break;
}
} else
{return and__3546__auto____15013;
}
} else
{return and__3546__auto____15009;
}
} else
{return and__3546__auto____15008;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15020.call(this,h,child);
case  3 :
return isa_QMARK___15021.call(this,h,child,parent);
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
var parents__15041 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15042 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15041.call(this,h);
case  2 :
return parents__15042.call(this,h,tag);
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
var ancestors__15056 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15057 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15056.call(this,h);
case  2 :
return ancestors__15057.call(this,h,tag);
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
var descendants__15066 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15067 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15066.call(this,h);
case  2 :
return descendants__15067.call(this,h,tag);
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
var derive__15112 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15114 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15100 = "﷐'parents".call(null,h);
var td__15101 = "﷐'descendants".call(null,h);
var ta__15102 = "﷐'ancestors".call(null,h);
var tf__15104 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15106 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15100.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15102.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15102.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15100,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15104.call(null,"﷐'ancestors".call(null,h),tag,td__15101,parent,ta__15102),"﷐'descendants":tf__15104.call(null,"﷐'descendants".call(null,h),parent,ta__15102,tag,td__15101)});
})());

if(cljs.core.truth_(or__3548__auto____15106))
{return or__3548__auto____15106;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15112.call(this,h,tag);
case  3 :
return derive__15114.call(this,h,tag,parent);
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
var underive__15146 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15147 = (function (h,tag,parent){
var parentMap__15133 = "﷐'parents".call(null,h);
var childsParents__15134 = (cljs.core.truth_(parentMap__15133.call(null,tag))?cljs.core.disj.call(null,parentMap__15133.call(null,tag),parent):cljs.core.set([]));
var newParents__15135 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15134))?cljs.core.assoc.call(null,parentMap__15133,tag,childsParents__15134):cljs.core.dissoc.call(null,parentMap__15133,tag));
var deriv_seq__15141 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15072_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15072_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15072_SHARP_),cljs.core.second.call(null,p1__15072_SHARP_)));
}),cljs.core.seq.call(null,newParents__15135)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15133.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15073_SHARP_,p2__15074_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15073_SHARP_,p2__15074_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15141));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15146.call(this,h,tag);
case  3 :
return underive__15147.call(this,h,tag,parent);
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
var xprefs__15220 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15222 = (cljs.core.truth_((function (){var and__3546__auto____15221 = xprefs__15220;

if(cljs.core.truth_(and__3546__auto____15221))
{return xprefs__15220.call(null,y);
} else
{return and__3546__auto____15221;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15222))
{return or__3548__auto____15222;
} else
{var or__3548__auto____15331 = (function (){var ps__15225 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15225) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15225),prefer_table)))
{} else
{}
{
var G__15338 = cljs.core.rest.call(null,ps__15225);
ps__15225 = G__15338;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15331))
{return or__3548__auto____15331;
} else
{var or__3548__auto____15334 = (function (){var ps__15333 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15333) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15333),y,prefer_table)))
{} else
{}
{
var G__15340 = cljs.core.rest.call(null,ps__15333);
ps__15333 = G__15340;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15334))
{return or__3548__auto____15334;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15344 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15344))
{return or__3548__auto____15344;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15355 = cljs.core.reduce.call(null,(function (be,p__15347){
var vec__15348__15349 = p__15347;
var k__15350 = cljs.core.nth.call(null,vec__15348__15349,0,null);
var ___15351 = cljs.core.nth.call(null,vec__15348__15349,1,null);
var e__15352 = vec__15348__15349;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15350)))
{var be2__15354 = (cljs.core.truth_((function (){var or__3548__auto____15353 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{return cljs.core.dominates.call(null,k__15350,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15352:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15354),k__15350,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15350," and ",cljs.core.first.call(null,be2__15354),", and neither is preferred")));
}
return be2__15354;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15355))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15355));
return cljs.core.second.call(null,best_entry__15355);
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
if(cljs.core.truth_((function (){var and__3546__auto____15358 = mf;

if(cljs.core.truth_(and__3546__auto____15358))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15358;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15361 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15361))
{return or__3548__auto____15361;
} else
{var or__3548__auto____15362 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15362))
{return or__3548__auto____15362;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15364 = mf;

if(cljs.core.truth_(and__3546__auto____15364))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15364;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15365 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{var or__3548__auto____15367 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15369 = mf;

if(cljs.core.truth_(and__3546__auto____15369))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15369;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15371 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15371))
{return or__3548__auto____15371;
} else
{var or__3548__auto____15373 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15373))
{return or__3548__auto____15373;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15378 = mf;

if(cljs.core.truth_(and__3546__auto____15378))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15378;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15379 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15379))
{return or__3548__auto____15379;
} else
{var or__3548__auto____15380 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15380))
{return or__3548__auto____15380;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15383 = mf;

if(cljs.core.truth_(and__3546__auto____15383))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15383;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15385 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{var or__3548__auto____15386 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15386))
{return or__3548__auto____15386;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15387 = mf;

if(cljs.core.truth_(and__3546__auto____15387))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15387;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15388 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15388))
{return or__3548__auto____15388;
} else
{var or__3548__auto____15389 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15390 = mf;

if(cljs.core.truth_(and__3546__auto____15390))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15390;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15391 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{var or__3548__auto____15392 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15392))
{return or__3548__auto____15392;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15393 = mf;

if(cljs.core.truth_(and__3546__auto____15393))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15393;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15394 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15394))
{return or__3548__auto____15394;
} else
{var or__3548__auto____15395 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15395))
{return or__3548__auto____15395;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15405 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15406 = cljs.core._get_method.call(null,mf,dispatch_val__15405);

if(cljs.core.truth_(target_fn__15406))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15405)));
}
return cljs.core.apply.call(null,target_fn__15406,args);
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
var this__15413 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15414 = this;
cljs.core.swap_BANG_.call(null,this__15414.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15414.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15414.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15414.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15419 = this;
cljs.core.swap_BANG_.call(null,this__15419.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15419.method_cache,this__15419.method_table,this__15419.cached_hierarchy,this__15419.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15424 = this;
cljs.core.swap_BANG_.call(null,this__15424.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15424.method_cache,this__15424.method_table,this__15424.cached_hierarchy,this__15424.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15426 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15426.cached_hierarchy),cljs.core.deref.call(null,this__15426.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15426.method_cache,this__15426.method_table,this__15426.cached_hierarchy,this__15426.hierarchy);
}
var temp__3695__auto____15427 = cljs.core.deref.call(null,this__15426.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15427))
{var target_fn__15428 = temp__3695__auto____15427;

return target_fn__15428;
} else
{var temp__3695__auto____15432 = cljs.core.find_and_cache_best_method.call(null,this__15426.name,dispatch_val,this__15426.hierarchy,this__15426.method_table,this__15426.prefer_table,this__15426.method_cache,this__15426.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15432))
{var target_fn__15433 = temp__3695__auto____15432;

return target_fn__15433;
} else
{return cljs.core.deref.call(null,this__15426.method_table).call(null,this__15426.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15434 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15434.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15434.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15434.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15434.method_cache,this__15434.method_table,this__15434.cached_hierarchy,this__15434.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15435 = this;
return cljs.core.deref.call(null,this__15435.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15436 = this;
return cljs.core.deref.call(null,this__15436.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15437 = this;
return cljs.core.do_dispatch.call(null,mf,this__15437.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15484__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15484 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15484__delegate.call(this, _, args);
};
G__15484.cljs$lang$maxFixedArity = 1;
G__15484.cljs$lang$applyTo = (function (arglist__15486){
var _ = cljs.core.first(arglist__15486);
var args = cljs.core.rest(arglist__15486);
return G__15484__delegate.call(this, _, args);
});
return G__15484;
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
