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
var or__3548__auto____7350 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{var or__3548__auto____7351 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
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
var _invoke__7625 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7420 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7626 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7429 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{var or__3548__auto____7430 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7627 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7435 = this$;

if(cljs.core.truth_(and__3546__auto____7435))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7435;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7628 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7449 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{var or__3548__auto____7451 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7629 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7455 = this$;

if(cljs.core.truth_(and__3546__auto____7455))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7455;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7462 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7464 = this$;

if(cljs.core.truth_(and__3546__auto____7464))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7464;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{var or__3548__auto____7470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7476 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{var or__3548__auto____7478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7480 = this$;

if(cljs.core.truth_(and__3546__auto____7480))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7480;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{var or__3548__auto____7491 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7491))
{return or__3548__auto____7491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7517 = this$;

if(cljs.core.truth_(and__3546__auto____7517))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7517;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7521 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7521))
{return or__3548__auto____7521;
} else
{var or__3548__auto____7522 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7525 = this$;

if(cljs.core.truth_(and__3546__auto____7525))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7525;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7527 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{var or__3548__auto____7530 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7554 = this$;

if(cljs.core.truth_(and__3546__auto____7554))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7554;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7569 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{var or__3548__auto____7583 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7583))
{return or__3548__auto____7583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7584 = this$;

if(cljs.core.truth_(and__3546__auto____7584))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7584;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7588 = this$;

if(cljs.core.truth_(and__3546__auto____7588))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7588;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7590 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{var or__3548__auto____7591 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7594 = this$;

if(cljs.core.truth_(and__3546__auto____7594))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7594;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7596 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{var or__3548__auto____7597 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7599 = this$;

if(cljs.core.truth_(and__3546__auto____7599))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7599;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7601 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7604 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{var or__3548__auto____7605 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7606 = this$;

if(cljs.core.truth_(and__3546__auto____7606))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7606;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7608 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7608))
{return or__3548__auto____7608;
} else
{var or__3548__auto____7609 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7609))
{return or__3548__auto____7609;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7612 = this$;

if(cljs.core.truth_(and__3546__auto____7612))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7612;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7614 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7614))
{return or__3548__auto____7614;
} else
{var or__3548__auto____7615 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7615))
{return or__3548__auto____7615;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7618 = this$;

if(cljs.core.truth_(and__3546__auto____7618))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7618;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7620 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
} else
{var or__3548__auto____7622 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7622))
{return or__3548__auto____7622;
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
return _invoke__7625.call(this,this$);
case  2 :
return _invoke__7626.call(this,this$,a);
case  3 :
return _invoke__7627.call(this,this$,a,b);
case  4 :
return _invoke__7628.call(this,this$,a,b,c);
case  5 :
return _invoke__7629.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7630.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7799 = coll;

if(cljs.core.truth_(and__3546__auto____7799))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7799;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7817 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7839 = coll;

if(cljs.core.truth_(and__3546__auto____7839))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7839;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{var or__3548__auto____7844 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7876 = coll;

if(cljs.core.truth_(and__3546__auto____7876))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7876;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7879 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{var or__3548__auto____7880 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
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
var _nth__7897 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7887 = coll;

if(cljs.core.truth_(and__3546__auto____7887))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7887;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7888 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{var or__3548__auto____7889 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7898 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = coll;

if(cljs.core.truth_(and__3546__auto____7890))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7890;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7893 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
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
return _nth__7897.call(this,coll,n);
case  3 :
return _nth__7898.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7905 = coll;

if(cljs.core.truth_(and__3546__auto____7905))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7905;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7909 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7912 = coll;

if(cljs.core.truth_(and__3546__auto____7912))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7912;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7916 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
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
var _lookup__7970 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = o;

if(cljs.core.truth_(and__3546__auto____7950))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7950;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7955 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{var or__3548__auto____7957 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7971 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7959 = o;

if(cljs.core.truth_(and__3546__auto____7959))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7959;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7962 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{var or__3548__auto____7965 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
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
return _lookup__7970.call(this,o,k);
case  3 :
return _lookup__7971.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = coll;

if(cljs.core.truth_(and__3546__auto____8037))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____8037;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____8041 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{var or__3548__auto____8058 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____8061 = coll;

if(cljs.core.truth_(and__3546__auto____8061))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____8061;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____8063 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8065 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8080 = coll;

if(cljs.core.truth_(and__3546__auto____8080))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____8080;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____8082 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
} else
{var or__3548__auto____8084 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = coll;

if(cljs.core.truth_(and__3546__auto____8088))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8088;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8090 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8095 = coll;

if(cljs.core.truth_(and__3546__auto____8095))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8095;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8097 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8097))
{return or__3548__auto____8097;
} else
{var or__3548__auto____8098 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = coll;

if(cljs.core.truth_(and__3546__auto____8099))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8099;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8101 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{var or__3548__auto____8107 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8117 = coll;

if(cljs.core.truth_(and__3546__auto____8117))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8117;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8119 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{var or__3548__auto____8121 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8126 = o;

if(cljs.core.truth_(and__3546__auto____8126))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8126;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8127 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{var or__3548__auto____8138 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = o;

if(cljs.core.truth_(and__3546__auto____8141))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8141;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8142 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
} else
{var or__3548__auto____8143 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8144 = o;

if(cljs.core.truth_(and__3546__auto____8144))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8144;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8145 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8146 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8147 = o;

if(cljs.core.truth_(and__3546__auto____8147))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8147;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8148 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{var or__3548__auto____8149 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8149))
{return or__3548__auto____8149;
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
var _reduce__8160 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8150 = coll;

if(cljs.core.truth_(and__3546__auto____8150))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8150;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8151 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
} else
{var or__3548__auto____8152 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8152))
{return or__3548__auto____8152;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8161 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8154 = coll;

if(cljs.core.truth_(and__3546__auto____8154))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8154;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8158 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8158))
{return or__3548__auto____8158;
} else
{var or__3548__auto____8159 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
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
return _reduce__8160.call(this,coll,f);
case  3 :
return _reduce__8161.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8255 = o;

if(cljs.core.truth_(and__3546__auto____8255))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8255;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8256 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8256))
{return or__3548__auto____8256;
} else
{var or__3548__auto____8258 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8258))
{return or__3548__auto____8258;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8260 = o;

if(cljs.core.truth_(and__3546__auto____8260))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8260;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8261 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8261))
{return or__3548__auto____8261;
} else
{var or__3548__auto____8262 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8262))
{return or__3548__auto____8262;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8269 = o;

if(cljs.core.truth_(and__3546__auto____8269))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8269;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8274 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8274))
{return or__3548__auto____8274;
} else
{var or__3548__auto____8275 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8275))
{return or__3548__auto____8275;
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
if(cljs.core.truth_((function (){var and__3546__auto____8280 = o;

if(cljs.core.truth_(and__3546__auto____8280))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8280;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8282 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8282))
{return or__3548__auto____8282;
} else
{var or__3548__auto____8283 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8283))
{return or__3548__auto____8283;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8284 = d;

if(cljs.core.truth_(and__3546__auto____8284))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8284;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8285 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8285))
{return or__3548__auto____8285;
} else
{var or__3548__auto____8286 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8286))
{return or__3548__auto____8286;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8287 = this$;

if(cljs.core.truth_(and__3546__auto____8287))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8287;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8292 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8292))
{return or__3548__auto____8292;
} else
{var or__3548__auto____8295 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8295))
{return or__3548__auto____8295;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8300 = this$;

if(cljs.core.truth_(and__3546__auto____8300))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8300;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8302 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8302))
{return or__3548__auto____8302;
} else
{var or__3548__auto____8304 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8304))
{return or__3548__auto____8304;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8305 = this$;

if(cljs.core.truth_(and__3546__auto____8305))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8305;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8310 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8310))
{return or__3548__auto____8310;
} else
{var or__3548__auto____8311 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8311))
{return or__3548__auto____8311;
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
var G__8402 = null;
var G__8402__8403 = (function (o,k){
return null;
});
var G__8402__8404 = (function (o,k,not_found){
return not_found;
});
G__8402 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8402__8403.call(this,o,k);
case  3 :
return G__8402__8404.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8402;
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
var G__8406 = null;
var G__8406__8407 = (function (_,f){
return f.call(null);
});
var G__8406__8408 = (function (_,f,start){
return start;
});
G__8406 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8406__8407.call(this,_,f);
case  3 :
return G__8406__8408.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8406;
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
var G__8414 = null;
var G__8414__8415 = (function (_,n){
return null;
});
var G__8414__8416 = (function (_,n,not_found){
return not_found;
});
G__8414 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8414__8415.call(this,_,n);
case  3 :
return G__8414__8416.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8414;
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
var ci_reduce__8470 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8460 = cljs.core._nth.call(null,cicoll,0);
var n__8461 = 1;

while(true){
if(cljs.core.truth_((n__8461 < cljs.core._count.call(null,cicoll))))
{{
var G__8478 = f.call(null,val__8460,cljs.core._nth.call(null,cicoll,n__8461));
var G__8479 = (n__8461 + 1);
val__8460 = G__8478;
n__8461 = G__8479;
continue;
}
} else
{return val__8460;
}
break;
}
}
});
var ci_reduce__8471 = (function (cicoll,f,val){
var val__8462 = val;
var n__8464 = 0;

while(true){
if(cljs.core.truth_((n__8464 < cljs.core._count.call(null,cicoll))))
{{
var G__8485 = f.call(null,val__8462,cljs.core._nth.call(null,cicoll,n__8464));
var G__8486 = (n__8464 + 1);
val__8462 = G__8485;
n__8464 = G__8486;
continue;
}
} else
{return val__8462;
}
break;
}
});
var ci_reduce__8472 = (function (cicoll,f,val,idx){
var val__8467 = val;
var n__8468 = idx;

while(true){
if(cljs.core.truth_((n__8468 < cljs.core._count.call(null,cicoll))))
{{
var G__8487 = f.call(null,val__8467,cljs.core._nth.call(null,cicoll,n__8468));
var G__8488 = (n__8468 + 1);
val__8467 = G__8487;
n__8468 = G__8488;
continue;
}
} else
{return val__8467;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8470.call(this,cicoll,f);
case  3 :
return ci_reduce__8471.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8472.call(this,cicoll,f,val,idx);
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
var this__8502 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8523 = null;
var G__8523__8524 = (function (_,f){
var this__8503 = this;
return cljs.core.ci_reduce.call(null,this__8503.a,f,(this__8503.a[this__8503.i]),(this__8503.i + 1));
});
var G__8523__8525 = (function (_,f,start){
var this__8504 = this;
return cljs.core.ci_reduce.call(null,this__8504.a,f,start,this__8504.i);
});
G__8523 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8523__8524.call(this,_,f);
case  3 :
return G__8523__8525.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8523;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8506 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8507 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8532 = null;
var G__8532__8533 = (function (coll,n){
var this__8510 = this;
var i__8512 = (n + this__8510.i);

if(cljs.core.truth_((i__8512 < this__8510.a.length)))
{return (this__8510.a[i__8512]);
} else
{return null;
}
});
var G__8532__8534 = (function (coll,n,not_found){
var this__8516 = this;
var i__8518 = (n + this__8516.i);

if(cljs.core.truth_((i__8518 < this__8516.a.length)))
{return (this__8516.a[i__8518]);
} else
{return not_found;
}
});
G__8532 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8532__8533.call(this,coll,n);
case  3 :
return G__8532__8534.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8532;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8519 = this;
return (this__8519.a.length - this__8519.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8520 = this;
return (this__8520.a[this__8520.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8521 = this;
if(cljs.core.truth_(((this__8521.i + 1) < this__8521.a.length)))
{return (new cljs.core.IndexedSeq(this__8521.a,(this__8521.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8522 = this;
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
var G__8614 = null;
var G__8614__8615 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8614__8616 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8614 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8614__8615.call(this,array,f);
case  3 :
return G__8614__8616.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8614;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8619 = null;
var G__8619__8620 = (function (array,k){
return (array[k]);
});
var G__8619__8621 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8619 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8619__8620.call(this,array,k);
case  3 :
return G__8619__8621.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8619;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8628 = null;
var G__8628__8629 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8628__8630 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8628 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8628__8629.call(this,array,n);
case  3 :
return G__8628__8630.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8628;
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
var temp__3698__auto____8644 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8644))
{var s__8645 = temp__3698__auto____8644;

return cljs.core._first.call(null,s__8645);
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
var G__8720 = cljs.core.next.call(null,s);
s = G__8720;
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
var s__8736 = cljs.core.seq.call(null,x);
var n__8737 = 0;

while(true){
if(cljs.core.truth_(s__8736))
{{
var G__8755 = cljs.core.next.call(null,s__8736);
var G__8756 = (n__8737 + 1);
s__8736 = G__8755;
n__8737 = G__8756;
continue;
}
} else
{return n__8737;
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
var conj__8769 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8770 = (function() { 
var G__8772__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8773 = conj.call(null,coll,x);
var G__8774 = cljs.core.first.call(null,xs);
var G__8775 = cljs.core.next.call(null,xs);
coll = G__8773;
x = G__8774;
xs = G__8775;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8772 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8772__delegate.call(this, coll, x, xs);
};
G__8772.cljs$lang$maxFixedArity = 2;
G__8772.cljs$lang$applyTo = (function (arglist__8776){
var coll = cljs.core.first(arglist__8776);
var x = cljs.core.first(cljs.core.next(arglist__8776));
var xs = cljs.core.rest(cljs.core.next(arglist__8776));
return G__8772__delegate.call(this, coll, x, xs);
});
return G__8772;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8769.call(this,coll,x);
default:
return conj__8770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8770.cljs$lang$applyTo;
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
var nth__8782 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8783 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8782.call(this,coll,n);
case  3 :
return nth__8783.call(this,coll,n,not_found);
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
var get__8797 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8798 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8797.call(this,o,k);
case  3 :
return get__8798.call(this,o,k,not_found);
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
var assoc__8808 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8809 = (function() { 
var G__8813__delegate = function (coll,k,v,kvs){
while(true){
var ret__8804 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8814 = ret__8804;
var G__8815 = cljs.core.first.call(null,kvs);
var G__8816 = cljs.core.second.call(null,kvs);
var G__8817 = cljs.core.nnext.call(null,kvs);
coll = G__8814;
k = G__8815;
v = G__8816;
kvs = G__8817;
continue;
}
} else
{return ret__8804;
}
break;
}
};
var G__8813 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8813__delegate.call(this, coll, k, v, kvs);
};
G__8813.cljs$lang$maxFixedArity = 3;
G__8813.cljs$lang$applyTo = (function (arglist__8821){
var coll = cljs.core.first(arglist__8821);
var k = cljs.core.first(cljs.core.next(arglist__8821));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8821)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8821)));
return G__8813__delegate.call(this, coll, k, v, kvs);
});
return G__8813;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8808.call(this,coll,k,v);
default:
return assoc__8809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8809.cljs$lang$applyTo;
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
var dissoc__8847 = (function (coll){
return coll;
});
var dissoc__8848 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8849 = (function() { 
var G__8854__delegate = function (coll,k,ks){
while(true){
var ret__8844 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8857 = ret__8844;
var G__8859 = cljs.core.first.call(null,ks);
var G__8860 = cljs.core.next.call(null,ks);
coll = G__8857;
k = G__8859;
ks = G__8860;
continue;
}
} else
{return ret__8844;
}
break;
}
};
var G__8854 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8854__delegate.call(this, coll, k, ks);
};
G__8854.cljs$lang$maxFixedArity = 2;
G__8854.cljs$lang$applyTo = (function (arglist__8866){
var coll = cljs.core.first(arglist__8866);
var k = cljs.core.first(cljs.core.next(arglist__8866));
var ks = cljs.core.rest(cljs.core.next(arglist__8866));
return G__8854__delegate.call(this, coll, k, ks);
});
return G__8854;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8847.call(this,coll);
case  2 :
return dissoc__8848.call(this,coll,k);
default:
return dissoc__8849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8849.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8875 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8880 = x__445__auto____8875;

if(cljs.core.truth_(and__3546__auto____8880))
{var and__3546__auto____8883 = x__445__auto____8875.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8883))
{return cljs.core.not.call(null,x__445__auto____8875.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8883;
}
} else
{return and__3546__auto____8880;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8875);
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
var disj__8908 = (function (coll){
return coll;
});
var disj__8909 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8910 = (function() { 
var G__8916__delegate = function (coll,k,ks){
while(true){
var ret__8902 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8917 = ret__8902;
var G__8918 = cljs.core.first.call(null,ks);
var G__8919 = cljs.core.next.call(null,ks);
coll = G__8917;
k = G__8918;
ks = G__8919;
continue;
}
} else
{return ret__8902;
}
break;
}
};
var G__8916 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8916__delegate.call(this, coll, k, ks);
};
G__8916.cljs$lang$maxFixedArity = 2;
G__8916.cljs$lang$applyTo = (function (arglist__8921){
var coll = cljs.core.first(arglist__8921);
var k = cljs.core.first(cljs.core.next(arglist__8921));
var ks = cljs.core.rest(cljs.core.next(arglist__8921));
return G__8916__delegate.call(this, coll, k, ks);
});
return G__8916;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8908.call(this,coll);
case  2 :
return disj__8909.call(this,coll,k);
default:
return disj__8910.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8910.cljs$lang$applyTo;
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
{var x__445__auto____8938 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8940 = x__445__auto____8938;

if(cljs.core.truth_(and__3546__auto____8940))
{var and__3546__auto____8941 = x__445__auto____8938.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8941))
{return cljs.core.not.call(null,x__445__auto____8938.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8941;
}
} else
{return and__3546__auto____8940;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8938);
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
{var x__445__auto____8946 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8950 = x__445__auto____8946;

if(cljs.core.truth_(and__3546__auto____8950))
{var and__3546__auto____8954 = x__445__auto____8946.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8954))
{return cljs.core.not.call(null,x__445__auto____8946.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8954;
}
} else
{return and__3546__auto____8950;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8946);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8958 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8959 = x__445__auto____8958;

if(cljs.core.truth_(and__3546__auto____8959))
{var and__3546__auto____8965 = x__445__auto____8958.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8965))
{return cljs.core.not.call(null,x__445__auto____8958.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8965;
}
} else
{return and__3546__auto____8959;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8958);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8968 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8969 = x__445__auto____8968;

if(cljs.core.truth_(and__3546__auto____8969))
{var and__3546__auto____8970 = x__445__auto____8968.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8970))
{return cljs.core.not.call(null,x__445__auto____8968.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8970;
}
} else
{return and__3546__auto____8969;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8968);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____9013 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9015 = x__445__auto____9013;

if(cljs.core.truth_(and__3546__auto____9015))
{var and__3546__auto____9020 = x__445__auto____9013.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____9020))
{return cljs.core.not.call(null,x__445__auto____9013.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____9020;
}
} else
{return and__3546__auto____9015;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____9013);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____9030 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9031 = x__445__auto____9030;

if(cljs.core.truth_(and__3546__auto____9031))
{var and__3546__auto____9032 = x__445__auto____9030.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____9032))
{return cljs.core.not.call(null,x__445__auto____9030.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____9032;
}
} else
{return and__3546__auto____9031;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____9030);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____9044 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9047 = x__445__auto____9044;

if(cljs.core.truth_(and__3546__auto____9047))
{var and__3546__auto____9049 = x__445__auto____9044.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____9049))
{return cljs.core.not.call(null,x__445__auto____9044.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____9049;
}
} else
{return and__3546__auto____9047;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____9044);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__9066 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__9066.push(key);
}));
return keys__9066;
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
{var x__445__auto____9089 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9090 = x__445__auto____9089;

if(cljs.core.truth_(and__3546__auto____9090))
{var and__3546__auto____9095 = x__445__auto____9089.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9095))
{return cljs.core.not.call(null,x__445__auto____9089.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9095;
}
} else
{return and__3546__auto____9090;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9089);
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
var and__3546__auto____9102 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9102))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9108 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9108))
{return or__3548__auto____9108;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9102;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9123 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9123))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9123;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9124 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9124))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9124;
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
var and__3546__auto____9137 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9137))
{return (n == n.toFixed());
} else
{return and__3546__auto____9137;
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
if(cljs.core.truth_((function (){var and__3546__auto____9150 = coll;

if(cljs.core.truth_(and__3546__auto____9150))
{var and__3546__auto____9153 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9153))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9153;
}
} else
{return and__3546__auto____9150;
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
var distinct_QMARK___9184 = (function (x){
return true;
});
var distinct_QMARK___9185 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9186 = (function() { 
var G__9188__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9176 = cljs.core.set([y,x]);
var xs__9177 = more;

while(true){
var x__9178 = cljs.core.first.call(null,xs__9177);
var etc__9179 = cljs.core.next.call(null,xs__9177);

if(cljs.core.truth_(xs__9177))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9176,x__9178)))
{return false;
} else
{{
var G__9219 = cljs.core.conj.call(null,s__9176,x__9178);
var G__9220 = etc__9179;
s__9176 = G__9219;
xs__9177 = G__9220;
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
var G__9188 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9188__delegate.call(this, x, y, more);
};
G__9188.cljs$lang$maxFixedArity = 2;
G__9188.cljs$lang$applyTo = (function (arglist__9222){
var x = cljs.core.first(arglist__9222);
var y = cljs.core.first(cljs.core.next(arglist__9222));
var more = cljs.core.rest(cljs.core.next(arglist__9222));
return G__9188__delegate.call(this, x, y, more);
});
return G__9188;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9184.call(this,x);
case  2 :
return distinct_QMARK___9185.call(this,x,y);
default:
return distinct_QMARK___9186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9186.cljs$lang$applyTo;
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
var r__9233 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9233)))
{return r__9233;
} else
{if(cljs.core.truth_(r__9233))
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
var sort__9237 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9238 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9236 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9236,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9236);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9237.call(this,comp);
case  2 :
return sort__9238.call(this,comp,coll);
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
var sort_by__9246 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9247 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9246.call(this,keyfn,comp);
case  3 :
return sort_by__9247.call(this,keyfn,comp,coll);
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
var reduce__9264 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9265 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9264.call(this,f,val);
case  3 :
return reduce__9265.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9304 = (function (f,coll){
var temp__3695__auto____9297 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9297))
{var s__9298 = temp__3695__auto____9297;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9298),cljs.core.next.call(null,s__9298));
} else
{return f.call(null);
}
});
var seq_reduce__9305 = (function (f,val,coll){
var val__9302 = val;
var coll__9303 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9303))
{{
var G__9307 = f.call(null,val__9302,cljs.core.first.call(null,coll__9303));
var G__9308 = cljs.core.next.call(null,coll__9303);
val__9302 = G__9307;
coll__9303 = G__9308;
continue;
}
} else
{return val__9302;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9304.call(this,f,val);
case  3 :
return seq_reduce__9305.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9312 = null;
var G__9312__9313 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9312__9314 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9312 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9312__9313.call(this,coll,f);
case  3 :
return G__9312__9314.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9312;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9322 = (function (){
return 0;
});
var _PLUS___9323 = (function (x){
return x;
});
var _PLUS___9324 = (function (x,y){
return (x + y);
});
var _PLUS___9325 = (function() { 
var G__9327__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9327 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9327__delegate.call(this, x, y, more);
};
G__9327.cljs$lang$maxFixedArity = 2;
G__9327.cljs$lang$applyTo = (function (arglist__9328){
var x = cljs.core.first(arglist__9328);
var y = cljs.core.first(cljs.core.next(arglist__9328));
var more = cljs.core.rest(cljs.core.next(arglist__9328));
return G__9327__delegate.call(this, x, y, more);
});
return G__9327;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9322.call(this);
case  1 :
return _PLUS___9323.call(this,x);
case  2 :
return _PLUS___9324.call(this,x,y);
default:
return _PLUS___9325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9325.cljs$lang$applyTo;
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
var ___9336 = (function (x){
return (- x);
});
var ___9337 = (function (x,y){
return (x - y);
});
var ___9338 = (function() { 
var G__9341__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9341 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9341__delegate.call(this, x, y, more);
};
G__9341.cljs$lang$maxFixedArity = 2;
G__9341.cljs$lang$applyTo = (function (arglist__9344){
var x = cljs.core.first(arglist__9344);
var y = cljs.core.first(cljs.core.next(arglist__9344));
var more = cljs.core.rest(cljs.core.next(arglist__9344));
return G__9341__delegate.call(this, x, y, more);
});
return G__9341;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9336.call(this,x);
case  2 :
return ___9337.call(this,x,y);
default:
return ___9338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9338.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9352 = (function (){
return 1;
});
var _STAR___9353 = (function (x){
return x;
});
var _STAR___9354 = (function (x,y){
return (x * y);
});
var _STAR___9355 = (function() { 
var G__9361__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9361 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9361__delegate.call(this, x, y, more);
};
G__9361.cljs$lang$maxFixedArity = 2;
G__9361.cljs$lang$applyTo = (function (arglist__9366){
var x = cljs.core.first(arglist__9366);
var y = cljs.core.first(cljs.core.next(arglist__9366));
var more = cljs.core.rest(cljs.core.next(arglist__9366));
return G__9361__delegate.call(this, x, y, more);
});
return G__9361;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9352.call(this);
case  1 :
return _STAR___9353.call(this,x);
case  2 :
return _STAR___9354.call(this,x,y);
default:
return _STAR___9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9355.cljs$lang$applyTo;
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
var _SLASH___9422 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9423 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9424 = (function() { 
var G__9426__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9426__delegate.call(this, x, y, more);
};
G__9426.cljs$lang$maxFixedArity = 2;
G__9426.cljs$lang$applyTo = (function (arglist__9427){
var x = cljs.core.first(arglist__9427);
var y = cljs.core.first(cljs.core.next(arglist__9427));
var more = cljs.core.rest(cljs.core.next(arglist__9427));
return G__9426__delegate.call(this, x, y, more);
});
return G__9426;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9422.call(this,x);
case  2 :
return _SLASH___9423.call(this,x,y);
default:
return _SLASH___9424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9424.cljs$lang$applyTo;
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
var _LT___9434 = (function (x){
return true;
});
var _LT___9435 = (function (x,y){
return (x < y);
});
var _LT___9436 = (function() { 
var G__9438__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9439 = y;
var G__9440 = cljs.core.first.call(null,more);
var G__9441 = cljs.core.next.call(null,more);
x = G__9439;
y = G__9440;
more = G__9441;
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
var G__9438 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9438__delegate.call(this, x, y, more);
};
G__9438.cljs$lang$maxFixedArity = 2;
G__9438.cljs$lang$applyTo = (function (arglist__9444){
var x = cljs.core.first(arglist__9444);
var y = cljs.core.first(cljs.core.next(arglist__9444));
var more = cljs.core.rest(cljs.core.next(arglist__9444));
return G__9438__delegate.call(this, x, y, more);
});
return G__9438;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9434.call(this,x);
case  2 :
return _LT___9435.call(this,x,y);
default:
return _LT___9436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9436.cljs$lang$applyTo;
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
var _LT__EQ___9448 = (function (x){
return true;
});
var _LT__EQ___9449 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9450 = (function() { 
var G__9452__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9453 = y;
var G__9454 = cljs.core.first.call(null,more);
var G__9455 = cljs.core.next.call(null,more);
x = G__9453;
y = G__9454;
more = G__9455;
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
var G__9452 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9452__delegate.call(this, x, y, more);
};
G__9452.cljs$lang$maxFixedArity = 2;
G__9452.cljs$lang$applyTo = (function (arglist__9458){
var x = cljs.core.first(arglist__9458);
var y = cljs.core.first(cljs.core.next(arglist__9458));
var more = cljs.core.rest(cljs.core.next(arglist__9458));
return G__9452__delegate.call(this, x, y, more);
});
return G__9452;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9448.call(this,x);
case  2 :
return _LT__EQ___9449.call(this,x,y);
default:
return _LT__EQ___9450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9450.cljs$lang$applyTo;
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
var _GT___9465 = (function (x){
return true;
});
var _GT___9466 = (function (x,y){
return (x > y);
});
var _GT___9467 = (function() { 
var G__9469__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9470 = y;
var G__9471 = cljs.core.first.call(null,more);
var G__9472 = cljs.core.next.call(null,more);
x = G__9470;
y = G__9471;
more = G__9472;
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
var G__9469 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9469__delegate.call(this, x, y, more);
};
G__9469.cljs$lang$maxFixedArity = 2;
G__9469.cljs$lang$applyTo = (function (arglist__9474){
var x = cljs.core.first(arglist__9474);
var y = cljs.core.first(cljs.core.next(arglist__9474));
var more = cljs.core.rest(cljs.core.next(arglist__9474));
return G__9469__delegate.call(this, x, y, more);
});
return G__9469;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9465.call(this,x);
case  2 :
return _GT___9466.call(this,x,y);
default:
return _GT___9467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9467.cljs$lang$applyTo;
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
var _GT__EQ___9499 = (function (x){
return true;
});
var _GT__EQ___9500 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9501 = (function() { 
var G__9505__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9506 = y;
var G__9507 = cljs.core.first.call(null,more);
var G__9508 = cljs.core.next.call(null,more);
x = G__9506;
y = G__9507;
more = G__9508;
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
G__9505.cljs$lang$applyTo = (function (arglist__9514){
var x = cljs.core.first(arglist__9514);
var y = cljs.core.first(cljs.core.next(arglist__9514));
var more = cljs.core.rest(cljs.core.next(arglist__9514));
return G__9505__delegate.call(this, x, y, more);
});
return G__9505;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9499.call(this,x);
case  2 :
return _GT__EQ___9500.call(this,x,y);
default:
return _GT__EQ___9501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9501.cljs$lang$applyTo;
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
var max__9635 = (function (x){
return x;
});
var max__9636 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9637 = (function() { 
var G__9641__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9641__delegate.call(this, x, y, more);
};
G__9641.cljs$lang$maxFixedArity = 2;
G__9641.cljs$lang$applyTo = (function (arglist__9645){
var x = cljs.core.first(arglist__9645);
var y = cljs.core.first(cljs.core.next(arglist__9645));
var more = cljs.core.rest(cljs.core.next(arglist__9645));
return G__9641__delegate.call(this, x, y, more);
});
return G__9641;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9635.call(this,x);
case  2 :
return max__9636.call(this,x,y);
default:
return max__9637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9637.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9652 = (function (x){
return x;
});
var min__9653 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9654 = (function() { 
var G__9657__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9657 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9657__delegate.call(this, x, y, more);
};
G__9657.cljs$lang$maxFixedArity = 2;
G__9657.cljs$lang$applyTo = (function (arglist__9660){
var x = cljs.core.first(arglist__9660);
var y = cljs.core.first(cljs.core.next(arglist__9660));
var more = cljs.core.rest(cljs.core.next(arglist__9660));
return G__9657__delegate.call(this, x, y, more);
});
return G__9657;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9652.call(this,x);
case  2 :
return min__9653.call(this,x,y);
default:
return min__9654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9654.cljs$lang$applyTo;
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
var rem__9663 = (n % d);

return cljs.core.fix.call(null,((n - rem__9663) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9668 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9668));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9671 = (function (){
return Math.random.call(null);
});
var rand__9672 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9671.call(this);
case  1 :
return rand__9672.call(this,n);
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
var _EQ__EQ___9774 = (function (x){
return true;
});
var _EQ__EQ___9775 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9776 = (function() { 
var G__9778__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9779 = y;
var G__9780 = cljs.core.first.call(null,more);
var G__9781 = cljs.core.next.call(null,more);
x = G__9779;
y = G__9780;
more = G__9781;
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
var G__9778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9778__delegate.call(this, x, y, more);
};
G__9778.cljs$lang$maxFixedArity = 2;
G__9778.cljs$lang$applyTo = (function (arglist__9782){
var x = cljs.core.first(arglist__9782);
var y = cljs.core.first(cljs.core.next(arglist__9782));
var more = cljs.core.rest(cljs.core.next(arglist__9782));
return G__9778__delegate.call(this, x, y, more);
});
return G__9778;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9774.call(this,x);
case  2 :
return _EQ__EQ___9775.call(this,x,y);
default:
return _EQ__EQ___9776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9776.cljs$lang$applyTo;
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
var n__9783 = n;
var xs__9784 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9785 = xs__9784;

if(cljs.core.truth_(and__3546__auto____9785))
{return (n__9783 > 0);
} else
{return and__3546__auto____9785;
}
})()))
{{
var G__9786 = (n__9783 - 1);
var G__9787 = cljs.core.next.call(null,xs__9784);
n__9783 = G__9786;
xs__9784 = G__9787;
continue;
}
} else
{return xs__9784;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9798 = null;
var G__9798__9799 = (function (coll,n){
var temp__3695__auto____9790 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9790))
{var xs__9792 = temp__3695__auto____9790;

return cljs.core.first.call(null,xs__9792);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9798__9800 = (function (coll,n,not_found){
var temp__3695__auto____9794 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9794))
{var xs__9796 = temp__3695__auto____9794;

return cljs.core.first.call(null,xs__9796);
} else
{return not_found;
}
});
G__9798 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9798__9799.call(this,coll,n);
case  3 :
return G__9798__9800.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9798;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9892 = (function (){
return "";
});
var str_STAR___9894 = (function (x){
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
var str_STAR___9895 = (function() { 
var G__9899__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9900 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9901 = cljs.core.next.call(null,more);
sb = G__9900;
more = G__9901;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9899 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9899__delegate.call(this, x, ys);
};
G__9899.cljs$lang$maxFixedArity = 1;
G__9899.cljs$lang$applyTo = (function (arglist__9902){
var x = cljs.core.first(arglist__9902);
var ys = cljs.core.rest(arglist__9902);
return G__9899__delegate.call(this, x, ys);
});
return G__9899;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9892.call(this);
case  1 :
return str_STAR___9894.call(this,x);
default:
return str_STAR___9895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9895.cljs$lang$applyTo;
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
var str__9908 = (function (){
return "";
});
var str__9909 = (function (x){
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
var str__9910 = (function() { 
var G__9913__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9913 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9913__delegate.call(this, x, ys);
};
G__9913.cljs$lang$maxFixedArity = 1;
G__9913.cljs$lang$applyTo = (function (arglist__9917){
var x = cljs.core.first(arglist__9917);
var ys = cljs.core.rest(arglist__9917);
return G__9913__delegate.call(this, x, ys);
});
return G__9913;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9908.call(this);
case  1 :
return str__9909.call(this,x);
default:
return str__9910.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9910.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9922 = (function (s,start){
return s.substring(start);
});
var subs__9923 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9922.call(this,s,start);
case  3 :
return subs__9923.call(this,s,start,end);
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
var symbol__9929 = (function (name){
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
var symbol__9930 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9929.call(this,ns);
case  2 :
return symbol__9930.call(this,ns,name);
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
var keyword__9943 = (function (name){
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
var keyword__9944 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9943.call(this,ns);
case  2 :
return keyword__9944.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9952 = cljs.core.seq.call(null,x);
var ys__9953 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9952)))
{return cljs.core.nil_QMARK_.call(null,ys__9953);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9953)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9952),cljs.core.first.call(null,ys__9953))))
{{
var G__9956 = cljs.core.next.call(null,xs__9952);
var G__9957 = cljs.core.next.call(null,ys__9953);
xs__9952 = G__9956;
ys__9953 = G__9957;
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
return cljs.core.reduce.call(null,(function (p1__9958_SHARP_,p2__9959_SHARP_){
return cljs.core.hash_combine.call(null,p1__9958_SHARP_,cljs.core.hash.call(null,p2__9959_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9966__9968 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9966__9968))
{var G__9973__9988 = cljs.core.first.call(null,G__9966__9968);
var vec__9987__9989 = G__9973__9988;
var key_name__9990 = cljs.core.nth.call(null,vec__9987__9989,0,null);
var f__9991 = cljs.core.nth.call(null,vec__9987__9989,1,null);
var G__9966__9992 = G__9966__9968;

var G__9973__9993 = G__9973__9988;
var G__9966__9994 = G__9966__9992;

while(true){
var vec__9995__9996 = G__9973__9993;
var key_name__9997 = cljs.core.nth.call(null,vec__9995__9996,0,null);
var f__9998 = cljs.core.nth.call(null,vec__9995__9996,1,null);
var G__9966__9999 = G__9966__9994;

var str_name__10000 = cljs.core.name.call(null,key_name__9997);

obj[str_name__10000] = f__9998;
var temp__3698__auto____10001 = cljs.core.next.call(null,G__9966__9999);

if(cljs.core.truth_(temp__3698__auto____10001))
{var G__9966__10002 = temp__3698__auto____10001;

{
var G__10010 = cljs.core.first.call(null,G__9966__10002);
var G__10011 = G__9966__10002;
G__9973__9993 = G__10010;
G__9966__9994 = G__10011;
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
var this__10017 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10019 = this;
return (new cljs.core.List(this__10019.meta,o,coll,(this__10019.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10021 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10023 = this;
return this__10023.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10025 = this;
return this__10025.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10026 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10029 = this;
return this__10029.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10050 = this;
return this__10050.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10051 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10052 = this;
return (new cljs.core.List(meta,this__10052.first,this__10052.rest,this__10052.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10053 = this;
return this__10053.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10054 = this;
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
var this__10098 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10100 = this;
return (new cljs.core.List(this__10100.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10102 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10104 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10105 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10106 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10107 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10111 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10115 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10118 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10120 = this;
return this__10120.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10121 = this;
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
list.cljs$lang$applyTo = (function (arglist__10152){
var items = cljs.core.seq( arglist__10152 );;
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
var this__10153 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10154 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10155 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10157 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10157.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10159 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10161 = this;
return this__10161.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10163 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10163.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10163.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10166 = this;
return this__10166.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10168 = this;
return (new cljs.core.Cons(meta,this__10168.first,this__10168.rest));
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
var G__10221 = null;
var G__10221__10222 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10221__10223 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10221 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10221__10222.call(this,string,f);
case  3 :
return G__10221__10223.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10221;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10225 = null;
var G__10225__10226 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10225__10227 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10225 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10225__10226.call(this,string,k);
case  3 :
return G__10225__10227.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10225;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10230 = null;
var G__10230__10231 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10230__10232 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10230 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10230__10231.call(this,string,n);
case  3 :
return G__10230__10232.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10230;
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
var G__10237 = null;
var G__10237__10238 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10237__10239 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10237 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10237__10238.call(this,this$,coll);
case  3 :
return G__10237__10239.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10237;
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
var x__10244 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10244;
} else
{lazy_seq.x = x__10244.call(null);
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
var this__10253 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10254 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10255 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10275 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10275.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10276 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10277 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10278 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10279 = this;
return this__10279.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10280 = this;
return (new cljs.core.LazySeq(meta,this__10280.realized,this__10280.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10282 = cljs.core.array.call(null);

var s__10284 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10284)))
{ary__10282.push(cljs.core.first.call(null,s__10284));
{
var G__10372 = cljs.core.next.call(null,s__10284);
s__10284 = G__10372;
continue;
}
} else
{return ary__10282;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10373 = s;
var i__10374 = n;
var sum__10375 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10378 = (i__10374 > 0);

if(cljs.core.truth_(and__3546__auto____10378))
{return cljs.core.seq.call(null,s__10373);
} else
{return and__3546__auto____10378;
}
})()))
{{
var G__10382 = cljs.core.next.call(null,s__10373);
var G__10383 = (i__10374 - 1);
var G__10384 = (sum__10375 + 1);
s__10373 = G__10382;
i__10374 = G__10383;
sum__10375 = G__10384;
continue;
}
} else
{return sum__10375;
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
var concat__10414 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10415 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10416 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10403 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10403))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10403),concat.call(null,cljs.core.rest.call(null,s__10403),y));
} else
{return y;
}
})));
});
var concat__10417 = (function() { 
var G__10421__delegate = function (x,y,zs){
var cat__10407 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10405 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10405))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10405),cat.call(null,cljs.core.rest.call(null,xys__10405),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10407.call(null,concat.call(null,x,y),zs);
};
var G__10421 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10421__delegate.call(this, x, y, zs);
};
G__10421.cljs$lang$maxFixedArity = 2;
G__10421.cljs$lang$applyTo = (function (arglist__10422){
var x = cljs.core.first(arglist__10422);
var y = cljs.core.first(cljs.core.next(arglist__10422));
var zs = cljs.core.rest(cljs.core.next(arglist__10422));
return G__10421__delegate.call(this, x, y, zs);
});
return G__10421;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10414.call(this);
case  1 :
return concat__10415.call(this,x);
case  2 :
return concat__10416.call(this,x,y);
default:
return concat__10417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10417.cljs$lang$applyTo;
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
var list_STAR___10426 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10427 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10428 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10429 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10430 = (function() { 
var G__10438__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10438 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10438__delegate.call(this, a, b, c, d, more);
};
G__10438.cljs$lang$maxFixedArity = 4;
G__10438.cljs$lang$applyTo = (function (arglist__10439){
var a = cljs.core.first(arglist__10439);
var b = cljs.core.first(cljs.core.next(arglist__10439));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10439)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10439))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10439))));
return G__10438__delegate.call(this, a, b, c, d, more);
});
return G__10438;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10426.call(this,a);
case  2 :
return list_STAR___10427.call(this,a,b);
case  3 :
return list_STAR___10428.call(this,a,b,c);
case  4 :
return list_STAR___10429.call(this,a,b,c,d);
default:
return list_STAR___10430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10430.cljs$lang$applyTo;
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
var apply__10497 = (function (f,args){
var fixed_arity__10440 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10440 + 1)) <= fixed_arity__10440)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10499 = (function (f,x,args){
var arglist__10441 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10442 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10441,fixed_arity__10442) <= fixed_arity__10442)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10441));
} else
{return f.cljs$lang$applyTo(arglist__10441);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10441));
}
});
var apply__10500 = (function (f,x,y,args){
var arglist__10477 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10478 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10477,fixed_arity__10478) <= fixed_arity__10478)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10477));
} else
{return f.cljs$lang$applyTo(arglist__10477);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10477));
}
});
var apply__10501 = (function (f,x,y,z,args){
var arglist__10479 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10480 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10479,fixed_arity__10480) <= fixed_arity__10480)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10479));
} else
{return f.cljs$lang$applyTo(arglist__10479);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10479));
}
});
var apply__10502 = (function() { 
var G__10568__delegate = function (f,a,b,c,d,args){
var arglist__10482 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10483 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10482,fixed_arity__10483) <= fixed_arity__10483)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10482));
} else
{return f.cljs$lang$applyTo(arglist__10482);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10482));
}
};
var G__10568 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10568__delegate.call(this, f, a, b, c, d, args);
};
G__10568.cljs$lang$maxFixedArity = 5;
G__10568.cljs$lang$applyTo = (function (arglist__10569){
var f = cljs.core.first(arglist__10569);
var a = cljs.core.first(cljs.core.next(arglist__10569));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10569)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10569))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10569)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10569)))));
return G__10568__delegate.call(this, f, a, b, c, d, args);
});
return G__10568;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10497.call(this,f,a);
case  3 :
return apply__10499.call(this,f,a,b);
case  4 :
return apply__10500.call(this,f,a,b,c);
case  5 :
return apply__10501.call(this,f,a,b,c,d);
default:
return apply__10502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10502.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10570){
var obj = cljs.core.first(arglist__10570);
var f = cljs.core.first(cljs.core.next(arglist__10570));
var args = cljs.core.rest(cljs.core.next(arglist__10570));
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
var not_EQ___10571 = (function (x){
return false;
});
var not_EQ___10572 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10573 = (function() { 
var G__10575__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10575 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10575__delegate.call(this, x, y, more);
};
G__10575.cljs$lang$maxFixedArity = 2;
G__10575.cljs$lang$applyTo = (function (arglist__10576){
var x = cljs.core.first(arglist__10576);
var y = cljs.core.first(cljs.core.next(arglist__10576));
var more = cljs.core.rest(cljs.core.next(arglist__10576));
return G__10575__delegate.call(this, x, y, more);
});
return G__10575;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10571.call(this,x);
case  2 :
return not_EQ___10572.call(this,x,y);
default:
return not_EQ___10573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10573.cljs$lang$applyTo;
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
var G__10579 = pred;
var G__10580 = cljs.core.next.call(null,coll);
pred = G__10579;
coll = G__10580;
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
{var or__3548__auto____10581 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10581))
{return or__3548__auto____10581;
} else
{{
var G__10585 = pred;
var G__10586 = cljs.core.next.call(null,coll);
pred = G__10585;
coll = G__10586;
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
var G__10717 = null;
var G__10717__10718 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10717__10719 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10717__10720 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10717__10721 = (function() { 
var G__10726__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10726 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10726__delegate.call(this, x, y, zs);
};
G__10726.cljs$lang$maxFixedArity = 2;
G__10726.cljs$lang$applyTo = (function (arglist__10729){
var x = cljs.core.first(arglist__10729);
var y = cljs.core.first(cljs.core.next(arglist__10729));
var zs = cljs.core.rest(cljs.core.next(arglist__10729));
return G__10726__delegate.call(this, x, y, zs);
});
return G__10726;
})()
;
G__10717 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10717__10718.call(this);
case  1 :
return G__10717__10719.call(this,x);
case  2 :
return G__10717__10720.call(this,x,y);
default:
return G__10717__10721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10717.cljs$lang$maxFixedArity = 2;
G__10717.cljs$lang$applyTo = G__10717__10721.cljs$lang$applyTo;
return G__10717;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10757__delegate = function (args){
return x;
};
var G__10757 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10757__delegate.call(this, args);
};
G__10757.cljs$lang$maxFixedArity = 0;
G__10757.cljs$lang$applyTo = (function (arglist__10869){
var args = cljs.core.seq( arglist__10869 );;
return G__10757__delegate.call(this, args);
});
return G__10757;
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
var comp__10889 = (function (){
return cljs.core.identity;
});
var comp__10890 = (function (f){
return f;
});
var comp__10891 = (function (f,g){
return (function() {
var G__10897 = null;
var G__10897__10898 = (function (){
return f.call(null,g.call(null));
});
var G__10897__10899 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10897__10901 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10897__10941 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10897__10942 = (function() { 
var G__10944__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10944 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10944__delegate.call(this, x, y, z, args);
};
G__10944.cljs$lang$maxFixedArity = 3;
G__10944.cljs$lang$applyTo = (function (arglist__10945){
var x = cljs.core.first(arglist__10945);
var y = cljs.core.first(cljs.core.next(arglist__10945));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10945)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10945)));
return G__10944__delegate.call(this, x, y, z, args);
});
return G__10944;
})()
;
G__10897 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10897__10898.call(this);
case  1 :
return G__10897__10899.call(this,x);
case  2 :
return G__10897__10901.call(this,x,y);
case  3 :
return G__10897__10941.call(this,x,y,z);
default:
return G__10897__10942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10897.cljs$lang$maxFixedArity = 3;
G__10897.cljs$lang$applyTo = G__10897__10942.cljs$lang$applyTo;
return G__10897;
})()
});
var comp__10893 = (function (f,g,h){
return (function() {
var G__10946 = null;
var G__10946__10947 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10946__10948 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10946__10949 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10946__10950 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10946__10951 = (function() { 
var G__10954__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10954 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10954__delegate.call(this, x, y, z, args);
};
G__10954.cljs$lang$maxFixedArity = 3;
G__10954.cljs$lang$applyTo = (function (arglist__10955){
var x = cljs.core.first(arglist__10955);
var y = cljs.core.first(cljs.core.next(arglist__10955));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10955)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10955)));
return G__10954__delegate.call(this, x, y, z, args);
});
return G__10954;
})()
;
G__10946 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10946__10947.call(this);
case  1 :
return G__10946__10948.call(this,x);
case  2 :
return G__10946__10949.call(this,x,y);
case  3 :
return G__10946__10950.call(this,x,y,z);
default:
return G__10946__10951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10946.cljs$lang$maxFixedArity = 3;
G__10946.cljs$lang$applyTo = G__10946__10951.cljs$lang$applyTo;
return G__10946;
})()
});
var comp__10894 = (function() { 
var G__10957__delegate = function (f1,f2,f3,fs){
var fs__10879 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10958__delegate = function (args){
var ret__10882 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10879),args);
var fs__10883 = cljs.core.next.call(null,fs__10879);

while(true){
if(cljs.core.truth_(fs__10883))
{{
var G__10960 = cljs.core.first.call(null,fs__10883).call(null,ret__10882);
var G__10961 = cljs.core.next.call(null,fs__10883);
ret__10882 = G__10960;
fs__10883 = G__10961;
continue;
}
} else
{return ret__10882;
}
break;
}
};
var G__10958 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10958__delegate.call(this, args);
};
G__10958.cljs$lang$maxFixedArity = 0;
G__10958.cljs$lang$applyTo = (function (arglist__10968){
var args = cljs.core.seq( arglist__10968 );;
return G__10958__delegate.call(this, args);
});
return G__10958;
})()
;
};
var G__10957 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10957__delegate.call(this, f1, f2, f3, fs);
};
G__10957.cljs$lang$maxFixedArity = 3;
G__10957.cljs$lang$applyTo = (function (arglist__10970){
var f1 = cljs.core.first(arglist__10970);
var f2 = cljs.core.first(cljs.core.next(arglist__10970));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10970)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10970)));
return G__10957__delegate.call(this, f1, f2, f3, fs);
});
return G__10957;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10889.call(this);
case  1 :
return comp__10890.call(this,f1);
case  2 :
return comp__10891.call(this,f1,f2);
case  3 :
return comp__10893.call(this,f1,f2,f3);
default:
return comp__10894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10894.cljs$lang$applyTo;
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
var partial__10978 = (function (f,arg1){
return (function() { 
var G__10988__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10988 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10988__delegate.call(this, args);
};
G__10988.cljs$lang$maxFixedArity = 0;
G__10988.cljs$lang$applyTo = (function (arglist__10995){
var args = cljs.core.seq( arglist__10995 );;
return G__10988__delegate.call(this, args);
});
return G__10988;
})()
;
});
var partial__10980 = (function (f,arg1,arg2){
return (function() { 
var G__10997__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10997 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10997__delegate.call(this, args);
};
G__10997.cljs$lang$maxFixedArity = 0;
G__10997.cljs$lang$applyTo = (function (arglist__10998){
var args = cljs.core.seq( arglist__10998 );;
return G__10997__delegate.call(this, args);
});
return G__10997;
})()
;
});
var partial__10983 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10999__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10999 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10999__delegate.call(this, args);
};
G__10999.cljs$lang$maxFixedArity = 0;
G__10999.cljs$lang$applyTo = (function (arglist__11000){
var args = cljs.core.seq( arglist__11000 );;
return G__10999__delegate.call(this, args);
});
return G__10999;
})()
;
});
var partial__10985 = (function() { 
var G__11002__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11003__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11003 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11003__delegate.call(this, args);
};
G__11003.cljs$lang$maxFixedArity = 0;
G__11003.cljs$lang$applyTo = (function (arglist__11005){
var args = cljs.core.seq( arglist__11005 );;
return G__11003__delegate.call(this, args);
});
return G__11003;
})()
;
};
var G__11002 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11002__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11002.cljs$lang$maxFixedArity = 4;
G__11002.cljs$lang$applyTo = (function (arglist__11007){
var f = cljs.core.first(arglist__11007);
var arg1 = cljs.core.first(cljs.core.next(arglist__11007));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11007)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11007))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11007))));
return G__11002__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11002;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10978.call(this,f,arg1);
case  3 :
return partial__10980.call(this,f,arg1,arg2);
case  4 :
return partial__10983.call(this,f,arg1,arg2,arg3);
default:
return partial__10985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10985.cljs$lang$applyTo;
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
var fnil__11036 = (function (f,x){
return (function() {
var G__11040 = null;
var G__11040__11041 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11040__11042 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11040__11043 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11040__11044 = (function() { 
var G__11049__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11049 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11049__delegate.call(this, a, b, c, ds);
};
G__11049.cljs$lang$maxFixedArity = 3;
G__11049.cljs$lang$applyTo = (function (arglist__11050){
var a = cljs.core.first(arglist__11050);
var b = cljs.core.first(cljs.core.next(arglist__11050));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11050)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11050)));
return G__11049__delegate.call(this, a, b, c, ds);
});
return G__11049;
})()
;
G__11040 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11040__11041.call(this,a);
case  2 :
return G__11040__11042.call(this,a,b);
case  3 :
return G__11040__11043.call(this,a,b,c);
default:
return G__11040__11044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11040.cljs$lang$maxFixedArity = 3;
G__11040.cljs$lang$applyTo = G__11040__11044.cljs$lang$applyTo;
return G__11040;
})()
});
var fnil__11037 = (function (f,x,y){
return (function() {
var G__11054 = null;
var G__11054__11055 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11054__11056 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11054__11057 = (function() { 
var G__11074__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11074 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11074__delegate.call(this, a, b, c, ds);
};
G__11074.cljs$lang$maxFixedArity = 3;
G__11074.cljs$lang$applyTo = (function (arglist__11076){
var a = cljs.core.first(arglist__11076);
var b = cljs.core.first(cljs.core.next(arglist__11076));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11076)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11076)));
return G__11074__delegate.call(this, a, b, c, ds);
});
return G__11074;
})()
;
G__11054 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11054__11055.call(this,a,b);
case  3 :
return G__11054__11056.call(this,a,b,c);
default:
return G__11054__11057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11054.cljs$lang$maxFixedArity = 3;
G__11054.cljs$lang$applyTo = G__11054__11057.cljs$lang$applyTo;
return G__11054;
})()
});
var fnil__11038 = (function (f,x,y,z){
return (function() {
var G__11077 = null;
var G__11077__11078 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11077__11079 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11077__11081 = (function() { 
var G__11093__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11093 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11093__delegate.call(this, a, b, c, ds);
};
G__11093.cljs$lang$maxFixedArity = 3;
G__11093.cljs$lang$applyTo = (function (arglist__11094){
var a = cljs.core.first(arglist__11094);
var b = cljs.core.first(cljs.core.next(arglist__11094));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11094)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11094)));
return G__11093__delegate.call(this, a, b, c, ds);
});
return G__11093;
})()
;
G__11077 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11077__11078.call(this,a,b);
case  3 :
return G__11077__11079.call(this,a,b,c);
default:
return G__11077__11081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11077.cljs$lang$maxFixedArity = 3;
G__11077.cljs$lang$applyTo = G__11077__11081.cljs$lang$applyTo;
return G__11077;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11036.call(this,f,x);
case  3 :
return fnil__11037.call(this,f,x,y);
case  4 :
return fnil__11038.call(this,f,x,y,z);
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
var mapi__11145 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11141))
{var s__11143 = temp__3698__auto____11141;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11143)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11143)));
} else
{return null;
}
})));
});

