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
var or__3548__auto____7267 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{var or__3548__auto____7269 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
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
var _invoke__7622 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7311 = this$;

if(cljs.core.truth_(and__3546__auto____7311))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7311;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7316 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
} else
{var or__3548__auto____7317 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7623 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7320 = this$;

if(cljs.core.truth_(and__3546__auto____7320))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7320;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7326 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7624 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7328 = this$;

if(cljs.core.truth_(and__3546__auto____7328))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7328;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{var or__3548__auto____7333 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7625 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7335 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7335))
{return or__3548__auto____7335;
} else
{var or__3548__auto____7336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7627 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7343 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{var or__3548__auto____7345 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7367 = this$;

if(cljs.core.truth_(and__3546__auto____7367))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7367;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7388 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{var or__3548__auto____7390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7409 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{var or__3548__auto____7412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7416 = this$;

if(cljs.core.truth_(and__3546__auto____7416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7441 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{var or__3548__auto____7442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7446 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
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
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7452 = this$;

if(cljs.core.truth_(and__3546__auto____7452))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7452;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7531 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{var or__3548__auto____7532 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7553 = this$;

if(cljs.core.truth_(and__3546__auto____7553))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7553;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7559 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7559))
{return or__3548__auto____7559;
} else
{var or__3548__auto____7560 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7560))
{return or__3548__auto____7560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7562 = this$;

if(cljs.core.truth_(and__3546__auto____7562))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7562;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7565 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
} else
{var or__3548__auto____7566 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7566))
{return or__3548__auto____7566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7568 = this$;

if(cljs.core.truth_(and__3546__auto____7568))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7568;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7571 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{var or__3548__auto____7572 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7574 = this$;

if(cljs.core.truth_(and__3546__auto____7574))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7574;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7577 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7577))
{return or__3548__auto____7577;
} else
{var or__3548__auto____7578 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7578))
{return or__3548__auto____7578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7579 = this$;

if(cljs.core.truth_(and__3546__auto____7579))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7579;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7602 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7602))
{return or__3548__auto____7602;
} else
{var or__3548__auto____7603 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7603))
{return or__3548__auto____7603;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7604 = this$;

if(cljs.core.truth_(and__3546__auto____7604))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7604;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{var or__3548__auto____7606 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7607 = this$;

if(cljs.core.truth_(and__3546__auto____7607))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7607;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7612 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{var or__3548__auto____7614 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7614))
{return or__3548__auto____7614;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7617 = this$;

if(cljs.core.truth_(and__3546__auto____7617))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7617;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7619 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7619))
{return or__3548__auto____7619;
} else
{var or__3548__auto____7620 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7620))
{return or__3548__auto____7620;
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
return _invoke__7622.call(this,this$);
case  2 :
return _invoke__7623.call(this,this$,a);
case  3 :
return _invoke__7624.call(this,this$,a,b);
case  4 :
return _invoke__7625.call(this,this$,a,b,c);
case  5 :
return _invoke__7627.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7628.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7752 = coll;

if(cljs.core.truth_(and__3546__auto____7752))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7752;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7756 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7766 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7766))
{return or__3548__auto____7766;
} else
{var or__3548__auto____7768 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7776 = coll;

if(cljs.core.truth_(and__3546__auto____7776))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7776;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7778 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{var or__3548__auto____7780 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7780))
{return or__3548__auto____7780;
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
var _nth__7795 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = coll;

if(cljs.core.truth_(and__3546__auto____7784))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7784;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7786 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{var or__3548__auto____7787 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7796 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7790 = coll;

if(cljs.core.truth_(and__3546__auto____7790))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7790;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7793 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
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
return _nth__7795.call(this,coll,n);
case  3 :
return _nth__7796.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7806 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
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
{return (function (){var or__3548__auto____7809 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{var or__3548__auto____7810 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
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
var _lookup__7850 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7837 = o;

if(cljs.core.truth_(and__3546__auto____7837))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7837;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7840 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7851 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = o;

if(cljs.core.truth_(and__3546__auto____7841))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7841;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7847 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
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
return _lookup__7850.call(this,o,k);
case  3 :
return _lookup__7851.call(this,o,k,not_found);
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
{return (function (){var or__3548__auto____7899 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7900 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7902 = coll;

if(cljs.core.truth_(and__3546__auto____7902))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7902;
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
if(cljs.core.truth_((function (){var and__3546__auto____7958 = coll;

if(cljs.core.truth_(and__3546__auto____7958))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7958;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7959 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{var or__3548__auto____7961 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
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
{var or__3548__auto____7986 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7992 = coll;

if(cljs.core.truth_(and__3546__auto____7992))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7992;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8001 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{var or__3548__auto____8003 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8004 = coll;

if(cljs.core.truth_(and__3546__auto____8004))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8004;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
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
if(cljs.core.truth_((function (){var and__3546__auto____8063 = coll;

if(cljs.core.truth_(and__3546__auto____8063))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8063;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8064 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
} else
{var or__3548__auto____8065 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8069 = o;

if(cljs.core.truth_(and__3546__auto____8069))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8069;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8071 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8075 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8084 = o;

if(cljs.core.truth_(and__3546__auto____8084))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8084;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8085 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{var or__3548__auto____8086 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = o;

if(cljs.core.truth_(and__3546__auto____8094))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8094;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8095 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{var or__3548__auto____8098 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8109 = o;

if(cljs.core.truth_(and__3546__auto____8109))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8109;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8111 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{var or__3548__auto____8119 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
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
var _reduce__8137 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8124 = coll;

if(cljs.core.truth_(and__3546__auto____8124))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8124;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8129 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{var or__3548__auto____8131 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8138 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8133 = coll;

if(cljs.core.truth_(and__3546__auto____8133))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8133;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8135 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{var or__3548__auto____8136 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
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
return _reduce__8137.call(this,coll,f);
case  3 :
return _reduce__8138.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8147 = o;

if(cljs.core.truth_(and__3546__auto____8147))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8147;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8148 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{var or__3548__auto____8151 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8155 = o;

if(cljs.core.truth_(and__3546__auto____8155))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8155;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8157 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{var or__3548__auto____8158 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8158))
{return or__3548__auto____8158;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8164 = o;

if(cljs.core.truth_(and__3546__auto____8164))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8164;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8166 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8166))
{return or__3548__auto____8166;
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
if(cljs.core.truth_((function (){var and__3546__auto____8186 = o;

if(cljs.core.truth_(and__3546__auto____8186))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8186;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8190 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8190))
{return or__3548__auto____8190;
} else
{var or__3548__auto____8192 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8192))
{return or__3548__auto____8192;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8205 = d;

if(cljs.core.truth_(and__3546__auto____8205))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8205;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8209 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8209))
{return or__3548__auto____8209;
} else
{var or__3548__auto____8210 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8210))
{return or__3548__auto____8210;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8218 = this$;

if(cljs.core.truth_(and__3546__auto____8218))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8218;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8223 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8223))
{return or__3548__auto____8223;
} else
{var or__3548__auto____8225 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8225))
{return or__3548__auto____8225;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8229 = this$;

if(cljs.core.truth_(and__3546__auto____8229))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8229;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8233 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8233))
{return or__3548__auto____8233;
} else
{var or__3548__auto____8235 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8240 = this$;

if(cljs.core.truth_(and__3546__auto____8240))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8240;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8244 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8244))
{return or__3548__auto____8244;
} else
{var or__3548__auto____8246 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8246))
{return or__3548__auto____8246;
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
var G__8295 = null;
var G__8295__8296 = (function (o,k){
return null;
});
var G__8295__8297 = (function (o,k,not_found){
return not_found;
});
G__8295 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8295__8296.call(this,o,k);
case  3 :
return G__8295__8297.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8295;
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
var G__8299 = null;
var G__8299__8300 = (function (_,f){
return f.call(null);
});
var G__8299__8301 = (function (_,f,start){
return start;
});
G__8299 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8299__8300.call(this,_,f);
case  3 :
return G__8299__8301.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8299;
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
var G__8303 = null;
var G__8303__8304 = (function (_,n){
return null;
});
var G__8303__8305 = (function (_,n,not_found){
return not_found;
});
G__8303 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8303__8304.call(this,_,n);
case  3 :
return G__8303__8305.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8303;
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
var ci_reduce__8326 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8314 = cljs.core._nth.call(null,cicoll,0);
var n__8317 = 1;

while(true){
if(cljs.core.truth_((n__8317 < cljs.core._count.call(null,cicoll))))
{{
var G__8330 = f.call(null,val__8314,cljs.core._nth.call(null,cicoll,n__8317));
var G__8331 = (n__8317 + 1);
val__8314 = G__8330;
n__8317 = G__8331;
continue;
}
} else
{return val__8314;
}
break;
}
}
});
var ci_reduce__8327 = (function (cicoll,f,val){
var val__8318 = val;
var n__8319 = 0;

while(true){
if(cljs.core.truth_((n__8319 < cljs.core._count.call(null,cicoll))))
{{
var G__8332 = f.call(null,val__8318,cljs.core._nth.call(null,cicoll,n__8319));
var G__8333 = (n__8319 + 1);
val__8318 = G__8332;
n__8319 = G__8333;
continue;
}
} else
{return val__8318;
}
break;
}
});
var ci_reduce__8328 = (function (cicoll,f,val,idx){
var val__8320 = val;
var n__8321 = idx;

while(true){
if(cljs.core.truth_((n__8321 < cljs.core._count.call(null,cicoll))))
{{
var G__8334 = f.call(null,val__8320,cljs.core._nth.call(null,cicoll,n__8321));
var G__8335 = (n__8321 + 1);
val__8320 = G__8334;
n__8321 = G__8335;
continue;
}
} else
{return val__8320;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8326.call(this,cicoll,f);
case  3 :
return ci_reduce__8327.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8328.call(this,cicoll,f,val,idx);
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
var this__8340 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8353 = null;
var G__8353__8354 = (function (_,f){
var this__8341 = this;
return cljs.core.ci_reduce.call(null,this__8341.a,f,(this__8341.a[this__8341.i]),(this__8341.i + 1));
});
var G__8353__8355 = (function (_,f,start){
var this__8342 = this;
return cljs.core.ci_reduce.call(null,this__8342.a,f,start,this__8342.i);
});
G__8353 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8353__8354.call(this,_,f);
case  3 :
return G__8353__8355.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8353;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8343 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8357 = null;
var G__8357__8358 = (function (coll,n){
var this__8345 = this;
var i__8346 = (n + this__8345.i);

if(cljs.core.truth_((i__8346 < this__8345.a.length)))
{return (this__8345.a[i__8346]);
} else
{return null;
}
});
var G__8357__8359 = (function (coll,n,not_found){
var this__8347 = this;
var i__8348 = (n + this__8347.i);

if(cljs.core.truth_((i__8348 < this__8347.a.length)))
{return (this__8347.a[i__8348]);
} else
{return not_found;
}
});
G__8357 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8357__8358.call(this,coll,n);
case  3 :
return G__8357__8359.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8357;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8349 = this;
return (this__8349.a.length - this__8349.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8350 = this;
return (this__8350.a[this__8350.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8351 = this;
if(cljs.core.truth_(((this__8351.i + 1) < this__8351.a.length)))
{return (new cljs.core.IndexedSeq(this__8351.a,(this__8351.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8352 = this;
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
var G__8373 = null;
var G__8373__8374 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8373__8375 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8373 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8373__8374.call(this,array,f);
case  3 :
return G__8373__8375.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8373;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8377 = null;
var G__8377__8378 = (function (array,k){
return (array[k]);
});
var G__8377__8379 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8377 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8377__8378.call(this,array,k);
case  3 :
return G__8377__8379.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8377;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8381 = null;
var G__8381__8382 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8381__8383 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8381 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8381__8382.call(this,array,n);
case  3 :
return G__8381__8383.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8381;
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
var temp__3698__auto____8393 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8393))
{var s__8394 = temp__3698__auto____8393;

return cljs.core._first.call(null,s__8394);
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
var G__8406 = cljs.core.next.call(null,s);
s = G__8406;
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
var s__8410 = cljs.core.seq.call(null,x);
var n__8411 = 0;

while(true){
if(cljs.core.truth_(s__8410))
{{
var G__8413 = cljs.core.next.call(null,s__8410);
var G__8414 = (n__8411 + 1);
s__8410 = G__8413;
n__8411 = G__8414;
continue;
}
} else
{return n__8411;
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
var conj__8425 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8426 = (function() { 
var G__8428__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8429 = conj.call(null,coll,x);
var G__8430 = cljs.core.first.call(null,xs);
var G__8431 = cljs.core.next.call(null,xs);
coll = G__8429;
x = G__8430;
xs = G__8431;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8428 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8428__delegate.call(this, coll, x, xs);
};
G__8428.cljs$lang$maxFixedArity = 2;
G__8428.cljs$lang$applyTo = (function (arglist__8437){
var coll = cljs.core.first(arglist__8437);
var x = cljs.core.first(cljs.core.next(arglist__8437));
var xs = cljs.core.rest(cljs.core.next(arglist__8437));
return G__8428__delegate.call(this, coll, x, xs);
});
return G__8428;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8425.call(this,coll,x);
default:
return conj__8426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8426.cljs$lang$applyTo;
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
var nth__8446 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8447 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8446.call(this,coll,n);
case  3 :
return nth__8447.call(this,coll,n,not_found);
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
var get__8451 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8452 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8451.call(this,o,k);
case  3 :
return get__8452.call(this,o,k,not_found);
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
var assoc__8553 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8554 = (function() { 
var G__8594__delegate = function (coll,k,v,kvs){
while(true){
var ret__8550 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8595 = ret__8550;
var G__8596 = cljs.core.first.call(null,kvs);
var G__8597 = cljs.core.second.call(null,kvs);
var G__8598 = cljs.core.nnext.call(null,kvs);
coll = G__8595;
k = G__8596;
v = G__8597;
kvs = G__8598;
continue;
}
} else
{return ret__8550;
}
break;
}
};
var G__8594 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8594__delegate.call(this, coll, k, v, kvs);
};
G__8594.cljs$lang$maxFixedArity = 3;
G__8594.cljs$lang$applyTo = (function (arglist__8599){
var coll = cljs.core.first(arglist__8599);
var k = cljs.core.first(cljs.core.next(arglist__8599));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8599)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8599)));
return G__8594__delegate.call(this, coll, k, v, kvs);
});
return G__8594;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8553.call(this,coll,k,v);
default:
return assoc__8554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8554.cljs$lang$applyTo;
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
var dissoc__8620 = (function (coll){
return coll;
});
var dissoc__8621 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8622 = (function() { 
var G__8624__delegate = function (coll,k,ks){
while(true){
var ret__8619 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8626 = ret__8619;
var G__8627 = cljs.core.first.call(null,ks);
var G__8628 = cljs.core.next.call(null,ks);
coll = G__8626;
k = G__8627;
ks = G__8628;
continue;
}
} else
{return ret__8619;
}
break;
}
};
var G__8624 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8624__delegate.call(this, coll, k, ks);
};
G__8624.cljs$lang$maxFixedArity = 2;
G__8624.cljs$lang$applyTo = (function (arglist__8629){
var coll = cljs.core.first(arglist__8629);
var k = cljs.core.first(cljs.core.next(arglist__8629));
var ks = cljs.core.rest(cljs.core.next(arglist__8629));
return G__8624__delegate.call(this, coll, k, ks);
});
return G__8624;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8620.call(this,coll);
case  2 :
return dissoc__8621.call(this,coll,k);
default:
return dissoc__8622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8622.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8645 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8646 = x__445__auto____8645;

if(cljs.core.truth_(and__3546__auto____8646))
{var and__3546__auto____8650 = x__445__auto____8645.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8650))
{return cljs.core.not.call(null,x__445__auto____8645.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8650;
}
} else
{return and__3546__auto____8646;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8645);
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
var disj__8676 = (function (coll){
return coll;
});
var disj__8678 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8681 = (function() { 
var G__8686__delegate = function (coll,k,ks){
while(true){
var ret__8667 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8687 = ret__8667;
var G__8690 = cljs.core.first.call(null,ks);
var G__8692 = cljs.core.next.call(null,ks);
coll = G__8687;
k = G__8690;
ks = G__8692;
continue;
}
} else
{return ret__8667;
}
break;
}
};
var G__8686 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8686__delegate.call(this, coll, k, ks);
};
G__8686.cljs$lang$maxFixedArity = 2;
G__8686.cljs$lang$applyTo = (function (arglist__8693){
var coll = cljs.core.first(arglist__8693);
var k = cljs.core.first(cljs.core.next(arglist__8693));
var ks = cljs.core.rest(cljs.core.next(arglist__8693));
return G__8686__delegate.call(this, coll, k, ks);
});
return G__8686;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8676.call(this,coll);
case  2 :
return disj__8678.call(this,coll,k);
default:
return disj__8681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8681.cljs$lang$applyTo;
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
{var x__445__auto____8699 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8701 = x__445__auto____8699;

if(cljs.core.truth_(and__3546__auto____8701))
{var and__3546__auto____8702 = x__445__auto____8699.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8702))
{return cljs.core.not.call(null,x__445__auto____8699.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8702;
}
} else
{return and__3546__auto____8701;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8699);
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
{var x__445__auto____8714 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8717 = x__445__auto____8714;

if(cljs.core.truth_(and__3546__auto____8717))
{var and__3546__auto____8721 = x__445__auto____8714.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8721))
{return cljs.core.not.call(null,x__445__auto____8714.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8721;
}
} else
{return and__3546__auto____8717;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8714);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8735 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8739 = x__445__auto____8735;

if(cljs.core.truth_(and__3546__auto____8739))
{var and__3546__auto____8740 = x__445__auto____8735.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8740))
{return cljs.core.not.call(null,x__445__auto____8735.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8740;
}
} else
{return and__3546__auto____8739;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8735);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8760 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8761 = x__445__auto____8760;

if(cljs.core.truth_(and__3546__auto____8761))
{var and__3546__auto____8762 = x__445__auto____8760.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8762))
{return cljs.core.not.call(null,x__445__auto____8760.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8762;
}
} else
{return and__3546__auto____8761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8760);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8767 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8768 = x__445__auto____8767;

if(cljs.core.truth_(and__3546__auto____8768))
{var and__3546__auto____8769 = x__445__auto____8767.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8769))
{return cljs.core.not.call(null,x__445__auto____8767.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8769;
}
} else
{return and__3546__auto____8768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8767);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8795 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8796 = x__445__auto____8795;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8797 = x__445__auto____8795.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8797))
{return cljs.core.not.call(null,x__445__auto____8795.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8797;
}
} else
{return and__3546__auto____8796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8795);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8817 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8818 = x__445__auto____8817;

if(cljs.core.truth_(and__3546__auto____8818))
{var and__3546__auto____8819 = x__445__auto____8817.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8819))
{return cljs.core.not.call(null,x__445__auto____8817.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8819;
}
} else
{return and__3546__auto____8818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8817);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8843 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8843.push(key);
}));
return keys__8843;
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
{var x__445__auto____8865 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8866 = x__445__auto____8865;

if(cljs.core.truth_(and__3546__auto____8866))
{var and__3546__auto____8867 = x__445__auto____8865.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core.not.call(null,x__445__auto____8865.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8867;
}
} else
{return and__3546__auto____8866;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8865);
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
var and__3546__auto____8880 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8880))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8934 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8934))
{return or__3548__auto____8934;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8880;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8936 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8936))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8936;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8943 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8943))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8943;
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
var and__3546__auto____8953 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8953))
{return (n == n.toFixed());
} else
{return and__3546__auto____8953;
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
if(cljs.core.truth_((function (){var and__3546__auto____8964 = coll;

if(cljs.core.truth_(and__3546__auto____8964))
{var and__3546__auto____8965 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8965))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8965;
}
} else
{return and__3546__auto____8964;
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
var distinct_QMARK___8973 = (function (x){
return true;
});
var distinct_QMARK___8974 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8975 = (function() { 
var G__8977__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8967 = cljs.core.set([y,x]);
var xs__8968 = more;

while(true){
var x__8969 = cljs.core.first.call(null,xs__8968);
var etc__8970 = cljs.core.next.call(null,xs__8968);

if(cljs.core.truth_(xs__8968))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8967,x__8969)))
{return false;
} else
{{
var G__8978 = cljs.core.conj.call(null,s__8967,x__8969);
var G__8979 = etc__8970;
s__8967 = G__8978;
xs__8968 = G__8979;
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
var G__8977 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8977__delegate.call(this, x, y, more);
};
G__8977.cljs$lang$maxFixedArity = 2;
G__8977.cljs$lang$applyTo = (function (arglist__8980){
var x = cljs.core.first(arglist__8980);
var y = cljs.core.first(cljs.core.next(arglist__8980));
var more = cljs.core.rest(cljs.core.next(arglist__8980));
return G__8977__delegate.call(this, x, y, more);
});
return G__8977;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8973.call(this,x);
case  2 :
return distinct_QMARK___8974.call(this,x,y);
default:
return distinct_QMARK___8975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8975.cljs$lang$applyTo;
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
var r__9013 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9013)))
{return r__9013;
} else
{if(cljs.core.truth_(r__9013))
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
var sort__9022 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9023 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9021 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9021,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9021);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9022.call(this,comp);
case  2 :
return sort__9023.call(this,comp,coll);
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
var sort_by__9030 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9031 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9030.call(this,keyfn,comp);
case  3 :
return sort_by__9031.call(this,keyfn,comp,coll);
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
var reduce__9034 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9035 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9034.call(this,f,val);
case  3 :
return reduce__9035.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9128 = (function (f,coll){
var temp__3695__auto____9122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9122))
{var s__9123 = temp__3695__auto____9122;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9123),cljs.core.next.call(null,s__9123));
} else
{return f.call(null);
}
});
var seq_reduce__9129 = (function (f,val,coll){
var val__9126 = val;
var coll__9127 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9127))
{{
var G__9133 = f.call(null,val__9126,cljs.core.first.call(null,coll__9127));
var G__9134 = cljs.core.next.call(null,coll__9127);
val__9126 = G__9133;
coll__9127 = G__9134;
continue;
}
} else
{return val__9126;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9128.call(this,f,val);
case  3 :
return seq_reduce__9129.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9140 = null;
var G__9140__9141 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9140__9142 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9140 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9140__9141.call(this,coll,f);
case  3 :
return G__9140__9142.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9140;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9147 = (function (){
return 0;
});
var _PLUS___9148 = (function (x){
return x;
});
var _PLUS___9149 = (function (x,y){
return (x + y);
});
var _PLUS___9150 = (function() { 
var G__9152__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9152__delegate.call(this, x, y, more);
};
G__9152.cljs$lang$maxFixedArity = 2;
G__9152.cljs$lang$applyTo = (function (arglist__9153){
var x = cljs.core.first(arglist__9153);
var y = cljs.core.first(cljs.core.next(arglist__9153));
var more = cljs.core.rest(cljs.core.next(arglist__9153));
return G__9152__delegate.call(this, x, y, more);
});
return G__9152;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9147.call(this);
case  1 :
return _PLUS___9148.call(this,x);
case  2 :
return _PLUS___9149.call(this,x,y);
default:
return _PLUS___9150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9150.cljs$lang$applyTo;
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
var ___9161 = (function (x){
return (- x);
});
var ___9163 = (function (x,y){
return (x - y);
});
var ___9164 = (function() { 
var G__9167__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9167 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9167__delegate.call(this, x, y, more);
};
G__9167.cljs$lang$maxFixedArity = 2;
G__9167.cljs$lang$applyTo = (function (arglist__9171){
var x = cljs.core.first(arglist__9171);
var y = cljs.core.first(cljs.core.next(arglist__9171));
var more = cljs.core.rest(cljs.core.next(arglist__9171));
return G__9167__delegate.call(this, x, y, more);
});
return G__9167;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9161.call(this,x);
case  2 :
return ___9163.call(this,x,y);
default:
return ___9164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9164.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9180 = (function (){
return 1;
});
var _STAR___9181 = (function (x){
return x;
});
var _STAR___9182 = (function (x,y){
return (x * y);
});
var _STAR___9183 = (function() { 
var G__9185__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9185 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9185__delegate.call(this, x, y, more);
};
G__9185.cljs$lang$maxFixedArity = 2;
G__9185.cljs$lang$applyTo = (function (arglist__9186){
var x = cljs.core.first(arglist__9186);
var y = cljs.core.first(cljs.core.next(arglist__9186));
var more = cljs.core.rest(cljs.core.next(arglist__9186));
return G__9185__delegate.call(this, x, y, more);
});
return G__9185;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9180.call(this);
case  1 :
return _STAR___9181.call(this,x);
case  2 :
return _STAR___9182.call(this,x,y);
default:
return _STAR___9183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9183.cljs$lang$applyTo;
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
var _SLASH___9194 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9195 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9196 = (function() { 
var G__9198__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9198 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9198__delegate.call(this, x, y, more);
};
G__9198.cljs$lang$maxFixedArity = 2;
G__9198.cljs$lang$applyTo = (function (arglist__9199){
var x = cljs.core.first(arglist__9199);
var y = cljs.core.first(cljs.core.next(arglist__9199));
var more = cljs.core.rest(cljs.core.next(arglist__9199));
return G__9198__delegate.call(this, x, y, more);
});
return G__9198;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9194.call(this,x);
case  2 :
return _SLASH___9195.call(this,x,y);
default:
return _SLASH___9196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9196.cljs$lang$applyTo;
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
var _LT___9204 = (function (x){
return true;
});
var _LT___9205 = (function (x,y){
return (x < y);
});
var _LT___9206 = (function() { 
var G__9208__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9209 = y;
var G__9210 = cljs.core.first.call(null,more);
var G__9211 = cljs.core.next.call(null,more);
x = G__9209;
y = G__9210;
more = G__9211;
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
var G__9208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9208__delegate.call(this, x, y, more);
};
G__9208.cljs$lang$maxFixedArity = 2;
G__9208.cljs$lang$applyTo = (function (arglist__9257){
var x = cljs.core.first(arglist__9257);
var y = cljs.core.first(cljs.core.next(arglist__9257));
var more = cljs.core.rest(cljs.core.next(arglist__9257));
return G__9208__delegate.call(this, x, y, more);
});
return G__9208;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9204.call(this,x);
case  2 :
return _LT___9205.call(this,x,y);
default:
return _LT___9206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9206.cljs$lang$applyTo;
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
var _LT__EQ___9266 = (function (x){
return true;
});
var _LT__EQ___9268 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9270 = (function() { 
var G__9273__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9275 = y;
var G__9276 = cljs.core.first.call(null,more);
var G__9277 = cljs.core.next.call(null,more);
x = G__9275;
y = G__9276;
more = G__9277;
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
var G__9273 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9273__delegate.call(this, x, y, more);
};
G__9273.cljs$lang$maxFixedArity = 2;
G__9273.cljs$lang$applyTo = (function (arglist__9279){
var x = cljs.core.first(arglist__9279);
var y = cljs.core.first(cljs.core.next(arglist__9279));
var more = cljs.core.rest(cljs.core.next(arglist__9279));
return G__9273__delegate.call(this, x, y, more);
});
return G__9273;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9266.call(this,x);
case  2 :
return _LT__EQ___9268.call(this,x,y);
default:
return _LT__EQ___9270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9270.cljs$lang$applyTo;
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
var _GT___9288 = (function (x){
return true;
});
var _GT___9289 = (function (x,y){
return (x > y);
});
var _GT___9291 = (function() { 
var G__9293__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9295 = y;
var G__9297 = cljs.core.first.call(null,more);
var G__9298 = cljs.core.next.call(null,more);
x = G__9295;
y = G__9297;
more = G__9298;
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
var G__9293 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9293__delegate.call(this, x, y, more);
};
G__9293.cljs$lang$maxFixedArity = 2;
G__9293.cljs$lang$applyTo = (function (arglist__9300){
var x = cljs.core.first(arglist__9300);
var y = cljs.core.first(cljs.core.next(arglist__9300));
var more = cljs.core.rest(cljs.core.next(arglist__9300));
return G__9293__delegate.call(this, x, y, more);
});
return G__9293;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9288.call(this,x);
case  2 :
return _GT___9289.call(this,x,y);
default:
return _GT___9291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9291.cljs$lang$applyTo;
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
var _GT__EQ___9301 = (function (x){
return true;
});
var _GT__EQ___9302 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9303 = (function() { 
var G__9305__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9307 = y;
var G__9308 = cljs.core.first.call(null,more);
var G__9309 = cljs.core.next.call(null,more);
x = G__9307;
y = G__9308;
more = G__9309;
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
var G__9305 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9305__delegate.call(this, x, y, more);
};
G__9305.cljs$lang$maxFixedArity = 2;
G__9305.cljs$lang$applyTo = (function (arglist__9313){
var x = cljs.core.first(arglist__9313);
var y = cljs.core.first(cljs.core.next(arglist__9313));
var more = cljs.core.rest(cljs.core.next(arglist__9313));
return G__9305__delegate.call(this, x, y, more);
});
return G__9305;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9301.call(this,x);
case  2 :
return _GT__EQ___9302.call(this,x,y);
default:
return _GT__EQ___9303.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9303.cljs$lang$applyTo;
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
var max__9330 = (function (x){
return x;
});
var max__9331 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9332 = (function() { 
var G__9334__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9334 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9334__delegate.call(this, x, y, more);
};
G__9334.cljs$lang$maxFixedArity = 2;
G__9334.cljs$lang$applyTo = (function (arglist__9335){
var x = cljs.core.first(arglist__9335);
var y = cljs.core.first(cljs.core.next(arglist__9335));
var more = cljs.core.rest(cljs.core.next(arglist__9335));
return G__9334__delegate.call(this, x, y, more);
});
return G__9334;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9330.call(this,x);
case  2 :
return max__9331.call(this,x,y);
default:
return max__9332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9332.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9345 = (function (x){
return x;
});
var min__9346 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9347 = (function() { 
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
return min__9345.call(this,x);
case  2 :
return min__9346.call(this,x,y);
default:
return min__9347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9347.cljs$lang$applyTo;
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
var rem__9474 = (n % d);

return cljs.core.fix.call(null,((n - rem__9474) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9476 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9476));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9490 = (function (){
return Math.random.call(null);
});
var rand__9491 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9490.call(this);
case  1 :
return rand__9491.call(this,n);
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
var _EQ__EQ___9574 = (function (x){
return true;
});
var _EQ__EQ___9575 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9576 = (function() { 
var G__9578__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9579 = y;
var G__9580 = cljs.core.first.call(null,more);
var G__9581 = cljs.core.next.call(null,more);
x = G__9579;
y = G__9580;
more = G__9581;
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
var G__9578 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9578__delegate.call(this, x, y, more);
};
G__9578.cljs$lang$maxFixedArity = 2;
G__9578.cljs$lang$applyTo = (function (arglist__9582){
var x = cljs.core.first(arglist__9582);
var y = cljs.core.first(cljs.core.next(arglist__9582));
var more = cljs.core.rest(cljs.core.next(arglist__9582));
return G__9578__delegate.call(this, x, y, more);
});
return G__9578;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9574.call(this,x);
case  2 :
return _EQ__EQ___9575.call(this,x,y);
default:
return _EQ__EQ___9576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9576.cljs$lang$applyTo;
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
var xs__9584 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9585 = xs__9584;

if(cljs.core.truth_(and__3546__auto____9585))
{return (n__9583 > 0);
} else
{return and__3546__auto____9585;
}
})()))
{{
var G__9586 = (n__9583 - 1);
var G__9587 = cljs.core.next.call(null,xs__9584);
n__9583 = G__9586;
xs__9584 = G__9587;
continue;
}
} else
{return xs__9584;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9592 = null;
var G__9592__9593 = (function (coll,n){
var temp__3695__auto____9588 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9588))
{var xs__9589 = temp__3695__auto____9588;

return cljs.core.first.call(null,xs__9589);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9592__9594 = (function (coll,n,not_found){
var temp__3695__auto____9590 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9590))
{var xs__9591 = temp__3695__auto____9590;

return cljs.core.first.call(null,xs__9591);
} else
{return not_found;
}
});
G__9592 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9592__9593.call(this,coll,n);
case  3 :
return G__9592__9594.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9592;
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
var str_STAR___9703 = (function (x){
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
var str_STAR___9705 = (function() { 
var G__9707__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9708 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9709 = cljs.core.next.call(null,more);
sb = G__9708;
more = G__9709;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9707 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9707__delegate.call(this, x, ys);
};
G__9707.cljs$lang$maxFixedArity = 1;
G__9707.cljs$lang$applyTo = (function (arglist__9710){
var x = cljs.core.first(arglist__9710);
var ys = cljs.core.rest(arglist__9710);
return G__9707__delegate.call(this, x, ys);
});
return G__9707;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9701.call(this);
case  1 :
return str_STAR___9703.call(this,x);
default:
return str_STAR___9705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9705.cljs$lang$applyTo;
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
var str__9774 = (function (){
return "";
});
var str__9775 = (function (x){
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
var str__9776 = (function() { 
var G__9778__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9778 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9778__delegate.call(this, x, ys);
};
G__9778.cljs$lang$maxFixedArity = 1;
G__9778.cljs$lang$applyTo = (function (arglist__9779){
var x = cljs.core.first(arglist__9779);
var ys = cljs.core.rest(arglist__9779);
return G__9778__delegate.call(this, x, ys);
});
return G__9778;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9774.call(this);
case  1 :
return str__9775.call(this,x);
default:
return str__9776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9776.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9780 = (function (s,start){
return s.substring(start);
});
var subs__9781 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9780.call(this,s,start);
case  3 :
return subs__9781.call(this,s,start,end);
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
var symbol__9785 = (function (name){
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
var symbol__9786 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9785.call(this,ns);
case  2 :
return symbol__9786.call(this,ns,name);
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
var keyword__9794 = (function (name){
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
var keyword__9795 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9794.call(this,ns);
case  2 :
return keyword__9795.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9803 = cljs.core.seq.call(null,x);
var ys__9804 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9803)))
{return cljs.core.nil_QMARK_.call(null,ys__9804);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9804)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9803),cljs.core.first.call(null,ys__9804))))
{{
var G__9809 = cljs.core.next.call(null,xs__9803);
var G__9810 = cljs.core.next.call(null,ys__9804);
xs__9803 = G__9809;
ys__9804 = G__9810;
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
return cljs.core.reduce.call(null,(function (p1__9817_SHARP_,p2__9819_SHARP_){
return cljs.core.hash_combine.call(null,p1__9817_SHARP_,cljs.core.hash.call(null,p2__9819_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9837__9838 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9837__9838))
{var G__9840__9846 = cljs.core.first.call(null,G__9837__9838);
var vec__9842__9847 = G__9840__9846;
var key_name__9848 = cljs.core.nth.call(null,vec__9842__9847,0,null);
var f__9849 = cljs.core.nth.call(null,vec__9842__9847,1,null);
var G__9837__9850 = G__9837__9838;

var G__9840__9851 = G__9840__9846;
var G__9837__9852 = G__9837__9850;

while(true){
var vec__9853__9854 = G__9840__9851;
var key_name__9855 = cljs.core.nth.call(null,vec__9853__9854,0,null);
var f__9856 = cljs.core.nth.call(null,vec__9853__9854,1,null);
var G__9837__9857 = G__9837__9852;

var str_name__9858 = cljs.core.name.call(null,key_name__9855);

obj[str_name__9858] = f__9856;
var temp__3698__auto____9859 = cljs.core.next.call(null,G__9837__9857);

if(cljs.core.truth_(temp__3698__auto____9859))
{var G__9837__9860 = temp__3698__auto____9859;

{
var G__9863 = cljs.core.first.call(null,G__9837__9860);
var G__9864 = G__9837__9860;
G__9840__9851 = G__9863;
G__9837__9852 = G__9864;
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
var this__9879 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9880 = this;
return (new cljs.core.List(this__9880.meta,o,coll,(this__9880.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9885 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9886 = this;
return this__9886.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9887 = this;
return this__9887.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9890 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9892 = this;
return this__9892.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9894 = this;
return this__9894.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9898 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9901 = this;
return (new cljs.core.List(meta,this__9901.first,this__9901.rest,this__9901.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9904 = this;
return this__9904.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9906 = this;
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
var this__9920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9922 = this;
return (new cljs.core.List(this__9922.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9924 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9925 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9926 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9928 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9929 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9930 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9931 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9932 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9933 = this;
return this__9933.meta;
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
list.cljs$lang$applyTo = (function (arglist__9946){
var items = cljs.core.seq( arglist__9946 );;
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
var this__9959 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9960 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9961 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9961.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9962 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9965 = this;
return this__9965.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9966 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9966.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9966.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9967 = this;
return this__9967.meta;
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
var G__9984 = null;
var G__9984__9985 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9984__9986 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9984 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9984__9985.call(this,string,f);
case  3 :
return G__9984__9986.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9984;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9988 = null;
var G__9988__9989 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9988__9990 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9988 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9988__9989.call(this,string,k);
case  3 :
return G__9988__9990.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9988;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9995 = null;
var G__9995__9996 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9995__9997 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9995 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9995__9996.call(this,string,n);
case  3 :
return G__9995__9997.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9995;
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
var x__10040 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10040;
} else
{lazy_seq.x = x__10040.call(null);
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
var this__10044 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10048 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10054 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10060 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10060.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10064 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10066 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10072 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10073 = this;
return this__10073.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10074 = this;
return (new cljs.core.LazySeq(meta,this__10074.realized,this__10074.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10085 = cljs.core.array.call(null);

var s__10086 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10086)))
{ary__10085.push(cljs.core.first.call(null,s__10086));
{
var G__10094 = cljs.core.next.call(null,s__10086);
s__10086 = G__10094;
continue;
}
} else
{return ary__10085;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10098 = s;
var i__10099 = n;
var sum__10100 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10102 = (i__10099 > 0);

if(cljs.core.truth_(and__3546__auto____10102))
{return cljs.core.seq.call(null,s__10098);
} else
{return and__3546__auto____10102;
}
})()))
{{
var G__10106 = cljs.core.next.call(null,s__10098);
var G__10107 = (i__10099 - 1);
var G__10108 = (sum__10100 + 1);
s__10098 = G__10106;
i__10099 = G__10107;
sum__10100 = G__10108;
continue;
}
} else
{return sum__10100;
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
var concat__10249 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10250 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10251 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10207 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10207))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10207),concat.call(null,cljs.core.rest.call(null,s__10207),y));
} else
{return y;
}
})));
});
var concat__10252 = (function() { 
var G__10255__delegate = function (x,y,zs){
var cat__10247 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10209 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10209))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10209),cat.call(null,cljs.core.rest.call(null,xys__10209),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10247.call(null,concat.call(null,x,y),zs);
};
var G__10255 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10255__delegate.call(this, x, y, zs);
};
G__10255.cljs$lang$maxFixedArity = 2;
G__10255.cljs$lang$applyTo = (function (arglist__10258){
var x = cljs.core.first(arglist__10258);
var y = cljs.core.first(cljs.core.next(arglist__10258));
var zs = cljs.core.rest(cljs.core.next(arglist__10258));
return G__10255__delegate.call(this, x, y, zs);
});
return G__10255;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10249.call(this);
case  1 :
return concat__10250.call(this,x);
case  2 :
return concat__10251.call(this,x,y);
default:
return concat__10252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10252.cljs$lang$applyTo;
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
var list_STAR___10263 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10264 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10265 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10266 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10267 = (function() { 
var G__10275__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10275 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10275__delegate.call(this, a, b, c, d, more);
};
G__10275.cljs$lang$maxFixedArity = 4;
G__10275.cljs$lang$applyTo = (function (arglist__10279){
var a = cljs.core.first(arglist__10279);
var b = cljs.core.first(cljs.core.next(arglist__10279));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10279)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10279))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10279))));
return G__10275__delegate.call(this, a, b, c, d, more);
});
return G__10275;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10263.call(this,a);
case  2 :
return list_STAR___10264.call(this,a,b);
case  3 :
return list_STAR___10265.call(this,a,b,c);
case  4 :
return list_STAR___10266.call(this,a,b,c,d);
default:
return list_STAR___10267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10267.cljs$lang$applyTo;
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
var apply__10309 = (function (f,args){
var fixed_arity__10281 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10281 + 1)) <= fixed_arity__10281)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10310 = (function (f,x,args){
var arglist__10282 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10283 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10282,fixed_arity__10283) <= fixed_arity__10283)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10282));
} else
{return f.cljs$lang$applyTo(arglist__10282);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10282));
}
});
var apply__10311 = (function (f,x,y,args){
var arglist__10292 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10294 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10292,fixed_arity__10294) <= fixed_arity__10294)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10292));
} else
{return f.cljs$lang$applyTo(arglist__10292);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10292));
}
});
var apply__10312 = (function (f,x,y,z,args){
var arglist__10299 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10301 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10299,fixed_arity__10301) <= fixed_arity__10301)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10299));
} else
{return f.cljs$lang$applyTo(arglist__10299);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10299));
}
});
var apply__10313 = (function() { 
var G__10330__delegate = function (f,a,b,c,d,args){
var arglist__10305 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10306 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10305,fixed_arity__10306) <= fixed_arity__10306)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10305));
} else
{return f.cljs$lang$applyTo(arglist__10305);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10305));
}
};
var G__10330 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10330__delegate.call(this, f, a, b, c, d, args);
};
G__10330.cljs$lang$maxFixedArity = 5;
G__10330.cljs$lang$applyTo = (function (arglist__10332){
var f = cljs.core.first(arglist__10332);
var a = cljs.core.first(cljs.core.next(arglist__10332));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10332)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10332))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10332)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10332)))));
return G__10330__delegate.call(this, f, a, b, c, d, args);
});
return G__10330;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10309.call(this,f,a);
case  3 :
return apply__10310.call(this,f,a,b);
case  4 :
return apply__10311.call(this,f,a,b,c);
case  5 :
return apply__10312.call(this,f,a,b,c,d);
default:
return apply__10313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10313.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10344){
var obj = cljs.core.first(arglist__10344);
var f = cljs.core.first(cljs.core.next(arglist__10344));
var args = cljs.core.rest(cljs.core.next(arglist__10344));
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
var not_EQ___10347 = (function (x){
return false;
});
var not_EQ___10348 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10349 = (function() { 
var G__10351__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10351 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10351__delegate.call(this, x, y, more);
};
G__10351.cljs$lang$maxFixedArity = 2;
G__10351.cljs$lang$applyTo = (function (arglist__10352){
var x = cljs.core.first(arglist__10352);
var y = cljs.core.first(cljs.core.next(arglist__10352));
var more = cljs.core.rest(cljs.core.next(arglist__10352));
return G__10351__delegate.call(this, x, y, more);
});
return G__10351;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10347.call(this,x);
case  2 :
return not_EQ___10348.call(this,x,y);
default:
return not_EQ___10349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10349.cljs$lang$applyTo;
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
var G__10364 = pred;
var G__10365 = cljs.core.next.call(null,coll);
pred = G__10364;
coll = G__10365;
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
{var or__3548__auto____10383 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10383))
{return or__3548__auto____10383;
} else
{{
var G__10404 = pred;
var G__10405 = cljs.core.next.call(null,coll);
pred = G__10404;
coll = G__10405;
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
var G__10426 = null;
var G__10426__10427 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10426__10428 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10426__10429 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10426__10431 = (function() { 
var G__10439__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10439 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10439__delegate.call(this, x, y, zs);
};
G__10439.cljs$lang$maxFixedArity = 2;
G__10439.cljs$lang$applyTo = (function (arglist__10441){
var x = cljs.core.first(arglist__10441);
var y = cljs.core.first(cljs.core.next(arglist__10441));
var zs = cljs.core.rest(cljs.core.next(arglist__10441));
return G__10439__delegate.call(this, x, y, zs);
});
return G__10439;
})()
;
G__10426 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10426__10427.call(this);
case  1 :
return G__10426__10428.call(this,x);
case  2 :
return G__10426__10429.call(this,x,y);
default:
return G__10426__10431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10426.cljs$lang$maxFixedArity = 2;
G__10426.cljs$lang$applyTo = G__10426__10431.cljs$lang$applyTo;
return G__10426;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10451__delegate = function (args){
return x;
};
var G__10451 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10451__delegate.call(this, args);
};
G__10451.cljs$lang$maxFixedArity = 0;
G__10451.cljs$lang$applyTo = (function (arglist__10452){
var args = cljs.core.seq( arglist__10452 );;
return G__10451__delegate.call(this, args);
});
return G__10451;
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
var comp__10459 = (function (){
return cljs.core.identity;
});
var comp__10461 = (function (f){
return f;
});
var comp__10463 = (function (f,g){
return (function() {
var G__10475 = null;
var G__10475__10476 = (function (){
return f.call(null,g.call(null));
});
var G__10475__10477 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10475__10478 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10475__10479 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10475__10480 = (function() { 
var G__10489__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10489 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10489__delegate.call(this, x, y, z, args);
};
G__10489.cljs$lang$maxFixedArity = 3;
G__10489.cljs$lang$applyTo = (function (arglist__10491){
var x = cljs.core.first(arglist__10491);
var y = cljs.core.first(cljs.core.next(arglist__10491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10491)));
return G__10489__delegate.call(this, x, y, z, args);
});
return G__10489;
})()
;
G__10475 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10475__10476.call(this);
case  1 :
return G__10475__10477.call(this,x);
case  2 :
return G__10475__10478.call(this,x,y);
case  3 :
return G__10475__10479.call(this,x,y,z);
default:
return G__10475__10480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10475.cljs$lang$maxFixedArity = 3;
G__10475.cljs$lang$applyTo = G__10475__10480.cljs$lang$applyTo;
return G__10475;
})()
});
var comp__10465 = (function (f,g,h){
return (function() {
var G__10496 = null;
var G__10496__10500 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10496__10501 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10496__10502 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10496__10503 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10496__10504 = (function() { 
var G__10507__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10507__delegate.call(this, x, y, z, args);
};
G__10507.cljs$lang$maxFixedArity = 3;
G__10507.cljs$lang$applyTo = (function (arglist__10536){
var x = cljs.core.first(arglist__10536);
var y = cljs.core.first(cljs.core.next(arglist__10536));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10536)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10536)));
return G__10507__delegate.call(this, x, y, z, args);
});
return G__10507;
})()
;
G__10496 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10496__10500.call(this);
case  1 :
return G__10496__10501.call(this,x);
case  2 :
return G__10496__10502.call(this,x,y);
case  3 :
return G__10496__10503.call(this,x,y,z);
default:
return G__10496__10504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10496.cljs$lang$maxFixedArity = 3;
G__10496.cljs$lang$applyTo = G__10496__10504.cljs$lang$applyTo;
return G__10496;
})()
});
var comp__10467 = (function() { 
var G__10538__delegate = function (f1,f2,f3,fs){
var fs__10456 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10540__delegate = function (args){
var ret__10457 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10456),args);
var fs__10458 = cljs.core.next.call(null,fs__10456);

while(true){
if(cljs.core.truth_(fs__10458))
{{
var G__10541 = cljs.core.first.call(null,fs__10458).call(null,ret__10457);
var G__10542 = cljs.core.next.call(null,fs__10458);
ret__10457 = G__10541;
fs__10458 = G__10542;
continue;
}
} else
{return ret__10457;
}
break;
}
};
var G__10540 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10540__delegate.call(this, args);
};
G__10540.cljs$lang$maxFixedArity = 0;
G__10540.cljs$lang$applyTo = (function (arglist__10544){
var args = cljs.core.seq( arglist__10544 );;
return G__10540__delegate.call(this, args);
});
return G__10540;
})()
;
};
var G__10538 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10538__delegate.call(this, f1, f2, f3, fs);
};
G__10538.cljs$lang$maxFixedArity = 3;
G__10538.cljs$lang$applyTo = (function (arglist__10545){
var f1 = cljs.core.first(arglist__10545);
var f2 = cljs.core.first(cljs.core.next(arglist__10545));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10545)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10545)));
return G__10538__delegate.call(this, f1, f2, f3, fs);
});
return G__10538;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10459.call(this);
case  1 :
return comp__10461.call(this,f1);
case  2 :
return comp__10463.call(this,f1,f2);
case  3 :
return comp__10465.call(this,f1,f2,f3);
default:
return comp__10467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10467.cljs$lang$applyTo;
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
var partial__10553 = (function (f,arg1){
return (function() { 
var G__10558__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10558 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10558__delegate.call(this, args);
};
G__10558.cljs$lang$maxFixedArity = 0;
G__10558.cljs$lang$applyTo = (function (arglist__10561){
var args = cljs.core.seq( arglist__10561 );;
return G__10558__delegate.call(this, args);
});
return G__10558;
})()
;
});
var partial__10554 = (function (f,arg1,arg2){
return (function() { 
var G__10562__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10562 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10562__delegate.call(this, args);
};
G__10562.cljs$lang$maxFixedArity = 0;
G__10562.cljs$lang$applyTo = (function (arglist__10563){
var args = cljs.core.seq( arglist__10563 );;
return G__10562__delegate.call(this, args);
});
return G__10562;
})()
;
});
var partial__10555 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10564__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10564 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10564__delegate.call(this, args);
};
G__10564.cljs$lang$maxFixedArity = 0;
G__10564.cljs$lang$applyTo = (function (arglist__10565){
var args = cljs.core.seq( arglist__10565 );;
return G__10564__delegate.call(this, args);
});
return G__10564;
})()
;
});
var partial__10556 = (function() { 
var G__10568__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10569__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10569 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10569__delegate.call(this, args);
};
G__10569.cljs$lang$maxFixedArity = 0;
G__10569.cljs$lang$applyTo = (function (arglist__10570){
var args = cljs.core.seq( arglist__10570 );;
return G__10569__delegate.call(this, args);
});
return G__10569;
})()
;
};
var G__10568 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10568__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10568.cljs$lang$maxFixedArity = 4;
G__10568.cljs$lang$applyTo = (function (arglist__10571){
var f = cljs.core.first(arglist__10571);
var arg1 = cljs.core.first(cljs.core.next(arglist__10571));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10571)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10571))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10571))));
return G__10568__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10568;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10553.call(this,f,arg1);
case  3 :
return partial__10554.call(this,f,arg1,arg2);
case  4 :
return partial__10555.call(this,f,arg1,arg2,arg3);
default:
return partial__10556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10556.cljs$lang$applyTo;
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
var fnil__10589 = (function (f,x){
return (function() {
var G__10593 = null;
var G__10593__10595 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10593__10596 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10593__10597 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10593__10598 = (function() { 
var G__10600__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10600 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10600__delegate.call(this, a, b, c, ds);
};
G__10600.cljs$lang$maxFixedArity = 3;
G__10600.cljs$lang$applyTo = (function (arglist__10601){
var a = cljs.core.first(arglist__10601);
var b = cljs.core.first(cljs.core.next(arglist__10601));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10601)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10601)));
return G__10600__delegate.call(this, a, b, c, ds);
});
return G__10600;
})()
;
G__10593 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10593__10595.call(this,a);
case  2 :
return G__10593__10596.call(this,a,b);
case  3 :
return G__10593__10597.call(this,a,b,c);
default:
return G__10593__10598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10593.cljs$lang$maxFixedArity = 3;
G__10593.cljs$lang$applyTo = G__10593__10598.cljs$lang$applyTo;
return G__10593;
})()
});
var fnil__10590 = (function (f,x,y){
return (function() {
var G__10605 = null;
var G__10605__10606 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10605__10607 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10605__10608 = (function() { 
var G__10611__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10611 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10611__delegate.call(this, a, b, c, ds);
};
G__10611.cljs$lang$maxFixedArity = 3;
G__10611.cljs$lang$applyTo = (function (arglist__10612){
var a = cljs.core.first(arglist__10612);
var b = cljs.core.first(cljs.core.next(arglist__10612));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10612)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10612)));
return G__10611__delegate.call(this, a, b, c, ds);
});
return G__10611;
})()
;
G__10605 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10605__10606.call(this,a,b);
case  3 :
return G__10605__10607.call(this,a,b,c);
default:
return G__10605__10608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10605.cljs$lang$maxFixedArity = 3;
G__10605.cljs$lang$applyTo = G__10605__10608.cljs$lang$applyTo;
return G__10605;
})()
});
var fnil__10591 = (function (f,x,y,z){
return (function() {
var G__10613 = null;
var G__10613__10614 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10613__10615 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10613__10616 = (function() { 
var G__10619__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10619 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10619__delegate.call(this, a, b, c, ds);
};
G__10619.cljs$lang$maxFixedArity = 3;
G__10619.cljs$lang$applyTo = (function (arglist__10625){
var a = cljs.core.first(arglist__10625);
var b = cljs.core.first(cljs.core.next(arglist__10625));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10625)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10625)));
return G__10619__delegate.call(this, a, b, c, ds);
});
return G__10619;
})()
;
G__10613 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10613__10614.call(this,a,b);
case  3 :
return G__10613__10615.call(this,a,b,c);
default:
return G__10613__10616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10613.cljs$lang$maxFixedArity = 3;
G__10613.cljs$lang$applyTo = G__10613__10616.cljs$lang$applyTo;
return G__10613;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10589.call(this,f,x);
case  3 :
return fnil__10590.call(this,f,x,y);
case  4 :
return fnil__10591.call(this,f,x,y,z);
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
var mapi__10643 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10639))
{var s__10640 = temp__3698__auto____10639;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10640)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10640)));
} else
{return null;
}
})));
});

