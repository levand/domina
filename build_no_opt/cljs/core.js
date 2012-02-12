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
var or__3548__auto____7254 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
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
var _invoke__7633 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
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
var _invoke__7634 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7331 = this$;

if(cljs.core.truth_(and__3546__auto____7331))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7331;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7336 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
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
var _invoke__7635 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7353 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7636 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7357 = this$;

if(cljs.core.truth_(and__3546__auto____7357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7637 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7367 = this$;

if(cljs.core.truth_(and__3546__auto____7367))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7367;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{var or__3548__auto____7371 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{var or__3548__auto____7379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7384 = this$;

if(cljs.core.truth_(and__3546__auto____7384))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7384;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var or__3548__auto____7390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7395 = this$;

if(cljs.core.truth_(and__3546__auto____7395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{var or__3548__auto____7402 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7407 = this$;

if(cljs.core.truth_(and__3546__auto____7407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7413 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{var or__3548__auto____7414 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7419 = this$;

if(cljs.core.truth_(and__3546__auto____7419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7425 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{var or__3548__auto____7427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = this$;

if(cljs.core.truth_(and__3546__auto____7432))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7432;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7436 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{var or__3548__auto____7438 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7447 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{var or__3548__auto____7450 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7454 = this$;

if(cljs.core.truth_(and__3546__auto____7454))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7454;
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
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = this$;

if(cljs.core.truth_(and__3546__auto____7477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7479 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{var or__3548__auto____7480 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7480))
{return or__3548__auto____7480;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7482 = this$;

if(cljs.core.truth_(and__3546__auto____7482))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7482;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7554 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7554))
{return or__3548__auto____7554;
} else
{var or__3548__auto____7558 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7558))
{return or__3548__auto____7558;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7650 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7560 = this$;

if(cljs.core.truth_(and__3546__auto____7560))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7560;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7562 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{var or__3548__auto____7564 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7564))
{return or__3548__auto____7564;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7651 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7568 = this$;

if(cljs.core.truth_(and__3546__auto____7568))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7568;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7652 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
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
var _invoke__7653 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7609 = this$;

if(cljs.core.truth_(and__3546__auto____7609))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7609;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7611 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7611))
{return or__3548__auto____7611;
} else
{var or__3548__auto____7612 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7654 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7615 = this$;

if(cljs.core.truth_(and__3546__auto____7615))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7615;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7655 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7623 = this$;

if(cljs.core.truth_(and__3546__auto____7623))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7623;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7628 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
} else
{var or__3548__auto____7630 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
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
return _invoke__7633.call(this,this$);
case  2 :
return _invoke__7634.call(this,this$,a);
case  3 :
return _invoke__7635.call(this,this$,a,b);
case  4 :
return _invoke__7636.call(this,this$,a,b,c);
case  5 :
return _invoke__7637.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7638.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7650.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7651.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7652.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7653.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7654.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7655.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7731 = coll;

if(cljs.core.truth_(and__3546__auto____7731))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7731;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7738 = coll;

if(cljs.core.truth_(and__3546__auto____7738))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7738;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7741 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{var or__3548__auto____7742 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7774 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{var or__3548__auto____7775 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
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
var _nth__7791 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = coll;

if(cljs.core.truth_(and__3546__auto____7781))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7781;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
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
var _nth__7792 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7788 = coll;

if(cljs.core.truth_(and__3546__auto____7788))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7788;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7790 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
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
return _nth__7791.call(this,coll,n);
case  3 :
return _nth__7792.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
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
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7802;
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
var _lookup__7826 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7809 = o;

if(cljs.core.truth_(and__3546__auto____7809))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7809;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7810 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{var or__3548__auto____7811 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7827 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7813 = o;

if(cljs.core.truth_(and__3546__auto____7813))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7813;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7824 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{var or__3548__auto____7825 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
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
return _lookup__7826.call(this,o,k);
case  3 :
return _lookup__7827.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7837 = coll;

if(cljs.core.truth_(and__3546__auto____7837))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7837;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7841 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7845 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{var or__3548__auto____7846 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7853 = coll;

if(cljs.core.truth_(and__3546__auto____7853))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7853;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7855 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{var or__3548__auto____7858 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = coll;

if(cljs.core.truth_(and__3546__auto____7859))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7859;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7861 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7866 = coll;

if(cljs.core.truth_(and__3546__auto____7866))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7866;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7868 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{var or__3548__auto____7870 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7870))
{return or__3548__auto____7870;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7917 = coll;

if(cljs.core.truth_(and__3546__auto____7917))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7917;
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
if(cljs.core.truth_((function (){var and__3546__auto____7929 = coll;

if(cljs.core.truth_(and__3546__auto____7929))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7929;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7931 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7938 = o;

if(cljs.core.truth_(and__3546__auto____7938))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7938;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7939 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{var or__3548__auto____7940 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7976 = o;

if(cljs.core.truth_(and__3546__auto____7976))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7976;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7979 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{var or__3548__auto____8004 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8046 = o;

if(cljs.core.truth_(and__3546__auto____8046))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8046;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8048 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8049 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8058 = o;

if(cljs.core.truth_(and__3546__auto____8058))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8058;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8060 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{var or__3548__auto____8061 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
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
var _reduce__8088 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = coll;

if(cljs.core.truth_(and__3546__auto____8082))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8082;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8089 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8085 = coll;

if(cljs.core.truth_(and__3546__auto____8085))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8085;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8086 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{var or__3548__auto____8087 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
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
return _reduce__8088.call(this,coll,f);
case  3 :
return _reduce__8089.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8099 = o;

if(cljs.core.truth_(and__3546__auto____8099))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8099;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8100 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{var or__3548__auto____8101 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8102 = o;

if(cljs.core.truth_(and__3546__auto____8102))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8102;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8107 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
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
if(cljs.core.truth_((function (){var and__3546__auto____8115 = o;

if(cljs.core.truth_(and__3546__auto____8115))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8115;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8116 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
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
if(cljs.core.truth_((function (){var and__3546__auto____8119 = o;

if(cljs.core.truth_(and__3546__auto____8119))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8119;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8121 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
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
if(cljs.core.truth_((function (){var and__3546__auto____8125 = d;

if(cljs.core.truth_(and__3546__auto____8125))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8125;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8127 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{var or__3548__auto____8129 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8130 = this$;

if(cljs.core.truth_(and__3546__auto____8130))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8130;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8132 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{var or__3548__auto____8134 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = this$;

if(cljs.core.truth_(and__3546__auto____8136))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8136;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8137 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{var or__3548__auto____8138 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8139 = this$;

if(cljs.core.truth_(and__3546__auto____8139))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8139;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8141 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8141))
{return or__3548__auto____8141;
} else
{var or__3548__auto____8142 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
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
var G__8206 = null;
var G__8206__8207 = (function (o,k){
return null;
});
var G__8206__8208 = (function (o,k,not_found){
return not_found;
});
G__8206 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8206__8207.call(this,o,k);
case  3 :
return G__8206__8208.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8206;
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
var G__8211 = null;
var G__8211__8212 = (function (_,f){
return f.call(null);
});
var G__8211__8213 = (function (_,f,start){
return start;
});
G__8211 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8211__8212.call(this,_,f);
case  3 :
return G__8211__8213.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8211;
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
var G__8222 = null;
var G__8222__8223 = (function (_,n){
return null;
});
var G__8222__8224 = (function (_,n,not_found){
return not_found;
});
G__8222 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8222__8223.call(this,_,n);
case  3 :
return G__8222__8224.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8222;
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
var ci_reduce__8254 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8246 = cljs.core._nth.call(null,cicoll,0);
var n__8247 = 1;

while(true){
if(cljs.core.truth_((n__8247 < cljs.core._count.call(null,cicoll))))
{{
var G__8260 = f.call(null,val__8246,cljs.core._nth.call(null,cicoll,n__8247));
var G__8261 = (n__8247 + 1);
val__8246 = G__8260;
n__8247 = G__8261;
continue;
}
} else
{return val__8246;
}
break;
}
}
});
var ci_reduce__8256 = (function (cicoll,f,val){
var val__8249 = val;
var n__8250 = 0;

while(true){
if(cljs.core.truth_((n__8250 < cljs.core._count.call(null,cicoll))))
{{
var G__8262 = f.call(null,val__8249,cljs.core._nth.call(null,cicoll,n__8250));
var G__8263 = (n__8250 + 1);
val__8249 = G__8262;
n__8250 = G__8263;
continue;
}
} else
{return val__8249;
}
break;
}
});
var ci_reduce__8257 = (function (cicoll,f,val,idx){
var val__8251 = val;
var n__8252 = idx;

while(true){
if(cljs.core.truth_((n__8252 < cljs.core._count.call(null,cicoll))))
{{
var G__8264 = f.call(null,val__8251,cljs.core._nth.call(null,cicoll,n__8252));
var G__8265 = (n__8252 + 1);
val__8251 = G__8264;
n__8252 = G__8265;
continue;
}
} else
{return val__8251;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8254.call(this,cicoll,f);
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
var this__8287 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8314 = null;
var G__8314__8315 = (function (_,f){
var this__8290 = this;
return cljs.core.ci_reduce.call(null,this__8290.a,f,(this__8290.a[this__8290.i]),(this__8290.i + 1));
});
var G__8314__8316 = (function (_,f,start){
var this__8292 = this;
return cljs.core.ci_reduce.call(null,this__8292.a,f,start,this__8292.i);
});
G__8314 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8314__8315.call(this,_,f);
case  3 :
return G__8314__8316.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8314;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8294 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8295 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8327 = null;
var G__8327__8328 = (function (coll,n){
var this__8300 = this;
var i__8301 = (n + this__8300.i);

if(cljs.core.truth_((i__8301 < this__8300.a.length)))
{return (this__8300.a[i__8301]);
} else
{return null;
}
});
var G__8327__8329 = (function (coll,n,not_found){
var this__8304 = this;
var i__8305 = (n + this__8304.i);

if(cljs.core.truth_((i__8305 < this__8304.a.length)))
{return (this__8304.a[i__8305]);
} else
{return not_found;
}
});
G__8327 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8327__8328.call(this,coll,n);
case  3 :
return G__8327__8329.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8327;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8308 = this;
return (this__8308.a.length - this__8308.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8311 = this;
return (this__8311.a[this__8311.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8312 = this;
if(cljs.core.truth_(((this__8312.i + 1) < this__8312.a.length)))
{return (new cljs.core.IndexedSeq(this__8312.a,(this__8312.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8313 = this;
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
var G__8382 = null;
var G__8382__8383 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8382__8384 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8382 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8382__8383.call(this,array,f);
case  3 :
return G__8382__8384.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8382;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8390 = null;
var G__8390__8391 = (function (array,k){
return (array[k]);
});
var G__8390__8392 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8390 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8390__8391.call(this,array,k);
case  3 :
return G__8390__8392.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8390;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8398 = null;
var G__8398__8399 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8398__8400 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8398 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8398__8399.call(this,array,n);
case  3 :
return G__8398__8400.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8398;
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
var temp__3698__auto____8410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8410))
{var s__8411 = temp__3698__auto____8410;

return cljs.core._first.call(null,s__8411);
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
var G__8489 = cljs.core.next.call(null,s);
s = G__8489;
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
var s__8495 = cljs.core.seq.call(null,x);
var n__8496 = 0;

while(true){
if(cljs.core.truth_(s__8495))
{{
var G__8497 = cljs.core.next.call(null,s__8495);
var G__8498 = (n__8496 + 1);
s__8495 = G__8497;
n__8496 = G__8498;
continue;
}
} else
{return n__8496;
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
var conj__8506 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8507 = (function() { 
var G__8510__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8511 = conj.call(null,coll,x);
var G__8512 = cljs.core.first.call(null,xs);
var G__8513 = cljs.core.next.call(null,xs);
coll = G__8511;
x = G__8512;
xs = G__8513;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8510 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8510__delegate.call(this, coll, x, xs);
};
G__8510.cljs$lang$maxFixedArity = 2;
G__8510.cljs$lang$applyTo = (function (arglist__8514){
var coll = cljs.core.first(arglist__8514);
var x = cljs.core.first(cljs.core.next(arglist__8514));
var xs = cljs.core.rest(cljs.core.next(arglist__8514));
return G__8510__delegate.call(this, coll, x, xs);
});
return G__8510;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8506.call(this,coll,x);
default:
return conj__8507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8507.cljs$lang$applyTo;
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
var nth__8534 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8535 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8534.call(this,coll,n);
case  3 :
return nth__8535.call(this,coll,n,not_found);
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
var get__8540 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8542 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8540.call(this,o,k);
case  3 :
return get__8542.call(this,o,k,not_found);
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
var assoc__8548 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8550 = (function() { 
var G__8552__delegate = function (coll,k,v,kvs){
while(true){
var ret__8545 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8553 = ret__8545;
var G__8554 = cljs.core.first.call(null,kvs);
var G__8555 = cljs.core.second.call(null,kvs);
var G__8556 = cljs.core.nnext.call(null,kvs);
coll = G__8553;
k = G__8554;
v = G__8555;
kvs = G__8556;
continue;
}
} else
{return ret__8545;
}
break;
}
};
var G__8552 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8552__delegate.call(this, coll, k, v, kvs);
};
G__8552.cljs$lang$maxFixedArity = 3;
G__8552.cljs$lang$applyTo = (function (arglist__8557){
var coll = cljs.core.first(arglist__8557);
var k = cljs.core.first(cljs.core.next(arglist__8557));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8557)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8557)));
return G__8552__delegate.call(this, coll, k, v, kvs);
});
return G__8552;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8548.call(this,coll,k,v);
default:
return assoc__8550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8550.cljs$lang$applyTo;
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
var dissoc__8563 = (function (coll){
return coll;
});
var dissoc__8564 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8565 = (function() { 
var G__8569__delegate = function (coll,k,ks){
while(true){
var ret__8558 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8570 = ret__8558;
var G__8571 = cljs.core.first.call(null,ks);
var G__8572 = cljs.core.next.call(null,ks);
coll = G__8570;
k = G__8571;
ks = G__8572;
continue;
}
} else
{return ret__8558;
}
break;
}
};
var G__8569 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8569__delegate.call(this, coll, k, ks);
};
G__8569.cljs$lang$maxFixedArity = 2;
G__8569.cljs$lang$applyTo = (function (arglist__8577){
var coll = cljs.core.first(arglist__8577);
var k = cljs.core.first(cljs.core.next(arglist__8577));
var ks = cljs.core.rest(cljs.core.next(arglist__8577));
return G__8569__delegate.call(this, coll, k, ks);
});
return G__8569;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8563.call(this,coll);
case  2 :
return dissoc__8564.call(this,coll,k);
default:
return dissoc__8565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8565.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8587 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8589 = x__445__auto____8587;

if(cljs.core.truth_(and__3546__auto____8589))
{var and__3546__auto____8598 = x__445__auto____8587.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8598))
{return cljs.core.not.call(null,x__445__auto____8587.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8598;
}
} else
{return and__3546__auto____8589;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8587);
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
var disj__8633 = (function (coll){
return coll;
});
var disj__8634 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8636 = (function() { 
var G__8639__delegate = function (coll,k,ks){
while(true){
var ret__8631 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8640 = ret__8631;
var G__8641 = cljs.core.first.call(null,ks);
var G__8642 = cljs.core.next.call(null,ks);
coll = G__8640;
k = G__8641;
ks = G__8642;
continue;
}
} else
{return ret__8631;
}
break;
}
};
var G__8639 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8639__delegate.call(this, coll, k, ks);
};
G__8639.cljs$lang$maxFixedArity = 2;
G__8639.cljs$lang$applyTo = (function (arglist__8645){
var coll = cljs.core.first(arglist__8645);
var k = cljs.core.first(cljs.core.next(arglist__8645));
var ks = cljs.core.rest(cljs.core.next(arglist__8645));
return G__8639__delegate.call(this, coll, k, ks);
});
return G__8639;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8633.call(this,coll);
case  2 :
return disj__8634.call(this,coll,k);
default:
return disj__8636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8636.cljs$lang$applyTo;
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
{var x__445__auto____8732 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8734 = x__445__auto____8732;

if(cljs.core.truth_(and__3546__auto____8734))
{var and__3546__auto____8735 = x__445__auto____8732.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8735))
{return cljs.core.not.call(null,x__445__auto____8732.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8735;
}
} else
{return and__3546__auto____8734;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8732);
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
{var x__445__auto____8754 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8756 = x__445__auto____8754;

if(cljs.core.truth_(and__3546__auto____8756))
{var and__3546__auto____8757 = x__445__auto____8754.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core.not.call(null,x__445__auto____8754.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8757;
}
} else
{return and__3546__auto____8756;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8754);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8804 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8805 = x__445__auto____8804;

if(cljs.core.truth_(and__3546__auto____8805))
{var and__3546__auto____8806 = x__445__auto____8804.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8804.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8805;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8804);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8845 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8846 = x__445__auto____8845;

if(cljs.core.truth_(and__3546__auto____8846))
{var and__3546__auto____8847 = x__445__auto____8845.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8847))
{return cljs.core.not.call(null,x__445__auto____8845.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8847;
}
} else
{return and__3546__auto____8846;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8845);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8852 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8853 = x__445__auto____8852;

if(cljs.core.truth_(and__3546__auto____8853))
{var and__3546__auto____8854 = x__445__auto____8852.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8854))
{return cljs.core.not.call(null,x__445__auto____8852.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8854;
}
} else
{return and__3546__auto____8853;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8852);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8856 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8857 = x__445__auto____8856;

if(cljs.core.truth_(and__3546__auto____8857))
{var and__3546__auto____8858 = x__445__auto____8856.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8858))
{return cljs.core.not.call(null,x__445__auto____8856.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8858;
}
} else
{return and__3546__auto____8857;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8856);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8863 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8864 = x__445__auto____8863;

if(cljs.core.truth_(and__3546__auto____8864))
{var and__3546__auto____8865 = x__445__auto____8863.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8865))
{return cljs.core.not.call(null,x__445__auto____8863.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8865;
}
} else
{return and__3546__auto____8864;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8863);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8871 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8871.push(key);
}));
return keys__8871;
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
{var x__445__auto____8880 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8882 = x__445__auto____8880;

if(cljs.core.truth_(and__3546__auto____8882))
{var and__3546__auto____8884 = x__445__auto____8880.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8884))
{return cljs.core.not.call(null,x__445__auto____8880.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8884;
}
} else
{return and__3546__auto____8882;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8880);
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
var and__3546__auto____8900 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8900))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8903 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8903))
{return or__3548__auto____8903;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8900;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8909 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8909))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8909;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8911 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8911))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8911;
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
var and__3546__auto____8916 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8916))
{return (n == n.toFixed());
} else
{return and__3546__auto____8916;
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
if(cljs.core.truth_((function (){var and__3546__auto____8932 = coll;

if(cljs.core.truth_(and__3546__auto____8932))
{var and__3546__auto____8935 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8935))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8935;
}
} else
{return and__3546__auto____8932;
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
var distinct_QMARK___8957 = (function (x){
return true;
});
var distinct_QMARK___8958 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8959 = (function() { 
var G__8964__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8949 = cljs.core.set([y,x]);
var xs__8950 = more;

while(true){
var x__8951 = cljs.core.first.call(null,xs__8950);
var etc__8952 = cljs.core.next.call(null,xs__8950);

if(cljs.core.truth_(xs__8950))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8949,x__8951)))
{return false;
} else
{{
var G__8965 = cljs.core.conj.call(null,s__8949,x__8951);
var G__8966 = etc__8952;
s__8949 = G__8965;
xs__8950 = G__8966;
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
var G__8964 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8964__delegate.call(this, x, y, more);
};
G__8964.cljs$lang$maxFixedArity = 2;
G__8964.cljs$lang$applyTo = (function (arglist__8967){
var x = cljs.core.first(arglist__8967);
var y = cljs.core.first(cljs.core.next(arglist__8967));
var more = cljs.core.rest(cljs.core.next(arglist__8967));
return G__8964__delegate.call(this, x, y, more);
});
return G__8964;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8957.call(this,x);
case  2 :
return distinct_QMARK___8958.call(this,x,y);
default:
return distinct_QMARK___8959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8959.cljs$lang$applyTo;
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
var r__8991 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8991)))
{return r__8991;
} else
{if(cljs.core.truth_(r__8991))
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
var sort__9005 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9006 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9003 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9003,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9003);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9005.call(this,comp);
case  2 :
return sort__9006.call(this,comp,coll);
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
var sort_by__9021 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9022 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9021.call(this,keyfn,comp);
case  3 :
return sort_by__9022.call(this,keyfn,comp,coll);
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
var reduce__9045 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9046 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9045.call(this,f,val);
case  3 :
return reduce__9046.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9065 = (function (f,coll){
var temp__3695__auto____9053 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9053))
{var s__9054 = temp__3695__auto____9053;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9054),cljs.core.next.call(null,s__9054));
} else
{return f.call(null);
}
});
var seq_reduce__9066 = (function (f,val,coll){
var val__9062 = val;
var coll__9064 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9064))
{{
var G__9068 = f.call(null,val__9062,cljs.core.first.call(null,coll__9064));
var G__9069 = cljs.core.next.call(null,coll__9064);
val__9062 = G__9068;
coll__9064 = G__9069;
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
return seq_reduce__9065.call(this,f,val);
case  3 :
return seq_reduce__9066.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9095 = null;
var G__9095__9099 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9095__9100 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9095 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9095__9099.call(this,coll,f);
case  3 :
return G__9095__9100.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9095;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9114 = (function (){
return 0;
});
var _PLUS___9115 = (function (x){
return x;
});
var _PLUS___9116 = (function (x,y){
return (x + y);
});
var _PLUS___9117 = (function() { 
var G__9119__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9119 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9119__delegate.call(this, x, y, more);
};
G__9119.cljs$lang$maxFixedArity = 2;
G__9119.cljs$lang$applyTo = (function (arglist__9124){
var x = cljs.core.first(arglist__9124);
var y = cljs.core.first(cljs.core.next(arglist__9124));
var more = cljs.core.rest(cljs.core.next(arglist__9124));
return G__9119__delegate.call(this, x, y, more);
});
return G__9119;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9114.call(this);
case  1 :
return _PLUS___9115.call(this,x);
case  2 :
return _PLUS___9116.call(this,x,y);
default:
return _PLUS___9117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9117.cljs$lang$applyTo;
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
var ___9192 = (function (x){
return (- x);
});
var ___9193 = (function (x,y){
return (x - y);
});
var ___9194 = (function() { 
var G__9200__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9200 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9200__delegate.call(this, x, y, more);
};
G__9200.cljs$lang$maxFixedArity = 2;
G__9200.cljs$lang$applyTo = (function (arglist__9204){
var x = cljs.core.first(arglist__9204);
var y = cljs.core.first(cljs.core.next(arglist__9204));
var more = cljs.core.rest(cljs.core.next(arglist__9204));
return G__9200__delegate.call(this, x, y, more);
});
return G__9200;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9192.call(this,x);
case  2 :
return ___9193.call(this,x,y);
default:
return ___9194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9194.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9216 = (function (){
return 1;
});
var _STAR___9218 = (function (x){
return x;
});
var _STAR___9226 = (function (x,y){
return (x * y);
});
var _STAR___9232 = (function() { 
var G__9242__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9242__delegate.call(this, x, y, more);
};
G__9242.cljs$lang$maxFixedArity = 2;
G__9242.cljs$lang$applyTo = (function (arglist__9246){
var x = cljs.core.first(arglist__9246);
var y = cljs.core.first(cljs.core.next(arglist__9246));
var more = cljs.core.rest(cljs.core.next(arglist__9246));
return G__9242__delegate.call(this, x, y, more);
});
return G__9242;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9216.call(this);
case  1 :
return _STAR___9218.call(this,x);
case  2 :
return _STAR___9226.call(this,x,y);
default:
return _STAR___9232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9232.cljs$lang$applyTo;
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
var _SLASH___9253 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9254 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9255 = (function() { 
var G__9257__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9257 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9257__delegate.call(this, x, y, more);
};
G__9257.cljs$lang$maxFixedArity = 2;
G__9257.cljs$lang$applyTo = (function (arglist__9258){
var x = cljs.core.first(arglist__9258);
var y = cljs.core.first(cljs.core.next(arglist__9258));
var more = cljs.core.rest(cljs.core.next(arglist__9258));
return G__9257__delegate.call(this, x, y, more);
});
return G__9257;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9253.call(this,x);
case  2 :
return _SLASH___9254.call(this,x,y);
default:
return _SLASH___9255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9255.cljs$lang$applyTo;
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
var _LT___9266 = (function (x){
return true;
});
var _LT___9267 = (function (x,y){
return (x < y);
});
var _LT___9268 = (function() { 
var G__9270__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9271 = y;
var G__9272 = cljs.core.first.call(null,more);
var G__9273 = cljs.core.next.call(null,more);
x = G__9271;
y = G__9272;
more = G__9273;
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
var G__9270 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9270__delegate.call(this, x, y, more);
};
G__9270.cljs$lang$maxFixedArity = 2;
G__9270.cljs$lang$applyTo = (function (arglist__9274){
var x = cljs.core.first(arglist__9274);
var y = cljs.core.first(cljs.core.next(arglist__9274));
var more = cljs.core.rest(cljs.core.next(arglist__9274));
return G__9270__delegate.call(this, x, y, more);
});
return G__9270;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9266.call(this,x);
case  2 :
return _LT___9267.call(this,x,y);
default:
return _LT___9268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9268.cljs$lang$applyTo;
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
var _LT__EQ___9291 = (function (x){
return true;
});
var _LT__EQ___9292 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9293 = (function() { 
var G__9295__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9297 = y;
var G__9298 = cljs.core.first.call(null,more);
var G__9299 = cljs.core.next.call(null,more);
x = G__9297;
y = G__9298;
more = G__9299;
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
var G__9295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9295__delegate.call(this, x, y, more);
};
G__9295.cljs$lang$maxFixedArity = 2;
G__9295.cljs$lang$applyTo = (function (arglist__9301){
var x = cljs.core.first(arglist__9301);
var y = cljs.core.first(cljs.core.next(arglist__9301));
var more = cljs.core.rest(cljs.core.next(arglist__9301));
return G__9295__delegate.call(this, x, y, more);
});
return G__9295;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9291.call(this,x);
case  2 :
return _LT__EQ___9292.call(this,x,y);
default:
return _LT__EQ___9293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9293.cljs$lang$applyTo;
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
var _GT___9307 = (function (x){
return true;
});
var _GT___9308 = (function (x,y){
return (x > y);
});
var _GT___9309 = (function() { 
var G__9312__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9313 = y;
var G__9314 = cljs.core.first.call(null,more);
var G__9315 = cljs.core.next.call(null,more);
x = G__9313;
y = G__9314;
more = G__9315;
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
var G__9312 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9312__delegate.call(this, x, y, more);
};
G__9312.cljs$lang$maxFixedArity = 2;
G__9312.cljs$lang$applyTo = (function (arglist__9316){
var x = cljs.core.first(arglist__9316);
var y = cljs.core.first(cljs.core.next(arglist__9316));
var more = cljs.core.rest(cljs.core.next(arglist__9316));
return G__9312__delegate.call(this, x, y, more);
});
return G__9312;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9307.call(this,x);
case  2 :
return _GT___9308.call(this,x,y);
default:
return _GT___9309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9309.cljs$lang$applyTo;
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
var _GT__EQ___9325 = (function (x){
return true;
});
var _GT__EQ___9326 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9327 = (function() { 
var G__9329__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9331 = y;
var G__9332 = cljs.core.first.call(null,more);
var G__9333 = cljs.core.next.call(null,more);
x = G__9331;
y = G__9332;
more = G__9333;
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
var G__9329 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9329__delegate.call(this, x, y, more);
};
G__9329.cljs$lang$maxFixedArity = 2;
G__9329.cljs$lang$applyTo = (function (arglist__9436){
var x = cljs.core.first(arglist__9436);
var y = cljs.core.first(cljs.core.next(arglist__9436));
var more = cljs.core.rest(cljs.core.next(arglist__9436));
return G__9329__delegate.call(this, x, y, more);
});
return G__9329;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9325.call(this,x);
case  2 :
return _GT__EQ___9326.call(this,x,y);
default:
return _GT__EQ___9327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9327.cljs$lang$applyTo;
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
var max__9443 = (function (x){
return x;
});
var max__9444 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9445 = (function() { 
var G__9447__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9447__delegate.call(this, x, y, more);
};
G__9447.cljs$lang$maxFixedArity = 2;
G__9447.cljs$lang$applyTo = (function (arglist__9448){
var x = cljs.core.first(arglist__9448);
var y = cljs.core.first(cljs.core.next(arglist__9448));
var more = cljs.core.rest(cljs.core.next(arglist__9448));
return G__9447__delegate.call(this, x, y, more);
});
return G__9447;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9443.call(this,x);
case  2 :
return max__9444.call(this,x,y);
default:
return max__9445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9445.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9455 = (function (x){
return x;
});
var min__9456 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9457 = (function() { 
var G__9462__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9462 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9462__delegate.call(this, x, y, more);
};
G__9462.cljs$lang$maxFixedArity = 2;
G__9462.cljs$lang$applyTo = (function (arglist__9464){
var x = cljs.core.first(arglist__9464);
var y = cljs.core.first(cljs.core.next(arglist__9464));
var more = cljs.core.rest(cljs.core.next(arglist__9464));
return G__9462__delegate.call(this, x, y, more);
});
return G__9462;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9455.call(this,x);
case  2 :
return min__9456.call(this,x,y);
default:
return min__9457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9457.cljs$lang$applyTo;
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
var rem__9465 = (n % d);

return cljs.core.fix.call(null,((n - rem__9465) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9468 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9468));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9476 = (function (){
return Math.random.call(null);
});
var rand__9477 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9476.call(this);
case  1 :
return rand__9477.call(this,n);
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
var _EQ__EQ___9525 = (function (x){
return true;
});
var _EQ__EQ___9526 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9527 = (function() { 
var G__9529__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9530 = y;
var G__9531 = cljs.core.first.call(null,more);
var G__9532 = cljs.core.next.call(null,more);
x = G__9530;
y = G__9531;
more = G__9532;
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
var G__9529 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9529__delegate.call(this, x, y, more);
};
G__9529.cljs$lang$maxFixedArity = 2;
G__9529.cljs$lang$applyTo = (function (arglist__9533){
var x = cljs.core.first(arglist__9533);
var y = cljs.core.first(cljs.core.next(arglist__9533));
var more = cljs.core.rest(cljs.core.next(arglist__9533));
return G__9529__delegate.call(this, x, y, more);
});
return G__9529;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9525.call(this,x);
case  2 :
return _EQ__EQ___9526.call(this,x,y);
default:
return _EQ__EQ___9527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9527.cljs$lang$applyTo;
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
var n__9534 = n;
var xs__9535 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9536 = xs__9535;

if(cljs.core.truth_(and__3546__auto____9536))
{return (n__9534 > 0);
} else
{return and__3546__auto____9536;
}
})()))
{{
var G__9546 = (n__9534 - 1);
var G__9547 = cljs.core.next.call(null,xs__9535);
n__9534 = G__9546;
xs__9535 = G__9547;
continue;
}
} else
{return xs__9535;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9625 = null;
var G__9625__9626 = (function (coll,n){
var temp__3695__auto____9613 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9613))
{var xs__9614 = temp__3695__auto____9613;

return cljs.core.first.call(null,xs__9614);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9625__9627 = (function (coll,n,not_found){
var temp__3695__auto____9615 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9615))
{var xs__9616 = temp__3695__auto____9615;

return cljs.core.first.call(null,xs__9616);
} else
{return not_found;
}
});
G__9625 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9625__9626.call(this,coll,n);
case  3 :
return G__9625__9627.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9625;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9698 = (function (){
return "";
});
var str_STAR___9699 = (function (x){
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
var str_STAR___9700 = (function() { 
var G__9703__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9705 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9706 = cljs.core.next.call(null,more);
sb = G__9705;
more = G__9706;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9703 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9703__delegate.call(this, x, ys);
};
G__9703.cljs$lang$maxFixedArity = 1;
G__9703.cljs$lang$applyTo = (function (arglist__9709){
var x = cljs.core.first(arglist__9709);
var ys = cljs.core.rest(arglist__9709);
return G__9703__delegate.call(this, x, ys);
});
return G__9703;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9698.call(this);
case  1 :
return str_STAR___9699.call(this,x);
default:
return str_STAR___9700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9700.cljs$lang$applyTo;
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
var str__9721 = (function (){
return "";
});
var str__9722 = (function (x){
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
var str__9723 = (function() { 
var G__9728__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9728 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9728__delegate.call(this, x, ys);
};
G__9728.cljs$lang$maxFixedArity = 1;
G__9728.cljs$lang$applyTo = (function (arglist__9731){
var x = cljs.core.first(arglist__9731);
var ys = cljs.core.rest(arglist__9731);
return G__9728__delegate.call(this, x, ys);
});
return G__9728;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9721.call(this);
case  1 :
return str__9722.call(this,x);
default:
return str__9723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9723.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9739 = (function (s,start){
return s.substring(start);
});
var subs__9740 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9739.call(this,s,start);
case  3 :
return subs__9740.call(this,s,start,end);
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
var symbol__9747 = (function (name){
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
var symbol__9748 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9747.call(this,ns);
case  2 :
return symbol__9748.call(this,ns,name);
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
var keyword__9866 = (function (name){
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
var keyword__9867 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9866.call(this,ns);
case  2 :
return keyword__9867.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9875 = cljs.core.seq.call(null,x);
var ys__9877 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9875)))
{return cljs.core.nil_QMARK_.call(null,ys__9877);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9877)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9875),cljs.core.first.call(null,ys__9877))))
{{
var G__9931 = cljs.core.next.call(null,xs__9875);
var G__9932 = cljs.core.next.call(null,ys__9877);
xs__9875 = G__9931;
ys__9877 = G__9932;
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
return cljs.core.reduce.call(null,(function (p1__9933_SHARP_,p2__9934_SHARP_){
return cljs.core.hash_combine.call(null,p1__9933_SHARP_,cljs.core.hash.call(null,p2__9934_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9935__9936 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9935__9936))
{var G__9938__9940 = cljs.core.first.call(null,G__9935__9936);
var vec__9939__9941 = G__9938__9940;
var key_name__9942 = cljs.core.nth.call(null,vec__9939__9941,0,null);
var f__9943 = cljs.core.nth.call(null,vec__9939__9941,1,null);
var G__9935__9944 = G__9935__9936;

var G__9938__9945 = G__9938__9940;
var G__9935__9946 = G__9935__9944;

while(true){
var vec__9947__9948 = G__9938__9945;
var key_name__9949 = cljs.core.nth.call(null,vec__9947__9948,0,null);
var f__9950 = cljs.core.nth.call(null,vec__9947__9948,1,null);
var G__9935__9951 = G__9935__9946;

var str_name__9952 = cljs.core.name.call(null,key_name__9949);

obj[str_name__9952] = f__9950;
var temp__3698__auto____9953 = cljs.core.next.call(null,G__9935__9951);

if(cljs.core.truth_(temp__3698__auto____9953))
{var G__9935__9955 = temp__3698__auto____9953;

{
var G__9959 = cljs.core.first.call(null,G__9935__9955);
var G__9960 = G__9935__9955;
G__9938__9945 = G__9959;
G__9935__9946 = G__9960;
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
var this__9970 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9973 = this;
return (new cljs.core.List(this__9973.meta,o,coll,(this__9973.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9976 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9977 = this;
return this__9977.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9978 = this;
return this__9978.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9983 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9984 = this;
return this__9984.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9985 = this;
return this__9985.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9986 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9987 = this;
return (new cljs.core.List(meta,this__9987.first,this__9987.rest,this__9987.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9988 = this;
return this__9988.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9989 = this;
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
var this__10012 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10013 = this;
return (new cljs.core.List(this__10013.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10014 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10015 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10016 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10017 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10018 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10019 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10020 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10021 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10022 = this;
return this__10022.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10023 = this;
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
list.cljs$lang$applyTo = (function (arglist__10066){
var items = cljs.core.seq( arglist__10066 );;
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
var this__10077 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10084 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10084.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10085 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10107 = this;
return this__10107.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10108 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10108.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10108.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10109 = this;
return this__10109.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10110 = this;
return (new cljs.core.Cons(meta,this__10110.first,this__10110.rest));
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
var G__10127 = null;
var G__10127__10128 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10127__10129 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10127 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10127__10128.call(this,string,f);
case  3 :
return G__10127__10129.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10127;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10131 = null;
var G__10131__10132 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10131__10133 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10131 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10131__10132.call(this,string,k);
case  3 :
return G__10131__10133.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10131;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10135 = null;
var G__10135__10136 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10135__10137 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10135 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10135__10136.call(this,string,n);
case  3 :
return G__10135__10137.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10135;
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
var G__10141 = null;
var G__10141__10142 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10141__10143 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10141 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10141__10142.call(this,this$,coll);
case  3 :
return G__10141__10143.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10141;
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
var x__10153 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10153;
} else
{lazy_seq.x = x__10153.call(null);
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
var this__10236 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10237 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10239 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10239.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10246 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10247 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10248 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10249 = this;
return this__10249.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10250 = this;
return (new cljs.core.LazySeq(meta,this__10250.realized,this__10250.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10255 = cljs.core.array.call(null);

var s__10256 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10256)))
{ary__10255.push(cljs.core.first.call(null,s__10256));
{
var G__10259 = cljs.core.next.call(null,s__10256);
s__10256 = G__10259;
continue;
}
} else
{return ary__10255;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10263 = s;
var i__10265 = n;
var sum__10266 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10268 = (i__10265 > 0);

if(cljs.core.truth_(and__3546__auto____10268))
{return cljs.core.seq.call(null,s__10263);
} else
{return and__3546__auto____10268;
}
})()))
{{
var G__10273 = cljs.core.next.call(null,s__10263);
var G__10274 = (i__10265 - 1);
var G__10275 = (sum__10266 + 1);
s__10263 = G__10273;
i__10265 = G__10274;
sum__10266 = G__10275;
continue;
}
} else
{return sum__10266;
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
var concat__10294 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10295 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10296 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10283 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10283))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10283),concat.call(null,cljs.core.rest.call(null,s__10283),y));
} else
{return y;
}
})));
});
var concat__10297 = (function() { 
var G__10299__delegate = function (x,y,zs){
var cat__10287 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10286 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10286))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10286),cat.call(null,cljs.core.rest.call(null,xys__10286),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10287.call(null,concat.call(null,x,y),zs);
};
var G__10299 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10299__delegate.call(this, x, y, zs);
};
G__10299.cljs$lang$maxFixedArity = 2;
G__10299.cljs$lang$applyTo = (function (arglist__10300){
var x = cljs.core.first(arglist__10300);
var y = cljs.core.first(cljs.core.next(arglist__10300));
var zs = cljs.core.rest(cljs.core.next(arglist__10300));
return G__10299__delegate.call(this, x, y, zs);
});
return G__10299;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10294.call(this);
case  1 :
return concat__10295.call(this,x);
case  2 :
return concat__10296.call(this,x,y);
default:
return concat__10297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10297.cljs$lang$applyTo;
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
var list_STAR___10305 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10306 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10307 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10308 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10309 = (function() { 
var G__10322__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10322 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10322__delegate.call(this, a, b, c, d, more);
};
G__10322.cljs$lang$maxFixedArity = 4;
G__10322.cljs$lang$applyTo = (function (arglist__10324){
var a = cljs.core.first(arglist__10324);
var b = cljs.core.first(cljs.core.next(arglist__10324));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10324)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10324))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10324))));
return G__10322__delegate.call(this, a, b, c, d, more);
});
return G__10322;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10305.call(this,a);
case  2 :
return list_STAR___10306.call(this,a,b);
case  3 :
return list_STAR___10307.call(this,a,b,c);
case  4 :
return list_STAR___10308.call(this,a,b,c,d);
default:
return list_STAR___10309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10309.cljs$lang$applyTo;
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
var apply__10358 = (function (f,args){
var fixed_arity__10327 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10327 + 1)) <= fixed_arity__10327)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10359 = (function (f,x,args){
var arglist__10329 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10330 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10329,fixed_arity__10330) <= fixed_arity__10330)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10329));
} else
{return f.cljs$lang$applyTo(arglist__10329);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10329));
}
});
var apply__10360 = (function (f,x,y,args){
var arglist__10331 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10334 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10331,fixed_arity__10334) <= fixed_arity__10334)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10331));
} else
{return f.cljs$lang$applyTo(arglist__10331);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10331));
}
});
var apply__10361 = (function (f,x,y,z,args){
var arglist__10335 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10336 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10335,fixed_arity__10336) <= fixed_arity__10336)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10335));
} else
{return f.cljs$lang$applyTo(arglist__10335);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10335));
}
});
var apply__10362 = (function() { 
var G__10373__delegate = function (f,a,b,c,d,args){
var arglist__10345 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10346 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10345,fixed_arity__10346) <= fixed_arity__10346)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10345));
} else
{return f.cljs$lang$applyTo(arglist__10345);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10345));
}
};
var G__10373 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10373__delegate.call(this, f, a, b, c, d, args);
};
G__10373.cljs$lang$maxFixedArity = 5;
G__10373.cljs$lang$applyTo = (function (arglist__10375){
var f = cljs.core.first(arglist__10375);
var a = cljs.core.first(cljs.core.next(arglist__10375));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10375)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10375))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10375)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10375)))));
return G__10373__delegate.call(this, f, a, b, c, d, args);
});
return G__10373;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10358.call(this,f,a);
case  3 :
return apply__10359.call(this,f,a,b);
case  4 :
return apply__10360.call(this,f,a,b,c);
case  5 :
return apply__10361.call(this,f,a,b,c,d);
default:
return apply__10362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10362.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10416){
var obj = cljs.core.first(arglist__10416);
var f = cljs.core.first(cljs.core.next(arglist__10416));
var args = cljs.core.rest(cljs.core.next(arglist__10416));
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
var not_EQ___10458 = (function (x){
return false;
});
var not_EQ___10459 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10460 = (function() { 
var G__10462__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10462 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10462__delegate.call(this, x, y, more);
};
G__10462.cljs$lang$maxFixedArity = 2;
G__10462.cljs$lang$applyTo = (function (arglist__10463){
var x = cljs.core.first(arglist__10463);
var y = cljs.core.first(cljs.core.next(arglist__10463));
var more = cljs.core.rest(cljs.core.next(arglist__10463));
return G__10462__delegate.call(this, x, y, more);
});
return G__10462;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10458.call(this,x);
case  2 :
return not_EQ___10459.call(this,x,y);
default:
return not_EQ___10460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10460.cljs$lang$applyTo;
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
var G__10464 = pred;
var G__10465 = cljs.core.next.call(null,coll);
pred = G__10464;
coll = G__10465;
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
{var or__3548__auto____10467 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10467))
{return or__3548__auto____10467;
} else
{{
var G__10469 = pred;
var G__10470 = cljs.core.next.call(null,coll);
pred = G__10469;
coll = G__10470;
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
var G__10486 = null;
var G__10486__10487 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10486__10488 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10486__10489 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10486__10490 = (function() { 
var G__10492__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10492 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10492__delegate.call(this, x, y, zs);
};
G__10492.cljs$lang$maxFixedArity = 2;
G__10492.cljs$lang$applyTo = (function (arglist__10493){
var x = cljs.core.first(arglist__10493);
var y = cljs.core.first(cljs.core.next(arglist__10493));
var zs = cljs.core.rest(cljs.core.next(arglist__10493));
return G__10492__delegate.call(this, x, y, zs);
});
return G__10492;
})()
;
G__10486 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10486__10487.call(this);
case  1 :
return G__10486__10488.call(this,x);
case  2 :
return G__10486__10489.call(this,x,y);
default:
return G__10486__10490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10486.cljs$lang$maxFixedArity = 2;
G__10486.cljs$lang$applyTo = G__10486__10490.cljs$lang$applyTo;
return G__10486;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10496__delegate = function (args){
return x;
};
var G__10496 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10496__delegate.call(this, args);
};
G__10496.cljs$lang$maxFixedArity = 0;
G__10496.cljs$lang$applyTo = (function (arglist__10499){
var args = cljs.core.seq( arglist__10499 );;
return G__10496__delegate.call(this, args);
});
return G__10496;
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
var comp__10532 = (function (){
return cljs.core.identity;
});
var comp__10533 = (function (f){
return f;
});
var comp__10534 = (function (f,g){
return (function() {
var G__10545 = null;
var G__10545__10546 = (function (){
return f.call(null,g.call(null));
});
var G__10545__10547 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10545__10548 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10545__10549 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10545__10550 = (function() { 
var G__10558__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10558__delegate.call(this, x, y, z, args);
};
G__10558.cljs$lang$maxFixedArity = 3;
G__10558.cljs$lang$applyTo = (function (arglist__10561){
var x = cljs.core.first(arglist__10561);
var y = cljs.core.first(cljs.core.next(arglist__10561));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10561)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10561)));
return G__10558__delegate.call(this, x, y, z, args);
});
return G__10558;
})()
;
G__10545 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10545__10546.call(this);
case  1 :
return G__10545__10547.call(this,x);
case  2 :
return G__10545__10548.call(this,x,y);
case  3 :
return G__10545__10549.call(this,x,y,z);
default:
return G__10545__10550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10545.cljs$lang$maxFixedArity = 3;
G__10545.cljs$lang$applyTo = G__10545__10550.cljs$lang$applyTo;
return G__10545;
})()
});
var comp__10535 = (function (f,g,h){
return (function() {
var G__10566 = null;
var G__10566__10568 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10566__10569 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10566__10570 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10566__10571 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10566__10572 = (function() { 
var G__10576__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10576 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10576__delegate.call(this, x, y, z, args);
};
G__10576.cljs$lang$maxFixedArity = 3;
G__10576.cljs$lang$applyTo = (function (arglist__10578){
var x = cljs.core.first(arglist__10578);
var y = cljs.core.first(cljs.core.next(arglist__10578));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10578)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10578)));
return G__10576__delegate.call(this, x, y, z, args);
});
return G__10576;
})()
;
G__10566 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10566__10568.call(this);
case  1 :
return G__10566__10569.call(this,x);
case  2 :
return G__10566__10570.call(this,x,y);
case  3 :
return G__10566__10571.call(this,x,y,z);
default:
return G__10566__10572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10566.cljs$lang$maxFixedArity = 3;
G__10566.cljs$lang$applyTo = G__10566__10572.cljs$lang$applyTo;
return G__10566;
})()
});
var comp__10536 = (function() { 
var G__10580__delegate = function (f1,f2,f3,fs){
var fs__10521 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10582__delegate = function (args){
var ret__10523 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10521),args);
var fs__10524 = cljs.core.next.call(null,fs__10521);

while(true){
if(cljs.core.truth_(fs__10524))
{{
var G__10585 = cljs.core.first.call(null,fs__10524).call(null,ret__10523);
var G__10586 = cljs.core.next.call(null,fs__10524);
ret__10523 = G__10585;
fs__10524 = G__10586;
continue;
}
} else
{return ret__10523;
}
break;
}
};
var G__10582 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10582__delegate.call(this, args);
};
G__10582.cljs$lang$maxFixedArity = 0;
G__10582.cljs$lang$applyTo = (function (arglist__10588){
var args = cljs.core.seq( arglist__10588 );;
return G__10582__delegate.call(this, args);
});
return G__10582;
})()
;
};
var G__10580 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10580__delegate.call(this, f1, f2, f3, fs);
};
G__10580.cljs$lang$maxFixedArity = 3;
G__10580.cljs$lang$applyTo = (function (arglist__10590){
var f1 = cljs.core.first(arglist__10590);
var f2 = cljs.core.first(cljs.core.next(arglist__10590));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10590)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10590)));
return G__10580__delegate.call(this, f1, f2, f3, fs);
});
return G__10580;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10532.call(this);
case  1 :
return comp__10533.call(this,f1);
case  2 :
return comp__10534.call(this,f1,f2);
case  3 :
return comp__10535.call(this,f1,f2,f3);
default:
return comp__10536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10536.cljs$lang$applyTo;
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
var partial__10638 = (function (f,arg1){
return (function() { 
var G__10648__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10648 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10648__delegate.call(this, args);
};
G__10648.cljs$lang$maxFixedArity = 0;
G__10648.cljs$lang$applyTo = (function (arglist__10650){
var args = cljs.core.seq( arglist__10650 );;
return G__10648__delegate.call(this, args);
});
return G__10648;
})()
;
});
var partial__10640 = (function (f,arg1,arg2){
return (function() { 
var G__10653__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10653 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10653__delegate.call(this, args);
};
G__10653.cljs$lang$maxFixedArity = 0;
G__10653.cljs$lang$applyTo = (function (arglist__10654){
var args = cljs.core.seq( arglist__10654 );;
return G__10653__delegate.call(this, args);
});
return G__10653;
})()
;
});
var partial__10641 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10656__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10656 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10656__delegate.call(this, args);
};
G__10656.cljs$lang$maxFixedArity = 0;
G__10656.cljs$lang$applyTo = (function (arglist__10664){
var args = cljs.core.seq( arglist__10664 );;
return G__10656__delegate.call(this, args);
});
return G__10656;
})()
;
});
var partial__10643 = (function() { 
var G__10666__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10667__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10667 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10667__delegate.call(this, args);
};
G__10667.cljs$lang$maxFixedArity = 0;
G__10667.cljs$lang$applyTo = (function (arglist__10670){
var args = cljs.core.seq( arglist__10670 );;
return G__10667__delegate.call(this, args);
});
return G__10667;
})()
;
};
var G__10666 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10666__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10666.cljs$lang$maxFixedArity = 4;
G__10666.cljs$lang$applyTo = (function (arglist__10672){
var f = cljs.core.first(arglist__10672);
var arg1 = cljs.core.first(cljs.core.next(arglist__10672));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10672)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10672))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10672))));
return G__10666__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10666;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10638.call(this,f,arg1);
case  3 :
return partial__10640.call(this,f,arg1,arg2);
case  4 :
return partial__10641.call(this,f,arg1,arg2,arg3);
default:
return partial__10643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10643.cljs$lang$applyTo;
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
var fnil__10695 = (function (f,x){
return (function() {
var G__10700 = null;
var G__10700__10701 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10700__10702 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10700__10703 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10700__10704 = (function() { 
var G__10707__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10707 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10707__delegate.call(this, a, b, c, ds);
};
G__10707.cljs$lang$maxFixedArity = 3;
G__10707.cljs$lang$applyTo = (function (arglist__10708){
var a = cljs.core.first(arglist__10708);
var b = cljs.core.first(cljs.core.next(arglist__10708));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10708)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10708)));
return G__10707__delegate.call(this, a, b, c, ds);
});
return G__10707;
})()
;
G__10700 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10700__10701.call(this,a);
case  2 :
return G__10700__10702.call(this,a,b);
case  3 :
return G__10700__10703.call(this,a,b,c);
default:
return G__10700__10704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10700.cljs$lang$maxFixedArity = 3;
G__10700.cljs$lang$applyTo = G__10700__10704.cljs$lang$applyTo;
return G__10700;
})()
});
var fnil__10696 = (function (f,x,y){
return (function() {
var G__10709 = null;
var G__10709__10710 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10709__10711 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10709__10712 = (function() { 
var G__10714__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10714 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10714__delegate.call(this, a, b, c, ds);
};
G__10714.cljs$lang$maxFixedArity = 3;
G__10714.cljs$lang$applyTo = (function (arglist__10721){
var a = cljs.core.first(arglist__10721);
var b = cljs.core.first(cljs.core.next(arglist__10721));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10721)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10721)));
return G__10714__delegate.call(this, a, b, c, ds);
});
return G__10714;
})()
;
G__10709 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10709__10710.call(this,a,b);
case  3 :
return G__10709__10711.call(this,a,b,c);
default:
return G__10709__10712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10709.cljs$lang$maxFixedArity = 3;
G__10709.cljs$lang$applyTo = G__10709__10712.cljs$lang$applyTo;
return G__10709;
})()
});
var fnil__10697 = (function (f,x,y,z){
return (function() {
var G__10723 = null;
var G__10723__10724 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10723__10725 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10723__10726 = (function() { 
var G__10741__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10741 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10741__delegate.call(this, a, b, c, ds);
};
G__10741.cljs$lang$maxFixedArity = 3;
G__10741.cljs$lang$applyTo = (function (arglist__10745){
var a = cljs.core.first(arglist__10745);
var b = cljs.core.first(cljs.core.next(arglist__10745));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10745)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10745)));
return G__10741__delegate.call(this, a, b, c, ds);
});
return G__10741;
})()
;
G__10723 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10723__10724.call(this,a,b);
case  3 :
return G__10723__10725.call(this,a,b,c);
default:
return G__10723__10726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10723.cljs$lang$maxFixedArity = 3;
G__10723.cljs$lang$applyTo = G__10723__10726.cljs$lang$applyTo;
return G__10723;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10695.call(this,f,x);
case  3 :
return fnil__10696.call(this,f,x,y);
case  4 :
return fnil__10697.call(this,f,x,y,z);
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
var mapi__10758 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10755 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10755))
{var s__10756 = temp__3698__auto____10755;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10756)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10756)));
} else
{return null;
}
})));
});