return mapi__11145.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11207 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11207))
{var s__11208 = temp__3698__auto____11207;

var x__11215 = f.call(null,cljs.core.first.call(null,s__11208));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11215)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11208));
} else
{return cljs.core.cons.call(null,x__11215,keep.call(null,f,cljs.core.rest.call(null,s__11208)));
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
var temp__3698__auto____11242 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11242))
{var s__11245 = temp__3698__auto____11242;

var x__11247 = f.call(null,idx,cljs.core.first.call(null,s__11245));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11247)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11245));
} else
{return cljs.core.cons.call(null,x__11247,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11245)));
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
var every_pred__11481 = (function (p){
return (function() {
var ep1 = null;
var ep1__11489 = (function (){
return true;
});
var ep1__11490 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11491 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11278 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11278))
{return p.call(null,y);
} else
{return and__3546__auto____11278;
}
})());
});
var ep1__11492 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11279 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11281 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11281))
{return p.call(null,z);
} else
{return and__3546__auto____11281;
}
} else
{return and__3546__auto____11279;
}
})());
});
var ep1__11493 = (function() { 
var G__11506__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11292 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11292))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11292;
}
})());
};
var G__11506 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11506__delegate.call(this, x, y, z, args);
};
G__11506.cljs$lang$maxFixedArity = 3;
G__11506.cljs$lang$applyTo = (function (arglist__11509){
var x = cljs.core.first(arglist__11509);
var y = cljs.core.first(cljs.core.next(arglist__11509));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11509)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11509)));
return G__11506__delegate.call(this, x, y, z, args);
});
return G__11506;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11489.call(this);
case  1 :
return ep1__11490.call(this,x);
case  2 :
return ep1__11491.call(this,x,y);
case  3 :
return ep1__11492.call(this,x,y,z);
default:
return ep1__11493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11493.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11482 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11513 = (function (){
return true;
});
var ep2__11514 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11296 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11296))
{return p2.call(null,x);
} else
{return and__3546__auto____11296;
}
})());
});
var ep2__11515 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11303 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11303))
{var and__3546__auto____11305 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11305))
{var and__3546__auto____11306 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11306))
{return p2.call(null,y);
} else
{return and__3546__auto____11306;
}
} else
{return and__3546__auto____11305;
}
} else
{return and__3546__auto____11303;
}
})());
});
var ep2__11516 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11308 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11308))
{var and__3546__auto____11310 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11310))
{var and__3546__auto____11316 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11316))
{var and__3546__auto____11317 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11317))
{var and__3546__auto____11318 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11318))
{return p2.call(null,z);
} else
{return and__3546__auto____11318;
}
} else
{return and__3546__auto____11317;
}
} else
{return and__3546__auto____11316;
}
} else
{return and__3546__auto____11310;
}
} else
{return and__3546__auto____11308;
}
})());
});
var ep2__11517 = (function() { 
var G__11533__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11319 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11319))
{return cljs.core.every_QMARK_.call(null,(function (p1__11228_SHARP_){
var and__3546__auto____11321 = p1.call(null,p1__11228_SHARP_);

if(cljs.core.truth_(and__3546__auto____11321))
{return p2.call(null,p1__11228_SHARP_);
} else
{return and__3546__auto____11321;
}
}),args);
} else
{return and__3546__auto____11319;
}
})());
};
var G__11533 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11533__delegate.call(this, x, y, z, args);
};
G__11533.cljs$lang$maxFixedArity = 3;
G__11533.cljs$lang$applyTo = (function (arglist__11537){
var x = cljs.core.first(arglist__11537);
var y = cljs.core.first(cljs.core.next(arglist__11537));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11537)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11537)));
return G__11533__delegate.call(this, x, y, z, args);
});
return G__11533;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11513.call(this);
case  1 :
return ep2__11514.call(this,x);
case  2 :
return ep2__11515.call(this,x,y);
case  3 :
return ep2__11516.call(this,x,y,z);
default:
return ep2__11517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11517.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11483 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11540 = (function (){
return true;
});
var ep3__11542 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11323 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11323))
{var and__3546__auto____11326 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11326))
{return p3.call(null,x);
} else
{return and__3546__auto____11326;
}
} else
{return and__3546__auto____11323;
}
})());
});
var ep3__11544 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11406 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11406))
{var and__3546__auto____11408 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11408))
{var and__3546__auto____11411 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11411))
{var and__3546__auto____11415 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11415))
{var and__3546__auto____11416 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11416))
{return p3.call(null,y);
} else
{return and__3546__auto____11416;
}
} else
{return and__3546__auto____11415;
}
} else
{return and__3546__auto____11411;
}
} else
{return and__3546__auto____11408;
}
} else
{return and__3546__auto____11406;
}
})());
});
var ep3__11546 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11420 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11420))
{var and__3546__auto____11423 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11423))
{var and__3546__auto____11425 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11425))
{var and__3546__auto____11432 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11432))
{var and__3546__auto____11437 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11437))
{var and__3546__auto____11438 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11438))
{var and__3546__auto____11441 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11441))
{var and__3546__auto____11442 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11442))
{return p3.call(null,z);
} else
{return and__3546__auto____11442;
}
} else
{return and__3546__auto____11441;
}
} else
{return and__3546__auto____11438;
}
} else
{return and__3546__auto____11437;
}
} else
{return and__3546__auto____11432;
}
} else
{return and__3546__auto____11425;
}
} else
{return and__3546__auto____11423;
}
} else
{return and__3546__auto____11420;
}
})());
});
var ep3__11549 = (function() { 
var G__11585__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11445 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11445))
{return cljs.core.every_QMARK_.call(null,(function (p1__11231_SHARP_){
var and__3546__auto____11448 = p1.call(null,p1__11231_SHARP_);

if(cljs.core.truth_(and__3546__auto____11448))
{var and__3546__auto____11450 = p2.call(null,p1__11231_SHARP_);

if(cljs.core.truth_(and__3546__auto____11450))
{return p3.call(null,p1__11231_SHARP_);
} else
{return and__3546__auto____11450;
}
} else
{return and__3546__auto____11448;
}
}),args);
} else
{return and__3546__auto____11445;
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
G__11585.cljs$lang$applyTo = (function (arglist__11587){
var x = cljs.core.first(arglist__11587);
var y = cljs.core.first(cljs.core.next(arglist__11587));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11587)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11587)));
return G__11585__delegate.call(this, x, y, z, args);
});
return G__11585;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11540.call(this);
case  1 :
return ep3__11542.call(this,x);
case  2 :
return ep3__11544.call(this,x,y);
case  3 :
return ep3__11546.call(this,x,y,z);
default:
return ep3__11549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11549.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11484 = (function() { 
var G__11588__delegate = function (p1,p2,p3,ps){
var ps__11454 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11590 = (function (){
return true;
});
var epn__11591 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11232_SHARP_){
return p1__11232_SHARP_.call(null,x);
}),ps__11454);
});
var epn__11592 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11234_SHARP_){
var and__3546__auto____11460 = p1__11234_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11460))
{return p1__11234_SHARP_.call(null,y);
} else
{return and__3546__auto____11460;
}
}),ps__11454);
});
var epn__11593 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11235_SHARP_){
var and__3546__auto____11465 = p1__11235_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11465))
{var and__3546__auto____11467 = p1__11235_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11467))
{return p1__11235_SHARP_.call(null,z);
} else
{return and__3546__auto____11467;
}
} else
{return and__3546__auto____11465;
}
}),ps__11454);
});
var epn__11594 = (function() { 
var G__11606__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11472 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11472))
{return cljs.core.every_QMARK_.call(null,(function (p1__11237_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11237_SHARP_,args);
}),ps__11454);
} else
{return and__3546__auto____11472;
}
})());
};
var G__11606 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11606__delegate.call(this, x, y, z, args);
};
G__11606.cljs$lang$maxFixedArity = 3;
G__11606.cljs$lang$applyTo = (function (arglist__11609){
var x = cljs.core.first(arglist__11609);
var y = cljs.core.first(cljs.core.next(arglist__11609));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11609)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11609)));
return G__11606__delegate.call(this, x, y, z, args);
});
return G__11606;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11590.call(this);
case  1 :
return epn__11591.call(this,x);
case  2 :
return epn__11592.call(this,x,y);
case  3 :
return epn__11593.call(this,x,y,z);
default:
return epn__11594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11594.cljs$lang$applyTo;
return epn;
})()
};
var G__11588 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11588__delegate.call(this, p1, p2, p3, ps);
};
G__11588.cljs$lang$maxFixedArity = 3;
G__11588.cljs$lang$applyTo = (function (arglist__11618){
var p1 = cljs.core.first(arglist__11618);
var p2 = cljs.core.first(cljs.core.next(arglist__11618));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11618)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11618)));
return G__11588__delegate.call(this, p1, p2, p3, ps);
});
return G__11588;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11481.call(this,p1);
case  2 :
return every_pred__11482.call(this,p1,p2);
case  3 :
return every_pred__11483.call(this,p1,p2,p3);
default:
return every_pred__11484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11484.cljs$lang$applyTo;
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
var some_fn__11775 = (function (p){
return (function() {
var sp1 = null;
var sp1__11781 = (function (){
return null;
});
var sp1__11782 = (function (x){
return p.call(null,x);
});
var sp1__11783 = (function (x,y){
var or__3548__auto____11624 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11624))
{return or__3548__auto____11624;
} else
{return p.call(null,y);
}
});
var sp1__11784 = (function (x,y,z){
var or__3548__auto____11626 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{var or__3548__auto____11629 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11629))
{return or__3548__auto____11629;
} else
{return p.call(null,z);
}
}
});
var sp1__11785 = (function() { 
var G__11788__delegate = function (x,y,z,args){
var or__3548__auto____11638 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11638))
{return or__3548__auto____11638;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11788 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11788__delegate.call(this, x, y, z, args);
};
G__11788.cljs$lang$maxFixedArity = 3;
G__11788.cljs$lang$applyTo = (function (arglist__11789){
var x = cljs.core.first(arglist__11789);
var y = cljs.core.first(cljs.core.next(arglist__11789));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11789)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11789)));
return G__11788__delegate.call(this, x, y, z, args);
});
return G__11788;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11781.call(this);
case  1 :
return sp1__11782.call(this,x);
case  2 :
return sp1__11783.call(this,x,y);
case  3 :
return sp1__11784.call(this,x,y,z);
default:
return sp1__11785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11785.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11777 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11791 = (function (){
return null;
});
var sp2__11792 = (function (x){
var or__3548__auto____11640 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11640))
{return or__3548__auto____11640;
} else
{return p2.call(null,x);
}
});
var sp2__11793 = (function (x,y){
var or__3548__auto____11644 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11645 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11645))
{return or__3548__auto____11645;
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
var sp2__11794 = (function (x,y,z){
var or__3548__auto____11655 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11655))
{return or__3548__auto____11655;
} else
{var or__3548__auto____11658 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11658))
{return or__3548__auto____11658;
} else
{var or__3548__auto____11659 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11659))
{return or__3548__auto____11659;
} else
{var or__3548__auto____11661 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11661))
{return or__3548__auto____11661;
} else
{var or__3548__auto____11709 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11709))
{return or__3548__auto____11709;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11795 = (function() { 
var G__11798__delegate = function (x,y,z,args){
var or__3548__auto____11710 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11710))
{return or__3548__auto____11710;
} else
{return cljs.core.some.call(null,(function (p1__11269_SHARP_){
var or__3548__auto____11712 = p1.call(null,p1__11269_SHARP_);

if(cljs.core.truth_(or__3548__auto____11712))
{return or__3548__auto____11712;
} else
{return p2.call(null,p1__11269_SHARP_);
}
}),args);
}
};
var G__11798 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11798__delegate.call(this, x, y, z, args);
};
G__11798.cljs$lang$maxFixedArity = 3;
G__11798.cljs$lang$applyTo = (function (arglist__11801){
var x = cljs.core.first(arglist__11801);
var y = cljs.core.first(cljs.core.next(arglist__11801));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11801)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11801)));
return G__11798__delegate.call(this, x, y, z, args);
});
return G__11798;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11791.call(this);
case  1 :
return sp2__11792.call(this,x);
case  2 :
return sp2__11793.call(this,x,y);
case  3 :
return sp2__11794.call(this,x,y,z);
default:
return sp2__11795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11795.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11778 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11823 = (function (){
return null;
});
var sp3__11824 = (function (x){
var or__3548__auto____11717 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11717))
{return or__3548__auto____11717;
} else
{var or__3548__auto____11719 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11719))
{return or__3548__auto____11719;
} else
{return p3.call(null,x);
}
}
});
var sp3__11825 = (function (x,y){
var or__3548__auto____11720 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11720))
{return or__3548__auto____11720;
} else
{var or__3548__auto____11721 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11721))
{return or__3548__auto____11721;
} else
{var or__3548__auto____11723 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11723))
{return or__3548__auto____11723;
} else
{var or__3548__auto____11726 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11726))
{return or__3548__auto____11726;
} else
{var or__3548__auto____11728 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11728))
{return or__3548__auto____11728;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11826 = (function (x,y,z){
var or__3548__auto____11729 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11729))
{return or__3548__auto____11729;
} else
{var or__3548__auto____11731 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11731))
{return or__3548__auto____11731;
} else
{var or__3548__auto____11732 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11732))
{return or__3548__auto____11732;
} else
{var or__3548__auto____11734 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11734))
{return or__3548__auto____11734;
} else
{var or__3548__auto____11736 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11736))
{return or__3548__auto____11736;
} else
{var or__3548__auto____11737 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11737))
{return or__3548__auto____11737;
} else
{var or__3548__auto____11738 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11738))
{return or__3548__auto____11738;
} else
{var or__3548__auto____11739 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11739))
{return or__3548__auto____11739;
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
var sp3__11827 = (function() { 
var G__11838__delegate = function (x,y,z,args){
var or__3548__auto____11741 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11741))
{return or__3548__auto____11741;
} else
{return cljs.core.some.call(null,(function (p1__11270_SHARP_){
var or__3548__auto____11743 = p1.call(null,p1__11270_SHARP_);

if(cljs.core.truth_(or__3548__auto____11743))
{return or__3548__auto____11743;
} else
{var or__3548__auto____11744 = p2.call(null,p1__11270_SHARP_);

if(cljs.core.truth_(or__3548__auto____11744))
{return or__3548__auto____11744;
} else
{return p3.call(null,p1__11270_SHARP_);
}
}
}),args);
}
};
var G__11838 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11838__delegate.call(this, x, y, z, args);
};
G__11838.cljs$lang$maxFixedArity = 3;
G__11838.cljs$lang$applyTo = (function (arglist__11844){
var x = cljs.core.first(arglist__11844);
var y = cljs.core.first(cljs.core.next(arglist__11844));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11844)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11844)));
return G__11838__delegate.call(this, x, y, z, args);
});
return G__11838;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11823.call(this);
case  1 :
return sp3__11824.call(this,x);
case  2 :
return sp3__11825.call(this,x,y);
case  3 :
return sp3__11826.call(this,x,y,z);
default:
return sp3__11827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11827.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11779 = (function() { 
var G__11846__delegate = function (p1,p2,p3,ps){
var ps__11764 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11848 = (function (){
return null;
});
var spn__11849 = (function (x){
return cljs.core.some.call(null,(function (p1__11271_SHARP_){
return p1__11271_SHARP_.call(null,x);
}),ps__11764);
});
var spn__11850 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11272_SHARP_){
var or__3548__auto____11765 = p1__11272_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11765))
{return or__3548__auto____11765;
} else
{return p1__11272_SHARP_.call(null,y);
}
}),ps__11764);
});
var spn__11851 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11273_SHARP_){
var or__3548__auto____11769 = p1__11273_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11769))
{return or__3548__auto____11769;
} else
{var or__3548__auto____11770 = p1__11273_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11770))
{return or__3548__auto____11770;
} else
{return p1__11273_SHARP_.call(null,z);
}
}
}),ps__11764);
});
var spn__11852 = (function() { 
var G__11856__delegate = function (x,y,z,args){
var or__3548__auto____11771 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11771))
{return or__3548__auto____11771;
} else
{return cljs.core.some.call(null,(function (p1__11275_SHARP_){
return cljs.core.some.call(null,p1__11275_SHARP_,args);
}),ps__11764);
}
};
var G__11856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11856__delegate.call(this, x, y, z, args);
};
G__11856.cljs$lang$maxFixedArity = 3;
G__11856.cljs$lang$applyTo = (function (arglist__11859){
var x = cljs.core.first(arglist__11859);
var y = cljs.core.first(cljs.core.next(arglist__11859));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11859)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11859)));
return G__11856__delegate.call(this, x, y, z, args);
});
return G__11856;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11848.call(this);
case  1 :
return spn__11849.call(this,x);
case  2 :
return spn__11850.call(this,x,y);
case  3 :
return spn__11851.call(this,x,y,z);
default:
return spn__11852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11852.cljs$lang$applyTo;
return spn;
})()
};
var G__11846 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11846__delegate.call(this, p1, p2, p3, ps);
};
G__11846.cljs$lang$maxFixedArity = 3;
G__11846.cljs$lang$applyTo = (function (arglist__11862){
var p1 = cljs.core.first(arglist__11862);
var p2 = cljs.core.first(cljs.core.next(arglist__11862));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11862)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11862)));
return G__11846__delegate.call(this, p1, p2, p3, ps);
});
return G__11846;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11775.call(this,p1);
case  2 :
return some_fn__11777.call(this,p1,p2);
case  3 :
return some_fn__11778.call(this,p1,p2,p3);
default:
return some_fn__11779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11779.cljs$lang$applyTo;
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
var map__11886 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11866))
{var s__11867 = temp__3698__auto____11866;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11867)),map.call(null,f,cljs.core.rest.call(null,s__11867)));
} else
{return null;
}
})));
});
var map__11887 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11870 = cljs.core.seq.call(null,c1);
var s2__11871 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11872 = s1__11870;

