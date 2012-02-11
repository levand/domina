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
var or__3548__auto____7251 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{var or__3548__auto____7252 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
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
var _invoke__7660 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7287 = this$;

if(cljs.core.truth_(and__3546__auto____7287))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7287;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7290 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{var or__3548__auto____7291 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7291))
{return or__3548__auto____7291;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7661 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = this$;

if(cljs.core.truth_(and__3546__auto____7293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7295 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{var or__3548__auto____7297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7662 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7299 = this$;

if(cljs.core.truth_(and__3546__auto____7299))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7299;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7301 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{var or__3548__auto____7303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7663 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7314 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{var or__3548__auto____7316 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7664 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7322 = this$;

if(cljs.core.truth_(and__3546__auto____7322))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7322;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7328 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7665 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7333 = this$;

if(cljs.core.truth_(and__3546__auto____7333))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7333;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7347 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7347))
{return or__3548__auto____7347;
} else
{var or__3548__auto____7351 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7666 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7383 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7383))
{return or__3548__auto____7383;
} else
{var or__3548__auto____7397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7667 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7401 = this$;

if(cljs.core.truth_(and__3546__auto____7401))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7401;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7668 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7500 = this$;

if(cljs.core.truth_(and__3546__auto____7500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7669 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7514 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{var or__3548__auto____7517 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7670 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7518 = this$;

if(cljs.core.truth_(and__3546__auto____7518))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7518;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7524 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{var or__3548__auto____7526 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7671 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7532 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{var or__3548__auto____7590 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7672 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7593 = this$;

if(cljs.core.truth_(and__3546__auto____7593))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7593;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7595 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{var or__3548__auto____7597 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7673 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7599 = this$;

if(cljs.core.truth_(and__3546__auto____7599))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7599;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7601 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{var or__3548__auto____7602 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7674 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7605 = this$;

if(cljs.core.truth_(and__3546__auto____7605))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7605;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7607 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{var or__3548__auto____7608 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7608))
{return or__3548__auto____7608;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7675 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7613 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7613))
{return or__3548__auto____7613;
} else
{var or__3548__auto____7614 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7614))
{return or__3548__auto____7614;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7676 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7616 = this$;

if(cljs.core.truth_(and__3546__auto____7616))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7616;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7618 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{var or__3548__auto____7620 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7677 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7622 = this$;

if(cljs.core.truth_(and__3546__auto____7622))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7622;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7624 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7624))
{return or__3548__auto____7624;
} else
{var or__3548__auto____7626 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7626))
{return or__3548__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7678 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7628 = this$;

if(cljs.core.truth_(and__3546__auto____7628))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7628;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7630 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{var or__3548__auto____7631 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7631))
{return or__3548__auto____7631;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7679 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7637 = this$;

if(cljs.core.truth_(and__3546__auto____7637))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7637;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7655 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7655))
{return or__3548__auto____7655;
} else
{var or__3548__auto____7656 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7680 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7657 = this$;

if(cljs.core.truth_(and__3546__auto____7657))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7657;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7658 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{var or__3548__auto____7659 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7659))
{return or__3548__auto____7659;
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
return _invoke__7660.call(this,this$);
case  2 :
return _invoke__7661.call(this,this$,a);
case  3 :
return _invoke__7662.call(this,this$,a,b);
case  4 :
return _invoke__7663.call(this,this$,a,b,c);
case  5 :
return _invoke__7664.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7665.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7666.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7667.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7668.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7669.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7670.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7671.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7672.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7673.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7674.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7675.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7676.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7677.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7678.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7679.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7680.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if(cljs.core.truth_((function (){var and__3546__auto____7776 = coll;

if(cljs.core.truth_(and__3546__auto____7776))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7776;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7778 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{var or__3548__auto____7780 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7788 = coll;

if(cljs.core.truth_(and__3546__auto____7788))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7788;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7793 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
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
var _nth__7811 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7805 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7812 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = coll;

if(cljs.core.truth_(and__3546__auto____7807))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7807;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7809 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{var or__3548__auto____7810 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
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
return _nth__7811.call(this,coll,n);
case  3 :
return _nth__7812.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = coll;

if(cljs.core.truth_(and__3546__auto____7818))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7818;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7820 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{var or__3548__auto____7821 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = coll;

if(cljs.core.truth_(and__3546__auto____7823))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7823;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7824 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{var or__3548__auto____7825 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
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
var _lookup__7842 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = o;

if(cljs.core.truth_(and__3546__auto____7829))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7829;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7832 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7843 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7833 = o;

if(cljs.core.truth_(and__3546__auto____7833))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7833;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7836 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{var or__3548__auto____7837 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
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
return _lookup__7842.call(this,o,k);
case  3 :
return _lookup__7843.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = coll;

if(cljs.core.truth_(and__3546__auto____7890))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7890;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7894 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7896 = coll;

if(cljs.core.truth_(and__3546__auto____7896))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7896;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7899 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7901 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7913 = coll;

if(cljs.core.truth_(and__3546__auto____7913))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7913;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7918 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7923 = coll;

if(cljs.core.truth_(and__3546__auto____7923))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7923;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7925 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7929 = coll;

if(cljs.core.truth_(and__3546__auto____7929))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7929;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7932 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7935 = coll;

if(cljs.core.truth_(and__3546__auto____7935))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7935;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7936 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{var or__3548__auto____7937 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = coll;

if(cljs.core.truth_(and__3546__auto____7950))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7950;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7951 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{var or__3548__auto____7952 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7956 = o;

if(cljs.core.truth_(and__3546__auto____7956))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7956;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7958 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7958))
{return or__3548__auto____7958;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = o;

if(cljs.core.truth_(and__3546__auto____7965))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7965;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7970 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7981 = o;

if(cljs.core.truth_(and__3546__auto____7981))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7981;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7984 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{var or__3548__auto____7987 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = o;

if(cljs.core.truth_(and__3546__auto____8005))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8005;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8028 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{var or__3548__auto____8029 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
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
var _reduce__8053 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = coll;

if(cljs.core.truth_(and__3546__auto____8037))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8037;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
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
var _reduce__8054 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8043 = coll;

if(cljs.core.truth_(and__3546__auto____8043))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8043;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8047 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{var or__3548__auto____8050 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
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
return _reduce__8053.call(this,coll,f);
case  3 :
return _reduce__8054.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8060 = o;

if(cljs.core.truth_(and__3546__auto____8060))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8060;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8063 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8066 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
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
{return (function (){var or__3548__auto____8074 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{var or__3548__auto____8076 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = o;

if(cljs.core.truth_(and__3546__auto____8081))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8081;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8085 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
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
if(cljs.core.truth_((function (){var and__3546__auto____8091 = o;

if(cljs.core.truth_(and__3546__auto____8091))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8091;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8092 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
} else
{var or__3548__auto____8094 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8102 = d;

if(cljs.core.truth_(and__3546__auto____8102))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8102;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8105 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{var or__3548__auto____8107 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = this$;

if(cljs.core.truth_(and__3546__auto____8108))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8108;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
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
{return (function (){var or__3548__auto____8115 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
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
if(cljs.core.truth_((function (){var and__3546__auto____8118 = this$;

if(cljs.core.truth_(and__3546__auto____8118))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8118;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8120 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
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
var G__8204 = null;
var G__8204__8205 = (function (o,k){
return null;
});
var G__8204__8206 = (function (o,k,not_found){
return not_found;
});
G__8204 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8204__8205.call(this,o,k);
case  3 :
return G__8204__8206.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8204;
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
var G__8242 = null;
var G__8242__8243 = (function (_,n){
return null;
});
var G__8242__8244 = (function (_,n,not_found){
return not_found;
});
G__8242 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8242__8243.call(this,_,n);
case  3 :
return G__8242__8244.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8242;
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
var ci_reduce__8294 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8282 = cljs.core._nth.call(null,cicoll,0);
var n__8283 = 1;

while(true){
if(cljs.core.truth_((n__8283 < cljs.core._count.call(null,cicoll))))
{{
var G__8298 = f.call(null,val__8282,cljs.core._nth.call(null,cicoll,n__8283));
var G__8299 = (n__8283 + 1);
val__8282 = G__8298;
n__8283 = G__8299;
continue;
}
} else
{return val__8282;
}
break;
}
}
});
var ci_reduce__8295 = (function (cicoll,f,val){
var val__8285 = val;
var n__8287 = 0;

while(true){
if(cljs.core.truth_((n__8287 < cljs.core._count.call(null,cicoll))))
{{
var G__8302 = f.call(null,val__8285,cljs.core._nth.call(null,cicoll,n__8287));
var G__8303 = (n__8287 + 1);
val__8285 = G__8302;
n__8287 = G__8303;
continue;
}
} else
{return val__8285;
}
break;
}
});
var ci_reduce__8296 = (function (cicoll,f,val,idx){
var val__8292 = val;
var n__8293 = idx;

while(true){
if(cljs.core.truth_((n__8293 < cljs.core._count.call(null,cicoll))))
{{
var G__8306 = f.call(null,val__8292,cljs.core._nth.call(null,cicoll,n__8293));
var G__8307 = (n__8293 + 1);
val__8292 = G__8306;
n__8293 = G__8307;
continue;
}
} else
{return val__8292;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8294.call(this,cicoll,f);
case  3 :
return ci_reduce__8295.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8296.call(this,cicoll,f,val,idx);
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
var this__8323 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8363 = null;
var G__8363__8364 = (function (_,f){
var this__8326 = this;
return cljs.core.ci_reduce.call(null,this__8326.a,f,(this__8326.a[this__8326.i]),(this__8326.i + 1));
});
var G__8363__8365 = (function (_,f,start){
var this__8330 = this;
return cljs.core.ci_reduce.call(null,this__8330.a,f,start,this__8330.i);
});
G__8363 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8363__8364.call(this,_,f);
case  3 :
return G__8363__8365.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8363;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8333 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8334 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8371 = null;
var G__8371__8372 = (function (coll,n){
var this__8339 = this;
var i__8343 = (n + this__8339.i);

if(cljs.core.truth_((i__8343 < this__8339.a.length)))
{return (this__8339.a[i__8343]);
} else
{return null;
}
});
var G__8371__8373 = (function (coll,n,not_found){
var this__8347 = this;
var i__8350 = (n + this__8347.i);

if(cljs.core.truth_((i__8350 < this__8347.a.length)))
{return (this__8347.a[i__8350]);
} else
{return not_found;
}
});
G__8371 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8371__8372.call(this,coll,n);
case  3 :
return G__8371__8373.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8371;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8353 = this;
return (this__8353.a.length - this__8353.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8358 = this;
return (this__8358.a[this__8358.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8360 = this;
if(cljs.core.truth_(((this__8360.i + 1) < this__8360.a.length)))
{return (new cljs.core.IndexedSeq(this__8360.a,(this__8360.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8362 = this;
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
var G__8411 = null;
var G__8411__8412 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8411__8413 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8411 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8411__8412.call(this,array,f);
case  3 :
return G__8411__8413.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8411;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8416 = null;
var G__8416__8417 = (function (array,k){
return (array[k]);
});
var G__8416__8418 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8416 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8416__8417.call(this,array,k);
case  3 :
return G__8416__8418.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8416;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8422 = null;
var G__8422__8423 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8422__8424 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8422 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8422__8423.call(this,array,n);
case  3 :
return G__8422__8424.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8422;
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
var temp__3698__auto____8435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8435))
{var s__8437 = temp__3698__auto____8435;

return cljs.core._first.call(null,s__8437);
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
var G__8464 = cljs.core.next.call(null,s);
s = G__8464;
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
var s__8465 = cljs.core.seq.call(null,x);
var n__8466 = 0;

while(true){
if(cljs.core.truth_(s__8465))
{{
var G__8467 = cljs.core.next.call(null,s__8465);
var G__8468 = (n__8466 + 1);
s__8465 = G__8467;
n__8466 = G__8468;
continue;
}
} else
{return n__8466;
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
var conj__8469 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8470 = (function() { 
var G__8472__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8473 = conj.call(null,coll,x);
var G__8474 = cljs.core.first.call(null,xs);
var G__8475 = cljs.core.next.call(null,xs);
coll = G__8473;
x = G__8474;
xs = G__8475;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8472 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8472__delegate.call(this, coll, x, xs);
};
G__8472.cljs$lang$maxFixedArity = 2;
G__8472.cljs$lang$applyTo = (function (arglist__8476){
var coll = cljs.core.first(arglist__8476);
var x = cljs.core.first(cljs.core.next(arglist__8476));
var xs = cljs.core.rest(cljs.core.next(arglist__8476));
return G__8472__delegate.call(this, coll, x, xs);
});
return G__8472;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8469.call(this,coll,x);
default:
return conj__8470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8470.cljs$lang$applyTo;
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
var nth__8477 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8478 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8477.call(this,coll,n);
case  3 :
return nth__8478.call(this,coll,n,not_found);
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
var get__8480 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8481 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8480.call(this,o,k);
case  3 :
return get__8481.call(this,o,k,not_found);
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
var assoc__8484 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8485 = (function() { 
var G__8487__delegate = function (coll,k,v,kvs){
while(true){
var ret__8483 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8488 = ret__8483;
var G__8489 = cljs.core.first.call(null,kvs);
var G__8490 = cljs.core.second.call(null,kvs);
var G__8491 = cljs.core.nnext.call(null,kvs);
coll = G__8488;
k = G__8489;
v = G__8490;
kvs = G__8491;
continue;
}
} else
{return ret__8483;
}
break;
}
};
var G__8487 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8487__delegate.call(this, coll, k, v, kvs);
};
G__8487.cljs$lang$maxFixedArity = 3;
G__8487.cljs$lang$applyTo = (function (arglist__8492){
var coll = cljs.core.first(arglist__8492);
var k = cljs.core.first(cljs.core.next(arglist__8492));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8492)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8492)));
return G__8487__delegate.call(this, coll, k, v, kvs);
});
return G__8487;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8484.call(this,coll,k,v);
default:
return assoc__8485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8485.cljs$lang$applyTo;
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
var dissoc__8494 = (function (coll){
return coll;
});
var dissoc__8495 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8496 = (function() { 
var G__8498__delegate = function (coll,k,ks){
while(true){
var ret__8493 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8499 = ret__8493;
var G__8500 = cljs.core.first.call(null,ks);
var G__8501 = cljs.core.next.call(null,ks);
coll = G__8499;
k = G__8500;
ks = G__8501;
continue;
}
} else
{return ret__8493;
}
break;
}
};
var G__8498 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8498__delegate.call(this, coll, k, ks);
};
G__8498.cljs$lang$maxFixedArity = 2;
G__8498.cljs$lang$applyTo = (function (arglist__8502){
var coll = cljs.core.first(arglist__8502);
var k = cljs.core.first(cljs.core.next(arglist__8502));
var ks = cljs.core.rest(cljs.core.next(arglist__8502));
return G__8498__delegate.call(this, coll, k, ks);
});
return G__8498;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8494.call(this,coll);
case  2 :
return dissoc__8495.call(this,coll,k);
default:
return dissoc__8496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8496.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8503 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8504 = x__445__auto____8503;

if(cljs.core.truth_(and__3546__auto____8504))
{var and__3546__auto____8505 = x__445__auto____8503.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8505))
{return cljs.core.not.call(null,x__445__auto____8503.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8505;
}
} else
{return and__3546__auto____8504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8503);
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
var disj__8513 = (function (coll){
return coll;
});
var disj__8515 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8517 = (function() { 
var G__8520__delegate = function (coll,k,ks){
while(true){
var ret__8511 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8524 = ret__8511;
var G__8525 = cljs.core.first.call(null,ks);
var G__8526 = cljs.core.next.call(null,ks);
coll = G__8524;
k = G__8525;
ks = G__8526;
continue;
}
} else
{return ret__8511;
}
break;
}
};
var G__8520 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8520__delegate.call(this, coll, k, ks);
};
G__8520.cljs$lang$maxFixedArity = 2;
G__8520.cljs$lang$applyTo = (function (arglist__8528){
var coll = cljs.core.first(arglist__8528);
var k = cljs.core.first(cljs.core.next(arglist__8528));
var ks = cljs.core.rest(cljs.core.next(arglist__8528));
return G__8520__delegate.call(this, coll, k, ks);
});
return G__8520;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8513.call(this,coll);
case  2 :
return disj__8515.call(this,coll,k);
default:
return disj__8517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8517.cljs$lang$applyTo;
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
{var x__445__auto____8537 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8541 = x__445__auto____8537;

if(cljs.core.truth_(and__3546__auto____8541))
{var and__3546__auto____8543 = x__445__auto____8537.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8543))
{return cljs.core.not.call(null,x__445__auto____8537.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8543;
}
} else
{return and__3546__auto____8541;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8537);
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
{var x__445__auto____8574 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8660 = x__445__auto____8574;

if(cljs.core.truth_(and__3546__auto____8660))
{var and__3546__auto____8665 = x__445__auto____8574.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8665))
{return cljs.core.not.call(null,x__445__auto____8574.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8665;
}
} else
{return and__3546__auto____8660;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8574);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8722 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8723 = x__445__auto____8722;

if(cljs.core.truth_(and__3546__auto____8723))
{var and__3546__auto____8727 = x__445__auto____8722.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8727))
{return cljs.core.not.call(null,x__445__auto____8722.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8727;
}
} else
{return and__3546__auto____8723;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8722);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8737 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8738 = x__445__auto____8737;

if(cljs.core.truth_(and__3546__auto____8738))
{var and__3546__auto____8740 = x__445__auto____8737.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8740))
{return cljs.core.not.call(null,x__445__auto____8737.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8740;
}
} else
{return and__3546__auto____8738;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8737);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8752 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8754 = x__445__auto____8752;

if(cljs.core.truth_(and__3546__auto____8754))
{var and__3546__auto____8755 = x__445__auto____8752.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8755))
{return cljs.core.not.call(null,x__445__auto____8752.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8755;
}
} else
{return and__3546__auto____8754;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8752);
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
var x__445__auto____8825 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8827 = x__445__auto____8825;

if(cljs.core.truth_(and__3546__auto____8827))
{var and__3546__auto____8828 = x__445__auto____8825.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8828))
{return cljs.core.not.call(null,x__445__auto____8825.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8828;
}
} else
{return and__3546__auto____8827;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8825);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8831 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8831.push(key);
}));
return keys__8831;
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
{var x__445__auto____8845 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8848 = x__445__auto____8845;

if(cljs.core.truth_(and__3546__auto____8848))
{var and__3546__auto____8854 = x__445__auto____8845.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8854))
{return cljs.core.not.call(null,x__445__auto____8845.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8854;
}
} else
{return and__3546__auto____8848;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8845);
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
{return cljs.core.not.call(null,(function (){var or__3548__auto____8865 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8865))
{return or__3548__auto____8865;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8863;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8869 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8869))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8869;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8871 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8871))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8871;
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
var and__3546__auto____8878 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8878))
{return (n == n.toFixed());
} else
{return and__3546__auto____8878;
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
if(cljs.core.truth_((function (){var and__3546__auto____8885 = coll;

if(cljs.core.truth_(and__3546__auto____8885))
{var and__3546__auto____8886 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8886))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8886;
}
} else
{return and__3546__auto____8885;
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
var distinct_QMARK___8901 = (function (x){
return true;
});
var distinct_QMARK___8902 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8903 = (function() { 
var G__8905__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8897 = cljs.core.set([y,x]);
var xs__8898 = more;

while(true){
var x__8899 = cljs.core.first.call(null,xs__8898);
var etc__8900 = cljs.core.next.call(null,xs__8898);

if(cljs.core.truth_(xs__8898))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8897,x__8899)))
{return false;
} else
{{
var G__8907 = cljs.core.conj.call(null,s__8897,x__8899);
var G__8908 = etc__8900;
s__8897 = G__8907;
xs__8898 = G__8908;
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
var G__8905 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8905__delegate.call(this, x, y, more);
};
G__8905.cljs$lang$maxFixedArity = 2;
G__8905.cljs$lang$applyTo = (function (arglist__8911){
var x = cljs.core.first(arglist__8911);
var y = cljs.core.first(cljs.core.next(arglist__8911));
var more = cljs.core.rest(cljs.core.next(arglist__8911));
return G__8905__delegate.call(this, x, y, more);
});
return G__8905;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8901.call(this,x);
case  2 :
return distinct_QMARK___8902.call(this,x,y);
default:
return distinct_QMARK___8903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8903.cljs$lang$applyTo;
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
var r__8960 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8960)))
{return r__8960;
} else
{if(cljs.core.truth_(r__8960))
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
var sort__8974 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8975 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8973 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8973,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8973);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8974.call(this,comp);
case  2 :
return sort__8975.call(this,comp,coll);
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
var sort_by__9005 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9006 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9005.call(this,keyfn,comp);
case  3 :
return sort_by__9006.call(this,keyfn,comp,coll);
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
var reduce__9020 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9021 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9020.call(this,f,val);
case  3 :
return reduce__9021.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9043 = (function (f,coll){
var temp__3695__auto____9034 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9034))
{var s__9035 = temp__3695__auto____9034;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9035),cljs.core.next.call(null,s__9035));
} else
{return f.call(null);
}
});
var seq_reduce__9044 = (function (f,val,coll){
var val__9039 = val;
var coll__9042 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9042))
{{
var G__9050 = f.call(null,val__9039,cljs.core.first.call(null,coll__9042));
var G__9051 = cljs.core.next.call(null,coll__9042);
val__9039 = G__9050;
coll__9042 = G__9051;
continue;
}
} else
{return val__9039;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9043.call(this,f,val);
case  3 :
return seq_reduce__9044.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9061 = null;
var G__9061__9064 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9061__9065 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9061 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9061__9064.call(this,coll,f);
case  3 :
return G__9061__9065.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9061;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9077 = (function (){
return 0;
});
var _PLUS___9078 = (function (x){
return x;
});
var _PLUS___9079 = (function (x,y){
return (x + y);
});
var _PLUS___9080 = (function() { 
var G__9083__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9083 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9083__delegate.call(this, x, y, more);
};
G__9083.cljs$lang$maxFixedArity = 2;
G__9083.cljs$lang$applyTo = (function (arglist__9085){
var x = cljs.core.first(arglist__9085);
var y = cljs.core.first(cljs.core.next(arglist__9085));
var more = cljs.core.rest(cljs.core.next(arglist__9085));
return G__9083__delegate.call(this, x, y, more);
});
return G__9083;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9077.call(this);
case  1 :
return _PLUS___9078.call(this,x);
case  2 :
return _PLUS___9079.call(this,x,y);
default:
return _PLUS___9080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9080.cljs$lang$applyTo;
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
var ___9099 = (function (x){
return (- x);
});
var ___9100 = (function (x,y){
return (x - y);
});
var ___9101 = (function() { 
var G__9106__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9106 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9106__delegate.call(this, x, y, more);
};
G__9106.cljs$lang$maxFixedArity = 2;
G__9106.cljs$lang$applyTo = (function (arglist__9172){
var x = cljs.core.first(arglist__9172);
var y = cljs.core.first(cljs.core.next(arglist__9172));
var more = cljs.core.rest(cljs.core.next(arglist__9172));
return G__9106__delegate.call(this, x, y, more);
});
return G__9106;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9099.call(this,x);
case  2 :
return ___9100.call(this,x,y);
default:
return ___9101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9101.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9173 = (function (){
return 1;
});
var _STAR___9174 = (function (x){
return x;
});
var _STAR___9175 = (function (x,y){
return (x * y);
});
var _STAR___9176 = (function() { 
var G__9181__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9181 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9181__delegate.call(this, x, y, more);
};
G__9181.cljs$lang$maxFixedArity = 2;
G__9181.cljs$lang$applyTo = (function (arglist__9182){
var x = cljs.core.first(arglist__9182);
var y = cljs.core.first(cljs.core.next(arglist__9182));
var more = cljs.core.rest(cljs.core.next(arglist__9182));
return G__9181__delegate.call(this, x, y, more);
});
return G__9181;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9173.call(this);
case  1 :
return _STAR___9174.call(this,x);
case  2 :
return _STAR___9175.call(this,x,y);
default:
return _STAR___9176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9176.cljs$lang$applyTo;
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
var _SLASH___9190 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9191 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9192 = (function() { 
var G__9194__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9194 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9194__delegate.call(this, x, y, more);
};
G__9194.cljs$lang$maxFixedArity = 2;
G__9194.cljs$lang$applyTo = (function (arglist__9197){
var x = cljs.core.first(arglist__9197);
var y = cljs.core.first(cljs.core.next(arglist__9197));
var more = cljs.core.rest(cljs.core.next(arglist__9197));
return G__9194__delegate.call(this, x, y, more);
});
return G__9194;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9190.call(this,x);
case  2 :
return _SLASH___9191.call(this,x,y);
default:
return _SLASH___9192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9192.cljs$lang$applyTo;
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
var _LT___9211 = (function (x){
return true;
});
var _LT___9212 = (function (x,y){
return (x < y);
});
var _LT___9213 = (function() { 
var G__9215__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9216 = y;
var G__9217 = cljs.core.first.call(null,more);
var G__9218 = cljs.core.next.call(null,more);
x = G__9216;
y = G__9217;
more = G__9218;
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
var G__9215 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9215__delegate.call(this, x, y, more);
};
G__9215.cljs$lang$maxFixedArity = 2;
G__9215.cljs$lang$applyTo = (function (arglist__9228){
var x = cljs.core.first(arglist__9228);
var y = cljs.core.first(cljs.core.next(arglist__9228));
var more = cljs.core.rest(cljs.core.next(arglist__9228));
return G__9215__delegate.call(this, x, y, more);
});
return G__9215;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9211.call(this,x);
case  2 :
return _LT___9212.call(this,x,y);
default:
return _LT___9213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9213.cljs$lang$applyTo;
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
var _LT__EQ___9236 = (function (x){
return true;
});
var _LT__EQ___9237 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9238 = (function() { 
var G__9244__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9245 = y;
var G__9246 = cljs.core.first.call(null,more);
var G__9248 = cljs.core.next.call(null,more);
x = G__9245;
y = G__9246;
more = G__9248;
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
var G__9244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9244__delegate.call(this, x, y, more);
};
G__9244.cljs$lang$maxFixedArity = 2;
G__9244.cljs$lang$applyTo = (function (arglist__9249){
var x = cljs.core.first(arglist__9249);
var y = cljs.core.first(cljs.core.next(arglist__9249));
var more = cljs.core.rest(cljs.core.next(arglist__9249));
return G__9244__delegate.call(this, x, y, more);
});
return G__9244;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9236.call(this,x);
case  2 :
return _LT__EQ___9237.call(this,x,y);
default:
return _LT__EQ___9238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9238.cljs$lang$applyTo;
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
var _GT___9261 = (function (x){
return true;
});
var _GT___9262 = (function (x,y){
return (x > y);
});
var _GT___9263 = (function() { 
var G__9266__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9267 = y;
var G__9268 = cljs.core.first.call(null,more);
var G__9269 = cljs.core.next.call(null,more);
x = G__9267;
y = G__9268;
more = G__9269;
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
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9261.call(this,x);
case  2 :
return _GT___9262.call(this,x,y);
default:
return _GT___9263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9263.cljs$lang$applyTo;
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
var _GT__EQ___9278 = (function (x){
return true;
});
var _GT__EQ___9279 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9280 = (function() { 
var G__9282__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9283 = y;
var G__9284 = cljs.core.first.call(null,more);
var G__9285 = cljs.core.next.call(null,more);
x = G__9283;
y = G__9284;
more = G__9285;
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
var G__9282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9282__delegate.call(this, x, y, more);
};
G__9282.cljs$lang$maxFixedArity = 2;
G__9282.cljs$lang$applyTo = (function (arglist__9356){
var x = cljs.core.first(arglist__9356);
var y = cljs.core.first(cljs.core.next(arglist__9356));
var more = cljs.core.rest(cljs.core.next(arglist__9356));
return G__9282__delegate.call(this, x, y, more);
});
return G__9282;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9278.call(this,x);
case  2 :
return _GT__EQ___9279.call(this,x,y);
default:
return _GT__EQ___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9280.cljs$lang$applyTo;
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
var max__9364 = (function (x){
return x;
});
var max__9365 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9366 = (function() { 
var G__9371__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9371 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9371__delegate.call(this, x, y, more);
};
G__9371.cljs$lang$maxFixedArity = 2;
G__9371.cljs$lang$applyTo = (function (arglist__9373){
var x = cljs.core.first(arglist__9373);
var y = cljs.core.first(cljs.core.next(arglist__9373));
var more = cljs.core.rest(cljs.core.next(arglist__9373));
return G__9371__delegate.call(this, x, y, more);
});
return G__9371;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9364.call(this,x);
case  2 :
return max__9365.call(this,x,y);
default:
return max__9366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9366.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9376 = (function (x){
return x;
});
var min__9377 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9378 = (function() { 
var G__9384__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9384 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9384__delegate.call(this, x, y, more);
};
G__9384.cljs$lang$maxFixedArity = 2;
G__9384.cljs$lang$applyTo = (function (arglist__9386){
var x = cljs.core.first(arglist__9386);
var y = cljs.core.first(cljs.core.next(arglist__9386));
var more = cljs.core.rest(cljs.core.next(arglist__9386));
return G__9384__delegate.call(this, x, y, more);
});
return G__9384;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9376.call(this,x);
case  2 :
return min__9377.call(this,x,y);
default:
return min__9378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9378.cljs$lang$applyTo;
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
var rem__9403 = (n % d);

return cljs.core.fix.call(null,((n - rem__9403) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9412 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9412));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9414 = (function (){
return Math.random.call(null);
});
var rand__9415 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9414.call(this);
case  1 :
return rand__9415.call(this,n);
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
var _EQ__EQ___9439 = (function (x){
return true;
});
var _EQ__EQ___9440 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9441 = (function() { 
var G__9444__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9447 = y;
var G__9449 = cljs.core.first.call(null,more);
var G__9451 = cljs.core.next.call(null,more);
x = G__9447;
y = G__9449;
more = G__9451;
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
var G__9444 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9444__delegate.call(this, x, y, more);
};
G__9444.cljs$lang$maxFixedArity = 2;
G__9444.cljs$lang$applyTo = (function (arglist__9456){
var x = cljs.core.first(arglist__9456);
var y = cljs.core.first(cljs.core.next(arglist__9456));
var more = cljs.core.rest(cljs.core.next(arglist__9456));
return G__9444__delegate.call(this, x, y, more);
});
return G__9444;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9439.call(this,x);
case  2 :
return _EQ__EQ___9440.call(this,x,y);
default:
return _EQ__EQ___9441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9441.cljs$lang$applyTo;
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
var n__9462 = n;
var xs__9463 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9464 = xs__9463;

if(cljs.core.truth_(and__3546__auto____9464))
{return (n__9462 > 0);
} else
{return and__3546__auto____9464;
}
})()))
{{
var G__9465 = (n__9462 - 1);
var G__9466 = cljs.core.next.call(null,xs__9463);
n__9462 = G__9465;
xs__9463 = G__9466;
continue;
}
} else
{return xs__9463;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9532 = null;
var G__9532__9533 = (function (coll,n){
var temp__3695__auto____9523 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9523))
{var xs__9524 = temp__3695__auto____9523;

return cljs.core.first.call(null,xs__9524);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9532__9534 = (function (coll,n,not_found){
var temp__3695__auto____9525 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9525))
{var xs__9530 = temp__3695__auto____9525;

return cljs.core.first.call(null,xs__9530);
} else
{return not_found;
}
});
G__9532 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9532__9533.call(this,coll,n);
case  3 :
return G__9532__9534.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9532;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9545 = (function (){
return "";
});
var str_STAR___9546 = (function (x){
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
var str_STAR___9547 = (function() { 
var G__9552__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9553 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9554 = cljs.core.next.call(null,more);
sb = G__9553;
more = G__9554;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9552 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9552__delegate.call(this, x, ys);
};
G__9552.cljs$lang$maxFixedArity = 1;
G__9552.cljs$lang$applyTo = (function (arglist__9559){
var x = cljs.core.first(arglist__9559);
var ys = cljs.core.rest(arglist__9559);
return G__9552__delegate.call(this, x, ys);
});
return G__9552;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9545.call(this);
case  1 :
return str_STAR___9546.call(this,x);
default:
return str_STAR___9547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9547.cljs$lang$applyTo;
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
var str__9564 = (function (){
return "";
});
var str__9565 = (function (x){
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
var str__9566 = (function() { 
var G__9574__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9574 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9574__delegate.call(this, x, ys);
};
G__9574.cljs$lang$maxFixedArity = 1;
G__9574.cljs$lang$applyTo = (function (arglist__9575){
var x = cljs.core.first(arglist__9575);
var ys = cljs.core.rest(arglist__9575);
return G__9574__delegate.call(this, x, ys);
});
return G__9574;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9564.call(this);
case  1 :
return str__9565.call(this,x);
default:
return str__9566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9566.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9579 = (function (s,start){
return s.substring(start);
});
var subs__9580 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9579.call(this,s,start);
case  3 :
return subs__9580.call(this,s,start,end);
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
var symbol__9595 = (function (name){
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
var symbol__9596 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9595.call(this,ns);
case  2 :
return symbol__9596.call(this,ns,name);
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
var keyword__9607 = (function (name){
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
var keyword__9608 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9607.call(this,ns);
case  2 :
return keyword__9608.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9782 = cljs.core.seq.call(null,x);
var ys__9783 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9782)))
{return cljs.core.nil_QMARK_.call(null,ys__9783);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9783)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9782),cljs.core.first.call(null,ys__9783))))
{{
var G__9787 = cljs.core.next.call(null,xs__9782);
var G__9788 = cljs.core.next.call(null,ys__9783);
xs__9782 = G__9787;
ys__9783 = G__9788;
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
return cljs.core.reduce.call(null,(function (p1__9789_SHARP_,p2__9790_SHARP_){
return cljs.core.hash_combine.call(null,p1__9789_SHARP_,cljs.core.hash.call(null,p2__9790_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9796__9798 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9796__9798))
{var G__9801__9805 = cljs.core.first.call(null,G__9796__9798);
var vec__9803__9806 = G__9801__9805;
var key_name__9810 = cljs.core.nth.call(null,vec__9803__9806,0,null);
var f__9812 = cljs.core.nth.call(null,vec__9803__9806,1,null);
var G__9796__9814 = G__9796__9798;

var G__9801__9816 = G__9801__9805;
var G__9796__9820 = G__9796__9814;

while(true){
var vec__9826__9828 = G__9801__9816;
var key_name__9831 = cljs.core.nth.call(null,vec__9826__9828,0,null);
var f__9834 = cljs.core.nth.call(null,vec__9826__9828,1,null);
var G__9796__9836 = G__9796__9820;

var str_name__9840 = cljs.core.name.call(null,key_name__9831);

obj[str_name__9840] = f__9834;
var temp__3698__auto____9845 = cljs.core.next.call(null,G__9796__9836);

if(cljs.core.truth_(temp__3698__auto____9845))
{var G__9796__9847 = temp__3698__auto____9845;

{
var G__9852 = cljs.core.first.call(null,G__9796__9847);
var G__9854 = G__9796__9847;
G__9801__9816 = G__9852;
G__9796__9820 = G__9854;
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
var this__9860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9864 = this;
return (new cljs.core.List(this__9864.meta,o,coll,(this__9864.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9932 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9933 = this;
return this__9933.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9935 = this;
return this__9935.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9940 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9943 = this;
return this__9943.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9948 = this;
return this__9948.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9949 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9950 = this;
return (new cljs.core.List(meta,this__9950.first,this__9950.rest,this__9950.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9951 = this;
return this__9951.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9952 = this;
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
var this__9956 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9959 = this;
return (new cljs.core.List(this__9959.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9960 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9962 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9964 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9965 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9967 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9968 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9969 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9972 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9975 = this;
return this__9975.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9977 = this;
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
list.cljs$lang$applyTo = (function (arglist__9985){
var items = cljs.core.seq( arglist__9985 );;
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
var this__10021 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10022 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10027 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10028 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10028.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10029 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10034 = this;
return this__10034.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10035 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10035.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10035.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10037 = this;
return this__10037.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10041 = this;
return (new cljs.core.Cons(meta,this__10041.first,this__10041.rest));
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
var G__10075 = null;
var G__10075__10076 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10075__10078 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10075 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10075__10076.call(this,string,f);
case  3 :
return G__10075__10078.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10075;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10082 = null;
var G__10082__10083 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10082__10085 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10082 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10082__10083.call(this,string,k);
case  3 :
return G__10082__10085.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10082;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10090 = null;
var G__10090__10091 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10090__10092 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10090 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10090__10091.call(this,string,n);
case  3 :
return G__10090__10092.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10090;
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
var G__10096 = null;
var G__10096__10097 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10096__10098 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10096 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10096__10097.call(this,this$,coll);
case  3 :
return G__10096__10098.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10096;
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
var x__10116 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10116;
} else
{lazy_seq.x = x__10116.call(null);
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
var this__10119 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10120 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10124 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10127 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10127.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10199 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10201 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10203 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10204 = this;
return this__10204.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10205 = this;
return (new cljs.core.LazySeq(meta,this__10205.realized,this__10205.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10213 = cljs.core.array.call(null);

var s__10214 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10214)))
{ary__10213.push(cljs.core.first.call(null,s__10214));
{
var G__10262 = cljs.core.next.call(null,s__10214);
s__10214 = G__10262;
continue;
}
} else
{return ary__10213;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10266 = s;
var i__10267 = n;
var sum__10268 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10270 = (i__10267 > 0);

if(cljs.core.truth_(and__3546__auto____10270))
{return cljs.core.seq.call(null,s__10266);
} else
{return and__3546__auto____10270;
}
})()))
{{
var G__10277 = cljs.core.next.call(null,s__10266);
var G__10278 = (i__10267 - 1);
var G__10279 = (sum__10268 + 1);
s__10266 = G__10277;
i__10267 = G__10278;
sum__10268 = G__10279;
continue;
}
} else
{return sum__10268;
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
var concat__10286 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10287 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10288 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10283 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10283))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10283),concat.call(null,cljs.core.rest.call(null,s__10283),y));
} else
{return y;
}
})));
});
var concat__10289 = (function() { 
var G__10292__delegate = function (x,y,zs){
var cat__10285 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10284 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10284))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10284),cat.call(null,cljs.core.rest.call(null,xys__10284),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10285.call(null,concat.call(null,x,y),zs);
};
var G__10292 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10292__delegate.call(this, x, y, zs);
};
G__10292.cljs$lang$maxFixedArity = 2;
G__10292.cljs$lang$applyTo = (function (arglist__10294){
var x = cljs.core.first(arglist__10294);
var y = cljs.core.first(cljs.core.next(arglist__10294));
var zs = cljs.core.rest(cljs.core.next(arglist__10294));
return G__10292__delegate.call(this, x, y, zs);
});
return G__10292;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10286.call(this);
case  1 :
return concat__10287.call(this,x);
case  2 :
return concat__10288.call(this,x,y);
default:
return concat__10289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10289.cljs$lang$applyTo;
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
var list_STAR___10300 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10301 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10303 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10304 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10305 = (function() { 
var G__10308__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10308 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10308__delegate.call(this, a, b, c, d, more);
};
G__10308.cljs$lang$maxFixedArity = 4;
G__10308.cljs$lang$applyTo = (function (arglist__10309){
var a = cljs.core.first(arglist__10309);
var b = cljs.core.first(cljs.core.next(arglist__10309));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10309)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10309))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10309))));
return G__10308__delegate.call(this, a, b, c, d, more);
});
return G__10308;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10300.call(this,a);
case  2 :
return list_STAR___10301.call(this,a,b);
case  3 :
return list_STAR___10303.call(this,a,b,c);
case  4 :
return list_STAR___10304.call(this,a,b,c,d);
default:
return list_STAR___10305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10305.cljs$lang$applyTo;
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
var apply__10366 = (function (f,args){
var fixed_arity__10310 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10310 + 1)) <= fixed_arity__10310)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10367 = (function (f,x,args){
var arglist__10314 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10315 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10314,fixed_arity__10315) <= fixed_arity__10315)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10314));
} else
{return f.cljs$lang$applyTo(arglist__10314);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10314));
}
});
var apply__10368 = (function (f,x,y,args){
var arglist__10342 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10355 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10342,fixed_arity__10355) <= fixed_arity__10355)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10342));
} else
{return f.cljs$lang$applyTo(arglist__10342);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10342));
}
});
var apply__10369 = (function (f,x,y,z,args){
var arglist__10358 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10359 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10358,fixed_arity__10359) <= fixed_arity__10359)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10358));
} else
{return f.cljs$lang$applyTo(arglist__10358);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10358));
}
});
var apply__10370 = (function() { 
var G__10379__delegate = function (f,a,b,c,d,args){
var arglist__10362 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10363 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10362,fixed_arity__10363) <= fixed_arity__10363)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10362));
} else
{return f.cljs$lang$applyTo(arglist__10362);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10362));
}
};
var G__10379 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10379__delegate.call(this, f, a, b, c, d, args);
};
G__10379.cljs$lang$maxFixedArity = 5;
G__10379.cljs$lang$applyTo = (function (arglist__10383){
var f = cljs.core.first(arglist__10383);
var a = cljs.core.first(cljs.core.next(arglist__10383));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10383)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10383))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10383)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10383)))));
return G__10379__delegate.call(this, f, a, b, c, d, args);
});
return G__10379;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10366.call(this,f,a);
case  3 :
return apply__10367.call(this,f,a,b);
case  4 :
return apply__10368.call(this,f,a,b,c);
case  5 :
return apply__10369.call(this,f,a,b,c,d);
default:
return apply__10370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10370.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10476){
var obj = cljs.core.first(arglist__10476);
var f = cljs.core.first(cljs.core.next(arglist__10476));
var args = cljs.core.rest(cljs.core.next(arglist__10476));
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
var not_EQ___10480 = (function (x){
return false;
});
var not_EQ___10481 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10482 = (function() { 
var G__10490__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10490 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10490__delegate.call(this, x, y, more);
};
G__10490.cljs$lang$maxFixedArity = 2;
G__10490.cljs$lang$applyTo = (function (arglist__10498){
var x = cljs.core.first(arglist__10498);
var y = cljs.core.first(cljs.core.next(arglist__10498));
var more = cljs.core.rest(cljs.core.next(arglist__10498));
return G__10490__delegate.call(this, x, y, more);
});
return G__10490;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10480.call(this,x);
case  2 :
return not_EQ___10481.call(this,x,y);
default:
return not_EQ___10482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10482.cljs$lang$applyTo;
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
var G__10507 = pred;
var G__10508 = cljs.core.next.call(null,coll);
pred = G__10507;
coll = G__10508;
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
{var or__3548__auto____10511 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10511))
{return or__3548__auto____10511;
} else
{{
var G__10762 = pred;
var G__10763 = cljs.core.next.call(null,coll);
pred = G__10762;
coll = G__10763;
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
var G__10781 = null;
var G__10781__10782 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10781__10783 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10781__10784 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10781__10785 = (function() { 
var G__10788__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10788 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10788__delegate.call(this, x, y, zs);
};
G__10788.cljs$lang$maxFixedArity = 2;
G__10788.cljs$lang$applyTo = (function (arglist__10790){
var x = cljs.core.first(arglist__10790);
var y = cljs.core.first(cljs.core.next(arglist__10790));
var zs = cljs.core.rest(cljs.core.next(arglist__10790));
return G__10788__delegate.call(this, x, y, zs);
});
return G__10788;
})()
;
G__10781 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10781__10782.call(this);
case  1 :
return G__10781__10783.call(this,x);
case  2 :
return G__10781__10784.call(this,x,y);
default:
return G__10781__10785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10781.cljs$lang$maxFixedArity = 2;
G__10781.cljs$lang$applyTo = G__10781__10785.cljs$lang$applyTo;
return G__10781;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10798__delegate = function (args){
return x;
};
var G__10798 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10798__delegate.call(this, args);
};
G__10798.cljs$lang$maxFixedArity = 0;
G__10798.cljs$lang$applyTo = (function (arglist__10799){
var args = cljs.core.seq( arglist__10799 );;
return G__10798__delegate.call(this, args);
});
return G__10798;
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
var comp__10820 = (function (){
return cljs.core.identity;
});
var comp__10821 = (function (f){
return f;
});
var comp__10822 = (function (f,g){
return (function() {
var G__10829 = null;
var G__10829__10831 = (function (){
return f.call(null,g.call(null));
});
var G__10829__10832 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10829__10833 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10829__10834 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10829__10835 = (function() { 
var G__10844__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10844 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10844__delegate.call(this, x, y, z, args);
};
G__10844.cljs$lang$maxFixedArity = 3;
G__10844.cljs$lang$applyTo = (function (arglist__10846){
var x = cljs.core.first(arglist__10846);
var y = cljs.core.first(cljs.core.next(arglist__10846));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10846)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10846)));
return G__10844__delegate.call(this, x, y, z, args);
});
return G__10844;
})()
;
G__10829 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10829__10831.call(this);
case  1 :
return G__10829__10832.call(this,x);
case  2 :
return G__10829__10833.call(this,x,y);
case  3 :
return G__10829__10834.call(this,x,y,z);
default:
return G__10829__10835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10829.cljs$lang$maxFixedArity = 3;
G__10829.cljs$lang$applyTo = G__10829__10835.cljs$lang$applyTo;
return G__10829;
})()
});
var comp__10823 = (function (f,g,h){
return (function() {
var G__10853 = null;
var G__10853__10854 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10853__10855 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10853__10856 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10853__10857 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10853__10858 = (function() { 
var G__10861__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10861 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10861__delegate.call(this, x, y, z, args);
};
G__10861.cljs$lang$maxFixedArity = 3;
G__10861.cljs$lang$applyTo = (function (arglist__10862){
var x = cljs.core.first(arglist__10862);
var y = cljs.core.first(cljs.core.next(arglist__10862));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10862)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10862)));
return G__10861__delegate.call(this, x, y, z, args);
});
return G__10861;
})()
;
G__10853 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10853__10854.call(this);
case  1 :
return G__10853__10855.call(this,x);
case  2 :
return G__10853__10856.call(this,x,y);
case  3 :
return G__10853__10857.call(this,x,y,z);
default:
return G__10853__10858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10853.cljs$lang$maxFixedArity = 3;
G__10853.cljs$lang$applyTo = G__10853__10858.cljs$lang$applyTo;
return G__10853;
})()
});
var comp__10824 = (function() { 
var G__10904__delegate = function (f1,f2,f3,fs){
var fs__10806 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10906__delegate = function (args){
var ret__10814 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10806),args);
var fs__10815 = cljs.core.next.call(null,fs__10806);

while(true){
if(cljs.core.truth_(fs__10815))
{{
var G__10912 = cljs.core.first.call(null,fs__10815).call(null,ret__10814);
var G__10913 = cljs.core.next.call(null,fs__10815);
ret__10814 = G__10912;
fs__10815 = G__10913;
continue;
}
} else
{return ret__10814;
}
break;
}
};
var G__10906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10906__delegate.call(this, args);
};
G__10906.cljs$lang$maxFixedArity = 0;
G__10906.cljs$lang$applyTo = (function (arglist__10964){
var args = cljs.core.seq( arglist__10964 );;
return G__10906__delegate.call(this, args);
});
return G__10906;
})()
;
};
var G__10904 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10904__delegate.call(this, f1, f2, f3, fs);
};
G__10904.cljs$lang$maxFixedArity = 3;
G__10904.cljs$lang$applyTo = (function (arglist__10968){
var f1 = cljs.core.first(arglist__10968);
var f2 = cljs.core.first(cljs.core.next(arglist__10968));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10968)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10968)));
return G__10904__delegate.call(this, f1, f2, f3, fs);
});
return G__10904;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10820.call(this);
case  1 :
return comp__10821.call(this,f1);
case  2 :
return comp__10822.call(this,f1,f2);
case  3 :
return comp__10823.call(this,f1,f2,f3);
default:
return comp__10824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10824.cljs$lang$applyTo;
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
var partial__11010 = (function (f,arg1){
return (function() { 
var G__11018__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11018__delegate.call(this, args);
};
G__11018.cljs$lang$maxFixedArity = 0;
G__11018.cljs$lang$applyTo = (function (arglist__11021){
var args = cljs.core.seq( arglist__11021 );;
return G__11018__delegate.call(this, args);
});
return G__11018;
})()
;
});
var partial__11011 = (function (f,arg1,arg2){
return (function() { 
var G__11024__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11024 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11024__delegate.call(this, args);
};
G__11024.cljs$lang$maxFixedArity = 0;
G__11024.cljs$lang$applyTo = (function (arglist__11026){
var args = cljs.core.seq( arglist__11026 );;
return G__11024__delegate.call(this, args);
});
return G__11024;
})()
;
});
var partial__11012 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11028__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11028 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11028__delegate.call(this, args);
};
G__11028.cljs$lang$maxFixedArity = 0;
G__11028.cljs$lang$applyTo = (function (arglist__11037){
var args = cljs.core.seq( arglist__11037 );;
return G__11028__delegate.call(this, args);
});
return G__11028;
})()
;
});
var partial__11013 = (function() { 
var G__11040__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11041__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11041 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11041__delegate.call(this, args);
};
G__11041.cljs$lang$maxFixedArity = 0;
G__11041.cljs$lang$applyTo = (function (arglist__11049){
var args = cljs.core.seq( arglist__11049 );;
return G__11041__delegate.call(this, args);
});
return G__11041;
})()
;
};
var G__11040 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11040__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11040.cljs$lang$maxFixedArity = 4;
G__11040.cljs$lang$applyTo = (function (arglist__11051){
var f = cljs.core.first(arglist__11051);
var arg1 = cljs.core.first(cljs.core.next(arglist__11051));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11051)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11051))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11051))));
return G__11040__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11040;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11010.call(this,f,arg1);
case  3 :
return partial__11011.call(this,f,arg1,arg2);
case  4 :
return partial__11012.call(this,f,arg1,arg2,arg3);
default:
return partial__11013.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11013.cljs$lang$applyTo;
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
var fnil__11118 = (function (f,x){
return (function() {
var G__11122 = null;
var G__11122__11123 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11122__11124 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11122__11125 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11122__11126 = (function() { 
var G__11135__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11135 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11135__delegate.call(this, a, b, c, ds);
};
G__11135.cljs$lang$maxFixedArity = 3;
G__11135.cljs$lang$applyTo = (function (arglist__11136){
var a = cljs.core.first(arglist__11136);
var b = cljs.core.first(cljs.core.next(arglist__11136));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11136)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11136)));
return G__11135__delegate.call(this, a, b, c, ds);
});
return G__11135;
})()
;
G__11122 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11122__11123.call(this,a);
case  2 :
return G__11122__11124.call(this,a,b);
case  3 :
return G__11122__11125.call(this,a,b,c);
default:
return G__11122__11126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11122.cljs$lang$maxFixedArity = 3;
G__11122.cljs$lang$applyTo = G__11122__11126.cljs$lang$applyTo;
return G__11122;
})()
});
var fnil__11119 = (function (f,x,y){
return (function() {
var G__11138 = null;
var G__11138__11139 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11138__11141 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11138__11142 = (function() { 
var G__11147__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11147 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11147__delegate.call(this, a, b, c, ds);
};
G__11147.cljs$lang$maxFixedArity = 3;
G__11147.cljs$lang$applyTo = (function (arglist__11149){
var a = cljs.core.first(arglist__11149);
var b = cljs.core.first(cljs.core.next(arglist__11149));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11149)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11149)));
return G__11147__delegate.call(this, a, b, c, ds);
});
return G__11147;
})()
;
G__11138 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11138__11139.call(this,a,b);
case  3 :
return G__11138__11141.call(this,a,b,c);
default:
return G__11138__11142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11138.cljs$lang$maxFixedArity = 3;
G__11138.cljs$lang$applyTo = G__11138__11142.cljs$lang$applyTo;
return G__11138;
})()
});
var fnil__11120 = (function (f,x,y,z){
return (function() {
var G__11158 = null;
var G__11158__11159 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11158__11160 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11158__11162 = (function() { 
var G__11170__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11170 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11170__delegate.call(this, a, b, c, ds);
};
G__11170.cljs$lang$maxFixedArity = 3;
G__11170.cljs$lang$applyTo = (function (arglist__11177){
var a = cljs.core.first(arglist__11177);
var b = cljs.core.first(cljs.core.next(arglist__11177));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11177)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11177)));
return G__11170__delegate.call(this, a, b, c, ds);
});
return G__11170;
})()
;
G__11158 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11158__11159.call(this,a,b);
case  3 :
return G__11158__11160.call(this,a,b,c);
default:
return G__11158__11162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11158.cljs$lang$maxFixedArity = 3;
G__11158.cljs$lang$applyTo = G__11158__11162.cljs$lang$applyTo;
return G__11158;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11118.call(this,f,x);
case  3 :
return fnil__11119.call(this,f,x,y);
case  4 :
return fnil__11120.call(this,f,x,y,z);
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
var mapi__11203 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11191))
{var s__11194 = temp__3698__auto____11191;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11194)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11194)));
} else
{return null;
}
})));
});