return mapi__10758.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10878 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10878))
{var s__10879 = temp__3698__auto____10878;

var x__10881 = f.call(null,cljs.core.first.call(null,s__10879));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10881)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10879));
} else
{return cljs.core.cons.call(null,x__10881,keep.call(null,f,cljs.core.rest.call(null,s__10879)));
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
var keepi__10989 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10976 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10976))
{var s__10977 = temp__3698__auto____10976;

var x__10985 = f.call(null,idx,cljs.core.first.call(null,s__10977));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10985)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10977));
} else
{return cljs.core.cons.call(null,x__10985,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10977)));
}
} else
{return null;
}
})));
});

return keepi__10989.call(null,0,coll);
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
var every_pred__11127 = (function (p){
return (function() {
var ep1 = null;
var ep1__11132 = (function (){
return true;
});
var ep1__11133 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11134 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11013 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11013))
{return p.call(null,y);
} else
{return and__3546__auto____11013;
}
})());
});
var ep1__11135 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11019 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11019))
{var and__3546__auto____11021 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11021))
{return p.call(null,z);
} else
{return and__3546__auto____11021;
}
} else
{return and__3546__auto____11019;
}
})());
});
var ep1__11136 = (function() { 
var G__11147__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11024 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11024))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11024;
}
})());
};
var G__11147 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11147__delegate.call(this, x, y, z, args);
};
G__11147.cljs$lang$maxFixedArity = 3;
G__11147.cljs$lang$applyTo = (function (arglist__11155){
var x = cljs.core.first(arglist__11155);
var y = cljs.core.first(cljs.core.next(arglist__11155));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11155)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11155)));
return G__11147__delegate.call(this, x, y, z, args);
});
return G__11147;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11132.call(this);
case  1 :
return ep1__11133.call(this,x);
case  2 :
return ep1__11134.call(this,x,y);
case  3 :
return ep1__11135.call(this,x,y,z);
default:
return ep1__11136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11136.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11128 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11159 = (function (){
return true;
});
var ep2__11160 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11028 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11028))
{return p2.call(null,x);
} else
{return and__3546__auto____11028;
}
})());
});
var ep2__11161 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11037 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11037))
{var and__3546__auto____11040 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11040))
{var and__3546__auto____11041 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11041))
{return p2.call(null,y);
} else
{return and__3546__auto____11041;
}
} else
{return and__3546__auto____11040;
}
} else
{return and__3546__auto____11037;
}
})());
});
var ep2__11163 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11046 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11046))
{var and__3546__auto____11047 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11047))
{var and__3546__auto____11049 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11049))
{var and__3546__auto____11051 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11051))
{var and__3546__auto____11052 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11052))
{return p2.call(null,z);
} else
{return and__3546__auto____11052;
}
} else
{return and__3546__auto____11051;
}
} else
{return and__3546__auto____11049;
}
} else
{return and__3546__auto____11047;
}
} else
{return and__3546__auto____11046;
}
})());
});
var ep2__11164 = (function() { 
var G__11246__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11054 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11054))
{return cljs.core.every_QMARK_.call(null,(function (p1__10968_SHARP_){
var and__3546__auto____11057 = p1.call(null,p1__10968_SHARP_);

if(cljs.core.truth_(and__3546__auto____11057))
{return p2.call(null,p1__10968_SHARP_);
} else
{return and__3546__auto____11057;
}
}),args);
} else
{return and__3546__auto____11054;
}
})());
};
var G__11246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11246__delegate.call(this, x, y, z, args);
};
G__11246.cljs$lang$maxFixedArity = 3;
G__11246.cljs$lang$applyTo = (function (arglist__11252){
var x = cljs.core.first(arglist__11252);
var y = cljs.core.first(cljs.core.next(arglist__11252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11252)));
return G__11246__delegate.call(this, x, y, z, args);
});
return G__11246;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11159.call(this);
case  1 :
return ep2__11160.call(this,x);
case  2 :
return ep2__11161.call(this,x,y);
case  3 :
return ep2__11163.call(this,x,y,z);
default:
return ep2__11164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11164.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11129 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11259 = (function (){
return true;
});
var ep3__11260 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11062 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11062))
{var and__3546__auto____11064 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11064))
{return p3.call(null,x);
} else
{return and__3546__auto____11064;
}
} else
{return and__3546__auto____11062;
}
})());
});
var ep3__11262 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11068 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11068))
{var and__3546__auto____11069 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11069))
{var and__3546__auto____11071 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11071))
{var and__3546__auto____11074 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11074))
{var and__3546__auto____11076 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11076))
{return p3.call(null,y);
} else
{return and__3546__auto____11076;
}
} else
{return and__3546__auto____11074;
}
} else
{return and__3546__auto____11071;
}
} else
{return and__3546__auto____11069;
}
} else
{return and__3546__auto____11068;
}
})());
});
var ep3__11263 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11079 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11079))
{var and__3546__auto____11081 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11081))
{var and__3546__auto____11083 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11083))
{var and__3546__auto____11084 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11084))
{var and__3546__auto____11085 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11085))
{var and__3546__auto____11087 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11087))
{var and__3546__auto____11090 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11090))
{var and__3546__auto____11092 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11092))
{return p3.call(null,z);
} else
{return and__3546__auto____11092;
}
} else
{return and__3546__auto____11090;
}
} else
{return and__3546__auto____11087;
}
} else
{return and__3546__auto____11085;
}
} else
{return and__3546__auto____11084;
}
} else
{return and__3546__auto____11083;
}
} else
{return and__3546__auto____11081;
}
} else
{return and__3546__auto____11079;
}
})());
});
var ep3__11265 = (function() { 
var G__11290__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11096 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11096))
{return cljs.core.every_QMARK_.call(null,(function (p1__10969_SHARP_){
var and__3546__auto____11098 = p1.call(null,p1__10969_SHARP_);

if(cljs.core.truth_(and__3546__auto____11098))
{var and__3546__auto____11099 = p2.call(null,p1__10969_SHARP_);

if(cljs.core.truth_(and__3546__auto____11099))
{return p3.call(null,p1__10969_SHARP_);
} else
{return and__3546__auto____11099;
}
} else
{return and__3546__auto____11098;
}
}),args);
} else
{return and__3546__auto____11096;
}
})());
};
var G__11290 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11290__delegate.call(this, x, y, z, args);
};
G__11290.cljs$lang$maxFixedArity = 3;
G__11290.cljs$lang$applyTo = (function (arglist__11296){
var x = cljs.core.first(arglist__11296);
var y = cljs.core.first(cljs.core.next(arglist__11296));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11296)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11296)));
return G__11290__delegate.call(this, x, y, z, args);
});
return G__11290;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11259.call(this);
case  1 :
return ep3__11260.call(this,x);
case  2 :
return ep3__11262.call(this,x,y);
case  3 :
return ep3__11263.call(this,x,y,z);
default:
return ep3__11265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11265.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11130 = (function() { 
var G__11300__delegate = function (p1,p2,p3,ps){
var ps__11102 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11303 = (function (){
return true;
});
var epn__11304 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10970_SHARP_){
return p1__10970_SHARP_.call(null,x);
}),ps__11102);
});
var epn__11305 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10971_SHARP_){
var and__3546__auto____11107 = p1__10971_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11107))
{return p1__10971_SHARP_.call(null,y);
} else
{return and__3546__auto____11107;
}
}),ps__11102);
});
var epn__11306 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10972_SHARP_){
var and__3546__auto____11116 = p1__10972_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11116))
{var and__3546__auto____11117 = p1__10972_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11117))
{return p1__10972_SHARP_.call(null,z);
} else
{return and__3546__auto____11117;
}
} else
{return and__3546__auto____11116;
}
}),ps__11102);
});
var epn__11307 = (function() { 
var G__11330__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11119 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11119))
{return cljs.core.every_QMARK_.call(null,(function (p1__10973_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10973_SHARP_,args);
}),ps__11102);
} else
{return and__3546__auto____11119;
}
})());
};
var G__11330 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11330__delegate.call(this, x, y, z, args);
};
G__11330.cljs$lang$maxFixedArity = 3;
G__11330.cljs$lang$applyTo = (function (arglist__11347){
var x = cljs.core.first(arglist__11347);
var y = cljs.core.first(cljs.core.next(arglist__11347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11347)));
return G__11330__delegate.call(this, x, y, z, args);
});
return G__11330;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11303.call(this);
case  1 :
return epn__11304.call(this,x);
case  2 :
return epn__11305.call(this,x,y);
case  3 :
return epn__11306.call(this,x,y,z);
default:
return epn__11307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11307.cljs$lang$applyTo;
return epn;
})()
};
var G__11300 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11300__delegate.call(this, p1, p2, p3, ps);
};
G__11300.cljs$lang$maxFixedArity = 3;
G__11300.cljs$lang$applyTo = (function (arglist__11350){
var p1 = cljs.core.first(arglist__11350);
var p2 = cljs.core.first(cljs.core.next(arglist__11350));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11350)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11350)));
return G__11300__delegate.call(this, p1, p2, p3, ps);
});
return G__11300;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11127.call(this,p1);
case  2 :
return every_pred__11128.call(this,p1,p2);
case  3 :
return every_pred__11129.call(this,p1,p2,p3);
default:
return every_pred__11130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11130.cljs$lang$applyTo;
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
var some_fn__11641 = (function (p){
return (function() {
var sp1 = null;
var sp1__11647 = (function (){
return null;
});
var sp1__11648 = (function (x){
return p.call(null,x);
});
var sp1__11649 = (function (x,y){
var or__3548__auto____11374 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11374))
{return or__3548__auto____11374;
} else
{return p.call(null,y);
}
});
var sp1__11650 = (function (x,y,z){
var or__3548__auto____11375 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11375))
{return or__3548__auto____11375;
} else
{var or__3548__auto____11376 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11376))
{return or__3548__auto____11376;
} else
{return p.call(null,z);
}
}
});
var sp1__11651 = (function() { 
var G__11661__delegate = function (x,y,z,args){
var or__3548__auto____11377 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11377))
{return or__3548__auto____11377;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11661 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11661__delegate.call(this, x, y, z, args);
};
G__11661.cljs$lang$maxFixedArity = 3;
G__11661.cljs$lang$applyTo = (function (arglist__11666){
var x = cljs.core.first(arglist__11666);
var y = cljs.core.first(cljs.core.next(arglist__11666));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11666)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11666)));
return G__11661__delegate.call(this, x, y, z, args);
});
return G__11661;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11647.call(this);
case  1 :
return sp1__11648.call(this,x);
case  2 :
return sp1__11649.call(this,x,y);
case  3 :
return sp1__11650.call(this,x,y,z);
default:
return sp1__11651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11651.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11642 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11669 = (function (){
return null;
});
var sp2__11719 = (function (x){
var or__3548__auto____11402 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11402))
{return or__3548__auto____11402;
} else
{return p2.call(null,x);
}
});
var sp2__11720 = (function (x,y){
var or__3548__auto____11403 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11403))
{return or__3548__auto____11403;
} else
{var or__3548__auto____11540 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11540))
{return or__3548__auto____11540;
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
var sp2__11721 = (function (x,y,z){
var or__3548__auto____11544 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{var or__3548__auto____11546 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11546))
{return or__3548__auto____11546;
} else
{var or__3548__auto____11550 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11550))
{return or__3548__auto____11550;
} else
{var or__3548__auto____11555 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11555))
{return or__3548__auto____11555;
} else
{var or__3548__auto____11558 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11558))
{return or__3548__auto____11558;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11723 = (function() { 
var G__11730__delegate = function (x,y,z,args){
var or__3548__auto____11562 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11562))
{return or__3548__auto____11562;
} else
{return cljs.core.some.call(null,(function (p1__11003_SHARP_){
var or__3548__auto____11564 = p1.call(null,p1__11003_SHARP_);

if(cljs.core.truth_(or__3548__auto____11564))
{return or__3548__auto____11564;
} else
{return p2.call(null,p1__11003_SHARP_);
}
}),args);
}
};
var G__11730 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11730__delegate.call(this, x, y, z, args);
};
G__11730.cljs$lang$maxFixedArity = 3;
G__11730.cljs$lang$applyTo = (function (arglist__11738){
var x = cljs.core.first(arglist__11738);
var y = cljs.core.first(cljs.core.next(arglist__11738));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11738)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11738)));
return G__11730__delegate.call(this, x, y, z, args);
});
return G__11730;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11669.call(this);
case  1 :
return sp2__11719.call(this,x);
case  2 :
return sp2__11720.call(this,x,y);
case  3 :
return sp2__11721.call(this,x,y,z);
default:
return sp2__11723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11723.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11643 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11741 = (function (){
return null;
});
var sp3__11742 = (function (x){
var or__3548__auto____11568 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11568))
{return or__3548__auto____11568;
} else
{var or__3548__auto____11572 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11572))
{return or__3548__auto____11572;
} else
{return p3.call(null,x);
}
}
});
var sp3__11743 = (function (x,y){
var or__3548__auto____11576 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{var or__3548__auto____11578 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11578))
{return or__3548__auto____11578;
} else
{var or__3548__auto____11580 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11580))
{return or__3548__auto____11580;
} else
{var or__3548__auto____11583 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11583))
{return or__3548__auto____11583;
} else
{var or__3548__auto____11586 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11586))
{return or__3548__auto____11586;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11744 = (function (x,y,z){
var or__3548__auto____11588 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11588))
{return or__3548__auto____11588;
} else
{var or__3548__auto____11591 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11591))
{return or__3548__auto____11591;
} else
{var or__3548__auto____11594 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11594))
{return or__3548__auto____11594;
} else
{var or__3548__auto____11595 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11595))
{return or__3548__auto____11595;
} else
{var or__3548__auto____11598 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11598))
{return or__3548__auto____11598;
} else
{var or__3548__auto____11600 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11600))
{return or__3548__auto____11600;
} else
{var or__3548__auto____11603 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11603))
{return or__3548__auto____11603;
} else
{var or__3548__auto____11604 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11604))
{return or__3548__auto____11604;
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
var sp3__11745 = (function() { 
var G__11749__delegate = function (x,y,z,args){
var or__3548__auto____11608 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11608))
{return or__3548__auto____11608;
} else
{return cljs.core.some.call(null,(function (p1__11004_SHARP_){
var or__3548__auto____11610 = p1.call(null,p1__11004_SHARP_);

if(cljs.core.truth_(or__3548__auto____11610))
{return or__3548__auto____11610;
} else
{var or__3548__auto____11614 = p2.call(null,p1__11004_SHARP_);

if(cljs.core.truth_(or__3548__auto____11614))
{return or__3548__auto____11614;
} else
{return p3.call(null,p1__11004_SHARP_);
}
}
}),args);
}
};
var G__11749 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11749__delegate.call(this, x, y, z, args);
};
G__11749.cljs$lang$maxFixedArity = 3;
G__11749.cljs$lang$applyTo = (function (arglist__11750){
var x = cljs.core.first(arglist__11750);
var y = cljs.core.first(cljs.core.next(arglist__11750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11750)));
return G__11749__delegate.call(this, x, y, z, args);
});
return G__11749;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11741.call(this);
case  1 :
return sp3__11742.call(this,x);
case  2 :
return sp3__11743.call(this,x,y);
case  3 :
return sp3__11744.call(this,x,y,z);
default:
return sp3__11745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11745.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11644 = (function() { 
var G__11754__delegate = function (p1,p2,p3,ps){
var ps__11617 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11755 = (function (){
return null;
});
var spn__11756 = (function (x){
return cljs.core.some.call(null,(function (p1__11005_SHARP_){
return p1__11005_SHARP_.call(null,x);
}),ps__11617);
});
var spn__11757 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11006_SHARP_){
var or__3548__auto____11618 = p1__11006_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11618))
{return or__3548__auto____11618;
} else
{return p1__11006_SHARP_.call(null,y);
}
}),ps__11617);
});
var spn__11758 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11007_SHARP_){
var or__3548__auto____11625 = p1__11007_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11625))
{return or__3548__auto____11625;
} else
{var or__3548__auto____11627 = p1__11007_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11627))
{return or__3548__auto____11627;
} else
{return p1__11007_SHARP_.call(null,z);
}
}
}),ps__11617);
});
var spn__11759 = (function() { 
var G__11763__delegate = function (x,y,z,args){
var or__3548__auto____11635 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11635))
{return or__3548__auto____11635;
} else
{return cljs.core.some.call(null,(function (p1__11009_SHARP_){
return cljs.core.some.call(null,p1__11009_SHARP_,args);
}),ps__11617);
}
};
var G__11763 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11763__delegate.call(this, x, y, z, args);
};
G__11763.cljs$lang$maxFixedArity = 3;
G__11763.cljs$lang$applyTo = (function (arglist__11765){
var x = cljs.core.first(arglist__11765);
var y = cljs.core.first(cljs.core.next(arglist__11765));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11765)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11765)));
return G__11763__delegate.call(this, x, y, z, args);
});
return G__11763;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11755.call(this);
case  1 :
return spn__11756.call(this,x);
case  2 :
return spn__11757.call(this,x,y);
case  3 :
return spn__11758.call(this,x,y,z);
default:
return spn__11759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11759.cljs$lang$applyTo;
return spn;
})()
};
var G__11754 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11754__delegate.call(this, p1, p2, p3, ps);
};
G__11754.cljs$lang$maxFixedArity = 3;
G__11754.cljs$lang$applyTo = (function (arglist__11769){
var p1 = cljs.core.first(arglist__11769);
var p2 = cljs.core.first(cljs.core.next(arglist__11769));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11769)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11769)));
return G__11754__delegate.call(this, p1, p2, p3, ps);
});
return G__11754;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11641.call(this,p1);
case  2 :
return some_fn__11642.call(this,p1,p2);
case  3 :
return some_fn__11643.call(this,p1,p2,p3);
default:
return some_fn__11644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11644.cljs$lang$applyTo;
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
var map__11810 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11772 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11772))
{var s__11773 = temp__3698__auto____11772;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11773)),map.call(null,f,cljs.core.rest.call(null,s__11773)));
} else
{return null;
}
})));
});
var map__11811 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11777 = cljs.core.seq.call(null,c1);
var s2__11779 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11780 = s1__11777;

