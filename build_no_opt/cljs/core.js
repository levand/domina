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
var or__3548__auto____7324 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7326 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
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
var _invoke__7710 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7347 = this$;

if(cljs.core.truth_(and__3546__auto____7347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7349 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{var or__3548__auto____7351 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7711 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7353 = this$;

if(cljs.core.truth_(and__3546__auto____7353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{var or__3548__auto____7357 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7712 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = this$;

if(cljs.core.truth_(and__3546__auto____7359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{var or__3548__auto____7363 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7713 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = this$;

if(cljs.core.truth_(and__3546__auto____7383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{var or__3548__auto____7387 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7714 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7391 = this$;

if(cljs.core.truth_(and__3546__auto____7391))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7391;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7400 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{var or__3548__auto____7401 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7715 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7409 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{var or__3548__auto____7410 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7716 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{var or__3548__auto____7428 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7717 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = this$;

if(cljs.core.truth_(and__3546__auto____7432))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7432;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7435 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7435))
{return or__3548__auto____7435;
} else
{var or__3548__auto____7437 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7718 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7442 = this$;

if(cljs.core.truth_(and__3546__auto____7442))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7442;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7719 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7451 = this$;

if(cljs.core.truth_(and__3546__auto____7451))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7451;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7454 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{var or__3548__auto____7456 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7720 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7459 = this$;

if(cljs.core.truth_(and__3546__auto____7459))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7459;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7721 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7474 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7722 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = this$;

if(cljs.core.truth_(and__3546__auto____7477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{var or__3548__auto____7494 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7723 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7496 = this$;

if(cljs.core.truth_(and__3546__auto____7496))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7496;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{var or__3548__auto____7502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7724 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7505 = this$;

if(cljs.core.truth_(and__3546__auto____7505))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7505;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7508 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{var or__3548__auto____7541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7725 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7544 = this$;

if(cljs.core.truth_(and__3546__auto____7544))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7544;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7551 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7551))
{return or__3548__auto____7551;
} else
{var or__3548__auto____7552 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7552))
{return or__3548__auto____7552;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7726 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7561 = this$;

if(cljs.core.truth_(and__3546__auto____7561))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7561;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7572 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7572))
{return or__3548__auto____7572;
} else
{var or__3548__auto____7590 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7727 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7592 = this$;

if(cljs.core.truth_(and__3546__auto____7592))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7592;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7728 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7616 = this$;

if(cljs.core.truth_(and__3546__auto____7616))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7616;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7729 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7619 = this$;

if(cljs.core.truth_(and__3546__auto____7619))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7619;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7730 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7622 = this$;

if(cljs.core.truth_(and__3546__auto____7622))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7622;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7657 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{var or__3548__auto____7675 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
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
return _invoke__7710.call(this,this$);
case  2 :
return _invoke__7711.call(this,this$,a);
case  3 :
return _invoke__7712.call(this,this$,a,b);
case  4 :
return _invoke__7713.call(this,this$,a,b,c);
case  5 :
return _invoke__7714.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7715.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7716.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7717.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7718.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7719.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7720.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7721.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7722.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7723.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7724.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7725.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7726.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7727.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7728.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7729.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7730.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7737 = coll;

if(cljs.core.truth_(and__3546__auto____7737))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7737;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7738 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{var or__3548__auto____7739 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7777 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
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
if(cljs.core.truth_((function (){var and__3546__auto____7791 = coll;

if(cljs.core.truth_(and__3546__auto____7791))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7791;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7793 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{var or__3548__auto____7796 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7796))
{return or__3548__auto____7796;
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
var _nth__7823 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7807 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7824 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = coll;

if(cljs.core.truth_(and__3546__auto____7810))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7810;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7816 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{var or__3548__auto____7818 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
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
return _nth__7823.call(this,coll,n);
case  3 :
return _nth__7824.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7836 = coll;

if(cljs.core.truth_(and__3546__auto____7836))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7836;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7840 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{var or__3548__auto____7842 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7862 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7862))
{return or__3548__auto____7862;
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
if(cljs.core.truth_((function (){var and__3546__auto____7872 = o;

if(cljs.core.truth_(and__3546__auto____7872))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7872;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7876 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{var or__3548__auto____7878 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
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
{return (function (){var or__3548__auto____7885 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7885))
{return or__3548__auto____7885;
} else
{var or__3548__auto____7887 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
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
if(cljs.core.truth_((function (){var and__3546__auto____7903 = coll;

if(cljs.core.truth_(and__3546__auto____7903))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7903;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7911 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7916 = coll;

if(cljs.core.truth_(and__3546__auto____7916))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7916;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7917 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
} else
{var or__3548__auto____7919 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7919))
{return or__3548__auto____7919;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7931 = coll;

if(cljs.core.truth_(and__3546__auto____7931))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7931;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7932 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{var or__3548__auto____7934 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7952 = coll;

if(cljs.core.truth_(and__3546__auto____7952))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7952;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7954 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{var or__3548__auto____7956 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7963 = coll;

if(cljs.core.truth_(and__3546__auto____7963))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7963;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7966 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{var or__3548__auto____7968 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = coll;

if(cljs.core.truth_(and__3546__auto____7969))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7969;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7970 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{var or__3548__auto____7971 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7975 = coll;

if(cljs.core.truth_(and__3546__auto____7975))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7975;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7976 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{var or__3548__auto____7978 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
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
{return (function (){var or__3548__auto____7983 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7985 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7990 = o;

if(cljs.core.truth_(and__3546__auto____7990))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7990;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
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
if(cljs.core.truth_((function (){var and__3546__auto____8082 = o;

if(cljs.core.truth_(and__3546__auto____8082))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8082;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8089 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8101 = o;

if(cljs.core.truth_(and__3546__auto____8101))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8101;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8102 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8102))
{return or__3548__auto____8102;
} else
{var or__3548__auto____8103 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
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
var _reduce__8115 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8105 = coll;

if(cljs.core.truth_(and__3546__auto____8105))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8105;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8108 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{var or__3548__auto____8109 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8116 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8111 = coll;

if(cljs.core.truth_(and__3546__auto____8111))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8111;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8112 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{var or__3548__auto____8113 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
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
return _reduce__8115.call(this,coll,f);
case  3 :
return _reduce__8116.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8127 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8131 = o;

if(cljs.core.truth_(and__3546__auto____8131))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8131;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8134 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8136 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8136))
{return or__3548__auto____8136;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8139 = o;

if(cljs.core.truth_(and__3546__auto____8139))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8139;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8160 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
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
if(cljs.core.truth_((function (){var and__3546__auto____8167 = o;

if(cljs.core.truth_(and__3546__auto____8167))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8167;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8168 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{var or__3548__auto____8170 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8170))
{return or__3548__auto____8170;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8177 = d;

if(cljs.core.truth_(and__3546__auto____8177))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8177;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8181 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{var or__3548__auto____8182 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8182))
{return or__3548__auto____8182;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8188 = this$;

if(cljs.core.truth_(and__3546__auto____8188))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8188;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8190 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8190))
{return or__3548__auto____8190;
} else
{var or__3548__auto____8191 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8191))
{return or__3548__auto____8191;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8196 = this$;

if(cljs.core.truth_(and__3546__auto____8196))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8196;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8198 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8198))
{return or__3548__auto____8198;
} else
{var or__3548__auto____8200 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8201 = this$;

if(cljs.core.truth_(and__3546__auto____8201))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8201;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8202 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8202))
{return or__3548__auto____8202;
} else
{var or__3548__auto____8203 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8203))
{return or__3548__auto____8203;
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
var G__8254 = null;
var G__8254__8255 = (function (o,k){
return null;
});
var G__8254__8256 = (function (o,k,not_found){
return not_found;
});
G__8254 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8254__8255.call(this,o,k);
case  3 :
return G__8254__8256.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8254;
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
var G__8258 = null;
var G__8258__8259 = (function (_,f){
return f.call(null);
});
var G__8258__8260 = (function (_,f,start){
return start;
});
G__8258 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8258__8259.call(this,_,f);
case  3 :
return G__8258__8260.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8258;
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
var G__8266 = null;
var G__8266__8267 = (function (_,n){
return null;
});
var G__8266__8268 = (function (_,n,not_found){
return not_found;
});
G__8266 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8266__8267.call(this,_,n);
case  3 :
return G__8266__8268.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8266;
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
var ci_reduce__8347 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8333 = cljs.core._nth.call(null,cicoll,0);
var n__8335 = 1;

while(true){
if(cljs.core.truth_((n__8335 < cljs.core._count.call(null,cicoll))))
{{
var G__8353 = f.call(null,val__8333,cljs.core._nth.call(null,cicoll,n__8335));
var G__8354 = (n__8335 + 1);
val__8333 = G__8353;
n__8335 = G__8354;
continue;
}
} else
{return val__8333;
}
break;
}
}
});
var ci_reduce__8348 = (function (cicoll,f,val){
var val__8337 = val;
var n__8338 = 0;

while(true){
if(cljs.core.truth_((n__8338 < cljs.core._count.call(null,cicoll))))
{{
var G__8357 = f.call(null,val__8337,cljs.core._nth.call(null,cicoll,n__8338));
var G__8358 = (n__8338 + 1);
val__8337 = G__8357;
n__8338 = G__8358;
continue;
}
} else
{return val__8337;
}
break;
}
});
var ci_reduce__8349 = (function (cicoll,f,val,idx){
var val__8343 = val;
var n__8344 = idx;

while(true){
if(cljs.core.truth_((n__8344 < cljs.core._count.call(null,cicoll))))
{{
var G__8386 = f.call(null,val__8343,cljs.core._nth.call(null,cicoll,n__8344));
var G__8388 = (n__8344 + 1);
val__8343 = G__8386;
n__8344 = G__8388;
continue;
}
} else
{return val__8343;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8347.call(this,cicoll,f);
case  3 :
return ci_reduce__8348.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8349.call(this,cicoll,f,val,idx);
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
var this__8402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8440 = null;
var G__8440__8441 = (function (_,f){
var this__8404 = this;
return cljs.core.ci_reduce.call(null,this__8404.a,f,(this__8404.a[this__8404.i]),(this__8404.i + 1));
});
var G__8440__8442 = (function (_,f,start){
var this__8406 = this;
return cljs.core.ci_reduce.call(null,this__8406.a,f,start,this__8406.i);
});
G__8440 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8440__8441.call(this,_,f);
case  3 :
return G__8440__8442.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8440;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8409 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8411 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8448 = null;
var G__8448__8449 = (function (coll,n){
var this__8414 = this;
var i__8416 = (n + this__8414.i);

if(cljs.core.truth_((i__8416 < this__8414.a.length)))
{return (this__8414.a[i__8416]);
} else
{return null;
}
});
var G__8448__8450 = (function (coll,n,not_found){
var this__8418 = this;
var i__8423 = (n + this__8418.i);

if(cljs.core.truth_((i__8423 < this__8418.a.length)))
{return (this__8418.a[i__8423]);
} else
{return not_found;
}
});
G__8448 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8448__8449.call(this,coll,n);
case  3 :
return G__8448__8450.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8448;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8426 = this;
return (this__8426.a.length - this__8426.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8429 = this;
return (this__8429.a[this__8429.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8430 = this;
if(cljs.core.truth_(((this__8430.i + 1) < this__8430.a.length)))
{return (new cljs.core.IndexedSeq(this__8430.a,(this__8430.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8437 = this;
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
var G__8476 = null;
var G__8476__8477 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8476__8478 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8476 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8476__8477.call(this,array,f);
case  3 :
return G__8476__8478.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8476;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8507 = null;
var G__8507__8508 = (function (array,k){
return (array[k]);
});
var G__8507__8509 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8507 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8507__8508.call(this,array,k);
case  3 :
return G__8507__8509.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8507;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8511 = null;
var G__8511__8512 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8511__8513 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8511 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8511__8512.call(this,array,n);
case  3 :
return G__8511__8513.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8511;
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
var temp__3698__auto____8515 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8515))
{var s__8516 = temp__3698__auto____8515;

return cljs.core._first.call(null,s__8516);
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
var G__8536 = cljs.core.next.call(null,s);
s = G__8536;
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
var s__8537 = cljs.core.seq.call(null,x);
var n__8538 = 0;

while(true){
if(cljs.core.truth_(s__8537))
{{
var G__8539 = cljs.core.next.call(null,s__8537);
var G__8540 = (n__8538 + 1);
s__8537 = G__8539;
n__8538 = G__8540;
continue;
}
} else
{return n__8538;
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
var conj__8549 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8550 = (function() { 
var G__8552__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8553 = conj.call(null,coll,x);
var G__8554 = cljs.core.first.call(null,xs);
var G__8555 = cljs.core.next.call(null,xs);
coll = G__8553;
x = G__8554;
xs = G__8555;
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
G__8552.cljs$lang$applyTo = (function (arglist__8556){
var coll = cljs.core.first(arglist__8556);
var x = cljs.core.first(cljs.core.next(arglist__8556));
var xs = cljs.core.rest(cljs.core.next(arglist__8556));
return G__8552__delegate.call(this, coll, x, xs);
});
return G__8552;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8549.call(this,coll,x);
default:
return conj__8550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8550.cljs$lang$applyTo;
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
var nth__8691 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8692 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8691.call(this,coll,n);
case  3 :
return nth__8692.call(this,coll,n,not_found);
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
var get__8700 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8702 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8700.call(this,o,k);
case  3 :
return get__8702.call(this,o,k,not_found);
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
var assoc__8709 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8712 = (function() { 
var G__8735__delegate = function (coll,k,v,kvs){
while(true){
var ret__8704 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8736 = ret__8704;
var G__8737 = cljs.core.first.call(null,kvs);
var G__8738 = cljs.core.second.call(null,kvs);
var G__8739 = cljs.core.nnext.call(null,kvs);
coll = G__8736;
k = G__8737;
v = G__8738;
kvs = G__8739;
continue;
}
} else
{return ret__8704;
}
break;
}
};
var G__8735 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8735__delegate.call(this, coll, k, v, kvs);
};
G__8735.cljs$lang$maxFixedArity = 3;
G__8735.cljs$lang$applyTo = (function (arglist__8743){
var coll = cljs.core.first(arglist__8743);
var k = cljs.core.first(cljs.core.next(arglist__8743));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8743)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8743)));
return G__8735__delegate.call(this, coll, k, v, kvs);
});
return G__8735;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8709.call(this,coll,k,v);
default:
return assoc__8712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8712.cljs$lang$applyTo;
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
var dissoc__8753 = (function (coll){
return coll;
});
var dissoc__8754 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8755 = (function() { 
var G__8759__delegate = function (coll,k,ks){
while(true){
var ret__8745 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8761 = ret__8745;
var G__8762 = cljs.core.first.call(null,ks);
var G__8763 = cljs.core.next.call(null,ks);
coll = G__8761;
k = G__8762;
ks = G__8763;
continue;
}
} else
{return ret__8745;
}
break;
}
};
var G__8759 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8759__delegate.call(this, coll, k, ks);
};
G__8759.cljs$lang$maxFixedArity = 2;
G__8759.cljs$lang$applyTo = (function (arglist__8764){
var coll = cljs.core.first(arglist__8764);
var k = cljs.core.first(cljs.core.next(arglist__8764));
var ks = cljs.core.rest(cljs.core.next(arglist__8764));
return G__8759__delegate.call(this, coll, k, ks);
});
return G__8759;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8753.call(this,coll);
case  2 :
return dissoc__8754.call(this,coll,k);
default:
return dissoc__8755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8755.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8773 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8777 = x__445__auto____8773;

if(cljs.core.truth_(and__3546__auto____8777))
{var and__3546__auto____8779 = x__445__auto____8773.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8779))
{return cljs.core.not.call(null,x__445__auto____8773.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8779;
}
} else
{return and__3546__auto____8777;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8773);
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
var disj__8804 = (function (coll){
return coll;
});
var disj__8805 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8806 = (function() { 
var G__8816__delegate = function (coll,k,ks){
while(true){
var ret__8800 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8819 = ret__8800;
var G__8820 = cljs.core.first.call(null,ks);
var G__8822 = cljs.core.next.call(null,ks);
coll = G__8819;
k = G__8820;
ks = G__8822;
continue;
}
} else
{return ret__8800;
}
break;
}
};
var G__8816 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8816__delegate.call(this, coll, k, ks);
};
G__8816.cljs$lang$maxFixedArity = 2;
G__8816.cljs$lang$applyTo = (function (arglist__8825){
var coll = cljs.core.first(arglist__8825);
var k = cljs.core.first(cljs.core.next(arglist__8825));
var ks = cljs.core.rest(cljs.core.next(arglist__8825));
return G__8816__delegate.call(this, coll, k, ks);
});
return G__8816;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8804.call(this,coll);
case  2 :
return disj__8805.call(this,coll,k);
default:
return disj__8806.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8806.cljs$lang$applyTo;
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
{var x__445__auto____8857 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8858 = x__445__auto____8857;

if(cljs.core.truth_(and__3546__auto____8858))
{var and__3546__auto____8862 = x__445__auto____8857.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8862))
{return cljs.core.not.call(null,x__445__auto____8857.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8862;
}
} else
{return and__3546__auto____8858;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8857);
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
{var x__445__auto____8878 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8879 = x__445__auto____8878;

if(cljs.core.truth_(and__3546__auto____8879))
{var and__3546__auto____8880 = x__445__auto____8878.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8880))
{return cljs.core.not.call(null,x__445__auto____8878.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8880;
}
} else
{return and__3546__auto____8879;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8878);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8885 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8887 = x__445__auto____8885;

if(cljs.core.truth_(and__3546__auto____8887))
{var and__3546__auto____8889 = x__445__auto____8885.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8889))
{return cljs.core.not.call(null,x__445__auto____8885.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8889;
}
} else
{return and__3546__auto____8887;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8885);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8894 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8896 = x__445__auto____8894;

if(cljs.core.truth_(and__3546__auto____8896))
{var and__3546__auto____8898 = x__445__auto____8894.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8898))
{return cljs.core.not.call(null,x__445__auto____8894.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8898;
}
} else
{return and__3546__auto____8896;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8894);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8904 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8906 = x__445__auto____8904;

if(cljs.core.truth_(and__3546__auto____8906))
{var and__3546__auto____8908 = x__445__auto____8904.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8908))
{return cljs.core.not.call(null,x__445__auto____8904.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8908;
}
} else
{return and__3546__auto____8906;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8904);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8915 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8916 = x__445__auto____8915;

if(cljs.core.truth_(and__3546__auto____8916))
{var and__3546__auto____8917 = x__445__auto____8915.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core.not.call(null,x__445__auto____8915.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8917;
}
} else
{return and__3546__auto____8916;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8915);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8926 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8927 = x__445__auto____8926;

if(cljs.core.truth_(and__3546__auto____8927))
{var and__3546__auto____8929 = x__445__auto____8926.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8929))
{return cljs.core.not.call(null,x__445__auto____8926.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8929;
}
} else
{return and__3546__auto____8927;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8926);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8945 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8945.push(key);
}));
return keys__8945;
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
{var x__445__auto____8968 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8969 = x__445__auto____8968;

if(cljs.core.truth_(and__3546__auto____8969))
{var and__3546__auto____8973 = x__445__auto____8968.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8973))
{return cljs.core.not.call(null,x__445__auto____8968.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8973;
}
} else
{return and__3546__auto____8969;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8968);
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
var and__3546__auto____8985 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8985))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8987 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8987))
{return or__3548__auto____8987;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8985;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8993 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8993))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8993;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9001 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9001))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9001;
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
var and__3546__auto____9006 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9006))
{return (n == n.toFixed());
} else
{return and__3546__auto____9006;
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
if(cljs.core.truth_((function (){var and__3546__auto____9009 = coll;

if(cljs.core.truth_(and__3546__auto____9009))
{var and__3546__auto____9010 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9010))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9010;
}
} else
{return and__3546__auto____9009;
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
var distinct_QMARK___9049 = (function (x){
return true;
});
var distinct_QMARK___9050 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9051 = (function() { 
var G__9053__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9020 = cljs.core.set([y,x]);
var xs__9021 = more;

while(true){
var x__9047 = cljs.core.first.call(null,xs__9021);
var etc__9048 = cljs.core.next.call(null,xs__9021);

if(cljs.core.truth_(xs__9021))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9020,x__9047)))
{return false;
} else
{{
var G__9054 = cljs.core.conj.call(null,s__9020,x__9047);
var G__9055 = etc__9048;
s__9020 = G__9054;
xs__9021 = G__9055;
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
var G__9053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9053__delegate.call(this, x, y, more);
};
G__9053.cljs$lang$maxFixedArity = 2;
G__9053.cljs$lang$applyTo = (function (arglist__9061){
var x = cljs.core.first(arglist__9061);
var y = cljs.core.first(cljs.core.next(arglist__9061));
var more = cljs.core.rest(cljs.core.next(arglist__9061));
return G__9053__delegate.call(this, x, y, more);
});
return G__9053;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9049.call(this,x);
case  2 :
return distinct_QMARK___9050.call(this,x,y);
default:
return distinct_QMARK___9051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9051.cljs$lang$applyTo;
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
var r__9069 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9069)))
{return r__9069;
} else
{if(cljs.core.truth_(r__9069))
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
var sort__9081 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9082 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9080 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9080,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9080);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9081.call(this,comp);
case  2 :
return sort__9082.call(this,comp,coll);
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
var sort_by__9090 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9091 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9090.call(this,keyfn,comp);
case  3 :
return sort_by__9091.call(this,keyfn,comp,coll);
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
var reduce__9099 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9100 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9099.call(this,f,val);
case  3 :
return reduce__9100.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9106 = (function (f,coll){
var temp__3695__auto____9102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9102))
{var s__9103 = temp__3695__auto____9102;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9103),cljs.core.next.call(null,s__9103));
} else
{return f.call(null);
}
});
var seq_reduce__9107 = (function (f,val,coll){
var val__9104 = val;
var coll__9105 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9105))
{{
var G__9111 = f.call(null,val__9104,cljs.core.first.call(null,coll__9105));
var G__9112 = cljs.core.next.call(null,coll__9105);
val__9104 = G__9111;
coll__9105 = G__9112;
continue;
}
} else
{return val__9104;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9106.call(this,f,val);
case  3 :
return seq_reduce__9107.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9113 = null;
var G__9113__9132 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9113__9134 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9113 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9113__9132.call(this,coll,f);
case  3 :
return G__9113__9134.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9113;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9139 = (function (){
return 0;
});
var _PLUS___9140 = (function (x){
return x;
});
var _PLUS___9141 = (function (x,y){
return (x + y);
});
var _PLUS___9142 = (function() { 
var G__9147__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9147__delegate.call(this, x, y, more);
};
G__9147.cljs$lang$maxFixedArity = 2;
G__9147.cljs$lang$applyTo = (function (arglist__9149){
var x = cljs.core.first(arglist__9149);
var y = cljs.core.first(cljs.core.next(arglist__9149));
var more = cljs.core.rest(cljs.core.next(arglist__9149));
return G__9147__delegate.call(this, x, y, more);
});
return G__9147;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9139.call(this);
case  1 :
return _PLUS___9140.call(this,x);
case  2 :
return _PLUS___9141.call(this,x,y);
default:
return _PLUS___9142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9142.cljs$lang$applyTo;
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
var ___9225 = (function (x){
return (- x);
});
var ___9226 = (function (x,y){
return (x - y);
});
var ___9227 = (function() { 
var G__9229__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9229 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9229__delegate.call(this, x, y, more);
};
G__9229.cljs$lang$maxFixedArity = 2;
G__9229.cljs$lang$applyTo = (function (arglist__9230){
var x = cljs.core.first(arglist__9230);
var y = cljs.core.first(cljs.core.next(arglist__9230));
var more = cljs.core.rest(cljs.core.next(arglist__9230));
return G__9229__delegate.call(this, x, y, more);
});
return G__9229;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9225.call(this,x);
case  2 :
return ___9226.call(this,x,y);
default:
return ___9227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9227.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9238 = (function (){
return 1;
});
var _STAR___9240 = (function (x){
return x;
});
var _STAR___9241 = (function (x,y){
return (x * y);
});
var _STAR___9242 = (function() { 
var G__9245__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9245__delegate.call(this, x, y, more);
};
G__9245.cljs$lang$maxFixedArity = 2;
G__9245.cljs$lang$applyTo = (function (arglist__9246){
var x = cljs.core.first(arglist__9246);
var y = cljs.core.first(cljs.core.next(arglist__9246));
var more = cljs.core.rest(cljs.core.next(arglist__9246));
return G__9245__delegate.call(this, x, y, more);
});
return G__9245;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9238.call(this);
case  1 :
return _STAR___9240.call(this,x);
case  2 :
return _STAR___9241.call(this,x,y);
default:
return _STAR___9242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9242.cljs$lang$applyTo;
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
var _SLASH___9247 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9248 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9249 = (function() { 
var G__9256__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9256 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9256__delegate.call(this, x, y, more);
};
G__9256.cljs$lang$maxFixedArity = 2;
G__9256.cljs$lang$applyTo = (function (arglist__9260){
var x = cljs.core.first(arglist__9260);
var y = cljs.core.first(cljs.core.next(arglist__9260));
var more = cljs.core.rest(cljs.core.next(arglist__9260));
return G__9256__delegate.call(this, x, y, more);
});
return G__9256;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9247.call(this,x);
case  2 :
return _SLASH___9248.call(this,x,y);
default:
return _SLASH___9249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9249.cljs$lang$applyTo;
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
var _LT___9263 = (function (x){
return true;
});
var _LT___9264 = (function (x,y){
return (x < y);
});
var _LT___9266 = (function() { 
var G__9271__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9273 = y;
var G__9275 = cljs.core.first.call(null,more);
var G__9277 = cljs.core.next.call(null,more);
x = G__9273;
y = G__9275;
more = G__9277;
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
var G__9271 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9271__delegate.call(this, x, y, more);
};
G__9271.cljs$lang$maxFixedArity = 2;
G__9271.cljs$lang$applyTo = (function (arglist__9282){
var x = cljs.core.first(arglist__9282);
var y = cljs.core.first(cljs.core.next(arglist__9282));
var more = cljs.core.rest(cljs.core.next(arglist__9282));
return G__9271__delegate.call(this, x, y, more);
});
return G__9271;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9263.call(this,x);
case  2 :
return _LT___9264.call(this,x,y);
default:
return _LT___9266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9266.cljs$lang$applyTo;
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
var _LT__EQ___9287 = (function (x){
return true;
});
var _LT__EQ___9288 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9289 = (function() { 
var G__9291__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9292 = y;
var G__9293 = cljs.core.first.call(null,more);
var G__9294 = cljs.core.next.call(null,more);
x = G__9292;
y = G__9293;
more = G__9294;
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
var G__9291 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9291__delegate.call(this, x, y, more);
};
G__9291.cljs$lang$maxFixedArity = 2;
G__9291.cljs$lang$applyTo = (function (arglist__9295){
var x = cljs.core.first(arglist__9295);
var y = cljs.core.first(cljs.core.next(arglist__9295));
var more = cljs.core.rest(cljs.core.next(arglist__9295));
return G__9291__delegate.call(this, x, y, more);
});
return G__9291;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9287.call(this,x);
case  2 :
return _LT__EQ___9288.call(this,x,y);
default:
return _LT__EQ___9289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9289.cljs$lang$applyTo;
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
var _GT___9301 = (function (x){
return true;
});
var _GT___9302 = (function (x,y){
return (x > y);
});
var _GT___9303 = (function() { 
var G__9306__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
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
{return (y > cljs.core.first.call(null,more));
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
G__9306.cljs$lang$applyTo = (function (arglist__9314){
var x = cljs.core.first(arglist__9314);
var y = cljs.core.first(cljs.core.next(arglist__9314));
var more = cljs.core.rest(cljs.core.next(arglist__9314));
return G__9306__delegate.call(this, x, y, more);
});
return G__9306;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9301.call(this,x);
case  2 :
return _GT___9302.call(this,x,y);
default:
return _GT___9303.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9303.cljs$lang$applyTo;
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
var _GT__EQ___9321 = (function (x){
return true;
});
var _GT__EQ___9322 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9323 = (function() { 
var G__9325__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9326 = y;
var G__9327 = cljs.core.first.call(null,more);
var G__9328 = cljs.core.next.call(null,more);
x = G__9326;
y = G__9327;
more = G__9328;
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
var G__9325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9325__delegate.call(this, x, y, more);
};
G__9325.cljs$lang$maxFixedArity = 2;
G__9325.cljs$lang$applyTo = (function (arglist__9329){
var x = cljs.core.first(arglist__9329);
var y = cljs.core.first(cljs.core.next(arglist__9329));
var more = cljs.core.rest(cljs.core.next(arglist__9329));
return G__9325__delegate.call(this, x, y, more);
});
return G__9325;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9321.call(this,x);
case  2 :
return _GT__EQ___9322.call(this,x,y);
default:
return _GT__EQ___9323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9323.cljs$lang$applyTo;
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
var max__9337 = (function (x){
return x;
});
var max__9338 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9339 = (function() { 
var G__9356__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9356 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9356__delegate.call(this, x, y, more);
};
G__9356.cljs$lang$maxFixedArity = 2;
G__9356.cljs$lang$applyTo = (function (arglist__9357){
var x = cljs.core.first(arglist__9357);
var y = cljs.core.first(cljs.core.next(arglist__9357));
var more = cljs.core.rest(cljs.core.next(arglist__9357));
return G__9356__delegate.call(this, x, y, more);
});
return G__9356;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9337.call(this,x);
case  2 :
return max__9338.call(this,x,y);
default:
return max__9339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9339.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9378 = (function (x){
return x;
});
var min__9379 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9380 = (function() { 
var G__9386__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9386 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9386__delegate.call(this, x, y, more);
};
G__9386.cljs$lang$maxFixedArity = 2;
G__9386.cljs$lang$applyTo = (function (arglist__9391){
var x = cljs.core.first(arglist__9391);
var y = cljs.core.first(cljs.core.next(arglist__9391));
var more = cljs.core.rest(cljs.core.next(arglist__9391));
return G__9386__delegate.call(this, x, y, more);
});
return G__9386;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9378.call(this,x);
case  2 :
return min__9379.call(this,x,y);
default:
return min__9380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9380.cljs$lang$applyTo;
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
var rem__9456 = (n % d);

return cljs.core.fix.call(null,((n - rem__9456) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9466 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9466));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9471 = (function (){
return Math.random.call(null);
});
var rand__9472 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9471.call(this);
case  1 :
return rand__9472.call(this,n);
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
var _EQ__EQ___9506 = (function (x){
return true;
});
var _EQ__EQ___9507 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9508 = (function() { 
var G__9512__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9513 = y;
var G__9514 = cljs.core.first.call(null,more);
var G__9515 = cljs.core.next.call(null,more);
x = G__9513;
y = G__9514;
more = G__9515;
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
var G__9512 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9512__delegate.call(this, x, y, more);
};
G__9512.cljs$lang$maxFixedArity = 2;
G__9512.cljs$lang$applyTo = (function (arglist__9516){
var x = cljs.core.first(arglist__9516);
var y = cljs.core.first(cljs.core.next(arglist__9516));
var more = cljs.core.rest(cljs.core.next(arglist__9516));
return G__9512__delegate.call(this, x, y, more);
});
return G__9512;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9506.call(this,x);
case  2 :
return _EQ__EQ___9507.call(this,x,y);
default:
return _EQ__EQ___9508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9508.cljs$lang$applyTo;
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
var n__9521 = n;
var xs__9522 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9523 = xs__9522;

if(cljs.core.truth_(and__3546__auto____9523))
{return (n__9521 > 0);
} else
{return and__3546__auto____9523;
}
})()))
{{
var G__9524 = (n__9521 - 1);
var G__9525 = cljs.core.next.call(null,xs__9522);
n__9521 = G__9524;
xs__9522 = G__9525;
continue;
}
} else
{return xs__9522;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9562 = null;
var G__9562__9563 = (function (coll,n){
var temp__3695__auto____9526 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9526))
{var xs__9527 = temp__3695__auto____9526;

return cljs.core.first.call(null,xs__9527);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9562__9564 = (function (coll,n,not_found){
var temp__3695__auto____9528 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9528))
{var xs__9529 = temp__3695__auto____9528;

return cljs.core.first.call(null,xs__9529);
} else
{return not_found;
}
});
G__9562 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9562__9563.call(this,coll,n);
case  3 :
return G__9562__9564.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9562;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9581 = (function (){
return "";
});
var str_STAR___9582 = (function (x){
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
var str_STAR___9583 = (function() { 
var G__9585__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9590 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9591 = cljs.core.next.call(null,more);
sb = G__9590;
more = G__9591;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9585 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9585__delegate.call(this, x, ys);
};
G__9585.cljs$lang$maxFixedArity = 1;
G__9585.cljs$lang$applyTo = (function (arglist__9594){
var x = cljs.core.first(arglist__9594);
var ys = cljs.core.rest(arglist__9594);
return G__9585__delegate.call(this, x, ys);
});
return G__9585;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9581.call(this);
case  1 :
return str_STAR___9582.call(this,x);
default:
return str_STAR___9583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9583.cljs$lang$applyTo;
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
var str__9652 = (function (){
return "";
});
var str__9653 = (function (x){
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
var str__9654 = (function() { 
var G__9656__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9656 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9656__delegate.call(this, x, ys);
};
G__9656.cljs$lang$maxFixedArity = 1;
G__9656.cljs$lang$applyTo = (function (arglist__9658){
var x = cljs.core.first(arglist__9658);
var ys = cljs.core.rest(arglist__9658);
return G__9656__delegate.call(this, x, ys);
});
return G__9656;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9652.call(this);
case  1 :
return str__9653.call(this,x);
default:
return str__9654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9654.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9670 = (function (s,start){
return s.substring(start);
});
var subs__9671 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9670.call(this,s,start);
case  3 :
return subs__9671.call(this,s,start,end);
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
var symbol__9682 = (function (name){
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
var symbol__9683 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9682.call(this,ns);
case  2 :
return symbol__9683.call(this,ns,name);
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
var keyword__9689 = (function (name){
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
var keyword__9690 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9689.call(this,ns);
case  2 :
return keyword__9690.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9696 = cljs.core.seq.call(null,x);
var ys__9697 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9696)))
{return cljs.core.nil_QMARK_.call(null,ys__9697);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9697)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9696),cljs.core.first.call(null,ys__9697))))
{{
var G__9704 = cljs.core.next.call(null,xs__9696);
var G__9705 = cljs.core.next.call(null,ys__9697);
xs__9696 = G__9704;
ys__9697 = G__9705;
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
return cljs.core.reduce.call(null,(function (p1__9727_SHARP_,p2__9729_SHARP_){
return cljs.core.hash_combine.call(null,p1__9727_SHARP_,cljs.core.hash.call(null,p2__9729_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9740__9742 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9740__9742))
{var G__9745__9747 = cljs.core.first.call(null,G__9740__9742);
var vec__9746__9748 = G__9745__9747;
var key_name__9749 = cljs.core.nth.call(null,vec__9746__9748,0,null);
var f__9750 = cljs.core.nth.call(null,vec__9746__9748,1,null);
var G__9740__9751 = G__9740__9742;

var G__9745__9752 = G__9745__9747;
var G__9740__9753 = G__9740__9751;

while(true){
var vec__9754__9755 = G__9745__9752;
var key_name__9756 = cljs.core.nth.call(null,vec__9754__9755,0,null);
var f__9758 = cljs.core.nth.call(null,vec__9754__9755,1,null);
var G__9740__9760 = G__9740__9753;

var str_name__9762 = cljs.core.name.call(null,key_name__9756);

obj[str_name__9762] = f__9758;
var temp__3698__auto____9764 = cljs.core.next.call(null,G__9740__9760);

if(cljs.core.truth_(temp__3698__auto____9764))
{var G__9740__9765 = temp__3698__auto____9764;

{
var G__9777 = cljs.core.first.call(null,G__9740__9765);
var G__9778 = G__9740__9765;
G__9745__9752 = G__9777;
G__9740__9753 = G__9778;
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
var this__9786 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9788 = this;
return (new cljs.core.List(this__9788.meta,o,coll,(this__9788.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9794 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9795 = this;
return this__9795.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9797 = this;
return this__9797.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9798 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9799 = this;
return this__9799.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9800 = this;
return this__9800.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9803 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9805 = this;
return (new cljs.core.List(meta,this__9805.first,this__9805.rest,this__9805.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9806 = this;
return this__9806.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9807 = this;
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
var this__9860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9864 = this;
return (new cljs.core.List(this__9864.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9872 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9875 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9879 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9881 = this;
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
var this__9889 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9890 = this;
return this__9890.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9892 = this;
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
list.cljs$lang$applyTo = (function (arglist__9915){
var items = cljs.core.seq( arglist__9915 );;
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
var this__9925 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9927 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9930 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9931 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9931.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9934 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9935 = this;
return this__9935.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9936 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9936.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9936.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9937 = this;
return this__9937.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9938 = this;
return (new cljs.core.Cons(meta,this__9938.first,this__9938.rest));
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
var G__10071 = null;
var G__10071__10072 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10071__10073 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10071 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10071__10072.call(this,string,f);
case  3 :
return G__10071__10073.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10071;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10078 = null;
var G__10078__10079 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10078__10080 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10078 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10078__10079.call(this,string,k);
case  3 :
return G__10078__10080.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10078;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10084 = null;
var G__10084__10085 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10084__10086 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10084 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10084__10085.call(this,string,n);
case  3 :
return G__10084__10086.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10084;
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
var G__10102 = null;
var G__10102__10103 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10102__10104 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10102 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10102__10103.call(this,this$,coll);
case  3 :
return G__10102__10104.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10102;
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
var x__10107 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10107;
} else
{lazy_seq.x = x__10107.call(null);
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
var this__10122 = this;
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
var this__10163 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10163.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10241 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10249 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10250 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10251 = this;
return this__10251.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10252 = this;
return (new cljs.core.LazySeq(meta,this__10252.realized,this__10252.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10258 = cljs.core.array.call(null);

var s__10259 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10259)))
{ary__10258.push(cljs.core.first.call(null,s__10259));
{
var G__10260 = cljs.core.next.call(null,s__10259);
s__10259 = G__10260;
continue;
}
} else
{return ary__10258;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10265 = s;
var i__10266 = n;
var sum__10267 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10268 = (i__10266 > 0);

if(cljs.core.truth_(and__3546__auto____10268))
{return cljs.core.seq.call(null,s__10265);
} else
{return and__3546__auto____10268;
}
})()))
{{
var G__10274 = cljs.core.next.call(null,s__10265);
var G__10275 = (i__10266 - 1);
var G__10276 = (sum__10267 + 1);
s__10265 = G__10274;
i__10266 = G__10275;
sum__10267 = G__10276;
continue;
}
} else
{return sum__10267;
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
var concat__10287 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10288 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10289 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10283 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10283))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10283),concat.call(null,cljs.core.rest.call(null,s__10283),y));
} else
{return y;
}
})));
});
var concat__10290 = (function() { 
var G__10301__delegate = function (x,y,zs){
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
var G__10301 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10301__delegate.call(this, x, y, zs);
};
G__10301.cljs$lang$maxFixedArity = 2;
G__10301.cljs$lang$applyTo = (function (arglist__10305){
var x = cljs.core.first(arglist__10305);
var y = cljs.core.first(cljs.core.next(arglist__10305));
var zs = cljs.core.rest(cljs.core.next(arglist__10305));
return G__10301__delegate.call(this, x, y, zs);
});
return G__10301;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10287.call(this);
case  1 :
return concat__10288.call(this,x);
case  2 :
return concat__10289.call(this,x,y);
default:
return concat__10290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10290.cljs$lang$applyTo;
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
var list_STAR___10356 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10359 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10360 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10362 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10364 = (function() { 
var G__10377__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10377 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10377__delegate.call(this, a, b, c, d, more);
};
G__10377.cljs$lang$maxFixedArity = 4;
G__10377.cljs$lang$applyTo = (function (arglist__10378){
var a = cljs.core.first(arglist__10378);
var b = cljs.core.first(cljs.core.next(arglist__10378));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10378)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10378))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10378))));
return G__10377__delegate.call(this, a, b, c, d, more);
});
return G__10377;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10356.call(this,a);
case  2 :
return list_STAR___10359.call(this,a,b);
case  3 :
return list_STAR___10360.call(this,a,b,c);
case  4 :
return list_STAR___10362.call(this,a,b,c,d);
default:
return list_STAR___10364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10364.cljs$lang$applyTo;
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
var apply__10480 = (function (f,args){
var fixed_arity__10384 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10384 + 1)) <= fixed_arity__10384)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10481 = (function (f,x,args){
var arglist__10443 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10445 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10443,fixed_arity__10445) <= fixed_arity__10445)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10443));
} else
{return f.cljs$lang$applyTo(arglist__10443);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10443));
}
});
var apply__10482 = (function (f,x,y,args){
var arglist__10450 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10452 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10450,fixed_arity__10452) <= fixed_arity__10452)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10450));
} else
{return f.cljs$lang$applyTo(arglist__10450);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10450));
}
});
var apply__10483 = (function (f,x,y,z,args){
var arglist__10455 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10458 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10455,fixed_arity__10458) <= fixed_arity__10458)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10455));
} else
{return f.cljs$lang$applyTo(arglist__10455);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10455));
}
});
var apply__10484 = (function() { 
var G__10491__delegate = function (f,a,b,c,d,args){
var arglist__10462 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10464 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10462,fixed_arity__10464) <= fixed_arity__10464)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10462));
} else
{return f.cljs$lang$applyTo(arglist__10462);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10462));
}
};
var G__10491 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10491__delegate.call(this, f, a, b, c, d, args);
};
G__10491.cljs$lang$maxFixedArity = 5;
G__10491.cljs$lang$applyTo = (function (arglist__10494){
var f = cljs.core.first(arglist__10494);
var a = cljs.core.first(cljs.core.next(arglist__10494));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10494)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10494))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10494)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10494)))));
return G__10491__delegate.call(this, f, a, b, c, d, args);
});
return G__10491;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10480.call(this,f,a);
case  3 :
return apply__10481.call(this,f,a,b);
case  4 :
return apply__10482.call(this,f,a,b,c);
case  5 :
return apply__10483.call(this,f,a,b,c,d);
default:
return apply__10484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10484.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10508){
var obj = cljs.core.first(arglist__10508);
var f = cljs.core.first(cljs.core.next(arglist__10508));
var args = cljs.core.rest(cljs.core.next(arglist__10508));
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
var not_EQ___10512 = (function (x){
return false;
});
var not_EQ___10513 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10514 = (function() { 
var G__10516__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10516 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10516__delegate.call(this, x, y, more);
};
G__10516.cljs$lang$maxFixedArity = 2;
G__10516.cljs$lang$applyTo = (function (arglist__10519){
var x = cljs.core.first(arglist__10519);
var y = cljs.core.first(cljs.core.next(arglist__10519));
var more = cljs.core.rest(cljs.core.next(arglist__10519));
return G__10516__delegate.call(this, x, y, more);
});
return G__10516;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10512.call(this,x);
case  2 :
return not_EQ___10513.call(this,x,y);
default:
return not_EQ___10514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10514.cljs$lang$applyTo;
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
var G__10547 = pred;
var G__10548 = cljs.core.next.call(null,coll);
pred = G__10547;
coll = G__10548;
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
{var or__3548__auto____10549 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10549))
{return or__3548__auto____10549;
} else
{{
var G__10550 = pred;
var G__10551 = cljs.core.next.call(null,coll);
pred = G__10550;
coll = G__10551;
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
var G__10554 = null;
var G__10554__10555 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10554__10556 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10554__10557 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10554__10558 = (function() { 
var G__10584__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10584 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10584__delegate.call(this, x, y, zs);
};
G__10584.cljs$lang$maxFixedArity = 2;
G__10584.cljs$lang$applyTo = (function (arglist__10585){
var x = cljs.core.first(arglist__10585);
var y = cljs.core.first(cljs.core.next(arglist__10585));
var zs = cljs.core.rest(cljs.core.next(arglist__10585));
return G__10584__delegate.call(this, x, y, zs);
});
return G__10584;
})()
;
G__10554 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10554__10555.call(this);
case  1 :
return G__10554__10556.call(this,x);
case  2 :
return G__10554__10557.call(this,x,y);
default:
return G__10554__10558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10554.cljs$lang$maxFixedArity = 2;
G__10554.cljs$lang$applyTo = G__10554__10558.cljs$lang$applyTo;
return G__10554;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10594__delegate = function (args){
return x;
};
var G__10594 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10594__delegate.call(this, args);
};
G__10594.cljs$lang$maxFixedArity = 0;
G__10594.cljs$lang$applyTo = (function (arglist__10595){
var args = cljs.core.seq( arglist__10595 );;
return G__10594__delegate.call(this, args);
});
return G__10594;
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
var comp__10601 = (function (){
return cljs.core.identity;
});
var comp__10602 = (function (f){
return f;
});
var comp__10603 = (function (f,g){
return (function() {
var G__10608 = null;
var G__10608__10609 = (function (){
return f.call(null,g.call(null));
});
var G__10608__10610 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10608__10612 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10608__10613 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10608__10614 = (function() { 
var G__10617__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10617__delegate.call(this, x, y, z, args);
};
G__10617.cljs$lang$maxFixedArity = 3;
G__10617.cljs$lang$applyTo = (function (arglist__10664){
var x = cljs.core.first(arglist__10664);
var y = cljs.core.first(cljs.core.next(arglist__10664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10664)));
return G__10617__delegate.call(this, x, y, z, args);
});
return G__10617;
})()
;
G__10608 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10608__10609.call(this);
case  1 :
return G__10608__10610.call(this,x);
case  2 :
return G__10608__10612.call(this,x,y);
case  3 :
return G__10608__10613.call(this,x,y,z);
default:
return G__10608__10614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10608.cljs$lang$maxFixedArity = 3;
G__10608.cljs$lang$applyTo = G__10608__10614.cljs$lang$applyTo;
return G__10608;
})()
});
var comp__10604 = (function (f,g,h){
return (function() {
var G__10668 = null;
var G__10668__10669 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10668__10670 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10668__10672 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10668__10673 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10668__10675 = (function() { 
var G__10802__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10802__delegate.call(this, x, y, z, args);
};
G__10802.cljs$lang$maxFixedArity = 3;
G__10802.cljs$lang$applyTo = (function (arglist__10804){
var x = cljs.core.first(arglist__10804);
var y = cljs.core.first(cljs.core.next(arglist__10804));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10804)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10804)));
return G__10802__delegate.call(this, x, y, z, args);
});
return G__10802;
})()
;
G__10668 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10668__10669.call(this);
case  1 :
return G__10668__10670.call(this,x);
case  2 :
return G__10668__10672.call(this,x,y);
case  3 :
return G__10668__10673.call(this,x,y,z);
default:
return G__10668__10675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10668.cljs$lang$maxFixedArity = 3;
G__10668.cljs$lang$applyTo = G__10668__10675.cljs$lang$applyTo;
return G__10668;
})()
});
var comp__10605 = (function() { 
var G__10805__delegate = function (f1,f2,f3,fs){
var fs__10598 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10806__delegate = function (args){
var ret__10599 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10598),args);
var fs__10600 = cljs.core.next.call(null,fs__10598);

while(true){
if(cljs.core.truth_(fs__10600))
{{
var G__10809 = cljs.core.first.call(null,fs__10600).call(null,ret__10599);
var G__10810 = cljs.core.next.call(null,fs__10600);
ret__10599 = G__10809;
fs__10600 = G__10810;
continue;
}
} else
{return ret__10599;
}
break;
}
};
var G__10806 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10806__delegate.call(this, args);
};
G__10806.cljs$lang$maxFixedArity = 0;
G__10806.cljs$lang$applyTo = (function (arglist__10811){
var args = cljs.core.seq( arglist__10811 );;
return G__10806__delegate.call(this, args);
});
return G__10806;
})()
;
};
var G__10805 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10805__delegate.call(this, f1, f2, f3, fs);
};
G__10805.cljs$lang$maxFixedArity = 3;
G__10805.cljs$lang$applyTo = (function (arglist__10812){
var f1 = cljs.core.first(arglist__10812);
var f2 = cljs.core.first(cljs.core.next(arglist__10812));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10812)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10812)));
return G__10805__delegate.call(this, f1, f2, f3, fs);
});
return G__10805;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10601.call(this);
case  1 :
return comp__10602.call(this,f1);
case  2 :
return comp__10603.call(this,f1,f2);
case  3 :
return comp__10604.call(this,f1,f2,f3);
default:
return comp__10605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10605.cljs$lang$applyTo;
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
var partial__10825 = (function (f,arg1){
return (function() { 
var G__10831__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10831 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10831__delegate.call(this, args);
};
G__10831.cljs$lang$maxFixedArity = 0;
G__10831.cljs$lang$applyTo = (function (arglist__10893){
var args = cljs.core.seq( arglist__10893 );;
return G__10831__delegate.call(this, args);
});
return G__10831;
})()
;
});
var partial__10827 = (function (f,arg1,arg2){
return (function() { 
var G__10896__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10896 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10896__delegate.call(this, args);
};
G__10896.cljs$lang$maxFixedArity = 0;
G__10896.cljs$lang$applyTo = (function (arglist__10903){
var args = cljs.core.seq( arglist__10903 );;
return G__10896__delegate.call(this, args);
});
return G__10896;
})()
;
});
var partial__10828 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10906__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10906__delegate.call(this, args);
};
G__10906.cljs$lang$maxFixedArity = 0;
G__10906.cljs$lang$applyTo = (function (arglist__10916){
var args = cljs.core.seq( arglist__10916 );;
return G__10906__delegate.call(this, args);
});
return G__10906;
})()
;
});
var partial__10829 = (function() { 
var G__10989__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10990__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10990 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10990__delegate.call(this, args);
};
G__10990.cljs$lang$maxFixedArity = 0;
G__10990.cljs$lang$applyTo = (function (arglist__10993){
var args = cljs.core.seq( arglist__10993 );;
return G__10990__delegate.call(this, args);
});
return G__10990;
})()
;
};
var G__10989 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10989__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10989.cljs$lang$maxFixedArity = 4;
G__10989.cljs$lang$applyTo = (function (arglist__10994){
var f = cljs.core.first(arglist__10994);
var arg1 = cljs.core.first(cljs.core.next(arglist__10994));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10994)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10994))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10994))));
return G__10989__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10989;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10825.call(this,f,arg1);
case  3 :
return partial__10827.call(this,f,arg1,arg2);
case  4 :
return partial__10828.call(this,f,arg1,arg2,arg3);
default:
return partial__10829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10829.cljs$lang$applyTo;
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
var fnil__11015 = (function (f,x){
return (function() {
var G__11025 = null;
var G__11025__11026 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11025__11027 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11025__11028 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11025__11030 = (function() { 
var G__11035__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11035 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11035__delegate.call(this, a, b, c, ds);
};
G__11035.cljs$lang$maxFixedArity = 3;
G__11035.cljs$lang$applyTo = (function (arglist__11041){
var a = cljs.core.first(arglist__11041);
var b = cljs.core.first(cljs.core.next(arglist__11041));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11041)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11041)));
return G__11035__delegate.call(this, a, b, c, ds);
});
return G__11035;
})()
;
G__11025 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11025__11026.call(this,a);
case  2 :
return G__11025__11027.call(this,a,b);
case  3 :
return G__11025__11028.call(this,a,b,c);
default:
return G__11025__11030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11025.cljs$lang$maxFixedArity = 3;
G__11025.cljs$lang$applyTo = G__11025__11030.cljs$lang$applyTo;
return G__11025;
})()
});
var fnil__11016 = (function (f,x,y){
return (function() {
var G__11052 = null;
var G__11052__11053 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11052__11054 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11052__11055 = (function() { 
var G__11059__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11059 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11059__delegate.call(this, a, b, c, ds);
};
G__11059.cljs$lang$maxFixedArity = 3;
G__11059.cljs$lang$applyTo = (function (arglist__11062){
var a = cljs.core.first(arglist__11062);
var b = cljs.core.first(cljs.core.next(arglist__11062));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11062)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11062)));
return G__11059__delegate.call(this, a, b, c, ds);
});
return G__11059;
})()
;
G__11052 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11052__11053.call(this,a,b);
case  3 :
return G__11052__11054.call(this,a,b,c);
default:
return G__11052__11055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11052.cljs$lang$maxFixedArity = 3;
G__11052.cljs$lang$applyTo = G__11052__11055.cljs$lang$applyTo;
return G__11052;
})()
});
var fnil__11022 = (function (f,x,y,z){
return (function() {
var G__11064 = null;
var G__11064__11066 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11064__11067 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11064__11068 = (function() { 
var G__11076__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11076 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11076__delegate.call(this, a, b, c, ds);
};
G__11076.cljs$lang$maxFixedArity = 3;
G__11076.cljs$lang$applyTo = (function (arglist__11085){
var a = cljs.core.first(arglist__11085);
var b = cljs.core.first(cljs.core.next(arglist__11085));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11085)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11085)));
return G__11076__delegate.call(this, a, b, c, ds);
});
return G__11076;
})()
;
G__11064 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11064__11066.call(this,a,b);
case  3 :
return G__11064__11067.call(this,a,b,c);
default:
return G__11064__11068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11064.cljs$lang$maxFixedArity = 3;
G__11064.cljs$lang$applyTo = G__11064__11068.cljs$lang$applyTo;
return G__11064;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11015.call(this,f,x);
case  3 :
return fnil__11016.call(this,f,x,y);
case  4 :
return fnil__11022.call(this,f,x,y,z);
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
var mapi__11102 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11098 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11098))
{var s__11100 = temp__3698__auto____11098;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11100)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11100)));
} else
{return null;
}
})));
});

