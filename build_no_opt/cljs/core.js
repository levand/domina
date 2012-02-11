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
var or__3548__auto____7214 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7214))
{return or__3548__auto____7214;
} else
{var or__3548__auto____7216 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
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
if(cljs.core.truth_((function (){var and__3546__auto____7220 = this$;

if(cljs.core.truth_(and__3546__auto____7220))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7220;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7226 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7226))
{return or__3548__auto____7226;
} else
{var or__3548__auto____7228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7228))
{return or__3548__auto____7228;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7621 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7278 = this$;

if(cljs.core.truth_(and__3546__auto____7278))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7278;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{var or__3548__auto____7283 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7283))
{return or__3548__auto____7283;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7622 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7286 = this$;

if(cljs.core.truth_(and__3546__auto____7286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7623 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = this$;

if(cljs.core.truth_(and__3546__auto____7293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{var or__3548__auto____7298 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7624 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7304 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{var or__3548__auto____7307 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7309 = this$;

if(cljs.core.truth_(and__3546__auto____7309))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7309;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7314 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{var or__3548__auto____7318 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7331 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
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
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7514 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{var or__3548__auto____7516 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7519 = this$;

if(cljs.core.truth_(and__3546__auto____7519))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7519;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7523 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7523))
{return or__3548__auto____7523;
} else
{var or__3548__auto____7525 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7527 = this$;

if(cljs.core.truth_(and__3546__auto____7527))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7527;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7532 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{var or__3548__auto____7545 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7555 = this$;

if(cljs.core.truth_(and__3546__auto____7555))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7555;
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
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7560 = this$;

if(cljs.core.truth_(and__3546__auto____7560))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7560;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7563 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7563))
{return or__3548__auto____7563;
} else
{var or__3548__auto____7564 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7564))
{return or__3548__auto____7564;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7566 = this$;

if(cljs.core.truth_(and__3546__auto____7566))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7566;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7569 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{var or__3548__auto____7570 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7572 = this$;

if(cljs.core.truth_(and__3546__auto____7572))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7572;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7578 = this$;

if(cljs.core.truth_(and__3546__auto____7578))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7578;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7583 = this$;

if(cljs.core.truth_(and__3546__auto____7583))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7583;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7602 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
} else
{var or__3548__auto____7607 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7608 = this$;

if(cljs.core.truth_(and__3546__auto____7608))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7608;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7614 = this$;

if(cljs.core.truth_(and__3546__auto____7614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
if(cljs.core.truth_((function (){var and__3546__auto____7655 = coll;

if(cljs.core.truth_(and__3546__auto____7655))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7655;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7657 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{var or__3548__auto____7659 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7659))
{return or__3548__auto____7659;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7669 = coll;

if(cljs.core.truth_(and__3546__auto____7669))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7669;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7670 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7670))
{return or__3548__auto____7670;
} else
{var or__3548__auto____7671 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7702;
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
var _nth__7723 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = coll;

if(cljs.core.truth_(and__3546__auto____7708))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7708;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7710 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7710))
{return or__3548__auto____7710;
} else
{var or__3548__auto____7711 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7725 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7715 = coll;

if(cljs.core.truth_(and__3546__auto____7715))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7715;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7720 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
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
return _nth__7723.call(this,coll,n);
case  3 :
return _nth__7725.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = coll;

if(cljs.core.truth_(and__3546__auto____7745))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7745;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7747 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
} else
{var or__3548__auto____7749 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = coll;

if(cljs.core.truth_(and__3546__auto____7751))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7751;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
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
var _lookup__7817 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = o;

if(cljs.core.truth_(and__3546__auto____7802))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7802;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7818 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = o;

if(cljs.core.truth_(and__3546__auto____7810))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7810;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7814 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{var or__3548__auto____7816 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
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
return _lookup__7817.call(this,o,k);
case  3 :
return _lookup__7818.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = coll;

if(cljs.core.truth_(and__3546__auto____7828))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7828;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7832 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7837 = coll;

if(cljs.core.truth_(and__3546__auto____7837))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7837;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{var or__3548__auto____7843 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7855 = coll;

if(cljs.core.truth_(and__3546__auto____7855))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7855;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7856 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{var or__3548__auto____7857 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7895 = coll;

if(cljs.core.truth_(and__3546__auto____7895))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7895;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7899 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7901 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7910 = coll;

if(cljs.core.truth_(and__3546__auto____7910))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7910;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7914 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7915 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7918 = coll;

if(cljs.core.truth_(and__3546__auto____7918))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7918;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7925 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{var or__3548__auto____7941 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
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
{return (function (){var or__3548__auto____7952 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7954 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7962 = o;

if(cljs.core.truth_(and__3546__auto____7962))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7962;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7967 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{var or__3548__auto____7969 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7975 = o;

if(cljs.core.truth_(and__3546__auto____7975))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7975;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7980 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{var or__3548__auto____7981 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = o;

if(cljs.core.truth_(and__3546__auto____7988))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7988;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7992 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7995 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7997 = o;

if(cljs.core.truth_(and__3546__auto____7997))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7997;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8005 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
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
var _reduce__8023 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8009 = coll;

if(cljs.core.truth_(and__3546__auto____8009))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8009;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8012 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{var or__3548__auto____8015 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8024 = (function (coll,f,start){
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
return _reduce__8023.call(this,coll,f);
case  3 :
return _reduce__8024.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8036 = o;

if(cljs.core.truth_(and__3546__auto____8036))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8036;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
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
if(cljs.core.truth_((function (){var and__3546__auto____8047 = o;

if(cljs.core.truth_(and__3546__auto____8047))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8047;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8048 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8050 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = o;

if(cljs.core.truth_(and__3546__auto____8055))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8055;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8057 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{var or__3548__auto____8061 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
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
if(cljs.core.truth_((function (){var and__3546__auto____8062 = o;

if(cljs.core.truth_(and__3546__auto____8062))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8062;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8067 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8068 = d;

if(cljs.core.truth_(and__3546__auto____8068))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8068;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8070 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8071 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8075 = this$;

if(cljs.core.truth_(and__3546__auto____8075))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8075;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
} else
{var or__3548__auto____8112 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
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
{var or__3548__auto____8121 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
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
var G__8152 = null;
var G__8152__8153 = (function (o,k){
return null;
});
var G__8152__8154 = (function (o,k,not_found){
return not_found;
});
G__8152 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8152__8153.call(this,o,k);
case  3 :
return G__8152__8154.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8152;
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
var G__8156 = null;
var G__8156__8157 = (function (_,f){
return f.call(null);
});
var G__8156__8158 = (function (_,f,start){
return start;
});
G__8156 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8156__8157.call(this,_,f);
case  3 :
return G__8156__8158.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8156;
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
var G__8160 = null;
var G__8160__8161 = (function (_,n){
return null;
});
var G__8160__8162 = (function (_,n,not_found){
return not_found;
});
G__8160 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8160__8161.call(this,_,n);
case  3 :
return G__8160__8162.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8160;
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
var ci_reduce__8327 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8313 = cljs.core._nth.call(null,cicoll,0);
var n__8314 = 1;

while(true){
if(cljs.core.truth_((n__8314 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8313,cljs.core._nth.call(null,cicoll,n__8314));
var G__8332 = (n__8314 + 1);
val__8313 = G__8331;
n__8314 = G__8332;
continue;
}
} else
{return val__8313;
}
break;
}
}
});
var ci_reduce__8328 = (function (cicoll,f,val){
var val__8317 = val;
var n__8318 = 0;

while(true){
if(cljs.core.truth_((n__8318 < cljs.core._count.call(null,cicoll))))
{{
var G__8333 = f.call(null,val__8317,cljs.core._nth.call(null,cicoll,n__8318));
var G__8334 = (n__8318 + 1);
val__8317 = G__8333;
n__8318 = G__8334;
continue;
}
} else
{return val__8317;
}
break;
}
});
var ci_reduce__8329 = (function (cicoll,f,val,idx){
var val__8325 = val;
var n__8326 = idx;

while(true){
if(cljs.core.truth_((n__8326 < cljs.core._count.call(null,cicoll))))
{{
var G__8336 = f.call(null,val__8325,cljs.core._nth.call(null,cicoll,n__8326));
var G__8337 = (n__8326 + 1);
val__8325 = G__8336;
n__8326 = G__8337;
continue;
}
} else
{return val__8325;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8327.call(this,cicoll,f);
case  3 :
return ci_reduce__8328.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8329.call(this,cicoll,f,val,idx);
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
var this__8344 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8371 = null;
var G__8371__8372 = (function (_,f){
var this__8346 = this;
return cljs.core.ci_reduce.call(null,this__8346.a,f,(this__8346.a[this__8346.i]),(this__8346.i + 1));
});
var G__8371__8373 = (function (_,f,start){
var this__8348 = this;
return cljs.core.ci_reduce.call(null,this__8348.a,f,start,this__8348.i);
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
var this__8350 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8352 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8376 = null;
var G__8376__8377 = (function (coll,n){
var this__8354 = this;
var i__8355 = (n + this__8354.i);

if(cljs.core.truth_((i__8355 < this__8354.a.length)))
{return (this__8354.a[i__8355]);
} else
{return null;
}
});
var G__8376__8378 = (function (coll,n,not_found){
var this__8357 = this;
var i__8358 = (n + this__8357.i);

if(cljs.core.truth_((i__8358 < this__8357.a.length)))
{return (this__8357.a[i__8358]);
} else
{return not_found;
}
});
G__8376 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8376__8377.call(this,coll,n);
case  3 :
return G__8376__8378.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8376;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8359 = this;
return (this__8359.a.length - this__8359.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8364 = this;
return (this__8364.a[this__8364.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8365 = this;
if(cljs.core.truth_(((this__8365.i + 1) < this__8365.a.length)))
{return (new cljs.core.IndexedSeq(this__8365.a,(this__8365.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8366 = this;
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
var G__8399 = null;
var G__8399__8400 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8399__8401 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8399 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8399__8400.call(this,array,f);
case  3 :
return G__8399__8401.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8399;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8403 = null;
var G__8403__8404 = (function (array,k){
return (array[k]);
});
var G__8403__8405 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8403 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8403__8404.call(this,array,k);
case  3 :
return G__8403__8405.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8403;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8407 = null;
var G__8407__8408 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8407__8409 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8407 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8407__8408.call(this,array,n);
case  3 :
return G__8407__8409.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8407;
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
var temp__3698__auto____8415 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8415))
{var s__8416 = temp__3698__auto____8415;

return cljs.core._first.call(null,s__8416);
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
var G__8517 = cljs.core.next.call(null,s);
s = G__8517;
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
var s__8528 = cljs.core.seq.call(null,x);
var n__8529 = 0;

while(true){
if(cljs.core.truth_(s__8528))
{{
var G__8531 = cljs.core.next.call(null,s__8528);
var G__8532 = (n__8529 + 1);
s__8528 = G__8531;
n__8529 = G__8532;
continue;
}
} else
{return n__8529;
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
var conj__8545 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8546 = (function() { 
var G__8552__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8554 = conj.call(null,coll,x);
var G__8555 = cljs.core.first.call(null,xs);
var G__8556 = cljs.core.next.call(null,xs);
coll = G__8554;
x = G__8555;
xs = G__8556;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8552 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8552__delegate.call(this, coll, x, xs);
};
G__8552.cljs$lang$maxFixedArity = 2;
G__8552.cljs$lang$applyTo = (function (arglist__8557){
var coll = cljs.core.first(arglist__8557);
var x = cljs.core.first(cljs.core.next(arglist__8557));
var xs = cljs.core.rest(cljs.core.next(arglist__8557));
return G__8552__delegate.call(this, coll, x, xs);
});
return G__8552;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8545.call(this,coll,x);
default:
return conj__8546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8546.cljs$lang$applyTo;
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
var nth__8571 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8574 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8571.call(this,coll,n);
case  3 :
return nth__8574.call(this,coll,n,not_found);
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
var get__8614 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8615 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8614.call(this,o,k);
case  3 :
return get__8615.call(this,o,k,not_found);
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
var assoc__8629 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8630 = (function() { 
var G__8632__delegate = function (coll,k,v,kvs){
while(true){
var ret__8626 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8633 = ret__8626;
var G__8634 = cljs.core.first.call(null,kvs);
var G__8635 = cljs.core.second.call(null,kvs);
var G__8636 = cljs.core.nnext.call(null,kvs);
coll = G__8633;
k = G__8634;
v = G__8635;
kvs = G__8636;
continue;
}
} else
{return ret__8626;
}
break;
}
};
var G__8632 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8632__delegate.call(this, coll, k, v, kvs);
};
G__8632.cljs$lang$maxFixedArity = 3;
G__8632.cljs$lang$applyTo = (function (arglist__8639){
var coll = cljs.core.first(arglist__8639);
var k = cljs.core.first(cljs.core.next(arglist__8639));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8639)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8639)));
return G__8632__delegate.call(this, coll, k, v, kvs);
});
return G__8632;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8629.call(this,coll,k,v);
default:
return assoc__8630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8630.cljs$lang$applyTo;
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
var dissoc__8655 = (function (coll){
return coll;
});
var dissoc__8656 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8657 = (function() { 
var G__8660__delegate = function (coll,k,ks){
while(true){
var ret__8641 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8661 = ret__8641;
var G__8662 = cljs.core.first.call(null,ks);
var G__8663 = cljs.core.next.call(null,ks);
coll = G__8661;
k = G__8662;
ks = G__8663;
continue;
}
} else
{return ret__8641;
}
break;
}
};
var G__8660 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8660__delegate.call(this, coll, k, ks);
};
G__8660.cljs$lang$maxFixedArity = 2;
G__8660.cljs$lang$applyTo = (function (arglist__8664){
var coll = cljs.core.first(arglist__8664);
var k = cljs.core.first(cljs.core.next(arglist__8664));
var ks = cljs.core.rest(cljs.core.next(arglist__8664));
return G__8660__delegate.call(this, coll, k, ks);
});
return G__8660;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8655.call(this,coll);
case  2 :
return dissoc__8656.call(this,coll,k);
default:
return dissoc__8657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8657.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8674 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8676 = x__445__auto____8674;

if(cljs.core.truth_(and__3546__auto____8676))
{var and__3546__auto____8679 = x__445__auto____8674.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8679))
{return cljs.core.not.call(null,x__445__auto____8674.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8679;
}
} else
{return and__3546__auto____8676;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8674);
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
var disj__8697 = (function (coll){
return coll;
});
var disj__8698 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8699 = (function() { 
var G__8704__delegate = function (coll,k,ks){
while(true){
var ret__8692 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8706 = ret__8692;
var G__8707 = cljs.core.first.call(null,ks);
var G__8708 = cljs.core.next.call(null,ks);
coll = G__8706;
k = G__8707;
ks = G__8708;
continue;
}
} else
{return ret__8692;
}
break;
}
};
var G__8704 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8704__delegate.call(this, coll, k, ks);
};
G__8704.cljs$lang$maxFixedArity = 2;
G__8704.cljs$lang$applyTo = (function (arglist__8710){
var coll = cljs.core.first(arglist__8710);
var k = cljs.core.first(cljs.core.next(arglist__8710));
var ks = cljs.core.rest(cljs.core.next(arglist__8710));
return G__8704__delegate.call(this, coll, k, ks);
});
return G__8704;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8697.call(this,coll);
case  2 :
return disj__8698.call(this,coll,k);
default:
return disj__8699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8699.cljs$lang$applyTo;
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
{var x__445__auto____8720 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8721 = x__445__auto____8720;

if(cljs.core.truth_(and__3546__auto____8721))
{var and__3546__auto____8724 = x__445__auto____8720.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8724))
{return cljs.core.not.call(null,x__445__auto____8720.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8724;
}
} else
{return and__3546__auto____8721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8720);
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
{var x__445__auto____8806 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8807 = x__445__auto____8806;

if(cljs.core.truth_(and__3546__auto____8807))
{var and__3546__auto____8809 = x__445__auto____8806.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8809))
{return cljs.core.not.call(null,x__445__auto____8806.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8809;
}
} else
{return and__3546__auto____8807;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8806);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8819 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8820 = x__445__auto____8819;

if(cljs.core.truth_(and__3546__auto____8820))
{var and__3546__auto____8821 = x__445__auto____8819.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8821))
{return cljs.core.not.call(null,x__445__auto____8819.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8821;
}
} else
{return and__3546__auto____8820;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8819);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8830 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8831 = x__445__auto____8830;

if(cljs.core.truth_(and__3546__auto____8831))
{var and__3546__auto____8832 = x__445__auto____8830.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8832))
{return cljs.core.not.call(null,x__445__auto____8830.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8832;
}
} else
{return and__3546__auto____8831;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8830);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8837 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8838 = x__445__auto____8837;

if(cljs.core.truth_(and__3546__auto____8838))
{var and__3546__auto____8839 = x__445__auto____8837.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8839))
{return cljs.core.not.call(null,x__445__auto____8837.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8839;
}
} else
{return and__3546__auto____8838;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8837);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8842 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8843 = x__445__auto____8842;

if(cljs.core.truth_(and__3546__auto____8843))
{var and__3546__auto____8844 = x__445__auto____8842.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8844))
{return cljs.core.not.call(null,x__445__auto____8842.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8844;
}
} else
{return and__3546__auto____8843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8842);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8849 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8851 = x__445__auto____8849;

if(cljs.core.truth_(and__3546__auto____8851))
{var and__3546__auto____8853 = x__445__auto____8849.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8853))
{return cljs.core.not.call(null,x__445__auto____8849.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8853;
}
} else
{return and__3546__auto____8851;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8849);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8860 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8860.push(key);
}));
return keys__8860;
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
{var x__445__auto____8917 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8918 = x__445__auto____8917;

if(cljs.core.truth_(and__3546__auto____8918))
{var and__3546__auto____8923 = x__445__auto____8917.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8923))
{return cljs.core.not.call(null,x__445__auto____8917.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8923;
}
} else
{return and__3546__auto____8918;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8917);
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
var and__3546__auto____8934 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8934))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8939 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8939))
{return or__3548__auto____8939;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8934;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8951 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8951))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8951;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8953 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8953))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8953;
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
var and__3546__auto____8956 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8956))
{return (n == n.toFixed());
} else
{return and__3546__auto____8956;
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
if(cljs.core.truth_((function (){var and__3546__auto____8962 = coll;

if(cljs.core.truth_(and__3546__auto____8962))
{var and__3546__auto____8963 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8963))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8963;
}
} else
{return and__3546__auto____8962;
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
var distinct_QMARK___8977 = (function (x){
return true;
});
var distinct_QMARK___8978 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8979 = (function() { 
var G__9076__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8970 = cljs.core.set([y,x]);
var xs__8971 = more;

while(true){
var x__8972 = cljs.core.first.call(null,xs__8971);
var etc__8973 = cljs.core.next.call(null,xs__8971);

if(cljs.core.truth_(xs__8971))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8970,x__8972)))
{return false;
} else
{{
var G__9077 = cljs.core.conj.call(null,s__8970,x__8972);
var G__9078 = etc__8973;
s__8970 = G__9077;
xs__8971 = G__9078;
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
var G__9076 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9076__delegate.call(this, x, y, more);
};
G__9076.cljs$lang$maxFixedArity = 2;
G__9076.cljs$lang$applyTo = (function (arglist__9079){
var x = cljs.core.first(arglist__9079);
var y = cljs.core.first(cljs.core.next(arglist__9079));
var more = cljs.core.rest(cljs.core.next(arglist__9079));
return G__9076__delegate.call(this, x, y, more);
});
return G__9076;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8977.call(this,x);
case  2 :
return distinct_QMARK___8978.call(this,x,y);
default:
return distinct_QMARK___8979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8979.cljs$lang$applyTo;
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
var r__9080 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9080)))
{return r__9080;
} else
{if(cljs.core.truth_(r__9080))
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
var sort__9087 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9088 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9081 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9081,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9081);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9087.call(this,comp);
case  2 :
return sort__9088.call(this,comp,coll);
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
var sort_by__9092 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9093 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9092.call(this,keyfn,comp);
case  3 :
return sort_by__9093.call(this,keyfn,comp,coll);
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
var reduce__9101 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9102 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9101.call(this,f,val);
case  3 :
return reduce__9102.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9117 = (function (f,coll){
var temp__3695__auto____9109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9109))
{var s__9113 = temp__3695__auto____9109;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9113),cljs.core.next.call(null,s__9113));
} else
{return f.call(null);
}
});
var seq_reduce__9118 = (function (f,val,coll){
var val__9114 = val;
var coll__9116 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9116))
{{
var G__9120 = f.call(null,val__9114,cljs.core.first.call(null,coll__9116));
var G__9121 = cljs.core.next.call(null,coll__9116);
val__9114 = G__9120;
coll__9116 = G__9121;
continue;
}
} else
{return val__9114;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9117.call(this,f,val);
case  3 :
return seq_reduce__9118.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9130 = null;
var G__9130__9131 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9130__9132 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9130 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9130__9131.call(this,coll,f);
case  3 :
return G__9130__9132.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9130;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9135 = (function (){
return 0;
});
var _PLUS___9136 = (function (x){
return x;
});
var _PLUS___9137 = (function (x,y){
return (x + y);
});
var _PLUS___9138 = (function() { 
var G__9140__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9140 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9140__delegate.call(this, x, y, more);
};
G__9140.cljs$lang$maxFixedArity = 2;
G__9140.cljs$lang$applyTo = (function (arglist__9145){
var x = cljs.core.first(arglist__9145);
var y = cljs.core.first(cljs.core.next(arglist__9145));
var more = cljs.core.rest(cljs.core.next(arglist__9145));
return G__9140__delegate.call(this, x, y, more);
});
return G__9140;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9135.call(this);
case  1 :
return _PLUS___9136.call(this,x);
case  2 :
return _PLUS___9137.call(this,x,y);
default:
return _PLUS___9138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9138.cljs$lang$applyTo;
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
var ___9176 = (function (x){
return (- x);
});
var ___9177 = (function (x,y){
return (x - y);
});
var ___9178 = (function() { 
var G__9182__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9182 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9182__delegate.call(this, x, y, more);
};
G__9182.cljs$lang$maxFixedArity = 2;
G__9182.cljs$lang$applyTo = (function (arglist__9183){
var x = cljs.core.first(arglist__9183);
var y = cljs.core.first(cljs.core.next(arglist__9183));
var more = cljs.core.rest(cljs.core.next(arglist__9183));
return G__9182__delegate.call(this, x, y, more);
});
return G__9182;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9176.call(this,x);
case  2 :
return ___9177.call(this,x,y);
default:
return ___9178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9178.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9188 = (function (){
return 1;
});
var _STAR___9189 = (function (x){
return x;
});
var _STAR___9190 = (function (x,y){
return (x * y);
});
var _STAR___9191 = (function() { 
var G__9193__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9193 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9193__delegate.call(this, x, y, more);
};
G__9193.cljs$lang$maxFixedArity = 2;
G__9193.cljs$lang$applyTo = (function (arglist__9194){
var x = cljs.core.first(arglist__9194);
var y = cljs.core.first(cljs.core.next(arglist__9194));
var more = cljs.core.rest(cljs.core.next(arglist__9194));
return G__9193__delegate.call(this, x, y, more);
});
return G__9193;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9188.call(this);
case  1 :
return _STAR___9189.call(this,x);
case  2 :
return _STAR___9190.call(this,x,y);
default:
return _STAR___9191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9191.cljs$lang$applyTo;
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
var _SLASH___9202 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9203 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9204 = (function() { 
var G__9206__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9206__delegate.call(this, x, y, more);
};
G__9206.cljs$lang$maxFixedArity = 2;
G__9206.cljs$lang$applyTo = (function (arglist__9207){
var x = cljs.core.first(arglist__9207);
var y = cljs.core.first(cljs.core.next(arglist__9207));
var more = cljs.core.rest(cljs.core.next(arglist__9207));
return G__9206__delegate.call(this, x, y, more);
});
return G__9206;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9202.call(this,x);
case  2 :
return _SLASH___9203.call(this,x,y);
default:
return _SLASH___9204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9204.cljs$lang$applyTo;
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
var _LT___9223 = (function (x){
return true;
});
var _LT___9224 = (function (x,y){
return (x < y);
});
var _LT___9225 = (function() { 
var G__9227__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9233 = y;
var G__9234 = cljs.core.first.call(null,more);
var G__9235 = cljs.core.next.call(null,more);
x = G__9233;
y = G__9234;
more = G__9235;
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
var G__9227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9227__delegate.call(this, x, y, more);
};
G__9227.cljs$lang$maxFixedArity = 2;
G__9227.cljs$lang$applyTo = (function (arglist__9237){
var x = cljs.core.first(arglist__9237);
var y = cljs.core.first(cljs.core.next(arglist__9237));
var more = cljs.core.rest(cljs.core.next(arglist__9237));
return G__9227__delegate.call(this, x, y, more);
});
return G__9227;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9223.call(this,x);
case  2 :
return _LT___9224.call(this,x,y);
default:
return _LT___9225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9225.cljs$lang$applyTo;
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
var _LT__EQ___9248 = (function (x){
return true;
});
var _LT__EQ___9249 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9250 = (function() { 
var G__9260__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9262 = y;
var G__9264 = cljs.core.first.call(null,more);
var G__9265 = cljs.core.next.call(null,more);
x = G__9262;
y = G__9264;
more = G__9265;
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
G__9260.cljs$lang$applyTo = (function (arglist__9270){
var x = cljs.core.first(arglist__9270);
var y = cljs.core.first(cljs.core.next(arglist__9270));
var more = cljs.core.rest(cljs.core.next(arglist__9270));
return G__9260__delegate.call(this, x, y, more);
});
return G__9260;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9248.call(this,x);
case  2 :
return _LT__EQ___9249.call(this,x,y);
default:
return _LT__EQ___9250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9250.cljs$lang$applyTo;
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
var _GT___9286 = (function (x){
return true;
});
var _GT___9288 = (function (x,y){
return (x > y);
});
var _GT___9290 = (function() { 
var G__9297__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9302 = y;
var G__9303 = cljs.core.first.call(null,more);
var G__9304 = cljs.core.next.call(null,more);
x = G__9302;
y = G__9303;
more = G__9304;
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
var G__9297 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9297__delegate.call(this, x, y, more);
};
G__9297.cljs$lang$maxFixedArity = 2;
G__9297.cljs$lang$applyTo = (function (arglist__9307){
var x = cljs.core.first(arglist__9307);
var y = cljs.core.first(cljs.core.next(arglist__9307));
var more = cljs.core.rest(cljs.core.next(arglist__9307));
return G__9297__delegate.call(this, x, y, more);
});
return G__9297;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9286.call(this,x);
case  2 :
return _GT___9288.call(this,x,y);
default:
return _GT___9290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9290.cljs$lang$applyTo;
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
var _GT__EQ___9421 = (function (x){
return true;
});
var _GT__EQ___9422 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9423 = (function() { 
var G__9425__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9426 = y;
var G__9427 = cljs.core.first.call(null,more);
var G__9428 = cljs.core.next.call(null,more);
x = G__9426;
y = G__9427;
more = G__9428;
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
var G__9425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9425__delegate.call(this, x, y, more);
};
G__9425.cljs$lang$maxFixedArity = 2;
G__9425.cljs$lang$applyTo = (function (arglist__9429){
var x = cljs.core.first(arglist__9429);
var y = cljs.core.first(cljs.core.next(arglist__9429));
var more = cljs.core.rest(cljs.core.next(arglist__9429));
return G__9425__delegate.call(this, x, y, more);
});
return G__9425;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9421.call(this,x);
case  2 :
return _GT__EQ___9422.call(this,x,y);
default:
return _GT__EQ___9423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9423.cljs$lang$applyTo;
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
var max__9430 = (function (x){
return x;
});
var max__9431 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9432 = (function() { 
var G__9434__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9434 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9434__delegate.call(this, x, y, more);
};
G__9434.cljs$lang$maxFixedArity = 2;
G__9434.cljs$lang$applyTo = (function (arglist__9435){
var x = cljs.core.first(arglist__9435);
var y = cljs.core.first(cljs.core.next(arglist__9435));
var more = cljs.core.rest(cljs.core.next(arglist__9435));
return G__9434__delegate.call(this, x, y, more);
});
return G__9434;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9430.call(this,x);
case  2 :
return max__9431.call(this,x,y);
default:
return max__9432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9432.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9444 = (function (x){
return x;
});
var min__9445 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9446 = (function() { 
var G__9448__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9448 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9448__delegate.call(this, x, y, more);
};
G__9448.cljs$lang$maxFixedArity = 2;
G__9448.cljs$lang$applyTo = (function (arglist__9450){
var x = cljs.core.first(arglist__9450);
var y = cljs.core.first(cljs.core.next(arglist__9450));
var more = cljs.core.rest(cljs.core.next(arglist__9450));
return G__9448__delegate.call(this, x, y, more);
});
return G__9448;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9444.call(this,x);
case  2 :
return min__9445.call(this,x,y);
default:
return min__9446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9446.cljs$lang$applyTo;
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
var rem__9454 = (n % d);

return cljs.core.fix.call(null,((n - rem__9454) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9463 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9463));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9467 = (function (){
return Math.random.call(null);
});
var rand__9468 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9467.call(this);
case  1 :
return rand__9468.call(this,n);
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
var _EQ__EQ___9513 = (function (x){
return true;
});
var _EQ__EQ___9514 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9515 = (function() { 
var G__9517__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9518 = y;
var G__9519 = cljs.core.first.call(null,more);
var G__9520 = cljs.core.next.call(null,more);
x = G__9518;
y = G__9519;
more = G__9520;
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
var G__9517 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9517__delegate.call(this, x, y, more);
};
G__9517.cljs$lang$maxFixedArity = 2;
G__9517.cljs$lang$applyTo = (function (arglist__9524){
var x = cljs.core.first(arglist__9524);
var y = cljs.core.first(cljs.core.next(arglist__9524));
var more = cljs.core.rest(cljs.core.next(arglist__9524));
return G__9517__delegate.call(this, x, y, more);
});
return G__9517;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9513.call(this,x);
case  2 :
return _EQ__EQ___9514.call(this,x,y);
default:
return _EQ__EQ___9515.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9515.cljs$lang$applyTo;
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
var n__9536 = n;
var xs__9537 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9542 = xs__9537;

if(cljs.core.truth_(and__3546__auto____9542))
{return (n__9536 > 0);
} else
{return and__3546__auto____9542;
}
})()))
{{
var G__9547 = (n__9536 - 1);
var G__9548 = cljs.core.next.call(null,xs__9537);
n__9536 = G__9547;
xs__9537 = G__9548;
continue;
}
} else
{return xs__9537;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9561 = null;
var G__9561__9562 = (function (coll,n){
var temp__3695__auto____9553 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9553))
{var xs__9554 = temp__3695__auto____9553;

return cljs.core.first.call(null,xs__9554);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9561__9563 = (function (coll,n,not_found){
var temp__3695__auto____9555 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9555))
{var xs__9556 = temp__3695__auto____9555;

return cljs.core.first.call(null,xs__9556);
} else
{return not_found;
}
});
G__9561 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9561__9562.call(this,coll,n);
case  3 :
return G__9561__9563.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9561;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9584 = (function (){
return "";
});
var str_STAR___9585 = (function (x){
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
var str_STAR___9586 = (function() { 
var G__9588__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9589 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9590 = cljs.core.next.call(null,more);
sb = G__9589;
more = G__9590;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9588 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9588__delegate.call(this, x, ys);
};
G__9588.cljs$lang$maxFixedArity = 1;
G__9588.cljs$lang$applyTo = (function (arglist__9591){
var x = cljs.core.first(arglist__9591);
var ys = cljs.core.rest(arglist__9591);
return G__9588__delegate.call(this, x, ys);
});
return G__9588;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9584.call(this);
case  1 :
return str_STAR___9585.call(this,x);
default:
return str_STAR___9586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9586.cljs$lang$applyTo;
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
var str__9666 = (function (){
return "";
});
var str__9667 = (function (x){
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
var str__9668 = (function() { 
var G__9673__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9673 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9673__delegate.call(this, x, ys);
};
G__9673.cljs$lang$maxFixedArity = 1;
G__9673.cljs$lang$applyTo = (function (arglist__9674){
var x = cljs.core.first(arglist__9674);
var ys = cljs.core.rest(arglist__9674);
return G__9673__delegate.call(this, x, ys);
});
return G__9673;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9666.call(this);
case  1 :
return str__9667.call(this,x);
default:
return str__9668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9668.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9683 = (function (s,start){
return s.substring(start);
});
var subs__9684 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9683.call(this,s,start);
case  3 :
return subs__9684.call(this,s,start,end);
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
var symbol__9688 = (function (name){
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
var symbol__9689 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9688.call(this,ns);
case  2 :
return symbol__9689.call(this,ns,name);
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
var keyword__9693 = (function (name){
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
var keyword__9694 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9693.call(this,ns);
case  2 :
return keyword__9694.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9700 = cljs.core.seq.call(null,x);
var ys__9701 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9700)))
{return cljs.core.nil_QMARK_.call(null,ys__9701);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9701)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9700),cljs.core.first.call(null,ys__9701))))
{{
var G__9704 = cljs.core.next.call(null,xs__9700);
var G__9705 = cljs.core.next.call(null,ys__9701);
xs__9700 = G__9704;
ys__9701 = G__9705;
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
return cljs.core.reduce.call(null,(function (p1__9708_SHARP_,p2__9709_SHARP_){
return cljs.core.hash_combine.call(null,p1__9708_SHARP_,cljs.core.hash.call(null,p2__9709_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9724__9726 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9724__9726))
{var G__9729__9826 = cljs.core.first.call(null,G__9724__9726);
var vec__9825__9828 = G__9729__9826;
var key_name__9829 = cljs.core.nth.call(null,vec__9825__9828,0,null);
var f__9830 = cljs.core.nth.call(null,vec__9825__9828,1,null);
var G__9724__9831 = G__9724__9726;

var G__9729__9832 = G__9729__9826;
var G__9724__9833 = G__9724__9831;

while(true){
var vec__9835__9836 = G__9729__9832;
var key_name__9838 = cljs.core.nth.call(null,vec__9835__9836,0,null);
var f__9839 = cljs.core.nth.call(null,vec__9835__9836,1,null);
var G__9724__9840 = G__9724__9833;

var str_name__9842 = cljs.core.name.call(null,key_name__9838);

obj[str_name__9842] = f__9839;
var temp__3698__auto____9844 = cljs.core.next.call(null,G__9724__9840);

if(cljs.core.truth_(temp__3698__auto____9844))
{var G__9724__9846 = temp__3698__auto____9844;

{
var G__9852 = cljs.core.first.call(null,G__9724__9846);
var G__9853 = G__9724__9846;
G__9729__9832 = G__9852;
G__9724__9833 = G__9853;
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
var this__9854 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9855 = this;
return (new cljs.core.List(this__9855.meta,o,coll,(this__9855.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9856 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9857 = this;
return this__9857.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9858 = this;
return this__9858.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9859 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9861 = this;
return this__9861.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9863 = this;
return this__9863.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9864 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9867 = this;
return (new cljs.core.List(meta,this__9867.first,this__9867.rest,this__9867.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9870 = this;
return this__9870.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9872 = this;
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
var this__9883 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9884 = this;
return (new cljs.core.List(this__9884.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9885 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9886 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9887 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9888 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9924 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9926 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9928 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9929 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9931 = this;
return this__9931.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9934 = this;
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
var this__9951 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9952 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9953 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9954 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9954.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9955 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9960 = this;
return this__9960.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9961 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9961.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9961.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9962 = this;
return this__9962.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9969 = this;
return (new cljs.core.Cons(meta,this__9969.first,this__9969.rest));
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
var G__9982 = null;
var G__9982__9983 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9982__9984 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9982 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9982__9983.call(this,string,f);
case  3 :
return G__9982__9984.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9982;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9986 = null;
var G__9986__9987 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9986__9988 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9986 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9986__9987.call(this,string,k);
case  3 :
return G__9986__9988.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9986;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9991 = null;
var G__9991__9992 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9991__9993 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9991 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9991__9992.call(this,string,n);
case  3 :
return G__9991__9993.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9991;
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
var G__9999 = null;
var G__9999__10000 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9999__10002 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9999 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9999__10000.call(this,this$,coll);
case  3 :
return G__9999__10002.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9999;
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
var x__10008 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10008;
} else
{lazy_seq.x = x__10008.call(null);
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
var this__10011 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10013 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10015 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10017 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10017.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10020 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10021 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10022 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10023 = this;
return this__10023.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10024 = this;
return (new cljs.core.LazySeq(meta,this__10024.realized,this__10024.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10074 = cljs.core.array.call(null);

var s__10075 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10075)))
{ary__10074.push(cljs.core.first.call(null,s__10075));
{
var G__10086 = cljs.core.next.call(null,s__10075);
s__10075 = G__10086;
continue;
}
} else
{return ary__10074;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10091 = s;
var i__10092 = n;
var sum__10093 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10095 = (i__10092 > 0);

if(cljs.core.truth_(and__3546__auto____10095))
{return cljs.core.seq.call(null,s__10091);
} else
{return and__3546__auto____10095;
}
})()))
{{
var G__10097 = cljs.core.next.call(null,s__10091);
var G__10098 = (i__10092 - 1);
var G__10099 = (sum__10093 + 1);
s__10091 = G__10097;
i__10092 = G__10098;
sum__10093 = G__10099;
continue;
}
} else
{return sum__10093;
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
var concat__10116 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10117 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10118 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10104 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10104))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10104),concat.call(null,cljs.core.rest.call(null,s__10104),y));
} else
{return y;
}
})));
});
var concat__10119 = (function() { 
var G__10125__delegate = function (x,y,zs){
var cat__10111 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10110 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10110))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10110),cat.call(null,cljs.core.rest.call(null,xys__10110),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10111.call(null,concat.call(null,x,y),zs);
};
var G__10125 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10125__delegate.call(this, x, y, zs);
};
G__10125.cljs$lang$maxFixedArity = 2;
G__10125.cljs$lang$applyTo = (function (arglist__10128){
var x = cljs.core.first(arglist__10128);
var y = cljs.core.first(cljs.core.next(arglist__10128));
var zs = cljs.core.rest(cljs.core.next(arglist__10128));
return G__10125__delegate.call(this, x, y, zs);
});
return G__10125;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10116.call(this);
case  1 :
return concat__10117.call(this,x);
case  2 :
return concat__10118.call(this,x,y);
default:
return concat__10119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10119.cljs$lang$applyTo;
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
var list_STAR___10136 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10137 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10138 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10139 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10140 = (function() { 
var G__10142__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10142 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10142__delegate.call(this, a, b, c, d, more);
};
G__10142.cljs$lang$maxFixedArity = 4;
G__10142.cljs$lang$applyTo = (function (arglist__10143){
var a = cljs.core.first(arglist__10143);
var b = cljs.core.first(cljs.core.next(arglist__10143));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10143)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10143))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10143))));
return G__10142__delegate.call(this, a, b, c, d, more);
});
return G__10142;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10136.call(this,a);
case  2 :
return list_STAR___10137.call(this,a,b);
case  3 :
return list_STAR___10138.call(this,a,b,c);
case  4 :
return list_STAR___10139.call(this,a,b,c,d);
default:
return list_STAR___10140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10140.cljs$lang$applyTo;
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
var apply__10159 = (function (f,args){
var fixed_arity__10148 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10148 + 1)) <= fixed_arity__10148)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10160 = (function (f,x,args){
var arglist__10149 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10150 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10149,fixed_arity__10150) <= fixed_arity__10150)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10149));
} else
{return f.cljs$lang$applyTo(arglist__10149);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10149));
}
});
var apply__10161 = (function (f,x,y,args){
var arglist__10151 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10152 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10151,fixed_arity__10152) <= fixed_arity__10152)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10151));
} else
{return f.cljs$lang$applyTo(arglist__10151);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10151));
}
});
var apply__10162 = (function (f,x,y,z,args){
var arglist__10154 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10155 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10154,fixed_arity__10155) <= fixed_arity__10155)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10154));
} else
{return f.cljs$lang$applyTo(arglist__10154);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10154));
}
});
var apply__10163 = (function() { 
var G__10179__delegate = function (f,a,b,c,d,args){
var arglist__10156 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10157 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10156,fixed_arity__10157) <= fixed_arity__10157)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10156));
} else
{return f.cljs$lang$applyTo(arglist__10156);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10156));
}
};
var G__10179 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10179__delegate.call(this, f, a, b, c, d, args);
};
G__10179.cljs$lang$maxFixedArity = 5;
G__10179.cljs$lang$applyTo = (function (arglist__10182){
var f = cljs.core.first(arglist__10182);
var a = cljs.core.first(cljs.core.next(arglist__10182));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10182)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10182))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10182)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10182)))));
return G__10179__delegate.call(this, f, a, b, c, d, args);
});
return G__10179;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10159.call(this,f,a);
case  3 :
return apply__10160.call(this,f,a,b);
case  4 :
return apply__10161.call(this,f,a,b,c);
case  5 :
return apply__10162.call(this,f,a,b,c,d);
default:
return apply__10163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10163.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10186){
var obj = cljs.core.first(arglist__10186);
var f = cljs.core.first(cljs.core.next(arglist__10186));
var args = cljs.core.rest(cljs.core.next(arglist__10186));
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
var not_EQ___10189 = (function (x){
return false;
});
var not_EQ___10190 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10191 = (function() { 
var G__10193__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10193 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10193__delegate.call(this, x, y, more);
};
G__10193.cljs$lang$maxFixedArity = 2;
G__10193.cljs$lang$applyTo = (function (arglist__10197){
var x = cljs.core.first(arglist__10197);
var y = cljs.core.first(cljs.core.next(arglist__10197));
var more = cljs.core.rest(cljs.core.next(arglist__10197));
return G__10193__delegate.call(this, x, y, more);
});
return G__10193;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10189.call(this,x);
case  2 :
return not_EQ___10190.call(this,x,y);
default:
return not_EQ___10191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10191.cljs$lang$applyTo;
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
var G__10353 = pred;
var G__10354 = cljs.core.next.call(null,coll);
pred = G__10353;
coll = G__10354;
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
{var or__3548__auto____10356 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10356))
{return or__3548__auto____10356;
} else
{{
var G__10357 = pred;
var G__10359 = cljs.core.next.call(null,coll);
pred = G__10357;
coll = G__10359;
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
var G__10366 = null;
var G__10366__10368 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10366__10369 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10366__10371 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10366__10373 = (function() { 
var G__10378__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10378 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10378__delegate.call(this, x, y, zs);
};
G__10378.cljs$lang$maxFixedArity = 2;
G__10378.cljs$lang$applyTo = (function (arglist__10380){
var x = cljs.core.first(arglist__10380);
var y = cljs.core.first(cljs.core.next(arglist__10380));
var zs = cljs.core.rest(cljs.core.next(arglist__10380));
return G__10378__delegate.call(this, x, y, zs);
});
return G__10378;
})()
;
G__10366 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10366__10368.call(this);
case  1 :
return G__10366__10369.call(this,x);
case  2 :
return G__10366__10371.call(this,x,y);
default:
return G__10366__10373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10366.cljs$lang$maxFixedArity = 2;
G__10366.cljs$lang$applyTo = G__10366__10373.cljs$lang$applyTo;
return G__10366;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10407__delegate = function (args){
return x;
};
var G__10407 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10407__delegate.call(this, args);
};
G__10407.cljs$lang$maxFixedArity = 0;
G__10407.cljs$lang$applyTo = (function (arglist__10416){
var args = cljs.core.seq( arglist__10416 );;
return G__10407__delegate.call(this, args);
});
return G__10407;
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
var comp__10627 = (function (){
return cljs.core.identity;
});
var comp__10629 = (function (f){
return f;
});
var comp__10630 = (function (f,g){
return (function() {
var G__10634 = null;
var G__10634__10636 = (function (){
return f.call(null,g.call(null));
});
var G__10634__10637 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10634__10638 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10634__10639 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10634__10641 = (function() { 
var G__10648__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10648 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10648__delegate.call(this, x, y, z, args);
};
G__10648.cljs$lang$maxFixedArity = 3;
G__10648.cljs$lang$applyTo = (function (arglist__10650){
var x = cljs.core.first(arglist__10650);
var y = cljs.core.first(cljs.core.next(arglist__10650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10650)));
return G__10648__delegate.call(this, x, y, z, args);
});
return G__10648;
})()
;
G__10634 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10634__10636.call(this);
case  1 :
return G__10634__10637.call(this,x);
case  2 :
return G__10634__10638.call(this,x,y);
case  3 :
return G__10634__10639.call(this,x,y,z);
default:
return G__10634__10641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10634.cljs$lang$maxFixedArity = 3;
G__10634.cljs$lang$applyTo = G__10634__10641.cljs$lang$applyTo;
return G__10634;
})()
});
var comp__10631 = (function (f,g,h){
return (function() {
var G__10657 = null;
var G__10657__10658 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10657__10660 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10657__10661 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10657__10662 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10657__10663 = (function() { 
var G__10670__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10670 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10670__delegate.call(this, x, y, z, args);
};
G__10670.cljs$lang$maxFixedArity = 3;
G__10670.cljs$lang$applyTo = (function (arglist__10671){
var x = cljs.core.first(arglist__10671);
var y = cljs.core.first(cljs.core.next(arglist__10671));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10671)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10671)));
return G__10670__delegate.call(this, x, y, z, args);
});
return G__10670;
})()
;
G__10657 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10657__10658.call(this);
case  1 :
return G__10657__10660.call(this,x);
case  2 :
return G__10657__10661.call(this,x,y);
case  3 :
return G__10657__10662.call(this,x,y,z);
default:
return G__10657__10663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10657.cljs$lang$maxFixedArity = 3;
G__10657.cljs$lang$applyTo = G__10657__10663.cljs$lang$applyTo;
return G__10657;
})()
});
var comp__10632 = (function() { 
var G__10673__delegate = function (f1,f2,f3,fs){
var fs__10616 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10674__delegate = function (args){
var ret__10618 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10616),args);
var fs__10619 = cljs.core.next.call(null,fs__10616);

while(true){
if(cljs.core.truth_(fs__10619))
{{
var G__10676 = cljs.core.first.call(null,fs__10619).call(null,ret__10618);
var G__10677 = cljs.core.next.call(null,fs__10619);
ret__10618 = G__10676;
fs__10619 = G__10677;
continue;
}
} else
{return ret__10618;
}
break;
}
};
var G__10674 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10674__delegate.call(this, args);
};
G__10674.cljs$lang$maxFixedArity = 0;
G__10674.cljs$lang$applyTo = (function (arglist__10680){
var args = cljs.core.seq( arglist__10680 );;
return G__10674__delegate.call(this, args);
});
return G__10674;
})()
;
};
var G__10673 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10673__delegate.call(this, f1, f2, f3, fs);
};
G__10673.cljs$lang$maxFixedArity = 3;
G__10673.cljs$lang$applyTo = (function (arglist__10682){
var f1 = cljs.core.first(arglist__10682);
var f2 = cljs.core.first(cljs.core.next(arglist__10682));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10682)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10682)));
return G__10673__delegate.call(this, f1, f2, f3, fs);
});
return G__10673;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10627.call(this);
case  1 :
return comp__10629.call(this,f1);
case  2 :
return comp__10630.call(this,f1,f2);
case  3 :
return comp__10631.call(this,f1,f2,f3);
default:
return comp__10632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10632.cljs$lang$applyTo;
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
var partial__10688 = (function (f,arg1){
return (function() { 
var G__10694__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10694 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10694__delegate.call(this, args);
};
G__10694.cljs$lang$maxFixedArity = 0;
G__10694.cljs$lang$applyTo = (function (arglist__10696){
var args = cljs.core.seq( arglist__10696 );;
return G__10694__delegate.call(this, args);
});
return G__10694;
})()
;
});
var partial__10689 = (function (f,arg1,arg2){
return (function() { 
var G__10697__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10697 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10697__delegate.call(this, args);
};
G__10697.cljs$lang$maxFixedArity = 0;
G__10697.cljs$lang$applyTo = (function (arglist__10698){
var args = cljs.core.seq( arglist__10698 );;
return G__10697__delegate.call(this, args);
});
return G__10697;
})()
;
});
var partial__10690 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10699__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10699 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10699__delegate.call(this, args);
};
G__10699.cljs$lang$maxFixedArity = 0;
G__10699.cljs$lang$applyTo = (function (arglist__10702){
var args = cljs.core.seq( arglist__10702 );;
return G__10699__delegate.call(this, args);
});
return G__10699;
})()
;
});
var partial__10691 = (function() { 
var G__10704__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10705__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10705 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10705__delegate.call(this, args);
};
G__10705.cljs$lang$maxFixedArity = 0;
G__10705.cljs$lang$applyTo = (function (arglist__10706){
var args = cljs.core.seq( arglist__10706 );;
return G__10705__delegate.call(this, args);
});
return G__10705;
})()
;
};
var G__10704 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10704__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10704.cljs$lang$maxFixedArity = 4;
G__10704.cljs$lang$applyTo = (function (arglist__10707){
var f = cljs.core.first(arglist__10707);
var arg1 = cljs.core.first(cljs.core.next(arglist__10707));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10707)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10707))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10707))));
return G__10704__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10704;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10688.call(this,f,arg1);
case  3 :
return partial__10689.call(this,f,arg1,arg2);
case  4 :
return partial__10690.call(this,f,arg1,arg2,arg3);
default:
return partial__10691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10691.cljs$lang$applyTo;
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
var fnil__10746 = (function (f,x){
return (function() {
var G__10751 = null;
var G__10751__10752 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10751__10753 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10751__10754 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10751__10755 = (function() { 
var G__10759__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10759 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10759__delegate.call(this, a, b, c, ds);
};
G__10759.cljs$lang$maxFixedArity = 3;
G__10759.cljs$lang$applyTo = (function (arglist__10760){
var a = cljs.core.first(arglist__10760);
var b = cljs.core.first(cljs.core.next(arglist__10760));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10760)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10760)));
return G__10759__delegate.call(this, a, b, c, ds);
});
return G__10759;
})()
;
G__10751 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10751__10752.call(this,a);
case  2 :
return G__10751__10753.call(this,a,b);
case  3 :
return G__10751__10754.call(this,a,b,c);
default:
return G__10751__10755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10751.cljs$lang$maxFixedArity = 3;
G__10751.cljs$lang$applyTo = G__10751__10755.cljs$lang$applyTo;
return G__10751;
})()
});
var fnil__10747 = (function (f,x,y){
return (function() {
var G__10761 = null;
var G__10761__10762 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10761__10763 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10761__10764 = (function() { 
var G__10774__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10774 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10774__delegate.call(this, a, b, c, ds);
};
G__10774.cljs$lang$maxFixedArity = 3;
G__10774.cljs$lang$applyTo = (function (arglist__10775){
var a = cljs.core.first(arglist__10775);
var b = cljs.core.first(cljs.core.next(arglist__10775));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10775)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10775)));
return G__10774__delegate.call(this, a, b, c, ds);
});
return G__10774;
})()
;
G__10761 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10761__10762.call(this,a,b);
case  3 :
return G__10761__10763.call(this,a,b,c);
default:
return G__10761__10764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10761.cljs$lang$maxFixedArity = 3;
G__10761.cljs$lang$applyTo = G__10761__10764.cljs$lang$applyTo;
return G__10761;
})()
});
var fnil__10748 = (function (f,x,y,z){
return (function() {
var G__10781 = null;
var G__10781__10782 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10781__10783 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10781__10784 = (function() { 
var G__10788__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10788 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10788__delegate.call(this, a, b, c, ds);
};
G__10788.cljs$lang$maxFixedArity = 3;
G__10788.cljs$lang$applyTo = (function (arglist__10796){
var a = cljs.core.first(arglist__10796);
var b = cljs.core.first(cljs.core.next(arglist__10796));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10796)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10796)));
return G__10788__delegate.call(this, a, b, c, ds);
});
return G__10788;
})()
;
G__10781 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10781__10782.call(this,a,b);
case  3 :
return G__10781__10783.call(this,a,b,c);
default:
return G__10781__10784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10781.cljs$lang$maxFixedArity = 3;
G__10781.cljs$lang$applyTo = G__10781__10784.cljs$lang$applyTo;
return G__10781;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10746.call(this,f,x);
case  3 :
return fnil__10747.call(this,f,x,y);
case  4 :
return fnil__10748.call(this,f,x,y,z);
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
var mapi__10822 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10814))
{var s__10819 = temp__3698__auto____10814;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10819)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10819)));
} else
{return null;
}
})));
});