return mapi__11203.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11218))
{var s__11219 = temp__3698__auto____11218;

var x__11220 = f.call(null,cljs.core.first.call(null,s__11219));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11220)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11219));
} else
{return cljs.core.cons.call(null,x__11220,keep.call(null,f,cljs.core.rest.call(null,s__11219)));
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
var keepi__11249 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11244 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11244))
{var s__11245 = temp__3698__auto____11244;

var x__11246 = f.call(null,idx,cljs.core.first.call(null,s__11245));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11246)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11245));
} else
{return cljs.core.cons.call(null,x__11246,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11245)));
}
} else
{return null;
}
})));
});

return keepi__11249.call(null,0,coll);
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
var every_pred__11373 = (function (p){
return (function() {
var ep1 = null;
var ep1__11381 = (function (){
return true;
});
var ep1__11382 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11383 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11273 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11273))
{return p.call(null,y);
} else
{return and__3546__auto____11273;
}
})());
});
var ep1__11384 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11275 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11275))
{var and__3546__auto____11277 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11277))
{return p.call(null,z);
} else
{return and__3546__auto____11277;
}
} else
{return and__3546__auto____11275;
}
})());
});
var ep1__11385 = (function() { 
var G__11393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11281 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11281))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11281;
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
G__11393.cljs$lang$applyTo = (function (arglist__11394){
var x = cljs.core.first(arglist__11394);
var y = cljs.core.first(cljs.core.next(arglist__11394));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11394)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11394)));
return G__11393__delegate.call(this, x, y, z, args);
});
return G__11393;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11381.call(this);
case  1 :
return ep1__11382.call(this,x);
case  2 :
return ep1__11383.call(this,x,y);
case  3 :
return ep1__11384.call(this,x,y,z);
default:
return ep1__11385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11385.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11374 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11395 = (function (){
return true;
});
var ep2__11396 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11285 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11285))
{return p2.call(null,x);
} else
{return and__3546__auto____11285;
}
})());
});
var ep2__11397 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11287 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11287))
{var and__3546__auto____11289 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11289))
{var and__3546__auto____11307 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11307))
{return p2.call(null,y);
} else
{return and__3546__auto____11307;
}
} else
{return and__3546__auto____11289;
}
} else
{return and__3546__auto____11287;
}
})());
});
var ep2__11398 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11308 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11308))
{var and__3546__auto____11309 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11309))
{var and__3546__auto____11310 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11310))
{var and__3546__auto____11311 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11311))
{var and__3546__auto____11312 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11312))
{return p2.call(null,z);
} else
{return and__3546__auto____11312;
}
} else
{return and__3546__auto____11311;
}
} else
{return and__3546__auto____11310;
}
} else
{return and__3546__auto____11309;
}
} else
{return and__3546__auto____11308;
}
})());
});
var ep2__11399 = (function() { 
var G__11413__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11314 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11314))
{return cljs.core.every_QMARK_.call(null,(function (p1__11226_SHARP_){
var and__3546__auto____11316 = p1.call(null,p1__11226_SHARP_);

if(cljs.core.truth_(and__3546__auto____11316))
{return p2.call(null,p1__11226_SHARP_);
} else
{return and__3546__auto____11316;
}
}),args);
} else
{return and__3546__auto____11314;
}
})());
};
var G__11413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11413__delegate.call(this, x, y, z, args);
};
G__11413.cljs$lang$maxFixedArity = 3;
G__11413.cljs$lang$applyTo = (function (arglist__11415){
var x = cljs.core.first(arglist__11415);
var y = cljs.core.first(cljs.core.next(arglist__11415));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11415)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11415)));
return G__11413__delegate.call(this, x, y, z, args);
});
return G__11413;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11395.call(this);
case  1 :
return ep2__11396.call(this,x);
case  2 :
return ep2__11397.call(this,x,y);
case  3 :
return ep2__11398.call(this,x,y,z);
default:
return ep2__11399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11399.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11375 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11437 = (function (){
return true;
});
var ep3__11438 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11320 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11320))
{var and__3546__auto____11321 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11321))
{return p3.call(null,x);
} else
{return and__3546__auto____11321;
}
} else
{return and__3546__auto____11320;
}
})());
});
var ep3__11439 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11323 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11323))
{var and__3546__auto____11324 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11324))
{var and__3546__auto____11327 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11327))
{var and__3546__auto____11328 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11328))
{var and__3546__auto____11336 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11336))
{return p3.call(null,y);
} else
{return and__3546__auto____11336;
}
} else
{return and__3546__auto____11328;
}
} else
{return and__3546__auto____11327;
}
} else
{return and__3546__auto____11324;
}
} else
{return and__3546__auto____11323;
}
})());
});
var ep3__11440 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11339 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11339))
{var and__3546__auto____11340 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11340))
{var and__3546__auto____11341 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11341))
{var and__3546__auto____11342 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11342))
{var and__3546__auto____11343 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11343))
{var and__3546__auto____11344 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11344))
{var and__3546__auto____11345 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11345))
{var and__3546__auto____11347 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11347))
{return p3.call(null,z);
} else
{return and__3546__auto____11347;
}
} else
{return and__3546__auto____11345;
}
} else
{return and__3546__auto____11344;
}
} else
{return and__3546__auto____11343;
}
} else
{return and__3546__auto____11342;
}
} else
{return and__3546__auto____11341;
}
} else
{return and__3546__auto____11340;
}
} else
{return and__3546__auto____11339;
}
})());
});
var ep3__11441 = (function() { 
var G__11459__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11349 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11349))
{return cljs.core.every_QMARK_.call(null,(function (p1__11227_SHARP_){
var and__3546__auto____11350 = p1.call(null,p1__11227_SHARP_);

if(cljs.core.truth_(and__3546__auto____11350))
{var and__3546__auto____11351 = p2.call(null,p1__11227_SHARP_);

if(cljs.core.truth_(and__3546__auto____11351))
{return p3.call(null,p1__11227_SHARP_);
} else
{return and__3546__auto____11351;
}
} else
{return and__3546__auto____11350;
}
}),args);
} else
{return and__3546__auto____11349;
}
})());
};
var G__11459 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11459__delegate.call(this, x, y, z, args);
};
G__11459.cljs$lang$maxFixedArity = 3;
G__11459.cljs$lang$applyTo = (function (arglist__11469){
var x = cljs.core.first(arglist__11469);
var y = cljs.core.first(cljs.core.next(arglist__11469));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11469)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11469)));
return G__11459__delegate.call(this, x, y, z, args);
});
return G__11459;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11437.call(this);
case  1 :
return ep3__11438.call(this,x);
case  2 :
return ep3__11439.call(this,x,y);
case  3 :
return ep3__11440.call(this,x,y,z);
default:
return ep3__11441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11441.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11376 = (function() { 
var G__11484__delegate = function (p1,p2,p3,ps){
var ps__11353 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11488 = (function (){
return true;
});
var epn__11489 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11230_SHARP_){
return p1__11230_SHARP_.call(null,x);
}),ps__11353);
});
var epn__11490 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11231_SHARP_){
var and__3546__auto____11355 = p1__11231_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11355))
{return p1__11231_SHARP_.call(null,y);
} else
{return and__3546__auto____11355;
}
}),ps__11353);
});
var epn__11491 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11232_SHARP_){
var and__3546__auto____11359 = p1__11232_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11359))
{var and__3546__auto____11361 = p1__11232_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11361))
{return p1__11232_SHARP_.call(null,z);
} else
{return and__3546__auto____11361;
}
} else
{return and__3546__auto____11359;
}
}),ps__11353);
});
var epn__11492 = (function() { 
var G__11507__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11366 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11366))
{return cljs.core.every_QMARK_.call(null,(function (p1__11239_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11239_SHARP_,args);
}),ps__11353);
} else
{return and__3546__auto____11366;
}
})());
};
var G__11507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11507__delegate.call(this, x, y, z, args);
};
G__11507.cljs$lang$maxFixedArity = 3;
G__11507.cljs$lang$applyTo = (function (arglist__11512){
var x = cljs.core.first(arglist__11512);
var y = cljs.core.first(cljs.core.next(arglist__11512));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11512)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11512)));
return G__11507__delegate.call(this, x, y, z, args);
});
return G__11507;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11488.call(this);
case  1 :
return epn__11489.call(this,x);
case  2 :
return epn__11490.call(this,x,y);
case  3 :
return epn__11491.call(this,x,y,z);
default:
return epn__11492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11492.cljs$lang$applyTo;
return epn;
})()
};
var G__11484 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11484__delegate.call(this, p1, p2, p3, ps);
};
G__11484.cljs$lang$maxFixedArity = 3;
G__11484.cljs$lang$applyTo = (function (arglist__11517){
var p1 = cljs.core.first(arglist__11517);
var p2 = cljs.core.first(cljs.core.next(arglist__11517));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11517)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11517)));
return G__11484__delegate.call(this, p1, p2, p3, ps);
});
return G__11484;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11373.call(this,p1);
case  2 :
return every_pred__11374.call(this,p1,p2);
case  3 :
return every_pred__11375.call(this,p1,p2,p3);
default:
return every_pred__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11376.cljs$lang$applyTo;
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
var some_fn__11681 = (function (p){
return (function() {
var sp1 = null;
var sp1__11688 = (function (){
return null;
});
var sp1__11689 = (function (x){
return p.call(null,x);
});
var sp1__11690 = (function (x,y){
var or__3548__auto____11531 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
} else
{return p.call(null,y);
}
});
var sp1__11691 = (function (x,y,z){
var or__3548__auto____11533 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{var or__3548__auto____11534 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11534))
{return or__3548__auto____11534;
} else
{return p.call(null,z);
}
}
});
var sp1__11692 = (function() { 
var G__11694__delegate = function (x,y,z,args){
var or__3548__auto____11535 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11535))
{return or__3548__auto____11535;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11694 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11694__delegate.call(this, x, y, z, args);
};
G__11694.cljs$lang$maxFixedArity = 3;
G__11694.cljs$lang$applyTo = (function (arglist__11695){
var x = cljs.core.first(arglist__11695);
var y = cljs.core.first(cljs.core.next(arglist__11695));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11695)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11695)));
return G__11694__delegate.call(this, x, y, z, args);
});
return G__11694;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11688.call(this);
case  1 :
return sp1__11689.call(this,x);
case  2 :
return sp1__11690.call(this,x,y);
case  3 :
return sp1__11691.call(this,x,y,z);
default:
return sp1__11692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11692.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11684 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11696 = (function (){
return null;
});
var sp2__11697 = (function (x){
var or__3548__auto____11537 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11537))
{return or__3548__auto____11537;
} else
{return p2.call(null,x);
}
});
var sp2__11698 = (function (x,y){
var or__3548__auto____11540 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11540))
{return or__3548__auto____11540;
} else
{var or__3548__auto____11541 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11541))
{return or__3548__auto____11541;
} else
{var or__3548__auto____11542 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11699 = (function (x,y,z){
var or__3548__auto____11547 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11547))
{return or__3548__auto____11547;
} else
{var or__3548__auto____11549 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11549))
{return or__3548__auto____11549;
} else
{var or__3548__auto____11551 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11551))
{return or__3548__auto____11551;
} else
{var or__3548__auto____11553 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{var or__3548__auto____11555 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11555))
{return or__3548__auto____11555;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11700 = (function() { 
var G__11702__delegate = function (x,y,z,args){
var or__3548__auto____11566 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11566))
{return or__3548__auto____11566;
} else
{return cljs.core.some.call(null,(function (p1__11261_SHARP_){
var or__3548__auto____11571 = p1.call(null,p1__11261_SHARP_);

if(cljs.core.truth_(or__3548__auto____11571))
{return or__3548__auto____11571;
} else
{return p2.call(null,p1__11261_SHARP_);
}
}),args);
}
};
var G__11702 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11702__delegate.call(this, x, y, z, args);
};
G__11702.cljs$lang$maxFixedArity = 3;
G__11702.cljs$lang$applyTo = (function (arglist__11800){
var x = cljs.core.first(arglist__11800);
var y = cljs.core.first(cljs.core.next(arglist__11800));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11800)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11800)));
return G__11702__delegate.call(this, x, y, z, args);
});
return G__11702;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11696.call(this);
case  1 :
return sp2__11697.call(this,x);
case  2 :
return sp2__11698.call(this,x,y);
case  3 :
return sp2__11699.call(this,x,y,z);
default:
return sp2__11700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11700.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11685 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11802 = (function (){
return null;
});
var sp3__11803 = (function (x){
var or__3548__auto____11574 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11574))
{return or__3548__auto____11574;
} else
{var or__3548__auto____11575 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11575))
{return or__3548__auto____11575;
} else
{return p3.call(null,x);
}
}
});
var sp3__11804 = (function (x,y){
var or__3548__auto____11577 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11577))
{return or__3548__auto____11577;
} else
{var or__3548__auto____11579 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11579))
{return or__3548__auto____11579;
} else
{var or__3548__auto____11580 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11580))
{return or__3548__auto____11580;
} else
{var or__3548__auto____11583 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11583))
{return or__3548__auto____11583;
} else
{var or__3548__auto____11584 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11584))
{return or__3548__auto____11584;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11805 = (function (x,y,z){
var or__3548__auto____11587 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11587))
{return or__3548__auto____11587;
} else
{var or__3548__auto____11641 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11641))
{return or__3548__auto____11641;
} else
{var or__3548__auto____11643 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11643))
{return or__3548__auto____11643;
} else
{var or__3548__auto____11644 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11647 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11647))
{return or__3548__auto____11647;
} else
{var or__3548__auto____11648 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11648))
{return or__3548__auto____11648;
} else
{var or__3548__auto____11649 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11649))
{return or__3548__auto____11649;
} else
{var or__3548__auto____11651 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11651))
{return or__3548__auto____11651;
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
var sp3__11806 = (function() { 
var G__11809__delegate = function (x,y,z,args){
var or__3548__auto____11653 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11653))
{return or__3548__auto____11653;
} else
{return cljs.core.some.call(null,(function (p1__11262_SHARP_){
var or__3548__auto____11665 = p1.call(null,p1__11262_SHARP_);

if(cljs.core.truth_(or__3548__auto____11665))
{return or__3548__auto____11665;
} else
{var or__3548__auto____11668 = p2.call(null,p1__11262_SHARP_);

if(cljs.core.truth_(or__3548__auto____11668))
{return or__3548__auto____11668;
} else
{return p3.call(null,p1__11262_SHARP_);
}
}
}),args);
}
};
var G__11809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11809__delegate.call(this, x, y, z, args);
};
G__11809.cljs$lang$maxFixedArity = 3;
G__11809.cljs$lang$applyTo = (function (arglist__11810){
var x = cljs.core.first(arglist__11810);
var y = cljs.core.first(cljs.core.next(arglist__11810));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11810)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11810)));
return G__11809__delegate.call(this, x, y, z, args);
});
return G__11809;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11802.call(this);
case  1 :
return sp3__11803.call(this,x);
case  2 :
return sp3__11804.call(this,x,y);
case  3 :
return sp3__11805.call(this,x,y,z);
default:
return sp3__11806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11806.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11686 = (function() { 
var G__11812__delegate = function (p1,p2,p3,ps){
var ps__11669 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11813 = (function (){
return null;
});
var spn__11814 = (function (x){
return cljs.core.some.call(null,(function (p1__11263_SHARP_){
return p1__11263_SHARP_.call(null,x);
}),ps__11669);
});
var spn__11815 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11264_SHARP_){
var or__3548__auto____11671 = p1__11264_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11671))
{return or__3548__auto____11671;
} else
{return p1__11264_SHARP_.call(null,y);
}
}),ps__11669);
});
var spn__11816 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11265_SHARP_){
var or__3548__auto____11673 = p1__11265_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11673))
{return or__3548__auto____11673;
} else
{var or__3548__auto____11674 = p1__11265_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11674))
{return or__3548__auto____11674;
} else
{return p1__11265_SHARP_.call(null,z);
}
}
}),ps__11669);
});
var spn__11817 = (function() { 
var G__11932__delegate = function (x,y,z,args){
var or__3548__auto____11677 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11677))
{return or__3548__auto____11677;
} else
{return cljs.core.some.call(null,(function (p1__11267_SHARP_){
return cljs.core.some.call(null,p1__11267_SHARP_,args);
}),ps__11669);
}
};
var G__11932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11932__delegate.call(this, x, y, z, args);
};
G__11932.cljs$lang$maxFixedArity = 3;
G__11932.cljs$lang$applyTo = (function (arglist__11933){
var x = cljs.core.first(arglist__11933);
var y = cljs.core.first(cljs.core.next(arglist__11933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11933)));
return G__11932__delegate.call(this, x, y, z, args);
});
return G__11932;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11813.call(this);
case  1 :
return spn__11814.call(this,x);
case  2 :
return spn__11815.call(this,x,y);
case  3 :
return spn__11816.call(this,x,y,z);
default:
return spn__11817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11817.cljs$lang$applyTo;
return spn;
})()
};
var G__11812 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11812__delegate.call(this, p1, p2, p3, ps);
};
G__11812.cljs$lang$maxFixedArity = 3;
G__11812.cljs$lang$applyTo = (function (arglist__11934){
var p1 = cljs.core.first(arglist__11934);
var p2 = cljs.core.first(cljs.core.next(arglist__11934));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11934)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11934)));
return G__11812__delegate.call(this, p1, p2, p3, ps);
});
return G__11812;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11681.call(this,p1);
case  2 :
return some_fn__11684.call(this,p1,p2);
case  3 :
return some_fn__11685.call(this,p1,p2,p3);
default:
return some_fn__11686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11686.cljs$lang$applyTo;
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
var map__11965 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11940 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11940))
{var s__11941 = temp__3698__auto____11940;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11941)),map.call(null,f,cljs.core.rest.call(null,s__11941)));
} else
{return null;
}
})));
});
var map__11966 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11946 = cljs.core.seq.call(null,c1);
var s2__11947 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11948 = s1__11946;