if(cljs.core.truth_(and__3546__auto____11872))
{return s2__11871;
} else
{return and__3546__auto____11872;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11870),cljs.core.first.call(null,s2__11871)),map.call(null,f,cljs.core.rest.call(null,s1__11870),cljs.core.rest.call(null,s2__11871)));
} else
{return null;
}
})));
});
var map__11888 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11873 = cljs.core.seq.call(null,c1);
var s2__11874 = cljs.core.seq.call(null,c2);
var s3__11875 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11876 = s1__11873;

if(cljs.core.truth_(and__3546__auto____11876))
{var and__3546__auto____11877 = s2__11874;

if(cljs.core.truth_(and__3546__auto____11877))
{return s3__11875;
} else
{return and__3546__auto____11877;
}
} else
{return and__3546__auto____11876;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11873),cljs.core.first.call(null,s2__11874),cljs.core.first.call(null,s3__11875)),map.call(null,f,cljs.core.rest.call(null,s1__11873),cljs.core.rest.call(null,s2__11874),cljs.core.rest.call(null,s3__11875)));
} else
{return null;
}
})));
});
var map__11889 = (function() { 
var G__11901__delegate = function (f,c1,c2,c3,colls){
var step__11882 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11878 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11878)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11878),step.call(null,map.call(null,cljs.core.rest,ss__11878)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11620_SHARP_){
return cljs.core.apply.call(null,f,p1__11620_SHARP_);
}),step__11882.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11901 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11901__delegate.call(this, f, c1, c2, c3, colls);
};
G__11901.cljs$lang$maxFixedArity = 4;
G__11901.cljs$lang$applyTo = (function (arglist__11902){
var f = cljs.core.first(arglist__11902);
var c1 = cljs.core.first(cljs.core.next(arglist__11902));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11902)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11902))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11902))));
return G__11901__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11901;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11886.call(this,f,c1);
case  3 :
return map__11887.call(this,f,c1,c2);
case  4 :
return map__11888.call(this,f,c1,c2,c3);
default:
return map__11889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11889.cljs$lang$applyTo;
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
{var temp__3698__auto____11943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11943))
{var s__11944 = temp__3698__auto____11943;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11944),take.call(null,(n - 1),cljs.core.rest.call(null,s__11944)));
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
var step__11966 = (function (n,coll){
while(true){
var s__11962 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11964 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11964))
{return s__11962;
} else
{return and__3546__auto____11964;
}
})()))
{{
var G__11977 = (n - 1);
var G__11978 = cljs.core.rest.call(null,s__11962);
n = G__11977;
coll = G__11978;
continue;
}
} else
{return s__11962;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11966.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11979 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11980 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11979.call(this,n);
case  2 :
return drop_last__11980.call(this,n,s);
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
var s__11987 = cljs.core.seq.call(null,coll);
var lead__11989 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11989))
{{
var G__12008 = cljs.core.next.call(null,s__11987);
var G__12009 = cljs.core.next.call(null,lead__11989);
s__11987 = G__12008;
lead__11989 = G__12009;
continue;
}
} else
{return s__11987;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12014 = (function (pred,coll){
while(true){
var s__12011 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12012 = s__12011;

if(cljs.core.truth_(and__3546__auto____12012))
{return pred.call(null,cljs.core.first.call(null,s__12011));
} else
{return and__3546__auto____12012;
}
})()))
{{
var G__12019 = pred;
var G__12020 = cljs.core.rest.call(null,s__12011);
pred = G__12019;
coll = G__12020;
continue;
}
} else
{return s__12011;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12014.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12026 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12026))
{var s__12027 = temp__3698__auto____12026;

return cljs.core.concat.call(null,s__12027,cycle.call(null,s__12027));
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
var repeat__12037 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12038 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12037.call(this,n);
case  2 :
return repeat__12038.call(this,n,x);
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
var repeatedly__12045 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12046 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12045.call(this,n);
case  2 :
return repeatedly__12046.call(this,n,f);
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
var interleave__12063 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12052 = cljs.core.seq.call(null,c1);
var s2__12053 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12054 = s1__12052;

if(cljs.core.truth_(and__3546__auto____12054))
{return s2__12053;
} else
{return and__3546__auto____12054;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12052),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12053),interleave.call(null,cljs.core.rest.call(null,s1__12052),cljs.core.rest.call(null,s2__12053))));
} else
{return null;
}
})));
});
var interleave__12064 = (function() { 
var G__12072__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12056 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12056)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12056),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12056)));
} else
{return null;
}
})));
};
var G__12072 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12072__delegate.call(this, c1, c2, colls);
};
G__12072.cljs$lang$maxFixedArity = 2;
G__12072.cljs$lang$applyTo = (function (arglist__12079){
var c1 = cljs.core.first(arglist__12079);
var c2 = cljs.core.first(cljs.core.next(arglist__12079));
var colls = cljs.core.rest(cljs.core.next(arglist__12079));
return G__12072__delegate.call(this, c1, c2, colls);
});
return G__12072;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12063.call(this,c1,c2);
default:
return interleave__12064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12064.cljs$lang$applyTo;
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
var cat__12136 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12134 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12134))
{var coll__12135 = temp__3695__auto____12134;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12135),cat.call(null,cljs.core.rest.call(null,coll__12135),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12136.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12142 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12143 = (function() { 
var G__12146__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12146 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12146__delegate.call(this, f, coll, colls);
};
G__12146.cljs$lang$maxFixedArity = 2;
G__12146.cljs$lang$applyTo = (function (arglist__12150){
var f = cljs.core.first(arglist__12150);
var coll = cljs.core.first(cljs.core.next(arglist__12150));
var colls = cljs.core.rest(cljs.core.next(arglist__12150));
return G__12146__delegate.call(this, f, coll, colls);
});
return G__12146;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12142.call(this,f,coll);
default:
return mapcat__12143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12143.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12153 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12153))
{var s__12154 = temp__3698__auto____12153;

var f__12155 = cljs.core.first.call(null,s__12154);
var r__12156 = cljs.core.rest.call(null,s__12154);

if(cljs.core.truth_(pred.call(null,f__12155)))
{return cljs.core.cons.call(null,f__12155,filter.call(null,pred,r__12156));
} else
{return filter.call(null,pred,r__12156);
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
var walk__12165 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12165.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12164_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12164_SHARP_));
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
var partition__12189 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12190 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12168))
{var s__12174 = temp__3698__auto____12168;

var p__12175 = cljs.core.take.call(null,n,s__12174);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12175))))
{return cljs.core.cons.call(null,p__12175,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12174)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12191 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12178 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12178))
{var s__12181 = temp__3698__auto____12178;

var p__12183 = cljs.core.take.call(null,n,s__12181);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12183))))
{return cljs.core.cons.call(null,p__12183,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12181)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12183,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12189.call(this,n,step);
case  3 :
return partition__12190.call(this,n,step,pad);
case  4 :
return partition__12191.call(this,n,step,pad,coll);
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
var get_in__12204 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12205 = (function (m,ks,not_found){
var sentinel__12200 = cljs.core.lookup_sentinel;
var m__12201 = m;
var ks__12202 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12202))
{var m__12203 = cljs.core.get.call(null,m__12201,cljs.core.first.call(null,ks__12202),sentinel__12200);

if(cljs.core.truth_((sentinel__12200 === m__12203)))
{return not_found;
} else
{{
var G__12207 = sentinel__12200;
var G__12208 = m__12203;
var G__12209 = cljs.core.next.call(null,ks__12202);
sentinel__12200 = G__12207;
m__12201 = G__12208;
ks__12202 = G__12209;
continue;
}
}
} else
{return m__12201;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12204.call(this,m,ks);
case  3 :
return get_in__12205.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12210,v){
var vec__12211__12213 = p__12210;
var k__12214 = cljs.core.nth.call(null,vec__12211__12213,0,null);
var ks__12216 = cljs.core.nthnext.call(null,vec__12211__12213,1);

if(cljs.core.truth_(ks__12216))
{return cljs.core.assoc.call(null,m,k__12214,assoc_in.call(null,cljs.core.get.call(null,m,k__12214),ks__12216,v));
} else
{return cljs.core.assoc.call(null,m,k__12214,v);
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
var update_in__delegate = function (m,p__12228,f,args){
var vec__12229__12230 = p__12228;
var k__12231 = cljs.core.nth.call(null,vec__12229__12230,0,null);
var ks__12232 = cljs.core.nthnext.call(null,vec__12229__12230,1);

if(cljs.core.truth_(ks__12232))
{return cljs.core.assoc.call(null,m,k__12231,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12231),ks__12232,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12231,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12231),args));
}
};
var update_in = function (m,p__12228,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12228, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12237){
var m = cljs.core.first(arglist__12237);
var p__12228 = cljs.core.first(cljs.core.next(arglist__12237));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12237)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12237)));
return update_in__delegate.call(this, m, p__12228, f, args);
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
var this__12249 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12312 = null;
var G__12312__12313 = (function (coll,k){
var this__12279 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12312__12314 = (function (coll,k,not_found){
var this__12280 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12312 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12312__12313.call(this,coll,k);
case  3 :
return G__12312__12314.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12312;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12281 = this;
var new_array__12282 = cljs.core.aclone.call(null,this__12281.array);

(new_array__12282[k] = v);
return (new cljs.core.Vector(this__12281.meta,new_array__12282));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12319 = null;
var G__12319__12320 = (function (coll,k){
var this__12283 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12319__12322 = (function (coll,k,not_found){
var this__12284 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12319 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12319__12320.call(this,coll,k);
case  3 :
return G__12319__12322.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12319;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12285 = this;
var new_array__12286 = cljs.core.aclone.call(null,this__12285.array);

new_array__12286.push(o);
return (new cljs.core.Vector(this__12285.meta,new_array__12286));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12325 = null;
var G__12325__12326 = (function (v,f){
var this__12287 = this;
return cljs.core.ci_reduce.call(null,this__12287.array,f);
});
var G__12325__12327 = (function (v,f,start){
var this__12288 = this;
return cljs.core.ci_reduce.call(null,this__12288.array,f,start);
});
G__12325 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12325__12326.call(this,v,f);
case  3 :
return G__12325__12327.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12325;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12289 = this;
if(cljs.core.truth_((this__12289.array.length > 0)))
{var vector_seq__12290 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12289.array.length)))
{return cljs.core.cons.call(null,(this__12289.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12290.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12291 = this;
return this__12291.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12292 = this;
var count__12294 = this__12292.array.length;

if(cljs.core.truth_((count__12294 > 0)))
{return (this__12292.array[(count__12294 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12295 = this;
if(cljs.core.truth_((this__12295.array.length > 0)))
{var new_array__12296 = cljs.core.aclone.call(null,this__12295.array);

new_array__12296.pop();
return (new cljs.core.Vector(this__12295.meta,new_array__12296));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12297 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12299 = this;
return (new cljs.core.Vector(meta,this__12299.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12300 = this;
return this__12300.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12334 = null;
var G__12334__12335 = (function (coll,n){
var this__12301 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12302 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12302))
{return (n < this__12301.array.length);
} else
{return and__3546__auto____12302;
}
})()))
{return (this__12301.array[n]);
} else
{return null;
}
});
var G__12334__12336 = (function (coll,n,not_found){
var this__12304 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12306 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12306))
{return (n < this__12304.array.length);
} else
{return and__3546__auto____12306;
}
})()))
{return (this__12304.array[n]);
} else
{return not_found;
}
});
G__12334 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12334__12335.call(this,coll,n);
case  3 :
return G__12334__12336.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12334;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12309 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12309.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12400){
var args = cljs.core.seq( arglist__12400 );;
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
var this__12410 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12459 = null;
var G__12459__12460 = (function (coll,k){
var this__12411 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12459__12461 = (function (coll,k,not_found){
var this__12412 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12459 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12459__12460.call(this,coll,k);
case  3 :
return G__12459__12461.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12459;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12413 = this;
var v_pos__12415 = (this__12413.start + key);

return (new cljs.core.Subvec(this__12413.meta,cljs.core._assoc.call(null,this__12413.v,v_pos__12415,val),this__12413.start,((this__12413.end > (v_pos__12415 + 1)) ? this__12413.end : (v_pos__12415 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12467 = null;
var G__12467__12468 = (function (coll,k){
var this__12418 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12467__12469 = (function (coll,k,not_found){
var this__12423 = this;
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
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12425 = this;
return (new cljs.core.Subvec(this__12425.meta,cljs.core._assoc_n.call(null,this__12425.v,this__12425.end,o),this__12425.start,(this__12425.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12478 = null;
var G__12478__12479 = (function (coll,f){
var this__12427 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12478__12480 = (function (coll,f,start){
var this__12429 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12478 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12478__12479.call(this,coll,f);
case  3 :
return G__12478__12480.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12478;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12430 = this;
var subvec_seq__12431 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12430.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12430.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12431.call(null,this__12430.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12432 = this;
return (this__12432.end - this__12432.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12435 = this;
return cljs.core._nth.call(null,this__12435.v,(this__12435.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12437 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12437.start,this__12437.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12437.meta,this__12437.v,this__12437.start,(this__12437.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12438 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12440 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12441 = this;
return (new cljs.core.Subvec(meta,this__12441.v,this__12441.start,this__12441.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12447 = this;
return this__12447.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12572 = null;
var G__12572__12573 = (function (coll,n){
var this__12449 = this;
return cljs.core._nth.call(null,this__12449.v,(this__12449.start + n));
});
var G__12572__12574 = (function (coll,n,not_found){
var this__12451 = this;
return cljs.core._nth.call(null,this__12451.v,(this__12451.start + n),not_found);
});
G__12572 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12572__12573.call(this,coll,n);
case  3 :
return G__12572__12574.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12572;
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
var subvec__12586 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12587 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12586.call(this,v,start);
case  3 :
return subvec__12587.call(this,v,start,end);
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
var this__12594 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12595 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12596 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12597 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12597.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12598 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12601 = this;
return cljs.core._first.call(null,this__12601.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12628 = this;
var temp__3695__auto____12630 = cljs.core.next.call(null,this__12628.front);

if(cljs.core.truth_(temp__3695__auto____12630))
{var f1__12631 = temp__3695__auto____12630;

return (new cljs.core.PersistentQueueSeq(this__12628.meta,f1__12631,this__12628.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12628.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12628.meta,this__12628.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12633 = this;
return this__12633.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12636 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12636.front,this__12636.rear));
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
var this__12666 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12667 = this;
if(cljs.core.truth_(this__12667.front))
{return (new cljs.core.PersistentQueue(this__12667.meta,(this__12667.count + 1),this__12667.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12670 = this__12667.rear;

if(cljs.core.truth_(or__3548__auto____12670))
{return or__3548__auto____12670;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12667.meta,(this__12667.count + 1),cljs.core.conj.call(null,this__12667.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12673 = this;
var rear__12674 = cljs.core.seq.call(null,this__12673.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12676 = this__12673.front;

if(cljs.core.truth_(or__3548__auto____12676))
{return or__3548__auto____12676;
} else
{return rear__12674;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12673.front,cljs.core.seq.call(null,rear__12674)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12678 = this;
return this__12678.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12679 = this;
return cljs.core._first.call(null,this__12679.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12683 = this;
if(cljs.core.truth_(this__12683.front))
{var temp__3695__auto____12685 = cljs.core.next.call(null,this__12683.front);

if(cljs.core.truth_(temp__3695__auto____12685))
{var f1__12688 = temp__3695__auto____12685;

return (new cljs.core.PersistentQueue(this__12683.meta,(this__12683.count - 1),f1__12688,this__12683.rear));
} else
{return (new cljs.core.PersistentQueue(this__12683.meta,(this__12683.count - 1),cljs.core.seq.call(null,this__12683.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12691 = this;
return cljs.core.first.call(null,this__12691.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12693 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12697 = this;
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
var this__12706 = this;
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
var this__12756 = this;
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

var i__12768 = 0;

while(true){
if(cljs.core.truth_((i__12768 < len__12767)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12768]))))
{return i__12768;
} else
{{
var G__12775 = (i__12768 + incr);
i__12768 = G__12775;
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
var obj_map_contains_key_QMARK___12780 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12781 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12779 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12779))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12779;
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
return obj_map_contains_key_QMARK___12780.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12781.call(this,k,strobj,true_val,false_val);
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
var this__12795 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12897 = null;
var G__12897__12898 = (function (coll,k){
var this__12798 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12897__12899 = (function (coll,k,not_found){
var this__12800 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12800.strobj,(this__12800.strobj[k]),not_found);
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
var this__12804 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12805 = goog.object.clone.call(null,this__12804.strobj);
var overwrite_QMARK___12806 = new_strobj__12805.hasOwnProperty(k);

(new_strobj__12805[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12806))
{return (new cljs.core.ObjMap(this__12804.meta,this__12804.keys,new_strobj__12805));
} else
{var new_keys__12809 = cljs.core.aclone.call(null,this__12804.keys);

new_keys__12809.push(k);
return (new cljs.core.ObjMap(this__12804.meta,new_keys__12809,new_strobj__12805));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12804.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12811 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12811.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12905 = null;
var G__12905__12906 = (function (coll,k){
var this__12813 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12905__12907 = (function (coll,k,not_found){
var this__12815 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12905 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12905__12906.call(this,coll,k);
case  3 :
return G__12905__12907.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12905;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12877 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12882 = this;
if(cljs.core.truth_((this__12882.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12784_SHARP_){
return cljs.core.vector.call(null,p1__12784_SHARP_,(this__12882.strobj[p1__12784_SHARP_]));
}),this__12882.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12883 = this;
return this__12883.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12884 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12886 = this;
return (new cljs.core.ObjMap(meta,this__12886.keys,this__12886.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12891 = this;
return this__12891.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12892 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12892.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12893 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12894 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12894))
{return this__12893.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12894;
}
})()))
{var new_keys__12895 = cljs.core.aclone.call(null,this__12893.keys);
var new_strobj__12896 = goog.object.clone.call(null,this__12893.strobj);

new_keys__12895.splice(cljs.core.scan_array.call(null,1,k,new_keys__12895),1);
cljs.core.js_delete.call(null,new_strobj__12896,k);
return (new cljs.core.ObjMap(this__12893.meta,new_keys__12895,new_strobj__12896));
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
var this__12937 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13162 = null;
var G__13162__13163 = (function (coll,k){
var this__12938 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13162__13164 = (function (coll,k,not_found){
var this__12939 = this;
var bucket__12940 = (this__12939.hashobj[cljs.core.hash.call(null,k)]);
var i__12941 = (cljs.core.truth_(bucket__12940)?cljs.core.scan_array.call(null,2,k,bucket__12940):null);

if(cljs.core.truth_(i__12941))
{return (bucket__12940[(i__12941 + 1)]);
} else
{return not_found;
}
});
G__13162 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13162__13163.call(this,coll,k);
case  3 :
return G__13162__13164.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13162;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12942 = this;
var h__12943 = cljs.core.hash.call(null,k);
var bucket__13049 = (this__12942.hashobj[h__12943]);

if(cljs.core.truth_(bucket__13049))
{var new_bucket__13052 = cljs.core.aclone.call(null,bucket__13049);
var new_hashobj__13054 = goog.object.clone.call(null,this__12942.hashobj);

(new_hashobj__13054[h__12943] = new_bucket__13052);
var temp__3695__auto____13056 = cljs.core.scan_array.call(null,2,k,new_bucket__13052);

if(cljs.core.truth_(temp__3695__auto____13056))
{var i__13057 = temp__3695__auto____13056;

(new_bucket__13052[(i__13057 + 1)] = v);
return (new cljs.core.HashMap(this__12942.meta,this__12942.count,new_hashobj__13054));
} else
{new_bucket__13052.push(k,v);
return (new cljs.core.HashMap(this__12942.meta,(this__12942.count + 1),new_hashobj__13054));
}
} else
{var new_hashobj__13084 = goog.object.clone.call(null,this__12942.hashobj);

(new_hashobj__13084[h__12943] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12942.meta,(this__12942.count + 1),new_hashobj__13084));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13086 = this;
var bucket__13087 = (this__13086.hashobj[cljs.core.hash.call(null,k)]);
var i__13088 = (cljs.core.truth_(bucket__13087)?cljs.core.scan_array.call(null,2,k,bucket__13087):null);

if(cljs.core.truth_(i__13088))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13185 = null;
var G__13185__13186 = (function (coll,k){
var this__13089 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13185__13187 = (function (coll,k,not_found){
var this__13091 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13185 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13185__13186.call(this,coll,k);
case  3 :
return G__13185__13187.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13185;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13095 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13102 = this;
if(cljs.core.truth_((this__13102.count > 0)))
{var hashes__13103 = cljs.core.js_keys.call(null,this__13102.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12916_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13102.hashobj[p1__12916_SHARP_])));
}),hashes__13103);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13107 = this;
return this__13107.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13110 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13112 = this;
return (new cljs.core.HashMap(meta,this__13112.count,this__13112.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13116 = this;
return this__13116.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13150 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13150.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13154 = this;
var h__13155 = cljs.core.hash.call(null,k);
var bucket__13156 = (this__13154.hashobj[h__13155]);
var i__13157 = (cljs.core.truth_(bucket__13156)?cljs.core.scan_array.call(null,2,k,bucket__13156):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13157)))
{return coll;
} else
{var new_hashobj__13158 = goog.object.clone.call(null,this__13154.hashobj);

if(cljs.core.truth_((3 > bucket__13156.length)))
{cljs.core.js_delete.call(null,new_hashobj__13158,h__13155);
} else
{var new_bucket__13159 = cljs.core.aclone.call(null,bucket__13156);

new_bucket__13159.splice(i__13157,2);
(new_hashobj__13158[h__13155] = new_bucket__13159);
}
return (new cljs.core.HashMap(this__13154.meta,(this__13154.count - 1),new_hashobj__13158));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13202 = ks.length;

var i__13203 = 0;
var out__13204 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13203 < len__13202)))
{{
var G__13214 = (i__13203 + 1);
var G__13215 = cljs.core.assoc.call(null,out__13204,(ks[i__13203]),(vs[i__13203]));
i__13203 = G__13214;
out__13204 = G__13215;
continue;
}
} else
{return out__13204;
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
var in$__13216 = cljs.core.seq.call(null,keyvals);
var out__13217 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13216))
{{
var G__13221 = cljs.core.nnext.call(null,in$__13216);
var G__13223 = cljs.core.assoc.call(null,out__13217,cljs.core.first.call(null,in$__13216),cljs.core.second.call(null,in$__13216));
in$__13216 = G__13221;
out__13217 = G__13223;
continue;
}
} else
{return out__13217;
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
hash_map.cljs$lang$applyTo = (function (arglist__13227){
var keyvals = cljs.core.seq( arglist__13227 );;
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
{return cljs.core.reduce.call(null,(function (p1__13236_SHARP_,p2__13238_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13294 = p1__13236_SHARP_;

if(cljs.core.truth_(or__3548__auto____13294))
{return or__3548__auto____13294;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13238_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13297){
var maps = cljs.core.seq( arglist__13297 );;
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
{var merge_entry__13308 = (function (m,e){
var k__13304 = cljs.core.first.call(null,e);
var v__13306 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13304)))
{return cljs.core.assoc.call(null,m,k__13304,f.call(null,cljs.core.get.call(null,m,k__13304),v__13306));
} else
{return cljs.core.assoc.call(null,m,k__13304,v__13306);
}
});
var merge2__13315 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13308,(function (){var or__3548__auto____13312 = m1;

if(cljs.core.truth_(or__3548__auto____13312))
{return or__3548__auto____13312;
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
merge_with.cljs$lang$applyTo = (function (arglist__13323){
var f = cljs.core.first(arglist__13323);
var maps = cljs.core.rest(arglist__13323);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13329 = cljs.core.ObjMap.fromObject([],{});
var keys__13330 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13330))
{var key__13332 = cljs.core.first.call(null,keys__13330);
var entry__13333 = cljs.core.get.call(null,map,key__13332,"﷐'user/not-found");

{
var G__13335 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13333,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13329,key__13332,entry__13333):ret__13329);
var G__13337 = cljs.core.next.call(null,keys__13330);
ret__13329 = G__13335;
keys__13330 = G__13337;
continue;
}
} else
{return ret__13329;
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
var this__13393 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13421 = null;
var G__13421__13422 = (function (coll,v){
var this__13394 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13421__13423 = (function (coll,v,not_found){
var this__13395 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13395.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13421 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13421__13422.call(this,coll,v);
case  3 :
return G__13421__13423.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13421;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13427 = null;
var G__13427__13428 = (function (coll,k){
var this__13396 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13427__13429 = (function (coll,k,not_found){
var this__13397 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13427 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13427__13428.call(this,coll,k);
case  3 :
return G__13427__13429.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13427;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13401 = this;
return (new cljs.core.Set(this__13401.meta,cljs.core.assoc.call(null,this__13401.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13402 = this;
return cljs.core.keys.call(null,this__13402.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13403 = this;
return (new cljs.core.Set(this__13403.meta,cljs.core.dissoc.call(null,this__13403.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13406 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13407 = this;
var and__3546__auto____13408 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13408))
{var and__3546__auto____13411 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13411))
{return cljs.core.every_QMARK_.call(null,(function (p1__13326_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13326_SHARP_);
}),other);
} else
{return and__3546__auto____13411;
}
} else
{return and__3546__auto____13408;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13412 = this;
return (new cljs.core.Set(meta,this__13412.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13414 = this;
return this__13414.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13420 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13420.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13453 = cljs.core.seq.call(null,coll);
var out__13455 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13453))))
{{
var G__13466 = cljs.core.rest.call(null,in$__13453);
var G__13467 = cljs.core.conj.call(null,out__13455,cljs.core.first.call(null,in$__13453));
in$__13453 = G__13466;
out__13455 = G__13467;
continue;
}
} else
{return out__13455;
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
{var n__13469 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13473 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13473))
{var e__13475 = temp__3695__auto____13473;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13475));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13469,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13452_SHARP_){
var temp__3695__auto____13480 = cljs.core.find.call(null,smap,p1__13452_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13480))
{var e__13481 = temp__3695__auto____13480;

return cljs.core.second.call(null,e__13481);
} else
{return p1__13452_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13535 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13526,seen){
while(true){
var vec__13527__13529 = p__13526;
var f__13530 = cljs.core.nth.call(null,vec__13527__13529,0,null);
var xs__13531 = vec__13527__13529;

var temp__3698__auto____13532 = cljs.core.seq.call(null,xs__13531);

if(cljs.core.truth_(temp__3698__auto____13532))
{var s__13534 = temp__3698__auto____13532;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13530)))
{{
var G__13540 = cljs.core.rest.call(null,s__13534);
var G__13541 = seen;
p__13526 = G__13540;
seen = G__13541;
continue;
}
} else
{return cljs.core.cons.call(null,f__13530,step.call(null,cljs.core.rest.call(null,s__13534),cljs.core.conj.call(null,seen,f__13530)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13535.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13544 = cljs.core.Vector.fromArray([]);
var s__13545 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13545)))
{{
var G__13548 = cljs.core.conj.call(null,ret__13544,cljs.core.first.call(null,s__13545));
var G__13549 = cljs.core.next.call(null,s__13545);
ret__13544 = G__13548;
s__13545 = G__13549;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13544);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13553 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13553))
{return or__3548__auto____13553;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13554 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13554 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13554 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13559 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13559))
{return or__3548__auto____13559;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13562 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13562 > -1)))
{return cljs.core.subs.call(null,x,2,i__13562);
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
var map__13579 = cljs.core.ObjMap.fromObject([],{});
var ks__13580 = cljs.core.seq.call(null,keys);
var vs__13581 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13583 = ks__13580;

if(cljs.core.truth_(and__3546__auto____13583))
{return vs__13581;
} else
{return and__3546__auto____13583;
}
})()))
{{
var G__13590 = cljs.core.assoc.call(null,map__13579,cljs.core.first.call(null,ks__13580),cljs.core.first.call(null,vs__13581));
var G__13591 = cljs.core.next.call(null,ks__13580);
var G__13592 = cljs.core.next.call(null,vs__13581);
map__13579 = G__13590;
ks__13580 = G__13591;
vs__13581 = G__13592;
continue;
}
} else
{return map__13579;
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
var max_key__13603 = (function (k,x){
return x;
});
var max_key__13604 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13605 = (function() { 
var G__13608__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13575_SHARP_,p2__13576_SHARP_){
return max_key.call(null,k,p1__13575_SHARP_,p2__13576_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13608 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13608__delegate.call(this, k, x, y, more);
};
G__13608.cljs$lang$maxFixedArity = 3;
G__13608.cljs$lang$applyTo = (function (arglist__13610){
var k = cljs.core.first(arglist__13610);
var x = cljs.core.first(cljs.core.next(arglist__13610));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13610)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13610)));
return G__13608__delegate.call(this, k, x, y, more);
});
return G__13608;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13603.call(this,k,x);
case  3 :
return max_key__13604.call(this,k,x,y);
default:
return max_key__13605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13605.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13617 = (function (k,x){
return x;
});
var min_key__13618 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13619 = (function() { 
var G__13621__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13595_SHARP_,p2__13596_SHARP_){
return min_key.call(null,k,p1__13595_SHARP_,p2__13596_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13621 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13621__delegate.call(this, k, x, y, more);
};
G__13621.cljs$lang$maxFixedArity = 3;
G__13621.cljs$lang$applyTo = (function (arglist__13638){
var k = cljs.core.first(arglist__13638);
var x = cljs.core.first(cljs.core.next(arglist__13638));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13638)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13638)));
return G__13621__delegate.call(this, k, x, y, more);
});
return G__13621;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13617.call(this,k,x);
case  3 :
return min_key__13618.call(this,k,x,y);
default:
return min_key__13619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13619.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13651 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13652 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13649 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13649))
{var s__13650 = temp__3698__auto____13649;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13650),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13650)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13651.call(this,n,step);
case  3 :
return partition_all__13652.call(this,n,step,coll);
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
var temp__3698__auto____13663 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13663))
{var s__13665 = temp__3698__auto____13663;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13665))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13665),take_while.call(null,pred,cljs.core.rest.call(null,s__13665)));
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
var this__13721 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13722 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13758 = null;
var G__13758__13759 = (function (rng,f){
var this__13723 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13758__13760 = (function (rng,f,s){
var this__13724 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13758 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13758__13759.call(this,rng,f);
case  3 :
return G__13758__13760.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13758;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13725 = this;
var comp__13727 = (cljs.core.truth_((this__13725.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13727.call(null,this__13725.start,this__13725.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13728 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13728.end - this__13728.start) / this__13728.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13729 = this;
return this__13729.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13730 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13730.meta,(this__13730.start + this__13730.step),this__13730.end,this__13730.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13731 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13732 = this;
return (new cljs.core.Range(meta,this__13732.start,this__13732.end,this__13732.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13738 = this;
return this__13738.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13768 = null;
var G__13768__13770 = (function (rng,n){
var this__13743 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13743.start + (n * this__13743.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13745 = (this__13743.start > this__13743.end);

if(cljs.core.truth_(and__3546__auto____13745))
{return cljs.core._EQ_.call(null,this__13743.step,0);
} else
{return and__3546__auto____13745;
}
})()))
{return this__13743.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13768__13771 = (function (rng,n,not_found){
var this__13747 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13747.start + (n * this__13747.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13749 = (this__13747.start > this__13747.end);

if(cljs.core.truth_(and__3546__auto____13749))
{return cljs.core._EQ_.call(null,this__13747.step,0);
} else
{return and__3546__auto____13749;
}
})()))
{return this__13747.start;
} else
{return not_found;
}
}
});
G__13768 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13768__13770.call(this,rng,n);
case  3 :
return G__13768__13771.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13768;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13751 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13751.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13784 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13785 = (function (end){
return range.call(null,0,end,1);
});
var range__13786 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13787 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13784.call(this);
case  1 :
return range__13785.call(this,start);
case  2 :
return range__13786.call(this,start,end);
case  3 :
return range__13787.call(this,start,end,step);
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
var temp__3698__auto____13803 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13803))
{var s__13806 = temp__3698__auto____13803;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13806),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13806)));
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
var temp__3698__auto____13823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13823))
{var s__13825 = temp__3698__auto____13823;

var fst__13827 = cljs.core.first.call(null,s__13825);
var fv__13831 = f.call(null,fst__13827);
var run__13836 = cljs.core.cons.call(null,fst__13827,cljs.core.take_while.call(null,(function (p1__13818_SHARP_){
return cljs.core._EQ_.call(null,fv__13831,f.call(null,p1__13818_SHARP_));
}),cljs.core.next.call(null,s__13825)));

return cljs.core.cons.call(null,run__13836,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13836),s__13825))));
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
var reductions__13934 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13895 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13895))
{var s__13896 = temp__3695__auto____13895;

return reductions.call(null,f,cljs.core.first.call(null,s__13896),cljs.core.rest.call(null,s__13896));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13935 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13898 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13898))
{var s__13899 = temp__3698__auto____13898;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13899)),cljs.core.rest.call(null,s__13899));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13934.call(this,f,init);
case  3 :
return reductions__13935.call(this,f,init,coll);
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
var juxt__13963 = (function (f){
return (function() {
var G__13968 = null;
var G__13968__13969 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13968__13970 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13968__13971 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13968__13972 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13968__13973 = (function() { 
var G__13975__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13975 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13975__delegate.call(this, x, y, z, args);
};
G__13975.cljs$lang$maxFixedArity = 3;
G__13975.cljs$lang$applyTo = (function (arglist__13976){
var x = cljs.core.first(arglist__13976);
var y = cljs.core.first(cljs.core.next(arglist__13976));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13976)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13976)));
return G__13975__delegate.call(this, x, y, z, args);
});
return G__13975;
})()
;
G__13968 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13968__13969.call(this);
case  1 :
return G__13968__13970.call(this,x);
case  2 :
return G__13968__13971.call(this,x,y);
case  3 :
return G__13968__13972.call(this,x,y,z);
default:
return G__13968__13973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13968.cljs$lang$maxFixedArity = 3;
G__13968.cljs$lang$applyTo = G__13968__13973.cljs$lang$applyTo;
return G__13968;
})()
});
var juxt__13964 = (function (f,g){
return (function() {
var G__13978 = null;
var G__13978__13980 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13978__13981 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13978__13982 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13978__13983 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13978__13984 = (function() { 
var G__13992__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13992 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13992__delegate.call(this, x, y, z, args);
};
G__13992.cljs$lang$maxFixedArity = 3;
G__13992.cljs$lang$applyTo = (function (arglist__13994){
var x = cljs.core.first(arglist__13994);
var y = cljs.core.first(cljs.core.next(arglist__13994));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13994)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13994)));
return G__13992__delegate.call(this, x, y, z, args);
});
return G__13992;
})()
;
G__13978 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13978__13980.call(this);
case  1 :
return G__13978__13981.call(this,x);
case  2 :
return G__13978__13982.call(this,x,y);
case  3 :
return G__13978__13983.call(this,x,y,z);
default:
return G__13978__13984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13978.cljs$lang$maxFixedArity = 3;
G__13978.cljs$lang$applyTo = G__13978__13984.cljs$lang$applyTo;
return G__13978;
})()
});
var juxt__13965 = (function (f,g,h){
return (function() {
var G__13998 = null;
var G__13998__14000 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13998__14001 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13998__14002 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13998__14003 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13998__14004 = (function() { 
var G__14025__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14025 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14025__delegate.call(this, x, y, z, args);
};
G__14025.cljs$lang$maxFixedArity = 3;
G__14025.cljs$lang$applyTo = (function (arglist__14028){
var x = cljs.core.first(arglist__14028);
var y = cljs.core.first(cljs.core.next(arglist__14028));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14028)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14028)));
return G__14025__delegate.call(this, x, y, z, args);
});
return G__14025;
})()
;
G__13998 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13998__14000.call(this);
case  1 :
return G__13998__14001.call(this,x);
case  2 :
return G__13998__14002.call(this,x,y);
case  3 :
return G__13998__14003.call(this,x,y,z);
default:
return G__13998__14004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13998.cljs$lang$maxFixedArity = 3;
G__13998.cljs$lang$applyTo = G__13998__14004.cljs$lang$applyTo;
return G__13998;
})()
});
var juxt__13966 = (function() { 
var G__14030__delegate = function (f,g,h,fs){
var fs__13960 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14037 = null;
var G__14037__14039 = (function (){
return cljs.core.reduce.call(null,(function (p1__13885_SHARP_,p2__13886_SHARP_){
return cljs.core.conj.call(null,p1__13885_SHARP_,p2__13886_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13960);
});
var G__14037__14040 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13887_SHARP_,p2__13888_SHARP_){
return cljs.core.conj.call(null,p1__13887_SHARP_,p2__13888_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13960);
});
var G__14037__14041 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13889_SHARP_,p2__13890_SHARP_){
return cljs.core.conj.call(null,p1__13889_SHARP_,p2__13890_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13960);
});
var G__14037__14042 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13891_SHARP_,p2__13892_SHARP_){
return cljs.core.conj.call(null,p1__13891_SHARP_,p2__13892_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13960);
});
var G__14037__14043 = (function() { 
var G__14055__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13893_SHARP_,p2__13894_SHARP_){
return cljs.core.conj.call(null,p1__13893_SHARP_,cljs.core.apply.call(null,p2__13894_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13960);
};
var G__14055 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14055__delegate.call(this, x, y, z, args);
};
G__14055.cljs$lang$maxFixedArity = 3;
G__14055.cljs$lang$applyTo = (function (arglist__14059){
var x = cljs.core.first(arglist__14059);
var y = cljs.core.first(cljs.core.next(arglist__14059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14059)));
return G__14055__delegate.call(this, x, y, z, args);
});
return G__14055;
})()
;
G__14037 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14037__14039.call(this);
case  1 :
return G__14037__14040.call(this,x);
case  2 :
return G__14037__14041.call(this,x,y);
case  3 :
return G__14037__14042.call(this,x,y,z);
default:
return G__14037__14043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14037.cljs$lang$maxFixedArity = 3;
G__14037.cljs$lang$applyTo = G__14037__14043.cljs$lang$applyTo;
return G__14037;
})()
};
var G__14030 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14030__delegate.call(this, f, g, h, fs);
};
G__14030.cljs$lang$maxFixedArity = 3;
G__14030.cljs$lang$applyTo = (function (arglist__14065){
var f = cljs.core.first(arglist__14065);
var g = cljs.core.first(cljs.core.next(arglist__14065));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14065)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14065)));
return G__14030__delegate.call(this, f, g, h, fs);
});
return G__14030;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13963.call(this,f);
case  2 :
return juxt__13964.call(this,f,g);
case  3 :
return juxt__13965.call(this,f,g,h);
default:
return juxt__13966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13966.cljs$lang$applyTo;
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
var dorun__14104 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14108 = cljs.core.next.call(null,coll);
coll = G__14108;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14106 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14093 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14093))
{return (n > 0);
} else
{return and__3546__auto____14093;
}
})()))
{{
var G__14113 = (n - 1);
var G__14114 = cljs.core.next.call(null,coll);
n = G__14113;
coll = G__14114;
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
return dorun__14104.call(this,n);
case  2 :
return dorun__14106.call(this,n,coll);
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
var doall__14216 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14217 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14216.call(this,n);
case  2 :
return doall__14217.call(this,n,coll);
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
var matches__14219 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14219),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14219),1)))
{return cljs.core.first.call(null,matches__14219);
} else
{return cljs.core.vec.call(null,matches__14219);
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
var matches__14220 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14220)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14220),1)))
{return cljs.core.first.call(null,matches__14220);
} else
{return cljs.core.vec.call(null,matches__14220);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14222 = cljs.core.re_find.call(null,re,s);
var match_idx__14223 = s.search(re);
var match_str__14224 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14222))?cljs.core.first.call(null,match_data__14222):match_data__14222);
var post_match__14229 = cljs.core.subs.call(null,s,(match_idx__14223 + cljs.core.count.call(null,match_str__14224)));