if(cljs.core.truth_(and__3546__auto____11780))
{return s2__11779;
} else
{return and__3546__auto____11780;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11777),cljs.core.first.call(null,s2__11779)),map.call(null,f,cljs.core.rest.call(null,s1__11777),cljs.core.rest.call(null,s2__11779)));
} else
{return null;
}
})));
});
var map__11812 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11790 = cljs.core.seq.call(null,c1);
var s2__11791 = cljs.core.seq.call(null,c2);
var s3__11792 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11793 = s1__11790;

if(cljs.core.truth_(and__3546__auto____11793))
{var and__3546__auto____11795 = s2__11791;

if(cljs.core.truth_(and__3546__auto____11795))
{return s3__11792;
} else
{return and__3546__auto____11795;
}
} else
{return and__3546__auto____11793;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11790),cljs.core.first.call(null,s2__11791),cljs.core.first.call(null,s3__11792)),map.call(null,f,cljs.core.rest.call(null,s1__11790),cljs.core.rest.call(null,s2__11791),cljs.core.rest.call(null,s3__11792)));
} else
{return null;
}
})));
});
var map__11813 = (function() { 
var G__11836__delegate = function (f,c1,c2,c3,colls){
var step__11806 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11801 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11801)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11801),step.call(null,map.call(null,cljs.core.rest,ss__11801)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11361_SHARP_){
return cljs.core.apply.call(null,f,p1__11361_SHARP_);
}),step__11806.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11836 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11836__delegate.call(this, f, c1, c2, c3, colls);
};
G__11836.cljs$lang$maxFixedArity = 4;
G__11836.cljs$lang$applyTo = (function (arglist__11849){
var f = cljs.core.first(arglist__11849);
var c1 = cljs.core.first(cljs.core.next(arglist__11849));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11849)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11849))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11849))));
return G__11836__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11836;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11810.call(this,f,c1);
case  3 :
return map__11811.call(this,f,c1,c2);
case  4 :
return map__11812.call(this,f,c1,c2,c3);
default:
return map__11813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11813.cljs$lang$applyTo;
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
{var temp__3698__auto____11858 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11858))
{var s__11859 = temp__3698__auto____11858;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11859),take.call(null,(n - 1),cljs.core.rest.call(null,s__11859)));
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
var step__11881 = (function (n,coll){
while(true){
var s__11879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11880 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11880))
{return s__11879;
} else
{return and__3546__auto____11880;
}
})()))
{{
var G__11885 = (n - 1);
var G__11887 = cljs.core.rest.call(null,s__11879);
n = G__11885;
coll = G__11887;
continue;
}
} else
{return s__11879;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11881.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11900 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11901 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11900.call(this,n);
case  2 :
return drop_last__11901.call(this,n,s);
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
var s__11909 = cljs.core.seq.call(null,coll);
var lead__11910 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11910))
{{
var G__11917 = cljs.core.next.call(null,s__11909);
var G__11918 = cljs.core.next.call(null,lead__11910);
s__11909 = G__11917;
lead__11910 = G__11918;
continue;
}
} else
{return s__11909;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11925 = (function (pred,coll){
while(true){
var s__11922 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11923 = s__11922;

if(cljs.core.truth_(and__3546__auto____11923))
{return pred.call(null,cljs.core.first.call(null,s__11922));
} else
{return and__3546__auto____11923;
}
})()))
{{
var G__11945 = pred;
var G__11946 = cljs.core.rest.call(null,s__11922);
pred = G__11945;
coll = G__11946;
continue;
}
} else
{return s__11922;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11925.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11967 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11967))
{var s__11968 = temp__3698__auto____11967;

return cljs.core.concat.call(null,s__11968,cycle.call(null,s__11968));
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
var repeat__12056 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12057 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12056.call(this,n);
case  2 :
return repeat__12057.call(this,n,x);
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
var repeatedly__12078 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12079 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12078.call(this,n);
case  2 :
return repeatedly__12079.call(this,n,f);
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
var interleave__12105 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12091 = cljs.core.seq.call(null,c1);
var s2__12092 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12093 = s1__12091;

if(cljs.core.truth_(and__3546__auto____12093))
{return s2__12092;
} else
{return and__3546__auto____12093;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12091),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12092),interleave.call(null,cljs.core.rest.call(null,s1__12091),cljs.core.rest.call(null,s2__12092))));
} else
{return null;
}
})));
});
var interleave__12106 = (function() { 
var G__12115__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12102 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12102)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12102),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12102)));
} else
{return null;
}
})));
};
var G__12115 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12115__delegate.call(this, c1, c2, colls);
};
G__12115.cljs$lang$maxFixedArity = 2;
G__12115.cljs$lang$applyTo = (function (arglist__12116){
var c1 = cljs.core.first(arglist__12116);
var c2 = cljs.core.first(cljs.core.next(arglist__12116));
var colls = cljs.core.rest(cljs.core.next(arglist__12116));
return G__12115__delegate.call(this, c1, c2, colls);
});
return G__12115;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12105.call(this,c1,c2);
default:
return interleave__12106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12106.cljs$lang$applyTo;
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
var cat__12126 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12124 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12124))
{var coll__12125 = temp__3695__auto____12124;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12125),cat.call(null,cljs.core.rest.call(null,coll__12125),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12126.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12132 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12133 = (function() { 
var G__12135__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12135 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12135__delegate.call(this, f, coll, colls);
};
G__12135.cljs$lang$maxFixedArity = 2;
G__12135.cljs$lang$applyTo = (function (arglist__12137){
var f = cljs.core.first(arglist__12137);
var coll = cljs.core.first(cljs.core.next(arglist__12137));
var colls = cljs.core.rest(cljs.core.next(arglist__12137));
return G__12135__delegate.call(this, f, coll, colls);
});
return G__12135;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12132.call(this,f,coll);
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
var temp__3698__auto____12144 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12144))
{var s__12145 = temp__3698__auto____12144;

var f__12146 = cljs.core.first.call(null,s__12145);
var r__12147 = cljs.core.rest.call(null,s__12145);

if(cljs.core.truth_(pred.call(null,f__12146)))
{return cljs.core.cons.call(null,f__12146,filter.call(null,pred,r__12147));
} else
{return filter.call(null,pred,r__12147);
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
var walk__12162 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12162.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12157_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12157_SHARP_));
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
var partition__12251 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12252 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12239 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12239))
{var s__12240 = temp__3698__auto____12239;

var p__12242 = cljs.core.take.call(null,n,s__12240);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12242))))
{return cljs.core.cons.call(null,p__12242,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12240)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12253 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12244 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12244))
{var s__12246 = temp__3698__auto____12244;

var p__12247 = cljs.core.take.call(null,n,s__12246);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12247))))
{return cljs.core.cons.call(null,p__12247,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12246)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12247,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12251.call(this,n,step);
case  3 :
return partition__12252.call(this,n,step,pad);
case  4 :
return partition__12253.call(this,n,step,pad,coll);
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
var get_in__12270 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12271 = (function (m,ks,not_found){
var sentinel__12264 = cljs.core.lookup_sentinel;
var m__12265 = m;
var ks__12266 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12266))
{var m__12268 = cljs.core.get.call(null,m__12265,cljs.core.first.call(null,ks__12266),sentinel__12264);

if(cljs.core.truth_((sentinel__12264 === m__12268)))
{return not_found;
} else
{{
var G__12277 = sentinel__12264;
var G__12278 = m__12268;
var G__12279 = cljs.core.next.call(null,ks__12266);
sentinel__12264 = G__12277;
m__12265 = G__12278;
ks__12266 = G__12279;
continue;
}
}
} else
{return m__12265;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12270.call(this,m,ks);
case  3 :
return get_in__12271.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12280,v){
var vec__12281__12282 = p__12280;
var k__12283 = cljs.core.nth.call(null,vec__12281__12282,0,null);
var ks__12285 = cljs.core.nthnext.call(null,vec__12281__12282,1);

if(cljs.core.truth_(ks__12285))
{return cljs.core.assoc.call(null,m,k__12283,assoc_in.call(null,cljs.core.get.call(null,m,k__12283),ks__12285,v));
} else
{return cljs.core.assoc.call(null,m,k__12283,v);
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
var update_in__delegate = function (m,p__12316,f,args){
var vec__12317__12318 = p__12316;
var k__12319 = cljs.core.nth.call(null,vec__12317__12318,0,null);
var ks__12320 = cljs.core.nthnext.call(null,vec__12317__12318,1);

if(cljs.core.truth_(ks__12320))
{return cljs.core.assoc.call(null,m,k__12319,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12319),ks__12320,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12319,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12319),args));
}
};
var update_in = function (m,p__12316,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12316, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12329){
var m = cljs.core.first(arglist__12329);
var p__12316 = cljs.core.first(cljs.core.next(arglist__12329));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12329)));
return update_in__delegate.call(this, m, p__12316, f, args);
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
var this__12343 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12398 = null;
var G__12398__12399 = (function (coll,k){
var this__12345 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12398__12400 = (function (coll,k,not_found){
var this__12346 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12398 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12398__12399.call(this,coll,k);
case  3 :
return G__12398__12400.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12398;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12347 = this;
var new_array__12348 = cljs.core.aclone.call(null,this__12347.array);

(new_array__12348[k] = v);
return (new cljs.core.Vector(this__12347.meta,new_array__12348));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12406 = null;
var G__12406__12407 = (function (coll,k){
var this__12349 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12406__12408 = (function (coll,k,not_found){
var this__12350 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12406 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12406__12407.call(this,coll,k);
case  3 :
return G__12406__12408.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12406;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12355 = this;
var new_array__12356 = cljs.core.aclone.call(null,this__12355.array);

new_array__12356.push(o);
return (new cljs.core.Vector(this__12355.meta,new_array__12356));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12415 = null;
var G__12415__12417 = (function (v,f){
var this__12359 = this;
return cljs.core.ci_reduce.call(null,this__12359.array,f);
});
var G__12415__12418 = (function (v,f,start){
var this__12361 = this;
return cljs.core.ci_reduce.call(null,this__12361.array,f,start);
});
G__12415 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12415__12417.call(this,v,f);
case  3 :
return G__12415__12418.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12415;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12363 = this;
if(cljs.core.truth_((this__12363.array.length > 0)))
{var vector_seq__12367 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12363.array.length)))
{return cljs.core.cons.call(null,(this__12363.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12367.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12368 = this;
return this__12368.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12372 = this;
var count__12373 = this__12372.array.length;

if(cljs.core.truth_((count__12373 > 0)))
{return (this__12372.array[(count__12373 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12375 = this;
if(cljs.core.truth_((this__12375.array.length > 0)))
{var new_array__12377 = cljs.core.aclone.call(null,this__12375.array);

new_array__12377.pop();
return (new cljs.core.Vector(this__12375.meta,new_array__12377));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12380 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12384 = this;
return (new cljs.core.Vector(meta,this__12384.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12386 = this;
return this__12386.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12429 = null;
var G__12429__12431 = (function (coll,n){
var this__12387 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12388 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12388))
{return (n < this__12387.array.length);
} else
{return and__3546__auto____12388;
}
})()))
{return (this__12387.array[n]);
} else
{return null;
}
});
var G__12429__12433 = (function (coll,n,not_found){
var this__12389 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12391 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12391))
{return (n < this__12389.array.length);
} else
{return and__3546__auto____12391;
}
})()))
{return (this__12389.array[n]);
} else
{return not_found;
}
});
G__12429 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12429__12431.call(this,coll,n);
case  3 :
return G__12429__12433.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12429;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12393 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12393.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12448){
var args = cljs.core.seq( arglist__12448 );;
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
var this__12461 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12570 = null;
var G__12570__12571 = (function (coll,k){
var this__12462 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12570__12572 = (function (coll,k,not_found){
var this__12464 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12570 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12570__12571.call(this,coll,k);
case  3 :
return G__12570__12572.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12570;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12466 = this;
var v_pos__12468 = (this__12466.start + key);

return (new cljs.core.Subvec(this__12466.meta,cljs.core._assoc.call(null,this__12466.v,v_pos__12468,val),this__12466.start,((this__12466.end > (v_pos__12468 + 1)) ? this__12466.end : (v_pos__12468 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12574 = null;
var G__12574__12575 = (function (coll,k){
var this__12469 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12574__12576 = (function (coll,k,not_found){
var this__12470 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12574 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12574__12575.call(this,coll,k);
case  3 :
return G__12574__12576.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12574;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12473 = this;
return (new cljs.core.Subvec(this__12473.meta,cljs.core._assoc_n.call(null,this__12473.v,this__12473.end,o),this__12473.start,(this__12473.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12596 = null;
var G__12596__12597 = (function (coll,f){
var this__12533 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12596__12598 = (function (coll,f,start){
var this__12534 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12596 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12596__12597.call(this,coll,f);
case  3 :
return G__12596__12598.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12596;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12536 = this;
var subvec_seq__12539 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12536.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12536.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12539.call(null,this__12536.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12542 = this;
return (this__12542.end - this__12542.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12543 = this;
return cljs.core._nth.call(null,this__12543.v,(this__12543.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12545 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12545.start,this__12545.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12545.meta,this__12545.v,this__12545.start,(this__12545.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12548 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12550 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12556 = this;
return (new cljs.core.Subvec(meta,this__12556.v,this__12556.start,this__12556.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12558 = this;
return this__12558.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12634 = null;
var G__12634__12635 = (function (coll,n){
var this__12559 = this;
return cljs.core._nth.call(null,this__12559.v,(this__12559.start + n));
});
var G__12634__12637 = (function (coll,n,not_found){
var this__12564 = this;
return cljs.core._nth.call(null,this__12564.v,(this__12564.start + n),not_found);
});
G__12634 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12634__12635.call(this,coll,n);
case  3 :
return G__12634__12637.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12634;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12568 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12568.meta);
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
var subvec__12657 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12658 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12657.call(this,v,start);
case  3 :
return subvec__12658.call(this,v,start,end);
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
var this__12673 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12675 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12682 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12682.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12683 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12685 = this;
return cljs.core._first.call(null,this__12685.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12687 = this;
var temp__3695__auto____12693 = cljs.core.next.call(null,this__12687.front);

if(cljs.core.truth_(temp__3695__auto____12693))
{var f1__12694 = temp__3695__auto____12693;

return (new cljs.core.PersistentQueueSeq(this__12687.meta,f1__12694,this__12687.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12687.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12687.meta,this__12687.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12696 = this;
return this__12696.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12699 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12699.front,this__12699.rear));
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
var this__12735 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12737 = this;
if(cljs.core.truth_(this__12737.front))
{return (new cljs.core.PersistentQueue(this__12737.meta,(this__12737.count + 1),this__12737.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12742 = this__12737.rear;

if(cljs.core.truth_(or__3548__auto____12742))
{return or__3548__auto____12742;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12737.meta,(this__12737.count + 1),cljs.core.conj.call(null,this__12737.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12745 = this;
var rear__12748 = cljs.core.seq.call(null,this__12745.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12753 = this__12745.front;

if(cljs.core.truth_(or__3548__auto____12753))
{return or__3548__auto____12753;
} else
{return rear__12748;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12745.front,cljs.core.seq.call(null,rear__12748)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12758 = this;
return this__12758.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12760 = this;
return cljs.core._first.call(null,this__12760.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12762 = this;
if(cljs.core.truth_(this__12762.front))
{var temp__3695__auto____12766 = cljs.core.next.call(null,this__12762.front);

if(cljs.core.truth_(temp__3695__auto____12766))
{var f1__12768 = temp__3695__auto____12766;

return (new cljs.core.PersistentQueue(this__12762.meta,(this__12762.count - 1),f1__12768,this__12762.rear));
} else
{return (new cljs.core.PersistentQueue(this__12762.meta,(this__12762.count - 1),cljs.core.seq.call(null,this__12762.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12771 = this;
return cljs.core.first.call(null,this__12771.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12774 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12781 = this;
return (new cljs.core.PersistentQueue(meta,this__12781.count,this__12781.front,this__12781.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12782 = this;
return this__12782.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12783 = this;
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
var this__12800 = this;
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
var len__12809 = array.length;

var i__12810 = 0;

while(true){
if(cljs.core.truth_((i__12810 < len__12809)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12810]))))
{return i__12810;
} else
{{
var G__12815 = (i__12810 + incr);
i__12810 = G__12815;
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
var obj_map_contains_key_QMARK___12822 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12824 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12819 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12819))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12819;
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
return obj_map_contains_key_QMARK___12822.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12824.call(this,k,strobj,true_val,false_val);
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
var this__12860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12913 = null;
var G__12913__12914 = (function (coll,k){
var this__12865 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12913__12915 = (function (coll,k,not_found){
var this__12866 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12866.strobj,(this__12866.strobj[k]),not_found);
});
G__12913 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12913__12914.call(this,coll,k);
case  3 :
return G__12913__12915.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12913;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12867 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12868 = goog.object.clone.call(null,this__12867.strobj);
var overwrite_QMARK___12869 = new_strobj__12868.hasOwnProperty(k);

(new_strobj__12868[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12869))
{return (new cljs.core.ObjMap(this__12867.meta,this__12867.keys,new_strobj__12868));
} else
{var new_keys__12870 = cljs.core.aclone.call(null,this__12867.keys);

new_keys__12870.push(k);
return (new cljs.core.ObjMap(this__12867.meta,new_keys__12870,new_strobj__12868));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12867.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12871 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12871.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12923 = null;
var G__12923__12924 = (function (coll,k){
var this__12872 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12923__12925 = (function (coll,k,not_found){
var this__12873 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12923 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12923__12924.call(this,coll,k);
case  3 :
return G__12923__12925.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12923;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12874 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12876 = this;
if(cljs.core.truth_((this__12876.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12834_SHARP_){
return cljs.core.vector.call(null,p1__12834_SHARP_,(this__12876.strobj[p1__12834_SHARP_]));
}),this__12876.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12879 = this;
return this__12879.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12881 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12884 = this;
return (new cljs.core.ObjMap(meta,this__12884.keys,this__12884.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12886 = this;
return this__12886.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12888 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12888.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12890 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12891 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12891))
{return this__12890.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12891;
}
})()))
{var new_keys__12894 = cljs.core.aclone.call(null,this__12890.keys);
var new_strobj__12911 = goog.object.clone.call(null,this__12890.strobj);

new_keys__12894.splice(cljs.core.scan_array.call(null,1,k,new_keys__12894),1);
cljs.core.js_delete.call(null,new_strobj__12911,k);
return (new cljs.core.ObjMap(this__12890.meta,new_keys__12894,new_strobj__12911));
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
var this__12975 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13063 = null;
var G__13063__13064 = (function (coll,k){
var this__13020 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13063__13065 = (function (coll,k,not_found){
var this__13021 = this;
var bucket__13022 = (this__13021.hashobj[cljs.core.hash.call(null,k)]);
var i__13023 = (cljs.core.truth_(bucket__13022)?cljs.core.scan_array.call(null,2,k,bucket__13022):null);

if(cljs.core.truth_(i__13023))
{return (bucket__13022[(i__13023 + 1)]);
} else
{return not_found;
}
});
G__13063 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13063__13064.call(this,coll,k);
case  3 :
return G__13063__13065.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13063;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13025 = this;
var h__13026 = cljs.core.hash.call(null,k);
var bucket__13027 = (this__13025.hashobj[h__13026]);

if(cljs.core.truth_(bucket__13027))
{var new_bucket__13028 = cljs.core.aclone.call(null,bucket__13027);
var new_hashobj__13029 = goog.object.clone.call(null,this__13025.hashobj);

(new_hashobj__13029[h__13026] = new_bucket__13028);
var temp__3695__auto____13030 = cljs.core.scan_array.call(null,2,k,new_bucket__13028);

if(cljs.core.truth_(temp__3695__auto____13030))
{var i__13031 = temp__3695__auto____13030;

(new_bucket__13028[(i__13031 + 1)] = v);
return (new cljs.core.HashMap(this__13025.meta,this__13025.count,new_hashobj__13029));
} else
{new_bucket__13028.push(k,v);
return (new cljs.core.HashMap(this__13025.meta,(this__13025.count + 1),new_hashobj__13029));
}
} else
{var new_hashobj__13032 = goog.object.clone.call(null,this__13025.hashobj);

(new_hashobj__13032[h__13026] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13025.meta,(this__13025.count + 1),new_hashobj__13032));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13034 = this;
var bucket__13038 = (this__13034.hashobj[cljs.core.hash.call(null,k)]);
var i__13039 = (cljs.core.truth_(bucket__13038)?cljs.core.scan_array.call(null,2,k,bucket__13038):null);

if(cljs.core.truth_(i__13039))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13070 = null;
var G__13070__13071 = (function (coll,k){
var this__13040 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13070__13072 = (function (coll,k,not_found){
var this__13041 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13070 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13070__13071.call(this,coll,k);
case  3 :
return G__13070__13072.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13070;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13042 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13043 = this;
if(cljs.core.truth_((this__13043.count > 0)))
{var hashes__13045 = cljs.core.js_keys.call(null,this__13043.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12937_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13043.hashobj[p1__12937_SHARP_])));
}),hashes__13045);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13046 = this;
return this__13046.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13047 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13048 = this;
return (new cljs.core.HashMap(meta,this__13048.count,this__13048.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13049 = this;
return this__13049.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13050 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13050.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13051 = this;
var h__13052 = cljs.core.hash.call(null,k);
var bucket__13053 = (this__13051.hashobj[h__13052]);
var i__13054 = (cljs.core.truth_(bucket__13053)?cljs.core.scan_array.call(null,2,k,bucket__13053):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13054)))
{return coll;
} else
{var new_hashobj__13055 = goog.object.clone.call(null,this__13051.hashobj);

if(cljs.core.truth_((3 > bucket__13053.length)))
{cljs.core.js_delete.call(null,new_hashobj__13055,h__13052);
} else
{var new_bucket__13057 = cljs.core.aclone.call(null,bucket__13053);

new_bucket__13057.splice(i__13054,2);
(new_hashobj__13055[h__13052] = new_bucket__13057);
}
return (new cljs.core.HashMap(this__13051.meta,(this__13051.count - 1),new_hashobj__13055));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13107 = ks.length;

var i__13108 = 0;
var out__13109 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13108 < len__13107)))
{{
var G__13110 = (i__13108 + 1);
var G__13111 = cljs.core.assoc.call(null,out__13109,(ks[i__13108]),(vs[i__13108]));
i__13108 = G__13110;
out__13109 = G__13111;
continue;
}
} else
{return out__13109;
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
var in$__13113 = cljs.core.seq.call(null,keyvals);
var out__13114 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13113))
{{
var G__13116 = cljs.core.nnext.call(null,in$__13113);
var G__13117 = cljs.core.assoc.call(null,out__13114,cljs.core.first.call(null,in$__13113),cljs.core.second.call(null,in$__13113));
in$__13113 = G__13116;
out__13114 = G__13117;
continue;
}
} else
{return out__13114;
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
hash_map.cljs$lang$applyTo = (function (arglist__13118){
var keyvals = cljs.core.seq( arglist__13118 );;
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
{return cljs.core.reduce.call(null,(function (p1__13122_SHARP_,p2__13123_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13126 = p1__13122_SHARP_;

if(cljs.core.truth_(or__3548__auto____13126))
{return or__3548__auto____13126;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13123_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13129){
var maps = cljs.core.seq( arglist__13129 );;
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
{var merge_entry__13137 = (function (m,e){
var k__13135 = cljs.core.first.call(null,e);
var v__13136 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13135)))
{return cljs.core.assoc.call(null,m,k__13135,f.call(null,cljs.core.get.call(null,m,k__13135),v__13136));
} else
{return cljs.core.assoc.call(null,m,k__13135,v__13136);
}
});
var merge2__13139 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13137,(function (){var or__3548__auto____13138 = m1;

if(cljs.core.truth_(or__3548__auto____13138))
{return or__3548__auto____13138;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13139,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13140){
var f = cljs.core.first(arglist__13140);
var maps = cljs.core.rest(arglist__13140);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13201 = cljs.core.ObjMap.fromObject([],{});
var keys__13202 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13202))
{var key__13204 = cljs.core.first.call(null,keys__13202);
var entry__13205 = cljs.core.get.call(null,map,key__13204,"﷐'user/not-found");

{
var G__13210 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13205,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13201,key__13204,entry__13205):ret__13201);
var G__13211 = cljs.core.next.call(null,keys__13202);
ret__13201 = G__13210;
keys__13202 = G__13211;
continue;
}
} else
{return ret__13201;
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
var this__13220 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13354 = null;
var G__13354__13355 = (function (coll,v){
var this__13222 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13354__13356 = (function (coll,v,not_found){
var this__13223 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13223.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13354 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13354__13355.call(this,coll,v);
case  3 :
return G__13354__13356.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13354;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13360 = null;
var G__13360__13361 = (function (coll,k){
var this__13225 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13360__13362 = (function (coll,k,not_found){
var this__13227 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13360 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13360__13361.call(this,coll,k);
case  3 :
return G__13360__13362.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13360;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13231 = this;
return (new cljs.core.Set(this__13231.meta,cljs.core.assoc.call(null,this__13231.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13302 = this;
return cljs.core.keys.call(null,this__13302.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13306 = this;
return (new cljs.core.Set(this__13306.meta,cljs.core.dissoc.call(null,this__13306.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13309 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13313 = this;
var and__3546__auto____13315 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13315))
{var and__3546__auto____13317 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13317))
{return cljs.core.every_QMARK_.call(null,(function (p1__13141_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13141_SHARP_);
}),other);
} else
{return and__3546__auto____13317;
}
} else
{return and__3546__auto____13315;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13320 = this;
return (new cljs.core.Set(meta,this__13320.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13321 = this;
return this__13321.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13326 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13326.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13379 = cljs.core.seq.call(null,coll);
var out__13380 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13379))))
{{
var G__13382 = cljs.core.rest.call(null,in$__13379);
var G__13383 = cljs.core.conj.call(null,out__13380,cljs.core.first.call(null,in$__13379));
in$__13379 = G__13382;
out__13380 = G__13383;
continue;
}
} else
{return out__13380;
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
{var n__13386 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13388 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13388))
{var e__13390 = temp__3695__auto____13388;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13390));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13386,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13378_SHARP_){
var temp__3695__auto____13392 = cljs.core.find.call(null,smap,p1__13378_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13392))
{var e__13393 = temp__3695__auto____13392;

return cljs.core.second.call(null,e__13393);
} else
{return p1__13378_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13451 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13401,seen){
while(true){
var vec__13402__13404 = p__13401;
var f__13407 = cljs.core.nth.call(null,vec__13402__13404,0,null);
var xs__13408 = vec__13402__13404;

var temp__3698__auto____13410 = cljs.core.seq.call(null,xs__13408);

if(cljs.core.truth_(temp__3698__auto____13410))
{var s__13411 = temp__3698__auto____13410;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13407)))
{{
var G__13571 = cljs.core.rest.call(null,s__13411);
var G__13572 = seen;
p__13401 = G__13571;
seen = G__13572;
continue;
}
} else
{return cljs.core.cons.call(null,f__13407,step.call(null,cljs.core.rest.call(null,s__13411),cljs.core.conj.call(null,seen,f__13407)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13451.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13590 = cljs.core.Vector.fromArray([]);
var s__13591 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13591)))
{{
var G__13640 = cljs.core.conj.call(null,ret__13590,cljs.core.first.call(null,s__13591));
var G__13641 = cljs.core.next.call(null,s__13591);
ret__13590 = G__13640;
s__13591 = G__13641;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13590);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13646 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13646))
{return or__3548__auto____13646;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13647 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13647 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13647 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13657 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13657))
{return or__3548__auto____13657;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13660 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13660 > -1)))
{return cljs.core.subs.call(null,x,2,i__13660);
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
var map__13666 = cljs.core.ObjMap.fromObject([],{});
var ks__13668 = cljs.core.seq.call(null,keys);
var vs__13669 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13671 = ks__13668;

if(cljs.core.truth_(and__3546__auto____13671))
{return vs__13669;
} else
{return and__3546__auto____13671;
}
})()))
{{
var G__13672 = cljs.core.assoc.call(null,map__13666,cljs.core.first.call(null,ks__13668),cljs.core.first.call(null,vs__13669));
var G__13673 = cljs.core.next.call(null,ks__13668);
var G__13674 = cljs.core.next.call(null,vs__13669);
map__13666 = G__13672;
ks__13668 = G__13673;
vs__13669 = G__13674;
continue;
}
} else
{return map__13666;
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
var max_key__13683 = (function (k,x){
return x;
});
var max_key__13684 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13685 = (function() { 
var G__13687__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13664_SHARP_,p2__13665_SHARP_){
return max_key.call(null,k,p1__13664_SHARP_,p2__13665_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13687 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13687__delegate.call(this, k, x, y, more);
};
G__13687.cljs$lang$maxFixedArity = 3;
G__13687.cljs$lang$applyTo = (function (arglist__13688){
var k = cljs.core.first(arglist__13688);
var x = cljs.core.first(cljs.core.next(arglist__13688));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13688)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13688)));
return G__13687__delegate.call(this, k, x, y, more);
});
return G__13687;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13683.call(this,k,x);
case  3 :
return max_key__13684.call(this,k,x,y);
default:
return max_key__13685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13685.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13709 = (function (k,x){
return x;
});
var min_key__13710 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13711 = (function() { 
var G__13713__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13676_SHARP_,p2__13677_SHARP_){
return min_key.call(null,k,p1__13676_SHARP_,p2__13677_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13713 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13713__delegate.call(this, k, x, y, more);
};
G__13713.cljs$lang$maxFixedArity = 3;
G__13713.cljs$lang$applyTo = (function (arglist__13716){
var k = cljs.core.first(arglist__13716);
var x = cljs.core.first(cljs.core.next(arglist__13716));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13716)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13716)));
return G__13713__delegate.call(this, k, x, y, more);
});
return G__13713;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13709.call(this,k,x);
case  3 :
return min_key__13710.call(this,k,x,y);
default:
return min_key__13711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13711.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13724 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13725 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13721 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13721))
{var s__13722 = temp__3698__auto____13721;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13722),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13722)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13724.call(this,n,step);
case  3 :
return partition_all__13725.call(this,n,step,coll);
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
var temp__3698__auto____13729 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13729))
{var s__13730 = temp__3698__auto____13729;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13730))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13730),take_while.call(null,pred,cljs.core.rest.call(null,s__13730)));
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
var this__13745 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13754 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13828 = null;
var G__13828__13829 = (function (rng,f){
var this__13755 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13828__13830 = (function (rng,f,s){
var this__13756 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13828 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13828__13829.call(this,rng,f);
case  3 :
return G__13828__13830.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13828;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13769 = this;
var comp__13771 = (cljs.core.truth_((this__13769.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13771.call(null,this__13769.start,this__13769.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13773 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13773.end - this__13773.start) / this__13773.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13781 = this;
return this__13781.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13782 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13782.meta,(this__13782.start + this__13782.step),this__13782.end,this__13782.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13783 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13785 = this;
return (new cljs.core.Range(meta,this__13785.start,this__13785.end,this__13785.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13787 = this;
return this__13787.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13838 = null;
var G__13838__13839 = (function (rng,n){
var this__13788 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13788.start + (n * this__13788.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13796 = (this__13788.start > this__13788.end);

if(cljs.core.truth_(and__3546__auto____13796))
{return cljs.core._EQ_.call(null,this__13788.step,0);
} else
{return and__3546__auto____13796;
}
})()))
{return this__13788.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13838__13840 = (function (rng,n,not_found){
var this__13797 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13797.start + (n * this__13797.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13799 = (this__13797.start > this__13797.end);

if(cljs.core.truth_(and__3546__auto____13799))
{return cljs.core._EQ_.call(null,this__13797.step,0);
} else
{return and__3546__auto____13799;
}
})()))
{return this__13797.start;
} else
{return not_found;
}
}
});
G__13838 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13838__13839.call(this,rng,n);
case  3 :
return G__13838__13840.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13838;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13801 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13801.meta);
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
var range__13854 = (function (end){
return range.call(null,0,end,1);
});
var range__13855 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13856 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13853.call(this);
case  1 :
return range__13854.call(this,start);
case  2 :
return range__13855.call(this,start,end);
case  3 :
return range__13856.call(this,start,end,step);
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
var temp__3698__auto____13864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13864))
{var s__13865 = temp__3698__auto____13864;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13865),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13865)));
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
var temp__3698__auto____13874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13874))
{var s__13875 = temp__3698__auto____13874;

var fst__13876 = cljs.core.first.call(null,s__13875);
var fv__13877 = f.call(null,fst__13876);
var run__13880 = cljs.core.cons.call(null,fst__13876,cljs.core.take_while.call(null,(function (p1__13869_SHARP_){
return cljs.core._EQ_.call(null,fv__13877,f.call(null,p1__13869_SHARP_));
}),cljs.core.next.call(null,s__13875)));

return cljs.core.cons.call(null,run__13880,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13880),s__13875))));
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
var reductions__13917 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13908 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13908))
{var s__13909 = temp__3695__auto____13908;

return reductions.call(null,f,cljs.core.first.call(null,s__13909),cljs.core.rest.call(null,s__13909));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13918 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13915))
{var s__13916 = temp__3698__auto____13915;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13916)),cljs.core.rest.call(null,s__13916));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13917.call(this,f,init);
case  3 :
return reductions__13918.call(this,f,init,coll);
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
var juxt__14022 = (function (f){
return (function() {
var G__14028 = null;
var G__14028__14030 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14028__14031 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14028__14032 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14028__14034 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14028__14035 = (function() { 
var G__14038__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14038__delegate.call(this, x, y, z, args);
};
G__14038.cljs$lang$maxFixedArity = 3;
G__14038.cljs$lang$applyTo = (function (arglist__14039){
var x = cljs.core.first(arglist__14039);
var y = cljs.core.first(cljs.core.next(arglist__14039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14039)));
return G__14038__delegate.call(this, x, y, z, args);
});
return G__14038;
})()
;
G__14028 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14028__14030.call(this);
case  1 :
return G__14028__14031.call(this,x);
case  2 :
return G__14028__14032.call(this,x,y);
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
});
var juxt__14023 = (function (f,g){
return (function() {
var G__14043 = null;
var G__14043__14046 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14043__14047 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14043__14048 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14043__14049 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14043__14050 = (function() { 
var G__14055__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14055 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14055__delegate.call(this, x, y, z, args);
};
G__14055.cljs$lang$maxFixedArity = 3;
G__14055.cljs$lang$applyTo = (function (arglist__14056){
var x = cljs.core.first(arglist__14056);
var y = cljs.core.first(cljs.core.next(arglist__14056));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14056)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14056)));
return G__14055__delegate.call(this, x, y, z, args);
});
return G__14055;
})()
;
G__14043 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14043__14046.call(this);
case  1 :
return G__14043__14047.call(this,x);
case  2 :
return G__14043__14048.call(this,x,y);
case  3 :
return G__14043__14049.call(this,x,y,z);
default:
return G__14043__14050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14043.cljs$lang$maxFixedArity = 3;
G__14043.cljs$lang$applyTo = G__14043__14050.cljs$lang$applyTo;
return G__14043;
})()
});
var juxt__14024 = (function (f,g,h){
return (function() {
var G__14057 = null;
var G__14057__14058 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14057__14059 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14057__14060 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14057__14061 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14057__14062 = (function() { 
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
G__14064.cljs$lang$applyTo = (function (arglist__14066){
var x = cljs.core.first(arglist__14066);
var y = cljs.core.first(cljs.core.next(arglist__14066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14066)));
return G__14064__delegate.call(this, x, y, z, args);
});
return G__14064;
})()
;
G__14057 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14057__14058.call(this);
case  1 :
return G__14057__14059.call(this,x);
case  2 :
return G__14057__14060.call(this,x,y);
case  3 :
return G__14057__14061.call(this,x,y,z);
default:
return G__14057__14062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14057.cljs$lang$maxFixedArity = 3;
G__14057.cljs$lang$applyTo = G__14057__14062.cljs$lang$applyTo;
return G__14057;
})()
});
var juxt__14025 = (function() { 
var G__14069__delegate = function (f,g,h,fs){
var fs__13943 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14071 = null;
var G__14071__14072 = (function (){
return cljs.core.reduce.call(null,(function (p1__13893_SHARP_,p2__13894_SHARP_){
return cljs.core.conj.call(null,p1__13893_SHARP_,p2__13894_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13943);
});
var G__14071__14073 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13895_SHARP_,p2__13896_SHARP_){
return cljs.core.conj.call(null,p1__13895_SHARP_,p2__13896_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13943);
});
var G__14071__14074 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13897_SHARP_,p2__13898_SHARP_){
return cljs.core.conj.call(null,p1__13897_SHARP_,p2__13898_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13943);
});
var G__14071__14075 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13899_SHARP_,p2__13900_SHARP_){
return cljs.core.conj.call(null,p1__13899_SHARP_,p2__13900_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13943);
});
var G__14071__14076 = (function() { 
var G__14083__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13901_SHARP_,p2__13902_SHARP_){
return cljs.core.conj.call(null,p1__13901_SHARP_,cljs.core.apply.call(null,p2__13902_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13943);
};
var G__14083 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14083__delegate.call(this, x, y, z, args);
};
G__14083.cljs$lang$maxFixedArity = 3;
G__14083.cljs$lang$applyTo = (function (arglist__14085){
var x = cljs.core.first(arglist__14085);
var y = cljs.core.first(cljs.core.next(arglist__14085));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14085)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14085)));
return G__14083__delegate.call(this, x, y, z, args);
});
return G__14083;
})()
;
G__14071 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14071__14072.call(this);
case  1 :
return G__14071__14073.call(this,x);
case  2 :
return G__14071__14074.call(this,x,y);
case  3 :
return G__14071__14075.call(this,x,y,z);
default:
return G__14071__14076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14071.cljs$lang$maxFixedArity = 3;
G__14071.cljs$lang$applyTo = G__14071__14076.cljs$lang$applyTo;
return G__14071;
})()
};
var G__14069 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14069__delegate.call(this, f, g, h, fs);
};
G__14069.cljs$lang$maxFixedArity = 3;
G__14069.cljs$lang$applyTo = (function (arglist__14088){
var f = cljs.core.first(arglist__14088);
var g = cljs.core.first(cljs.core.next(arglist__14088));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14088)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14088)));
return G__14069__delegate.call(this, f, g, h, fs);
});
return G__14069;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14022.call(this,f);
case  2 :
return juxt__14023.call(this,f,g);
case  3 :
return juxt__14024.call(this,f,g,h);
default:
return juxt__14025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14025.cljs$lang$applyTo;
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
var dorun__14109 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14112 = cljs.core.next.call(null,coll);
coll = G__14112;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14110 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14105 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14105))
{return (n > 0);
} else
{return and__3546__auto____14105;
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
return dorun__14109.call(this,n);
case  2 :
return dorun__14110.call(this,n,coll);
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
var doall__14149 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14150 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14149.call(this,n);
case  2 :
return doall__14150.call(this,n,coll);
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
var matches__14156 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14156),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14156),1)))
{return cljs.core.first.call(null,matches__14156);
} else
{return cljs.core.vec.call(null,matches__14156);
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
var matches__14167 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14167)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14167),1)))
{return cljs.core.first.call(null,matches__14167);
} else
{return cljs.core.vec.call(null,matches__14167);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14172 = cljs.core.re_find.call(null,re,s);
var match_idx__14173 = s.search(re);
var match_str__14174 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14172))?cljs.core.first.call(null,match_data__14172):match_data__14172);
var post_match__14175 = cljs.core.subs.call(null,s,(match_idx__14173 + cljs.core.count.call(null,match_str__14174)));

if(cljs.core.truth_(match_data__14172))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14172,re_seq.call(null,re,post_match__14175));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14184_SHARP_){
return print_one.call(null,p1__14184_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14281 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14281))
{var and__3546__auto____14293 = (function (){var x__445__auto____14283 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14288 = x__445__auto____14283;

if(cljs.core.truth_(and__3546__auto____14288))
{var and__3546__auto____14291 = x__445__auto____14283.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14291))
{return cljs.core.not.call(null,x__445__auto____14283.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14291;
}
} else
{return and__3546__auto____14288;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14283);
}
})();