if(cljs.core.truth_(and__3546__auto____11948))
{return s2__11947;
} else
{return and__3546__auto____11948;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11946),cljs.core.first.call(null,s2__11947)),map.call(null,f,cljs.core.rest.call(null,s1__11946),cljs.core.rest.call(null,s2__11947)));
} else
{return null;
}
})));
});
var map__11967 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11949 = cljs.core.seq.call(null,c1);
var s2__11950 = cljs.core.seq.call(null,c2);
var s3__11951 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11952 = s1__11949;

if(cljs.core.truth_(and__3546__auto____11952))
{var and__3546__auto____11953 = s2__11950;

if(cljs.core.truth_(and__3546__auto____11953))
{return s3__11951;
} else
{return and__3546__auto____11953;
}
} else
{return and__3546__auto____11952;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11949),cljs.core.first.call(null,s2__11950),cljs.core.first.call(null,s3__11951)),map.call(null,f,cljs.core.rest.call(null,s1__11949),cljs.core.rest.call(null,s2__11950),cljs.core.rest.call(null,s3__11951)));
} else
{return null;
}
})));
});
var map__11968 = (function() { 
var G__11972__delegate = function (f,c1,c2,c3,colls){
var step__11960 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11958 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11958)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11958),step.call(null,map.call(null,cljs.core.rest,ss__11958)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11526_SHARP_){
return cljs.core.apply.call(null,f,p1__11526_SHARP_);
}),step__11960.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11972 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11972__delegate.call(this, f, c1, c2, c3, colls);
};
G__11972.cljs$lang$maxFixedArity = 4;
G__11972.cljs$lang$applyTo = (function (arglist__11976){
var f = cljs.core.first(arglist__11976);
var c1 = cljs.core.first(cljs.core.next(arglist__11976));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11976)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11976))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11976))));
return G__11972__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11972;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11965.call(this,f,c1);
case  3 :
return map__11966.call(this,f,c1,c2);
case  4 :
return map__11967.call(this,f,c1,c2,c3);
default:
return map__11968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11968.cljs$lang$applyTo;
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
{var temp__3698__auto____11981 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11981))
{var s__11983 = temp__3698__auto____11981;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11983),take.call(null,(n - 1),cljs.core.rest.call(null,s__11983)));
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
var step__11999 = (function (n,coll){
while(true){
var s__11994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11995 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11995))
{return s__11994;
} else
{return and__3546__auto____11995;
}
})()))
{{
var G__12077 = (n - 1);
var G__12078 = cljs.core.rest.call(null,s__11994);
n = G__12077;
coll = G__12078;
continue;
}
} else
{return s__11994;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11999.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12087 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12088 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12087.call(this,n);
case  2 :
return drop_last__12088.call(this,n,s);
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
var s__12092 = cljs.core.seq.call(null,coll);
var lead__12093 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12093))
{{
var G__12096 = cljs.core.next.call(null,s__12092);
var G__12097 = cljs.core.next.call(null,lead__12093);
s__12092 = G__12096;
lead__12093 = G__12097;
continue;
}
} else
{return s__12092;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12106 = (function (pred,coll){
while(true){
var s__12102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12103 = s__12102;

if(cljs.core.truth_(and__3546__auto____12103))
{return pred.call(null,cljs.core.first.call(null,s__12102));
} else
{return and__3546__auto____12103;
}
})()))
{{
var G__12108 = pred;
var G__12109 = cljs.core.rest.call(null,s__12102);
pred = G__12108;
coll = G__12109;
continue;
}
} else
{return s__12102;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12106.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12111 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12111))
{var s__12112 = temp__3698__auto____12111;

return cljs.core.concat.call(null,s__12112,cycle.call(null,s__12112));
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
var repeat__12113 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12114 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12113.call(this,n);
case  2 :
return repeat__12114.call(this,n,x);
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
var repeatedly__12122 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12123 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12122.call(this,n);
case  2 :
return repeatedly__12123.call(this,n,f);
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
var interleave__12235 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12129 = cljs.core.seq.call(null,c1);
var s2__12130 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12131 = s1__12129;

if(cljs.core.truth_(and__3546__auto____12131))
{return s2__12130;
} else
{return and__3546__auto____12131;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12129),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12130),interleave.call(null,cljs.core.rest.call(null,s1__12129),cljs.core.rest.call(null,s2__12130))));
} else
{return null;
}
})));
});
var interleave__12236 = (function() { 
var G__12239__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12180 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12180)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12180),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12180)));
} else
{return null;
}
})));
};
var G__12239 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12239__delegate.call(this, c1, c2, colls);
};
G__12239.cljs$lang$maxFixedArity = 2;
G__12239.cljs$lang$applyTo = (function (arglist__12251){
var c1 = cljs.core.first(arglist__12251);
var c2 = cljs.core.first(cljs.core.next(arglist__12251));
var colls = cljs.core.rest(cljs.core.next(arglist__12251));
return G__12239__delegate.call(this, c1, c2, colls);
});
return G__12239;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12235.call(this,c1,c2);
default:
return interleave__12236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12236.cljs$lang$applyTo;
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
var cat__12269 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12267))
{var coll__12268 = temp__3695__auto____12267;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12268),cat.call(null,cljs.core.rest.call(null,coll__12268),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12269.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12275 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12276 = (function() { 
var G__12279__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12279 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12279__delegate.call(this, f, coll, colls);
};
G__12279.cljs$lang$maxFixedArity = 2;
G__12279.cljs$lang$applyTo = (function (arglist__12280){
var f = cljs.core.first(arglist__12280);
var coll = cljs.core.first(cljs.core.next(arglist__12280));
var colls = cljs.core.rest(cljs.core.next(arglist__12280));
return G__12279__delegate.call(this, f, coll, colls);
});
return G__12279;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12275.call(this,f,coll);
default:
return mapcat__12276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12276.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12281 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12281))
{var s__12282 = temp__3698__auto____12281;

var f__12283 = cljs.core.first.call(null,s__12282);
var r__12285 = cljs.core.rest.call(null,s__12282);

if(cljs.core.truth_(pred.call(null,f__12283)))
{return cljs.core.cons.call(null,f__12283,filter.call(null,pred,r__12285));
} else
{return filter.call(null,pred,r__12285);
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
var walk__12298 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12298.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12291_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12291_SHARP_));
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
var partition__12410 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12411 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12362 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12362))
{var s__12363 = temp__3698__auto____12362;

var p__12365 = cljs.core.take.call(null,n,s__12363);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12365))))
{return cljs.core.cons.call(null,p__12365,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12363)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12412 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12395 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12395))
{var s__12397 = temp__3698__auto____12395;

var p__12399 = cljs.core.take.call(null,n,s__12397);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12399))))
{return cljs.core.cons.call(null,p__12399,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12397)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12399,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12410.call(this,n,step);
case  3 :
return partition__12411.call(this,n,step,pad);
case  4 :
return partition__12412.call(this,n,step,pad,coll);
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
var get_in__12450 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12451 = (function (m,ks,not_found){
var sentinel__12443 = cljs.core.lookup_sentinel;
var m__12446 = m;
var ks__12448 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12448))
{var m__12449 = cljs.core.get.call(null,m__12446,cljs.core.first.call(null,ks__12448),sentinel__12443);

if(cljs.core.truth_((sentinel__12443 === m__12449)))
{return not_found;
} else
{{
var G__12453 = sentinel__12443;
var G__12454 = m__12449;
var G__12455 = cljs.core.next.call(null,ks__12448);
sentinel__12443 = G__12453;
m__12446 = G__12454;
ks__12448 = G__12455;
continue;
}
}
} else
{return m__12446;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12450.call(this,m,ks);
case  3 :
return get_in__12451.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12456,v){
var vec__12460__12461 = p__12456;
var k__12463 = cljs.core.nth.call(null,vec__12460__12461,0,null);
var ks__12468 = cljs.core.nthnext.call(null,vec__12460__12461,1);

if(cljs.core.truth_(ks__12468))
{return cljs.core.assoc.call(null,m,k__12463,assoc_in.call(null,cljs.core.get.call(null,m,k__12463),ks__12468,v));
} else
{return cljs.core.assoc.call(null,m,k__12463,v);
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
var update_in__delegate = function (m,p__12577,f,args){
var vec__12578__12579 = p__12577;
var k__12580 = cljs.core.nth.call(null,vec__12578__12579,0,null);
var ks__12581 = cljs.core.nthnext.call(null,vec__12578__12579,1);

if(cljs.core.truth_(ks__12581))
{return cljs.core.assoc.call(null,m,k__12580,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12580),ks__12581,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12580,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12580),args));
}
};
var update_in = function (m,p__12577,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12577, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12584){
var m = cljs.core.first(arglist__12584);
var p__12577 = cljs.core.first(cljs.core.next(arglist__12584));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12584)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12584)));
return update_in__delegate.call(this, m, p__12577, f, args);
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
var this__12596 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12642 = null;
var G__12642__12643 = (function (coll,k){
var this__12598 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12642__12644 = (function (coll,k,not_found){
var this__12603 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12642 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12642__12643.call(this,coll,k);
case  3 :
return G__12642__12644.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12642;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12605 = this;
var new_array__12606 = cljs.core.aclone.call(null,this__12605.array);

(new_array__12606[k] = v);
return (new cljs.core.Vector(this__12605.meta,new_array__12606));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12647 = null;
var G__12647__12648 = (function (coll,k){
var this__12607 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12647__12649 = (function (coll,k,not_found){
var this__12609 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12647 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12647__12648.call(this,coll,k);
case  3 :
return G__12647__12649.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12647;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12611 = this;
var new_array__12612 = cljs.core.aclone.call(null,this__12611.array);

new_array__12612.push(o);
return (new cljs.core.Vector(this__12611.meta,new_array__12612));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12653 = null;
var G__12653__12654 = (function (v,f){
var this__12613 = this;
return cljs.core.ci_reduce.call(null,this__12613.array,f);
});
var G__12653__12655 = (function (v,f,start){
var this__12614 = this;
return cljs.core.ci_reduce.call(null,this__12614.array,f,start);
});
G__12653 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12653__12654.call(this,v,f);
case  3 :
return G__12653__12655.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12653;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12615 = this;
if(cljs.core.truth_((this__12615.array.length > 0)))
{var vector_seq__12617 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12615.array.length)))
{return cljs.core.cons.call(null,(this__12615.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12617.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12618 = this;
return this__12618.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12620 = this;
var count__12622 = this__12620.array.length;

if(cljs.core.truth_((count__12622 > 0)))
{return (this__12620.array[(count__12622 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12624 = this;
if(cljs.core.truth_((this__12624.array.length > 0)))
{var new_array__12626 = cljs.core.aclone.call(null,this__12624.array);

new_array__12626.pop();
return (new cljs.core.Vector(this__12624.meta,new_array__12626));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12628 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12630 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12632 = this;
return (new cljs.core.Vector(meta,this__12632.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12634 = this;
return this__12634.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12667 = null;
var G__12667__12669 = (function (coll,n){
var this__12635 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12636 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12636))
{return (n < this__12635.array.length);
} else
{return and__3546__auto____12636;
}
})()))
{return (this__12635.array[n]);
} else
{return null;
}
});
var G__12667__12670 = (function (coll,n,not_found){
var this__12637 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12638 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12638))
{return (n < this__12637.array.length);
} else
{return and__3546__auto____12638;
}
})()))
{return (this__12637.array[n]);
} else
{return not_found;
}
});
G__12667 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12667__12669.call(this,coll,n);
case  3 :
return G__12667__12670.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12667;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12639 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12639.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12677){
var args = cljs.core.seq( arglist__12677 );;
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
var this__12683 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12787 = null;
var G__12787__12788 = (function (coll,k){
var this__12684 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12787__12789 = (function (coll,k,not_found){
var this__12685 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12787 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12787__12788.call(this,coll,k);
case  3 :
return G__12787__12789.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12787;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12686 = this;
var v_pos__12687 = (this__12686.start + key);

return (new cljs.core.Subvec(this__12686.meta,cljs.core._assoc.call(null,this__12686.v,v_pos__12687,val),this__12686.start,((this__12686.end > (v_pos__12687 + 1)) ? this__12686.end : (v_pos__12687 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12791 = null;
var G__12791__12792 = (function (coll,k){
var this__12688 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12791__12793 = (function (coll,k,not_found){
var this__12689 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12791 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12791__12792.call(this,coll,k);
case  3 :
return G__12791__12793.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12791;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12703 = this;
return (new cljs.core.Subvec(this__12703.meta,cljs.core._assoc_n.call(null,this__12703.v,this__12703.end,o),this__12703.start,(this__12703.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12800 = null;
var G__12800__12802 = (function (coll,f){
var this__12761 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12800__12803 = (function (coll,f,start){
var this__12762 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12800 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12800__12802.call(this,coll,f);
case  3 :
return G__12800__12803.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12800;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12771 = this;
var subvec_seq__12774 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12771.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12771.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12774.call(null,this__12771.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12775 = this;
return (this__12775.end - this__12775.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12776 = this;
return cljs.core._nth.call(null,this__12776.v,(this__12776.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12777 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12777.start,this__12777.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12777.meta,this__12777.v,this__12777.start,(this__12777.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12778 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12779 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12780 = this;
return (new cljs.core.Subvec(meta,this__12780.v,this__12780.start,this__12780.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12781 = this;
return this__12781.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12820 = null;
var G__12820__12822 = (function (coll,n){
var this__12783 = this;
return cljs.core._nth.call(null,this__12783.v,(this__12783.start + n));
});
var G__12820__12823 = (function (coll,n,not_found){
var this__12784 = this;
return cljs.core._nth.call(null,this__12784.v,(this__12784.start + n),not_found);
});
G__12820 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12820__12822.call(this,coll,n);
case  3 :
return G__12820__12823.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12820;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12785 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12785.meta);
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
var subvec__12847 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12848 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12847.call(this,v,start);
case  3 :
return subvec__12848.call(this,v,start,end);
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
var this__12851 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12852 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12853 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12854 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12854.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12856 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12858 = this;
return cljs.core._first.call(null,this__12858.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12860 = this;
var temp__3695__auto____12862 = cljs.core.next.call(null,this__12860.front);

if(cljs.core.truth_(temp__3695__auto____12862))
{var f1__12864 = temp__3695__auto____12862;

return (new cljs.core.PersistentQueueSeq(this__12860.meta,f1__12864,this__12860.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12860.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12860.meta,this__12860.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12867 = this;
return this__12867.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12870 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12870.front,this__12870.rear));
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
var this__12883 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12884 = this;
if(cljs.core.truth_(this__12884.front))
{return (new cljs.core.PersistentQueue(this__12884.meta,(this__12884.count + 1),this__12884.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12885 = this__12884.rear;

if(cljs.core.truth_(or__3548__auto____12885))
{return or__3548__auto____12885;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12884.meta,(this__12884.count + 1),cljs.core.conj.call(null,this__12884.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12886 = this;
var rear__12887 = cljs.core.seq.call(null,this__12886.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12888 = this__12886.front;

if(cljs.core.truth_(or__3548__auto____12888))
{return or__3548__auto____12888;
} else
{return rear__12887;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12886.front,cljs.core.seq.call(null,rear__12887)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12890 = this;
return this__12890.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12894 = this;
return cljs.core._first.call(null,this__12894.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12895 = this;
if(cljs.core.truth_(this__12895.front))
{var temp__3695__auto____12896 = cljs.core.next.call(null,this__12895.front);

if(cljs.core.truth_(temp__3695__auto____12896))
{var f1__12897 = temp__3695__auto____12896;

return (new cljs.core.PersistentQueue(this__12895.meta,(this__12895.count - 1),f1__12897,this__12895.rear));
} else
{return (new cljs.core.PersistentQueue(this__12895.meta,(this__12895.count - 1),cljs.core.seq.call(null,this__12895.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12899 = this;
return cljs.core.first.call(null,this__12899.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12901 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12902 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12903 = this;
return (new cljs.core.PersistentQueue(meta,this__12903.count,this__12903.front,this__12903.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12904 = this;
return this__12904.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12905 = this;
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
var this__12913 = this;
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
var len__12965 = array.length;

var i__12966 = 0;

while(true){
if(cljs.core.truth_((i__12966 < len__12965)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12966]))))
{return i__12966;
} else
{{
var G__12967 = (i__12966 + incr);
i__12966 = G__12967;
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
var obj_map_contains_key_QMARK___12969 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12970 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12968 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12968))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12968;
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
return obj_map_contains_key_QMARK___12969.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12970.call(this,k,strobj,true_val,false_val);
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
var this__12976 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13099 = null;
var G__13099__13101 = (function (coll,k){
var this__12978 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13099__13102 = (function (coll,k,not_found){
var this__12979 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12979.strobj,(this__12979.strobj[k]),not_found);
});
G__13099 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13099__13101.call(this,coll,k);
case  3 :
return G__13099__13102.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13099;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12980 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12981 = goog.object.clone.call(null,this__12980.strobj);
var overwrite_QMARK___12982 = new_strobj__12981.hasOwnProperty(k);

(new_strobj__12981[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12982))
{return (new cljs.core.ObjMap(this__12980.meta,this__12980.keys,new_strobj__12981));
} else
{var new_keys__12983 = cljs.core.aclone.call(null,this__12980.keys);

new_keys__12983.push(k);
return (new cljs.core.ObjMap(this__12980.meta,new_keys__12983,new_strobj__12981));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12980.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12988 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12988.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13112 = null;
var G__13112__13113 = (function (coll,k){
var this__12989 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13112__13114 = (function (coll,k,not_found){
var this__12990 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13112 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13112__13113.call(this,coll,k);
case  3 :
return G__13112__13114.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13112;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12991 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12992 = this;
if(cljs.core.truth_((this__12992.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12973_SHARP_){
return cljs.core.vector.call(null,p1__12973_SHARP_,(this__12992.strobj[p1__12973_SHARP_]));
}),this__12992.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13080 = this;
return this__13080.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13084 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13090 = this;
return (new cljs.core.ObjMap(meta,this__13090.keys,this__13090.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13091 = this;
return this__13091.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13092 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13092.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13094 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13095 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13095))
{return this__13094.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13095;
}
})()))
{var new_keys__13096 = cljs.core.aclone.call(null,this__13094.keys);
var new_strobj__13097 = goog.object.clone.call(null,this__13094.strobj);

new_keys__13096.splice(cljs.core.scan_array.call(null,1,k,new_keys__13096),1);
cljs.core.js_delete.call(null,new_strobj__13097,k);
return (new cljs.core.ObjMap(this__13094.meta,new_keys__13096,new_strobj__13097));
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
var this__13139 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13333 = null;
var G__13333__13334 = (function (coll,k){
var this__13141 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13333__13335 = (function (coll,k,not_found){
var this__13142 = this;
var bucket__13146 = (this__13142.hashobj[cljs.core.hash.call(null,k)]);
var i__13150 = (cljs.core.truth_(bucket__13146)?cljs.core.scan_array.call(null,2,k,bucket__13146):null);

if(cljs.core.truth_(i__13150))
{return (bucket__13146[(i__13150 + 1)]);
} else
{return not_found;
}
});
G__13333 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13333__13334.call(this,coll,k);
case  3 :
return G__13333__13335.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13333;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13152 = this;
var h__13156 = cljs.core.hash.call(null,k);
var bucket__13170 = (this__13152.hashobj[h__13156]);

if(cljs.core.truth_(bucket__13170))
{var new_bucket__13173 = cljs.core.aclone.call(null,bucket__13170);
var new_hashobj__13174 = goog.object.clone.call(null,this__13152.hashobj);

(new_hashobj__13174[h__13156] = new_bucket__13173);
var temp__3695__auto____13201 = cljs.core.scan_array.call(null,2,k,new_bucket__13173);

if(cljs.core.truth_(temp__3695__auto____13201))
{var i__13202 = temp__3695__auto____13201;

(new_bucket__13173[(i__13202 + 1)] = v);
return (new cljs.core.HashMap(this__13152.meta,this__13152.count,new_hashobj__13174));
} else
{new_bucket__13173.push(k,v);
return (new cljs.core.HashMap(this__13152.meta,(this__13152.count + 1),new_hashobj__13174));
}
} else
{var new_hashobj__13205 = goog.object.clone.call(null,this__13152.hashobj);

(new_hashobj__13205[h__13156] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13152.meta,(this__13152.count + 1),new_hashobj__13205));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13291 = this;
var bucket__13293 = (this__13291.hashobj[cljs.core.hash.call(null,k)]);
var i__13296 = (cljs.core.truth_(bucket__13293)?cljs.core.scan_array.call(null,2,k,bucket__13293):null);

if(cljs.core.truth_(i__13296))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13342 = null;
var G__13342__13344 = (function (coll,k){
var this__13298 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13342__13345 = (function (coll,k,not_found){
var this__13301 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13342 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13342__13344.call(this,coll,k);
case  3 :
return G__13342__13345.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13342;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13302 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13306 = this;
if(cljs.core.truth_((this__13306.count > 0)))
{var hashes__13309 = cljs.core.js_keys.call(null,this__13306.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13121_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13306.hashobj[p1__13121_SHARP_])));
}),hashes__13309);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13311 = this;
return this__13311.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13312 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13315 = this;
return (new cljs.core.HashMap(meta,this__13315.count,this__13315.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13316 = this;
return this__13316.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13317 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13317.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13322 = this;
var h__13323 = cljs.core.hash.call(null,k);
var bucket__13324 = (this__13322.hashobj[h__13323]);
var i__13325 = (cljs.core.truth_(bucket__13324)?cljs.core.scan_array.call(null,2,k,bucket__13324):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13325)))
{return coll;
} else
{var new_hashobj__13330 = goog.object.clone.call(null,this__13322.hashobj);

if(cljs.core.truth_((3 > bucket__13324.length)))
{cljs.core.js_delete.call(null,new_hashobj__13330,h__13323);
} else
{var new_bucket__13331 = cljs.core.aclone.call(null,bucket__13324);

new_bucket__13331.splice(i__13325,2);
(new_hashobj__13330[h__13323] = new_bucket__13331);
}
return (new cljs.core.HashMap(this__13322.meta,(this__13322.count - 1),new_hashobj__13330));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13365 = ks.length;

var i__13366 = 0;
var out__13367 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13366 < len__13365)))
{{
var G__13400 = (i__13366 + 1);
var G__13401 = cljs.core.assoc.call(null,out__13367,(ks[i__13366]),(vs[i__13366]));
i__13366 = G__13400;
out__13367 = G__13401;
continue;
}
} else
{return out__13367;
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
var in$__13404 = cljs.core.seq.call(null,keyvals);
var out__13405 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13404))
{{
var G__13425 = cljs.core.nnext.call(null,in$__13404);
var G__13426 = cljs.core.assoc.call(null,out__13405,cljs.core.first.call(null,in$__13404),cljs.core.second.call(null,in$__13404));
in$__13404 = G__13425;
out__13405 = G__13426;
continue;
}
} else
{return out__13405;
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
hash_map.cljs$lang$applyTo = (function (arglist__13428){
var keyvals = cljs.core.seq( arglist__13428 );;
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
{return cljs.core.reduce.call(null,(function (p1__13435_SHARP_,p2__13436_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13441 = p1__13435_SHARP_;

if(cljs.core.truth_(or__3548__auto____13441))
{return or__3548__auto____13441;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13436_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13490){
var maps = cljs.core.seq( arglist__13490 );;
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
{var merge_entry__13505 = (function (m,e){
var k__13501 = cljs.core.first.call(null,e);
var v__13503 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13501)))
{return cljs.core.assoc.call(null,m,k__13501,f.call(null,cljs.core.get.call(null,m,k__13501),v__13503));
} else
{return cljs.core.assoc.call(null,m,k__13501,v__13503);
}
});
var merge2__13513 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13505,(function (){var or__3548__auto____13511 = m1;

if(cljs.core.truth_(or__3548__auto____13511))
{return or__3548__auto____13511;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13513,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13521){
var f = cljs.core.first(arglist__13521);
var maps = cljs.core.rest(arglist__13521);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13528 = cljs.core.ObjMap.fromObject([],{});
var keys__13531 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13531))
{var key__13533 = cljs.core.first.call(null,keys__13531);
var entry__13537 = cljs.core.get.call(null,map,key__13533,"﷐'user/not-found");

{
var G__13542 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13537,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13528,key__13533,entry__13537):ret__13528);
var G__13544 = cljs.core.next.call(null,keys__13531);
ret__13528 = G__13542;
keys__13531 = G__13544;
continue;
}
} else
{return ret__13528;
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
var this__13554 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13611 = null;
var G__13611__13612 = (function (coll,v){
var this__13555 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13611__13613 = (function (coll,v,not_found){
var this__13558 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13558.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13611 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13611__13612.call(this,coll,v);
case  3 :
return G__13611__13613.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13611;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13615 = null;
var G__13615__13616 = (function (coll,k){
var this__13564 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13615__13617 = (function (coll,k,not_found){
var this__13567 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13615 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13615__13616.call(this,coll,k);
case  3 :
return G__13615__13617.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13615;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13588 = this;
return (new cljs.core.Set(this__13588.meta,cljs.core.assoc.call(null,this__13588.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13589 = this;
return cljs.core.keys.call(null,this__13589.hash_map);
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
{var and__3546__auto____13598 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13598))
{return cljs.core.every_QMARK_.call(null,(function (p1__13524_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13524_SHARP_);
}),other);
} else
{return and__3546__auto____13598;
}
} else
{return and__3546__auto____13596;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13601 = this;
return (new cljs.core.Set(meta,this__13601.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13605 = this;
return this__13605.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13606 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13606.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13642 = cljs.core.seq.call(null,coll);
var out__13643 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13642))))
{{
var G__13662 = cljs.core.rest.call(null,in$__13642);
var G__13663 = cljs.core.conj.call(null,out__13643,cljs.core.first.call(null,in$__13642));
in$__13642 = G__13662;
out__13643 = G__13663;
continue;
}
} else
{return out__13643;
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
{var n__13670 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13746 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13746))
{var e__13747 = temp__3695__auto____13746;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13747));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13670,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13637_SHARP_){
var temp__3695__auto____13750 = cljs.core.find.call(null,smap,p1__13637_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13750))
{var e__13752 = temp__3695__auto____13750;

return cljs.core.second.call(null,e__13752);
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
var step__13773 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13764,seen){
while(true){
var vec__13765__13766 = p__13764;
var f__13767 = cljs.core.nth.call(null,vec__13765__13766,0,null);
var xs__13768 = vec__13765__13766;

var temp__3698__auto____13769 = cljs.core.seq.call(null,xs__13768);

if(cljs.core.truth_(temp__3698__auto____13769))
{var s__13771 = temp__3698__auto____13769;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13767)))
{{
var G__13776 = cljs.core.rest.call(null,s__13771);
var G__13777 = seen;
p__13764 = G__13776;
seen = G__13777;
continue;
}
} else
{return cljs.core.cons.call(null,f__13767,step.call(null,cljs.core.rest.call(null,s__13771),cljs.core.conj.call(null,seen,f__13767)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13773.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13781 = cljs.core.Vector.fromArray([]);
var s__13782 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13782)))
{{
var G__13785 = cljs.core.conj.call(null,ret__13781,cljs.core.first.call(null,s__13782));
var G__13786 = cljs.core.next.call(null,s__13782);
ret__13781 = G__13785;
s__13782 = G__13786;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13781);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13789 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13789))
{return or__3548__auto____13789;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13791 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13791 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13791 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13797 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13797))
{return or__3548__auto____13797;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13800 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13800 > -1)))
{return cljs.core.subs.call(null,x,2,i__13800);
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
var map__13805 = cljs.core.ObjMap.fromObject([],{});
var ks__13806 = cljs.core.seq.call(null,keys);
var vs__13807 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13809 = ks__13806;

if(cljs.core.truth_(and__3546__auto____13809))
{return vs__13807;
} else
{return and__3546__auto____13809;
}
})()))
{{
var G__13819 = cljs.core.assoc.call(null,map__13805,cljs.core.first.call(null,ks__13806),cljs.core.first.call(null,vs__13807));
var G__13820 = cljs.core.next.call(null,ks__13806);
var G__13821 = cljs.core.next.call(null,vs__13807);
map__13805 = G__13819;
ks__13806 = G__13820;
vs__13807 = G__13821;
continue;
}
} else
{return map__13805;
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
var max_key__13854 = (function (k,x){
return x;
});
var max_key__13856 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13859 = (function() { 
var G__13862__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13803_SHARP_,p2__13804_SHARP_){
return max_key.call(null,k,p1__13803_SHARP_,p2__13804_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13862 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13862__delegate.call(this, k, x, y, more);
};
G__13862.cljs$lang$maxFixedArity = 3;
G__13862.cljs$lang$applyTo = (function (arglist__13864){
var k = cljs.core.first(arglist__13864);
var x = cljs.core.first(cljs.core.next(arglist__13864));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13864)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13864)));
return G__13862__delegate.call(this, k, x, y, more);
});
return G__13862;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13854.call(this,k,x);
case  3 :
return max_key__13856.call(this,k,x,y);
default:
return max_key__13859.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13859.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13883 = (function (k,x){
return x;
});
var min_key__13884 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13885 = (function() { 
var G__13888__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13837_SHARP_,p2__13838_SHARP_){
return min_key.call(null,k,p1__13837_SHARP_,p2__13838_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13888 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13888__delegate.call(this, k, x, y, more);
};
G__13888.cljs$lang$maxFixedArity = 3;
G__13888.cljs$lang$applyTo = (function (arglist__13890){
var k = cljs.core.first(arglist__13890);
var x = cljs.core.first(cljs.core.next(arglist__13890));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13890)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13890)));
return G__13888__delegate.call(this, k, x, y, more);
});
return G__13888;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13883.call(this,k,x);
case  3 :
return min_key__13884.call(this,k,x,y);
default:
return min_key__13885.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13885.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13898 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13899 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13894))
{var s__13896 = temp__3698__auto____13894;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13896),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13896)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13898.call(this,n,step);
case  3 :
return partition_all__13899.call(this,n,step,coll);
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
var temp__3698__auto____13914 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13914))
{var s__13915 = temp__3698__auto____13914;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13915))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13915),take_while.call(null,pred,cljs.core.rest.call(null,s__13915)));
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
var this__13940 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13948 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14091 = null;
var G__14091__14092 = (function (rng,f){
var this__13952 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14091__14093 = (function (rng,f,s){
var this__13953 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14091 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14091__14092.call(this,rng,f);
case  3 :
return G__14091__14093.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14091;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13954 = this;
var comp__13955 = (cljs.core.truth_((this__13954.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13955.call(null,this__13954.start,this__13954.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13956 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13956.end - this__13956.start) / this__13956.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13957 = this;
return this__13957.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13958 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13958.meta,(this__13958.start + this__13958.step),this__13958.end,this__13958.step));
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
var this__13981 = this;
return (new cljs.core.Range(meta,this__13981.start,this__13981.end,this__13981.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13982 = this;
return this__13982.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14116 = null;
var G__14116__14117 = (function (rng,n){
var this__13984 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13984.start + (n * this__13984.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13994 = (this__13984.start > this__13984.end);

if(cljs.core.truth_(and__3546__auto____13994))
{return cljs.core._EQ_.call(null,this__13984.step,0);
} else
{return and__3546__auto____13994;
}
})()))
{return this__13984.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14116__14118 = (function (rng,n,not_found){
var this__14006 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14006.start + (n * this__14006.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14013 = (this__14006.start > this__14006.end);

if(cljs.core.truth_(and__3546__auto____14013))
{return cljs.core._EQ_.call(null,this__14006.step,0);
} else
{return and__3546__auto____14013;
}
})()))
{return this__14006.start;
} else
{return not_found;
}
}
});
G__14116 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14116__14117.call(this,rng,n);
case  3 :
return G__14116__14118.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14116;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14021 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14021.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14151 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14152 = (function (end){
return range.call(null,0,end,1);
});
var range__14153 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14154 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14151.call(this);
case  1 :
return range__14152.call(this,start);
case  2 :
return range__14153.call(this,start,end);
case  3 :
return range__14154.call(this,start,end,step);
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
var temp__3698__auto____14160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14160))
{var s__14161 = temp__3698__auto____14160;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14161),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14161)));
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
var temp__3698__auto____14171 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14171))
{var s__14172 = temp__3698__auto____14171;

var fst__14173 = cljs.core.first.call(null,s__14172);
var fv__14174 = f.call(null,fst__14173);
var run__14176 = cljs.core.cons.call(null,fst__14173,cljs.core.take_while.call(null,(function (p1__14165_SHARP_){
return cljs.core._EQ_.call(null,fv__14174,f.call(null,p1__14165_SHARP_));
}),cljs.core.next.call(null,s__14172)));

return cljs.core.cons.call(null,run__14176,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14176),s__14172))));
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
var reductions__14236 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14216 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14216))
{var s__14223 = temp__3695__auto____14216;

return reductions.call(null,f,cljs.core.first.call(null,s__14223),cljs.core.rest.call(null,s__14223));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14237 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14228 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14228))
{var s__14231 = temp__3698__auto____14228;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14231)),cljs.core.rest.call(null,s__14231));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14236.call(this,f,init);
case  3 :
return reductions__14237.call(this,f,init,coll);
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
var juxt__14292 = (function (f){
return (function() {
var G__14297 = null;
var G__14297__14298 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14297__14299 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14297__14300 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14297__14301 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14297__14302 = (function() { 
var G__14310__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14310 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14310__delegate.call(this, x, y, z, args);
};
G__14310.cljs$lang$maxFixedArity = 3;
G__14310.cljs$lang$applyTo = (function (arglist__14312){
var x = cljs.core.first(arglist__14312);
var y = cljs.core.first(cljs.core.next(arglist__14312));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14312)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14312)));
return G__14310__delegate.call(this, x, y, z, args);
});
return G__14310;
})()
;
G__14297 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14297__14298.call(this);
case  1 :
return G__14297__14299.call(this,x);
case  2 :
return G__14297__14300.call(this,x,y);
case  3 :
return G__14297__14301.call(this,x,y,z);
default:
return G__14297__14302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14297.cljs$lang$maxFixedArity = 3;
G__14297.cljs$lang$applyTo = G__14297__14302.cljs$lang$applyTo;
return G__14297;
})()
});
var juxt__14293 = (function (f,g){
return (function() {
var G__14317 = null;
var G__14317__14319 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14317__14321 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14317__14322 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14317__14323 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14317__14324 = (function() { 
var G__14332__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14332 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14332__delegate.call(this, x, y, z, args);
};
G__14332.cljs$lang$maxFixedArity = 3;
G__14332.cljs$lang$applyTo = (function (arglist__14335){
var x = cljs.core.first(arglist__14335);
var y = cljs.core.first(cljs.core.next(arglist__14335));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14335)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14335)));
return G__14332__delegate.call(this, x, y, z, args);
});
return G__14332;
})()
;
G__14317 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14317__14319.call(this);
case  1 :
return G__14317__14321.call(this,x);
case  2 :
return G__14317__14322.call(this,x,y);
case  3 :
return G__14317__14323.call(this,x,y,z);
default:
return G__14317__14324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14317.cljs$lang$maxFixedArity = 3;
G__14317.cljs$lang$applyTo = G__14317__14324.cljs$lang$applyTo;
return G__14317;
})()
});
var juxt__14294 = (function (f,g,h){
return (function() {
var G__14344 = null;
var G__14344__14345 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14344__14346 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14344__14347 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14344__14348 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14344__14349 = (function() { 
var G__14417__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14417 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14417__delegate.call(this, x, y, z, args);
};
G__14417.cljs$lang$maxFixedArity = 3;
G__14417.cljs$lang$applyTo = (function (arglist__14420){
var x = cljs.core.first(arglist__14420);
var y = cljs.core.first(cljs.core.next(arglist__14420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14420)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14420)));
return G__14417__delegate.call(this, x, y, z, args);
});
return G__14417;
})()
;
G__14344 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14344__14345.call(this);
case  1 :
return G__14344__14346.call(this,x);
case  2 :
return G__14344__14347.call(this,x,y);
case  3 :
return G__14344__14348.call(this,x,y,z);
default:
return G__14344__14349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14344.cljs$lang$maxFixedArity = 3;
G__14344.cljs$lang$applyTo = G__14344__14349.cljs$lang$applyTo;
return G__14344;
})()
});
var juxt__14295 = (function() { 
var G__14421__delegate = function (f,g,h,fs){
var fs__14275 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14422 = null;
var G__14422__14423 = (function (){
return cljs.core.reduce.call(null,(function (p1__14195_SHARP_,p2__14196_SHARP_){
return cljs.core.conj.call(null,p1__14195_SHARP_,p2__14196_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14275);
});
var G__14422__14424 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14197_SHARP_,p2__14198_SHARP_){
return cljs.core.conj.call(null,p1__14197_SHARP_,p2__14198_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14275);
});
var G__14422__14425 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14199_SHARP_,p2__14200_SHARP_){
return cljs.core.conj.call(null,p1__14199_SHARP_,p2__14200_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14275);
});
var G__14422__14426 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14202_SHARP_,p2__14203_SHARP_){
return cljs.core.conj.call(null,p1__14202_SHARP_,p2__14203_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14275);
});
var G__14422__14427 = (function() { 
var G__14430__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14204_SHARP_,p2__14206_SHARP_){
return cljs.core.conj.call(null,p1__14204_SHARP_,cljs.core.apply.call(null,p2__14206_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14275);
};
var G__14430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14430__delegate.call(this, x, y, z, args);
};
G__14430.cljs$lang$maxFixedArity = 3;
G__14430.cljs$lang$applyTo = (function (arglist__14433){
var x = cljs.core.first(arglist__14433);
var y = cljs.core.first(cljs.core.next(arglist__14433));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14433)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14433)));
return G__14430__delegate.call(this, x, y, z, args);
});
return G__14430;
})()
;
G__14422 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14422__14423.call(this);
case  1 :
return G__14422__14424.call(this,x);
case  2 :
return G__14422__14425.call(this,x,y);
case  3 :
return G__14422__14426.call(this,x,y,z);
default:
return G__14422__14427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14422.cljs$lang$maxFixedArity = 3;
G__14422.cljs$lang$applyTo = G__14422__14427.cljs$lang$applyTo;
return G__14422;
})()
};
var G__14421 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14421__delegate.call(this, f, g, h, fs);
};
G__14421.cljs$lang$maxFixedArity = 3;
G__14421.cljs$lang$applyTo = (function (arglist__14436){
var f = cljs.core.first(arglist__14436);
var g = cljs.core.first(cljs.core.next(arglist__14436));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14436)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14436)));
return G__14421__delegate.call(this, f, g, h, fs);
});
return G__14421;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14292.call(this,f);
case  2 :
return juxt__14293.call(this,f,g);
case  3 :
return juxt__14294.call(this,f,g,h);
default:
return juxt__14295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14295.cljs$lang$applyTo;
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
var dorun__14450 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14506 = cljs.core.next.call(null,coll);
coll = G__14506;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14452 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14445 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14445))
{return (n > 0);
} else
{return and__3546__auto____14445;
}
})()))
{{
var G__14509 = (n - 1);
var G__14510 = cljs.core.next.call(null,coll);
n = G__14509;
coll = G__14510;
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
return dorun__14450.call(this,n);
case  2 :
return dorun__14452.call(this,n,coll);
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
var doall__14512 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14513 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14512.call(this,n);
case  2 :
return doall__14513.call(this,n,coll);
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
var matches__14516 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14516),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14516),1)))
{return cljs.core.first.call(null,matches__14516);
} else
{return cljs.core.vec.call(null,matches__14516);
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
var matches__14518 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14518)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14518),1)))
{return cljs.core.first.call(null,matches__14518);
} else
{return cljs.core.vec.call(null,matches__14518);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14521 = cljs.core.re_find.call(null,re,s);
var match_idx__14522 = s.search(re);
var match_str__14523 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14521))?cljs.core.first.call(null,match_data__14521):match_data__14521);
var post_match__14525 = cljs.core.subs.call(null,s,(match_idx__14522 + cljs.core.count.call(null,match_str__14523)));