return mapi__10822.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10836))
{var s__10838 = temp__3698__auto____10836;

var x__10840 = f.call(null,cljs.core.first.call(null,s__10838));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10840)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10838));
} else
{return cljs.core.cons.call(null,x__10840,keep.call(null,f,cljs.core.rest.call(null,s__10838)));
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
var keepi__10872 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10861))
{var s__10865 = temp__3698__auto____10861;

var x__10867 = f.call(null,idx,cljs.core.first.call(null,s__10865));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10867)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10865));
} else
{return cljs.core.cons.call(null,x__10867,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10865)));
}
} else
{return null;
}
})));
});

return keepi__10872.call(null,0,coll);
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
var every_pred__11150 = (function (p){
return (function() {
var ep1 = null;
var ep1__11161 = (function (){
return true;
});
var ep1__11162 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11163 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10897 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10897))
{return p.call(null,y);
} else
{return and__3546__auto____10897;
}
})());
});
var ep1__11164 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10899 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10899))
{var and__3546__auto____10901 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10901))
{return p.call(null,z);
} else
{return and__3546__auto____10901;
}
} else
{return and__3546__auto____10899;
}
})());
});
var ep1__11165 = (function() { 
var G__11167__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10902 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10902))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10902;
}
})());
};
var G__11167 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11167__delegate.call(this, x, y, z, args);
};
G__11167.cljs$lang$maxFixedArity = 3;
G__11167.cljs$lang$applyTo = (function (arglist__11169){
var x = cljs.core.first(arglist__11169);
var y = cljs.core.first(cljs.core.next(arglist__11169));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11169)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11169)));
return G__11167__delegate.call(this, x, y, z, args);
});
return G__11167;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11161.call(this);
case  1 :
return ep1__11162.call(this,x);
case  2 :
return ep1__11163.call(this,x,y);
case  3 :
return ep1__11164.call(this,x,y,z);
default:
return ep1__11165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11165.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11151 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11176 = (function (){
return true;
});
var ep2__11177 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10903 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10903))
{return p2.call(null,x);
} else
{return and__3546__auto____10903;
}
})());
});
var ep2__11178 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10907 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10907))
{var and__3546__auto____10909 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10909))
{var and__3546__auto____10915 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10915))
{return p2.call(null,y);
} else
{return and__3546__auto____10915;
}
} else
{return and__3546__auto____10909;
}
} else
{return and__3546__auto____10907;
}
})());
});
var ep2__11180 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10917 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10917))
{var and__3546__auto____10919 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10919))
{var and__3546__auto____10920 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10920))
{var and__3546__auto____10922 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10922))
{var and__3546__auto____10923 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10923))
{return p2.call(null,z);
} else
{return and__3546__auto____10923;
}
} else
{return and__3546__auto____10922;
}
} else
{return and__3546__auto____10920;
}
} else
{return and__3546__auto____10919;
}
} else
{return and__3546__auto____10917;
}
})());
});
var ep2__11182 = (function() { 
var G__11196__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10929 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10929))
{return cljs.core.every_QMARK_.call(null,(function (p1__10847_SHARP_){
var and__3546__auto____10931 = p1.call(null,p1__10847_SHARP_);

if(cljs.core.truth_(and__3546__auto____10931))
{return p2.call(null,p1__10847_SHARP_);
} else
{return and__3546__auto____10931;
}
}),args);
} else
{return and__3546__auto____10929;
}
})());
};
var G__11196 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11196__delegate.call(this, x, y, z, args);
};
G__11196.cljs$lang$maxFixedArity = 3;
G__11196.cljs$lang$applyTo = (function (arglist__11205){
var x = cljs.core.first(arglist__11205);
var y = cljs.core.first(cljs.core.next(arglist__11205));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11205)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11205)));
return G__11196__delegate.call(this, x, y, z, args);
});
return G__11196;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11176.call(this);
case  1 :
return ep2__11177.call(this,x);
case  2 :
return ep2__11178.call(this,x,y);
case  3 :
return ep2__11180.call(this,x,y,z);
default:
return ep2__11182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11182.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11153 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11207 = (function (){
return true;
});
var ep3__11208 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11096 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11096))
{var and__3546__auto____11099 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11099))
{return p3.call(null,x);
} else
{return and__3546__auto____11099;
}
} else
{return and__3546__auto____11096;
}
})());
});
var ep3__11209 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11100 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11100))
{var and__3546__auto____11102 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11102))
{var and__3546__auto____11104 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11104))
{var and__3546__auto____11106 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11106))
{var and__3546__auto____11108 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11108))
{return p3.call(null,y);
} else
{return and__3546__auto____11108;
}
} else
{return and__3546__auto____11106;
}
} else
{return and__3546__auto____11104;
}
} else
{return and__3546__auto____11102;
}
} else
{return and__3546__auto____11100;
}
})());
});
var ep3__11211 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11116 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11116))
{var and__3546__auto____11117 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11117))
{var and__3546__auto____11118 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11118))
{var and__3546__auto____11119 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11119))
{var and__3546__auto____11121 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11121))
{var and__3546__auto____11122 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11122))
{var and__3546__auto____11123 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11123))
{var and__3546__auto____11124 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11124))
{return p3.call(null,z);
} else
{return and__3546__auto____11124;
}
} else
{return and__3546__auto____11123;
}
} else
{return and__3546__auto____11122;
}
} else
{return and__3546__auto____11121;
}
} else
{return and__3546__auto____11119;
}
} else
{return and__3546__auto____11118;
}
} else
{return and__3546__auto____11117;
}
} else
{return and__3546__auto____11116;
}
})());
});
var ep3__11212 = (function() { 
var G__11245__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11127 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11127))
{return cljs.core.every_QMARK_.call(null,(function (p1__10849_SHARP_){
var and__3546__auto____11130 = p1.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(and__3546__auto____11130))
{var and__3546__auto____11131 = p2.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(and__3546__auto____11131))
{return p3.call(null,p1__10849_SHARP_);
} else
{return and__3546__auto____11131;
}
} else
{return and__3546__auto____11130;
}
}),args);
} else
{return and__3546__auto____11127;
}
})());
};
var G__11245 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11245__delegate.call(this, x, y, z, args);
};
G__11245.cljs$lang$maxFixedArity = 3;
G__11245.cljs$lang$applyTo = (function (arglist__11249){
var x = cljs.core.first(arglist__11249);
var y = cljs.core.first(cljs.core.next(arglist__11249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11249)));
return G__11245__delegate.call(this, x, y, z, args);
});
return G__11245;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11207.call(this);
case  1 :
return ep3__11208.call(this,x);
case  2 :
return ep3__11209.call(this,x,y);
case  3 :
return ep3__11211.call(this,x,y,z);
default:
return ep3__11212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11212.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11155 = (function() { 
var G__11251__delegate = function (p1,p2,p3,ps){
var ps__11132 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11253 = (function (){
return true;
});
var epn__11254 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10850_SHARP_){
return p1__10850_SHARP_.call(null,x);
}),ps__11132);
});
var epn__11255 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10851_SHARP_){
var and__3546__auto____11139 = p1__10851_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11139))
{return p1__10851_SHARP_.call(null,y);
} else
{return and__3546__auto____11139;
}
}),ps__11132);
});
var epn__11256 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10852_SHARP_){
var and__3546__auto____11145 = p1__10852_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11145))
{var and__3546__auto____11146 = p1__10852_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11146))
{return p1__10852_SHARP_.call(null,z);
} else
{return and__3546__auto____11146;
}
} else
{return and__3546__auto____11145;
}
}),ps__11132);
});
var epn__11257 = (function() { 
var G__11266__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11148 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11148))
{return cljs.core.every_QMARK_.call(null,(function (p1__10854_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10854_SHARP_,args);
}),ps__11132);
} else
{return and__3546__auto____11148;
}
})());
};
var G__11266 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11266__delegate.call(this, x, y, z, args);
};
G__11266.cljs$lang$maxFixedArity = 3;
G__11266.cljs$lang$applyTo = (function (arglist__11267){
var x = cljs.core.first(arglist__11267);
var y = cljs.core.first(cljs.core.next(arglist__11267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11267)));
return G__11266__delegate.call(this, x, y, z, args);
});
return G__11266;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11253.call(this);
case  1 :
return epn__11254.call(this,x);
case  2 :
return epn__11255.call(this,x,y);
case  3 :
return epn__11256.call(this,x,y,z);
default:
return epn__11257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11257.cljs$lang$applyTo;
return epn;
})()
};
var G__11251 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11251__delegate.call(this, p1, p2, p3, ps);
};
G__11251.cljs$lang$maxFixedArity = 3;
G__11251.cljs$lang$applyTo = (function (arglist__11271){
var p1 = cljs.core.first(arglist__11271);
var p2 = cljs.core.first(cljs.core.next(arglist__11271));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11271)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11271)));
return G__11251__delegate.call(this, p1, p2, p3, ps);
});
return G__11251;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11150.call(this,p1);
case  2 :
return every_pred__11151.call(this,p1,p2);
case  3 :
return every_pred__11153.call(this,p1,p2,p3);
default:
return every_pred__11155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11155.cljs$lang$applyTo;
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
var some_fn__11491 = (function (p){
return (function() {
var sp1 = null;
var sp1__11502 = (function (){
return null;
});
var sp1__11503 = (function (x){
return p.call(null,x);
});
var sp1__11504 = (function (x,y){
var or__3548__auto____11285 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{return p.call(null,y);
}
});
var sp1__11505 = (function (x,y,z){
var or__3548__auto____11287 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11287))
{return or__3548__auto____11287;
} else
{var or__3548__auto____11289 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11289))
{return or__3548__auto____11289;
} else
{return p.call(null,z);
}
}
});
var sp1__11506 = (function() { 
var G__11516__delegate = function (x,y,z,args){
var or__3548__auto____11292 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11516 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11516__delegate.call(this, x, y, z, args);
};
G__11516.cljs$lang$maxFixedArity = 3;
G__11516.cljs$lang$applyTo = (function (arglist__11521){
var x = cljs.core.first(arglist__11521);
var y = cljs.core.first(cljs.core.next(arglist__11521));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11521)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11521)));
return G__11516__delegate.call(this, x, y, z, args);
});
return G__11516;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11502.call(this);
case  1 :
return sp1__11503.call(this,x);
case  2 :
return sp1__11504.call(this,x,y);
case  3 :
return sp1__11505.call(this,x,y,z);
default:
return sp1__11506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11506.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11492 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11524 = (function (){
return null;
});
var sp2__11525 = (function (x){
var or__3548__auto____11295 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11295))
{return or__3548__auto____11295;
} else
{return p2.call(null,x);
}
});
var sp2__11526 = (function (x,y){
var or__3548__auto____11297 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11297))
{return or__3548__auto____11297;
} else
{var or__3548__auto____11298 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{var or__3548__auto____11300 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11300))
{return or__3548__auto____11300;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11527 = (function (x,y,z){
var or__3548__auto____11302 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11302))
{return or__3548__auto____11302;
} else
{var or__3548__auto____11304 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11304))
{return or__3548__auto____11304;
} else
{var or__3548__auto____11306 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11306))
{return or__3548__auto____11306;
} else
{var or__3548__auto____11307 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11307))
{return or__3548__auto____11307;
} else
{var or__3548__auto____11310 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11528 = (function() { 
var G__11543__delegate = function (x,y,z,args){
var or__3548__auto____11314 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11314))
{return or__3548__auto____11314;
} else
{return cljs.core.some.call(null,(function (p1__10886_SHARP_){
var or__3548__auto____11317 = p1.call(null,p1__10886_SHARP_);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{return p2.call(null,p1__10886_SHARP_);
}
}),args);
}
};
var G__11543 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11543__delegate.call(this, x, y, z, args);
};
G__11543.cljs$lang$maxFixedArity = 3;
G__11543.cljs$lang$applyTo = (function (arglist__11555){
var x = cljs.core.first(arglist__11555);
var y = cljs.core.first(cljs.core.next(arglist__11555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11555)));
return G__11543__delegate.call(this, x, y, z, args);
});
return G__11543;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11524.call(this);
case  1 :
return sp2__11525.call(this,x);
case  2 :
return sp2__11526.call(this,x,y);
case  3 :
return sp2__11527.call(this,x,y,z);
default:
return sp2__11528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11528.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11493 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11557 = (function (){
return null;
});
var sp3__11559 = (function (x){
var or__3548__auto____11326 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{var or__3548__auto____11328 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11328))
{return or__3548__auto____11328;
} else
{return p3.call(null,x);
}
}
});
var sp3__11560 = (function (x,y){
var or__3548__auto____11331 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11331))
{return or__3548__auto____11331;
} else
{var or__3548__auto____11333 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{var or__3548__auto____11335 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{var or__3548__auto____11338 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{var or__3548__auto____11339 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11561 = (function (x,y,z){
var or__3548__auto____11340 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{var or__3548__auto____11342 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11342))
{return or__3548__auto____11342;
} else
{var or__3548__auto____11343 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{var or__3548__auto____11344 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11344))
{return or__3548__auto____11344;
} else
{var or__3548__auto____11346 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{var or__3548__auto____11347 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11347))
{return or__3548__auto____11347;
} else
{var or__3548__auto____11445 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11445))
{return or__3548__auto____11445;
} else
{var or__3548__auto____11448 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11448))
{return or__3548__auto____11448;
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
var sp3__11562 = (function() { 
var G__11575__delegate = function (x,y,z,args){
var or__3548__auto____11452 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11452))
{return or__3548__auto____11452;
} else
{return cljs.core.some.call(null,(function (p1__10887_SHARP_){
var or__3548__auto____11454 = p1.call(null,p1__10887_SHARP_);

if(cljs.core.truth_(or__3548__auto____11454))
{return or__3548__auto____11454;
} else
{var or__3548__auto____11455 = p2.call(null,p1__10887_SHARP_);

if(cljs.core.truth_(or__3548__auto____11455))
{return or__3548__auto____11455;
} else
{return p3.call(null,p1__10887_SHARP_);
}
}
}),args);
}
};
var G__11575 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11575__delegate.call(this, x, y, z, args);
};
G__11575.cljs$lang$maxFixedArity = 3;
G__11575.cljs$lang$applyTo = (function (arglist__11577){
var x = cljs.core.first(arglist__11577);
var y = cljs.core.first(cljs.core.next(arglist__11577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11577)));
return G__11575__delegate.call(this, x, y, z, args);
});
return G__11575;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11557.call(this);
case  1 :
return sp3__11559.call(this,x);
case  2 :
return sp3__11560.call(this,x,y);
case  3 :
return sp3__11561.call(this,x,y,z);
default:
return sp3__11562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11562.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11494 = (function() { 
var G__11580__delegate = function (p1,p2,p3,ps){
var ps__11457 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11583 = (function (){
return null;
});
var spn__11584 = (function (x){
return cljs.core.some.call(null,(function (p1__10889_SHARP_){
return p1__10889_SHARP_.call(null,x);
}),ps__11457);
});
var spn__11585 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10890_SHARP_){
var or__3548__auto____11467 = p1__10890_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{return p1__10890_SHARP_.call(null,y);
}
}),ps__11457);
});
var spn__11586 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10891_SHARP_){
var or__3548__auto____11477 = p1__10891_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11477))
{return or__3548__auto____11477;
} else
{var or__3548__auto____11478 = p1__10891_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
} else
{return p1__10891_SHARP_.call(null,z);
}
}
}),ps__11457);
});
var spn__11587 = (function() { 
var G__11595__delegate = function (x,y,z,args){
var or__3548__auto____11483 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11483))
{return or__3548__auto____11483;
} else
{return cljs.core.some.call(null,(function (p1__10893_SHARP_){
return cljs.core.some.call(null,p1__10893_SHARP_,args);
}),ps__11457);
}
};
var G__11595 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11595__delegate.call(this, x, y, z, args);
};
G__11595.cljs$lang$maxFixedArity = 3;
G__11595.cljs$lang$applyTo = (function (arglist__11600){
var x = cljs.core.first(arglist__11600);
var y = cljs.core.first(cljs.core.next(arglist__11600));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11600)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11600)));
return G__11595__delegate.call(this, x, y, z, args);
});
return G__11595;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11583.call(this);
case  1 :
return spn__11584.call(this,x);
case  2 :
return spn__11585.call(this,x,y);
case  3 :
return spn__11586.call(this,x,y,z);
default:
return spn__11587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11587.cljs$lang$applyTo;
return spn;
})()
};
var G__11580 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11580__delegate.call(this, p1, p2, p3, ps);
};
G__11580.cljs$lang$maxFixedArity = 3;
G__11580.cljs$lang$applyTo = (function (arglist__11614){
var p1 = cljs.core.first(arglist__11614);
var p2 = cljs.core.first(cljs.core.next(arglist__11614));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11614)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11614)));
return G__11580__delegate.call(this, p1, p2, p3, ps);
});
return G__11580;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11491.call(this,p1);
case  2 :
return some_fn__11492.call(this,p1,p2);
case  3 :
return some_fn__11493.call(this,p1,p2,p3);
default:
return some_fn__11494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11494.cljs$lang$applyTo;
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
var map__11672 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11622 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11622))
{var s__11625 = temp__3698__auto____11622;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11625)),map.call(null,f,cljs.core.rest.call(null,s__11625)));
} else
{return null;
}
})));
});
var map__11673 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11629 = cljs.core.seq.call(null,c1);
var s2__11631 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11633 = s1__11629;

