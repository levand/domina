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
var or__3548__auto____7272 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{var or__3548__auto____7274 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
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
var _invoke__7608 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7385 = this$;

if(cljs.core.truth_(and__3546__auto____7385))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7385;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7609 = (function (this$,a){
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
{var or__3548__auto____7397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7610 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = this$;

if(cljs.core.truth_(and__3546__auto____7399))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7399;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{var or__3548__auto____7403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7611 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{var or__3548__auto____7410 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7612 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7419 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{var or__3548__auto____7457 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7457))
{return or__3548__auto____7457;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7462 = this$;

if(cljs.core.truth_(and__3546__auto____7462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7477 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7477))
{return or__3548__auto____7477;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7480 = this$;

if(cljs.core.truth_(and__3546__auto____7480))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7480;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7489 = this$;

if(cljs.core.truth_(and__3546__auto____7489))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7489;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{var or__3548__auto____7510 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7524 = this$;

if(cljs.core.truth_(and__3546__auto____7524))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7524;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7526 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{var or__3548__auto____7528 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7531 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{var or__3548__auto____7533 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7535 = this$;

if(cljs.core.truth_(and__3546__auto____7535))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7535;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7537 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{var or__3548__auto____7539 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7541 = this$;

if(cljs.core.truth_(and__3546__auto____7541))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7541;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7543 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{var or__3548__auto____7545 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7624 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7547 = this$;

if(cljs.core.truth_(and__3546__auto____7547))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7547;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7549 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7549))
{return or__3548__auto____7549;
} else
{var or__3548__auto____7550 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7550))
{return or__3548__auto____7550;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7553 = this$;

if(cljs.core.truth_(and__3546__auto____7553))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7553;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7555 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
} else
{var or__3548__auto____7556 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7565 = this$;

if(cljs.core.truth_(and__3546__auto____7565))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7565;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7566 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7566))
{return or__3548__auto____7566;
} else
{var or__3548__auto____7568 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7572 = this$;

if(cljs.core.truth_(and__3546__auto____7572))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7572;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7581 = this$;

if(cljs.core.truth_(and__3546__auto____7581))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7581;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7603 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7603))
{return or__3548__auto____7603;
} else
{var or__3548__auto____7605 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
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
return _invoke__7608.call(this,this$);
case  2 :
return _invoke__7609.call(this,this$,a);
case  3 :
return _invoke__7610.call(this,this$,a,b);
case  4 :
return _invoke__7611.call(this,this$,a,b,c);
case  5 :
return _invoke__7612.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7613.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7624.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7625.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7706 = coll;

if(cljs.core.truth_(and__3546__auto____7706))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7706;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7707 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7707))
{return or__3548__auto____7707;
} else
{var or__3548__auto____7708 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7712 = coll;

if(cljs.core.truth_(and__3546__auto____7712))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7712;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7713 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{var or__3548__auto____7714 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7716 = coll;

if(cljs.core.truth_(and__3546__auto____7716))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7716;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7720 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
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
var _nth__7730 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7722 = coll;

if(cljs.core.truth_(and__3546__auto____7722))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7722;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7725 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{var or__3548__auto____7726 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7731 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7727 = coll;

if(cljs.core.truth_(and__3546__auto____7727))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7727;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7728 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{var or__3548__auto____7729 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
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
return _nth__7730.call(this,coll,n);
case  3 :
return _nth__7731.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = coll;

if(cljs.core.truth_(and__3546__auto____7733))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7733;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7734 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7735 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7736 = coll;

if(cljs.core.truth_(and__3546__auto____7736))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7736;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7737 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{var or__3548__auto____7738 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
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
var _lookup__7754 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7742 = o;

if(cljs.core.truth_(and__3546__auto____7742))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7742;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7744 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{var or__3548__auto____7745 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7755 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7748 = o;

if(cljs.core.truth_(and__3546__auto____7748))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7748;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7750 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7750))
{return or__3548__auto____7750;
} else
{var or__3548__auto____7753 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7753))
{return or__3548__auto____7753;
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
return _lookup__7754.call(this,o,k);
case  3 :
return _lookup__7755.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7759 = coll;

if(cljs.core.truth_(and__3546__auto____7759))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7759;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7761 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
} else
{var or__3548__auto____7762 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7762))
{return or__3548__auto____7762;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7765 = coll;

if(cljs.core.truth_(and__3546__auto____7765))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7765;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7767 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
} else
{var or__3548__auto____7768 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7774 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{var or__3548__auto____7777 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = coll;

if(cljs.core.truth_(and__3546__auto____7784))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7784;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7791 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{var or__3548__auto____7792 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7793 = coll;

if(cljs.core.truth_(and__3546__auto____7793))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7793;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7794 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{var or__3548__auto____7795 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = coll;

if(cljs.core.truth_(and__3546__auto____7796))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7796;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7798 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7805 = coll;

if(cljs.core.truth_(and__3546__auto____7805))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7805;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7807 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7807))
{return or__3548__auto____7807;
} else
{var or__3548__auto____7809 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = o;

if(cljs.core.truth_(and__3546__auto____7823))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7823;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7827 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7844 = o;

if(cljs.core.truth_(and__3546__auto____7844))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7844;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7846 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
} else
{var or__3548__auto____7847 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7847))
{return or__3548__auto____7847;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = o;

if(cljs.core.truth_(and__3546__auto____7849))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7849;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7852 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{var or__3548__auto____7853 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7857 = o;

if(cljs.core.truth_(and__3546__auto____7857))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7857;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7859 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
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
var _reduce__7889 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = coll;

if(cljs.core.truth_(and__3546__auto____7872))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7872;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7876 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{var or__3548__auto____7877 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7890 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = coll;

if(cljs.core.truth_(and__3546__auto____7883))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7883;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7886 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{var or__3548__auto____7888 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
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
return _reduce__7889.call(this,coll,f);
case  3 :
return _reduce__7890.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = o;

if(cljs.core.truth_(and__3546__auto____7899))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7899;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7901 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
} else
{var or__3548__auto____7903 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7911 = o;

if(cljs.core.truth_(and__3546__auto____7911))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7911;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7912 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{var or__3548__auto____7915 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7925 = o;

if(cljs.core.truth_(and__3546__auto____7925))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7925;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7929 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{var or__3548__auto____7931 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
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
if(cljs.core.truth_((function (){var and__3546__auto____7937 = o;

if(cljs.core.truth_(and__3546__auto____7937))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7937;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7943 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7943))
{return or__3548__auto____7943;
} else
{var or__3548__auto____7944 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7955 = d;

if(cljs.core.truth_(and__3546__auto____7955))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7955;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7960 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = this$;

if(cljs.core.truth_(and__3546__auto____7969))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7969;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7976 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = this$;

if(cljs.core.truth_(and__3546__auto____7980))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7980;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7984 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = this$;

if(cljs.core.truth_(and__3546__auto____7988))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7988;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8006 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
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
var G__8043 = null;
var G__8043__8044 = (function (o,k){
return null;
});
var G__8043__8045 = (function (o,k,not_found){
return not_found;
});
G__8043 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8043__8044.call(this,o,k);
case  3 :
return G__8043__8045.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8043;
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
var G__8050 = null;
var G__8050__8051 = (function (_,f){
return f.call(null);
});
var G__8050__8052 = (function (_,f,start){
return start;
});
G__8050 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8050__8051.call(this,_,f);
case  3 :
return G__8050__8052.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8050;
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
var G__8064 = null;
var G__8064__8065 = (function (_,n){
return null;
});
var G__8064__8066 = (function (_,n,not_found){
return not_found;
});
G__8064 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8064__8065.call(this,_,n);
case  3 :
return G__8064__8066.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8064;
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
var ci_reduce__8102 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8096 = cljs.core._nth.call(null,cicoll,0);
var n__8097 = 1;

while(true){
if(cljs.core.truth_((n__8097 < cljs.core._count.call(null,cicoll))))
{{
var G__8107 = f.call(null,val__8096,cljs.core._nth.call(null,cicoll,n__8097));
var G__8108 = (n__8097 + 1);
val__8096 = G__8107;
n__8097 = G__8108;
continue;
}
} else
{return val__8096;
}
break;
}
}
});
var ci_reduce__8103 = (function (cicoll,f,val){
var val__8098 = val;
var n__8099 = 0;

while(true){
if(cljs.core.truth_((n__8099 < cljs.core._count.call(null,cicoll))))
{{
var G__8111 = f.call(null,val__8098,cljs.core._nth.call(null,cicoll,n__8099));
var G__8112 = (n__8099 + 1);
val__8098 = G__8111;
n__8099 = G__8112;
continue;
}
} else
{return val__8098;
}
break;
}
});
var ci_reduce__8104 = (function (cicoll,f,val,idx){
var val__8100 = val;
var n__8101 = idx;

while(true){
if(cljs.core.truth_((n__8101 < cljs.core._count.call(null,cicoll))))
{{
var G__8113 = f.call(null,val__8100,cljs.core._nth.call(null,cicoll,n__8101));
var G__8114 = (n__8101 + 1);
val__8100 = G__8113;
n__8101 = G__8114;
continue;
}
} else
{return val__8100;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8102.call(this,cicoll,f);
case  3 :
return ci_reduce__8103.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8104.call(this,cicoll,f,val,idx);
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
var this__8154 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8176 = null;
var G__8176__8177 = (function (_,f){
var this__8156 = this;
return cljs.core.ci_reduce.call(null,this__8156.a,f,(this__8156.a[this__8156.i]),(this__8156.i + 1));
});
var G__8176__8178 = (function (_,f,start){
var this__8157 = this;
return cljs.core.ci_reduce.call(null,this__8157.a,f,start,this__8157.i);
});
G__8176 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8176__8177.call(this,_,f);
case  3 :
return G__8176__8178.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8176;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8159 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8161 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8180 = null;
var G__8180__8181 = (function (coll,n){
var this__8162 = this;
var i__8164 = (n + this__8162.i);

if(cljs.core.truth_((i__8164 < this__8162.a.length)))
{return (this__8162.a[i__8164]);
} else
{return null;
}
});
var G__8180__8182 = (function (coll,n,not_found){
var this__8165 = this;
var i__8166 = (n + this__8165.i);

if(cljs.core.truth_((i__8166 < this__8165.a.length)))
{return (this__8165.a[i__8166]);
} else
{return not_found;
}
});
G__8180 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8180__8181.call(this,coll,n);
case  3 :
return G__8180__8182.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8180;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8169 = this;
return (this__8169.a.length - this__8169.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8170 = this;
return (this__8170.a[this__8170.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8172 = this;
if(cljs.core.truth_(((this__8172.i + 1) < this__8172.a.length)))
{return (new cljs.core.IndexedSeq(this__8172.a,(this__8172.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8175 = this;
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
var G__8201 = null;
var G__8201__8203 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8201__8204 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8201 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8201__8203.call(this,array,f);
case  3 :
return G__8201__8204.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8201;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8206 = null;
var G__8206__8207 = (function (array,k){
return (array[k]);
});
var G__8206__8208 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8206 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8206__8207.call(this,array,k);
case  3 :
return G__8206__8208.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8206;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8210 = null;
var G__8210__8211 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8210__8212 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8210 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8210__8211.call(this,array,n);
case  3 :
return G__8210__8212.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8210;
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
var temp__3698__auto____8214 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8214))
{var s__8215 = temp__3698__auto____8214;

return cljs.core._first.call(null,s__8215);
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
var G__8241 = cljs.core.next.call(null,s);
s = G__8241;
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
var s__8263 = cljs.core.seq.call(null,x);
var n__8264 = 0;

while(true){
if(cljs.core.truth_(s__8263))
{{
var G__8266 = cljs.core.next.call(null,s__8263);
var G__8267 = (n__8264 + 1);
s__8263 = G__8266;
n__8264 = G__8267;
continue;
}
} else
{return n__8264;
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
var conj__8282 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8283 = (function() { 
var G__8285__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8288 = conj.call(null,coll,x);
var G__8290 = cljs.core.first.call(null,xs);
var G__8292 = cljs.core.next.call(null,xs);
coll = G__8288;
x = G__8290;
xs = G__8292;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8285 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8285__delegate.call(this, coll, x, xs);
};
G__8285.cljs$lang$maxFixedArity = 2;
G__8285.cljs$lang$applyTo = (function (arglist__8297){
var coll = cljs.core.first(arglist__8297);
var x = cljs.core.first(cljs.core.next(arglist__8297));
var xs = cljs.core.rest(cljs.core.next(arglist__8297));
return G__8285__delegate.call(this, coll, x, xs);
});
return G__8285;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8282.call(this,coll,x);
default:
return conj__8283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8283.cljs$lang$applyTo;
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
var nth__8311 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8312 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8311.call(this,coll,n);
case  3 :
return nth__8312.call(this,coll,n,not_found);
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
var get__8317 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8318 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8317.call(this,o,k);
case  3 :
return get__8318.call(this,o,k,not_found);
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
var assoc__8354 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8355 = (function() { 
var G__8357__delegate = function (coll,k,v,kvs){
while(true){
var ret__8349 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8358 = ret__8349;
var G__8359 = cljs.core.first.call(null,kvs);
var G__8360 = cljs.core.second.call(null,kvs);
var G__8361 = cljs.core.nnext.call(null,kvs);
coll = G__8358;
k = G__8359;
v = G__8360;
kvs = G__8361;
continue;
}
} else
{return ret__8349;
}
break;
}
};
var G__8357 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8357__delegate.call(this, coll, k, v, kvs);
};
G__8357.cljs$lang$maxFixedArity = 3;
G__8357.cljs$lang$applyTo = (function (arglist__8366){
var coll = cljs.core.first(arglist__8366);
var k = cljs.core.first(cljs.core.next(arglist__8366));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8366)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8366)));
return G__8357__delegate.call(this, coll, k, v, kvs);
});
return G__8357;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8354.call(this,coll,k,v);
default:
return assoc__8355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8355.cljs$lang$applyTo;
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
var dissoc__8386 = (function (coll){
return coll;
});
var dissoc__8387 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8388 = (function() { 
var G__8390__delegate = function (coll,k,ks){
while(true){
var ret__8379 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8392 = ret__8379;
var G__8393 = cljs.core.first.call(null,ks);
var G__8394 = cljs.core.next.call(null,ks);
coll = G__8392;
k = G__8393;
ks = G__8394;
continue;
}
} else
{return ret__8379;
}
break;
}
};
var G__8390 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8390__delegate.call(this, coll, k, ks);
};
G__8390.cljs$lang$maxFixedArity = 2;
G__8390.cljs$lang$applyTo = (function (arglist__8396){
var coll = cljs.core.first(arglist__8396);
var k = cljs.core.first(cljs.core.next(arglist__8396));
var ks = cljs.core.rest(cljs.core.next(arglist__8396));
return G__8390__delegate.call(this, coll, k, ks);
});
return G__8390;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8386.call(this,coll);
case  2 :
return dissoc__8387.call(this,coll,k);
default:
return dissoc__8388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8388.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8403 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8404 = x__445__auto____8403;

if(cljs.core.truth_(and__3546__auto____8404))
{var and__3546__auto____8405 = x__445__auto____8403.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8405))
{return cljs.core.not.call(null,x__445__auto____8403.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8405;
}
} else
{return and__3546__auto____8404;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8403);
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
var disj__8420 = (function (coll){
return coll;
});
var disj__8421 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8422 = (function() { 
var G__8424__delegate = function (coll,k,ks){
while(true){
var ret__8416 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8425 = ret__8416;
var G__8426 = cljs.core.first.call(null,ks);
var G__8427 = cljs.core.next.call(null,ks);
coll = G__8425;
k = G__8426;
ks = G__8427;
continue;
}
} else
{return ret__8416;
}
break;
}
};
var G__8424 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8424__delegate.call(this, coll, k, ks);
};
G__8424.cljs$lang$maxFixedArity = 2;
G__8424.cljs$lang$applyTo = (function (arglist__8428){
var coll = cljs.core.first(arglist__8428);
var k = cljs.core.first(cljs.core.next(arglist__8428));
var ks = cljs.core.rest(cljs.core.next(arglist__8428));
return G__8424__delegate.call(this, coll, k, ks);
});
return G__8424;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8420.call(this,coll);
case  2 :
return disj__8421.call(this,coll,k);
default:
return disj__8422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8422.cljs$lang$applyTo;
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
{var x__445__auto____8438 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8439 = x__445__auto____8438;

if(cljs.core.truth_(and__3546__auto____8439))
{var and__3546__auto____8440 = x__445__auto____8438.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8440))
{return cljs.core.not.call(null,x__445__auto____8438.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8440;
}
} else
{return and__3546__auto____8439;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8438);
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
{var x__445__auto____8456 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8457 = x__445__auto____8456;

if(cljs.core.truth_(and__3546__auto____8457))
{var and__3546__auto____8458 = x__445__auto____8456.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8458))
{return cljs.core.not.call(null,x__445__auto____8456.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8458;
}
} else
{return and__3546__auto____8457;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8456);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8470 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8471 = x__445__auto____8470;

if(cljs.core.truth_(and__3546__auto____8471))
{var and__3546__auto____8472 = x__445__auto____8470.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8472))
{return cljs.core.not.call(null,x__445__auto____8470.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8472;
}
} else
{return and__3546__auto____8471;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8470);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8473 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8474 = x__445__auto____8473;

if(cljs.core.truth_(and__3546__auto____8474))
{var and__3546__auto____8476 = x__445__auto____8473.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8476))
{return cljs.core.not.call(null,x__445__auto____8473.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8476;
}
} else
{return and__3546__auto____8474;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8473);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8480 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8481 = x__445__auto____8480;

if(cljs.core.truth_(and__3546__auto____8481))
{var and__3546__auto____8482 = x__445__auto____8480.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8482))
{return cljs.core.not.call(null,x__445__auto____8480.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8482;
}
} else
{return and__3546__auto____8481;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8480);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8487 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8488 = x__445__auto____8487;

if(cljs.core.truth_(and__3546__auto____8488))
{var and__3546__auto____8489 = x__445__auto____8487.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8489))
{return cljs.core.not.call(null,x__445__auto____8487.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8489;
}
} else
{return and__3546__auto____8488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8487);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8499 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8500 = x__445__auto____8499;

if(cljs.core.truth_(and__3546__auto____8500))
{var and__3546__auto____8501 = x__445__auto____8499.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8501))
{return cljs.core.not.call(null,x__445__auto____8499.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8501;
}
} else
{return and__3546__auto____8500;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8499);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8514 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8514.push(key);
}));
return keys__8514;
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
{var x__445__auto____8547 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8548 = x__445__auto____8547;

if(cljs.core.truth_(and__3546__auto____8548))
{var and__3546__auto____8549 = x__445__auto____8547.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8549))
{return cljs.core.not.call(null,x__445__auto____8547.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8549;
}
} else
{return and__3546__auto____8548;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8547);
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
var and__3546__auto____8550 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8550))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8551 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8551))
{return or__3548__auto____8551;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8550;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8552 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8552))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8552;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8553 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8553))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8553;
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
var and__3546__auto____8558 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8558))
{return (n == n.toFixed());
} else
{return and__3546__auto____8558;
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
if(cljs.core.truth_((function (){var and__3546__auto____8565 = coll;

if(cljs.core.truth_(and__3546__auto____8565))
{var and__3546__auto____8566 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8566))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8566;
}
} else
{return and__3546__auto____8565;
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
var distinct_QMARK___8577 = (function (x){
return true;
});
var distinct_QMARK___8578 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8579 = (function() { 
var G__8582__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8572 = cljs.core.set([y,x]);
var xs__8573 = more;

while(true){
var x__8574 = cljs.core.first.call(null,xs__8573);
var etc__8575 = cljs.core.next.call(null,xs__8573);

if(cljs.core.truth_(xs__8573))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8572,x__8574)))
{return false;
} else
{{
var G__8583 = cljs.core.conj.call(null,s__8572,x__8574);
var G__8584 = etc__8575;
s__8572 = G__8583;
xs__8573 = G__8584;
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
var G__8582 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8582__delegate.call(this, x, y, more);
};
G__8582.cljs$lang$maxFixedArity = 2;
G__8582.cljs$lang$applyTo = (function (arglist__8585){
var x = cljs.core.first(arglist__8585);
var y = cljs.core.first(cljs.core.next(arglist__8585));
var more = cljs.core.rest(cljs.core.next(arglist__8585));
return G__8582__delegate.call(this, x, y, more);
});
return G__8582;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8577.call(this,x);
case  2 :
return distinct_QMARK___8578.call(this,x,y);
default:
return distinct_QMARK___8579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8579.cljs$lang$applyTo;
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
var r__8589 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8589)))
{return r__8589;
} else
{if(cljs.core.truth_(r__8589))
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
var sort__8591 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8592 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8590 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8590,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8590);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8591.call(this,comp);
case  2 :
return sort__8592.call(this,comp,coll);
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
var sort_by__8600 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8601 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8600.call(this,keyfn,comp);
case  3 :
return sort_by__8601.call(this,keyfn,comp,coll);
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
var reduce__8625 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8626 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8625.call(this,f,val);
case  3 :
return reduce__8626.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8638 = (function (f,coll){
var temp__3695__auto____8634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8634))
{var s__8635 = temp__3695__auto____8634;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8635),cljs.core.next.call(null,s__8635));
} else
{return f.call(null);
}
});
var seq_reduce__8639 = (function (f,val,coll){
var val__8636 = val;
var coll__8637 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8637))
{{
var G__8642 = f.call(null,val__8636,cljs.core.first.call(null,coll__8637));
var G__8643 = cljs.core.next.call(null,coll__8637);
val__8636 = G__8642;
coll__8637 = G__8643;
continue;
}
} else
{return val__8636;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8638.call(this,f,val);
case  3 :
return seq_reduce__8639.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8646 = null;
var G__8646__8647 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8646__8648 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8646 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8646__8647.call(this,coll,f);
case  3 :
return G__8646__8648.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8646;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8687 = (function (){
return 0;
});
var _PLUS___8688 = (function (x){
return x;
});
var _PLUS___8689 = (function (x,y){
return (x + y);
});
var _PLUS___8690 = (function() { 
var G__8692__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8692 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8692__delegate.call(this, x, y, more);
};
G__8692.cljs$lang$maxFixedArity = 2;
G__8692.cljs$lang$applyTo = (function (arglist__8693){
var x = cljs.core.first(arglist__8693);
var y = cljs.core.first(cljs.core.next(arglist__8693));
var more = cljs.core.rest(cljs.core.next(arglist__8693));
return G__8692__delegate.call(this, x, y, more);
});
return G__8692;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8687.call(this);
case  1 :
return _PLUS___8688.call(this,x);
case  2 :
return _PLUS___8689.call(this,x,y);
default:
return _PLUS___8690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8690.cljs$lang$applyTo;
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
var ___8695 = (function (x){
return (- x);
});
var ___8696 = (function (x,y){
return (x - y);
});
var ___8697 = (function() { 
var G__8700__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8700 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8700__delegate.call(this, x, y, more);
};
G__8700.cljs$lang$maxFixedArity = 2;
G__8700.cljs$lang$applyTo = (function (arglist__8702){
var x = cljs.core.first(arglist__8702);
var y = cljs.core.first(cljs.core.next(arglist__8702));
var more = cljs.core.rest(cljs.core.next(arglist__8702));
return G__8700__delegate.call(this, x, y, more);
});
return G__8700;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8695.call(this,x);
case  2 :
return ___8696.call(this,x,y);
default:
return ___8697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8697.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8708 = (function (){
return 1;
});
var _STAR___8709 = (function (x){
return x;
});
var _STAR___8710 = (function (x,y){
return (x * y);
});
var _STAR___8711 = (function() { 
var G__8714__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8714 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8714__delegate.call(this, x, y, more);
};
G__8714.cljs$lang$maxFixedArity = 2;
G__8714.cljs$lang$applyTo = (function (arglist__8716){
var x = cljs.core.first(arglist__8716);
var y = cljs.core.first(cljs.core.next(arglist__8716));
var more = cljs.core.rest(cljs.core.next(arglist__8716));
return G__8714__delegate.call(this, x, y, more);
});
return G__8714;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8708.call(this);
case  1 :
return _STAR___8709.call(this,x);
case  2 :
return _STAR___8710.call(this,x,y);
default:
return _STAR___8711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8711.cljs$lang$applyTo;
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
var _SLASH___8726 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8727 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8728 = (function() { 
var G__8734__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8734 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8734__delegate.call(this, x, y, more);
};
G__8734.cljs$lang$maxFixedArity = 2;
G__8734.cljs$lang$applyTo = (function (arglist__8735){
var x = cljs.core.first(arglist__8735);
var y = cljs.core.first(cljs.core.next(arglist__8735));
var more = cljs.core.rest(cljs.core.next(arglist__8735));
return G__8734__delegate.call(this, x, y, more);
});
return G__8734;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8726.call(this,x);
case  2 :
return _SLASH___8727.call(this,x,y);
default:
return _SLASH___8728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8728.cljs$lang$applyTo;
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
var _LT___8759 = (function (x){
return true;
});
var _LT___8760 = (function (x,y){
return (x < y);
});
var _LT___8761 = (function() { 
var G__8763__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8764 = y;
var G__8765 = cljs.core.first.call(null,more);
var G__8766 = cljs.core.next.call(null,more);
x = G__8764;
y = G__8765;
more = G__8766;
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
var G__8763 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8763__delegate.call(this, x, y, more);
};
G__8763.cljs$lang$maxFixedArity = 2;
G__8763.cljs$lang$applyTo = (function (arglist__8769){
var x = cljs.core.first(arglist__8769);
var y = cljs.core.first(cljs.core.next(arglist__8769));
var more = cljs.core.rest(cljs.core.next(arglist__8769));
return G__8763__delegate.call(this, x, y, more);
});
return G__8763;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8759.call(this,x);
case  2 :
return _LT___8760.call(this,x,y);
default:
return _LT___8761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8761.cljs$lang$applyTo;
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
var _LT__EQ___8770 = (function (x){
return true;
});
var _LT__EQ___8771 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8772 = (function() { 
var G__8774__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8775 = y;
var G__8776 = cljs.core.first.call(null,more);
var G__8777 = cljs.core.next.call(null,more);
x = G__8775;
y = G__8776;
more = G__8777;
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
var G__8774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8774__delegate.call(this, x, y, more);
};
G__8774.cljs$lang$maxFixedArity = 2;
G__8774.cljs$lang$applyTo = (function (arglist__8781){
var x = cljs.core.first(arglist__8781);
var y = cljs.core.first(cljs.core.next(arglist__8781));
var more = cljs.core.rest(cljs.core.next(arglist__8781));
return G__8774__delegate.call(this, x, y, more);
});
return G__8774;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8770.call(this,x);
case  2 :
return _LT__EQ___8771.call(this,x,y);
default:
return _LT__EQ___8772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8772.cljs$lang$applyTo;
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
var _GT___8795 = (function (x){
return true;
});
var _GT___8796 = (function (x,y){
return (x > y);
});
var _GT___8797 = (function() { 
var G__8799__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8800 = y;
var G__8801 = cljs.core.first.call(null,more);
var G__8802 = cljs.core.next.call(null,more);
x = G__8800;
y = G__8801;
more = G__8802;
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
var G__8799 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8799__delegate.call(this, x, y, more);
};
G__8799.cljs$lang$maxFixedArity = 2;
G__8799.cljs$lang$applyTo = (function (arglist__8804){
var x = cljs.core.first(arglist__8804);
var y = cljs.core.first(cljs.core.next(arglist__8804));
var more = cljs.core.rest(cljs.core.next(arglist__8804));
return G__8799__delegate.call(this, x, y, more);
});
return G__8799;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8795.call(this,x);
case  2 :
return _GT___8796.call(this,x,y);
default:
return _GT___8797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8797.cljs$lang$applyTo;
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
var _GT__EQ___8818 = (function (x){
return true;
});
var _GT__EQ___8820 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8822 = (function() { 
var G__8827__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8829 = y;
var G__8830 = cljs.core.first.call(null,more);
var G__8831 = cljs.core.next.call(null,more);
x = G__8829;
y = G__8830;
more = G__8831;
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
var G__8827 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8827__delegate.call(this, x, y, more);
};
G__8827.cljs$lang$maxFixedArity = 2;
G__8827.cljs$lang$applyTo = (function (arglist__8835){
var x = cljs.core.first(arglist__8835);
var y = cljs.core.first(cljs.core.next(arglist__8835));
var more = cljs.core.rest(cljs.core.next(arglist__8835));
return G__8827__delegate.call(this, x, y, more);
});
return G__8827;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8818.call(this,x);
case  2 :
return _GT__EQ___8820.call(this,x,y);
default:
return _GT__EQ___8822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8822.cljs$lang$applyTo;
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
var max__8839 = (function (x){
return x;
});
var max__8842 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8843 = (function() { 
var G__8845__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8845 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8845__delegate.call(this, x, y, more);
};
G__8845.cljs$lang$maxFixedArity = 2;
G__8845.cljs$lang$applyTo = (function (arglist__8846){
var x = cljs.core.first(arglist__8846);
var y = cljs.core.first(cljs.core.next(arglist__8846));
var more = cljs.core.rest(cljs.core.next(arglist__8846));
return G__8845__delegate.call(this, x, y, more);
});
return G__8845;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8839.call(this,x);
case  2 :
return max__8842.call(this,x,y);
default:
return max__8843.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8843.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8859 = (function (x){
return x;
});
var min__8860 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8861 = (function() { 
var G__8864__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8864 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8864__delegate.call(this, x, y, more);
};
G__8864.cljs$lang$maxFixedArity = 2;
G__8864.cljs$lang$applyTo = (function (arglist__8867){
var x = cljs.core.first(arglist__8867);
var y = cljs.core.first(cljs.core.next(arglist__8867));
var more = cljs.core.rest(cljs.core.next(arglist__8867));
return G__8864__delegate.call(this, x, y, more);
});
return G__8864;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8859.call(this,x);
case  2 :
return min__8860.call(this,x,y);
default:
return min__8861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8861.cljs$lang$applyTo;
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
var rem__8878 = (n % d);

return cljs.core.fix.call(null,((n - rem__8878) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8882 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8882));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8887 = (function (){
return Math.random.call(null);
});
var rand__8888 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8887.call(this);
case  1 :
return rand__8888.call(this,n);
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
var _EQ__EQ___8974 = (function (x){
return true;
});
var _EQ__EQ___8975 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8976 = (function() { 
var G__8978__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8979 = y;
var G__8980 = cljs.core.first.call(null,more);
var G__8981 = cljs.core.next.call(null,more);
x = G__8979;
y = G__8980;
more = G__8981;
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
var G__8978 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8978__delegate.call(this, x, y, more);
};
G__8978.cljs$lang$maxFixedArity = 2;
G__8978.cljs$lang$applyTo = (function (arglist__8982){
var x = cljs.core.first(arglist__8982);
var y = cljs.core.first(cljs.core.next(arglist__8982));
var more = cljs.core.rest(cljs.core.next(arglist__8982));
return G__8978__delegate.call(this, x, y, more);
});
return G__8978;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8974.call(this,x);
case  2 :
return _EQ__EQ___8975.call(this,x,y);
default:
return _EQ__EQ___8976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8976.cljs$lang$applyTo;
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
var n__9026 = n;
var xs__9027 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9028 = xs__9027;

if(cljs.core.truth_(and__3546__auto____9028))
{return (n__9026 > 0);
} else
{return and__3546__auto____9028;
}
})()))
{{
var G__9065 = (n__9026 - 1);
var G__9066 = cljs.core.next.call(null,xs__9027);
n__9026 = G__9065;
xs__9027 = G__9066;
continue;
}
} else
{return xs__9027;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9116 = null;
var G__9116__9117 = (function (coll,n){
var temp__3695__auto____9112 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9112))
{var xs__9113 = temp__3695__auto____9112;

return cljs.core.first.call(null,xs__9113);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9116__9118 = (function (coll,n,not_found){
var temp__3695__auto____9114 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9114))
{var xs__9115 = temp__3695__auto____9114;

return cljs.core.first.call(null,xs__9115);
} else
{return not_found;
}
});
G__9116 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9116__9117.call(this,coll,n);
case  3 :
return G__9116__9118.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9116;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9130 = (function (){
return "";
});
var str_STAR___9131 = (function (x){
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
var str_STAR___9132 = (function() { 
var G__9134__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9138 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9140 = cljs.core.next.call(null,more);
sb = G__9138;
more = G__9140;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9134 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9134__delegate.call(this, x, ys);
};
G__9134.cljs$lang$maxFixedArity = 1;
G__9134.cljs$lang$applyTo = (function (arglist__9145){
var x = cljs.core.first(arglist__9145);
var ys = cljs.core.rest(arglist__9145);
return G__9134__delegate.call(this, x, ys);
});
return G__9134;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9130.call(this);
case  1 :
return str_STAR___9131.call(this,x);
default:
return str_STAR___9132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9132.cljs$lang$applyTo;
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
var str__9151 = (function (){
return "";
});
var str__9152 = (function (x){
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
var str__9153 = (function() { 
var G__9160__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9160 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9160__delegate.call(this, x, ys);
};
G__9160.cljs$lang$maxFixedArity = 1;
G__9160.cljs$lang$applyTo = (function (arglist__9161){
var x = cljs.core.first(arglist__9161);
var ys = cljs.core.rest(arglist__9161);
return G__9160__delegate.call(this, x, ys);
});
return G__9160;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9151.call(this);
case  1 :
return str__9152.call(this,x);
default:
return str__9153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9153.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9162 = (function (s,start){
return s.substring(start);
});
var subs__9171 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9162.call(this,s,start);
case  3 :
return subs__9171.call(this,s,start,end);
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
var symbol__9180 = (function (name){
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
var symbol__9181 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9180.call(this,ns);
case  2 :
return symbol__9181.call(this,ns,name);
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
var keyword__9201 = (function (name){
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
var keyword__9202 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9201.call(this,ns);
case  2 :
return keyword__9202.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9234 = cljs.core.seq.call(null,x);
var ys__9235 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9234)))
{return cljs.core.nil_QMARK_.call(null,ys__9235);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9235)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9234),cljs.core.first.call(null,ys__9235))))
{{
var G__9238 = cljs.core.next.call(null,xs__9234);
var G__9239 = cljs.core.next.call(null,ys__9235);
xs__9234 = G__9238;
ys__9235 = G__9239;
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
return cljs.core.reduce.call(null,(function (p1__9240_SHARP_,p2__9241_SHARP_){
return cljs.core.hash_combine.call(null,p1__9240_SHARP_,cljs.core.hash.call(null,p2__9241_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9248__9250 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9248__9250))
{var G__9254__9257 = cljs.core.first.call(null,G__9248__9250);
var vec__9255__9258 = G__9254__9257;
var key_name__9259 = cljs.core.nth.call(null,vec__9255__9258,0,null);
var f__9260 = cljs.core.nth.call(null,vec__9255__9258,1,null);
var G__9248__9261 = G__9248__9250;

var G__9254__9262 = G__9254__9257;
var G__9248__9263 = G__9248__9261;

while(true){
var vec__9264__9265 = G__9254__9262;
var key_name__9266 = cljs.core.nth.call(null,vec__9264__9265,0,null);
var f__9267 = cljs.core.nth.call(null,vec__9264__9265,1,null);
var G__9248__9268 = G__9248__9263;

var str_name__9269 = cljs.core.name.call(null,key_name__9266);

obj[str_name__9269] = f__9267;
var temp__3698__auto____9270 = cljs.core.next.call(null,G__9248__9268);

if(cljs.core.truth_(temp__3698__auto____9270))
{var G__9248__9271 = temp__3698__auto____9270;

{
var G__9277 = cljs.core.first.call(null,G__9248__9271);
var G__9278 = G__9248__9271;
G__9254__9262 = G__9277;
G__9248__9263 = G__9278;
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
var this__9288 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9289 = this;
return (new cljs.core.List(this__9289.meta,o,coll,(this__9289.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9293 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9294 = this;
return this__9294.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9295 = this;
return this__9295.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9296 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9297 = this;
return this__9297.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9298 = this;
return this__9298.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9300 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9303 = this;
return (new cljs.core.List(meta,this__9303.first,this__9303.rest,this__9303.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9304 = this;
return this__9304.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9305 = this;
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
var this__9318 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9319 = this;
return (new cljs.core.List(this__9319.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9320 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9321 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9324 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9325 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9327 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9328 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9329 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9330 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9331 = this;
return this__9331.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9332 = this;
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
list.cljs$lang$applyTo = (function (arglist__9351){
var items = cljs.core.seq( arglist__9351 );;
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
var this__9358 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9472 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9472.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9474 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9475 = this;
return this__9475.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9476 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9476.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9476.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9477 = this;
return this__9477.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9478 = this;
return (new cljs.core.Cons(meta,this__9478.first,this__9478.rest));
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
var G__9631 = null;
var G__9631__9632 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9631__9633 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9631 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9631__9632.call(this,string,f);
case  3 :
return G__9631__9633.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9631;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9638 = null;
var G__9638__9639 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9638__9640 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9638 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9638__9639.call(this,string,k);
case  3 :
return G__9638__9640.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9638;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9644 = null;
var G__9644__9645 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9644__9646 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9644 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9644__9645.call(this,string,n);
case  3 :
return G__9644__9646.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9644;
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
var G__9654 = null;
var G__9654__9655 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9654__9656 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9654 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9654__9655.call(this,this$,coll);
case  3 :
return G__9654__9656.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9654;
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
var x__9668 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9668;
} else
{lazy_seq.x = x__9668.call(null);
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
var this__9669 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9670 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9671 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9672 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9672.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9673 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9674 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9676 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9678 = this;
return this__9678.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9681 = this;
return (new cljs.core.LazySeq(meta,this__9681.realized,this__9681.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9695 = cljs.core.array.call(null);

var s__9696 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9696)))
{ary__9695.push(cljs.core.first.call(null,s__9696));
{
var G__9702 = cljs.core.next.call(null,s__9696);
s__9696 = G__9702;
continue;
}
} else
{return ary__9695;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9703 = s;
var i__9704 = n;
var sum__9705 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9706 = (i__9704 > 0);

if(cljs.core.truth_(and__3546__auto____9706))
{return cljs.core.seq.call(null,s__9703);
} else
{return and__3546__auto____9706;
}
})()))
{{
var G__9707 = cljs.core.next.call(null,s__9703);
var G__9708 = (i__9704 - 1);
var G__9709 = (sum__9705 + 1);
s__9703 = G__9707;
i__9704 = G__9708;
sum__9705 = G__9709;
continue;
}
} else
{return sum__9705;
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
var concat__9785 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9786 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9819 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9774 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9774))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9774),concat.call(null,cljs.core.rest.call(null,s__9774),y));
} else
{return y;
}
})));
});
var concat__9820 = (function() { 
var G__9861__delegate = function (x,y,zs){
var cat__9780 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9775 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9775))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9775),cat.call(null,cljs.core.rest.call(null,xys__9775),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9780.call(null,concat.call(null,x,y),zs);
};
var G__9861 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9861__delegate.call(this, x, y, zs);
};
G__9861.cljs$lang$maxFixedArity = 2;
G__9861.cljs$lang$applyTo = (function (arglist__9863){
var x = cljs.core.first(arglist__9863);
var y = cljs.core.first(cljs.core.next(arglist__9863));
var zs = cljs.core.rest(cljs.core.next(arglist__9863));
return G__9861__delegate.call(this, x, y, zs);
});
return G__9861;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9785.call(this);
case  1 :
return concat__9786.call(this,x);
case  2 :
return concat__9819.call(this,x,y);
default:
return concat__9820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9820.cljs$lang$applyTo;
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
var list_STAR___9873 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9874 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9875 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9876 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9877 = (function() { 
var G__9882__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9882 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9882__delegate.call(this, a, b, c, d, more);
};
G__9882.cljs$lang$maxFixedArity = 4;
G__9882.cljs$lang$applyTo = (function (arglist__9884){
var a = cljs.core.first(arglist__9884);
var b = cljs.core.first(cljs.core.next(arglist__9884));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9884)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9884))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9884))));
return G__9882__delegate.call(this, a, b, c, d, more);
});
return G__9882;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9873.call(this,a);
case  2 :
return list_STAR___9874.call(this,a,b);
case  3 :
return list_STAR___9875.call(this,a,b,c);
case  4 :
return list_STAR___9876.call(this,a,b,c,d);
default:
return list_STAR___9877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9877.cljs$lang$applyTo;
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
var apply__9914 = (function (f,args){
var fixed_arity__9894 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9894 + 1)) <= fixed_arity__9894)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__9915 = (function (f,x,args){
var arglist__9896 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9897 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9896,fixed_arity__9897) <= fixed_arity__9897)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9896));
} else
{return f.cljs$lang$applyTo(arglist__9896);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9896));
}
});
var apply__9916 = (function (f,x,y,args){
var arglist__9898 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9903 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9898,fixed_arity__9903) <= fixed_arity__9903)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9898));
} else
{return f.cljs$lang$applyTo(arglist__9898);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9898));
}
});
var apply__9917 = (function (f,x,y,z,args){
var arglist__9908 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9910 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9908,fixed_arity__9910) <= fixed_arity__9910)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9908));
} else
{return f.cljs$lang$applyTo(arglist__9908);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9908));
}
});
var apply__9918 = (function() { 
var G__9927__delegate = function (f,a,b,c,d,args){
var arglist__9911 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9912 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9911,fixed_arity__9912) <= fixed_arity__9912)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9911));
} else
{return f.cljs$lang$applyTo(arglist__9911);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9911));
}
};
var G__9927 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9927__delegate.call(this, f, a, b, c, d, args);
};
G__9927.cljs$lang$maxFixedArity = 5;
G__9927.cljs$lang$applyTo = (function (arglist__9931){
var f = cljs.core.first(arglist__9931);
var a = cljs.core.first(cljs.core.next(arglist__9931));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9931)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9931))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9931)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9931)))));
return G__9927__delegate.call(this, f, a, b, c, d, args);
});
return G__9927;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__9914.call(this,f,a);
case  3 :
return apply__9915.call(this,f,a,b);
case  4 :
return apply__9916.call(this,f,a,b,c);
case  5 :
return apply__9917.call(this,f,a,b,c,d);
default:
return apply__9918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__9918.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9938){
var obj = cljs.core.first(arglist__9938);
var f = cljs.core.first(cljs.core.next(arglist__9938));
var args = cljs.core.rest(cljs.core.next(arglist__9938));
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
var not_EQ___9949 = (function (x){
return false;
});
var not_EQ___9950 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___9951 = (function() { 
var G__9953__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9953 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9953__delegate.call(this, x, y, more);
};
G__9953.cljs$lang$maxFixedArity = 2;
G__9953.cljs$lang$applyTo = (function (arglist__9957){
var x = cljs.core.first(arglist__9957);
var y = cljs.core.first(cljs.core.next(arglist__9957));
var more = cljs.core.rest(cljs.core.next(arglist__9957));
return G__9953__delegate.call(this, x, y, more);
});
return G__9953;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___9949.call(this,x);
case  2 :
return not_EQ___9950.call(this,x,y);
default:
return not_EQ___9951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___9951.cljs$lang$applyTo;
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
var G__9965 = pred;
var G__9966 = cljs.core.next.call(null,coll);
pred = G__9965;
coll = G__9966;
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
{var or__3548__auto____9974 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____9974))
{return or__3548__auto____9974;
} else
{{
var G__9983 = pred;
var G__9984 = cljs.core.next.call(null,coll);
pred = G__9983;
coll = G__9984;
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
var G__10000 = null;
var G__10000__10001 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10000__10002 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10000__10003 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10000__10004 = (function() { 
var G__10008__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10008 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10008__delegate.call(this, x, y, zs);
};
G__10008.cljs$lang$maxFixedArity = 2;
G__10008.cljs$lang$applyTo = (function (arglist__10010){
var x = cljs.core.first(arglist__10010);
var y = cljs.core.first(cljs.core.next(arglist__10010));
var zs = cljs.core.rest(cljs.core.next(arglist__10010));
return G__10008__delegate.call(this, x, y, zs);
});
return G__10008;
})()
;
G__10000 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10000__10001.call(this);
case  1 :
return G__10000__10002.call(this,x);
case  2 :
return G__10000__10003.call(this,x,y);
default:
return G__10000__10004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10000.cljs$lang$maxFixedArity = 2;
G__10000.cljs$lang$applyTo = G__10000__10004.cljs$lang$applyTo;
return G__10000;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10044__delegate = function (args){
return x;
};
var G__10044 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10044__delegate.call(this, args);
};
G__10044.cljs$lang$maxFixedArity = 0;
G__10044.cljs$lang$applyTo = (function (arglist__10045){
var args = cljs.core.seq( arglist__10045 );;
return G__10044__delegate.call(this, args);
});
return G__10044;
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
var comp__10061 = (function (){
return cljs.core.identity;
});
var comp__10062 = (function (f){
return f;
});
var comp__10063 = (function (f,g){
return (function() {
var G__10067 = null;
var G__10067__10069 = (function (){
return f.call(null,g.call(null));
});
var G__10067__10070 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10067__10071 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10067__10072 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10067__10073 = (function() { 
var G__10081__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10081 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10081__delegate.call(this, x, y, z, args);
};
G__10081.cljs$lang$maxFixedArity = 3;
G__10081.cljs$lang$applyTo = (function (arglist__10084){
var x = cljs.core.first(arglist__10084);
var y = cljs.core.first(cljs.core.next(arglist__10084));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10084)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10084)));
return G__10081__delegate.call(this, x, y, z, args);
});
return G__10081;
})()
;
G__10067 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10067__10069.call(this);
case  1 :
return G__10067__10070.call(this,x);
case  2 :
return G__10067__10071.call(this,x,y);
case  3 :
return G__10067__10072.call(this,x,y,z);
default:
return G__10067__10073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10067.cljs$lang$maxFixedArity = 3;
G__10067.cljs$lang$applyTo = G__10067__10073.cljs$lang$applyTo;
return G__10067;
})()
});
var comp__10064 = (function (f,g,h){
return (function() {
var G__10092 = null;
var G__10092__10093 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10092__10094 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10092__10095 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10092__10096 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10092__10097 = (function() { 
var G__10149__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10149 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10149__delegate.call(this, x, y, z, args);
};
G__10149.cljs$lang$maxFixedArity = 3;
G__10149.cljs$lang$applyTo = (function (arglist__10150){
var x = cljs.core.first(arglist__10150);
var y = cljs.core.first(cljs.core.next(arglist__10150));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10150)));
return G__10149__delegate.call(this, x, y, z, args);
});
return G__10149;
})()
;
G__10092 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10092__10093.call(this);
case  1 :
return G__10092__10094.call(this,x);
case  2 :
return G__10092__10095.call(this,x,y);
case  3 :
return G__10092__10096.call(this,x,y,z);
default:
return G__10092__10097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10092.cljs$lang$maxFixedArity = 3;
G__10092.cljs$lang$applyTo = G__10092__10097.cljs$lang$applyTo;
return G__10092;
})()
});
var comp__10065 = (function() { 
var G__10152__delegate = function (f1,f2,f3,fs){
var fs__10054 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10155__delegate = function (args){
var ret__10055 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10054),args);
var fs__10056 = cljs.core.next.call(null,fs__10054);

while(true){
if(cljs.core.truth_(fs__10056))
{{
var G__10156 = cljs.core.first.call(null,fs__10056).call(null,ret__10055);
var G__10157 = cljs.core.next.call(null,fs__10056);
ret__10055 = G__10156;
fs__10056 = G__10157;
continue;
}
} else
{return ret__10055;
}
break;
}
};
var G__10155 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10155__delegate.call(this, args);
};
G__10155.cljs$lang$maxFixedArity = 0;
G__10155.cljs$lang$applyTo = (function (arglist__10158){
var args = cljs.core.seq( arglist__10158 );;
return G__10155__delegate.call(this, args);
});
return G__10155;
})()
;
};
var G__10152 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10152__delegate.call(this, f1, f2, f3, fs);
};
G__10152.cljs$lang$maxFixedArity = 3;
G__10152.cljs$lang$applyTo = (function (arglist__10159){
var f1 = cljs.core.first(arglist__10159);
var f2 = cljs.core.first(cljs.core.next(arglist__10159));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10159)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10159)));
return G__10152__delegate.call(this, f1, f2, f3, fs);
});
return G__10152;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10061.call(this);
case  1 :
return comp__10062.call(this,f1);
case  2 :
return comp__10063.call(this,f1,f2);
case  3 :
return comp__10064.call(this,f1,f2,f3);
default:
return comp__10065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10065.cljs$lang$applyTo;
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
var partial__10167 = (function (f,arg1){
return (function() { 
var G__10172__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10172 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10172__delegate.call(this, args);
};
G__10172.cljs$lang$maxFixedArity = 0;
G__10172.cljs$lang$applyTo = (function (arglist__10175){
var args = cljs.core.seq( arglist__10175 );;
return G__10172__delegate.call(this, args);
});
return G__10172;
})()
;
});
var partial__10168 = (function (f,arg1,arg2){
return (function() { 
var G__10176__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10176 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10176__delegate.call(this, args);
};
G__10176.cljs$lang$maxFixedArity = 0;
G__10176.cljs$lang$applyTo = (function (arglist__10179){
var args = cljs.core.seq( arglist__10179 );;
return G__10176__delegate.call(this, args);
});
return G__10176;
})()
;
});
var partial__10169 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10182__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10182 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10182__delegate.call(this, args);
};
G__10182.cljs$lang$maxFixedArity = 0;
G__10182.cljs$lang$applyTo = (function (arglist__10184){
var args = cljs.core.seq( arglist__10184 );;
return G__10182__delegate.call(this, args);
});
return G__10182;
})()
;
});
var partial__10170 = (function() { 
var G__10188__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10191__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10191 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10191__delegate.call(this, args);
};
G__10191.cljs$lang$maxFixedArity = 0;
G__10191.cljs$lang$applyTo = (function (arglist__10192){
var args = cljs.core.seq( arglist__10192 );;
return G__10191__delegate.call(this, args);
});
return G__10191;
})()
;
};
var G__10188 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10188__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10188.cljs$lang$maxFixedArity = 4;
G__10188.cljs$lang$applyTo = (function (arglist__10194){
var f = cljs.core.first(arglist__10194);
var arg1 = cljs.core.first(cljs.core.next(arglist__10194));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10194)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10194))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10194))));
return G__10188__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10188;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10167.call(this,f,arg1);
case  3 :
return partial__10168.call(this,f,arg1,arg2);
case  4 :
return partial__10169.call(this,f,arg1,arg2,arg3);
default:
return partial__10170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10170.cljs$lang$applyTo;
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
var fnil__10204 = (function (f,x){
return (function() {
var G__10208 = null;
var G__10208__10209 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10208__10210 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10208__10211 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10208__10212 = (function() { 
var G__10223__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10223 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10223__delegate.call(this, a, b, c, ds);
};
G__10223.cljs$lang$maxFixedArity = 3;
G__10223.cljs$lang$applyTo = (function (arglist__10241){
var a = cljs.core.first(arglist__10241);
var b = cljs.core.first(cljs.core.next(arglist__10241));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10241)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10241)));
return G__10223__delegate.call(this, a, b, c, ds);
});
return G__10223;
})()
;
G__10208 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10208__10209.call(this,a);
case  2 :
return G__10208__10210.call(this,a,b);
case  3 :
return G__10208__10211.call(this,a,b,c);
default:
return G__10208__10212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10208.cljs$lang$maxFixedArity = 3;
G__10208.cljs$lang$applyTo = G__10208__10212.cljs$lang$applyTo;
return G__10208;
})()
});
var fnil__10205 = (function (f,x,y){
return (function() {
var G__10242 = null;
var G__10242__10243 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10242__10244 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10242__10245 = (function() { 
var G__10247__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10247 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10247__delegate.call(this, a, b, c, ds);
};
G__10247.cljs$lang$maxFixedArity = 3;
G__10247.cljs$lang$applyTo = (function (arglist__10258){
var a = cljs.core.first(arglist__10258);
var b = cljs.core.first(cljs.core.next(arglist__10258));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10258)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10258)));
return G__10247__delegate.call(this, a, b, c, ds);
});
return G__10247;
})()
;
G__10242 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10242__10243.call(this,a,b);
case  3 :
return G__10242__10244.call(this,a,b,c);
default:
return G__10242__10245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10242.cljs$lang$maxFixedArity = 3;
G__10242.cljs$lang$applyTo = G__10242__10245.cljs$lang$applyTo;
return G__10242;
})()
});
var fnil__10206 = (function (f,x,y,z){
return (function() {
var G__10262 = null;
var G__10262__10264 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10262__10265 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10262__10266 = (function() { 
var G__10276__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10276 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10276__delegate.call(this, a, b, c, ds);
};
G__10276.cljs$lang$maxFixedArity = 3;
G__10276.cljs$lang$applyTo = (function (arglist__10279){
var a = cljs.core.first(arglist__10279);
var b = cljs.core.first(cljs.core.next(arglist__10279));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10279)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10279)));
return G__10276__delegate.call(this, a, b, c, ds);
});
return G__10276;
})()
;
G__10262 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10262__10264.call(this,a,b);
case  3 :
return G__10262__10265.call(this,a,b,c);
default:
return G__10262__10266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10262.cljs$lang$maxFixedArity = 3;
G__10262.cljs$lang$applyTo = G__10262__10266.cljs$lang$applyTo;
return G__10262;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10204.call(this,f,x);
case  3 :
return fnil__10205.call(this,f,x,y);
case  4 :
return fnil__10206.call(this,f,x,y,z);
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
var mapi__10288 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10286 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10286))
{var s__10287 = temp__3698__auto____10286;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10287)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10287)));
} else
{return null;
}
})));
});