if(cljs.core.truth_(match_data__14222))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14222,re_seq.call(null,re,post_match__14229));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14234_SHARP_){
return print_one.call(null,p1__14234_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14241 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14241))
{var and__3546__auto____14251 = (function (){var x__445__auto____14245 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14246 = x__445__auto____14245;

if(cljs.core.truth_(and__3546__auto____14246))
{var and__3546__auto____14247 = x__445__auto____14245.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14247))
{return cljs.core.not.call(null,x__445__auto____14245.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14247;
}
} else
{return and__3546__auto____14246;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14245);
}
})();

if(cljs.core.truth_(and__3546__auto____14251))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14251;
}
} else
{return and__3546__auto____14241;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14258 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14260 = x__445__auto____14258;

if(cljs.core.truth_(and__3546__auto____14260))
{var and__3546__auto____14261 = x__445__auto____14258.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14261))
{return cljs.core.not.call(null,x__445__auto____14258.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14261;
}
} else
{return and__3546__auto____14260;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14258);
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
var first_obj__14326 = cljs.core.first.call(null,objs);
var sb__14328 = (new goog.string.StringBuffer());

var G__14329__14330 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14329__14330))
{var obj__14331 = cljs.core.first.call(null,G__14329__14330);
var G__14329__14333 = G__14329__14330;

while(true){
if(cljs.core.truth_((obj__14331 === first_obj__14326)))
{} else
{sb__14328.append(" ");
}
var G__14378__14381 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14331,opts));