if(cljs.core.truth_(and__3546__auto____11633))
{return s2__11631;
} else
{return and__3546__auto____11633;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11629),cljs.core.first.call(null,s2__11631)),map.call(null,f,cljs.core.rest.call(null,s1__11629),cljs.core.rest.call(null,s2__11631)));
} else
{return null;
}
})));
});
var map__11674 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11639 = cljs.core.seq.call(null,c1);
var s2__11641 = cljs.core.seq.call(null,c2);
var s3__11642 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11644 = s1__11639;

if(cljs.core.truth_(and__3546__auto____11644))
{var and__3546__auto____11646 = s2__11641;

if(cljs.core.truth_(and__3546__auto____11646))
{return s3__11642;
} else
{return and__3546__auto____11646;
}
} else
{return and__3546__auto____11644;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11639),cljs.core.first.call(null,s2__11641),cljs.core.first.call(null,s3__11642)),map.call(null,f,cljs.core.rest.call(null,s1__11639),cljs.core.rest.call(null,s2__11641),cljs.core.rest.call(null,s3__11642)));
} else
{return null;
}
})));
});
var map__11675 = (function() { 
var G__11696__delegate = function (f,c1,c2,c3,colls){
var step__11664 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11660 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11660)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11660),step.call(null,map.call(null,cljs.core.rest,ss__11660)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11277_SHARP_){
return cljs.core.apply.call(null,f,p1__11277_SHARP_);
}),step__11664.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11696 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11696__delegate.call(this, f, c1, c2, c3, colls);
};
G__11696.cljs$lang$maxFixedArity = 4;
G__11696.cljs$lang$applyTo = (function (arglist__11706){
var f = cljs.core.first(arglist__11706);
var c1 = cljs.core.first(cljs.core.next(arglist__11706));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11706)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11706))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11706))));
return G__11696__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11696;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11672.call(this,f,c1);
case  3 :
return map__11673.call(this,f,c1,c2);
case  4 :
return map__11674.call(this,f,c1,c2,c3);
default:
return map__11675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11675.cljs$lang$applyTo;
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
{var temp__3698__auto____11715 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11715))
{var s__11716 = temp__3698__auto____11715;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11716),take.call(null,(n - 1),cljs.core.rest.call(null,s__11716)));
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
var step__11733 = (function (n,coll){
while(true){
var s__11731 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11732 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11732))
{return s__11731;
} else
{return and__3546__auto____11732;
}
})()))
{{
var G__11735 = (n - 1);
var G__11736 = cljs.core.rest.call(null,s__11731);
n = G__11735;
coll = G__11736;
continue;
}
} else
{return s__11731;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11733.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11740 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11741 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11740.call(this,n);
case  2 :
return drop_last__11741.call(this,n,s);
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
var s__11744 = cljs.core.seq.call(null,coll);
var lead__11746 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11746))
{{
var G__11755 = cljs.core.next.call(null,s__11744);
var G__11756 = cljs.core.next.call(null,lead__11746);
s__11744 = G__11755;
lead__11746 = G__11756;
continue;
}
} else
{return s__11744;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11762 = (function (pred,coll){
while(true){
var s__11757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11761 = s__11757;

if(cljs.core.truth_(and__3546__auto____11761))
{return pred.call(null,cljs.core.first.call(null,s__11757));
} else
{return and__3546__auto____11761;
}
})()))
{{
var G__11764 = pred;
var G__11765 = cljs.core.rest.call(null,s__11757);
pred = G__11764;
coll = G__11765;
continue;
}
} else
{return s__11757;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11762.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11768 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11768))
{var s__11769 = temp__3698__auto____11768;

return cljs.core.concat.call(null,s__11769,cycle.call(null,s__11769));
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
var repeat__11784 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11785 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11784.call(this,n);
case  2 :
return repeat__11785.call(this,n,x);
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
var repeatedly__11797 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11798 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11797.call(this,n);
case  2 :
return repeatedly__11798.call(this,n,f);
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
var interleave__11870 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11866 = cljs.core.seq.call(null,c1);
var s2__11867 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11868 = s1__11866;

if(cljs.core.truth_(and__3546__auto____11868))
{return s2__11867;
} else
{return and__3546__auto____11868;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11866),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11867),interleave.call(null,cljs.core.rest.call(null,s1__11866),cljs.core.rest.call(null,s2__11867))));
} else
{return null;
}
})));
});
var interleave__11871 = (function() { 
var G__11873__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11869 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11869)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11869),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11869)));
} else
{return null;
}
})));
};
var G__11873 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11873__delegate.call(this, c1, c2, colls);
};
G__11873.cljs$lang$maxFixedArity = 2;
G__11873.cljs$lang$applyTo = (function (arglist__11877){
var c1 = cljs.core.first(arglist__11877);
var c2 = cljs.core.first(cljs.core.next(arglist__11877));
var colls = cljs.core.rest(cljs.core.next(arglist__11877));
return G__11873__delegate.call(this, c1, c2, colls);
});
return G__11873;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11870.call(this,c1,c2);
default:
return interleave__11871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11871.cljs$lang$applyTo;
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
var cat__11888 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11882))
{var coll__11884 = temp__3695__auto____11882;

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

return cat__11888.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11898 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11899 = (function() { 
var G__11901__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11901 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11901__delegate.call(this, f, coll, colls);
};
G__11901.cljs$lang$maxFixedArity = 2;
G__11901.cljs$lang$applyTo = (function (arglist__11904){
var f = cljs.core.first(arglist__11904);
var coll = cljs.core.first(cljs.core.next(arglist__11904));
var colls = cljs.core.rest(cljs.core.next(arglist__11904));
return G__11901__delegate.call(this, f, coll, colls);
});
return G__11901;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11898.call(this,f,coll);
default:
return mapcat__11899.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11899.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11908 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11908))
{var s__11909 = temp__3698__auto____11908;

var f__11910 = cljs.core.first.call(null,s__11909);
var r__11911 = cljs.core.rest.call(null,s__11909);

if(cljs.core.truth_(pred.call(null,f__11910)))
{return cljs.core.cons.call(null,f__11910,filter.call(null,pred,r__11911));
} else
{return filter.call(null,pred,r__11911);
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
var walk__11923 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11923.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11920_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11920_SHARP_));
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
var partition__12072 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12073 = (function (n,step,coll){
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
var partition__12074 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12065))
{var s__12066 = temp__3698__auto____12065;

var p__12067 = cljs.core.take.call(null,n,s__12066);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12067))))
{return cljs.core.cons.call(null,p__12067,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12066)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12067,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12072.call(this,n,step);
case  3 :
return partition__12073.call(this,n,step,pad);
case  4 :
return partition__12074.call(this,n,step,pad,coll);
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
var get_in__12090 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12091 = (function (m,ks,not_found){
var sentinel__12082 = cljs.core.lookup_sentinel;
var m__12083 = m;
var ks__12084 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12084))
{var m__12085 = cljs.core.get.call(null,m__12083,cljs.core.first.call(null,ks__12084),sentinel__12082);

if(cljs.core.truth_((sentinel__12082 === m__12085)))
{return not_found;
} else
{{
var G__12093 = sentinel__12082;
var G__12094 = m__12085;
var G__12095 = cljs.core.next.call(null,ks__12084);
sentinel__12082 = G__12093;
m__12083 = G__12094;
ks__12084 = G__12095;
continue;
}
}
} else
{return m__12083;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12090.call(this,m,ks);
case  3 :
return get_in__12091.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12096,v){
var vec__12097__12098 = p__12096;
var k__12099 = cljs.core.nth.call(null,vec__12097__12098,0,null);
var ks__12100 = cljs.core.nthnext.call(null,vec__12097__12098,1);

if(cljs.core.truth_(ks__12100))
{return cljs.core.assoc.call(null,m,k__12099,assoc_in.call(null,cljs.core.get.call(null,m,k__12099),ks__12100,v));
} else
{return cljs.core.assoc.call(null,m,k__12099,v);
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
var update_in__delegate = function (m,p__12114,f,args){
var vec__12115__12117 = p__12114;
var k__12119 = cljs.core.nth.call(null,vec__12115__12117,0,null);
var ks__12121 = cljs.core.nthnext.call(null,vec__12115__12117,1);

if(cljs.core.truth_(ks__12121))
{return cljs.core.assoc.call(null,m,k__12119,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12119),ks__12121,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12119,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12119),args));
}
};
var update_in = function (m,p__12114,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12114, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12234){
var m = cljs.core.first(arglist__12234);
var p__12114 = cljs.core.first(cljs.core.next(arglist__12234));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12234)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12234)));
return update_in__delegate.call(this, m, p__12114, f, args);
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
var this__12237 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12291 = null;
var G__12291__12292 = (function (coll,k){
var this__12238 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12291__12293 = (function (coll,k,not_found){
var this__12240 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12291 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12291__12292.call(this,coll,k);
case  3 :
return G__12291__12293.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12291;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12243 = this;
var new_array__12244 = cljs.core.aclone.call(null,this__12243.array);

(new_array__12244[k] = v);
return (new cljs.core.Vector(this__12243.meta,new_array__12244));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12301 = null;
var G__12301__12302 = (function (coll,k){
var this__12246 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12301__12303 = (function (coll,k,not_found){
var this__12247 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12301 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12301__12302.call(this,coll,k);
case  3 :
return G__12301__12303.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12301;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12252 = this;
var new_array__12253 = cljs.core.aclone.call(null,this__12252.array);

new_array__12253.push(o);
return (new cljs.core.Vector(this__12252.meta,new_array__12253));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12316 = null;
var G__12316__12317 = (function (v,f){
var this__12254 = this;
return cljs.core.ci_reduce.call(null,this__12254.array,f);
});
var G__12316__12318 = (function (v,f,start){
var this__12255 = this;
return cljs.core.ci_reduce.call(null,this__12255.array,f,start);
});
G__12316 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12316__12317.call(this,v,f);
case  3 :
return G__12316__12318.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12316;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12256 = this;
if(cljs.core.truth_((this__12256.array.length > 0)))
{var vector_seq__12258 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12256.array.length)))
{return cljs.core.cons.call(null,(this__12256.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12258.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12259 = this;
return this__12259.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12262 = this;
var count__12263 = this__12262.array.length;

if(cljs.core.truth_((count__12263 > 0)))
{return (this__12262.array[(count__12263 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12266 = this;
if(cljs.core.truth_((this__12266.array.length > 0)))
{var new_array__12267 = cljs.core.aclone.call(null,this__12266.array);

new_array__12267.pop();
return (new cljs.core.Vector(this__12266.meta,new_array__12267));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12269 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12271 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12273 = this;
return (new cljs.core.Vector(meta,this__12273.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12275 = this;
return this__12275.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12444 = null;
var G__12444__12445 = (function (coll,n){
var this__12277 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12278 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12278))
{return (n < this__12277.array.length);
} else
{return and__3546__auto____12278;
}
})()))
{return (this__12277.array[n]);
} else
{return null;
}
});
var G__12444__12446 = (function (coll,n,not_found){
var this__12280 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12281 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12281))
{return (n < this__12280.array.length);
} else
{return and__3546__auto____12281;
}
})()))
{return (this__12280.array[n]);
} else
{return not_found;
}
});
G__12444 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12444__12445.call(this,coll,n);
case  3 :
return G__12444__12446.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12444;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12283 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12283.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12459){
var args = cljs.core.seq( arglist__12459 );;
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
var this__12471 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12510 = null;
var G__12510__12511 = (function (coll,k){
var this__12474 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12510__12512 = (function (coll,k,not_found){
var this__12475 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12510 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12510__12511.call(this,coll,k);
case  3 :
return G__12510__12512.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12510;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12480 = this;
var v_pos__12481 = (this__12480.start + key);

return (new cljs.core.Subvec(this__12480.meta,cljs.core._assoc.call(null,this__12480.v,v_pos__12481,val),this__12480.start,((this__12480.end > (v_pos__12481 + 1)) ? this__12480.end : (v_pos__12481 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12520 = null;
var G__12520__12521 = (function (coll,k){
var this__12482 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12520__12522 = (function (coll,k,not_found){
var this__12483 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12520 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12520__12521.call(this,coll,k);
case  3 :
return G__12520__12522.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12520;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12484 = this;
return (new cljs.core.Subvec(this__12484.meta,cljs.core._assoc_n.call(null,this__12484.v,this__12484.end,o),this__12484.start,(this__12484.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12530 = null;
var G__12530__12531 = (function (coll,f){
var this__12485 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12530__12532 = (function (coll,f,start){
var this__12494 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12530 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12530__12531.call(this,coll,f);
case  3 :
return G__12530__12532.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12530;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12495 = this;
var subvec_seq__12496 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12495.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12495.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12496.call(null,this__12495.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12497 = this;
return (this__12497.end - this__12497.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12498 = this;
return cljs.core._nth.call(null,this__12498.v,(this__12498.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12499 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12499.start,this__12499.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12499.meta,this__12499.v,this__12499.start,(this__12499.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12501 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12502 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12503 = this;
return (new cljs.core.Subvec(meta,this__12503.v,this__12503.start,this__12503.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12504 = this;
return this__12504.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12544 = null;
var G__12544__12545 = (function (coll,n){
var this__12505 = this;
return cljs.core._nth.call(null,this__12505.v,(this__12505.start + n));
});
var G__12544__12546 = (function (coll,n,not_found){
var this__12506 = this;
return cljs.core._nth.call(null,this__12506.v,(this__12506.start + n),not_found);
});
G__12544 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12544__12545.call(this,coll,n);
case  3 :
return G__12544__12546.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12544;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12507 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12507.meta);
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
var subvec__12564 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12565 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12564.call(this,v,start);
case  3 :
return subvec__12565.call(this,v,start,end);
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
var this__12627 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12632 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12633 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12633.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12636 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12639 = this;
return cljs.core._first.call(null,this__12639.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12640 = this;
var temp__3695__auto____12641 = cljs.core.next.call(null,this__12640.front);

if(cljs.core.truth_(temp__3695__auto____12641))
{var f1__12642 = temp__3695__auto____12641;

return (new cljs.core.PersistentQueueSeq(this__12640.meta,f1__12642,this__12640.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12640.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12640.meta,this__12640.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12647 = this;
return this__12647.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12648 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12648.front,this__12648.rear));
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
var this__12674 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12677 = this;
if(cljs.core.truth_(this__12677.front))
{return (new cljs.core.PersistentQueue(this__12677.meta,(this__12677.count + 1),this__12677.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12679 = this__12677.rear;

if(cljs.core.truth_(or__3548__auto____12679))
{return or__3548__auto____12679;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12677.meta,(this__12677.count + 1),cljs.core.conj.call(null,this__12677.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12681 = this;
var rear__12683 = cljs.core.seq.call(null,this__12681.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12685 = this__12681.front;

if(cljs.core.truth_(or__3548__auto____12685))
{return or__3548__auto____12685;
} else
{return rear__12683;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12681.front,cljs.core.seq.call(null,rear__12683)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12691 = this;
return this__12691.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12693 = this;
return cljs.core._first.call(null,this__12693.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12695 = this;
if(cljs.core.truth_(this__12695.front))
{var temp__3695__auto____12696 = cljs.core.next.call(null,this__12695.front);

if(cljs.core.truth_(temp__3695__auto____12696))
{var f1__12698 = temp__3695__auto____12696;

return (new cljs.core.PersistentQueue(this__12695.meta,(this__12695.count - 1),f1__12698,this__12695.rear));
} else
{return (new cljs.core.PersistentQueue(this__12695.meta,(this__12695.count - 1),cljs.core.seq.call(null,this__12695.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12701 = this;
return cljs.core.first.call(null,this__12701.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12704 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12705 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12710 = this;
return (new cljs.core.PersistentQueue(meta,this__12710.count,this__12710.front,this__12710.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12712 = this;
return this__12712.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12713 = this;
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
var this__12751 = this;
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
var len__12781 = array.length;

var i__12782 = 0;

while(true){
if(cljs.core.truth_((i__12782 < len__12781)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12782]))))
{return i__12782;
} else
{{
var G__12788 = (i__12782 + incr);
i__12782 = G__12788;
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
var obj_map_contains_key_QMARK___12798 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12799 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12796 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12796))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12796;
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
return obj_map_contains_key_QMARK___12798.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12799.call(this,k,strobj,true_val,false_val);
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
var this__12813 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12921 = null;
var G__12921__12922 = (function (coll,k){
var this__12814 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12921__12924 = (function (coll,k,not_found){
var this__12815 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12815.strobj,(this__12815.strobj[k]),not_found);
});
G__12921 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12921__12922.call(this,coll,k);
case  3 :
return G__12921__12924.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12921;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12858 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12861 = goog.object.clone.call(null,this__12858.strobj);
var overwrite_QMARK___12864 = new_strobj__12861.hasOwnProperty(k);

(new_strobj__12861[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12864))
{return (new cljs.core.ObjMap(this__12858.meta,this__12858.keys,new_strobj__12861));
} else
{var new_keys__12866 = cljs.core.aclone.call(null,this__12858.keys);

new_keys__12866.push(k);
return (new cljs.core.ObjMap(this__12858.meta,new_keys__12866,new_strobj__12861));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12858.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12869 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12869.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12938 = null;
var G__12938__12941 = (function (coll,k){
var this__12872 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12938__12942 = (function (coll,k,not_found){
var this__12874 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12938 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12938__12941.call(this,coll,k);
case  3 :
return G__12938__12942.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12938;
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
var this__12886 = this;
if(cljs.core.truth_((this__12886.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12807_SHARP_){
return cljs.core.vector.call(null,p1__12807_SHARP_,(this__12886.strobj[p1__12807_SHARP_]));
}),this__12886.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12891 = this;
return this__12891.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12894 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12898 = this;
return (new cljs.core.ObjMap(meta,this__12898.keys,this__12898.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12902 = this;
return this__12902.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12906 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12906.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12909 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12910 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12910))
{return this__12909.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12910;
}
})()))
{var new_keys__12912 = cljs.core.aclone.call(null,this__12909.keys);
var new_strobj__12914 = goog.object.clone.call(null,this__12909.strobj);

new_keys__12912.splice(cljs.core.scan_array.call(null,1,k,new_keys__12912),1);
cljs.core.js_delete.call(null,new_strobj__12914,k);
return (new cljs.core.ObjMap(this__12909.meta,new_keys__12912,new_strobj__12914));
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
var this__12983 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13093 = null;
var G__13093__13094 = (function (coll,k){
var this__12985 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13093__13095 = (function (coll,k,not_found){
var this__12986 = this;
var bucket__12988 = (this__12986.hashobj[cljs.core.hash.call(null,k)]);
var i__12991 = (cljs.core.truth_(bucket__12988)?cljs.core.scan_array.call(null,2,k,bucket__12988):null);

if(cljs.core.truth_(i__12991))
{return (bucket__12988[(i__12991 + 1)]);
} else
{return not_found;
}
});
G__13093 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13093__13094.call(this,coll,k);
case  3 :
return G__13093__13095.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13093;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12993 = this;
var h__12994 = cljs.core.hash.call(null,k);
var bucket__12995 = (this__12993.hashobj[h__12994]);

if(cljs.core.truth_(bucket__12995))
{var new_bucket__12997 = cljs.core.aclone.call(null,bucket__12995);
var new_hashobj__12998 = goog.object.clone.call(null,this__12993.hashobj);

(new_hashobj__12998[h__12994] = new_bucket__12997);
var temp__3695__auto____13000 = cljs.core.scan_array.call(null,2,k,new_bucket__12997);

if(cljs.core.truth_(temp__3695__auto____13000))
{var i__13001 = temp__3695__auto____13000;

(new_bucket__12997[(i__13001 + 1)] = v);
return (new cljs.core.HashMap(this__12993.meta,this__12993.count,new_hashobj__12998));
} else
{new_bucket__12997.push(k,v);
return (new cljs.core.HashMap(this__12993.meta,(this__12993.count + 1),new_hashobj__12998));
}
} else
{var new_hashobj__13008 = goog.object.clone.call(null,this__12993.hashobj);

(new_hashobj__13008[h__12994] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12993.meta,(this__12993.count + 1),new_hashobj__13008));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13009 = this;
var bucket__13012 = (this__13009.hashobj[cljs.core.hash.call(null,k)]);
var i__13014 = (cljs.core.truth_(bucket__13012)?cljs.core.scan_array.call(null,2,k,bucket__13012):null);

if(cljs.core.truth_(i__13014))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13101 = null;
var G__13101__13102 = (function (coll,k){
var this__13018 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13101__13103 = (function (coll,k,not_found){
var this__13019 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13101 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13101__13102.call(this,coll,k);
case  3 :
return G__13101__13103.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13101;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13023 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13027 = this;
if(cljs.core.truth_((this__13027.count > 0)))
{var hashes__13036 = cljs.core.js_keys.call(null,this__13027.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12972_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13027.hashobj[p1__12972_SHARP_])));
}),hashes__13036);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13040 = this;
return this__13040.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13042 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13044 = this;
return (new cljs.core.HashMap(meta,this__13044.count,this__13044.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13048 = this;
return this__13048.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13051 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13051.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13056 = this;
var h__13059 = cljs.core.hash.call(null,k);
var bucket__13062 = (this__13056.hashobj[h__13059]);
var i__13064 = (cljs.core.truth_(bucket__13062)?cljs.core.scan_array.call(null,2,k,bucket__13062):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13064)))
{return coll;
} else
{var new_hashobj__13067 = goog.object.clone.call(null,this__13056.hashobj);

if(cljs.core.truth_((3 > bucket__13062.length)))
{cljs.core.js_delete.call(null,new_hashobj__13067,h__13059);
} else
{var new_bucket__13085 = cljs.core.aclone.call(null,bucket__13062);

new_bucket__13085.splice(i__13064,2);
(new_hashobj__13067[h__13059] = new_bucket__13085);
}
return (new cljs.core.HashMap(this__13056.meta,(this__13056.count - 1),new_hashobj__13067));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13131 = ks.length;

var i__13132 = 0;
var out__13133 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13132 < len__13131)))
{{
var G__13139 = (i__13132 + 1);
var G__13140 = cljs.core.assoc.call(null,out__13133,(ks[i__13132]),(vs[i__13132]));
i__13132 = G__13139;
out__13133 = G__13140;
continue;
}
} else
{return out__13133;
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
var in$__13146 = cljs.core.seq.call(null,keyvals);
var out__13147 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13146))
{{
var G__13154 = cljs.core.nnext.call(null,in$__13146);
var G__13156 = cljs.core.assoc.call(null,out__13147,cljs.core.first.call(null,in$__13146),cljs.core.second.call(null,in$__13146));
in$__13146 = G__13154;
out__13147 = G__13156;
continue;
}
} else
{return out__13147;
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
hash_map.cljs$lang$applyTo = (function (arglist__13158){
var keyvals = cljs.core.seq( arglist__13158 );;
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
{return cljs.core.reduce.call(null,(function (p1__13167_SHARP_,p2__13168_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13169 = p1__13167_SHARP_;

if(cljs.core.truth_(or__3548__auto____13169))
{return or__3548__auto____13169;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13168_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13268){
var maps = cljs.core.seq( arglist__13268 );;
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
{var merge_entry__13278 = (function (m,e){
var k__13273 = cljs.core.first.call(null,e);
var v__13275 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13273)))
{return cljs.core.assoc.call(null,m,k__13273,f.call(null,cljs.core.get.call(null,m,k__13273),v__13275));
} else
{return cljs.core.assoc.call(null,m,k__13273,v__13275);
}
});
var merge2__13285 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13278,(function (){var or__3548__auto____13282 = m1;

if(cljs.core.truth_(or__3548__auto____13282))
{return or__3548__auto____13282;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13285,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13293){
var f = cljs.core.first(arglist__13293);
var maps = cljs.core.rest(arglist__13293);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13324 = cljs.core.ObjMap.fromObject([],{});
var keys__13326 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13326))
{var key__13327 = cljs.core.first.call(null,keys__13326);
var entry__13328 = cljs.core.get.call(null,map,key__13327,"﷐'user/not-found");

{
var G__13331 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13328,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13324,key__13327,entry__13328):ret__13324);
var G__13332 = cljs.core.next.call(null,keys__13326);
ret__13324 = G__13331;
keys__13326 = G__13332;
continue;
}
} else
{return ret__13324;
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
var this__13390 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13455 = null;
var G__13455__13458 = (function (coll,v){
var this__13391 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13455__13460 = (function (coll,v,not_found){
var this__13392 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13392.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13455 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13455__13458.call(this,coll,v);
case  3 :
return G__13455__13460.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13455;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13465 = null;
var G__13465__13467 = (function (coll,k){
var this__13394 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13465__13469 = (function (coll,k,not_found){
var this__13408 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13465 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13465__13467.call(this,coll,k);
case  3 :
return G__13465__13469.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13465;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13413 = this;
return (new cljs.core.Set(this__13413.meta,cljs.core.assoc.call(null,this__13413.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13418 = this;
return cljs.core.keys.call(null,this__13418.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13422 = this;
return (new cljs.core.Set(this__13422.meta,cljs.core.dissoc.call(null,this__13422.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13424 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13428 = this;
var and__3546__auto____13431 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13431))
{var and__3546__auto____13433 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13433))
{return cljs.core.every_QMARK_.call(null,(function (p1__13321_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13321_SHARP_);
}),other);
} else
{return and__3546__auto____13433;
}
} else
{return and__3546__auto____13431;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13437 = this;
return (new cljs.core.Set(meta,this__13437.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13439 = this;
return this__13439.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13441 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13441.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13493 = cljs.core.seq.call(null,coll);
var out__13494 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13493))))
{{
var G__13500 = cljs.core.rest.call(null,in$__13493);
var G__13501 = cljs.core.conj.call(null,out__13494,cljs.core.first.call(null,in$__13493));
in$__13493 = G__13500;
out__13494 = G__13501;
continue;
}
} else
{return out__13494;
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
{var n__13507 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13510 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13510))
{var e__13513 = temp__3695__auto____13510;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13513));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13507,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13490_SHARP_){
var temp__3695__auto____13514 = cljs.core.find.call(null,smap,p1__13490_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13514))
{var e__13515 = temp__3695__auto____13514;

return cljs.core.second.call(null,e__13515);
} else
{return p1__13490_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13541 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13527,seen){
while(true){
var vec__13528__13529 = p__13527;
var f__13530 = cljs.core.nth.call(null,vec__13528__13529,0,null);
var xs__13532 = vec__13528__13529;

var temp__3698__auto____13536 = cljs.core.seq.call(null,xs__13532);

if(cljs.core.truth_(temp__3698__auto____13536))
{var s__13538 = temp__3698__auto____13536;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13530)))
{{
var G__13645 = cljs.core.rest.call(null,s__13538);
var G__13647 = seen;
p__13527 = G__13645;
seen = G__13647;
continue;
}
} else
{return cljs.core.cons.call(null,f__13530,step.call(null,cljs.core.rest.call(null,s__13538),cljs.core.conj.call(null,seen,f__13530)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13541.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13651 = cljs.core.Vector.fromArray([]);
var s__13652 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13652)))
{{
var G__13655 = cljs.core.conj.call(null,ret__13651,cljs.core.first.call(null,s__13652));
var G__13656 = cljs.core.next.call(null,s__13652);
ret__13651 = G__13655;
s__13652 = G__13656;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13651);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13741 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13741))
{return or__3548__auto____13741;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13743 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13743 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13743 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13763 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13763))
{return or__3548__auto____13763;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13764 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13764 > -1)))
{return cljs.core.subs.call(null,x,2,i__13764);
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
var map__13779 = cljs.core.ObjMap.fromObject([],{});
var ks__13780 = cljs.core.seq.call(null,keys);
var vs__13781 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13783 = ks__13780;

if(cljs.core.truth_(and__3546__auto____13783))
{return vs__13781;
} else
{return and__3546__auto____13783;
}
})()))
{{
var G__13798 = cljs.core.assoc.call(null,map__13779,cljs.core.first.call(null,ks__13780),cljs.core.first.call(null,vs__13781));
var G__13799 = cljs.core.next.call(null,ks__13780);
var G__13800 = cljs.core.next.call(null,vs__13781);
map__13779 = G__13798;
ks__13780 = G__13799;
vs__13781 = G__13800;
continue;
}
} else
{return map__13779;
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
var max_key__13813 = (function (k,x){
return x;
});
var max_key__13814 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13815 = (function() { 
var G__13818__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13776_SHARP_,p2__13778_SHARP_){
return max_key.call(null,k,p1__13776_SHARP_,p2__13778_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13818 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13818__delegate.call(this, k, x, y, more);
};
G__13818.cljs$lang$maxFixedArity = 3;
G__13818.cljs$lang$applyTo = (function (arglist__13828){
var k = cljs.core.first(arglist__13828);
var x = cljs.core.first(cljs.core.next(arglist__13828));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13828)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13828)));
return G__13818__delegate.call(this, k, x, y, more);
});
return G__13818;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13813.call(this,k,x);
case  3 :
return max_key__13814.call(this,k,x,y);
default:
return max_key__13815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13815.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13836 = (function (k,x){
return x;
});
var min_key__13837 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13838 = (function() { 
var G__13852__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13805_SHARP_,p2__13806_SHARP_){
return min_key.call(null,k,p1__13805_SHARP_,p2__13806_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13852 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13852__delegate.call(this, k, x, y, more);
};
G__13852.cljs$lang$maxFixedArity = 3;
G__13852.cljs$lang$applyTo = (function (arglist__13855){
var k = cljs.core.first(arglist__13855);
var x = cljs.core.first(cljs.core.next(arglist__13855));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13855)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13855)));
return G__13852__delegate.call(this, k, x, y, more);
});
return G__13852;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13836.call(this,k,x);
case  3 :
return min_key__13837.call(this,k,x,y);
default:
return min_key__13838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13838.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13871 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13872 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13863))
{var s__13865 = temp__3698__auto____13863;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13865),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13865)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13871.call(this,n,step);
case  3 :
return partition_all__13872.call(this,n,step,coll);
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
var temp__3698__auto____13878 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13878))
{var s__13879 = temp__3698__auto____13878;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13879))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13879),take_while.call(null,pred,cljs.core.rest.call(null,s__13879)));
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
var this__13895 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13897 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13964 = null;
var G__13964__13965 = (function (rng,f){
var this__13900 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13964__13966 = (function (rng,f,s){
var this__13902 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13964 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13964__13965.call(this,rng,f);
case  3 :
return G__13964__13966.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13964;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13904 = this;
var comp__13906 = (cljs.core.truth_((this__13904.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13906.call(null,this__13904.start,this__13904.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13908 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13908.end - this__13908.start) / this__13908.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13921 = this;
return this__13921.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13925 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13925.meta,(this__13925.start + this__13925.step),this__13925.end,this__13925.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13927 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13930 = this;
return (new cljs.core.Range(meta,this__13930.start,this__13930.end,this__13930.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13934 = this;
return this__13934.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13991 = null;
var G__13991__13992 = (function (rng,n){
var this__13937 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13937.start + (n * this__13937.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13950 = (this__13937.start > this__13937.end);

if(cljs.core.truth_(and__3546__auto____13950))
{return cljs.core._EQ_.call(null,this__13937.step,0);
} else
{return and__3546__auto____13950;
}
})()))
{return this__13937.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13991__13993 = (function (rng,n,not_found){
var this__13951 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13951.start + (n * this__13951.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13953 = (this__13951.start > this__13951.end);

if(cljs.core.truth_(and__3546__auto____13953))
{return cljs.core._EQ_.call(null,this__13951.step,0);
} else
{return and__3546__auto____13953;
}
})()))
{return this__13951.start;
} else
{return not_found;
}
}
});
G__13991 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13991__13992.call(this,rng,n);
case  3 :
return G__13991__13993.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13991;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13954 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13954.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14026 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14027 = (function (end){
return range.call(null,0,end,1);
});
var range__14028 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14029 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14026.call(this);
case  1 :
return range__14027.call(this,start);
case  2 :
return range__14028.call(this,start,end);
case  3 :
return range__14029.call(this,start,end,step);
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
var temp__3698__auto____14037 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14037))
{var s__14040 = temp__3698__auto____14037;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14040),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14040)));
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
var temp__3698__auto____14118 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14118))
{var s__14124 = temp__3698__auto____14118;

var fst__14125 = cljs.core.first.call(null,s__14124);
var fv__14126 = f.call(null,fst__14125);
var run__14127 = cljs.core.cons.call(null,fst__14125,cljs.core.take_while.call(null,(function (p1__14060_SHARP_){
return cljs.core._EQ_.call(null,fv__14126,f.call(null,p1__14060_SHARP_));
}),cljs.core.next.call(null,s__14124)));

return cljs.core.cons.call(null,run__14127,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14127),s__14124))));
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
var reductions__14188 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14174))
{var s__14175 = temp__3695__auto____14174;

return reductions.call(null,f,cljs.core.first.call(null,s__14175),cljs.core.rest.call(null,s__14175));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14189 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14183))
{var s__14184 = temp__3698__auto____14183;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14184)),cljs.core.rest.call(null,s__14184));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14188.call(this,f,init);
case  3 :
return reductions__14189.call(this,f,init,coll);
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
var juxt__14221 = (function (f){
return (function() {
var G__14226 = null;
var G__14226__14227 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14226__14228 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14226__14229 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14226__14230 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14226__14231 = (function() { 
var G__14234__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14234__delegate.call(this, x, y, z, args);
};
G__14234.cljs$lang$maxFixedArity = 3;
G__14234.cljs$lang$applyTo = (function (arglist__14238){
var x = cljs.core.first(arglist__14238);
var y = cljs.core.first(cljs.core.next(arglist__14238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14238)));
return G__14234__delegate.call(this, x, y, z, args);
});
return G__14234;
})()
;
G__14226 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14226__14227.call(this);
case  1 :
return G__14226__14228.call(this,x);
case  2 :
return G__14226__14229.call(this,x,y);
case  3 :
return G__14226__14230.call(this,x,y,z);
default:
return G__14226__14231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14226.cljs$lang$maxFixedArity = 3;
G__14226.cljs$lang$applyTo = G__14226__14231.cljs$lang$applyTo;
return G__14226;
})()
});
var juxt__14222 = (function (f,g){
return (function() {
var G__14240 = null;
var G__14240__14243 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14240__14244 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14240__14245 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14240__14246 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14240__14247 = (function() { 
var G__14263__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14263 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14263__delegate.call(this, x, y, z, args);
};
G__14263.cljs$lang$maxFixedArity = 3;
G__14263.cljs$lang$applyTo = (function (arglist__14264){
var x = cljs.core.first(arglist__14264);
var y = cljs.core.first(cljs.core.next(arglist__14264));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14264)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14264)));
return G__14263__delegate.call(this, x, y, z, args);
});
return G__14263;
})()
;
G__14240 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14240__14243.call(this);
case  1 :
return G__14240__14244.call(this,x);
case  2 :
return G__14240__14245.call(this,x,y);
case  3 :
return G__14240__14246.call(this,x,y,z);
default:
return G__14240__14247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14240.cljs$lang$maxFixedArity = 3;
G__14240.cljs$lang$applyTo = G__14240__14247.cljs$lang$applyTo;
return G__14240;
})()
});
var juxt__14223 = (function (f,g,h){
return (function() {
var G__14265 = null;
var G__14265__14267 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14265__14268 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14265__14269 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14265__14270 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14265__14271 = (function() { 
var G__14283__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14283 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14283__delegate.call(this, x, y, z, args);
};
G__14283.cljs$lang$maxFixedArity = 3;
G__14283.cljs$lang$applyTo = (function (arglist__14291){
var x = cljs.core.first(arglist__14291);
var y = cljs.core.first(cljs.core.next(arglist__14291));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14291)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14291)));
return G__14283__delegate.call(this, x, y, z, args);
});
return G__14283;
})()
;
G__14265 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14265__14267.call(this);
case  1 :
return G__14265__14268.call(this,x);
case  2 :
return G__14265__14269.call(this,x,y);
case  3 :
return G__14265__14270.call(this,x,y,z);
default:
return G__14265__14271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14265.cljs$lang$maxFixedArity = 3;
G__14265.cljs$lang$applyTo = G__14265__14271.cljs$lang$applyTo;
return G__14265;
})()
});
var juxt__14224 = (function() { 
var G__14296__delegate = function (f,g,h,fs){
var fs__14216 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14298 = null;
var G__14298__14300 = (function (){
return cljs.core.reduce.call(null,(function (p1__14145_SHARP_,p2__14148_SHARP_){
return cljs.core.conj.call(null,p1__14145_SHARP_,p2__14148_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14216);
});
var G__14298__14301 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14150_SHARP_,p2__14151_SHARP_){
return cljs.core.conj.call(null,p1__14150_SHARP_,p2__14151_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14216);
});
var G__14298__14302 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14154_SHARP_,p2__14157_SHARP_){
return cljs.core.conj.call(null,p1__14154_SHARP_,p2__14157_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14216);
});
var G__14298__14303 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14162_SHARP_,p2__14163_SHARP_){
return cljs.core.conj.call(null,p1__14162_SHARP_,p2__14163_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14216);
});
var G__14298__14304 = (function() { 
var G__14313__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14164_SHARP_,p2__14167_SHARP_){
return cljs.core.conj.call(null,p1__14164_SHARP_,cljs.core.apply.call(null,p2__14167_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14216);
};
var G__14313 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14313__delegate.call(this, x, y, z, args);
};
G__14313.cljs$lang$maxFixedArity = 3;
G__14313.cljs$lang$applyTo = (function (arglist__14314){
var x = cljs.core.first(arglist__14314);
var y = cljs.core.first(cljs.core.next(arglist__14314));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14314)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14314)));
return G__14313__delegate.call(this, x, y, z, args);
});
return G__14313;
})()
;
G__14298 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14298__14300.call(this);
case  1 :
return G__14298__14301.call(this,x);
case  2 :
return G__14298__14302.call(this,x,y);
case  3 :
return G__14298__14303.call(this,x,y,z);
default:
return G__14298__14304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14298.cljs$lang$maxFixedArity = 3;
G__14298.cljs$lang$applyTo = G__14298__14304.cljs$lang$applyTo;
return G__14298;
})()
};
var G__14296 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14296__delegate.call(this, f, g, h, fs);
};
G__14296.cljs$lang$maxFixedArity = 3;
G__14296.cljs$lang$applyTo = (function (arglist__14320){
var f = cljs.core.first(arglist__14320);
var g = cljs.core.first(cljs.core.next(arglist__14320));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14320)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14320)));
return G__14296__delegate.call(this, f, g, h, fs);
});
return G__14296;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14221.call(this,f);
case  2 :
return juxt__14222.call(this,f,g);
case  3 :
return juxt__14223.call(this,f,g,h);
default:
return juxt__14224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14224.cljs$lang$applyTo;
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
var dorun__14340 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14344 = cljs.core.next.call(null,coll);
coll = G__14344;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14341 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14331))
{return (n > 0);
} else
{return and__3546__auto____14331;
}
})()))
{{
var G__14347 = (n - 1);
var G__14349 = cljs.core.next.call(null,coll);
n = G__14347;
coll = G__14349;
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
return dorun__14340.call(this,n);
case  2 :
return dorun__14341.call(this,n,coll);
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
var doall__14357 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14358 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14357.call(this,n);
case  2 :
return doall__14358.call(this,n,coll);
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
var matches__14369 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14369),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14369),1)))
{return cljs.core.first.call(null,matches__14369);
} else
{return cljs.core.vec.call(null,matches__14369);
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
var matches__14392 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14392)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14392),1)))
{return cljs.core.first.call(null,matches__14392);
} else
{return cljs.core.vec.call(null,matches__14392);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14411 = cljs.core.re_find.call(null,re,s);
var match_idx__14412 = s.search(re);
var match_str__14413 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14411))?cljs.core.first.call(null,match_data__14411):match_data__14411);
var post_match__14414 = cljs.core.subs.call(null,s,(match_idx__14412 + cljs.core.count.call(null,match_str__14413)));