return mapi__11102.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11124 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11124))
{var s__11125 = temp__3698__auto____11124;

var x__11126 = f.call(null,cljs.core.first.call(null,s__11125));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11126)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11125));
} else
{return cljs.core.cons.call(null,x__11126,keep.call(null,f,cljs.core.rest.call(null,s__11125)));
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
var keepi__11172 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11164))
{var s__11166 = temp__3698__auto____11164;

var x__11168 = f.call(null,idx,cljs.core.first.call(null,s__11166));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11168)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11166));
} else
{return cljs.core.cons.call(null,x__11168,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11166)));
}
} else
{return null;
}
})));
});

return keepi__11172.call(null,0,coll);
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
var every_pred__11331 = (function (p){
return (function() {
var ep1 = null;
var ep1__11340 = (function (){
return true;
});
var ep1__11341 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11342 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11207 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11207))
{return p.call(null,y);
} else
{return and__3546__auto____11207;
}
})());
});
var ep1__11343 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11208 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11208))
{var and__3546__auto____11209 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11209))
{return p.call(null,z);
} else
{return and__3546__auto____11209;
}
} else
{return and__3546__auto____11208;
}
})());
});
var ep1__11344 = (function() { 
var G__11359__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11210 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11210))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11210;
}
})());
};
var G__11359 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11359__delegate.call(this, x, y, z, args);
};
G__11359.cljs$lang$maxFixedArity = 3;
G__11359.cljs$lang$applyTo = (function (arglist__11365){
var x = cljs.core.first(arglist__11365);
var y = cljs.core.first(cljs.core.next(arglist__11365));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11365)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11365)));
return G__11359__delegate.call(this, x, y, z, args);
});
return G__11359;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11340.call(this);
case  1 :
return ep1__11341.call(this,x);
case  2 :
return ep1__11342.call(this,x,y);
case  3 :
return ep1__11343.call(this,x,y,z);
default:
return ep1__11344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11344.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11333 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11371 = (function (){
return true;
});
var ep2__11372 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11212 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11212))
{return p2.call(null,x);
} else
{return and__3546__auto____11212;
}
})());
});
var ep2__11374 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11215 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11215))
{var and__3546__auto____11217 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11217))
{var and__3546__auto____11219 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11219))
{return p2.call(null,y);
} else
{return and__3546__auto____11219;
}
} else
{return and__3546__auto____11217;
}
} else
{return and__3546__auto____11215;
}
})());
});
var ep2__11375 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11226 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11226))
{var and__3546__auto____11227 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11227))
{var and__3546__auto____11228 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11228))
{var and__3546__auto____11229 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11229))
{var and__3546__auto____11231 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11231))
{return p2.call(null,z);
} else
{return and__3546__auto____11231;
}
} else
{return and__3546__auto____11229;
}
} else
{return and__3546__auto____11228;
}
} else
{return and__3546__auto____11227;
}
} else
{return and__3546__auto____11226;
}
})());
});
var ep2__11376 = (function() { 
var G__11390__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11236 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11236))
{return cljs.core.every_QMARK_.call(null,(function (p1__11138_SHARP_){
var and__3546__auto____11238 = p1.call(null,p1__11138_SHARP_);

if(cljs.core.truth_(and__3546__auto____11238))
{return p2.call(null,p1__11138_SHARP_);
} else
{return and__3546__auto____11238;
}
}),args);
} else
{return and__3546__auto____11236;
}
})());
};
var G__11390 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11390__delegate.call(this, x, y, z, args);
};
G__11390.cljs$lang$maxFixedArity = 3;
G__11390.cljs$lang$applyTo = (function (arglist__11397){
var x = cljs.core.first(arglist__11397);
var y = cljs.core.first(cljs.core.next(arglist__11397));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11397)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11397)));
return G__11390__delegate.call(this, x, y, z, args);
});
return G__11390;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11371.call(this);
case  1 :
return ep2__11372.call(this,x);
case  2 :
return ep2__11374.call(this,x,y);
case  3 :
return ep2__11375.call(this,x,y,z);
default:
return ep2__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11376.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11334 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11404 = (function (){
return true;
});
var ep3__11406 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11240 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11240))
{var and__3546__auto____11241 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11241))
{return p3.call(null,x);
} else
{return and__3546__auto____11241;
}
} else
{return and__3546__auto____11240;
}
})());
});
var ep3__11407 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11245 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11245))
{var and__3546__auto____11246 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11246))
{var and__3546__auto____11265 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11265))
{var and__3546__auto____11267 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11267))
{var and__3546__auto____11269 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11269))
{return p3.call(null,y);
} else
{return and__3546__auto____11269;
}
} else
{return and__3546__auto____11267;
}
} else
{return and__3546__auto____11265;
}
} else
{return and__3546__auto____11246;
}
} else
{return and__3546__auto____11245;
}
})());
});
var ep3__11408 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11275 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11275))
{var and__3546__auto____11277 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11277))
{var and__3546__auto____11279 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11279))
{var and__3546__auto____11281 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11281))
{var and__3546__auto____11284 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11284))
{var and__3546__auto____11286 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11286))
{var and__3546__auto____11288 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11288))
{var and__3546__auto____11290 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11290))
{return p3.call(null,z);
} else
{return and__3546__auto____11290;
}
} else
{return and__3546__auto____11288;
}
} else
{return and__3546__auto____11286;
}
} else
{return and__3546__auto____11284;
}
} else
{return and__3546__auto____11281;
}
} else
{return and__3546__auto____11279;
}
} else
{return and__3546__auto____11277;
}
} else
{return and__3546__auto____11275;
}
})());
});
var ep3__11409 = (function() { 
var G__11433__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11294 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11294))
{return cljs.core.every_QMARK_.call(null,(function (p1__11140_SHARP_){
var and__3546__auto____11297 = p1.call(null,p1__11140_SHARP_);

if(cljs.core.truth_(and__3546__auto____11297))
{var and__3546__auto____11299 = p2.call(null,p1__11140_SHARP_);

if(cljs.core.truth_(and__3546__auto____11299))
{return p3.call(null,p1__11140_SHARP_);
} else
{return and__3546__auto____11299;
}
} else
{return and__3546__auto____11297;
}
}),args);
} else
{return and__3546__auto____11294;
}
})());
};
var G__11433 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11433__delegate.call(this, x, y, z, args);
};
G__11433.cljs$lang$maxFixedArity = 3;
G__11433.cljs$lang$applyTo = (function (arglist__11438){
var x = cljs.core.first(arglist__11438);
var y = cljs.core.first(cljs.core.next(arglist__11438));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11438)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11438)));
return G__11433__delegate.call(this, x, y, z, args);
});
return G__11433;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11404.call(this);
case  1 :
return ep3__11406.call(this,x);
case  2 :
return ep3__11407.call(this,x,y);
case  3 :
return ep3__11408.call(this,x,y,z);
default:
return ep3__11409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11409.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11335 = (function() { 
var G__11442__delegate = function (p1,p2,p3,ps){
var ps__11302 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11444 = (function (){
return true;
});
var epn__11445 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11142_SHARP_){
return p1__11142_SHARP_.call(null,x);
}),ps__11302);
});
var epn__11446 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11145_SHARP_){
var and__3546__auto____11307 = p1__11145_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11307))
{return p1__11145_SHARP_.call(null,y);
} else
{return and__3546__auto____11307;
}
}),ps__11302);
});
var epn__11447 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11146_SHARP_){
var and__3546__auto____11311 = p1__11146_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11311))
{var and__3546__auto____11314 = p1__11146_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11314))
{return p1__11146_SHARP_.call(null,z);
} else
{return and__3546__auto____11314;
}
} else
{return and__3546__auto____11311;
}
}),ps__11302);
});
var epn__11448 = (function() { 
var G__11480__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11323 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11323))
{return cljs.core.every_QMARK_.call(null,(function (p1__11157_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11157_SHARP_,args);
}),ps__11302);
} else
{return and__3546__auto____11323;
}
})());
};
var G__11480 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11480__delegate.call(this, x, y, z, args);
};
G__11480.cljs$lang$maxFixedArity = 3;
G__11480.cljs$lang$applyTo = (function (arglist__11497){
var x = cljs.core.first(arglist__11497);
var y = cljs.core.first(cljs.core.next(arglist__11497));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11497)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11497)));
return G__11480__delegate.call(this, x, y, z, args);
});
return G__11480;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11444.call(this);
case  1 :
return epn__11445.call(this,x);
case  2 :
return epn__11446.call(this,x,y);
case  3 :
return epn__11447.call(this,x,y,z);
default:
return epn__11448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11448.cljs$lang$applyTo;
return epn;
})()
};
var G__11442 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11442__delegate.call(this, p1, p2, p3, ps);
};
G__11442.cljs$lang$maxFixedArity = 3;
G__11442.cljs$lang$applyTo = (function (arglist__11499){
var p1 = cljs.core.first(arglist__11499);
var p2 = cljs.core.first(cljs.core.next(arglist__11499));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11499)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11499)));
return G__11442__delegate.call(this, p1, p2, p3, ps);
});
return G__11442;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11331.call(this,p1);
case  2 :
return every_pred__11333.call(this,p1,p2);
case  3 :
return every_pred__11334.call(this,p1,p2,p3);
default:
return every_pred__11335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11335.cljs$lang$applyTo;
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
var some_fn__11654 = (function (p){
return (function() {
var sp1 = null;
var sp1__11692 = (function (){
return null;
});
var sp1__11693 = (function (x){
return p.call(null,x);
});
var sp1__11694 = (function (x,y){
var or__3548__auto____11510 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11510))
{return or__3548__auto____11510;
} else
{return p.call(null,y);
}
});
var sp1__11695 = (function (x,y,z){
var or__3548__auto____11512 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{var or__3548__auto____11514 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11514))
{return or__3548__auto____11514;
} else
{return p.call(null,z);
}
}
});
var sp1__11696 = (function() { 
var G__11699__delegate = function (x,y,z,args){
var or__3548__auto____11517 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11517))
{return or__3548__auto____11517;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11699 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11699__delegate.call(this, x, y, z, args);
};
G__11699.cljs$lang$maxFixedArity = 3;
G__11699.cljs$lang$applyTo = (function (arglist__11701){
var x = cljs.core.first(arglist__11701);
var y = cljs.core.first(cljs.core.next(arglist__11701));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11701)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11701)));
return G__11699__delegate.call(this, x, y, z, args);
});
return G__11699;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11692.call(this);
case  1 :
return sp1__11693.call(this,x);
case  2 :
return sp1__11694.call(this,x,y);
case  3 :
return sp1__11695.call(this,x,y,z);
default:
return sp1__11696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11696.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11655 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11702 = (function (){
return null;
});
var sp2__11703 = (function (x){
var or__3548__auto____11524 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{return p2.call(null,x);
}
});
var sp2__11704 = (function (x,y){
var or__3548__auto____11525 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11525))
{return or__3548__auto____11525;
} else
{var or__3548__auto____11526 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11526))
{return or__3548__auto____11526;
} else
{var or__3548__auto____11528 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11528))
{return or__3548__auto____11528;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11705 = (function (x,y,z){
var or__3548__auto____11531 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11531))
{return or__3548__auto____11531;
} else
{var or__3548__auto____11532 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11532))
{return or__3548__auto____11532;
} else
{var or__3548__auto____11533 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{var or__3548__auto____11534 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11534))
{return or__3548__auto____11534;
} else
{var or__3548__auto____11536 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11536))
{return or__3548__auto____11536;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11706 = (function() { 
var G__11712__delegate = function (x,y,z,args){
var or__3548__auto____11538 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11538))
{return or__3548__auto____11538;
} else
{return cljs.core.some.call(null,(function (p1__11191_SHARP_){
var or__3548__auto____11539 = p1.call(null,p1__11191_SHARP_);

if(cljs.core.truth_(or__3548__auto____11539))
{return or__3548__auto____11539;
} else
{return p2.call(null,p1__11191_SHARP_);
}
}),args);
}
};
var G__11712 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11712__delegate.call(this, x, y, z, args);
};
G__11712.cljs$lang$maxFixedArity = 3;
G__11712.cljs$lang$applyTo = (function (arglist__11715){
var x = cljs.core.first(arglist__11715);
var y = cljs.core.first(cljs.core.next(arglist__11715));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11715)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11715)));
return G__11712__delegate.call(this, x, y, z, args);
});
return G__11712;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11702.call(this);
case  1 :
return sp2__11703.call(this,x);
case  2 :
return sp2__11704.call(this,x,y);
case  3 :
return sp2__11705.call(this,x,y,z);
default:
return sp2__11706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11706.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11656 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11716 = (function (){
return null;
});
var sp3__11717 = (function (x){
var or__3548__auto____11542 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{var or__3548__auto____11543 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11543))
{return or__3548__auto____11543;
} else
{return p3.call(null,x);
}
}
});
var sp3__11718 = (function (x,y){
var or__3548__auto____11606 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11606))
{return or__3548__auto____11606;
} else
{var or__3548__auto____11608 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11608))
{return or__3548__auto____11608;
} else
{var or__3548__auto____11610 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11610))
{return or__3548__auto____11610;
} else
{var or__3548__auto____11612 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11612))
{return or__3548__auto____11612;
} else
{var or__3548__auto____11614 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11614))
{return or__3548__auto____11614;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11719 = (function (x,y,z){
var or__3548__auto____11615 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11615))
{return or__3548__auto____11615;
} else
{var or__3548__auto____11617 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11617))
{return or__3548__auto____11617;
} else
{var or__3548__auto____11618 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11618))
{return or__3548__auto____11618;
} else
{var or__3548__auto____11620 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11620))
{return or__3548__auto____11620;
} else
{var or__3548__auto____11624 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11624))
{return or__3548__auto____11624;
} else
{var or__3548__auto____11625 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11625))
{return or__3548__auto____11625;
} else
{var or__3548__auto____11626 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11626))
{return or__3548__auto____11626;
} else
{var or__3548__auto____11628 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11628))
{return or__3548__auto____11628;
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
var sp3__11720 = (function() { 
var G__11728__delegate = function (x,y,z,args){
var or__3548__auto____11631 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11631))
{return or__3548__auto____11631;
} else
{return cljs.core.some.call(null,(function (p1__11193_SHARP_){
var or__3548__auto____11634 = p1.call(null,p1__11193_SHARP_);

if(cljs.core.truth_(or__3548__auto____11634))
{return or__3548__auto____11634;
} else
{var or__3548__auto____11636 = p2.call(null,p1__11193_SHARP_);

if(cljs.core.truth_(or__3548__auto____11636))
{return or__3548__auto____11636;
} else
{return p3.call(null,p1__11193_SHARP_);
}
}
}),args);
}
};
var G__11728 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11728__delegate.call(this, x, y, z, args);
};
G__11728.cljs$lang$maxFixedArity = 3;
G__11728.cljs$lang$applyTo = (function (arglist__11731){
var x = cljs.core.first(arglist__11731);
var y = cljs.core.first(cljs.core.next(arglist__11731));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11731)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11731)));
return G__11728__delegate.call(this, x, y, z, args);
});
return G__11728;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11716.call(this);
case  1 :
return sp3__11717.call(this,x);
case  2 :
return sp3__11718.call(this,x,y);
case  3 :
return sp3__11719.call(this,x,y,z);
default:
return sp3__11720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11720.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11657 = (function() { 
var G__11736__delegate = function (p1,p2,p3,ps){
var ps__11638 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11738 = (function (){
return null;
});
var spn__11739 = (function (x){
return cljs.core.some.call(null,(function (p1__11194_SHARP_){
return p1__11194_SHARP_.call(null,x);
}),ps__11638);
});
var spn__11740 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11195_SHARP_){
var or__3548__auto____11640 = p1__11195_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11640))
{return or__3548__auto____11640;
} else
{return p1__11195_SHARP_.call(null,y);
}
}),ps__11638);
});
var spn__11741 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11196_SHARP_){
var or__3548__auto____11644 = p1__11196_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11644))
{return or__3548__auto____11644;
} else
{var or__3548__auto____11646 = p1__11196_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11646))
{return or__3548__auto____11646;
} else
{return p1__11196_SHARP_.call(null,z);
}
}
}),ps__11638);
});
var spn__11743 = (function() { 
var G__11750__delegate = function (x,y,z,args){
var or__3548__auto____11648 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11648))
{return or__3548__auto____11648;
} else
{return cljs.core.some.call(null,(function (p1__11198_SHARP_){
return cljs.core.some.call(null,p1__11198_SHARP_,args);
}),ps__11638);
}
};
var G__11750 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11750__delegate.call(this, x, y, z, args);
};
G__11750.cljs$lang$maxFixedArity = 3;
G__11750.cljs$lang$applyTo = (function (arglist__11753){
var x = cljs.core.first(arglist__11753);
var y = cljs.core.first(cljs.core.next(arglist__11753));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11753)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11753)));
return G__11750__delegate.call(this, x, y, z, args);
});
return G__11750;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11738.call(this);
case  1 :
return spn__11739.call(this,x);
case  2 :
return spn__11740.call(this,x,y);
case  3 :
return spn__11741.call(this,x,y,z);
default:
return spn__11743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11743.cljs$lang$applyTo;
return spn;
})()
};
var G__11736 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11736__delegate.call(this, p1, p2, p3, ps);
};
G__11736.cljs$lang$maxFixedArity = 3;
G__11736.cljs$lang$applyTo = (function (arglist__11757){
var p1 = cljs.core.first(arglist__11757);
var p2 = cljs.core.first(cljs.core.next(arglist__11757));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11757)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11757)));
return G__11736__delegate.call(this, p1, p2, p3, ps);
});
return G__11736;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11654.call(this,p1);
case  2 :
return some_fn__11655.call(this,p1,p2);
case  3 :
return some_fn__11656.call(this,p1,p2,p3);
default:
return some_fn__11657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11657.cljs$lang$applyTo;
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
var map__11803 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11764))
{var s__11765 = temp__3698__auto____11764;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11765)),map.call(null,f,cljs.core.rest.call(null,s__11765)));
} else
{return null;
}
})));
});
var map__11804 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11769 = cljs.core.seq.call(null,c1);
var s2__11770 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11772 = s1__11769;