return mapi__10643.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10661))
{var s__10664 = temp__3698__auto____10661;

var x__10665 = f.call(null,cljs.core.first.call(null,s__10664));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10665)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10664));
} else
{return cljs.core.cons.call(null,x__10665,keep.call(null,f,cljs.core.rest.call(null,s__10664)));
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
var keepi__10703 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10696 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10696))
{var s__10699 = temp__3698__auto____10696;

var x__10700 = f.call(null,idx,cljs.core.first.call(null,s__10699));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10700)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10699));
} else
{return cljs.core.cons.call(null,x__10700,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10699)));
}
} else
{return null;
}
})));
});

return keepi__10703.call(null,0,coll);
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
var every_pred__10847 = (function (p){
return (function() {
var ep1 = null;
var ep1__10858 = (function (){
return true;
});
var ep1__10859 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10860 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10723 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10723))
{return p.call(null,y);
} else
{return and__3546__auto____10723;
}
})());
});
var ep1__10861 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10726 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10726))
{var and__3546__auto____10728 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10728))
{return p.call(null,z);
} else
{return and__3546__auto____10728;
}
} else
{return and__3546__auto____10726;
}
})());
});
var ep1__10862 = (function() { 
var G__10868__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10731 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10731))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10731;
}
})());
};
var G__10868 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10868__delegate.call(this, x, y, z, args);
};
G__10868.cljs$lang$maxFixedArity = 3;
G__10868.cljs$lang$applyTo = (function (arglist__10874){
var x = cljs.core.first(arglist__10874);
var y = cljs.core.first(cljs.core.next(arglist__10874));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10874)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10874)));
return G__10868__delegate.call(this, x, y, z, args);
});
return G__10868;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10858.call(this);
case  1 :
return ep1__10859.call(this,x);
case  2 :
return ep1__10860.call(this,x,y);
case  3 :
return ep1__10861.call(this,x,y,z);
default:
return ep1__10862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10862.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10848 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10875 = (function (){
return true;
});
var ep2__10876 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10741 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10741))
{return p2.call(null,x);
} else
{return and__3546__auto____10741;
}
})());
});
var ep2__10877 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10745 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10745))
{var and__3546__auto____10748 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10748))
{var and__3546__auto____10750 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10750))
{return p2.call(null,y);
} else
{return and__3546__auto____10750;
}
} else
{return and__3546__auto____10748;
}
} else
{return and__3546__auto____10745;
}
})());
});
var ep2__10878 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10752 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10752))
{var and__3546__auto____10753 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10753))
{var and__3546__auto____10755 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10755))
{var and__3546__auto____10757 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10757))
{var and__3546__auto____10759 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10759))
{return p2.call(null,z);
} else
{return and__3546__auto____10759;
}
} else
{return and__3546__auto____10757;
}
} else
{return and__3546__auto____10755;
}
} else
{return and__3546__auto____10753;
}
} else
{return and__3546__auto____10752;
}
})());
});
var ep2__10879 = (function() { 
var G__10891__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10762 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10762))
{return cljs.core.every_QMARK_.call(null,(function (p1__10673_SHARP_){
var and__3546__auto____10764 = p1.call(null,p1__10673_SHARP_);

if(cljs.core.truth_(and__3546__auto____10764))
{return p2.call(null,p1__10673_SHARP_);
} else
{return and__3546__auto____10764;
}
}),args);
} else
{return and__3546__auto____10762;
}
})());
};
var G__10891 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10891__delegate.call(this, x, y, z, args);
};
G__10891.cljs$lang$maxFixedArity = 3;
G__10891.cljs$lang$applyTo = (function (arglist__10899){
var x = cljs.core.first(arglist__10899);
var y = cljs.core.first(cljs.core.next(arglist__10899));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10899)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10899)));
return G__10891__delegate.call(this, x, y, z, args);
});
return G__10891;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10875.call(this);
case  1 :
return ep2__10876.call(this,x);
case  2 :
return ep2__10877.call(this,x,y);
case  3 :
return ep2__10878.call(this,x,y,z);
default:
return ep2__10879.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10879.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10849 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10900 = (function (){
return true;
});
var ep3__10901 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10766 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10766))
{var and__3546__auto____10767 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10767))
{return p3.call(null,x);
} else
{return and__3546__auto____10767;
}
} else
{return and__3546__auto____10766;
}
})());
});
var ep3__10902 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10770 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10770))
{var and__3546__auto____10771 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10771))
{var and__3546__auto____10773 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10773))
{var and__3546__auto____10774 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10774))
{var and__3546__auto____10776 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10776))
{return p3.call(null,y);
} else
{return and__3546__auto____10776;
}
} else
{return and__3546__auto____10774;
}
} else
{return and__3546__auto____10773;
}
} else
{return and__3546__auto____10771;
}
} else
{return and__3546__auto____10770;
}
})());
});
var ep3__10903 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10782 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10782))
{var and__3546__auto____10785 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10785))
{var and__3546__auto____10789 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10789))
{var and__3546__auto____10793 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10793))
{var and__3546__auto____10794 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10794))
{var and__3546__auto____10813 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10813))
{var and__3546__auto____10815 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10815))
{var and__3546__auto____10818 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10818))
{return p3.call(null,z);
} else
{return and__3546__auto____10818;
}
} else
{return and__3546__auto____10815;
}
} else
{return and__3546__auto____10813;
}
} else
{return and__3546__auto____10794;
}
} else
{return and__3546__auto____10793;
}
} else
{return and__3546__auto____10789;
}
} else
{return and__3546__auto____10785;
}
} else
{return and__3546__auto____10782;
}
})());
});
var ep3__10904 = (function() { 
var G__10917__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10820 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10820))
{return cljs.core.every_QMARK_.call(null,(function (p1__10686_SHARP_){
var and__3546__auto____10828 = p1.call(null,p1__10686_SHARP_);

if(cljs.core.truth_(and__3546__auto____10828))
{var and__3546__auto____10829 = p2.call(null,p1__10686_SHARP_);

if(cljs.core.truth_(and__3546__auto____10829))
{return p3.call(null,p1__10686_SHARP_);
} else
{return and__3546__auto____10829;
}
} else
{return and__3546__auto____10828;
}
}),args);
} else
{return and__3546__auto____10820;
}
})());
};
var G__10917 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10917__delegate.call(this, x, y, z, args);
};
G__10917.cljs$lang$maxFixedArity = 3;
G__10917.cljs$lang$applyTo = (function (arglist__10918){
var x = cljs.core.first(arglist__10918);
var y = cljs.core.first(cljs.core.next(arglist__10918));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10918)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10918)));
return G__10917__delegate.call(this, x, y, z, args);
});
return G__10917;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10900.call(this);
case  1 :
return ep3__10901.call(this,x);
case  2 :
return ep3__10902.call(this,x,y);
case  3 :
return ep3__10903.call(this,x,y,z);
default:
return ep3__10904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10904.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10851 = (function() { 
var G__10920__delegate = function (p1,p2,p3,ps){
var ps__10831 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10923 = (function (){
return true;
});
var epn__10924 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10687_SHARP_){
return p1__10687_SHARP_.call(null,x);
}),ps__10831);
});
var epn__10925 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10688_SHARP_){
var and__3546__auto____10833 = p1__10688_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10833))
{return p1__10688_SHARP_.call(null,y);
} else
{return and__3546__auto____10833;
}
}),ps__10831);
});
var epn__10926 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10689_SHARP_){
var and__3546__auto____10834 = p1__10689_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10834))
{var and__3546__auto____10835 = p1__10689_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10835))
{return p1__10689_SHARP_.call(null,z);
} else
{return and__3546__auto____10835;
}
} else
{return and__3546__auto____10834;
}
}),ps__10831);
});
var epn__10927 = (function() { 
var G__10952__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10836 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10836))
{return cljs.core.every_QMARK_.call(null,(function (p1__10691_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10691_SHARP_,args);
}),ps__10831);
} else
{return and__3546__auto____10836;
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
G__10952.cljs$lang$applyTo = (function (arglist__10961){
var x = cljs.core.first(arglist__10961);
var y = cljs.core.first(cljs.core.next(arglist__10961));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10961)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10961)));
return G__10952__delegate.call(this, x, y, z, args);
});
return G__10952;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10923.call(this);
case  1 :
return epn__10924.call(this,x);
case  2 :
return epn__10925.call(this,x,y);
case  3 :
return epn__10926.call(this,x,y,z);
default:
return epn__10927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10927.cljs$lang$applyTo;
return epn;
})()
};
var G__10920 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10920__delegate.call(this, p1, p2, p3, ps);
};
G__10920.cljs$lang$maxFixedArity = 3;
G__10920.cljs$lang$applyTo = (function (arglist__10962){
var p1 = cljs.core.first(arglist__10962);
var p2 = cljs.core.first(cljs.core.next(arglist__10962));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10962)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10962)));
return G__10920__delegate.call(this, p1, p2, p3, ps);
});
return G__10920;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10847.call(this,p1);
case  2 :
return every_pred__10848.call(this,p1,p2);
case  3 :
return every_pred__10849.call(this,p1,p2,p3);
default:
return every_pred__10851.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10851.cljs$lang$applyTo;
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
var some_fn__11260 = (function (p){
return (function() {
var sp1 = null;
var sp1__11266 = (function (){
return null;
});
var sp1__11267 = (function (x){
return p.call(null,x);
});
var sp1__11268 = (function (x,y){
var or__3548__auto____10977 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10977))
{return or__3548__auto____10977;
} else
{return p.call(null,y);
}
});
var sp1__11269 = (function (x,y,z){
var or__3548__auto____10980 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10980))
{return or__3548__auto____10980;
} else
{var or__3548__auto____10981 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10981))
{return or__3548__auto____10981;
} else
{return p.call(null,z);
}
}
});
var sp1__11270 = (function() { 
var G__11275__delegate = function (x,y,z,args){
var or__3548__auto____10983 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10983))
{return or__3548__auto____10983;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11275 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11275__delegate.call(this, x, y, z, args);
};
G__11275.cljs$lang$maxFixedArity = 3;
G__11275.cljs$lang$applyTo = (function (arglist__11280){
var x = cljs.core.first(arglist__11280);
var y = cljs.core.first(cljs.core.next(arglist__11280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11280)));
return G__11275__delegate.call(this, x, y, z, args);
});
return G__11275;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11266.call(this);
case  1 :
return sp1__11267.call(this,x);
case  2 :
return sp1__11268.call(this,x,y);
case  3 :
return sp1__11269.call(this,x,y,z);
default:
return sp1__11270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11270.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11261 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11284 = (function (){
return null;
});
var sp2__11285 = (function (x){
var or__3548__auto____10986 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10986))
{return or__3548__auto____10986;
} else
{return p2.call(null,x);
}
});
var sp2__11287 = (function (x,y){
var or__3548__auto____10989 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10989))
{return or__3548__auto____10989;
} else
{var or__3548__auto____10990 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10990))
{return or__3548__auto____10990;
} else
{var or__3548__auto____10993 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10993))
{return or__3548__auto____10993;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11289 = (function (x,y,z){
var or__3548__auto____10996 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10996))
{return or__3548__auto____10996;
} else
{var or__3548__auto____10999 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10999))
{return or__3548__auto____10999;
} else
{var or__3548__auto____11000 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11000))
{return or__3548__auto____11000;
} else
{var or__3548__auto____11002 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11002))
{return or__3548__auto____11002;
} else
{var or__3548__auto____11004 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11004))
{return or__3548__auto____11004;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11290 = (function() { 
var G__11300__delegate = function (x,y,z,args){
var or__3548__auto____11005 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11005))
{return or__3548__auto____11005;
} else
{return cljs.core.some.call(null,(function (p1__10715_SHARP_){
var or__3548__auto____11006 = p1.call(null,p1__10715_SHARP_);

if(cljs.core.truth_(or__3548__auto____11006))
{return or__3548__auto____11006;
} else
{return p2.call(null,p1__10715_SHARP_);
}
}),args);
}
};
var G__11300 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11300__delegate.call(this, x, y, z, args);
};
G__11300.cljs$lang$maxFixedArity = 3;
G__11300.cljs$lang$applyTo = (function (arglist__11305){
var x = cljs.core.first(arglist__11305);
var y = cljs.core.first(cljs.core.next(arglist__11305));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11305)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11305)));
return G__11300__delegate.call(this, x, y, z, args);
});
return G__11300;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11284.call(this);
case  1 :
return sp2__11285.call(this,x);
case  2 :
return sp2__11287.call(this,x,y);
case  3 :
return sp2__11289.call(this,x,y,z);
default:
return sp2__11290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11290.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11262 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11308 = (function (){
return null;
});
var sp3__11310 = (function (x){
var or__3548__auto____11008 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11008))
{return or__3548__auto____11008;
} else
{var or__3548__auto____11009 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11009))
{return or__3548__auto____11009;
} else
{return p3.call(null,x);
}
}
});
var sp3__11311 = (function (x,y){
var or__3548__auto____11012 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11012))
{return or__3548__auto____11012;
} else
{var or__3548__auto____11013 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11013))
{return or__3548__auto____11013;
} else
{var or__3548__auto____11016 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11016))
{return or__3548__auto____11016;
} else
{var or__3548__auto____11018 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11018))
{return or__3548__auto____11018;
} else
{var or__3548__auto____11019 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11019))
{return or__3548__auto____11019;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11312 = (function (x,y,z){
var or__3548__auto____11206 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11206))
{return or__3548__auto____11206;
} else
{var or__3548__auto____11213 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11213))
{return or__3548__auto____11213;
} else
{var or__3548__auto____11214 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11214))
{return or__3548__auto____11214;
} else
{var or__3548__auto____11215 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11215))
{return or__3548__auto____11215;
} else
{var or__3548__auto____11218 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11218))
{return or__3548__auto____11218;
} else
{var or__3548__auto____11219 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11219))
{return or__3548__auto____11219;
} else
{var or__3548__auto____11220 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11220))
{return or__3548__auto____11220;
} else
{var or__3548__auto____11222 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11222))
{return or__3548__auto____11222;
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
var sp3__11313 = (function() { 
var G__11329__delegate = function (x,y,z,args){
var or__3548__auto____11226 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11226))
{return or__3548__auto____11226;
} else
{return cljs.core.some.call(null,(function (p1__10718_SHARP_){
var or__3548__auto____11230 = p1.call(null,p1__10718_SHARP_);

if(cljs.core.truth_(or__3548__auto____11230))
{return or__3548__auto____11230;
} else
{var or__3548__auto____11232 = p2.call(null,p1__10718_SHARP_);

if(cljs.core.truth_(or__3548__auto____11232))
{return or__3548__auto____11232;
} else
{return p3.call(null,p1__10718_SHARP_);
}
}
}),args);
}
};
var G__11329 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11329__delegate.call(this, x, y, z, args);
};
G__11329.cljs$lang$maxFixedArity = 3;
G__11329.cljs$lang$applyTo = (function (arglist__11333){
var x = cljs.core.first(arglist__11333);
var y = cljs.core.first(cljs.core.next(arglist__11333));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11333)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11333)));
return G__11329__delegate.call(this, x, y, z, args);
});
return G__11329;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11308.call(this);
case  1 :
return sp3__11310.call(this,x);
case  2 :
return sp3__11311.call(this,x,y);
case  3 :
return sp3__11312.call(this,x,y,z);
default:
return sp3__11313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11313.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11263 = (function() { 
var G__11336__delegate = function (p1,p2,p3,ps){
var ps__11235 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11340 = (function (){
return null;
});
var spn__11341 = (function (x){
return cljs.core.some.call(null,(function (p1__10719_SHARP_){
return p1__10719_SHARP_.call(null,x);
}),ps__11235);
});
var spn__11342 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10720_SHARP_){
var or__3548__auto____11244 = p1__10720_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11244))
{return or__3548__auto____11244;
} else
{return p1__10720_SHARP_.call(null,y);
}
}),ps__11235);
});
var spn__11343 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10721_SHARP_){
var or__3548__auto____11246 = p1__10721_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11246))
{return or__3548__auto____11246;
} else
{var or__3548__auto____11247 = p1__10721_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11247))
{return or__3548__auto____11247;
} else
{return p1__10721_SHARP_.call(null,z);
}
}
}),ps__11235);
});
var spn__11344 = (function() { 
var G__11355__delegate = function (x,y,z,args){
var or__3548__auto____11250 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11250))
{return or__3548__auto____11250;
} else
{return cljs.core.some.call(null,(function (p1__10722_SHARP_){
return cljs.core.some.call(null,p1__10722_SHARP_,args);
}),ps__11235);
}
};
var G__11355 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11355__delegate.call(this, x, y, z, args);
};
G__11355.cljs$lang$maxFixedArity = 3;
G__11355.cljs$lang$applyTo = (function (arglist__11357){
var x = cljs.core.first(arglist__11357);
var y = cljs.core.first(cljs.core.next(arglist__11357));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11357)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11357)));
return G__11355__delegate.call(this, x, y, z, args);
});
return G__11355;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11340.call(this);
case  1 :
return spn__11341.call(this,x);
case  2 :
return spn__11342.call(this,x,y);
case  3 :
return spn__11343.call(this,x,y,z);
default:
return spn__11344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11344.cljs$lang$applyTo;
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
G__11336.cljs$lang$applyTo = (function (arglist__11360){
var p1 = cljs.core.first(arglist__11360);
var p2 = cljs.core.first(cljs.core.next(arglist__11360));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11360)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11360)));
return G__11336__delegate.call(this, p1, p2, p3, ps);
});
return G__11336;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11260.call(this,p1);
case  2 :
return some_fn__11261.call(this,p1,p2);
case  3 :
return some_fn__11262.call(this,p1,p2,p3);
default:
return some_fn__11263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11263.cljs$lang$applyTo;
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
var map__11411 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11367 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11367))
{var s__11369 = temp__3698__auto____11367;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11369)),map.call(null,f,cljs.core.rest.call(null,s__11369)));
} else
{return null;
}
})));
});
var map__11412 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11372 = cljs.core.seq.call(null,c1);
var s2__11373 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11377 = s1__11372;