if(cljs.core.truth_(match_data__14411))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14411,re_seq.call(null,re,post_match__14414));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14420_SHARP_){
return print_one.call(null,p1__14420_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14445 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14445))
{var and__3546__auto____14457 = (function (){var x__445__auto____14448 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14450 = x__445__auto____14448;

if(cljs.core.truth_(and__3546__auto____14450))
{var and__3546__auto____14454 = x__445__auto____14448.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14454))
{return cljs.core.not.call(null,x__445__auto____14448.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14454;
}
} else
{return and__3546__auto____14450;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14448);
}
})();

if(cljs.core.truth_(and__3546__auto____14457))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14457;
}
} else
{return and__3546__auto____14445;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14460 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14462 = x__445__auto____14460;

if(cljs.core.truth_(and__3546__auto____14462))
{var and__3546__auto____14464 = x__445__auto____14460.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14464))
{return cljs.core.not.call(null,x__445__auto____14460.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14464;
}
} else
{return and__3546__auto____14462;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14460);
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
var first_obj__14477 = cljs.core.first.call(null,objs);
var sb__14478 = (new goog.string.StringBuffer());

var G__14479__14481 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14479__14481))
{var obj__14482 = cljs.core.first.call(null,G__14479__14481);
var G__14479__14483 = G__14479__14481;

while(true){
if(cljs.core.truth_((obj__14482 === first_obj__14477)))
{} else
{sb__14478.append(" ");
}
var G__14484__14485 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14482,opts));