return mapi__10288.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10297 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10297))
{var s__10298 = temp__3698__auto____10297;

var x__10299 = f.call(null,cljs.core.first.call(null,s__10298));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10299)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10298));
} else
{return cljs.core.cons.call(null,x__10299,keep.call(null,f,cljs.core.rest.call(null,s__10298)));
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
var keepi__10333 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10329))
{var s__10331 = temp__3698__auto____10329;

var x__10332 = f.call(null,idx,cljs.core.first.call(null,s__10331));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10332)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10331));
} else
{return cljs.core.cons.call(null,x__10332,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10331)));
}
} else
{return null;
}
})));
});

return keepi__10333.call(null,0,coll);
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
var every_pred__10465 = (function (p){
return (function() {
var ep1 = null;
var ep1__10495 = (function (){
return true;
});
var ep1__10496 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10498 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10411 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10411))
{return p.call(null,y);
} else
{return and__3546__auto____10411;
}
})());
});
var ep1__10499 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10413 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10413))
{var and__3546__auto____10414 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10414))
{return p.call(null,z);
} else
{return and__3546__auto____10414;
}
} else
{return and__3546__auto____10413;
}
})());
});
var ep1__10500 = (function() { 
var G__10506__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10415 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10415))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10415;
}
})());
};
var G__10506 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10506__delegate.call(this, x, y, z, args);
};
G__10506.cljs$lang$maxFixedArity = 3;
G__10506.cljs$lang$applyTo = (function (arglist__10509){
var x = cljs.core.first(arglist__10509);
var y = cljs.core.first(cljs.core.next(arglist__10509));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10509)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10509)));
return G__10506__delegate.call(this, x, y, z, args);
});
return G__10506;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10495.call(this);
case  1 :
return ep1__10496.call(this,x);
case  2 :
return ep1__10498.call(this,x,y);
case  3 :
return ep1__10499.call(this,x,y,z);
default:
return ep1__10500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10500.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10466 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10517 = (function (){
return true;
});
var ep2__10518 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10416 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10416))
{return p2.call(null,x);
} else
{return and__3546__auto____10416;
}
})());
});
var ep2__10519 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10417 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10417))
{var and__3546__auto____10418 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10418))
{var and__3546__auto____10419 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10419))
{return p2.call(null,y);
} else
{return and__3546__auto____10419;
}
} else
{return and__3546__auto____10418;
}
} else
{return and__3546__auto____10417;
}
})());
});
var ep2__10520 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10420 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10420))
{var and__3546__auto____10421 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10421))
{var and__3546__auto____10422 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10422))
{var and__3546__auto____10423 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10423))
{var and__3546__auto____10424 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10424))
{return p2.call(null,z);
} else
{return and__3546__auto____10424;
}
} else
{return and__3546__auto____10423;
}
} else
{return and__3546__auto____10422;
}
} else
{return and__3546__auto____10421;
}
} else
{return and__3546__auto____10420;
}
})());
});
var ep2__10521 = (function() { 
var G__10526__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10425 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10425))
{return cljs.core.every_QMARK_.call(null,(function (p1__10316_SHARP_){
var and__3546__auto____10426 = p1.call(null,p1__10316_SHARP_);

if(cljs.core.truth_(and__3546__auto____10426))
{return p2.call(null,p1__10316_SHARP_);
} else
{return and__3546__auto____10426;
}
}),args);
} else
{return and__3546__auto____10425;
}
})());
};
var G__10526 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10526__delegate.call(this, x, y, z, args);
};
G__10526.cljs$lang$maxFixedArity = 3;
G__10526.cljs$lang$applyTo = (function (arglist__10527){
var x = cljs.core.first(arglist__10527);
var y = cljs.core.first(cljs.core.next(arglist__10527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10527)));
return G__10526__delegate.call(this, x, y, z, args);
});
return G__10526;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10517.call(this);
case  1 :
return ep2__10518.call(this,x);
case  2 :
return ep2__10519.call(this,x,y);
case  3 :
return ep2__10520.call(this,x,y,z);
default:
return ep2__10521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10521.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10467 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10528 = (function (){
return true;
});
var ep3__10529 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10427 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10427))
{var and__3546__auto____10428 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10428))
{return p3.call(null,x);
} else
{return and__3546__auto____10428;
}
} else
{return and__3546__auto____10427;
}
})());
});
var ep3__10530 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10429 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10429))
{var and__3546__auto____10430 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10430))
{var and__3546__auto____10431 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10431))
{var and__3546__auto____10432 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10432))
{var and__3546__auto____10433 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10433))
{return p3.call(null,y);
} else
{return and__3546__auto____10433;
}
} else
{return and__3546__auto____10432;
}
} else
{return and__3546__auto____10431;
}
} else
{return and__3546__auto____10430;
}
} else
{return and__3546__auto____10429;
}
})());
});
var ep3__10531 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10434 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10434))
{var and__3546__auto____10435 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10435))
{var and__3546__auto____10436 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10436))
{var and__3546__auto____10437 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10437))
{var and__3546__auto____10438 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10438))
{var and__3546__auto____10439 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10439))
{var and__3546__auto____10440 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10440))
{var and__3546__auto____10441 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10441))
{return p3.call(null,z);
} else
{return and__3546__auto____10441;
}
} else
{return and__3546__auto____10440;
}
} else
{return and__3546__auto____10439;
}
} else
{return and__3546__auto____10438;
}
} else
{return and__3546__auto____10437;
}
} else
{return and__3546__auto____10436;
}
} else
{return and__3546__auto____10435;
}
} else
{return and__3546__auto____10434;
}
})());
});
var ep3__10533 = (function() { 
var G__10538__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10442 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10442))
{return cljs.core.every_QMARK_.call(null,(function (p1__10317_SHARP_){
var and__3546__auto____10443 = p1.call(null,p1__10317_SHARP_);

if(cljs.core.truth_(and__3546__auto____10443))
{var and__3546__auto____10444 = p2.call(null,p1__10317_SHARP_);

if(cljs.core.truth_(and__3546__auto____10444))
{return p3.call(null,p1__10317_SHARP_);
} else
{return and__3546__auto____10444;
}
} else
{return and__3546__auto____10443;
}
}),args);
} else
{return and__3546__auto____10442;
}
})());
};
var G__10538 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10538__delegate.call(this, x, y, z, args);
};
G__10538.cljs$lang$maxFixedArity = 3;
G__10538.cljs$lang$applyTo = (function (arglist__10542){
var x = cljs.core.first(arglist__10542);
var y = cljs.core.first(cljs.core.next(arglist__10542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10542)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10542)));
return G__10538__delegate.call(this, x, y, z, args);
});
return G__10538;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10528.call(this);
case  1 :
return ep3__10529.call(this,x);
case  2 :
return ep3__10530.call(this,x,y);
case  3 :
return ep3__10531.call(this,x,y,z);
default:
return ep3__10533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10533.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10468 = (function() { 
var G__10546__delegate = function (p1,p2,p3,ps){
var ps__10450 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10554 = (function (){
return true;
});
var epn__10555 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10318_SHARP_){
return p1__10318_SHARP_.call(null,x);
}),ps__10450);
});
var epn__10556 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10319_SHARP_){
var and__3546__auto____10453 = p1__10319_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10453))
{return p1__10319_SHARP_.call(null,y);
} else
{return and__3546__auto____10453;
}
}),ps__10450);
});
var epn__10557 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10321_SHARP_){
var and__3546__auto____10456 = p1__10321_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10456))
{var and__3546__auto____10458 = p1__10321_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10458))
{return p1__10321_SHARP_.call(null,z);
} else
{return and__3546__auto____10458;
}
} else
{return and__3546__auto____10456;
}
}),ps__10450);
});
var epn__10558 = (function() { 
var G__10566__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10462 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10462))
{return cljs.core.every_QMARK_.call(null,(function (p1__10322_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10322_SHARP_,args);
}),ps__10450);
} else
{return and__3546__auto____10462;
}
})());
};
var G__10566 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10566__delegate.call(this, x, y, z, args);
};
G__10566.cljs$lang$maxFixedArity = 3;
G__10566.cljs$lang$applyTo = (function (arglist__10572){
var x = cljs.core.first(arglist__10572);
var y = cljs.core.first(cljs.core.next(arglist__10572));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10572)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10572)));
return G__10566__delegate.call(this, x, y, z, args);
});
return G__10566;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10554.call(this);
case  1 :
return epn__10555.call(this,x);
case  2 :
return epn__10556.call(this,x,y);
case  3 :
return epn__10557.call(this,x,y,z);
default:
return epn__10558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10558.cljs$lang$applyTo;
return epn;
})()
};
var G__10546 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10546__delegate.call(this, p1, p2, p3, ps);
};
G__10546.cljs$lang$maxFixedArity = 3;
G__10546.cljs$lang$applyTo = (function (arglist__10577){
var p1 = cljs.core.first(arglist__10577);
var p2 = cljs.core.first(cljs.core.next(arglist__10577));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10577)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10577)));
return G__10546__delegate.call(this, p1, p2, p3, ps);
});
return G__10546;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10465.call(this,p1);
case  2 :
return every_pred__10466.call(this,p1,p2);
case  3 :
return every_pred__10467.call(this,p1,p2,p3);
default:
return every_pred__10468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10468.cljs$lang$applyTo;
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
var some_fn__10975 = (function (p){
return (function() {
var sp1 = null;
var sp1__10981 = (function (){
return null;
});
var sp1__10982 = (function (x){
return p.call(null,x);
});
var sp1__10983 = (function (x,y){
var or__3548__auto____10699 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10699))
{return or__3548__auto____10699;
} else
{return p.call(null,y);
}
});
var sp1__10984 = (function (x,y,z){
var or__3548__auto____10700 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10700))
{return or__3548__auto____10700;
} else
{var or__3548__auto____10702 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10702))
{return or__3548__auto____10702;
} else
{return p.call(null,z);
}
}
});
var sp1__10985 = (function() { 
var G__10992__delegate = function (x,y,z,args){
var or__3548__auto____10703 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10703))
{return or__3548__auto____10703;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10992 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10992__delegate.call(this, x, y, z, args);
};
G__10992.cljs$lang$maxFixedArity = 3;
G__10992.cljs$lang$applyTo = (function (arglist__10993){
var x = cljs.core.first(arglist__10993);
var y = cljs.core.first(cljs.core.next(arglist__10993));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10993)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10993)));
return G__10992__delegate.call(this, x, y, z, args);
});
return G__10992;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__10981.call(this);
case  1 :
return sp1__10982.call(this,x);
case  2 :
return sp1__10983.call(this,x,y);
case  3 :
return sp1__10984.call(this,x,y,z);
default:
return sp1__10985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__10985.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__10976 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__10995 = (function (){
return null;
});
var sp2__10996 = (function (x){
var or__3548__auto____10705 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10705))
{return or__3548__auto____10705;
} else
{return p2.call(null,x);
}
});
var sp2__10997 = (function (x,y){
var or__3548__auto____10832 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10832))
{return or__3548__auto____10832;
} else
{var or__3548__auto____10836 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10836))
{return or__3548__auto____10836;
} else
{var or__3548__auto____10837 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10837))
{return or__3548__auto____10837;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__10998 = (function (x,y,z){
var or__3548__auto____10843 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10843))
{return or__3548__auto____10843;
} else
{var or__3548__auto____10845 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10845))
{return or__3548__auto____10845;
} else
{var or__3548__auto____10848 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10848))
{return or__3548__auto____10848;
} else
{var or__3548__auto____10850 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10850))
{return or__3548__auto____10850;
} else
{var or__3548__auto____10853 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10853))
{return or__3548__auto____10853;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__10999 = (function() { 
var G__11006__delegate = function (x,y,z,args){
var or__3548__auto____10861 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10861))
{return or__3548__auto____10861;
} else
{return cljs.core.some.call(null,(function (p1__10400_SHARP_){
var or__3548__auto____10862 = p1.call(null,p1__10400_SHARP_);

if(cljs.core.truth_(or__3548__auto____10862))
{return or__3548__auto____10862;
} else
{return p2.call(null,p1__10400_SHARP_);
}
}),args);
}
};
var G__11006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11006__delegate.call(this, x, y, z, args);
};
G__11006.cljs$lang$maxFixedArity = 3;
G__11006.cljs$lang$applyTo = (function (arglist__11020){
var x = cljs.core.first(arglist__11020);
var y = cljs.core.first(cljs.core.next(arglist__11020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11020)));
return G__11006__delegate.call(this, x, y, z, args);
});
return G__11006;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__10995.call(this);
case  1 :
return sp2__10996.call(this,x);
case  2 :
return sp2__10997.call(this,x,y);
case  3 :
return sp2__10998.call(this,x,y,z);
default:
return sp2__10999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__10999.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__10977 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11022 = (function (){
return null;
});
var sp3__11023 = (function (x){
var or__3548__auto____10863 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10863))
{return or__3548__auto____10863;
} else
{var or__3548__auto____10867 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10867))
{return or__3548__auto____10867;
} else
{return p3.call(null,x);
}
}
});
var sp3__11024 = (function (x,y){
var or__3548__auto____10872 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10872))
{return or__3548__auto____10872;
} else
{var or__3548__auto____10877 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10877))
{return or__3548__auto____10877;
} else
{var or__3548__auto____10878 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10878))
{return or__3548__auto____10878;
} else
{var or__3548__auto____10879 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10879))
{return or__3548__auto____10879;
} else
{var or__3548__auto____10880 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10880))
{return or__3548__auto____10880;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11025 = (function (x,y,z){
var or__3548__auto____10882 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10882))
{return or__3548__auto____10882;
} else
{var or__3548__auto____10929 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10929))
{return or__3548__auto____10929;
} else
{var or__3548__auto____10930 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10930))
{return or__3548__auto____10930;
} else
{var or__3548__auto____10932 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10932))
{return or__3548__auto____10932;
} else
{var or__3548__auto____10933 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10933))
{return or__3548__auto____10933;
} else
{var or__3548__auto____10934 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10934))
{return or__3548__auto____10934;
} else
{var or__3548__auto____10936 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10936))
{return or__3548__auto____10936;
} else
{var or__3548__auto____10937 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10937))
{return or__3548__auto____10937;
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
var sp3__11026 = (function() { 
var G__11044__delegate = function (x,y,z,args){
var or__3548__auto____10943 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10943))
{return or__3548__auto____10943;
} else
{return cljs.core.some.call(null,(function (p1__10401_SHARP_){
var or__3548__auto____10944 = p1.call(null,p1__10401_SHARP_);

if(cljs.core.truth_(or__3548__auto____10944))
{return or__3548__auto____10944;
} else
{var or__3548__auto____10945 = p2.call(null,p1__10401_SHARP_);

if(cljs.core.truth_(or__3548__auto____10945))
{return or__3548__auto____10945;
} else
{return p3.call(null,p1__10401_SHARP_);
}
}
}),args);
}
};
var G__11044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11044__delegate.call(this, x, y, z, args);
};
G__11044.cljs$lang$maxFixedArity = 3;
G__11044.cljs$lang$applyTo = (function (arglist__11126){
var x = cljs.core.first(arglist__11126);
var y = cljs.core.first(cljs.core.next(arglist__11126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11126)));
return G__11044__delegate.call(this, x, y, z, args);
});
return G__11044;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11022.call(this);
case  1 :
return sp3__11023.call(this,x);
case  2 :
return sp3__11024.call(this,x,y);
case  3 :
return sp3__11025.call(this,x,y,z);
default:
return sp3__11026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11026.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__10978 = (function() { 
var G__11128__delegate = function (p1,p2,p3,ps){
var ps__10947 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11130 = (function (){
return null;
});
var spn__11131 = (function (x){
return cljs.core.some.call(null,(function (p1__10402_SHARP_){
return p1__10402_SHARP_.call(null,x);
}),ps__10947);
});
var spn__11132 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10403_SHARP_){
var or__3548__auto____10963 = p1__10403_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10963))
{return or__3548__auto____10963;
} else
{return p1__10403_SHARP_.call(null,y);
}
}),ps__10947);
});
var spn__11133 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10404_SHARP_){
var or__3548__auto____10965 = p1__10404_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10965))
{return or__3548__auto____10965;
} else
{var or__3548__auto____10966 = p1__10404_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10966))
{return or__3548__auto____10966;
} else
{return p1__10404_SHARP_.call(null,z);
}
}
}),ps__10947);
});
var spn__11134 = (function() { 
var G__11144__delegate = function (x,y,z,args){
var or__3548__auto____10967 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10967))
{return or__3548__auto____10967;
} else
{return cljs.core.some.call(null,(function (p1__10406_SHARP_){
return cljs.core.some.call(null,p1__10406_SHARP_,args);
}),ps__10947);
}
};
var G__11144 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11144__delegate.call(this, x, y, z, args);
};
G__11144.cljs$lang$maxFixedArity = 3;
G__11144.cljs$lang$applyTo = (function (arglist__11147){
var x = cljs.core.first(arglist__11147);
var y = cljs.core.first(cljs.core.next(arglist__11147));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11147)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11147)));
return G__11144__delegate.call(this, x, y, z, args);
});
return G__11144;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11130.call(this);
case  1 :
return spn__11131.call(this,x);
case  2 :
return spn__11132.call(this,x,y);
case  3 :
return spn__11133.call(this,x,y,z);
default:
return spn__11134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11134.cljs$lang$applyTo;
return spn;
})()
};
var G__11128 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11128__delegate.call(this, p1, p2, p3, ps);
};
G__11128.cljs$lang$maxFixedArity = 3;
G__11128.cljs$lang$applyTo = (function (arglist__11154){
var p1 = cljs.core.first(arglist__11154);
var p2 = cljs.core.first(cljs.core.next(arglist__11154));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11154)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11154)));
return G__11128__delegate.call(this, p1, p2, p3, ps);
});
return G__11128;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__10975.call(this,p1);
case  2 :
return some_fn__10976.call(this,p1,p2);
case  3 :
return some_fn__10977.call(this,p1,p2,p3);
default:
return some_fn__10978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__10978.cljs$lang$applyTo;
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
var map__11252 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11161 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11161))
{var s__11163 = temp__3698__auto____11161;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11163)),map.call(null,f,cljs.core.rest.call(null,s__11163)));
} else
{return null;
}
})));
});
var map__11253 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11169 = cljs.core.seq.call(null,c1);
var s2__11170 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11171 = s1__11169;