if(cljs.core.truth_(match_data__14521))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14521,re_seq.call(null,re,post_match__14525));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14540_SHARP_){
return print_one.call(null,p1__14540_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14573 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14573))
{var and__3546__auto____14582 = (function (){var x__445__auto____14576 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14577 = x__445__auto____14576;

if(cljs.core.truth_(and__3546__auto____14577))
{var and__3546__auto____14580 = x__445__auto____14576.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14580))
{return cljs.core.not.call(null,x__445__auto____14576.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14580;
}
} else
{return and__3546__auto____14577;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14576);
}
})();

if(cljs.core.truth_(and__3546__auto____14582))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14582;
}
} else
{return and__3546__auto____14573;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14586 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14590 = x__445__auto____14586;

if(cljs.core.truth_(and__3546__auto____14590))
{var and__3546__auto____14591 = x__445__auto____14586.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14591))
{return cljs.core.not.call(null,x__445__auto____14586.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14591;
}
} else
{return and__3546__auto____14590;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14586);
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
var first_obj__14598 = cljs.core.first.call(null,objs);
var sb__14600 = (new goog.string.StringBuffer());

var G__14601__14602 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14601__14602))
{var obj__14604 = cljs.core.first.call(null,G__14601__14602);
var G__14601__14605 = G__14601__14602;

while(true){
if(cljs.core.truth_((obj__14604 === first_obj__14598)))
{} else
{sb__14600.append(" ");
}
var G__14608__14637 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14604,opts));