if(cljs.core.truth_(G__14484__14485))
{var string__14486 = cljs.core.first.call(null,G__14484__14485);
var G__14484__14487 = G__14484__14485;

while(true){
sb__14478.append(string__14486);
var temp__3698__auto____14488 = cljs.core.next.call(null,G__14484__14487);

if(cljs.core.truth_(temp__3698__auto____14488))
{var G__14484__14489 = temp__3698__auto____14488;

{
var G__14497 = cljs.core.first.call(null,G__14484__14489);
var G__14499 = G__14484__14489;
string__14486 = G__14497;
G__14484__14487 = G__14499;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14491 = cljs.core.next.call(null,G__14479__14483);

if(cljs.core.truth_(temp__3698__auto____14491))
{var G__14479__14492 = temp__3698__auto____14491;

{
var G__14502 = cljs.core.first.call(null,G__14479__14492);
var G__14503 = G__14479__14492;
obj__14482 = G__14502;
G__14479__14483 = G__14503;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14478);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14506 = cljs.core.first.call(null,objs);

var G__14507__14508 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14507__14508))
{var obj__14510 = cljs.core.first.call(null,G__14507__14508);
var G__14507__14511 = G__14507__14508;

while(true){
if(cljs.core.truth_((obj__14510 === first_obj__14506)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14512__14513 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14510,opts));

if(cljs.core.truth_(G__14512__14513))
{var string__14514 = cljs.core.first.call(null,G__14512__14513);
var G__14512__14515 = G__14512__14513;

while(true){
cljs.core.string_print.call(null,string__14514);
var temp__3698__auto____14517 = cljs.core.next.call(null,G__14512__14515);

if(cljs.core.truth_(temp__3698__auto____14517))
{var G__14512__14518 = temp__3698__auto____14517;

{
var G__14525 = cljs.core.first.call(null,G__14512__14518);
var G__14526 = G__14512__14518;
string__14514 = G__14525;
G__14512__14515 = G__14526;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14519 = cljs.core.next.call(null,G__14507__14511);

if(cljs.core.truth_(temp__3698__auto____14519))
{var G__14507__14520 = temp__3698__auto____14519;

{
var G__14527 = cljs.core.first.call(null,G__14507__14520);
var G__14528 = G__14507__14520;
obj__14510 = G__14527;
G__14507__14511 = G__14528;
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
pr_str.cljs$lang$applyTo = (function (arglist__14536){
var objs = cljs.core.seq( arglist__14536 );;
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
pr.cljs$lang$applyTo = (function (arglist__14539){
var objs = cljs.core.seq( arglist__14539 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14540){
var objs = cljs.core.seq( arglist__14540 );;
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
println.cljs$lang$applyTo = (function (arglist__14541){
var objs = cljs.core.seq( arglist__14541 );;
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
prn.cljs$lang$applyTo = (function (arglist__14560){
var objs = cljs.core.seq( arglist__14560 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14569 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14569,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14576 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14576))
{var nspc__14577 = temp__3698__auto____14576;

return cljs.core.str.call(null,nspc__14577,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14578 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14578))
{var nspc__14579 = temp__3698__auto____14578;

return cljs.core.str.call(null,nspc__14579,"/");
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
var pr_pair__14612 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14612,"{",", ","}",opts,coll);
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
var this__14659 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14662 = this;
var G__14665__14666 = cljs.core.seq.call(null,this__14662.watches);

if(cljs.core.truth_(G__14665__14666))
{var G__14668__14670 = cljs.core.first.call(null,G__14665__14666);
var vec__14669__14671 = G__14668__14670;
var key__14672 = cljs.core.nth.call(null,vec__14669__14671,0,null);
var f__14673 = cljs.core.nth.call(null,vec__14669__14671,1,null);
var G__14665__14674 = G__14665__14666;

var G__14668__14675 = G__14668__14670;
var G__14665__14676 = G__14665__14674;

while(true){
var vec__14677__14678 = G__14668__14675;
var key__14682 = cljs.core.nth.call(null,vec__14677__14678,0,null);
var f__14683 = cljs.core.nth.call(null,vec__14677__14678,1,null);
var G__14665__14684 = G__14665__14676;

f__14683.call(null,key__14682,this$,oldval,newval);
var temp__3698__auto____14686 = cljs.core.next.call(null,G__14665__14684);

if(cljs.core.truth_(temp__3698__auto____14686))
{var G__14665__14687 = temp__3698__auto____14686;

{
var G__14731 = cljs.core.first.call(null,G__14665__14687);
var G__14732 = G__14665__14687;
G__14668__14675 = G__14731;
G__14665__14676 = G__14732;
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
var this__14689 = this;
return this$.watches = cljs.core.assoc.call(null,this__14689.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14691 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14691.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14693 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14693.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14715 = this;
return this__14715.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14716 = this;
return this__14716.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14717 = this;
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
var atom__14742 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14743 = (function() { 
var G__14745__delegate = function (x,p__14736){
var map__14737__14738 = p__14736;
var map__14737__14739 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14737__14738))?cljs.core.apply.call(null,cljs.core.hash_map,map__14737__14738):map__14737__14738);
var validator__14740 = cljs.core.get.call(null,map__14737__14739,"﷐'validator");
var meta__14741 = cljs.core.get.call(null,map__14737__14739,"﷐'meta");

return (new cljs.core.Atom(x,meta__14741,validator__14740,null));
};
var G__14745 = function (x,var_args){
var p__14736 = null;
if (goog.isDef(var_args)) {
  p__14736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14745__delegate.call(this, x, p__14736);
};
G__14745.cljs$lang$maxFixedArity = 1;
G__14745.cljs$lang$applyTo = (function (arglist__14746){
var x = cljs.core.first(arglist__14746);
var p__14736 = cljs.core.rest(arglist__14746);
return G__14745__delegate.call(this, x, p__14736);
});
return G__14745;
})()
;
atom = function(x,var_args){
var p__14736 = var_args;
switch(arguments.length){
case  1 :
return atom__14742.call(this,x);
default:
return atom__14743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14743.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14753 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14753))
{var validate__14754 = temp__3698__auto____14753;

if(cljs.core.truth_(validate__14754.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14755 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14755,new_value);
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
var swap_BANG___14760 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14761 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14762 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14763 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14764 = (function() { 
var G__14766__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14766 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14766__delegate.call(this, a, f, x, y, z, more);
};
G__14766.cljs$lang$maxFixedArity = 5;
G__14766.cljs$lang$applyTo = (function (arglist__14767){
var a = cljs.core.first(arglist__14767);
var f = cljs.core.first(cljs.core.next(arglist__14767));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14767)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14767))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14767)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14767)))));
return G__14766__delegate.call(this, a, f, x, y, z, more);
});
return G__14766;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14760.call(this,a,f);
case  3 :
return swap_BANG___14761.call(this,a,f,x);
case  4 :
return swap_BANG___14762.call(this,a,f,x,y);
case  5 :
return swap_BANG___14763.call(this,a,f,x,y,z);
default:
return swap_BANG___14764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14764.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14815){
var iref = cljs.core.first(arglist__14815);
var f = cljs.core.first(cljs.core.next(arglist__14815));
var args = cljs.core.rest(cljs.core.next(arglist__14815));
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
var this__14847 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14847.state)));
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
delay.cljs$lang$applyTo = (function (arglist__14871){
var body = cljs.core.seq( arglist__14871 );;
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
var map__14875__14878 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14875__14876))?cljs.core.apply.call(null,cljs.core.hash_map,map__14875__14876):map__14875__14876);
var keywordize_keys__14879 = cljs.core.get.call(null,map__14875__14878,"﷐'keywordize-keys");
var keyfn__14880 = (cljs.core.truth_(keywordize_keys__14879)?cljs.core.keyword:cljs.core.str);
var f__14898 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14893 = (function iter__14883(s__14884){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14884__14887 = s__14884;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14884__14887)))
{var k__14889 = cljs.core.first.call(null,s__14884__14887);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14880.call(null,k__14889),thisfn.call(null,(x[k__14889]))]),iter__14883.call(null,cljs.core.rest.call(null,s__14884__14887)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14893.call(null,cljs.core.js_keys.call(null,x));
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

return f__14898.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14922){
var x = cljs.core.first(arglist__14922);
var options = cljs.core.rest(arglist__14922);
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
var mem__14925 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14935__delegate = function (args){
var temp__3695__auto____14926 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14925),args);

if(cljs.core.truth_(temp__3695__auto____14926))
{var v__14930 = temp__3695__auto____14926;

return v__14930;
} else
{var ret__14931 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14925,cljs.core.assoc,args,ret__14931);
return ret__14931;
}
};
var G__14935 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14935__delegate.call(this, args);
};
G__14935.cljs$lang$maxFixedArity = 0;
G__14935.cljs$lang$applyTo = (function (arglist__14936){
var args = cljs.core.seq( arglist__14936 );;
return G__14935__delegate.call(this, args);
});
return G__14935;
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
var trampoline__14940 = (function (f){
while(true){
var ret__14938 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14938)))
{{
var G__14943 = ret__14938;
f = G__14943;
continue;
}
} else
{return ret__14938;
}
break;
}
});
var trampoline__14941 = (function() { 
var G__14944__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14944 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14944__delegate.call(this, f, args);
};
G__14944.cljs$lang$maxFixedArity = 1;
G__14944.cljs$lang$applyTo = (function (arglist__14945){
var f = cljs.core.first(arglist__14945);
var args = cljs.core.rest(arglist__14945);
return G__14944__delegate.call(this, f, args);
});
return G__14944;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14940.call(this,f);
default:
return trampoline__14941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14941.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14949 = (function (){
return rand.call(null,1);
});
var rand__14950 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14949.call(this);
case  1 :
return rand__14950.call(this,n);
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
var k__14968 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14968,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14968,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15021 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15022 = (function (h,child,parent){
var or__3548__auto____14990 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14990))
{return or__3548__auto____14990;
} else
{var or__3548__auto____15008 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15008))
{return or__3548__auto____15008;
} else
{var and__3546__auto____15009 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15009))
{var and__3546__auto____15010 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15010))
{var and__3546__auto____15012 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15012))
{var ret__15013 = true;
var i__15014 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15016 = cljs.core.not.call(null,ret__15013);

if(cljs.core.truth_(or__3548__auto____15016))
{return or__3548__auto____15016;
} else
{return cljs.core._EQ_.call(null,i__15014,cljs.core.count.call(null,parent));
}
})()))
{return ret__15013;
} else
{{
var G__15026 = isa_QMARK_.call(null,h,child.call(null,i__15014),parent.call(null,i__15014));
var G__15027 = (i__15014 + 1);
ret__15013 = G__15026;
i__15014 = G__15027;
continue;
}
}
break;
}
} else
{return and__3546__auto____15012;
}
} else
{return and__3546__auto____15010;
}
} else
{return and__3546__auto____15009;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15021.call(this,h,child);
case  3 :
return isa_QMARK___15022.call(this,h,child,parent);
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
var parents__15033 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15034 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15033.call(this,h);
case  2 :
return parents__15034.call(this,h,tag);
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
var ancestors__15045 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15046 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15045.call(this,h);
case  2 :
return ancestors__15046.call(this,h,tag);
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
var descendants__15052 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15053 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15052.call(this,h);
case  2 :
return descendants__15053.call(this,h,tag);
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
var derive__15078 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15079 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15069 = "﷐'parents".call(null,h);
var td__15070 = "﷐'descendants".call(null,h);
var ta__15071 = "﷐'ancestors".call(null,h);
var tf__15075 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15076 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15069.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15071.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15071.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15069,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15075.call(null,"﷐'ancestors".call(null,h),tag,td__15070,parent,ta__15071),"﷐'descendants":tf__15075.call(null,"﷐'descendants".call(null,h),parent,ta__15071,tag,td__15070)});
})());