if(cljs.core.truth_(and__3546__auto____11171))
{return s2__11170;
} else
{return and__3546__auto____11171;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11169),cljs.core.first.call(null,s2__11170)),map.call(null,f,cljs.core.rest.call(null,s1__11169),cljs.core.rest.call(null,s2__11170)));
} else
{return null;
}
})));
});
var map__11254 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11174 = cljs.core.seq.call(null,c1);
var s2__11176 = cljs.core.seq.call(null,c2);
var s3__11177 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11178 = s1__11174;

if(cljs.core.truth_(and__3546__auto____11178))
{var and__3546__auto____11179 = s2__11176;

if(cljs.core.truth_(and__3546__auto____11179))
{return s3__11177;
} else
{return and__3546__auto____11179;
}
} else
{return and__3546__auto____11178;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11174),cljs.core.first.call(null,s2__11176),cljs.core.first.call(null,s3__11177)),map.call(null,f,cljs.core.rest.call(null,s1__11174),cljs.core.rest.call(null,s2__11176),cljs.core.rest.call(null,s3__11177)));
} else
{return null;
}
})));
});
var map__11255 = (function() { 
var G__11261__delegate = function (f,c1,c2,c3,colls){
var step__11205 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11199 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11199)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11199),step.call(null,map.call(null,cljs.core.rest,ss__11199)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10579_SHARP_){
return cljs.core.apply.call(null,f,p1__10579_SHARP_);
}),step__11205.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11261 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11261__delegate.call(this, f, c1, c2, c3, colls);
};
G__11261.cljs$lang$maxFixedArity = 4;
G__11261.cljs$lang$applyTo = (function (arglist__11264){
var f = cljs.core.first(arglist__11264);
var c1 = cljs.core.first(cljs.core.next(arglist__11264));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11264)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11264))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11264))));
return G__11261__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11261;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11252.call(this,f,c1);
case  3 :
return map__11253.call(this,f,c1,c2);
case  4 :
return map__11254.call(this,f,c1,c2,c3);
default:
return map__11255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11255.cljs$lang$applyTo;
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
{var temp__3698__auto____11268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11268))
{var s__11269 = temp__3698__auto____11268;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11269),take.call(null,(n - 1),cljs.core.rest.call(null,s__11269)));
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
var step__11295 = (function (n,coll){
while(true){
var s__11285 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11286 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11286))
{return s__11285;
} else
{return and__3546__auto____11286;
}
})()))
{{
var G__11308 = (n - 1);
var G__11309 = cljs.core.rest.call(null,s__11285);
n = G__11308;
coll = G__11309;
continue;
}
} else
{return s__11285;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11295.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11323 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11325 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11323.call(this,n);
case  2 :
return drop_last__11325.call(this,n,s);
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
var s__11334 = cljs.core.seq.call(null,coll);
var lead__11336 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11336))
{{
var G__11343 = cljs.core.next.call(null,s__11334);
var G__11344 = cljs.core.next.call(null,lead__11336);
s__11334 = G__11343;
lead__11336 = G__11344;
continue;
}
} else
{return s__11334;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11376 = (function (pred,coll){
while(true){
var s__11350 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11374 = s__11350;

if(cljs.core.truth_(and__3546__auto____11374))
{return pred.call(null,cljs.core.first.call(null,s__11350));
} else
{return and__3546__auto____11374;
}
})()))
{{
var G__11400 = pred;
var G__11401 = cljs.core.rest.call(null,s__11350);
pred = G__11400;
coll = G__11401;
continue;
}
} else
{return s__11350;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11376.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11405 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11405))
{var s__11406 = temp__3698__auto____11405;

return cljs.core.concat.call(null,s__11406,cycle.call(null,s__11406));
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
var repeat__11423 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11424 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11423.call(this,n);
case  2 :
return repeat__11424.call(this,n,x);
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
var repeatedly__11455 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11457 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11455.call(this,n);
case  2 :
return repeatedly__11457.call(this,n,f);
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
var interleave__11491 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11471 = cljs.core.seq.call(null,c1);
var s2__11472 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11474 = s1__11471;

if(cljs.core.truth_(and__3546__auto____11474))
{return s2__11472;
} else
{return and__3546__auto____11474;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11471),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11472),interleave.call(null,cljs.core.rest.call(null,s1__11471),cljs.core.rest.call(null,s2__11472))));
} else
{return null;
}
})));
});
var interleave__11492 = (function() { 
var G__11495__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11483 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11483)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11483),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11483)));
} else
{return null;
}
})));
};
var G__11495 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11495__delegate.call(this, c1, c2, colls);
};
G__11495.cljs$lang$maxFixedArity = 2;
G__11495.cljs$lang$applyTo = (function (arglist__11503){
var c1 = cljs.core.first(arglist__11503);
var c2 = cljs.core.first(cljs.core.next(arglist__11503));
var colls = cljs.core.rest(cljs.core.next(arglist__11503));
return G__11495__delegate.call(this, c1, c2, colls);
});
return G__11495;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11491.call(this,c1,c2);
default:
return interleave__11492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11492.cljs$lang$applyTo;
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
var cat__11529 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11523 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11523))
{var coll__11525 = temp__3695__auto____11523;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11525),cat.call(null,cljs.core.rest.call(null,coll__11525),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11529.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11538 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11539 = (function() { 
var G__11543__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11543 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11543__delegate.call(this, f, coll, colls);
};
G__11543.cljs$lang$maxFixedArity = 2;
G__11543.cljs$lang$applyTo = (function (arglist__11544){
var f = cljs.core.first(arglist__11544);
var coll = cljs.core.first(cljs.core.next(arglist__11544));
var colls = cljs.core.rest(cljs.core.next(arglist__11544));
return G__11543__delegate.call(this, f, coll, colls);
});
return G__11543;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11538.call(this,f,coll);
default:
return mapcat__11539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11539.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11548 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11548))
{var s__11552 = temp__3698__auto____11548;

var f__11553 = cljs.core.first.call(null,s__11552);
var r__11554 = cljs.core.rest.call(null,s__11552);

if(cljs.core.truth_(pred.call(null,f__11553)))
{return cljs.core.cons.call(null,f__11553,filter.call(null,pred,r__11554));
} else
{return filter.call(null,pred,r__11554);
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
var walk__11583 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11583.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11574_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11574_SHARP_));
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
var partition__11641 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11642 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11619))
{var s__11620 = temp__3698__auto____11619;

var p__11621 = cljs.core.take.call(null,n,s__11620);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11621))))
{return cljs.core.cons.call(null,p__11621,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11620)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11643 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11629 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11629))
{var s__11631 = temp__3698__auto____11629;

var p__11633 = cljs.core.take.call(null,n,s__11631);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11633))))
{return cljs.core.cons.call(null,p__11633,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11631)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11633,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11641.call(this,n,step);
case  3 :
return partition__11642.call(this,n,step,pad);
case  4 :
return partition__11643.call(this,n,step,pad,coll);
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
var get_in__11685 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11689 = (function (m,ks,not_found){
var sentinel__11677 = cljs.core.lookup_sentinel;
var m__11679 = m;
var ks__11680 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11680))
{var m__11681 = cljs.core.get.call(null,m__11679,cljs.core.first.call(null,ks__11680),sentinel__11677);

if(cljs.core.truth_((sentinel__11677 === m__11681)))
{return not_found;
} else
{{
var G__11698 = sentinel__11677;
var G__11700 = m__11681;
var G__11701 = cljs.core.next.call(null,ks__11680);
sentinel__11677 = G__11698;
m__11679 = G__11700;
ks__11680 = G__11701;
continue;
}
}
} else
{return m__11679;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11685.call(this,m,ks);
case  3 :
return get_in__11689.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11706,v){
var vec__11708__11709 = p__11706;
var k__11710 = cljs.core.nth.call(null,vec__11708__11709,0,null);
var ks__11711 = cljs.core.nthnext.call(null,vec__11708__11709,1);

if(cljs.core.truth_(ks__11711))
{return cljs.core.assoc.call(null,m,k__11710,assoc_in.call(null,cljs.core.get.call(null,m,k__11710),ks__11711,v));
} else
{return cljs.core.assoc.call(null,m,k__11710,v);
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
var update_in__delegate = function (m,p__11713,f,args){
var vec__11714__11716 = p__11713;
var k__11717 = cljs.core.nth.call(null,vec__11714__11716,0,null);
var ks__11719 = cljs.core.nthnext.call(null,vec__11714__11716,1);

if(cljs.core.truth_(ks__11719))
{return cljs.core.assoc.call(null,m,k__11717,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11717),ks__11719,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11717,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11717),args));
}
};
var update_in = function (m,p__11713,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11713, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11729){
var m = cljs.core.first(arglist__11729);
var p__11713 = cljs.core.first(cljs.core.next(arglist__11729));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11729)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11729)));
return update_in__delegate.call(this, m, p__11713, f, args);
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
var this__11789 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11869 = null;
var G__11869__11871 = (function (coll,k){
var this__11790 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11869__11872 = (function (coll,k,not_found){
var this__11791 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11869 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11869__11871.call(this,coll,k);
case  3 :
return G__11869__11872.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11869;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11799 = this;
var new_array__11801 = cljs.core.aclone.call(null,this__11799.array);

(new_array__11801[k] = v);
return (new cljs.core.Vector(this__11799.meta,new_array__11801));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11885 = null;
var G__11885__11888 = (function (coll,k){
var this__11805 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11885__11889 = (function (coll,k,not_found){
var this__11807 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11885 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11885__11888.call(this,coll,k);
case  3 :
return G__11885__11889.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11885;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11819 = this;
var new_array__11820 = cljs.core.aclone.call(null,this__11819.array);

new_array__11820.push(o);
return (new cljs.core.Vector(this__11819.meta,new_array__11820));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11897 = null;
var G__11897__11900 = (function (v,f){
var this__11822 = this;
return cljs.core.ci_reduce.call(null,this__11822.array,f);
});
var G__11897__11901 = (function (v,f,start){
var this__11823 = this;
return cljs.core.ci_reduce.call(null,this__11823.array,f,start);
});
G__11897 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11897__11900.call(this,v,f);
case  3 :
return G__11897__11901.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11897;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11825 = this;
if(cljs.core.truth_((this__11825.array.length > 0)))
{var vector_seq__11831 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11825.array.length)))
{return cljs.core.cons.call(null,(this__11825.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11831.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11832 = this;
return this__11832.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11833 = this;
var count__11835 = this__11833.array.length;

if(cljs.core.truth_((count__11835 > 0)))
{return (this__11833.array[(count__11835 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11836 = this;
if(cljs.core.truth_((this__11836.array.length > 0)))
{var new_array__11843 = cljs.core.aclone.call(null,this__11836.array);

new_array__11843.pop();
return (new cljs.core.Vector(this__11836.meta,new_array__11843));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11846 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11847 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11849 = this;
return (new cljs.core.Vector(meta,this__11849.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11854 = this;
return this__11854.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12029 = null;
var G__12029__12030 = (function (coll,n){
var this__11855 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11856 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11856))
{return (n < this__11855.array.length);
} else
{return and__3546__auto____11856;
}
})()))
{return (this__11855.array[n]);
} else
{return null;
}
});
var G__12029__12031 = (function (coll,n,not_found){
var this__11858 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11860 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11860))
{return (n < this__11858.array.length);
} else
{return and__3546__auto____11860;
}
})()))
{return (this__11858.array[n]);
} else
{return not_found;
}
});
G__12029 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12029__12030.call(this,coll,n);
case  3 :
return G__12029__12031.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12029;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11862 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11862.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12107){
var args = cljs.core.seq( arglist__12107 );;
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
var this__12111 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12146 = null;
var G__12146__12147 = (function (coll,k){
var this__12112 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12146__12148 = (function (coll,k,not_found){
var this__12113 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12146 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12146__12147.call(this,coll,k);
case  3 :
return G__12146__12148.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12146;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12115 = this;
var v_pos__12116 = (this__12115.start + key);

return (new cljs.core.Subvec(this__12115.meta,cljs.core._assoc.call(null,this__12115.v,v_pos__12116,val),this__12115.start,((this__12115.end > (v_pos__12116 + 1)) ? this__12115.end : (v_pos__12116 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12152 = null;
var G__12152__12153 = (function (coll,k){
var this__12119 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12152__12154 = (function (coll,k,not_found){
var this__12120 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12152 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12152__12153.call(this,coll,k);
case  3 :
return G__12152__12154.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12152;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12121 = this;
return (new cljs.core.Subvec(this__12121.meta,cljs.core._assoc_n.call(null,this__12121.v,this__12121.end,o),this__12121.start,(this__12121.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12259 = null;
var G__12259__12260 = (function (coll,f){
var this__12122 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12259__12261 = (function (coll,f,start){
var this__12124 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12259 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12259__12260.call(this,coll,f);
case  3 :
return G__12259__12261.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12259;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12127 = this;
var subvec_seq__12130 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12127.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12127.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12130.call(null,this__12127.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12131 = this;
return (this__12131.end - this__12131.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12132 = this;
return cljs.core._nth.call(null,this__12132.v,(this__12132.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12133 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12133.start,this__12133.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12133.meta,this__12133.v,this__12133.start,(this__12133.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12134 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12135 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12136 = this;
return (new cljs.core.Subvec(meta,this__12136.v,this__12136.start,this__12136.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12138 = this;
return this__12138.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12274 = null;
var G__12274__12275 = (function (coll,n){
var this__12141 = this;
return cljs.core._nth.call(null,this__12141.v,(this__12141.start + n));
});
var G__12274__12276 = (function (coll,n,not_found){
var this__12142 = this;
return cljs.core._nth.call(null,this__12142.v,(this__12142.start + n),not_found);
});
G__12274 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12274__12275.call(this,coll,n);
case  3 :
return G__12274__12276.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12274;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12144 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12144.meta);
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
var subvec__12289 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12290 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12289.call(this,v,start);
case  3 :
return subvec__12290.call(this,v,start,end);
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
var this__12340 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12342 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12343 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12343.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12344 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12345 = this;
return cljs.core._first.call(null,this__12345.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12346 = this;
var temp__3695__auto____12347 = cljs.core.next.call(null,this__12346.front);

if(cljs.core.truth_(temp__3695__auto____12347))
{var f1__12348 = temp__3695__auto____12347;

return (new cljs.core.PersistentQueueSeq(this__12346.meta,f1__12348,this__12346.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12346.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12346.meta,this__12346.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12349 = this;
return this__12349.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12350 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12350.front,this__12350.rear));
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
var this__12376 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12377 = this;
if(cljs.core.truth_(this__12377.front))
{return (new cljs.core.PersistentQueue(this__12377.meta,(this__12377.count + 1),this__12377.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12378 = this__12377.rear;

if(cljs.core.truth_(or__3548__auto____12378))
{return or__3548__auto____12378;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12377.meta,(this__12377.count + 1),cljs.core.conj.call(null,this__12377.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12383 = this;
var rear__12384 = cljs.core.seq.call(null,this__12383.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12385 = this__12383.front;

if(cljs.core.truth_(or__3548__auto____12385))
{return or__3548__auto____12385;
} else
{return rear__12384;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12383.front,cljs.core.seq.call(null,rear__12384)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12386 = this;
return this__12386.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12387 = this;
return cljs.core._first.call(null,this__12387.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12388 = this;
if(cljs.core.truth_(this__12388.front))
{var temp__3695__auto____12389 = cljs.core.next.call(null,this__12388.front);

if(cljs.core.truth_(temp__3695__auto____12389))
{var f1__12390 = temp__3695__auto____12389;

return (new cljs.core.PersistentQueue(this__12388.meta,(this__12388.count - 1),f1__12390,this__12388.rear));
} else
{return (new cljs.core.PersistentQueue(this__12388.meta,(this__12388.count - 1),cljs.core.seq.call(null,this__12388.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12391 = this;
return cljs.core.first.call(null,this__12391.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12392 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12393 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12394 = this;
return (new cljs.core.PersistentQueue(meta,this__12394.count,this__12394.front,this__12394.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12395 = this;
return this__12395.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12397 = this;
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
var this__12477 = this;
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
var len__12509 = array.length;

var i__12510 = 0;

while(true){
if(cljs.core.truth_((i__12510 < len__12509)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12510]))))
{return i__12510;
} else
{{
var G__12511 = (i__12510 + incr);
i__12510 = G__12511;
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
var obj_map_contains_key_QMARK___12513 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12514 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12512 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12512))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12512;
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
return obj_map_contains_key_QMARK___12513.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12514.call(this,k,strobj,true_val,false_val);
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
var this__12529 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12580 = null;
var G__12580__12581 = (function (coll,k){
var this__12532 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12580__12584 = (function (coll,k,not_found){
var this__12533 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12533.strobj,(this__12533.strobj[k]),not_found);
});
G__12580 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12580__12581.call(this,coll,k);
case  3 :
return G__12580__12584.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12580;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12534 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12535 = goog.object.clone.call(null,this__12534.strobj);
var overwrite_QMARK___12536 = new_strobj__12535.hasOwnProperty(k);

(new_strobj__12535[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12536))
{return (new cljs.core.ObjMap(this__12534.meta,this__12534.keys,new_strobj__12535));
} else
{var new_keys__12541 = cljs.core.aclone.call(null,this__12534.keys);

new_keys__12541.push(k);
return (new cljs.core.ObjMap(this__12534.meta,new_keys__12541,new_strobj__12535));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12534.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12542 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12542.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12618 = null;
var G__12618__12620 = (function (coll,k){
var this__12543 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12618__12621 = (function (coll,k,not_found){
var this__12544 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12618 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12618__12620.call(this,coll,k);
case  3 :
return G__12618__12621.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12618;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12545 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12546 = this;
if(cljs.core.truth_((this__12546.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12519_SHARP_){
return cljs.core.vector.call(null,p1__12519_SHARP_,(this__12546.strobj[p1__12519_SHARP_]));
}),this__12546.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12551 = this;
return this__12551.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12563 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12568 = this;
return (new cljs.core.ObjMap(meta,this__12568.keys,this__12568.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12570 = this;
return this__12570.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12571 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12571.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12572 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12573 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12573))
{return this__12572.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12573;
}
})()))
{var new_keys__12574 = cljs.core.aclone.call(null,this__12572.keys);
var new_strobj__12575 = goog.object.clone.call(null,this__12572.strobj);

new_keys__12574.splice(cljs.core.scan_array.call(null,1,k,new_keys__12574),1);
cljs.core.js_delete.call(null,new_strobj__12575,k);
return (new cljs.core.ObjMap(this__12572.meta,new_keys__12574,new_strobj__12575));
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
var this__12658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12768 = null;
var G__12768__12769 = (function (coll,k){
var this__12660 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12768__12770 = (function (coll,k,not_found){
var this__12661 = this;
var bucket__12663 = (this__12661.hashobj[cljs.core.hash.call(null,k)]);
var i__12665 = (cljs.core.truth_(bucket__12663)?cljs.core.scan_array.call(null,2,k,bucket__12663):null);

if(cljs.core.truth_(i__12665))
{return (bucket__12663[(i__12665 + 1)]);
} else
{return not_found;
}
});
G__12768 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12768__12769.call(this,coll,k);
case  3 :
return G__12768__12770.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12768;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12668 = this;
var h__12669 = cljs.core.hash.call(null,k);
var bucket__12671 = (this__12668.hashobj[h__12669]);

if(cljs.core.truth_(bucket__12671))
{var new_bucket__12673 = cljs.core.aclone.call(null,bucket__12671);
var new_hashobj__12674 = goog.object.clone.call(null,this__12668.hashobj);

(new_hashobj__12674[h__12669] = new_bucket__12673);
var temp__3695__auto____12677 = cljs.core.scan_array.call(null,2,k,new_bucket__12673);

if(cljs.core.truth_(temp__3695__auto____12677))
{var i__12678 = temp__3695__auto____12677;

(new_bucket__12673[(i__12678 + 1)] = v);
return (new cljs.core.HashMap(this__12668.meta,this__12668.count,new_hashobj__12674));
} else
{new_bucket__12673.push(k,v);
return (new cljs.core.HashMap(this__12668.meta,(this__12668.count + 1),new_hashobj__12674));
}
} else
{var new_hashobj__12681 = goog.object.clone.call(null,this__12668.hashobj);

(new_hashobj__12681[h__12669] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12668.meta,(this__12668.count + 1),new_hashobj__12681));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12683 = this;
var bucket__12685 = (this__12683.hashobj[cljs.core.hash.call(null,k)]);
var i__12686 = (cljs.core.truth_(bucket__12685)?cljs.core.scan_array.call(null,2,k,bucket__12685):null);

if(cljs.core.truth_(i__12686))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12774 = null;
var G__12774__12775 = (function (coll,k){
var this__12688 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12774__12776 = (function (coll,k,not_found){
var this__12691 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12774 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12774__12775.call(this,coll,k);
case  3 :
return G__12774__12776.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12774;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12693 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12697 = this;
if(cljs.core.truth_((this__12697.count > 0)))
{var hashes__12710 = cljs.core.js_keys.call(null,this__12697.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12645_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12697.hashobj[p1__12645_SHARP_])));
}),hashes__12710);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12714 = this;
return this__12714.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12716 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12718 = this;
return (new cljs.core.HashMap(meta,this__12718.count,this__12718.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12722 = this;
return this__12722.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12723 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12723.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12724 = this;
var h__12725 = cljs.core.hash.call(null,k);
var bucket__12726 = (this__12724.hashobj[h__12725]);
var i__12727 = (cljs.core.truth_(bucket__12726)?cljs.core.scan_array.call(null,2,k,bucket__12726):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12727)))
{return coll;
} else
{var new_hashobj__12729 = goog.object.clone.call(null,this__12724.hashobj);

if(cljs.core.truth_((3 > bucket__12726.length)))
{cljs.core.js_delete.call(null,new_hashobj__12729,h__12725);
} else
{var new_bucket__12731 = cljs.core.aclone.call(null,bucket__12726);

new_bucket__12731.splice(i__12727,2);
(new_hashobj__12729[h__12725] = new_bucket__12731);
}
return (new cljs.core.HashMap(this__12724.meta,(this__12724.count - 1),new_hashobj__12729));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12862 = ks.length;

var i__12864 = 0;
var out__12865 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12864 < len__12862)))
{{
var G__12867 = (i__12864 + 1);
var G__12868 = cljs.core.assoc.call(null,out__12865,(ks[i__12864]),(vs[i__12864]));
i__12864 = G__12867;
out__12865 = G__12868;
continue;
}
} else
{return out__12865;
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
var in$__12875 = cljs.core.seq.call(null,keyvals);
var out__12876 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12875))
{{
var G__12884 = cljs.core.nnext.call(null,in$__12875);
var G__12885 = cljs.core.assoc.call(null,out__12876,cljs.core.first.call(null,in$__12875),cljs.core.second.call(null,in$__12875));
in$__12875 = G__12884;
out__12876 = G__12885;
continue;
}
} else
{return out__12876;
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
hash_map.cljs$lang$applyTo = (function (arglist__12888){
var keyvals = cljs.core.seq( arglist__12888 );;
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
{return cljs.core.reduce.call(null,(function (p1__12908_SHARP_,p2__12909_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12913 = p1__12908_SHARP_;

if(cljs.core.truth_(or__3548__auto____12913))
{return or__3548__auto____12913;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12909_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12918){
var maps = cljs.core.seq( arglist__12918 );;
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
{var merge_entry__12924 = (function (m,e){
var k__12922 = cljs.core.first.call(null,e);
var v__12923 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12922)))
{return cljs.core.assoc.call(null,m,k__12922,f.call(null,cljs.core.get.call(null,m,k__12922),v__12923));
} else
{return cljs.core.assoc.call(null,m,k__12922,v__12923);
}
});
var merge2__12928 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12924,(function (){var or__3548__auto____12925 = m1;

if(cljs.core.truth_(or__3548__auto____12925))
{return or__3548__auto____12925;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12928,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12938){
var f = cljs.core.first(arglist__12938);
var maps = cljs.core.rest(arglist__12938);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12945 = cljs.core.ObjMap.fromObject([],{});
var keys__12948 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12948))
{var key__12949 = cljs.core.first.call(null,keys__12948);
var entry__12950 = cljs.core.get.call(null,map,key__12949,"﷐'user/not-found");

{
var G__12965 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12950,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12945,key__12949,entry__12950):ret__12945);
var G__12966 = cljs.core.next.call(null,keys__12948);
ret__12945 = G__12965;
keys__12948 = G__12966;
continue;
}
} else
{return ret__12945;
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
var this__12978 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13059 = null;
var G__13059__13060 = (function (coll,v){
var this__12981 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13059__13061 = (function (coll,v,not_found){
var this__12984 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12984.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13059 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13059__13060.call(this,coll,v);
case  3 :
return G__13059__13061.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13059;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13063 = null;
var G__13063__13064 = (function (coll,k){
var this__12988 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13063__13065 = (function (coll,k,not_found){
var this__12990 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
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
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12991 = this;
return (new cljs.core.Set(this__12991.meta,cljs.core.assoc.call(null,this__12991.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13024 = this;
return cljs.core.keys.call(null,this__13024.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13026 = this;
return (new cljs.core.Set(this__13026.meta,cljs.core.dissoc.call(null,this__13026.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13032 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13034 = this;
var and__3546__auto____13035 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13035))
{var and__3546__auto____13037 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13037))
{return cljs.core.every_QMARK_.call(null,(function (p1__12939_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12939_SHARP_);
}),other);
} else
{return and__3546__auto____13037;
}
} else
{return and__3546__auto____13035;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13040 = this;
return (new cljs.core.Set(meta,this__13040.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13057 = this;
return this__13057.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13058 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13058.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13091 = cljs.core.seq.call(null,coll);
var out__13092 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13091))))
{{
var G__13095 = cljs.core.rest.call(null,in$__13091);
var G__13096 = cljs.core.conj.call(null,out__13092,cljs.core.first.call(null,in$__13091));
in$__13091 = G__13095;
out__13092 = G__13096;
continue;
}
} else
{return out__13092;
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
{var n__13097 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13098 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13098))
{var e__13099 = temp__3695__auto____13098;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13099));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13097,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13087_SHARP_){
var temp__3695__auto____13100 = cljs.core.find.call(null,smap,p1__13087_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13100))
{var e__13101 = temp__3695__auto____13100;

return cljs.core.second.call(null,e__13101);
} else
{return p1__13087_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13121 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13108,seen){
while(true){
var vec__13110__13111 = p__13108;
var f__13112 = cljs.core.nth.call(null,vec__13110__13111,0,null);
var xs__13113 = vec__13110__13111;

var temp__3698__auto____13116 = cljs.core.seq.call(null,xs__13113);

if(cljs.core.truth_(temp__3698__auto____13116))
{var s__13117 = temp__3698__auto____13116;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13112)))
{{
var G__13128 = cljs.core.rest.call(null,s__13117);
var G__13129 = seen;
p__13108 = G__13128;
seen = G__13129;
continue;
}
} else
{return cljs.core.cons.call(null,f__13112,step.call(null,cljs.core.rest.call(null,s__13117),cljs.core.conj.call(null,seen,f__13112)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13121.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13136 = cljs.core.Vector.fromArray([]);
var s__13137 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13137)))
{{
var G__13140 = cljs.core.conj.call(null,ret__13136,cljs.core.first.call(null,s__13137));
var G__13141 = cljs.core.next.call(null,s__13137);
ret__13136 = G__13140;
s__13137 = G__13141;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13136);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13163 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13163))
{return or__3548__auto____13163;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13164 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13164 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13164 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13170 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13170))
{return or__3548__auto____13170;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13171 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13171 > -1)))
{return cljs.core.subs.call(null,x,2,i__13171);
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
var map__13174 = cljs.core.ObjMap.fromObject([],{});
var ks__13175 = cljs.core.seq.call(null,keys);
var vs__13176 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13177 = ks__13175;

if(cljs.core.truth_(and__3546__auto____13177))
{return vs__13176;
} else
{return and__3546__auto____13177;
}
})()))
{{
var G__13250 = cljs.core.assoc.call(null,map__13174,cljs.core.first.call(null,ks__13175),cljs.core.first.call(null,vs__13176));
var G__13251 = cljs.core.next.call(null,ks__13175);
var G__13252 = cljs.core.next.call(null,vs__13176);
map__13174 = G__13250;
ks__13175 = G__13251;
vs__13176 = G__13252;
continue;
}
} else
{return map__13174;
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
var max_key__13260 = (function (k,x){
return x;
});
var max_key__13261 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13262 = (function() { 
var G__13264__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13172_SHARP_,p2__13173_SHARP_){
return max_key.call(null,k,p1__13172_SHARP_,p2__13173_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13264 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13264__delegate.call(this, k, x, y, more);
};
G__13264.cljs$lang$maxFixedArity = 3;
G__13264.cljs$lang$applyTo = (function (arglist__13265){
var k = cljs.core.first(arglist__13265);
var x = cljs.core.first(cljs.core.next(arglist__13265));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13265)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13265)));
return G__13264__delegate.call(this, k, x, y, more);
});
return G__13264;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13260.call(this,k,x);
case  3 :
return max_key__13261.call(this,k,x,y);
default:
return max_key__13262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13262.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13266 = (function (k,x){
return x;
});
var min_key__13267 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13268 = (function() { 
var G__13270__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13254_SHARP_,p2__13255_SHARP_){
return min_key.call(null,k,p1__13254_SHARP_,p2__13255_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13270 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13270__delegate.call(this, k, x, y, more);
};
G__13270.cljs$lang$maxFixedArity = 3;
G__13270.cljs$lang$applyTo = (function (arglist__13271){
var k = cljs.core.first(arglist__13271);
var x = cljs.core.first(cljs.core.next(arglist__13271));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13271)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13271)));
return G__13270__delegate.call(this, k, x, y, more);
});
return G__13270;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13266.call(this,k,x);
case  3 :
return min_key__13267.call(this,k,x,y);
default:
return min_key__13268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13268.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13274 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13275 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13272 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13272))
{var s__13273 = temp__3698__auto____13272;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13273),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13273)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13274.call(this,n,step);
case  3 :
return partition_all__13275.call(this,n,step,coll);
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
var temp__3698__auto____13277 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13277))
{var s__13278 = temp__3698__auto____13277;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13278))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13278),take_while.call(null,pred,cljs.core.rest.call(null,s__13278)));
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
var this__13306 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13348 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13366 = null;
var G__13366__13367 = (function (rng,f){
var this__13349 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13366__13368 = (function (rng,f,s){
var this__13350 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13366 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13366__13367.call(this,rng,f);
case  3 :
return G__13366__13368.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13366;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13351 = this;
var comp__13352 = (cljs.core.truth_((this__13351.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13352.call(null,this__13351.start,this__13351.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13353 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13353.end - this__13353.start) / this__13353.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13354 = this;
return this__13354.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13355 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13355.meta,(this__13355.start + this__13355.step),this__13355.end,this__13355.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13356 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13357 = this;
return (new cljs.core.Range(meta,this__13357.start,this__13357.end,this__13357.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13358 = this;
return this__13358.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13383 = null;
var G__13383__13385 = (function (rng,n){
var this__13359 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13359.start + (n * this__13359.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13361 = (this__13359.start > this__13359.end);

if(cljs.core.truth_(and__3546__auto____13361))
{return cljs.core._EQ_.call(null,this__13359.step,0);
} else
{return and__3546__auto____13361;
}
})()))
{return this__13359.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13383__13386 = (function (rng,n,not_found){
var this__13363 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13363.start + (n * this__13363.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13364 = (this__13363.start > this__13363.end);

if(cljs.core.truth_(and__3546__auto____13364))
{return cljs.core._EQ_.call(null,this__13363.step,0);
} else
{return and__3546__auto____13364;
}
})()))
{return this__13363.start;
} else
{return not_found;
}
}
});
G__13383 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13383__13385.call(this,rng,n);
case  3 :
return G__13383__13386.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13383;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13365 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13365.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13434 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13435 = (function (end){
return range.call(null,0,end,1);
});
var range__13436 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13437 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13434.call(this);
case  1 :
return range__13435.call(this,start);
case  2 :
return range__13436.call(this,start,end);
case  3 :
return range__13437.call(this,start,end,step);
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
var temp__3698__auto____13441 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13441))
{var s__13442 = temp__3698__auto____13441;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13442),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13442)));
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
var temp__3698__auto____13447 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13447))
{var s__13449 = temp__3698__auto____13447;

var fst__13451 = cljs.core.first.call(null,s__13449);
var fv__13452 = f.call(null,fst__13451);
var run__13453 = cljs.core.cons.call(null,fst__13451,cljs.core.take_while.call(null,(function (p1__13443_SHARP_){
return cljs.core._EQ_.call(null,fv__13452,f.call(null,p1__13443_SHARP_));
}),cljs.core.next.call(null,s__13449)));

return cljs.core.cons.call(null,run__13453,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13453),s__13449))));
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
var reductions__13482 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13472 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13472))
{var s__13473 = temp__3695__auto____13472;

return reductions.call(null,f,cljs.core.first.call(null,s__13473),cljs.core.rest.call(null,s__13473));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13483 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13476 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13476))
{var s__13478 = temp__3698__auto____13476;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13478)),cljs.core.rest.call(null,s__13478));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13482.call(this,f,init);
case  3 :
return reductions__13483.call(this,f,init,coll);
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
var juxt__13516 = (function (f){
return (function() {
var G__13523 = null;
var G__13523__13524 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13523__13525 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13523__13526 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13523__13527 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13523__13528 = (function() { 
var G__13533__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13533 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13533__delegate.call(this, x, y, z, args);
};
G__13533.cljs$lang$maxFixedArity = 3;
G__13533.cljs$lang$applyTo = (function (arglist__13534){
var x = cljs.core.first(arglist__13534);
var y = cljs.core.first(cljs.core.next(arglist__13534));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13534)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13534)));
return G__13533__delegate.call(this, x, y, z, args);
});
return G__13533;
})()
;
G__13523 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13523__13524.call(this);
case  1 :
return G__13523__13525.call(this,x);
case  2 :
return G__13523__13526.call(this,x,y);
case  3 :
return G__13523__13527.call(this,x,y,z);
default:
return G__13523__13528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13523.cljs$lang$maxFixedArity = 3;
G__13523.cljs$lang$applyTo = G__13523__13528.cljs$lang$applyTo;
return G__13523;
})()
});
var juxt__13517 = (function (f,g){
return (function() {
var G__13535 = null;
var G__13535__13536 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13535__13537 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13535__13538 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13535__13539 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13535__13540 = (function() { 
var G__13542__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13542 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13542__delegate.call(this, x, y, z, args);
};
G__13542.cljs$lang$maxFixedArity = 3;
G__13542.cljs$lang$applyTo = (function (arglist__13543){
var x = cljs.core.first(arglist__13543);
var y = cljs.core.first(cljs.core.next(arglist__13543));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13543)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13543)));
return G__13542__delegate.call(this, x, y, z, args);
});
return G__13542;
})()
;
G__13535 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13535__13536.call(this);
case  1 :
return G__13535__13537.call(this,x);
case  2 :
return G__13535__13538.call(this,x,y);
case  3 :
return G__13535__13539.call(this,x,y,z);
default:
return G__13535__13540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13535.cljs$lang$maxFixedArity = 3;
G__13535.cljs$lang$applyTo = G__13535__13540.cljs$lang$applyTo;
return G__13535;
})()
});
var juxt__13518 = (function (f,g,h){
return (function() {
var G__13544 = null;
var G__13544__13545 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13544__13546 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13544__13547 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13544__13548 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13544__13549 = (function() { 
var G__13551__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13551 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13551__delegate.call(this, x, y, z, args);
};
G__13551.cljs$lang$maxFixedArity = 3;
G__13551.cljs$lang$applyTo = (function (arglist__13552){
var x = cljs.core.first(arglist__13552);
var y = cljs.core.first(cljs.core.next(arglist__13552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13552)));
return G__13551__delegate.call(this, x, y, z, args);
});
return G__13551;
})()
;
G__13544 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13544__13545.call(this);
case  1 :
return G__13544__13546.call(this,x);
case  2 :
return G__13544__13547.call(this,x,y);
case  3 :
return G__13544__13548.call(this,x,y,z);
default:
return G__13544__13549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13544.cljs$lang$maxFixedArity = 3;
G__13544.cljs$lang$applyTo = G__13544__13549.cljs$lang$applyTo;
return G__13544;
})()
});
var juxt__13519 = (function() { 
var G__13558__delegate = function (f,g,h,fs){
var fs__13502 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13559 = null;
var G__13559__13560 = (function (){
return cljs.core.reduce.call(null,(function (p1__13457_SHARP_,p2__13458_SHARP_){
return cljs.core.conj.call(null,p1__13457_SHARP_,p2__13458_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13502);
});
var G__13559__13561 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13460_SHARP_,p2__13461_SHARP_){
return cljs.core.conj.call(null,p1__13460_SHARP_,p2__13461_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13502);
});
var G__13559__13562 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13463_SHARP_,p2__13464_SHARP_){
return cljs.core.conj.call(null,p1__13463_SHARP_,p2__13464_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13502);
});
var G__13559__13563 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13465_SHARP_,p2__13466_SHARP_){
return cljs.core.conj.call(null,p1__13465_SHARP_,p2__13466_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13502);
});
var G__13559__13564 = (function() { 
var G__13594__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13467_SHARP_,p2__13469_SHARP_){
return cljs.core.conj.call(null,p1__13467_SHARP_,cljs.core.apply.call(null,p2__13469_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13502);
};
var G__13594 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13594__delegate.call(this, x, y, z, args);
};
G__13594.cljs$lang$maxFixedArity = 3;
G__13594.cljs$lang$applyTo = (function (arglist__13754){
var x = cljs.core.first(arglist__13754);
var y = cljs.core.first(cljs.core.next(arglist__13754));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13754)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13754)));
return G__13594__delegate.call(this, x, y, z, args);
});
return G__13594;
})()
;
G__13559 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13559__13560.call(this);
case  1 :
return G__13559__13561.call(this,x);
case  2 :
return G__13559__13562.call(this,x,y);
case  3 :
return G__13559__13563.call(this,x,y,z);
default:
return G__13559__13564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13559.cljs$lang$maxFixedArity = 3;
G__13559.cljs$lang$applyTo = G__13559__13564.cljs$lang$applyTo;
return G__13559;
})()
};
var G__13558 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13558__delegate.call(this, f, g, h, fs);
};
G__13558.cljs$lang$maxFixedArity = 3;
G__13558.cljs$lang$applyTo = (function (arglist__13756){
var f = cljs.core.first(arglist__13756);
var g = cljs.core.first(cljs.core.next(arglist__13756));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13756)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13756)));
return G__13558__delegate.call(this, f, g, h, fs);
});
return G__13558;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13516.call(this,f);
case  2 :
return juxt__13517.call(this,f,g);
case  3 :
return juxt__13518.call(this,f,g,h);
default:
return juxt__13519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13519.cljs$lang$applyTo;
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
var dorun__13764 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13768 = cljs.core.next.call(null,coll);
coll = G__13768;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13765 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13761 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13761))
{return (n > 0);
} else
{return and__3546__auto____13761;
}
})()))
{{
var G__13771 = (n - 1);
var G__13772 = cljs.core.next.call(null,coll);
n = G__13771;
coll = G__13772;
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
return dorun__13764.call(this,n);
case  2 :
return dorun__13765.call(this,n,coll);
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
var doall__13775 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13776 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13775.call(this,n);
case  2 :
return doall__13776.call(this,n,coll);
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
var matches__13778 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13778),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13778),1)))
{return cljs.core.first.call(null,matches__13778);
} else
{return cljs.core.vec.call(null,matches__13778);
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
var matches__13779 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13779)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13779),1)))
{return cljs.core.first.call(null,matches__13779);
} else
{return cljs.core.vec.call(null,matches__13779);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13782 = cljs.core.re_find.call(null,re,s);
var match_idx__13785 = s.search(re);
var match_str__13788 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13782))?cljs.core.first.call(null,match_data__13782):match_data__13782);
var post_match__13789 = cljs.core.subs.call(null,s,(match_idx__13785 + cljs.core.count.call(null,match_str__13788)));