if(cljs.core.truth_(and__3546__auto____14293))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14293;
}
} else
{return and__3546__auto____14281;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14296 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14298 = x__445__auto____14296;

if(cljs.core.truth_(and__3546__auto____14298))
{var and__3546__auto____14300 = x__445__auto____14296.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14300))
{return cljs.core.not.call(null,x__445__auto____14296.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14300;
}
} else
{return and__3546__auto____14298;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14296);
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
var first_obj__14321 = cljs.core.first.call(null,objs);
var sb__14322 = (new goog.string.StringBuffer());

var G__14323__14325 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14323__14325))
{var obj__14326 = cljs.core.first.call(null,G__14323__14325);
var G__14323__14327 = G__14323__14325;

while(true){
if(cljs.core.truth_((obj__14326 === first_obj__14321)))
{} else
{sb__14322.append(" ");
}
var G__14328__14329 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14326,opts));

if(cljs.core.truth_(G__14328__14329))
{var string__14330 = cljs.core.first.call(null,G__14328__14329);
var G__14328__14331 = G__14328__14329;

while(true){
sb__14322.append(string__14330);
var temp__3698__auto____14332 = cljs.core.next.call(null,G__14328__14331);

if(cljs.core.truth_(temp__3698__auto____14332))
{var G__14328__14334 = temp__3698__auto____14332;

{
var G__14343 = cljs.core.first.call(null,G__14328__14334);
var G__14344 = G__14328__14334;
string__14330 = G__14343;
G__14328__14331 = G__14344;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14335 = cljs.core.next.call(null,G__14323__14327);

if(cljs.core.truth_(temp__3698__auto____14335))
{var G__14323__14336 = temp__3698__auto____14335;

{
var G__14356 = cljs.core.first.call(null,G__14323__14336);
var G__14357 = G__14323__14336;
obj__14326 = G__14356;
G__14323__14327 = G__14357;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14322);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14358 = cljs.core.first.call(null,objs);

var G__14359__14361 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14359__14361))
{var obj__14363 = cljs.core.first.call(null,G__14359__14361);
var G__14359__14364 = G__14359__14361;

while(true){
if(cljs.core.truth_((obj__14363 === first_obj__14358)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14366__14370 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14363,opts));

if(cljs.core.truth_(G__14366__14370))
{var string__14373 = cljs.core.first.call(null,G__14366__14370);
var G__14366__14375 = G__14366__14370;

while(true){
cljs.core.string_print.call(null,string__14373);
var temp__3698__auto____14381 = cljs.core.next.call(null,G__14366__14375);

if(cljs.core.truth_(temp__3698__auto____14381))
{var G__14366__14384 = temp__3698__auto____14381;

{
var G__14395 = cljs.core.first.call(null,G__14366__14384);
var G__14396 = G__14366__14384;
string__14373 = G__14395;
G__14366__14375 = G__14396;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14388 = cljs.core.next.call(null,G__14359__14364);

if(cljs.core.truth_(temp__3698__auto____14388))
{var G__14359__14390 = temp__3698__auto____14388;

{
var G__14398 = cljs.core.first.call(null,G__14359__14390);
var G__14399 = G__14359__14390;
obj__14363 = G__14398;
G__14359__14364 = G__14399;
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
pr_str.cljs$lang$applyTo = (function (arglist__14405){
var objs = cljs.core.seq( arglist__14405 );;
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
pr.cljs$lang$applyTo = (function (arglist__14410){
var objs = cljs.core.seq( arglist__14410 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14417){
var objs = cljs.core.seq( arglist__14417 );;
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
println.cljs$lang$applyTo = (function (arglist__14422){
var objs = cljs.core.seq( arglist__14422 );;
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
prn.cljs$lang$applyTo = (function (arglist__14424){
var objs = cljs.core.seq( arglist__14424 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14436 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14436,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14474 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14474))
{var nspc__14475 = temp__3698__auto____14474;

return cljs.core.str.call(null,nspc__14475,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14477 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14477))
{var nspc__14478 = temp__3698__auto____14477;

return cljs.core.str.call(null,nspc__14478,"/");
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
var pr_pair__14489 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14489,"{",", ","}",opts,coll);
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
var this__14537 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14538 = this;
var G__14539__14540 = cljs.core.seq.call(null,this__14538.watches);

if(cljs.core.truth_(G__14539__14540))
{var G__14544__14546 = cljs.core.first.call(null,G__14539__14540);
var vec__14545__14547 = G__14544__14546;
var key__14549 = cljs.core.nth.call(null,vec__14545__14547,0,null);
var f__14551 = cljs.core.nth.call(null,vec__14545__14547,1,null);
var G__14539__14552 = G__14539__14540;

var G__14544__14553 = G__14544__14546;
var G__14539__14554 = G__14539__14552;

while(true){
var vec__14555__14556 = G__14544__14553;
var key__14557 = cljs.core.nth.call(null,vec__14555__14556,0,null);
var f__14558 = cljs.core.nth.call(null,vec__14555__14556,1,null);
var G__14539__14559 = G__14539__14554;

f__14558.call(null,key__14557,this$,oldval,newval);
var temp__3698__auto____14560 = cljs.core.next.call(null,G__14539__14559);

if(cljs.core.truth_(temp__3698__auto____14560))
{var G__14539__14561 = temp__3698__auto____14560;

{
var G__14580 = cljs.core.first.call(null,G__14539__14561);
var G__14581 = G__14539__14561;
G__14544__14553 = G__14580;
G__14539__14554 = G__14581;
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
var this__14562 = this;
return this$.watches = cljs.core.assoc.call(null,this__14562.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14563 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14563.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14564 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14564.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14565 = this;
return this__14565.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14566 = this;
return this__14566.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14568 = this;
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
var atom__14680 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14681 = (function() { 
var G__14683__delegate = function (x,p__14584){
var map__14586__14588 = p__14584;
var map__14586__14591 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14586__14588))?cljs.core.apply.call(null,cljs.core.hash_map,map__14586__14588):map__14586__14588);
var validator__14592 = cljs.core.get.call(null,map__14586__14591,"﷐'validator");
var meta__14593 = cljs.core.get.call(null,map__14586__14591,"﷐'meta");

return (new cljs.core.Atom(x,meta__14593,validator__14592,null));
};
var G__14683 = function (x,var_args){
var p__14584 = null;
if (goog.isDef(var_args)) {
  p__14584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14683__delegate.call(this, x, p__14584);
};
G__14683.cljs$lang$maxFixedArity = 1;
G__14683.cljs$lang$applyTo = (function (arglist__14687){
var x = cljs.core.first(arglist__14687);
var p__14584 = cljs.core.rest(arglist__14687);
return G__14683__delegate.call(this, x, p__14584);
});
return G__14683;
})()
;
atom = function(x,var_args){
var p__14584 = var_args;
switch(arguments.length){
case  1 :
return atom__14680.call(this,x);
default:
return atom__14681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14681.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14690 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14690))
{var validate__14691 = temp__3698__auto____14690;

if(cljs.core.truth_(validate__14691.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14693 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14693,new_value);
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
var swap_BANG___14708 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14709 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14710 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14711 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14712 = (function() { 
var G__14714__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14714 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14714__delegate.call(this, a, f, x, y, z, more);
};
G__14714.cljs$lang$maxFixedArity = 5;
G__14714.cljs$lang$applyTo = (function (arglist__14716){
var a = cljs.core.first(arglist__14716);
var f = cljs.core.first(cljs.core.next(arglist__14716));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14716)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14716))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14716)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14716)))));
return G__14714__delegate.call(this, a, f, x, y, z, more);
});
return G__14714;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14708.call(this,a,f);
case  3 :
return swap_BANG___14709.call(this,a,f,x);
case  4 :
return swap_BANG___14710.call(this,a,f,x,y);
case  5 :
return swap_BANG___14711.call(this,a,f,x,y,z);
default:
return swap_BANG___14712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14712.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14721){
var iref = cljs.core.first(arglist__14721);
var f = cljs.core.first(cljs.core.next(arglist__14721));
var args = cljs.core.rest(cljs.core.next(arglist__14721));
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
var gensym__14819 = (function (){
return gensym.call(null,"G__");
});
var gensym__14820 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14819.call(this);
case  1 :
return gensym__14820.call(this,prefix_string);
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
var this__14828 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14828.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14829 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14829.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14829.state,this__14829.f);
}
return cljs.core.deref.call(null,this__14829.state);
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
delay.cljs$lang$applyTo = (function (arglist__14842){
var body = cljs.core.seq( arglist__14842 );;
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
var map__14859__14860 = options;
var map__14859__14861 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14859__14860))?cljs.core.apply.call(null,cljs.core.hash_map,map__14859__14860):map__14859__14860);
var keywordize_keys__14862 = cljs.core.get.call(null,map__14859__14861,"﷐'keywordize-keys");
var keyfn__14864 = (cljs.core.truth_(keywordize_keys__14862)?cljs.core.keyword:cljs.core.str);
var f__14872 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14871 = (function iter__14866(s__14867){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14867__14869 = s__14867;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14867__14869)))
{var k__14870 = cljs.core.first.call(null,s__14867__14869);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14864.call(null,k__14870),thisfn.call(null,(x[k__14870]))]),iter__14866.call(null,cljs.core.rest.call(null,s__14867__14869)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14871.call(null,cljs.core.js_keys.call(null,x));
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

return f__14872.call(null,x);
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
var mem__14902 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14910__delegate = function (args){
var temp__3695__auto____14903 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14902),args);

if(cljs.core.truth_(temp__3695__auto____14903))
{var v__14906 = temp__3695__auto____14903;

return v__14906;
} else
{var ret__14908 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14902,cljs.core.assoc,args,ret__14908);
return ret__14908;
}
};
var G__14910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14910__delegate.call(this, args);
};
G__14910.cljs$lang$maxFixedArity = 0;
G__14910.cljs$lang$applyTo = (function (arglist__14921){
var args = cljs.core.seq( arglist__14921 );;
return G__14910__delegate.call(this, args);
});
return G__14910;
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
var trampoline__14944 = (function (f){
while(true){
var ret__14922 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14922)))
{{
var G__14947 = ret__14922;
f = G__14947;
continue;
}
} else
{return ret__14922;
}
break;
}
});
var trampoline__14945 = (function() { 
var G__14948__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14948 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14948__delegate.call(this, f, args);
};
G__14948.cljs$lang$maxFixedArity = 1;
G__14948.cljs$lang$applyTo = (function (arglist__14949){
var f = cljs.core.first(arglist__14949);
var args = cljs.core.rest(arglist__14949);
return G__14948__delegate.call(this, f, args);
});
return G__14948;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14944.call(this,f);
default:
return trampoline__14945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14945.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14950 = (function (){
return rand.call(null,1);
});
var rand__14951 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14950.call(this);
case  1 :
return rand__14951.call(this,n);
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
var k__14954 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14954,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14954,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14968 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14969 = (function (h,child,parent){
var or__3548__auto____14958 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14958))
{return or__3548__auto____14958;
} else
{var or__3548__auto____14959 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14959))
{return or__3548__auto____14959;
} else
{var and__3546__auto____14960 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14960))
{var and__3546__auto____14961 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14961))
{var and__3546__auto____14962 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14962))
{var ret__14963 = true;
var i__14964 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14965 = cljs.core.not.call(null,ret__14963);

if(cljs.core.truth_(or__3548__auto____14965))
{return or__3548__auto____14965;
} else
{return cljs.core._EQ_.call(null,i__14964,cljs.core.count.call(null,parent));
}
})()))
{return ret__14963;
} else
{{
var G__14971 = isa_QMARK_.call(null,h,child.call(null,i__14964),parent.call(null,i__14964));
var G__14972 = (i__14964 + 1);
ret__14963 = G__14971;
i__14964 = G__14972;
continue;
}
}
break;
}
} else
{return and__3546__auto____14962;
}
} else
{return and__3546__auto____14961;
}
} else
{return and__3546__auto____14960;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14968.call(this,h,child);
case  3 :
return isa_QMARK___14969.call(this,h,child,parent);
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
var parents__15013 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15014 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15013.call(this,h);
case  2 :
return parents__15014.call(this,h,tag);
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
var ancestors__15025 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15026 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15025.call(this,h);
case  2 :
return ancestors__15026.call(this,h,tag);
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
var descendants__15034 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15035 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15034.call(this,h);
case  2 :
return descendants__15035.call(this,h,tag);
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
var derive__15047 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15048 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15042 = "﷐'parents".call(null,h);
var td__15043 = "﷐'descendants".call(null,h);
var ta__15044 = "﷐'ancestors".call(null,h);
var tf__15045 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15046 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15042.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15044.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15044.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15042,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15045.call(null,"﷐'ancestors".call(null,h),tag,td__15043,parent,ta__15044),"﷐'descendants":tf__15045.call(null,"﷐'descendants".call(null,h),parent,ta__15044,tag,td__15043)});
})());