if(cljs.core.truth_(or__3548__auto____15076))
{return or__3548__auto____15076;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15078.call(this,h,tag);
case  3 :
return derive__15079.call(this,h,tag,parent);
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
var underive__15150 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15152 = (function (h,tag,parent){
var parentMap__15132 = "﷐'parents".call(null,h);
var childsParents__15134 = (cljs.core.truth_(parentMap__15132.call(null,tag))?cljs.core.disj.call(null,parentMap__15132.call(null,tag),parent):cljs.core.set([]));
var newParents__15138 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15134))?cljs.core.assoc.call(null,parentMap__15132,tag,childsParents__15134):cljs.core.dissoc.call(null,parentMap__15132,tag));
var deriv_seq__15143 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15056_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15056_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15056_SHARP_),cljs.core.second.call(null,p1__15056_SHARP_)));
}),cljs.core.seq.call(null,newParents__15138)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15132.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15058_SHARP_,p2__15059_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15058_SHARP_,p2__15059_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15143));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15150.call(this,h,tag);
case  3 :
return underive__15152.call(this,h,tag,parent);
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
var xprefs__15167 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15170 = (cljs.core.truth_((function (){var and__3546__auto____15168 = xprefs__15167;

if(cljs.core.truth_(and__3546__auto____15168))
{return xprefs__15167.call(null,y);
} else
{return and__3546__auto____15168;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15170))
{return or__3548__auto____15170;
} else
{var or__3548__auto____15172 = (function (){var ps__15171 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15171) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15171),prefer_table)))
{} else
{}
{
var G__15181 = cljs.core.rest.call(null,ps__15171);
ps__15171 = G__15181;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15172))
{return or__3548__auto____15172;
} else
{var or__3548__auto____15177 = (function (){var ps__15173 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15173) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15173),y,prefer_table)))
{} else
{}
{
var G__15184 = cljs.core.rest.call(null,ps__15173);
ps__15173 = G__15184;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15177))
{return or__3548__auto____15177;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15193 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15193))
{return or__3548__auto____15193;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15203 = cljs.core.reduce.call(null,(function (be,p__15194){
var vec__15196__15197 = p__15194;
var k__15198 = cljs.core.nth.call(null,vec__15196__15197,0,null);
var ___15199 = cljs.core.nth.call(null,vec__15196__15197,1,null);
var e__15200 = vec__15196__15197;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15198)))
{var be2__15202 = (cljs.core.truth_((function (){var or__3548__auto____15201 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{return cljs.core.dominates.call(null,k__15198,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15200:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15202),k__15198,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15198," and ",cljs.core.first.call(null,be2__15202),", and neither is preferred")));
}
return be2__15202;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15203))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15203));
return cljs.core.second.call(null,best_entry__15203);
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
if(cljs.core.truth_((function (){var and__3546__auto____15282 = mf;

if(cljs.core.truth_(and__3546__auto____15282))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15282;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15283 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15283))
{return or__3548__auto____15283;
} else
{var or__3548__auto____15285 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15285))
{return or__3548__auto____15285;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15290 = mf;

if(cljs.core.truth_(and__3546__auto____15290))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15290;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15293 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15293))
{return or__3548__auto____15293;
} else
{var or__3548__auto____15297 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15297))
{return or__3548__auto____15297;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15299 = mf;

if(cljs.core.truth_(and__3546__auto____15299))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15299;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15303 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15303))
{return or__3548__auto____15303;
} else
{var or__3548__auto____15306 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15308 = mf;

if(cljs.core.truth_(and__3546__auto____15308))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15308;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15310 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{var or__3548__auto____15312 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15312))
{return or__3548__auto____15312;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15315 = mf;

if(cljs.core.truth_(and__3546__auto____15315))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15315;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15319 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15319))
{return or__3548__auto____15319;
} else
{var or__3548__auto____15322 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15322))
{return or__3548__auto____15322;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15327 = mf;

if(cljs.core.truth_(and__3546__auto____15327))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15327;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15330 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15330))
{return or__3548__auto____15330;
} else
{var or__3548__auto____15332 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15332))
{return or__3548__auto____15332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15334 = mf;

if(cljs.core.truth_(and__3546__auto____15334))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15334;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15336 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15336))
{return or__3548__auto____15336;
} else
{var or__3548__auto____15338 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15338))
{return or__3548__auto____15338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15341 = mf;

if(cljs.core.truth_(and__3546__auto____15341))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15341;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15342 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15342))
{return or__3548__auto____15342;
} else
{var or__3548__auto____15343 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15343))
{return or__3548__auto____15343;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15380 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15382 = cljs.core._get_method.call(null,mf,dispatch_val__15380);

if(cljs.core.truth_(target_fn__15382))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15380)));
}
return cljs.core.apply.call(null,target_fn__15382,args);
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
var this__15391 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15401 = this;
cljs.core.swap_BANG_.call(null,this__15401.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15401.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15401.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15401.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15407 = this;
cljs.core.swap_BANG_.call(null,this__15407.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15407.method_cache,this__15407.method_table,this__15407.cached_hierarchy,this__15407.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15412 = this;
cljs.core.swap_BANG_.call(null,this__15412.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15412.method_cache,this__15412.method_table,this__15412.cached_hierarchy,this__15412.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15416 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15416.cached_hierarchy),cljs.core.deref.call(null,this__15416.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15416.method_cache,this__15416.method_table,this__15416.cached_hierarchy,this__15416.hierarchy);
}
var temp__3695__auto____15420 = cljs.core.deref.call(null,this__15416.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15420))
{var target_fn__15421 = temp__3695__auto____15420;

return target_fn__15421;
} else
{var temp__3695__auto____15422 = cljs.core.find_and_cache_best_method.call(null,this__15416.name,dispatch_val,this__15416.hierarchy,this__15416.method_table,this__15416.prefer_table,this__15416.method_cache,this__15416.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15422))
{var target_fn__15423 = temp__3695__auto____15422;

return target_fn__15423;
} else
{return cljs.core.deref.call(null,this__15416.method_table).call(null,this__15416.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15425 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15425.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15425.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15425.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15425.method_cache,this__15425.method_table,this__15425.cached_hierarchy,this__15425.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15430 = this;
return cljs.core.deref.call(null,this__15430.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15432 = this;
return cljs.core.deref.call(null,this__15432.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15434 = this;
return cljs.core.do_dispatch.call(null,mf,this__15434.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15453__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15453 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15453__delegate.call(this, _, args);
};
G__15453.cljs$lang$maxFixedArity = 1;
G__15453.cljs$lang$applyTo = (function (arglist__15455){
var _ = cljs.core.first(arglist__15455);
var args = cljs.core.rest(arglist__15455);
return G__15453__delegate.call(this, _, args);
});
return G__15453;
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