if(cljs.core.truth_(match_data__13782))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13782,re_seq.call(null,re,post_match__13789));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13897_SHARP_){
return print_one.call(null,p1__13897_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13908 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13908))
{var and__3546__auto____13914 = (function (){var x__445__auto____13909 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13910 = x__445__auto____13909;

if(cljs.core.truth_(and__3546__auto____13910))
{var and__3546__auto____13911 = x__445__auto____13909.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13911))
{return cljs.core.not.call(null,x__445__auto____13909.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13911;
}
} else
{return and__3546__auto____13910;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13909);
}
})();

if(cljs.core.truth_(and__3546__auto____13914))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13914;
}
} else
{return and__3546__auto____13908;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13915 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13916 = x__445__auto____13915;

if(cljs.core.truth_(and__3546__auto____13916))
{var and__3546__auto____13918 = x__445__auto____13915.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13918))
{return cljs.core.not.call(null,x__445__auto____13915.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13918;
}
} else
{return and__3546__auto____13916;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13915);
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
var first_obj__13942 = cljs.core.first.call(null,objs);
var sb__13943 = (new goog.string.StringBuffer());

var G__13944__13945 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13944__13945))
{var obj__13946 = cljs.core.first.call(null,G__13944__13945);
var G__13944__13947 = G__13944__13945;

while(true){
if(cljs.core.truth_((obj__13946 === first_obj__13942)))
{} else
{sb__13943.append(" ");
}
var G__13948__13949 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13946,opts));