if(cljs.core.truth_(and__3546__auto____11377))
{return s2__11373;
} else
{return and__3546__auto____11377;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11372),cljs.core.first.call(null,s2__11373)),map.call(null,f,cljs.core.rest.call(null,s1__11372),cljs.core.rest.call(null,s2__11373)));
} else
{return null;
}
})));
});
var map__11413 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11378 = cljs.core.seq.call(null,c1);
var s2__11383 = cljs.core.seq.call(null,c2);
var s3__11387 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11388 = s1__11378;

if(cljs.core.truth_(and__3546__auto____11388))
{var and__3546__auto____11396 = s2__11383;

if(cljs.core.truth_(and__3546__auto____11396))
{return s3__11387;
} else
{return and__3546__auto____11396;
}
} else
{return and__3546__auto____11388;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11378),cljs.core.first.call(null,s2__11383),cljs.core.first.call(null,s3__11387)),map.call(null,f,cljs.core.rest.call(null,s1__11378),cljs.core.rest.call(null,s2__11383),cljs.core.rest.call(null,s3__11387)));
} else
{return null;
}
})));
});
var map__11414 = (function() { 
var G__11431__delegate = function (f,c1,c2,c3,colls){
var step__11410 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11409 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11409)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11409),step.call(null,map.call(null,cljs.core.rest,ss__11409)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10973_SHARP_){
return cljs.core.apply.call(null,f,p1__10973_SHARP_);
}),step__11410.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11431 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11431__delegate.call(this, f, c1, c2, c3, colls);
};
G__11431.cljs$lang$maxFixedArity = 4;
G__11431.cljs$lang$applyTo = (function (arglist__11434){
var f = cljs.core.first(arglist__11434);
var c1 = cljs.core.first(cljs.core.next(arglist__11434));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11434)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11434))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11434))));
return G__11431__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11431;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11411.call(this,f,c1);
case  3 :
return map__11412.call(this,f,c1,c2);
case  4 :
return map__11413.call(this,f,c1,c2,c3);
default:
return map__11414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11414.cljs$lang$applyTo;
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
{var temp__3698__auto____11443 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11443))
{var s__11444 = temp__3698__auto____11443;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11444),take.call(null,(n - 1),cljs.core.rest.call(null,s__11444)));
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
var step__11699 = (function (n,coll){
while(true){
var s__11697 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11698 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11698))
{return s__11697;
} else
{return and__3546__auto____11698;
}
})()))
{{
var G__11806 = (n - 1);
var G__11807 = cljs.core.rest.call(null,s__11697);
n = G__11806;
coll = G__11807;
continue;
}
} else
{return s__11697;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11699.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11816 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11817 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11816.call(this,n);
case  2 :
return drop_last__11817.call(this,n,s);
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
var s__11828 = cljs.core.seq.call(null,coll);
var lead__11830 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11830))
{{
var G__11835 = cljs.core.next.call(null,s__11828);
var G__11837 = cljs.core.next.call(null,lead__11830);
s__11828 = G__11835;
lead__11830 = G__11837;
continue;
}
} else
{return s__11828;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11853 = (function (pred,coll){
while(true){
var s__11848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11851 = s__11848;

if(cljs.core.truth_(and__3546__auto____11851))
{return pred.call(null,cljs.core.first.call(null,s__11848));
} else
{return and__3546__auto____11851;
}
})()))
{{
var G__11858 = pred;
var G__11860 = cljs.core.rest.call(null,s__11848);
pred = G__11858;
coll = G__11860;
continue;
}
} else
{return s__11848;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11853.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11869 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11869))
{var s__11870 = temp__3698__auto____11869;

return cljs.core.concat.call(null,s__11870,cycle.call(null,s__11870));
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
var repeat__11901 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11902 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11901.call(this,n);
case  2 :
return repeat__11902.call(this,n,x);
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
var repeatedly__11949 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11951 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11949.call(this,n);
case  2 :
return repeatedly__11951.call(this,n,f);
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
var interleave__11989 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11970 = cljs.core.seq.call(null,c1);
var s2__11971 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11973 = s1__11970;

if(cljs.core.truth_(and__3546__auto____11973))
{return s2__11971;
} else
{return and__3546__auto____11973;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11970),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11971),interleave.call(null,cljs.core.rest.call(null,s1__11970),cljs.core.rest.call(null,s2__11971))));
} else
{return null;
}
})));
});
var interleave__11990 = (function() { 
var G__11996__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11979 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11979)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11979),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11979)));
} else
{return null;
}
})));
};
var G__11996 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11996__delegate.call(this, c1, c2, colls);
};
G__11996.cljs$lang$maxFixedArity = 2;
G__11996.cljs$lang$applyTo = (function (arglist__12000){
var c1 = cljs.core.first(arglist__12000);
var c2 = cljs.core.first(cljs.core.next(arglist__12000));
var colls = cljs.core.rest(cljs.core.next(arglist__12000));
return G__11996__delegate.call(this, c1, c2, colls);
});
return G__11996;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11989.call(this,c1,c2);
default:
return interleave__11990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11990.cljs$lang$applyTo;
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
var cat__12011 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12005))
{var coll__12006 = temp__3695__auto____12005;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12006),cat.call(null,cljs.core.rest.call(null,coll__12006),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12011.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12040 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12041 = (function() { 
var G__12044__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12044 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12044__delegate.call(this, f, coll, colls);
};
G__12044.cljs$lang$maxFixedArity = 2;
G__12044.cljs$lang$applyTo = (function (arglist__12047){
var f = cljs.core.first(arglist__12047);
var coll = cljs.core.first(cljs.core.next(arglist__12047));
var colls = cljs.core.rest(cljs.core.next(arglist__12047));
return G__12044__delegate.call(this, f, coll, colls);
});
return G__12044;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12040.call(this,f,coll);
default:
return mapcat__12041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12041.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12049))
{var s__12051 = temp__3698__auto____12049;

var f__12052 = cljs.core.first.call(null,s__12051);
var r__12054 = cljs.core.rest.call(null,s__12051);

if(cljs.core.truth_(pred.call(null,f__12052)))
{return cljs.core.cons.call(null,f__12052,filter.call(null,pred,r__12054));
} else
{return filter.call(null,pred,r__12054);
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
var walk__12073 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12073.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12072_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12072_SHARP_));
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
var partition__12195 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12196 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12185 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12185))
{var s__12186 = temp__3698__auto____12185;

var p__12187 = cljs.core.take.call(null,n,s__12186);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12187))))
{return cljs.core.cons.call(null,p__12187,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12186)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12197 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12190 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12190))
{var s__12191 = temp__3698__auto____12190;

var p__12192 = cljs.core.take.call(null,n,s__12191);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12192))))
{return cljs.core.cons.call(null,p__12192,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12191)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12192,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12195.call(this,n,step);
case  3 :
return partition__12196.call(this,n,step,pad);
case  4 :
return partition__12197.call(this,n,step,pad,coll);
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
var get_in__12206 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12207 = (function (m,ks,not_found){
var sentinel__12199 = cljs.core.lookup_sentinel;
var m__12203 = m;
var ks__12204 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12204))
{var m__12205 = cljs.core.get.call(null,m__12203,cljs.core.first.call(null,ks__12204),sentinel__12199);

if(cljs.core.truth_((sentinel__12199 === m__12205)))
{return not_found;
} else
{{
var G__12209 = sentinel__12199;
var G__12210 = m__12205;
var G__12211 = cljs.core.next.call(null,ks__12204);
sentinel__12199 = G__12209;
m__12203 = G__12210;
ks__12204 = G__12211;
continue;
}
}
} else
{return m__12203;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12206.call(this,m,ks);
case  3 :
return get_in__12207.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12215,v){
var vec__12216__12217 = p__12215;
var k__12218 = cljs.core.nth.call(null,vec__12216__12217,0,null);
var ks__12219 = cljs.core.nthnext.call(null,vec__12216__12217,1);

if(cljs.core.truth_(ks__12219))
{return cljs.core.assoc.call(null,m,k__12218,assoc_in.call(null,cljs.core.get.call(null,m,k__12218),ks__12219,v));
} else
{return cljs.core.assoc.call(null,m,k__12218,v);
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
var this__12278 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12318 = null;
var G__12318__12319 = (function (coll,k){
var this__12279 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12318__12320 = (function (coll,k,not_found){
var this__12280 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12318 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12318__12319.call(this,coll,k);
case  3 :
return G__12318__12320.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12318;
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
var G__12326 = null;
var G__12326__12327 = (function (coll,k){
var this__12283 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12326__12328 = (function (coll,k,not_found){
var this__12285 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12326 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12326__12327.call(this,coll,k);
case  3 :
return G__12326__12328.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12326;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12286 = this;
var new_array__12287 = cljs.core.aclone.call(null,this__12286.array);

new_array__12287.push(o);
return (new cljs.core.Vector(this__12286.meta,new_array__12287));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12333 = null;
var G__12333__12334 = (function (v,f){
var this__12289 = this;
return cljs.core.ci_reduce.call(null,this__12289.array,f);
});
var G__12333__12335 = (function (v,f,start){
var this__12290 = this;
return cljs.core.ci_reduce.call(null,this__12290.array,f,start);
});
G__12333 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12333__12334.call(this,v,f);
case  3 :
return G__12333__12335.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12333;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12291 = this;
if(cljs.core.truth_((this__12291.array.length > 0)))
{var vector_seq__12292 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12291.array.length)))
{return cljs.core.cons.call(null,(this__12291.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12292.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12293 = this;
return this__12293.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12294 = this;
var count__12295 = this__12294.array.length;

if(cljs.core.truth_((count__12295 > 0)))
{return (this__12294.array[(count__12295 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12296 = this;
if(cljs.core.truth_((this__12296.array.length > 0)))
{var new_array__12297 = cljs.core.aclone.call(null,this__12296.array);

new_array__12297.pop();
return (new cljs.core.Vector(this__12296.meta,new_array__12297));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12298 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12299 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12300 = this;
return (new cljs.core.Vector(meta,this__12300.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12304 = this;
return this__12304.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12416 = null;
var G__12416__12418 = (function (coll,n){
var this__12305 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12308 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12308))
{return (n < this__12305.array.length);
} else
{return and__3546__auto____12308;
}
})()))
{return (this__12305.array[n]);
} else
{return null;
}
});
var G__12416__12419 = (function (coll,n,not_found){
var this__12311 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12312 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12312))
{return (n < this__12311.array.length);
} else
{return and__3546__auto____12312;
}
})()))
{return (this__12311.array[n]);
} else
{return not_found;
}
});
G__12416 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12416__12418.call(this,coll,n);
case  3 :
return G__12416__12419.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12416;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12315 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12315.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12422){
var args = cljs.core.seq( arglist__12422 );;
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
var this__12429 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12558 = null;
var G__12558__12559 = (function (coll,k){
var this__12430 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12558__12560 = (function (coll,k,not_found){
var this__12431 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12558 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12558__12559.call(this,coll,k);
case  3 :
return G__12558__12560.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12558;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12436 = this;
var v_pos__12437 = (this__12436.start + key);

return (new cljs.core.Subvec(this__12436.meta,cljs.core._assoc.call(null,this__12436.v,v_pos__12437,val),this__12436.start,((this__12436.end > (v_pos__12437 + 1)) ? this__12436.end : (v_pos__12437 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12563 = null;
var G__12563__12564 = (function (coll,k){
var this__12438 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12563__12566 = (function (coll,k,not_found){
var this__12439 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12563 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12563__12564.call(this,coll,k);
case  3 :
return G__12563__12566.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12563;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12440 = this;
return (new cljs.core.Subvec(this__12440.meta,cljs.core._assoc_n.call(null,this__12440.v,this__12440.end,o),this__12440.start,(this__12440.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12572 = null;
var G__12572__12573 = (function (coll,f){
var this__12443 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12572__12574 = (function (coll,f,start){
var this__12444 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12572 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12572__12573.call(this,coll,f);
case  3 :
return G__12572__12574.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12572;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12494 = this;
var subvec_seq__12497 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12494.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12494.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12497.call(null,this__12494.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12498 = this;
return (this__12498.end - this__12498.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12499 = this;
return cljs.core._nth.call(null,this__12499.v,(this__12499.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12500 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12500.start,this__12500.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12500.meta,this__12500.v,this__12500.start,(this__12500.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12502 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12504 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12507 = this;
return (new cljs.core.Subvec(meta,this__12507.v,this__12507.start,this__12507.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12547 = this;
return this__12547.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12667 = null;
var G__12667__12668 = (function (coll,n){
var this__12551 = this;
return cljs.core._nth.call(null,this__12551.v,(this__12551.start + n));
});
var G__12667__12669 = (function (coll,n,not_found){
var this__12555 = this;
return cljs.core._nth.call(null,this__12555.v,(this__12555.start + n),not_found);
});
G__12667 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12667__12668.call(this,coll,n);
case  3 :
return G__12667__12669.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12667;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12557 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12557.meta);
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
var this__12693 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12694 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12695 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12696 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12696.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12697 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12698 = this;
return cljs.core._first.call(null,this__12698.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12699 = this;
var temp__3695__auto____12700 = cljs.core.next.call(null,this__12699.front);

if(cljs.core.truth_(temp__3695__auto____12700))
{var f1__12701 = temp__3695__auto____12700;

return (new cljs.core.PersistentQueueSeq(this__12699.meta,f1__12701,this__12699.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12699.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12699.meta,this__12699.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12702 = this;
return this__12702.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12704 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12704.front,this__12704.rear));
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
var this__12716 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12717 = this;
if(cljs.core.truth_(this__12717.front))
{return (new cljs.core.PersistentQueue(this__12717.meta,(this__12717.count + 1),this__12717.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12718 = this__12717.rear;

if(cljs.core.truth_(or__3548__auto____12718))
{return or__3548__auto____12718;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12717.meta,(this__12717.count + 1),cljs.core.conj.call(null,this__12717.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12719 = this;
var rear__12720 = cljs.core.seq.call(null,this__12719.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12760 = this__12719.front;

if(cljs.core.truth_(or__3548__auto____12760))
{return or__3548__auto____12760;
} else
{return rear__12720;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12719.front,cljs.core.seq.call(null,rear__12720)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12762 = this;
return this__12762.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12763 = this;
return cljs.core._first.call(null,this__12763.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12764 = this;
if(cljs.core.truth_(this__12764.front))
{var temp__3695__auto____12767 = cljs.core.next.call(null,this__12764.front);

if(cljs.core.truth_(temp__3695__auto____12767))
{var f1__12770 = temp__3695__auto____12767;

return (new cljs.core.PersistentQueue(this__12764.meta,(this__12764.count - 1),f1__12770,this__12764.rear));
} else
{return (new cljs.core.PersistentQueue(this__12764.meta,(this__12764.count - 1),cljs.core.seq.call(null,this__12764.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12775 = this;
return cljs.core.first.call(null,this__12775.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12776 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12777 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12786 = this;
return (new cljs.core.PersistentQueue(meta,this__12786.count,this__12786.front,this__12786.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12787 = this;
return this__12787.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12789 = this;
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
var this__12821 = this;
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
var len__12834 = array.length;

var i__12835 = 0;

while(true){
if(cljs.core.truth_((i__12835 < len__12834)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12835]))))
{return i__12835;
} else
{{
var G__12839 = (i__12835 + incr);
i__12835 = G__12839;
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
var obj_map_contains_key_QMARK___12845 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12846 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12843 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12843))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12843;
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
return obj_map_contains_key_QMARK___12845.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12846.call(this,k,strobj,true_val,false_val);
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
var this__12939 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12980 = null;
var G__12980__12981 = (function (coll,k){
var this__12940 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12980__12982 = (function (coll,k,not_found){
var this__12942 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12942.strobj,(this__12942.strobj[k]),not_found);
});
G__12980 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12980__12981.call(this,coll,k);
case  3 :
return G__12980__12982.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12980;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12944 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12946 = goog.object.clone.call(null,this__12944.strobj);
var overwrite_QMARK___12947 = new_strobj__12946.hasOwnProperty(k);

(new_strobj__12946[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12947))
{return (new cljs.core.ObjMap(this__12944.meta,this__12944.keys,new_strobj__12946));
} else
{var new_keys__12949 = cljs.core.aclone.call(null,this__12944.keys);

new_keys__12949.push(k);
return (new cljs.core.ObjMap(this__12944.meta,new_keys__12949,new_strobj__12946));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12944.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12952 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12952.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12990 = null;
var G__12990__12993 = (function (coll,k){
var this__12954 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12990__12994 = (function (coll,k,not_found){
var this__12956 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12990 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12990__12993.call(this,coll,k);
case  3 :
return G__12990__12994.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12990;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12958 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12961 = this;
if(cljs.core.truth_((this__12961.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12872_SHARP_){
return cljs.core.vector.call(null,p1__12872_SHARP_,(this__12961.strobj[p1__12872_SHARP_]));
}),this__12961.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12963 = this;
return this__12963.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12964 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12969 = this;
return (new cljs.core.ObjMap(meta,this__12969.keys,this__12969.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12970 = this;
return this__12970.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12973 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12973.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12976 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12977 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12977))
{return this__12976.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12977;
}
})()))
{var new_keys__12978 = cljs.core.aclone.call(null,this__12976.keys);
var new_strobj__12979 = goog.object.clone.call(null,this__12976.strobj);

new_keys__12978.splice(cljs.core.scan_array.call(null,1,k,new_keys__12978),1);
cljs.core.js_delete.call(null,new_strobj__12979,k);
return (new cljs.core.ObjMap(this__12976.meta,new_keys__12978,new_strobj__12979));
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
var this__13033 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13136 = null;
var G__13136__13137 = (function (coll,k){
var this__13035 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13136__13138 = (function (coll,k,not_found){
var this__13039 = this;
var bucket__13040 = (this__13039.hashobj[cljs.core.hash.call(null,k)]);
var i__13041 = (cljs.core.truth_(bucket__13040)?cljs.core.scan_array.call(null,2,k,bucket__13040):null);

if(cljs.core.truth_(i__13041))
{return (bucket__13040[(i__13041 + 1)]);
} else
{return not_found;
}
});
G__13136 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13136__13137.call(this,coll,k);
case  3 :
return G__13136__13138.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13136;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13044 = this;
var h__13045 = cljs.core.hash.call(null,k);
var bucket__13046 = (this__13044.hashobj[h__13045]);

if(cljs.core.truth_(bucket__13046))
{var new_bucket__13047 = cljs.core.aclone.call(null,bucket__13046);
var new_hashobj__13048 = goog.object.clone.call(null,this__13044.hashobj);

(new_hashobj__13048[h__13045] = new_bucket__13047);
var temp__3695__auto____13049 = cljs.core.scan_array.call(null,2,k,new_bucket__13047);

if(cljs.core.truth_(temp__3695__auto____13049))
{var i__13050 = temp__3695__auto____13049;

(new_bucket__13047[(i__13050 + 1)] = v);
return (new cljs.core.HashMap(this__13044.meta,this__13044.count,new_hashobj__13048));
} else
{new_bucket__13047.push(k,v);
return (new cljs.core.HashMap(this__13044.meta,(this__13044.count + 1),new_hashobj__13048));
}
} else
{var new_hashobj__13053 = goog.object.clone.call(null,this__13044.hashobj);

(new_hashobj__13053[h__13045] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13044.meta,(this__13044.count + 1),new_hashobj__13053));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13057 = this;
var bucket__13060 = (this__13057.hashobj[cljs.core.hash.call(null,k)]);
var i__13062 = (cljs.core.truth_(bucket__13060)?cljs.core.scan_array.call(null,2,k,bucket__13060):null);

if(cljs.core.truth_(i__13062))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13155 = null;
var G__13155__13157 = (function (coll,k){
var this__13065 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13155__13158 = (function (coll,k,not_found){
var this__13069 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13155 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13155__13157.call(this,coll,k);
case  3 :
return G__13155__13158.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13155;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13076 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13083 = this;
if(cljs.core.truth_((this__13083.count > 0)))
{var hashes__13101 = cljs.core.js_keys.call(null,this__13083.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13024_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13083.hashobj[p1__13024_SHARP_])));
}),hashes__13101);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13104 = this;
return this__13104.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13105 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13107 = this;
return (new cljs.core.HashMap(meta,this__13107.count,this__13107.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13113 = this;
return this__13113.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13117 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13117.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13119 = this;
var h__13122 = cljs.core.hash.call(null,k);
var bucket__13123 = (this__13119.hashobj[h__13122]);
var i__13125 = (cljs.core.truth_(bucket__13123)?cljs.core.scan_array.call(null,2,k,bucket__13123):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13125)))
{return coll;
} else
{var new_hashobj__13127 = goog.object.clone.call(null,this__13119.hashobj);

if(cljs.core.truth_((3 > bucket__13123.length)))
{cljs.core.js_delete.call(null,new_hashobj__13127,h__13122);
} else
{var new_bucket__13129 = cljs.core.aclone.call(null,bucket__13123);

new_bucket__13129.splice(i__13125,2);
(new_hashobj__13127[h__13122] = new_bucket__13129);
}
return (new cljs.core.HashMap(this__13119.meta,(this__13119.count - 1),new_hashobj__13127));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13184 = ks.length;

var i__13185 = 0;
var out__13186 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13185 < len__13184)))
{{
var G__13190 = (i__13185 + 1);
var G__13191 = cljs.core.assoc.call(null,out__13186,(ks[i__13185]),(vs[i__13185]));
i__13185 = G__13190;
out__13186 = G__13191;
continue;
}
} else
{return out__13186;
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
var in$__13196 = cljs.core.seq.call(null,keyvals);
var out__13197 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13196))
{{
var G__13201 = cljs.core.nnext.call(null,in$__13196);
var G__13202 = cljs.core.assoc.call(null,out__13197,cljs.core.first.call(null,in$__13196),cljs.core.second.call(null,in$__13196));
in$__13196 = G__13201;
out__13197 = G__13202;
continue;
}
} else
{return out__13197;
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
hash_map.cljs$lang$applyTo = (function (arglist__13203){
var keyvals = cljs.core.seq( arglist__13203 );;
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
{return cljs.core.reduce.call(null,(function (p1__13208_SHARP_,p2__13209_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13211 = p1__13208_SHARP_;

if(cljs.core.truth_(or__3548__auto____13211))
{return or__3548__auto____13211;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13209_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13221){
var maps = cljs.core.seq( arglist__13221 );;
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
{var merge_entry__13231 = (function (m,e){
var k__13229 = cljs.core.first.call(null,e);
var v__13230 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13229)))
{return cljs.core.assoc.call(null,m,k__13229,f.call(null,cljs.core.get.call(null,m,k__13229),v__13230));
} else
{return cljs.core.assoc.call(null,m,k__13229,v__13230);
}
});
var merge2__13236 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13231,(function (){var or__3548__auto____13233 = m1;

if(cljs.core.truth_(or__3548__auto____13233))
{return or__3548__auto____13233;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13236,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13242){
var f = cljs.core.first(arglist__13242);
var maps = cljs.core.rest(arglist__13242);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13251 = cljs.core.ObjMap.fromObject([],{});
var keys__13252 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13252))
{var key__13254 = cljs.core.first.call(null,keys__13252);
var entry__13255 = cljs.core.get.call(null,map,key__13254,"﷐'user/not-found");

{
var G__13270 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13255,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13251,key__13254,entry__13255):ret__13251);
var G__13271 = cljs.core.next.call(null,keys__13252);
ret__13251 = G__13270;
keys__13252 = G__13271;
continue;
}
} else
{return ret__13251;
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
var this__13363 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13398 = null;
var G__13398__13399 = (function (coll,v){
var this__13365 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13398__13400 = (function (coll,v,not_found){
var this__13366 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13366.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13398 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13398__13399.call(this,coll,v);
case  3 :
return G__13398__13400.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13398;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13404 = null;
var G__13404__13405 = (function (coll,k){
var this__13367 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13404__13406 = (function (coll,k,not_found){
var this__13368 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13404 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13404__13405.call(this,coll,k);
case  3 :
return G__13404__13406.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13404;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13371 = this;
return (new cljs.core.Set(this__13371.meta,cljs.core.assoc.call(null,this__13371.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13374 = this;
return cljs.core.keys.call(null,this__13374.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13377 = this;
return (new cljs.core.Set(this__13377.meta,cljs.core.dissoc.call(null,this__13377.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13378 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13379 = this;
var and__3546__auto____13381 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13381))
{var and__3546__auto____13383 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13383))
{return cljs.core.every_QMARK_.call(null,(function (p1__13245_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13245_SHARP_);
}),other);
} else
{return and__3546__auto____13383;
}
} else
{return and__3546__auto____13381;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13385 = this;
return (new cljs.core.Set(meta,this__13385.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13388 = this;
return this__13388.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13393 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13393.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13425 = cljs.core.seq.call(null,coll);
var out__13426 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13425))))
{{
var G__13431 = cljs.core.rest.call(null,in$__13425);
var G__13432 = cljs.core.conj.call(null,out__13426,cljs.core.first.call(null,in$__13425));
in$__13425 = G__13431;
out__13426 = G__13432;
continue;
}
} else
{return out__13426;
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
{var n__13436 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13438 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13438))
{var e__13439 = temp__3695__auto____13438;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13439));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13436,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13419_SHARP_){
var temp__3695__auto____13441 = cljs.core.find.call(null,smap,p1__13419_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13441))
{var e__13443 = temp__3695__auto____13441;

return cljs.core.second.call(null,e__13443);
} else
{return p1__13419_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13482 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13473,seen){
while(true){
var vec__13474__13475 = p__13473;
var f__13476 = cljs.core.nth.call(null,vec__13474__13475,0,null);
var xs__13477 = vec__13474__13475;

var temp__3698__auto____13478 = cljs.core.seq.call(null,xs__13477);

if(cljs.core.truth_(temp__3698__auto____13478))
{var s__13479 = temp__3698__auto____13478;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13476)))
{{
var G__13494 = cljs.core.rest.call(null,s__13479);
var G__13495 = seen;
p__13473 = G__13494;
seen = G__13495;
continue;
}
} else
{return cljs.core.cons.call(null,f__13476,step.call(null,cljs.core.rest.call(null,s__13479),cljs.core.conj.call(null,seen,f__13476)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13482.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13500 = cljs.core.Vector.fromArray([]);
var s__13501 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13501)))
{{
var G__13507 = cljs.core.conj.call(null,ret__13500,cljs.core.first.call(null,s__13501));
var G__13508 = cljs.core.next.call(null,s__13501);
ret__13500 = G__13507;
s__13501 = G__13508;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13500);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13510 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13510))
{return or__3548__auto____13510;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13512 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13512 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13512 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13528 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13528))
{return or__3548__auto____13528;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13532 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13532 > -1)))
{return cljs.core.subs.call(null,x,2,i__13532);
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
var map__13634 = cljs.core.ObjMap.fromObject([],{});
var ks__13635 = cljs.core.seq.call(null,keys);
var vs__13636 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13637 = ks__13635;

if(cljs.core.truth_(and__3546__auto____13637))
{return vs__13636;
} else
{return and__3546__auto____13637;
}
})()))
{{
var G__13638 = cljs.core.assoc.call(null,map__13634,cljs.core.first.call(null,ks__13635),cljs.core.first.call(null,vs__13636));
var G__13639 = cljs.core.next.call(null,ks__13635);
var G__13640 = cljs.core.next.call(null,vs__13636);
map__13634 = G__13638;
ks__13635 = G__13639;
vs__13636 = G__13640;
continue;
}
} else
{return map__13634;
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
var max_key__13644 = (function (k,x){
return x;
});
var max_key__13645 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13646 = (function() { 
var G__13648__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13632_SHARP_,p2__13633_SHARP_){
return max_key.call(null,k,p1__13632_SHARP_,p2__13633_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13648 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13648__delegate.call(this, k, x, y, more);
};
G__13648.cljs$lang$maxFixedArity = 3;
G__13648.cljs$lang$applyTo = (function (arglist__13650){
var k = cljs.core.first(arglist__13650);
var x = cljs.core.first(cljs.core.next(arglist__13650));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13650)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13650)));
return G__13648__delegate.call(this, k, x, y, more);
});
return G__13648;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13644.call(this,k,x);
case  3 :
return max_key__13645.call(this,k,x,y);
default:
return max_key__13646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13646.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13666 = (function (k,x){
return x;
});
var min_key__13667 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13668 = (function() { 
var G__13670__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13641_SHARP_,p2__13642_SHARP_){
return min_key.call(null,k,p1__13641_SHARP_,p2__13642_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13670 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13670__delegate.call(this, k, x, y, more);
};
G__13670.cljs$lang$maxFixedArity = 3;
G__13670.cljs$lang$applyTo = (function (arglist__13671){
var k = cljs.core.first(arglist__13671);
var x = cljs.core.first(cljs.core.next(arglist__13671));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13671)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13671)));
return G__13670__delegate.call(this, k, x, y, more);
});
return G__13670;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13666.call(this,k,x);
case  3 :
return min_key__13667.call(this,k,x,y);
default:
return min_key__13668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13668.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13686 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13687 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13679 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13679))
{var s__13680 = temp__3698__auto____13679;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13680),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13680)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13686.call(this,n,step);
case  3 :
return partition_all__13687.call(this,n,step,coll);
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
var temp__3698__auto____13802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13802))
{var s__13808 = temp__3698__auto____13802;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13808))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13808),take_while.call(null,pred,cljs.core.rest.call(null,s__13808)));
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
var this__13825 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13826 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13876 = null;
var G__13876__13877 = (function (rng,f){
var this__13828 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13876__13878 = (function (rng,f,s){
var this__13831 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13876 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13876__13877.call(this,rng,f);
case  3 :
return G__13876__13878.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13876;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13832 = this;
var comp__13836 = (cljs.core.truth_((this__13832.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13836.call(null,this__13832.start,this__13832.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13840 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13840.end - this__13840.start) / this__13840.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13841 = this;
return this__13841.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13845 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13845.meta,(this__13845.start + this__13845.step),this__13845.end,this__13845.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13846 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13855 = this;
return (new cljs.core.Range(meta,this__13855.start,this__13855.end,this__13855.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13857 = this;
return this__13857.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13899 = null;
var G__13899__13900 = (function (rng,n){
var this__13858 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13858.start + (n * this__13858.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13859 = (this__13858.start > this__13858.end);

if(cljs.core.truth_(and__3546__auto____13859))
{return cljs.core._EQ_.call(null,this__13858.step,0);
} else
{return and__3546__auto____13859;
}
})()))
{return this__13858.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13899__13901 = (function (rng,n,not_found){
var this__13865 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13865.start + (n * this__13865.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13868 = (this__13865.start > this__13865.end);

if(cljs.core.truth_(and__3546__auto____13868))
{return cljs.core._EQ_.call(null,this__13865.step,0);
} else
{return and__3546__auto____13868;
}
})()))
{return this__13865.start;
} else
{return not_found;
}
}
});
G__13899 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13899__13900.call(this,rng,n);
case  3 :
return G__13899__13901.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13899;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13872 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13872.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13922 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13923 = (function (end){
return range.call(null,0,end,1);
});
var range__13924 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13925 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13922.call(this);
case  1 :
return range__13923.call(this,start);
case  2 :
return range__13924.call(this,start,end);
case  3 :
return range__13925.call(this,start,end,step);
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
var temp__3698__auto____13932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13932))
{var s__13933 = temp__3698__auto____13932;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13933),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13933)));
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
var temp__3698__auto____13944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13944))
{var s__13945 = temp__3698__auto____13944;

var fst__13946 = cljs.core.first.call(null,s__13945);
var fv__13947 = f.call(null,fst__13946);
var run__13949 = cljs.core.cons.call(null,fst__13946,cljs.core.take_while.call(null,(function (p1__13935_SHARP_){
return cljs.core._EQ_.call(null,fv__13947,f.call(null,p1__13935_SHARP_));
}),cljs.core.next.call(null,s__13945)));

return cljs.core.cons.call(null,run__13949,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13949),s__13945))));
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
var reductions__14017 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14000 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14000))
{var s__14001 = temp__3695__auto____14000;

return reductions.call(null,f,cljs.core.first.call(null,s__14001),cljs.core.rest.call(null,s__14001));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14020 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14004 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14004))
{var s__14009 = temp__3698__auto____14004;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14009)),cljs.core.rest.call(null,s__14009));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14017.call(this,f,init);
case  3 :
return reductions__14020.call(this,f,init,coll);
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
var juxt__14050 = (function (f){
return (function() {
var G__14058 = null;
var G__14058__14065 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14058__14066 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14058__14067 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14058__14068 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14058__14069 = (function() { 
var G__14071__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14071__delegate.call(this, x, y, z, args);
};
G__14071.cljs$lang$maxFixedArity = 3;
G__14071.cljs$lang$applyTo = (function (arglist__14072){
var x = cljs.core.first(arglist__14072);
var y = cljs.core.first(cljs.core.next(arglist__14072));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14072)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14072)));
return G__14071__delegate.call(this, x, y, z, args);
});
return G__14071;
})()
;
G__14058 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14058__14065.call(this);
case  1 :
return G__14058__14066.call(this,x);
case  2 :
return G__14058__14067.call(this,x,y);
case  3 :
return G__14058__14068.call(this,x,y,z);
default:
return G__14058__14069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14058.cljs$lang$maxFixedArity = 3;
G__14058.cljs$lang$applyTo = G__14058__14069.cljs$lang$applyTo;
return G__14058;
})()
});
var juxt__14051 = (function (f,g){
return (function() {
var G__14075 = null;
var G__14075__14076 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14075__14077 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14075__14078 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14075__14079 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14075__14080 = (function() { 
var G__14085__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14085 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14085__delegate.call(this, x, y, z, args);
};
G__14085.cljs$lang$maxFixedArity = 3;
G__14085.cljs$lang$applyTo = (function (arglist__14089){
var x = cljs.core.first(arglist__14089);
var y = cljs.core.first(cljs.core.next(arglist__14089));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14089)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14089)));
return G__14085__delegate.call(this, x, y, z, args);
});
return G__14085;
})()
;
G__14075 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14075__14076.call(this);
case  1 :
return G__14075__14077.call(this,x);
case  2 :
return G__14075__14078.call(this,x,y);
case  3 :
return G__14075__14079.call(this,x,y,z);
default:
return G__14075__14080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14075.cljs$lang$maxFixedArity = 3;
G__14075.cljs$lang$applyTo = G__14075__14080.cljs$lang$applyTo;
return G__14075;
})()
});
var juxt__14052 = (function (f,g,h){
return (function() {
var G__14096 = null;
var G__14096__14098 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14096__14099 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14096__14100 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14096__14101 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14096__14102 = (function() { 
var G__14112__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14112 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14112__delegate.call(this, x, y, z, args);
};
G__14112.cljs$lang$maxFixedArity = 3;
G__14112.cljs$lang$applyTo = (function (arglist__14115){
var x = cljs.core.first(arglist__14115);
var y = cljs.core.first(cljs.core.next(arglist__14115));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14115)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14115)));
return G__14112__delegate.call(this, x, y, z, args);
});
return G__14112;
})()
;
G__14096 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14096__14098.call(this);
case  1 :
return G__14096__14099.call(this,x);
case  2 :
return G__14096__14100.call(this,x,y);
case  3 :
return G__14096__14101.call(this,x,y,z);
default:
return G__14096__14102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14096.cljs$lang$maxFixedArity = 3;
G__14096.cljs$lang$applyTo = G__14096__14102.cljs$lang$applyTo;
return G__14096;
})()
});
var juxt__14053 = (function() { 
var G__14119__delegate = function (f,g,h,fs){
var fs__14048 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14123 = null;
var G__14123__14124 = (function (){
return cljs.core.reduce.call(null,(function (p1__13968_SHARP_,p2__13969_SHARP_){
return cljs.core.conj.call(null,p1__13968_SHARP_,p2__13969_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14048);
});
var G__14123__14125 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13970_SHARP_,p2__13971_SHARP_){
return cljs.core.conj.call(null,p1__13970_SHARP_,p2__13971_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14048);
});
var G__14123__14126 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13972_SHARP_,p2__13973_SHARP_){
return cljs.core.conj.call(null,p1__13972_SHARP_,p2__13973_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14048);
});
var G__14123__14127 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13975_SHARP_,p2__13989_SHARP_){
return cljs.core.conj.call(null,p1__13975_SHARP_,p2__13989_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14048);
});
var G__14123__14128 = (function() { 
var G__14134__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13991_SHARP_,p2__13995_SHARP_){
return cljs.core.conj.call(null,p1__13991_SHARP_,cljs.core.apply.call(null,p2__13995_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14048);
};
var G__14134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14134__delegate.call(this, x, y, z, args);
};
G__14134.cljs$lang$maxFixedArity = 3;
G__14134.cljs$lang$applyTo = (function (arglist__14135){
var x = cljs.core.first(arglist__14135);
var y = cljs.core.first(cljs.core.next(arglist__14135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14135)));
return G__14134__delegate.call(this, x, y, z, args);
});
return G__14134;
})()
;
G__14123 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14123__14124.call(this);
case  1 :
return G__14123__14125.call(this,x);
case  2 :
return G__14123__14126.call(this,x,y);
case  3 :
return G__14123__14127.call(this,x,y,z);
default:
return G__14123__14128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14123.cljs$lang$maxFixedArity = 3;
G__14123.cljs$lang$applyTo = G__14123__14128.cljs$lang$applyTo;
return G__14123;
})()
};
var G__14119 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14119__delegate.call(this, f, g, h, fs);
};
G__14119.cljs$lang$maxFixedArity = 3;
G__14119.cljs$lang$applyTo = (function (arglist__14138){
var f = cljs.core.first(arglist__14138);
var g = cljs.core.first(cljs.core.next(arglist__14138));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14138)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14138)));
return G__14119__delegate.call(this, f, g, h, fs);
});
return G__14119;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14050.call(this,f);
case  2 :
return juxt__14051.call(this,f,g);
case  3 :
return juxt__14052.call(this,f,g,h);
default:
return juxt__14053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14053.cljs$lang$applyTo;
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
var dorun__14179 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14185 = cljs.core.next.call(null,coll);
coll = G__14185;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14180 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14162 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14162))
{return (n > 0);
} else
{return and__3546__auto____14162;
}
})()))
{{
var G__14190 = (n - 1);
var G__14191 = cljs.core.next.call(null,coll);
n = G__14190;
coll = G__14191;
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
return dorun__14179.call(this,n);
case  2 :
return dorun__14180.call(this,n,coll);
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
var doall__14200 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14201 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14200.call(this,n);
case  2 :
return doall__14201.call(this,n,coll);
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
var matches__14204 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14204),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14204),1)))
{return cljs.core.first.call(null,matches__14204);
} else
{return cljs.core.vec.call(null,matches__14204);
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
var matches__14208 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14208)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14208),1)))
{return cljs.core.first.call(null,matches__14208);
} else
{return cljs.core.vec.call(null,matches__14208);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14210 = cljs.core.re_find.call(null,re,s);
var match_idx__14211 = s.search(re);
var match_str__14225 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14210))?cljs.core.first.call(null,match_data__14210):match_data__14210);
var post_match__14233 = cljs.core.subs.call(null,s,(match_idx__14211 + cljs.core.count.call(null,match_str__14225)));