if(cljs.core.truth_(G__14608__14637))
{var string__14638 = cljs.core.first.call(null,G__14608__14637);
var G__14608__14639 = G__14608__14637;

while(true){
sb__14600.append(string__14638);
var temp__3698__auto____14641 = cljs.core.next.call(null,G__14608__14639);

if(cljs.core.truth_(temp__3698__auto____14641))
{var G__14608__14662 = temp__3698__auto____14641;

{
var G__14666 = cljs.core.first.call(null,G__14608__14662);
var G__14667 = G__14608__14662;
string__14638 = G__14666;
G__14608__14639 = G__14667;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14664 = cljs.core.next.call(null,G__14601__14605);

if(cljs.core.truth_(temp__3698__auto____14664))
{var G__14601__14665 = temp__3698__auto____14664;

{
var G__14668 = cljs.core.first.call(null,G__14601__14665);
var G__14669 = G__14601__14665;
obj__14604 = G__14668;
G__14601__14605 = G__14669;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14600);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14676 = cljs.core.first.call(null,objs);

var G__14677__14679 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14677__14679))
{var obj__14681 = cljs.core.first.call(null,G__14677__14679);
var G__14677__14682 = G__14677__14679;

while(true){
if(cljs.core.truth_((obj__14681 === first_obj__14676)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14684__14685 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14681,opts));

if(cljs.core.truth_(G__14684__14685))
{var string__14686 = cljs.core.first.call(null,G__14684__14685);
var G__14684__14687 = G__14684__14685;

while(true){
cljs.core.string_print.call(null,string__14686);
var temp__3698__auto____14688 = cljs.core.next.call(null,G__14684__14687);

if(cljs.core.truth_(temp__3698__auto____14688))
{var G__14684__14689 = temp__3698__auto____14688;

{
var G__14698 = cljs.core.first.call(null,G__14684__14689);
var G__14699 = G__14684__14689;
string__14686 = G__14698;
G__14684__14687 = G__14699;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14691 = cljs.core.next.call(null,G__14677__14682);

if(cljs.core.truth_(temp__3698__auto____14691))
{var G__14677__14692 = temp__3698__auto____14691;

{
var G__14706 = cljs.core.first.call(null,G__14677__14692);
var G__14707 = G__14677__14692;
obj__14681 = G__14706;
G__14677__14682 = G__14707;
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
pr_str.cljs$lang$applyTo = (function (arglist__14771){
var objs = cljs.core.seq( arglist__14771 );;
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
pr.cljs$lang$applyTo = (function (arglist__14773){
var objs = cljs.core.seq( arglist__14773 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14774){
var objs = cljs.core.seq( arglist__14774 );;
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
println.cljs$lang$applyTo = (function (arglist__14776){
var objs = cljs.core.seq( arglist__14776 );;
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
prn.cljs$lang$applyTo = (function (arglist__14801){
var objs = cljs.core.seq( arglist__14801 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14844 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14844,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14847 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14847))
{var nspc__14849 = temp__3698__auto____14847;

return cljs.core.str.call(null,nspc__14849,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14850 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14850))
{var nspc__14851 = temp__3698__auto____14850;

return cljs.core.str.call(null,nspc__14851,"/");
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
var pr_pair__14874 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14874,"{",", ","}",opts,coll);
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
var this__14915 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14916 = this;
var G__14917__14918 = cljs.core.seq.call(null,this__14916.watches);

if(cljs.core.truth_(G__14917__14918))
{var G__14923__14925 = cljs.core.first.call(null,G__14917__14918);
var vec__14924__14926 = G__14923__14925;
var key__14927 = cljs.core.nth.call(null,vec__14924__14926,0,null);
var f__14928 = cljs.core.nth.call(null,vec__14924__14926,1,null);
var G__14917__14929 = G__14917__14918;

var G__14923__14930 = G__14923__14925;
var G__14917__14931 = G__14917__14929;

while(true){
var vec__14932__14933 = G__14923__14930;
var key__14934 = cljs.core.nth.call(null,vec__14932__14933,0,null);
var f__14935 = cljs.core.nth.call(null,vec__14932__14933,1,null);
var G__14917__14937 = G__14917__14931;

f__14935.call(null,key__14934,this$,oldval,newval);
var temp__3698__auto____14941 = cljs.core.next.call(null,G__14917__14937);

if(cljs.core.truth_(temp__3698__auto____14941))
{var G__14917__14942 = temp__3698__auto____14941;

{
var G__15032 = cljs.core.first.call(null,G__14917__14942);
var G__15033 = G__14917__14942;
G__14923__14930 = G__15032;
G__14917__14931 = G__15033;
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
var this__14944 = this;
return this$.watches = cljs.core.assoc.call(null,this__14944.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14946 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14946.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14951 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14951.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14955 = this;
return this__14955.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15030 = this;
return this__15030.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__15031 = this;
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
var atom__15127 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15128 = (function() { 
var G__15130__delegate = function (x,p__15107){
var map__15112__15115 = p__15107;
var map__15112__15117 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15112__15115))?cljs.core.apply.call(null,cljs.core.hash_map,map__15112__15115):map__15112__15115);
var validator__15119 = cljs.core.get.call(null,map__15112__15117,"﷐'validator");
var meta__15121 = cljs.core.get.call(null,map__15112__15117,"﷐'meta");

return (new cljs.core.Atom(x,meta__15121,validator__15119,null));
};
var G__15130 = function (x,var_args){
var p__15107 = null;
if (goog.isDef(var_args)) {
  p__15107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15130__delegate.call(this, x, p__15107);
};
G__15130.cljs$lang$maxFixedArity = 1;
G__15130.cljs$lang$applyTo = (function (arglist__15134){
var x = cljs.core.first(arglist__15134);
var p__15107 = cljs.core.rest(arglist__15134);
return G__15130__delegate.call(this, x, p__15107);
});
return G__15130;
})()
;
atom = function(x,var_args){
var p__15107 = var_args;
switch(arguments.length){
case  1 :
return atom__15127.call(this,x);
default:
return atom__15128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15128.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15138 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15138))
{var validate__15139 = temp__3698__auto____15138;

if(cljs.core.truth_(validate__15139.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__15140 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15140,new_value);
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
var swap_BANG___15165 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15166 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15167 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15168 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15169 = (function() { 
var G__15173__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15173 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15173__delegate.call(this, a, f, x, y, z, more);
};
G__15173.cljs$lang$maxFixedArity = 5;
G__15173.cljs$lang$applyTo = (function (arglist__15175){
var a = cljs.core.first(arglist__15175);
var f = cljs.core.first(cljs.core.next(arglist__15175));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15175)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15175))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15175)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15175)))));
return G__15173__delegate.call(this, a, f, x, y, z, more);
});
return G__15173;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15165.call(this,a,f);
case  3 :
return swap_BANG___15166.call(this,a,f,x);
case  4 :
return swap_BANG___15167.call(this,a,f,x,y);
case  5 :
return swap_BANG___15168.call(this,a,f,x,y,z);
default:
return swap_BANG___15169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15169.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15189){
var iref = cljs.core.first(arglist__15189);
var f = cljs.core.first(cljs.core.next(arglist__15189));
var args = cljs.core.rest(cljs.core.next(arglist__15189));
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
var gensym__15251 = (function (){
return gensym.call(null,"G__");
});
var gensym__15253 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15251.call(this);
case  1 :
return gensym__15253.call(this,prefix_string);
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
var this__15261 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15261.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15268 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15268.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15268.state,this__15268.f);
}
return cljs.core.deref.call(null,this__15268.state);
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
delay.cljs$lang$applyTo = (function (arglist__15301){
var body = cljs.core.seq( arglist__15301 );;
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
var map__15313__15314 = options;
var map__15313__15316 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15313__15314))?cljs.core.apply.call(null,cljs.core.hash_map,map__15313__15314):map__15313__15314);
var keywordize_keys__15317 = cljs.core.get.call(null,map__15313__15316,"﷐'keywordize-keys");
var keyfn__15319 = (cljs.core.truth_(keywordize_keys__15317)?cljs.core.keyword:cljs.core.str);
var f__15332 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15330 = (function iter__15324(s__15325){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15325__15326 = s__15325;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15325__15326)))
{var k__15329 = cljs.core.first.call(null,s__15325__15326);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15319.call(null,k__15329),thisfn.call(null,(x[k__15329]))]),iter__15324.call(null,cljs.core.rest.call(null,s__15325__15326)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15330.call(null,cljs.core.js_keys.call(null,x));
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

return f__15332.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15342){
var x = cljs.core.first(arglist__15342);
var options = cljs.core.rest(arglist__15342);
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
var mem__15346 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15355__delegate = function (args){
var temp__3695__auto____15347 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15346),args);

if(cljs.core.truth_(temp__3695__auto____15347))
{var v__15348 = temp__3695__auto____15347;

return v__15348;
} else
{var ret__15350 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15346,cljs.core.assoc,args,ret__15350);
return ret__15350;
}
};
var G__15355 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15355__delegate.call(this, args);
};
G__15355.cljs$lang$maxFixedArity = 0;
G__15355.cljs$lang$applyTo = (function (arglist__15358){
var args = cljs.core.seq( arglist__15358 );;
return G__15355__delegate.call(this, args);
});
return G__15355;
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
var trampoline__15367 = (function (f){
while(true){
var ret__15362 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15362)))
{{
var G__15370 = ret__15362;
f = G__15370;
continue;
}
} else
{return ret__15362;
}
break;
}
});
var trampoline__15368 = (function() { 
var G__15371__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15371 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15371__delegate.call(this, f, args);
};
G__15371.cljs$lang$maxFixedArity = 1;
G__15371.cljs$lang$applyTo = (function (arglist__15373){
var f = cljs.core.first(arglist__15373);
var args = cljs.core.rest(arglist__15373);
return G__15371__delegate.call(this, f, args);
});
return G__15371;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15367.call(this,f);
default:
return trampoline__15368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15368.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15376 = (function (){
return rand.call(null,1);
});
var rand__15377 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15376.call(this);
case  1 :
return rand__15377.call(this,n);
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
var k__15397 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15397,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15397,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15437 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15438 = (function (h,child,parent){
var or__3548__auto____15400 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{var or__3548__auto____15401 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{var and__3546__auto____15402 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15402))
{var and__3546__auto____15405 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15405))
{var and__3546__auto____15406 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15406))
{var ret__15408 = true;
var i__15409 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15410 = cljs.core.not.call(null,ret__15408);

if(cljs.core.truth_(or__3548__auto____15410))
{return or__3548__auto____15410;
} else
{return cljs.core._EQ_.call(null,i__15409,cljs.core.count.call(null,parent));
}
})()))
{return ret__15408;
} else
{{
var G__15441 = isa_QMARK_.call(null,h,child.call(null,i__15409),parent.call(null,i__15409));
var G__15442 = (i__15409 + 1);
ret__15408 = G__15441;
i__15409 = G__15442;
continue;
}
}
break;
}
} else
{return and__3546__auto____15406;
}
} else
{return and__3546__auto____15405;
}
} else
{return and__3546__auto____15402;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15437.call(this,h,child);
case  3 :
return isa_QMARK___15438.call(this,h,child,parent);
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
var parents__15443 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15444 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15443.call(this,h);
case  2 :
return parents__15444.call(this,h,tag);
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
var ancestors__15446 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15447 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15446.call(this,h);
case  2 :
return ancestors__15447.call(this,h,tag);
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
var descendants__15449 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15450 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15449.call(this,h);
case  2 :
return descendants__15450.call(this,h,tag);
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
var derive__15462 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15463 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15455 = "﷐'parents".call(null,h);
var td__15456 = "﷐'descendants".call(null,h);
var ta__15457 = "﷐'ancestors".call(null,h);
var tf__15458 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15461 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15455.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15457.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15457.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15455,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15458.call(null,"﷐'ancestors".call(null,h),tag,td__15456,parent,ta__15457),"﷐'descendants":tf__15458.call(null,"﷐'descendants".call(null,h),parent,ta__15457,tag,td__15456)});
})());