if(cljs.core.truth_(G__13948__13949))
{var string__13950 = cljs.core.first.call(null,G__13948__13949);
var G__13948__13951 = G__13948__13949;

while(true){
sb__13943.append(string__13950);
var temp__3698__auto____13952 = cljs.core.next.call(null,G__13948__13951);

if(cljs.core.truth_(temp__3698__auto____13952))
{var G__13948__13953 = temp__3698__auto____13952;

{
var G__13960 = cljs.core.first.call(null,G__13948__13953);
var G__13961 = G__13948__13953;
string__13950 = G__13960;
G__13948__13951 = G__13961;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13958 = cljs.core.next.call(null,G__13944__13947);

if(cljs.core.truth_(temp__3698__auto____13958))
{var G__13944__13959 = temp__3698__auto____13958;

{
var G__13962 = cljs.core.first.call(null,G__13944__13959);
var G__13963 = G__13944__13959;
obj__13946 = G__13962;
G__13944__13947 = G__13963;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13943);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14050 = cljs.core.first.call(null,objs);

var G__14051__14052 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14051__14052))
{var obj__14054 = cljs.core.first.call(null,G__14051__14052);
var G__14051__14055 = G__14051__14052;

while(true){
if(cljs.core.truth_((obj__14054 === first_obj__14050)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14057__14058 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14054,opts));

if(cljs.core.truth_(G__14057__14058))
{var string__14060 = cljs.core.first.call(null,G__14057__14058);
var G__14057__14061 = G__14057__14058;

while(true){
cljs.core.string_print.call(null,string__14060);
var temp__3698__auto____14063 = cljs.core.next.call(null,G__14057__14061);

if(cljs.core.truth_(temp__3698__auto____14063))
{var G__14057__14069 = temp__3698__auto____14063;

{
var G__14078 = cljs.core.first.call(null,G__14057__14069);
var G__14079 = G__14057__14069;
string__14060 = G__14078;
G__14057__14061 = G__14079;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14071 = cljs.core.next.call(null,G__14051__14055);

if(cljs.core.truth_(temp__3698__auto____14071))
{var G__14051__14072 = temp__3698__auto____14071;

{
var G__14080 = cljs.core.first.call(null,G__14051__14072);
var G__14081 = G__14051__14072;
obj__14054 = G__14080;
G__14051__14055 = G__14081;
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
pr_str.cljs$lang$applyTo = (function (arglist__14090){
var objs = cljs.core.seq( arglist__14090 );;
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
pr.cljs$lang$applyTo = (function (arglist__14092){
var objs = cljs.core.seq( arglist__14092 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14095){
var objs = cljs.core.seq( arglist__14095 );;
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
println.cljs$lang$applyTo = (function (arglist__14097){
var objs = cljs.core.seq( arglist__14097 );;
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
prn.cljs$lang$applyTo = (function (arglist__14102){
var objs = cljs.core.seq( arglist__14102 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14134 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14134,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14152 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14152))
{var nspc__14153 = temp__3698__auto____14152;

return cljs.core.str.call(null,nspc__14153,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14154 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14154))
{var nspc__14155 = temp__3698__auto____14154;

return cljs.core.str.call(null,nspc__14155,"/");
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
var pr_pair__14157 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14157,"{",", ","}",opts,coll);
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
var this__14270 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14304 = this;
var G__14305__14306 = cljs.core.seq.call(null,this__14304.watches);

if(cljs.core.truth_(G__14305__14306))
{var G__14308__14311 = cljs.core.first.call(null,G__14305__14306);
var vec__14309__14312 = G__14308__14311;
var key__14313 = cljs.core.nth.call(null,vec__14309__14312,0,null);
var f__14314 = cljs.core.nth.call(null,vec__14309__14312,1,null);
var G__14305__14315 = G__14305__14306;

var G__14308__14316 = G__14308__14311;
var G__14305__14317 = G__14305__14315;

while(true){
var vec__14318__14319 = G__14308__14316;
var key__14320 = cljs.core.nth.call(null,vec__14318__14319,0,null);
var f__14321 = cljs.core.nth.call(null,vec__14318__14319,1,null);
var G__14305__14322 = G__14305__14317;

f__14321.call(null,key__14320,this$,oldval,newval);
var temp__3698__auto____14323 = cljs.core.next.call(null,G__14305__14322);

if(cljs.core.truth_(temp__3698__auto____14323))
{var G__14305__14324 = temp__3698__auto____14323;

{
var G__14331 = cljs.core.first.call(null,G__14305__14324);
var G__14332 = G__14305__14324;
G__14308__14316 = G__14331;
G__14305__14317 = G__14332;
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
var this__14325 = this;
return this$.watches = cljs.core.assoc.call(null,this__14325.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14326 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14326.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14327 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14327.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14328 = this;
return this__14328.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14329 = this;
return this__14329.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14330 = this;
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
var atom__14339 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14340 = (function() { 
var G__14342__delegate = function (x,p__14333){
var map__14334__14335 = p__14333;
var map__14334__14336 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14334__14335))?cljs.core.apply.call(null,cljs.core.hash_map,map__14334__14335):map__14334__14335);
var validator__14337 = cljs.core.get.call(null,map__14334__14336,"﷐'validator");
var meta__14338 = cljs.core.get.call(null,map__14334__14336,"﷐'meta");

return (new cljs.core.Atom(x,meta__14338,validator__14337,null));
};
var G__14342 = function (x,var_args){
var p__14333 = null;
if (goog.isDef(var_args)) {
  p__14333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14342__delegate.call(this, x, p__14333);
};
G__14342.cljs$lang$maxFixedArity = 1;
G__14342.cljs$lang$applyTo = (function (arglist__14343){
var x = cljs.core.first(arglist__14343);
var p__14333 = cljs.core.rest(arglist__14343);
return G__14342__delegate.call(this, x, p__14333);
});
return G__14342;
})()
;
atom = function(x,var_args){
var p__14333 = var_args;
switch(arguments.length){
case  1 :
return atom__14339.call(this,x);
default:
return atom__14340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14340.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14344 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14344))
{var validate__14345 = temp__3698__auto____14344;

if(cljs.core.truth_(validate__14345.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14372 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14372,new_value);
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
var swap_BANG___14388 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14389 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14390 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14392 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14394 = (function() { 
var G__14396__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14396 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14396__delegate.call(this, a, f, x, y, z, more);
};
G__14396.cljs$lang$maxFixedArity = 5;
G__14396.cljs$lang$applyTo = (function (arglist__14397){
var a = cljs.core.first(arglist__14397);
var f = cljs.core.first(cljs.core.next(arglist__14397));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14397)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14397))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14397)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14397)))));
return G__14396__delegate.call(this, a, f, x, y, z, more);
});
return G__14396;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14388.call(this,a,f);
case  3 :
return swap_BANG___14389.call(this,a,f,x);
case  4 :
return swap_BANG___14390.call(this,a,f,x,y);
case  5 :
return swap_BANG___14392.call(this,a,f,x,y,z);
default:
return swap_BANG___14394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14394.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14425){
var iref = cljs.core.first(arglist__14425);
var f = cljs.core.first(cljs.core.next(arglist__14425));
var args = cljs.core.rest(cljs.core.next(arglist__14425));
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
var gensym__14506 = (function (){
return gensym.call(null,"G__");
});
var gensym__14507 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14506.call(this);
case  1 :
return gensym__14507.call(this,prefix_string);
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
var this__14511 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14511.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14512 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14512.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14512.state,this__14512.f);
}
return cljs.core.deref.call(null,this__14512.state);
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
delay.cljs$lang$applyTo = (function (arglist__14514){
var body = cljs.core.seq( arglist__14514 );;
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
var map__14527__14528 = options;
var map__14527__14530 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14527__14528))?cljs.core.apply.call(null,cljs.core.hash_map,map__14527__14528):map__14527__14528);
var keywordize_keys__14531 = cljs.core.get.call(null,map__14527__14530,"﷐'keywordize-keys");
var keyfn__14532 = (cljs.core.truth_(keywordize_keys__14531)?cljs.core.keyword:cljs.core.str);
var f__14606 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14604 = (function iter__14598(s__14599){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14599__14600 = s__14599;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14599__14600)))
{var k__14601 = cljs.core.first.call(null,s__14599__14600);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14532.call(null,k__14601),thisfn.call(null,(x[k__14601]))]),iter__14598.call(null,cljs.core.rest.call(null,s__14599__14600)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14604.call(null,cljs.core.js_keys.call(null,x));
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

return f__14606.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14613){
var x = cljs.core.first(arglist__14613);
var options = cljs.core.rest(arglist__14613);
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
var mem__14619 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14630__delegate = function (args){
var temp__3695__auto____14622 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14619),args);

if(cljs.core.truth_(temp__3695__auto____14622))
{var v__14623 = temp__3695__auto____14622;

return v__14623;
} else
{var ret__14625 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14619,cljs.core.assoc,args,ret__14625);
return ret__14625;
}
};
var G__14630 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14630__delegate.call(this, args);
};
G__14630.cljs$lang$maxFixedArity = 0;
G__14630.cljs$lang$applyTo = (function (arglist__14632){
var args = cljs.core.seq( arglist__14632 );;
return G__14630__delegate.call(this, args);
});
return G__14630;
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
var trampoline__14644 = (function (f){
while(true){
var ret__14635 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14635)))
{{
var G__14648 = ret__14635;
f = G__14648;
continue;
}
} else
{return ret__14635;
}
break;
}
});
var trampoline__14645 = (function() { 
var G__14650__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14650 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14650__delegate.call(this, f, args);
};
G__14650.cljs$lang$maxFixedArity = 1;
G__14650.cljs$lang$applyTo = (function (arglist__14653){
var f = cljs.core.first(arglist__14653);
var args = cljs.core.rest(arglist__14653);
return G__14650__delegate.call(this, f, args);
});
return G__14650;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14644.call(this,f);
default:
return trampoline__14645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14645.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14659 = (function (){
return rand.call(null,1);
});
var rand__14660 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14659.call(this);
case  1 :
return rand__14660.call(this,n);
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
var k__14668 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14668,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14668,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14681 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14682 = (function (h,child,parent){
var or__3548__auto____14669 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14669))
{return or__3548__auto____14669;
} else
{var or__3548__auto____14670 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14670))
{return or__3548__auto____14670;
} else
{var and__3546__auto____14671 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14671))
{var and__3546__auto____14673 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14673))
{var and__3546__auto____14675 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14675))
{var ret__14677 = true;
var i__14678 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14679 = cljs.core.not.call(null,ret__14677);

if(cljs.core.truth_(or__3548__auto____14679))
{return or__3548__auto____14679;
} else
{return cljs.core._EQ_.call(null,i__14678,cljs.core.count.call(null,parent));
}
})()))
{return ret__14677;
} else
{{
var G__14690 = isa_QMARK_.call(null,h,child.call(null,i__14678),parent.call(null,i__14678));
var G__14691 = (i__14678 + 1);
ret__14677 = G__14690;
i__14678 = G__14691;
continue;
}
}
break;
}
} else
{return and__3546__auto____14675;
}
} else
{return and__3546__auto____14673;
}
} else
{return and__3546__auto____14671;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14681.call(this,h,child);
case  3 :
return isa_QMARK___14682.call(this,h,child,parent);
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
var parents__14710 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14711 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14710.call(this,h);
case  2 :
return parents__14711.call(this,h,tag);
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
var ancestors__14719 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14720 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14719.call(this,h);
case  2 :
return ancestors__14720.call(this,h,tag);
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
var descendants__14732 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14733 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14732.call(this,h);
case  2 :
return descendants__14733.call(this,h,tag);
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
var derive__14850 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14851 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14749 = "﷐'parents".call(null,h);
var td__14750 = "﷐'descendants".call(null,h);
var ta__14751 = "﷐'ancestors".call(null,h);
var tf__14784 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14791 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14749.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14751.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14751.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14749,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14784.call(null,"﷐'ancestors".call(null,h),tag,td__14750,parent,ta__14751),"﷐'descendants":tf__14784.call(null,"﷐'descendants".call(null,h),parent,ta__14751,tag,td__14750)});
})());