if(cljs.core.truth_(match_data__14210))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14210,re_seq.call(null,re,post_match__14233));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14241_SHARP_){
return print_one.call(null,p1__14241_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14265 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14265))
{var and__3546__auto____14277 = (function (){var x__445__auto____14267 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14269 = x__445__auto____14267;

if(cljs.core.truth_(and__3546__auto____14269))
{var and__3546__auto____14276 = x__445__auto____14267.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14276))
{return cljs.core.not.call(null,x__445__auto____14267.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14276;
}
} else
{return and__3546__auto____14269;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14267);
}
})();

if(cljs.core.truth_(and__3546__auto____14277))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14277;
}
} else
{return and__3546__auto____14265;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14278 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14279 = x__445__auto____14278;

if(cljs.core.truth_(and__3546__auto____14279))
{var and__3546__auto____14280 = x__445__auto____14278.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14280))
{return cljs.core.not.call(null,x__445__auto____14278.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14280;
}
} else
{return and__3546__auto____14279;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14278);
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
var first_obj__14296 = cljs.core.first.call(null,objs);
var sb__14297 = (new goog.string.StringBuffer());

var G__14299__14300 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14299__14300))
{var obj__14323 = cljs.core.first.call(null,G__14299__14300);
var G__14299__14324 = G__14299__14300;

while(true){
if(cljs.core.truth_((obj__14323 === first_obj__14296)))
{} else
{sb__14297.append(" ");
}
var G__14325__14329 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14323,opts));