if(cljs.core.truth_(or__3548__auto____15461))
{return or__3548__auto____15461;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15462.call(this,h,tag);
case  3 :
return derive__15463.call(this,h,tag,parent);
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
var underive__15491 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15492 = (function (h,tag,parent){
var parentMap__15480 = "﷐'parents".call(null,h);
var childsParents__15482 = (cljs.core.truth_(parentMap__15480.call(null,tag))?cljs.core.disj.call(null,parentMap__15480.call(null,tag),parent):cljs.core.set([]));
var newParents__15484 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15482))?cljs.core.assoc.call(null,parentMap__15480,tag,childsParents__15482):cljs.core.dissoc.call(null,parentMap__15480,tag));
var deriv_seq__15487 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15452_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15452_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15452_SHARP_),cljs.core.second.call(null,p1__15452_SHARP_)));
}),cljs.core.seq.call(null,newParents__15484)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15480.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15453_SHARP_,p2__15454_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15453_SHARP_,p2__15454_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15487));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15491.call(this,h,tag);
case  3 :
return underive__15492.call(this,h,tag,parent);
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
var xprefs__15510 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15514 = (cljs.core.truth_((function (){var and__3546__auto____15513 = xprefs__15510;

if(cljs.core.truth_(and__3546__auto____15513))
{return xprefs__15510.call(null,y);
} else
{return and__3546__auto____15513;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15514))
{return or__3548__auto____15514;
} else
{var or__3548__auto____15518 = (function (){var ps__15515 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15515) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15515),prefer_table)))
{} else
{}
{
var G__15527 = cljs.core.rest.call(null,ps__15515);
ps__15515 = G__15527;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15518))
{return or__3548__auto____15518;
} else
{var or__3548__auto____15523 = (function (){var ps__15519 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15519) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15519),y,prefer_table)))
{} else
{}
{
var G__15529 = cljs.core.rest.call(null,ps__15519);
ps__15519 = G__15529;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15523))
{return or__3548__auto____15523;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15535 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15535))
{return or__3548__auto____15535;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15550 = cljs.core.reduce.call(null,(function (be,p__15539){
var vec__15540__15541 = p__15539;
var k__15542 = cljs.core.nth.call(null,vec__15540__15541,0,null);
var ___15543 = cljs.core.nth.call(null,vec__15540__15541,1,null);
var e__15544 = vec__15540__15541;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15542)))
{var be2__15548 = (cljs.core.truth_((function (){var or__3548__auto____15545 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15545))
{return or__3548__auto____15545;
} else
{return cljs.core.dominates.call(null,k__15542,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15544:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15548),k__15542,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15542," and ",cljs.core.first.call(null,be2__15548),", and neither is preferred")));
}
return be2__15548;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15550))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15550));
return cljs.core.second.call(null,best_entry__15550);
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
if(cljs.core.truth_((function (){var and__3546__auto____15569 = mf;

if(cljs.core.truth_(and__3546__auto____15569))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15569;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15571 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15571))
{return or__3548__auto____15571;
} else
{var or__3548__auto____15572 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15572))
{return or__3548__auto____15572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15573 = mf;

if(cljs.core.truth_(and__3546__auto____15573))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15573;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15574 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15574))
{return or__3548__auto____15574;
} else
{var or__3548__auto____15576 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15576))
{return or__3548__auto____15576;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15582 = mf;

if(cljs.core.truth_(and__3546__auto____15582))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15582;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15583 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15583))
{return or__3548__auto____15583;
} else
{var or__3548__auto____15584 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15584))
{return or__3548__auto____15584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15589 = mf;

if(cljs.core.truth_(and__3546__auto____15589))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15589;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15591 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15591))
{return or__3548__auto____15591;
} else
{var or__3548__auto____15592 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15592))
{return or__3548__auto____15592;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15594 = mf;

if(cljs.core.truth_(and__3546__auto____15594))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15594;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15595 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15595))
{return or__3548__auto____15595;
} else
{var or__3548__auto____15596 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15596))
{return or__3548__auto____15596;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15598 = mf;

if(cljs.core.truth_(and__3546__auto____15598))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15598;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15600 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15600))
{return or__3548__auto____15600;
} else
{var or__3548__auto____15601 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15601))
{return or__3548__auto____15601;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15603 = mf;

if(cljs.core.truth_(and__3546__auto____15603))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15603;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15607 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15607))
{return or__3548__auto____15607;
} else
{var or__3548__auto____15608 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15608))
{return or__3548__auto____15608;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15610 = mf;

if(cljs.core.truth_(and__3546__auto____15610))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15610;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15617 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15617))
{return or__3548__auto____15617;
} else
{var or__3548__auto____15619 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15619))
{return or__3548__auto____15619;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15647 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15648 = cljs.core._get_method.call(null,mf,dispatch_val__15647);

if(cljs.core.truth_(target_fn__15648))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15647)));
}
return cljs.core.apply.call(null,target_fn__15648,args);
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
var this__15653 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15655 = this;
cljs.core.swap_BANG_.call(null,this__15655.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15655.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15655.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15655.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15664 = this;
cljs.core.swap_BANG_.call(null,this__15664.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15664.method_cache,this__15664.method_table,this__15664.cached_hierarchy,this__15664.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15666 = this;
cljs.core.swap_BANG_.call(null,this__15666.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15666.method_cache,this__15666.method_table,this__15666.cached_hierarchy,this__15666.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15669 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15669.cached_hierarchy),cljs.core.deref.call(null,this__15669.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15669.method_cache,this__15669.method_table,this__15669.cached_hierarchy,this__15669.hierarchy);
}
var temp__3695__auto____15675 = cljs.core.deref.call(null,this__15669.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15675))
{var target_fn__15676 = temp__3695__auto____15675;

return target_fn__15676;
} else
{var temp__3695__auto____15677 = cljs.core.find_and_cache_best_method.call(null,this__15669.name,dispatch_val,this__15669.hierarchy,this__15669.method_table,this__15669.prefer_table,this__15669.method_cache,this__15669.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15677))
{var target_fn__15678 = temp__3695__auto____15677;

return target_fn__15678;
} else
{return cljs.core.deref.call(null,this__15669.method_table).call(null,this__15669.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15679 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15679.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15679.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15679.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15679.method_cache,this__15679.method_table,this__15679.cached_hierarchy,this__15679.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15680 = this;
return cljs.core.deref.call(null,this__15680.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15681 = this;
return cljs.core.deref.call(null,this__15681.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15682 = this;
return cljs.core.do_dispatch.call(null,mf,this__15682.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15695__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15695 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15695__delegate.call(this, _, args);
};
G__15695.cljs$lang$maxFixedArity = 1;
G__15695.cljs$lang$applyTo = (function (arglist__15696){
var _ = cljs.core.first(arglist__15696);
var args = cljs.core.rest(arglist__15696);
return G__15695__delegate.call(this, _, args);
});
return G__15695;
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