if(cljs.core.truth_(G__14378__14381))
{var string__14383 = cljs.core.first.call(null,G__14378__14381);
var G__14378__14384 = G__14378__14381;

while(true){
sb__14328.append(string__14383);
var temp__3698__auto____14387 = cljs.core.next.call(null,G__14378__14384);

if(cljs.core.truth_(temp__3698__auto____14387))
{var G__14378__14389 = temp__3698__auto____14387;

{
var G__14405 = cljs.core.first.call(null,G__14378__14389);
var G__14406 = G__14378__14389;
string__14383 = G__14405;
G__14378__14384 = G__14406;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14397 = cljs.core.next.call(null,G__14329__14333);

if(cljs.core.truth_(temp__3698__auto____14397))
{var G__14329__14398 = temp__3698__auto____14397;

{
var G__14407 = cljs.core.first.call(null,G__14329__14398);
var G__14408 = G__14329__14398;
obj__14331 = G__14407;
G__14329__14333 = G__14408;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14328);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14410 = cljs.core.first.call(null,objs);

var G__14411__14412 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14411__14412))
{var obj__14413 = cljs.core.first.call(null,G__14411__14412);
var G__14411__14414 = G__14411__14412;

while(true){
if(cljs.core.truth_((obj__14413 === first_obj__14410)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14415__14417 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14413,opts));

if(cljs.core.truth_(G__14415__14417))
{var string__14418 = cljs.core.first.call(null,G__14415__14417);
var G__14415__14419 = G__14415__14417;

while(true){
cljs.core.string_print.call(null,string__14418);
var temp__3698__auto____14420 = cljs.core.next.call(null,G__14415__14419);

if(cljs.core.truth_(temp__3698__auto____14420))
{var G__14415__14421 = temp__3698__auto____14420;

{
var G__14435 = cljs.core.first.call(null,G__14415__14421);
var G__14436 = G__14415__14421;
string__14418 = G__14435;
G__14415__14419 = G__14436;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14422 = cljs.core.next.call(null,G__14411__14414);

if(cljs.core.truth_(temp__3698__auto____14422))
{var G__14411__14423 = temp__3698__auto____14422;

{
var G__14437 = cljs.core.first.call(null,G__14411__14423);
var G__14438 = G__14411__14423;
obj__14413 = G__14437;
G__14411__14414 = G__14438;
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
pr_str.cljs$lang$applyTo = (function (arglist__14489){
var objs = cljs.core.seq( arglist__14489 );;
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
pr.cljs$lang$applyTo = (function (arglist__14492){
var objs = cljs.core.seq( arglist__14492 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14499){
var objs = cljs.core.seq( arglist__14499 );;
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
println.cljs$lang$applyTo = (function (arglist__14504){
var objs = cljs.core.seq( arglist__14504 );;
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
prn.cljs$lang$applyTo = (function (arglist__14519){
var objs = cljs.core.seq( arglist__14519 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14540 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14540,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14593 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14593))
{var nspc__14595 = temp__3698__auto____14593;

return cljs.core.str.call(null,nspc__14595,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14598 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14598))
{var nspc__14600 = temp__3698__auto____14598;

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
var this__14661 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14670 = this;
var G__14671__14672 = cljs.core.seq.call(null,this__14670.watches);

if(cljs.core.truth_(G__14671__14672))
{var G__14674__14676 = cljs.core.first.call(null,G__14671__14672);
var vec__14675__14677 = G__14674__14676;
var key__14678 = cljs.core.nth.call(null,vec__14675__14677,0,null);
var f__14679 = cljs.core.nth.call(null,vec__14675__14677,1,null);
var G__14671__14680 = G__14671__14672;

var G__14674__14681 = G__14674__14676;
var G__14671__14682 = G__14671__14680;

while(true){
var vec__14683__14684 = G__14674__14681;
var key__14685 = cljs.core.nth.call(null,vec__14683__14684,0,null);
var f__14686 = cljs.core.nth.call(null,vec__14683__14684,1,null);
var G__14671__14687 = G__14671__14682;

f__14686.call(null,key__14685,this$,oldval,newval);
var temp__3698__auto____14716 = cljs.core.next.call(null,G__14671__14687);

if(cljs.core.truth_(temp__3698__auto____14716))
{var G__14671__14719 = temp__3698__auto____14716;

{
var G__14729 = cljs.core.first.call(null,G__14671__14719);
var G__14730 = G__14671__14719;
G__14674__14681 = G__14729;
G__14671__14682 = G__14730;
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
var this__14720 = this;
return this$.watches = cljs.core.assoc.call(null,this__14720.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14722 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14722.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14723 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14723.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14725 = this;
return this__14725.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14726 = this;
return this__14726.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14727 = this;
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
var G__14744__delegate = function (x,p__14732){
var map__14733__14734 = p__14732;
var map__14733__14735 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14733__14734))?cljs.core.apply.call(null,cljs.core.hash_map,map__14733__14734):map__14733__14734);
var validator__14736 = cljs.core.get.call(null,map__14733__14735,"﷐'validator");
var meta__14737 = cljs.core.get.call(null,map__14733__14735,"﷐'meta");

return (new cljs.core.Atom(x,meta__14737,validator__14736,null));
};
var G__14744 = function (x,var_args){
var p__14732 = null;
if (goog.isDef(var_args)) {
  p__14732 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14744__delegate.call(this, x, p__14732);
};
G__14744.cljs$lang$maxFixedArity = 1;
G__14744.cljs$lang$applyTo = (function (arglist__14747){
var x = cljs.core.first(arglist__14747);
var p__14732 = cljs.core.rest(arglist__14747);
return G__14744__delegate.call(this, x, p__14732);
});
return G__14744;
})()
;
atom = function(x,var_args){
var p__14732 = var_args;
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
var temp__3698__auto____14748 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14748))
{var validate__14749 = temp__3698__auto____14748;

if(cljs.core.truth_(validate__14749.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14751 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14751,new_value);
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
var swap_BANG___14754 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14755 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14756 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14757 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14758 = (function() { 
var G__14760__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14760 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14760__delegate.call(this, a, f, x, y, z, more);
};
G__14760.cljs$lang$maxFixedArity = 5;
G__14760.cljs$lang$applyTo = (function (arglist__14782){
var a = cljs.core.first(arglist__14782);
var f = cljs.core.first(cljs.core.next(arglist__14782));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14782)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14782))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14782)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14782)))));
return G__14760__delegate.call(this, a, f, x, y, z, more);
});
return G__14760;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14754.call(this,a,f);
case  3 :
return swap_BANG___14755.call(this,a,f,x);
case  4 :
return swap_BANG___14756.call(this,a,f,x,y);
case  5 :
return swap_BANG___14757.call(this,a,f,x,y,z);
default:
return swap_BANG___14758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14758.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14811){
var iref = cljs.core.first(arglist__14811);
var f = cljs.core.first(cljs.core.next(arglist__14811));
var args = cljs.core.rest(cljs.core.next(arglist__14811));
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
var gensym__14838 = (function (){
return gensym.call(null,"G__");
});
var gensym__14839 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14838.call(this);
case  1 :
return gensym__14839.call(this,prefix_string);
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
var this__14864 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14864.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14865 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14865.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14865.state,this__14865.f);
}
return cljs.core.deref.call(null,this__14865.state);
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
delay.cljs$lang$applyTo = (function (arglist__14874){
var body = cljs.core.seq( arglist__14874 );;
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
var map__14892__14894 = options;
var map__14892__14898 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14892__14894))?cljs.core.apply.call(null,cljs.core.hash_map,map__14892__14894):map__14892__14894);
var keywordize_keys__14899 = cljs.core.get.call(null,map__14892__14898,"﷐'keywordize-keys");
var keyfn__14900 = (cljs.core.truth_(keywordize_keys__14899)?cljs.core.keyword:cljs.core.str);
var f__14917 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14913 = (function iter__14905(s__14907){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14907__14911 = s__14907;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14907__14911)))
{var k__14912 = cljs.core.first.call(null,s__14907__14911);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14900.call(null,k__14912),thisfn.call(null,(x[k__14912]))]),iter__14905.call(null,cljs.core.rest.call(null,s__14907__14911)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14913.call(null,cljs.core.js_keys.call(null,x));
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

return f__14917.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14960){
var x = cljs.core.first(arglist__14960);
var options = cljs.core.rest(arglist__14960);
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
var mem__14964 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14973__delegate = function (args){
var temp__3695__auto____14965 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14964),args);

if(cljs.core.truth_(temp__3695__auto____14965))
{var v__14967 = temp__3695__auto____14965;

return v__14967;
} else
{var ret__14968 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14964,cljs.core.assoc,args,ret__14968);
return ret__14968;
}
};
var G__14973 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14973__delegate.call(this, args);
};
G__14973.cljs$lang$maxFixedArity = 0;
G__14973.cljs$lang$applyTo = (function (arglist__14976){
var args = cljs.core.seq( arglist__14976 );;
return G__14973__delegate.call(this, args);
});
return G__14973;
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
var trampoline__14984 = (function (f){
while(true){
var ret__14977 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14977)))
{{
var G__14987 = ret__14977;
f = G__14987;
continue;
}
} else
{return ret__14977;
}
break;
}
});
var trampoline__14985 = (function() { 
var G__14988__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14988 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14988__delegate.call(this, f, args);
};
G__14988.cljs$lang$maxFixedArity = 1;
G__14988.cljs$lang$applyTo = (function (arglist__14989){
var f = cljs.core.first(arglist__14989);
var args = cljs.core.rest(arglist__14989);
return G__14988__delegate.call(this, f, args);
});
return G__14988;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14984.call(this,f);
default:
return trampoline__14985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14985.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14990 = (function (){
return rand.call(null,1);
});
var rand__14991 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14990.call(this);
case  1 :
return rand__14991.call(this,n);
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
var k__14996 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14996,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14996,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15023 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15024 = (function (h,child,parent){
var or__3548__auto____15011 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15011))
{return or__3548__auto____15011;
} else
{var or__3548__auto____15013 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15013))
{return or__3548__auto____15013;
} else
{var and__3546__auto____15014 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15014))
{var and__3546__auto____15016 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15016))
{var and__3546__auto____15018 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15018))
{var ret__15019 = true;
var i__15020 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15021 = cljs.core.not.call(null,ret__15019);

if(cljs.core.truth_(or__3548__auto____15021))
{return or__3548__auto____15021;
} else
{return cljs.core._EQ_.call(null,i__15020,cljs.core.count.call(null,parent));
}
})()))
{return ret__15019;
} else
{{
var G__15032 = isa_QMARK_.call(null,h,child.call(null,i__15020),parent.call(null,i__15020));
var G__15033 = (i__15020 + 1);
ret__15019 = G__15032;
i__15020 = G__15033;
continue;
}
}
break;
}
} else
{return and__3546__auto____15018;
}
} else
{return and__3546__auto____15016;
}
} else
{return and__3546__auto____15014;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15023.call(this,h,child);
case  3 :
return isa_QMARK___15024.call(this,h,child,parent);
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
var parents__15043 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15044 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15043.call(this,h);
case  2 :
return parents__15044.call(this,h,tag);
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
var ancestors__15062 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15063 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15062.call(this,h);
case  2 :
return ancestors__15063.call(this,h,tag);
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
var descendants__15134 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15135 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15134.call(this,h);
case  2 :
return descendants__15135.call(this,h,tag);
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
var derive__15155 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15156 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15145 = "﷐'parents".call(null,h);
var td__15146 = "﷐'descendants".call(null,h);
var ta__15147 = "﷐'ancestors".call(null,h);
var tf__15151 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15154 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15145.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15147.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15147.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15145,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15151.call(null,"﷐'ancestors".call(null,h),tag,td__15146,parent,ta__15147),"﷐'descendants":tf__15151.call(null,"﷐'descendants".call(null,h),parent,ta__15147,tag,td__15146)});
})());