if(cljs.core.truth_(or__3548__auto____15046))
{return or__3548__auto____15046;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15047.call(this,h,tag);
case  3 :
return derive__15048.call(this,h,tag,parent);
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
var underive__15065 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15066 = (function (h,tag,parent){
var parentMap__15053 = "﷐'parents".call(null,h);
var childsParents__15056 = (cljs.core.truth_(parentMap__15053.call(null,tag))?cljs.core.disj.call(null,parentMap__15053.call(null,tag),parent):cljs.core.set([]));
var newParents__15061 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15056))?cljs.core.assoc.call(null,parentMap__15053,tag,childsParents__15056):cljs.core.dissoc.call(null,parentMap__15053,tag));
var deriv_seq__15062 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15038_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15038_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15038_SHARP_),cljs.core.second.call(null,p1__15038_SHARP_)));
}),cljs.core.seq.call(null,newParents__15061)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15053.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15039_SHARP_,p2__15040_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15039_SHARP_,p2__15040_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15062));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15065.call(this,h,tag);
case  3 :
return underive__15066.call(this,h,tag,parent);
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
var xprefs__15076 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15079 = (cljs.core.truth_((function (){var and__3546__auto____15077 = xprefs__15076;

if(cljs.core.truth_(and__3546__auto____15077))
{return xprefs__15076.call(null,y);
} else
{return and__3546__auto____15077;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15079))
{return or__3548__auto____15079;
} else
{var or__3548__auto____15081 = (function (){var ps__15080 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15080) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15080),prefer_table)))
{} else
{}
{
var G__15087 = cljs.core.rest.call(null,ps__15080);
ps__15080 = G__15087;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15081))
{return or__3548__auto____15081;
} else
{var or__3548__auto____15086 = (function (){var ps__15082 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15082) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15082),y,prefer_table)))
{} else
{}
{
var G__15088 = cljs.core.rest.call(null,ps__15082);
ps__15082 = G__15088;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15086))
{return or__3548__auto____15086;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15090 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15090))
{return or__3548__auto____15090;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15103 = cljs.core.reduce.call(null,(function (be,p__15094){
var vec__15096__15097 = p__15094;
var k__15098 = cljs.core.nth.call(null,vec__15096__15097,0,null);
var ___15099 = cljs.core.nth.call(null,vec__15096__15097,1,null);
var e__15100 = vec__15096__15097;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15098)))
{var be2__15102 = (cljs.core.truth_((function (){var or__3548__auto____15101 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15101))
{return or__3548__auto____15101;
} else
{return cljs.core.dominates.call(null,k__15098,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15100:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15102),k__15098,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15098," and ",cljs.core.first.call(null,be2__15102),", and neither is preferred")));
}
return be2__15102;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15103))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15103));
return cljs.core.second.call(null,best_entry__15103);
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
if(cljs.core.truth_((function (){var and__3546__auto____15104 = mf;

if(cljs.core.truth_(and__3546__auto____15104))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15104;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15165 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15165))
{return or__3548__auto____15165;
} else
{var or__3548__auto____15166 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15166))
{return or__3548__auto____15166;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15167 = mf;

if(cljs.core.truth_(and__3546__auto____15167))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15167;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15169 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15169))
{return or__3548__auto____15169;
} else
{var or__3548__auto____15171 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15171))
{return or__3548__auto____15171;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15177 = mf;

if(cljs.core.truth_(and__3546__auto____15177))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15177;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15183 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15183))
{return or__3548__auto____15183;
} else
{var or__3548__auto____15184 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15184))
{return or__3548__auto____15184;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15185 = mf;

if(cljs.core.truth_(and__3546__auto____15185))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15185;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15189 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15189))
{return or__3548__auto____15189;
} else
{var or__3548__auto____15190 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15190))
{return or__3548__auto____15190;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15191 = mf;

if(cljs.core.truth_(and__3546__auto____15191))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15191;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15192 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15192))
{return or__3548__auto____15192;
} else
{var or__3548__auto____15193 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15193))
{return or__3548__auto____15193;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15194 = mf;

if(cljs.core.truth_(and__3546__auto____15194))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15194;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15198 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{var or__3548__auto____15199 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15199))
{return or__3548__auto____15199;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15201 = mf;

if(cljs.core.truth_(and__3546__auto____15201))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15201;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15204 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15204))
{return or__3548__auto____15204;
} else
{var or__3548__auto____15205 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15205))
{return or__3548__auto____15205;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15206 = mf;

if(cljs.core.truth_(and__3546__auto____15206))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15206;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15210 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{var or__3548__auto____15211 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15237 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15239 = cljs.core._get_method.call(null,mf,dispatch_val__15237);

if(cljs.core.truth_(target_fn__15239))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15237)));
}
return cljs.core.apply.call(null,target_fn__15239,args);
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
var this__15249 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15250 = this;
cljs.core.swap_BANG_.call(null,this__15250.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15250.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15250.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15250.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15254 = this;
cljs.core.swap_BANG_.call(null,this__15254.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15254.method_cache,this__15254.method_table,this__15254.cached_hierarchy,this__15254.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15256 = this;
cljs.core.swap_BANG_.call(null,this__15256.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15256.method_cache,this__15256.method_table,this__15256.cached_hierarchy,this__15256.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15259 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15259.cached_hierarchy),cljs.core.deref.call(null,this__15259.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15259.method_cache,this__15259.method_table,this__15259.cached_hierarchy,this__15259.hierarchy);
}
var temp__3695__auto____15260 = cljs.core.deref.call(null,this__15259.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15260))
{var target_fn__15261 = temp__3695__auto____15260;

return target_fn__15261;
} else
{var temp__3695__auto____15265 = cljs.core.find_and_cache_best_method.call(null,this__15259.name,dispatch_val,this__15259.hierarchy,this__15259.method_table,this__15259.prefer_table,this__15259.method_cache,this__15259.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15265))
{var target_fn__15266 = temp__3695__auto____15265;

return target_fn__15266;
} else
{return cljs.core.deref.call(null,this__15259.method_table).call(null,this__15259.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15267 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15267.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15267.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15267.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15267.method_cache,this__15267.method_table,this__15267.cached_hierarchy,this__15267.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15269 = this;
return cljs.core.deref.call(null,this__15269.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15270 = this;
return cljs.core.deref.call(null,this__15270.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15275 = this;
return cljs.core.do_dispatch.call(null,mf,this__15275.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15302__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15302 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15302__delegate.call(this, _, args);
};
G__15302.cljs$lang$maxFixedArity = 1;
G__15302.cljs$lang$applyTo = (function (arglist__15303){
var _ = cljs.core.first(arglist__15303);
var args = cljs.core.rest(arglist__15303);
return G__15302__delegate.call(this, _, args);
});
return G__15302;
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