if(cljs.core.truth_(G__14325__14329))
{var string__14344 = cljs.core.first.call(null,G__14325__14329);
var G__14325__14345 = G__14325__14329;

while(true){
sb__14297.append(string__14344);
var temp__3698__auto____14347 = cljs.core.next.call(null,G__14325__14345);

if(cljs.core.truth_(temp__3698__auto____14347))
{var G__14325__14348 = temp__3698__auto____14347;

{
var G__14402 = cljs.core.first.call(null,G__14325__14348);
var G__14403 = G__14325__14348;
string__14344 = G__14402;
G__14325__14345 = G__14403;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14368 = cljs.core.next.call(null,G__14299__14324);

if(cljs.core.truth_(temp__3698__auto____14368))
{var G__14299__14398 = temp__3698__auto____14368;

{
var G__14410 = cljs.core.first.call(null,G__14299__14398);
var G__14411 = G__14299__14398;
obj__14323 = G__14410;
G__14299__14324 = G__14411;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14297);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14414 = cljs.core.first.call(null,objs);

var G__14415__14416 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14415__14416))
{var obj__14417 = cljs.core.first.call(null,G__14415__14416);
var G__14415__14419 = G__14415__14416;

while(true){
if(cljs.core.truth_((obj__14417 === first_obj__14414)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14420__14421 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14417,opts));

if(cljs.core.truth_(G__14420__14421))
{var string__14422 = cljs.core.first.call(null,G__14420__14421);
var G__14420__14423 = G__14420__14421;

while(true){
cljs.core.string_print.call(null,string__14422);
var temp__3698__auto____14424 = cljs.core.next.call(null,G__14420__14423);

if(cljs.core.truth_(temp__3698__auto____14424))
{var G__14420__14425 = temp__3698__auto____14424;

{
var G__14438 = cljs.core.first.call(null,G__14420__14425);
var G__14440 = G__14420__14425;
string__14422 = G__14438;
G__14420__14423 = G__14440;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14426 = cljs.core.next.call(null,G__14415__14419);

if(cljs.core.truth_(temp__3698__auto____14426))
{var G__14415__14427 = temp__3698__auto____14426;

{
var G__14445 = cljs.core.first.call(null,G__14415__14427);
var G__14448 = G__14415__14427;
obj__14417 = G__14445;
G__14415__14419 = G__14448;
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
pr_str.cljs$lang$applyTo = (function (arglist__14485){
var objs = cljs.core.seq( arglist__14485 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14503){
var objs = cljs.core.seq( arglist__14503 );;
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
println.cljs$lang$applyTo = (function (arglist__14515){
var objs = cljs.core.seq( arglist__14515 );;
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
prn.cljs$lang$applyTo = (function (arglist__14520){
var objs = cljs.core.seq( arglist__14520 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14526 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14526,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14549 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14549))
{var nspc__14551 = temp__3698__auto____14549;

return cljs.core.str.call(null,nspc__14551,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14555 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14555))
{var nspc__14557 = temp__3698__auto____14555;

return cljs.core.str.call(null,nspc__14557,"/");
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
var pr_pair__14625 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14625,"{",", ","}",opts,coll);
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
var this__14644 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14645 = this;
var G__14646__14647 = cljs.core.seq.call(null,this__14645.watches);

if(cljs.core.truth_(G__14646__14647))
{var G__14649__14652 = cljs.core.first.call(null,G__14646__14647);
var vec__14650__14653 = G__14649__14652;
var key__14654 = cljs.core.nth.call(null,vec__14650__14653,0,null);
var f__14655 = cljs.core.nth.call(null,vec__14650__14653,1,null);
var G__14646__14656 = G__14646__14647;

var G__14649__14657 = G__14649__14652;
var G__14646__14658 = G__14646__14656;

while(true){
var vec__14659__14660 = G__14649__14657;
var key__14661 = cljs.core.nth.call(null,vec__14659__14660,0,null);
var f__14662 = cljs.core.nth.call(null,vec__14659__14660,1,null);
var G__14646__14663 = G__14646__14658;

f__14662.call(null,key__14661,this$,oldval,newval);
var temp__3698__auto____14664 = cljs.core.next.call(null,G__14646__14663);

if(cljs.core.truth_(temp__3698__auto____14664))
{var G__14646__14665 = temp__3698__auto____14664;

{
var G__14684 = cljs.core.first.call(null,G__14646__14665);
var G__14685 = G__14646__14665;
G__14649__14657 = G__14684;
G__14646__14658 = G__14685;
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
var this__14666 = this;
return this$.watches = cljs.core.assoc.call(null,this__14666.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14670 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14670.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14674 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14674.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14675 = this;
return this__14675.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14678 = this;
return this__14678.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14680 = this;
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
var atom__14753 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14754 = (function() { 
var G__14756__delegate = function (x,p__14689){
var map__14740__14742 = p__14689;
var map__14740__14743 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14740__14742))?cljs.core.apply.call(null,cljs.core.hash_map,map__14740__14742):map__14740__14742);
var validator__14744 = cljs.core.get.call(null,map__14740__14743,"﷐'validator");
var meta__14746 = cljs.core.get.call(null,map__14740__14743,"﷐'meta");

return (new cljs.core.Atom(x,meta__14746,validator__14744,null));
};
var G__14756 = function (x,var_args){
var p__14689 = null;
if (goog.isDef(var_args)) {
  p__14689 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14756__delegate.call(this, x, p__14689);
};
G__14756.cljs$lang$maxFixedArity = 1;
G__14756.cljs$lang$applyTo = (function (arglist__14763){
var x = cljs.core.first(arglist__14763);
var p__14689 = cljs.core.rest(arglist__14763);
return G__14756__delegate.call(this, x, p__14689);
});
return G__14756;
})()
;
atom = function(x,var_args){
var p__14689 = var_args;
switch(arguments.length){
case  1 :
return atom__14753.call(this,x);
default:
return atom__14754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14754.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14785 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14785))
{var validate__14786 = temp__3698__auto____14785;

if(cljs.core.truth_(validate__14786.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14793 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14793,new_value);
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
var swap_BANG___14801 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14802 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14804 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14805 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14806 = (function() { 
var G__14811__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14811 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14811__delegate.call(this, a, f, x, y, z, more);
};
G__14811.cljs$lang$maxFixedArity = 5;
G__14811.cljs$lang$applyTo = (function (arglist__14815){
var a = cljs.core.first(arglist__14815);
var f = cljs.core.first(cljs.core.next(arglist__14815));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14815)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14815))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14815)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14815)))));
return G__14811__delegate.call(this, a, f, x, y, z, more);
});
return G__14811;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14801.call(this,a,f);
case  3 :
return swap_BANG___14802.call(this,a,f,x);
case  4 :
return swap_BANG___14804.call(this,a,f,x,y);
case  5 :
return swap_BANG___14805.call(this,a,f,x,y,z);
default:
return swap_BANG___14806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14806.cljs$lang$applyTo;
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
var gensym__14861 = (function (){
return gensym.call(null,"G__");
});
var gensym__14862 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14861.call(this);
case  1 :
return gensym__14862.call(this,prefix_string);
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
var this__14892 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14892.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14896 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14896.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14896.state,this__14896.f);
}
return cljs.core.deref.call(null,this__14896.state);
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
delay.cljs$lang$applyTo = (function (arglist__14904){
var body = cljs.core.seq( arglist__14904 );;
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
var map__14940__14942 = options;
var map__14940__14946 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14940__14942))?cljs.core.apply.call(null,cljs.core.hash_map,map__14940__14942):map__14940__14942);
var keywordize_keys__14949 = cljs.core.get.call(null,map__14940__14946,"﷐'keywordize-keys");
var keyfn__14950 = (cljs.core.truth_(keywordize_keys__14949)?cljs.core.keyword:cljs.core.str);
var f__14965 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14964 = (function iter__14956(s__14958){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14958__14959 = s__14958;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14958__14959)))
{var k__14962 = cljs.core.first.call(null,s__14958__14959);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14950.call(null,k__14962),thisfn.call(null,(x[k__14962]))]),iter__14956.call(null,cljs.core.rest.call(null,s__14958__14959)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14964.call(null,cljs.core.js_keys.call(null,x));
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

return f__14965.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14971){
var x = cljs.core.first(arglist__14971);
var options = cljs.core.rest(arglist__14971);
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
var G__14997__delegate = function (args){
var temp__3695__auto____14985 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14980),args);

if(cljs.core.truth_(temp__3695__auto____14985))
{var v__14987 = temp__3695__auto____14985;

return v__14987;
} else
{var ret__14989 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14980,cljs.core.assoc,args,ret__14989);
return ret__14989;
}
};
var G__14997 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14997__delegate.call(this, args);
};
G__14997.cljs$lang$maxFixedArity = 0;
G__14997.cljs$lang$applyTo = (function (arglist__15001){
var args = cljs.core.seq( arglist__15001 );;
return G__14997__delegate.call(this, args);
});
return G__14997;
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
var trampoline__15014 = (function (f){
while(true){
var ret__15012 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15012)))
{{
var G__15017 = ret__15012;
f = G__15017;
continue;
}
} else
{return ret__15012;
}
break;
}
});
var trampoline__15015 = (function() { 
var G__15018__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15018 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15018__delegate.call(this, f, args);
};
G__15018.cljs$lang$maxFixedArity = 1;
G__15018.cljs$lang$applyTo = (function (arglist__15019){
var f = cljs.core.first(arglist__15019);
var args = cljs.core.rest(arglist__15019);
return G__15018__delegate.call(this, f, args);
});
return G__15018;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15014.call(this,f);
default:
return trampoline__15015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15015.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15022 = (function (){
return rand.call(null,1);
});
var rand__15023 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15022.call(this);
case  1 :
return rand__15023.call(this,n);
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
var k__15044 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15044,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15044,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15161 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15162 = (function (h,child,parent){
var or__3548__auto____15148 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15148))
{return or__3548__auto____15148;
} else
{var or__3548__auto____15149 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15149))
{return or__3548__auto____15149;
} else
{var and__3546__auto____15150 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15150))
{var and__3546__auto____15151 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15151))
{var and__3546__auto____15153 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15153))
{var ret__15154 = true;
var i__15155 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15156 = cljs.core.not.call(null,ret__15154);

if(cljs.core.truth_(or__3548__auto____15156))
{return or__3548__auto____15156;
} else
{return cljs.core._EQ_.call(null,i__15155,cljs.core.count.call(null,parent));
}
})()))
{return ret__15154;
} else
{{
var G__15169 = isa_QMARK_.call(null,h,child.call(null,i__15155),parent.call(null,i__15155));
var G__15170 = (i__15155 + 1);
ret__15154 = G__15169;
i__15155 = G__15170;
continue;
}
}
break;
}
} else
{return and__3546__auto____15153;
}
} else
{return and__3546__auto____15151;
}
} else
{return and__3546__auto____15150;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15161.call(this,h,child);
case  3 :
return isa_QMARK___15162.call(this,h,child,parent);
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
var parents__15179 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15180 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15179.call(this,h);
case  2 :
return parents__15180.call(this,h,tag);
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
var ancestors__15182 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15183 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15182.call(this,h);
case  2 :
return ancestors__15183.call(this,h,tag);
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
var descendants__15194 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15195 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15194.call(this,h);
case  2 :
return descendants__15195.call(this,h,tag);
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
var derive__15216 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15217 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15207 = "﷐'parents".call(null,h);
var td__15208 = "﷐'descendants".call(null,h);
var ta__15209 = "﷐'ancestors".call(null,h);
var tf__15210 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15211 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15207.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15209.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15209.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15207,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15210.call(null,"﷐'ancestors".call(null,h),tag,td__15208,parent,ta__15209),"﷐'descendants":tf__15210.call(null,"﷐'descendants".call(null,h),parent,ta__15209,tag,td__15208)});
})());

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15216.call(this,h,tag);
case  3 :
return derive__15217.call(this,h,tag,parent);
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
var underive__15235 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15236 = (function (h,tag,parent){
var parentMap__15228 = "﷐'parents".call(null,h);
var childsParents__15229 = (cljs.core.truth_(parentMap__15228.call(null,tag))?cljs.core.disj.call(null,parentMap__15228.call(null,tag),parent):cljs.core.set([]));
var newParents__15230 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15229))?cljs.core.assoc.call(null,parentMap__15228,tag,childsParents__15229):cljs.core.dissoc.call(null,parentMap__15228,tag));
var deriv_seq__15234 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15201_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15201_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15201_SHARP_),cljs.core.second.call(null,p1__15201_SHARP_)));
}),cljs.core.seq.call(null,newParents__15230)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15228.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15202_SHARP_,p2__15203_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15202_SHARP_,p2__15203_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15234));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15235.call(this,h,tag);
case  3 :
return underive__15236.call(this,h,tag,parent);
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
var xprefs__15250 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15253 = (cljs.core.truth_((function (){var and__3546__auto____15251 = xprefs__15250;

if(cljs.core.truth_(and__3546__auto____15251))
{return xprefs__15250.call(null,y);
} else
{return and__3546__auto____15251;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15253))
{return or__3548__auto____15253;
} else
{var or__3548__auto____15260 = (function (){var ps__15257 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15257) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15257),prefer_table)))
{} else
{}
{
var G__15267 = cljs.core.rest.call(null,ps__15257);
ps__15257 = G__15267;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15260))
{return or__3548__auto____15260;
} else
{var or__3548__auto____15264 = (function (){var ps__15261 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15261) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15261),y,prefer_table)))
{} else
{}
{
var G__15268 = cljs.core.rest.call(null,ps__15261);
ps__15261 = G__15268;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15264))
{return or__3548__auto____15264;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15273 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15273))
{return or__3548__auto____15273;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15282 = cljs.core.reduce.call(null,(function (be,p__15274){
var vec__15275__15276 = p__15274;
var k__15277 = cljs.core.nth.call(null,vec__15275__15276,0,null);
var ___15278 = cljs.core.nth.call(null,vec__15275__15276,1,null);
var e__15279 = vec__15275__15276;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15277)))
{var be2__15281 = (cljs.core.truth_((function (){var or__3548__auto____15280 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15280))
{return or__3548__auto____15280;
} else
{return cljs.core.dominates.call(null,k__15277,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15279:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15281),k__15277,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15277," and ",cljs.core.first.call(null,be2__15281),", and neither is preferred")));
}
return be2__15281;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15282))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15282));
return cljs.core.second.call(null,best_entry__15282);
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
if(cljs.core.truth_((function (){var and__3546__auto____15296 = mf;

if(cljs.core.truth_(and__3546__auto____15296))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15296;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15299 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15299))
{return or__3548__auto____15299;
} else
{var or__3548__auto____15300 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15300))
{return or__3548__auto____15300;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15301 = mf;

if(cljs.core.truth_(and__3546__auto____15301))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15301;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15302 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
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
{return (function (){var or__3548__auto____15337 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15337))
{return or__3548__auto____15337;
} else
{var or__3548__auto____15338 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15338))
{return or__3548__auto____15338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15339 = mf;

if(cljs.core.truth_(and__3546__auto____15339))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15339;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15340 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15340))
{return or__3548__auto____15340;
} else
{var or__3548__auto____15341 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15341))
{return or__3548__auto____15341;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15342 = mf;

if(cljs.core.truth_(and__3546__auto____15342))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15342;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15343 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15343))
{return or__3548__auto____15343;
} else
{var or__3548__auto____15344 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15344))
{return or__3548__auto____15344;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15345 = mf;

if(cljs.core.truth_(and__3546__auto____15345))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15345;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15348 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15348))
{return or__3548__auto____15348;
} else
{var or__3548__auto____15350 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15350))
{return or__3548__auto____15350;
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
{return (function (){var or__3548__auto____15372 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15372))
{return or__3548__auto____15372;
} else
{var or__3548__auto____15376 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15376))
{return or__3548__auto____15376;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15379 = mf;

if(cljs.core.truth_(and__3546__auto____15379))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15379;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15381 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15381))
{return or__3548__auto____15381;
} else
{var or__3548__auto____15384 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15384))
{return or__3548__auto____15384;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15405 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15407 = cljs.core._get_method.call(null,mf,dispatch_val__15405);

if(cljs.core.truth_(target_fn__15407))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15405)));
}
return cljs.core.apply.call(null,target_fn__15407,args);
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
var this__15426 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15427 = this;
cljs.core.swap_BANG_.call(null,this__15427.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15427.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15427.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15427.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15430 = this;
cljs.core.swap_BANG_.call(null,this__15430.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15430.method_cache,this__15430.method_table,this__15430.cached_hierarchy,this__15430.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15432 = this;
cljs.core.swap_BANG_.call(null,this__15432.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15432.method_cache,this__15432.method_table,this__15432.cached_hierarchy,this__15432.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15433 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15433.cached_hierarchy),cljs.core.deref.call(null,this__15433.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15433.method_cache,this__15433.method_table,this__15433.cached_hierarchy,this__15433.hierarchy);
}
var temp__3695__auto____15434 = cljs.core.deref.call(null,this__15433.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15434))
{var target_fn__15435 = temp__3695__auto____15434;

return target_fn__15435;
} else
{var temp__3695__auto____15436 = cljs.core.find_and_cache_best_method.call(null,this__15433.name,dispatch_val,this__15433.hierarchy,this__15433.method_table,this__15433.prefer_table,this__15433.method_cache,this__15433.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15436))
{var target_fn__15437 = temp__3695__auto____15436;

return target_fn__15437;
} else
{return cljs.core.deref.call(null,this__15433.method_table).call(null,this__15433.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15439 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15439.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15439.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15439.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15439.method_cache,this__15439.method_table,this__15439.cached_hierarchy,this__15439.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15442 = this;
return cljs.core.deref.call(null,this__15442.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15443 = this;
return cljs.core.deref.call(null,this__15443.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15444 = this;
return cljs.core.do_dispatch.call(null,mf,this__15444.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15496__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15496 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15496__delegate.call(this, _, args);
};
G__15496.cljs$lang$maxFixedArity = 1;
G__15496.cljs$lang$applyTo = (function (arglist__15498){
var _ = cljs.core.first(arglist__15498);
var args = cljs.core.rest(arglist__15498);
return G__15496__delegate.call(this, _, args);
});
return G__15496;
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