if(cljs.core.truth_(or__3548__auto____14791))
{return or__3548__auto____14791;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14850.call(this,h,tag);
case  3 :
return derive__14851.call(this,h,tag,parent);
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
var underive__14885 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14886 = (function (h,tag,parent){
var parentMap__14872 = "﷐'parents".call(null,h);
var childsParents__14874 = (cljs.core.truth_(parentMap__14872.call(null,tag))?cljs.core.disj.call(null,parentMap__14872.call(null,tag),parent):cljs.core.set([]));
var newParents__14875 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14874))?cljs.core.assoc.call(null,parentMap__14872,tag,childsParents__14874):cljs.core.dissoc.call(null,parentMap__14872,tag));
var deriv_seq__14884 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14735_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14735_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14735_SHARP_),cljs.core.second.call(null,p1__14735_SHARP_)));
}),cljs.core.seq.call(null,newParents__14875)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14872.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14736_SHARP_,p2__14737_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14736_SHARP_,p2__14737_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14884));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14885.call(this,h,tag);
case  3 :
return underive__14886.call(this,h,tag,parent);
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
var xprefs__14918 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14921 = (cljs.core.truth_((function (){var and__3546__auto____14920 = xprefs__14918;

if(cljs.core.truth_(and__3546__auto____14920))
{return xprefs__14918.call(null,y);
} else
{return and__3546__auto____14920;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14921))
{return or__3548__auto____14921;
} else
{var or__3548__auto____14926 = (function (){var ps__14923 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14923) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14923),prefer_table)))
{} else
{}
{
var G__14943 = cljs.core.rest.call(null,ps__14923);
ps__14923 = G__14943;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14926))
{return or__3548__auto____14926;
} else
{var or__3548__auto____14929 = (function (){var ps__14928 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14928) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14928),y,prefer_table)))
{} else
{}
{
var G__14944 = cljs.core.rest.call(null,ps__14928);
ps__14928 = G__14944;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14929))
{return or__3548__auto____14929;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14950 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14950))
{return or__3548__auto____14950;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14986 = cljs.core.reduce.call(null,(function (be,p__14976){
var vec__14977__14978 = p__14976;
var k__14979 = cljs.core.nth.call(null,vec__14977__14978,0,null);
var ___14980 = cljs.core.nth.call(null,vec__14977__14978,1,null);
var e__14981 = vec__14977__14978;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14979)))
{var be2__14985 = (cljs.core.truth_((function (){var or__3548__auto____14982 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14982))
{return or__3548__auto____14982;
} else
{return cljs.core.dominates.call(null,k__14979,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14981:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14985),k__14979,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14979," and ",cljs.core.first.call(null,be2__14985),", and neither is preferred")));
}
return be2__14985;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14986))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14986));
return cljs.core.second.call(null,best_entry__14986);
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
if(cljs.core.truth_((function (){var and__3546__auto____15006 = mf;

if(cljs.core.truth_(and__3546__auto____15006))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15006;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15007 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15007))
{return or__3548__auto____15007;
} else
{var or__3548__auto____15008 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15008))
{return or__3548__auto____15008;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15009 = mf;

if(cljs.core.truth_(and__3546__auto____15009))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15009;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15010 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15010))
{return or__3548__auto____15010;
} else
{var or__3548__auto____15011 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15011))
{return or__3548__auto____15011;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15012 = mf;

if(cljs.core.truth_(and__3546__auto____15012))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15012;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15013 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15013))
{return or__3548__auto____15013;
} else
{var or__3548__auto____15014 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15014))
{return or__3548__auto____15014;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15015 = mf;

if(cljs.core.truth_(and__3546__auto____15015))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15015;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15016 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15016))
{return or__3548__auto____15016;
} else
{var or__3548__auto____15017 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15017))
{return or__3548__auto____15017;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15018 = mf;

if(cljs.core.truth_(and__3546__auto____15018))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15018;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15081 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15081))
{return or__3548__auto____15081;
} else
{var or__3548__auto____15084 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15084))
{return or__3548__auto____15084;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15088 = mf;

if(cljs.core.truth_(and__3546__auto____15088))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15088;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15089 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15089))
{return or__3548__auto____15089;
} else
{var or__3548__auto____15090 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15090))
{return or__3548__auto____15090;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15091 = mf;

if(cljs.core.truth_(and__3546__auto____15091))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15091;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15094 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{var or__3548__auto____15095 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15095))
{return or__3548__auto____15095;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15096 = mf;

if(cljs.core.truth_(and__3546__auto____15096))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15096;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15097 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15097))
{return or__3548__auto____15097;
} else
{var or__3548__auto____15098 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15098))
{return or__3548__auto____15098;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15100 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15101 = cljs.core._get_method.call(null,mf,dispatch_val__15100);

if(cljs.core.truth_(target_fn__15101))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15100)));
}
return cljs.core.apply.call(null,target_fn__15101,args);
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
var this__15116 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15118 = this;
cljs.core.swap_BANG_.call(null,this__15118.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15118.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15118.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15118.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15123 = this;
cljs.core.swap_BANG_.call(null,this__15123.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15123.method_cache,this__15123.method_table,this__15123.cached_hierarchy,this__15123.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15128 = this;
cljs.core.swap_BANG_.call(null,this__15128.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15128.method_cache,this__15128.method_table,this__15128.cached_hierarchy,this__15128.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15131 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15131.cached_hierarchy),cljs.core.deref.call(null,this__15131.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15131.method_cache,this__15131.method_table,this__15131.cached_hierarchy,this__15131.hierarchy);
}
var temp__3695__auto____15135 = cljs.core.deref.call(null,this__15131.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15135))
{var target_fn__15136 = temp__3695__auto____15135;

return target_fn__15136;
} else
{var temp__3695__auto____15137 = cljs.core.find_and_cache_best_method.call(null,this__15131.name,dispatch_val,this__15131.hierarchy,this__15131.method_table,this__15131.prefer_table,this__15131.method_cache,this__15131.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15137))
{var target_fn__15138 = temp__3695__auto____15137;

return target_fn__15138;
} else
{return cljs.core.deref.call(null,this__15131.method_table).call(null,this__15131.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15139 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15139.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15139.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15139.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15139.method_cache,this__15139.method_table,this__15139.cached_hierarchy,this__15139.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15249 = this;
return cljs.core.deref.call(null,this__15249.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15250 = this;
return cljs.core.deref.call(null,this__15250.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15251 = this;
return cljs.core.do_dispatch.call(null,mf,this__15251.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15263__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15263 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15263__delegate.call(this, _, args);
};
G__15263.cljs$lang$maxFixedArity = 1;
G__15263.cljs$lang$applyTo = (function (arglist__15264){
var _ = cljs.core.first(arglist__15264);
var args = cljs.core.rest(arglist__15264);
return G__15263__delegate.call(this, _, args);
});
return G__15263;
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