if(cljs.core.truth_(and__3546__auto____11772))
{return s2__11770;
} else
{return and__3546__auto____11772;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11769),cljs.core.first.call(null,s2__11770)),map.call(null,f,cljs.core.rest.call(null,s1__11769),cljs.core.rest.call(null,s2__11770)));
} else
{return null;
}
})));
});
var map__11805 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11777 = cljs.core.seq.call(null,c1);
var s2__11778 = cljs.core.seq.call(null,c2);
var s3__11779 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11781 = s1__11777;

if(cljs.core.truth_(and__3546__auto____11781))
{var and__3546__auto____11782 = s2__11778;

if(cljs.core.truth_(and__3546__auto____11782))
{return s3__11779;
} else
{return and__3546__auto____11782;
}
} else
{return and__3546__auto____11781;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11777),cljs.core.first.call(null,s2__11778),cljs.core.first.call(null,s3__11779)),map.call(null,f,cljs.core.rest.call(null,s1__11777),cljs.core.rest.call(null,s2__11778),cljs.core.rest.call(null,s3__11779)));
} else
{return null;
}
})));
});
var map__11807 = (function() { 
var G__11917__delegate = function (f,c1,c2,c3,colls){
var step__11796 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11794 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11794)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11794),step.call(null,map.call(null,cljs.core.rest,ss__11794)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11506_SHARP_){
return cljs.core.apply.call(null,f,p1__11506_SHARP_);
}),step__11796.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11917 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11917__delegate.call(this, f, c1, c2, c3, colls);
};
G__11917.cljs$lang$maxFixedArity = 4;
G__11917.cljs$lang$applyTo = (function (arglist__11920){
var f = cljs.core.first(arglist__11920);
var c1 = cljs.core.first(cljs.core.next(arglist__11920));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11920)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11920))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11920))));
return G__11917__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11917;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11803.call(this,f,c1);
case  3 :
return map__11804.call(this,f,c1,c2);
case  4 :
return map__11805.call(this,f,c1,c2,c3);
default:
return map__11807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11807.cljs$lang$applyTo;
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
{var temp__3698__auto____11925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11925))
{var s__11926 = temp__3698__auto____11925;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11926),take.call(null,(n - 1),cljs.core.rest.call(null,s__11926)));
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
var step__11937 = (function (n,coll){
while(true){
var s__11930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11935 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11935))
{return s__11930;
} else
{return and__3546__auto____11935;
}
})()))
{{
var G__11941 = (n - 1);
var G__11943 = cljs.core.rest.call(null,s__11930);
n = G__11941;
coll = G__11943;
continue;
}
} else
{return s__11930;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11937.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11947 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11949 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11947.call(this,n);
case  2 :
return drop_last__11949.call(this,n,s);
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
var s__11956 = cljs.core.seq.call(null,coll);
var lead__11957 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11957))
{{
var G__11964 = cljs.core.next.call(null,s__11956);
var G__11965 = cljs.core.next.call(null,lead__11957);
s__11956 = G__11964;
lead__11957 = G__11965;
continue;
}
} else
{return s__11956;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11977 = (function (pred,coll){
while(true){
var s__11969 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11973 = s__11969;

if(cljs.core.truth_(and__3546__auto____11973))
{return pred.call(null,cljs.core.first.call(null,s__11969));
} else
{return and__3546__auto____11973;
}
})()))
{{
var G__11979 = pred;
var G__11981 = cljs.core.rest.call(null,s__11969);
pred = G__11979;
coll = G__11981;
continue;
}
} else
{return s__11969;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11977.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11985))
{var s__11986 = temp__3698__auto____11985;

return cljs.core.concat.call(null,s__11986,cycle.call(null,s__11986));
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
var repeat__11999 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12000 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11999.call(this,n);
case  2 :
return repeat__12000.call(this,n,x);
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
var repeatedly__12011 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12012 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12011.call(this,n);
case  2 :
return repeatedly__12012.call(this,n,f);
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
var interleave__12088 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12077 = cljs.core.seq.call(null,c1);
var s2__12078 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12080 = s1__12077;

if(cljs.core.truth_(and__3546__auto____12080))
{return s2__12078;
} else
{return and__3546__auto____12080;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12077),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12078),interleave.call(null,cljs.core.rest.call(null,s1__12077),cljs.core.rest.call(null,s2__12078))));
} else
{return null;
}
})));
});
var interleave__12089 = (function() { 
var G__12091__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12087 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12087)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12087),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12087)));
} else
{return null;
}
})));
};
var G__12091 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12091__delegate.call(this, c1, c2, colls);
};
G__12091.cljs$lang$maxFixedArity = 2;
G__12091.cljs$lang$applyTo = (function (arglist__12097){
var c1 = cljs.core.first(arglist__12097);
var c2 = cljs.core.first(cljs.core.next(arglist__12097));
var colls = cljs.core.rest(cljs.core.next(arglist__12097));
return G__12091__delegate.call(this, c1, c2, colls);
});
return G__12091;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12088.call(this,c1,c2);
default:
return interleave__12089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12089.cljs$lang$applyTo;
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
var cat__12107 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12102))
{var coll__12103 = temp__3695__auto____12102;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12103),cat.call(null,cljs.core.rest.call(null,coll__12103),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12107.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12116 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12117 = (function() { 
var G__12120__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12120 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12120__delegate.call(this, f, coll, colls);
};
G__12120.cljs$lang$maxFixedArity = 2;
G__12120.cljs$lang$applyTo = (function (arglist__12122){
var f = cljs.core.first(arglist__12122);
var coll = cljs.core.first(cljs.core.next(arglist__12122));
var colls = cljs.core.rest(cljs.core.next(arglist__12122));
return G__12120__delegate.call(this, f, coll, colls);
});
return G__12120;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12116.call(this,f,coll);
default:
return mapcat__12117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12117.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12125))
{var s__12127 = temp__3698__auto____12125;

var f__12128 = cljs.core.first.call(null,s__12127);
var r__12129 = cljs.core.rest.call(null,s__12127);

if(cljs.core.truth_(pred.call(null,f__12128)))
{return cljs.core.cons.call(null,f__12128,filter.call(null,pred,r__12129));
} else
{return filter.call(null,pred,r__12129);
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
var walk__12263 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12263.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12259_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12259_SHARP_));
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
var partition__12285 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12286 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12272 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12272))
{var s__12273 = temp__3698__auto____12272;

var p__12278 = cljs.core.take.call(null,n,s__12273);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12278))))
{return cljs.core.cons.call(null,p__12278,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12273)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12287 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12279))
{var s__12280 = temp__3698__auto____12279;

var p__12281 = cljs.core.take.call(null,n,s__12280);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12281))))
{return cljs.core.cons.call(null,p__12281,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12280)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12281,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12285.call(this,n,step);
case  3 :
return partition__12286.call(this,n,step,pad);
case  4 :
return partition__12287.call(this,n,step,pad,coll);
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
var get_in__12361 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12362 = (function (m,ks,not_found){
var sentinel__12296 = cljs.core.lookup_sentinel;
var m__12298 = m;
var ks__12300 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12300))
{var m__12302 = cljs.core.get.call(null,m__12298,cljs.core.first.call(null,ks__12300),sentinel__12296);

if(cljs.core.truth_((sentinel__12296 === m__12302)))
{return not_found;
} else
{{
var G__12366 = sentinel__12296;
var G__12367 = m__12302;
var G__12368 = cljs.core.next.call(null,ks__12300);
sentinel__12296 = G__12366;
m__12298 = G__12367;
ks__12300 = G__12368;
continue;
}
}
} else
{return m__12298;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12361.call(this,m,ks);
case  3 :
return get_in__12362.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12371,v){
var vec__12373__12374 = p__12371;
var k__12375 = cljs.core.nth.call(null,vec__12373__12374,0,null);
var ks__12377 = cljs.core.nthnext.call(null,vec__12373__12374,1);

if(cljs.core.truth_(ks__12377))
{return cljs.core.assoc.call(null,m,k__12375,assoc_in.call(null,cljs.core.get.call(null,m,k__12375),ks__12377,v));
} else
{return cljs.core.assoc.call(null,m,k__12375,v);
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
var update_in__delegate = function (m,p__12386,f,args){
var vec__12387__12389 = p__12386;
var k__12390 = cljs.core.nth.call(null,vec__12387__12389,0,null);
var ks__12392 = cljs.core.nthnext.call(null,vec__12387__12389,1);

if(cljs.core.truth_(ks__12392))
{return cljs.core.assoc.call(null,m,k__12390,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12390),ks__12392,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12390,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12390),args));
}
};
var update_in = function (m,p__12386,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12386, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12405){
var m = cljs.core.first(arglist__12405);
var p__12386 = cljs.core.first(cljs.core.next(arglist__12405));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12405)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12405)));
return update_in__delegate.call(this, m, p__12386, f, args);
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
var this__12410 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12467 = null;
var G__12467__12468 = (function (coll,k){
var this__12413 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12467__12469 = (function (coll,k,not_found){
var this__12414 = this;
return cljs.core._nth.call(null,coll,k,not_found);
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
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12415 = this;
var new_array__12417 = cljs.core.aclone.call(null,this__12415.array);

(new_array__12417[k] = v);
return (new cljs.core.Vector(this__12415.meta,new_array__12417));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12479 = null;
var G__12479__12480 = (function (coll,k){
var this__12419 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12479__12481 = (function (coll,k,not_found){
var this__12421 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12479 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12479__12480.call(this,coll,k);
case  3 :
return G__12479__12481.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12479;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12423 = this;
var new_array__12424 = cljs.core.aclone.call(null,this__12423.array);

new_array__12424.push(o);
return (new cljs.core.Vector(this__12423.meta,new_array__12424));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12491 = null;
var G__12491__12492 = (function (v,f){
var this__12425 = this;
return cljs.core.ci_reduce.call(null,this__12425.array,f);
});
var G__12491__12493 = (function (v,f,start){
var this__12426 = this;
return cljs.core.ci_reduce.call(null,this__12426.array,f,start);
});
G__12491 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12491__12492.call(this,v,f);
case  3 :
return G__12491__12493.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12491;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12428 = this;
if(cljs.core.truth_((this__12428.array.length > 0)))
{var vector_seq__12432 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12428.array.length)))
{return cljs.core.cons.call(null,(this__12428.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12432.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12434 = this;
return this__12434.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12436 = this;
var count__12437 = this__12436.array.length;

if(cljs.core.truth_((count__12437 > 0)))
{return (this__12436.array[(count__12437 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12439 = this;
if(cljs.core.truth_((this__12439.array.length > 0)))
{var new_array__12441 = cljs.core.aclone.call(null,this__12439.array);

new_array__12441.pop();
return (new cljs.core.Vector(this__12439.meta,new_array__12441));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12444 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12446 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12448 = this;
return (new cljs.core.Vector(meta,this__12448.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12450 = this;
return this__12450.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12503 = null;
var G__12503__12504 = (function (coll,n){
var this__12452 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12453 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12453))
{return (n < this__12452.array.length);
} else
{return and__3546__auto____12453;
}
})()))
{return (this__12452.array[n]);
} else
{return null;
}
});
var G__12503__12507 = (function (coll,n,not_found){
var this__12456 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12458 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12458))
{return (n < this__12456.array.length);
} else
{return and__3546__auto____12458;
}
})()))
{return (this__12456.array[n]);
} else
{return not_found;
}
});
G__12503 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12503__12504.call(this,coll,n);
case  3 :
return G__12503__12507.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12503;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12461 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12461.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12529){
var args = cljs.core.seq( arglist__12529 );;
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
var this__12531 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12582 = null;
var G__12582__12583 = (function (coll,k){
var this__12533 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12582__12584 = (function (coll,k,not_found){
var this__12535 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12582 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12582__12583.call(this,coll,k);
case  3 :
return G__12582__12584.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12582;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12537 = this;
var v_pos__12540 = (this__12537.start + key);

return (new cljs.core.Subvec(this__12537.meta,cljs.core._assoc.call(null,this__12537.v,v_pos__12540,val),this__12537.start,((this__12537.end > (v_pos__12540 + 1)) ? this__12537.end : (v_pos__12540 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12594 = null;
var G__12594__12595 = (function (coll,k){
var this__12542 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12594__12596 = (function (coll,k,not_found){
var this__12543 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12594 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12594__12595.call(this,coll,k);
case  3 :
return G__12594__12596.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12594;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12546 = this;
return (new cljs.core.Subvec(this__12546.meta,cljs.core._assoc_n.call(null,this__12546.v,this__12546.end,o),this__12546.start,(this__12546.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12603 = null;
var G__12603__12604 = (function (coll,f){
var this__12550 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12603__12606 = (function (coll,f,start){
var this__12553 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12603 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12603__12604.call(this,coll,f);
case  3 :
return G__12603__12606.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12603;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12556 = this;
var subvec_seq__12558 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12556.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12556.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12558.call(null,this__12556.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12559 = this;
return (this__12559.end - this__12559.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12561 = this;
return cljs.core._nth.call(null,this__12561.v,(this__12561.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12563 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12563.start,this__12563.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12563.meta,this__12563.v,this__12563.start,(this__12563.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12565 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12567 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12569 = this;
return (new cljs.core.Subvec(meta,this__12569.v,this__12569.start,this__12569.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12571 = this;
return this__12571.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12615 = null;
var G__12615__12619 = (function (coll,n){
var this__12573 = this;
return cljs.core._nth.call(null,this__12573.v,(this__12573.start + n));
});
var G__12615__12620 = (function (coll,n,not_found){
var this__12576 = this;
return cljs.core._nth.call(null,this__12576.v,(this__12576.start + n),not_found);
});
G__12615 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12615__12619.call(this,coll,n);
case  3 :
return G__12615__12620.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12615;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12579 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12579.meta);
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
var subvec__12637 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12638 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12637.call(this,v,start);
case  3 :
return subvec__12638.call(this,v,start,end);
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
var this__12656 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12661 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12661.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12666 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12668 = this;
return cljs.core._first.call(null,this__12668.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12670 = this;
var temp__3695__auto____12672 = cljs.core.next.call(null,this__12670.front);

if(cljs.core.truth_(temp__3695__auto____12672))
{var f1__12673 = temp__3695__auto____12672;

return (new cljs.core.PersistentQueueSeq(this__12670.meta,f1__12673,this__12670.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12670.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12670.meta,this__12670.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12680 = this;
return this__12680.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12682 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12682.front,this__12682.rear));
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
var this__12709 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12712 = this;
if(cljs.core.truth_(this__12712.front))
{return (new cljs.core.PersistentQueue(this__12712.meta,(this__12712.count + 1),this__12712.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12714 = this__12712.rear;

if(cljs.core.truth_(or__3548__auto____12714))
{return or__3548__auto____12714;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12712.meta,(this__12712.count + 1),cljs.core.conj.call(null,this__12712.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12718 = this;
var rear__12722 = cljs.core.seq.call(null,this__12718.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12724 = this__12718.front;

if(cljs.core.truth_(or__3548__auto____12724))
{return or__3548__auto____12724;
} else
{return rear__12722;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12718.front,cljs.core.seq.call(null,rear__12722)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12728 = this;
return this__12728.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12729 = this;
return cljs.core._first.call(null,this__12729.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12733 = this;
if(cljs.core.truth_(this__12733.front))
{var temp__3695__auto____12736 = cljs.core.next.call(null,this__12733.front);

if(cljs.core.truth_(temp__3695__auto____12736))
{var f1__12738 = temp__3695__auto____12736;

return (new cljs.core.PersistentQueue(this__12733.meta,(this__12733.count - 1),f1__12738,this__12733.rear));
} else
{return (new cljs.core.PersistentQueue(this__12733.meta,(this__12733.count - 1),cljs.core.seq.call(null,this__12733.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12743 = this;
return cljs.core.first.call(null,this__12743.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12745 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12748 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12751 = this;
return (new cljs.core.PersistentQueue(meta,this__12751.count,this__12751.front,this__12751.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12765 = this;
return this__12765.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12771 = this;
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
var this__12807 = this;
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
var len__12814 = array.length;

var i__12815 = 0;

while(true){
if(cljs.core.truth_((i__12815 < len__12814)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12815]))))
{return i__12815;
} else
{{
var G__12816 = (i__12815 + incr);
i__12815 = G__12816;
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
var obj_map_contains_key_QMARK___12820 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12821 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12818 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12818))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12818;
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
return obj_map_contains_key_QMARK___12820.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12821.call(this,k,strobj,true_val,false_val);
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
var this__12846 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13008 = null;
var G__13008__13009 = (function (coll,k){
var this__12848 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13008__13010 = (function (coll,k,not_found){
var this__12849 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12849.strobj,(this__12849.strobj[k]),not_found);
});
G__13008 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13008__13009.call(this,coll,k);
case  3 :
return G__13008__13010.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13008;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12872 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12876 = goog.object.clone.call(null,this__12872.strobj);
var overwrite_QMARK___12878 = new_strobj__12876.hasOwnProperty(k);

(new_strobj__12876[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12878))
{return (new cljs.core.ObjMap(this__12872.meta,this__12872.keys,new_strobj__12876));
} else
{var new_keys__12883 = cljs.core.aclone.call(null,this__12872.keys);

new_keys__12883.push(k);
return (new cljs.core.ObjMap(this__12872.meta,new_keys__12883,new_strobj__12876));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12872.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12889 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12889.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13015 = null;
var G__13015__13016 = (function (coll,k){
var this__12892 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13015__13017 = (function (coll,k,not_found){
var this__12895 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13015 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13015__13016.call(this,coll,k);
case  3 :
return G__13015__13017.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13015;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12951 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12954 = this;
if(cljs.core.truth_((this__12954.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12829_SHARP_){
return cljs.core.vector.call(null,p1__12829_SHARP_,(this__12954.strobj[p1__12829_SHARP_]));
}),this__12954.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12955 = this;
return this__12955.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12956 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12957 = this;
return (new cljs.core.ObjMap(meta,this__12957.keys,this__12957.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12962 = this;
return this__12962.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12963 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12963.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12964 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12984 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12984))
{return this__12964.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12984;
}
})()))
{var new_keys__12987 = cljs.core.aclone.call(null,this__12964.keys);
var new_strobj__13007 = goog.object.clone.call(null,this__12964.strobj);

new_keys__12987.splice(cljs.core.scan_array.call(null,1,k,new_keys__12987),1);
cljs.core.js_delete.call(null,new_strobj__13007,k);
return (new cljs.core.ObjMap(this__12964.meta,new_keys__12987,new_strobj__13007));
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
var this__13110 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13285 = null;
var G__13285__13286 = (function (coll,k){
var this__13111 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13285__13287 = (function (coll,k,not_found){
var this__13112 = this;
var bucket__13113 = (this__13112.hashobj[cljs.core.hash.call(null,k)]);
var i__13114 = (cljs.core.truth_(bucket__13113)?cljs.core.scan_array.call(null,2,k,bucket__13113):null);

if(cljs.core.truth_(i__13114))
{return (bucket__13113[(i__13114 + 1)]);
} else
{return not_found;
}
});
G__13285 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13285__13286.call(this,coll,k);
case  3 :
return G__13285__13287.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13285;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13115 = this;
var h__13116 = cljs.core.hash.call(null,k);
var bucket__13117 = (this__13115.hashobj[h__13116]);

if(cljs.core.truth_(bucket__13117))
{var new_bucket__13118 = cljs.core.aclone.call(null,bucket__13117);
var new_hashobj__13120 = goog.object.clone.call(null,this__13115.hashobj);

(new_hashobj__13120[h__13116] = new_bucket__13118);
var temp__3695__auto____13122 = cljs.core.scan_array.call(null,2,k,new_bucket__13118);

if(cljs.core.truth_(temp__3695__auto____13122))
{var i__13123 = temp__3695__auto____13122;

(new_bucket__13118[(i__13123 + 1)] = v);
return (new cljs.core.HashMap(this__13115.meta,this__13115.count,new_hashobj__13120));
} else
{new_bucket__13118.push(k,v);
return (new cljs.core.HashMap(this__13115.meta,(this__13115.count + 1),new_hashobj__13120));
}
} else
{var new_hashobj__13126 = goog.object.clone.call(null,this__13115.hashobj);

(new_hashobj__13126[h__13116] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13115.meta,(this__13115.count + 1),new_hashobj__13126));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13127 = this;
var bucket__13128 = (this__13127.hashobj[cljs.core.hash.call(null,k)]);
var i__13129 = (cljs.core.truth_(bucket__13128)?cljs.core.scan_array.call(null,2,k,bucket__13128):null);

if(cljs.core.truth_(i__13129))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13307 = null;
var G__13307__13308 = (function (coll,k){
var this__13236 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13307__13309 = (function (coll,k,not_found){
var this__13239 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13307 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13307__13308.call(this,coll,k);
case  3 :
return G__13307__13309.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13307;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13241 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13244 = this;
if(cljs.core.truth_((this__13244.count > 0)))
{var hashes__13246 = cljs.core.js_keys.call(null,this__13244.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13050_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13244.hashobj[p1__13050_SHARP_])));
}),hashes__13246);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13248 = this;
return this__13248.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13249 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13251 = this;
return (new cljs.core.HashMap(meta,this__13251.count,this__13251.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13252 = this;
return this__13252.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13253 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13253.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13265 = this;
var h__13267 = cljs.core.hash.call(null,k);
var bucket__13268 = (this__13265.hashobj[h__13267]);
var i__13269 = (cljs.core.truth_(bucket__13268)?cljs.core.scan_array.call(null,2,k,bucket__13268):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13269)))
{return coll;
} else
{var new_hashobj__13272 = goog.object.clone.call(null,this__13265.hashobj);

if(cljs.core.truth_((3 > bucket__13268.length)))
{cljs.core.js_delete.call(null,new_hashobj__13272,h__13267);
} else
{var new_bucket__13274 = cljs.core.aclone.call(null,bucket__13268);

new_bucket__13274.splice(i__13269,2);
(new_hashobj__13272[h__13267] = new_bucket__13274);
}
return (new cljs.core.HashMap(this__13265.meta,(this__13265.count - 1),new_hashobj__13272));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13358 = ks.length;

var i__13359 = 0;
var out__13360 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13359 < len__13358)))
{{
var G__13405 = (i__13359 + 1);
var G__13406 = cljs.core.assoc.call(null,out__13360,(ks[i__13359]),(vs[i__13359]));
i__13359 = G__13405;
out__13360 = G__13406;
continue;
}
} else
{return out__13360;
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
var in$__13407 = cljs.core.seq.call(null,keyvals);
var out__13408 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13407))
{{
var G__13411 = cljs.core.nnext.call(null,in$__13407);
var G__13412 = cljs.core.assoc.call(null,out__13408,cljs.core.first.call(null,in$__13407),cljs.core.second.call(null,in$__13407));
in$__13407 = G__13411;
out__13408 = G__13412;
continue;
}
} else
{return out__13408;
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
hash_map.cljs$lang$applyTo = (function (arglist__13415){
var keyvals = cljs.core.seq( arglist__13415 );;
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
{return cljs.core.reduce.call(null,(function (p1__13419_SHARP_,p2__13420_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13430 = p1__13419_SHARP_;

if(cljs.core.truth_(or__3548__auto____13430))
{return or__3548__auto____13430;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13420_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13432){
var maps = cljs.core.seq( arglist__13432 );;
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
{var merge_entry__13440 = (function (m,e){
var k__13434 = cljs.core.first.call(null,e);
var v__13437 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13434)))
{return cljs.core.assoc.call(null,m,k__13434,f.call(null,cljs.core.get.call(null,m,k__13434),v__13437));
} else
{return cljs.core.assoc.call(null,m,k__13434,v__13437);
}
});
var merge2__13446 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13440,(function (){var or__3548__auto____13443 = m1;

if(cljs.core.truth_(or__3548__auto____13443))
{return or__3548__auto____13443;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13446,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13458){
var f = cljs.core.first(arglist__13458);
var maps = cljs.core.rest(arglist__13458);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13467 = cljs.core.ObjMap.fromObject([],{});
var keys__13497 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13497))
{var key__13499 = cljs.core.first.call(null,keys__13497);
var entry__13501 = cljs.core.get.call(null,map,key__13499,"﷐'user/not-found");

{
var G__13509 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13501,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13467,key__13499,entry__13501):ret__13467);
var G__13510 = cljs.core.next.call(null,keys__13497);
ret__13467 = G__13509;
keys__13497 = G__13510;
continue;
}
} else
{return ret__13467;
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
var this__13521 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13579 = null;
var G__13579__13580 = (function (coll,v){
var this__13524 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13579__13581 = (function (coll,v,not_found){
var this__13525 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13525.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13579 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13579__13580.call(this,coll,v);
case  3 :
return G__13579__13581.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13579;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13583 = null;
var G__13583__13584 = (function (coll,k){
var this__13527 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13583__13585 = (function (coll,k,not_found){
var this__13530 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13583 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13583__13584.call(this,coll,k);
case  3 :
return G__13583__13585.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13583;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13535 = this;
return (new cljs.core.Set(this__13535.meta,cljs.core.assoc.call(null,this__13535.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13539 = this;
return cljs.core.keys.call(null,this__13539.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13543 = this;
return (new cljs.core.Set(this__13543.meta,cljs.core.dissoc.call(null,this__13543.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13545 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13548 = this;
var and__3546__auto____13550 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13550))
{var and__3546__auto____13556 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13556))
{return cljs.core.every_QMARK_.call(null,(function (p1__13462_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13462_SHARP_);
}),other);
} else
{return and__3546__auto____13556;
}
} else
{return and__3546__auto____13550;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13567 = this;
return (new cljs.core.Set(meta,this__13567.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13569 = this;
return this__13569.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13570 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13570.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13614 = cljs.core.seq.call(null,coll);
var out__13632 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13614))))
{{
var G__13635 = cljs.core.rest.call(null,in$__13614);
var G__13636 = cljs.core.conj.call(null,out__13632,cljs.core.first.call(null,in$__13614));
in$__13614 = G__13635;
out__13632 = G__13636;
continue;
}
} else
{return out__13632;
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
{var n__13637 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13638 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13638))
{var e__13639 = temp__3695__auto____13638;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13639));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13637,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13611_SHARP_){
var temp__3695__auto____13642 = cljs.core.find.call(null,smap,p1__13611_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13642))
{var e__13643 = temp__3695__auto____13642;

return cljs.core.second.call(null,e__13643);
} else
{return p1__13611_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13675 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13663,seen){
while(true){
var vec__13664__13665 = p__13663;
var f__13666 = cljs.core.nth.call(null,vec__13664__13665,0,null);
var xs__13667 = vec__13664__13665;

var temp__3698__auto____13669 = cljs.core.seq.call(null,xs__13667);

if(cljs.core.truth_(temp__3698__auto____13669))
{var s__13673 = temp__3698__auto____13669;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13666)))
{{
var G__13678 = cljs.core.rest.call(null,s__13673);
var G__13680 = seen;
p__13663 = G__13678;
seen = G__13680;
continue;
}
} else
{return cljs.core.cons.call(null,f__13666,step.call(null,cljs.core.rest.call(null,s__13673),cljs.core.conj.call(null,seen,f__13666)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13675.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13693 = cljs.core.Vector.fromArray([]);
var s__13694 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13694)))
{{
var G__13700 = cljs.core.conj.call(null,ret__13693,cljs.core.first.call(null,s__13694));
var G__13701 = cljs.core.next.call(null,s__13694);
ret__13693 = G__13700;
s__13694 = G__13701;
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
{if(cljs.core.truth_((function (){var or__3548__auto____13705 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13705))
{return or__3548__auto____13705;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13707 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13707 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13707 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13715 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13715))
{return or__3548__auto____13715;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13721 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13721 > -1)))
{return cljs.core.subs.call(null,x,2,i__13721);
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
var map__13726 = cljs.core.ObjMap.fromObject([],{});
var ks__13728 = cljs.core.seq.call(null,keys);
var vs__13730 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13733 = ks__13728;

if(cljs.core.truth_(and__3546__auto____13733))
{return vs__13730;
} else
{return and__3546__auto____13733;
}
})()))
{{
var G__13751 = cljs.core.assoc.call(null,map__13726,cljs.core.first.call(null,ks__13728),cljs.core.first.call(null,vs__13730));
var G__13752 = cljs.core.next.call(null,ks__13728);
var G__13753 = cljs.core.next.call(null,vs__13730);
map__13726 = G__13751;
ks__13728 = G__13752;
vs__13730 = G__13753;
continue;
}
} else
{return map__13726;
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
var max_key__13767 = (function (k,x){
return x;
});
var max_key__13768 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13769 = (function() { 
var G__13773__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13723_SHARP_,p2__13724_SHARP_){
return max_key.call(null,k,p1__13723_SHARP_,p2__13724_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13773 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13773__delegate.call(this, k, x, y, more);
};
G__13773.cljs$lang$maxFixedArity = 3;
G__13773.cljs$lang$applyTo = (function (arglist__13779){
var k = cljs.core.first(arglist__13779);
var x = cljs.core.first(cljs.core.next(arglist__13779));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13779)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13779)));
return G__13773__delegate.call(this, k, x, y, more);
});
return G__13773;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13767.call(this,k,x);
case  3 :
return max_key__13768.call(this,k,x,y);
default:
return max_key__13769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13769.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13811 = (function (k,x){
return x;
});
var min_key__13812 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13813 = (function() { 
var G__13815__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13755_SHARP_,p2__13756_SHARP_){
return min_key.call(null,k,p1__13755_SHARP_,p2__13756_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13815 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13815__delegate.call(this, k, x, y, more);
};
G__13815.cljs$lang$maxFixedArity = 3;
G__13815.cljs$lang$applyTo = (function (arglist__13818){
var k = cljs.core.first(arglist__13818);
var x = cljs.core.first(cljs.core.next(arglist__13818));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13818)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13818)));
return G__13815__delegate.call(this, k, x, y, more);
});
return G__13815;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13811.call(this,k,x);
case  3 :
return min_key__13812.call(this,k,x,y);
default:
return min_key__13813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13813.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13837 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13838 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13835 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13835))
{var s__13836 = temp__3698__auto____13835;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13836),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13836)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13837.call(this,n,step);
case  3 :
return partition_all__13838.call(this,n,step,coll);
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
var temp__3698__auto____13856 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13856))
{var s__13858 = temp__3698__auto____13856;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13858))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13858),take_while.call(null,pred,cljs.core.rest.call(null,s__13858)));
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
var this__13889 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13892 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13945 = null;
var G__13945__13947 = (function (rng,f){
var this__13894 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13945__13948 = (function (rng,f,s){
var this__13898 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13945 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13945__13947.call(this,rng,f);
case  3 :
return G__13945__13948.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13945;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13900 = this;
var comp__13904 = (cljs.core.truth_((this__13900.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13904.call(null,this__13900.start,this__13900.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13910 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13910.end - this__13910.start) / this__13910.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13912 = this;
return this__13912.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13916 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13916.meta,(this__13916.start + this__13916.step),this__13916.end,this__13916.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13925 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13927 = this;
return (new cljs.core.Range(meta,this__13927.start,this__13927.end,this__13927.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13929 = this;
return this__13929.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13967 = null;
var G__13967__13969 = (function (rng,n){
var this__13930 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13930.start + (n * this__13930.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13931 = (this__13930.start > this__13930.end);

if(cljs.core.truth_(and__3546__auto____13931))
{return cljs.core._EQ_.call(null,this__13930.step,0);
} else
{return and__3546__auto____13931;
}
})()))
{return this__13930.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13967__13970 = (function (rng,n,not_found){
var this__13932 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13932.start + (n * this__13932.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13935 = (this__13932.start > this__13932.end);

if(cljs.core.truth_(and__3546__auto____13935))
{return cljs.core._EQ_.call(null,this__13932.step,0);
} else
{return and__3546__auto____13935;
}
})()))
{return this__13932.start;
} else
{return not_found;
}
}
});
G__13967 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13967__13969.call(this,rng,n);
case  3 :
return G__13967__13970.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13967;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13942 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13942.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13983 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13984 = (function (end){
return range.call(null,0,end,1);
});
var range__13985 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13986 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13983.call(this);
case  1 :
return range__13984.call(this,start);
case  2 :
return range__13985.call(this,start,end);
case  3 :
return range__13986.call(this,start,end,step);
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
var temp__3698__auto____13994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13994))
{var s__13995 = temp__3698__auto____13994;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13995),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13995)));
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
var temp__3698__auto____13997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13997))
{var s__13998 = temp__3698__auto____13997;

var fst__13999 = cljs.core.first.call(null,s__13998);
var fv__14000 = f.call(null,fst__13999);
var run__14003 = cljs.core.cons.call(null,fst__13999,cljs.core.take_while.call(null,(function (p1__13996_SHARP_){
return cljs.core._EQ_.call(null,fv__14000,f.call(null,p1__13996_SHARP_));
}),cljs.core.next.call(null,s__13998)));

return cljs.core.cons.call(null,run__14003,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14003),s__13998))));
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
var reductions__14045 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14035 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14035))
{var s__14037 = temp__3695__auto____14035;

return reductions.call(null,f,cljs.core.first.call(null,s__14037),cljs.core.rest.call(null,s__14037));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14046 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14040 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14040))
{var s__14042 = temp__3698__auto____14040;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14042)),cljs.core.rest.call(null,s__14042));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14045.call(this,f,init);
case  3 :
return reductions__14046.call(this,f,init,coll);
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
var juxt__14078 = (function (f){
return (function() {
var G__14083 = null;
var G__14083__14084 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14083__14085 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14083__14086 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14083__14087 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14083__14088 = (function() { 
var G__14092__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14092__delegate.call(this, x, y, z, args);
};
G__14092.cljs$lang$maxFixedArity = 3;
G__14092.cljs$lang$applyTo = (function (arglist__14093){
var x = cljs.core.first(arglist__14093);
var y = cljs.core.first(cljs.core.next(arglist__14093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14093)));
return G__14092__delegate.call(this, x, y, z, args);
});
return G__14092;
})()
;
G__14083 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14083__14084.call(this);
case  1 :
return G__14083__14085.call(this,x);
case  2 :
return G__14083__14086.call(this,x,y);
case  3 :
return G__14083__14087.call(this,x,y,z);
default:
return G__14083__14088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14083.cljs$lang$maxFixedArity = 3;
G__14083.cljs$lang$applyTo = G__14083__14088.cljs$lang$applyTo;
return G__14083;
})()
});
var juxt__14079 = (function (f,g){
return (function() {
var G__14097 = null;
var G__14097__14100 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14097__14101 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14097__14102 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14097__14104 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14097__14105 = (function() { 
var G__14109__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14109 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14109__delegate.call(this, x, y, z, args);
};
G__14109.cljs$lang$maxFixedArity = 3;
G__14109.cljs$lang$applyTo = (function (arglist__14121){
var x = cljs.core.first(arglist__14121);
var y = cljs.core.first(cljs.core.next(arglist__14121));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14121)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14121)));
return G__14109__delegate.call(this, x, y, z, args);
});
return G__14109;
})()
;
G__14097 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14097__14100.call(this);
case  1 :
return G__14097__14101.call(this,x);
case  2 :
return G__14097__14102.call(this,x,y);
case  3 :
return G__14097__14104.call(this,x,y,z);
default:
return G__14097__14105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14097.cljs$lang$maxFixedArity = 3;
G__14097.cljs$lang$applyTo = G__14097__14105.cljs$lang$applyTo;
return G__14097;
})()
});
var juxt__14080 = (function (f,g,h){
return (function() {
var G__14123 = null;
var G__14123__14124 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14123__14125 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14123__14126 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14123__14127 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14123__14128 = (function() { 
var G__14142__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14142 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14142__delegate.call(this, x, y, z, args);
};
G__14142.cljs$lang$maxFixedArity = 3;
G__14142.cljs$lang$applyTo = (function (arglist__14144){
var x = cljs.core.first(arglist__14144);
var y = cljs.core.first(cljs.core.next(arglist__14144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14144)));
return G__14142__delegate.call(this, x, y, z, args);
});
return G__14142;
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
});
var juxt__14081 = (function() { 
var G__14146__delegate = function (f,g,h,fs){
var fs__14066 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14147 = null;
var G__14147__14148 = (function (){
return cljs.core.reduce.call(null,(function (p1__14020_SHARP_,p2__14021_SHARP_){
return cljs.core.conj.call(null,p1__14020_SHARP_,p2__14021_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14066);
});
var G__14147__14149 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14022_SHARP_,p2__14023_SHARP_){
return cljs.core.conj.call(null,p1__14022_SHARP_,p2__14023_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14066);
});
var G__14147__14150 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14024_SHARP_,p2__14025_SHARP_){
return cljs.core.conj.call(null,p1__14024_SHARP_,p2__14025_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14066);
});
var G__14147__14152 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14026_SHARP_,p2__14028_SHARP_){
return cljs.core.conj.call(null,p1__14026_SHARP_,p2__14028_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14066);
});
var G__14147__14153 = (function() { 
var G__14237__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14029_SHARP_,p2__14030_SHARP_){
return cljs.core.conj.call(null,p1__14029_SHARP_,cljs.core.apply.call(null,p2__14030_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14066);
};
var G__14237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14237__delegate.call(this, x, y, z, args);
};
G__14237.cljs$lang$maxFixedArity = 3;
G__14237.cljs$lang$applyTo = (function (arglist__14238){
var x = cljs.core.first(arglist__14238);
var y = cljs.core.first(cljs.core.next(arglist__14238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14238)));
return G__14237__delegate.call(this, x, y, z, args);
});
return G__14237;
})()
;
G__14147 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14147__14148.call(this);
case  1 :
return G__14147__14149.call(this,x);
case  2 :
return G__14147__14150.call(this,x,y);
case  3 :
return G__14147__14152.call(this,x,y,z);
default:
return G__14147__14153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14147.cljs$lang$maxFixedArity = 3;
G__14147.cljs$lang$applyTo = G__14147__14153.cljs$lang$applyTo;
return G__14147;
})()
};
var G__14146 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14146__delegate.call(this, f, g, h, fs);
};
G__14146.cljs$lang$maxFixedArity = 3;
G__14146.cljs$lang$applyTo = (function (arglist__14240){
var f = cljs.core.first(arglist__14240);
var g = cljs.core.first(cljs.core.next(arglist__14240));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14240)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14240)));
return G__14146__delegate.call(this, f, g, h, fs);
});
return G__14146;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14078.call(this,f);
case  2 :
return juxt__14079.call(this,f,g);
case  3 :
return juxt__14080.call(this,f,g,h);
default:
return juxt__14081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14081.cljs$lang$applyTo;
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
var dorun__14249 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14252 = cljs.core.next.call(null,coll);
coll = G__14252;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14250 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14242 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14242))
{return (n > 0);
} else
{return and__3546__auto____14242;
}
})()))
{{
var G__14253 = (n - 1);
var G__14254 = cljs.core.next.call(null,coll);
n = G__14253;
coll = G__14254;
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
return dorun__14249.call(this,n);
case  2 :
return dorun__14250.call(this,n,coll);
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
var doall__14259 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14260 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14259.call(this,n);
case  2 :
return doall__14260.call(this,n,coll);
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
var matches__14267 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14267),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14267),1)))
{return cljs.core.first.call(null,matches__14267);
} else
{return cljs.core.vec.call(null,matches__14267);
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
var matches__14292 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14292)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14292),1)))
{return cljs.core.first.call(null,matches__14292);
} else
{return cljs.core.vec.call(null,matches__14292);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14306 = cljs.core.re_find.call(null,re,s);
var match_idx__14307 = s.search(re);
var match_str__14308 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14306))?cljs.core.first.call(null,match_data__14306):match_data__14306);
var post_match__14310 = cljs.core.subs.call(null,s,(match_idx__14307 + cljs.core.count.call(null,match_str__14308)));

if(cljs.core.truth_(match_data__14306))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14306,re_seq.call(null,re,post_match__14310));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14323_SHARP_){
return print_one.call(null,p1__14323_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14338 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14338))
{var and__3546__auto____14350 = (function (){var x__445__auto____14340 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14341 = x__445__auto____14340;

if(cljs.core.truth_(and__3546__auto____14341))
{var and__3546__auto____14346 = x__445__auto____14340.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14346))
{return cljs.core.not.call(null,x__445__auto____14340.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14346;
}
} else
{return and__3546__auto____14341;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14340);
}
})();

if(cljs.core.truth_(and__3546__auto____14350))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14350;
}
} else
{return and__3546__auto____14338;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14354 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14356 = x__445__auto____14354;

if(cljs.core.truth_(and__3546__auto____14356))
{var and__3546__auto____14357 = x__445__auto____14354.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14357))
{return cljs.core.not.call(null,x__445__auto____14354.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14357;
}
} else
{return and__3546__auto____14356;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14354);
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
var first_obj__14386 = cljs.core.first.call(null,objs);
var sb__14387 = (new goog.string.StringBuffer());

var G__14388__14390 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14388__14390))
{var obj__14392 = cljs.core.first.call(null,G__14388__14390);
var G__14388__14393 = G__14388__14390;

while(true){
if(cljs.core.truth_((obj__14392 === first_obj__14386)))
{} else
{sb__14387.append(" ");
}
var G__14398__14400 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14392,opts));

if(cljs.core.truth_(G__14398__14400))
{var string__14405 = cljs.core.first.call(null,G__14398__14400);
var G__14398__14408 = G__14398__14400;

while(true){
sb__14387.append(string__14405);
var temp__3698__auto____14413 = cljs.core.next.call(null,G__14398__14408);

if(cljs.core.truth_(temp__3698__auto____14413))
{var G__14398__14415 = temp__3698__auto____14413;

{
var G__14448 = cljs.core.first.call(null,G__14398__14415);
var G__14449 = G__14398__14415;
string__14405 = G__14448;
G__14398__14408 = G__14449;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14419 = cljs.core.next.call(null,G__14388__14393);

if(cljs.core.truth_(temp__3698__auto____14419))
{var G__14388__14421 = temp__3698__auto____14419;

{
var G__14450 = cljs.core.first.call(null,G__14388__14421);
var G__14451 = G__14388__14421;
obj__14392 = G__14450;
G__14388__14393 = G__14451;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14387);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14530 = cljs.core.first.call(null,objs);

var G__14531__14532 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14531__14532))
{var obj__14533 = cljs.core.first.call(null,G__14531__14532);
var G__14531__14534 = G__14531__14532;

while(true){
if(cljs.core.truth_((obj__14533 === first_obj__14530)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14535__14536 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14533,opts));

if(cljs.core.truth_(G__14535__14536))
{var string__14538 = cljs.core.first.call(null,G__14535__14536);
var G__14535__14539 = G__14535__14536;

while(true){
cljs.core.string_print.call(null,string__14538);
var temp__3698__auto____14541 = cljs.core.next.call(null,G__14535__14539);

if(cljs.core.truth_(temp__3698__auto____14541))
{var G__14535__14543 = temp__3698__auto____14541;

{
var G__14554 = cljs.core.first.call(null,G__14535__14543);
var G__14555 = G__14535__14543;
string__14538 = G__14554;
G__14535__14539 = G__14555;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14546 = cljs.core.next.call(null,G__14531__14534);

if(cljs.core.truth_(temp__3698__auto____14546))
{var G__14531__14549 = temp__3698__auto____14546;

{
var G__14556 = cljs.core.first.call(null,G__14531__14549);
var G__14557 = G__14531__14549;
obj__14533 = G__14556;
G__14531__14534 = G__14557;
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
pr_str.cljs$lang$applyTo = (function (arglist__14573){
var objs = cljs.core.seq( arglist__14573 );;
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
pr.cljs$lang$applyTo = (function (arglist__14645){
var objs = cljs.core.seq( arglist__14645 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14680){
var objs = cljs.core.seq( arglist__14680 );;
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
println.cljs$lang$applyTo = (function (arglist__14684){
var objs = cljs.core.seq( arglist__14684 );;
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
prn.cljs$lang$applyTo = (function (arglist__14688){
var objs = cljs.core.seq( arglist__14688 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14697 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14697,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14705 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14705))
{var nspc__14707 = temp__3698__auto____14705;

return cljs.core.str.call(null,nspc__14707,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14708 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14708))
{var nspc__14709 = temp__3698__auto____14708;

return cljs.core.str.call(null,nspc__14709,"/");
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
var pr_pair__14717 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14717,"{",", ","}",opts,coll);
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
var this__14738 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14739 = this;
var G__14741__14742 = cljs.core.seq.call(null,this__14739.watches);

if(cljs.core.truth_(G__14741__14742))
{var G__14744__14746 = cljs.core.first.call(null,G__14741__14742);
var vec__14745__14747 = G__14744__14746;
var key__14748 = cljs.core.nth.call(null,vec__14745__14747,0,null);
var f__14749 = cljs.core.nth.call(null,vec__14745__14747,1,null);
var G__14741__14750 = G__14741__14742;

var G__14744__14751 = G__14744__14746;
var G__14741__14752 = G__14741__14750;

while(true){
var vec__14753__14754 = G__14744__14751;
var key__14755 = cljs.core.nth.call(null,vec__14753__14754,0,null);
var f__14756 = cljs.core.nth.call(null,vec__14753__14754,1,null);
var G__14741__14757 = G__14741__14752;

f__14756.call(null,key__14755,this$,oldval,newval);
var temp__3698__auto____14758 = cljs.core.next.call(null,G__14741__14757);

if(cljs.core.truth_(temp__3698__auto____14758))
{var G__14741__14759 = temp__3698__auto____14758;

{
var G__14774 = cljs.core.first.call(null,G__14741__14759);
var G__14775 = G__14741__14759;
G__14744__14751 = G__14774;
G__14741__14752 = G__14775;
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
var this__14760 = this;
return this$.watches = cljs.core.assoc.call(null,this__14760.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14761 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14761.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14762 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14762.state,opts),">");
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
var this__14766 = this;
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
var atom__14786 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14787 = (function() { 
var G__14789__delegate = function (x,p__14776){
var map__14777__14778 = p__14776;
var map__14777__14779 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14777__14778))?cljs.core.apply.call(null,cljs.core.hash_map,map__14777__14778):map__14777__14778);
var validator__14780 = cljs.core.get.call(null,map__14777__14779,"﷐'validator");
var meta__14781 = cljs.core.get.call(null,map__14777__14779,"﷐'meta");

return (new cljs.core.Atom(x,meta__14781,validator__14780,null));
};
var G__14789 = function (x,var_args){
var p__14776 = null;
if (goog.isDef(var_args)) {
  p__14776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14789__delegate.call(this, x, p__14776);
};
G__14789.cljs$lang$maxFixedArity = 1;
G__14789.cljs$lang$applyTo = (function (arglist__14794){
var x = cljs.core.first(arglist__14794);
var p__14776 = cljs.core.rest(arglist__14794);
return G__14789__delegate.call(this, x, p__14776);
});
return G__14789;
})()
;
atom = function(x,var_args){
var p__14776 = var_args;
switch(arguments.length){
case  1 :
return atom__14786.call(this,x);
default:
return atom__14787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14787.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14808 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14808))
{var validate__14811 = temp__3698__auto____14808;

if(cljs.core.truth_(validate__14811.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14814 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14814,new_value);
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
var swap_BANG___14823 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14824 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14825 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14826 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14827 = (function() { 
var G__14830__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14830 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14830__delegate.call(this, a, f, x, y, z, more);
};
G__14830.cljs$lang$maxFixedArity = 5;
G__14830.cljs$lang$applyTo = (function (arglist__14833){
var a = cljs.core.first(arglist__14833);
var f = cljs.core.first(cljs.core.next(arglist__14833));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14833)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14833))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14833)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14833)))));
return G__14830__delegate.call(this, a, f, x, y, z, more);
});
return G__14830;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14823.call(this,a,f);
case  3 :
return swap_BANG___14824.call(this,a,f,x);
case  4 :
return swap_BANG___14825.call(this,a,f,x,y);
case  5 :
return swap_BANG___14826.call(this,a,f,x,y,z);
default:
return swap_BANG___14827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14827.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14898){
var iref = cljs.core.first(arglist__14898);
var f = cljs.core.first(cljs.core.next(arglist__14898));
var args = cljs.core.rest(cljs.core.next(arglist__14898));
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
var gensym__14907 = (function (){
return gensym.call(null,"G__");
});
var gensym__14908 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14907.call(this);
case  1 :
return gensym__14908.call(this,prefix_string);
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
var this__14911 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14911.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14913 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14913.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14913.state,this__14913.f);
}
return cljs.core.deref.call(null,this__14913.state);
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
delay.cljs$lang$applyTo = (function (arglist__14936){
var body = cljs.core.seq( arglist__14936 );;
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
var map__15018__15020 = options;
var map__15018__15021 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15018__15020))?cljs.core.apply.call(null,cljs.core.hash_map,map__15018__15020):map__15018__15020);
var keywordize_keys__15022 = cljs.core.get.call(null,map__15018__15021,"﷐'keywordize-keys");
var keyfn__15023 = (cljs.core.truth_(keywordize_keys__15022)?cljs.core.keyword:cljs.core.str);
var f__15037 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15036 = (function iter__15025(s__15026){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15026__15031 = s__15026;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15026__15031)))
{var k__15034 = cljs.core.first.call(null,s__15026__15031);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15023.call(null,k__15034),thisfn.call(null,(x[k__15034]))]),iter__15025.call(null,cljs.core.rest.call(null,s__15026__15031)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15036.call(null,cljs.core.js_keys.call(null,x));
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

return f__15037.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15041){
var x = cljs.core.first(arglist__15041);
var options = cljs.core.rest(arglist__15041);
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
var mem__15043 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15048__delegate = function (args){
var temp__3695__auto____15045 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15043),args);

if(cljs.core.truth_(temp__3695__auto____15045))
{var v__15046 = temp__3695__auto____15045;

return v__15046;
} else
{var ret__15047 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15043,cljs.core.assoc,args,ret__15047);
return ret__15047;
}
};
var G__15048 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15048__delegate.call(this, args);
};
G__15048.cljs$lang$maxFixedArity = 0;
G__15048.cljs$lang$applyTo = (function (arglist__15049){
var args = cljs.core.seq( arglist__15049 );;
return G__15048__delegate.call(this, args);
});
return G__15048;
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
var trampoline__15067 = (function (f){
while(true){
var ret__15050 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15050)))
{{
var G__15071 = ret__15050;
f = G__15071;
continue;
}
} else
{return ret__15050;
}
break;
}
});
var trampoline__15068 = (function() { 
var G__15072__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15072 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15072__delegate.call(this, f, args);
};
G__15072.cljs$lang$maxFixedArity = 1;
G__15072.cljs$lang$applyTo = (function (arglist__15073){
var f = cljs.core.first(arglist__15073);
var args = cljs.core.rest(arglist__15073);
return G__15072__delegate.call(this, f, args);
});
return G__15072;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15067.call(this,f);
default:
return trampoline__15068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15068.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15080 = (function (){
return rand.call(null,1);
});
var rand__15081 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15080.call(this);
case  1 :
return rand__15081.call(this,n);
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
var k__15113 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15113,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15113,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15149 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15150 = (function (h,child,parent){
var or__3548__auto____15140 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15140))
{return or__3548__auto____15140;
} else
{var or__3548__auto____15141 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15141))
{return or__3548__auto____15141;
} else
{var and__3546__auto____15142 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15142))
{var and__3546__auto____15143 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15143))
{var and__3546__auto____15144 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15144))
{var ret__15145 = true;
var i__15146 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15147 = cljs.core.not.call(null,ret__15145);

if(cljs.core.truth_(or__3548__auto____15147))
{return or__3548__auto____15147;
} else
{return cljs.core._EQ_.call(null,i__15146,cljs.core.count.call(null,parent));
}
})()))
{return ret__15145;
} else
{{
var G__15157 = isa_QMARK_.call(null,h,child.call(null,i__15146),parent.call(null,i__15146));
var G__15158 = (i__15146 + 1);
ret__15145 = G__15157;
i__15146 = G__15158;
continue;
}
}
break;
}
} else
{return and__3546__auto____15144;
}
} else
{return and__3546__auto____15143;
}
} else
{return and__3546__auto____15142;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15149.call(this,h,child);
case  3 :
return isa_QMARK___15150.call(this,h,child,parent);
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
var parents__15165 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15166 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15165.call(this,h);
case  2 :
return parents__15166.call(this,h,tag);
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
var ancestors__15178 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15179 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15178.call(this,h);
case  2 :
return ancestors__15179.call(this,h,tag);
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
var descendants__15189 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15190 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15189.call(this,h);
case  2 :
return descendants__15190.call(this,h,tag);
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
var derive__15248 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15249 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15201 = "﷐'parents".call(null,h);
var td__15202 = "﷐'descendants".call(null,h);
var ta__15203 = "﷐'ancestors".call(null,h);
var tf__15237 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15242 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15201.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15203.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15203.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15201,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15237.call(null,"﷐'ancestors".call(null,h),tag,td__15202,parent,ta__15203),"﷐'descendants":tf__15237.call(null,"﷐'descendants".call(null,h),parent,ta__15203,tag,td__15202)});
})());

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15248.call(this,h,tag);
case  3 :
return derive__15249.call(this,h,tag,parent);
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
var underive__15292 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15293 = (function (h,tag,parent){
var parentMap__15285 = "﷐'parents".call(null,h);
var childsParents__15286 = (cljs.core.truth_(parentMap__15285.call(null,tag))?cljs.core.disj.call(null,parentMap__15285.call(null,tag),parent):cljs.core.set([]));
var newParents__15287 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15286))?cljs.core.assoc.call(null,parentMap__15285,tag,childsParents__15286):cljs.core.dissoc.call(null,parentMap__15285,tag));
var deriv_seq__15291 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15194_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15194_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15194_SHARP_),cljs.core.second.call(null,p1__15194_SHARP_)));
}),cljs.core.seq.call(null,newParents__15287)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15285.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15195_SHARP_,p2__15197_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15195_SHARP_,p2__15197_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15291));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15292.call(this,h,tag);
case  3 :
return underive__15293.call(this,h,tag,parent);
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
var xprefs__15301 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15306 = (cljs.core.truth_((function (){var and__3546__auto____15305 = xprefs__15301;

if(cljs.core.truth_(and__3546__auto____15305))
{return xprefs__15301.call(null,y);
} else
{return and__3546__auto____15305;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{var or__3548__auto____15309 = (function (){var ps__15307 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15307) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15307),prefer_table)))
{} else
{}
{
var G__15313 = cljs.core.rest.call(null,ps__15307);
ps__15307 = G__15313;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15309))
{return or__3548__auto____15309;
} else
{var or__3548__auto____15311 = (function (){var ps__15310 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15310) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15310),y,prefer_table)))
{} else
{}
{
var G__15314 = cljs.core.rest.call(null,ps__15310);
ps__15310 = G__15314;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15311))
{return or__3548__auto____15311;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15343 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15343))
{return or__3548__auto____15343;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15361 = cljs.core.reduce.call(null,(function (be,p__15351){
var vec__15353__15354 = p__15351;
var k__15355 = cljs.core.nth.call(null,vec__15353__15354,0,null);
var ___15356 = cljs.core.nth.call(null,vec__15353__15354,1,null);
var e__15357 = vec__15353__15354;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15355)))
{var be2__15360 = (cljs.core.truth_((function (){var or__3548__auto____15359 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{return cljs.core.dominates.call(null,k__15355,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15357:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15360),k__15355,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15355," and ",cljs.core.first.call(null,be2__15360),", and neither is preferred")));
}
return be2__15360;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15361))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15361));
return cljs.core.second.call(null,best_entry__15361);
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
if(cljs.core.truth_((function (){var and__3546__auto____15378 = mf;

if(cljs.core.truth_(and__3546__auto____15378))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15378;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15441 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15441))
{return or__3548__auto____15441;
} else
{var or__3548__auto____15443 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15443))
{return or__3548__auto____15443;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15445 = mf;

if(cljs.core.truth_(and__3546__auto____15445))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15445;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15447 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15447))
{return or__3548__auto____15447;
} else
{var or__3548__auto____15449 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15450 = mf;

if(cljs.core.truth_(and__3546__auto____15450))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15450;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15452 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15452))
{return or__3548__auto____15452;
} else
{var or__3548__auto____15454 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15454))
{return or__3548__auto____15454;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15456 = mf;

if(cljs.core.truth_(and__3546__auto____15456))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15456;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15458 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{var or__3548__auto____15459 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15459))
{return or__3548__auto____15459;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15460 = mf;

if(cljs.core.truth_(and__3546__auto____15460))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15460;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15462 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15462))
{return or__3548__auto____15462;
} else
{var or__3548__auto____15463 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15464 = mf;

if(cljs.core.truth_(and__3546__auto____15464))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15464;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15471 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15471))
{return or__3548__auto____15471;
} else
{var or__3548__auto____15472 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15472))
{return or__3548__auto____15472;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15475 = mf;

if(cljs.core.truth_(and__3546__auto____15475))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15475;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15477 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15477))
{return or__3548__auto____15477;
} else
{var or__3548__auto____15478 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15478))
{return or__3548__auto____15478;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15479 = mf;

if(cljs.core.truth_(and__3546__auto____15479))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15479;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15480 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15480))
{return or__3548__auto____15480;
} else
{var or__3548__auto____15481 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15481))
{return or__3548__auto____15481;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15540 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15541 = cljs.core._get_method.call(null,mf,dispatch_val__15540);

if(cljs.core.truth_(target_fn__15541))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15540)));
}
return cljs.core.apply.call(null,target_fn__15541,args);
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
var this__15548 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15550 = this;
cljs.core.swap_BANG_.call(null,this__15550.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15550.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15550.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15550.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15556 = this;
cljs.core.swap_BANG_.call(null,this__15556.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15556.method_cache,this__15556.method_table,this__15556.cached_hierarchy,this__15556.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15557 = this;
cljs.core.swap_BANG_.call(null,this__15557.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15557.method_cache,this__15557.method_table,this__15557.cached_hierarchy,this__15557.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15560 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15560.cached_hierarchy),cljs.core.deref.call(null,this__15560.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15560.method_cache,this__15560.method_table,this__15560.cached_hierarchy,this__15560.hierarchy);
}
var temp__3695__auto____15562 = cljs.core.deref.call(null,this__15560.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15562))
{var target_fn__15563 = temp__3695__auto____15562;

return target_fn__15563;
} else
{var temp__3695__auto____15566 = cljs.core.find_and_cache_best_method.call(null,this__15560.name,dispatch_val,this__15560.hierarchy,this__15560.method_table,this__15560.prefer_table,this__15560.method_cache,this__15560.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15566))
{var target_fn__15567 = temp__3695__auto____15566;

return target_fn__15567;
} else
{return cljs.core.deref.call(null,this__15560.method_table).call(null,this__15560.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15571 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15571.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15571.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15571.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15571.method_cache,this__15571.method_table,this__15571.cached_hierarchy,this__15571.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15577 = this;
return cljs.core.deref.call(null,this__15577.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15580 = this;
return cljs.core.deref.call(null,this__15580.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15582 = this;
return cljs.core.do_dispatch.call(null,mf,this__15582.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15598__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15598 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15598__delegate.call(this, _, args);
};
G__15598.cljs$lang$maxFixedArity = 1;
G__15598.cljs$lang$applyTo = (function (arglist__15600){
var _ = cljs.core.first(arglist__15600);
var args = cljs.core.rest(arglist__15600);
return G__15598__delegate.call(this, _, args);
});
return G__15598;
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