if(cljs.core.truth_(or__3548__auto____15154))
{return or__3548__auto____15154;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15155.call(this,h,tag);
case  3 :
return derive__15156.call(this,h,tag,parent);
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
var underive__15171 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15172 = (function (h,tag,parent){
var parentMap__15164 = "﷐'parents".call(null,h);
var childsParents__15165 = (cljs.core.truth_(parentMap__15164.call(null,tag))?cljs.core.disj.call(null,parentMap__15164.call(null,tag),parent):cljs.core.set([]));
var newParents__15166 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15165))?cljs.core.assoc.call(null,parentMap__15164,tag,childsParents__15165):cljs.core.dissoc.call(null,parentMap__15164,tag));
var deriv_seq__15167 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15138_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15138_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15138_SHARP_),cljs.core.second.call(null,p1__15138_SHARP_)));
}),cljs.core.seq.call(null,newParents__15166)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15164.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15139_SHARP_,p2__15141_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15139_SHARP_,p2__15141_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15167));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15171.call(this,h,tag);
case  3 :
return underive__15172.call(this,h,tag,parent);
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
var xprefs__15198 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15200 = (cljs.core.truth_((function (){var and__3546__auto____15199 = xprefs__15198;

if(cljs.core.truth_(and__3546__auto____15199))
{return xprefs__15198.call(null,y);
} else
{return and__3546__auto____15199;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15200))
{return or__3548__auto____15200;
} else
{var or__3548__auto____15202 = (function (){var ps__15201 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15201) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15201),prefer_table)))
{} else
{}
{
var G__15205 = cljs.core.rest.call(null,ps__15201);
ps__15201 = G__15205;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15202))
{return or__3548__auto____15202;
} else
{var or__3548__auto____15204 = (function (){var ps__15203 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15203) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15203),y,prefer_table)))
{} else
{}
{
var G__15206 = cljs.core.rest.call(null,ps__15203);
ps__15203 = G__15206;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15204))
{return or__3548__auto____15204;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15211 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15228 = cljs.core.reduce.call(null,(function (be,p__15215){
var vec__15216__15218 = p__15215;
var k__15220 = cljs.core.nth.call(null,vec__15216__15218,0,null);
var ___15221 = cljs.core.nth.call(null,vec__15216__15218,1,null);
var e__15222 = vec__15216__15218;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15220)))
{var be2__15225 = (cljs.core.truth_((function (){var or__3548__auto____15224 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{return cljs.core.dominates.call(null,k__15220,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15222:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15225),k__15220,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15220," and ",cljs.core.first.call(null,be2__15225),", and neither is preferred")));
}
return be2__15225;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15228))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15228));
return cljs.core.second.call(null,best_entry__15228);
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
if(cljs.core.truth_((function (){var and__3546__auto____15233 = mf;

if(cljs.core.truth_(and__3546__auto____15233))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15233;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15234 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15234))
{return or__3548__auto____15234;
} else
{var or__3548__auto____15235 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15235))
{return or__3548__auto____15235;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15242 = mf;

if(cljs.core.truth_(and__3546__auto____15242))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15242;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15245 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15245))
{return or__3548__auto____15245;
} else
{var or__3548__auto____15246 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15246))
{return or__3548__auto____15246;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15248 = mf;

if(cljs.core.truth_(and__3546__auto____15248))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15248;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15249 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15249))
{return or__3548__auto____15249;
} else
{var or__3548__auto____15250 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15252 = mf;

if(cljs.core.truth_(and__3546__auto____15252))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15252;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15254 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15254))
{return or__3548__auto____15254;
} else
{var or__3548__auto____15256 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15256))
{return or__3548__auto____15256;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15258 = mf;

if(cljs.core.truth_(and__3546__auto____15258))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15258;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15260 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15260))
{return or__3548__auto____15260;
} else
{var or__3548__auto____15262 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15262))
{return or__3548__auto____15262;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15264 = mf;

if(cljs.core.truth_(and__3546__auto____15264))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15264;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15278 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15278))
{return or__3548__auto____15278;
} else
{var or__3548__auto____15279 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15279))
{return or__3548__auto____15279;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15281 = mf;

if(cljs.core.truth_(and__3546__auto____15281))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15281;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15287 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15287))
{return or__3548__auto____15287;
} else
{var or__3548__auto____15288 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15288))
{return or__3548__auto____15288;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15290 = mf;

if(cljs.core.truth_(and__3546__auto____15290))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15290;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15292 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15292))
{return or__3548__auto____15292;
} else
{var or__3548__auto____15294 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15294))
{return or__3548__auto____15294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15321 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15322 = cljs.core._get_method.call(null,mf,dispatch_val__15321);

if(cljs.core.truth_(target_fn__15322))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15321)));
}
return cljs.core.apply.call(null,target_fn__15322,args);
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
var this__15327 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15329 = this;
cljs.core.swap_BANG_.call(null,this__15329.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15329.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15329.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15329.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15331 = this;
cljs.core.swap_BANG_.call(null,this__15331.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15331.method_cache,this__15331.method_table,this__15331.cached_hierarchy,this__15331.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15335 = this;
cljs.core.swap_BANG_.call(null,this__15335.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15335.method_cache,this__15335.method_table,this__15335.cached_hierarchy,this__15335.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15336 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15336.cached_hierarchy),cljs.core.deref.call(null,this__15336.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15336.method_cache,this__15336.method_table,this__15336.cached_hierarchy,this__15336.hierarchy);
}
var temp__3695__auto____15367 = cljs.core.deref.call(null,this__15336.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15367))
{var target_fn__15369 = temp__3695__auto____15367;

return target_fn__15369;
} else
{var temp__3695__auto____15371 = cljs.core.find_and_cache_best_method.call(null,this__15336.name,dispatch_val,this__15336.hierarchy,this__15336.method_table,this__15336.prefer_table,this__15336.method_cache,this__15336.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15371))
{var target_fn__15373 = temp__3695__auto____15371;

return target_fn__15373;
} else
{return cljs.core.deref.call(null,this__15336.method_table).call(null,this__15336.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15376 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15376.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15376.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15376.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15376.method_cache,this__15376.method_table,this__15376.cached_hierarchy,this__15376.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15378 = this;
return cljs.core.deref.call(null,this__15378.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15382 = this;
return cljs.core.deref.call(null,this__15382.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15383 = this;
return cljs.core.do_dispatch.call(null,mf,this__15383.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15401__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15401 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15401__delegate.call(this, _, args);
};
G__15401.cljs$lang$maxFixedArity = 1;
G__15401.cljs$lang$applyTo = (function (arglist__15402){
var _ = cljs.core.first(arglist__15402);
var args = cljs.core.rest(arglist__15402);
return G__15401__delegate.call(this, _, args);
});
return G__15401;
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
